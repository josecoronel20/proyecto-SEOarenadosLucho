/**
 * 01 - AUDITORÍA DE CUENTA (solo lectura)
 * Arenados Lucho — radiografía inicial de una cuenta abandonada.
 * Correr con "Vista previa" y copiar el log completo al chat de Claude.
 * Contexto: contexto/marketing/05-google-ads-operacion.md
 *
 * Nota: GAQL no acepta 'LAST_90_DAYS' en DURING; se usa un rango de fechas
 * (BETWEEN) calculado desde CONFIG.DIAS.
 */

var CONFIG = {
  // Opcional: si ponés un email, además del log te llega el reporte por correo.
  EMAIL: '',
  DIAS: 365 // ventana para métricas históricas (cuenta abandonada → mirar amplio)
};

function main() {
  var RANGO = rangoFechas(CONFIG.DIAS);
  var out = [];
  out.push('=== AUDITORÍA GOOGLE ADS — ' + AdsApp.currentAccount().getName() +
           ' (' + AdsApp.currentAccount().getCustomerId() + ') ===');
  out.push('Moneda: ' + AdsApp.currentAccount().getCurrencyCode() +
           ' | Zona horaria: ' + AdsApp.currentAccount().getTimeZone());
  out.push('Ventana de métricas: últimos ' + CONFIG.DIAS + ' días (' + RANGO + ')');
  out.push('');

  // ---- 1. Campañas ----
  out.push('--- CAMPAÑAS (todas, incl. pausadas) ---');
  out.push('campaña | estado | tipo | presupuesto/día | costo | clics | impr | conv | valorConv');
  var rows = AdsApp.report(
    'SELECT campaign.name, campaign.status, campaign.advertising_channel_type, ' +
    'campaign_budget.amount_micros, metrics.cost_micros, metrics.clicks, ' +
    'metrics.impressions, metrics.conversions, metrics.conversions_value ' +
    'FROM campaign WHERE segments.date ' + RANGO
  ).rows();
  while (rows.hasNext()) {
    var r = rows.next();
    out.push([r['campaign.name'], r['campaign.status'], r['campaign.advertising_channel_type'],
      micros(r['campaign_budget.amount_micros']), micros(r['metrics.cost_micros']),
      r['metrics.clicks'], r['metrics.impressions'], r['metrics.conversions'],
      r['metrics.conversions_value']].join(' | '));
  }
  out.push('');

  // ---- 2. Keywords con más gasto ----
  out.push('--- TOP KEYWORDS POR COSTO (activas o pausadas) ---');
  out.push('campaña | grupo | keyword | concordancia | estado | QS | costo | clics | conv');
  var kws = AdsApp.report(
    'SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ' +
    'ad_group_criterion.keyword.match_type, ad_group_criterion.status, ' +
    'ad_group_criterion.quality_info.quality_score, metrics.cost_micros, ' +
    'metrics.clicks, metrics.conversions ' +
    'FROM keyword_view WHERE segments.date ' + RANGO + ' ' +
    'ORDER BY metrics.cost_micros DESC LIMIT 100'
  ).rows();
  while (kws.hasNext()) {
    var k = kws.next();
    out.push([k['campaign.name'], k['ad_group.name'], k['ad_group_criterion.keyword.text'],
      k['ad_group_criterion.keyword.match_type'], k['ad_group_criterion.status'],
      k['ad_group_criterion.quality_info.quality_score'], micros(k['metrics.cost_micros']),
      k['metrics.clicks'], k['metrics.conversions']].join(' | '));
  }
  out.push('');

  // ---- 3. Acciones de conversión ----
  out.push('--- ACCIONES DE CONVERSIÓN ---');
  try {
    var convs = AdsApp.report(
      'SELECT conversion_action.name, conversion_action.status, ' +
      'conversion_action.type, conversion_action.category, ' +
      'conversion_action.primary_for_goal ' +
      'FROM conversion_action'
    ).rows();
    while (convs.hasNext()) {
      var c = convs.next();
      out.push([c['conversion_action.name'], c['conversion_action.status'],
        c['conversion_action.type'], c['conversion_action.category'],
        'primaria=' + c['conversion_action.primary_for_goal']].join(' | '));
    }
  } catch (e) {
    out.push('No se pudo leer conversion_action: ' + e);
  }
  out.push('');

  // ---- 4. URLs finales en uso ----
  out.push('--- URLS FINALES (anuncios habilitados o pausados) ---');
  var urls = {};
  var ads = AdsApp.ads().withCondition('ad_group_ad.status IN ("ENABLED","PAUSED")').get();
  while (ads.hasNext()) {
    var u = ads.next().urls().getFinalUrl();
    if (u) urls[u] = (urls[u] || 0) + 1;
  }
  Object.keys(urls).forEach(function (u) { out.push(u + '  (x' + urls[u] + ' anuncios)'); });

  var texto = out.join('\n');
  Logger.log(texto);
  if (CONFIG.EMAIL) {
    MailApp.sendEmail(CONFIG.EMAIL, '[Ads] Auditoría inicial — Arenados Lucho', texto);
  }
}

// GAQL no soporta LAST_90_DAYS; construimos un rango BETWEEN 'desde' AND 'hoy'.
function rangoFechas(dias) {
  var tz = AdsApp.currentAccount().getTimeZone();
  var hoy = new Date();
  var desde = new Date(hoy.getTime() - dias * 24 * 60 * 60 * 1000);
  var f = function (d) { return Utilities.formatDate(d, tz, 'yyyy-MM-dd'); };
  return "BETWEEN '" + f(desde) + "' AND '" + f(hoy) + "'";
}

function micros(v) {
  var n = Number(v || 0) / 1000000;
  return Math.round(n * 100) / 100;
}

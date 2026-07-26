/**
 * 02 - REPORTE SEMANAL (solo lectura)
 * Arenados Lucho — rendimiento de los últimos 7 días + alertas.
 * Programar: semanal, lunes a la mañana. El email resultante se pega en Claude.
 * Contexto: contexto/marketing/06-google-ads-scripts.md
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',   // destinatario del reporte
  UMBRAL_GASTO_SIN_CONV: 15000,         // ARS gastados sin conversión que disparan alerta
  UMBRAL_QS_BAJO: 4                     // Quality Score considerado bajo
};

function main() {
  var alertas = [];
  var lineas = [];

  // ---- Campañas, últimos 7 días ----
  lineas.push('CAMPAÑAS (LAST_7_DAYS)');
  lineas.push('campaña;estado;costo;clics;impr;CTR%;conv;CPA');
  var rows = AdsApp.report(
    'SELECT campaign.name, campaign.status, metrics.cost_micros, metrics.clicks, ' +
    'metrics.impressions, metrics.conversions ' +
    'FROM campaign WHERE segments.date DURING LAST_7_DAYS ' +
    'AND metrics.impressions > 0'
  ).rows();
  while (rows.hasNext()) {
    var r = rows.next();
    var costo = micros(r['metrics.cost_micros']);
    var clics = Number(r['metrics.clicks']);
    var impr = Number(r['metrics.impressions']);
    var conv = Number(r['metrics.conversions']);
    var ctr = impr ? Math.round(clics / impr * 10000) / 100 : 0;
    var cpa = conv ? Math.round(costo / conv) : '-';
    lineas.push([r['campaign.name'], r['campaign.status'], costo, clics, impr, ctr, conv, cpa].join(';'));
    if (conv === 0 && costo >= CONFIG.UMBRAL_GASTO_SIN_CONV) {
      alertas.push('⚠ "' + r['campaign.name'] + '" gastó ' + costo + ' sin conversiones en 7 días.');
    }
  }
  lineas.push('');

  // ---- Keywords, últimos 7 días ----
  lineas.push('KEYWORDS (LAST_7_DAYS, con impresiones)');
  lineas.push('campaña;grupo;keyword;concordancia;QS;costo;clics;conv');
  var kws = AdsApp.report(
    'SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ' +
    'ad_group_criterion.keyword.match_type, ad_group_criterion.quality_info.quality_score, ' +
    'metrics.cost_micros, metrics.clicks, metrics.conversions ' +
    'FROM keyword_view WHERE segments.date DURING LAST_7_DAYS ' +
    'AND metrics.impressions > 0 ORDER BY metrics.cost_micros DESC LIMIT 200'
  ).rows();
  while (kws.hasNext()) {
    var k = kws.next();
    var qs = k['ad_group_criterion.quality_info.quality_score'];
    lineas.push([k['campaign.name'], k['ad_group.name'], k['ad_group_criterion.keyword.text'],
      k['ad_group_criterion.keyword.match_type'], qs, micros(k['metrics.cost_micros']),
      k['metrics.clicks'], k['metrics.conversions']].join(';'));
    if (qs && Number(qs) > 0 && Number(qs) <= CONFIG.UMBRAL_QS_BAJO) {
      alertas.push('⚠ QS ' + qs + ' en "' + k['ad_group_criterion.keyword.text'] +
                   '" (' + k['ad_group.name'] + ') — revisar message match con la landing.');
    }
  }

  // ---- Envío ----
  var cuerpo = (alertas.length ? 'ALERTAS:\n' + alertas.join('\n') : 'Sin alertas esta semana.') +
    '\n\nPegá el CSV adjunto (o este cuerpo) en Claude y pedí el análisis semanal ' +
    'según contexto/marketing/05-google-ads-operacion.md.\n\n' + lineas.join('\n');

  Logger.log(cuerpo);
  if (CONFIG.EMAIL) {
    MailApp.sendEmail({
      to: CONFIG.EMAIL,
      subject: '[Ads] Reporte semanal Arenados Lucho' + (alertas.length ? ' — ' + alertas.length + ' alertas' : ''),
      body: cuerpo,
      attachments: [Utilities.newBlob(lineas.join('\n'), 'text/csv', 'reporte-semanal.csv')]
    });
  }
}

function micros(v) {
  return Math.round(Number(v || 0) / 1000000 * 100) / 100;
}

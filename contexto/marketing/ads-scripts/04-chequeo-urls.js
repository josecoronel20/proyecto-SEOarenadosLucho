/**
 * 04 - CHEQUEO DE URLS FINALES (solo lectura)
 * Arenados Lucho — verifica que toda URL final de anuncios y keywords responda bien.
 * CRÍTICO durante la migración Framer → Vercel (contexto/marketing/01-migracion-y-dominio.md):
 * programar DIARIO durante la migración, luego semanal.
 * Alerta por email solo si encuentra URLs rotas o con redirección sospechosa.
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',
  DOMINIO_ESPERADO: 'www.arenadoslucho.com' // toda URL final debería vivir acá
};

function main() {
  var urls = {};

  // URLs finales de anuncios habilitados
  var ads = AdsApp.ads()
    .withCondition('ad_group_ad.status = "ENABLED"')
    .withCondition('campaign.status = "ENABLED"').get();
  while (ads.hasNext()) {
    var u = ads.next().urls().getFinalUrl();
    if (u) urls[u] = true;
  }

  // URLs finales a nivel keyword (si las hay)
  var kws = AdsApp.keywords()
    .withCondition('ad_group_criterion.status = "ENABLED"')
    .withCondition('campaign.status = "ENABLED"').get();
  while (kws.hasNext()) {
    var ku = kws.next().urls().getFinalUrl();
    if (ku) urls[ku] = true;
  }

  var problemas = [];
  var ok = 0;
  Object.keys(urls).forEach(function (url) {
    // Aviso si el anuncio apunta fuera del dominio esperado (ej. viejo Framer o .com.ar)
    if (url.indexOf(CONFIG.DOMINIO_ESPERADO) === -1) {
      problemas.push('DOMINIO INESPERADO: ' + url);
    }
    try {
      var resp = UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        followRedirects: true,
        validateHttpsCertificates: true
      });
      var code = resp.getResponseCode();
      if (code >= 400) {
        problemas.push('HTTP ' + code + ': ' + url);
      } else {
        ok++;
      }
    } catch (e) {
      problemas.push('ERROR DE RED (' + e + '): ' + url);
    }
    Utilities.sleep(300); // no castigar al servidor
  });

  var resumen = 'Chequeo de URLs finales — ' + Object.keys(urls).length + ' URLs únicas, ' +
    ok + ' OK, ' + problemas.length + ' con problemas.';
  Logger.log(resumen);
  if (problemas.length) Logger.log(problemas.join('\n'));

  if (problemas.length && CONFIG.EMAIL) {
    MailApp.sendEmail({
      to: CONFIG.EMAIL,
      subject: '[Ads] ⚠ URLs finales con problemas — Arenados Lucho',
      body: resumen + '\n\n' + problemas.join('\n') +
        '\n\nAcción: pausar los anuncios afectados o corregir la URL final. ' +
        'Ver contexto/marketing/01-migracion-y-dominio.md y contexto/08-google-ads-y-landings.md.'
    });
  }
}

/**
 * 03 - ANÁLISIS N-GRAM DE TÉRMINOS DE BÚSQUEDA (solo lectura)
 * Arenados Lucho — detecta en qué palabras se va la plata sin convertir.
 * El output se pega en Claude junto con contexto/marketing/03-keywords-maestro.md
 * para decidir NEGATIVAS nuevas. No agrega negativas solo.
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',
  PERIODO: 'LAST_30_DAYS',
  TOP: 40 // filas por tabla
};

function main() {
  var uni = {}, bi = {};
  var totalTerminos = 0;

  var rows = AdsApp.report(
    'SELECT search_term_view.search_term, metrics.cost_micros, metrics.clicks, ' +
    'metrics.impressions, metrics.conversions ' +
    'FROM search_term_view WHERE segments.date DURING ' + CONFIG.PERIODO
  ).rows();

  while (rows.hasNext()) {
    var r = rows.next();
    totalTerminos++;
    var costo = Number(r['metrics.cost_micros']) / 1000000;
    var clics = Number(r['metrics.clicks']);
    var impr = Number(r['metrics.impressions']);
    var conv = Number(r['metrics.conversions']);
    var palabras = String(r['search_term_view.search_term'])
      .toLowerCase().replace(/[^a-záéíóúñü0-9\s]/g, ' ')
      .split(/\s+/).filter(function (w) { return w.length > 1; });

    palabras.forEach(function (w) { acum(uni, w, costo, clics, impr, conv); });
    for (var i = 0; i < palabras.length - 1; i++) {
      acum(bi, palabras[i] + ' ' + palabras[i + 1], costo, clics, impr, conv);
    }
  }

  var out = [];
  out.push('N-GRAM TÉRMINOS DE BÚSQUEDA — ' + CONFIG.PERIODO + ' — ' + totalTerminos + ' términos analizados');
  out.push('');
  out.push(tabla('1-GRAM (palabras sueltas) por costo, sin conversiones primero', uni));
  out.push('');
  out.push(tabla('2-GRAM (pares de palabras) por costo, sin conversiones primero', bi));
  out.push('');
  out.push('Cómo leerlo: palabras con costo alto, clics y 0 conversiones = candidatas a negativa.');
  out.push('Validar contra contexto/marketing/03-keywords-maestro.md antes de bloquear.');

  var texto = out.join('\n');
  Logger.log(texto);
  if (CONFIG.EMAIL) {
    MailApp.sendEmail({
      to: CONFIG.EMAIL,
      subject: '[Ads] N-gram términos de búsqueda — Arenados Lucho',
      body: texto
    });
  }
}

function acum(mapa, clave, costo, clics, impr, conv) {
  if (!mapa[clave]) mapa[clave] = { costo: 0, clics: 0, impr: 0, conv: 0 };
  mapa[clave].costo += costo;
  mapa[clave].clics += clics;
  mapa[clave].impr += impr;
  mapa[clave].conv += conv;
}

function tabla(titulo, mapa) {
  var filas = Object.keys(mapa).map(function (k) {
    var d = mapa[k];
    return { k: k, costo: d.costo, clics: d.clics, impr: d.impr, conv: d.conv };
  });
  filas.sort(function (a, b) {
    if ((a.conv === 0) !== (b.conv === 0)) return a.conv === 0 ? -1 : 1; // sin conv primero
    return b.costo - a.costo;
  });
  var out = [titulo, 'ngram;costo;clics;impr;conv'];
  filas.slice(0, CONFIG.TOP).forEach(function (f) {
    out.push([f.k, Math.round(f.costo * 100) / 100, f.clics, f.impr, f.conv].join(';'));
  });
  return out.join('\n');
}

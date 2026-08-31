/**
 * 03 - TÉRMINOS DE BÚSQUEDA + ANÁLISIS N-GRAM (solo lectura)
 *
 * ⚠️ 29/08/2026: el script leía todas las búsquedas completas y las TIRABA —
 * solo emitía palabras sueltas y pares. Con eso se ve que la palabra "restaurar"
 * gastó plata, pero nunca la frase que la persona escribió, que es lo que hace
 * falta para escribir una negativa precisa. Ahora sale primero la lista de
 * términos completos y después el n-gram.
 * Arenados Lucho — detecta en qué palabras se va la plata sin convertir.
 * El output se pega en Claude junto con contexto/marketing/03-keywords-maestro.md
 * para decidir NEGATIVAS nuevas. No agrega negativas solo.
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',
  PERIODO: 'LAST_30_DAYS',
  TOP: 40,           // filas por tabla del n-gram
  TOP_TERMINOS: 50,  // búsquedas que NO convirtieron
  TOP_CONVIERTEN: 25 // búsquedas que SÍ convirtieron
};

function main() {
  var uni = {}, bi = {}, completos = {};
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
    var termino = String(r['search_term_view.search_term']);
    acum(completos, termino, costo, clics, impr, conv);

    var palabras = String(r['search_term_view.search_term'])
      .toLowerCase().replace(/[^a-záéíóúñü0-9\s]/g, ' ')
      .split(/\s+/).filter(function (w) { return w.length > 1; });

    palabras.forEach(function (w) { acum(uni, w, costo, clics, impr, conv); });
    for (var i = 0; i < palabras.length - 1; i++) {
      acum(bi, palabras[i] + ' ' + palabras[i + 1], costo, clics, impr, conv);
    }
  }

  var out = [];
  out.push('TÉRMINOS DE BÚSQUEDA — ' + CONFIG.PERIODO + ' — ' + totalTerminos + ' términos');
  out.push('');
  out.push(tablaFiltrada('BÚSQUEDAS QUE NO CONVIRTIERON — por costo', completos, false, CONFIG.TOP_TERMINOS));
  out.push('');
  out.push(tablaFiltrada('BÚSQUEDAS QUE SÍ CONVIRTIERON — por costo', completos, true, CONFIG.TOP_CONVIERTEN));
  out.push('');
  out.push('⚠️ Google OCULTA los términos que buscó muy poca gente. Si la suma de estas');
  out.push('   tablas es bastante menor que el gasto real, la diferencia está ahí.');
  out.push('');
  out.push('--- Lo de abajo es el mismo dato picado en palabras, para ver patrones ---');
  out.push('');
  out.push(tabla('1-GRAM (palabras sueltas) por costo, sin conversiones primero', uni));
  out.push('');
  out.push(tabla('2-GRAM (pares de palabras) por costo, sin conversiones primero', bi));
  out.push('');
  out.push('Cómo leerlo: mirar PRIMERO las búsquedas completas — ahí se decide qué bloquear.');
  out.push('El n-gram sirve para detectar patrones que se repiten en varias búsquedas.');
  out.push('⚠️ Las negativas de Google NO reconocen variantes: cargar singular, plural y acento.');
  out.push('Validar contra contexto/marketing/03-keywords-maestro.md antes de bloquear.');

  var texto = out.join('\n');
  Logger.log(texto);
  if (CONFIG.EMAIL) {
    MailApp.sendEmail({
      to: CONFIG.EMAIL,
      subject: '[Ads] Términos de búsqueda — Arenados Lucho',
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

/**
 * Una tabla con solo las que convirtieron, o solo las que no.
 *
 * ⚠️ Existe porque antes había una sola tabla ordenada con las de cero
 * conversiones primero y cortada en 60 filas: las 60 se llenaban con las que no
 * convirtieron y las buenas nunca se veían. Detectado el 29/08/2026.
 */
function tablaFiltrada(titulo, mapa, conConv, cuantas) {
  var sub = {};
  Object.keys(mapa).forEach(function (k) {
    var tuvo = mapa[k].conv > 0;
    if (tuvo === conConv) sub[k] = mapa[k];
  });
  if (!Object.keys(sub).length) return titulo + '\n(ninguna)';
  return tabla(titulo, sub, cuantas);
}

function tabla(titulo, mapa, cuantas) {
  var filas = Object.keys(mapa).map(function (k) {
    var d = mapa[k];
    return { k: k, costo: d.costo, clics: d.clics, impr: d.impr, conv: d.conv };
  });
  filas.sort(function (a, b) {
    if ((a.conv === 0) !== (b.conv === 0)) return a.conv === 0 ? -1 : 1; // sin conv primero
    return b.costo - a.costo;
  });
  var out = [titulo, 'termino;costo;clics;impr;conv'];
  filas.slice(0, cuantas || CONFIG.TOP).forEach(function (f) {
    out.push([f.k, Math.round(f.costo * 100) / 100, f.clics, f.impr, f.conv].join(';'));
  });
  return out.join('\n');
}

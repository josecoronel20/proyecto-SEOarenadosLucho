/**
 * 05 - AUTOPILOT (APLICA CAMBIOS SOLO — con topes duros)
 * Arenados Lucho — mantenimiento autónomo de la cuenta.
 * Autorizado por el dueño (jul 2026): agrega negativas y pausa keywords que
 * queman plata, dentro de límites estrictos. CADA cambio se informa por email.
 * NUNCA: crea campañas, sube presupuestos ni toca anuncios.
 * Programar: semanal (lunes 07:00). Contexto: contexto/marketing/06-google-ads-scripts.md
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',
  MODO_PRUEBA: false,        // true = solo simula y avisa, no aplica nada

  // --- Negativas automáticas ---
  // 1) Lista negra estructural (frase, a nivel campaña): rubros que jamás queremos.
  // Actualizada 26/07/2026: incluye términos TÉCNICOS (no hacemos arenado
  // certificado/medido ni granallado — decisión del dueño, ver 03-keywords-maestro.md).
  // ⚠️ NUNCA agregar acá: pileta/piscina (es servicio core), arenadora sola, zona norte.
  LISTA_NEGRA: ['curso', 'empleo', 'trabajo de', 'alquiler', 'venta de arenadora',
    'comprar arenadora', 'arena para', 'compresor', 'segunda mano', 'usada',
    'como hacer', 'casero', 'tutorial',
    'granallado', 'granalla', 'shot blasting', 'sa3', 'iso 8501',
    'metal blanco', 'perfil de anclaje', 'rugosidad', 'hidrolavado'],
  // 2) Términos exactos sangrantes: gastaron sin convertir → negativa EXACTA
  //    (bloquea solo esa búsqueda exacta; es la automatización más segura).
  NEG_COSTO_MIN: 8000,       // ARS gastados por el término en 30 días
  NEG_CLICS_MIN: 3,          // y al menos estos clics, sin ninguna conversión
  MAX_NEGATIVAS_POR_CORRIDA: 25,

  // --- Pausas automáticas de keywords ---
  PAUSA_COSTO_MIN: 25000,    // ARS en 30 días sin conversiones → pausar
  PAUSA_QS_MAX: 3,           // o QS <= 3 con al menos 20 clics → pausar
  PAUSA_CLICS_MIN_QS: 20,
  MAX_PAUSAS_POR_CORRIDA: 5,

  // Palabras núcleo: una keyword ACTIVA nuestra nunca se pausa por QS si es de marca
  MARCA: ['arenados lucho', 'arenado lucho']
};

function main() {
  var cambios = [];

  // ========== 1. NEGATIVAS: lista negra estructural ==========
  var campanias = [];
  var it = AdsApp.campaigns().withCondition('campaign.status = "ENABLED"').get();
  while (it.hasNext()) campanias.push(it.next());

  campanias.forEach(function (c) {
    var existentes = {};
    var negIt = c.negativeKeywords().get();
    while (negIt.hasNext()) existentes[normalizar(negIt.next().getText())] = true;

    CONFIG.LISTA_NEGRA.forEach(function (neg) {
      var frase = '"' + neg + '"';
      if (!existentes[normalizar(frase)] && !existentes[normalizar(neg)]) {
        if (!CONFIG.MODO_PRUEBA) c.createNegativeKeyword(frase);
        cambios.push('NEGATIVA (lista negra) ' + frase + ' → campaña "' + c.getName() + '"');
      }
    });
  });

  // ========== 2. NEGATIVAS: términos exactos que gastan sin convertir ==========
  var candidatos = [];
  var rows = AdsApp.report(
    'SELECT search_term_view.search_term, campaign.name, metrics.cost_micros, ' +
    'metrics.clicks, metrics.conversions ' +
    'FROM search_term_view WHERE segments.date DURING LAST_30_DAYS'
  ).rows();
  while (rows.hasNext()) {
    var r = rows.next();
    var costo = Number(r['metrics.cost_micros']) / 1000000;
    var clics = Number(r['metrics.clicks']);
    var conv = Number(r['metrics.conversions']);
    if (conv === 0 && costo >= CONFIG.NEG_COSTO_MIN && clics >= CONFIG.NEG_CLICS_MIN) {
      candidatos.push({ termino: r['search_term_view.search_term'],
                        campania: r['campaign.name'], costo: costo, clics: clics });
    }
  }
  candidatos.sort(function (a, b) { return b.costo - a.costo; });
  candidatos.slice(0, CONFIG.MAX_NEGATIVAS_POR_CORRIDA).forEach(function (cand) {
    campanias.forEach(function (c) {
      if (c.getName() === cand.campania) {
        var exacta = '[' + cand.termino + ']';
        if (!CONFIG.MODO_PRUEBA) c.createNegativeKeyword(exacta);
        cambios.push('NEGATIVA (exacta, gastó ' + Math.round(cand.costo) + ' / ' +
          cand.clics + ' clics / 0 conv) ' + exacta + ' → "' + cand.campania + '"');
      }
    });
  });

  // ========== 3. PAUSAS: keywords sangrantes ==========
  var pausadas = 0;
  var kws = AdsApp.keywords()
    .withCondition('ad_group_criterion.status = "ENABLED"')
    .withCondition('campaign.status = "ENABLED"')
    .withCondition('metrics.cost_micros > ' + (CONFIG.PAUSA_COSTO_MIN * 1000000))
    .forDateRange('LAST_30_DAYS')
    .orderBy('metrics.cost_micros DESC')
    .get();
  while (kws.hasNext() && pausadas < CONFIG.MAX_PAUSAS_POR_CORRIDA) {
    var kw = kws.next();
    var stats = kw.getStatsFor('LAST_30_DAYS');
    if (stats.getConversions() === 0 && !esMarca(kw.getText())) {
      if (!CONFIG.MODO_PRUEBA) kw.pause();
      pausadas++;
      cambios.push('PAUSA (gastó sin convertir en 30 días): "' + kw.getText() +
        '" en grupo "' + kw.getAdGroup().getName() + '"');
    }
  }
  // QS muy bajo con tráfico
  var kws2 = AdsApp.keywords()
    .withCondition('ad_group_criterion.status = "ENABLED"')
    .withCondition('campaign.status = "ENABLED"')
    .withCondition('ad_group_criterion.quality_info.quality_score <= ' + CONFIG.PAUSA_QS_MAX)
    .get();
  while (kws2.hasNext() && pausadas < CONFIG.MAX_PAUSAS_POR_CORRIDA) {
    var k2 = kws2.next();
    var st = k2.getStatsFor('LAST_30_DAYS');
    if (st.getClicks() >= CONFIG.PAUSA_CLICS_MIN_QS && st.getConversions() === 0 && !esMarca(k2.getText())) {
      if (!CONFIG.MODO_PRUEBA) k2.pause();
      pausadas++;
      cambios.push('PAUSA (QS ' + k2.getQualityScore() + ' con ' + st.getClicks() +
        ' clics sin conv): "' + k2.getText() + '"');
    }
  }

  // ========== 4. Informe ==========
  var asunto, cuerpo;
  if (cambios.length) {
    asunto = '[Ads AUTOPILOT] ' + cambios.length + ' cambios aplicados — Arenados Lucho';
    cuerpo = 'El autopilot aplicó estos cambios' + (CONFIG.MODO_PRUEBA ? ' (MODO PRUEBA — no se aplicó nada)' : '') +
      ':\n\n- ' + cambios.join('\n- ') +
      '\n\nTodos los cambios respetan los topes de contexto/marketing/06-google-ads-scripts.md.' +
      '\nPara revertir: buscá el elemento en Google Ads y reactivalo/borrá la negativa.' +
      '\nEste email se puede pegar en Claude para registrar en la bitácora.';
  } else {
    asunto = '[Ads AUTOPILOT] Sin cambios esta semana — Arenados Lucho';
    cuerpo = 'La cuenta está dentro de parámetros; no hizo falta tocar nada.';
  }
  Logger.log(cuerpo);
  if (CONFIG.EMAIL) MailApp.sendEmail(CONFIG.EMAIL, asunto, cuerpo);
}

function normalizar(t) {
  return String(t).toLowerCase().replace(/["\[\]]/g, '').trim();
}
function esMarca(texto) {
  var t = normalizar(texto);
  return CONFIG.MARCA.some(function (m) { return t.indexOf(m) !== -1; });
}

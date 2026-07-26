/**
 * 06 - GUARDIÁN DE PRESUPUESTO (APLICA CAMBIOS SOLO — red secundaria del tope)
 * Arenados Lucho — techo de gasto mensual definido por el dueño: ARS 300.000.
 *
 * IMPORTANTE — el "tope duro" real es de DOS capas:
 *   (1) PRIMARIA (freno por día): fijar el presupuesto DIARIO nativo de la campaña
 *       en ~TOPE/30 (~ARS 10.000/día) en la UI de Google Ads. Ese es el freno duro:
 *       acota el gasto intradía aunque este script no corra.
 *   (2) SECUNDARIA (este script): al ~95% del tope MENSUAL pausa todas las campañas
 *       (margen para absorber la latencia del reporting), avisa al 80% y reactiva
 *       automáticamente cuando cambia el mes. Correr a diario (ej. 06:00).
 *
 * Filosofía: "ante la duda, NO gastar". Si el reporte de gasto falla, avisa y NO toca
 * nada (no asume gasto 0). Si no puede leer el kill-switch, NO reactiva (no reanuda gasto).
 * NUNCA sube presupuestos ni pujas; solo pausa/reactiva por tope.
 * Programar: DIARIO. Contexto: contexto/marketing/06-google-ads-scripts.md
 */

var CONFIG = {
  EMAIL: 'impruvagencia@hotmail.com',
  TOPE_MENSUAL: 300000,          // ARS — decisión del 25/07/2026 (bitácora). Revisar trimestralmente (inflación).
  MARGEN_PAUSA: 0.95,            // pausar al 95% del tope, no al 100% (absorbe latencia de reporting)
  UMBRAL_AVISO: 0.8,            // avisar al 80%
  ETIQUETA: 'auto-pausa-presupuesto', // se le agrega el mes: 'auto-pausa-presupuesto-2026-07'
  FACTOR_PICO_DIARIO: 2,        // alerta si ayer se gastó el doble del ritmo normal

  // Kill-switch remoto OPCIONAL: URL de una Google Sheet privada cuya celda A1 diga RUN o STOP.
  // STOP = el guardián NO reactiva campañas (no reanuda gasto); la PAUSA por tope SIEMPRE corre
  //        (es la función de seguridad). Dejar '' para no usar kill-switch.
  // Fail-safe: si está configurado y no se puede leer, se asume STOP (no reactivar).
  HOJA_CONTROL_URL: '',

  HEARTBEAT_EMAIL: false        // true = manda un email diario "guardián OK" (hasta tener un watcher externo)
};

function main() {
  var tz = AdsApp.currentAccount().getTimeZone();
  var mesActual = Utilities.formatDate(new Date(), tz, 'yyyy-MM'); // ej '2026-07'
  var etiquetaMes = CONFIG.ETIQUETA + '-' + mesActual;
  var permiteReactivar = leerKillSwitch(); // true = puede reactivar; false = STOP (no reanudar gasto)

  // ========== 1. ¿Cambió el mes? → reactivar campañas pausadas por un tope de un mes ANTERIOR ==========
  // No usa getDate()<=2: reactiva mientras el mes de la etiqueta sea distinto al actual, así un
  // fallo puntual los días 1-2 no deja la cuenta apagada todo el mes. Corre antes de leer el gasto.
  if (permiteReactivar) {
    var reactivadas = reactivarDeMesesPrevios(mesActual);
    if (reactivadas.length) {
      MailApp.sendEmail(CONFIG.EMAIL, '[Ads GUARDIÁN] Mes nuevo: campañas reactivadas',
        'Se reactivaron automáticamente (tope de un mes anterior): ' + reactivadas.join(', ') +
        '\nTope mensual vigente: ARS ' + CONFIG.TOPE_MENSUAL);
    }
  }

  // ========== 2. Gasto del mes (con manejo de error: NUNCA asumir 0 ante un fallo) ==========
  var gastoMes;
  try {
    gastoMes = costoPeriodo('THIS_MONTH');
  } catch (e) {
    // Error real de la query (API/cuota/esquema): avisar y salir sin pausar de más.
    MailApp.sendEmail(CONFIG.EMAIL,
      '[Ads GUARDIÁN] ⚠ No pude leer el gasto — revisar a mano',
      'El guardián no pudo obtener el gasto del mes (' + e + ').\n' +
      'Por seguridad NO aplicó cambios en esta corrida. Revisá el gasto en Google Ads; ' +
      'si estás cerca del tope (ARS ' + CONFIG.TOPE_MENSUAL + '), pausá a mano.');
    Logger.log('Guardián ABORTÓ: error leyendo gastoMes (' + e + ')');
    return;
  }
  if (gastoMes === null) {
    // 0 filas: normal a inicio de mes (aún sin gasto reportado). Tratar como 0; el presupuesto
    // diario nativo (capa 1) es el freno real mientras tanto. Registrar y seguir.
    Logger.log('Guardián: THIS_MONTH sin filas → asumo gasto 0 (probable inicio de mes).');
    gastoMes = 0;
  }

  var gastoAyer;
  try { gastoAyer = costoPeriodo('YESTERDAY'); } catch (e) { gastoAyer = null; }
  if (gastoAyer === null) gastoAyer = 0;

  var ritmoDiarioTope = CONFIG.TOPE_MENSUAL / 30;
  var umbralPausa = CONFIG.TOPE_MENSUAL * CONFIG.MARGEN_PAUSA;

  // ========== 3. Tope mensual (95%) → pausar TODO (siempre corre, aun con kill-switch en STOP) ==========
  if (gastoMes >= umbralPausa) {
    asegurarEtiqueta(etiquetaMes, 'Campañas pausadas por tope ' + mesActual, '#FF0000');
    var frenadas = [];
    var activas = AdsApp.campaigns().withCondition('campaign.status = "ENABLED"').get();
    while (activas.hasNext()) {
      var c = activas.next();
      c.applyLabel(etiquetaMes);
      c.pause();
      frenadas.push(c.getName());
    }
    if (frenadas.length) {
      MailApp.sendEmail(CONFIG.EMAIL,
        '[Ads GUARDIÁN] 🛑 TOPE MENSUAL (' + Math.round(CONFIG.MARGEN_PAUSA * 100) + '%) — campañas pausadas',
        'Gasto del mes: ARS ' + Math.round(gastoMes) + ' (tope ' + CONFIG.TOPE_MENSUAL +
        ', pausa al ' + Math.round(CONFIG.MARGEN_PAUSA * 100) + '%).\n' +
        'Campañas pausadas hasta el mes próximo: ' + frenadas.join(', ') + '\n' +
        'Se reactivan solas al cambiar el mes. Para subir el tope: editar TOPE_MENSUAL ' +
        'y registrar en contexto/marketing/08-bitacora.md.');
    }
    Logger.log('Guardián: TOPE alcanzado. Mes ARS ' + Math.round(gastoMes) + '/' + CONFIG.TOPE_MENSUAL);
    return;
  }

  // ========== 4. Aviso al 80% (una sola vez por mes, para no spamear en corridas diarias) ==========
  if (gastoMes >= CONFIG.TOPE_MENSUAL * CONFIG.UMBRAL_AVISO) {
    var avisoLabel = 'aviso-80-' + mesActual;
    if (!existeEtiqueta(avisoLabel)) {
      // La sola existencia de la etiqueta marca "ya avisé este mes".
      asegurarEtiqueta(avisoLabel, 'Aviso de 80% enviado ' + mesActual, '#FFA500');
      MailApp.sendEmail(CONFIG.EMAIL,
        '[Ads GUARDIÁN] ⚠ ' + Math.round(gastoMes / CONFIG.TOPE_MENSUAL * 100) + '% del tope mensual usado',
        'Gasto del mes: ARS ' + Math.round(gastoMes) + ' de ' + CONFIG.TOPE_MENSUAL + '.\n' +
        'Al ' + Math.round(CONFIG.MARGEN_PAUSA * 100) + '% el guardián pausa todo automáticamente.');
    }
  }

  // ========== 5. Pico de gasto diario ==========
  if (gastoAyer > ritmoDiarioTope * CONFIG.FACTOR_PICO_DIARIO) {
    MailApp.sendEmail(CONFIG.EMAIL,
      '[Ads GUARDIÁN] ⚠ Pico de gasto ayer',
      'Ayer se gastaron ARS ' + Math.round(gastoAyer) + ' (ritmo normal ~' + Math.round(ritmoDiarioTope) + '/día).\n' +
      'Puede ser un término nuevo caro o un cambio de subasta. Pegá este email en Claude para analizarlo.');
  }

  // ========== 6. Heartbeat (para detectar si el guardián dejó de correr) ==========
  var estado = 'Guardián OK ' + Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd HH:mm') +
    ' | Mes: ARS ' + Math.round(gastoMes) + '/' + CONFIG.TOPE_MENSUAL +
    ' | Ayer: ARS ' + Math.round(gastoAyer) +
    (permiteReactivar ? '' : ' | KILL-SWITCH=STOP (no reactiva)');
  Logger.log(estado);
  if (CONFIG.HEARTBEAT_EMAIL) {
    MailApp.sendEmail(CONFIG.EMAIL, '[Ads GUARDIÁN] Heartbeat diario', estado);
  }
}

// --- Helpers ---

// Suma cost_micros del período. Devuelve null si el reporte NO trae filas (para distinguir de 0 real).
function costoPeriodo(periodo) {
  var rows = AdsApp.report(
    'SELECT metrics.cost_micros FROM customer WHERE segments.date DURING ' + periodo
  ).rows();
  var total = 0, hubo = false;
  while (rows.hasNext()) { total += Number(rows.next()['metrics.cost_micros']) / 1000000; hubo = true; }
  return hubo ? total : null;
}

// Reactiva campañas etiquetadas por un tope de un mes DISTINTO al actual y les quita esa etiqueta.
function reactivarDeMesesPrevios(mesActual) {
  var reactivadas = [];
  var prefijo = CONFIG.ETIQUETA + '-';
  var labels = AdsApp.labels().get();
  while (labels.hasNext()) {
    var lab = labels.next();
    var nombre = lab.getName();
    if (nombre.indexOf(prefijo) !== 0) continue;              // solo etiquetas de pausa por tope
    var mesEtiqueta = nombre.substring(prefijo.length);       // 'yyyy-MM'
    if (mesEtiqueta === mesActual) continue;                  // pausa del mes en curso: no reactivar todavía
    var camps = lab.campaigns().get();
    while (camps.hasNext()) {
      var cp = camps.next();
      cp.enable();
      cp.removeLabel(nombre);
      reactivadas.push(cp.getName());
    }
  }
  return reactivadas;
}

// Lee el kill-switch. Devuelve true si se puede reactivar (RUN / sin hoja), false si STOP o error.
function leerKillSwitch() {
  if (!CONFIG.HOJA_CONTROL_URL) return true; // sin hoja configurada → sin kill-switch
  try {
    var ss = SpreadsheetApp.openByUrl(CONFIG.HOJA_CONTROL_URL);
    var val = String(ss.getSheets()[0].getRange('A1').getValue()).trim().toUpperCase();
    return val !== 'STOP';                    // 'STOP' bloquea la reactivación
  } catch (e) {
    Logger.log('Kill-switch: no pude leer la hoja, asumo STOP (no reactivar). ' + e);
    return false;                             // fail-safe: ante duda, NO reanudar gasto
  }
}

function existeEtiqueta(nombre) {
  return AdsApp.labels().withCondition("label.name = '" + nombre + "'").get().hasNext();
}
function asegurarEtiqueta(nombre, desc, color) {
  if (!existeEtiqueta(nombre)) AdsApp.createLabel(nombre, desc || '', color || '#FF0000');
}

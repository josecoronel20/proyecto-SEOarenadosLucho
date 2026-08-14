// Fuente única de los CTAs de WhatsApp: estilos y mensajes pre-cargados por contexto.
//
// El mensaje pre-cargado importa más de lo que parece: el primer mensaje del cliente
// es lo único que tiene el dueño para cotizar. Si arranca con el trabajo ya nombrado
// ("te consulto por el arenado de un galpón"), la conversación empieza dos pasos
// adelante. Por eso hay un mensaje por intención, no uno genérico.
//
// ⚠️ El número NO vive acá: lo arma `WhatsAppCTA` partido en 2 strings (anti-scraping).

// ⚠️ El verde es `green-700` (#15803d), no `green-600`. El 600 daba **3,3:1** con
// texto blanco y WCAG AA pide 4,5:1 para texto normal — lo detectó el escáner de
// Impeccable el 14/08/2026, repetido en todas las páginas. El 700 da **5,0:1**.
// Es el botón de conversión del proyecto: no bajarlo de tono por estética.

/** CTA principal: verde WhatsApp, contraste AA. */
export const WPP_BTN =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition-colors shadow-lg"

/** Variante grande para heros y cierres de página. */
export const WPP_BTN_LG = `${WPP_BTN} md:text-lg px-8 py-4`

/** Variante compacta para el header. */
export const WPP_BTN_SM =
  "inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm rounded-full transition-colors"

/** Variante sobre fondo oscuro (video, hero primary-900). */
export const WPP_BTN_ON_DARK = `${WPP_BTN_LG} ring-2 ring-white/30`

/** Mensajes pre-cargados por intención. */
export const WPP_MSG = {
  general: "Hola, quiero pedir un presupuesto de arenado. Te cuento qué necesito:",
  obra:
    "Hola, te consulto por un arenado en obra. Te cuento qué hay que arenar, el tamaño aproximado y la zona:",
  galpon:
    "Hola, te consulto por un arenado en mi galpón (estructuras, tanques, camiones o hierros). Te cuento qué hay y en qué zona:",
  pileta:
    "Hola, quiero consultar por el arenado de mi pileta. Te mando una foto y te cuento en qué zona está:",
  contratista:
    "Hola, soy contratista/piletero y quiero consultar por arenado de piletas. Te cuento cuántas manejo y en qué zona:",
  otro:
    "Hola, tengo algo para arenar y no sé si lo hacen. Te mando una foto y te cuento de qué se trata:",
} as const

/** Los 4 datos que convierten un "hola" en un presupuesto. Reemplaza al formulario. */
export const QUE_AYUDA_SABER = [
  "Qué hay que arenar (pileta, estructura, fachada, camión…)",
  "Tamaño aproximado o metros",
  "En qué zona está",
  "Para cuándo lo necesitás",
]

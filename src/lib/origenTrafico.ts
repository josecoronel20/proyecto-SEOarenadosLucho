/**
 * De dónde vino la persona: de un anuncio pago o del resto.
 *
 * **Por qué existe.** El 20/08/2026 el dueño no podía saber si un WhatsApp había
 * venido de Ads o de una búsqueda orgánica. Google dice cuántas conversiones
 * hubo, pero la regla del proyecto es que **el único juez son los chats que
 * llegan**: si Ads dice 12 y llegaron 4, hay un problema de medición. Sin poder
 * auditar el número contra la realidad, esa comprobación no se puede hacer.
 *
 * **Cómo se detecta.** Google Ads le agrega `gclid` a la URL de destino, y las
 * campañas llevan además el sufijo `utm_medium=cpc`. Cualquiera de los dos
 * alcanza.
 *
 * **Por qué se guarda en `sessionStorage`.** El parámetro solo existe en la
 * página de entrada. Si alguien cae en `/servicios?gclid=…` y después navega a
 * `/contacto` para escribir, la URL ya no lo tiene. Se marca al entrar y se lee
 * al momento de abrir WhatsApp.
 *
 * No guarda el valor del `gclid` ni ningún dato de la persona: solo un
 * "ads" / "web". Tampoco toca el `dataLayer` — el evento `contact_whatsapp`
 * queda exactamente como estaba.
 */

const CLAVE = "arl_origen"

export type Origen = "ads" | "web"

/** Lee la URL actual y decide. No toca almacenamiento. */
function detectarDeLaUrl(): Origen {
  if (typeof window === "undefined") return "web"
  const p = new URLSearchParams(window.location.search)
  const esPago =
    p.has("gclid") ||
    p.has("wbraid") || // variantes de gclid en iOS
    p.has("gbraid") ||
    p.get("utm_medium") === "cpc"
  return esPago ? "ads" : "web"
}

/**
 * Marca el origen al entrar al sitio. Se llama una sola vez, desde el layout.
 *
 * Solo escribe si detecta tráfico pago: así una navegación posterior sin
 * parámetros no pisa la marca de la entrada.
 */
export function marcarOrigen(): void {
  if (typeof window === "undefined") return
  try {
    if (detectarDeLaUrl() === "ads") sessionStorage.setItem(CLAVE, "ads")
  } catch {
    // Modo incógnito o almacenamiento bloqueado: no es crítico, se pierde la
    // marca y el mensaje sale como orgánico.
  }
}

/** El origen de esta visita. Se llama al abrir WhatsApp. */
export function origenTrafico(): Origen {
  if (typeof window === "undefined") return "web"
  try {
    if (sessionStorage.getItem(CLAVE) === "ads") return "ads"
  } catch {
    /* ver arriba */
  }
  return detectarDeLaUrl()
}

/**
 * Adapta el mensaje pre-cargado según el origen.
 *
 * **No es un código ni una marca oculta: es una frase de verdad.** "Vi su
 * anuncio en Google" es exactamente lo que pasó, le suena natural a quien
 * escribe, y al dueño le alcanza para distinguirlo de un vistazo sin tener que
 * memorizar nada. Un código tipo `(ref. AD)` metido en el mensaje del cliente
 * se lee como seguimiento y no aporta nada que la frase no diga.
 *
 * Los seis mensajes de `WPP_MSG` arrancan con `"Hola, "`; se inserta ahí y se
 * capitaliza lo que sigue. Si alguno dejara de empezar así, el `else` lo
 * resuelve igual.
 */
export function mensajeSegunOrigen(mensaje: string): string {
  if (origenTrafico() !== "ads") return mensaje

  const PREFIJO = "Hola, "
  const NUEVO = "Hola, vi su anuncio en Google. "

  if (mensaje.startsWith(PREFIJO)) {
    const resto = mensaje.slice(PREFIJO.length)
    return NUEVO + resto.charAt(0).toUpperCase() + resto.slice(1)
  }
  return NUEVO + mensaje
}

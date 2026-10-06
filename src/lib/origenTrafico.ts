/**
 * De dónde vino la persona: de qué anuncio pago, o del resto.
 *
 * **Por qué existe.** El 20/08/2026 el dueño no podía saber si un WhatsApp había
 * venido de Ads o de una búsqueda orgánica. Google dice cuántas conversiones
 * hubo, pero la regla del proyecto es que **el único juez son los chats que
 * llegan**: si Ads dice 12 y llegaron 4, hay un problema de medición. Sin poder
 * auditar el número contra la realidad, esa comprobación no se puede hacer.
 *
 * **Por qué distingue el canal y no solo "pago vs orgánico".** Desde el
 * 06/10/2026 hay un segundo canal pago: Meta. Si los dos llegaran diciendo lo
 * mismo, el inbox dejaría de servir para comparar canales — que es justamente lo
 * único que mide de verdad este negocio. Peor: la versión anterior marcaba como
 * Google **cualquier** tráfico con `utm_medium=cpc`, así que un lead de Meta
 * etiquetado con la convención de Google habría llegado diciendo que vino de
 * Google. La atribución quedaba dada vuelta sin que nadie lo notara.
 *
 * **Cómo se detecta.**
 * - **Google** agrega `gclid` (o `wbraid`/`gbraid` en iOS) y sus campañas llevan
 *   `utm_medium=cpc`.
 * - **Meta** agrega `fbclid`, y sus campañas llevan `utm_medium=paid_social`.
 *
 * ⚠️ `utm_medium=cpc` sin más datos se asume **Google**, porque es la convención
 * que ya usan las 3 campañas de Search. Por eso **Meta nunca debe etiquetarse con
 * `cpc`** (ver la convención recomendada abajo).
 *
 * **Convención de UTM para Meta:**
 * ```
 * utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
 * ```
 * `{{site_source_name}}` lo reemplaza Meta por `fb` o `ig` según dónde se vio el
 * aviso, así el mensaje puede decir la red exacta. Si no se usa, con
 * `utm_source=meta` alcanza y el mensaje dice "en redes".
 *
 * **Por qué se guarda en `sessionStorage`.** El parámetro solo existe en la
 * página de entrada. Si alguien cae en `/servicios?gclid=…` y después navega a
 * `/contacto` para escribir, la URL ya no lo tiene. Se marca al entrar y se lee
 * al momento de abrir WhatsApp.
 *
 * No guarda el `gclid`, el `fbclid` ni ningún dato de la persona: solo cuál de
 * los canales fue. Tampoco toca el `dataLayer` — el evento `contact_whatsapp`
 * queda exactamente como estaba.
 */

const CLAVE = "arl_origen"

export type Origen = "google" | "facebook" | "instagram" | "meta" | "web"

/** Los valores que sí se escriben en `sessionStorage`. */
const PAGOS: readonly Origen[] = ["google", "facebook", "instagram", "meta"]

/** Lee la URL actual y decide. No toca almacenamiento. */
function detectarDeLaUrl(): Origen {
  if (typeof window === "undefined") return "web"
  const p = new URLSearchParams(window.location.search)
  const fuente = (p.get("utm_source") ?? "").toLowerCase()

  // Meta primero: así un `utm_source=facebook&utm_medium=cpc` mal etiquetado
  // igual cae en Meta y no en el `cpc` genérico de abajo.
  if (fuente === "facebook" || fuente === "fb") return "facebook"
  if (fuente === "instagram" || fuente === "ig") return "instagram"
  if (fuente === "meta" || p.has("fbclid")) return "meta"

  const esGoogle =
    p.has("gclid") ||
    p.has("wbraid") || // variantes de gclid en iOS
    p.has("gbraid") ||
    fuente === "google" ||
    p.get("utm_medium") === "cpc"
  if (esGoogle) return "google"

  return "web"
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
    const origen = detectarDeLaUrl()
    if (PAGOS.includes(origen)) sessionStorage.setItem(CLAVE, origen)
  } catch {
    // Modo incógnito o almacenamiento bloqueado: no es crítico, se pierde la
    // marca y el mensaje sale como orgánico.
  }
}

/** El origen de esta visita. Se llama al abrir WhatsApp. */
export function origenTrafico(): Origen {
  if (typeof window === "undefined") return "web"
  try {
    const guardado = sessionStorage.getItem(CLAVE) as Origen | null
    if (guardado && PAGOS.includes(guardado)) return guardado
  } catch {
    /* ver arriba */
  }
  return detectarDeLaUrl()
}

/**
 * De dónde dice la persona que vino. Vacío si no vino de un anuncio.
 *
 * "En redes" es el caso en que Meta no dijo si fue Facebook o Instagram: es la
 * única forma de nombrarlo que sigue siendo cierta sin adivinar.
 */
const DONDE: Record<Origen, string> = {
  google: "Google",
  facebook: "Facebook",
  instagram: "Instagram",
  meta: "redes",
  web: "",
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
  const donde = DONDE[origenTrafico()]
  if (!donde) return mensaje

  const PREFIJO = "Hola, "
  const NUEVO = `Hola, vi su anuncio en ${donde}. `

  if (mensaje.startsWith(PREFIJO)) {
    const resto = mensaje.slice(PREFIJO.length)
    return NUEVO + resto.charAt(0).toUpperCase() + resto.slice(1)
  }
  return NUEVO + mensaje
}

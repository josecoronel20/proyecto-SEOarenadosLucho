/**
 * El número de WhatsApp, armado en runtime. Fuente única.
 *
 * ⚠️ **Por qué un array de dígitos y no `"5491123" + "787750"`.**
 *
 * Durante años el código armó el número concatenando dos strings, y eso quedó
 * documentado como invariante anti-scraping en `CLAUDE.md`, `DESIGN.md` y
 * `contexto/`. **No funcionaba.** El minificador pliega la concatenación de dos
 * literales en tiempo de build: en el bundle de producción el número aparecía
 * entero y contiguo (`wa.me/5491123787750`). Verificado contra producción el
 * 14/08/2026 — la medida nunca hizo lo que decía hacer.
 *
 * `Array.prototype.join` no es plegable en build: ni Terser ni SWC evalúan un
 * método de instancia sobre un array. Los dígitos quedan separados en el bundle
 * y el número solo existe después de que corre el JS.
 *
 * Sigue valiendo el resto del patrón: **nunca en un `href`**, nunca en el
 * JSON-LD (`telephone`), nunca como texto visible. Se abre con `window.open`
 * para no dejarlo en el DOM.
 *
 * Si alguna vez hay que cambiar el número, se cambia acá y en ningún otro lado.
 */
const DIGITOS = ["5", "4", "9", "1", "1", "2", "3", "7", "8", "7", "7", "5", "0"]

/** Devuelve el número en formato internacional, sin `+` ni separadores. */
export function numeroWpp(): string {
  return DIGITOS.join("")
}

/**
 * URL de WhatsApp con el mensaje ya cargado.
 *
 * Llamar **dentro del handler**, no en el cuerpo del componente: así el número
 * no queda armado en memoria antes de que la persona confirme el diálogo.
 */
export function urlWpp(mensaje: string): string {
  return `https://wa.me/${numeroWpp()}?text=${encodeURIComponent(mensaje)}`
}

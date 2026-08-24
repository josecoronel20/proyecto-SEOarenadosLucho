import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Los primitivos del sistema "catálogo de repuestos".
 *
 * Existen por una razón concreta: antes cada página resolvía sus secciones a
 * mano y terminaron conviviendo tres lenguajes visuales distintos (paddings
 * distintos, titulares de distinto tamaño, tres formas de tarjeta). Todo lo que
 * define ritmo y jerarquía vive acá; una página compone, no inventa.
 *
 * La regla de forma que gobierna todo el archivo: **se separa con filetes, no
 * con cajas.** Una tarjeta de ícono + título + texto repetida en cuadrícula es
 * el patrón que hace que un sitio de oficio se lea como una plantilla. Un
 * catálogo impreso resuelve lo mismo con una línea de 1px, y además entra más
 * información en la misma pantalla.
 */

/* ==========================================================================
 * RITMO VERTICAL
 * Dos alturas, no siete. Cualquier sección del sitio usa una de las dos.
 * ======================================================================== */

const RITMO = {
  normal: "py-16 md:py-24",
  compacto: "py-12 md:py-16",
} as const

const FONDO = {
  papel: "bg-papel text-tinta",
  alt: "bg-papel-alt text-tinta",
  tinta: "bg-tinta text-papel",
  /* Naranja inundado. Lleva texto tinta: blanco sobre este naranja da 3,75:1
   * y no pasa AA. Ver la tabla de contrastes en tailwind.config.ts. */
  maquina: "bg-maquina-500 text-tinta",
} as const

export function Section({
  children,
  fondo = "papel",
  ritmo = "normal",
  className,
  ...rest
}: {
  children: ReactNode
  fondo?: keyof typeof FONDO
  ritmo?: keyof typeof RITMO
  className?: string
} & Omit<React.ComponentPropsWithoutRef<"section">, "className" | "children">) {
  return (
    <section className={cn(FONDO[fondo], RITMO[ritmo], className)} {...rest}>
      <div className="container mx-auto px-5 lg:px-8">{children}</div>
    </section>
  )
}

/* ==========================================================================
 * TITULARES
 * Una sola escala para todo el sitio. `SectionHead` deja más aire arriba que
 * abajo — el título tiene que pertenecer a lo que sigue, no flotar entre dos
 * bloques por igual.
 * ======================================================================== */

export const H1 = "text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
export const H2 = "text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1]"
export const H3 = "text-lg md:text-xl font-semibold leading-snug"

/**
 * Medida de lectura: ~75 caracteres por renglón.
 *
 * ⚠️ El valor NO es la cantidad de caracteres. `ch` mide el ancho del glifo
 * “0”, que es de los más anchos de Archivo, así que la prosa entra bastante
 * más holgada: 68ch daban ~88 caracteres reales y el detector los marcaba.
 * Medido en el navegador el 21/08/2026.
 */
export const MEDIDA = "max-w-[58ch]"

export function SectionHead({
  titulo,
  intro,
  id,
  centrado = false,
  className,
}: {
  titulo: ReactNode
  intro?: ReactNode
  id?: string
  centrado?: boolean
  className?: string
}) {
  return (
    <div className={cn("mb-10 md:mb-12", centrado && "text-center", className)}>
      <h2 id={id} className={H2}>
        {titulo}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed text-tinta-70",
            MEDIDA,
            centrado && "mx-auto"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/* ==========================================================================
 * LA FICHA — el reemplazo de la tarjeta
 *
 * Una fila tabulada: número de ítem al margen, título, texto, y opcionalmente
 * una columna de dato duro a la derecha. Apilada con filetes forma la retícula
 * de catálogo. Sin borde exterior, sin sombra, sin radio.
 * ======================================================================== */

export function FichaLista({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("ficha-lista border-y border-papel-linea", className)}>
      {children}
    </div>
  )
}

export function Ficha({
  num,
  titulo,
  children,
  dato,
  className,
}: {
  /** Número de ítem. Solo se pasa cuando la secuencia significa algo (un
   *  proceso, un orden de trabajo). Numerar por numerar es decoración. */
  num?: string | number
  titulo: ReactNode
  children?: ReactNode
  /** Columna derecha: la especificación, el plazo, el material. */
  dato?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-2 py-7 md:py-8",
        "md:grid-cols-[3rem_minmax(0,1fr)_auto]",
        !num && "md:grid-cols-[minmax(0,1fr)_auto]",
        className
      )}
    >
      {num !== undefined && (
        <div className="ficha-num text-sm font-medium text-maquina-700 md:pt-1">
          {String(num).padStart(2, "0")}
        </div>
      )}
      <div>
        <h3 className={H3}>{titulo}</h3>
        {children && (
          <div className={cn("mt-2 leading-relaxed text-tinta-70", MEDIDA)}>
            {children}
          </div>
        )}
      </div>
      {dato && (
        <div className="text-sm font-medium text-tinta-70 md:text-right md:pt-1.5">
          {dato}
        </div>
      )}
    </div>
  )
}

/* ==========================================================================
 * FRANJA DE DATOS DUROS
 * La barra tabulada del primer viewport: pocas cifras, separadas por filete
 * vertical, sin íconos. Los íconos acá no agregaban información y hacían que
 * tres datos ocuparan una pantalla entera.
 * ======================================================================== */

export function FranjaDatos({
  items,
  className,
}: {
  items: { dato: string; detalle: string }[]
  className?: string
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-px bg-papel-linea border border-papel-linea",
        className
      )}
    >
      {items.map(({ dato, detalle }) => (
        <div key={detalle} className="bg-papel px-4 py-5 md:px-6">
          <dt className="ficha-num text-xl md:text-2xl font-bold text-tinta">
            {dato}
          </dt>
          <dd className="mt-1 text-sm leading-snug text-tinta-70">{detalle}</dd>
        </div>
      ))}
    </dl>
  )
}

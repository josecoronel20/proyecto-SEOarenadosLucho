import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN, WPP_MSG } from "@/lib/wpp"
import { Section, SectionHead, H3, MEDIDA } from "@/components/common/system"

/**
 * El ruteo de la home. Tres decisiones de producto:
 *
 * 1. **Se rotula por TRABAJO, no por tipo de comprador.** "Industrial vs particular"
 *    es cómo el dueño piensa el negocio, no cómo el cliente piensa su problema: el
 *    contratista que remodela piletas es una empresa comprando algo "particular".
 * 2. **La tercera opción va a WhatsApp**, no a una página. Todo lo que no es galpón
 *    ni pileta (muebles no, pero sí rejas grandes, maquinaria, algo raro) antes se
 *    perdía. Ahora convierte sin que haya que crearle una landing.
 * 3. Cada destino lleva su **mensaje pre-cargado**, así el primer mensaje ya trae
 *    el contexto para cotizar.
 *
 * En forma: dos renglones de índice, no dos tarjetas. Un índice de catálogo se
 * escanea de un vistazo; dos cajas con ícono obligan a leer las dos enteras.
 */
const destinos = [
  {
    title: "Obra, industria o galpón",
    text: "Estructuras metálicas, tanques, silos, camiones, acoplados, hierros, paredes, fachadas y ladrillo a la vista.",
    href: "/servicios",
    cta: "Ver arenado industrial y en obra",
  },
  {
    title: "Una pileta o piscina",
    text: "Sacamos toda la pintura vieja de tu pileta de hormigón y te la dejamos lista para repintar o revestir.",
    href: "/arenado-de-piletas",
    cta: "Ver arenado de piletas",
  },
]

export function QueNecesitasArenar() {
  return (
    <Section fondo="alt" aria-labelledby="que-arenar">
      <SectionHead
        id="que-arenar"
        titulo="¿Qué necesitás arenar?"
        intro="Elegí por el trabajo que tenés y te llevamos directo a lo que te sirve."
      />

      <div className="ficha-lista border-y border-papel-linea">
        {destinos.map(({ title, text, href, cta }, i) => (
          <Link
            key={title}
            href={href}
            className="group grid gap-x-6 gap-y-2 py-7 md:py-8 md:grid-cols-[3rem_minmax(0,1fr)_auto] items-start hover:bg-papel transition-colors"
          >
            <span className="ficha-num text-sm font-medium text-maquina-700 md:pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="block">
              <span className={`block ${H3} group-hover:text-maquina-700 transition-colors`}>
                {title}
              </span>
              <span className={`mt-2 block leading-relaxed text-tinta-70 ${MEDIDA}`}>
                {text}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-maquina-700 md:pt-1.5 whitespace-nowrap">
              {cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>

      {/* Salida para todo lo que no entra en los dos renglones de arriba:
          convierte sin necesitar una landing propia. Va sobre naranja inundado,
          con texto tinta —blanco sobre este naranja no pasa AA. */}
      <div className="mt-10 bg-maquina-500 text-tinta p-6 md:p-8">
        <div className="md:flex md:items-center md:gap-8">
          <div className="flex-1">
            <h3 className={H3}>¿Es otra cosa? ¿No sabés si se puede arenar?</h3>
            <p className="mt-2 leading-relaxed max-w-[60ch]">
              Mandanos una foto por WhatsApp y te decimos si lo hacemos, cuánto
              tarda y cuánto sale. Si no es para nosotros, te lo decimos derecho.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <WhatsAppCTA message={WPP_MSG.otro} className={WPP_BTN}>
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Mandar una foto
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </Section>
  )
}

import Link from "next/link"
import { Warehouse, Waves, HelpCircle, ArrowRight, MessageCircle } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN, WPP_MSG } from "@/lib/wpp"

/**
 * El ruteo de la home. Tres decisiones de diseño:
 *
 * 1. **Se rotula por TRABAJO, no por tipo de comprador.** "Industrial vs particular"
 *    es cómo el dueño piensa el negocio, no cómo el cliente piensa su problema: el
 *    contratista que remodela piletas es una empresa comprando algo "particular".
 * 2. **La tercera opción va a WhatsApp**, no a una página. Todo lo que no es galpón
 *    ni pileta (muebles no, pero sí rejas grandes, maquinaria, algo raro) antes se
 *    perdía. Ahora convierte sin que haya que crearle una landing.
 * 3. Cada destino lleva su **mensaje pre-cargado**, así el primer mensaje ya trae
 *    el contexto para cotizar.
 */
const destinos = [
  {
    icon: Warehouse,
    title: "Obra, industria o galpón",
    text: "Estructuras metálicas, tanques, silos, camiones, acoplados, hierros, paredes, fachadas y ladrillo a la vista.",
    href: "/servicios",
    cta: "Ver arenado industrial y en obra",
  },
  {
    icon: Waves,
    title: "Una pileta o piscina",
    text: "Sacamos toda la pintura o el revestimiento viejo del hormigón y te la dejamos lista para repintar o revestir.",
    href: "/arenado-de-piletas",
    cta: "Ver arenado de piletas",
  },
]

export function QueNecesitasArenar() {
  return (
    <section className="py-14 md:py-20 bg-gray-50" aria-labelledby="que-arenar">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            id="que-arenar"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            ¿Qué necesitás arenar?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Elegí por el trabajo que tenés y te llevamos directo a lo que te sirve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {destinos.map(({ icon: Icon, title, text, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-400 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-lg bg-primary-100 text-primary-700 w-fit mb-4">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-primary-600 font-semibold group-hover:text-primary-700">
                {cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* Salida para todo lo que no entra en las dos cards: convierte sin landing propia. */}
        <div className="max-w-4xl mx-auto mt-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-primary-200 bg-primary-50/60 p-6">
            <div className="p-3 rounded-lg bg-primary-100 text-primary-700 w-fit flex-shrink-0">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                ¿Es otra cosa? ¿No sabés si se puede arenar?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mandanos una foto por WhatsApp y te decimos si lo hacemos, cuánto tarda y cuánto
                sale. Si no es para nosotros, te lo decimos derecho.
              </p>
            </div>
            <div className="flex-shrink-0">
              <WhatsAppCTA message={WPP_MSG.otro} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Mandar una foto
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

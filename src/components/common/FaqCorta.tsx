import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import type { Faq } from "@/lib/faqs"

interface FaqCortaProps {
  items: Faq[]
  title?: string
  className?: string
}

/**
 * Bloque de FAQ para páginas que no son `/preguntas-frecuentes`.
 *
 * Resuelve objeciones sin obligar a salir de la página (cada salto es una
 * oportunidad de rebotar) y, con el `FAQPage` que declara la página que lo monta,
 * es la vía más barata de long-tail: cada pregunta es una consulta real de Google.
 *
 * ⚠️ El schema `FAQPage` lo declara la **página**, no este componente, y tiene que
 * listar exactamente las mismas preguntas que se renderizan acá: Google penaliza
 * el schema que no coincide con lo visible.
 */
export function FaqCorta({
  items,
  title = "Preguntas frecuentes",
  className = "bg-white",
}: FaqCortaProps) {
  return (
    <section className={`py-14 md:py-20 ${className}`} aria-labelledby="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 id="faq" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>

        <FaqAccordion items={items} />

        <div className="text-center mt-8">
          <Link
            href="/preguntas-frecuentes"
            className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Ver todas las preguntas frecuentes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

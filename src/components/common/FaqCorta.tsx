import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import { Section, SectionHead } from "@/components/common/system"
import type { Faq } from "@/lib/faqs"

interface FaqCortaProps {
  items: Faq[]
  title?: string
  fondo?: "papel" | "alt"
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
  fondo = "papel",
}: FaqCortaProps) {
  return (
    <Section fondo={fondo} aria-labelledby="faq">
      <SectionHead id="faq" titulo={title} />

      <FaqAccordion items={items} />

      <div className="mt-10">
        <Link
          href="/preguntas-frecuentes"
          className="inline-flex items-center gap-1.5 font-semibold text-maquina-700 hover:text-maquina-600 underline underline-offset-4"
        >
          Ver todas las preguntas frecuentes
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  )
}

import type { Metadata } from "next"
import { MessageCircle } from "lucide-react"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { faqs } from "@/lib/faqs"
import { og } from "@/lib/siteConfig"
import { WPP_BTN_LG, WPP_MSG } from "@/lib/wpp"

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas simples sobre arenado: cuánto tarda, el polvo, si trabajamos in situ, si hacemos piletas y para qué queda lista la superficie. Buenos Aires y AMBA.",
  alternates: { canonical: "/preguntas-frecuentes" },
  openGraph: og(
    "Preguntas frecuentes sobre arenado",
    "Plazos, polvo, trabajo in situ, piletas y para qué queda lista la superficie. Lo que más nos preguntan."
  ),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Preguntas frecuentes
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lo que más nos preguntan antes de arrancar: plazos, polvo, si vamos a tu casa u obra y cómo queda la superficie. Si tu duda no está acá, coordinamos una visita sin costo.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="sr-only">Preguntas y respuestas sobre arenado</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary-800">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ¿Tu pregunta no está en la lista?
          </h2>
          <p className="text-white/90 mb-6">
            Escribinos y te la sacamos. Coordinamos una visita sin costo y te pasamos el
            presupuesto rápido.
          </p>
          <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN_LG}>
            <MessageCircle className="w-5 h-5" />
            Preguntanos por WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </div>
  )
}

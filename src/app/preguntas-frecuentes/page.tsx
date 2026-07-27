import type { Metadata } from "next"
import Link from "next/link"
import { FileText } from "lucide-react"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import { faqs } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas simples sobre arenado: cuánto tarda, el polvo, si trabajamos in situ, si hacemos piletas y para qué queda lista la superficie. Buenos Aires y AMBA.",
  alternates: { canonical: "/preguntas-frecuentes" },
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
    <main className="min-h-screen bg-gray-50">
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
            Coordinamos una visita sin costo y te pasamos el presupuesto rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

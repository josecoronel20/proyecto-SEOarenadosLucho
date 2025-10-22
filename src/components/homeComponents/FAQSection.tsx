"use client"

import React, { useCallback, useState } from "react"
import { ChevronDown } from "lucide-react"

/**
 * FAQItem: accessible, keyboard-friendly, emits analytics on open/close
 */
function FAQItem({ id, question, answer }: {
  id: string
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  const onToggle = useCallback((e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const isOpen = (e.target as HTMLDetailsElement).open
    setOpen(isOpen)
    try {
      // gtag event if configured
      // @ts-ignore
      window.gtag?.("event", "faq_toggle", {
        faq: question,
        open: isOpen,
      })
    } catch (err) { /* noop */ }
  }, [question])

  return (
    <details
      id={id}
      className="group border border-gray-100 rounded-lg bg-white"
      onToggle={onToggle}
    >
      <summary
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transform transition-transform ${open ? "rotate-180" : ""
            }`}
          aria-hidden
        />
      </summary>

      <div id={`${id}-panel`} className="p-4 pt-0 text-gray-600 leading-relaxed">
        <p>{answer}</p>
      </div>
    </details>
  )
}

export function FAQSection() {
  // Consolidated and optimized FAQs to avoid duplication and improve SEO/snippeting.
  const faqs = [
    {
      question: "¿Cuál es el precio del arenado de una pileta?",
      answer:
        "El precio depende de m² y de si se desea un posterior revestimiento o solo aplicación de pintura. Podemos dar una cotización preliminar por WhatsApp con medidas. La cotización final puede requerir visita técnica si es una pileta grande.",
    },
    {
      question: "¿Ofrecen cotización por m² y por proyecto?",
      answer:
        "Cotizamos por proyecto cuando es pequeño, para obras grandes se cotiza por m2 dependiendo del tamaño, complejidad, distancia, etc.",
    },
    {
      question: "¿Realizan servicio móvil en Pilar y Zona Norte?",
      answer:
        "Sí. Llevamos maquinaria para realizar el arenado en Zona Norte, Zona Oeste y Caba. Para piezas pequeñas ofrecemos taller con cabina cerrada.",
    },
    {
      question: "¿Cómo se controla el polvo y residuos en obra?",
      answer:
        "Es responsabilidad del contratista despejar el área de personal ajeno y cubrir/proteger zonas sensibles al polvo, ya que su control total es muy difícil. Nosotros nos encargamos de remover los residuos del arenado.",
    },
    {
      question: "¿Cuánto tiempo lleva el trabajo?",
      answer:
        "Depende de muchos factores. Las piletas de casas particulares generalmente se terminan en el día. Para calcular un tiempo más preciso, se realiza una prueba inicial en el material para evaluar su estado.",
    },
  ]

  // Build JSON-LD FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  }

  return (
    <section className="py-16 bg-slate-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Preguntas frecuentes
          </h2>
          <p className="text-sm text-gray-600">
            Respuestas claras para decidir rápido. ¿No ves tu pregunta? Pedinos presupuesto por WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              id={`faq-${i}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>

      {/* JSON-LD for FAQ rich results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}

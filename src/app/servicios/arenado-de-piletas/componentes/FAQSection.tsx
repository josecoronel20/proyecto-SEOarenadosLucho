"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "¿Cuánto cuesta arenar una pileta en Pilar y Zona Norte?",
      answer: "El precio del arenado de piletas varía según el tamaño, estado y ubicación. Ofrecemos presupuesto gratuito y sin compromiso."
    },
    {
      question: "¿Cuánto tarda el trabajo de arenado de piletas?",
      answer: "El tiempo de arenado depende del tamaño de la pileta y el tipo de tratamiento. Para arenado de repintado o revestimiento: 1 día, para arenado de pileta más grande es variable. Trabajamos de lunes a viernes en toda Zona Norte, caba y zona oeste."
    },
    {
      question: "¿Qué mantenimiento necesita la pileta después del arenado?",
      answer: "Después del arenado, tu pileta estará lista para pintura o revestimiento. No requiere mantenimiento especial, solo mantener limpia la superficie hasta aplicar el nuevo acabado. Te brindamos recomendaciones específicas según el tipo de tratamiento elegido."
    },
    {
      question: "¿El arenado daña el hormigón de la pileta?",
      answer: "No, nuestro arenado profesional está calibrado específicamente para piletas. Eliminamos solo la pintura deteriorada sin comprometer la estructura del hormigón. Utilizamos técnicas y equipos especializados para garantizar la integridad de tu pileta."
    },
    {
      question: "¿Trabajan en toda Zona Norte de Buenos Aires?",
      answer: "Sí, brindamos servicio de arenado de piletas en toda Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, José C. Paz, San Miguel, Malvinas Argentinas y más. También cubrimos Zona Oeste y CABA. Servicio móvil a domicilio."
    },
    {
      question: "¿Cuándo es mejor hacer arenado de pileta?",
      answer: "La mejor época es durante los meses de invierno (junio-agosto) cuando la pileta está fuera de uso. Esto permite tiempo suficiente para el arenado, pintura y curado antes del verano, pero trabajamos durante todo el año."
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes sobre Arenado de Piletas
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestro servicio de arenado de piletas 
              en Pilar, Zona Norte y Buenos Aires. Si tenés otra consulta, contactanos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                ¿No encontraste la respuesta que buscabas?
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

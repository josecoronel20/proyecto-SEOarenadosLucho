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
      question: "¿Cuánto cuesta arenar un barco en Tigre y Zona Norte?",
      answer: "El precio del arenado de barcos varía según el tamaño de la embarcación, estado del casco y ubicación. Para lanchas estándar en Tigre o San Fernando, el costo oscila según el tamaño. Ofrecemos presupuesto gratuito y sin compromiso."
    },
    {
      question: "¿Cuánto tarda el servicio de arenado de barcos?",
      answer: "El tiempo de arenado depende del tamaño de la embarcación y el tipo de incrustaciones. Para lanchas: 1 día, para embarcaciones más grandes: 2-3 días. Incluye limpieza, arenado y preparación final. Trabajamos en toda Zona Norte y CABA."
    },
    {
      question: "¿Qué mantenimiento necesita el barco después del arenado?",
      answer: "Después del arenado, tu embarcación estará lista para aplicar pintura o pintura náutica. No requiere mantenimiento especial, solo mantener limpio el casco hasta aplicar el nuevo revestimiento. Te brindamos recomendaciones específicas."
    },
    {
      question: "¿El arenado daña la fibra de vidrio del casco?",
      answer: "No, nuestro arenado profesional está calibrado específicamente para embarcaciones. Eliminamos solo las incrustaciones y pintura deteriorada sin comprometer la estructura de fibra de vidrio o acero del casco."
    },
    {
      question: "¿Trabajan en toda Zona Norte de Buenos Aires?",
      answer: "Sí, brindamos servicio de arenado de barcos en toda Zona Norte: Tigre, San Fernando, San Isidro, Vicente López, Pilar, Nordelta y más. También cubrimos Zona Oeste y CABA. Servicio especializado para embarcaciones."
    },
    {
      question: "¿Cuándo es mejor hacer arenado de barco?",
      answer: "La mejor época es durante los meses de invierno (junio-agosto) cuando la temporada náutica está en pausa. Esto permite tiempo suficiente para el arenado, aplicación de pintura y curado antes del verano."
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
              Preguntas Frecuentes sobre Arenado de Barcos
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestro servicio de arenado de embarcaciones 
              en Tigre, Zona Norte y Buenos Aires. Si tenés otra consulta, contactanos.
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

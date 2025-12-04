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
      question: "¿Cuánto cuesta el servicio de arenado de autos en Pilar y Zona Norte de Buenos Aires?",
      answer: "El precio del arenado profesional de vehículos varía según el tamaño del auto, el estado de oxidación de la carrocería y la ubicación en Zona Norte. Para autos estándar en Pilar, San Isidro o alrededores, el costo se determina según una evaluación técnica. Ofrecemos presupuesto detallado totalmente gratuito y sin compromiso."
    },
    {
      question: "¿Cuál es el tiempo para arenar un vehículo completo?", 
      answer: "La duración del proceso de arenado industrial depende del tamaño del vehículo y nivel de corrosión. Para autos , camionetas y vehículos grandes: 1 dia laborable. Brindamos este servicio especializado en toda Zona Norte, CABA y GBA."
    },
    {
      question: "¿Qué cuidados y mantenimiento requiere un auto después del arenado industrial?",
      answer: "Después del arenado profesional, el vehículo queda preparado para recibir pintura automotriz de alta calidad. No requiere mantenimiento especial, solo mantener la superficie limpia y protegida hasta aplicar el nuevo revestimiento o pintura. Proporcionamos asesoramiento técnico y recomendaciones específicas para cada caso."
    },
    {
      question: "¿El proceso de arenado industrial puede dañar la carrocería del vehículo?",
      answer: "No, nuestro servicio de arenado profesional utiliza equipamiento industrial calibrado específicamente para vehículos. La técnica elimina selectivamente óxido, corrosión y pintura deteriorada sin comprometer la integridad estructural de la carrocería, sea metálica o de fibra de vidrio."
    },
    {
      question: "¿En qué zonas de Buenos Aires brindan servicio de arenado automotriz?",
      answer: "Brindamos servicio profesional de arenado vehicular en toda la Zona Norte del Gran Buenos Aires: Pilar, San Isidro, Tigre, Vicente López, San Fernando, José C. Paz, San Miguel, Malvinas Argentinas y localidades aledañas. También cubrimos Zona Oeste y Ciudad Autónoma de Buenos Aires con equipos móviles especializados."
    },
    {
      question: "¿Cuál es la mejor época del año para realizar el arenado de un vehículo?",
      answer: "La temporada óptima para el arenado automotriz es durante los meses de invierno (junio-agosto) cuando las condiciones climáticas son más favorables y el vehículo puede estar temporalmente fuera de uso. Este período permite tiempo suficiente para realizar el proceso completo: arenado industrial, tratamiento anticorrosivo, aplicación de pintura profesional y curado adecuado antes de la temporada de calor."
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
      <section className="py-16 bg-white" aria-label="Preguntas frecuentes sobre arenado de vehículos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes sobre Arenado Industrial de Vehículos en Buenos Aires
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Respondemos las consultas más comunes sobre nuestro servicio profesional de arenado automotriz 
              en Pilar, Zona Norte y Buenos Aires. Especialistas en arenado industrial de autos, camionetas y todo tipo de vehículos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-6 py-4 bg-white"
                    >
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
                ¿Necesitás más información sobre nuestro servicio de arenado profesional?
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

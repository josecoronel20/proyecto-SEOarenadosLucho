"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
      question: "¿Cuánto cuesta el servicio de pintura en Zona Norte?",
      answer: "El precio del servicio de pintura varía según dimensiones, tipo de superficie y tipo de pintura requerida. Ofrecemos presupuesto gratuito sin cargo en 24h para Pilar, San Isidro, Tigre y toda Zona Norte."
    },
    {
      question: "¿Qué tipos de pintura ofrecen?",
      answer: "Ofrecemos pintura epoxi para piletas y pisos industriales, pintura anticorrosiva para estructuras metálicas, pintura para fachadas y pintura automotriz. Todas las pinturas son de alta calidad y marcas reconocidas."
    },
    {
      question: "¿Incluyen preparación de superficie?",
      answer: "Sí, nuestro servicio incluye arenado previo y preparación completa de la superficie para garantizar máxima adherencia y durabilidad de la pintura. Esto es esencial para obtener resultados profesionales."
    },
    {
      question: "¿En qué zonas brindan servicio de pintura?",
      answer: "Brindamos servicio de pintura en Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando. También en Zona Oeste: Moreno, Hurlingham, Ituzaingó. Disponemos de servicio móvil a domicilio."
    },
    {
      question: "¿Cuánto tiempo demora el servicio de pintura?",
      answer: "El tiempo depende del tamaño y complejidad del proyecto. Piletas pequeñas: 2-3 días. Estructuras medianas: 3-5 días. Proyectos grandes: 5-7 días. Incluye tiempo de secado entre capas."
    },
    {
      question: "¿Ofrecen garantía en el trabajo de pintura?",
      answer: "Sí, ofrecemos garantía por escrito en todos nuestros trabajos de pintura. La duración varía según el tipo de servicio (6 meses para pintura de piletas, 1 año para pintura anticorrosiva)."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Preguntas Frecuentes sobre Servicio de Pintura
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Información completa sobre nuestro servicio profesional de pintura en Pilar y Zona Norte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


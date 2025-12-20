"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo se calcula el precio por m2 de arenado?",
    answer: "El precio por m2 de arenado no es fijo, ya que depende de varios factores como el tipo de material (metal, madera, concreto), el estado superficial (cantidad de capas de pintura, óxido), la accesibilidad del área, si el trabajo se realiza in situ o en taller, la zona geográfica, y los plazos requeridos. Por eso, cada proyecto se cotiza de forma personalizada para ofrecerle el mejor precio según sus necesidades específicas."
  },
  {
    question: "¿Qué factores aumentan o reducen el costo del arenado?",
    answer: "Los factores que influyen en el costo incluyen: el tipo de material a tratar, el estado superficial (más capas de pintura o óxido requieren más trabajo), la accesibilidad del área (espacios reducidos o alturas pueden requerir equipos especiales), si el trabajo se realiza en su ubicación o en nuestro taller, los metros cuadrados totales (proyectos más grandes pueden tener mejor precio por m2), la urgencia del trabajo, y la zona geográfica (CABA, Zona Norte, Zona Oeste) que afecta los costos de movilidad."
  },
  {
    question: "¿Es más económico traer el trabajo al taller?",
    answer: "Generalmente, trabajar en taller puede ser más económico ya que no requiere movilidad de equipos y permite mejor control del proceso. Sin embargo, para grandes estructuras, piletas, o cuando no es posible mover las piezas, el servicio móvil es la opción adecuada. Cada caso se evalúa individualmente para ofrecerle la mejor solución y precio."
  },
  {
    question: "¿Afecta la zona (CABA, Norte, Oeste) al precio del arenado?",
    answer: "Sí, la zona puede influir en el precio debido a los costos de movilidad y desplazamiento de equipos. Trabajamos en CABA, Zona Norte y Zona Oeste. El costo de movilidad se incluye en la cotización personalizada según la ubicación específica del proyecto. Para trabajos en taller, la zona no afecta el precio."
  },
  {
    question: "¿El precio incluye la limpieza posterior?",
    answer: "Sí, nuestros presupuestos incluyen la limpieza y retiro de la arena sobrante después del arenado. Esto está contemplado en la cotización para que no tenga sorpresas. Si requiere algún servicio adicional, se especifica claramente en el presupuesto."
  },
  {
    question: "¿Ofrecen descuentos por volumen o proyectos grandes?",
    answer: "Sí, para proyectos grandes o trabajos recurrentes evaluamos descuentos por volumen. El precio por m2 puede ser más favorable en superficies extensas. Al solicitar su presupuesto, puede mencionar si tiene proyectos adicionales o si es un trabajo recurrente para que lo tengamos en cuenta en la cotización."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Preguntas frecuentes sobre precios
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Respuestas a las consultas más comunes sobre cómo se calcula el precio del arenado.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <button
                      className="flex-shrink-0 text-gray-500 hover:text-primary transition-colors"
                      aria-label={openIndex === index ? "Cerrar" : "Abrir"}
                    >
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tiene otra pregunta sobre precios?
            </p>
            <a
              href="#cotizar"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


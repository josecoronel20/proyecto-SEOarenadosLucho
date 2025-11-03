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
      question: "¿Cuál es el costo del arenado de fachadas profesional en Pilar y Zona Norte de Buenos Aires 2024?",
      answer: "El precio del arenado de fachadas profesional en Pilar y Zona Norte 2024 varía según factores como: tipo de edificio (residencial, comercial), dimensiones de la fachada, estado de la pintura, nivel de contaminación y acabado deseado. Para fachadas estándar en Pilar, San Isidro, Tigre y alrededores, realizamos una evaluación técnica gratuita para determinar el costo exacto. Ofrecemos presupuestos detallados sin cargo que incluyen asesoramiento especializado, garantía del servicio y toda la documentación necesaria como certificados de calidad y garantías por escrito."
    },
    {
      question: "¿Cuánto tiempo demora el arenado de fachadas profesional en Zona Norte Buenos Aires 2024?", 
      answer: "Los tiempos de arenado de fachadas en Zona Norte Buenos Aires 2024 varían según el proyecto: 1) Fachadas residenciales pequeñas: 1-2 días laborables, 2) Fachadas comerciales medianas: 2-3 días, 3) Edificios grandes o complejos: 3-5 días según estado y acabado. Disponemos de servicio express en Pilar, San Isidro y todo el corredor norte con equipamiento especializado para proyectos urgentes."
    },
    {
      question: "¿Qué cuidados necesitan las fachadas después del arenado profesional en Pilar y Zona Norte 2024?",
      answer: "Después del arenado profesional en Pilar y Zona Norte 2024, recomendamos estos cuidados esenciales: 1) Protección contra lluvia y humedad inmediata, 2) Aplicación rápida de pintura exterior o revestimiento según el acabado deseado, 3) Evitar exposición prolongada a contaminantes, 4) Seguimiento post-servicio para garantizar resultados duraderos. Proporcionamos guía completa de cuidados y seguimiento técnico post-servicio para asegurar la máxima durabilidad."
    },
    {
      question: "¿El arenado de fachadas profesional puede dañar la estructura del edificio en Pilar y Zona Norte?",
      answer: "No, nuestro servicio profesional de arenado de fachadas en Pilar y Zona Norte utiliza técnicas especializadas certificadas y personal altamente capacitado. El proceso preserva 100% la estructura original del edificio, eliminando únicamente pintura antigua, hongos, moho y contaminantes. Contamos con certificaciones profesionales y más de 15 años de experiencia en limpieza de fachadas en todo el corredor norte."
    },
    {
      question: "¿Cuáles son las zonas de cobertura para arenado de fachadas profesional en Buenos Aires 2024?",
      answer: "Brindamos servicio integral de arenado de fachadas en: 1) Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, Malvinas Argentinas, 2) Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez, 3) CABA: Núñez, Belgrano, Palermo, Villa Crespo. Disponemos de unidades móviles completamente equipadas y tecnología especializada en todo el corredor norte para proyectos de limpieza profesional de fachadas."
    },
    {
      question: "¿En qué época del año es recomendable realizar el arenado de fachadas en Pilar y Zona Norte 2024?",
      answer: "Ofrecemos servicio profesional de arenado de fachadas durante todo el año 2024 en Pilar y Zona Norte, con medidas especiales para cada estación. Recomendaciones por temporada: 1) Primavera-Otoño (marzo-mayo, septiembre-noviembre): condiciones óptimas para adherencia de pinturas, 2) Invierno: ideal para proyectos interiores y con protección especial, 3) Verano: disponibilidad inmediata con medidas contra el calor. Cada proyecto se planifica considerando condiciones climáticas y especificaciones técnicas de la fachada."
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
      <section className="py-16 bg-white" aria-label="Preguntas frecuentes sobre arenado de fachadas profesional en Pilar y Zona Norte Buenos Aires 2024">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes sobre Arenado de Fachadas Profesional en Pilar y Zona Norte Buenos Aires 2024
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Información completa sobre servicios profesionales de arenado de fachadas en Pilar, San Isidro, Tigre y toda la Zona Norte 2024. 
              Especialistas certificados en limpieza de fachadas residenciales y comerciales, eliminación de pintura antigua y preparación para pintura exterior con más de 15 años de experiencia comprobada en el corredor norte de Buenos Aires.
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
                ¿Necesitas asesoramiento profesional o presupuesto detallado para arenado de fachadas en Pilar y Zona Norte de Buenos Aires 2024?
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

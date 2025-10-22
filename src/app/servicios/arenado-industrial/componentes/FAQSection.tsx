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
      question: "¿Cuál es el costo del arenado industrial profesional en Pilar y Zona Norte de Buenos Aires?",
      answer: "El precio del arenado industrial profesional en Pilar y Zona Norte varía según factores como: dimensiones del proyecto, tipo de maquinaria o estructura, nivel de corrosión y ubicación específica. Para equipos industriales en Pilar, San Isidro, Tigre y alrededores, realizamos una evaluación técnica gratuita para determinar el costo exacto. Ofrecemos presupuestos detallados sin cargo que incluyen asesoramiento especializado, garantía del servicio y toda la documentación necesaria como certificados de seguridad, permisos de trabajo y garantías por escrito."
    },
    {
      question: "¿Cuánto tiempo demora el arenado industrial para maquinaria pesada y estructuras en Buenos Aires?", 
      answer: "Los tiempos de arenado industrial en Buenos Aires varían según el proyecto: 1) Maquinaria pesada estándar: 2-3 días laborables, 2) Estructuras industriales grandes: 3-5 días, 3) Tanques industriales: 4-7 días según dimensiones. Disponemos de servicio express en Zona Norte, CABA y GBA con equipamiento industrial de última generación para proyectos urgentes."
    },
    {
      question: "¿Qué mantenimiento necesitan los equipos después del arenado industrial en Zona Norte?",
      answer: "Después del arenado industrial profesional en Zona Norte, recomendamos estos cuidados esenciales: 1) Almacenamiento en ambiente controlado y seco, 2) Manipulación con EPP certificado, 3) Aplicación inmediata de pintura industrial o tratamiento anticorrosivo, 4) Protección contra humedad y contaminantes. Proporcionamos guía técnica completa y seguimiento post-servicio para garantizar resultados duraderos."
    },
    {
      question: "¿El arenado industrial profesional puede afectar la integridad de la maquinaria industrial en Buenos Aires?",
      answer: "No, nuestro servicio profesional de arenado industrial en Buenos Aires utiliza tecnología de precisión certificada y personal especializado. El proceso preserva 100% la integridad estructural de maquinaria pesada y equipos industriales, eliminando únicamente óxido, pintura antigua y contaminantes. Contamos con certificaciones industriales y más de 15 años de experiencia en Zona Norte."
    },
    {
      question: "¿Cuáles son las zonas de cobertura para arenado industrial profesional en Buenos Aires?",
      answer: "Brindamos servicio integral de arenado industrial en: 1) Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, Malvinas Argentinas, 2) Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez, 3) CABA: Núñez, Belgrano, Palermo, Villa Crespo. Disponemos de unidades móviles completamente equipadas y taller especializado en Zona Norte para proyectos industriales."
    },
    {
      question: "¿En qué época del año es recomendable realizar el arenado industrial en Zona Norte?",
      answer: "Ofrecemos servicio profesional de arenado industrial durante todo el año en Zona Norte, con instalaciones techadas certificadas. Recomendaciones por temporada: 1) Invierno (junio-agosto): condiciones óptimas para adherencia, 2) Primavera-Otoño: ideal para tratamientos y pinturas industriales, 3) Verano: disponibilidad inmediata con medidas especiales. Cada proyecto se planifica considerando condiciones climáticas y especificaciones técnicas."
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
      <section className="py-16 bg-white" aria-label="Preguntas frecuentes sobre arenado industrial profesional en Buenos Aires">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes sobre Arenado Industrial Profesional en Zona Norte Buenos Aires
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Información completa sobre servicios profesionales de arenado industrial en Pilar, San Isidro, Tigre y toda la Zona Norte. 
              Especialistas certificados en preparación de maquinaria pesada, estructuras metálicas y equipos industriales con más de 15 años de experiencia comprobada.
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
                ¿Necesitas asesoramiento profesional o presupuesto detallado para arenado industrial en Zona Norte de Buenos Aires?
              </p>
              <a
                href="https://wa.me/5491123787750?text=Hola,%20quiero%20consultar%20sobre%20servicios%20profesionales%20de%20arenado%20industrial%20en%20Zona%20Norte"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                aria-label="Solicitar presupuesto gratuito de arenado industrial profesional por WhatsApp"
              >
                Solicitar Presupuesto Gratuito y Asesoramiento Técnico
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

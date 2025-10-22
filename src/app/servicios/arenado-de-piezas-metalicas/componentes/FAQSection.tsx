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
      question: "¿Cuánto cuesta el servicio de arenado de piezas metálicas en Pilar y Zona Norte de Buenos Aires?",
      answer: "El precio del arenado industrial de piezas metálicas en Pilar y Zona Norte varía según el tamaño, cantidad y estado de corrosión. Para piezas estándar en Pilar, San Isidro, Tigre y alrededores, el costo se determina mediante evaluación de imágenes o visita técnica. Ofrecemos presupuesto gratuito sin compromiso con asesoramiento especializado incluido."
    },
    {
      question: "¿Cuál es el tiempo de trabajo para arenar piezas metálicas industriales en Buenos Aires?", 
      answer: "El proceso de arenado industrial en Buenos Aires tiene tiempos estimados según el proyecto. Servicio express disponible en Zona Norte, CABA y GBA con equipamiento industrial de última generación."
    },
    {
      question: "¿Qué cuidados requieren las piezas metálicas después del arenado industrial en Zona Norte?",
      answer: "Post arenado industrial en Zona Norte, las piezas quedan listas para galvanizado o pintura industrial. Recomendamos: 1) Almacenamiento en ambiente seco, 2) Manipulación con guantes, 3) Aplicación inmediata del tratamiento final, 4) Protección contra humedad. Brindamos asesoramiento técnico completo."
    },
    {
      question: "¿El proceso de arenado industrial puede dañar las piezas metálicas en Buenos Aires?",
      answer: "No, nuestro servicio profesional de arenado en Buenos Aires utiliza tecnología industrial de precisión certificada. El proceso preserva dimensiones y tolerancias originales, eliminando únicamente óxido y contaminantes. Contamos con más de 15 años de experiencia en Zona Norte."
    },
    {
      question: "¿Cuál es la cobertura del servicio de arenado industrial en Buenos Aires?",
      answer: "Brindamos servicio completo de arenado industrial en: 1) Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, 2) Zona Oeste: Moreno, Hurlingham, Ituzaingó, 3) CABA: Núñez, Belgrano, Palermo. Contamos con unidades móviles equipadas y taller especializado en Zona Norte."
    },
    {
      question: "¿Cuál es la mejor temporada para realizar arenado industrial en Zona Norte?",
      answer: "Realizamos arenado industrial todo el año en Zona Norte con instalaciones techadas profesionales. Recomendamos: 1) Invierno (junio-agosto): condiciones óptimas, 2) Primavera-Otoño: ideal para tratamientos posteriores, 3) Verano: disponibilidad inmediata. Planificamos cada proyecto según condiciones climáticas y requerimientos específicos."
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
      <section className="py-16 bg-white" aria-label="Preguntas frecuentes sobre arenado industrial de piezas metálicas en Buenos Aires">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Preguntas Frecuentes: Arenado Industrial de Piezas Metálicas en Zona Norte Buenos Aires
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Resolvemos tus dudas sobre arenado industrial profesional en Pilar, San Isidro, Tigre y toda la Zona Norte. 
              Expertos en preparación de superficies metálicas para galvanizado y pintura industrial con más de 15 años de experiencia.
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
                ¿Necesitás presupuesto o asesoramiento sobre arenado industrial en Zona Norte?
              </p>
              <a
                href="https://wa.me/5491123787750?text=Hola,%20quiero%20consultar%20sobre%20arenado%20industrial%20en%20Zona%20Norte"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                aria-label="Solicitar presupuesto gratuito de arenado industrial por WhatsApp"
              >
                Solicitar Presupuesto Gratuito
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

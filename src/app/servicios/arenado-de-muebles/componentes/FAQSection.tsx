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
      question: "¿Cuál es el precio del arenado de muebles en Pilar y Zona Norte? Costos 2025",
      answer: "El precio del arenado de muebles en Pilar y Zona Norte de Buenos Aires varía según: dimensiones, material (madera, metal o mixto), estado actual y acabado deseado. Para muebles estándar en Pilar, San Isidro y Tigre, ofrecemos evaluación y presupuesto gratuito que incluye: diagnóstico profesional, certificado de garantía, documentación técnica y asesoramiento especializado. Contáctenos para una cotización personalizada."
    },
    {
      question: "¿Cuánto tarda el proceso de arenado y restauración de muebles en Buenos Aires?", 
      answer: "Los tiempos de arenado y restauración de muebles en Buenos Aires son: 1) Muebles pequeños como sillas o mesas auxiliares: 24-48 horas, 2) Muebles medianos como armarios o mesas de comedor: 2-3 días, 3) Muebles grandes o con detalles especiales: 3-5 días. Servicio express disponible en Zona Norte, CABA y GBA para proyectos urgentes con equipamiento profesional especializado."
    },
    {
      question: "¿Qué mantenimiento requieren los muebles después del arenado profesional?",
      answer: "Post arenado profesional recomendamos: 1) Almacenamiento en ambiente seco y controlado, 2) Manipulación cuidadosa evitando golpes y rayones, 3) Aplicación inmediata de protección (barniz, laca o pintura según especificaciones), 4) Control de humedad y limpieza periódica. Brindamos manual completo de cuidados y garantía por escrito para asegurar la durabilidad del resultado."
    },
    {
      question: "¿El arenado profesional daña la madera o estructura original del mueble?",
      answer: "No, nuestro servicio certificado de arenado preserva 100% la integridad estructural y veta natural de la madera. Utilizamos tecnología de última generación y personal especializado con más de 15 años de experiencia en Zona Norte. El proceso elimina únicamente capas deterioradas (pintura antigua, barniz, óxido) manteniendo intacta la estructura original del mueble."
    },
    {
      question: "¿Dónde realizan arenado de muebles en Buenos Aires? Zonas de cobertura 2025",
      answer: "Servicio integral de arenado en: 1) Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, San Martín y Malvinas Argentinas, 2) Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez, 3) CABA: Núñez, Belgrano, Palermo, Recoleta y Villa Crespo. Contamos con taller especializado en Zona Norte y unidades móviles totalmente equipadas."
    },
    {
      question: "¿Cuál es la mejor época para arenar y restaurar muebles en Buenos Aires?",
      answer: "Realizamos arenado profesional todo el año en instalaciones certificadas y climatizadas. Recomendaciones por temporada: 1) Invierno: condiciones ideales para adherencia de tratamientos, 2) Primavera/Otoño: óptimo para todo tipo de acabados, 3) Verano: disponemos de medidas especiales y tecnología de control ambiental. Cada proyecto se adapta a condiciones climáticas específicas."
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
      <section className="py-16 bg-white" aria-label="FAQ Arenado de Muebles Buenos Aires 2025 - Precios, Zonas y Servicios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Arenado de Muebles Buenos Aires 2025 | Preguntas Frecuentes, Precios y Zonas de Cobertura
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Información actualizada sobre servicios profesionales de arenado y restauración de muebles en Pilar, San Isidro y toda la Zona Norte. 
              Más de 15 años de experiencia en recuperación de muebles antiguos, eliminación de pintura y preparación para acabados premium. Servicio certificado con garantía escrita.
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
                ¿Necesitas un presupuesto detallado para arenado de muebles en Buenos Aires? Consultá con nuestros especialistas
              </p>
              <a
                href="https://wa.me/5491123787750?text=Hola,%20quiero%20consultar%20precios%20y%20servicios%20de%20arenado%20de%20muebles%20en%20Buenos%20Aires"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                aria-label="Cotización gratuita arenado de muebles Buenos Aires 2025"
                rel="noopener noreferrer"
              >
                Solicitar Presupuesto Gratuito | Respuesta Inmediata
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

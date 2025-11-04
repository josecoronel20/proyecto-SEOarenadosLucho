import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Acero Inoxidable | Limpieza y Preparación Profesional - Arenados Lucho",
  description: "Arenado especializado de acero inoxidable. Eliminación de manchas, marcas y preparación de superficie. Tratamiento que preserva las propiedades del material. Servicio en Pilar y Zona Norte.",
  keywords: "arenado acero inoxidable, limpieza de acero inoxidable, preparación acero inoxidable",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/acero-inoxidable"
  }
}

const faqs = [
  {
    question: "¿El arenado afecta la resistencia a la corrosión del acero inoxidable?",
    answer: "No, cuando se realiza correctamente por especialistas, el arenado preserva las propiedades del acero inoxidable. Utilizamos abrasivos y parámetros específicos que no comprometen la capa pasiva del material."
  },
  {
    question: "¿Qué tipos de marcas se pueden eliminar del acero inoxidable?",
    answer: "Eliminamos manchas de soldadura, marcas de fabricación, manchas de óxido superficial, arañazos y marcas de uso. El proceso deja la superficie limpia y lista para tratamientos posteriores."
  },
  {
    question: "¿Cuánto tiempo demora el arenado de acero inoxidable?",
    answer: "Piezas pequeñas: 1-2 días. Superficies medianas: 2-3 días. Proyectos grandes: 3-5 días. El tiempo depende del tamaño y tipo de contaminantes a eliminar."
  },
  {
    question: "¿Ofrecen servicio de arenado de acero inoxidable en Zona Norte?",
    answer: "Sí, brindamos servicio especializado de arenado de acero inoxidable en Pilar, San Isidro, Tigre y toda Zona Norte. Disponemos de taller especializado y servicio móvil."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Acero Inoxidable",
  "description": "Arenado especializado de acero inoxidable en Pilar y Zona Norte. Preservación de propiedades del material.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/acero-inoxidable",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Acero Inoxidable"
}

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

export default function ArenadoDeAceroInoxidablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Breadcrumbs segments={[
        { label: 'Inicio', href: '/' },
        { label: 'Superficies que Arenamos', href: '/superficies-que-arenamos' },
        { label: 'Arenado de Metales', href: '/superficies-que-arenamos/arenado-de-metales' },
        { label: 'Acero Inoxidable' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Acero Inoxidable</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de acero inoxidable</strong> requiere técnicas especializadas que preservan la capa pasiva 
                del material mientras eliminan manchas, marcas y contaminantes superficiales. Este proceso garantiza una 
                <strong>limpieza profesional</strong> que mantiene las propiedades de resistencia a la corrosión del acero 
                inoxidable. Nuestro servicio especializado en Pilar, San Isidro, Tigre y Zona Norte utiliza abrasivos y 
                parámetros controlados que <strong>no comprometen la integridad del material</strong>, dejando la superficie 
                perfectamente preparada para tratamientos posteriores o mantenimiento estético.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
                <Button size="lg" variant="outline" asChild>
                  <Link href="/presupuesto-rapido">Cotizar Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/superficies/arenado-superficie-acero-inoxidable-pilar.png"
                  alt="Arenado profesional de acero inoxidable en Pilar y Zona Norte"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                Por qué Elegirnos para Arenado de Acero Inoxidable
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Preservación de Propiedades",
                    desc: "Técnicas especializadas que preservan la capa pasiva y resistencia a la corrosión."
                  },
                  {
                    icon: Wrench,
                    title: "Técnicas Especializadas",
                    desc: "Abrasivos y parámetros controlados específicos para acero inoxidable."
                  },
                  {
                    icon: Award,
                    title: "Experiencia Certificada",
                    desc: "Más de 20 años tratando acero inoxidable en proyectos industriales y arquitectónicos."
                  },
                  {
                    icon: CheckCircle,
                    title: "Eliminación de Manchas",
                    desc: "Removemos manchas de soldadura, marcas de fabricación y óxido superficial."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Rápido",
                    desc: "Tiempos optimizados sin comprometer la calidad del tratamiento."
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento Técnico",
                    desc: "Recomendaciones profesionales para mantenimiento post-arenado."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <item.icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Características del Tratamiento</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de acero inoxidable requiere técnicas especializadas para no dañar la capa pasiva del material. 
                  Utilizamos abrasivos específicos y parámetros controlados que garantizan una limpieza efectiva sin comprometer 
                  la resistencia a la corrosión del acero inoxidable. El proceso elimina manchas, marcas de fabricación y 
                  contaminantes, dejando la superficie lista para tratamientos posteriores o simplemente restaurada a su estado original.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Acero Inoxidable
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-lg p-6 cursor-pointer shadow-md">
                    <summary className="font-semibold text-lg text-gray-900 mb-2">
                      {faq.question}
                    </summary>
                    <p className="text-gray-700 mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Presupuesto para Arenado de Acero Inoxidable en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio especializado en Pilar y Zona Norte. Presupuesto sin cargo. También disponible en Zona Oeste.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


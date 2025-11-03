import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Aluminio | Tratamiento Especializado - Arenados Lucho",
  description: "Arenado de piezas y estructuras de aluminio. Eliminación de óxido superficial y preparación para anodizado o pintura. Tratamiento delicado que no daña el material. Servicio en Pilar y Zona Norte.",
  keywords: "arenado aluminio, limpieza de aluminio, preparación aluminio, anodizado aluminio",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/aluminio"
  }
}

const faqs = [
  {
    question: "¿El arenado daña la superficie del aluminio?",
    answer: "No, cuando se realiza correctamente por especialistas, el arenado no daña el aluminio. Utilizamos parámetros específicos y abrasivos suaves que respetan la suavidad del material, eliminando solo contaminantes superficiales."
  },
  {
    question: "¿Para qué se utiliza el arenado de aluminio?",
    answer: "El arenado de aluminio se utiliza para eliminar óxido superficial, preparar para anodizado, preparar para pintura, restaurar piezas y eliminar marcas de fabricación. Es ideal antes de procesos de anodizado o aplicación de pintura especializada."
  },
  {
    question: "¿Cuánto tiempo demora el proceso?",
    answer: "Piezas pequeñas: 1 día. Estructuras medianas: 2-3 días. Proyectos grandes: 3-5 días. El tiempo depende del tamaño y estado de las piezas de aluminio."
  },
  {
    question: "¿Ofrecen servicio de arenado de aluminio en Zona Norte?",
    answer: "Sí, brindamos servicio especializado de arenado de aluminio en Pilar, San Isidro, Tigre y toda Zona Norte. Contamos con taller especializado y parámetros controlados para este material delicado."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Aluminio",
  "description": "Arenado especializado de aluminio en Pilar y Zona Norte. Preparación para anodizado y pintura.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/aluminio",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Aluminio"
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

export default function ArenadoDeAluminioPage() {
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
        { label: 'Aluminio' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Aluminio</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de aluminio</strong> requiere técnicas especialmente delicadas debido a la suavidad del material. 
                Este proceso elimina <strong>óxido superficial</strong> y prepara la superficie para <strong>anodizado</strong> o 
                <strong>pintura especializada</strong>, sin dañar la integridad del aluminio. Nuestro servicio especializado en Pilar, 
                San Isidro, Tigre y Zona Norte utiliza <strong>abrasivos suaves y parámetros controlados</strong> que respetan las 
                propiedades del material, garantizando una preparación perfecta para procesos posteriores mientras preservamos 
                completamente la estructura y resistencia del aluminio.
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
                  src="/images/superficies/arenado-aluminio-zona-norte.jpg"
                  alt="Arenado profesional de aluminio en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Aluminio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Tratamiento Delicado",
                    desc: "Parámetros específicos que respetan la suavidad del aluminio sin dañar la superficie."
                  },
                  {
                    icon: Wrench,
                    title: "Preparación para Anodizado",
                    desc: "Superficie perfecta para procesos de anodizado y tratamientos especializados."
                  },
                  {
                    icon: Award,
                    title: "Experiencia Especializada",
                    desc: "Más de 20 años tratando aluminio en proyectos industriales y arquitectónicos."
                  },
                  {
                    icon: CheckCircle,
                    title: "Preservación de Propiedades",
                    desc: "Técnicas que no comprometen la resistencia y características del aluminio."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Eficiente",
                    desc: "Tiempos optimizados con resultados de alta calidad garantizados."
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento Técnico",
                    desc: "Recomendaciones profesionales para anodizado o pintura post-arenado."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Aplicaciones</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de aluminio es ideal para preparar piezas antes de procesos de anodizado, eliminar óxido superficial, 
                  preparar para pintura especializada y restaurar elementos arquitectónicos o industriales. Utilizamos parámetros 
                  específicos debido a la suavidad del material, garantizando una limpieza efectiva sin dañar la superficie del 
                  aluminio, preparándolo idealmente para procesos de anodizado o aplicación de pintura de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Aluminio
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
                Presupuesto para Arenado de Aluminio en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Tratamiento especializado en Pilar y Zona Norte. Presupuesto sin cargo. También disponible en Zona Oeste.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


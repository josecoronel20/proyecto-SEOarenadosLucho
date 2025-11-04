import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users, Building2 } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Hormigón | Preparación para Obras y Construcción - Arenados Lucho",
  description: "Arenado de superficies de hormigón para obras y construcción. Eliminación de pintura, marcas y preparación para revestimiento. Ideal para pisos, muros y estructuras. Servicio en Pilar y Zona Norte.",
  keywords: "arenado de hormigón, preparación de hormigón, arenado pisos hormigón, limpieza hormigón construcción",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-hormigon"
  }
}

const faqs = [
  {
    question: "¿Para qué se utiliza el arenado de hormigón?",
    answer: "El arenado de hormigón se utiliza para eliminar pintura antigua, marcas de encofrado, preparar para revestimientos, nivelar superficies y preparar para pintura epoxi. Es esencial en construcción y renovación de obras."
  },
  {
    question: "¿Cuánto cuesta arenar pisos de hormigón en Zona Norte?",
    answer: "El precio varía según dimensiones y estado. Pisos pequeños (50m²): desde $80.000. Medianos (100m²): desde $150.000. Grandes (200m²+): desde $250.000. Presupuesto gratuito sin cargo."
  },
  {
    question: "¿El arenado afecta la resistencia del hormigón?",
    answer: "No, cuando se realiza correctamente, el arenado solo elimina material superficial. No afecta la resistencia estructural del hormigón, preparándolo idealmente para revestimientos o tratamientos."
  },
  {
    question: "¿Ofrecen servicio de arenado de hormigón en obras?",
    answer: "Sí, brindamos servicio de arenado de hormigón en obras y construcción en Pilar, San Isidro, Tigre y toda Zona Norte. Disponemos de equipamiento móvil para proyectos in situ."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Hormigón",
  "description": "Arenado de hormigón para obras y construcción en Pilar y Zona Norte. Preparación para revestimientos.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-hormigon",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Hormigón"
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

export default function ArenadoDeHormigonPage() {
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
        { label: 'Arenado de Hormigón' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Hormigón</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de hormigón</strong> es esencial en construcción y renovación de obras, eliminando 
                <strong>pintura antigua</strong>, <strong>marcas de encofrado</strong> y preparando superficies para 
                <strong>revestimientos</strong> o <strong>pintura epoxi</strong>. Este proceso garantiza una 
                <strong>preparación profesional</strong> que mejora la adherencia de tratamientos posteriores y nivela 
                superficies irregulares. Nuestro servicio en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas 
                certificadas que <strong>respetan la estructura del hormigón</strong> mientras eliminan completamente 
                contaminantes superficiales, dejando pisos, muros y estructuras perfectamente preparados para el siguiente 
                paso de su proyecto de construcción o renovación.
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
                  src="/images/superficies/arenado-superficie-hormigon-Moron.png"
                  alt="Arenado profesional de hormigón en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Hormigón
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: "Especialistas en Obras",
                    desc: "Experiencia comprobada en proyectos de construcción y renovación."
                  },
                  {
                    icon: Wrench,
                    title: "Eliminación de Marcas",
                    desc: "Removemos marcas de encofrado, pintura y preparación para revestimientos."
                  },
                  {
                    icon: Award,
                    title: "Más de 20 Años",
                    desc: "Experiencia certificada en arenado de hormigón para obras en Zona Norte."
                  },
                  {
                    icon: Shield,
                    title: "Preservación Estructural",
                    desc: "Técnicas que no afectan la resistencia del hormigón, solo material superficial."
                  },
                  {
                    icon: Clock,
                    title: "Servicio para Obras",
                    desc: "Equipamiento móvil y tiempos optimizados para proyectos de construcción."
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento Técnico",
                    desc: "Recomendaciones profesionales para revestimientos y tratamientos post-arenado."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Aplicaciones del Arenado de Hormigón</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de hormigón es esencial en construcción y renovación. Eliminamos pintura, marcas de encofrado 
                  y preparamos la superficie para revestimientos, pintura epoxi o tratamientos especializados. Ideal para 
                  pisos industriales, muros, estructuras y elementos arquitectónicos que requieren preparación profesional 
                  antes de aplicar revestimientos o tratamientos protectores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Hormigón
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
                Presupuesto para Arenado de Hormigón en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio para obras en Pilar y Zona Norte. Presupuesto sin cargo. También disponible en Zona Oeste.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

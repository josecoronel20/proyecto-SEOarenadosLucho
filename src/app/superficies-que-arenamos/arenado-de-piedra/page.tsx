import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Piedra | Restauración y Limpieza Profesional - Arenados Lucho",
  description: "Arenado de superficies de piedra natural para restauración. Eliminación de manchas, pintura y preparación para tratamientos protectores. Ideal para fachadas y elementos decorativos. Servicio en Pilar y Zona Norte.",
  keywords: "arenado piedra, restauración de piedra, limpieza piedra natural, preparación piedra fachadas",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-piedra"
  }
}

const faqs = [
  {
    question: "¿El arenado daña la piedra natural?",
    answer: "No, cuando se realiza correctamente por especialistas, el arenado respeta la textura y estructura de la piedra natural. Utilizamos parámetros controlados que eliminan manchas y pintura sin dañar el material."
  },
  {
    question: "¿Qué tipos de piedra pueden arenarse?",
    answer: "Arenamos todo tipo de piedra natural: granito, mármol, piedra laja, ladrillo visto, piedra reconstituida y otros materiales pétreos. Cada tipo requiere técnicas específicas para preservar sus características."
  },
  {
    question: "¿Cuánto cuesta arenar fachadas de piedra en Zona Norte?",
    answer: "El precio varía según dimensiones y tipo de piedra. Fachadas pequeñas (50m²): desde $100.000. Medianas (100m²): desde $180.000. Grandes (200m²+): desde $300.000. Presupuesto gratuito sin cargo."
  },
  {
    question: "¿Qué tratamiento se recomienda después del arenado de piedra?",
    answer: "Recomendamos aplicar selladores o tratamientos protectores específicos para piedra natural. El arenado deja la superficie perfectamente preparada para que estos tratamientos penetren y protejan eficazmente."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Piedra",
  "description": "Arenado y restauración de piedra natural en Pilar y Zona Norte. Limpieza de fachadas y elementos decorativos.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-piedra",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Piedra"
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

export default function ArenadoDePiedraPage() {
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
        { label: 'Arenado de Piedra' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Piedra</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de piedra natural</strong> es ideal para restaurar fachadas y elementos arquitectónicos, 
                eliminando <strong>manchas</strong>, <strong>pintura antigua</strong> y <strong>contaminantes</strong> sin 
                dañar la textura natural del material. Este proceso garantiza una <strong>limpieza profesional</strong> que 
                respeta las características únicas de cada tipo de piedra, preparando la superficie para 
                <strong>selladores</strong> o <strong>tratamientos protectores</strong>. Nuestro servicio en Pilar, San Isidro, 
                Tigre y Zona Norte utiliza técnicas especializadas que <strong>preservan la belleza natural de la piedra</strong>, 
                permitiendo restaurar fachadas históricas y elementos decorativos con resultados excepcionales y durables.
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
                  src="/images/superficies/arenado-superficie-piedra-san-miguel.png"
                  alt="Arenado profesional de piedra en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Piedra
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Sparkles,
                    title: "Respeto por la Textura",
                    desc: "Técnicas que preservan la textura y belleza natural de cada tipo de piedra."
                  },
                  {
                    icon: Wrench,
                    title: "Eliminación de Manchas",
                    desc: "Removemos manchas, pintura antigua y contaminantes sin dañar el material."
                  },
                  {
                    icon: Award,
                    title: "Experiencia en Restauración",
                    desc: "Más de 20 años restaurando fachadas y elementos arquitectónicos de piedra."
                  },
                  {
                    icon: Shield,
                    title: "Preparación para Tratamientos",
                    desc: "Superficie perfecta para selladores y tratamientos protectores específicos."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Especializado",
                    desc: "Tiempos apropiados para cada tipo de piedra y proyecto de restauración."
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento Técnico",
                    desc: "Recomendaciones profesionales para selladores y mantenimiento post-arenado."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Aplicaciones del Arenado de Piedra</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de piedra natural es ideal para restaurar fachadas, eliminar manchas, pintura antigua 
                  y preparar la superficie para tratamientos protectores. Utilizamos técnicas que respetan la textura 
                  natural de la piedra mientras eliminan contaminantes y preparan la superficie para selladores o 
                  tratamientos especializados. Especialmente efectivo para fachadas históricas, elementos decorativos 
                  y restauración arquitectónica.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Piedra
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
                Presupuesto para Arenado de Piedra en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Restauración profesional en Pilar y Zona Norte. Presupuesto sin cargo. También disponible en Zona Oeste.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

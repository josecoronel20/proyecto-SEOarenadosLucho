import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { CheckCircle, Shield, Wrench, Award, Clock, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Hierro | Eliminación de Óxido y Preparación - Arenados Lucho",
  description: "Arenado profesional de hierro. Eliminación de óxido, corrosión y pintura antigua. Preparación para pintura anticorrosiva. Ideal para estructuras, rejas y elementos arquitectónicos. Servicio en Pilar y Zona Norte.",
  keywords: "arenado de hierro, limpieza de hierro, preparación de hierro, eliminación de óxido hierro, arenado estructuras hierro",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/hierro"
  }
}

const faqs = [
  {
    question: "¿Cuánto cuesta arenar estructuras de hierro en Zona Norte?",
    answer: "El precio del arenado de hierro varía según dimensiones, nivel de corrosión y ubicación. Rejas pequeñas desde $60.000, estructuras medianas desde $120.000, proyectos grandes desde $200.000. Presupuesto gratuito sin cargo en 24h."
  },
  {
    question: "¿El arenado elimina completamente el óxido del hierro?",
    answer: "Sí, nuestro servicio profesional elimina completamente el óxido, corrosión y pintura antigua del hierro. La superficie queda limpia y rugosa, ideal para la adherencia de pintura anticorrosiva o tratamientos protectores."
  },
  {
    question: "¿Qué hacer después del arenado de hierro?",
    answer: "Recomendamos aplicar pintura anticorrosiva inmediatamente después del arenado para proteger el hierro. El proceso deja la superficie perfectamente preparada para máxima adherencia y protección duradera."
  },
  {
    question: "¿Arenan hierro en Pilar y Zona Norte?",
    answer: "Sí, brindamos servicio de arenado de hierro en Pilar, San Isidro, Tigre, Vicente López, San Fernando y toda Zona Norte. Disponemos de servicio móvil a domicilio y taller especializado."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Hierro",
  "description": "Servicio profesional de arenado de hierro en Pilar y Zona Norte. Eliminación de óxido y preparación para pintura anticorrosiva.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales/hierro",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte", "Zona Oeste"],
  "serviceType": "Arenado de Hierro"
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

export default function ArenadoDeHierroPage() {
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
        { label: 'Hierro' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Hierro</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de hierro</strong> es esencial para eliminar completamente el óxido y la corrosión que 
                comprometen la integridad de estructuras y elementos metálicos. Este proceso garantiza una 
                <strong>preparación profesional</strong> que prolonga significativamente la vida útil del hierro, dejando 
                una superficie limpia y rugosa ideal para la adherencia de pinturas anticorrosivas. Nuestro servicio 
                especializado en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas certificadas que 
                <strong>preservan la resistencia estructural</strong> mientras eliminan todos los contaminantes, 
                preparando perfectamente para tratamientos protectores de larga duración.
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
                  src="/images/superficies/arenado-hierro-zona-norte.jpg"
                  alt="Arenado profesional de hierro en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Hierro
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Wrench,
                    title: "Eliminación Completa de Óxido",
                    desc: "Removemos completamente el óxido y la corrosión sin dañar la estructura del hierro."
                  },
                  {
                    icon: Shield,
                    title: "Preparación para Pintura",
                    desc: "Superficie rugosa ideal para máxima adherencia de pinturas anticorrosivas."
                  },
                  {
                    icon: Award,
                    title: "Experiencia Comprobada",
                    desc: "Más de 20 años tratando estructuras de hierro en Pilar y Zona Norte."
                  },
                  {
                    icon: CheckCircle,
                    title: "Preservación de Integridad",
                    desc: "Técnicas que no afectan la resistencia estructural del hierro."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Rápido",
                    desc: "Tiempos optimizados. Rejas y estructuras pequeñas en 1-2 días."
                  },
                  {
                    icon: Users,
                    title: "Atención Personalizada",
                    desc: "Asesoramiento técnico gratuito y garantía por escrito en todos los trabajos."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Aplicaciones del Arenado de Hierro</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Estructuras", desc: "Vigas, columnas, estructuras metálicas de edificios y obras" },
                  { title: "Rejas y Cercos", desc: "Rejas de seguridad, portones, cercos perimetrales" },
                  { title: "Elementos Arquitectónicos", desc: "Puertas, ventanas, barandas, elementos decorativos" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Proceso de Arenado</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de hierro elimina completamente el óxido y la corrosión, dejando una superficie limpia 
                  y rugosa ideal para la adherencia de pinturas anticorrosivas. El proceso garantiza una preparación 
                  profesional que prolonga la vida útil de las estructuras de hierro, previniendo futura corrosión 
                  cuando se aplica el tratamiento protector adecuado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Hierro
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
                Presupuesto para Arenado de Hierro en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio en Pilar, San Isidro, Tigre y Zona Norte. Presupuesto sin cargo en 24h. 
                También disponible en Zona Oeste y CABA.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


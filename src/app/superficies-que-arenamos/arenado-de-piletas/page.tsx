import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users, Droplets } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Piletas | Limpieza Profunda y Preparación - Arenados Lucho",
  description: "Arenado profesional de piletas. Limpieza profunda y preparación para pintura epoxi. Eliminación de algas, manchas y pintura antigua. Servicio móvil en Pilar y Zona Norte.",
  keywords: "arenado de piletas, limpieza de piletas, preparación de piletas, renovación de piletas",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-piletas"
  }
}

const faqs = [
  {
    question: "¿Cuánto cuesta arenar una pileta en Zona Norte?",
    answer: "El precio del arenado de piletas varía según dimensiones. Piletas pequeñas (4x8m): desde $80.000. Medianas (6x12m): desde $120.000. Grandes (8x16m): desde $180.000. Presupuesto gratuito sin cargo en 24h."
  },
  {
    question: "¿El arenado elimina completamente las manchas y algas?",
    answer: "Sí, nuestro servicio profesional elimina completamente algas, manchas, pintura antigua y contaminantes de la superficie de la pileta. El proceso deja la superficie limpia y rugosa, ideal para la adherencia de pintura epoxi o revestimiento."
  },
  {
    question: "¿Qué se debe hacer después del arenado de pileta?",
    answer: "Recomendamos aplicar pintura epoxi o revestimiento inmediatamente después del arenado para proteger la superficie. El proceso deja la pileta perfectamente preparada para máxima adherencia y durabilidad del tratamiento posterior."
  },
  {
    question: "¿Ofrecen servicio de arenado de piletas en Pilar y Zona Norte?",
    answer: "Sí, brindamos servicio de arenado de piletas en Pilar, San Isidro, Tigre, Vicente López, San Fernando y toda Zona Norte. Disponemos de servicio móvil a domicilio con equipamiento especializado."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Piletas",
  "description": "Arenado profesional de piletas en Pilar y Zona Norte. Limpieza profunda y preparación para pintura epoxi.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-piletas",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Piletas"
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

export default function ArenadoDePiletasPage() {
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
        { label: 'Arenado de Piletas' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Piletas</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de piletas</strong> es esencial para realizar una limpieza profunda y preparación profesional 
                de la superficie antes de aplicar pintura epoxi o revestimiento. Este proceso elimina completamente 
                <strong>algas</strong>, <strong>manchas</strong>, <strong>pintura antigua</strong> y <strong>contaminantes</strong>, 
                dejando la superficie limpia y rugosa ideal para la adherencia de tratamientos protectores. Nuestro servicio 
                especializado en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas certificadas que 
                <strong>preservan la integridad del hormigón</strong> mientras eliminan todos los contaminantes superficiales, 
                preparando perfectamente la pileta para renovación completa con resultados duraderos.
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
                  src="/images/servicios/arenado-pileta-pilar.png"
                  alt="Arenado profesional de piletas en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Piletas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Droplets,
                    title: "Limpieza Profunda",
                    desc: "Eliminación completa de algas, manchas y pintura antigua sin dañar el hormigón."
                  },
                  {
                    icon: Shield,
                    title: "Preparación para Pintura",
                    desc: "Superficie rugosa ideal para máxima adherencia de pintura epoxi o revestimiento."
                  },
                  {
                    icon: Award,
                    title: "Más de 20 Años",
                    desc: "Experiencia comprobada en arenado de piletas en Pilar y Zona Norte."
                  },
                  {
                    icon: CheckCircle,
                    title: "Servicio Móvil",
                    desc: "Equipamiento móvil a domicilio. Servicio completo en el día para piletas estándar."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Rápido",
                    desc: "Piletas pequeñas y medianas terminadas en el día. Proyectos grandes en 2-3 días."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Proceso de Arenado</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de piletas elimina completamente algas, manchas, pintura antigua y contaminantes, dejando una 
                  superficie limpia y rugosa ideal para la adherencia de pintura epoxi o revestimiento. El proceso garantiza 
                  una preparación profesional que prolonga la vida útil de la pileta, previniendo futuros problemas cuando se 
                  aplica el tratamiento protector adecuado. Nuestro servicio móvil a domicilio garantiza comodidad y resultados 
                  profesionales sin necesidad de mover la pileta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Piletas
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
                Presupuesto para Arenado de Piletas en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio móvil a domicilio en Pilar y Zona Norte. Presupuesto sin cargo en 24h. También disponible en Zona Oeste.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


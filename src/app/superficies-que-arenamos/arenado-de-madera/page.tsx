import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { Shield, Award, CheckCircle, Wrench, Clock, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Arenado de Madera | Restauración y Eliminación de Pintura - Arenados Lucho",
  description: "Arenado de superficies de madera para restauración. Eliminación de pintura antigua y preparación para barnizado, lacado o pintura. Ideal para muebles y elementos arquitectónicos. Servicio en Pilar y Zona Norte.",
  keywords: "arenado de madera, restauración de madera, eliminación pintura madera, preparación madera barnizado",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-madera"
  }
}

const faqs = [
  {
    question: "¿El arenado daña la veta de la madera?",
    answer: "No, cuando se realiza correctamente por especialistas, el arenado respeta la veta natural de la madera. Utilizamos técnicas y parámetros específicos que eliminan pintura y barniz antiguo sin afectar la estructura y belleza natural del material."
  },
  {
    question: "¿Qué tipos de muebles pueden arenarse?",
    answer: "Arenamos todo tipo de muebles de madera: sillas, mesas, armarios, puertas, ventanas, elementos arquitectónicos y piezas decorativas. El proceso elimina capas de pintura acumuladas y prepara para nuevos acabados."
  },
  {
    question: "¿Cuánto tiempo demora el arenado de madera?",
    answer: "Muebles pequeños: 1-2 días. Piezas medianas: 2-3 días. Proyectos grandes: 3-5 días. El tiempo depende del tamaño, número de capas de pintura y complejidad del diseño."
  },
  {
    question: "¿Qué acabado se recomienda después del arenado de madera?",
    answer: "Recomendamos barnizado, lacado o pintura especializada para madera. El arenado deja la superficie perfectamente preparada para que estos acabados se adhieran correctamente y duren mucho más tiempo."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Madera",
  "description": "Arenado y restauración de madera en Pilar y Zona Norte. Eliminación de pintura y preparación para barnizado.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-madera",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte"],
  "serviceType": "Arenado de Madera"
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

export default function ArenadoDeMaderaPage() {
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
        { label: 'Arenado de Madera' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Madera</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de madera</strong> es la técnica ideal para restaurar muebles y elementos arquitectónicos, 
                eliminando completamente <strong>capas de pintura antigua</strong> y <strong>barniz deteriorado</strong> sin 
                dañar la veta natural del material. Este proceso garantiza una <strong>preparación profesional</strong> que 
                respeta la belleza y estructura original de la madera, dejando una superficie limpia y lista para 
                <strong>barnizado</strong>, <strong>lacado</strong> o <strong>pintura especializada</strong>. Nuestro servicio 
                en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas que <strong>preservan la integridad de la madera</strong>, 
                permitiendo restaurar muebles antiguos y elementos decorativos con resultados excepcionales.
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
                  src="/images/servicios/arenado-mueble-madera-pilar.png"
                  alt="Arenado profesional de madera en Pilar y Zona Norte"
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
                Por qué Elegirnos para Arenado de Madera
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Sparkles,
                    title: "Respeto por la Veta",
                    desc: "Técnicas que preservan la belleza natural y veta de la madera."
                  },
                  {
                    icon: Wrench,
                    title: "Eliminación Completa",
                    desc: "Removemos todas las capas de pintura y barniz antiguo sin dañar la madera."
                  },
                  {
                    icon: Award,
                    title: "Experiencia en Restauración",
                    desc: "Más de 20 años restaurando muebles y elementos arquitectónicos de madera."
                  },
                  {
                    icon: Shield,
                    title: "Preparación para Acabados",
                    desc: "Superficie perfecta para barnizado, lacado o pintura especializada."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Cuidadoso",
                    desc: "Tiempos apropiados para cada tipo de madera y proyecto."
                  },
                  {
                    icon: Users,
                    title: "Asesoramiento Especializado",
                    desc: "Recomendaciones profesionales para acabados y tratamientos post-arenado."
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
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Aplicaciones del Arenado de Madera</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El arenado de madera es ideal para restaurar muebles antiguos, eliminar capas de pintura acumuladas 
                  y preparar la superficie para nuevos acabados. Utilizamos técnicas que respetan la veta natural de la 
                  madera, dejándola lista para barnizado, lacado o pintura de alta calidad. El proceso es especialmente 
                  efectivo para muebles, puertas, ventanas y elementos arquitectónicos que requieren restauración profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Madera
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
                Presupuesto para Arenado de Madera en Zona Norte
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

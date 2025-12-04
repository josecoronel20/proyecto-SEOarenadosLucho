import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import Image from "next/image"
import { CheckCircle, Wrench, Shield, Award, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Arenado de Metales | Hierro, Acero, Aluminio - Pilar",
  description: "Arenado metálico profesional en Pilar y Zona Norte. Eliminación de óxido y preparación para pintura. Cotizá gratis por WhatsApp.",
  keywords: "arenado de metales, arenado metalico, arenado de hierro, arenado de aluminio, arenado acero inoxidable, limpieza metálica, granallado, preparación de metales",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales"
  },
  openGraph: {
    title: "Arenado de Metales | Hierro, Acero, Aluminio - Pilar",
    description: "Arenado metálico profesional en Pilar y Zona Norte. Eliminación de óxido y preparación para pintura.",
    type: "website",
    locale: "es_AR",
  }
}

const faqs = [
  {
    question: "¿Cuánto cuesta el arenado de metales en Zona Norte?",
    answer: "El precio del arenado de metales varía según dimensiones y tipo de metal. Piezas pequeñas desde $60.000, estructuras medianas desde $120.000, proyectos grandes desde $200.000. Presupuesto gratuito sin cargo en 24h para Pilar, San Isidro, Tigre y toda Zona Norte."
  },
  {
    question: "¿Qué beneficios tiene el arenado de metales?",
    answer: "El arenado de metales elimina completamente óxido, corrosión y pintura antigua, dejando la superficie limpia y rugosa ideal para la adherencia de pinturas anticorrosivas, galvanizado o tratamientos especializados. Prolonga la vida útil de estructuras metálicas y previene futura corrosión."
  },
  {
    question: "¿En qué zonas ofrecen servicio de arenado de metales?",
    answer: "Brindamos servicio de arenado de metales en Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, Malvinas Argentinas. También en Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez. Disponemos de servicio móvil a domicilio y taller especializado."
  },
  {
    question: "¿El arenado afecta la resistencia del metal?",
    answer: "No, cuando se realiza correctamente por profesionales, el arenado no afecta la resistencia estructural del metal. Utilizamos parámetros controlados que eliminan solo contaminantes superficiales, preservando completamente la integridad del material."
  },
  {
    question: "¿Cuánto tiempo demora el arenado de metales?",
    answer: "Piezas pequeñas: 1-2 días. Estructuras medianas: 2-4 días. Proyectos grandes: 5-7 días. Ofrecemos servicio express en Zona Norte para proyectos urgentes. El tiempo depende del tamaño, complejidad y nivel de corrosión."
  }
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arenados Lucho - Arenado de Metales",
  "description": "Servicio profesional de arenado de metales en Pilar, San Isidro, Tigre y Zona Norte. Eliminación de óxido, corrosión y preparación para tratamientos especializados.",
  "url": "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales",
  "telephone": "+5491123787750",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "areaServed": [
    "Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", 
    "Zona Norte", "Zona Oeste", "Moreno", "Hurlingham", "Ituzaingó"
  ],
  "priceRange": "$$",
  "serviceType": "Arenado de Metales"
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

export default function ArenadoDeMetalesPage() {
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
        { label: 'Arenado de Metales' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de Metales
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de metales</strong> es un proceso de <strong>limpieza metálica</strong> profesional que elimina completamente óxido, corrosión y pintura antigua mediante técnicas de <strong>granallado</strong> y sandblasting. Este servicio de <strong>preparación de metales</strong> garantiza una superficie limpia y rugosa ideal para la adherencia de tratamientos protectores como pintura epoxi, galvanizado o recubrimientos especializados. Nuestro servicio de <strong>arenado metálico</strong> en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas certificadas que preservan la integridad del material mientras eliminan todos los contaminantes superficiales, prolongando significativamente la vida útil de estructuras, piezas y componentes metálicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/servicios/arenado-pieza-metalica-san-isidro.png"
                  alt="Arenado de metales en Pilar y Zona Norte - Eliminación de óxido y preparación profesional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                Tipos de Metales que Arenamos
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Ofrecemos servicios especializados de <strong>arenado metálico</strong> para diferentes tipos de metales. Cada material requiere técnicas específicas de <strong>granallado</strong> y parámetros controlados para garantizar resultados óptimos sin dañar la integridad estructural.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Link
                  href="/superficies-que-arenamos/arenado-de-metales/hierro"
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary p-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      Arenado de Hierro
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Eliminación de óxido y corrosión en estructuras, rejas y elementos de hierro. Preparación para pintura anticorrosiva.
                    </p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Ver más →
                    </span>
                  </div>
                </Link>
                <Link
                  href="/superficies-que-arenamos/arenado-de-metales/aluminio"
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary p-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      Arenado de Aluminio
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Tratamiento delicado de aluminio. Eliminación de óxido superficial y preparación para anodizado o pintura especializada.
                    </p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Ver más →
                    </span>
                  </div>
                </Link>
                <Link
                  href="/superficies-que-arenamos/arenado-de-metales/acero-inoxidable"
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary p-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      Arenado de Acero Inoxidable
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Limpieza especializada que preserva las propiedades del acero inoxidable. Eliminación de manchas y marcas.
                    </p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Ver más →
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/superficies-que-arenamos"
                  className="text-primary font-semibold hover:underline"
                >
                  ← Ver todas las superficies que arenamos
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                Ventajas del Arenado de Metales
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  El <strong>arenado de metales</strong>, también conocido como <strong>granallado</strong> o sandblasting, ofrece múltiples ventajas para la <strong>preparación de metales</strong> antes de aplicar tratamientos protectores. Este proceso de <strong>limpieza metálica</strong> elimina completamente óxido, corrosión, pintura antigua y contaminantes superficiales que comprometen la durabilidad de estructuras metálicas.
                </p>
                <p className="mb-4">
                  Una de las principales ventajas del <strong>arenado metálico</strong> es la eliminación total de óxido y corrosión. A diferencia de métodos tradicionales que solo eliminan la capa superficial, el <strong>granallado</strong> penetra en áreas difíciles de alcanzar, asegurando una limpieza profunda y completa. Esto es esencial para estructuras expuestas a intemperie o ambientes industriales corrosivos.
                </p>
                <p className="mb-4">
                  El <strong>arenado de metales</strong> crea una superficie rugosa ideal para la adherencia de pinturas, revestimientos y tratamientos especializados. Esta textura mejora significativamente la adherencia de pinturas epoxi, anticorrosivas y otros recubrimientos protectores, garantizando mayor durabilidad y resistencia al desgaste.
                </p>
                <p className="mb-4">
                  El proceso de <strong>preparación de metales</strong> mediante <strong>granallado</strong> preserva la integridad estructural del material. Utilizamos parámetros controlados específicos para cada tipo de metal, asegurando que solo se eliminen contaminantes superficiales sin afectar la resistencia mecánica del material.
                </p>
                <p className="mb-4">
                  El <strong>arenado metálico</strong> es eficiente y económico comparado con otros métodos de limpieza. Permite tratar grandes superficies en menor tiempo, reduciendo costos de mano de obra y tiempo de proyecto. Además, el proceso es respetuoso con el medio ambiente cuando se utilizan abrasivos reciclables.
                </p>
                <p className="mb-4">
                  Para estructuras que requieren galvanizado, el <strong>arenado de metales</strong> es esencial. La superficie limpia y rugosa garantiza una adherencia perfecta del recubrimiento de zinc, protegiendo el metal contra corrosión por décadas. El mismo principio aplica para otros tratamientos especializados como metalización o recubrimientos cerámicos.
                </p>
                <p className="mb-4">
                  El servicio de <strong>limpieza metálica</strong> mediante <strong>arenado</strong> es versátil y se adapta a diferentes tipos de proyectos. Desde pequeñas piezas en cabina hasta estructuras industriales grandes, nuestro equipamiento móvil permite ejecutar el servicio in situ, reduciendo costos de transporte y tiempos de espera.
                </p>
                <p className="mb-4">
                  Finalmente, el <strong>arenado de metales</strong> prolonga significativamente la vida útil de estructuras y componentes. Al eliminar completamente óxido y corrosión, y preparar la superficie para tratamientos protectores adecuados, se previene futura degradación, reduciendo costos de mantenimiento y reparación a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                Por qué Elegirnos para Arenado de Metales
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Más de 20 Años de Experiencia",
                    desc: "Especialistas certificados en arenado de metales con técnicas probadas y tecnología de última generación en Pilar y Zona Norte."
                  },
                  {
                    icon: Shield,
                    title: "Preservación de Integridad",
                    desc: "Procesos certificados que preservan la resistencia estructural del metal. No afectamos las propiedades mecánicas del material."
                  },
                  {
                    icon: Wrench,
                    title: "Técnicas Especializadas",
                    desc: "Parámetros controlados específicos para cada tipo de metal: hierro, acero, acero inoxidable, aluminio y aleaciones."
                  },
                  {
                    icon: CheckCircle,
                    title: "Eliminación Completa",
                    desc: "Removemos completamente óxido, corrosión, pintura antigua y contaminantes. Superficie lista para cualquier tratamiento."
                  },
                  {
                    icon: Clock,
                    title: "Servicio Rápido",
                    desc: "Tiempos optimizados sin comprometer calidad. Servicio express disponible para proyectos urgentes en Zona Norte y Oeste."
                  },
                  {
                    icon: Users,
                    title: "Atención Personalizada",
                    desc: "Asesoramiento técnico gratuito y seguimiento post-servicio. Garantía por escrito en todos los proyectos de arenado metálico."
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
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                Preguntas Frecuentes sobre Arenado de Metales
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="bg-gray-50 rounded-lg p-6 cursor-pointer">
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
                Presupuesto para Arenado de Metales en Zona Norte y Oeste
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio móvil y en taller en Pilar, San Isidro, Tigre, Zona Norte, Moreno, Hurlingham y Zona Oeste. 
                Presupuesto sin cargo en 24h. Asesoramiento técnico gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
              </div>
              <p className="text-blue-100 text-sm mt-6">
                Respuesta en 24 horas hábiles · Incluye evaluación técnica si se requiere · Garantía por escrito
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

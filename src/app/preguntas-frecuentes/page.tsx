import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ArrowRight, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"
import { generateFAQSchema } from "@/lib/schema"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export const metadata: Metadata = {
  title: "FAQ Arenado | Preguntas Frecuentes - Arenados Lucho Pilar",
  description: "Preguntas frecuentes sobre arenado en Pilar y Zona Norte. Precios, técnicas, garantías. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
  keywords: [
    "preguntas frecuentes arenado",
    "FAQ arenado Pilar", 
    "dudas arenado Zona Norte",
    "precio arenado pileta",
    "cuanto cuesta arenado",
    "arenado garantía",
    "arenado industrial preguntas",
    "arenado barcos dudas",
    "arenado vehículos información",
    "arenado muebles consultas",
    "arenado fachadas preguntas",
    "sandblasting FAQ",
    "granallado preguntas frecuentes"
  ],
  openGraph: {
    title: "FAQ Arenado | Preguntas Frecuentes - Arenados Lucho Pilar",
    description: "Preguntas frecuentes sobre arenado en Pilar y Zona Norte. Precios, técnicas, garantías. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PreguntasFrecuentesPage() {
  const faqs = [
    {
      category: "Servicios Generales de Arenado",
      questions: [
        {
          question: "¿Qué es el arenado y cómo funciona?",
          answer: "El arenado (también conocido como sandblasting o granallado) es un proceso de limpieza que utiliza materiales abrasivos a alta presión para eliminar pintura, óxido, suciedad y otros contaminantes de superficies. Es más efectivo que métodos tradicionales y prepara perfectamente la superficie para nuevos tratamientos como pintura, galvanizado o revestimientos."
        },
        {
          question: "¿Qué tipos de servicios de arenado ofrecen en Pilar?",
          answer: "En Pilar y Zona Norte ofrecemos servicios completos de arenado para piletas, industrias, barcos, vehículos, piezas metálicas, muebles y fachadas. Cada tipo requiere técnicas y materiales específicos para obtener los mejores resultados en cada superficie."
        },
        {
          question: "¿Cuánto tiempo toma un proyecto de arenado?",
          answer: "El tiempo varía según el tamaño y complejidad del proyecto. Una pileta pequeña puede tomar 1 día, mientras que proyectos industriales grandes pueden requerir una semana o más. Siempre proporcionamos estimaciones de tiempo detalladas en nuestros presupuestos gratuitos."
        },
        {
          question: "¿Ofrecen garantía en sus servicios de arenado?",
          answer: "Sí, ofrecemos garantía completa en todos nuestros trabajos. La duración de la garantía varía según el tipo de servicio (6 meses para piletas, 1 año para industrial), pero siempre garantizamos la calidad de nuestro trabajo y la satisfacción del cliente."
        },
        {
          question: "¿Trabajan con equipos móviles o en taller?",
          answer: "Ofrecemos ambas modalidades. Servicio móvil a domicilio para piletas, fachadas, vehículos y proyectos industriales in situ. También tenemos taller propio en Pilar para piezas metálicas que requieren mayor precisión y control ambiental."
        }
      ]
    },
    {
      category: "Arenado de Piletas en Pilar y Zona Norte",
      questions: [
        {
          question: "¿Es seguro el arenado para piletas?",
          answer: "Sí, es completamente seguro cuando se realiza por profesionales como nosotros. Utilizamos materiales y técnicas específicas para piletas que no dañan la estructura y eliminan completamente algas, bacterias y residuos. Trabajamos con equipos especializados y protocolos de seguridad estrictos."
        },
        {
          question: "¿Cuándo es recomendable arenar una pileta?",
          answer: "Se recomienda arenar una pileta cuando presenta manchas, algas persistentes, pintura descascarada, o antes de aplicar una nueva capa de pintura. También es útil para mantenimiento preventivo cada 3-5 años. En Pilar y Zona Norte, el clima húmedo hace que las piletas requieran más mantenimiento."
        },
        {
          question: "¿Cuánto cuesta arenar una pileta en Pilar?",
          answer: "El precio del arenado de piletas en Pilar depende del tamaño, la ubicación y si es para repintar o revestir. Ofrecemos los mejores precios de arenado de piletas en Zona Norte. Contactanos para recibir un presupuesto personalizado y competitivo según las características específicas de tu pileta."
        },
        {
          question: "¿Cuánto tiempo debo esperar para usar la pileta después del arenado?",
          answer: "Después del arenado, la pileta puede pintarse o revestirse inmediatamente ya que la superficie queda perfectamente preparada. Una vez aplicada la pintura, sigue las indicaciones del fabricante (generalmente 7-14 días para uso completo)."
        },
        {
          question: "¿El arenado elimina las manchas de óxido en piletas?",
          answer: "Sí, el arenado es muy efectivo para eliminar manchas de óxido, algas, moho y otros contaminantes en piletas. Utilizamos técnicas específicas que no dañan el material de la pileta y dejan la superficie perfectamente preparada para la nueva pintura."
        },
        {
          question: "¿Trabajan en piletas de fibra de vidrio?",
          answer: "No, no trabajamos con piletas de fibra de vidrio debido a que son muy delicadas para el proceso de arenado. Solo trabajamos con piletas de hormigón y gunita, donde nuestras técnicas y materiales abrasivos son seguros y efectivos. Tenemos amplia experiencia con estos tipos de piletas que son los más comunes en Pilar y Zona Norte. Somos la mejor empresa de arenado de piletas en Pilar para este tipo de trabajos."
        }
      ]
    },
    {
      category: "Arenado Industrial en Zona Norte",
      questions: [
        {
          question: "¿Qué equipos industriales pueden arenarse?",
          answer: "Podemos arenar maquinaria pesada, tanques industriales, estructuras metálicas, equipos de procesamiento, galpones, silos, y prácticamente cualquier equipo industrial que requiera limpieza y preparación de superficies. Trabajamos en General Rodríguez, Moreno y toda Zona Norte."
        },
        {
          question: "¿El arenado afecta las dimensiones de las piezas industriales?",
          answer: "En piezas pequeñas, utilizamos técnicas de precisión que mantienen las dimensiones exactas. Para piezas más grandes, el arenado elimina solo una capa muy fina de material (0.1-0.3mm), manteniendo la integridad estructural y las tolerancias necesarias."
        },
        {
          question: "¿Trabajan en plantas industriales activas?",
          answer: "Sí, tenemos experiencia trabajando en plantas industriales activas en Zona Norte. Coordinamos con el personal de seguridad y mantenimiento para minimizar la interrupción de la producción y cumplir con todos los protocolos de seguridad industrial."
        },
        {
          question: "¿Cuánto cuesta el arenado industrial?",
          answer: "El precio del arenado industrial depende del trabajo, logística, dimensiones y ubicación. Contactanos para recibir un presupuesto personalizado según las características específicas de tu proyecto."
        },
        {
          question: "¿Preparan superficies para galvanizado?",
          answer: "Sí, el arenado es el método más efectivo para preparar superficies metálicas antes del galvanizado. Elimina óxido, pintura y contaminantes, creando el perfil de superficie ideal para una adhesión perfecta del zinc."
        },
        {
          question: "¿Trabajan con tanques de almacenamiento?",
          answer: "Sí, tenemos experiencia en arenado de tanques de almacenamiento de agua, químicos, combustibles y otros líquidos. Utilizamos técnicas especiales para espacios confinados y protocolos de seguridad específicos para cada tipo de contenido."
        }
      ]
    },
    {
      category: "Arenado de Barcos en Tigre y Zona Norte",
      questions: [
        {
          question: "¿Qué tipos de embarcaciones pueden arenarse?",
          answer: "Trabajamos con yates privados, barcos comerciales, embarcaciones deportivas, lanchas, y barcos históricos en Tigre, San Isidro y toda Zona Norte. Cada tipo requiere técnicas específicas según el material del casco (fibra, madera, metal) y el estado de la embarcación."
        },
        {
          question: "¿El arenado elimina las incrustaciones marinas?",
          answer: "Sí, el arenado es muy efectivo para eliminar incrustaciones marinas, algas, moluscos, percebes y otros organismos que se adhieren al casco. También prepara la superficie para aplicar pintura y mejora la hidrodinámica del barco."
        },
        {
          question: "¿Cuánto cuesta arenar un barco en Tigre?",
          answer: "El precio del arenado de barcos en Tigre depende del tamaño de la embarcación, su ubicación y si requiere remoción superficial o profunda de pintura y contaminantes. Contactanos para recibir un presupuesto personalizado según las características específicas de tu embarcación."
        },
        {
          question: "¿Cuánto dura el trabajo de arenado en un barco?",
          answer: "La duración depende del tamaño del barco, el estado de las superficies, la cantidad de incrustaciones y el tipo de trabajo requerido. Cada proyecto es único y requiere una evaluación personalizada para determinar el tiempo necesario. Trabajamos en los clubes náuticos de Tigre y San Isidro."
        },
        {
          question: "¿Trabajan en clubes náuticos?",
          answer: "Sí, trabajamos en los principales clubes náuticos de Tigre, San Isidro y Zona Norte. Coordinamos con las autoridades del club para el acceso y cumplimos con todos los protocolos de seguridad y medio ambiente requeridos."
        },
        {
          question: "¿Preparan el casco para pintura?",
          answer: "Sí, el arenado es el método más efectivo para preparar el casco antes de aplicar pintura. Elimina completamente la pintura antigua, incrustaciones y contaminantes, asegurando una adhesión perfecta y mayor durabilidad del nuevo recubrimiento."
        }
      ]
    },
    {
      category: "Arenado de Vehículos",
      questions: [
        {
          question: "¿Qué vehículos pueden arenarse?",
          answer: "Arenamos autos, camionetas, motos, vehículos comerciales, maquinaria agrícola y vehículos históricos. Trabajamos con chasis, carrocerías, llantas y piezas específicas. Cada tipo requiere técnicas y materiales apropiados para no dañar la superficie."
        },
        {
          question: "¿Cuánto cuesta arenar un auto en Pilar?",
          answer: "El precio del arenado de vehículos en Pilar depende del tamaño y estado. Contactanos para recibir un presupuesto personalizado según las características específicas de tu vehículo."
        },
        {
          question: "¿El arenado elimina el óxido de los vehículos?",
          answer: "Sí, el arenado es muy efectivo para eliminar óxido, pintura descascarada y contaminantes de vehículos. Prepara perfectamente la superficie para la nueva pintura, asegurando una adhesión duradera y acabado profesional."
        },
        {
          question: "¿Trabajan con vehículos clásicos?",
          answer: "Sí, tenemos experiencia especializada en vehículos clásicos y de colección. Utilizamos técnicas suaves y materiales específicos para preservar la integridad de las piezas originales y prepararlas para restauración."
        }
      ]
    },
    {
      category: "Arenado de Muebles y Fachadas",
      questions: [
        {
          question: "¿Qué muebles pueden arenarse?",
          answer: "Arenamos muebles de madera, metal y materiales mixtos. Incluye despintado de muebles antiguos, restauración de antigüedades, y preparación de muebles para barnizado o pintura. Utilizamos técnicas suaves que preservan la madera."
        },
        {
          question: "¿Cuánto cuesta arenar fachadas en Zona Norte?",
          answer: "El precio del arenado de fachadas en Zona Norte depende del tamaño y altura. Contactanos para recibir un presupuesto personalizado según las características específicas de tu fachada."
        },
        {
          question: "¿El arenado daña la fachada?",
          answer: "No, cuando se realiza correctamente por profesionales, el arenado no daña la fachada. Utilizamos técnicas y presiones apropiadas para cada tipo de material (ladrillo, hormigón, piedra) y eliminamos solo la pintura y contaminantes."
        },
        {
          question: "¿Trabajan en edificios históricos?",
          answer: "Sí, tenemos experiencia en fachadas de edificios históricos y patrimoniales. Utilizamos técnicas especiales de preservación y coordinamos con organismos de patrimonio cuando es necesario para mantener la integridad arquitectónica."
        }
      ]
    },
    {
      category: "Precios y Presupuestos",
      questions: [
        {
          question: "¿Cómo calculan el precio de un proyecto?",
          answer: "El precio se basa en varios factores: tamaño del área, tipo de superficie, grado de contaminación, acceso al sitio, tiempo estimado, y materiales necesarios. Siempre proporcionamos presupuestos detallados sin compromiso con desglose completo de costos."
        },
        {
          question: "¿Ofrecen presupuestos gratuitos?",
          answer: "Sí, todos nuestros presupuestos son completamente gratuitos y sin compromiso. Incluyen evaluación del proyecto, estimación de tiempo, precio detallado, y recomendaciones técnicas. Respuesta garantizada en 24 horas."
        },
        {
          question: "¿Qué incluye el presupuesto?",
          answer: "El presupuesto incluye evaluación del sitio, materiales necesarios, tiempo estimado de trabajo, preparación del área, ejecución del arenado, limpieza final, garantía del trabajo realizado, y cronograma de ejecución detallado."
        },
        {
          question: "¿Ofrecen descuentos por proyectos grandes?",
          answer: "Sí, ofrecemos descuentos especiales para proyectos grandes y contratos de mantenimiento. También tenemos precios preferenciales para clientes corporativos y proyectos repetitivos. Consulta por nuestras promociones vigentes."
        }
      ]
    },
    {
      category: "Contacto y Cobertura de Servicio",
      questions: [
        {
          question: "¿En qué zonas trabajan?",
          answer: "Trabajamos principalmente en Pilar, Zona Norte (San Isidro, Tigre, Vicente López, José C. Paz, Malvinas Argentinas, San Miguel, General San Martín, San Fernando, Cardales, Zárate), Zona Oeste (General Rodríguez, Moreno, Ituzaingó, Morón, Hurlingham, 3 de Febrero) y CABA. Para otras zonas, consulta disponibilidad."
        },
        {
          question: "¿Cómo puedo contactarlos?",
          answer: "Puedes contactarnos por WhatsApp al +54 9 11 2378-7750 (recomendado), por teléfono al +54 11 2378-7750, por email a arenadoslucho@hotmail.com, o completando el formulario de presupuesto rápido en nuestro sitio web. Respuesta garantizada en 24 horas."
        },
        {
          question: "¿Cuáles son sus horarios de atención?",
          answer: "Nuestros horarios de atención son de Lunes a Viernes de 8:00 a 18:00, y Sábados de 8:00 a 14:00. Para emergencias, atendemos 24/7. Los trabajos de arenado se realizan en horarios diurnos por seguridad y calidad."
        },
        {
          question: "¿Ofrecen servicio a domicilio?",
          answer: "Sí, ofrecemos servicio móvil a domicilio para piletas, fachadas, vehículos y proyectos industriales. Llevamos todos los equipos necesarios y trabajamos in situ. Solo necesitamos acceso adecuado y conexión eléctrica en algunos casos."
        }
      ]
    }
  ]

  // Generate FAQ schema
  const allFAQs = faqs.flatMap(category => 
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  )
  const faqSchema = generateFAQSchema(allFAQs)

  return (
    <div className="min-h-screen">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <Breadcrumbs segments={[{ label: 'Preguntas frecuentes' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Preguntas <span className="text-primary">Frecuentes</span> sobre Arenado
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre servicios de arenado en Pilar y Zona Norte. 
              Información sobre precios, técnicas, garantías y cobertura de nuestros servicios profesionales.
            </p>
            <Button size="lg" asChild>
              <Link href="/presupuesto-rapido">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿No encuentras tu respuesta?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Si tienes alguna pregunta específica o necesitas más información, 
              no dudes en contactarnos directamente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Llamanos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  +54 11 2378-7750
                </CardDescription>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="tel:+541123787750">
                    Llamar Ahora
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Envíanos un Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  arenadoslucho@hotmail.com
                </CardDescription>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="mailto:arenadoslucho@hotmail.com">
                    Enviar Email
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  +54 9 11 2378-7750
                </CardDescription>
                <WhatsAppButton />
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ArrowRight className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Solicita Presupuesto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Completa nuestro formulario online
                </CardDescription>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/presupuesto-rapido">
                    Solicitar Ahora
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            No esperes más. Contactanos hoy mismo para obtener un presupuesto personalizado 
            para tu proyecto de arenado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/presupuesto-rapido">
                Solicitar Presupuesto Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="tel:+541123787750">
                Llamar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

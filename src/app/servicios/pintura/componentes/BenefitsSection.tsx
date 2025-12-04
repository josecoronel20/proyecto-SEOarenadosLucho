import { CheckCircle, Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Pintura epoxi y anticorrosiva",
      description: "Aplicamos pinturas especializadas de alta calidad para máxima durabilidad y protección contra corrosión"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Preparación profesional",
      description: "Realizamos arenado previo y preparación completa de superficies para garantizar adherencia perfecta"
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Resultado uniforme y duradero",
      description: "Aplicación profesional que asegura acabado uniforme y mayor durabilidad del revestimiento"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Protección contra corrosión",
      description: "Pinturas especializadas que protegen estructuras metálicas y superficies contra óxido y deterioro"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Equipos profesionales",
      description: "Utilizamos equipamiento especializado y técnicas avanzadas para resultados de excelencia"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Garantía de calidad",
      description: "Todos nuestros proyectos incluyen garantía por escrito y seguimiento post-aplicación"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Por qué elegir nuestro servicio de pintura
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicio profesional de pintura con preparación completa de superficies mediante arenado y aplicación de pinturas especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


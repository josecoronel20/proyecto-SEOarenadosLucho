import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Elimina incrustaciones marinas",
      description: "Nuestro sistema de limpieza naval con arena elimina eficazmente incrustaciones, algas marinas y capas de pintura deteriorada del casco"
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Prepara para pintura",
      description: "La preparación de cascos mediante arenado garantiza una base perfecta para aplicar pintura y pinturas náuticas especializadas"
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Resultado uniforme y duradero",
      description: "Logramos un acabado completamente uniforme que asegura mayor durabilidad del revestimiento marino"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Sin dañar la fibra de vidrio",
      description: "Nuestro proceso es seguro y no compromete la estructura de fibra de vidrio o acero de tu embarcación"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Equipos especializados náuticos",
      description: "Utilizamos maquinaria específica para embarcaciones para garantizar resultados profesionales en el sector naval"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Por qué elegir nuestro arenado de barcos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            La preparación de cascos mediante arenado profesional garantiza los mejores resultados para tu embarcación
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

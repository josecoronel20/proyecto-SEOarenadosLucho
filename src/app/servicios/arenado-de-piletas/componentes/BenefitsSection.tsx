import { CheckCircle, Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Elimina algas y pintura vieja",
      description: "Nuestro sistema de limpieza de piscinas con arena elimina eficazmente algas, manchas y capas de pintura deteriorada"
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Prepara para pintura o revestimiento",
      description: "La preparación de superficies de piletas mediante arenado garantiza una base perfecta para aplicar nuevos acabados"
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Resultado uniforme y duradero",
      description: "Logramos un acabado completamente uniforme que asegura mayor durabilidad del revestimiento"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Sin dañar el hormigón",
      description: "Nuestro proceso es seguro y no compromete la estructura de tu pileta"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Equipos industriales profesionales",
      description: "Utilizamos maquinaria especializada para garantizar resultados profesionales"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Por qué elegir nuestro arenado de piletas
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            La preparación de superficies de piletas mediante arenado profesional garantiza los mejores resultados para tu piscina
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

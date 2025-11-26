import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Eliminación profesional de óxido y corrosión",
      description: "Eliminamos eficazmente óxido, corrosión y pintura deteriorada de cualquier vehículo mediante arenado industrial especializado en Zona Norte"
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Preparación experta para pintura automotriz",
      description: "El arenado profesional garantiza una base perfecta para pintura automotriz, tratamientos anticorrosivos y revestimientos especializados"
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Acabado uniforme y máxima durabilidad",
      description: "Nuestro servicio de arenado automotriz logra un acabado 100% uniforme que maximiza la durabilidad de la pintura y protección"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Proceso seguro para todo tipo de vehículos",
      description: "Técnica segura y profesional para autos, camionetas y camiones, preservando la integridad de carrocerías metálicas y de fibra de vidrio"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Equipamiento industrial automotriz",
      description: "Contamos con maquinaria y equipos especializados para arenado vehicular profesional, garantizando resultados de calidad superior"
    }
  ]

  return (
    <section className="py-16 bg-gray-50" aria-label="Beneficios del servicio de arenado de vehículos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ventajas de Nuestro Servicio de Arenado Automotriz Profesional
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Servicio especializado de arenado para autos, camionetas y todo tipo de vehículos en Pilar y Zona Norte. 
            Preparación profesional que garantiza los mejores resultados en restauración y pintura automotriz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md" role="article">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <div className="text-xl font-semibold mb-2">
                {benefit.title}
              </div>
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

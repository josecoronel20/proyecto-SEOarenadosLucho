import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Shield, Award } from "lucide-react"

export function WhyPilarSection() {
  const pilarAdvantages = [
    {
      icon: MapPin,
      title: "Ubicación Estratégica",
      description: "Pilar es nuestra base principal, garantizando respuesta inmediata y servicio prioritario para todos los proyectos locales."
    },
    {
      icon: Shield,
      title: "Experiencia Local",
      description: "Más de 10 años sirviendo a Pilar, conocemos las necesidades específicas de la zona y sus industrias."
    },
    {
      icon: Award,
      title: "Equipos Especializados",
      description: "Contamos con la tecnología más avanzada para atender desde proyectos residenciales hasta industriales en Pilar."
    }
  ]

  return (
    <section className="py-16" aria-labelledby="why-pilar-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="why-pilar-heading" className="text-3xl font-bold mb-4">
              ¿Por qué elegirnos en Pilar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ventajas exclusivas de trabajar con Arenados Lucho en Pilar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Ventajas de elegir Arenados Lucho en Pilar">
            {pilarAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className="text-center border-blue-200 bg-blue-50" role="listitem">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

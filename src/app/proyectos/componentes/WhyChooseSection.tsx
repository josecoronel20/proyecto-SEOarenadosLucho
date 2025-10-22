import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Zap, Shield, Clock } from "lucide-react"

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Award,
      title: "20+ Años en Zona Norte",
      description: "Más de dos décadas especializándonos en arenado y sandblasting en Pilar y alrededores"
    },
    {
      icon: Zap,
      title: "Equipos Profesionales",
      description: "Tecnología de última generación y técnicas especializadas para cada proyecto de arenado"
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Resultados consistentes y de alta calidad en cada proyecto de arenado en Zona Norte"
    },
    {
      icon: Clock,
      title: "Respuesta Local Rápida",
      description: "Atención inmediata en Pilar y Zona Norte - Respuesta en 24 horas hábiles"
    }
  ]

  return (
    <section className="py-16 bg-white" aria-labelledby="whychoose-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="whychoose-heading" className="text-3xl font-bold mb-4">
            ¿Por qué elegir Arenados Lucho en Pilar y Zona Norte?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 20 años de experiencia nos respaldan en el sector del arenado y sandblasting en Pilar, San Isidro y todo Zona Norte
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Beneficios de elegir Arenados Lucho">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center" role="listitem">
                <CardHeader>
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-blue-600" aria-hidden="true" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

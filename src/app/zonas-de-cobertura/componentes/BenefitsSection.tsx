import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: MapPin,
      title: "Servicio Móvil",
      description: "Llevamos nuestros equipos a tu ubicación",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Te contactamos en menos de 24 horas",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Phone,
      title: "Presupuesto Gratuito",
      description: "Evaluación y cotización sin costo",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Equipos Profesionales",
      description: "Tecnología de última generación",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="benefits-heading" className="text-3xl font-bold mb-4">
              ¿Por qué elegir nuestro servicio móvil?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ventajas de nuestro servicio de arenado a domicilio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Beneficios del servicio móvil">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center" role="listitem">
                  <CardContent className="pt-6">
                    <div className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 ${benefit.iconColor}`} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
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

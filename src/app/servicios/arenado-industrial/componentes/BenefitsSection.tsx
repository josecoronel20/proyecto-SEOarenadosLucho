import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Factory } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Tratamiento anticorrosivo efectivo",
    description:
      "Remueve óxido, pintura vieja y contaminantes de grandes estructuras y maquinarias industriales, preparando la superficie para recubrimientos protectores.",
  },
  {
    icon: Clock,
    title: "Eficiencia operativa",
    description:
      "Proceso rápido y eficiente que minimiza tiempos de parada en producción. Servicio móvil disponible para grandes estructuras.",
  },
  {
    icon: Factory,
    title: "Preparación para recubrimientos industriales",
    description:
      "Deja la superficie preparada para pintura industrial, galvanizado o cualquier otro recubrimiento protector, garantizando adherencia y durabilidad.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Beneficios del arenado industrial
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Solución profesional para industrias y grandes estructuras metálicas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-blue-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
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


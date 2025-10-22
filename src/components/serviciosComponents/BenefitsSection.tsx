import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, Zap } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Preparación para pintura",
      description: "Superficies perfectamente preparadas para cualquier tipo de pintura o revestimiento."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Calidad profesional",
      description: "Equipos profesionales y técnicas especializadas para resultados óptimos."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Eficiencia comprobada",
      description: "Reducción significativa de tiempos y costos comparado con métodos tradicionales."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            ¿Por qué elegir Arenados Lucho para tu proyecto?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos la <strong>empresa líder en arenado y sandblasting en Pilar y Zona Norte</strong> con amplia experiencia en el sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, Wrench } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Evaluación y presupuesto",
    description: "Realizamos una evaluación técnica del proyecto mediante visita a su planta o según especificaciones técnicas que nos proporcione.",
  },
  {
    number: "2",
    icon: Calendar,
    title: "Coordinación y planificación",
    description: "Acordamos fechas y metodología de trabajo según sus necesidades operativas. Servicio móvil o en nuestro taller según corresponda.",
  },
  {
    number: "3",
    icon: Wrench,
    title: "Ejecución del arenado industrial",
    description: "Ejecutamos el granallado profesional para quitar óxido, pintura y contaminantes, preparando la superficie para recubrimientos industriales.",
  }
]

export function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Proceso de arenado industrial
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Proceso profesional y planificado para proyectos industriales.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="relative border-2 border-blue-100 hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="pt-6 pb-8">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
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


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación del Casco",
      description: "Inspeccionamos el estado del casco de tu embarcación y determinamos el tratamiento necesario según el tipo de incrustaciones."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado Especializado",
      description: "Realizamos el arenado con equipos especializados para embarcaciones, adaptando la presión según el material del casco."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza Integral",
      description: "Removemos todos los residuos del arenado y limpiamos completamente el casco para la aplicación del pintura."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Lista para Pintura",
      description: "Entregamos tu embarcación con el casco perfectamente preparado para aplicar pintura o pintura náutica."
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cómo Trabajamos en Embarcaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso especializado para renovar el casco de tu barco con los mejores resultados náuticos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

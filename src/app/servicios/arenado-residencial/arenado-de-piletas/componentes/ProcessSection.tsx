import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos el tamaño y estado de tu pileta para brindarte un presupuesto preciso y sin cargo."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado Controlado",
      description: "Realizamos el arenado con equipos industriales de alta precisión para un resultado uniforme."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza Total",
      description: "Removemos todos los residuos del arenado dejando la superficie completamente limpia."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Lista para Finalizar",
      description: "Entregamos tu pileta preparada para aplicar pintura o el revestimiento que elijas."
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cómo Trabajamos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y efectivo para renovar tu pileta con los mejores resultados
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

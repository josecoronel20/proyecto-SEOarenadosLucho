import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, PaintBucket, CheckCircle, Shield } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación y Preparación",
      description: "Evaluamos la superficie y realizamos arenado previo para garantizar adherencia perfecta de la pintura."
    },
    {
      step: "02", 
      icon: <PaintBucket className="h-8 w-8 text-white" />,
      title: "Aplicación de Pintura",
      description: "Aplicamos pintura epoxi, anticorrosiva o especializada según el tipo de superficie y requerimientos."
    },
    {
      step: "03",
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Protección y Secado",
      description: "Garantizamos condiciones óptimas de secado y protección para obtener el mejor resultado."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Entrega y Garantía",
      description: "Entregamos el trabajo completado con garantía por escrito y seguimiento post-aplicación."
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Pintura</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso profesional que garantiza resultados duraderos y de alta calidad
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


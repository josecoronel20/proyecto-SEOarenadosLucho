import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación del Mueble",
      description: "Inspección detallada del mueble para identificar tipo de madera, estado de la pintura, barniz y estructura. Análisis técnico del trabajo de restauración necesario y recomendaciones específicas."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado de Precisión",
      description: "Proceso de arenado especializado para muebles con control preciso de presión y grano según el tipo de madera y acabado. Preservamos la veta natural y eliminamos pintura antigua sin dañar la estructura."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza y Preparación",
      description: "Eliminación completa de residuos post-arenado y preparación de la superficie. Limpieza profesional que garantiza una base perfecta para barnizado, lacado o cualquier tratamiento de acabado."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Superficie Lista para Acabado",
      description: "Acabado final que asegura una base perfecta para barnizado natural, lacado o pintura. Preparación experta que realza la belleza natural de la madera y garantiza adherencia óptima."
    }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-label="Proceso de arenado de muebles profesional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Proceso de Restauración de Muebles en Pilar y Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicio especializado de arenado para muebles de madera y metal. 
            Técnica profesional que preserva la estructura original y realza la belleza natural de la madera en Pilar y Zona Norte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <Card key={index} className="text-center" role="article">
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

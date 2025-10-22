import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación Profesional del Vehículo",
      description: "Inspección detallada del estado de carrocería, chasis y componentes metálicos. Diagnóstico experto del nivel de óxido, corrosión y tratamiento necesario para tu auto."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado Industrial Automotriz",
      description: "Proceso de arenado vehicular con equipamiento industrial especializado. Control preciso de presión según el material y condición de cada zona del vehículo."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza y Preparación Profesional",
      description: "Eliminación completa de residuos post-arenado. Limpieza profesional que garantiza una superficie óptima para pintura automotriz de alta calidad."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Superficie Lista para Pintura Automotriz",
      description: "Acabado profesional que asegura una base perfecta. Preparación experta para pintura vehicular, tratamientos anticorrosivos y revestimientos especializados."
    }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-label="Proceso de arenado automotriz profesional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Proceso Profesional de Arenado Automotriz en Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicio especializado de arenado para autos, camionetas y vehículos comerciales. 
            Técnica industrial que garantiza la mejor preparación para pintura automotriz en Pilar y Zona Norte.
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

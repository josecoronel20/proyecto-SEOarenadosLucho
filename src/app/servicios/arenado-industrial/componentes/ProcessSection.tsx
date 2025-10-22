import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación Industrial Completa",
      description: "Inspección detallada de maquinaria pesada, estructuras industriales y equipos. Análisis técnico del nivel de corrosión, óxido y tratamiento necesario para pintura industrial."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado Industrial Profesional",
      description: "Proceso de arenado industrial con equipamiento especializado para maquinaria pesada. Control preciso de presión y grano según el tipo de estructura y tratamiento posterior requerido."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza y Preparación Industrial",
      description: "Eliminación completa de residuos post-arenado industrial. Limpieza profesional que garantiza una superficie óptima para pintura industrial y tratamientos anticorrosivos especializados."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Superficie Lista para Tratamientos Industriales",
      description: "Acabado industrial que asegura una base perfecta. Preparación experta para pintura industrial, tratamientos anticorrosivos y revestimientos especializados para equipos industriales."
    }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-label="Proceso de arenado industrial profesional">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Proceso Industrial de Arenado en Pilar y Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicio especializado de arenado para maquinaria pesada y estructuras industriales. 
            Técnica industrial que garantiza la mejor preparación para pintura industrial y tratamientos especializados en Pilar y Zona Norte.
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

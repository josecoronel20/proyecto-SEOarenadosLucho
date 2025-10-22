import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación Industrial de Piezas",
      description: "Inspección detallada del estado de las piezas metálicas, nivel de corrosión y contaminantes. Análisis técnico del tratamiento necesario para galvanizado o pintura industrial."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado Industrial de Precisión",
      description: "Proceso de arenado industrial con equipamiento especializado. Control preciso de presión y grano según el material y tipo de tratamiento posterior requerido."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza y Preparación Industrial",
      description: "Eliminación completa de residuos post-arenado. Limpieza industrial que garantiza una superficie óptima para galvanizado, pintura industrial y tratamientos especializados."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Superficie Lista para Tratamientos Industriales",
      description: "Acabado industrial que asegura una base perfecta. Preparación experta para galvanizado, pintura industrial, tratamientos anticorrosivos y revestimientos especializados."
    }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-label="Proceso de arenado industrial de piezas metálicas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Proceso Industrial de Arenado de Piezas Metálicas en Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicio especializado de arenado para piezas metálicas industriales. 
            Técnica industrial que garantiza la mejor preparación para galvanizado y tratamientos especializados en Pilar y Zona Norte.
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

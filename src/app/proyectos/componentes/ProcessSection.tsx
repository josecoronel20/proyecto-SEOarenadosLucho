import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Consulta Local",
      description: "Evaluamos tu proyecto en Pilar o Zona Norte y te proporcionamos un presupuesto detallado."
    },
    {
      step: "02",
      title: "Planificación",
      description: "Desarrollamos un plan de trabajo específico para tu proyecto de arenado."
    },
    {
      step: "03",
      title: "Ejecución",
      description: "Realizamos el trabajo de arenado con la máxima calidad y profesionalismo."
    },
    {
      step: "04",
      title: "Entrega",
      description: "Verificamos la calidad del arenado y te entregamos el proyecto terminado."
    }
  ]

  return (
    <section className="py-16 bg-muted/50" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="text-3xl font-bold mb-4">
            Proceso de Trabajo en Arenado - 20+ Años en Pilar y Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto de arenado sigue un proceso estructurado desarrollado en más de 20 años de experiencia local
            para garantizar la calidad y satisfacción del cliente en Pilar, San Isidro, Tigre y todo Zona Norte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" role="list" aria-label="Proceso de trabajo de arenado">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center" role="listitem">
              <CardHeader>
                <div 
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold"
                  aria-label={`Paso ${step.step}`}
                >
                  {step.step}
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Gauge, Trash2, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const process = [
    {
      step: "01",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: "Evaluación Profesional de Fachadas en Pilar y San Isidro 2025",
      description: "Inspección técnica especializada de fachadas en Pilar, San Isidro y Zona Norte. Diagnóstico detallado del estado actual, análisis de materiales y evaluación de tratamientos necesarios por expertos certificados en restauración de edificios."
    },
    {
      step: "02", 
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: "Arenado de Precisión en Zona Norte Buenos Aires",
      description: "Servicio premium de arenado para fachadas en Pilar y San Isidro con tecnología de última generación. Control preciso de presión y materiales especializados que garantizan resultados superiores en todo tipo de superficies y acabados."
    },
    {
      step: "03",
      icon: <Trash2 className="h-8 w-8 text-white" />,
      title: "Limpieza Profesional de Fachadas en Pilar y Alrededores",
      description: "Proceso certificado de limpieza y preparación post-arenado en Zona Norte. Eliminación garantizada de residuos y acondicionamiento experto de superficies para óptima adherencia de tratamientos posteriores en Pilar y San Isidro."
    },
    {
      step: "04",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Acabado Premium para Fachadas en Buenos Aires Norte",
      description: "Servicio integral de preparación final en Pilar, San Isidro y todo el corredor norte. Garantizamos una base perfecta para pintura exterior y revestimientos, con certificación profesional y 15 años de experiencia en Zona Norte."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Proceso Profesional de Arenado de Fachadas en Pilar y Zona Norte 2025",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Especialistas en Fachadas",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte GBA"]
    },
    "serviceType": "Arenado y Restauración de Fachadas",
    "description": "Servicio premium de arenado y restauración de fachadas en Pilar, San Isidro y Zona Norte. Proceso certificado en 4 etapas con tecnología especializada y garantía profesional."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-muted/50" aria-label="Proceso profesional de arenado de fachadas en Pilar y Zona Norte 2025">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Proceso Premium de Limpieza de Fachadas en Pilar y Zona Norte Buenos Aires 2025
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Servicio especializado de arenado para fachadas residenciales y comerciales en Pilar, San Isidro y norte de Buenos Aires. 
              Más de 15 años de experiencia en restauración profesional de edificios con tecnología certificada y garantía escrita.
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
    </>
  )
}

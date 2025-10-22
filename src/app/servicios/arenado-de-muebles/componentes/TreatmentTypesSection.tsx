import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function TreatmentTypesSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Arenado de Muebles en Buenos Aires",
    "description": "Servicio profesional de arenado y restauración de muebles con evaluación detallada, preparación especializada y acabados de alta calidad.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": "Buenos Aires"
    },
    "serviceType": "Arenado y Restauración de Muebles",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado de Muebles",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Evaluación y Preparación del Mueble",
            "description": "Inspección detallada, análisis profesional y planificación específica del tratamiento"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Arenado y Acabado Profesional",
            "description": "Arenado de precisión, eliminación de pintura antigua y preparación para acabados"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Tipos de tratamiento de arenado de muebles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Servicio Profesional de Arenado de Muebles en Buenos Aires</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Realizamos cada proyecto de restauración de muebles siguiendo técnicas profesionales especializadas que garantizan máxima calidad, preservación de la estructura original y resultados duraderos de alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Evaluación y Preparación del Mueble</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">• Inspección detallada para identificar tipo de madera, estado de pintura y barniz</li>
                  <li className="flex items-center gap-2">• Análisis profesional del estado estructural y recomendaciones de restauración</li>
                  <li className="flex items-center gap-2">• Planificación específica del tratamiento según el tipo de mueble y acabado deseado</li>
                  <li className="flex items-center gap-2">• Preparación del área de trabajo y protección de elementos sensibles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Arenado y Acabado Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">• Arenado de precisión con técnicas especializadas para preservar la veta natural</li>
                  <li className="flex items-center gap-2">• Eliminación completa de pintura antigua, barniz deteriorado y contaminantes</li>
                  <li className="flex items-center gap-2">• Control de calidad continuo para asegurar acabado uniforme y profesional</li>
                  <li className="flex items-center gap-2">• Preparación final para barnizado, lacado o tratamiento de acabado</li>
                  <li className="flex items-center gap-2">• Limpieza exhaustiva y documentación del proceso de restauración</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Necesitas asesoramiento experto para la restauración de tus muebles? Nuestro equipo de especialistas está listo para ayudarte.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20asesoramiento%20sobre%20arenado%20de%20muebles">
                Solicita una Consulta Gratuita por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

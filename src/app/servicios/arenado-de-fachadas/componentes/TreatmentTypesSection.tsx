import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function TreatmentTypesSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Profesional de Fachadas en Pilar y Zona Norte Buenos Aires 2025",
    "serviceType": "Limpieza y Restauración de Fachadas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Expertos en Fachadas Zona Norte",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "Zona Norte GBA"],
      "priceRange": "$$"
    },
    "description": "Servicio premium de arenado y restauración de fachadas en Pilar, San Isidro y Zona Norte. Especialistas certificados con más de 15 años de experiencia en limpieza profesional de edificios."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Tipos de tratamiento de arenado de fachadas en Pilar y Zona Norte 2025">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Arenado Profesional de Fachadas en Pilar y Zona Norte Buenos Aires 2025</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Expertos en limpieza y restauración de fachadas en Pilar, San Isidro y todo el corredor norte de Buenos Aires. Más de 15 años brindando servicios premium de arenado con técnicas especializadas que garantizan resultados superiores y duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Evaluación Premium de Fachadas en Pilar y San Isidro</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">• Diagnóstico técnico especializado de fachadas en Pilar, San Isidro y Zona Norte GBA</li>
                  <li className="flex items-center gap-2">• Evaluación profesional certificada del estado estructural por expertos locales</li>
                  <li className="flex items-center gap-2">• Planificación personalizada según tipo de fachada y requisitos específicos de Zona Norte</li>
                  <li className="flex items-center gap-2">• Protección integral garantizada para proyectos en Pilar y todo el corredor norte</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Servicio Premium de Arenado en Zona Norte Buenos Aires</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">• Arenado de precisión certificado para fachadas en Pilar y San Isidro</li>
                  <li className="flex items-center gap-2">• Eliminación profesional de pintura y contaminantes en edificios de Zona Norte</li>
                  <li className="flex items-center gap-2">• Control de calidad superior por expertos locales en restauración</li>
                  <li className="flex items-center gap-2">• Preparación especializada para revestimientos en Pilar y alrededores</li>
                  <li className="flex items-center gap-2">• Documentación completa del proceso de restauración en Zona Norte GBA</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Buscas asesoramiento experto para tu fachada en Pilar, San Isidro o Zona Norte? Nuestro equipo local de especialistas certificados está listo para ayudarte.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20asesoramiento%20sobre%20arenado%20de%20fachadas%20en%20Zona%20Norte">
                Consulta Gratuita WhatsApp - Expertos en Zona Norte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

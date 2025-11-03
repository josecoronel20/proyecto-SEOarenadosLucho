import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function TreatmentTypesSection() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Tipos de tratamiento de arenado industrial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicio Profesional de Arenado Industrial en Buenos Aires</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Realizamos cada proyecto de arenado industrial siguiendo estrictos protocolos profesionales que garantizan máxima seguridad, eficiencia y resultados duraderos de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Proceso de Preparación y Evaluación Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">• Inspección técnica inicial para evaluación detallada de superficies metálicas y condiciones del sitio</li>
                <li className="flex items-center gap-2">• Gestión completa de documentación y permisos para trabajos en plantas industriales</li>
                <li className="flex items-center gap-2">• Análisis profesional y prueba preliminar para determinar el tratamiento óptimo</li>
                <li className="flex items-center gap-2">• Planificación estratégica de equipos industriales y materiales según dimensiones del proyecto</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Proceso de Ejecución y Limpieza Profesional</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">• Implementación rigurosa de equipos de protección personal certificados (EPP completo)</li>
                <li className="flex items-center gap-2">• Técnica especializada de arenado para eliminación efectiva de óxido, pinturas y contaminantes</li>
                <li className="flex items-center gap-2">• Control de calidad continuo para asegurar acabado uniforme y profesional</li>
                <li className="flex items-center gap-2">• Remoción completa y profesional de residuos post-arenado</li>
                <li className="flex items-center gap-2">• Documentación detallada y certificación del servicio realizado</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas asesoramiento experto para tu proyecto de arenado industrial? Nuestro equipo de especialistas está listo para ayudarte.
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

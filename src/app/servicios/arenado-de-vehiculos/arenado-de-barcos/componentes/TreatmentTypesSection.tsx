
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function TreatmentTypesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicios de Arenado de Barcos en Zona Norte</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de arenado para embarcaciones en Tigre, San Fernando y toda Zona Norte. 
            Elegí el tratamiento que mejor se adapte a las necesidades de tu embarcación.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Arenado para Mantenimiento</CardTitle>
              <CardDescription className="text-lg">
                Solución para mantenimiento regular de embarcaciones en Zona Norte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                El arenado para mantenimiento es ideal para embarcaciones que necesitan limpieza regular del casco. 
                Este proceso elimina incrustaciones ligeras y prepara la superficie para una nueva capa de pintura, 
                asegurando una excelente adherencia.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Beneficios del arenado de mantenimiento:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Remoción selectiva de incrustaciones</li>
                  <li>• Preservación del material del casco</li>
                  <li>• Superficie óptima para pintura</li>
                  <li>• Proceso eficiente y económico</li>
                  <li>• Acabado profesional garantizado</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Arenado Integral para Renovación</CardTitle>
              <CardDescription className="text-lg">
                Tratamiento completo para cascos con incrustaciones severas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cuando tu embarcación tiene incrustaciones severas o múltiples capas de pintura, nuestro servicio de arenado integral 
                asegura una preparación perfecta. Removemos completamente las capas deterioradas para garantizar 
                una adherencia óptima del nuevo revestimiento.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Ventajas del arenado integral:</h4>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>• Remoción total de incrustaciones severas</li>
                  <li>• Base perfecta para pintura premium</li>
                  <li>• Máxima adherencia garantizada</li>
                  <li>• Tratamiento profesional completo</li>
                  <li>• Resultados duraderos y de calidad</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitás asesoramiento para elegir el mejor tratamiento para tu embarcación?
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

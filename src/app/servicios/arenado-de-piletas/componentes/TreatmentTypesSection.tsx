import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function TreatmentTypesSection() {
  return (
    <section id="tipos-de-tratamiento" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicios de Arenado de Piletas en Zona Norte</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de arenado para piletas en toda la Zona Norte de Buenos Aires, incluyendo Pilar, San Isidro, Tigre y más zonas. Elegí el tratamiento que mejor se adapte a tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Arenado para Repintado de Piletas</CardTitle>
              <CardDescription className="text-lg">
                Solución económica para renovar piletas en Zona Norte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                El arenado para repintado es ideal cuando buscás renovar tu pileta manteniendo un presupuesto accesible. 
                Este proceso elimina la pintura suelta y prepara la superficie para una nueva capa de pintura, asegurando 
                una excelente adherencia.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Beneficios del arenado para repintado:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Remoción selectiva de pintura deteriorada</li>
                  <li>• Preservación del hormigón original</li>
                  <li>• Superficie óptima para nueva pintura</li>
                  <li>• Proceso eficiente y económico</li>
                  <li>• Acabado profesional garantizado</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Arenado para otros Revestimientos</CardTitle>
              <CardDescription className="text-lg">
                Preparación profesional para revestimientos de alta durabilidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cuando planeas aplicar un revestimiento especial en tu pileta, nuestro servicio de arenado integral 
                asegura una preparación perfecta. Removemos completamente la pintura existente para garantizar 
                una adherencia óptima del nuevo revestimiento.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Ventajas del arenado integral:</h4>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>• Remoción total de pintura antigua</li>
                  <li>• Base perfecta para revestimientos premium</li>
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
            ¿Necesitás ayuda para elegir el mejor tratamiento para tu pileta?
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

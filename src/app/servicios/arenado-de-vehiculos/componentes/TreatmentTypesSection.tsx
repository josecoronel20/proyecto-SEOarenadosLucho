import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function TreatmentTypesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Arenado Automotor Profesional en Zona Norte</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Realizamos arenado profesional de autos, camionetas y piezas metálicas en Pilar, San Isidro y toda Zona Norte. 
            Eliminamos óxido, pintura vieja y corrosión, dejando la superficie lista para repintar o restaurar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Ventajas del Arenado Automotor</CardTitle>
              <CardDescription className="text-lg">
                Beneficios de nuestro servicio profesional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Elimina óxido, pintura y corrosión
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  No daña la chapa ni la estructura
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Mejora la adherencia de la pintura
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Ideal para restauraciones y repintados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Proceso rápido y seguro
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Nuestro Proceso de Trabajo</CardTitle>
              <CardDescription className="text-lg">
                Metodología profesional paso a paso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-orange-500">1.</span>
                  Evaluación del vehículo
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-orange-500">2.</span>
                  Protección de zonas sensibles
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-orange-500">3.</span>
                  Arenado controlado
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-orange-500">4.</span>
                  Limpieza final y revisión
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Querés conocer más sobre nuestro servicio de arenado automotor?
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}

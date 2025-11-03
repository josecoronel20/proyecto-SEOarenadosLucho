import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function TreatmentTypesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Modalidades de Servicio de Arenado Industrial</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos dos modalidades de servicio para adaptarnos a tus necesidades: arenado in situ en tu ubicación o 
            servicio en nuestro taller especializado en Zona Norte.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Arenado In Situ</CardTitle>
              <CardDescription className="text-lg">
                Llevamos nuestro equipo a tu ubicación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Ideal para piezas grandes o fijas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Servicio en toda Zona Norte
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Equipamiento móvil profesional
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Evita costos de transporte
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Trabajo inmediato en el lugar
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Servicio en Taller</CardTitle>
              <CardDescription className="text-lg">
                Trabajo especializado en nuestras instalaciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Perfecto para piezas pequeñas y medianas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Ambiente controlado y especializado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Mayor precisión en el acabado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Almacenamiento seguro de piezas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Equipamiento industrial completo
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitás asesoramiento sobre cuál es la mejor opción para tu proyecto?
          </p>
          <WhatsAppButton />

        </div>
      </div>
    </section>
  )
}

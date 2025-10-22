import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SanFernandoInfoSection() {
  return (
    <section className="py-16" aria-labelledby="san-fernando-info-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-rose-200 bg-gradient-to-r from-rose-50 to-rose-100">
            <CardHeader>
              <CardTitle className="text-rose-800" id="san-fernando-info-heading">
                Información Específica para San Fernando
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-rose-700 mb-3">Zonas de Servicio</h4>
                  <ul className="space-y-2 text-sm text-rose-600" role="list" aria-label="Zonas de servicio en San Fernando">
                    <li role="listitem">• Centro de San Fernando - Comercios y oficinas</li>
                    <li role="listitem">• Barrios residenciales - Hogares familiares</li>
                    <li role="listitem">• Zona comercial - Establecimientos</li>
                    <li role="listitem">• Barrios cerrados - Piletas y fachadas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-700 mb-3">Horarios Flexibles</h4>
                  <ul className="space-y-2 text-sm text-rose-600" role="list" aria-label="Horarios flexibles en San Fernando">
                    <li role="listitem">• Lunes a Viernes: 8:00 - 18:00</li>
                    <li role="listitem">• Sábados: 8:00 - 14:00</li>
                    <li role="listitem">• Horarios especiales disponibles</li>
                    <li role="listitem">• Servicio de emergencia</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

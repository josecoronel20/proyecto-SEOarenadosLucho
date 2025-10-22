import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PilarInfoSection() {
  return (
    <section className="py-16" aria-labelledby="pilar-info-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-800" id="pilar-info-heading">
                Información Específica para Pilar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Zonas de Mayor Demanda</h4>
                  <ul className="space-y-2 text-sm text-blue-600" role="list" aria-label="Zonas de mayor demanda en Pilar">
                    <li role="listitem">• Centro de Pilar - Proyectos residenciales</li>
                    <li role="listitem">• Zona Industrial - Arenado industrial</li>
                    <li role="listitem">• Barrios cerrados - Piletas y fachadas</li>
                    <li role="listitem">• Polo Industrial - Maquinaria pesada</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Horarios de Atención</h4>
                  <ul className="space-y-2 text-sm text-blue-600" role="list" aria-label="Horarios de atención en Pilar">
                    <li role="listitem">• Lunes a Viernes: 8:00 - 18:00</li>
                    <li role="listitem">• Sábados: 8:00 - 14:00</li>
                    <li role="listitem">• Emergencias: 24/7</li>
                    <li role="listitem">• Respuesta en Pilar: Inmediata</li>
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

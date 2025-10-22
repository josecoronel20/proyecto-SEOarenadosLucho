import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SanIsidroInfoSection() {
  return (
    <section className="py-16" aria-labelledby="san-isidro-info-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-purple-100">
            <CardHeader>
              <CardTitle className="text-purple-800" id="san-isidro-info-heading">
                Información Específica para San Isidro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Zonas de Especialización</h4>
                  <ul className="space-y-2 text-sm text-purple-600" role="list" aria-label="Zonas de especialización en San Isidro">
                    <li role="listitem">• Barrio Norte - Fachadas históricas</li>
                    <li role="listitem">• Boulogne Sur Mer - Propiedades premium</li>
                    <li role="listitem">• Villa Adelina - Residencias de lujo</li>
                    <li role="listitem">• Beccar - Vehículos clásicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Servicios Premium</h4>
                  <ul className="space-y-2 text-sm text-purple-600" role="list" aria-label="Servicios premium en San Isidro">
                    <li role="listitem">• Técnicas no abrasivas</li>
                    <li role="listitem">• Preservación patrimonial</li>
                    <li role="listitem">• Materiales premium</li>
                    <li role="listitem">• Garantía extendida</li>
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

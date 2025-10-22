import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { PROJECT } from "@/config/project"

export function OtherAreasSection() {
  const zonaOesteAreas = PROJECT.coverage.zonaOeste
  const primaryAreas = ["General Rodríguez", "Moreno", "Morón", "Ituzaingó", "Hurlingham", "3 de Febrero"]
  const otherAreas = zonaOesteAreas.filter(area => !primaryAreas.includes(area))

  return (
    <section className="py-16" aria-labelledby="other-areas-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 id="other-areas-heading" className="text-2xl font-bold mb-4">
              Otras Localidades Cubiertas
            </h3>
            <p className="text-muted-foreground mb-6">
              También brindamos servicio en estas localidades de Zona Oeste
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12" role="list" aria-label="Otras localidades de Zona Oeste">
            {otherAreas.map((area) => (
              <Card key={area} className="text-center border-gray-200 hover:border-green-300 transition-colors" role="listitem">
                <CardContent className="pt-6 pb-6">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" aria-hidden="true" />
                  <h4 className="font-semibold text-sm">{area}</h4>
                  <p className="text-xs text-muted-foreground">Servicio móvil</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

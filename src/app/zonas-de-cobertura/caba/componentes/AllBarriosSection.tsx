import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function AllBarriosSection() {
  const cabaBarrios = [
    "Palermo", "Recoleta", "Belgrano", "Villa Crespo", "Caballito", "Almagro",
    "San Telmo", "La Boca", "Barracas", "Puerto Madero", "Retiro", "Monserrat",
    "San Nicolás", "Constitución", "Balvanera", "Once", "Flores", "Floresta",
    "Villa Luro", "Villa Devoto", "Villa Pueyrredón", "Agronomía", "Parque Chas",
    "Coghlan", "Saavedra", "Núñez", "Villa Urquiza", "Villa Ortúzar", "Chacarita",
    "Colegiales", "Paternal", "Parque Chacabuco", "Boedo",
    "San Cristóbal", "Nueva Pompeya", "Parque Patricios"
  ]

  return (
    <section className="py-16" aria-labelledby="all-barrios-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 id="all-barrios-heading" className="text-2xl font-bold mb-4">
              Todos los Barrios Cubiertos
            </h3>
            <p className="text-muted-foreground mb-6">
              Brindamos servicio en todos los barrios de la Ciudad Autónoma de Buenos Aires
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12" role="list" aria-label="Todos los barrios de CABA">
            {cabaBarrios.map((barrio) => (
              <Card key={barrio} className="text-center border-gray-200 hover:border-purple-300 transition-colors" role="listitem">
                <CardContent className="pt-4 pb-4">
                  <MapPin className="h-5 w-5 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                  <h4 className="font-semibold text-xs">{barrio}</h4>
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

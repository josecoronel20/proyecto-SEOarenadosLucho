import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"

export function CoverageZonesSection() {
  const coverageZones = [
    {
      id: "zona-norte",
      title: "Zona Norte",
      areas: PROJECT.coverage.zonaNorte,
      href: "/zonas-de-cobertura/zona-norte",
      color: "border-blue-200 bg-blue-50",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: "zona-oeste", 
      title: "Zona Oeste",
      areas: PROJECT.coverage.zonaOeste,
      href: "/zonas-de-cobertura/zona-oeste",
      color: "border-green-200 bg-green-50",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      id: "caba",
      title: "Ciudad Autónoma de Buenos Aires",
      areas: PROJECT.coverage.caba,
      href: "/zonas-de-cobertura/caba",
      color: "border-purple-200 bg-purple-50",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="coverage-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="coverage-heading" className="text-3xl font-bold mb-4">
              Nuestras Zonas de Cobertura
            </h2>
           
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" role="list" aria-label="Zonas de cobertura disponibles">
            {coverageZones.map((zone) => (
              <Card key={zone.id} className={`${zone.color} hover:shadow-lg transition-shadow cursor-pointer`} role="listitem">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${zone.bgColor} p-3 rounded-full`}>
                      <MapPin className={`h-6 w-6 ${zone.iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{zone.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {zone.areas.length} localidades
                      </CardDescription>
                    </div>
                  </div>
                  
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Principales localidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.areas.slice(0, 4).map((area) => (
                        <span 
                          key={area}
                          className="bg-white/70 px-2 py-1 rounded text-xs font-medium"
                        >
                          {area}
                        </span>
                      ))}
                      {zone.areas.length > 4 && (
                        <span className="bg-white/70 px-2 py-1 rounded text-xs font-medium">
                          +{zone.areas.length - 4} más
                        </span>
                      )}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={zone.href}>
                      Ver Zona Completa
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

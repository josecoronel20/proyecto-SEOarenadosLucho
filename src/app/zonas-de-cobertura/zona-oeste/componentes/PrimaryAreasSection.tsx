import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function PrimaryAreasSection() {
  const primaryAreas = ["General Rodríguez", "Moreno", "Morón", "Ituzaingó", "Hurlingham", "3 de Febrero"]
  
  const areaLinks = {
    "General Rodríguez": "/zonas-de-cobertura/zona-oeste/general-rodriguez",
    "Moreno": "/zonas-de-cobertura/zona-oeste/moreno",
    "Morón": "/zonas-de-cobertura/zona-oeste/moron",
    "Ituzaingó": "/zonas-de-cobertura/zona-oeste/ituzaingo",
    "Hurlingham": "/zonas-de-cobertura/zona-oeste/hurlingham",
    "3 de Febrero": "/zonas-de-cobertura/zona-oeste/3-de-febrero"
  }

  const areaDescriptions = {
    "General Rodríguez": "Especialistas en arenado industrial y comercial.",
    "Moreno": "Servicio residencial y comercial con equipos móviles.",
    "Morón": "Atención personalizada para proyectos de todo tipo.",
    "Ituzaingó": "Cobertura completa con tecnología de punta.",
    "Hurlingham": "Respuesta rápida para servicios residenciales y comerciales.",
    "3 de Febrero": "Calidad premium en todos nuestros servicios."
  }

  return (
    <section className="py-16" aria-labelledby="primary-areas-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="primary-areas-heading" className="text-3xl font-bold mb-4">
              Principales Localidades
            </h2>
            <p className="text-lg text-muted-foreground">
              Nuestras localidades más solicitadas en Zona Oeste
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" role="list" aria-label="Principales localidades de Zona Oeste">
            {primaryAreas.map((area, index) => (
              <Card key={area} className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow" role="listitem">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{area}</CardTitle>
                      <CardDescription>Servicio móvil disponible</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {areaDescriptions[area as keyof typeof areaDescriptions]}
                  </p>
                  <div className="space-y-2">
                    <Button asChild className="w-full">
                      <Link href={areaLinks[area as keyof typeof areaLinks] || `/servicios?zona=${encodeURIComponent(area)}`} aria-label={`Ver servicios de arenado en ${area}`}>
                        Ver Servicios en {area}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/servicios?zona=${encodeURIComponent(area)}`} aria-label={`Ver todos los servicios disponibles en ${area}`}>
                        Todos los Servicios
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

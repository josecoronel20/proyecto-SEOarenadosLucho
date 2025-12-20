import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export function CoverageAreasSection() {
  const zones = [
    {
      name: "Zona Norte",
      href: "/zonas-de-cobertura/zona-norte",
      description: "Arenado de metales en Zona Norte"
    },
    {
      name: "Zona Oeste",
      href: "/zonas-de-cobertura/zona-oeste",
      description: "Arenado de metales en Zona Oeste"
    },
    {
      name: "CABA",
      href: "/zonas-de-cobertura/caba",
      description: "Arenado de metales en CABA"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Zonas que cubrimos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Servicio profesional de arenado de metales en toda la región metropolitana de Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {zones.map((zone) => (
            <Card key={zone.name} className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary mr-2" />
                  <CardTitle className="text-xl text-gray-900">{zone.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Link 
                  href={zone.href}
                  className="text-primary hover:text-primary/80 hover:underline transition-colors duration-200 font-medium"
                  title={zone.description}
                >
                  Ver más información
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


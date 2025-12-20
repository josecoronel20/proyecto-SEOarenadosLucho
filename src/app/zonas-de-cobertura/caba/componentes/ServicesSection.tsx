import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  href: string
}

interface ServicesSectionProps {
  locationName?: string
  services?: Service[]
}

export function ServicesSection({ locationName = "CABA", services }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      id: "arenado-piletas",
      title: "Arenado de Piletas",
      description: `Limpieza profunda y preparación de piletas para pintura epoxi en ${locationName}`,
      features: ["Preparación para pintura epoxi", "Eliminación de algas y moho", "Servicio móvil", "Equipos profesionales"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-vehiculos", 
      title: "Arenado de Vehículos",
      description: `Remoción de pintura y óxido en autos, camiones y barcos en ${locationName}`,
      features: ["Autos", "Camiones", "Barcos", "Técnicas especializadas"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-industrial",
      title: "Arenado Industrial", 
      description: `Limpieza y preparación de estructuras metálicas y maquinarias en ${locationName}`,
      features: ["Estructuras metálicas", "Maquinaria industrial", "Servicio móvil", "Equipos propios"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-metales",
      title: "Arenado de Metales",
      description: `Servicio fino en cabina para piezas metálicas en ${locationName}`,
      features: ["Piezas mecánicas", "Servicio en taller", "Preparación para galvanizado", "Terminación uniforme"],
      href: "/servicios/arenado-de-metales"
    },
    {
      id: "arenado-madera",
      title: "Arenado de Madera",
      description: `Restauración y despintado de muebles y superficies de madera en ${locationName}`,
      features: ["Muebles", "Superficies de madera", "Acabado fino", "Preservación del material"],
      href: "/servicios/arenado-de-madera"
    }
  ]

  const displayServices = services || defaultServices

  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold mb-4">
              Servicios de Arenado en {locationName}
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluciones completas de arenado y sandblasting con atención prioritaria en {locationName}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16" role="list" aria-label={`Servicios de arenado disponibles en ${locationName}`}>
            {displayServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-blue-200" role="listitem">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" aria-hidden="true"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={service.href} aria-label={`Ver detalles de ${service.title}`}>
                      Ver Detalles
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

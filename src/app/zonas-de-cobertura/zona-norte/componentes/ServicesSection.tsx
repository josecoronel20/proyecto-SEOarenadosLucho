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
  locationName: string
  services?: Service[]
}

export function ServicesSection({ locationName, services }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      id: "arenado-residencial",
      title: "Arenado Residencial",
      description: `Servicios profesionales de arenado para tu hogar en ${locationName}`,
      features: ["Piletas", "Fachadas", "Pisos", "Muebles"],
      href: "/servicios/arenado-residencial"
    },
    {
      id: "arenado-industrial",
      title: "Arenado Industrial", 
      description: `Servicio industrial especializado para empresas y fábricas en ${locationName}`,
      features: ["Tanques", "Estructuras metálicas", "Fábricas", "Edificios antiguos"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-vehiculos", 
      title: "Arenado de Vehículos",
      description: `Servicio profesional de despintado y preparación de vehículos en ${locationName}`,
      features: ["Camiones", "Autos", "Barcos"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-superficies",
      title: "Arenado de Superficies",
      description: `Servicio fino para superficies metálicas y de madera en ${locationName}`,
      features: ["Superficies metálicas", "Superficies de madera", "Servicio en taller", "Servicio móvil"],
      href: "/servicios/arenado-de-superficies"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" role="list" aria-label={`Servicios de arenado disponibles en ${locationName}`}>
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


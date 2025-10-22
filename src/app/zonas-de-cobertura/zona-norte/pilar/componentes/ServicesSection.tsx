import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const pilarServices = [
    {
      id: "arenado-piletas-pilar",
      title: "Arenado de Piletas en Pilar",
      description: "Especialistas en limpieza profunda de piletas residenciales y comerciales en Pilar",
      features: ["Preparación para pintura epoxi", "Eliminación de algas y moho", "Técnicas no abrasivas", "Garantía de calidad"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-vehiculos-pilar", 
      title: "Arenado de Vehículos en Pilar",
      description: "Servicio profesional de despintado y preparación de vehículos en Pilar",
      features: ["Remoción de pintura", "Eliminación de óxido", "Preparación para pintura", "Técnicas controladas"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-industrial-pilar",
      title: "Arenado Industrial en Pilar", 
      description: "Servicio industrial especializado para empresas y fábricas en Pilar",
      features: ["Estructuras metálicas", "Maquinaria industrial", "Equipos pesados", "Servicio móvil"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-fachadas-pilar",
      title: "Arenado de Fachadas en Pilar",
      description: "Restauración y limpieza profunda de fachadas de edificios en Pilar",
      features: ["Remoción de pinturas y revestimientos antiguos", "Preparación para nuevos acabados", "Técnicas controladas", "Servicio móvil"],
      href: "/servicios/arenado-de-fachadas"
    },
    {
      id: "arenado-piezas-metalicas-pilar",
      title: "Arenado de Piezas Metálicas en Pilar",
      description: "Servicio fino en cabina para piezas mecánicas, ornamentales o industriales en Pilar",
      features: ["Piezas mecánicas", "Trabajo en taller", "Terminación uniforme", "Servicio móvil"],
      href: "/servicios/arenado-de-piezas-metalicas"
    },
    {
      id: "arenado-muebles-pilar",
      title: "Arenado de Muebles en Pilar",
      description: "Restauración y despintado de muebles con acabado fino en Pilar",
      features: ["Restauración de muebles", "Despintado fino", "Acabado profesional", "Preservación de madera"],
      href: "/servicios/arenado-de-muebles"
    },
    {
      id: "arenado-barcos-pilar",
      title: "Arenado de Barcos en Pilar",
      description: "Despintado y tratamiento de cascos, cubiertas y estructuras navales en Pilar",
      features: ["Cascos y cubiertas", "Estructuras navales", "Técnicas controladas", "Protección de materiales"],
      href: "/servicios/arenado-de-barcos"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold mb-4">
              Servicios de Arenado en Pilar
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluciones completas de arenado y sandblasting con atención prioritaria en Pilar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Servicios de arenado disponibles en Pilar">
            {pilarServices.map((service) => (
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

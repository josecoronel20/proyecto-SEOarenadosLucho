import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const sanFernandoServices = [
    {
      id: "arenado-piletas-san-fernando",
      title: "Arenado de Piletas en San Fernando",
      description: "Limpieza profunda y preparación para pintura de piletas en San Fernando",
      features: ["Piletas residenciales", "Piletas comerciales", "Preparación epoxi", "Limpieza profunda"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-industrial-san-fernando", 
      title: "Arenado Industrial en San Fernando",
      description: "Servicio industrial para estructuras metálicas y maquinaria en San Fernando",
      features: ["Estructuras metálicas", "Maquinaria pesada", "Tanques industriales", "Mantenimiento preventivo"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-barcos-san-fernando",
      title: "Arenado de Barcos en San Fernando", 
      description: "Mantenimiento naval profesional para embarcaciones en San Fernando",
      features: ["Cascos de barcos", "Eliminación de incrustaciones", "Preparación pintura", "Mantenimiento naval"],
      href: "/servicios/arenado-de-barcos"
    },
    {
      id: "arenado-vehiculos-san-fernando",
      title: "Arenado de Vehículos en San Fernando", 
      description: "Preparación para pintura automotriz en San Fernando",
      features: ["Vehículos familiares", "Vehículos comerciales", "Técnicas suaves", "Preservación"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-piezas-metalicas-san-fernando",
      title: "Arenado de Piezas Metálicas en San Fernando", 
      description: "Tratamiento de piezas pequeñas con precisión en San Fernando",
      features: ["Piezas pequeñas", "Preparación galvanizado", "Mantenimiento tolerancias", "Servicio en taller"],
      href: "/servicios/arenado-de-piezas-metalicas"
    },
    {
      id: "arenado-muebles-san-fernando",
      title: "Arenado de Muebles en San Fernando", 
      description: "Restauración de muebles de madera y metal en San Fernando",
      features: ["Muebles de madera", "Restauración", "Despintado fino", "Preservación"],
      href: "/servicios/arenado-de-muebles"
    },
    {
      id: "arenado-fachadas-san-fernando", 
      title: "Arenado de Fachadas en San Fernando",
      description: "Limpieza de edificios residenciales y comerciales en San Fernando",
      features: ["Fachadas residenciales", "Fachadas comerciales", "Técnicas no abrasivas", "Preservación"],
      href: "/servicios/arenado-de-fachadas"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold mb-4">
              Todos los Servicios en San Fernando
            </h2>
            <p className="text-lg text-muted-foreground">
              Servicios completos de arenado para hogares y comercios en San Fernando
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" role="list" aria-label="Servicios de arenado disponibles en San Fernando">
            {sanFernandoServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-rose-200" role="listitem">
                <CardHeader>
                  <CardTitle className="text-xl text-rose-800">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-rose-600 rounded-full mr-3" aria-hidden="true"></div>
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

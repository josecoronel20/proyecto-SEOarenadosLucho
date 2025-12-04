import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const sanIsidroServices = [
    {
      id: "arenado-fachadas-san-isidro",
      title: "Arenado de Fachadas en San Isidro",
      description: "Especialistas en restauración de fachadas históricas y residenciales de alto standing en San Isidro",
      features: ["Fachadas históricas", "Edificios de lujo", "Técnicas no abrasivas", "Preservación patrimonial"],
      href: "/servicios/arenado-de-fachadas"
    },
    {
      id: "arenado-vehiculos-lujo-san-isidro", 
      title: "Arenado de Vehículos de Lujo en San Isidro",
      description: "Servicio premium para vehículos de alta gama y clásicos en San Isidro",
      features: ["Vehículos de lujo", "Autos clásicos", "Técnicas especializadas", "Garantía premium"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-muebles-san-isidro",
      title: "Arenado de Muebles en San Isidro", 
      description: "Restauración de muebles antiguos y de diseño en San Isidro",
      features: ["Muebles antiguos", "Muebles de diseño", "Restauración fina", "Preservación de madera"],
      href: "/servicios/arenado-de-muebles"
    },
    {
      id: "arenado-piletas-san-isidro",
      title: "Arenado de Piletas en San Isidro",
      description: "Servicio premium para piletas residenciales de alto standing en San Isidro",
      features: ["Piletas de lujo", "Técnicas no abrasivas", "Materiales premium", "Garantía extendida"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-piezas-metalicas-san-isidro",
      title: "Arenado de Piezas Metálicas en San Isidro",
      description: "Servicio fino para piezas ornamentales y de diseño en San Isidro",
      features: ["Piezas ornamentales", "Restauración fina", "Terminación premium", "Preservación de detalles"],
      href: "/servicios/arenado-de-piezas-metalicas"
    },
    {
      id: "arenado-barcos-san-isidro",
      title: "Arenado de Barcos en San Isidro",
      description: "Servicio premium para embarcaciones de recreo y yates en San Isidro",
      features: ["Yates de lujo", "Embarcaciones premium", "Técnicas especializadas", "Protección de materiales"],
      href: "/servicios/arenado-de-barcos"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold mb-4">
              Servicios Premium en San Isidro
            </h2>
            <p className="text-lg text-muted-foreground">
              Servicios especializados para propiedades y vehículos de alto standing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Servicios premium de arenado disponibles en San Isidro">
            {sanIsidroServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-purple-200" role="listitem">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" aria-hidden="true"></div>
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

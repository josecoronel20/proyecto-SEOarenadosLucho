import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CompactServicesSection() {
  const services = [
    {
      title: "Arenado de Piletas",
      description: "Limpieza profunda y preparación para pintura epoxi.",
      href: "/servicios/arenado-de-piletas",
      imageSrc: "/images/servicios/servicio-arenado-pileta-pilar.png"
    },
    {
      title: "Arenado de Vehículos",
      description: "Autos, camiones y barcos con técnicas especializadas.",
      href: "/servicios/arenado-de-vehiculos",
      imageSrc: "/images/servicios/servicio-arenado-auto-san-fernando.png"
    },
    {
      title: "Arenado Industrial",
      description: "Estructuras metálicas y maquinaria pesada.",
      href: "/servicios/arenado-industrial",
      imageSrc: "/images/servicios/servicio-arenado-industrial-pilar.jpg"
    },
    {
      title: "Arenado de Metales",
      description: "Piezas metálicas con servicio fino en cabina.",
      href: "/servicios/arenado-de-metales",
      imageSrc: "/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png"
    },
    {
      title: "Arenado de Madera",
      description: "Muebles y superficies de madera con acabado fino.",
      href: "/servicios/arenado-de-madera",
      imageSrc: "/images/servicios/servicio-arenado-superficie-madera-pilar.png"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestros Servicios Principales
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones profesionales de arenado para cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group transition-all border border-blue-100 bg-white rounded-2xl shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 focus-within:shadow-xl focus-within:border-primary/60 relative overflow-hidden"
              >
                <Link href={service.href} className="absolute inset-0 z-10" tabIndex={-1} aria-label={`Ver más sobre ${service.title}`}></Link>
                <CardHeader className="flex flex-col items-start pb-0">
                  {/* Imagen añadida aquí */}
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="rounded-xl w-full h-28 object-cover border border-blue-100 shadow-sm transition-transform group-hover:scale-105"
                      loading="lazy"
                      style={{ maxHeight: "7rem", minHeight: "5rem", background: "#eaf1fb" }}
                    />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform -mt-8">
                    <ArrowRight className="text-primary h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-6 flex flex-col justify-between h-full">
                  <p className="text-gray-600 text-sm mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full font-medium group-hover:bg-primary/10 border-primary/50 group-hover:border-primary group-hover:text-primary relative z-20"
                    asChild
                  >
                    <Link href={service.href}>
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">¿Necesitas un presupuesto personalizado?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/presupuesto-rapido">
                  Cotizar Ahora
                </Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


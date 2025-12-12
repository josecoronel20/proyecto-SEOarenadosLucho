import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function CompactServicesSection() {
  const services = [
    {
      title: "Arenado Residencial",
      description: "Piletas, fachadas, pisos y muebles para tu hogar.",
      href: "/servicios/arenado-residencial"
    },
    {
      title: "Arenado Industrial",
      description: "Tanques, estructuras metálicas y maquinaria pesada.",
      href: "/servicios/arenado-industrial"
    },
    {
      title: "Arenado de Vehículos",
      description: "Camiones, autos y barcos con técnicas especializadas.",
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      title: "Arenado de Superficies",
      description: "Superficies metálicas y de madera con acabado fino.",
      href: "/servicios/arenado-de-superficies"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
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


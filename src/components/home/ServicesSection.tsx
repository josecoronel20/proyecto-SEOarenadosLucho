import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Arenado Industrial",
    description:
      "Servicio orientado a empresas que necesitan preparación profesional de superficies metálicas para mantenimiento, restauración o procesos productivos. Enfocado en resultados uniformes, planificación clara y reducción de tiempos de parada.",
    image: "/images/services/arenadoIndustrial.PNG",
    link: "/arenado-industrial",
    badge: "Empresas",
  },
  {
    title: "Arenado Particular",
    description:
      "Solución práctica para personas que buscan limpiar, restaurar o renovar superficies de forma rápida y prolija. Ideal tanto para elementos piezas metálicas y vehículos como para piletas y fachadas.",
    image: "/images/services/arenadoParticular.JPG",
    link: "/arenado-particular",
    badge: "Particulares",
  },
]

const CardAction = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2">{children}</div>
)

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden text-primary-600"
            >
              {/* Image with overlay */}
              <div className="relative aspect-video w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="relative z-20 object-cover brightness-60  dark:brightness-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardHeader>
                <CardAction>
                  <Badge variant="secondary">{service.badge}</Badge>
                </CardAction>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardFooter>
                <Link href={service.link} className="w-full" tabIndex={-1}>
                  <Button className="w-full bg-primary-400" asChild>
                    <span>Ver Servicio</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

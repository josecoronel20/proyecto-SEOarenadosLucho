import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20" aria-label="Sección principal de arenado de vehículos">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado de Vehículos en <span className="text-blue-600">Zona Norte</span> | Servicio Profesional
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Servicio especializado de arenado automotriz en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. 
              Eliminamos óxido, corrosión y pintura deteriorada con técnicas profesionales. Preparación experta para pintura 
              y restauración de autos, camionetas, camiones y todo tipo de vehículos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20vehiculo" aria-label="Solicitar presupuesto por WhatsApp">
                  Solicitar Presupuesto Gratuito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido" aria-label="Cotizar servicio de arenado online">
                  Cotización Online Inmediata
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <ProjectCard
              project={{
                id: "hero-example-vehiculos",
                title: "Arenado Profesional de Vehículo en Pilar",
                description: "Restauración completa de carrocería mediante arenado industrial profesional. Eliminación de óxido y preparación para pintura.",
                beforeImage: "/images/proyectos/arenado-vehiculo-auto-pilar-antes.webp",
                afterImage: "/images/proyectos/arenado-vehiculo-auto-pilar-despues.webp",
                beforeAlt: "Vehículo con óxido y pintura deteriorada antes del arenado",
                afterAlt: "Vehículo restaurado después del proceso de arenado profesional",
                location: "Pilar",
                category: "vehiculo"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

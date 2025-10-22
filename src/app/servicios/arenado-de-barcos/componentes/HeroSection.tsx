import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado de Barcos en <span className="text-blue-600">Zona Norte</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Servicio profesional de arenado para embarcaciones en Tigre, San Fernando y toda Zona Norte. 
              Eliminamos incrustaciones, óxido y pintura deteriorada para preparar tu barco para pintura o revestimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20barco">
                  Pedir Presupuesto por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido">
                  Cotizar Online
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <ProjectCard
              project={{
                id: "hero-example-barcos",
                title: "Arenado de Barco en Tigre",
                description: "Renovación completa con arenado profesional",
                beforeImage: "/images/proyectos/arenado-barco-tigre-antes.webp",
                afterImage: "/images/proyectos/arenado-barco-tigre-despues.webp",
                beforeAlt: "Barco antes del arenado",
                afterAlt: "Barco después del arenado",
                location: "Tigre",
                category: "Arenado"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20" 
      aria-label="Sección principal de arenado de piezas metálicas"
      itemScope
      itemType="http://schema.org/Service"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              itemProp="name"
            >
              Arenado de Piezas Metálicas en <span className="text-blue-600">Zona Norte</span> | Servicio Especializado
            </h1>
            <p 
              className="text-xl text-muted-foreground mb-8"
              itemProp="description"
            >
              Servicio profesional de arenado para piezas metálicas en Pilar, San Isidro y toda Zona Norte de Buenos Aires. 
              Eliminamos óxido, corrosión y contaminantes con precisión industrial. Preparación experta para galvanizado, 
              pintura y tratamientos especializados en piezas de precisión.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4"
              itemProp="offers" 
              itemScope 
              itemType="http://schema.org/Offer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link 
                  href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20piezas%20metalicas" 
                  aria-label="Solicitar presupuesto por WhatsApp"
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                  Solicitar Presupuesto Gratuito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link 
                  href="/presupuesto-rapido" 
                  aria-label="Cotizar servicio de arenado online"
                  itemProp="url"
                >
                  Cotización Online Inmediata
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <ProjectCard
              project={{
                id: "hero-example-piezas",
                title: "Arenado de Piezas Metálicas en Pilar",
                description: "Tratamiento industrial de piezas metálicas mediante arenado de precisión. Eliminación de óxido y preparación para galvanizado.",
                beforeImage: "/images/proyectos/arenado-piezas-metal-cardales-antes.webp",
                afterImage: "/images/proyectos/arenado-piezas-metal-cardales-despues.webp",
                beforeAlt: "Piezas metálicas con óxido y corrosión antes del arenado",
                afterAlt: "Piezas metálicas tratadas después del proceso de arenado industrial",
                location: "Pilar",
                category: "pieza"
              }}
            />
          </div>
        </div>
      </div>

      <meta itemProp="areaServed" content="Zona Norte, Buenos Aires, Argentina" />
      <meta itemProp="serviceType" content="Arenado Industrial" />
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20" 
      aria-label="Sección principal de arenado industrial"
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
              Servicio de Arenado Industrial Profesional en <span className="text-blue-600">Pilar y Zona Norte</span>
            </h1>
            <meta itemProp="alternateName" content="Granallado Industrial en Pilar" />
            <p 
              className="text-xl text-muted-foreground mb-8"
              itemProp="description"
            >
              Expertos en arenado industrial para todo tipo de superficies metálicas. Ofrecemos servicios especializados de limpieza y preparación de superficies mediante arenado abrasivo en Pilar, San Isidro y toda la Zona Norte de Buenos Aires. Eliminamos óxido, pintura antigua, corrosión y contaminantes industriales utilizando equipamiento de última generación. Garantizamos una preparación profesional para pintura industrial y tratamientos anticorrosivos.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4"
              itemProp="offers" 
              itemScope 
              itemType="http://schema.org/Offer"
            >
              <meta itemProp="priceSpecification" content="Presupuesto personalizado" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link 
                  href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20industrial" 
                  aria-label="Solicitar presupuesto gratuito de arenado industrial por WhatsApp"
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
                  aria-label="Obtener cotización inmediata para servicio de arenado industrial"
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
                id: "hero-example-industrial",
                title: "Arenado Industrial Profesional en Morón",
                description: "Servicio completo de arenado industrial para maquinaria pesada y estructuras metálicas. Incluye eliminación de óxido, preparación de superficie y acabado profesional para pintura industrial.",
                beforeImage: "/images/proyectos/arenado-industrial-tanque-moron-antes.webp",
                afterImage: "/images/proyectos/arenado-industrial-tanque-moron-despues.webp",
                beforeAlt: "Maquinaria industrial oxidada y deteriorada antes del proceso de arenado",
                afterAlt: "Resultado final del arenado industrial: superficie limpia y preparada para pintura",
                location: "Morón, Buenos Aires",
                category: "industrial"
              }}
            />
          </div>
        </div>
      </div>

      <meta itemProp="areaServed" content="Pilar, San Isidro, Zona Norte, Buenos Aires, Argentina" />
      <meta itemProp="serviceType" content="Arenado Industrial Profesional" />
      <meta itemProp="provider" content="Especialistas en Arenado Industrial" />
      <meta itemProp="brand" content="Servicio Profesional de Arenado Industrial" />
      <meta itemProp="keywords" content="arenado industrial, granallado, tratamiento anticorrosivo, limpieza industrial, preparación de superficies, Pilar, Zona Norte" />
    </section>
  )
}

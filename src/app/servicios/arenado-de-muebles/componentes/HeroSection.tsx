import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado de Muebles Profesional en Pilar y Zona Norte",
    "description": "Servicio especializado de arenado y restauración de muebles de madera y metal. Eliminación de pintura antigua y preparación para barnizado. Atención en Pilar, San Isidro y toda la Zona Norte de Buenos Aires.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "image": "/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "areaServed": ["Pilar", "San Isidro", "Zona Norte", "Buenos Aires"],
      "priceRange": "$$"
    },
    "serviceType": "Arenado y Restauración de Muebles",
    "category": ["Restauración de Muebles", "Tratamiento de Superficies"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado de Muebles",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado de Muebles de Madera"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado de Muebles Metálicos"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section 
        className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20" 
        aria-label="Servicio profesional de arenado de muebles en Pilar y Zona Norte"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Arenado de Muebles en <span className="text-blue-600">Pilar y Zona Norte</span> | Restauración Profesional Garantizada
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expertos en restauración y arenado profesional de muebles de madera y metal en Pilar, San Isidro y toda la Zona Norte. 
                Más de 15 años recuperando muebles antiguos con técnicas especializadas que preservan la estructura original. 
                Eliminación garantizada de pintura antigua y preparación profesional para barnizado, lacado y acabados premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link 
                    href="https://wa.me/5491123787750?text=Hola,%20quiero%20consultar%20por%20el%20servicio%20de%20arenado%20de%20muebles%20en%20Zona%20Norte" 
                    aria-label="Solicitar presupuesto gratuito para arenado de muebles por WhatsApp"
                    rel="noopener noreferrer"
                  >
                    Solicitar Presupuesto Gratuito
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link 
                    href="/presupuesto-rapido" 
                    aria-label="Cotización online inmediata para arenado de muebles"
                  >
                    Cotización Online 24hs
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <ProjectCard
                project={{
                  id: "hero-example-muebles",
                  title: "Restauración Profesional de Muebles en Pilar",
                  description: "Proceso completo de restauración mediante arenado profesional. Eliminación de capas antiguas y preparación especializada para acabados premium.",
                  beforeImage: "/images/proyectos/arenado-mueble-mesa-pilar-antes.jpg",
                  afterImage: "/images/proyectos/arenado-mueble-mesa-pilar-despues.jpg",
                  beforeAlt: "Mueble antiguo deteriorado antes del proceso de arenado profesional",
                  afterAlt: "Mueble completamente restaurado después del arenado profesional",
                  location: "Pilar, Buenos Aires",
                  category: "mueble"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

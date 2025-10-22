import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/ui/project-card"

export function HeroSection() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado de Fachadas Profesional en Pilar y Zona Norte Buenos Aires 2025",
    "description": "Servicio premium de arenado y limpieza de fachadas en Pilar, San Isidro y Zona Norte. Especialistas certificados en restauración de fachadas residenciales y comerciales. Presupuesto gratuito y garantía por escrito.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Expertos en Fachadas Buenos Aires",
      "image": "/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pilar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR",
        "postalCode": "1629"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-34.4359",
        "longitude": "-58.7014"
      },
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "180"
      }
    },
    "serviceType": "Arenado y Restauración de Fachadas",
    "category": ["Limpieza de Fachadas", "Restauración de Edificios", "Mantenimiento Edilicio"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Premium de Arenado de Fachadas 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado Profesional de Fachadas Residenciales en Pilar",
            "description": "Servicio integral de limpieza y restauración de fachadas residenciales con tecnología especializada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arenado de Fachadas Comerciales en Zona Norte",
            "description": "Tratamiento profesional para edificios comerciales con equipamiento de última generación"
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
        aria-label="Arenado de Fachadas Pilar y Zona Norte Buenos Aires 2025 - Servicio Premium Certificado"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Arenado de Fachadas en <span className="text-blue-600">Pilar, San Isidro y Zona Norte</span> | Servicio Premium 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Especialistas certificados en limpieza y restauración profesional de fachadas en Pilar, San Isidro y todo el corredor norte de Buenos Aires. 
                Más de 15 años brindando servicios premium de arenado para casas, edificios y locales comerciales. 
                Eliminación garantizada de pintura antigua, hongos y preparación especializada para revestimientos exteriores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link 
                    href="https://wa.me/5491123787750?text=Hola,%20quiero%20consultar%20por%20arenado%20de%20fachadas%20en%20Pilar%20y%20Zona%20Norte" 
                    aria-label="Solicitar presupuesto gratuito para arenado de fachadas en Pilar y Zona Norte 2025"
                    rel="noopener noreferrer"
                  >
                    Presupuesto Gratuito | Respuesta Inmediata
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link 
                    href="/presupuesto-rapido" 
                    aria-label="Cotización online 24hs para arenado de fachadas en Zona Norte Buenos Aires"
                  >
                    Cotización Online 24hs | Zona Norte
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <ProjectCard
                project={{
                  id: "hero-example-fachadas-pilar",
                  title: "Arenado Profesional de Fachadas en Pilar 2025",
                  description: "Restauración integral de fachada residencial en Pilar. Incluye eliminación de pintura antigua, tratamiento antihongos y preparación certificada para pintura exterior.",
                  beforeImage: "/images/proyectos/arenado-fachada-san-martin-antes.webp",
                  afterImage: "/images/proyectos/arenado-fachada-san-martin-despues.webp",
                  beforeAlt: "Fachada deteriorada en Pilar antes del arenado profesional",
                  afterAlt: "Fachada en Pilar completamente restaurada después del arenado profesional",
                  location: "Pilar, Buenos Aires",
                  category: "Restauración Premium de Fachadas"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

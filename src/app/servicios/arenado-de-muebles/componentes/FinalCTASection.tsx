import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto gratuito para arenado y restauración de muebles en Zona Norte Buenos Aires 2025",
    "Atención inmediata 24hs - Servicio profesional especializado en Pilar, San Isidro y Tigre", 
    "Cobertura total: Arenado y restauración de muebles certificada en Pilar, San Isidro y Norte GBA"
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado y Restauración Profesional de Muebles en Zona Norte Buenos Aires 2025",
    "serviceType": "Arenado y Restauración Premium de Muebles",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Expertos en Restauración de Muebles Buenos Aires",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Premium de Arenado y Restauración de Muebles 2025",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Arenado Profesional de Muebles Antiguos y Modernos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Restauración Integral de Muebles de Madera y Metal"
            }
          }
        ]
      }
    },
    "description": "Servicio profesional certificado de arenado y restauración de muebles en Zona Norte. Especialistas en recuperación de muebles antiguos, eliminación de pintura y preparación para acabados premium. Más de 15 años de experiencia en Pilar, San Isidro y todo el corredor norte de Buenos Aires.",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-34.4359",
        "longitude": "-58.7014"
      },
      "geoRadius": "30000"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" aria-label="Contacto para arenado y restauración profesional de muebles en Zona Norte Buenos Aires 2025">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arenado y Restauración de Muebles Profesional en Zona Norte Buenos Aires 2025 | Servicio Premium en Pilar, San Isidro y Tigre
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Especialistas certificados en arenado y restauración profesional de muebles de madera, metal y materiales mixtos en Zona Norte de Buenos Aires. 
              Eliminación garantizada de pintura antigua, barniz deteriorado y óxido. Preparación experta para acabados premium con tecnología especializada. 
              15 años transformando muebles antiguos y modernos en Pilar, San Isidro y todo el corredor norte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Presupuesto Gratuito WhatsApp 2025 - Arenado y Restauración de Muebles
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Atención personalizada en Pilar, San Isidro, Tigre y Zona Norte. Envía fotos de tus muebles para recibir evaluación técnica detallada y cotización inmediata. Incluye asesoramiento profesional especializado sin cargo.
                </p>
                <WhatsAppButton />
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Cotización Online - Restauración Premium Certificada
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Servicio express profesional certificado para toda la Zona Norte. Completa el formulario y recibe en 24 horas una evaluación técnica detallada para la restauración integral de tus muebles.
                </p>
                <Button size="lg" variant="outline" className="w-full h-auto py-3 border-white text-primary hover:bg-white hover:text-blue-600 truncate" asChild>
                  <Link href="/presupuesto-rapido">
                    Solicitar Evaluación Técnica Detallada
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                🏆 Empresa Líder en Arenado y Restauración Profesional de Muebles en Zona Norte Buenos Aires 2025
              </h3>
              <p className="text-sm opacity-90">
                Más de 150 familias confían en nuestro servicio premium de arenado y restauración de muebles en Pilar, San Isidro, Tigre y toda la Zona Norte. 
                Equipo especializado con 15 años de experiencia en restauración profesional certificada de muebles antiguos y modernos. 
                Ofrecemos soluciones integrales garantizadas para recuperación de muebles de madera y metal, eliminación de pintura antigua y preparación para acabados premium.
                Utilizamos tecnología avanzada y métodos certificados que aseguran resultados superiores y duraderos en cada proyecto de restauración.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

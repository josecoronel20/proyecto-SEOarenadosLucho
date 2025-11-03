import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto gratuito para arenado industrial profesional en Zona Norte Buenos Aires",
    "Atención inmediata en 24hs - Servicio local especializado en Pilar y San Isidro", 
    "Cobertura completa: Arenado industrial certificado en Pilar, San Isidro, Tigre y Norte GBA"
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial Profesional en Zona Norte Buenos Aires",
    "serviceType": "Arenado Industrial Certificado",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Especialistas en Arenado Industrial",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Profesionales de Arenado Industrial",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Arenado Industrial Profesional In Situ"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Arenado Industrial en Taller Especializado"
            }
          }
        ]
      }
    },
    "description": "Servicio profesional de arenado industrial para maquinaria pesada y estructuras metálicas en Zona Norte. Eliminación garantizada de óxido y corrosión con equipamiento industrial certificado. Más de 15 años de experiencia en tratamientos anticorrosivos industriales.",
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" aria-label="Contacto para arenado industrial profesional en Zona Norte Buenos Aires">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arenado Industrial Profesional en Zona Norte Buenos Aires | Servicio Especializado en Pilar, San Isidro y Tigre
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Expertos en arenado industrial profesional para maquinaria pesada, estructuras metálicas y equipos industriales en toda la Zona Norte de Buenos Aires. 
              Eliminamos óxido, corrosión y contaminantes con tecnología industrial certificada. 
              15 años de experiencia comprobada en preparación de superficies industriales en Pilar, San Isidro y todo el corredor norte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Presupuesto Gratuito WhatsApp - Arenado Industrial Zona Norte
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Atención personalizada en Pilar, San Isidro, Tigre y alrededores. Envía fotos de tu maquinaria o estructura industrial para recibir una cotización detallada inmediata. Incluye asesoramiento técnico profesional sin cargo.
                </p>
                <WhatsAppButton
                  label="Solicitar Presupuesto"
                  className="w-full bg-green-600 hover:bg-green-700 text-white truncate"
                  variant="default"
                  size="lg"
                />
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Cotización Online - Arenado Industrial Certificado
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Servicio express profesional para toda la Zona Norte del GBA. Completa el formulario y recibe en 24 horas una cotización detallada para el arenado industrial de tu maquinaria o estructura.
                </p>
                <Button size="lg" variant="outline" className="w-full h-auto py-3 border-white text-primary hover:bg-white hover:text-blue-600 truncate" asChild>
                  <Link href="/presupuesto-rapido">
                    Solicitar Presupuesto Detallado
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
                🏆 Empresa Líder en Arenado Industrial Profesional en Zona Norte Buenos Aires
              </h3>
              <p className="text-sm opacity-90">
                Más de 100 empresas confían en nuestro servicio profesional de arenado industrial certificado en Pilar, San Isidro, Tigre y toda la región norte. 
                Equipo especializado con más de 15 años de experiencia en tratamiento profesional de maquinaria pesada, estructuras metálicas y equipos industriales. 
                Brindamos soluciones integrales para industrias, talleres metalúrgicos, plantas manufactureras y empresas constructoras.
                Utilizamos tecnología industrial de última generación y métodos profesionales certificados que garantizan resultados óptimos y duraderos en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

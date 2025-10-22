import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto sin cargo para arenado industrial en Zona Norte de Buenos Aires",
    "Respuesta en 24hs - Servicio profesional local con atención inmediata",
    "Cobertura total: Arenado industrial en Pilar, San Isidro, Tigre y Norte GBA"
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado Industrial de Piezas Metálicas en Zona Norte Buenos Aires",
    "serviceType": "Arenado Industrial Profesional",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Arenado Industrial",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Arenado Industrial In Situ"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Arenado en Taller Especializado"
            }
          }
        ]
      }
    },
    "description": "Servicio profesional de arenado industrial para piezas metálicas en Zona Norte. Eliminamos óxido y corrosión con equipamiento especializado. Más de 15 años de experiencia en tratamiento de superficies metálicas.",
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" aria-label="Contacto para servicio de arenado industrial profesional en Zona Norte">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arenado Industrial Profesional de Piezas Metálicas en Zona Norte | Servicio Local Especializado en Pilar, San Isidro y Tigre
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Especialistas en arenado industrial profesional de piezas metálicas en toda la Zona Norte de Buenos Aires. 
              Eliminamos óxido, corrosión y contaminantes con tecnología industrial de última generación. 
              Más de 15 años brindando servicios certificados de preparación de superficies metálicas en Pilar, San Isidro y todo el corredor norte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Presupuesto Gratuito por WhatsApp - Zona Norte GBA
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Atención personalizada en Pilar, San Isidro, Tigre y alrededores. Envianos fotos de tus piezas metálicas para recibir una cotización detallada al instante. Incluye asesoramiento técnico especializado sin cargo.
                </p>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20industrial%20de%20piezas%20metalicas%20en%20Zona%20Norte">
                    Solicitar Precio de Arenado Industrial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Cotización Online - Arenado Industrial Profesional
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Servicio express para toda la Zona Norte del GBA. Completá el formulario y recibí en 24 horas una cotización detallada para el arenado industrial de tus piezas metálicas.
                </p>
                <Button size="lg" variant="outline" className="w-full border-white text-primary hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/presupuesto-rapido">
                    Solicitar Presupuesto Detallado de Arenado
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
                🏆 Empresa Líder en Arenado Industrial de Piezas Metálicas en Zona Norte Buenos Aires
              </h3>
              <p className="text-sm opacity-90">
                Más de 100 empresas confían en nuestro servicio profesional de arenado industrial en Pilar, San Isidro, Tigre y toda la región norte. 
                Equipo especializado con más de 15 años de experiencia en tratamiento de superficies metálicas. 
                Brindamos soluciones integrales para industrias, talleres metalúrgicos, galvanizadoras y empresas manufactureras.
                Utilizamos tecnología industrial certificada y métodos profesionales que garantizan resultados óptimos y duraderos en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto gratuito para arenado de autos y camionetas en Zona Norte de Buenos Aires",
    "Atención inmediata en 24hs - Servicio profesional de arenado automotriz local",
    "Cobertura completa: Arenado en Pilar, San Isidro, Tigre y todo el Norte del GBA"
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado de Vehículos en Zona Norte",
    "serviceType": "Arenado Automotriz",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Zona Norte GBA"],
      "priceRange": "$$"
    },
    "description": "Servicio profesional de arenado de vehículos en Zona Norte. Eliminamos óxido y corrosión con técnicas especializadas. Más de 10 años de experiencia.",
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" aria-label="Contacto para servicio de arenado automotriz">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arenado Profesional de Vehículos en Zona Norte | Servicio Local en Pilar, San Isidro y Tigre
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Expertos en arenado industrial de vehículos en toda la Zona Norte de Buenos Aires. 
              Eliminamos óxido, corrosión y pintura antigua con equipamiento especializado. 
              Más de 10 años brindando servicios de calidad garantizada en Pilar, San Isidro y todo el corredor norte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Presupuesto Gratis por WhatsApp - Zona Norte GBA
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Atención personalizada en Pilar, San Isidro, Tigre y alrededores. Envianos fotos de tu vehículo para recibir un presupuesto detallado al instante. Incluye asesoramiento técnico sin cargo.
                </p>
                <WhatsAppButton
                  href="https://wa.me/5491123787750?text=Hola,%20quiero%20presupuesto%20para%20arenado%20de%20vehiculo%20en%20Zona%20Norte"
                  label="Consultar Precio de Arenado"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  variant="default"
                  size="lg"
                />
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Cotización Online - Arenado Automotriz
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Servicio rápido para toda la Zona Norte del GBA. Completá el formulario y recibí en 24 horas una cotización completa para el arenado de tu vehículo.
                </p>
                <Button size="lg" variant="outline" className="w-full border-white text-primary hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/presupuesto-rapido">
                    Solicitar Presupuesto de Arenado
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
                🏆 Empresa Especialista en Arenado Industrial de Vehículos en Zona Norte
              </h3>
              <p className="text-sm opacity-90">
                Más de 50 vehículos tratados con éxito en Pilar, San Isidro, Tigre y toda la región norte. 
                Equipo profesional con más de una década de experiencia en arenado automotriz. 
                Brindamos servicio integral para talleres mecánicos, concesionarias oficiales, flotas comerciales y particulares.
                Trabajamos con tecnología de última generación y métodos profesionales que aseguran resultados óptimos y duraderos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

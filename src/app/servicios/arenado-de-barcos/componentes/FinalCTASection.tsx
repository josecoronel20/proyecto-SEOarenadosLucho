import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto sin cargo para barcos y embarcaciones en Zona Norte",
    "Respuesta rápida en 24hs - Servicio náutico profesional local", 
    "Cobertura total: Tigre, San Fernando, Nordelta y Zona Norte GBA"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" aria-label="Contacto para arenado de barcos">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Arenado de Barcos y Embarcaciones en Tigre, San Fernando y Zona Norte | Servicio Naval Profesional
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Especialistas en arenado profesional de embarcaciones en Tigre, San Fernando, Nordelta y Zona Norte de Buenos Aires. 
            Eliminamos incrustaciones marinas, óxido y pintura deteriorada con técnicas especializadas. Servicio garantizado con más de 10 años de experiencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Presupuesto Inmediato por WhatsApp - Zona Norte
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Atención personalizada para Tigre, San Fernando y Zona Norte. Envianos fotos de tu embarcación y recibí un presupuesto detallado al instante. Asesoramiento técnico gratuito.
              </p>
              <WhatsAppButton
                href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20barco%20en%20Zona%20Norte"
                label="Solicitar Presupuesto Gratuito"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                variant="default"
                size="lg"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                Cotización Online - Servicios Navales
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Servicio express para toda la Zona Norte. Completá nuestro formulario y recibí en 24 horas un presupuesto completo para el arenado de tu embarcación.
              </p>
              <Button size="lg" variant="outline" className="w-full border-white text-primary hover:bg-white hover:text-blue-600" asChild>
                <Link href="/presupuesto-rapido">
                  Cotizar Arenado Naval Online
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
              🏆 Empresa Líder en Arenado Naval en Zona Norte de Buenos Aires
            </h3>
            <p className="text-sm opacity-90">
              Más de 100 embarcaciones renovadas exitosamente en Tigre, San Fernando, Nordelta y toda la Zona Norte. 
              Equipo especializado en tratamiento naval con más de 10 años de experiencia en el sector. 
              Servicio integral para marinas, clubes náuticos, astilleros y propietarios particulares en todo el corredor norte del GBA.
              Utilizamos equipamiento de última generación y técnicas profesionales que garantizan resultados duraderos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

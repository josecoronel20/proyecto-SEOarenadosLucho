import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  const benefits = [
    "Presupuesto gratuito y sin compromiso en Zona Norte",
    "Respuesta en 24 horas hábiles - Servicio local",
    "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Arenado de Piletas en Pilar y Zona Norte | Servicio Profesional Local
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Expertos en arenado de piletas en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. 
            Servicio local especializado en eliminación de manchas, algas y pintura deteriorada. Resultados garantizados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Presupuesto WhatsApp - Zona Norte
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Atención inmediata para Pilar, San Isidro y Zona Norte. Enviá fotos de tu pileta y recibí presupuesto personalizado al instante.
              </p>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="https://wa.me/5491123787750?text=Hola,%20necesito%20presupuesto%20para%20arenado%20de%20pileta%20en%20Zona%20Norte">
                  Consultar Precio para Zona Norte
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                Cotización Online - Buenos Aires Norte
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Servicio express para Zona Norte. Completá el formulario y recibí tu presupuesto detallado en 24 horas.
              </p>
              <Button size="lg" variant="outline" className="w-full border-white text-primary hover:bg-white hover:text-blue-600" asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto Local
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
              🏆 Empresa Líder en Arenado de Piletas en Zona Norte de Buenos Aires
            </h3>
            <p className="text-sm opacity-90">
              Más de 100 piletas renovadas en Pilar, San Isidro, Tigre y toda la Zona Norte. 
              Servicio móvil profesional con técnicos locales especializados. Atendemos countries, 
              barrios privados y residencias particulares en toda la región norte del GBA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

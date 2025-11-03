import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, Star } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50/50 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" aria-hidden="true" />
            Nuestra Localidad Principal
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Arenado Profesional en <span className="text-blue-600">Pilar</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Servicio de arenado móvil especializado en Pilar. Como nuestra localidad principal, 
            ofrecemos respuesta inmediata, equipos de última generación y más de 10 años de experiencia local.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label="Características del servicio en Pilar">
            <div className="flex items-center" role="listitem">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
              Base principal en Pilar
            </div>
            <div className="flex items-center" role="listitem">
              <Clock className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
              Respuesta inmediata
            </div>
            <div className="flex items-center" role="listitem">
              <Phone className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
              Presupuesto gratuito
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <Button asChild>
              <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en Pilar">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/zonas-de-cobertura/zona-norte" aria-label="Ver todas las localidades de zona norte">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Ver Zona Norte
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

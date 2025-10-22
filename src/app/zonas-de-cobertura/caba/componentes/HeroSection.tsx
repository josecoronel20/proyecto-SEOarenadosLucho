import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ArrowLeft } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-background to-purple-50/50 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
            CABA - Cobertura Completa
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Arenado en <span className="text-purple-600">CABA</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Servicio de arenado móvil profesional en la Ciudad Autónoma de Buenos Aires. 
            Cobertura completa en todos los barrios porteños con equipos especializados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label="Características del servicio">
            <div className="flex items-center" role="listitem">
              <MapPin className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Todos los barrios porteños
            </div>
            <div className="flex items-center" role="listitem">
              <Clock className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Respuesta en 24h
            </div>
            <div className="flex items-center" role="listitem">
              <Phone className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Presupuesto gratuito
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/zonas-de-cobertura" aria-label="Ver todas las zonas de cobertura">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Ver Todas las Zonas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

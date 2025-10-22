import { MapPin, Clock, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
            Servicio Móvil Profesional
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Zonas de <span className="text-primary">Cobertura</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Llevamos nuestro servicio de arenado profesional a tu ubicación. 
            Cubrimos Pilar, Zona Norte, Zona Oeste y CABA con equipos móviles de última generación.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label="Características del servicio">
            <div className="flex items-center" role="listitem">
              <MapPin className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
              Servicio móvil a domicilio
            </div>
            <div className="flex items-center" role="listitem">
              <Clock className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
              Respuesta en 24h
            </div>
            <div className="flex items-center" role="listitem">
              <Phone className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
              Presupuesto gratuito
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

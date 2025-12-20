import { MapPin, Clock, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20"
      aria-labelledby="hero-heading"
    >
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
            Cubrimos Zona Norte, Zona Oeste y CABA con equipos móviles de última
            generación.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
            <p className="text-sm text-muted-foreground">
              ¿Querés saber si trabajamos en tu localidad?{" "}
              <span className="ml-2 hidden sm:inline">
                Consulta por WhatsApp
              </span>
            </p>
            <WhatsAppButton />  
            <a
              href="/presupuesto-rapido"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors"
            >
              <Clock className="h-5 w-5 mr-2" aria-hidden="true" />
              Pedí un presupuesto rápido
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin } from "lucide-react";

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
            Zonas de cobertura – <span className="text-primary">Arenado profesional</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Brindamos servicios de arenado en Zona Norte, Zona Oeste y CABA, con equipos y logística propia para trabajos en obra o en taller.
          </p>
        </div>
      </div>
    </section>
  );
}

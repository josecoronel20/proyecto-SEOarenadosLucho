import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Blog de Arenado en <span className="text-primary">Pilar y Zona Norte</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tu fuente local de información sobre servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. 
            Consejos de expertos, guías técnicas y casos de éxito de proyectos en la zona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en Pilar">
                Solicitar Presupuesto en Pilar
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/servicios" aria-label="Ver servicios de arenado en Zona Norte">
                Servicios en Zona Norte
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

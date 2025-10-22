import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building2, Award, ArrowRight, ArrowLeft } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-background to-rose-50/50 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Home className="h-4 w-4 mr-2" aria-hidden="true" />
            Servicios de Arenado en San Fernando
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Arenado en <span className="text-rose-600">San Fernando</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Servicio completo de arenado móvil en San Fernando. 
            Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con excelencia en servicio.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label="Características del servicio en San Fernando">
            <div className="flex items-center" role="listitem">
              <Home className="h-4 w-4 mr-2 text-rose-600" aria-hidden="true" />
              Servicio residencial
            </div>
            <div className="flex items-center" role="listitem">
              <Building2 className="h-4 w-4 mr-2 text-rose-600" aria-hidden="true" />
              Servicio comercial
            </div>
            <div className="flex items-center" role="listitem">
              <Award className="h-4 w-4 mr-2 text-rose-600" aria-hidden="true" />
              Excelencia en servicio
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en San Fernando">
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

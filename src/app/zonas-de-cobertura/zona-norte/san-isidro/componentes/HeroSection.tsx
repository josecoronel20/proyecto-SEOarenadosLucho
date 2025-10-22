import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Crown, Building, Car, ArrowRight, ArrowLeft } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-background to-purple-50/50 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4 mr-2" aria-hidden="true" />
            Servicio Premium en San Isidro
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Arenado Premium en <span className="text-purple-600">San Isidro</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Servicio de arenado móvil especializado para propiedades de alto standing en San Isidro. 
            Especialistas en fachadas históricas, vehículos de lujo y muebles de diseño con técnicas premium.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label="Características del servicio premium en San Isidro">
            <div className="flex items-center" role="listitem">
              <Crown className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Servicio premium
            </div>
            <div className="flex items-center" role="listitem">
              <Building className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Fachadas históricas
            </div>
            <div className="flex items-center" role="listitem">
              <Car className="h-4 w-4 mr-2 text-purple-600" aria-hidden="true" />
              Vehículos de lujo
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto premium para arenado en San Isidro">
                Solicitar Presupuesto Premium
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function PopularBarriosSection() {
  const popularBarrios = ["Palermo", "Recoleta", "Belgrano", "Villa Crespo", "Caballito", "Almagro"]

  const barrioDescriptions = {
    "Palermo": "Especialistas en arenado de fachadas y estructuras residenciales.",
    "Recoleta": "Servicio premium para edificios históricos y residenciales.",
    "Belgrano": "Atención personalizada para proyectos residenciales y comerciales.",
    "Villa Crespo": "Cobertura completa con equipos especializados.",
    "Caballito": "Servicio móvil para todo tipo de proyectos.",
    "Almagro": "Especialistas en arenado industrial y comercial."
  }

  return (
    <section className="py-16" aria-labelledby="popular-barrios-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="popular-barrios-heading" className="text-3xl font-bold mb-4">
              Barrios Más Solicitados
            </h2>
            <p className="text-lg text-muted-foreground">
              Nuestros barrios con mayor demanda de servicios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" role="list" aria-label="Barrios más solicitados de CABA">
            {popularBarrios.map((barrio, index) => (
              <Card key={barrio} className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow" role="listitem">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{barrio}</CardTitle>
                      <CardDescription>Servicio móvil disponible</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {barrioDescriptions[barrio as keyof typeof barrioDescriptions]}
                  </p>
                  <div className="space-y-2">
                    <WhatsAppButton />
                    <Button asChild className="w-full">
                      <Link href={`/servicios?zona=${encodeURIComponent(barrio)}`} aria-label={`Ver servicios de arenado en ${barrio}`}>
                        Ver Servicios en {barrio}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/presupuesto-rapido" aria-label={`Solicitar presupuesto para ${barrio}`}>
                        Solicitar Presupuesto
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

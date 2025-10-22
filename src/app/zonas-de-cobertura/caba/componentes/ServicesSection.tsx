import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { PROJECT } from "@/config/project"

export function ServicesSection() {
  return (
    <section className="py-16" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 id="services-heading" className="text-2xl font-bold mb-4">
              Servicios Disponibles en CABA
            </h3>
            <p className="text-muted-foreground mb-8">
              Todos nuestros servicios de arenado están disponibles en la Ciudad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" role="list" aria-label="Servicios de arenado disponibles en CABA">
            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="text-lg">Arenado de Fachadas</CardTitle>
                <CardDescription>Restauración y limpieza profunda de fachadas de edificios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Remoción de pinturas y revestimientos antiguos</li>
                  <li>• Preparación para nuevos acabados</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios/arenado-fachadas" aria-label="Ver detalles de Arenado de Fachadas">
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            {PROJECT.services.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow" role="listitem">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.href} aria-label={`Ver detalles de ${service.title}`}>
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

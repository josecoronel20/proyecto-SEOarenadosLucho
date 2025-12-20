import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { ServicesSection } from "./componentes/ServicesSection"

export const metadata = {
  title: 'Arenado en Zona Oeste | Servicio Profesional de Sandblasting',
  description: 'Servicio de arenado móvil profesional en toda la Zona Oeste. Cobertura en Morón, Ituzaingó, General Rodríguez y más localidades. Presupuesto sin cargo y atención 24hs.',
  keywords: 'arenado zona oeste, sandblasting zona oeste, arenado moron, arenado ituzaingo, arenado general rodriguez, servicio de arenado móvil'
}

export default function ZonaOestePage() {
  const zonaOesteAreas = PROJECT.coverage.zonaOeste
  const primaryAreas = ["General Rodríguez", "Moreno", "Ituzaingó", "Morón", "Hurlingham", "3 de Febrero"]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Oeste' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-background to-green-50/50 py-16" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Arenado en <span className="text-green-600">Zona Oeste</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Servicio móvil de arenado y sandblasting en más de {zonaOesteAreas.length} localidades de Zona Oeste. Presupuesto sin cargo, atención rápida y equipos profesionales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="/zonas-de-cobertura" aria-label="Ver todas las zonas de cobertura">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Zonas
                </Link>
              </Button>
              <WhatsAppButton />
              <Button asChild>
                <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en Zona Oeste">
                  Pedir Presupuesto
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection locationName="Zona Oeste" />

      {/* Primary Areas */}
      <section className="py-16" aria-labelledby="primary-areas-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="primary-areas-heading" className="text-3xl font-bold mb-4">Principales Localidades con Servicio de Arenado</h2>
              <p className="text-lg text-muted-foreground">
                Brindamos servicio profesional de arenado y sandblasting en las principales localidades de Zona Oeste
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {primaryAreas.map((area, index) => {
                const areaLinks = {
                  "General Rodríguez": "/zonas-de-cobertura/zona-oeste/general-rodriguez",
                  "Moreno": "/zonas-de-cobertura/zona-oeste/moreno",
                  "Ituzaingó": "/zonas-de-cobertura/zona-oeste/ituzaingo",
                  "Morón": "/zonas-de-cobertura/zona-oeste/moron",
                  "Hurlingham": "/zonas-de-cobertura/zona-oeste/hurlingham",
                  "3 de Febrero": "/zonas-de-cobertura/zona-oeste/3-de-febrero"
                }
                
                return (
                  <Card key={area} className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="text-xl">Arenado en {area}</CardTitle>
                          <CardDescription>Servicio móvil profesional</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {area === "General Rodríguez" && "Servicio completo de arenado con equipos móviles especializados y técnicos expertos."}
                        {area === "Moreno" && "Arenado profesional para residencias y comercios, con acabados de alta calidad garantizados."}
                        {area === "Ituzaingó" && "Especialistas en arenado industrial y residencial con atención personalizada."}
                        {area === "Morón" && "Servicio personalizado de arenado para proyectos residenciales y comerciales."}
                        {area === "Hurlingham" && "Arenado residencial y comercial con atención personalizada y garantía."}
                        {area === "3 de Febrero" && "Soluciones profesionales de arenado para comercios e industrias."}
                      </p>
                      <div className="space-y-2">
                        <Button asChild className="w-full">
                          <Link href={areaLinks[area as keyof typeof areaLinks] || `/servicios?zona=${encodeURIComponent(area)}`} aria-label={`Ver servicios de arenado en ${area}`}>
                            Ver Servicios en {area}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/servicios?zona=${encodeURIComponent(area)}`} aria-label={`Ver todos los servicios disponibles en ${area}`}>
                            Todos los Servicios
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

           <QuoteFormSection />
          </div>
        </div>
      </section>

    </div>
  )
}

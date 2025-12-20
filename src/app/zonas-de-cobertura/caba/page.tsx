import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { ServicesSection } from "./componentes/ServicesSection"

export const metadata = {
  title: 'Arenado en CABA | Servicio Profesional de Sandblasting',
  description: 'Servicio de arenado móvil profesional en la Ciudad Autónoma de Buenos Aires. Cobertura completa en todos los barrios porteños. Presupuesto sin cargo y atención 24hs.',
  keywords: 'arenado CABA, sandblasting CABA, arenado palermo, arenado recoleta, arenado belgrano, servicio de arenado móvil CABA'
}

export default function CABAPage() {
  const primaryBarrios = ["Palermo", "Recoleta", "Belgrano", "Caballito", "San Telmo", "La Boca", "Puerto Madero", "Retiro", "Villa Crespo", "Almagro", "Flores"]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'CABA' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-background to-purple-50/50 py-16" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Arenado en <span className="text-purple-600">CABA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Servicio móvil de arenado y sandblasting en todos los barrios de la Ciudad Autónoma de Buenos Aires. Presupuesto sin cargo, atención rápida y equipos profesionales.
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
                <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto para arenado en CABA">
                  Pedir Presupuesto
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection locationName="CABA" />

      {/* Primary Barrios */}
      <section className="py-16" aria-labelledby="primary-barrios-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="primary-barrios-heading" className="text-3xl font-bold mb-4">Principales Barrios con Servicio de Arenado</h2>
              <p className="text-lg text-muted-foreground">
                Brindamos servicio profesional de arenado y sandblasting en los principales barrios de CABA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {primaryBarrios.map((barrio, index) => {
                return (
                  <Card key={barrio} className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="text-xl">Arenado en {barrio}</CardTitle>
                          <CardDescription>Servicio móvil profesional</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {barrio === "Palermo" && "Servicio completo de arenado con equipos móviles especializados y técnicos expertos en el corazón de CABA."}
                        {barrio === "Recoleta" && "Arenado premium para residencias y comercios, con acabados de alta calidad garantizados."}
                        {barrio === "Belgrano" && "Especialistas en arenado residencial y comercial con atención personalizada."}
                        {barrio === "Caballito" && "Servicio personalizado de arenado para proyectos residenciales y comerciales."}
                        {barrio === "San Telmo" && "Arenado residencial y comercial con atención personalizada y garantía."}
                        {barrio === "La Boca" && "Soluciones profesionales de arenado para comercios e industrias."}
                        {barrio === "Puerto Madero" && "Servicio integral de arenado para hogares y empresas."}
                        {barrio === "Retiro" && "Arenado de primera calidad para proyectos residenciales y comerciales."}
                        {barrio === "Villa Crespo" && "Servicio rápido y eficiente de arenado para todo tipo de superficies."}
                        {barrio === "Almagro" && "Arenado profesional con precisión garantizada en cada proyecto."}
                        {barrio === "Flores" && "Servicio completo de arenado con equipos profesionales y atención prioritaria."}
                      </p>
                      <div className="space-y-2">
                        
                        <Button asChild variant="outline" className="w-full">
                          <Link href={`/servicios?zona=${encodeURIComponent(barrio)}`} aria-label={`Ver todos los servicios disponibles en ${barrio}`}>
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

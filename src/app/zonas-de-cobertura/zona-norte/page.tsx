import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { MapPin, ArrowRight, Phone, Mail, Clock, ArrowLeft } from "lucide-react"
import { PROJECT } from "@/config/project"

export const metadata = {
  title: 'Arenado en Zona Norte | Servicio Profesional de Sandblasting',
  description: 'Servicio de arenado móvil profesional en toda la Zona Norte. Cobertura en Pilar, San Isidro, Tigre y más de 20 localidades. Presupuesto sin cargo y atención 24hs.',
  keywords: 'arenado zona norte, sandblasting zona norte, arenado pilar, arenado san isidro, arenado tigre, servicio de arenado móvil'
}

export default function ZonaNortePage() {
  const zonaNorteAreas = PROJECT.coverage.zonaNorte
  const primaryAreas = ["Pilar", "José C. Paz", "San Isidro", "Tigre", "Vicente López", "Malvinas Argentinas", "San Miguel", "General San Martín", "San Fernando", "Cardales", "Zárate"]
  const otherAreas = zonaNorteAreas.filter(area => !primaryAreas.includes(area))

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50/50 py-20" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              Zona Norte - Nuestra Zona Principal de Servicio
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Servicio de Arenado Profesional en <span className="text-blue-600">Zona Norte</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expertos en arenado y sandblasting móvil en Pilar y toda la Zona Norte. 
              Más de 20 años de experiencia cubriendo {zonaNorteAreas.length} localidades con equipos profesionales y tecnología de última generación.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                {zonaNorteAreas.length} localidades cubiertas
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                Atención inmediata 24/7
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                Presupuesto sin cargo
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href="/zonas-de-cobertura" aria-label="Ver todas las zonas de cobertura">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver Todas las Zonas
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Areas */}
      <section className="py-16" aria-labelledby="primary-areas-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="primary-areas-heading" className="text-3xl font-bold mb-4">Principales Localidades con Servicio de Arenado</h2>
              <p className="text-lg text-muted-foreground">
                Brindamos servicio profesional de arenado y sandblasting en las principales localidades de Zona Norte
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {primaryAreas.map((area, index) => {
                const areaLinks = {
                  "Pilar": "/zonas-de-cobertura/zona-norte/pilar",
                  "José C. Paz": "/zonas-de-cobertura/zona-norte/jose-c-paz",
                  "San Isidro": "/zonas-de-cobertura/zona-norte/san-isidro",
                  "Tigre": "/zonas-de-cobertura/zona-norte/tigre",
                  "Vicente López": "/zonas-de-cobertura/zona-norte/vicente-lopez",
                  "Malvinas Argentinas": "/zonas-de-cobertura/zona-norte/malvinas-argentinas",
                  "San Miguel": "/zonas-de-cobertura/zona-norte/san-miguel",
                  "General San Martín": "/zonas-de-cobertura/zona-norte/general-san-martin",
                  "San Fernando": "/zonas-de-cobertura/zona-norte/san-fernando",
                  "Cardales": "/zonas-de-cobertura/zona-norte/cardales",
                  "Zárate": "/zonas-de-cobertura/zona-norte/zarate"
                }
                
                return (
                  <Card key={area} className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
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
                        {area === "Pilar" && "Base principal de operaciones. Servicio prioritario y respuesta inmediata para todo tipo de proyectos de arenado."}
                        {area === "José C. Paz" && "Servicio completo de arenado con equipos móviles especializados y técnicos expertos."}
                        {area === "San Isidro" && "Arenado premium para residencias y comercios, con acabados de alta calidad garantizados."}
                        {area === "Tigre" && "Especialistas en arenado náutico, embarcaciones y estructuras portuarias."}
                        {area === "Vicente López" && "Servicio personalizado de arenado para proyectos residenciales y comerciales."}
                        {area === "Malvinas Argentinas" && "Arenado residencial y comercial con atención personalizada y garantía."}
                        {area === "San Miguel" && "Soluciones profesionales de arenado para comercios e industrias."}
                        {area === "General San Martín" && "Servicio integral de arenado para hogares y empresas."}
                        {area === "San Fernando" && "Arenado de primera calidad para proyectos residenciales y comerciales."}
                        {area === "Cardales" && "Servicio rápido y eficiente de arenado para todo tipo de superficies."}
                        {area === "Zárate" && "Arenado profesional con precisión garantizada en cada trabajo."}
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

            {/* Other Areas */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Otras Localidades con Servicio de Arenado</h3>
              <p className="text-muted-foreground mb-6">
                Servicio profesional de arenado disponible en estas localidades adicionales de Zona Norte
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {otherAreas.map((area) => (
                <Card key={area} className="text-center border-gray-200 hover:border-blue-300 transition-colors">
                  <CardContent className="pt-6 pb-6">
                    <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Arenado en {area}</h4>
                    <p className="text-xs text-muted-foreground">Servicio móvil disponible</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services in Zona Norte */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Servicios de Arenado en Zona Norte</h3>
              <p className="text-muted-foreground mb-8">
                Ofrecemos una gama completa de servicios profesionales de arenado y sandblasting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {PROJECT.services.slice(0, 6).map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
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
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">¿Necesita Servicio de Arenado en Zona Norte?</h3>
                  <p className="text-muted-foreground mb-6">
                    Solicite su presupuesto gratuito ahora. Garantizamos respuesta en menos de 24 horas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href="https://wa.me/5491123787750" target="_blank" aria-label="Contactar por WhatsApp">
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/presupuesto-rapido" aria-label="Solicitar presupuesto rápido">
                        Solicitar Presupuesto
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="tel:+5491123787750" aria-label="Llamar ahora">
                        <Phone className="mr-2 h-4 w-4" />
                        Llamar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { CheckCircle, Phone, Mail, Clock, Shield } from "lucide-react"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export default function PresupuestoRapidoPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Presupuesto rápido de arenado en Pilar' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Presupuesto Gratuito de Arenado en Pilar y Zona Norte
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Presupuesto de Arenado <span className="text-primary">Rápido</span> en Pilar y Zona Norte
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Obtén un presupuesto personalizado para tu proyecto de arenado en <strong>menos de 24 horas</strong>. 
              Servicio profesional en Pilar, San Isidro, Tigre y toda la Zona Norte del Gran Buenos Aires. 
              Sin compromiso y sin costos ocultos.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Respuesta en 24h en Pilar
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                Garantía de calidad local
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                Evaluación gratuita en Zona Norte
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <QuoteFormSection />
              </div>

              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">¿Por qué elegir Arenados Lucho en Pilar?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Garantía Local de Calidad</h4>
                        <p className="text-sm text-muted-foreground">
                          Trabajamos con equipos profesionales y garantizamos la calidad en toda la Zona Norte.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Respuesta Rápida en Pilar</h4>
                        <p className="text-sm text-muted-foreground">
                          Te contactamos en menos de 24 horas con tu presupuesto personalizado.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Presupuesto Gratuito en Zona Norte</h4>
                        <p className="text-sm text-muted-foreground">
                          Evaluación profesional y presupuesto detallado sin costo en toda la zona.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Servicio Móvil en GBA Norte</h4>
                        <p className="text-sm text-muted-foreground">
                          Llevamos nuestros equipos a Pilar, San Isidro, Tigre y toda la Zona Norte.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Contacto Directo en Pilar</CardTitle>
                    <CardDescription>¿Prefieres hablar directamente? Contáctanos ahora</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp / Teléfono Pilar</p>
                        <p className="text-sm text-muted-foreground">+54 9 11 2378-7750</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Email Zona Norte</p>
                        <p className="text-sm text-muted-foreground">arenadoslucho@hotmail.com</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <WhatsAppButton />
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="mailto:arenadoslucho@hotmail.com?subject=Solicitud de Presupuesto - Arenado en Pilar">
                          <Mail className="mr-2 h-4 w-4" />
                          Enviar Email
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="tel:+5491123787750">
                          <Phone className="mr-2 h-4 w-4" />
                          Llamar Ahora
                        </Link>
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Horarios de atención en Pilar: Lunes a Viernes 8:00-18:00
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">💡 Consejo Profesional para Pilar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-700">
                      <strong>Para obtener el presupuesto más preciso en Zona Norte:</strong> Incluye en la descripción 
                      las dimensiones exactas, el estado actual del material, y si hay acceso especial 
                      o restricciones en el lugar de trabajo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Lo que Dicen Nuestros Clientes en Pilar y Zona Norte</h3>
              <p className="text-lg text-muted-foreground">
                Más de 10 años de experiencia en Pilar y alrededores respaldan nuestro trabajo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-green-800 mb-4">
                    "Excelente servicio de arenado en Pilar. Arenaron mi pileta y quedó perfecta. 
                    Muy profesionales y puntuales. El presupuesto fue exacto."
                  </p>
                  <div className="text-sm font-semibold text-green-700">
                    - María González, Pilar Centro
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-blue-800 mb-4">
                    "Muy recomendable en San Isidro. Arenaron mi auto y el trabajo fue impecable. 
                    Presupuesto claro y sin sorpresas. Volveré a contratarlos."
                  </p>
                  <div className="text-sm font-semibold text-blue-700">
                    - Carlos Rodríguez, San Isidro
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-purple-800 mb-4">
                    "Servicio móvil excelente en Tigre. Llegaron a mi casa y arenaron la fachada. 
                    Trabajo limpio y bien hecho. Muy satisfecho."
                  </p>
                  <div className="text-sm font-semibold text-purple-700">
                    - Ana Martínez, Tigre Centro
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Garantía de Calidad en Pilar</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantizamos la calidad de nuestro trabajo en toda la zona
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-200">
                <CardContent className="pt-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Presupuesto Gratuito en Zona Norte</h3>
                  <p className="text-sm text-muted-foreground">
                    Sin costo ni compromiso en GBA Norte
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Respuesta Rápida Local</h3>
                  <p className="text-sm text-muted-foreground">
                    Te contactamos en 24 horas en Pilar
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-orange-200">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Servicio Móvil en GBA Norte</h3>
                  <p className="text-sm text-muted-foreground">
                    Llegamos a toda la Zona Norte
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Preguntas Frecuentes sobre Presupuestos de Arenado en Pilar</h3>
              <p className="text-lg text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros presupuestos y servicios en Zona Norte
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Cuánto tiempo tarda el presupuesto en Pilar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Te contactamos en menos de 24 horas con tu presupuesto personalizado en Pilar y Zona Norte. 
                    Para proyectos complejos, podemos coordinar una visita técnica gratuita.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿El presupuesto tiene costo en Zona Norte?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, el presupuesto es completamente gratuito y sin compromiso en toda la Zona Norte. 
                    Incluye evaluación profesional y cotización detallada.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Qué información necesitan para el presupuesto local?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dimensiones, estado actual del material, tipo de superficie, 
                    ubicación exacta en Pilar o Zona Norte y urgencia. Cuanta más información proporciones, 
                    más preciso será el presupuesto.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Qué zonas cubren en GBA Norte?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cubrimos Pilar, San Isidro, Tigre, Vicente López y todas las localidades 
                    de Zona Norte. Contáctanos para confirmar cobertura en tu ubicación específica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Realizan visitas técnicas en Pilar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sí, para proyectos en Pilar y alrededores ofrecemos una visita técnica 
                    gratuita para evaluar el trabajo y dar un presupuesto más preciso.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Qué incluye el presupuesto local?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Incluye mano de obra, materiales, equipos, tiempo estimado y 
                    costos de traslado en Pilar y Zona Norte. Todo detallado por partidas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                ¿Tienes más preguntas sobre nuestro servicio en Pilar? Contáctanos directamente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
                <Button variant="outline" asChild>
                  <Link href="mailto:arenadoslucho@hotmail.com?subject=Solicitud de Presupuesto - Arenado en Pilar">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="tel:+5491123787750">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

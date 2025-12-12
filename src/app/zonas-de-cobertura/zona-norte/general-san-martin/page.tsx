import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Mail, Clock, ArrowLeft, Home, Building2, Shield } from "lucide-react"
import { PROJECT } from "@/config/project"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { ServicesSection } from "./componentes/ServicesSection"

export default function GeneralSanMartinPage() {
  const generalSanMartinAdvantages = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Servicio Residencial",
      description: "Especializados en servicios para hogares y familias en General San Martín, con atención personalizada y horarios flexibles."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Servicio Comercial",
      description: "Atendemos comercios, oficinas y establecimientos comerciales en General San Martín con técnicas adaptadas a cada necesidad."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía de Calidad",
      description: "Servicio especializado con garantía de calidad, técnicas suaves y atención personalizada que respeta el entorno residencial."
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'General San Martín' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-background to-slate-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4 mr-2" />
              Servicios de Arenado en General San Martín
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado en <span className="text-slate-600">General San Martín</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Servicio completo de arenado móvil en General San Martín. 
              Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con garantía de calidad.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2 text-slate-600" />
                Servicio residencial
              </div>
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-slate-600" />
                Servicio comercial
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-slate-600" />
                Garantía de calidad
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/zonas-de-cobertura/zona-norte">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Zona Norte
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why General San Martín Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos en General San Martín?</h2>
              <p className="text-lg text-muted-foreground">
                Atención personalizada para hogares y comercios en General San Martín
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {generalSanMartinAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center border-slate-200 bg-slate-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <ServicesSection locationName="General San Martín" />

            {/* General San Martín Specific Info */}
            <div className="mb-16">
              <Card className="border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
                <CardHeader>
                  <CardTitle className="text-slate-800">Información Específica para General San Martín</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-3">Zonas de Servicio</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Centro de General San Martín - Comercios y oficinas</li>
                        <li>• Barrios residenciales - Hogares familiares</li>
                        <li>• Zona comercial - Establecimientos</li>
                        <li>• Barrios cerrados - Piletas y fachadas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-3">Horarios Flexibles</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Lunes a Viernes: 8:00 - 18:00</li>
                        <li>• Sábados: 8:00 - 14:00</li>
                        <li>• Horarios especiales disponibles</li>
                        <li>• Servicio de emergencia</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonios de Clientes en General San Martín</h2>
              <p className="text-lg text-muted-foreground">
                Experiencias de nuestros clientes en General San Martín
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 mb-4">
                    "Excelente servicio en mi casa en General San Martín. Arenaron la pileta 
                    y quedó perfecta. Muy puntuales y profesionales. 
                    Definitivamente los recomiendo."
                  </p>
                  <div className="text-sm font-semibold text-slate-700">
                    - Sra. María González, Barrio Residencial
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 mb-4">
                    "Contraté el servicio para mi comercio en el centro de General San Martín. 
                    Arenaron la fachada y quedó impecable. 
                    Muy recomendables para establecimientos comerciales."
                  </p>
                  <div className="text-sm font-semibold text-slate-700">
                    - Sr. Carlos Mendoza, Centro de General San Martín
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas servicio en General San Martín?</h3>
                  <p className="text-muted-foreground mb-6">
                    Especialistas en servicios residenciales y comerciales. 
                    Presupuesto gratuito sin compromiso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <WhatsAppButton
                      
                    />
                    <Button variant="outline" asChild>
                      <Link href="/presupuesto-rapido">
                        Solicitar Presupuesto
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="tel:+5491123787750">
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



import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Mail, Clock, ArrowLeft, Home, Building2, Zap } from "lucide-react"
import { PROJECT } from "@/config/project"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"

export default function CardalesPage() {
  const cardalesServices = [
    {
      id: "arenado-piletas-cardales",
      title: "Arenado de Piletas en Cardales",
      description: "Limpieza profunda y preparación para pintura de piletas en Cardales",
      features: ["Piletas residenciales", "Piletas comerciales", "Preparación epoxi", "Limpieza profunda"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-industrial-cardales", 
      title: "Arenado Industrial en Cardales",
      description: "Servicio industrial para estructuras metálicas y maquinaria en Cardales",
      features: ["Estructuras metálicas", "Maquinaria pesada", "Tanques industriales", "Mantenimiento preventivo"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-barcos-cardales",
      title: "Arenado de Barcos en Cardales", 
      description: "Mantenimiento naval profesional para embarcaciones en Cardales",
      features: ["Cascos de barcos", "Eliminación de incrustaciones", "Preparación pintura", "Mantenimiento naval"],
      href: "/servicios/arenado-de-barcos"
    },
    {
      id: "arenado-vehiculos-cardales",
      title: "Arenado de Vehículos en Cardales", 
      description: "Preparación para pintura automotriz en Cardales",
      features: ["Vehículos familiares", "Vehículos comerciales", "Técnicas suaves", "Preservación"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-piezas-metalicas-cardales",
      title: "Arenado de Piezas Metálicas en Cardales", 
      description: "Tratamiento de piezas pequeñas con precisión en Cardales",
      features: ["Piezas pequeñas", "Preparación galvanizado", "Mantenimiento tolerancias", "Servicio en taller"],
      href: "/servicios/arenado-de-piezas-metalicas"
    },
    {
      id: "arenado-muebles-cardales",
      title: "Arenado de Muebles en Cardales", 
      description: "Restauración de muebles de madera y metal en Cardales",
      features: ["Muebles de madera", "Restauración", "Despintado fino", "Preservación"],
      href: "/servicios/arenado-de-muebles"
    },
    {
      id: "arenado-fachadas-cardales", 
      title: "Arenado de Fachadas en Cardales",
      description: "Limpieza de edificios residenciales y comerciales en Cardales",
      features: ["Fachadas residenciales", "Fachadas comerciales", "Técnicas no abrasivas", "Preservación"],
      href: "/servicios/arenado-de-fachadas"
    }
  ]

  const cardalesAdvantages = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Servicio Residencial",
      description: "Especializados en servicios para hogares y familias en Cardales, con atención personalizada y horarios flexibles."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Crecimiento Comercial",
      description: "Atendemos el creciente sector comercial de Cardales con técnicas adaptadas a cada necesidad."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Servicio Rápido",
      description: "Servicio especializado con rapidez garantizada, técnicas suaves y atención personalizada que respeta el entorno residencial."
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'Cardales' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 via-background to-violet-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4 mr-2" />
              Servicios de Arenado en Cardales
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado en <span className="text-violet-600">Cardales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Servicio completo de arenado móvil en Cardales. 
              Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con servicio rápido.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2 text-violet-600" />
                Servicio residencial
              </div>
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-violet-600" />
                Crecimiento comercial
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-violet-600" />
                Servicio rápido
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

      {/* Why Cardales Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos en Cardales?</h2>
              <p className="text-lg text-muted-foreground">
                Atención personalizada para hogares en Cardales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {cardalesAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center border-violet-200 bg-violet-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-violet-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services in Cardales */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Todos los Servicios en Cardales</h2>
              <p className="text-lg text-muted-foreground">
                Servicios completos de arenado para hogares y comercios en Cardales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {cardalesServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-violet-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-violet-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.href}>
                        Ver Detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cardales Specific Info */}
            <div className="mb-16">
              <Card className="border-violet-200 bg-gradient-to-r from-violet-50 to-violet-100">
                <CardHeader>
                  <CardTitle className="text-violet-800">Información Específica para Cardales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-violet-700 mb-3">Zonas de Servicio</h4>
                      <ul className="space-y-2 text-sm text-violet-600">
                        <li>• Centro de Cardales - Comercios</li>
                        <li>• Barrios residenciales - Hogares familiares</li>
                        <li>• Zona comercial - Establecimientos</li>
                        <li>• Barrios cerrados - Piletas y fachadas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-violet-700 mb-3">Horarios Flexibles</h4>
                      <ul className="space-y-2 text-sm text-violet-600">
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
              <h2 className="text-3xl font-bold mb-4">Testimonios de Clientes en Cardales</h2>
              <p className="text-lg text-muted-foreground">
                Experiencias de nuestros clientes en Cardales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-violet-200 bg-violet-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-violet-800 mb-4">
                    "Excelente servicio en mi casa en Cardales. Arenaron la pileta 
                    y quedó perfecta. Muy puntuales y profesionales. 
                    Definitivamente los recomiendo."
                  </p>
                  <div className="text-sm font-semibold text-violet-700">
                    - Sra. María González, Barrio Residencial
                  </div>
                </CardContent>
              </Card>

              <Card className="border-violet-200 bg-violet-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-violet-800 mb-4">
                    "Contraté el servicio para restaurar mis muebles de madera. 
                    El trabajo fue impecable y muy cuidadoso. 
                    Muy recomendables para trabajos de restauración."
                  </p>
                  <div className="text-sm font-semibold text-violet-700">
                    - Sr. Carlos Mendoza, Centro de Cardales
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-violet-200 bg-gradient-to-br from-violet-50 to-violet-100">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas servicio en Cardales?</h3>
                  <p className="text-muted-foreground mb-6">
                    Especialistas en servicios residenciales. 
                    Presupuesto gratuito sin compromiso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href="https://wa.me/5491123787750" target="_blank">
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Link>
                    </Button>
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

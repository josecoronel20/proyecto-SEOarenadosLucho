import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Mail, Clock, ArrowLeft, Factory, Wrench, Cog } from "lucide-react"
import { PROJECT } from "@/config/project"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export default function GeneralRodriguezPage() {
  const generalRodriguezServices = [
    {
      id: "arenado-industrial-general-rodriguez",
      title: "Arenado Industrial en General Rodríguez",
      description: "Especialistas en arenado de maquinaria pesada y estructuras industriales en General Rodríguez",
      features: ["Maquinaria pesada", "Estructuras industriales", "Equipos de gran porte", "Técnicas especializadas"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-vehiculos-general-rodriguez", 
      title: "Arenado de Vehículos en General Rodríguez",
      description: "Servicio para vehículos comerciales, camiones y maquinaria agrícola en General Rodríguez",
      features: ["Vehículos comerciales", "Camiones", "Maquinaria agrícola", "Técnicas industriales"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-piletas-general-rodriguez",
      title: "Arenado de Piletas en General Rodríguez", 
      description: "Servicio para piletas residenciales y comerciales en General Rodríguez",
      features: ["Piletas residenciales", "Piletas comerciales", "Preparación epoxi", "Limpieza profunda"],
      href: "/servicios/arenado-de-piletas"
    }
  ]

  const generalRodriguezAdvantages = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Especialización Industrial",
      description: "Especialistas en arenado de maquinaria pesada y estructuras industriales, con equipos de gran capacidad para proyectos industriales complejos."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Conocimiento Industrial",
      description: "Conocemos las necesidades específicas de las industrias de General Rodríguez y aplicamos técnicas especializadas para cada sector."
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Equipos Pesados",
      description: "Contamos con equipos de gran capacidad para atender maquinaria pesada, estructuras industriales y proyectos de gran envergadura."
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Oeste', href: '/zonas-de-cobertura/zona-oeste' }, { label: 'General Rodríguez' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-background to-orange-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="h-4 w-4 mr-2" />
              Especialistas Industriales en General Rodríguez
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado Industrial en <span className="text-orange-600">General Rodríguez</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Servicio de arenado móvil especializado en maquinaria pesada y estructuras industriales en General Rodríguez. 
              Especialistas en proyectos industriales complejos con equipos de gran capacidad.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Factory className="h-4 w-4 mr-2 text-orange-600" />
                Especialización industrial
              </div>
              <div className="flex items-center">
                <Wrench className="h-4 w-4 mr-2 text-orange-600" />
                Maquinaria pesada
              </div>
              <div className="flex items-center">
                <Cog className="h-4 w-4 mr-2 text-orange-600" />
                Equipos de gran capacidad
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto Industrial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/zonas-de-cobertura/zona-oeste">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Zona Oeste
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why General Rodríguez Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos en General Rodríguez?</h2>
              <p className="text-lg text-muted-foreground">
                Especialización industrial para las necesidades de General Rodríguez
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {generalRodriguezAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center border-orange-200 bg-orange-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services in General Rodríguez */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios Industriales en General Rodríguez</h2>
              <p className="text-lg text-muted-foreground">
                Servicios especializados para el sector industrial de General Rodríguez
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {generalRodriguezServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
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

            {/* General Rodríguez Specific Info */}
            <div className="mb-16">
              <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100">
                <CardHeader>
                  <CardTitle className="text-orange-800">Información Específica para General Rodríguez</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-3">Sectores Industriales</h4>
                      <ul className="space-y-2 text-sm text-orange-600">
                        <li>• Industria metalúrgica - Maquinaria pesada</li>
                        <li>• Industria alimentaria - Equipos especializados</li>
                        <li>• Industria química - Estructuras resistentes</li>
                        <li>• Logística - Vehículos comerciales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-3">Capacidades Industriales</h4>
                      <ul className="space-y-2 text-sm text-orange-600">
                        <li>• Equipos de gran capacidad</li>
                        <li>• Técnicas especializadas</li>
                        <li>• Materiales industriales</li>
                        <li>• Servicio 24/7</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonios de Clientes en General Rodríguez</h2>
              <p className="text-lg text-muted-foreground">
                Experiencias de nuestros clientes industriales en General Rodríguez
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-orange-800 mb-4">
                    "Excelente servicio para nuestra maquinaria industrial en General Rodríguez. 
                    Arenaron equipos pesados y quedaron como nuevos. 
                    Muy profesionales y conocen el sector industrial."
                  </p>
                  <div className="text-sm font-semibold text-orange-700">
                    - Ing. Roberto Silva, Industria Metalúrgica
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-orange-800 mb-4">
                    "Contraté el servicio para mis camiones comerciales. 
                    El trabajo fue impecable y muy rápido. 
                    Definitivamente los recomiendo para vehículos industriales."
                  </p>
                  <div className="text-sm font-semibold text-orange-700">
                    - Sr. Carlos Mendoza, Transporte
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas servicio industrial en General Rodríguez?</h3>
                  <p className="text-muted-foreground mb-6">
                    Especialistas en arenado de maquinaria pesada y estructuras industriales. 
                    Presupuesto especializado sin compromiso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <WhatsAppButton
                  
                    />
                    
                    <Button variant="outline" asChild>
                      <Link href="/presupuesto-rapido">
                        Presupuesto Industrial
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { MapPin, ArrowRight, Phone, Mail, Clock, ArrowLeft, Anchor, Waves, Ship } from "lucide-react"
import { PROJECT } from "@/config/project"

export default function TigrePage() {
  const tigreServices = [
    {
      id: "arenado-barcos-tigre",
      title: "Arenado de Barcos en Tigre",
      description: "Especialistas en arenado de cascos, cubiertas y estructuras navales en Tigre",
      features: ["Cascos de barcos", "Cubiertas navales", "Estructuras marinas", "Técnicas controladas"],
      href: "/servicios/arenado-de-barcos"
    },
    {
      id: "arenado-piletas-tigre", 
      title: "Arenado de Piletas en Tigre",
      description: "Servicio especializado para piletas residenciales y clubes náuticos en Tigre",
      features: ["Piletas residenciales", "Clubes náuticos", "Preparación epoxi", "Limpieza profunda"],
      href: "/servicios/arenado-de-piletas"
    },
    {
      id: "arenado-vehiculos-tigre",
      title: "Arenado de Vehículos en Tigre", 
      description: "Servicio para vehículos y embarcaciones menores en Tigre",
      features: ["Vehículos terrestres", "Embarcaciones menores", "Técnicas adaptadas", "Protección marina"],
      href: "/servicios/arenado-de-vehiculos"
    },
    {
      id: "arenado-industrial-tigre",
      title: "Arenado Industrial en Tigre",
      description: "Servicio industrial para estructuras metálicas y maquinaria en Tigre",
      features: ["Estructuras metálicas", "Maquinaria pesada", "Tanques industriales", "Mantenimiento preventivo"],
      href: "/servicios/arenado-industrial"
    },
    {
      id: "arenado-piezas-metalicas-tigre",
      title: "Arenado de Piezas Metálicas en Tigre",
      description: "Tratamiento de piezas pequeñas con precisión en Tigre",
      features: ["Piezas pequeñas", "Preparación galvanizado", "Mantenimiento tolerancias", "Servicio en taller"],
      href: "/servicios/arenado-de-piezas-metalicas"
    },
    {
      id: "arenado-muebles-tigre",
      title: "Arenado de Muebles en Tigre",
      description: "Restauración de muebles de madera y metal en Tigre",
      features: ["Muebles de madera", "Restauración", "Despintado fino", "Preservación"],
      href: "/servicios/arenado-de-muebles"
    },
    {
      id: "arenado-fachadas-tigre",
      title: "Arenado de Fachadas en Tigre",
      description: "Limpieza de edificios residenciales y comerciales en Tigre",
      features: ["Fachadas residenciales", "Fachadas comerciales", "Técnicas no abrasivas", "Preservación"],
      href: "/servicios/arenado-de-fachadas"
    }
  ]

  const tigreAdvantages = [
    {
      icon: <Anchor className="h-6 w-6" />,
      title: "Especialización Naval",
      description: "Únicos especialistas en arenado de barcos y estructuras navales en Tigre, con técnicas específicas para ambientes marinos."
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Conocimiento del Delta",
      description: "Conocemos las particularidades del ambiente húmedo del Delta y aplicamos técnicas especiales para la preservación marina."
    },
    {
      icon: <Ship className="h-6 w-6" />,
      title: "Equipos Marinos",
      description: "Contamos con equipos especializados para trabajar en muelles, clubes náuticos y embarcaciones de todo tipo."
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Zonas de cobertura', href: '/zonas-de-cobertura' }, { label: 'Zona Norte', href: '/zonas-de-cobertura/zona-norte' }, { label: 'Tigre' }]} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-background to-cyan-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Anchor className="h-4 w-4 mr-2" />
              Especialistas Navales en Tigre
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arenado Naval en <span className="text-cyan-600">Tigre</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Servicio de arenado móvil especializado en estructuras navales en Tigre. 
              Especialistas en barcos, cascos, cubiertas y piletas con técnicas adaptadas al ambiente marino del Delta.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Anchor className="h-4 w-4 mr-2 text-cyan-600" />
                Especialización naval
              </div>
              <div className="flex items-center">
                <Waves className="h-4 w-4 mr-2 text-cyan-600" />
                Ambiente marino
              </div>
              <div className="flex items-center">
                <Ship className="h-4 w-4 mr-2 text-cyan-600" />
                Equipos especializados
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto Naval
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

      {/* Why Tigre Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos en Tigre?</h2>
              <p className="text-lg text-muted-foreground">
                Especialización única en arenado naval y estructuras marinas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {tigreAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center border-cyan-200 bg-cyan-50">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services in Tigre */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios Navales en Tigre</h2>
              <p className="text-lg text-muted-foreground">
                Servicios especializados para el ambiente marino y náutico de Tigre
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {tigreServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-cyan-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
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

            {/* Tigre Specific Info */}
            <div className="mb-16">
              <Card className="border-cyan-200 bg-gradient-to-r from-cyan-50 to-cyan-100">
                <CardHeader>
                  <CardTitle className="text-cyan-800">Información Específica para Tigre</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-3">Zonas de Especialización</h4>
                      <ul className="space-y-2 text-sm text-cyan-600">
                        <li>• Puerto de Frutos - Barcos comerciales</li>
                        <li>• Clubes náuticos - Embarcaciones deportivas</li>
                        <li>• Delta del Paraná - Barcos de recreo</li>
                        <li>• Residencias delta - Piletas y estructuras</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-700 mb-3">Técnicas Marinas</h4>
                      <ul className="space-y-2 text-sm text-cyan-600">
                        <li>• Protección contra salitre</li>
                        <li>• Técnicas anti-humedad</li>
                        <li>• Materiales marinos</li>
                        <li>• Preservación naval</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimonios de Clientes en Tigre</h2>
              <p className="text-lg text-muted-foreground">
                Experiencias de nuestros clientes navales en Tigre
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-cyan-200 bg-cyan-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-cyan-800 mb-4">
                    "Excelente trabajo en mi barco en el Puerto de Frutos. Arenaron el casco 
                    y quedó como nuevo. Conocen muy bien cómo trabajar con embarcaciones. 
                    Muy recomendables."
                  </p>
                  <div className="text-sm font-semibold text-cyan-700">
                    - Capitán Miguel Torres, Puerto de Frutos
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-cyan-800 mb-4">
                    "Arenaron la pileta de mi casa en el Delta y quedó perfecta. 
                    Entienden las particularidades del ambiente húmedo. 
                    Trabajo impecable y muy profesionales."
                  </p>
                  <div className="text-sm font-semibold text-cyan-700">
                    - Sra. Ana Fernández, Delta del Paraná
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-cyan-200 bg-gradient-to-br from-cyan-50 to-cyan-100">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas servicio naval en Tigre?</h3>
                  <p className="text-muted-foreground mb-6">
                    Especialistas en arenado de barcos y estructuras marinas. 
                    Presupuesto especializado sin compromiso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href="https://wa.me/5491123787750" target="_blank">
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp Naval
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/presupuesto-rapido">
                        Presupuesto Especializado
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

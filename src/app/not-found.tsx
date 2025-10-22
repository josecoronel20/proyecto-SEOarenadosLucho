import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/headerComponents/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Home, Search, Phone, Wrench } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* 404 Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-8xl mb-4">🔧</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Página no encontrada
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Lo sentimos, la página que buscas no existe o ha sido movida. 
                Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido">
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Servicios Populares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏊‍♂️</span>
                    <span className="text-sm font-semibold text-primary">Piletas</span>
                  </div>
                  <CardTitle className="text-lg">Arenado de Piletas en Pilar</CardTitle>
                  <CardDescription>
                    Limpieza profunda y preparación de piletas para pintura o revestimiento. 
                    Servicio profesional en Pilar y Zona Norte.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/servicios/arenado-de-piletas">
                      Ver Servicio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🚗</span>
                    <span className="text-sm font-semibold text-primary">Vehículos</span>
                  </div>
                  <CardTitle className="text-lg">Arenado de Vehículos</CardTitle>
                  <CardDescription>
                    Remoción de pintura y óxido en autos, camiones y chasis. 
                    Servicio móvil y en taller en Zona Norte.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/servicios/arenado-de-vehiculos">
                      Ver Servicio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Enlaces Útiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">Nuestros Servicios</CardTitle>
                  <CardDescription>
                    Descubre todos nuestros servicios de arenado profesional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/servicios">
                      Ver Servicios
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">Zonas de Cobertura</CardTitle>
                  <CardDescription>
                    Conoce las zonas donde brindamos nuestros servicios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/zonas-de-cobertura">
                      Ver Zonas
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">Presupuesto Gratuito</CardTitle>
                  <CardDescription>
                    Solicita tu presupuesto sin compromiso
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/presupuesto-rapido">
                      Solicitar
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

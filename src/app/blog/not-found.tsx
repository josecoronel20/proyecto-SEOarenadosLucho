import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/headerComponents/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Search, BookOpen } from "lucide-react"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* 404 Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-8xl mb-4">📝</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Artículo no encontrado
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Lo sentimos, el artículo que buscas no existe o ha sido movido. 
                Pero no te preocupes, tenemos muchos otros artículos interesantes para ti.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/blog">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Ver Todos los Artículos
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Artículos Populares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏊‍♂️</span>
                    <span className="text-sm font-semibold text-primary">Piletas</span>
                  </div>
                  <CardTitle className="text-lg">Guía Completa del Arenado de Piletas</CardTitle>
                  <CardDescription>
                    Descubre todo sobre el proceso de arenado para piletas, desde cuándo es necesario hasta cómo prepararse para el trabajo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/blog/guia-completa-arenado-piletas">
                      Leer Artículo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏭</span>
                    <span className="text-sm font-semibold text-primary">Industrial</span>
                  </div>
                  <CardTitle className="text-lg">Arenado Industrial: Mantenimiento Preventivo</CardTitle>
                  <CardDescription>
                    Aprende sobre la importancia del mantenimiento preventivo en equipos industriales y cómo el arenado puede extender su vida útil.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href="/blog/arenado-industrial-mantenimiento-preventivo">
                      Leer Artículo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Buscas algo específico?</h2>
            <p className="text-muted-foreground mb-8">
              Explora nuestras categorías o contactanos directamente para obtener información personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/blog">
                  <Search className="h-4 w-4 mr-2" />
                  Explorar Blog
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido">
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

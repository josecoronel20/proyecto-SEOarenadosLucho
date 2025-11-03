import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/headerComponents/header"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, User, Tag, Clock, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from "@/data/blog"
import { PROJECT } from "@/config/project"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    return {
      title: "Categoría no encontrada | Arenados Lucho",
      description: "La categoría que buscas no existe.",
    }
  }

  return {
    title: `Blog ${category.name} | Arenados Lucho - Artículos Especializados`,
    description: `Artículos especializados sobre ${category.name.toLowerCase()} y arenado en Pilar y Zona Norte. Consejos profesionales y guías técnicas.`,
    keywords: `blog ${category.name.toLowerCase()}, arenado ${category.name.toLowerCase()}, consejos ${category.name.toLowerCase()}, Pilar, Zona Norte`,
    openGraph: {
      title: `Blog ${category.name} | Arenados Lucho`,
      description: `Artículos especializados sobre ${category.name.toLowerCase()} y arenado en Pilar y Zona Norte.`,
      type: "website",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog ${category.name} | Arenados Lucho`,
      description: `Artículos especializados sobre ${category.name.toLowerCase()} y arenado en Pilar y Zona Norte.`,
    },
    alternates: {
      canonical: `https://arenadoslucho.com/blog/categoria/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(category.name)
  const allCategories = getAllCategories()

  return (
    <div className="min-h-screen">
      <Header />
      
      <Breadcrumbs segments={[{ label: 'Blog', href: '/blog' }, { label: category.name }]} />

      {/* Category Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Link>
              </Button>
            </div>
            
            <div className="mb-8">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                {posts.length} artículo{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-primary mb-1">{post.category}</div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.dateFormatted}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold mb-4">No hay artículos disponibles</h2>
              <p className="text-muted-foreground mb-8">
                Aún no tenemos artículos en esta categoría, pero estamos trabajando en contenido nuevo.
              </p>
              <Button asChild>
                <Link href="/blog">
                  Ver Todos los Artículos
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Otras Categorías</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allCategories.filter(cat => cat.slug !== category.slug).map((otherCategory, index) => (
                <Button key={index} variant="outline" className="group hover:bg-primary hover:text-primary-foreground h-auto p-4 flex flex-col items-center gap-2" asChild>
                  <Link href={`/blog/categoria/${otherCategory.slug}`}>
                    <span className="text-2xl">{otherCategory.icon}</span>
                    <span className="text-sm font-medium">{otherCategory.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Servicios de {category.name}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Después de leer nuestros artículos sobre {category.name.toLowerCase()}, ¿estás listo para tu próximo proyecto? 
            Contactanos para obtener un presupuesto personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton />
            <Button size="lg" asChild>
              <Link href="/presupuesto-rapido">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>📞 WhatsApp: {PROJECT.contact.whatsapp}</p>
            <p>📧 Email: {PROJECT.contact.email}</p>
            <p>⏰ Horarios: {PROJECT.contact.hours}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

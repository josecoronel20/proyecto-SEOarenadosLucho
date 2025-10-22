import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, Tag, TrendingUp } from "lucide-react"
import { getRecentPosts, getAllCategories, getAllTags } from "@/data/blog"
import type { BlogPost } from "@/data/blog"

interface BlogSidebarProps {
  currentPost?: BlogPost
  className?: string
}

export function BlogSidebar({ currentPost, className = "" }: BlogSidebarProps) {
  const recentPosts = getRecentPosts(currentPost, 5)
  const categories = getAllCategories()
  const popularTags = getAllTags().slice(0, 10)

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "Piletas": "🏊‍♂️",
      "Industrial": "🏭",
      "Barcos": "🚢",
      "Vehículos": "🚗",
      "Piezas Metálicas": "⚙️",
      "Muebles": "🪑",
      "Fachadas": "🏠",
      "Técnicas": "🔧"
    }
    return icons[category] || "📝"
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Artículos Recientes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="text-lg flex-shrink-0">{getCategoryIcon(post.category)}</div>
              <div className="flex-1 min-w-0">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="block group-hover:text-primary transition-colors"
                >
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{post.dateFormatted}</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Categorías
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-2 group hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href={`/blog/categoria/${category.slug}`}>
                  <span className="text-lg mr-3">{category.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs opacity-75">{category.description}</div>
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Etiquetas Populares
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7"
                asChild
              >
                <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  #{tag}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Mantente Informado</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Recibe nuestros artículos más recientes directamente en tu correo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
            />
            <Button variant="secondary" size="sm" className="w-full">
              Suscribirse
            </Button>
            <p className="text-xs text-primary-foreground/70">
              Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact CTA */}
      <Card>
        <CardHeader>
          <CardTitle>¿Necesitas Servicios de Arenado?</CardTitle>
          <CardDescription>
            Después de leer nuestros artículos, ¿estás listo para tu próximo proyecto?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full" asChild>
            <Link href="/presupuesto-rapido">
              Solicitar Presupuesto
            </Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/servicios">
              Ver Servicios
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

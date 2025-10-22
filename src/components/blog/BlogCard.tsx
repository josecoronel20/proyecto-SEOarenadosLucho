import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import type { BlogPost } from "@/data/blog"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "featured" | "compact"
  showCategory?: boolean
}

export function BlogCard({ post, variant = "default", showCategory = true }: BlogCardProps) {
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

  if (variant === "compact") {
    return (
      <Card className="group hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0">{getCategoryIcon(post.category)}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{post.dateFormatted}</span>
                <Clock className="h-3 w-3 ml-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "featured") {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="text-6xl">{getCategoryIcon(post.category)}</div>
            <div className="text-right">
              {showCategory && (
                <div className="text-sm font-semibold text-primary mb-1">{post.category}</div>
              )}
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} de lectura
              </div>
            </div>
          </div>
          <CardTitle className="text-2xl mb-4">{post.title}</CardTitle>
          <CardDescription className="text-lg">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {post.dateFormatted}
            </div>
          </div>
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {post.content.substring(0, 300)}...
          </p>
          <Button asChild>
            <Link href={`/blog/${post.slug}`}>
              Leer Artículo Completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{getCategoryIcon(post.category)}</div>
          <div className="text-right">
            {showCategory && (
              <div className="text-xs font-semibold text-primary mb-1">{post.category}</div>
            )}
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
  )
}

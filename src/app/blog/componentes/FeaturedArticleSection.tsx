import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, User, Calendar, BookOpen } from "lucide-react"
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/data/blog"

export function FeaturedArticleSection() {
  const featuredArticles = getFeaturedPosts()
  const categories = getAllCategories()

  if (featuredArticles.length === 0) return null

  const featuredArticle = featuredArticles[0]
  const category = categories.find(cat => cat.name === featuredArticle.category)

  return (
    <section className="py-20 relative" aria-labelledby="featured-article-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      <div className="container mx-auto px-4 relative">
        <h2 id="featured-article-heading" className="text-4xl font-bold mb-12 text-center">
          Artículo Destacado de Arenado en Pilar
        </h2>
        <Card className="max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300 border-2 bg-white/80 backdrop-blur-sm">
          <CardHeader className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="text-5xl bg-primary/10 p-4 rounded-xl" aria-hidden="true">
                  {category?.icon || "📝"}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-primary">{featuredArticle.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                    {featuredArticle.readTime} de lectura
                  </div>
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-4 leading-tight">{featuredArticle.title}</CardTitle>
            <CardDescription className="text-lg leading-relaxed">{featuredArticle.excerpt}</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
                <span className="font-medium">{featuredArticle.author}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                {featuredArticle.dateFormatted}
              </div>
            </div>
            <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">{featuredArticle.content.substring(0, 300)}...</p>
            <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform" asChild>
              <Link href={`/blog/${featuredArticle.slug}`} aria-label={`Leer artículo completo: ${featuredArticle.title}`}>
                Leer Artículo Completo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

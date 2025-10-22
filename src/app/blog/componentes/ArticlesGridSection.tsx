import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock, BookOpen } from "lucide-react"
import { getAllPosts, getAllCategories } from "@/data/blog"

export function ArticlesGridSection() {
  const articles = getAllPosts()
  const categories = getAllCategories()

  const regularArticles = articles.filter(article => !article.featured)

  return (
    <section className="py-16 bg-muted/50" aria-labelledby="articles-grid-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="articles-grid-heading" className="text-3xl font-bold mb-4">
            Artículos sobre Arenado en Zona Norte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mantente informado con nuestros artículos más recientes sobre servicios de arenado y mantenimiento en Pilar, San Isidro, Tigre y alrededores.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Artículos sobre arenado en Zona Norte">
          {regularArticles.map((article, index) => {
            const category = categories.find(cat => cat.name === article.category)
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col bg-white" role="listitem">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="text-sm font-medium text-primary">{article.category}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-4 border-t border-muted">
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" aria-hidden="true" />
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                      <span>{article.dateFormatted}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" 
                      asChild
                    >
                      <Link href={`/blog/${article.slug}`} aria-label={`Leer artículo: ${article.title}`}>
                        Leer Más
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

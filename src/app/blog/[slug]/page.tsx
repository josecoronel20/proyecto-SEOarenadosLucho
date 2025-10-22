import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/headerComponents/header"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, User, Tag, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import { getPostBySlug, getRelatedPosts, getRecentPosts, getAllPosts } from "@/data/blog"
import { PROJECT } from "@/config/project"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Artículo no encontrado | Arenados Lucho",
      description: "El artículo que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article", 
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
    },
    alternates: {
      canonical: `https://arenadoslucho.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)
  const recentPosts = getRecentPosts(post, 5)

  // Generate table of contents from headings
  const generateTOC = (content: string) => {
    const lines = content.split('\n')
    const headings = lines
      .filter(line => line.trim().startsWith('## '))
      .map((line, index) => ({
        id: `heading-${index}`,
        text: line.replace('## ', '').trim(),
        level: 2
      }))
    
    return headings
  }

  const toc = generateTOC(post.content)

  // Convert content to JSX with proper formatting
  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []
    let listIndex = 0

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listIndex++}`} className="mb-8 space-y-3">
            {currentList.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
        currentList = []
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      
      if (trimmedLine === '') {
        flushList()
        return
      }
      
      // Handle headings
      if (trimmedLine.startsWith('## ')) {
        flushList()
        const headingText = trimmedLine.replace('## ', '')
        const headingId = `heading-${elements.filter(el => el.type === 'h2').length}`
        elements.push(
          <h2 key={index} id={headingId} className="text-3xl font-bold mt-12 mb-6 text-primary/90 tracking-tight border-b border-primary/20 pb-3 scroll-mt-20">
            {headingText}
          </h2>
        )
        return
      }
      
      if (trimmedLine.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={index} className="text-2xl font-semibold mt-10 mb-4 text-gray-800 flex items-center gap-3">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            {trimmedLine.replace('### ', '')}
          </h3>
        )
        return
      }
      
      // Handle lists
      if (trimmedLine.startsWith('- ')) {
        currentList.push(trimmedLine.replace('- ', ''))
        return
      }
      
      // Handle numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        flushList()
        const number = trimmedLine.match(/^(\d+)\.\s/)?.[1] || '1'
        const text = trimmedLine.replace(/^\d+\.\s/, '')
        elements.push(
          <div key={index} className="flex items-start gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              {number}
            </span>
            <span className="text-gray-700 leading-relaxed">{text}</span>
          </div>
        )
        return
      }
      
      // Handle blockquotes
      if (trimmedLine.startsWith('> ')) {
        flushList()
        const quoteText = trimmedLine.replace('> ', '')
        elements.push(
          <blockquote key={index} className="border-l-4 border-primary/30 pl-6 py-4 mb-6 bg-primary/5 rounded-r-lg">
            <p className="text-gray-700 italic leading-relaxed">
              {quoteText}
            </p>
          </blockquote>
        )
        return
      }
      
      // Handle bold text with better formatting
      if (trimmedLine.includes('**')) {
        flushList()
        const parts = trimmedLine.split('**')
        elements.push(
          <p key={index} className="mb-6 leading-relaxed text-gray-700">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? (
                <strong key={partIndex} className="font-bold text-gray-900 bg-primary/10 px-1 rounded">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        )
        return
      }
      
      // Handle special formatting for FAQ sections
      if (trimmedLine.includes('**¿') && trimmedLine.includes('?**')) {
        flushList()
        const question = trimmedLine.replace(/\*\*/g, '')
        elements.push(
          <div key={index} className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <span className="text-blue-600">❓</span>
              {question}
            </h4>
          </div>
        )
        return
      }
      
      // Handle conclusion sections
      if (trimmedLine.includes('**Conclusión**') || trimmedLine.includes('**Resumen**')) {
        flushList()
        elements.push(
          <div key={index} className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>📋</span>
              {trimmedLine.replace(/\*\*/g, '')}
            </h3>
          </div>
        )
        return
      }
      
      // Handle contact sections
      if (trimmedLine.includes('**¿Querés saber') || trimmedLine.includes('**¿Tu empresa necesita') || trimmedLine.includes('**¿Tienes un proyecto')) {
        flushList()
        elements.push(
          <div key={index} className="mt-12 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl">
            <p className="text-green-800 font-semibold text-lg leading-relaxed">
              {trimmedLine.replace(/\*\*/g, '')}
            </p>
          </div>
        )
        return
      }
      
      // Regular paragraphs
      flushList()
      elements.push(
        <p key={index} className="mb-6 leading-relaxed text-gray-700 text-base">
          {trimmedLine}
        </p>
      )
    })

    // Flush any remaining list items
    flushList()
    
    return elements
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      <Breadcrumbs segments={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 transition-colors" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Link>
              </Button>
            </div>
            
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">
                    {post.category === 'Piletas' ? '🏊‍♂️' : 
                     post.category === 'Industrial' ? '🏭' :
                     post.category === 'Barcos' ? '🚢' :
                     post.category === 'Vehículos' ? '🚗' :
                     post.category === 'Piezas Metálicas' ? '⚙️' :
                     post.category === 'Muebles' ? '🪑' :
                     post.category === 'Fachadas' ? '🏠' : '🔧'}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                    {post.category}
                  </span>
                  <div className="mt-2 text-sm text-gray-500">
                    Artículo especializado
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Autor</div>
                      <div className="font-medium text-gray-900">{post.author}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Fecha</div>
                      <div className="font-medium text-gray-900">{post.dateFormatted}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Lectura</div>
                      <div className="font-medium text-gray-900">{post.readTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Palabras</div>
                      <div className="font-medium text-gray-900">{post.content.split(' ').length}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" asChild>
                  <Link href="#">
                    <Share2 className="h-5 w-5 mr-2" />
                    Compartir Artículo
                  </Link>
                </Button>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-gray-100 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-gray-600 transition-all duration-300 cursor-pointer border border-gray-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-12 border border-blue-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-900 flex items-center gap-2">
                      <span>Resumen del Artículo</span>
                    </h3>
                    <p className="text-blue-800 leading-relaxed text-base">{post.excerpt}</p>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-12 border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    Índice de Contenidos
                  </h3>
                  <nav className="space-y-2">
                    {toc.map((heading, index) => (
                      <a
                        key={index}
                        href={`#${heading.id}`}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1 pl-4 border-l-2 border-transparent hover:border-primary/30"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
              
              <div className="space-y-8">
                {formatContent(post.content)}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="border-b border-gray-200 pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  Sobre el Autor
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl mb-3 text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 leading-relaxed text-base">{post.authorBio}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Experto en {post.category.toLowerCase()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Artículos Relacionados</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Continúa aprendiendo con estos artículos relacionados sobre {post.category.toLowerCase()} y servicios de arenado.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                    <CardHeader className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">
                            {relatedPost.category === 'Piletas' ? '🏊‍♂️' : 
                             relatedPost.category === 'Industrial' ? '🏭' :
                             relatedPost.category === 'Barcos' ? '🚢' :
                             relatedPost.category === 'Vehículos' ? '🚗' :
                             relatedPost.category === 'Piezas Metálicas' ? '⚙️' :
                             relatedPost.category === 'Muebles' ? '🪑' :
                             relatedPost.category === 'Fachadas' ? '🏠' : '🔧'}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary mb-1">{relatedPost.category}</div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-gray-600 leading-relaxed">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {relatedPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {relatedPost.dateFormatted}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300" asChild>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas Servicios de Arenado?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95 font-light leading-relaxed">
              Después de leer este artículo sobre {post.category.toLowerCase()}, ¿estás listo para tu próximo proyecto? 
              Contactanos para obtener un presupuesto personalizado y comenzar tu trabajo de arenado profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-lg" asChild>
                <Link href="/servicios">
                  Ver Todos los Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">📞</span>
                  <span className="font-medium">WhatsApp</span>
                  <span className="opacity-90">{PROJECT.contact.whatsapp}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">📧</span>
                  <span className="font-medium">Email</span>
                  <span className="opacity-90">{PROJECT.contact.email}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">⏰</span>
                  <span className="font-medium">Horarios</span>
                  <span className="opacity-90">{PROJECT.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

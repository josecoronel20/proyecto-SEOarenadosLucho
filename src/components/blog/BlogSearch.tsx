"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, X, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"
import { searchPosts, getAllPosts } from "@/data/blog"
import type { BlogPost } from "@/data/blog"

interface BlogSearchProps {
  placeholder?: string
  showResults?: boolean
  maxResults?: number
}

export function BlogSearch({ 
  placeholder = "Buscar artículos...", 
  showResults = true, 
  maxResults = 5 
}: BlogSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<BlogPost[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)

  useEffect(() => {
    if (query.trim().length > 2) {
      setIsSearching(true)
      const searchResults = searchPosts(query)
      setResults(searchResults.slice(0, maxResults))
      setShowSearchResults(true)
      setIsSearching(false)
    } else {
      setResults([])
      setShowSearchResults(false)
    }
  }, [query, maxResults])

  const handleClearSearch = () => {
    setQuery("")
    setResults([])
    setShowSearchResults(false)
  }

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
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {showResults && showSearchResults && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              <Search className="h-6 w-6 mx-auto mb-2 animate-pulse" />
              Buscando...
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground border-b">
                {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
              </div>
              {results.map((post, index) => (
                <Card key={index} className="m-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl flex-shrink-0">{getCategoryIcon(post.category)}</div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="block group"
                          onClick={() => setShowSearchResults(false)}
                        >
                          <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.dateFormatted}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {results.length === maxResults && (
                <div className="p-3 text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog?search=${encodeURIComponent(query)}`}>
                      Ver todos los resultados
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              <Search className="h-6 w-6 mx-auto mb-2" />
              No se encontraron artículos
            </div>
          )}
        </div>
      )}
    </div>
  )
}

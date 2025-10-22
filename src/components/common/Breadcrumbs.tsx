import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"
import { useEffect } from "react"

export type Crumb = { label: string; href?: string }

interface BreadcrumbsProps {
  segments: Crumb[]
  className?: string
}

export function Breadcrumbs({ segments, className = "" }: BreadcrumbsProps) {
  // Generate BreadcrumbList schema
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.arenadoslucho.com.ar"
        },
        ...segments.map((seg, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": seg.label,
          "item": seg.href ? `https://www.arenadoslucho.com.ar${seg.href}` : undefined
        }))
      ]
    }

    // Add schema to head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(breadcrumbSchema)
    script.id = 'breadcrumb-schema'
    
    // Remove existing breadcrumb schema if any
    const existingScript = document.getElementById('breadcrumb-schema')
    if (existingScript) {
      existingScript.remove()
    }
    
    document.head.appendChild(script)

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-schema')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [segments])

  return (
    <nav className={`bg-muted/50 py-2 ${className}`} aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-primary">
              <Home className="h-4 w-4 mr-1" />
              Inicio
            </Link>
          </li>
          {segments.map((seg, idx) => (
            <li key={idx} className="flex items-center text-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              {seg.href ? (
                <Link href={seg.href} className="hover:text-primary">{seg.label}</Link>
              ) : (
                <span className="text-foreground/70">{seg.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}



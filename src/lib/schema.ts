import { PROJECT } from "@/config/project"

// Generate Service schema for individual service pages
export function generateServiceSchema(serviceId: string, area?: string) {
  const service = PROJECT.services.find(s => s.id === serviceId)
  if (!service) return null

  const baseUrl = "https://www.arenadoslucho.com.ar"
  const serviceUrl = `${baseUrl}${service.href}`
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "url": serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": PROJECT.name,
      "url": baseUrl,
      "telephone": PROJECT.contact.phone,
      "email": PROJECT.contact.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pilar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      }
    },
    "areaServed": area ? {
      "@type": "City",
      "name": area
    } : PROJECT.coverage.all.map(city => ({
      "@type": "City",
      "name": city
    })),
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "description": `Servicio profesional de ${service.title.toLowerCase()}`,
      "priceCurrency": "ARS",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Servicios de ${service.title}`,
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  }
}

// Generate FAQ schema
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate Article schema for blog posts
export function generateArticleSchema(article: {
  title: string
  description: string
  content: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image ? `https://www.arenadoslucho.com.ar${article.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": PROJECT.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.arenadoslucho.com.ar/images/logo-azul-arenados-lucho.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "url": `https://www.arenadoslucho.com.ar${article.url}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.arenadoslucho.com.ar${article.url}`
    }
  }
}

// Generate WebSite schema with search action
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": PROJECT.name,
    "url": "https://www.arenadoslucho.com.ar",
    "description": PROJECT.tagline,
    "publisher": {
      "@type": "Organization",
      "name": PROJECT.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.arenadoslucho.com.ar/buscar?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Generate ContactPage schema
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Arenados Lucho",
    "description": "Contacta con Arenados Lucho para solicitar presupuesto de arenado y sandblasting",
    "url": "https://www.arenadoslucho.com.ar/presupuesto-rapido",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": PROJECT.name,
      "telephone": PROJECT.contact.phone,
      "email": PROJECT.contact.email,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PROJECT.contact.phone,
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      }
    }
  }
}

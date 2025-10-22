import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Proyectos de Arenado en Pilar | Galería Antes/Después",
  description: "Galería de proyectos de arenado en Pilar y Zona Norte. Fotos antes y después. 20+ años de experiencia. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, portfolio arenado, galería proyectos, antes y después, sandblasting buenos aires`,
  authors: [{ name: PROJECT.name }],
  openGraph: {
    title: "Proyectos de Arenado en Pilar | Galería Antes/Después",
    description: "Galería de proyectos de arenado en Pilar y Zona Norte. Fotos antes y después. 20+ años de experiencia. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/proyectos",
    siteName: PROJECT.name,
    images: [
      {
        url: '/images/portada-hero-arenados-lucho.webp',
        width: 1200,
        height: 630,
        alt: 'Proyectos de Arenado en Pilar y Zona Norte - Arenados Lucho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Proyectos de Arenado en Pilar | Galería Antes/Después",
    description: "Galería de proyectos de arenado en Pilar y Zona Norte. Fotos antes y después. 20+ años de experiencia. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/proyectos"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'AR-B',
    'geo.placename': 'Pilar',
    'geo.position': '-34.4587;-58.9142',
    'ICBM': '-34.4587, -58.9142'
  }
}

// JSON-LD Structured Data for Projects Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Proyectos de Arenado en Pilar y Zona Norte",
  "description": "Galería de proyectos de arenado realizados en Pilar y Zona Norte. Fotos antes y después de trabajos en piletas, industrias, barcos y más.",
  "url": "https://www.arenadoslucho.com.ar/proyectos",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Proyectos de Arenado",
    "description": "Portfolio de trabajos de arenado y sandblasting realizados con éxito",
    "numberOfItems": "150+",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Arenado de Piletas en Pilar",
        "description": "Renovación de piletas con arenado profesional"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Arenado Industrial en Zona Norte",
        "description": "Limpieza de estructuras metálicas y maquinaria industrial"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Arenado de Barcos en Buenos Aires",
        "description": "Despintado y tratamiento de cascos y estructuras navales"
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.arenadoslucho.com.ar"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Proyectos de Arenado",
        "item": "https://www.arenadoslucho.com.ar/proyectos"
      }
    ]
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": PROJECT.name,
    "url": "https://www.arenadoslucho.com.ar",
    "telephone": PROJECT.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pilar",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "areaServed": PROJECT.coverage.all.map(city => ({
      "@type": "City",
      "name": city
    }))
  }
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}

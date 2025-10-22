import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { FeaturedArticleSection } from "./componentes/FeaturedArticleSection"
import { ArticlesGridSection } from "./componentes/ArticlesGridSection"
import { CTASection } from "./componentes/CTASection"
import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales y Guías Técnicas - Arenados Lucho",
  description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos, industrial, fachadas y muebles. Consejos de expertos locales con más de 15 años de experiencia.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, blog arenado Pilar, consejos arenado Zona Norte, mantenimiento piletas Pilar, arenado vehículos San Isidro, arenado industrial Tigre, sandblasting Zona Norte, guías técnicas arenado, arenado barcos Tigre, arenado muebles San Fernando, arenado fachadas Vicente López, consejos profesionales arenado, casos de éxito arenado, técnicas arenado, blog sandblasting, blog granallado, expertos arenado Pilar, mantenimiento especializado Zona Norte`,
  openGraph: {
    title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales - Arenados Lucho",
    description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos e industrias. Consejos de expertos locales.",
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar/blog",
    siteName: PROJECT.name,
    images: [{
      url: '/images/portada-hero-arenados-lucho.webp',
      width: 1200,
      height: 630,
      alt: 'Blog de Arenado en Pilar y Zona Norte - Consejos Profesionales Arenados Lucho'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales - Arenados Lucho",
    description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos e industrias.",
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/blog",
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
    'geo.placename': 'Pilar, Buenos Aires',
    'geo.position': '-34.4587;-58.9142',
    'ICBM': '-34.4587, -58.9142'
  }
}

export default function BlogPage() {
  return (
    <main className="min-h-screen" role="main" aria-label="Blog de arenado en Pilar y Zona Norte">
      <Breadcrumbs segments={[{ label: 'Blog' }]} />
      
      <HeroSection />
      <FeaturedArticleSection />
      <ArticlesGridSection />
      <CTASection />
    </main>
  )
}

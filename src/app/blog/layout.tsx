import type { Metadata } from "next"
import { PROJECT } from "@/config/project"

export const metadata: Metadata = {
  title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales y Guías Técnicas - Arenados Lucho",
  description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos, industrial, fachadas y muebles. Consejos de expertos locales con más de 15 años de experiencia.",
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}, blog arenado Pilar, consejos arenado Zona Norte, mantenimiento piletas Pilar, arenado vehículos San Isidro, arenado industrial Tigre, sandblasting Zona Norte, guías técnicas arenado, arenado barcos Tigre, arenado muebles San Fernando, arenado fachadas Vicente López, consejos profesionales arenado, casos de éxito arenado, técnicas arenado, blog sandblasting, blog granallado, expertos arenado Pilar, mantenimiento especializado Zona Norte`,
  authors: [{ name: PROJECT.name }],
  creator: `${PROJECT.name} - Expertos en Arenado`,
  publisher: PROJECT.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar/blog",
  },
  openGraph: {
    title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales - Arenados Lucho",
    description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos e industrias. Consejos de expertos locales.",
    url: "https://www.arenadoslucho.com.ar/blog",
    siteName: PROJECT.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/portada-hero-arenados-lucho.webp",
        width: 1200,
        height: 630,
        alt: "Blog de Arenado en Pilar y Zona Norte - Consejos Profesionales Arenados Lucho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales - Arenados Lucho",
    description: "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos e industrias.",
    images: ["/images/portada-hero-arenados-lucho.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "blog",
  classification: "Blog y Artículos Técnicos",
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4587;-58.9142",
    "ICBM": "-34.4587, -58.9142",
    "DC.title": "Blog de Arenado en Pilar y Zona Norte | Consejos Profesionales y Guías Técnicas",
    "DC.description": "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre, Vicente López, San Fernando y Zona Norte de Buenos Aires. Consejos de expertos locales.",
    "DC.subject": "Blog, Arenado, Sandblasting, Granallado, Consejos, Guías Técnicas, Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte",
    "DC.language": "es",
    "DC.creator": PROJECT.name,
    "DC.publisher": PROJECT.name,
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "Blog",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/blog",
    "DC.rights": `Copyright ${PROJECT.name}`,
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Arenado en Pilar y Zona Norte - Consejos Profesionales Arenados Lucho",
            "description": "Blog especializado en servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte. Artículos sobre arenado de piletas, vehículos, barcos, industrial, fachadas y muebles. Consejos de expertos locales.",
            "url": "https://www.arenadoslucho.com.ar/blog",
            "publisher": {
              "@type": "Organization",
              "name": PROJECT.name,
              "url": "https://www.arenadoslucho.com.ar",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.arenadoslucho.com.ar/images/logo.webp"
              }
            },
            "author": {
              "@type": "Organization",
              "name": PROJECT.name,
              "url": PROJECT.url
            },
            "inLanguage": "es-AR",
            "isPartOf": {
              "@type": "WebSite",
              "name": PROJECT.name,
              "url": PROJECT.url
            }
          })
        }}
      />
      
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `${PROJECT.name} - Expertos en Arenado`,
            "image": "https://www.arenadoslucho.com.ar/images/logo.webp",
            "description": "Servicio profesional de arenado en Pilar, San Isidro, Tigre y Zona Norte de Buenos Aires. Más de 15 años de experiencia en arenado de piletas, industrias, barcos, vehículos, muebles y fachadas.",
            "url": "https://www.arenadoslucho.com.ar/blog",
            "telephone": PROJECT.contact.phone,
            "email": PROJECT.contact.email,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pilar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR",
              "postalCode": "1629"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.4587",
              "longitude": "-58.9142"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Pilar"
              },
              {
                "@type": "City", 
                "name": "San Isidro"
              },
              {
                "@type": "City",
                "name": "Tigre"
              },
              {
                "@type": "City",
                "name": "Vicente López"
              },
              {
                "@type": "City",
                "name": "San Fernando"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Zona Norte GBA"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-34.4587",
                "longitude": "-58.9142"
              },
              "geoRadius": "50000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              `https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}`,
              `mailto:${PROJECT.contact.email}`
            ]
          })
        }}
      />
      
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": PROJECT.url
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${PROJECT.url}/blog`
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}


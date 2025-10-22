import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado Industrial en Pilar y Zona Norte 2025 | Servicio Profesional para Maquinaria y Estructuras - Arenados Lucho",
  description: "Servicio especializado de arenado industrial en Pilar, San Isidro y Zona Norte Buenos Aires 2025. Expertos en maquinaria pesada, estructuras metálicas y equipos industriales. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado industrial Pilar",
    "arenado industrial San Isidro",
    "arenado industrial Zona Norte",
    "arenado maquinaria Buenos Aires",
    "arenado estructuras metálicas",
    "arenado equipos industriales",
    "granallado industrial Pilar",
    "arenado tanques industriales",
    "arenado industrial Tigre",
    "arenado industrial Vicente López",
    "servicio industrial Zona Norte",
    "arenado industrial precio",
    "arenado industrial presupuesto",
    "arenado industrial 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado Industrial",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arenadoslucho.com"),
  alternates: {
    canonical: "/servicios/arenado-industrial",
  },
  openGraph: {
    title: "Arenado Industrial en Pilar y Zona Norte 2025 | Servicio Profesional",
    description: "Expertos en arenado industrial para maquinaria pesada y estructuras metálicas en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito.",
    url: "https://arenadoslucho.com/servicios/arenado-industrial",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-industrial-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado industrial profesional en Pilar y Zona Norte - Maquinaria y estructuras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado Industrial en Pilar y Zona Norte 2025 | Servicio Profesional",
    description: "Expertos en arenado industrial para maquinaria pesada y estructuras metálicas en Pilar, San Isidro y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-industrial-pilar-despues.webp"],
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
  verification: {
    google: "google-site-verification-code",
  },
  category: "industrial",
  classification: "Arenado Industrial y Granallado",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado Industrial en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado industrial para maquinaria pesada, estructuras metálicas y equipos industriales en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado Industrial, Granallado, Maquinaria, Estructuras Metálicas, Equipos Industriales, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://arenadoslucho.com/servicios/arenado-industrial",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoIndustrialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Arenados Lucho - Expertos en Arenado Industrial",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado industrial para maquinaria pesada, estructuras metálicas y equipos industriales en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en arenado industrial.",
            "url": "https://arenadoslucho.com/servicios/arenado-industrial",
            "telephone": "+54 9 11 2378-7750",
            "email": "arenadoslucho@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pilar",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR",
              "postalCode": "1629"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.4359",
              "longitude": "-58.7014"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
                "latitude": "-34.4359",
                "longitude": "-58.7014"
              },
              "geoRadius": "30000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "110",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado Industrial",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Maquinaria Pesada",
                    "description": "Tratamiento profesional para maquinaria pesada y equipos industriales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Estructuras Metálicas", 
                    "description": "Servicio especializado para estructuras metálicas y tanques industriales"
                  }
                }
              ]
            },
            "sameAs": [
              "https://wa.me/5491123787750",
              "mailto:arenadoslucho@hotmail.com"
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
                "item": "https://arenadoslucho.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Servicios",
                "item": "https://arenadoslucho.com/servicios"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Arenado Industrial",
                "item": "https://arenadoslucho.com/servicios/arenado-industrial"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

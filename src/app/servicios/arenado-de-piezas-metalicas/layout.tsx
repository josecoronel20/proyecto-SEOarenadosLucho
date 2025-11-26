import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Piezas Metálicas en Pilar y Zona Norte 2025 | Servicio Industrial Profesional - Arenados Lucho",
  description: "Servicio especializado de arenado de piezas metálicas en Pilar, San Isidro y Zona Norte Buenos Aires 2025. Expertos en piezas pequeñas, precisión y preparación para galvanizado. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado piezas metalicas Pilar",
    "arenado piezas metalicas San Isidro",
    "arenado piezas metalicas Zona Norte",
    "arenado piezas pequenas Buenos Aires",
    "arenado precision Pilar",
    "arenado galvanizado",
    "arenado piezas metalicas Tigre",
    "arenado piezas metalicas Vicente López",
    "arenado piezas metalicas San Fernando",
    "servicio industrial Zona Norte",
    "arenado piezas metalicas precio",
    "arenado piezas metalicas presupuesto",
    "arenado piezas metalicas 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado de Piezas Metálicas",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-piezas-metalicas",
  },
  openGraph: {
    title: "Arenado de Piezas Metálicas en Pilar y Zona Norte 2025 | Servicio Industrial Profesional",
    description: "Expertos en arenado de piezas metálicas con precisión en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-piezas-metalicas",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-pieza-metalica-san-isidro-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de piezas metálicas profesional en Pilar y Zona Norte - Servicio industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Piezas Metálicas en Pilar y Zona Norte 2025 | Servicio Industrial Profesional",
    description: "Expertos en arenado de piezas metálicas con precisión en Pilar, San Isidro y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-pieza-metalica-san-isidro-despues.webp"],
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
  classification: "Arenado de Piezas Metálicas y Servicios Industriales",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Piezas Metálicas en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado de piezas metálicas con precisión en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado Piezas Metálicas, Precisión, Galvanizado, Piezas Pequeñas, Servicio Industrial, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-piezas-metalicas",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoPiezasMetalicasLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Piezas Metálicas",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado de piezas metálicas con precisión en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en servicios industriales de precisión.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-piezas-metalicas",
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
              "reviewCount": "80",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Piezas Metálicas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Piezas Pequeñas",
                    "description": "Servicio especializado de arenado para piezas metálicas pequeñas con máxima precisión"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Preparación para Galvanizado", 
                    "description": "Tratamiento profesional de piezas metálicas para galvanizado y tratamientos especiales"
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
                "item": "https://www.arenadoslucho.com.ar"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Servicios",
                "item": "https://www.arenadoslucho.com.ar/servicios"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Arenado de Piezas Metálicas",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-piezas-metalicas"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

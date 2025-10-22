import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Muebles en Pilar y Zona Norte 2025 | Restauración Profesional de Muebles de Madera - Arenados Lucho",
  description: "Servicio especializado de arenado y restauración de muebles en Pilar, San Isidro y Zona Norte Buenos Aires 2025. Expertos en muebles de madera y metal. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado muebles Pilar",
    "arenado muebles San Isidro",
    "arenado muebles Zona Norte", 
    "restauracion muebles Buenos Aires",
    "arenado muebles madera",
    "arenado muebles metal",
    "despintado muebles Pilar",
    "restauracion muebles madera",
    "arenado muebles Tigre",
    "arenado muebles Vicente López",
    "servicio muebles Zona Norte",
    "arenado muebles precio",
    "arenado muebles presupuesto",
    "arenado muebles 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Muebles",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arenadoslucho.com"),
  alternates: {
    canonical: "/servicios/arenado-de-muebles",
  },
  openGraph: {
    title: "Arenado de Muebles en Pilar y Zona Norte 2025 | Restauración Profesional",
    description: "Expertos en restauración y arenado de muebles de madera y metal en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito.",
    url: "https://arenadoslucho.com/servicios/arenado-de-muebles",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-mueble-mesa-pilar-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de muebles profesional en Pilar y Zona Norte - Restauración de mesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Muebles en Pilar y Zona Norte 2025 | Restauración Profesional",
    description: "Expertos en restauración de muebles de madera y metal en Pilar, San Isidro y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-mueble-mesa-pilar-despues.webp"],
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
  category: "furniture",
  classification: "Arenado y Restauración de Muebles",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Muebles en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado y restauración de muebles de madera y metal en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado, Muebles, Restauración, Madera, Metal, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://arenadoslucho.com/servicios/arenado-de-muebles",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoMueblesLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Muebles",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado y restauración de muebles de madera y metal en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en restauración de muebles.",
            "url": "https://arenadoslucho.com/servicios/arenado-de-muebles",
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
              "reviewCount": "120",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Muebles",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Muebles de Madera",
                    "description": "Restauración y arenado de muebles de madera para preparar para barnizado"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Muebles Metálicos", 
                    "description": "Tratamiento profesional para muebles de metal y estructuras metálicas"
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
                "name": "Arenado de Muebles",
                "item": "https://arenadoslucho.com/servicios/arenado-de-muebles"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

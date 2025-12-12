import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Barcos en Tigre y Zona Norte 2025 | Servicio Naval Profesional - Arenados Lucho",
  description: "Servicio especializado de arenado naval en Tigre, San Fernando y Zona Norte Buenos Aires 2025. Expertos en barcos, yates y embarcaciones. Eliminación de incrustaciones marinas. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado barcos Tigre",
    "arenado barcos San Fernando",
    "arenado barcos Zona Norte",
    "arenado naval Buenos Aires",
    "arenado yates Tigre",
    "arenado embarcaciones",
    "incrustaciones marinas",
    "arenado cascos barcos",
    "arenado barcos Vicente López",
    "arenado barcos San Isidro",
    "servicio naval Zona Norte",
    "arenado barcos precio",
    "arenado barcos presupuesto",
    "arenado barcos 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado Naval",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arenadoslucho.com"),
  alternates: {
    canonical: "/servicios/arenado-de-barcos",
  },
  openGraph: {
    title: "Arenado de Barcos en Tigre y Zona Norte 2025 | Servicio Naval Profesional",
    description: "Expertos en arenado naval para barcos, yates y embarcaciones en Tigre, San Fernando y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito.",
    url: "https://arenadoslucho.com/servicios/arenado-de-barcos",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-barco-tigre-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de barcos profesional en Tigre y Zona Norte - Servicio naval",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Barcos en Tigre y Zona Norte 2025 | Servicio Naval Profesional",
    description: "Expertos en arenado naval para barcos, yates y embarcaciones en Tigre, San Fernando y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-barco-tigre-despues.webp"],
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
  category: "maritime",
  classification: "Arenado Naval y Servicios Marítimos",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Tigre, Buenos Aires",
    "geo.position": "-34.4233;-58.5879",
    "ICBM": "-34.4233, -58.5879",
    "DC.title": "Arenado de Barcos en Tigre y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado naval para barcos, yates y embarcaciones en Tigre, San Fernando y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado Naval, Barcos, Yates, Embarcaciones, Incrustaciones Marinas, Tigre, San Fernando, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Tigre, San Fernando, Vicente López, San Isidro, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://arenadoslucho.com/servicios/arenado-de-barcos",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoBarcosLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado Naval",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado naval para barcos, yates y embarcaciones en Tigre, San Fernando y Zona Norte de Buenos Aires. Más de 15 años de experiencia en servicios navales.",
            "url": "https://arenadoslucho.com/servicios/arenado-de-barcos",
            "telephone": "+54 9 11 2378-7750",
            "email": "arenadoslucho@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tigre",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR",
              "postalCode": "1648"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.4233",
              "longitude": "-58.5879"
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
                "name": "Tigre"
              },
              {
                "@type": "City", 
                "name": "San Fernando"
              },
              {
                "@type": "City",
                "name": "Vicente López"
              },
              {
                "@type": "City",
                "name": "San Isidro"
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
                "latitude": "-34.4233",
                "longitude": "-58.5879"
              },
              "geoRadius": "30000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "90",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado Naval",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Barcos y Yates",
                    "description": "Servicio profesional de arenado para barcos, yates y embarcaciones deportivas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Eliminación de Incrustaciones Marinas", 
                    "description": "Tratamiento especializado para eliminar incrustaciones marinas y preparar para pintura"
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
                "name": "Arenado de Barcos",
                "item": "https://arenadoslucho.com/servicios/arenado-de-barcos"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

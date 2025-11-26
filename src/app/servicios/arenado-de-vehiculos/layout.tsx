import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Vehículos en Pilar y Zona Norte 2025 | Servicio Automotriz Profesional - Arenados Lucho",
  description: "Servicio especializado de arenado automotriz en Pilar, San Isidro y Zona Norte Buenos Aires 2025. Expertos en vehículos, autos, camionetas y chasis. Eliminación de óxido y preparación para pintura. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado vehiculos Pilar",
    "arenado vehiculos San Isidro",
    "arenado vehiculos Zona Norte",
    "arenado autos Buenos Aires",
    "arenado camionetas Pilar",
    "arenado chasis",
    "eliminacion oxido vehiculos",
    "arenado vehiculos Tigre",
    "arenado vehiculos Vicente López",
    "arenado vehiculos San Fernando",
    "servicio automotriz Zona Norte",
    "arenado vehiculos precio",
    "arenado vehiculos presupuesto",
    "arenado vehiculos 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado Automotriz",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-vehiculos",
  },
  openGraph: {
    title: "Arenado de Vehículos en Pilar y Zona Norte 2025 | Servicio Automotriz Profesional",
    description: "Expertos en arenado automotriz para vehículos, autos y camionetas en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-vehiculo-san-fernando-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de vehículos profesional en Pilar y Zona Norte - Servicio automotriz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Vehículos en Pilar y Zona Norte 2025 | Servicio Automotriz Profesional",
    description: "Expertos en arenado automotriz para vehículos, autos y camionetas en Pilar, San Isidro y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-vehiculo-san-fernando-despues.webp"],
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
  category: "automotive",
  classification: "Arenado Automotriz y Servicios de Vehículos",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Vehículos en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado automotriz para vehículos, autos, camionetas y chasis en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado Automotriz, Vehículos, Autos, Camionetas, Chasis, Eliminación Óxido, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoVehiculosLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado Automotriz",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado automotriz para vehículos, autos, camionetas y chasis en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en servicios automotrices.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos",
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
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado Automotriz",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Autos y Camionetas",
                    "description": "Servicio profesional de arenado para vehículos y preparación para pintura automotriz"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Chasis y Estructuras", 
                    "description": "Tratamiento especializado para chasis y estructuras metálicas de vehículos"
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
                "name": "Arenado de Vehículos",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-vehiculos"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado de Fachadas en Pilar y Zona Norte 2025 | Limpieza Profesional de Edificios - Arenados Lucho",
  description: "Servicio premium de arenado y limpieza de fachadas en Pilar, San Isidro y Zona Norte Buenos Aires 2025. Expertos certificados con 15 años de experiencia. Presupuesto gratuito y garantía por escrito.",
  keywords: [
    "arenado fachadas Pilar",
    "arenado fachadas San Isidro", 
    "arenado fachadas Zona Norte",
    "limpieza fachadas Buenos Aires",
    "restauracion fachadas Pilar",
    "pintura exterior fachadas",
    "arenado fachadas residenciales",
    "arenado fachadas comerciales",
    "limpieza edificios Pilar",
    "arenado fachadas Tigre",
    "arenado fachadas Vicente López",
    "servicio fachadas Zona Norte",
    "arenado fachadas precio",
    "arenado fachadas presupuesto",
    "arenado fachadas 2025"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Fachadas",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  alternates: {
    canonical: "/servicios/arenado-de-fachadas",
  },
  openGraph: {
    title: "Arenado de Fachadas en Pilar y Zona Norte 2025 | Servicio Premium Certificado",
    description: "Expertos en limpieza y restauración de fachadas en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia. Presupuesto gratuito y garantía por escrito.",
    url: "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/proyectos/arenado-fachada-san-martin-despues.webp",
        width: 1200,
        height: 630,
        alt: "Arenado de fachadas profesional en Pilar y Zona Norte - Antes y después",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado de Fachadas en Pilar y Zona Norte 2025 | Servicio Premium",
    description: "Expertos en limpieza de fachadas residenciales y comerciales en Pilar, San Isidro y Zona Norte. 15 años de experiencia certificada.",
    images: ["/images/proyectos/arenado-fachada-san-martin-despues.webp"],
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
  category: "construction",
  classification: "Arenado y Limpieza de Fachadas",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Arenado de Fachadas en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Servicio profesional de arenado y limpieza de fachadas residenciales y comerciales en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Arenado, Fachadas, Limpieza, Restauración, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, Zona Norte, Buenos Aires",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function ArenadoFachadasLayout({
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
            "name": "Arenados Lucho - Expertos en Arenado de Fachadas",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado y limpieza de fachadas en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en restauración de edificios residenciales y comerciales.",
            "url": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas",
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
              "reviewCount": "140",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Arenado de Fachadas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas Residenciales",
                    "description": "Limpieza y preparación de fachadas de casas y edificios residenciales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Arenado de Fachadas Comerciales", 
                    "description": "Tratamiento profesional para fachadas de locales y edificios comerciales"
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
                "name": "Arenado de Fachadas",
                "item": "https://www.arenadoslucho.com.ar/servicios/arenado-de-fachadas"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Arenado en Pilar y Zona Norte 2025 | FAQ - Arenados Lucho",
  description: "Respuestas completas a las preguntas más frecuentes sobre servicios de arenado en Pilar y Zona Norte. Información sobre precios, técnicas, garantías, cobertura y procesos de arenado profesional.",
  keywords: [
    "preguntas frecuentes arenado",
    "FAQ arenado Pilar",
    "dudas arenado Zona Norte",
    "precio arenado pileta",
    "cuanto cuesta arenado",
    "arenado garantía",
    "arenado industrial preguntas",
    "arenado barcos dudas",
    "arenado vehículos información",
    "arenado muebles consultas",
    "arenado fachadas preguntas",
    "sandblasting FAQ",
    "granallado preguntas frecuentes",
    "arenado presupuesto",
    "arenado cobertura servicio"
  ],
  authors: [{ name: "Arenados Lucho" }],
  creator: "Arenados Lucho - Expertos en Arenado",
  publisher: "Arenados Lucho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arenadoslucho.com"),
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes sobre Arenado en Pilar y Zona Norte 2025 | FAQ",
    description: "Respuestas completas a las preguntas más frecuentes sobre servicios de arenado en Pilar y Zona Norte. Información sobre precios, técnicas y garantías.",
    url: "https://arenadoslucho.com/preguntas-frecuentes",
    siteName: "Arenados Lucho",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Preguntas Frecuentes sobre Arenado - Arenados Lucho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes sobre Arenado en Pilar y Zona Norte 2025",
    description: "Respuestas completas a las preguntas más frecuentes sobre servicios de arenado profesional en Pilar y Zona Norte.",
    images: ["/images/logo.webp"],
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
  category: "faq",
  classification: "Preguntas Frecuentes y FAQ",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Pilar, Buenos Aires",
    "geo.position": "-34.4359;-58.7014",
    "ICBM": "-34.4359, -58.7014",
    "DC.title": "Preguntas Frecuentes sobre Arenado en Pilar y Zona Norte Buenos Aires 2025",
    "DC.description": "Respuestas completas a las preguntas más frecuentes sobre servicios de arenado profesional en Pilar, San Isidro y Zona Norte de Buenos Aires.",
    "DC.subject": "Preguntas Frecuentes, FAQ, Arenado, Sandblasting, Granallado, Pilar, San Isidro, Zona Norte",
    "DC.language": "es",
    "DC.creator": "Arenados Lucho",
    "DC.publisher": "Arenados Lucho",
    "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
    "DC.type": "FAQPage",
    "DC.format": "text/html",
    "DC.identifier": "https://arenadoslucho.com/preguntas-frecuentes",
    "DC.rights": "Copyright Arenados Lucho",
    "DC.date.created": "2025-01-27",
    "DC.date.modified": "2025-01-27",
  },
}

export default function PreguntasFrecuentesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Preguntas Frecuentes sobre Arenado en Pilar y Zona Norte",
            "description": "Respuestas completas a las preguntas más frecuentes sobre servicios de arenado profesional en Pilar, San Isidro y Zona Norte de Buenos Aires.",
            "url": "https://arenadoslucho.com/preguntas-frecuentes",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es el arenado y cómo funciona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El arenado (también conocido como sandblasting o granallado) es un proceso de limpieza que utiliza materiales abrasivos a alta presión para eliminar pintura, óxido, suciedad y otros contaminantes de superficies."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta arenar una pileta en Pilar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del arenado de piletas en Pilar depende del tamaño, estado y accesibilidad. Piletas pequeñas (4x8m) desde $80.000, medianas (6x12m) desde $120.000, y grandes (8x16m) desde $180.000."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta el arenado industrial?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del arenado industrial varía según el tamaño, complejidad y accesibilidad. Proyectos pequeños desde $150.000, medianos desde $300.000, y grandes desde $500.000."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta arenar un barco en Tigre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del arenado de barcos en Tigre depende del tamaño y estado del casco. Lanchas pequeñas (6-8m) desde $120.000, yates medianos (10-12m) desde $200.000, y embarcaciones grandes (15m+) desde $350.000."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta arenar un auto en Pilar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del arenado de vehículos en Pilar depende del tamaño y estado. Autos pequeños desde $80.000, camionetas desde $120.000, y vehículos grandes desde $180.000."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta arenar fachadas en Zona Norte?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El precio del arenado de fachadas en Zona Norte depende del tamaño y altura. Fachadas pequeñas (50m²) desde $100.000, medianas (100m²) desde $180.000, y grandes (200m²+) desde $300.000."
                }
              },
              {
                "@type": "Question",
                "name": "¿En qué zonas trabajan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trabajamos principalmente en Pilar, Zona Norte (San Isidro, Tigre, Vicente López, José C. Paz, Malvinas Argentinas, San Miguel, General San Martín, San Fernando, Cardales, Zárate), Zona Oeste (General Rodríguez, Moreno, Ituzaingó, Morón, Hurlingham, 3 de Febrero) y CABA."
                }
              },
              {
                "@type": "Question",
                "name": "¿Ofrecen garantía en sus servicios de arenado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, ofrecemos garantía completa en todos nuestros proyectos. La duración de la garantía varía según el tipo de servicio (6 meses para piletas, 1 año para industrial), pero siempre garantizamos la calidad de nuestro proyecto y la satisfacción del cliente."
                }
              }
            ]
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
            "name": "Arenados Lucho - Expertos en Arenado",
            "image": "/images/logo.webp",
            "description": "Servicio profesional de arenado en Pilar, San Isidro y Zona Norte de Buenos Aires. Más de 15 años de experiencia en arenado de piletas, industrias, barcos, vehículos, muebles y fachadas.",
            "url": "https://arenadoslucho.com/preguntas-frecuentes",
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
                "name": "Preguntas Frecuentes",
                "item": "https://arenadoslucho.com/preguntas-frecuentes"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}


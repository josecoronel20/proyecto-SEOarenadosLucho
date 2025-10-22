import type { Metadata } from "next"
import { getAllCategories } from "@/data/blog"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categories = getAllCategories()
  const category = categories.find(c => c.slug === params.slug)

  if (!category) {
    return {
      title: "Categoría no encontrada - Blog Arenados Lucho",
      description: "La categoría solicitada no fue encontrada en nuestro blog de arenado.",
    }
  }

  return {
    title: `${category.name} | Blog Arenado Pilar 2025 - Arenados Lucho`,
    description: `Artículos especializados sobre ${category.name.toLowerCase()} en Pilar y Zona Norte. Consejos profesionales, guías técnicas y casos de éxito sobre arenado y mantenimiento.`,
    keywords: [
      "blog arenado Pilar",
      "consejos arenado",
      category.name.toLowerCase(),
      "arenado " + category.name.toLowerCase(),
      "sandblasting Zona Norte",
      "guías técnicas arenado",
      "consejos profesionales",
      "técnicas arenado",
      "blog sandblasting",
      "blog granallado",
      "mantenimiento " + category.name.toLowerCase()
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
      canonical: `/blog/categoria/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Blog Arenado Pilar 2025`,
      description: `Artículos especializados sobre ${category.name.toLowerCase()} en Pilar y Zona Norte. Consejos profesionales, guías técnicas y casos de éxito sobre arenado y mantenimiento.`,
      url: `https://arenadoslucho.com/blog/categoria/${category.slug}`,
      siteName: "Arenados Lucho",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: "/images/logo.webp",
          width: 1200,
          height: 630,
          alt: `${category.name} - Blog Arenado Pilar`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | Blog Arenado Pilar 2025`,
      description: `Artículos especializados sobre ${category.name.toLowerCase()} en Pilar y Zona Norte. Consejos profesionales, guías técnicas y casos de éxito.`,
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
    category: "blog",
    classification: "Categoría de Blog",
    other: {
      "geo.region": "AR-C",
      "geo.placename": "Pilar, Buenos Aires",
      "geo.position": "-34.4359;-58.7014",
      "ICBM": "-34.4359, -58.7014",
      "DC.title": `${category.name} | Blog Arenado Pilar 2025`,
      "DC.description": `Artículos especializados sobre ${category.name.toLowerCase()} en Pilar, San Isidro y Zona Norte de Buenos Aires.`,
      "DC.subject": `Blog, Arenado, ${category.name}, Sandblasting, Granallado, Consejos, Guías Técnicas, Pilar, San Isidro, Zona Norte`,
      "DC.language": "es",
      "DC.creator": "Arenados Lucho",
      "DC.publisher": "Arenados Lucho",
      "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
      "DC.type": "BlogCategory",
      "DC.format": "text/html",
      "DC.identifier": `https://arenadoslucho.com/blog/categoria/${category.slug}`,
      "DC.rights": "Copyright Arenados Lucho",
      "DC.date.created": "2025-01-27",
      "DC.date.modified": "2025-01-27",
    },
  }
}

export default function BlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Blog Category */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog Category",
            "description": "Artículos especializados por categoría en nuestro blog de arenado",
            "url": "https://arenadoslucho.com/blog/categoria/[slug]",
            "isPartOf": {
              "@type": "Blog",
              "name": "Blog Arenado Pilar - Consejos Profesionales Arenados Lucho",
              "url": "https://arenadoslucho.com/blog"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Arenados Lucho",
              "url": "https://arenadoslucho.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://arenadoslucho.com/images/logo.webp"
              }
            },
            "inLanguage": "es-AR"
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
                "name": "Blog",
                "item": "https://arenadoslucho.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Categoría",
                "item": "https://arenadoslucho.com/blog/categoria/[slug]"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}


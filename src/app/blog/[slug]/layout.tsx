import type { Metadata } from "next"
import { getAllPosts } from "@/data/blog"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = getAllPosts()
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado - Blog Arenados Lucho",
      description: "El artículo solicitado no fue encontrado en nuestro blog de arenado.",
    }
  }

  return {
    title: `${post.title} | Blog Arenado Pilar 2025 - Arenados Lucho`,
    description: post.excerpt,
    keywords: [
      "blog arenado Pilar",
      "consejos arenado",
      post.category.toLowerCase(),
      "arenado " + post.category.toLowerCase(),
      "sandblasting Zona Norte",
      "guías técnicas arenado",
      "consejos profesionales",
      "técnicas arenado",
      "blog sandblasting",
      "blog granallado"
    ],
    authors: [{ name: post.author }],
    creator: "Arenados Lucho - Expertos en Arenado",
    publisher: "Arenados Lucho",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://arenadoslucho.com"),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Blog Arenado Pilar 2025`,
      description: post.excerpt,
      url: `https://arenadoslucho.com/blog/${post.slug}`,
      siteName: "Arenados Lucho",
      locale: "es_AR",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: "/images/logo.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blog Arenado Pilar 2025`,
      description: post.excerpt,
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
    classification: "Artículo de Blog",
    other: {
      "geo.region": "AR-C",
      "geo.placename": "Pilar, Buenos Aires",
      "geo.position": "-34.4359;-58.7014",
      "ICBM": "-34.4359, -58.7014",
      "DC.title": `${post.title} | Blog Arenado Pilar 2025`,
      "DC.description": post.excerpt,
      "DC.subject": `Blog, Arenado, ${post.category}, Sandblasting, Granallado, Consejos, Guías Técnicas, Pilar, San Isidro, Zona Norte`,
      "DC.language": "es",
      "DC.creator": "Arenados Lucho",
      "DC.publisher": "Arenados Lucho",
      "DC.coverage": "Pilar, San Isidro, Tigre, Vicente López, San Fernando, Zona Norte, Buenos Aires",
      "DC.type": "Article",
      "DC.format": "text/html",
      "DC.identifier": `https://arenadoslucho.com/blog/${post.slug}`,
      "DC.rights": "Copyright Arenados Lucho",
      "DC.date.created": post.date,
      "DC.date.modified": post.date,
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Blog Post Title",
            "description": "Blog post description",
            "url": "https://arenadoslucho.com/blog/[slug]",
            "datePublished": "2025-01-27",
            "dateModified": "2025-01-27",
            "author": {
              "@type": "Organization",
              "name": "Arenados Lucho",
              "url": "https://arenadoslucho.com"
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://arenadoslucho.com/blog/[slug]"
            },
            "inLanguage": "es-AR",
            "isPartOf": {
              "@type": "Blog",
              "name": "Blog Arenado Pilar - Consejos Profesionales Arenados Lucho",
              "url": "https://arenadoslucho.com/blog"
            }
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
                "name": "Artículo",
                "item": "https://arenadoslucho.com/blog/[slug]"
              }
            ]
          })
        }}
      />

      {children}
    </>
  )
}


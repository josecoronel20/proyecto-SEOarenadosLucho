import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { PROJECT } from "@/config/project";
import { Header } from "@/components/headerComponents/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const SITE_URL = "https://www.arenadoslucho.com.ar";
const LOGO_URL = `${SITE_URL}/images/logo-azul-arenados-lucho.png`;
const HERO_IMAGE_URL = `${SITE_URL}/images/portada-hero-arenados-lucho.webp`;

// Metadatos optimizados
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arenado profesional en Zona Norte, Oeste y CABA | Arenados Lucho",
  description:
    "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
  keywords: [
    ...PROJECT.seo.primaryKeywords,
    ...PROJECT.seo.secondaryKeywords,
    ...PROJECT.seo.longTailKeywords,
  ].join(", "),
  authors: [{ name: PROJECT.name }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/images/favicon.PNG",
    shortcut: "/images/favicon.PNG",
    apple: "/images/favicon.PNG",
  },
  openGraph: {
    title: "Arenado profesional en Zona Norte, Oeste y CABA | Arenados Lucho",
    description:
      "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: PROJECT.name,
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Arenados Lucho - Servicio profesional de arenado y sandblasting en Zona Norte, Oeste y CABA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado profesional en Zona Norte, Oeste y CABA | Arenados Lucho",
    description:
      "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
    images: [HERO_IMAGE_URL],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-AR": SITE_URL,
      es: SITE_URL,
      "x-default": SITE_URL,
    },
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
};

// Generar structured data de forma optimizada
function generateStructuredData() {
  const whatsappUrl = `https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, "")}`;
  const businessDescription =
    "Empresa líder en servicios de arenado y sandblasting en Zona Norte, Oeste y CABA con más de 20 años de experiencia. Especialistas en arenado de piscinas, muebles, estructuras metálicas y más. Servicio móvil a domicilio con equipos profesionales.";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: PROJECT.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: 300,
        height: 150,
      },
      description: businessDescription,
      foundingDate: "2003",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PROJECT.contact.phone,
        contactType: "customer service",
        availableLanguage: "Spanish",
        areaServed: "AR",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pilar",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      sameAs: [
        whatsappUrl,
        "https://www.facebook.com/arenadoslucho",
        "https://www.instagram.com/arenadoslucho",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: PROJECT.name,
      image: LOGO_URL,
      description: businessDescription,
      url: SITE_URL,
      telephone: PROJECT.contact.phone,
      email: PROJECT.contact.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pilar",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-34.4587",
        longitude: "-58.9142",
      },
      areaServed: [
        ...PROJECT.coverage.zonaNorte.map((city) => ({
          "@type": "City",
          name: city,
        })),
        ...PROJECT.coverage.zonaOeste.map((city) => ({
          "@type": "City",
          name: city,
        })),
        ...PROJECT.coverage.caba.map((city) => ({
          "@type": "Place",
          name: city,
        })),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Arenado",
        itemListElement: PROJECT.services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${SITE_URL}${service.href}`,
          },
          position: index + 1,
        })),
      },
      openingHours: "Mo-Sa 08:00-18:00",
      sameAs: [
        whatsappUrl,
        "https://www.facebook.com/arenadoslucho",
        "https://www.instagram.com/arenadoslucho",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "María González",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Excelente servicio de arenado de pileta. Muy profesionales, puntuales y el resultado fue perfecto. Lo recomiendo totalmente.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Carlos Rodríguez",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Arenaron mi auto y quedó como nuevo. Muy buen resultado, precios justos y servicio a domicilio. Volveré a contratarlos.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Ana Martínez",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Servicio de arenado industrial impecable. Trabajaron en nuestra fábrica y el resultado superó nuestras expectativas.",
        },
      ],
    },
  ];
}

const structuredData = generateStructuredData();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W63ZV9D9');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S1N9PL0G40"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S1N9PL0G40');
            `,
          }}
        />
        
        {/* Meta tags esenciales */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Estilos críticos inline para evitar FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: 0 0% 100%;
                --foreground: 0 0% 3.9%;
                --primary: 203 58% 22%;
              }
              * {
                box-sizing: border-box;
              }
              body {
                margin: 0;
                font-family: system-ui, -apple-system, sans-serif;
                background: hsl(var(--background));
              }
              .container {
                width: 100%;
                margin: 0 auto;
                padding: 0 1rem;
              }
            `,
          }}
        />

        {/* Preconnect para recursos externos */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W63ZV9D9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <GoogleAnalytics />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

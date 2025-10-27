import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { PROJECT } from "@/config/project";
import { Header } from "@/components/headerComponents/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.arenadoslucho.com.ar"),
  title: `Arenados Lucho | Arenado Pilar y Zona Norte - Sandblasting Profesional`,
  description: `Servicio profesional de arenado y sandblasting en Pilar y Zona Norte. 20+ años de experiencia. Presupuesto gratuito en 24h. ¡Cotizá ahora!`,
  keywords: `${PROJECT.seo.primaryKeywords.join(", ")}, ${PROJECT.seo.secondaryKeywords.join(", ")}, ${PROJECT.seo.longTailKeywords.join(", ")}`,
  authors: [{ name: PROJECT.name }],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: `Arenados Lucho | Arenado Pilar y Zona Norte - Sandblasting Profesional`,
    description: `Expertos en arenado y sandblasting en Pilar y Zona Norte. 20+ años de experiencia. Presupuesto gratuito en 24h. ¡Cotizá ahora!`,
    type: "website",
    locale: "es_AR",
    url: "https://www.arenadoslucho.com.ar",
    siteName: PROJECT.name,
    images: [
      {
        url: '/images/portada-hero-arenados-lucho.webp',
        width: 1200,
        height: 630,
        alt: 'Arenados Lucho - Servicio profesional de arenado y sandblasting en Pilar y Zona Norte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Arenados Lucho | Arenado Pilar y Zona Norte`,
    description: `Servicio profesional de arenado y sandblasting en Pilar y Zona Norte. 20+ años de experiencia. Presupuesto gratuito en 24h.`,
    images: ['/images/portada-hero-arenados-lucho.webp'],
  },
  alternates: {
    canonical: "https://www.arenadoslucho.com.ar"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

// Schema Markup para LocalBusiness y Organization
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": PROJECT.name,
    "url": "https://www.arenadoslucho.com.ar",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arenadoslucho.com.ar/images/logo-azul-arenados-lucho.png",
      "width": 300,
      "height": 150
    },
    "description": `Empresa líder en servicios de arenado y sandblasting en Pilar y Zona Norte con más de 20 años de experiencia. Especialistas en arenado de piscinas, muebles, estructuras metálicas y más. Servicio móvil a domicilio con equipos profesionales.`,
    "foundingDate": "2003",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PROJECT.contact.phone,
      "contactType": "customer service",
      "availableLanguage": "Spanish",
      "areaServed": "AR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pilar",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "sameAs": [
      `https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}`,
      "https://www.facebook.com/arenadoslucho",
      "https://www.instagram.com/arenadoslucho"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": PROJECT.name,
    "image": "https://www.arenadoslucho.com.ar/images/logo-azul-arenados-lucho.png",
    "description": `Empresa líder en servicios de arenado y sandblasting en Pilar y Zona Norte con más de 20 años de experiencia. Especialistas en arenado de piscinas, muebles, estructuras metálicas y más. Servicio móvil a domicilio con equipos profesionales.`,
    "url": "https://www.arenadoslucho.com.ar",
    "telephone": PROJECT.contact.phone,
    "email": PROJECT.contact.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pilar",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.4587",
      "longitude": "-58.9142"
    },
    "areaServed": [
      ...PROJECT.coverage.zonaNorte.map(city => ({
        "@type": "City",
        "name": city
      })),
      ...PROJECT.coverage.zonaOeste.map(city => ({
        "@type": "City", 
        "name": city
      })),
      ...PROJECT.coverage.caba.map(city => ({
        "@type": "Place",
        "name": city
      }))
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arenado",
      "itemListElement": PROJECT.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://www.arenadoslucho.com.ar${service.href}`
        },
        "position": index + 1
      }))
    },
    "openingHours": "Mo-Sa 08:00-18:00",
    "sameAs": [
      `https://wa.me/${PROJECT.contact.whatsapp.replace(/\s+/g, '')}`,
      "https://www.facebook.com/arenadoslucho",
      "https://www.instagram.com/arenadoslucho"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "María González"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excelente servicio de arenado de pileta. Muy profesionales, puntuales y el resultado fue perfecto. Lo recomiendo totalmente."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carlos Rodríguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Arenaron mi auto y quedó como nuevo. Muy buen trabajo, precios justos y servicio a domicilio. Volveré a contratarlos."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ana Martínez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Servicio de arenado industrial impecable. Trabajaron en nuestra fábrica y el resultado superó nuestras expectativas."
      }
    ]
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="alternate" hrefLang="es-ar" href="https://www.arenadoslucho.com.ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root{--background:0 0% 100%;--foreground:0 0% 3.9%;--primary:203 58% 22%}
            *{box-sizing:border-box}
            body{margin:0;font-family:system-ui;background:hsl(var(--background))}
            .container{width:100%;margin:0 auto;padding:0 1rem}
            .hero-section{background:linear-gradient(135deg,#f0f9ff 0%,#ffffff 50%,#f8fafc 100%);padding:5rem 0}
            .hero-title{font-size:2rem;font-weight:800;color:#1f2937;margin-bottom:1.5rem}
            .btn-primary{background:#18415a;color:white;padding:0.75rem 1.5rem;border-radius:0.5rem;text-decoration:none;display:inline-flex;align-items:center}
          `
        }} />
        <link 
  rel="preload" 
  href="/_next/static/css/app/globals.css" 
  as="style" 
/>
<script dangerouslySetInnerHTML={{
  __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const link = document.querySelector('link[href="/_next/static/css/app/globals.css"]');
      if (link) {
        link.rel = 'stylesheet';
      }
    });
  `
}} />
<noscript><link rel="stylesheet" href="/_next/static/css/app/globals.css" /></noscript>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import WppBtn from "@/components/common/WppBtn";

const SITE_URL = "https://www.arenadoslucho.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    template: "%s | Arenados Lucho",
  },
  description:
    "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
  keywords:
    "arenado, sandblasting, preparación de superficies, arenado industrial, arenado particular, Buenos Aires",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    description:
      "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Arenados Lucho",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    description:
      "Arenado profesional y preparación de superficies para pintura y revestimiento. Equipos propios. Presupuesto rápido y atención por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured Data para SEO
function generateStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Arenados Lucho",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-solo-azul.png`,
      description: "Empresa líder en servicios de arenado y sandblasting en Buenos Aires. Especialistas en arenado de piscinas, estructuras metálicas, vehículos y más.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
        areaServed: "AR",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Arenados Lucho",
      image: `${SITE_URL}/images/logo-solo-azul.png`,
      description: "Servicios profesionales de arenado y preparación de superficies en Buenos Aires",
      url: SITE_URL,
      email: "arenadoslucho@hotmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: [
        { "@type": "City", name: "Buenos Aires" },
      ],
      openingHours: "Mo-Sa 08:00-18:00",
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
        {/* Inicializar dataLayer ANTES de GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`,
          }}
        />
        
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

        {/* Meta tags esenciales */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Preconnect para recursos externos */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W63ZV9D9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Header />
        <WppBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}

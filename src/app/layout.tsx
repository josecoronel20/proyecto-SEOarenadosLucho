import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import WppBtn from "@/components/common/WppBtn";
import { SITE_URL, BUSINESS, BUSINESS_ID } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    template: "%s | Arenados Lucho",
  },
  description:
    "Arenado en Buenos Aires: dejamos estructuras, tanques, fachadas y piletas listas para pintar o revestir. Trabajamos in situ, con equipos propios y presupuesto sin costo.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    description:
      "Arenado en Buenos Aires: dejamos estructuras, tanques, fachadas y piletas listas para pintar o revestir. Trabajamos in situ, con equipos propios y presupuesto sin costo.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Arenados Lucho",
    images: [
      {
        url: BUSINESS.images[0],
        alt: "Arenado por Arenados Lucho en Buenos Aires y AMBA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arenado industrial profesional en Buenos Aires | Arenados Lucho",
    description:
      "Arenado en Buenos Aires: dejamos estructuras, tanques, fachadas y piletas listas para pintar o revestir. Trabajamos in situ, con equipos propios y presupuesto sin costo.",
    images: [BUSINESS.images[0]],
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

export const viewport: Viewport = {
  themeColor: "#18415A",
};

// Structured Data para SEO
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        inLanguage: "es-AR",
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": BUSINESS_ID,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: BUSINESS.logo,
        image: BUSINESS.images,
        email: BUSINESS.email,
        description: BUSINESS.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressRegion: "Buenos Aires",
          addressCountry: "AR",
        },
        areaServed: [
          { "@type": "City", name: "Buenos Aires" },
          { "@type": "AdministrativeArea", name: "Gran Buenos Aires (AMBA)" },
        ],
        openingHours: BUSINESS.openingHours,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: BUSINESS.email,
          availableLanguage: "Spanish",
          areaServed: "AR",
        },
      },
    ],
  };
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

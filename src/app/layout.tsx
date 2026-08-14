import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
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

/**
 * Archivo, de Omnibus-Type — una fundición de Buenos Aires.
 *
 * `next/font` la auto-aloja y la precarga: no sale un pedido a Google, no hay
 * salto de texto al cargar y no se paga latencia de tercero. Una sola familia
 * con tres pesos cubre titulares y cuerpo; 500 y 700 son los que hacen la voz
 * de display, 400 el cuerpo.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={archivo.variable}>
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
      <body className="antialiased bg-papel text-tinta">
        {/* ==================================================================
             CONTRATO DE DIRECCIÓN — Arenados Lucho, 14/08/2026
             Semilla de concepto: 7fb7019e · modo persuade · índice asignado 4

             TESIS
             El sitio tiene que verse como el papel que este oficio de verdad
             genera: un catálogo de repuestos, un manual de mantenimiento. Papel
             técnico, dos tintas, todo tabulado. Eso vende oficio; las tarjetitas
             redondeadas con ícono venden software.

             MUNDO PROPIO
             Manual de mantenimiento y catálogo de repuestos industrial impreso
             en offset barato. Sus materiales saturados, no su papel: el naranja
             de máquina (#E8500F) que llevan los compresores y la señalética de
             planta, y el negro de imprenta. Filetes finos que dividen columnas.
             Números de ítem al margen. Tablas de especificación en vez de
             cuadros decorativos. Nada de crema, pergamino ni sombras suaves.

             HISTORIA
             Alguien que arena hace veinte años tiene el trabajo tabulado en la
             cabeza: qué material, qué superficie, cuánto tarda. El sitio muestra
             ese cuaderno abierto. La página se lee de arriba abajo como una
             ficha, y termina en un solo renglón de acción: mandá la foto.

             PRIMER VIEWPORT
             Titular condensado a sangre con el trabajo y la zona, encima de la
             foto real del arenado. Debajo, sin scroll, la franja de datos duros
             tabulada (equipo propio, AMBA, m²/día) y el renglón de WhatsApp.
             Ninguna tarjeta.

             FORMA
             Retícula de catálogo con filetes, no cuadrícula de tarjetas. Archivo
             (Omnibus-Type, Buenos Aires — el tipo viene de la misma ciudad que
             el negocio y está dibujado para impresos densos como este; ninguna
             otra cara satisface las dos cosas). Dos tintas medidas: sobre
             naranja va tinta negra, nunca blanco.

             DESAFIANTES REPARTIDOS POR LA SEMILLA — juicio
             · Revista de teletexto — COMPITE. Su retícula de celdas fijas y su
               paleta de pocas tintas planas resuelven bien la densidad, pero la
               nostalgia de pantalla contradice a un negocio que va a tu casa con
               un compresor. DECLINADA. Disciplina donada: el ancho de columna
               fijo, que acá se vuelve el filete que alinea todas las fichas.
             · Estante de juguete en caja-ventana — DECLINADA, no identifica al
               público. Disciplina donada: la ficha de producto al pie de cada
               unidad, que acá se vuelve la línea de datos bajo cada caso.
             · Carátula de casete de calabozo — DECLINADA, el amateurismo
               deliberado le resta a un oficio que vende confianza. Disciplina
               donada: el bloque de texto mecanografiado a ancho fijo, que acá
               fija la medida de lectura.
             · Pigmento flotado de ebru, hoja plegada de Miura, hall de azulejos
               — DECLINADAS: ninguna aclara qué se vende. Disciplina donada del
               hall de azulejos: la repetición modular como ritmo de página.

             FINISH
             unreviewed and undocumented is unfinished; this build ends with the
             finish review, the verdict, and DESIGN.md
        ================================================================== */}

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

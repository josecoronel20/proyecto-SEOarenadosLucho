import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Presupuesto Rápido de Arenado | Arenados Lucho - Pilar",
  description: "Presupuesto gratuito de arenado en Pilar y Zona Norte. Respuesta en 24h. ¡Cotizá ahora!",
  keywords: [
    "presupuesto arenado Pilar",
    "cotización sandblasting Zona Norte", 
    "presupuesto gratuito arenado",
    "arenado presupuesto Buenos Aires",
    "cotización arenado pileta",
    "presupuesto arenado vehículos",
    "arenado fachadas presupuesto",
    "servicio móvil arenado Pilar"
  ],
  openGraph: {
    title: "Presupuesto Rápido de Arenado | Arenados Lucho - Pilar",
    description: "Presupuesto gratuito de arenado en Pilar y Zona Norte. Respuesta en 24h. ¡Cotizá ahora!",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presupuesto Rápido de Arenado | Arenados Lucho - Pilar",
    description: "Presupuesto gratuito de arenado en Pilar y Zona Norte. Respuesta en 24h. ¡Cotizá ahora!",
  },
  alternates: {
    canonical: "/presupuesto-rapido",
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
  },
}

export default function PresupuestoRapidoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

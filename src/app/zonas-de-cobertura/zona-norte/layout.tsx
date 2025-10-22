import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Zona Norte | Pilar, San Isidro, Tigre - Arenados Lucho",
  description: "Servicio de arenado móvil en Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando y más. Presupuesto gratuito. Respuesta en 24h.",
  keywords: [
    "arenado Pilar",
    "arenado San Isidro", 
    "arenado Tigre",
    "arenado Vicente López",
    "arenado San Fernando",
    "arenado Zona Norte",
    "sandblasting Pilar",
    "arenado José C. Paz",
    "arenado Malvinas Argentinas"
  ],
  openGraph: {
    title: "Arenado en Zona Norte | Arenados Lucho",
    description: "Servicio de arenado móvil en Zona Norte: Pilar, San Isidro, Tigre y más. Presupuesto gratuito.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte",
  },
}

export default function ZonaNorteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

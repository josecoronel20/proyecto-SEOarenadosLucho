import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Zárate | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Zárate. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Zárate.",
  keywords: [
    "arenado Zárate",
    "sandblasting Zárate", 
    "arenado de piletas Zárate",
    "arenado de fachadas Zárate",
    "arenado de vehículos Zárate",
    "arenado de muebles Zárate",
    "arenado residencial Zárate",
    "arenado comercial Zárate",
    "granallado Zárate",
    "limpieza profunda Zárate",
    "servicio móvil Zárate",
    "presupuesto arenado Zárate"
  ],
  openGraph: {
    title: "Arenado en Zárate | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Zárate. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/zarate",
  },
}

export default function ZarateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

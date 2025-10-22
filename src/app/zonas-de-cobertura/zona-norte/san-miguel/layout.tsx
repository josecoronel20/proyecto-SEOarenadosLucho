import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en San Miguel | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en San Miguel. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en San Miguel.",
  keywords: [
    "arenado San Miguel",
    "sandblasting San Miguel", 
    "arenado de piletas San Miguel",
    "arenado de fachadas San Miguel",
    "arenado de vehículos San Miguel",
    "arenado de muebles San Miguel",
    "arenado residencial San Miguel",
    "arenado comercial San Miguel",
    "granallado San Miguel",
    "limpieza profunda San Miguel",
    "servicio móvil San Miguel",
    "presupuesto arenado San Miguel"
  ],
  openGraph: {
    title: "Arenado en San Miguel | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en San Miguel. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/san-miguel",
  },
}

export default function SanMiguelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

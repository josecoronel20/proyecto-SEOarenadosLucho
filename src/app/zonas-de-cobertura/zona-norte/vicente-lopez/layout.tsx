import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Vicente López | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Vicente López. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Vicente López.",
  keywords: [
    "arenado Vicente López",
    "sandblasting Vicente López", 
    "arenado de piletas Vicente López",
    "arenado de fachadas Vicente López",
    "arenado de vehículos Vicente López",
    "arenado de muebles Vicente López",
    "arenado residencial Vicente López",
    "arenado comercial Vicente López",
    "granallado Vicente López",
    "limpieza profunda Vicente López",
    "servicio móvil Vicente López",
    "presupuesto arenado Vicente López"
  ],
  openGraph: {
    title: "Arenado en Vicente López | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Vicente López. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/vicente-lopez",
  },
}

export default function VicenteLopezLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en 3 de Febrero | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en 3 de Febrero. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en 3 de Febrero.",
  keywords: [
    "arenado 3 de Febrero",
    "sandblasting 3 de Febrero", 
    "arenado de piletas 3 de Febrero",
    "arenado de fachadas 3 de Febrero",
    "arenado de vehículos 3 de Febrero",
    "arenado de muebles 3 de Febrero",
    "arenado residencial 3 de Febrero",
    "arenado comercial 3 de Febrero",
    "granallado 3 de Febrero",
    "limpieza profunda 3 de Febrero",
    "servicio móvil 3 de Febrero",
    "presupuesto arenado 3 de Febrero"
  ],
  openGraph: {
    title: "Arenado en 3 de Febrero | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en 3 de Febrero. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/3-de-febrero",
  },
}

export default function TresDeFebreroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

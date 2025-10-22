import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Moreno | Servicio Residencial y Comercial de Sandblasting - Arenados Lucho",
  description: "Servicio de arenado móvil en Moreno. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Moreno.",
  keywords: [
    "arenado Moreno",
    "sandblasting Moreno", 
    "arenado de piletas Moreno",
    "arenado de fachadas Moreno",
    "arenado de vehículos Moreno",
    "arenado de muebles Moreno",
    "arenado residencial Moreno",
    "arenado comercial Moreno",
    "granallado Moreno",
    "limpieza profunda Moreno",
    "servicio móvil Moreno",
    "presupuesto arenado Moreno"
  ],
  openGraph: {
    title: "Arenado en Moreno | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Moreno. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/moreno",
  },
}

export default function MorenoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

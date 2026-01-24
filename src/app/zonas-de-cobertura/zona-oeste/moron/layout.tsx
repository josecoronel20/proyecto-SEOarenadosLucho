import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Morón | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Morón. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Morón.",
  keywords: [
    "arenado Morón",
    "sandblasting Morón", 
    "arenado de piletas Morón",
    "arenado de fachadas Morón",
    "arenado de vehículos Morón",
    "arenado de muebles Morón",
    "arenado residencial Morón",
    "arenado comercial Morón",
    "limpieza profunda Morón",
    "servicio móvil Morón",
    "presupuesto arenado Morón"
  ],
  openGraph: {
    title: "Arenado en Morón | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Morón. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/moron",
  },
}

export default function MoronLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

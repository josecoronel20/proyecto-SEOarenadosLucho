import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Hurlingham | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Hurlingham. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Hurlingham.",
  keywords: [
    "arenado Hurlingham",
    "sandblasting Hurlingham", 
    "arenado de piletas Hurlingham",
    "arenado de fachadas Hurlingham",
    "arenado de vehículos Hurlingham",
    "arenado de muebles Hurlingham",
    "arenado residencial Hurlingham",
    "arenado comercial Hurlingham",
    "granallado Hurlingham",
    "limpieza profunda Hurlingham",
    "servicio móvil Hurlingham",
    "presupuesto arenado Hurlingham"
  ],
  openGraph: {
    title: "Arenado en Hurlingham | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Hurlingham. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/hurlingham",
  },
}

export default function HurlinghamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Malvinas Argentinas | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Malvinas Argentinas. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Malvinas Argentinas.",
  keywords: [
    "arenado Malvinas Argentinas",
    "sandblasting Malvinas Argentinas", 
    "arenado de piletas Malvinas Argentinas",
    "arenado de fachadas Malvinas Argentinas",
    "arenado de vehículos Malvinas Argentinas",
    "arenado de muebles Malvinas Argentinas",
    "arenado residencial Malvinas Argentinas",
    "arenado comercial Malvinas Argentinas",
    "granallado Malvinas Argentinas",
    "limpieza profunda Malvinas Argentinas",
    "servicio móvil Malvinas Argentinas",
    "presupuesto arenado Malvinas Argentinas"
  ],
  openGraph: {
    title: "Arenado en Malvinas Argentinas | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Malvinas Argentinas. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/malvinas-argentinas",
  },
}

export default function MalvinasArgentinasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

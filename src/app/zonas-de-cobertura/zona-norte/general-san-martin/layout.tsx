import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en General San Martín | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en General San Martín. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en General San Martín.",
  keywords: [
    "arenado General San Martín",
    "sandblasting General San Martín", 
    "arenado de piletas General San Martín",
    "arenado de fachadas General San Martín",
    "arenado de vehículos General San Martín",
    "arenado de muebles General San Martín",
    "arenado residencial General San Martín",
    "arenado comercial General San Martín",
    "granallado General San Martín",
    "limpieza profunda General San Martín",
    "servicio móvil General San Martín",
    "presupuesto arenado General San Martín"
  ],
  openGraph: {
    title: "Arenado en General San Martín | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en General San Martín. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/general-san-martin",
  },
}

export default function GeneralSanMartinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

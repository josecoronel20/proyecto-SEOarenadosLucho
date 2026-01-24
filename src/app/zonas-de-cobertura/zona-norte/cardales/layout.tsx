import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Cardales | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Cardales. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Cardales.",
  keywords: [
    "arenado Cardales",
    "sandblasting Cardales", 
    "arenado de piletas Cardales",
    "arenado de fachadas Cardales",
    "arenado de vehículos Cardales",
    "arenado de muebles Cardales",
    "arenado residencial Cardales",
    "arenado comercial Cardales",
    "limpieza profunda Cardales",
    "servicio móvil Cardales",
    "presupuesto arenado Cardales"
  ],
  openGraph: {
    title: "Arenado en Cardales | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Cardales. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/cardales",
  },
}

export default function CardalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

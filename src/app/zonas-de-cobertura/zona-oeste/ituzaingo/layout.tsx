import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en Ituzaingó | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en Ituzaingó. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en Ituzaingó.",
  keywords: [
    "arenado Ituzaingó",
    "sandblasting Ituzaingó", 
    "arenado de piletas Ituzaingó",
    "arenado de fachadas Ituzaingó",
    "arenado de vehículos Ituzaingó",
    "arenado de muebles Ituzaingó",
    "arenado residencial Ituzaingó",
    "arenado comercial Ituzaingó",
    "limpieza profunda Ituzaingó",
    "servicio móvil Ituzaingó",
    "presupuesto arenado Ituzaingó"
  ],
  openGraph: {
    title: "Arenado en Ituzaingó | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en Ituzaingó. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/ituzaingo",
  },
}

export default function ItuzaingoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

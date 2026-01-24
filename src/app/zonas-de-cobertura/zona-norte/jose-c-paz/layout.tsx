import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en José C. Paz | Servicio Residencial y Comercial - Arenados Lucho",
  description: "Servicio de arenado móvil en José C. Paz. Arenado de piletas, fachadas, vehículos y muebles. Servicio residencial y comercial. Presupuesto gratuito. Especialistas en José C. Paz.",
  keywords: [
    "arenado José C. Paz",
    "sandblasting José C. Paz", 
    "arenado de piletas José C. Paz",
    "arenado de fachadas José C. Paz",
    "arenado de vehículos José C. Paz",
    "arenado de muebles José C. Paz",
    "arenado residencial José C. Paz",
    "arenado comercial José C. Paz",
    "limpieza profunda José C. Paz",
    "servicio móvil José C. Paz",
    "presupuesto arenado José C. Paz"
  ],
  openGraph: {
    title: "Arenado en José C. Paz | Arenados Lucho - Servicio Residencial y Comercial",
    description: "Servicio de arenado móvil en José C. Paz. Especialistas en servicios residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-norte/jose-c-paz",
  },
}

export default function JoseCPazLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

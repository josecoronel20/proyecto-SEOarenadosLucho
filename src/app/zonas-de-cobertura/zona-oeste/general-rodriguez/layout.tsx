import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arenado en General Rodríguez | Especialistas en Arenado Industrial - Arenados Lucho",
  description: "Servicio de arenado móvil en General Rodríguez. Especialistas en arenado industrial, maquinaria pesada, estructuras metálicas. Arenado de vehículos y piletas. Presupuesto gratuito.",
  keywords: [
    "arenado General Rodríguez",
    "sandblasting General Rodríguez", 
    "arenado industrial General Rodríguez",
    "arenado de maquinaria General Rodríguez",
    "arenado de estructuras General Rodríguez",
    "arenado de vehículos General Rodríguez",
    "arenado de piletas General Rodríguez",
    "limpieza profunda General Rodríguez",
    "servicio móvil General Rodríguez",
    "presupuesto arenado General Rodríguez",
    "arenado industrial Buenos Aires"
  ],
  openGraph: {
    title: "Arenado en General Rodríguez | Arenados Lucho - Especialistas Industriales",
    description: "Servicio de arenado móvil en General Rodríguez. Especialistas en arenado industrial y maquinaria pesada.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "/zonas-de-cobertura/zona-oeste/general-rodriguez",
  },
}

export default function GeneralRodriguezLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from "next"
import { og } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Casos de arenado en Buenos Aires y AMBA",
  description:
    "Casos de éxito de arenado: objetivo, retos, solución y resultado final de cada trabajo. Estructuras, tanques, fachadas y piletas en Buenos Aires y AMBA.",
  alternates: { canonical: "/casos-de-exito" },
  openGraph: og(
    "Casos de arenado en Buenos Aires y AMBA",
    "Trabajos reales de arenado: estructuras, tanques, fachadas y piletas listas para pintar o revestir."
  ),
}

export default function CasosDeExitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

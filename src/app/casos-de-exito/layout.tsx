import type { Metadata } from "next"
import { og } from "@/lib/siteConfig"

export const metadata: Metadata = {
  // Con un título fijo acá se cortaba el " | Arenados Lucho" del layout raíz para
  // todo lo que cuelga de /casos-de-exito: los casos salían sin marca en Google
  // (auditoría SEO del 14/09/2026). Hay que repetir el template en este nivel.
  title: {
    default: "Casos de arenado en Buenos Aires y AMBA",
    template: "%s | Arenados Lucho",
  },
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

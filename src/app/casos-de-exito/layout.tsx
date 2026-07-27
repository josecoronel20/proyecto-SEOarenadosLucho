import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de arenado en Buenos Aires y AMBA",
  description:
    "Casos de éxito de arenado: objetivo, retos, solución y resultado final de cada trabajo. Estructuras, tanques, fachadas y piletas en Buenos Aires y AMBA.",
  alternates: { canonical: "/casos-de-exito" },
}

export default function CasosDeExitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

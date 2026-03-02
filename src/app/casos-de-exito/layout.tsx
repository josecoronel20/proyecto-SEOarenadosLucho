import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Casos de éxito con resumen ejecutivo: objetivo, retos, solución y resultado medible. Arenado industrial en Buenos Aires.",
}

export default function CasosDeExitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

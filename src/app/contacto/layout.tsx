import type { Metadata } from "next"
import { og } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Contacto y presupuesto de arenado",
  description:
    "Escribinos por WhatsApp y te pasamos el presupuesto sin costo. Contanos qué necesitás arenar o mandanos una foto. Buenos Aires y AMBA.",
  alternates: { canonical: "/contacto" },
  openGraph: og(
    "Contacto y presupuesto de arenado",
    "Escribinos por WhatsApp: contanos tu proyecto o mandanos una foto y te pasamos presupuesto sin costo."
  ),
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}

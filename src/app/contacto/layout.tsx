import type { Metadata } from "next"
import { og } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Contacto y presupuesto de arenado",
  description:
    "Enviá tu solicitud con nombre, teléfono y descripción del proyecto. Nos contactamos por WhatsApp.",
  alternates: { canonical: "/contacto" },
  openGraph: og(
    "Contacto y presupuesto de arenado",
    "Contanos tu proyecto y te pasamos presupuesto sin costo. Respondemos por WhatsApp."
  ),
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}

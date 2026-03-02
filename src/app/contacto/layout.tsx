import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Enviá tu solicitud con nombre, teléfono y descripción del proyecto. Nos contactamos por WhatsApp.",
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}

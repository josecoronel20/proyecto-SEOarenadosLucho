import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto y presupuesto de arenado",
  description:
    "Enviá tu solicitud con nombre, teléfono y descripción del proyecto. Nos contactamos por WhatsApp.",
  alternates: { canonical: "/contacto" },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}

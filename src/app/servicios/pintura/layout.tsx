import type { Metadata } from "next"
import { generateServiceSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Servicio de Pintura en Pilar | Pintura Epoxi y Anticorrosiva 2025",
  description: "Servicio de pintura profesional en Pilar y Zona Norte. Pintura epoxi, anticorrosiva y para fachadas. Presupuesto gratuito en 24h. ¡Cotizá ahora!",
  keywords: [
    "pintura Pilar",
    "pintura San Isidro",
    "pintura Zona Norte",
    "pintura epoxi Buenos Aires",
    "pintura anticorrosiva",
    "pintura fachadas",
    "pintura automotriz",
    "servicio pintura Zona Norte",
    "pintura precio",
    "pintura presupuesto",
    "pintura 2025"
  ],
  alternates: {
    canonical: "/servicios/pintura",
  },
}

export default function PinturaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {(() => {
        const serviceSchema = generateServiceSchema("pintura", "Pilar")
        return serviceSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceSchema)
            }}
          />
        ) : null
      })()}

      {children}
    </>
  )
}


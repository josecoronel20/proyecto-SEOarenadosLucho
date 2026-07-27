import type { Metadata } from "next"
import { ServiciosHero } from "@/components/servicios/ServiciosHero"
import { AlcanceOperativo } from "@/components/servicios/AlcanceOperativo"
import { BloqueDiferencial } from "@/components/servicios/BloqueDiferencial"
import { AutoridadRapida } from "@/components/servicios/AutoridadRapida"
import { LogisticaCoordinacion } from "@/components/servicios/LogisticaCoordinacion"
import { RequisitosCliente } from "@/components/servicios/RequisitosCliente"
import { MitigacionRiesgo } from "@/components/servicios/MitigacionRiesgo"
import { CasoDestacado } from "@/components/servicios/CasoDestacado"
import CTASection from "@/components/common/CTASection"
import { SITE_URL, BUSINESS_ID } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Servicios de arenado industrial",
  description:
    "Arenado industrial y en obra en Buenos Aires: preparamos estructuras, tanques, fachadas y piletas, listas para pintar o revestir. Equipos propios, ~100 m² por día y coordinación en obra.",
  alternates: { canonical: "/servicios" },
}

const serviciosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Arenado industrial y en obra",
      serviceType: "Arenado y preparación de superficies",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenamos estructuras, tanques, hierros y fachadas en obra, planta o galpón, y las dejamos listas para pintar o revestir.",
    },
    {
      "@type": "Service",
      name: "Arenado de piletas y trabajos particulares",
      serviceType: "Arenado y preparación de superficies",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenamos piletas, fachadas y trabajos chicos in situ; sacamos pintura vieja y óxido y dejamos la superficie lista para repintar o revestir.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios` },
      ],
    },
  ],
}

export default function ServiciosPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchema) }}
      />
      <ServiciosHero />
      <BloqueDiferencial />
      <CasoDestacado />
      <AlcanceOperativo />
      <LogisticaCoordinacion />
      <AutoridadRapida />
      <RequisitosCliente />
      <MitigacionRiesgo />
      <CTASection/>
    </main>
  )
}

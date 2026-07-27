import type { Metadata } from "next"
import { ServiciosHero } from "@/components/servicios/ServiciosHero"
import { AlcanceOperativo } from "@/components/servicios/AlcanceOperativo"
import { BloqueDiferencial } from "@/components/servicios/BloqueDiferencial"
import { AutoridadRapida } from "@/components/servicios/AutoridadRapida"
import { LogisticaCoordinacion } from "@/components/servicios/LogisticaCoordinacion"
import { QueArenamos } from "@/components/servicios/QueArenamos"
import { MitigacionRiesgo } from "@/components/servicios/MitigacionRiesgo"
import { CasoDestacado } from "@/components/servicios/CasoDestacado"
import CTASection from "@/components/common/CTASection"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: "Servicios de arenado industrial",
  description:
    "Arenado industrial, en obra y para PYMEs en Buenos Aires y AMBA: estructuras, tanques, fachadas, galpones, camiones e hierros, listos para pintar o revestir. Equipos propios, in situ.",
  alternates: { canonical: "/servicios" },
  openGraph: og(
    "Servicios de arenado industrial en Buenos Aires y AMBA",
    "Arenado industrial, en obra y en tu galpón: estructuras, tanques, fachadas, camiones e hierros listos para pintar o revestir. In situ, con equipo propio."
  ),
}

const serviciosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Arenado industrial y en galpón",
      serviceType: "Arenado de estructuras metálicas, tanques e hierros",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenamos estructuras metálicas, tanques, camiones, acoplados e hierros en tu galpón o planta, in situ. Sacamos óxido y pintura vieja y dejamos el metal listo para revestir.",
    },
    {
      "@type": "Service",
      name: "Arenado en obra y restauración",
      serviceType: "Arenado de paredes, fachadas y vigas",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenado de paredes, ladrillo a la vista, fachadas y vigas en obra o restauración, para dejarlas listas para pintar o revestir.",
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchema) }}
      />
      <ServiciosHero />
      <QueArenamos />
      <BloqueDiferencial />
      <CasoDestacado />
      <AlcanceOperativo />
      <LogisticaCoordinacion />
      <AutoridadRapida />
      <MitigacionRiesgo />
      <CTASection/>
    </div>
  )
}

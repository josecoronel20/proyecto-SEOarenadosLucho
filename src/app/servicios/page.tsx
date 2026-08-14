import type { Metadata } from "next"
import { ServiciosHero } from "@/components/servicios/ServiciosHero"
import { AlcanceOperativo } from "@/components/servicios/AlcanceOperativo"
import { BloqueDiferencial } from "@/components/servicios/BloqueDiferencial"
import { AutoridadRapida } from "@/components/servicios/AutoridadRapida"
import { LogisticaCoordinacion } from "@/components/servicios/LogisticaCoordinacion"
import { QueArenamos } from "@/components/servicios/QueArenamos"
import { MitigacionRiesgo } from "@/components/servicios/MitigacionRiesgo"
import { CasoDestacado } from "@/components/servicios/CasoDestacado"
import { ComoTrabajamos } from "@/components/common/ComoTrabajamos"
import { ZonasCobertura } from "@/components/common/ZonasCobertura"
import { FaqCorta } from "@/components/common/FaqCorta"
import CTASection from "@/components/common/CTASection"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"
import { faqsServicios } from "@/lib/faqs"
import { WPP_MSG } from "@/lib/wpp"

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
    // Mismas preguntas que renderiza <FaqCorta> más abajo (schema y visible deben coincidir).
    {
      "@type": "FAQPage",
      mainEntity: faqsServicios.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
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
      <CasoDestacado />
      <AlcanceOperativo />
      <ComoTrabajamos fondo="alt" />
      <LogisticaCoordinacion />
      <BloqueDiferencial />
      <AutoridadRapida />
      <ZonasCobertura fondo="papel" />
      <MitigacionRiesgo />
      <FaqCorta items={faqsServicios} fondo="alt" />
      <CTASection
        message={WPP_MSG.obra}
        title="¿Tenés un trabajo en obra, planta o galpón?"
        subtitle="Contanos qué hay que arenar, el tamaño aproximado y la zona. Vamos, lo vemos y te pasamos el presupuesto sin costo."
      />
    </div>
  )
}

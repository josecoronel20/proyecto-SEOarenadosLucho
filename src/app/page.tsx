import { HeroSection } from "@/components/homeComponents/HeroSection"
import { WhatIsSandblastingSection } from "@/components/homeComponents/WhatIsSandblastingSection"
import { BenefitsSection } from "@/components/homeComponents/BenefitsSection"
import { ServicesSection } from "@/components/homeComponents/ServicesSection"
import { ProjectsSection } from "@/components/homeComponents/ProjectsSection"
import { ProcessSection } from "@/components/homeComponents/ProcessSection"
import { CoverageSection } from "@/components/homeComponents/CoverageSection"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const FAQSection = dynamic(() => import("@/components/homeComponents/FAQSection").then(m => m.FAQSection), { ssr: false })
const QuoteFormSection = dynamic(() => import("@/components/common/QuoteFormSection").then(m => m.QuoteFormSection), { ssr: false })
import { TrustSection } from "@/components/homeComponents/TrustSection"
import type { Metadata } from "next"

const SITE_URL = "https://www.arenadoslucho.com.ar"

// Solo sobrescribimos lo específico de la home
export const metadata: Metadata = {
  title: "Arenado Profesional en Zona Norte, Oeste y CABA | Arenados Lucho - Sandblasting y Granallado",
  description:
    "Servicio profesional de arenado, sandblasting y granallado en Zona Norte, Oeste y CABA. Arenado de piletas, vehículos, barcos, fachadas y más. Equipos propios. Presupuesto gratuito por WhatsApp.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-AR": SITE_URL,
      es: SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Arenado Profesional en Zona Norte, Oeste y CABA | Arenados Lucho",
    description:
      "Servicio profesional de arenado, sandblasting y granallado en Zona Norte, Oeste y CABA. Equipos propios. Presupuesto gratuito por WhatsApp.",
  },
  twitter: {
    title: "Arenado Profesional en Zona Norte, Oeste y CABA | Arenados Lucho",
    description:
      "Servicio profesional de arenado, sandblasting y granallado. Equipos propios. Presupuesto gratuito.",
  },
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <Suspense>
          <WhatIsSandblastingSection />
        </Suspense>
        <Suspense>
          <BenefitsSection />
        </Suspense>
        <Suspense>
          <ServicesSection />
        </Suspense>
        <Suspense>
          <ProjectsSection />
        </Suspense>
        <Suspense>
          <ProcessSection />
        </Suspense>
        <QuoteFormSection />
        <Suspense>
          <CoverageSection />
        </Suspense>
        <FAQSection />
        <Suspense>
          <TrustSection />
        </Suspense>
      </main>
    </>
  )
}

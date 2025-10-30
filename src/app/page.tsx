import { Header } from "@/components/headerComponents/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/homeComponents/HeroSection"
import { WhatIsSandblastingSection } from "@/components/homeComponents/WhatIsSandblastingSection"
import { BenefitsSection } from "@/components/homeComponents/BenefitsSection"
import { ServicesSection } from "@/components/homeComponents/ServicesSection"
import { ProjectsSection } from "@/components/homeComponents/ProjectsSection"
import { ProcessSection } from "@/components/homeComponents/ProcessSection"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { CoverageSection } from "@/components/homeComponents/CoverageSection"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const FAQSection = dynamic(() => import("@/components/homeComponents/FAQSection").then(m => m.FAQSection), { ssr: false })
import { TrustSection } from "@/components/homeComponents/TrustSection"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <h1 className="sr-only">Arenado y granallado profesional en Pilar y Zona Norte - Arenados Lucho</h1>
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
        <Suspense>
          <QuoteFormSection />
        </Suspense>
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

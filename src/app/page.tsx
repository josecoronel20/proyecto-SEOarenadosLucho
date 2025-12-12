import { HeroSection } from "@/components/homeComponents/HeroSection"
import { WhatWeDoSection } from "@/components/homeComponents/WhatWeDoSection"
import { CompactServicesSection } from "@/components/homeComponents/CompactServicesSection"
import { CompactTestimonialsSection } from "@/components/homeComponents/CompactTestimonialsSection"
import { CompactBenefitsSection } from "@/components/homeComponents/CompactBenefitsSection"
import { CompactProjectsSection } from "@/components/homeComponents/CompactProjectsSection"
import { CompactProcessSection } from "@/components/homeComponents/CompactProcessSection"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const QuoteFormSection = dynamic(() => import("@/components/common/QuoteFormSection").then(m => m.QuoteFormSection), { ssr: false })
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
        {/* 1. Hero claro */}
        <HeroSection />
        
        {/* 2. Qué haces + beneficio principal */}
        <WhatWeDoSection />
        
        {/* 3. Servicios principales (4 categorías, 1 frase cada una) */}
        <CompactServicesSection />
        
        {/* 4. Prueba social (testimonios) */}
        <CompactTestimonialsSection />
        
        {/* 5. Beneficios clave (3-4 bullets) */}
        <CompactBenefitsSection />
        
        {/* 6. Casos/resultados rápidos (2-3 mini casos) */}
        <CompactProjectsSection />
        
        {/* 7. Proceso simple (3 pasos) */}
        <CompactProcessSection />
        
        {/* 8. CTA final fuerte (formulario) */}
        <QuoteFormSection />
      </main>
    </>
  )
}

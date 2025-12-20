import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ServiciosHeroSection } from "@/components/serviciosComponents/ServiciosHeroSection"
import { ServiciosSection } from "@/components/serviciosComponents/ServiciosSection"
import { MaquinariaSection } from "@/components/serviciosComponents/MaquinariaSection"
import { BenefitsSection } from "@/components/serviciosComponents/BenefitsSection"
import { ContactCTA } from "@/components/serviciosComponents/ContactCTA"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs segments={[{ label: 'Servicios' }]} />
      
      <main className="min-h-screen">
        <ServiciosHeroSection />
        <ServiciosSection />
        <MaquinariaSection />
        
        <QuoteFormSection />
      </main>
    </>
  )
}

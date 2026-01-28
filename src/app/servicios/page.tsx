import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { ServiciosHeroSection } from "@/components/serviciosComponents/ServiciosHeroSection"
import { ServiciosSection } from "@/components/serviciosComponents/ServiciosSection"
import { MaquinariaSection } from "@/components/serviciosComponents/MaquinariaSection"
import { BenefitsSection } from "@/components/serviciosComponents/BenefitsSection"
import { ContactCTA } from "@/components/serviciosComponents/ContactCTA"
import { QuoteFormSection } from "@/components/common/QuoteFormSection"
import { ArrowDown } from "lucide-react"

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs segments={[{ label: 'Servicios' }]} />
      
      <main className="min-h-screen">
        <ServiciosHeroSection />
        <ServiciosSection />

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto"><h3 className="text-xl text-gray-900 text-center mt-10 font-semibold">Cada proyecto es distinto. Si tu superficie o trabajo no aparece listado, evaluamos el caso y te indicamos la mejor forma de realizarlo.</h3> <ArrowDown className="w-10 h-10 text-primary" /></div>
        <QuoteFormSection />
      </main>
    </>
  )
}

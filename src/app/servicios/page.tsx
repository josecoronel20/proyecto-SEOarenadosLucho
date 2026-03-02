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

export const metadata: Metadata = {
  title: "Servicios de arenado industrial",
  description:
    "Arenado hasta metal blanco (Sa3), coordinación con obra, hasta 100 m² diarios por equipo. Normativa ISO 8501. Buenos Aires.",
}

export default function ServiciosPage() {
  return (
    <main>
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

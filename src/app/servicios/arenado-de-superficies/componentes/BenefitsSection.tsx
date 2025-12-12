import { BenefitsSection as BaseBenefitsSection } from "../../componentes/BenefitsSection"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

interface BenefitsSectionProps {
  title: string
  subtitle: string
  benefits: Benefit[]
}

export function BenefitsSection(props: BenefitsSectionProps) {
  return <BaseBenefitsSection {...props} />
}


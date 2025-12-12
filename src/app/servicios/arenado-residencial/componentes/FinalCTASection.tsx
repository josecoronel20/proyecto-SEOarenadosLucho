import { FinalCTASection as BaseFinalCTASection } from "../../componentes/FinalCTASection"

interface FinalCTASectionProps {
  title: string
  description: string
  benefits: string[]
  whatsappTitle: string
  whatsappDescription: string
  formTitle: string
  formDescription: string
  bottomTitle: string
  bottomDescription: string
}

export function FinalCTASection(props: FinalCTASectionProps) {
  return <BaseFinalCTASection {...props} />
}


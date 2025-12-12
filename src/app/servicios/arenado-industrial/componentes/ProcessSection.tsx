import { ProcessSection as BaseProcessSection } from "../../componentes/ProcessSection"

interface ProcessStep {
  step: string
  icon: React.ReactNode
  title: string
  description: string
}

interface ProcessSectionProps {
  title: string
  subtitle: string
  process: ProcessStep[]
}

export function ProcessSection(props: ProcessSectionProps) {
  return <BaseProcessSection {...props} />
}


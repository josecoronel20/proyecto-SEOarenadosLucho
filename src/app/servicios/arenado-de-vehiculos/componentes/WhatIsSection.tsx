import { WhatIsSection as BaseWhatIsSection } from "../../componentes/WhatIsSection"

interface WhatIsSectionProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  additionalInfo: string
}

export function WhatIsSection(props: WhatIsSectionProps) {
  return <BaseWhatIsSection {...props} />
}


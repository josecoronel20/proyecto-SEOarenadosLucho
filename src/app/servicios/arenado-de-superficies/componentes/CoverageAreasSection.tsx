import { CoverageAreasSection as BaseCoverageAreasSection } from "../../componentes/CoverageAreasSection"

interface CoverageArea {
  name: string
  slug: string
  description: string
}

interface CoverageAreasSectionProps {
  title: string
  subtitle: string
  coverageAreas: Record<string, CoverageArea[]>
}

export function CoverageAreasSection(props: CoverageAreasSectionProps) {
  return <BaseCoverageAreasSection {...props} />
}


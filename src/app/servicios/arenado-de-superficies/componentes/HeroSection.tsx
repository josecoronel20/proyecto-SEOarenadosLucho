import { HeroSection as BaseHeroSection } from "../../componentes/HeroSection"

interface HeroSectionProps {
  title: string
  titleHighlight?: string
  description: string
  heroImage?: string
  heroImageAlt?: string
}

export function HeroSection(props: HeroSectionProps) {
  return <BaseHeroSection {...props} />
}


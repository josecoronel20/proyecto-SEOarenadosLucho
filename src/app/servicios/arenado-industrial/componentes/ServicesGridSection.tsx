import { ServicesGridSection as BaseServicesGridSection } from "../../componentes/ServicesGridSection"

interface Service {
  id: string
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  features: string[]
  category: string
  popular: boolean
}

interface ServicesGridSectionProps {
  title: string
  subtitle?: string
  services: Service[]
  columns?: 2 | 3 | 4
}

export function ServicesGridSection(props: ServicesGridSectionProps) {
  return <BaseServicesGridSection {...props} />
}


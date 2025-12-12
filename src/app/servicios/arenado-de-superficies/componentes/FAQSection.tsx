import { FAQSection as BaseFAQSection } from "../../componentes/FAQSection"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle: string
  faqs: FAQ[]
}

export function FAQSection(props: FAQSectionProps) {
  return <BaseFAQSection {...props} />
}


"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs, type Faq } from "@/lib/faqs"

export function FaqAccordion({ items = faqs }: { items?: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((faq, i) => (
        // pb-6 en el contenido y py-5 en el disparador dejan aire real contra el
        // borde inferior: sin eso el texto quedaba pegado a la línea divisoria.
        <AccordionItem key={i} value={`item-${i}`} className="border-gray-200 border-b px-0">
          <AccordionTrigger className="py-5 text-left font-semibold text-gray-900 hover:no-underline hover:text-primary-600">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pb-6 max-w-prose">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

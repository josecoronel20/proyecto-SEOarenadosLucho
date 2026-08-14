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
    // Sin centrar ni acotar a max-w-3xl: la lista se alinea al margen izquierdo
    // como el resto de la retícula, y es la respuesta la que limita su medida.
    <Accordion type="single" collapsible className="w-full border-t border-papel-linea">
      {items.map((faq, i) => (
        // pb-6 en el contenido y py-5 en el disparador dejan aire real contra el
        // filete inferior: sin eso el texto quedaba pegado a la línea.
        <AccordionItem key={i} value={`item-${i}`} className="border-papel-linea border-b px-0">
          <AccordionTrigger className="py-5 text-left text-base md:text-lg font-semibold text-tinta hover:no-underline hover:text-maquina-700">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-tinta-70 text-base leading-relaxed pb-6 max-w-[68ch]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

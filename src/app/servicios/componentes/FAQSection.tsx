"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle?: string
  faqs: FAQ[]
  notFoundText?: string
}

export function FAQSection({ 
  title, 
  subtitle,
  faqs,
  notFoundText = "¿No encontraste la respuesta que buscabas?"
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                {notFoundText}
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


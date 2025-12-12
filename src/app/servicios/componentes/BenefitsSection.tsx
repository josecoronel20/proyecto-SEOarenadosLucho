import { ReactNode } from "react"

interface Benefit {
  icon: ReactNode
  title: string
  description: string
}

interface BenefitsSectionProps {
  title: string
  subtitle?: string
  benefits: Benefit[]
}

export function BenefitsSection({ title, subtitle, benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <div className="text-xl font-semibold mb-2">
                {benefit.title}
              </div>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


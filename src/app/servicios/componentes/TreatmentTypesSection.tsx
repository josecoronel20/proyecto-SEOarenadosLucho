import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface TreatmentType {
  title: string
  description: string
  content: string
  benefits: string[]
  borderColor?: string
  textColor?: string
  bgColor?: string
  benefitsBgColor?: string
  benefitsTextColor?: string
}

interface TreatmentTypesSectionProps {
  title: string
  subtitle?: string
  treatments: TreatmentType[]
  helpText?: string
}

export function TreatmentTypesSection({ 
  title, 
  subtitle,
  treatments,
  helpText = "¿Necesitás ayuda para elegir el mejor tratamiento?"
}: TreatmentTypesSectionProps) {
  return (
    <section id="tipos-de-tratamiento" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card 
              key={index} 
              className={`border-2 ${treatment.borderColor || 'border-blue-200'}`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl ${treatment.textColor || 'text-blue-600'}`}>
                  {treatment.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {treatment.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {treatment.content}
                </p>
                <div className={`p-4 rounded-lg ${treatment.benefitsBgColor || 'bg-blue-50'}`}>
                  <div className={`font-semibold mb-2 ${treatment.benefitsTextColor || 'text-blue-800'}`}>
                    Beneficios:
                  </div>
                  <ul className={`space-y-1 text-sm ${treatment.benefitsTextColor || 'text-blue-700'}`}>
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            {helpText}
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}


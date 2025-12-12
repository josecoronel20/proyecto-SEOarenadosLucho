import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface WhatIsSectionProps {
  title: string
  subtitle?: string
  description: string
  features: string[]
  additionalInfo?: string
}

export function WhatIsSection({
  title,
  subtitle,
  description,
  features,
  additionalInfo
}: WhatIsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              {additionalInfo && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-muted-foreground">{additionalInfo}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


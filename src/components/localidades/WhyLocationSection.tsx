import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Advantage {
  icon: LucideIcon
  title: string
  description: string
}

interface WhyLocationSectionProps {
  locationName: string
  title?: string
  subtitle?: string
  advantages: Advantage[]
  colorScheme?: "blue" | "green" | "purple" | "orange"
}

const colorSchemes = {
  blue: {
    card: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-600",
    title: "text-blue-800"
  },
  green: {
    card: "border-green-200 bg-green-50",
    iconBg: "bg-green-600",
    title: "text-green-800"
  },
  purple: {
    card: "border-purple-200 bg-purple-50",
    iconBg: "bg-purple-600",
    title: "text-purple-800"
  },
  orange: {
    card: "border-orange-200 bg-orange-50",
    iconBg: "bg-orange-600",
    title: "text-orange-800"
  }
}

export function WhyLocationSection({
  locationName,
  title,
  subtitle,
  advantages,
  colorScheme = "blue"
}: WhyLocationSectionProps) {
  const colors = colorSchemes[colorScheme]
  const sectionTitle = title || `¿Por qué elegirnos en ${locationName}?`
  const sectionSubtitle = subtitle || `Ventajas exclusivas de trabajar con Arenados Lucho en ${locationName}`

  return (
    <section className="py-16" aria-labelledby="why-location-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="why-location-heading" className="text-3xl font-bold mb-4">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {sectionSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label={`Ventajas de elegir Arenados Lucho en ${locationName}`}>
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className={cn("text-center", colors.card)} role="listitem">
                  <CardContent className="pt-8 pb-8">
                    <div className={cn("text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", colors.iconBg)}>
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


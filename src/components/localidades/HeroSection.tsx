import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, LucideIcon } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import { cn } from "@/lib/utils"

export interface Feature {
  icon: LucideIcon
  text: string
}

export interface HeroSectionProps {
  title: string
  titleHighlight?: string
  description: string
  features: Feature[]
  primaryButton?: {
    text: string
    href: string
    ariaLabel: string
  }
  secondaryButton?: {
    text: string
    href: string
    ariaLabel: string
  }
  showWhatsApp?: boolean
  colorScheme?: "blue" | "green" | "purple" | "orange"
  ariaLabel?: string
}

const colorSchemes = {
  blue: {
    gradient: "from-blue-50 via-background to-blue-50/50",
    text: "text-blue-600",
    icon: "text-blue-600"
  },
  green: {
    gradient: "from-green-50 via-background to-green-50/50",
    text: "text-green-600",
    icon: "text-green-600"
  },
  purple: {
    gradient: "from-purple-50 via-background to-purple-50/50",
    text: "text-purple-600",
    icon: "text-purple-600"
  },
  orange: {
    gradient: "from-orange-50 via-background to-orange-50/50",
    text: "text-orange-600",
    icon: "text-orange-600"
  }
}

export function HeroSection({
  title,
  titleHighlight,
  description,
  features,
  primaryButton,
  secondaryButton,
  showWhatsApp = true,
  colorScheme = "blue",
  ariaLabel
}: HeroSectionProps) {
  const colors = colorSchemes[colorScheme]

  return (
    <section 
      className={cn("relative bg-gradient-to-br py-20", colors.gradient)} 
      aria-labelledby="hero-heading"
      aria-label={ariaLabel}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            {title}{titleHighlight && <span className={cn(colors.text)}> {titleHighlight}</span>}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8" role="list" aria-label={ariaLabel || "Características del servicio"}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center" role="listitem">
                    <Icon className={cn("h-4 w-4 mr-2", colors.icon)} aria-hidden="true" />
                    {feature.text}
                  </div>
                )
              })}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {showWhatsApp && <WhatsAppButton />}
            {primaryButton && (
              <Button asChild>
                <Link href={primaryButton.href} aria-label={primaryButton.ariaLabel}>
                  {primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
            {secondaryButton && (
              <Button variant="outline" asChild>
                <Link href={secondaryButton.href} aria-label={secondaryButton.ariaLabel}>
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  {secondaryButton.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


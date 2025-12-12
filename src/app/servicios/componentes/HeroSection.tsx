import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface HeroSectionProps {
  title: string
  titleHighlight?: string
  description: string
  heroImage?: string
  heroImageAlt?: string
}

export function HeroSection({ 
  title, 
  titleHighlight, 
  description,
  heroImage,
  heroImageAlt
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title} {titleHighlight && <span className="text-blue-600">{titleHighlight}</span>}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton />
              <Button size="lg" variant="outline" asChild>
                <Link href="/presupuesto-rapido">
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>

          {heroImage && (
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt={heroImageAlt || title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


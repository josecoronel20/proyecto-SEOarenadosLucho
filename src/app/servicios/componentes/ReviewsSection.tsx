import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface Review {
  name: string
  location: string
  rating: number
  date: string
  content: string
  service: string
  verified?: boolean
}

interface ReviewsSectionProps {
  title: string
  subtitle?: string
  reviews: Review[]
  ctaTitle?: string
  ctaDescription?: string
}

export function ReviewsSection({ 
  title, 
  subtitle,
  reviews,
  ctaTitle = "¿Querés ser nuestro próximo cliente satisfecho?",
  ctaDescription = "Unite a más de 100 clientes que ya renovaron su superficie con nuestro servicio profesional."
}: ReviewsSectionProps) {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arenados Lucho",
    "description": "Servicio profesional de arenado en Pilar, Zona Norte y Buenos Aires",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.content,
      "datePublished": review.date
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {review.location}
                      </div>
                    </div>
                    {review.verified && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Verificado
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {review.date}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {review.service}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {review.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {ctaTitle}
              </div>
              <p className="text-muted-foreground mb-6">
                {ctaDescription}
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


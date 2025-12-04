import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Laura Pérez",
      location: "Pilar",
      rating: 5,
      date: "Enero 2024",
      content:
        "Nos renovaron la pileta por completo. Sacaron toda la pintura vieja y la dejaron lista para pintar. Muy buena atención y cumplieron con los tiempos.",
      service: "Arenado de Pileta para Repintado",
      verified: true,
    },
    {
      name: "Martín López",
      location: "San Miguel",
      rating: 5,
      date: "Diciembre 2023",
      content:
        "Buen resultado y sin complicaciones. Llegaron con todo el equipo, hicieron el arenado en un día y dejaron todo limpio. Recomendables para Zona Norte.",
      service: "Arenado Integral",
      verified: true,
    },
    {
      name: "Sofía Ramírez",
      location: "Tigre",
      rating: 5,
      date: "Noviembre 2023",
      content:
        "El resultado fue excelente. Teníamos manchas y la superficie quedó perfecta para revestir. El equipo fue cuidadoso y prolijo durante todo el proceso.",
      service: "Arenado de Pileta Residencial",
      verified: true,
    },
  ];
  

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arenados Lucho",
    "description": "Servicio profesional de arenado de piletas en Pilar, Zona Norte y Buenos Aires",
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
              Reseñas de Nuestros Clientes - Arenado de Piletas en Zona Norte
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. 
              Conocé las experiencias reales de quienes confiaron en nuestro servicio de arenado de piletas 
              en Pilar, San Isidro, Tigre y toda Zona Norte.
            </p>
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
                ¿Querés ser nuestro próximo cliente satisfecho?
              </div>
              <p className="text-muted-foreground mb-6">
                Unite a más de 100 clientes que ya renovaron su pileta con nuestro servicio profesional de arenado.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

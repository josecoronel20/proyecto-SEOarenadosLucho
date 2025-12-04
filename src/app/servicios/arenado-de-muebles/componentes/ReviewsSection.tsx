import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Patricia López",
      location: "Pilar, Buenos Aires",
      rating: 5,
      date: "Enero 2024",
      content:
        "Excelente servicio de arenado y restauración de muebles en Pilar. El equipo profesional restauró mi mueble antiguo de madera maciza y quedó espectacular. Cumplieron con los tiempos acordados y el precio fue justo. Recomiendo totalmente para arenado de muebles en Zona Norte.",
      service: "Restauración Profesional de Muebles Antiguos",
      verified: true,
    },
    {
      name: "Carlos Martínez", 
      location: "San Isidro, Buenos Aires",
      rating: 5,
      date: "Diciembre 2023",
      content:
        "Servicio premium de arenado de muebles en San Isidro. Brindaron un servicio impecable en mis muebles de madera, quedaron perfectamente preparados para el barnizado. Excelente atención y asesoramiento técnico. Los recomiendo 100% para restauración de muebles en Zona Norte.",
      service: "Arenado Profesional y Preparación para Barnizado",
      verified: true,
    },
  ];

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arenados Lucho - Arenado de Muebles Buenos Aires",
    "description": "Servicio profesional certificado de arenado y restauración de muebles en Pilar, San Isidro y toda la Zona Norte de Buenos Aires. Más de 15 años de experiencia.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.content,
      "datePublished": review.date,
      "publisher": {
        "@type": "Organization",
        "name": "Arenados Lucho"
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <section 
        className="py-16 bg-gray-50"
        aria-label="Opiniones y testimonios de clientes sobre arenado de muebles en Zona Norte"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Opiniones Verificadas 2024 | Arenado de Muebles en Pilar y Zona Norte de Buenos Aires
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Descubrí las experiencias reales de nuestros clientes con el servicio premium de arenado y restauración de muebles en Pilar, San Isidro y toda la Zona Norte. 
              Más de 150 reseñas verificadas avalan nuestra trayectoria de 15 años en recuperación profesional de muebles antiguos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {review.location}
                      </div>
                    </div>
                    {review.verified && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Reseña Verificada
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-label="Calificación 5 estrellas" />
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Arenado Profesional de Muebles en Buenos Aires | Presupuesto Sin Cargo
              </h3>
              <p className="text-muted-foreground mb-6">
                Unite a más de 150 familias satisfechas que ya restauraron sus muebles con nuestro servicio certificado de arenado profesional. Atención personalizada y resultados garantizados en Pilar y toda la Zona Norte.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

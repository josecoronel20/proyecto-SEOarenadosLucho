import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export function ReviewsSection() {
  const reviews = [
    {
      name: "María Rodríguez",
      location: "Pilar",
      rating: 5,
      date: "Enero 2025",
      content:
        "Excelente servicio de arenado de fachadas en Pilar. El equipo profesional realizó una limpieza impecable, eliminando toda la pintura antigua y dejando la superficie lista para pintar. Cumplieron con los tiempos acordados y el precio fue muy competitivo.",
      service: "Arenado y Limpieza de Fachadas Residenciales",
      verified: true,
    },
    {
      name: "Carlos López",
      location: "San Isidro",
      rating: 5,
      date: "Diciembre 2023", 
      content:
        "Contratamos el servicio de arenado para la fachada de nuestro local comercial en San Isidro. El resultado superó nuestras expectativas - removieron años de suciedad y contaminación. Equipo altamente profesional y con amplia experiencia en Zona Norte.",
      service: "Arenado de Fachadas Comerciales",
      verified: true,
    },
    {
      name: "Laura Martínez",
      location: "Tigre",
      rating: 5,
      date: "Febrero 2025",
      content: 
        "Servicio premium de arenado de fachadas en Tigre. Utilizaron equipamiento especializado y técnicas profesionales para restaurar completamente el frente de mi casa. El acabado quedó perfecto para la nueva pintura exterior.",
      service: "Restauración de Fachadas",
      verified: true,
    }
  ];

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arenados Lucho - Expertos en Fachadas Zona Norte",
    "description": "Servicio profesional de arenado y restauración de fachadas en Pilar, San Isidro, Tigre y toda la Zona Norte de Buenos Aires. Especialistas certificados con más de 15 años de experiencia.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "140",
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
      <section className="py-16 bg-gray-50" aria-label="Opiniones de clientes sobre arenado de fachadas en Zona Norte 2025">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Opiniones Verificadas sobre Arenado de Fachadas en Pilar y Zona Norte 2025
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Descubrí las experiencias reales de nuestros clientes satisfechos con el servicio premium de arenado de fachadas 
              en Pilar, San Isidro, Tigre y toda la Zona Norte. Más de 140 proyectos exitosos avalan nuestra experiencia de 15 años 
              en restauración profesional de fachadas.
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
                        <MapPin className="h-4 w-4 mr-1" aria-label="Ubicación" />
                        {review.location}
                      </div>
                    </div>
                    {review.verified && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Opinión Verificada
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 mb-2" aria-label={`Calificación: ${review.rating} de 5 estrellas`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" aria-label="Fecha" />
                    {review.date}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {review.service}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-2" aria-hidden="true" />
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
                Solicitá tu Presupuesto Gratuito para Arenado de Fachadas en Zona Norte 2025
              </div>
              <p className="text-muted-foreground mb-6">
                Unite a más de 140 propietarios satisfechos que ya confiaron en nuestro servicio profesional de arenado y restauración de fachadas en Pilar, San Isidro y todo el corredor norte.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

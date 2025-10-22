import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "Excelente trabajo en la fachada de mi casa histórica en San Isidro. Preservaron todos los detalles originales y el resultado fue espectacular. Muy profesionales y cuidadosos.",
      author: "Dr. Roberto Martínez",
      location: "Barrio Norte",
      rating: 5,
      bgColor: "border-purple-200 bg-purple-50",
      textColor: "text-purple-800",
      authorColor: "text-purple-700"
    },
    {
      content: "Arenaron mi auto clásico y quedó perfecto. Conocen muy bien cómo tratar vehículos de colección. El servicio premium vale cada peso. Los recomiendo sin dudar.",
      author: "Ing. Patricia López",
      location: "Beccar",
      rating: 5,
      bgColor: "border-purple-200 bg-purple-50",
      textColor: "text-purple-800",
      authorColor: "text-purple-700"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">
              Testimonios de Clientes en San Isidro
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencias de nuestros clientes premium en San Isidro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" role="list" aria-label="Testimonios de clientes premium en San Isidro">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`${testimonial.bgColor}`} role="listitem">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4" aria-label={`${testimonial.rating} estrellas`}>
                    <div className="flex text-yellow-400">
                      {"★".repeat(testimonial.rating).split('').map((star, i) => (
                        <span key={i} aria-hidden="true">{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className={`text-sm ${testimonial.textColor} mb-4`}>
                    "{testimonial.content}"
                  </p>
                  <div className={`text-sm font-semibold ${testimonial.authorColor}`}>
                    - {testimonial.author}, {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

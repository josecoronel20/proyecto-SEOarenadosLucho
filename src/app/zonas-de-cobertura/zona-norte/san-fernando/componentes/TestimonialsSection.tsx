import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "Excelente servicio en mi casa en San Fernando. Arenaron la pileta y quedó perfecta. Muy puntuales y profesionales. Definitivamente los recomiendo.",
      author: "Sra. María González",
      location: "Barrio Residencial",
      rating: 5,
      bgColor: "border-rose-200 bg-rose-50",
      textColor: "text-rose-800",
      authorColor: "text-rose-700"
    },
    {
      content: "Contraté el servicio para mi comercio en el centro de San Fernando. Arenaron la fachada y quedó impecable. Muy recomendables para establecimientos comerciales.",
      author: "Sr. Carlos Mendoza",
      location: "Centro de San Fernando",
      rating: 5,
      bgColor: "border-rose-200 bg-rose-50",
      textColor: "text-rose-800",
      authorColor: "text-rose-700"
    }
  ]

  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">
              Testimonios de Clientes en San Fernando
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencias de nuestros clientes en San Fernando
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" role="list" aria-label="Testimonios de clientes en San Fernando">
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

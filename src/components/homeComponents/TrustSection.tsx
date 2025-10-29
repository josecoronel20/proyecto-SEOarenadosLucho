import { Shield, Award, Users, Star, Clock, MapPin, CheckCircle } from "lucide-react"

export function TrustSection() {
  const stats = [
    {
      number: "20+",
      label: "Años de experiencia",
      icon: Award,
      color: "text-blue-600"
    },
    {
      number: "500+",
      label: "Proyectos completados",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      number: "100%",
      label: "Clientes satisfechos",
      icon: Users,
      color: "text-purple-600"
    },
    {
      number: "24h",
      label: "Respuesta garantizada",
      icon: Clock,
      color: "text-orange-600"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      location: "Pilar",
      service: "Arenado de Pileta",
      rating: 5,
      text: "Excelente servicio de arenado de pileta. Muy profesionales, puntuales y el resultado fue perfecto. La pileta quedó como nueva, lista para pintar. Lo recomiendo totalmente."
    },
    {
      name: "Carlos Rodríguez", 
      location: "San Isidro",
      service: "Arenado de Vehículo",
      rating: 5,
      text: "Arenaron mi auto y quedó como nuevo. Muy buen trabajo, precios justos y servicio a domicilio. El equipo fue muy cuidadoso con el vehículo. Volveré a contratarlos."
    },
    {
      name: "Ana Martínez",
      location: "Tigre", 
      service: "Arenado Industrial",
      rating: 5,
      text: "Servicio de arenado industrial impecable. Trabajaron en nuestra fábrica y el resultado superó nuestras expectativas. Muy recomendables para proyectos industriales."
    }
  ]

  const certifications = [
    {
      icon: Shield,
      title: "Seguro de Responsabilidad Civil",
      description: "Cobertura completa para todos nuestros trabajos"
    },
    {
      icon: Award,
      title: "Normas de Seguridad",
      description: "Cumplimiento de protocolos de seguridad industrial"
    },
    {
      icon: MapPin,
      title: "Servicio Móvil Certificado",
      description: "Equipos certificados para trabajo en cualquier ubicación"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Estadísticas */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿Por qué confiar en <span className="text-primary">Arenados Lucho</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de dos décadas de experiencia, cientos de proyectos exitosos y la confianza de nuestros clientes nos respaldan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">
            Certificaciones y Garantías
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center gap-4 bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

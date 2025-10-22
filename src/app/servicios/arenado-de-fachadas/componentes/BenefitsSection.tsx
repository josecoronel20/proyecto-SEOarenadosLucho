import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Limpieza Profesional de Fachadas en Pilar y San Isidro 2025",
      description: "Servicio premium de arenado para fachadas en Pilar, San Isidro y Zona Norte de Buenos Aires. Eliminación garantizada de pintura antigua, hongos y contaminantes. Más de 15 años transformando fachadas deterioradas en toda la región norte del GBA."
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Preparación de Fachadas en Zona Norte Buenos Aires | Expertos Certificados",
      description: "Preparación especializada mediante arenado para pintura exterior y revestimientos en Pilar, San Isidro y todo el corredor norte. Servicio integral con garantía escrita y asesoramiento técnico personalizado para cada proyecto."
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Arenado de Fachadas en Pilar y San Isidro | Tecnología Avanzada 2025",
      description: "Arenado de precisión para fachadas en Zona Norte con equipamiento de última generación. Especialistas en ladrillo visto, hormigón y piedra. Servicio premium con resultados garantizados en Pilar, San Isidro y alrededores."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Restauración Segura de Fachadas en Zona Norte Buenos Aires",
      description: "Proceso certificado de arenado y restauración para edificios en Pilar y San Isidro. Personal especializado con más de 15 años de experiencia en el tratamiento de fachadas residenciales y comerciales en todo el norte del GBA."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Servicio Premium de Arenado en Pilar y Zona Norte | Precios 2025",
      description: "Empresa líder en arenado de fachadas en Pilar, San Isidro y norte de Buenos Aires. Presupuesto sin cargo, atención inmediata y cobertura total en Zona Norte. Transformamos su fachada con garantía profesional certificada."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado de Fachadas Profesional en Pilar y Zona Norte Buenos Aires 2025",
    "serviceType": "Arenado y Restauración de Fachadas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho - Expertos en Fachadas Zona Norte",
      "image": "/images/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pilar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "180"
      }
    },
    "description": "Servicio profesional de arenado y restauración de fachadas en Pilar, San Isidro y Zona Norte. Más de 15 años de experiencia, tecnología especializada y garantía certificada en todo el corredor norte de Buenos Aires.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Premium de Arenado de Fachadas Zona Norte 2025",
      "itemListElement": benefits.map(b => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": b.title,
          "description": b.description
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="py-16 bg-gray-50" aria-label="Beneficios del Arenado de Fachadas en Pilar y Zona Norte Buenos Aires 2025">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Arenado de Fachadas en Pilar y Zona Norte Buenos Aires 2025 | Servicio Premium Certificado
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Empresa líder en arenado y restauración de fachadas en Pilar, San Isidro y todo el corredor norte de Buenos Aires. 
              Más de 15 años brindando servicios especializados con tecnología de última generación. Presupuesto sin cargo y atención inmediata en toda la Zona Norte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" role="article">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

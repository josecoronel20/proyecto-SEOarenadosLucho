import { Sparkles, PaintBucket, Gauge, Shield, Wrench } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-500" />,
      title: "Restauración Profesional de Muebles Antiguos en Pilar y Zona Norte",
      description: "Servicio premium de arenado para muebles de madera y metal. Eliminamos el 100% de pintura antigua, barniz deteriorado y óxido, recuperando la belleza natural de tus muebles con técnicas especializadas."
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-blue-500" />,
      title: "Preparación Experta para Barnizado y Acabados Premium",
      description: "Preparación profesional mediante arenado para barnizado natural, lacado y tratamientos protectores. Garantizamos adherencia perfecta y acabados de alta calidad en todo tipo de muebles."
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Arenado de Alta Precisión para Todo Tipo de Muebles",
      description: "Arenado controlado y uniforme para muebles de madera maciza, melamina y metálicos. Preservamos la estructura original mientras realzamos la belleza natural de cada pieza."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Tratamiento Seguro y Garantizado para Muebles Antiguos",
      description: "Sistema certificado de arenado que protege la integridad de tus muebles antiguos y modernos. Servicio profesional especializado para madera, metal y materiales combinados."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Tecnología Avanzada en Restauración de Muebles",
      description: "Equipamiento de última generación para arenado profesional. 15 años de experiencia transformando muebles antiguos en piezas únicas con acabados superiores."
    }
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arenado y Restauración Profesional de Muebles en Zona Norte",
    "serviceType": "Restauración y Arenado de Muebles",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arenados Lucho",
      "areaServed": ["Pilar", "San Isidro", "Tigre", "Vicente López", "San Fernando", "Zona Norte GBA"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    },
    "description": "Servicio especializado de arenado y restauración para muebles de madera y metal. Eliminación garantizada de pintura antigua, óxido y preparación profesional para acabados premium en Pilar y toda la Zona Norte.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Premium de Restauración de Muebles",
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
      <section className="py-16 bg-gray-50" aria-label="Ventajas del servicio profesional de arenado y restauración de muebles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Restauración y Arenado Profesional de Muebles en Pilar | 15 Años de Excelencia en Zona Norte
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Expertos en restauración y arenado de muebles antiguos en Pilar, San Isidro y Zona Norte. 
              Especialistas en recuperación de muebles de madera y metal, eliminación de pintura antigua y preparación para acabados premium. Servicio garantizado con más de 1000 proyectos exitosos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" 
                role="article"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" itemProp="name">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" itemProp="description">
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

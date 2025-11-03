import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function FinalCTASection() {
  const benefits = [
    "Presupuesto sin cargo para arenado de fachadas en Pilar, San Isidro y Zona Norte 2025",
    "Atención inmediata local en 24hs - Servicio especializado en Pilar y alrededores",
    "Cobertura total: Arenado de fachadas certificado en Pilar, San Isidro, Tigre y todo el Norte GBA",
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Arenado de Fachadas Profesional Pilar y Zona Norte 2025",
    serviceType: "Arenado y Limpieza Profesional de Fachadas",
    provider: {
      "@type": "LocalBusiness",
      name: "Arenados Lucho - Expertos en Fachadas Pilar y Zona Norte",
      areaServed: [
        "Pilar",
        "San Isidro",
        "Tigre",
        "Vicente López",
        "San Fernando",
        "Norte GBA",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Arenado de Fachadas Pilar y Zona Norte 2025",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arenado de Fachadas Pilar y Zona Norte",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Limpieza de Fachadas Pilar y San Isidro",
            },
          },
        ],
      },
    },
    description:
      "Servicio local de arenado para fachadas residenciales y comerciales en Pilar, San Isidro y Zona Norte 2025. Limpieza profesional, eliminación de pintura y preparación para pintura exterior. 15 años de experiencia en Pilar y alrededores.",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "-34.4359",
        longitude: "-58.7014",
      },
      geoRadius: "30000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section
        className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
        aria-label="Contacto para arenado de fachadas en Pilar y Zona Norte 2025"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arenado de Fachadas en Pilar y Zona Norte 2025 | Servicio Local
              Especializado en San Isidro y Tigre
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Expertos locales en arenado de fachadas para edificios
              residenciales y comerciales en Pilar, San Isidro y Zona Norte.
              Eliminamos pintura antigua, hongos y moho. Preparamos superficies
              para pintura exterior con tecnología especializada. 15 años
              brindando servicios de calidad en Pilar y todo el corredor norte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Presupuesto Gratuito WhatsApp - Arenado Fachadas Pilar 2025
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Atención local inmediata en Pilar, San Isidro y alrededores.
                  Enviá fotos de tu fachada y recibí una cotización detallada al
                  instante. Incluye asesoramiento técnico sin cargo.
                </p>
                <WhatsAppButton
                 
                />
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Cotización Online - Arenado Fachadas San Isidro 2025
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Servicio express local para Pilar, San Isidro y Zona Norte.
                  Completá el formulario y recibí en 24 horas una cotización
                  detallada para el arenado de tu fachada.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-auto py-3 border-white text-primary hover:bg-white hover:text-blue-600 truncate"
                  asChild
                >
                  <Link href="/presupuesto-rapido">
                    Solicitar Presupuesto en San Isidro
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                🏆 Empresa Líder en Arenado de Fachadas en Pilar y Zona Norte
                2025
              </h3>
              <p className="text-sm opacity-90">
                Más de 90 familias de Pilar, San Isidro y Zona Norte confían en
                nuestro servicio local de arenado de fachadas certificado.
                Equipo especializado con 15 años de experiencia en limpieza
                profesional de fachadas en Pilar y alrededores. Brindamos
                soluciones integrales para limpieza de fachadas, eliminación de
                pintura antigua y preparación para pintura exterior. Utilizamos
                tecnología especializada y métodos certificados que garantizan
                los mejores resultados en cada proyecto de limpieza en Pilar y
                Zona Norte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

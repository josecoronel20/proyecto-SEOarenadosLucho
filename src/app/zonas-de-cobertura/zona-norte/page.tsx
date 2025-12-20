import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { PROJECT } from "@/config/project";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { QuoteFormSection } from "@/components/common/QuoteFormSection";
import { ServicesSection } from "./componentes/ServicesSection";

export const metadata = {
  title: "Arenado en Zona Norte | Servicio Profesional de Sandblasting",
  description:
    "Servicio de arenado móvil profesional en toda la Zona Norte. Cobertura en Pilar, San Isidro, Tigre y más de 20 localidades. Presupuesto sin cargo y atención 24hs.",
  keywords:
    "arenado zona norte, sandblasting zona norte, arenado pilar, arenado san isidro, arenado tigre, servicio de arenado móvil",
};

export default function ZonaNortePage() {
  const zonaNorteAreas = PROJECT.coverage.zonaNorte;
  const primaryAreas = [
    "Pilar",
    "José C. Paz",
    "San Isidro",
    "Tigre",
    "Vicente López",
    "Malvinas Argentinas",
    "San Miguel",
    "General San Martín",
    "San Fernando",
    "Cardales",
    "Zárate",
  ];

  const areaLinks = {
    Pilar: "/zonas-de-cobertura/zona-norte/pilar",
    "José C. Paz": "/zonas-de-cobertura/zona-norte/jose-c-paz",
    "San Isidro": "/zonas-de-cobertura/zona-norte/san-isidro",
    Tigre: "/zonas-de-cobertura/zona-norte/tigre",
    "Vicente López": "/zonas-de-cobertura/zona-norte/vicente-lopez",
    "Malvinas Argentinas": "/zonas-de-cobertura/zona-norte/malvinas-argentinas",
    "San Miguel": "/zonas-de-cobertura/zona-norte/san-miguel",
    "General San Martín": "/zonas-de-cobertura/zona-norte/general-san-martin",
    "San Fernando": "/zonas-de-cobertura/zona-norte/san-fernando",
    Cardales: "/zonas-de-cobertura/zona-norte/cardales",
    Zárate: "/zonas-de-cobertura/zona-norte/zarate",
  };

  return (
    <div className="min-h-screen">
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte" },
        ]}
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50/50 py-16"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Arenado en <span className="text-blue-600">Zona Norte</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Servicio móvil de arenado y sandblasting en más de{" "}
              {zonaNorteAreas.length} localidades de Zona Norte. Presupuesto sin
              cargo, atención rápida y equipos profesionales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link
                  href="/zonas-de-cobertura"
                  aria-label="Ver todas las zonas de cobertura"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Zonas
                </Link>
              </Button>
              <WhatsAppButton />
              <Button asChild>
                <Link
                  href="/presupuesto-rapido"
                  aria-label="Solicitar presupuesto para arenado en Zona Norte"
                >
                  Pedir Presupuesto
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection locationName="Zona Norte" />

      {/* Primary Areas */}
      <section className="py-16 px-4 " aria-labelledby="primary-areas-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 id="primary-areas-heading" className="text-xl font-bold mb-4">
              Principales Localidades con Servicio de Arenado en zona norte
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {primaryAreas.map((area, index) => {
              return (
                <Card
                  key={area}
                  className="p-3 bg-white border border-blue-100 text-center"
                >
                  <Link
                    href={
                      areaLinks[area as keyof typeof areaLinks] ||
                      `/servicios?zona=${encodeURIComponent(area)}`
                    }
                    aria-label={`Ver servicios de arenado en ${area}`}
                    className="block text-primary font-semibold text-sm hover:underline items-center justify-center"
                  >
                    {area}
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteFormSection />
    </div>
  );
}

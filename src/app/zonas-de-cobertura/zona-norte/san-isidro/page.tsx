import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Award } from "lucide-react";

export default function SanIsidroPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en San Isidro"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "San Isidro" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="San Isidro"
        description="Servicio de arenado móvil profesional en San Isidro. Arenado premium para residencias y comercios, con acabados de alta calidad garantizados."
        features={[
          { icon: MapPin, text: "Respuesta rápida" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en San Isidro",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en San Isidro"
      />

      <ServicesSection locationName="San Isidro" />

      <SomeProjectsSection />
    </main>
  );
}

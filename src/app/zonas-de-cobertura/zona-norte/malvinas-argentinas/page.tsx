import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Shield } from "lucide-react";

export default function MalvinasArgentinasPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Malvinas Argentinas"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Malvinas Argentinas" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Malvinas Argentinas"
        description="Arenado residencial y comercial con atención personalizada y garantía en Malvinas Argentinas. Servicio profesional con resultados garantizados."
        features={[
          { icon: Shield, text: "Atención personalizada" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel:
            "Solicitar presupuesto para arenado en Malvinas Argentinas",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en Malvinas Argentinas"
      />

      <ServicesSection locationName="Malvinas Argentinas" />

      <SomeProjectsSection />
    </main>
  );
}

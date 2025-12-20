import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Zap } from "lucide-react";

export default function CardalesPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Cardales"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Cardales" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Cardales"
        description="Servicio rápido y eficiente de arenado para todo tipo de superficies en Cardales. Equipos profesionales y atención personalizada."
        features={[
          { icon: Zap, text: "Servicio rápido" },
          { icon: Clock, text: "Trabajo eficiente" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Cardales",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en Cardales"
      />

      <ServicesSection locationName="Cardales" />

      <SomeProjectsSection />
    </main>
  );
}

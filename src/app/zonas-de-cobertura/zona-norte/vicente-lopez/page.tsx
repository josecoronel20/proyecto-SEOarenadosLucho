import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Shield } from "lucide-react";

export default function VicenteLopezPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Vicente López"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Vicente López" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Vicente López"
        description="Servicio personalizado de arenado para proyectos residenciales y comerciales en Vicente López. Respuesta rápida y trabajo profesional."
        features={[
          { icon: MapPin, text: "Servicio personalizado" },
          { icon: Clock, text: "Respuesta rápida" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Vicente López",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en Vicente López"
      />

      <ServicesSection locationName="Vicente López" />

      <SomeProjectsSection />
    </main>
  );
}

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Award } from "lucide-react";

export default function ZaratePage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Zárate"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Zárate" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Zárate"
        description="Arenado profesional con precisión garantizada en cada proyecto en Zárate. Servicio móvil con equipos especializados."
        features={[
          { icon: Award, text: "Precisión garantizada" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Zárate",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en Zárate"
      />
      <ServicesSection locationName="Zárate" />

      <SomeProjectsSection />
    </main>
  );
}

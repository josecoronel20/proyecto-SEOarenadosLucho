import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Award } from "lucide-react";

export default function SanFernandoPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en San Fernando"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "San Fernando" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="San Fernando"
        description="Arenado de primera calidad para proyectos residenciales y comerciales en San Fernando. Servicio profesional con resultados garantizados."
        features={[
          { icon: MapPin, text: "Calidad garantizada" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en San Fernando",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en San Fernando"
      />

      <ServicesSection locationName="San Fernando" />

      <SomeProjectsSection />
    </main>
  );
}

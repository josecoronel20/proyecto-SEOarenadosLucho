import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Anchor, Waves, Ship } from "lucide-react";

export default function TigrePage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Tigre"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Tigre" },
        ]}
      />

      <HeroSection
        title="Arenado Naval en"
        titleHighlight="Tigre"
        description="Servicio de arenado móvil especializado en estructuras navales en Tigre. Especialistas en barcos, cascos, cubiertas y piletas con técnicas adaptadas al ambiente marino del Delta."
        features={[
          { icon: Anchor, text: "Especialización naval" },
          { icon: Waves, text: "Ambiente marino" },
          { icon: Ship, text: "Equipos especializados" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto Naval",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado naval en Tigre",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio naval en Tigre"
      />

      <ServicesSection locationName="Tigre" />

      <SomeProjectsSection />
    </main>
  );
}

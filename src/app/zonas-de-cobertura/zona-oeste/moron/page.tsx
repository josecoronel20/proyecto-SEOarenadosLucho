import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Users } from "lucide-react";

export default function MoronPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Morón"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "Morón" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Morón"
        description="Servicio completo de arenado móvil en Morón. Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con atención personalizada."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Users, text: "Atención personalizada" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Morón",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio en Morón"
      />

      <ServicesSection locationName="Morón" />

      <SomeProjectsSection />
    </main>
  );
}

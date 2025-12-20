import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Award } from "lucide-react";

export default function TresDeFebreroPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en 3 de Febrero"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "3 de Febrero" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="3 de Febrero"
        description="Servicio completo de arenado móvil en 3 de Febrero. Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con calidad premium."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Award, text: "Calidad premium" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en 3 de Febrero",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio en 3 de Febrero"
      />

      <ServicesSection locationName="3 de Febrero" />

      <SomeProjectsSection />
    </main>
  );
}

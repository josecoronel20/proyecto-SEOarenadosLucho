import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Clock } from "lucide-react";

export default function HurlinghamPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Hurlingham"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "Hurlingham" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Hurlingham"
        description="Servicio completo de arenado móvil en Hurlingham. Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con respuesta rápida."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Clock, text: "Respuesta rápida" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Hurlingham",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio en Hurlingham"
      />

      <ServicesSection locationName="Hurlingham" />

      <SomeProjectsSection />
    </main>
  );
}

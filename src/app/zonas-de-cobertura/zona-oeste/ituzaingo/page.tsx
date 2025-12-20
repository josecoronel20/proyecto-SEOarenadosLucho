import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Wrench } from "lucide-react";

export default function ItuzaingoPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Ituzaingó"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "Ituzaingó" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Ituzaingó"
        description="Servicio completo de arenado móvil en Ituzaingó. Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con técnicas especializadas."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Wrench, text: "Técnicas especializadas" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Ituzaingó",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio en Ituzaingó"
      />

      <ServicesSection locationName="Ituzaingó" />

      <SomeProjectsSection />
    </main>
  );
}

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Car } from "lucide-react";

export default function MorenoPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Moreno"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "Moreno" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="Moreno"
        description="Servicio de arenado móvil para hogares y comercios en Moreno. Especialistas en piletas, fachadas, muebles y vehículos con atención personalizada y horarios flexibles."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Car, text: "Vehículos familiares" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Moreno",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio en Moreno"
      />

      <ServicesSection locationName="Moreno" />

      <SomeProjectsSection />
    </main>
  );
}

import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
  WhyLocationSection,
  ContactCTASection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Home, Building2, Users, MapPin, Clock, Phone } from "lucide-react";

export default function JoseCPazPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en José C. Paz"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "José C. Paz" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="José C. Paz"
        description="Servicio completo de arenado móvil en José C. Paz. Especialistas en piletas, industrial, barcos, vehículos, piezas metálicas, muebles y fachadas con atención personalizada."
        features={[
          { icon: Home, text: "Servicio residencial" },
          { icon: Building2, text: "Servicio comercial" },
          { icon: Users, text: "Atención familiar" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en José C. Paz",
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte",
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en José C. Paz"
      />

      <ServicesSection locationName="José C. Paz" />

      <SomeProjectsSection />
    </main>
  );
}

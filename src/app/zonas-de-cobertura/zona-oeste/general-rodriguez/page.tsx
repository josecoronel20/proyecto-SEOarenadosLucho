import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  HeroSection,
  ServicesSection,
} from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { Factory, Wrench, Cog } from "lucide-react";

export default function GeneralRodriguezPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en General Rodríguez"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Oeste", href: "/zonas-de-cobertura/zona-oeste" },
          { label: "General Rodríguez" },
        ]}
      />

      <HeroSection
        title="Arenado Industrial en"
        titleHighlight="General Rodríguez"
        description="Servicio de arenado móvil especializado en maquinaria pesada y estructuras industriales en General Rodríguez. Especialistas en proyectos industriales complejos con equipos de gran capacidad."
        features={[
          { icon: Factory, text: "Especialización industrial" },
          { icon: Wrench, text: "Maquinaria pesada" },
          { icon: Cog, text: "Equipos de gran capacidad" },
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto Industrial",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado industrial en General Rodríguez",
        }}
        secondaryButton={{
          text: "Ver Zona Oeste",
          href: "/zonas-de-cobertura/zona-oeste",
          ariaLabel: "Ver todas las localidades de zona oeste",
        }}
        showWhatsApp={true}
        colorScheme="green"
        ariaLabel="Características del servicio industrial en General Rodríguez"
      />

      <ServicesSection locationName="General Rodríguez" />

      <SomeProjectsSection />
    </main>
  );
}

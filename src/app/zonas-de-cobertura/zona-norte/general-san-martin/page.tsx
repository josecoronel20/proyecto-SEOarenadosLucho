import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroSection, ServicesSection, WhyLocationSection, ContactCTASection } from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Shield } from "lucide-react";

export default function GeneralSanMartinPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en General San Martín"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "General San Martín" },
        ]}
      />

      <HeroSection
        title="Arenado en"
        titleHighlight="General San Martín"
        description="Servicio integral de arenado para hogares y empresas en General San Martín. Trabajos profesionales con garantía de calidad."
        features={[
          { icon: Shield, text: "Servicio garantizado" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" }
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en General San Martín"
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte"
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en General San Martín"
      />

    

      <ServicesSection locationName="General San Martín" />

      <SomeProjectsSection />

      
    </main>
  );
}

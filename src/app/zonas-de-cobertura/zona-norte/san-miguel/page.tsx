import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroSection, ServicesSection, WhyLocationSection, ContactCTASection } from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Building2 } from "lucide-react";

export default function SanMiguelPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en San Miguel"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "San Miguel" },
        ]}
      />

      <ServicesSection locationName="San Miguel" />

      <SomeProjectsSection />

      
    </main>
  );
}

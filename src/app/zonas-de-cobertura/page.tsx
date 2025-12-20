import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroSection } from "./componentes/HeroSection";
import { CoverageZonesSection } from "./componentes/CoverageZonesSection";
import { QuoteFormSection } from "@/components/common/QuoteFormSection";

export default function ZonasCoberturaPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de zonas de cobertura"
    >
      <Breadcrumbs segments={[{ label: "Zonas de cobertura" }]} />

      <HeroSection />
      <CoverageZonesSection />

      <QuoteFormSection />
    </main>
  );
}

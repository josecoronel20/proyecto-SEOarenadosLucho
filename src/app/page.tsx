import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import { QueNecesitasArenar } from "@/components/home/QueNecesitasArenar";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import { ComoTrabajamos } from "@/components/common/ComoTrabajamos";
import { ZonasCobertura } from "@/components/common/ZonasCobertura";
import { FaqCorta } from "@/components/common/FaqCorta";
import CTASection from "@/components/common/CTASection";
import { faqsHome } from "@/lib/faqs";
import { WPP_MSG } from "@/lib/wpp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// El FAQPage lista exactamente las mismas preguntas que renderiza <FaqCorta>.
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsHome.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

/**
 * Home = hub de ruteo + prueba, no folleto institucional.
 *
 * El orden importa y sigue el recorrido mental del visitante:
 * promesa → confianza → "esto es lo mío" (ruteo) → "ah, eso es el arenado" →
 * prueba → cómo se contrata → dónde → objeciones → conversión.
 *
 * Blueprint completo: `contexto/marketing/15-sitio-ideal.md` §2.3.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <QueNecesitasArenar />
      <IntroductionSection />
      <ProjectsSection />
      <ComoTrabajamos className="bg-gray-50" />
      <ZonasCobertura className="bg-white border-y border-gray-200" />
      <FaqCorta items={faqsHome} />
      <CTASection message={WPP_MSG.general} />
    </>
  );
}

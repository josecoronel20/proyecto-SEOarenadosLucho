import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroSection, ServicesSection, WhyLocationSection, ContactCTASection } from "@/components/localidades";
import { SomeProjectsSection } from "@/components/common/SompeProjectsSection";
import { MapPin, Clock, Phone, Shield, Award } from "lucide-react";

export default function PilarPage() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página de arenado en Pilar"
    >
      <Breadcrumbs
        segments={[
          { label: "Zonas de cobertura", href: "/zonas-de-cobertura" },
          { label: "Zona Norte", href: "/zonas-de-cobertura/zona-norte" },
          { label: "Pilar" },
        ]}
      />

      <HeroSection
        title="Arenados en"
        titleHighlight="Pilar"
        description="Servicio de arenado móvil especializado en Pilar. Más de 10 años de experiencia local."
        features={[
          { icon: MapPin, text: "Respuesta inmediata" },
          { icon: Clock, text: "Trabajo profesional" },
          { icon: Phone, text: "Presupuesto gratuito" }
        ]}
        primaryButton={{
          text: "Solicitar Presupuesto",
          href: "/presupuesto-rapido",
          ariaLabel: "Solicitar presupuesto para arenado en Pilar"
        }}
        secondaryButton={{
          text: "Ver Zona Norte",
          href: "/zonas-de-cobertura/zona-norte",
          ariaLabel: "Ver todas las localidades de zona norte"
        }}
        showWhatsApp={true}
        colorScheme="blue"
        ariaLabel="Características del servicio en Pilar"
      />
      <ServicesSection locationName="Pilar" />
      
      <WhyLocationSection
        locationName="Pilar"
        advantages={[
          {
            icon: MapPin,
            title: "Ubicación Estratégica",
            description: "Pilar es nuestra base principal, garantizando respuesta inmediata y servicio prioritario para todos los proyectos locales."
          },
          {
            icon: Shield,
            title: "Experiencia Local",
            description: "Más de 10 años sirviendo a Pilar, conocemos las necesidades específicas de la zona y sus industrias."
          },
          {
            icon: Award,
            title: "Equipos Especializados",
            description: "Contamos con la tecnología más avanzada para atender desde proyectos residenciales hasta industriales en Pilar."
          }
        ]}
        colorScheme="blue"
      />

      <SomeProjectsSection />
      
      <ContactCTASection
        locationName="Pilar"
        description="Como nuestra localidad principal, te garantizamos la mejor atención y respuesta inmediata para todos los servicios de arenado."
        colorScheme="blue"
      />
    </main>
  );
}

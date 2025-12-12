import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "./componentes/HeroSection"
import { WhatIsSection } from "./componentes/WhatIsSection"
import { BenefitsSection } from "./componentes/BenefitsSection"
import { ServicesGridSection } from "./componentes/ServicesGridSection"
import { ProcessSection } from "./componentes/ProcessSection"
import { CoverageAreasSection } from "./componentes/CoverageAreasSection"
import { FAQSection } from "./componentes/FAQSection"
import { FinalCTASection } from "./componentes/FinalCTASection"
import type { Metadata } from "next"
import servicesData from "@/data/services.json"
import * as LucideIcons from "lucide-react"
import React from "react"

const iconMap: { [key: string]: React.ElementType } = LucideIcons as any;

// Obtener servicios de superficies (piezas metálicas y muebles)
const surfaceServices = servicesData.services.filter(s => 
  ["arenado-piezas", "arenado-muebles"].includes(s.id)
)

export const metadata: Metadata = {
  title: "Arenado de Superficies en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado de superficies profesional en Zona Norte, Oeste y CABA. Servicios de arenado para superficies metálicas y superficies de madera. Presupuesto gratuito y servicio móvil.",
  keywords: "arenado superficies Pilar, arenado superficies Zona Norte, servicios arenado superficies Buenos Aires, arenado superficies metálicas, arenado superficies madera",
}

export default function ArenadoSuperficiesPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado de Superficies?",
    subtitle: "Servicios profesionales de arenado para diferentes tipos de superficies",
    description: "El arenado de superficies es un servicio especializado de limpieza y preparación mediante la proyección de partículas abrasivas a alta presión, diseñado para diferentes tipos de materiales como metales y maderas. Este proceso se utiliza para eliminar pintura antigua, óxido, corrosión, barniz y contaminantes de superficies metálicas y de madera, preparándolas para nuevos acabados como pintura, barniz, revestimientos o tratamientos protectores especializados según el material.",
    features: [
      "Eliminación completa de pintura, óxido y corrosión en superficies metálicas",
      "Remoción de barniz y pintura antigua en superficies de madera",
      "Preparación profesional para nuevos acabados según el material",
      "Técnicas especializadas adaptadas a cada tipo de superficie",
      "Servicio en taller y móvil según el tipo de superficie",
      "Equipamiento profesional para metales y maderas"
    ],
    additionalInfo: "Nuestro servicio de arenado de superficies está diseñado para trabajar con diferentes materiales, garantizando resultados profesionales mientras preservamos la integridad de cada tipo de superficie."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Layers"] ? <LucideIcons.Layers className="h-6 w-6 text-blue-500" /> : <LucideIcons.Grid className="h-6 w-6 text-blue-500" />,
      title: "Especialistas en Múltiples Materiales",
      description: "Equipamiento y técnicas adaptadas para superficies metálicas y de madera de cualquier tamaño."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Preservación de Materiales",
      description: "Técnicas especializadas que preservan la integridad de cada tipo de superficie mientras las renuevan completamente."
    },
    {
      icon: iconMap["PaintBucket"] ? <LucideIcons.PaintBucket className="h-6 w-6 text-blue-500" /> : null,
      title: "Preparación para Nuevos Acabados",
      description: "Preparamos profesionalmente las superficies para pintura, barniz, revestimientos y tratamientos protectores según el material."
    },
    {
      icon: iconMap["Wrench"] ? <LucideIcons.Wrench className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio en Taller y Móvil",
      description: "Ofrecemos servicio en taller para piezas pequeñas y servicio móvil para estructuras grandes en toda la región."
    },
    {
      icon: iconMap["Clock"] ? <LucideIcons.Clock className="h-6 w-6 text-blue-500" /> : null,
      title: "Trabajos Rápidos y Eficientes",
      description: "Procesos optimizados que minimizan el tiempo de trabajo sin comprometer la calidad del resultado."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia",
      description: "Equipo especializado con amplia trayectoria en servicios de arenado para diferentes tipos de superficies."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos tu superficie y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de material, tamaño y el mejor tratamiento."
    },
    {
      step: "02",
      icon: iconMap["Calendar"] ? <LucideIcons.Calendar className="h-8 w-8 text-white" /> : null,
      title: "Agendamiento",
      description: "Coordinamos la fecha y hora más conveniente. Determinamos si el servicio será en taller o móvil según el tipo de superficie."
    },
    {
      step: "03",
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-8 w-8 text-white" /> : null,
      title: "Arenado Profesional",
      description: "Realizamos el arenado con equipamiento profesional adaptado al tipo de superficie, protegiendo áreas sensibles y siguiendo protocolos de seguridad."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente el área de trabajo y entregamos la superficie lista para el siguiente paso (pintura, barniz, revestimiento, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de superficies en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de superficies en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de superficies en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de superficies en Vicente López" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de superficies en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de superficies en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de superficies en Ituzaingó" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de superficies en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de superficies en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de superficies en Belgrano" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué servicios incluye el arenado de superficies?",
      answer: "Nuestro servicio de arenado de superficies incluye: arenado de superficies metálicas y arenado de superficies de madera. Cada servicio está adaptado específicamente para el tipo de material con técnicas que preservan su integridad."
    },
    {
      question: "¿Cuánto tiempo demora un servicio de arenado de superficies?",
      answer: "El tiempo varía según el tipo de superficie, material y tamaño. Superficies metálicas pequeñas: 1-2 días, Superficies metálicas grandes: 2-3 días, Superficies de madera: 1-3 días. Siempre coordinamos los tiempos con vos."
    },
    {
      question: "¿El arenado es seguro para mi superficie?",
      answer: "Sí, utilizamos técnicas especializadas y equipamiento profesional adaptado a cada tipo de material. Protegemos áreas sensibles y seguimos protocolos específicos para metales y maderas."
    },
    {
      question: "¿Ofrecen servicio en taller o móvil?",
      answer: "Ofrecemos ambos servicios. Piezas pequeñas pueden trabajarse en nuestro taller, mientras que estructuras grandes pueden atenderse con servicio móvil en toda la región."
    },
    {
      question: "¿Qué preparación necesita mi superficie antes del arenado?",
      answer: "Te brindamos una guía completa de preparación según el tipo de material. Generalmente incluye proteger áreas sensibles. Nuestro equipo también realiza preparaciones adicionales al llegar."
    },
    {
      question: "¿Cuál es el costo del arenado de superficies?",
      answer: "El precio varía según el tipo de superficie, material, tamaño y estado. Ofrecemos presupuesto gratuito y sin compromiso. Podés solicitar cotización por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado de Superficies en Pilar y Zona Norte | Servicio Profesional",
    description: "Expertos en arenado de superficies en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. Servicio especializado para superficies metálicas y de madera. Resultados garantizados.",
    benefits: [
      "Presupuesto gratuito y sin compromiso en Zona Norte",
      "Respuesta en 24 horas hábiles - Servicio de superficies",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata para Pilar, San Isidro y Zona Norte. Enviá fotos de tu superficie y recibí presupuesto personalizado al instante.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express para Zona Norte. Completá el formulario y recibí tu presupuesto detallado en 24 horas.",
    bottomTitle: "🏆 Empresa Líder en Arenado de Superficies en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 400 proyectos de superficies completados en Pilar, San Isidro, Tigre y toda la Zona Norte. Servicio profesional con técnicos especializados en diferentes materiales."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de superficies' }]} />

      <HeroSection
        title="Arenado de Superficies en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Servicios profesionales de arenado para diferentes tipos de superficies. Especialistas en superficies metálicas y superficies de madera. Más de 15 años transformando superficies con técnicas especializadas adaptadas a cada material. Presupuesto gratuito y servicio en taller y móvil."
        heroImage="/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png"
        heroImageAlt="Arenado profesional de superficie metálica en San Isidro"
      />

      <WhatIsSection
        title={whatIsContent.title}
        subtitle={whatIsContent.subtitle}
        description={whatIsContent.description}
        features={whatIsContent.features}
        additionalInfo={whatIsContent.additionalInfo}
      />

      <BenefitsSection
        title="Por qué elegir nuestro arenado de superficies"
        subtitle="Servicios profesionales diseñados para diferentes tipos de materiales, con técnicas que preservan la integridad de cada superficie"
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado de Superficies"
        subtitle="Elegí el servicio que necesitás según el tipo de material. Cada uno está especializado y optimizado para el tipo de superficie."
        services={surfaceServices}
        columns={2}
      />

      <ProcessSection
        title="Cómo Trabajamos en Arenado de Superficies"
        subtitle="Un proceso simple y profesional para renovar tus superficies con los mejores resultados"
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado de Superficies en Buenos Aires"
        subtitle="Brindamos servicio profesional de arenado de superficies en toda la región metropolitana de Buenos Aires con servicio en taller y móvil."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado de Superficies"
        subtitle="Resolvemos las dudas más comunes sobre nuestros servicios de arenado de superficies en Pilar, Zona Norte y Buenos Aires."
        faqs={faqs}
      />

      <FinalCTASection
        title={finalCTA.title}
        description={finalCTA.description}
        benefits={finalCTA.benefits}
        whatsappTitle={finalCTA.whatsappTitle}
        whatsappDescription={finalCTA.whatsappDescription}
        formTitle={finalCTA.formTitle}
        formDescription={finalCTA.formDescription}
        bottomTitle={finalCTA.bottomTitle}
        bottomDescription={finalCTA.bottomDescription}
      />
    </div>
  )
}


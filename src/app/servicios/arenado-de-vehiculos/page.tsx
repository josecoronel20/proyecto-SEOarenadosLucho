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

// Obtener servicios de vehículos (automotriz y naval)
const vehicleServices = servicesData.services.filter(s => 
  (s.category === "automotriz" || s.category === "naval") && 
  ["arenado-camiones", "arenado-autos", "arenado-barcos"].includes(s.id)
)

export const metadata: Metadata = {
  title: "Arenado de Vehículos en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado de vehículos profesional en Zona Norte, Oeste y CABA. Servicios de arenado para camiones, autos y barcos. Presupuesto gratuito y servicio móvil.",
  keywords: "arenado vehiculos Pilar, arenado vehiculos Zona Norte, servicios arenado vehiculos Buenos Aires, arenado camiones, arenado autos, arenado barcos",
}

export default function ArenadoVehiculosPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado de Vehículos?",
    subtitle: "Servicios profesionales de arenado para vehículos",
    description: "El arenado de vehículos es un servicio especializado de limpieza y preparación de superficies mediante la proyección de partículas abrasivas a alta presión, diseñado específicamente para vehículos automotores y embarcaciones. Este proceso se utiliza para eliminar pintura antigua, óxido, corrosión y contaminantes de carrocerías, chasis, cascos y estructuras de vehículos, preparándolas para nuevos acabados como pintura automotriz, barniz naval o tratamientos protectores especializados.",
    features: [
      "Eliminación completa de pintura antigua y óxido en vehículos",
      "Remoción de corrosión y contaminantes de carrocerías y chasis",
      "Preparación profesional para pintura automotriz y naval",
      "Técnicas especializadas que preservan la estructura del vehículo",
      "Servicio móvil para vehículos de gran tamaño",
      "Equipamiento profesional adaptado a diferentes tipos de vehículos"
    ],
    additionalInfo: "Nuestro servicio de arenado de vehículos está diseñado para autos, camiones y barcos, garantizando resultados profesionales mientras protegemos la integridad estructural de cada vehículo."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Car"] ? <LucideIcons.Car className="h-6 w-6 text-blue-500" /> : <LucideIcons.Truck className="h-6 w-6 text-blue-500" />,
      title: "Especialistas en Todo Tipo de Vehículos",
      description: "Equipamiento adaptado para autos, camiones y barcos de cualquier tamaño y tipo."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Protección de Estructuras",
      description: "Técnicas especializadas que preservan la integridad de carrocerías, chasis y cascos mientras los renuevan completamente."
    },
    {
      icon: iconMap["PaintBucket"] ? <LucideIcons.PaintBucket className="h-6 w-6 text-blue-500" /> : null,
      title: "Preparación para Pintura",
      description: "Preparamos profesionalmente las superficies para pintura automotriz, naval y tratamientos protectores."
    },
    {
      icon: iconMap["Package"] ? <LucideIcons.Package className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio Móvil para Vehículos",
      description: "Llevamos nuestro equipamiento profesional directamente a tu ubicación en toda la región."
    },
    {
      icon: iconMap["Clock"] ? <LucideIcons.Clock className="h-6 w-6 text-blue-500" /> : null,
      title: "Trabajos Rápidos y Eficientes",
      description: "Procesos optimizados que minimizan el tiempo de trabajo sin comprometer la calidad del resultado."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia",
      description: "Equipo especializado con amplia trayectoria en servicios de arenado para vehículos de alta calidad."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos tu vehículo y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de vehículo, superficie y el mejor tratamiento."
    },
    {
      step: "02",
      icon: iconMap["Calendar"] ? <LucideIcons.Calendar className="h-8 w-8 text-white" /> : null,
      title: "Agendamiento",
      description: "Coordinamos la fecha y hora más conveniente para realizar el servicio en tu vehículo."
    },
    {
      step: "03",
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-8 w-8 text-white" /> : null,
      title: "Arenado Profesional",
      description: "Realizamos el arenado con equipamiento profesional, protegiendo áreas sensibles del vehículo y siguiendo protocolos de seguridad."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente el área de trabajo y entregamos el vehículo listo para el siguiente paso (pintura, barniz, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de vehículos en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de vehículos en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de vehículos en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de vehículos en Vicente López" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de vehículos en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de vehículos en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de vehículos en Ituzaingó" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de vehículos en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de vehículos en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de vehículos en Belgrano" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué servicios incluye el arenado de vehículos?",
      answer: "Nuestro servicio de arenado de vehículos incluye: arenado de camiones, arenado de autos y arenado de barcos. Cada servicio está adaptado específicamente para el tipo de vehículo con técnicas que preservan su estructura."
    },
    {
      question: "¿Cuánto tiempo demora un servicio de arenado de vehículos?",
      answer: "El tiempo varía según el tipo de vehículo y tamaño. Autos: 1-2 días, Camiones: 2-3 días, Barcos: 3-5 días. Siempre coordinamos los tiempos con vos."
    },
    {
      question: "¿El arenado es seguro para mi vehículo?",
      answer: "Sí, utilizamos técnicas especializadas y equipamiento profesional que protege áreas sensibles del vehículo. Cubrimos y protegemos componentes electrónicos, vidrios y otras partes sensibles durante el proceso."
    },
    {
      question: "¿Ofrecen servicio móvil para vehículos?",
      answer: "Sí, brindamos servicio móvil para vehículos de gran tamaño en toda Zona Norte, Oeste y CABA. Llevamos todo el equipamiento necesario directamente a tu ubicación."
    },
    {
      question: "¿Qué preparación necesita mi vehículo antes del arenado?",
      answer: "Te brindamos una guía completa de preparación. Generalmente incluye retirar componentes desmontables y proteger áreas sensibles. Nuestro equipo también realiza preparaciones adicionales al llegar."
    },
    {
      question: "¿Cuál es el costo del arenado de vehículos?",
      answer: "El precio varía según el tipo de vehículo, tamaño y estado. Ofrecemos presupuesto gratuito y sin compromiso. Podés solicitar cotización por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado de Vehículos en Pilar y Zona Norte | Servicio Profesional",
    description: "Expertos en arenado de vehículos en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. Servicio especializado para autos, camiones y barcos. Resultados garantizados.",
    benefits: [
      "Presupuesto gratuito y sin compromiso en Zona Norte",
      "Respuesta en 24 horas hábiles - Servicio de vehículos",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata para Pilar, San Isidro y Zona Norte. Enviá fotos de tu vehículo y recibí presupuesto personalizado al instante.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express para Zona Norte. Completá el formulario y recibí tu presupuesto detallado en 24 horas.",
    bottomTitle: "🏆 Empresa Líder en Arenado de Vehículos en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 300 proyectos de vehículos completados en Pilar, San Isidro, Tigre y toda la Zona Norte. Servicio móvil profesional con técnicos especializados en vehículos."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de vehículos' }]} />

      <HeroSection
        title="Arenado de Vehículos en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Servicios profesionales de arenado para vehículos. Especialistas en camiones, autos y barcos. Más de 15 años transformando vehículos con técnicas especializadas que preservan la estructura. Presupuesto gratuito y servicio móvil."
        heroImage="/images/servicios/servicio-arenado-barco-tigre.png"
        heroImageAlt="Arenado profesional de barco en Tigre"
      />

      <WhatIsSection
        title={whatIsContent.title}
        subtitle={whatIsContent.subtitle}
        description={whatIsContent.description}
        features={whatIsContent.features}
        additionalInfo={whatIsContent.additionalInfo}
      />

      <BenefitsSection
        title="Por qué elegir nuestro arenado de vehículos"
        subtitle="Servicios profesionales diseñados específicamente para vehículos, con técnicas que preservan la estructura"
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado de Vehículos"
        subtitle="Elegí el servicio que necesitás para tu vehículo. Cada uno está especializado y optimizado para el tipo de vehículo."
        services={vehicleServices}
        columns={3}
      />

      <ProcessSection
        title="Cómo Trabajamos en Arenado de Vehículos"
        subtitle="Un proceso simple y profesional para renovar tu vehículo con los mejores resultados"
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado de Vehículos en Buenos Aires"
        subtitle="Brindamos servicio profesional de arenado de vehículos en toda la región metropolitana de Buenos Aires con equipos móviles."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado de Vehículos"
        subtitle="Resolvemos las dudas más comunes sobre nuestros servicios de arenado de vehículos en Pilar, Zona Norte y Buenos Aires."
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


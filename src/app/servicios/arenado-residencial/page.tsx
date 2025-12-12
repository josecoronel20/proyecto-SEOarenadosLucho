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

// Obtener servicios residenciales
const residentialServices = servicesData.services.filter(s => 
  s.category === "residencial" && 
  ["arenado-piletas", "arenado-fachadas", "arenado-pisos", "arenado-muebles"].includes(s.id)
)

export const metadata: Metadata = {
  title: "Arenado Residencial en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado residencial profesional en Zona Norte, Oeste y CABA. Servicios de arenado para piletas, fachadas, pisos y muebles. Presupuesto gratuito y servicio móvil.",
  keywords: "arenado residencial Pilar, arenado residencial Zona Norte, servicios arenado residencial Buenos Aires, arenado piletas, arenado fachadas, arenado pisos, arenado muebles",
}

export default function ArenadoResidencialPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado Residencial?",
    subtitle: "Servicios profesionales de arenado para tu hogar",
    description: "El arenado residencial es un servicio especializado de limpieza y preparación de superficies mediante la proyección de partículas abrasivas a alta presión. Este proceso se utiliza en viviendas para eliminar pintura antigua, óxido, manchas, algas y otros contaminantes de diferentes superficies, preparándolas para nuevos acabados como pintura, barniz o revestimientos.",
    features: [
      "Eliminación completa de pintura antigua y deteriorada",
      "Remoción de óxido, algas, moho y manchas",
      "Preparación profesional para nuevos acabados",
      "Técnicas especializadas que preservan la estructura original",
      "Servicio móvil a domicilio en toda la región",
      "Equipamiento profesional de última generación"
    ],
    additionalInfo: "Nuestro servicio de arenado residencial está diseñado específicamente para viviendas, garantizando resultados profesionales mientras protegemos el entorno y la estructura de tu hogar."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Sparkles"] ? <LucideIcons.Sparkles className="h-6 w-6 text-blue-500" /> : null,
      title: "Limpieza Profunda Garantizada",
      description: "Eliminamos completamente pintura antigua, óxido, algas y contaminantes de todas las superficies residenciales."
    },
    {
      icon: iconMap["PaintBucket"] ? <LucideIcons.PaintBucket className="h-6 w-6 text-blue-500" /> : null,
      title: "Preparación para Nuevos Acabados",
      description: "Preparamos profesionalmente las superficies para pintura, barniz, revestimientos y otros tratamientos."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Preservación de Estructuras",
      description: "Técnicas especializadas que preservan la integridad de tus superficies mientras las renuevan completamente."
    },
    {
      icon: iconMap["Package"] ? <LucideIcons.Package className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio Móvil a Domicilio",
      description: "Llevamos nuestro equipamiento profesional directamente a tu hogar en toda Zona Norte, Oeste y CABA."
    },
    {
      icon: iconMap["Clock"] ? <LucideIcons.Clock className="h-6 w-6 text-blue-500" /> : null,
      title: "Trabajos Rápidos y Eficientes",
      description: "Procesos optimizados que minimizan el tiempo de trabajo sin comprometer la calidad del resultado."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia",
      description: "Equipo especializado con amplia trayectoria en servicios residenciales de alta calidad."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Consulta y Evaluación",
      description: "Evaluamos tu proyecto y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de superficie y el mejor tratamiento."
    },
    {
      step: "02",
      icon: iconMap["Calendar"] ? <LucideIcons.Calendar className="h-8 w-8 text-white" /> : null,
      title: "Agendamiento",
      description: "Coordinamos la fecha y hora más conveniente para realizar el servicio en tu hogar."
    },
    {
      step: "03",
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-8 w-8 text-white" /> : null,
      title: "Arenado Profesional",
      description: "Realizamos el arenado con equipamiento profesional, protegiendo áreas circundantes y siguiendo protocolos de seguridad."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente el área de trabajo y entregamos la superficie lista para el siguiente paso (pintura, barniz, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado residencial en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado residencial en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado residencial en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado residencial en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado residencial en San Fernando" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado residencial en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado residencial en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado residencial en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado residencial en Morón" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado residencial en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado residencial en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado residencial en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado residencial en Núñez" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué servicios incluye el arenado residencial?",
      answer: "Nuestro servicio de arenado residencial incluye: arenado de piletas, arenado de fachadas, arenado de pisos y arenado de muebles. Cada servicio está adaptado específicamente para uso residencial con técnicas que preservan la estructura de tu hogar."
    },
    {
      question: "¿Cuánto tiempo demora un servicio de arenado residencial?",
      answer: "El tiempo varía según el tipo de superficie y tamaño del proyecto. Piletas pequeñas: 1-2 días, Fachadas medianas: 2-3 días, Pisos: 1-2 días, Muebles: 1-3 días según tamaño. Siempre coordinamos los tiempos con vos."
    },
    {
      question: "¿El arenado residencial es seguro para mi hogar?",
      answer: "Sí, utilizamos técnicas especializadas y equipamiento profesional que protege áreas circundantes. Cubrimos y protegemos muebles, plantas y otras superficies sensibles durante el proceso."
    },
    {
      question: "¿Ofrecen servicio móvil a domicilio?",
      answer: "Sí, brindamos servicio móvil a domicilio en toda Zona Norte, Oeste y CABA. Llevamos todo el equipamiento necesario directamente a tu hogar."
    },
    {
      question: "¿Qué preparación necesita mi hogar antes del arenado?",
      answer: "Te brindamos una guía completa de preparación. Generalmente incluye proteger muebles cercanos, plantas y áreas sensibles. Nuestro equipo también realiza preparaciones adicionales al llegar."
    },
    {
      question: "¿Cuál es el costo del arenado residencial?",
      answer: "El precio varía según el tipo de superficie, tamaño y estado. Ofrecemos presupuesto gratuito y sin compromiso. Podés solicitar cotización por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado Residencial en Pilar y Zona Norte | Servicio Profesional Local",
    description: "Expertos en arenado residencial en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. Servicio local especializado para tu hogar. Resultados garantizados.",
    benefits: [
      "Presupuesto gratuito y sin compromiso en Zona Norte",
      "Respuesta en 24 horas hábiles - Servicio local",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata para Pilar, San Isidro y Zona Norte. Enviá fotos de tu proyecto y recibí presupuesto personalizado al instante.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express para Zona Norte. Completá el formulario y recibí tu presupuesto detallado en 24 horas.",
    bottomTitle: "🏆 Empresa Líder en Arenado Residencial en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 500 proyectos residenciales completados en Pilar, San Isidro, Tigre y toda la Zona Norte. Servicio móvil profesional con técnicos locales especializados."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado residencial' }]} />

      <HeroSection
        title="Arenado Residencial en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Servicios profesionales de arenado para tu hogar. Especialistas en piletas, fachadas, pisos y muebles. Más de 15 años transformando viviendas con técnicas especializadas que preservan la estructura de tu hogar. Presupuesto gratuito y servicio móvil a domicilio."
        heroImage="/images/servicios/servicio-arenado-pileta-pilar.png"
        heroImageAlt="Arenado profesional de pileta en Pilar"
      />

      <WhatIsSection
        title={whatIsContent.title}
        subtitle={whatIsContent.subtitle}
        description={whatIsContent.description}
        features={whatIsContent.features}
        additionalInfo={whatIsContent.additionalInfo}
      />

      <BenefitsSection
        title="Por qué elegir nuestro arenado residencial"
        subtitle="Servicios profesionales diseñados específicamente para viviendas, con técnicas que preservan la estructura de tu hogar"
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado Residencial"
        subtitle="Elegí el servicio que necesitás para tu hogar. Cada uno está especializado y optimizado para uso residencial."
        services={residentialServices}
        columns={2}
      />

      <ProcessSection
        title="Cómo Trabajamos en Arenado Residencial"
        subtitle="Un proceso simple y profesional para renovar tu hogar con los mejores resultados"
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado Residencial en Buenos Aires"
        subtitle="Brindamos servicio profesional de arenado residencial en toda la región metropolitana de Buenos Aires con equipos móviles."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado Residencial"
        subtitle="Resolvemos las dudas más comunes sobre nuestros servicios de arenado residencial en Pilar, Zona Norte y Buenos Aires."
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


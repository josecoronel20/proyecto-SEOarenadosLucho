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

// Obtener servicios industriales
const industrialServices = servicesData.services.filter(s => 
  s.category === "industrial" && 
  ["arenado-tanques", "arenado-estructuras-metalicas", "arenado-edificios-antiguos", "arenado-en-fabrica"].includes(s.id)
)

export const metadata: Metadata = {
  title: "Arenado Industrial en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado industrial profesional en Zona Norte, Oeste y CABA. Servicios de arenado para tanques, estructuras metálicas, edificios antiguos y fábricas. Presupuesto gratuito y servicio móvil.",
  keywords: "arenado industrial Pilar, arenado industrial Zona Norte, servicios arenado industrial Buenos Aires, arenado tanques, arenado estructuras metálicas, arenado edificios antiguos, arenado en fábrica",
}

export default function ArenadoIndustrialPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado Industrial?",
    subtitle: "Servicios profesionales de arenado para la industria",
    description: "El arenado industrial es un servicio especializado de limpieza y preparación de superficies mediante la proyección de partículas abrasivas a alta presión, diseñado específicamente para aplicaciones industriales. Este proceso se utiliza en fábricas, plantas industriales y estructuras comerciales para eliminar óxido, corrosión, pintura antigua y contaminantes de grandes superficies, preparándolas para nuevos acabados protectores como pintura epoxi, anticorrosivos o revestimientos especializados.",
    features: [
      "Eliminación completa de óxido y corrosión en estructuras metálicas",
      "Remoción de pintura antigua y contaminantes industriales",
      "Preparación profesional para pintura epoxi y anticorrosivos",
      "Técnicas especializadas para grandes volúmenes y estructuras",
      "Servicio móvil en fábricas y plantas industriales",
      "Equipamiento profesional de alta capacidad"
    ],
    additionalInfo: "Nuestro servicio de arenado industrial está diseñado para cumplir con los estándares más exigentes de la industria, garantizando resultados profesionales mientras optimizamos tiempos y costos para operaciones industriales."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Factory"] ? <LucideIcons.Factory className="h-6 w-6 text-blue-500" /> : <LucideIcons.Building className="h-6 w-6 text-blue-500" />,
      title: "Especialistas en Grandes Volúmenes",
      description: "Equipamiento de alta capacidad para estructuras industriales, tanques y fábricas de cualquier tamaño."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Protección Anticorrosiva",
      description: "Eliminación completa de óxido y corrosión, preparando superficies para tratamientos protectores duraderos."
    },
    {
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-6 w-6 text-blue-500" /> : null,
      title: "Técnicas Optimizadas",
      description: "Procesos especializados que minimizan tiempos de inactividad en operaciones industriales."
    },
    {
      icon: iconMap["Package"] ? <LucideIcons.Package className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio Móvil Industrial",
      description: "Llevamos nuestro equipamiento profesional directamente a tu fábrica o planta en toda la región."
    },
    {
      icon: iconMap["Clock"] ? <LucideIcons.Clock className="h-6 w-6 text-blue-500" /> : null,
      title: "Trabajos Rápidos y Eficientes",
      description: "Procesos optimizados que minimizan el tiempo de trabajo sin comprometer la calidad del resultado."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia Industrial",
      description: "Equipo especializado con amplia trayectoria en servicios industriales de alta calidad."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos tu proyecto industrial y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de superficie, volumen y el mejor tratamiento."
    },
    {
      step: "02",
      icon: iconMap["Calendar"] ? <LucideIcons.Calendar className="h-8 w-8 text-white" /> : null,
      title: "Planificación",
      description: "Coordinamos la fecha y horario más conveniente para minimizar la interrupción de tus operaciones industriales."
    },
    {
      step: "03",
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-8 w-8 text-white" /> : null,
      title: "Arenado Industrial Profesional",
      description: "Realizamos el arenado con equipamiento profesional de alta capacidad, protegiendo áreas circundantes y siguiendo protocolos de seguridad industrial."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente el área de trabajo y entregamos la superficie lista para el siguiente paso (pintura epoxi, anticorrosivos, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado industrial en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado industrial en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado industrial en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado industrial en Vicente López" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado industrial en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado industrial en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado industrial en Ituzaingó" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado industrial en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado industrial en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado industrial en Belgrano" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué servicios incluye el arenado industrial?",
      answer: "Nuestro servicio de arenado industrial incluye: arenado de tanques, arenado de estructuras metálicas, arenado de edificios antiguos y arenado en fábrica. Cada servicio está adaptado específicamente para aplicaciones industriales con técnicas que optimizan tiempos y costos."
    },
    {
      question: "¿Cuánto tiempo demora un servicio de arenado industrial?",
      answer: "El tiempo varía según el tipo de superficie y tamaño del proyecto. Tanques medianos: 2-3 días, Estructuras metálicas grandes: 3-5 días, Edificios antiguos: 4-7 días, Fábricas: según superficie. Siempre coordinamos los tiempos con vos para minimizar interrupciones."
    },
    {
      question: "¿El arenado industrial es seguro para mis operaciones?",
      answer: "Sí, utilizamos técnicas especializadas y equipamiento profesional que protege áreas circundantes. Cubrimos y protegemos maquinaria, equipos y otras superficies sensibles durante el proceso."
    },
    {
      question: "¿Ofrecen servicio móvil en fábricas?",
      answer: "Sí, brindamos servicio móvil directamente en fábricas y plantas industriales en toda Zona Norte, Oeste y CABA. Llevamos todo el equipamiento necesario de alta capacidad."
    },
    {
      question: "¿Qué preparación necesita mi fábrica antes del arenado?",
      answer: "Te brindamos una guía completa de preparación. Generalmente incluye proteger maquinaria cercana, equipos y áreas sensibles. Nuestro equipo también realiza preparaciones adicionales al llegar."
    },
    {
      question: "¿Cuál es el costo del arenado industrial?",
      answer: "El precio varía según el tipo de superficie, tamaño y estado. Ofrecemos presupuesto gratuito y sin compromiso. Podés solicitar cotización por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado Industrial en Pilar y Zona Norte | Servicio Profesional Industrial",
    description: "Expertos en arenado industrial en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires. Servicio especializado para la industria. Resultados garantizados.",
    benefits: [
      "Presupuesto gratuito y sin compromiso en Zona Norte",
      "Respuesta en 24 horas hábiles - Servicio industrial",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata para Pilar, San Isidro y Zona Norte. Enviá fotos de tu proyecto industrial y recibí presupuesto personalizado al instante.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express para Zona Norte. Completá el formulario y recibí tu presupuesto detallado en 24 horas.",
    bottomTitle: "🏆 Empresa Líder en Arenado Industrial en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 200 proyectos industriales completados en Pilar, San Isidro, Tigre y toda la Zona Norte. Servicio móvil profesional con técnicos especializados en industria."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado industrial' }]} />

      <HeroSection
        title="Arenado Industrial en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Servicios profesionales de arenado para la industria. Especialistas en tanques, estructuras metálicas, edificios antiguos y fábricas. Más de 15 años transformando operaciones industriales con técnicas especializadas que optimizan tiempos y costos. Presupuesto gratuito y servicio móvil a fábricas."
        heroImage="/images/servicios/servicio-arenado-estructura-metalica-pilar.png"
        heroImageAlt="Arenado profesional de estructura metálica en Pilar"
      />

      <WhatIsSection
        title={whatIsContent.title}
        subtitle={whatIsContent.subtitle}
        description={whatIsContent.description}
        features={whatIsContent.features}
        additionalInfo={whatIsContent.additionalInfo}
      />

      <BenefitsSection
        title="Por qué elegir nuestro arenado industrial"
        subtitle="Servicios profesionales diseñados específicamente para la industria, con técnicas que optimizan tiempos y costos"
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado Industrial"
        subtitle="Elegí el servicio que necesitás para tu operación industrial. Cada uno está especializado y optimizado para aplicaciones industriales."
        services={industrialServices}
        columns={2}
      />

      <ProcessSection
        title="Cómo Trabajamos en Arenado Industrial"
        subtitle="Un proceso simple y profesional para renovar tus instalaciones industriales con los mejores resultados"
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado Industrial en Buenos Aires"
        subtitle="Brindamos servicio profesional de arenado industrial en toda la región metropolitana de Buenos Aires con equipos móviles de alta capacidad."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado Industrial"
        subtitle="Resolvemos las dudas más comunes sobre nuestros servicios de arenado industrial en Pilar, Zona Norte y Buenos Aires."
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


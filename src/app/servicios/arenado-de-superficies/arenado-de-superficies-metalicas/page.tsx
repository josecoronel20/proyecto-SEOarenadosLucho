import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { HeroSection } from "../../componentes/HeroSection"
import { WhatIsSection } from "../../componentes/WhatIsSection"
import { BenefitsSection } from "../../componentes/BenefitsSection"
import { ServicesGridSection } from "../../componentes/ServicesGridSection"
import { ProcessSection } from "../../componentes/ProcessSection"
import { CoverageAreasSection } from "../../componentes/CoverageAreasSection"
import { FAQSection } from "../../componentes/FAQSection"
import { FinalCTASection } from "../../componentes/FinalCTASection"
import type { Metadata } from "next"
import servicesData from "@/data/services.json"
import * as LucideIcons from "lucide-react"

const iconMap: { [key: string]: React.ElementType } = LucideIcons as any;

// Obtener servicios de superficies metálicas
const metalSurfaceServices = servicesData.services.filter(s => 
  s.id === "arenado-piezas"
)

export const metadata: Metadata = {
  title: "Arenado de Superficies Metálicas en Zona Norte, Oeste y CABA | Servicios Profesionales - Arenados Lucho",
  description: "Arenado de superficies metálicas, granallado de superficies metálicas y restauración de superficies metálicas en Zona Norte, Oeste y CABA. Limpieza de superficies metálicas y preparación de superficies metálicas para pintar. Presupuesto gratuito.",
  keywords: "arenado superficies metalicas Pilar, arenado superficies metalicas Zona Norte, limpieza superficies metalicas Buenos Aires, restauracion superficies metalicas, preparacion superficies metalicas para pintar, arenado profesional de superficies metalicas, granallado superficies metalicas, presupuesto arenado superficies metalicas, servicio arenado superficies metalicas CABA, contratar arenado superficies metalicas, cotizar arenado superficies metalicas, arenado superficies metalicas zona norte, arenado superficies metalicas zona oeste",
}

export default function ArenadoSuperficiesMetalicasPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado de Superficies Metálicas?",
    subtitle: "Servicios profesionales de arenado para superficies metálicas",
    description: "El arenado de superficies metálicas es un servicio especializado de limpieza y preparación mediante la proyección de partículas abrasivas a alta presión, diseñado específicamente para piezas metálicas, estructuras y componentes. Este proceso se utiliza para eliminar óxido, corrosión, pintura antigua y contaminantes de superficies metálicas, preparándolas para nuevos acabados protectores como pintura industrial, anticorrosivos o recubrimientos especializados.",
    features: [
      "Eliminación completa de óxido y corrosión en superficies metálicas",
      "Remoción de pintura antigua y contaminantes",
      "Preparación profesional para pintura industrial y anticorrosivos",
      "Técnicas especializadas que preservan la integridad del metal",
      "Servicio en taller y móvil para piezas grandes",
      "Equipamiento profesional de última generación"
    ],
    additionalInfo: "Nuestro servicio de arenado de superficies metálicas está diseñado para cumplir con los estándares más exigentes, garantizando resultados profesionales mientras preservamos la estructura original del metal."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Sparkles"] ? <LucideIcons.Sparkles className="h-6 w-6 text-blue-500" /> : null,
      title: "Limpieza Profesional de Superficies Metálicas",
      description: "Eliminamos completamente óxido, corrosión, pintura antigua y contaminantes de todas las superficies metálicas."
    },
    {
      icon: iconMap["PaintBucket"] ? <LucideIcons.PaintBucket className="h-6 w-6 text-blue-500" /> : null,
      title: "Preparación de Superficies Metálicas para Pintar",
      description: "Preparamos profesionalmente las superficies metálicas para pintura industrial, anticorrosivos y recubrimientos especializados."
    },
    {
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-6 w-6 text-blue-500" /> : null,
      title: "Arenado Profesional de Superficies Metálicas",
      description: "Arenado profesional con equipamiento de última generación y técnicas especializadas para piezas metálicas."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Restauración Segura de Superficies Metálicas",
      description: "Proceso certificado que preserva la integridad estructural del metal mientras elimina contaminantes."
    },
    {
      icon: iconMap["Package"] ? <LucideIcons.Package className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio en Taller y Móvil",
      description: "Servicio en cabina para piezas pequeñas y servicio móvil para estructuras grandes en toda la región."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia",
      description: "Equipo especializado con amplia trayectoria en arenado y restauración de superficies metálicas."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos tu superficie metálica y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de metal, estado y el mejor tratamiento."
    },
    {
      step: "02",
      icon: iconMap["Calendar"] ? <LucideIcons.Calendar className="h-8 w-8 text-white" /> : null,
      title: "Planificación",
      description: "Coordinamos la fecha y horario más conveniente. Determinamos si el servicio será en taller o móvil según el tamaño de la pieza."
    },
    {
      step: "03",
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-8 w-8 text-white" /> : null,
      title: "Arenado de Precisión",
      description: "Realizamos el arenado con equipamiento profesional, controlando presión y materiales según el tipo de metal y acabado deseado."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente la superficie y entregamos la pieza lista para el siguiente paso (pintura industrial, anticorrosivos, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de superficies metálicas en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de superficies metálicas en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de superficies metálicas en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de superficies metálicas en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de superficies metálicas en San Fernando" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de superficies metálicas en Malvinas Argentinas" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de superficies metálicas en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de superficies metálicas en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de superficies metálicas en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de superficies metálicas en Morón" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de superficies metálicas en Hurlingham" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de superficies metálicas en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de superficies metálicas en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de superficies metálicas en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de superficies metálicas en Núñez" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de superficies metálicas en Villa Crespo" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué es el arenado de superficies metálicas?",
      answer: "El arenado de superficies metálicas es un servicio especializado de limpieza y preparación mediante la proyección de partículas abrasivas a alta presión. Se utiliza para eliminar óxido, corrosión, pintura antigua y contaminantes, preparando las superficies metálicas para nuevos acabados protectores como pintura industrial o anticorrosivos."
    },
    {
      question: "¿Cuánto tiempo demora el arenado de superficies metálicas?",
      answer: "El tiempo varía según el tamaño y estado de la superficie metálica. Piezas pequeñas: 1-2 días laborables, Estructuras medianas: 2-3 días, Estructuras grandes o complejas: 3-5 días. Disponemos de servicio express con equipamiento especializado."
    },
    {
      question: "¿Qué cuidados necesitan las superficies metálicas después del arenado?",
      answer: "Después del arenado profesional, recomendamos: Protección contra humedad inmediata, Aplicación rápida de pintura industrial o recubrimiento según el acabado deseado, Evitar exposición prolongada a contaminantes. Proporcionamos guía completa de cuidados y seguimiento técnico post-servicio."
    },
    {
      question: "¿El arenado de superficies metálicas puede dañar la estructura?",
      answer: "No, nuestro servicio profesional de arenado de superficies metálicas utiliza técnicas especializadas certificadas y personal altamente capacitado. El proceso preserva 100% la estructura original, eliminando únicamente óxido, corrosión y contaminantes. Contamos con certificaciones profesionales y más de 15 años de experiencia."
    },
    {
      question: "¿Cuáles son las zonas de cobertura para arenado de superficies metálicas?",
      answer: "Brindamos servicio integral de arenado de superficies metálicas en: Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, Malvinas Argentinas. Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez. CABA: Núñez, Belgrano, Palermo, Villa Crespo. Disponemos de unidades móviles completamente equipadas y tecnología especializada."
    },
    {
      question: "¿Cuál es el costo del arenado de superficies metálicas profesional?",
      answer: "El precio del arenado de superficies metálicas profesional varía según factores como tipo de metal, dimensiones, estado del óxido y acabado deseado. Ofrecemos presupuesto arenado de superficies metálicas detallado sin cargo que incluye asesoramiento especializado. Podés cotizar arenado de superficies metálicas por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado de Superficies Metálicas en Pilar y Zona Norte | Servicio Profesional Local",
    description: "Expertos en arenado profesional de superficies metálicas, granallado de superficies metálicas y restauración de superficies metálicas. Servicio local especializado en eliminación de óxido, corrosión y preparación de superficies metálicas. Resultados garantizados.",
    benefits: [
      "Presupuesto arenado de superficies metálicas gratuito y sin compromiso",
      "Respuesta en 24 horas hábiles - Servicio local",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata. Enviá fotos de tu superficie metálica y recibí presupuesto arenado de superficies metálicas personalizado al instante. Podés cotizar arenado de superficies metálicas ahora.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express. Completá el formulario y recibí tu presupuesto arenado de superficies metálicas detallado en 24 horas. Podés cotizar arenado de superficies metálicas online.",
    bottomTitle: "🏆 Empresa Líder en Arenado de Superficies Metálicas en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 100 propietarios confían en nuestro servicio local de arenado profesional de superficies metálicas certificado. Equipo especializado con 15 años de experiencia en limpieza de superficies metálicas. Contratar arenado de superficies metálicas nunca fue tan fácil."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de superficies metálicas' }]} />

      <HeroSection
        title="Arenado de Superficies Metálicas en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Arenados Lucho ofrece limpieza profesional de superficies metálicas y restauración de superficies metálicas. Especialistas en arenado de superficies metálicas, granallado de superficies metálicas y limpieza de superficies metálicas. Brindamos servicio de arenado de superficies metálicas CABA, arenado de superficies metálicas zona norte y arenado de superficies metálicas zona oeste. Atendemos en Pilar, San Isidro y todo el corredor norte de Buenos Aires. Más de 15 años brindando servicios premium de arenado profesional de superficies metálicas para piezas industriales, estructuras y componentes. Eliminación garantizada de óxido, corrosión y preparación de superficies metálicas para pintar."
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
        title="Por qué elegir nuestro arenado de superficies metálicas"
        subtitle="Empresa líder en arenado de superficies metálicas, granallado de superficies metálicas y restauración de superficies metálicas en Pilar, San Isidro y todo el corredor norte de Buenos Aires"
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado de Superficies Metálicas"
        subtitle="Servicio profesional especializado en arenado de superficies metálicas para piezas industriales, estructuras y componentes."
        services={metalSurfaceServices}
        columns={2}
      />

      <ProcessSection
        title="Cómo Trabajamos en Arenado de Superficies Metálicas"
        subtitle="Un proceso simple y efectivo para restaurar tu superficie metálica con los mejores resultados. Arenado profesional de superficies metálicas con técnicas especializadas."
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado de Superficies Metálicas en Buenos Aires"
        subtitle="Servicio de arenado de superficies metálicas CABA, arenado de superficies metálicas zona norte y arenado de superficies metálicas zona oeste. Brindamos servicio profesional de arenado profesional de superficies metálicas y granallado de superficies metálicas en toda la región metropolitana de Buenos Aires con equipos móviles."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado de Superficies Metálicas"
        subtitle="Información completa sobre servicios profesionales de arenado de superficies metálicas, granallado de superficies metálicas y restauración de superficies metálicas. Especialistas certificados en limpieza de superficies metálicas y preparación de superficies metálicas para pintar."
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


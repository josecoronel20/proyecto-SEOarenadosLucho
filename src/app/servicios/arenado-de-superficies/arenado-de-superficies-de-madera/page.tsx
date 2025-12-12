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

// Obtener servicios de superficies de madera
const woodSurfaceServices = servicesData.services.filter(s => 
  s.id === "arenado-muebles"
)

export const metadata: Metadata = {
  title: "Arenado de Superficies de Madera en Zona Norte, Oeste y CABA | Restauración Profesional - Arenados Lucho",
  description: "Arenado de superficies de madera, granallado de superficies de madera y restauración de superficies de madera en Zona Norte, Oeste y CABA. Limpieza de superficies de madera y preparación de superficies de madera para pintar. Presupuesto gratuito.",
  keywords: "arenado superficies madera Pilar, arenado superficies madera Zona Norte, restauracion superficies madera Buenos Aires, limpieza superficies madera, preparacion superficies madera para pintar, arenado profesional de superficies madera, granallado superficies madera, presupuesto arenado superficies madera, servicio arenado superficies madera CABA, contratar arenado superficies madera, cotizar arenado superficies madera, arenado superficies madera zona norte, arenado superficies madera zona oeste",
}

export default function ArenadoSuperficiesMaderaPage() {
  // Contenido para WhatIsSection
  const whatIsContent = {
    title: "¿Qué es el Arenado de Superficies de Madera?",
    subtitle: "Servicios profesionales de arenado para superficies de madera",
    description: "El arenado de superficies de madera es un servicio especializado de limpieza y preparación mediante la proyección de partículas abrasivas a alta presión, diseñado específicamente para muebles, estructuras y componentes de madera. Este proceso se utiliza para eliminar pintura antigua, barniz deteriorado, manchas y contaminantes de superficies de madera, preparándolas para nuevos acabados como barniz natural, lacado, pintura o tratamientos protectores especializados.",
    features: [
      "Eliminación completa de pintura antigua y barniz deteriorado",
      "Remoción de manchas, óxido y contaminantes de la madera",
      "Preparación profesional para barnizado, lacado o pintura",
      "Técnicas especializadas que preservan la veta natural de la madera",
      "Servicio en taller y móvil para piezas grandes",
      "Equipamiento profesional que respeta la integridad de la madera"
    ],
    additionalInfo: "Nuestro servicio de arenado de superficies de madera está diseñado para preservar la belleza natural de la madera mientras eliminamos capas deterioradas, garantizando resultados profesionales que realzan la estructura original."
  }

  // Contenido para BenefitsSection
  const benefits = [
    {
      icon: iconMap["Sparkles"] ? <LucideIcons.Sparkles className="h-6 w-6 text-blue-500" /> : null,
      title: "Restauración Profesional de Superficies de Madera",
      description: "Eliminamos completamente pintura antigua, barniz deteriorado, manchas y contaminantes de todas las superficies de madera, preservando la veta natural."
    },
    {
      icon: iconMap["PaintBucket"] ? <LucideIcons.PaintBucket className="h-6 w-6 text-blue-500" /> : null,
      title: "Preparación de Superficies de Madera para Pintar",
      description: "Preparamos profesionalmente las superficies de madera para barnizado natural, lacado, pintura o tratamientos protectores especializados."
    },
    {
      icon: iconMap["Gauge"] ? <LucideIcons.Gauge className="h-6 w-6 text-blue-500" /> : null,
      title: "Arenado Profesional de Superficies de Madera",
      description: "Arenado profesional con equipamiento de última generación y técnicas especializadas que preservan la integridad de la madera."
    },
    {
      icon: iconMap["Shield"] ? <LucideIcons.Shield className="h-6 w-6 text-blue-500" /> : null,
      title: "Preservación de la Veta Natural",
      description: "Proceso certificado que preserva la estructura y veta natural de la madera mientras elimina capas deterioradas."
    },
    {
      icon: iconMap["Package"] ? <LucideIcons.Package className="h-6 w-6 text-blue-500" /> : null,
      title: "Servicio en Taller y Móvil",
      description: "Servicio en cabina para piezas pequeñas y servicio móvil para estructuras grandes en toda la región."
    },
    {
      icon: iconMap["Award"] ? <LucideIcons.Award className="h-6 w-6 text-blue-500" /> : null,
      title: "Más de 15 Años de Experiencia",
      description: "Equipo especializado con amplia trayectoria en arenado y restauración de superficies de madera antiguas y modernas."
    }
  ]

  // Contenido para ProcessSection
  const process = [
    {
      step: "01",
      icon: iconMap["ClipboardCheck"] ? <LucideIcons.ClipboardCheck className="h-8 w-8 text-white" /> : null,
      title: "Evaluación y Presupuesto",
      description: "Evaluamos tu superficie de madera y te brindamos un presupuesto detallado sin compromiso. Analizamos el tipo de madera, estado de la pintura/barniz y el mejor tratamiento."
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
      description: "Realizamos el arenado con equipamiento profesional, controlando presión y materiales según el tipo de madera para preservar la veta natural."
    },
    {
      step: "04",
      icon: iconMap["CheckCircle"] ? <LucideIcons.CheckCircle className="h-8 w-8 text-white" /> : null,
      title: "Limpieza y Entrega",
      description: "Limpiamos completamente la superficie y entregamos la pieza lista para el siguiente paso (barnizado, lacado, pintura, etc.)."
    }
  ]

  // Contenido para CoverageAreasSection
  const coverageAreas = {
    "Zona Norte": [
      { name: "Pilar", slug: "/zonas-de-cobertura/zona-norte/pilar", description: "Arenado de superficies de madera en Pilar" },
      { name: "San Isidro", slug: "/zonas-de-cobertura/zona-norte/san-isidro", description: "Arenado de superficies de madera en San Isidro" },
      { name: "Tigre", slug: "/zonas-de-cobertura/zona-norte/tigre", description: "Arenado de superficies de madera en Tigre" },
      { name: "Vicente López", slug: "/zonas-de-cobertura/zona-norte/vicente-lopez", description: "Arenado de superficies de madera en Vicente López" },
      { name: "San Fernando", slug: "/zonas-de-cobertura/zona-norte/san-fernando", description: "Arenado de superficies de madera en San Fernando" },
      { name: "Malvinas Argentinas", slug: "/zonas-de-cobertura/zona-norte/malvinas-argentinas", description: "Arenado de superficies de madera en Malvinas Argentinas" }
    ],
    "Zona Oeste": [
      { name: "Moreno", slug: "/zonas-de-cobertura/zona-oeste/moreno", description: "Arenado de superficies de madera en Moreno" },
      { name: "General Rodríguez", slug: "/zonas-de-cobertura/zona-oeste/general-rodriguez", description: "Arenado de superficies de madera en General Rodríguez" },
      { name: "Ituzaingó", slug: "/zonas-de-cobertura/zona-oeste/ituzaingo", description: "Arenado de superficies de madera en Ituzaingó" },
      { name: "Morón", slug: "/zonas-de-cobertura/zona-oeste/moron", description: "Arenado de superficies de madera en Morón" },
      { name: "Hurlingham", slug: "/zonas-de-cobertura/zona-oeste/hurlingham", description: "Arenado de superficies de madera en Hurlingham" }
    ],
    "CABA": [
      { name: "Palermo", slug: "/zonas-de-cobertura/caba/palermo", description: "Arenado de superficies de madera en Palermo" },
      { name: "Recoleta", slug: "/zonas-de-cobertura/caba/recoleta", description: "Arenado de superficies de madera en Recoleta" },
      { name: "Belgrano", slug: "/zonas-de-cobertura/caba/belgrano", description: "Arenado de superficies de madera en Belgrano" },
      { name: "Núñez", slug: "/zonas-de-cobertura/caba/nunez", description: "Arenado de superficies de madera en Núñez" },
      { name: "Villa Crespo", slug: "/zonas-de-cobertura/caba/villa-crespo", description: "Arenado de superficies de madera en Villa Crespo" }
    ]
  }

  // Contenido para FAQSection
  const faqs = [
    {
      question: "¿Qué es el arenado de superficies de madera?",
      answer: "El arenado de superficies de madera es un servicio especializado de limpieza y preparación mediante la proyección de partículas abrasivas a alta presión. Se utiliza para eliminar pintura antigua, barniz deteriorado, manchas y contaminantes, preparando las superficies de madera para nuevos acabados como barniz natural, lacado, pintura o tratamientos protectores especializados."
    },
    {
      question: "¿Cuánto tiempo demora el arenado de superficies de madera?",
      answer: "El tiempo varía según el tamaño y estado de la superficie de madera. Superficies pequeñas como sillas o mesas auxiliares: 24-48 horas, Superficies medianas como armarios o mesas de comedor: 2-3 días, Superficies grandes o con detalles especiales: 3-5 días. Servicio express disponible con equipamiento profesional especializado."
    },
    {
      question: "¿Qué cuidados necesitan las superficies de madera después del arenado?",
      answer: "Post arenado profesional recomendamos: Almacenamiento en ambiente seco y controlado, Manipulación cuidadosa evitando golpes y rayones, Aplicación inmediata de protección (barniz, laca o pintura según especificaciones), Control de humedad y limpieza periódica. Brindamos manual completo de cuidados y garantía por escrito."
    },
    {
      question: "¿El arenado profesional daña la madera o estructura original de la superficie de madera?",
      answer: "No, nuestro servicio certificado de arenado profesional de superficies de madera preserva 100% la integridad estructural y veta natural de la madera. Utilizamos tecnología de última generación y personal especializado con más de 15 años de experiencia. El proceso elimina únicamente capas deterioradas (pintura antigua, barniz, óxido) manteniendo intacta la estructura original de la superficie de madera."
    },
    {
      question: "¿Cuáles son las zonas de cobertura para arenado de superficies de madera?",
      answer: "Servicio integral de arenado de superficies de madera en: Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Fernando, San Martín y Malvinas Argentinas. Zona Oeste: Moreno, Hurlingham, Ituzaingó, General Rodríguez. CABA: Núñez, Belgrano, Palermo, Recoleta y Villa Crespo. Contamos con taller especializado y unidades móviles totalmente equipadas."
    },
    {
      question: "¿Cuál es el precio del arenado de superficies de madera?",
      answer: "El precio del arenado de superficies de madera varía según dimensiones, material (madera, metal o mixto), estado actual y acabado deseado. Ofrecemos presupuesto arenado de superficies de madera detallado sin cargo que incluye diagnóstico profesional y asesoramiento especializado. Podés cotizar arenado de superficies de madera por WhatsApp o formulario online."
    }
  ]

  // Contenido para FinalCTASection
  const finalCTA = {
    title: "Arenado de Superficies de Madera en Pilar y Zona Norte | Servicio Profesional Local",
    description: "Expertos en arenado profesional de superficies de madera, granallado de superficies de madera y restauración de superficies de madera. Servicio local especializado en eliminación de pintura antigua, barniz deteriorado y preparación de superficies de madera. Resultados garantizados.",
    benefits: [
      "Presupuesto arenado de superficies de madera gratuito y sin compromiso",
      "Respuesta en 24 horas hábiles - Servicio local",
      "Cobertura en Pilar, San Isidro, Tigre y toda Zona Norte"
    ],
    whatsappTitle: "Presupuesto WhatsApp - Zona Norte",
    whatsappDescription: "Atención inmediata. Enviá fotos de tus superficies de madera y recibí presupuesto arenado de superficies de madera personalizado al instante. Podés cotizar arenado de superficies de madera ahora.",
    formTitle: "Cotización Online - Buenos Aires Norte",
    formDescription: "Servicio express. Completá el formulario y recibí tu presupuesto arenado de superficies de madera detallado en 24 horas. Podés cotizar arenado de superficies de madera online.",
    bottomTitle: "🏆 Empresa Líder en Arenado de Superficies de Madera en Zona Norte de Buenos Aires",
    bottomDescription: "Más de 150 familias confían en nuestro servicio local de arenado profesional de superficies de madera certificado. Equipo especializado con 15 años de experiencia en limpieza de superficies de madera para pintar. Contratar arenado de superficies de madera nunca fue tan fácil."
  }

  return (
    <div className="min-h-screen">
      <Breadcrumbs segments={[{ label: 'Servicios', href: '/servicios' }, { label: 'Arenado de superficies de madera' }]} />

      <HeroSection
        title="Arenado de Superficies de Madera en"
        titleHighlight="Zona Norte, Oeste y CABA"
        description="Expertos en restauración y arenado profesional de superficies de madera. Especialistas en arenado de superficies de madera, granallado de superficies de madera y limpieza de superficies de madera para pintar. Brindamos servicio de arenado de superficies de madera CABA, arenado de superficies de madera zona norte y arenado de superficies de madera zona oeste. Atendemos en Pilar, San Isidro y toda la Zona Norte. Más de 15 años recuperando superficies de madera antiguas con técnicas especializadas que preservan la estructura original. Eliminación garantizada de pintura antigua y preparación de superficies de madera para barnizado, lacado y acabados premium."
        heroImage="/images/servicios/servicio-arenado-superficie-madera-pilar.png"
        heroImageAlt="Arenado profesional de superficie de madera en Pilar"
      />

      <WhatIsSection
        title={whatIsContent.title}
        subtitle={whatIsContent.subtitle}
        description={whatIsContent.description}
        features={whatIsContent.features}
        additionalInfo={whatIsContent.additionalInfo}
      />

      <BenefitsSection
        title="Restauración y Arenado Profesional de Superficies de Madera"
        subtitle="Expertos en restauración y arenado de superficies de madera antiguas. Especialistas en recuperación de superficies de madera, eliminación de pintura antigua y preparación de superficies de madera para acabados premium. Servicio garantizado con más de 1000 proyectos exitosos."
        benefits={benefits}
      />

      <ServicesGridSection
        title="Nuestros Servicios de Arenado de Superficies de Madera"
        subtitle="Servicio profesional especializado en arenado de superficies de madera para muebles, estructuras y componentes."
        services={woodSurfaceServices}
        columns={2}
      />

      <ProcessSection
        title="Proceso de Restauración de Superficies de Madera"
        subtitle="Servicio especializado de arenado para superficies de madera. Técnica profesional que preserva la estructura original y realza la belleza natural de la madera. Arenado profesional de superficies de madera con técnicas especializadas."
        process={process}
      />

      <CoverageAreasSection
        title="Zonas que Cubrimos - Arenado de Superficies de Madera en Buenos Aires"
        subtitle="Servicio de arenado de superficies de madera CABA, arenado de superficies de madera zona norte y arenado de superficies de madera zona oeste. Brindamos servicio profesional de arenado profesional de superficies de madera y granallado de superficies de madera en toda la región metropolitana de Buenos Aires con equipos móviles."
        coverageAreas={coverageAreas}
      />

      <FAQSection
        title="Preguntas Frecuentes sobre Arenado de Superficies de Madera"
        subtitle="Información completa sobre servicios profesionales de arenado de superficies de madera, granallado de superficies de madera y restauración de superficies de madera. Especialistas certificados en limpieza de superficies de madera para pintar y preparación de superficies de madera."
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


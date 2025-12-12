import { CategoryCard } from "./CategoryCard";
import { Home, Factory, Car, Layers } from "lucide-react";

export function ServiciosSection() {
  const categories = [
    {
      title: "Arenado Residencial",
      description: "Servicios profesionales de arenado para tu hogar. Especialistas en piletas, fachadas, pisos y muebles con técnicas que preservan la estructura de tu vivienda.",
      href: "/servicios/arenado-residencial",
      icon: <Home className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-pileta-pilar.png",
      imageAlt: "Arenado profesional de pileta en Pilar",
      subServices: [
        {
          title: "Arenado de piletas",
          href: "/servicios/arenado-residencial/arenado-de-piletas",
          description: "Limpieza profunda y preparación de superficies para pintura o revestimiento."
        },
        {
          title: "Arenado de fachadas domiciliarias",
          href: "/servicios/arenado-residencial/arenado-de-fachadas-domiciliarias",
          description: "Restauración de fachadas de viviendas y edificios."
        },
        {
          title: "Arenado de pisos",
          href: "/servicios/arenado-residencial/arenado-de-pisos",
          description: "Limpieza y preparación de pisos de hormigón, cemento y otros materiales."
        },
        {
          title: "Arenado de muebles",
          href: "/servicios/arenado-residencial/arenado-de-muebles",
          description: "Restauración y despintado de muebles con acabado fino."
        }
      ]
    },
    {
      title: "Arenado Industrial",
      description: "Servicios de arenado para la industria. Especialistas en tanques, estructuras metálicas, edificios antiguos y fábricas con técnicas que optimizan tiempos y costos.",
      href: "/servicios/arenado-industrial",
      icon: <Factory className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-estructura-metalica-pilar.png",
      imageAlt: "Arenado profesional de estructura metálica en Pilar",
      subServices: [
        {
          title: "Arenado de tanques",
          href: "/servicios/arenado-industrial/arenado-de-tanques",
          description: "Limpieza y preparación de tanques industriales."
        },
        {
          title: "Arenado de estructuras metálicas",
          href: "/servicios/arenado-industrial/arenado-de-estructuras-metalicas",
          description: "Limpieza y preparación de estructuras metálicas industriales para pintura."
        },
        {
          title: "Arenado en fábrica",
          href: "/servicios/arenado-industrial/arenado-en-fabrica",
          description: "Servicio de arenado industrial y limpieza de superficies en fábricas."
        },
        {
          title: "Arenado de edificios antiguos",
          href: "/servicios/arenado-industrial/arenado-de-edificios-antiguos",
          description: "Restauración y limpieza de edificios antiguos y fachadas históricas."
        }
      ]
    },
    {
      title: "Arenado de Vehículos",
      description: "Servicios de arenado para vehículos. Especialistas en camiones, autos y barcos con técnicas especializadas que preservan la integridad del vehículo.",
      href: "/servicios/arenado-de-vehiculos",
      icon: <Car className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-barco-tigre.png",
      imageAlt: "Arenado profesional de barco en Tigre",
      subServices: [
        {
          title: "Arenado de camiones",
          href: "/servicios/arenado-de-vehiculos/arenado-de-camiones",
          description: "Limpieza y preparación de camiones industriales para pintura."
        },
        {
          title: "Arenado de autos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-autos",
          description: "Limpieza y preparación de autos para pintura."
        },
        {
          title: "Arenado de barcos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-barcos",
          description: "Despintado y tratamiento de cascos, cubiertas y estructuras navales."
        }
      ]
    },
    {
      title: "Arenado de Superficies",
      description: "Servicios de arenado para diferentes tipos de superficies. Especialistas en superficies metálicas y superficies de madera con técnicas que preservan la integridad del material.",
      href: "/servicios/arenado-de-superficies",
      icon: <Layers className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png",
      imageAlt: "Arenado profesional de superficie metálica en San Isidro",
      subServices: [
        {
          title: "Arenado de superficies metálicas",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-metalicas",
          description: "Servicio fino en cabina para piezas mecánicas, ornamentales o industriales."
        },
        {
          title: "Arenado de superficies de madera",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-de-madera",
          description: "Restauración y despintado de superficies de madera con acabado fino."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Servicios de limpieza profunda y preparación de superficies en Pilar
            y Zona Norte
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de arenado y granallado para diferentes industrias y aplicaciones en Buenos Aires. Trabajamos con equipos profesionales y técnicas especializadas, brindando servicio móvil a domicilio y también en nuestro taller. Atendemos en Zona Norte, Zona Oeste y CABA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              href={category.href}
              subServices={category.subServices}
              icon={category.icon}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

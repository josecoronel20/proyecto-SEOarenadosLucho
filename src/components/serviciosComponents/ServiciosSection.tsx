import { CategoryCard } from "./CategoryCard";
import { Droplet, Car, Factory, Wrench, TreePine } from "lucide-react";

export function ServiciosSection() {
  const categories = [
    {
      title: "Arenado de Piletas",
      description: "Limpieza profunda y preparación de superficies para pintura o revestimiento. Eliminación de capas de pintura antigua y sarro.",
      href: "/servicios/arenado-de-piletas",
      icon: <Droplet className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-pileta-pilar.png",
      imageAlt: "Arenado profesional de pileta en Pilar",
      subServices: []
    },
    {
      title: "Arenado de Vehículos",
      description: "Remoción de pintura y óxido en autos, camiones, barcos y chasis. Técnicas especializadas que preservan la integridad del vehículo.",
      href: "/servicios/arenado-de-vehiculos",
      icon: <Car className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-auto-san-fernando.png",
      imageAlt: "Arenado profesional de vehículos",
      subServices: []
    },
    {
      title: "Arenado Industrial",
      description: "Limpieza y preparación de estructuras metálicas, maquinarias y obras industriales. Servicio móvil a domicilio con equipos profesionales.",
      href: "/servicios/arenado-industrial",
      icon: <Factory className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-industrial-pilar.jpg",
      imageAlt: "Arenado profesional industrial",
      subServices: []
    },
    {
      title: "Arenado de Metales",
      description: "Servicio fino en taller para piezas metálicas, mecánicas, ornamentales o industriales. Preparación para pintura u otra terminación.",
      href: "/servicios/arenado-de-metales",
      icon: <Wrench className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-superficie-metalica-san-isidro.png",
      imageAlt: "Arenado profesional de metales",
      subServices: []
    },  
    {
      title: "Arenado de Madera",
      description: "Restauración y despintado de muebles y superficies de madera. Preservación de la integridad del material.",
      href: "/servicios/arenado-de-madera",
      icon: <TreePine className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-superficie-madera-pilar.png",
      imageAlt: "Arenado profesional de madera",
      subServices: []
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Servicios de Arenado más solicitados 
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aunque el arenado es ejecutable en cualquier superficie, hay algunos servicios que son más comunes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

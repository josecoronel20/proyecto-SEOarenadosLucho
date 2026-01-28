import Image from "next/image";
import { Droplet, Factory, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiciosSection() {
  const categories = [
    {
      id: "arenado-piletas",
      title: "Arenado de Piletas",
      href: "/servicios/arenado-de-piletas",
      icon: <Droplet className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-pileta-pilar.png",
      imageAlt: "Arenado profesional de pileta",

      intro:
        "Servicio especializado para la limpieza profunda y preparación de piletas previo a pintura o revestimientos.",

      description:
        "El arenado de piletas elimina completamente pintura vieja, sarro y contaminantes adheridos, dejando la superficie limpia, uniforme y lista para una nueva terminación.",

      commonWorks: [
        "Piletas con pintura descascarada o deteriorada",
        "Eliminación de sarro y manchas adheridas",
        "Preparación para pintura acrílica o cementicia",
        "Reacondicionamiento de piletas sin mantenimiento"
      ],

      idealFor:
        "Propietarios particulares, consorcios, empresas de mantenimiento y administradores de complejos.",

      valueFocus:
        "Mejor adherencia de la pintura, mayor durabilidad y terminación profesional."
    },

    {
      id: "arenado-industrial",
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      icon: <Factory className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-industrial-pilar.jpg",
      imageAlt: "Arenado industrial profesional",

      intro:
        "Servicio técnico de arenado para superficies y estructuras industriales, adaptado a requerimientos operativos y logísticos.",

      description:
        "Realizamos arenado industrial para la limpieza y preparación de estructuras metálicas, maquinaria y equipos, asegurando condiciones óptimas para pintura o recubrimientos posteriores.",

      commonWorks: [
        "Arenado de estructuras metálicas",
        "Limpieza de maquinaria y equipos industriales",
        "Trabajos en planta, obra o instalaciones del cliente",
        "Mantenimiento industrial y reacondicionamiento"
      ],

      idealFor:
        "Industrias, metalúrgicas, constructoras, empresas de mantenimiento y plantas productivas.",

      valueFocus:
        "Reducción de fallas, mejor adherencia de recubrimientos y mayor vida útil de los activos."
    },

    {
      id: "arenado-metales",
      title: "Arenado de Superficies Metálicas",
      href: "/servicios/arenado-de-metales",
      icon: <Wrench className="h-16 w-16" />,
      imageSrc: "/images/servicios/servicio-arenado-auto-san-fernando.png",
      imageAlt: "Arenado profesional de metales",

      intro:
        "Servicio de arenado en taller para piezas y superficies metálicas que requieren precisión y control.",

      description:
        "El arenado de metales permite limpiar y preparar superficies metálicas sin dañarlas, ideal para restauración, reacondicionamiento y trabajos de terminación.",

      commonWorks: [
        "Arenado de piezas mecánicas",
        "Restauración de rejas, portones y estructuras",
        "Preparación de metales para pintura o esmaltes",
        "Reacondicionamiento de piezas industriales"
      ],

      idealFor:
        "Talleres, industrias, metalúrgicas y clientes particulares exigentes.",

      valueFocus:
        "Terminación uniforme, mejor estética y preparación correcta para pintura."
    }
  ];

  
  

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Servicios de Arenados más solicitados 
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El <strong>arenado</strong> se aplica en muchos sectores, pero estos son los servicios más solicitados por nuestros clientes.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="space-y-8"
            >
              {/* Header centrado: Icon, Title e Intro */}
              <div className="">
                <div className="flex flex-row items-center gap-3">
                  <span className="text-primary flex items-center mb-1">
                    {category.icon}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 font-medium mx-2">
                  {category.intro}
                </p>
              </div>

              {/* Grid de 2 columnas: Imagen izquierda, Contenido derecho */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Imagen */}
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg ">
                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Contenido derecho */}
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Trabajos comunes */}
                  {category.commonWorks && category.commonWorks.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">
                        Trabajos comunes:
                      </h4>
                      <ul className="space-y-2">
                        {category.commonWorks.map((work, workIndex) => (
                          <li key={workIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{work}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Ideal para */}
                  {category.idealFor && (
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Ideal para:
                      </h4>
                      <p className="text-gray-700">{category.idealFor}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Valor destacado centrado */}
              {category.valueFocus && (
                <div className="flex flex-col items-center gap-6">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 max-w-2xl">
                    <h4 className="font-semibold text-primary mb-2 text-center">
                      Valor destacado:
                    </h4>
                    <p className="text-gray-700 text-center">{category.valueFocus}</p>
                  </div>
                  
                  {/* Link con flecha estilizado */}
                  <Link
                    href="/proyectos"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span>Mirá imágenes de antes y después de proyectos similares</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              )}
            </section>
          ))}

         
        </div>
      </div>
    </section>
  );
}

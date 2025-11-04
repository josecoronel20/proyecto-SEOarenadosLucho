import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

export const metadata: Metadata = {
  title: "Superficies que Arenamos | Arenado de Metales, Hormigón, Madera y Piedra - Arenados Lucho",
  description: "Arenamos y preparamos todo tipo de superficies: metales (hierro, acero, aluminio), hormigón, madera, piedra. Servicio profesional de arenado para preparación de superficies antes de pintura o revestimiento. Presupuesto gratuito en Pilar y Zona Norte.",
  keywords: "arenado de superficies, arenado de metales, arenado de hierro, arenado de acero, arenado de hormigón, arenado de madera, arenado de piedra, preparación de superficies, arenado profesional",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos"
  },
  openGraph: {
    title: "Superficies que Arenamos | Arenado Profesional de Metales, Hormigón, Madera",
    description: "Especialistas en arenado de todas las superficies: metales, hormigón, madera, piedra. Preparación profesional para pintura y revestimiento.",
    type: "website",
    locale: "es_AR",
  }
}

const superficies = [
  {
    id: "metales",
    title: "Metales",
    href: "/superficies-que-arenamos/arenado-de-metales",
    description: "Arenado profesional de estructuras y piezas metálicas. Eliminación de óxido, corrosión y pintura antigua. Preparación para galvanizado, pintura epoxi y tratamientos especializados.",
    image: "/images/servicios/arenado-pieza-metalica-san-isidro.png",
    keywords: "arenado de metales, arenado de hierro, arenado de acero"
  },
  {
    id: "madera",
    title: "Madera",
    href: "/superficies-que-arenamos/arenado-de-madera",
    description: "Arenado de superficies de madera para restauración y eliminación de pintura antigua. Preparación para barnizado, lacado o pintura. Ideal para muebles y elementos arquitectónicos.",
    image: "/images/servicios/arenado-mueble-madera-pilar.png",
    keywords: "arenado de madera, restauración de madera"
  },
  {
    id: "hormigon",
    title: "Hormigón",
    href: "/superficies-que-arenamos/arenado-de-hormigon",
    description: "Arenado de superficies de hormigón para obras y construcción. Eliminación de pintura, marcas y preparación para revestimiento. Ideal para pisos, muros y estructuras.",
    image: "/images/superficies/arenado-superficie-hormigon-Moron.png",
    keywords: "arenado de hormigón, preparación de hormigón"
  },
  {
    id: "piedra",
    title: "Piedra",
    href: "/superficies-que-arenamos/arenado-de-piedra",
    description: "Arenado de superficies de piedra natural para restauración y limpieza. Eliminación de manchas, pintura y preparación para tratamientos protectores. Ideal para fachadas y elementos decorativos.",
    image: "/images/superficies/arenado-superficie-piedra-san-miguel.png",
    keywords: "arenado piedra, restauración de piedra"
  },
]

export default function SuperficiesQueArenamosPage() {
  return (
    <>
      <Breadcrumbs segments={[
        { label: 'Inicio', href: '/' },
        { label: 'Superficies que Arenamos' }
      ]} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Superficies que <span className="text-primary">Arenamos</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Especialistas en <strong>arenado y preparación de superficies</strong> para revestimiento, pintura o tratamiento especializado. 
                Arenamos <strong>metales (hierro, acero, aluminio)</strong>, <strong>hormigón</strong>, <strong>madera</strong>, <strong>piedra</strong> y 
                otras superficies. Más de 20 años de experiencia en preparación profesional de superficies en Pilar, San Isidro, Tigre y toda Zona Norte de Buenos Aires.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro servicio de <strong>sandblasting profesional</strong> elimina óxido, corrosión, pintura antigua y contaminantes, 
                dejando las superficies perfectamente preparadas para el siguiente paso de su proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* Grid de Superficies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                Tipos de Superficies que Arenamos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {superficies.map((superficie) => (
                  <Link
                    key={superficie.id}
                    href={superficie.href}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={superficie.image}
                        alt={`Arenado de ${superficie.title}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                        Arenado de {superficie.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {superficie.description}
                      </p>
                      <span className="text-primary font-semibold text-sm group-hover:underline">
                        Ver más →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solicitá tu Presupuesto para Arenado de Cualquier Superficie
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                ¿Necesitás arenar una superficie que no está en la lista? Contactanos y te asesoramos. 
                Ofrecemos servicio móvil a domicilio y en taller en Pilar, San Isidro, Tigre y toda Zona Norte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
                <Link
                  href="/presupuesto-rapido"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Solicitar Presupuesto Online
                </Link>
              </div>
              <p className="text-blue-100 text-sm mt-6">
                Presupuesto sin cargo · Respuesta en 24h hábiles · Incluye visita técnica si se requiere
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


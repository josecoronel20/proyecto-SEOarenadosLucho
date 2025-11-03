import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"
import Image from "next/image"
import { CheckCircle, Wrench, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Arenado de Metales | Hierro, Acero, Aluminio - Arenados Lucho Pilar",
  description: "Arenado profesional de metales: hierro, acero, aluminio. Eliminación de óxido, corrosión y pintura. Preparación para galvanizado, pintura epoxi y tratamientos especializados. Servicio en Pilar y Zona Norte.",
  keywords: "arenado de metales, arenado de hierro, arenado de acero, arenado aluminio, limpieza de metales, preparación de metales, arenado industrial",
  alternates: {
    canonical: "https://www.arenadoslucho.com/superficies-que-arenamos/arenado-de-metales"
  }
}

const tiposMetales = [
  {
    id: "hierro",
    title: "Hierro",
    href: "/superficies-que-arenamos/arenado-de-metales/hierro",
    description: "Arenado profesional de hierro. Eliminación de óxido, corrosión y pintura antigua. Preparación para pintura anticorrosiva. Ideal para estructuras, rejas y elementos arquitectónicos.",
    image: "/images/superficies/arenado-hierro-zona-norte.jpg",
  },
  {
    id: "aluminio",
    title: "Aluminio",
    href: "/superficies-que-arenamos/arenado-de-metales/aluminio",
    description: "Arenado de piezas y estructuras de aluminio. Eliminación de óxido superficial y preparación para anodizado o pintura. Tratamiento delicado que no daña el material.",
    image: "/images/superficies/arenado-aluminio-zona-norte.jpg",
  },
  {
    id: "acero-inoxidable",
    title: "Acero Inoxidable",
    href: "/superficies-que-arenamos/arenado-de-metales/acero-inoxidable",
    description: "Arenado de acero inoxidable para eliminación de manchas, marcas y preparación de superficie. Tratamiento especializado que preserva las propiedades del material.",
    image: "/images/superficies/arenado-acero-inoxidable-zona-norte.jpg",
  },
]

export default function ArenadoDeMetalesPage() {
  return (
    <>
      <Breadcrumbs segments={[
        { label: 'Inicio', href: '/' },
        { label: 'Superficies que Arenamos', href: '/superficies-que-arenamos' },
        { label: 'Arenado de Metales' }
      ]} />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Arenado de <span className="text-primary">Metales</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                El <strong>arenado de metales</strong> elimina completamente óxido, corrosión y pintura antigua, dejando una 
                superficie limpia y rugosa ideal para la adherencia de tratamientos protectores. Este proceso garantiza una 
                <strong>preparación profesional</strong> que prolonga la vida útil de estructuras metálicas, piezas y componentes. 
                Nuestro servicio especializado en Pilar, San Isidro, Tigre y Zona Norte utiliza técnicas certificadas que 
                <strong>preservan la integridad del material</strong> mientras eliminan todos los contaminantes superficiales, 
                preparando perfectamente para galvanizado, pintura epoxi o tratamientos especializados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                Tipos de Metales que Arenamos
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tiposMetales.map((metal) => (
                  <Link
                    key={metal.id}
                    href={metal.href}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={metal.image}
                        alt={`Arenado de ${metal.title}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                        Arenado de {metal.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {metal.description}
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Beneficios del Arenado de Metales
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Wrench,
                    title: "Eliminación de Óxido",
                    desc: "Removemos completamente el óxido y la corrosión sin dañar la estructura del metal."
                  },
                  {
                    icon: Shield,
                    title: "Preparación para Pintura",
                    desc: "Superficie rugosa ideal para máxima adherencia de pinturas y tratamientos."
                  },
                  {
                    icon: CheckCircle,
                    title: "Preservación de Integridad",
                    desc: "Técnicas que no afectan la resistencia estructural del metal."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Presupuesto para Arenado de Metales en Zona Norte
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Servicio móvil y en taller en Pilar, San Isidro, Tigre y toda Zona Norte. Presupuesto sin cargo en 24h.
              </p>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

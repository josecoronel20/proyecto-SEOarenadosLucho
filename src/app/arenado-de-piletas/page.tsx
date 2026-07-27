import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Truck,
  SprayCan,
  Paintbrush,
  MapPin,
  HardHat,
  CalendarClock,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react"
import CTASection from "@/components/common/CTASection"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"

const PILETA_IMAGES = [
  "/images/services/arenadoParticular/Piletas/IMG_2454.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2455.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2456.PNG",
]

export const metadata: Metadata = {
  title: "Arenado de piletas para repintar o revestir",
  description:
    "Arenamos tu pileta de hormigón: sacamos toda la pintura vieja y descascarada y la dejamos lista para repintar o revestir. Trabajamos in situ en Buenos Aires y AMBA.",
  alternates: { canonical: "/arenado-de-piletas" },
  openGraph: og(
    "Arenado de piletas para repintar o revestir",
    "Sacamos toda la pintura vieja de tu pileta y la dejamos lista para repintar o revestir. In situ en Buenos Aires y AMBA.",
    PILETA_IMAGES[0]
  ),
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Arenado de piletas",
      serviceType: "Arenado de piletas de hormigón",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenado de piletas de hormigón para remover pintura y revestimiento viejo y dejar la superficie lista para repintar o revestir. No incluye el pintado ni el revestimiento final.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Arenado de piletas",
          item: `${SITE_URL}/arenado-de-piletas`,
        },
      ],
    },
  ],
}

const pasos = [
  {
    icon: Truck,
    title: "Llegamos con el equipo",
    text: "Vamos a tu casa con compresores propios. No trasladás nada ni tenés que conseguir nada.",
  },
  {
    icon: SprayCan,
    title: "Arenamos la pileta",
    text: "Sacamos pintura vieja, revestimiento flojo y suciedad de paredes y piso, de una sola vez y sin lijar a mano.",
  },
  {
    icon: Paintbrush,
    title: "Queda lista para pintar o revestir",
    text: "Te entregamos el hormigón limpio y parejo. El pintado o revestimiento lo hacés vos o tu contratista.",
  },
]

export default function ArenadoDePiletasPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={PILETA_IMAGES[0]}
            alt="Arenado de una pileta de hormigón en Buenos Aires"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/80 to-primary-900/50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-16 md:py-24">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Arenado de piletas" },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Arenado de piletas para repintar o revestir
            </h1>
            <p className="mt-5 text-base md:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
              Sacamos toda la pintura vieja y descascarada de tu pileta de hormigón y te
              la dejamos limpia y pareja, lista para repintar o revestir. Vamos con el
              equipo a tu casa.
            </p>
            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold text-lg rounded-full transition-all duration-200 shadow-xl hover:scale-105"
              >
                Pedí tu presupuesto sin costo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Se te descascara la pintura? (entrada para el que no conoce el arenado) */}
      <section className="py-14 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Se te descascara la pintura de la pileta?
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Si la pintura de tu pileta se ampolla, se descascara o se va con la mano,
              lijar no alcanza. El <strong>arenado</strong> es la forma más rápida y
              prolija de sacar toda la pintura o el revestimiento viejo de una sola vez y
              dejar el hormigón limpio, listo para repintar o revestir. Lo hacemos en tu
              casa, con nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso en 3 pasos */}
      <section className="py-14 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Cómo es el trabajo
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pasos.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-gray-200 bg-white"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="p-3 rounded-lg bg-primary-100 text-primary-700">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajamos con contratistas */}
      <section className="py-14 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[auto,1fr] gap-6 items-start">
            <div className="p-3 rounded-lg bg-primary-100 text-primary-700 w-fit">
              <HardHat className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Trabajamos con contratistas
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                ¿Remodelás o mantenés piletas? Tercerizá el arenado con nosotros: precio
                por obra, turnos rápidos y varias piletas por temporada. Vos ponés la
                pintura o el revestimiento; nosotros dejamos la superficie lista y
                pareja para esa etapa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque estacional (invierno — rotar el copy 2 veces al año, registrar en bitácora) */}
      <section className="py-14 md:py-20 bg-primary-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <CalendarClock className="w-10 h-10 text-primary-200 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Anticipate: llegá al verano con la pileta lista
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              En invierno hay menos apuro y turno inmediato. Arenamos ahora y vos la
              repintás o revestís tranquilo, para tenerla lista antes de la temporada.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas + qué NO incluye */}
      <section className="py-14 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary-100 text-primary-700 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Dónde trabajamos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Buenos Aires y AMBA. Vamos con el equipo a tu casa o a la obra.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-gray-100 text-gray-600 flex-shrink-0">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Qué no incluye</h2>
                <p className="text-gray-700 leading-relaxed">
                  El arenado no incluye el pintado ni el revestimiento final: te
                  entregamos la pileta preparada para esa etapa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso real enlazado */}
      <section className="py-14 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
              Trabajo real
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Una pileta que dejamos lista para repintar
            </h2>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {PILETA_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
                >
                  <Image
                    src={src}
                    alt={`Arenado de pileta de hormigón, foto ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              ))}
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                Sacamos toda la pintura vieja, sin lijar a mano.
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                Hormigón limpio y parejo, listo para repintar o revestir.
              </li>
            </ul>
            <Link
              href="/casos-de-exito/arenado-pileta"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Ver el caso completo: arenado de pileta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

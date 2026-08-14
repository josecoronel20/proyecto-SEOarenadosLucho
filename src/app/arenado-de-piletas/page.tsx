import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  X,
  Truck,
  SprayCan,
  Paintbrush,
  MapPin,
  HardHat,
  CalendarClock,
  BadgeDollarSign,
  Clock,
  Users,
  ShieldCheck,
  Home,
  FileText,
} from "lucide-react"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import { faqsPiletas } from "@/lib/faqs"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"

const PILETA_IMAGES = [
  "/images/services/arenadoParticular/Piletas/IMG_2454.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2455.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2456.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2457.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2478.PNG",
  "/images/services/arenadoParticular/Piletas/IMG_2479.PNG",
]

// Mensajes pre-cargados de WhatsApp por público.
const WPP_DUENO = "Hola, quiero arenar mi pileta. Te paso una foto para que me digas qué necesita."
const WPP_CONTRATISTA = "Hola, soy contratista/piletero y quiero tercerizar arenado de piletas."

const WPP_BTN =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors shadow-lg"
const WPP_BTN_LG = WPP_BTN + " md:text-lg px-8 py-4"

export const metadata: Metadata = {
  title: "Arenado de piletas y piscinas en Buenos Aires",
  description:
    "¿Pileta descascarada? Sacamos toda la pintura vieja de tu pileta o piscina y la dejamos lista para repintar o revestir. Vamos a tu casa en el AMBA con equipo propio. Presupuesto sin costo por WhatsApp.",
  alternates: { canonical: "/arenado-de-piletas" },
  openGraph: og(
    "Arenado de piletas y piscinas en Buenos Aires y AMBA",
    "Sacamos toda la pintura vieja de tu pileta o piscina y la dejamos lista para repintar o revestir. In situ, con equipo propio.",
    PILETA_IMAGES[0]
  ),
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Arenado de piletas y piscinas",
      serviceType: "Arenado de piletas de hormigón",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenado de piletas y piscinas de hormigón pintadas: removemos toda la pintura vieja y dejamos el hormigón limpio, listo para repintar o revestir. No incluye el pintado ni el revestimiento final, no removemos revestimientos adheridos como venecitas o mosaico, y no trabajamos piletas de fibra de vidrio.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Arenado de piletas",
          item: `${SITE_URL}/arenado-de-piletas`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqsPiletas.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
}

const pasos = [
  {
    icon: Truck,
    title: "Coordinamos la visita",
    text: "Miramos tu pileta, te decimos cuánto tarda y cuánto sale, sin costo y sin compromiso.",
  },
  {
    icon: SprayCan,
    title: "Vamos a tu casa con el equipo",
    text: "Llegamos con compresores y equipo propio. No trasladás ni preparás nada: protegemos la zona y arenamos.",
  },
  {
    icon: Paintbrush,
    title: "Te la entregamos lista",
    text: "Hormigón limpio y parejo para que la repintes o revistas cuando quieras.",
  },
]

const b2bCards = [
  { icon: BadgeDollarSign, title: "Precio por obra, cerrado", text: "Precio fijo por pileta. Sabés tu costo antes de arrancar y lo cargás a tu presupuesto sin sorpresas." },
  { icon: Clock, title: "Turnos rápidos, sin frenarte", text: "Coordinamos fecha y cumplimos. No te atrasamos la obra ni la temporada." },
  { icon: Users, title: "Varias piletas por temporada", text: "Tenemos 2 equipos propios: podemos con varias seguidas. Cuantas más manejes, mejor nos organizamos." },
  { icon: ShieldCheck, title: "Un proveedor de confianza", text: "Siempre prolijos, factura por medio si la necesitás, y coordinamos directo con vos o con tu obra." },
]

export default function ArenadoDePiletasPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1. HERO — hook por el problema + WhatsApp */}
      <section className="relative bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={PILETA_IMAGES[0]}
            alt="Arenado de una pileta de hormigón descascarada en Buenos Aires"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/85 to-primary-900/50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-14 md:py-24">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios" },
                { name: "Arenado de piletas" },
              ]}
            />
            <p className="text-primary-200 font-semibold text-sm md:text-base mb-3">
              Arenado de piletas y piscinas · Buenos Aires y AMBA
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              ¿Se te descascara la pintura de la pileta? La dejamos lista para repintar o revestir
            </h1>
            <p className="mt-5 text-base md:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
              Sacamos toda la pintura vieja de tu pileta o piscina de hormigón
              de una sola vez, sin lijar a mano, y te la dejamos limpia y pareja, lista para que la
              repintes o revistas. Vamos a tu casa con equipo propio.
            </p>
            <p className="mt-3 text-white/90 font-medium">
              Mandanos una foto por WhatsApp y te decimos qué necesita. La visita y el presupuesto son sin costo.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN_LG}>
                <MessageCircle className="w-5 h-5" />
                Mandar foto por WhatsApp
              </WhatsAppCTA>
              <Link
                href="/casos-de-exito/arenado-pileta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/90 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Ver un trabajo real
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Equipo propio</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Vamos a tu casa</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Buenos Aires y AMBA</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Presupuesto sin costo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANDA ESTACIONAL (rotable — HOY: invierno) */}
      <section className="bg-primary-800">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <CalendarClock className="w-9 h-9 text-primary-200 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white font-bold text-lg">Aprovechá el invierno: turno inmediato y llegás al verano con la pileta lista</p>
              <p className="text-white/85 text-sm md:text-base">En verano los turnos se llenan. Si la arenás ahora, conseguís turno enseguida y llegás a la temporada con el trabajo pesado ya hecho.</p>
            </div>
            <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN + " flex-shrink-0"}>
              <MessageCircle className="w-5 h-5" />
              Reservar turno
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* 3. SELECTOR DE PÚBLICO */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            <a href="#que-es" className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all">
              <div className="p-2.5 rounded-lg bg-primary-100 text-primary-700 flex-shrink-0"><Home className="w-6 h-6" /></div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary-600">Es mi pileta</p>
                <p className="text-gray-600 text-sm">Te explicamos simple qué es el arenado y te la dejamos lista para que tu pintor la termine.</p>
              </div>
            </a>
            <a href="#contratistas" className="group flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all">
              <div className="p-2.5 rounded-lg bg-primary-100 text-primary-700 flex-shrink-0"><HardHat className="w-6 h-6" /></div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary-600">Trabajo con piletas</p>
                <p className="text-gray-600 text-sm">Piletero, remodelador o constructor: tercerizá el arenado. Precio por obra y turnos rápidos.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 4. ¿QUÉ ES EL ARENADO? */}
      <section id="que-es" className="py-14 md:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              El arenado es como una lija potente para tu pileta
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Si la pintura de tu pileta se descascara, lijarla a mano es interminable y nunca queda
              pareja. El arenado hace ese trabajo en serio: lanzamos arena a presión sobre las paredes
              y el piso, y en una pasada saca toda la pintura vieja y lo que está flojo. Debajo queda
              el hormigón limpio, parejo y firme, listo para pintura o revestimiento nuevo que agarre
              parejo y dure —sin capas viejas abajo que lo hagan saltar el año que viene. Lo mismo
              vale si le decís pileta o <strong>piscina</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EL PROBLEMA / GAP SIN JERGA */}
      <section className="py-14 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿Se te está descascarando la pintura de la pileta o piscina?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Si la pintura se salta, se levanta o se descascara, <strong>no sirve pintar encima</strong>:
                la nueva se cae igual en una temporada. Primero hay que sacar toda la pintura vieja — y eso
                es exactamente lo que hacemos. Nos llaman para sacar la pintura vieja de la pileta,
                despintar y decapar la piscina, y dejar el hormigón preparado para pintar o revestir.
                En una sola visita te sacamos toda la pintura, sin que rasques un metro a mano.
              </p>
              <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Contanos cómo está tu pileta
              </WhatsAppCTA>
            </div>
            <ul className="space-y-3 rounded-xl border border-gray-200 bg-white p-6">
              <p className="font-semibold text-gray-900">¿Te pasa alguna de estas?</p>
              {[
                "La pintura se descascara y salta en pedazos",
                "La pintura está hueca o se levanta sola",
                "Pintaste encima y se volvió a caer",
                "Querés cambiar de color o de terminación",
                "No sabés cómo sacar la pintura sin romper la pileta",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. ANTES / DESPUÉS (prueba real) */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">Trabajos reales</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Piletas reales que dejamos listas para revestir
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Piletas de verdad, de clientes del AMBA. Así queda el hormigón después del arenado: limpio,
              parejo y listo para pintar o revestir. Trabajos nuestros, no fotos de catálogo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PILETA_IMAGES.map((src, i) => (
                <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={src}
                    alt={`Pileta de hormigón arenada, lista para revestir — trabajo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Quiero que la mía quede así
              </WhatsAppCTA>
              <Link href="/casos-de-exito/arenado-pileta" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                Ver el caso completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CÓMO TRABAJAMOS — 3 pasos in situ */}
      <section className="py-14 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Vos no movés nada. Nosotros vamos con todo el equipo
          </h2>
          <p className="text-gray-600 text-center mb-10">Trabajamos in situ en Buenos Aires y todo el AMBA.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pasos.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-gray-200 bg-white">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div className="p-3 rounded-lg bg-primary-100 text-primary-700"><Icon className="w-7 h-7" /></div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Una pileta estándar suele quedar lista en el día; en la visita te confirmamos el plazo de la tuya.
          </p>
        </div>
      </section>

      {/* 8. QUÉ INCLUYE / QUÉ NO */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Qué hacemos y qué no (para que no haya sorpresas)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-200 bg-green-50/40 p-6">
                <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /> Lo que sí hacemos</p>
                <p className="text-gray-700 leading-relaxed">Sacamos toda la pintura vieja y lo que esté flojo, y dejamos el hormigón limpio, parejo y listo para su próxima terminación.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><X className="w-5 h-5 text-gray-500" /> Lo que no hacemos</p>
                <p className="text-gray-700 leading-relaxed mb-3">No pintamos ni revestimos la pileta —ese paso lo hacés vos, tu pintor o tu piletero—. Tampoco hacemos granallado ni arenado con normas o mediciones: hacemos arenado sin vueltas.</p>
                <p className="text-gray-700 leading-relaxed">Y dos límites concretos: <strong>no sacamos revestimientos pegados</strong> como venecitas o mosaico, y <strong>no trabajamos piletas de fibra de vidrio</strong>. Trabajamos hormigón pintado. Si no sabés cuál es la tuya, mandanos una foto y te lo decimos enseguida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTRATISTAS (sección potente) */}
      <section id="contratistas" className="py-14 md:py-20 bg-primary-900 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary-700 text-white"><HardHat className="w-6 h-6" /></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">¿Remodelás o mantenés piletas? Dejános la parte sucia y lenta</h2>
            </div>
            <p className="text-white/85 leading-relaxed mb-8 max-w-3xl">
              Si trabajás con piletas —piletero, remodelador, constructor— el arenado es la etapa que te
              come días y te ensucia la obra. Tercerizala con nosotros: llegamos con equipo propio, sacamos
              toda la pintura vieja y te devolvemos la pileta lista para que revistas o pintes. Vos ponés la
              terminación y el cliente; nosotros ponemos el arenado, temporada tras temporada.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {b2bCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3 rounded-xl bg-primary-800/60 border border-primary-700 p-5">
                  <Icon className="w-6 h-6 text-primary-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-white/80 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <WhatsAppCTA message={WPP_CONTRATISTA} className={WPP_BTN_LG}>
              <MessageCircle className="w-5 h-5" />
              Hablemos de tu temporada de piletas
            </WhatsAppCTA>
            <p className="text-white/70 text-sm mt-3">Contanos cuántas piletas manejás por temporada y armamos un acuerdo.</p>
          </div>
        </div>
      </section>

      {/* 10. POR QUÉ CONFIAR */}
      <section className="py-14 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Somos un equipo de oficio, no una promesa</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Arenado sin vueltas: rápido, prolijo y a precio justo. Tenemos 2 equipos completos con
              compresores propios, así que no dependemos de nadie ni te dejamos esperando. Vamos siempre
              nosotros al lugar, coordinamos claro, y las fotos de arriba son de piletas que hicimos.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-800">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> 2 equipos propios</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Compresores propios</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Trabajamos en el lugar</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Buenos Aires y AMBA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ZONAS AMBA */}
      <section className="py-14 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-primary-100 text-primary-700 flex-shrink-0"><MapPin className="w-6 h-6" /></div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Vamos a tu pileta en Buenos Aires y todo el AMBA</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trabajamos en Capital Federal y en todo el Gran Buenos Aires: zona norte, oeste y sur.
                Si no estás seguro de si llegamos a tu barrio, escribinos y te confirmamos en el momento.
              </p>
              <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Consultá si llegamos a tu zona
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas frecuentes sobre el arenado de piletas y piscinas
          </h2>
          <FaqAccordion items={faqsPiletas} />
        </div>
      </section>

      {/* 13. CTA FINAL */}
      <section className="py-14 md:py-20 bg-primary-800">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Mandanos una foto de tu pileta y te decimos qué necesita
          </h2>
          <p className="text-white/90 mb-8">
            Sin costo y sin compromiso. Coordinamos la visita, te pasamos el precio y, si te cierra, la
            dejamos lista para que la disfrutes este verano.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA message={WPP_DUENO} className={WPP_BTN_LG}>
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </WhatsAppCTA>
          </div>
          <p className="text-white/70 text-sm mt-5">Respondemos rápido · Visita y presupuesto sin costo · Buenos Aires y AMBA</p>
        </div>
      </section>

      {/* 14. ENLAZADO INTERNO */}
      <section className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-600">
            ¿Además de la pileta tenés algo más para arenar? Hacemos{" "}
            <Link href="/servicios" className="text-primary-600 hover:underline font-medium">arenado en obra, industria y galpones</Link>
            {" "}y podés ver{" "}
            <Link href="/casos-de-exito" className="text-primary-600 hover:underline font-medium">nuestros casos reales</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}

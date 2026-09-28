import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react"
import { EsquemaEquipo } from "@/components/common/EsquemaEquipo"
import { Breadcrumbs } from "@/components/common/Breadcrumbs"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { FaqAccordion } from "@/components/preguntas-frecuentes/FaqAccordion"
import { faqsFachadas } from "@/lib/faqs"
import { SITE_URL, BUSINESS_ID, og } from "@/lib/siteConfig"
import { WPP_BTN, WPP_BTN_LG } from "@/lib/wpp"

// Mensaje pre-cargado: nombra el trabajo y pide los 3 datos que hacen falta
// para cotizar (dirección/tamaño/plazo), igual que el resto de los CTAs del sitio.
const WPP_FACHADA =
  "Hola, te consulto por el arenado de una fachada o frente. Te cuento la dirección, el tamaño aproximado y para cuándo lo necesitamos:"

// Fotos reales de trabajos de fachada, aportadas por el dueño el 28/09/2026.
// Son pares antes/después del MISMO frente. Prohibida cualquier imagen de IA o
// de banco (contexto/21-realidad-operativa.md §8).
const HERO_IMAGE = "/images/services/arenadoFachadas/arenando-fachada-altura.webp"

const ANTES_DESPUES = [
  {
    id: "frente-casa",
    titulo: "Frente de dos plantas con hongo",
    antes: "/images/services/arenadoFachadas/frente-casa-antes.webp",
    despues: "/images/services/arenadoFachadas/frente-casa-despues.webp",
    texto: "Hongo y suciedad corridos por toda la pared, de años de humedad bajando por la misma línea. Quedó parejo y limpio, listo para pintar.",
  },
  {
    id: "muro-ladrillo",
    titulo: "Muro perimetral de ladrillo",
    antes: "/images/services/arenadoFachadas/muro-ladrillo-antes.webp",
    despues: "/images/services/arenadoFachadas/muro-ladrillo-despues.webp",
    texto: "Musgo y tierra encima del ladrillo y del revoque. Abajo estaba entero: el arenado lo destapa, no lo pinta.",
  },
  {
    id: "ladrillo-visto",
    titulo: "Ladrillo a la vista recuperado",
    antes: "/images/services/arenadoFachadas/ladrillo-visto-antes.webp",
    despues: "/images/services/arenadoFachadas/ladrillo-visto-despues.webp",
    texto: "Verdín y hollín tapando el ladrillo de un frente moderno. Volvió a su color original, sin pintarlo ni sellarlo.",
  },
  {
    id: "esquina",
    titulo: "Esquina manchada por escurrimiento",
    antes: "/images/services/arenadoFachadas/esquina-antes.webp",
    despues: "/images/services/arenadoFachadas/esquina-despues.webp",
    texto: "La mancha que baja desde el techo estaba metida en el revoque. Se fue con el arenado, sin romper la moldura.",
  },
]

const EN_CURSO = [
  {
    src: "/images/services/arenadoFachadas/arenando-pared-ladrillo.webp",
    alt: "Arenado de una pared de ladrillo a la vista: la mitad ya limpia, la mitad todavía con la suciedad vieja",
  },
  {
    src: "/images/services/arenadoFachadas/quitando-pintura-ladrillo.webp",
    alt: "Pintura sacada de una pared de ladrillo, dejando el ladrillo a la vista",
  },
]

const PRUEBA_OBRA = [
  {
    slug: "pasarela-urbana",
    title: "Pasarela urbana",
    image: "/images/services/arenadoIndustrial/Pasarela/IMG_2431.PNG",
    proof: "En plena calle, con gente circulando abajo. Se trabajó por tramos y se fue habilitando el paso a medida que avanzábamos.",
  },
  {
    slug: "nave-ferroviaria",
    title: "Nave ferroviaria",
    image: "/images/services/arenadoIndustrial/Nave/IMG_2427.PNG",
    proof: "La estación siguió funcionando mientras arenábamos, sector por sector, coordinado con otras cuadrillas en el mismo andén.",
  },
  {
    slug: "estructura-naval",
    title: "Estructura naval",
    image: "/images/services/arenadoIndustrial/EstructuraNaval/IMG_2452.PNG",
    proof: "Coordinado con el movimiento de embarcaciones de una guardería náutica, sin frenar la operación del lugar.",
  },
  {
    slug: "tanque-industrial",
    title: "Tanque industrial",
    image: "/images/services/arenadoIndustrial/Tanque/IMG_2440.PNG",
    proof: "En una planta en funcionamiento, trabajando aparte para que la producción no parara un solo día.",
  },
]

export const metadata: Metadata = {
  title: "Arenado de fachadas y frentes en Buenos Aires",
  description:
    "Arenado de fachadas, frentes, muros y ladrillo a la vista, en casas, edificios y obra. Sacamos el hongo, la suciedad y la pintura vieja y dejamos la superficie lista para pintar o revestir. Fotos reales de antes y después. Visita y presupuesto sin costo por WhatsApp.",
  alternates: { canonical: "/arenado-de-fachadas" },
  openGraph: og(
    "Arenado de fachadas y restauración de frentes en Buenos Aires y AMBA",
    "Sacamos la pintura vieja de tu fachada, pared o ladrillo a la vista y la dejamos lista para pintar o revestir. Trabajamos en obra en marcha, por sectores, sin frenar nada.",
    HERO_IMAGE
  ),
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Arenado de fachadas y restauración de frentes",
      serviceType: "Arenado de paredes, fachadas y ladrillo a la vista",
      provider: { "@id": BUSINESS_ID },
      areaServed: "Buenos Aires y AMBA",
      description:
        "Arenado de fachadas, frentes, paredes y ladrillo a la vista en obra o restauración de edificios: sacamos la pintura vieja y el revoque flojo y dejamos la superficie lista para pintar o revestir. Trabajamos por sectores, coordinando con la obra en marcha. No incluye el pintado ni el revestimiento final.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Arenado de fachadas",
          item: `${SITE_URL}/arenado-de-fachadas`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqsFachadas.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
}

const pasos = [
  {
    title: "Vemos el frente y armamos el plan por sectores",
    text: "Vamos, miramos el estado de la pared o la fachada y definimos con vos o con el encargado de obra en qué orden avanzamos, para no frenar el resto de las tareas.",
  },
  {
    title: "Arenamos sector por sector",
    text: "Liberamos cada zona apenas queda lista para que sigan las demás cuadrillas. Vamos con equipo propio: compresor y tolva, no dependemos de nadie.",
  },
  {
    title: "Te lo entregamos listo para pintar o revestir",
    text: "Pared, frente o ladrillo a la vista limpio y parejo, listo para la terminación que sigue en tu cronograma.",
  },
]

export default function ArenadoDeFachadasPage() {
  return (
    <div className="bg-papel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1. HERO — hook por el problema + WhatsApp */}
      <section className="relative bg-tinta">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Arenador trabajando sobre el frente de ladrillo de una casa, con el equipo en la vereda"
            fill
            className="object-cover opacity-55"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-tinta via-tinta/85 to-tinta/60" />
        <div className="container mx-auto px-5 lg:px-8 relative z-20 py-16 md:py-24">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios" },
                { name: "Arenado de fachadas" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-papel">
              ¿Frente manchado o ladrillo tapado de pintura? Lo dejamos limpio y parejo, listo para pintar
            </h1>
            <p className="mt-5 text-base md:text-xl text-tinta-20 leading-relaxed max-w-[60ch]">
              Sacamos el hongo, la suciedad, la pintura vieja y el revoque flojo de una
              fachada, un muro o el ladrillo a la vista, de una sola pasada. En casas,
              edificios y obra en marcha — ahí trabajamos por sectores para no frenar nada.
            </p>
            <p className="mt-3 text-tinta-20 font-medium max-w-[68ch]">
              Contanos la dirección, el tamaño y para cuándo lo necesitás. La visita y el presupuesto son sin costo.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN_LG}>
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </WhatsAppCTA>
              <Link
                href="/casos-de-exito"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/50 text-papel font-semibold rounded-sm hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                Ver trabajos en obra
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-tinta-20">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Equipo propio</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Trabajamos por sectores</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Buenos Aires y AMBA</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Presupuesto sin costo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1 bis. DOS PUERTAS — mismo trabajo, dos compradores distintos */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5 lg:px-8">
          <p className="font-semibold text-tinta mb-4">¿Qué frente hay que arenar?</p>
          <div className="grid md:grid-cols-2 border-t border-papel-linea">
            <a
              href="#casa"
              className="group block py-6 md:pr-10 border-b md:border-b-0 md:border-r border-papel-linea"
            >
              <p className="text-lg md:text-xl font-semibold text-tinta group-hover:text-maquina-700 transition-colors">
                El frente de mi casa
              </p>
              <p className="mt-2 text-tinta-70 leading-relaxed max-w-[58ch]">
                Fachada manchada, muro perimetral con musgo, ladrillo a la vista tapado
                o pintura que se descascara. Mirá cómo quedan.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-maquina-700 mt-3">
                Ver antes y después <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a href="#empresa" className="group block py-6 md:pl-10">
              <p className="text-lg md:text-xl font-semibold text-tinta group-hover:text-maquina-700 transition-colors">
                Un edificio, un local o una empresa
              </p>
              <p className="mt-2 text-tinta-70 leading-relaxed max-w-[58ch]">
                Frente comercial, consorcio, obra en marcha o planta en funcionamiento.
                Trabajamos por sectores y coordinamos con quien esté a cargo.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-maquina-700 mt-3">
                Cómo trabajamos en obra <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. EL PROBLEMA / GAP SIN JERGA */}
      <section className="py-16 md:py-24 bg-papel-alt border-y border-papel-linea">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-tinta mb-4">
                ¿Se descascara la pintura del frente o hay ladrillo tapado que querés recuperar?
              </h2>
              <p className="text-tinta-70 leading-relaxed mb-5 max-w-[68ch]">
                Un frente con años de pintura encima no se arregla pintando de nuevo: la
                capa vieja se levanta y se lleva la nueva con ella. Primero hay que sacar
                todo lo que está flojo — y eso es lo que hacemos. Arenamos la pared, la
                fachada o el ladrillo a la vista y dejamos la superficie limpia y pareja,
                lista para pintar o revestir, sin rascar a mano metro por metro.
              </p>
              <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Contanos cómo está tu frente
              </WhatsAppCTA>
            </div>
            <div className="border-t border-papel-linea pt-4">
              <p className="font-semibold text-tinta mb-3">¿Te pasa alguna de estas?</p>
              <ul className="space-y-2">
              {[
                "El frente tiene pintura descascarada o saltada en placas",
                "Hay revoque flojo que se está por caer",
                "Debajo de la pintura hay ladrillo a la vista que querés recuperar",
                "Es una restauración y no sabés por dónde arrancar",
                "Necesitás dejarlo listo sin frenar el resto de la obra",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-tinta-70">
                  <CheckCircle2 className="w-5 h-5 text-tinta flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿QUÉ ES EL ARENADO? */}
      <section className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-tinta mb-4">
              El arenado, en criollo: una lija potente para la pared
            </h2>
            <p className="text-tinta-70 text-base md:text-lg leading-relaxed max-w-[68ch]">
              Lanzamos arena a presión sobre la superficie y en una pasada sacamos la
              pintura vieja, la cal suelta o el revoque que está flojo. No es lijar a
              mano ni raspar con espátula: es más rápido, más parejo, y no depende de
              cuánta fuerza le pongas. Debajo queda la pared, la fachada o el ladrillo
              limpio y firme, listo para la próxima terminación —la que decidas vos o
              tu arquitecto.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS EN OBRA — por sectores */}
      <section className="py-16 md:py-24 bg-papel-alt border-y border-papel-linea">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta">
            Trabajamos por sectores, para no frenarte la obra
          </h2>
          <p className="mt-4 mb-10 text-base md:text-lg leading-relaxed text-tinta-70 max-w-[68ch]">
            Vamos con todo el equipo — compresor y tolva propios — y coordinamos con
            vos o con el encargado de obra qué zona liberamos primero.
          </p>
          <div className="ficha-lista border-y border-papel-linea">
            {pasos.map(({ title, text }, i) => (
              <div
                key={title}
                className="grid gap-x-6 gap-y-2 py-7 md:py-8 md:grid-cols-[3rem_minmax(0,1fr)]"
              >
                <span className="ficha-num text-sm font-medium text-maquina-700 md:pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-snug text-tinta">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-tinta-70 max-w-[68ch]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-tinta-70 mt-6 max-w-[68ch]">
            En superficies planas y cómodas como paredes y fachadas, cada equipo cubre
            alrededor de 100 m² por día; en molduras o revestimientos duros se dilata.
            El plazo de tu frente te lo confirmamos en la visita.
          </p>
        </div>
      </section>

      {/* 5. QUÉ INCLUYE / QUÉ NO */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta mb-8">Qué hacemos y qué no (para que no haya sorpresas)</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-t-2 border-maquina-500 pt-4">
                <p className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-3">Lo que sí hacemos</p>
                <p className="text-tinta-70 leading-relaxed max-w-[68ch]">Arenamos fachadas, frentes, paredes y ladrillo a la vista, en obra nueva o en restauración. Sacamos la pintura vieja, la cal suelta y el revoque flojo, y dejamos la superficie limpia y pareja, lista para su próxima terminación.</p>
              </div>
              <div className="border-t-2 border-tinta pt-4">
                <p className="ficha-num text-xs font-semibold uppercase tracking-wider text-tinta-70 mb-3">Lo que no hacemos</p>
                <p className="text-tinta-70 leading-relaxed mb-3 max-w-[68ch]">El pintado y el revestimiento no vienen incluidos: lo normal es que los haga tu pintor o tu contratista. Si necesitás que lo hagamos nosotros, se presupuesta aparte. Tampoco armamos ningún cerramiento: si hay algo que no puede recibir polvo, el cerramiento lo ponés vos, y en la visita te decimos exactamente qué tapar.</p>
                <p className="text-tinta-70 leading-relaxed max-w-[68ch]">Lo que no hacemos es granallado ni arenado con normas o mediciones: hacemos arenado sin vueltas. Si además tenés vigas, estructuras metálicas, tanques o silos para arenar, también los hacemos — mirá <Link href="/servicios" className="text-tinta hover:underline font-medium">arenado industrial y en galpones</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EsquemaEquipo fondo="alt" />

      {/* 6a. ANTES Y DESPUÉS — fotos reales de fachadas. La prueba pesa más que el texto. */}
      <section id="casa" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta">
            Antes y después, en frentes de verdad
          </h2>
          <p className="mt-4 mb-10 text-base md:text-lg leading-relaxed text-tinta-70 max-w-[68ch]">
            Todas las fotos son de trabajos que hicimos nosotros. Ninguna está retocada
            ni sacada de internet.
          </p>

          <div className="border-t border-papel-linea">
            {ANTES_DESPUES.map(({ id, titulo, antes, despues, texto }) => (
              <div key={id} className="py-8 md:py-10 border-b border-papel-linea">
                <h3 className="text-lg md:text-xl font-semibold leading-snug text-tinta mb-4">
                  {titulo}
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <figure>
                    <div className="relative aspect-square rounded-sm overflow-hidden bg-papel-alt">
                      <Image
                        src={antes}
                        alt={`${titulo}: antes del arenado`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                    <figcaption className="ficha-num mt-2 text-xs font-semibold uppercase tracking-wider text-tinta-70">
                      Antes
                    </figcaption>
                  </figure>
                  <figure>
                    <div className="relative aspect-square rounded-sm overflow-hidden bg-papel-alt">
                      <Image
                        src={despues}
                        alt={`${titulo}: después del arenado`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                    <figcaption className="ficha-num mt-2 text-xs font-semibold uppercase tracking-wider text-maquina-700">
                      Después
                    </figcaption>
                  </figure>
                </div>
                <p className="mt-4 leading-relaxed text-tinta-70 max-w-[68ch]">{texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="font-semibold text-tinta mb-4">El trabajo, mientras pasa</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EN_CURSO.map(({ src, alt }) => (
                <div key={src} className="relative aspect-square rounded-sm overflow-hidden bg-papel-alt">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN_LG}>
              <MessageCircle className="w-5 h-5" />
              Mandanos una foto de tu frente
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* 6b. EDIFICIO, LOCAL O EMPRESA — la otra puerta */}
      <section id="empresa" className="py-16 md:py-24 bg-papel-alt border-y border-papel-linea scroll-mt-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta">
              ¿Es un edificio, un local o una planta?
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-tinta-70 max-w-[68ch]">
              Cambia poco el trabajo y cambia mucho la coordinación: hay horarios, hay
              gente circulando y hay actividad que no puede parar. Eso lo venimos
              haciendo hace años. Estos cuatro casos son estructuras metálicas, no
              fachadas — los mostramos por lo que prueban: que sabemos movernos dentro
              de un lugar en funcionamiento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {PRUEBA_OBRA.map(({ slug, title, image, proof }) => (
                <Link
                  key={slug}
                  href={`/casos-de-exito/${slug}`}
                  className="group border-t border-papel-linea pt-4 block"
                >
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-papel mb-3">
                    <Image
                      src={image}
                      alt={`Arenado de ${title.toLowerCase()}, con el lugar en funcionamiento`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <p className="font-semibold text-tinta group-hover:text-maquina-700 transition-colors">{title}</p>
                  <p className="text-tinta-70 text-sm mt-1 max-w-[58ch]">{proof}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-maquina-700 mt-2">
                    Ver el caso completo <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN}>
                <MessageCircle className="w-5 h-5" />
                Contanos sobre la obra
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 7. POR QUÉ CONFIAR */}
      <section className="py-16 md:py-24 bg-tinta">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-papel mb-4">Somos un equipo de oficio, no una promesa</h2>
            <p className="text-tinta-20 leading-relaxed mb-6 max-w-[68ch]">
              Arenado sin vueltas: rápido, prolijo y a precio justo. El oficio viene de
              familia y uno de los arenadores del equipo lleva más de 20 años haciendo
              esto. Tenemos 2 equipos completos con compresores propios — dos, no más —,
              así que no dependemos de nadie
              ni te dejamos esperando. Vamos siempre nosotros al lugar, coordinamos
              claro con la obra, y las fotos de este sitio son de trabajos que hicimos.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-papel">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-maquina-400" /> 2 equipos propios</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-maquina-400" /> Compresores propios</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-maquina-400" /> Trabajamos por sectores</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-maquina-400" /> Buenos Aires y AMBA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ZONAS AMBA */}
      <section className="py-16 md:py-24 bg-papel-alt border-b border-papel-linea">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-tinta mb-4">Vamos a tu obra en Buenos Aires y todo el AMBA</h2>
              <p className="text-tinta-70 leading-relaxed mb-4 max-w-[68ch]">
                Trabajamos en Capital Federal y en todo el Gran Buenos Aires: zona norte,
                oeste y sur. Si no estás seguro de si llegamos a tu obra, escribinos y te
                confirmamos en el momento.
              </p>
              <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN}>
                <MapPin className="w-5 h-5" />
                Consultá si llegamos a tu zona
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-tinta mb-8 text-center">
            Preguntas frecuentes sobre arenado de fachadas y restauración de frentes
          </h2>
          <FaqAccordion items={faqsFachadas} />
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-16 md:py-24 bg-tinta">
        <div className="container mx-auto px-5 lg:px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-papel mb-4">
            Contanos sobre tu fachada o tu obra y te decimos qué necesita
          </h2>
          <p className="text-white/90 mb-8">
            Sin costo y sin compromiso. Coordinamos la visita, vemos el frente y te
            pasamos el presupuesto antes de que decidas.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA message={WPP_FACHADA} className={WPP_BTN_LG}>
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </WhatsAppCTA>
          </div>
          <p className="text-white/70 text-sm mt-5">Respondemos rápido · Visita y presupuesto sin costo · Buenos Aires y AMBA</p>
        </div>
      </section>

      {/* 11. ENLAZADO INTERNO */}
      <section className="py-10 border-t border-papel-linea">
        <div className="container mx-auto px-5 lg:px-8 text-center">
          <p className="text-tinta-70 max-w-[68ch]">
            ¿Además del frente tenés estructuras, tanques o un galpón? Hacemos{" "}
            <Link href="/servicios" className="text-tinta hover:underline font-medium">arenado industrial y en galpones</Link>
            , y también{" "}
            <Link href="/arenado-de-piletas" className="text-tinta hover:underline font-medium">arenado de piletas</Link>
            . Podés ver{" "}
            <Link href="/casos-de-exito" className="text-tinta hover:underline font-medium">todos nuestros casos reales</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}

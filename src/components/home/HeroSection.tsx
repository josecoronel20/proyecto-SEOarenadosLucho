import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN_ON_DARK, WPP_MSG } from "@/lib/wpp"

/**
 * Hero de la home.
 *
 * Tres decisiones deliberadas, todas por conversión:
 *
 * 1. **No ocupa 100vh.** Antes empujaba todo el contenido fuera de la pantalla:
 *    el que no conoce la palabra "arenado" rebotaba sin llegar a la explicación.
 * 2. **El `<h1>` es el título real**, con keyword + zona. Antes el h1 era una
 *    frase descriptiva en `text-base` y el nombre de la marca un `<p>` gigante.
 * 3. **Fondo = imagen con `priority`, no el video.** `heroVideo.mp4` pesa 24,3 MB
 *    sin comprimir: en 4G la home quedaba en blanco varios segundos, con tráfico
 *    pago rebotando antes de ver nada. El video vuelve cuando esté comprimido
 *    (< 3 MB) — ver `contexto/marketing/15-sitio-ideal.md`.
 */
export function HeroSection() {
  return (
    <section className="relative bg-primary-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/arenadoIndustrial/Nave/IMG_2419.PNG"
          alt="Arenado de una estructura metálica en Buenos Aires"
          fill
          className="object-cover opacity-45"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/85 to-primary-900/55" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20 py-14 md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/images/logo-solo-blanco.png"
              alt=""
              width={48}
              height={48}
              className="object-contain w-10 md:w-12 h-auto"
            />
            <p className="text-primary-200 font-semibold text-sm md:text-base">
              Arenados Lucho · In situ, con equipo propio
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Arenado en Buenos Aires y AMBA: dejamos la superficie lista para pintar o revestir
          </h1>

          <p className="mt-5 text-base md:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
            El arenado es como una lija potente: saca de una vez la pintura vieja, el óxido y lo
            descascarado. Vamos a tu obra, galpón o casa con nuestros equipos —no trasladás
            nada— y te entregamos la superficie limpia y pareja.
          </p>

          <p className="mt-3 text-white/90 font-medium">
            Contanos qué necesitás o mandanos una foto. La visita y el presupuesto son sin costo.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA message={WPP_MSG.general} className={WPP_BTN_ON_DARK}>
              <MessageCircle className="w-5 h-5" />
              Pedir presupuesto por WhatsApp
            </WhatsAppCTA>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/90 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Ver trabajos reales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

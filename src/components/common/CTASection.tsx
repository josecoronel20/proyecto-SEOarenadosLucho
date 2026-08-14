import React from "react"
import { MessageCircle, CheckCircle2 } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN_ON_DARK, WPP_MSG, QUE_AYUDA_SABER } from "@/lib/wpp"

interface CTASectionProps {
  /** Mensaje pre-cargado según la página donde se monta. */
  message?: string
  title?: string
  subtitle?: string
}

/**
 * Cierre de página. El CTA **abre WhatsApp** (la única conversión del proyecto):
 * antes era un link a /contacto con ícono de documento mientras el texto de abajo
 * prometía WhatsApp — metía un salto de página entre la intención y la conversión.
 */
const CTASection = ({
  message = WPP_MSG.general,
  title = "¿Tenés algo para arenar? Contanos qué es",
  subtitle = "Mandanos una foto por WhatsApp y te decimos qué necesita. La visita y el presupuesto son sin costo y sin compromiso.",
}: CTASectionProps) => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Video de fondo (1,1 MB) — decorativo, sin bloquear el render. */}
      <div className="absolute inset-0 z-0 bg-primary-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="w-full h-full object-cover"
        >
          <source src="/videos/ctaVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/85 to-primary-900/60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h2>

          <p className="text-base md:text-lg text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>

          <WhatsAppCTA message={message} className={WPP_BTN_ON_DARK}>
            <MessageCircle className="w-5 h-5" />
            Escribinos por WhatsApp
          </WhatsAppCTA>

          {/* Reemplaza al formulario: le dice a la persona qué contar en el
              primer mensaje para que ya sirva para cotizar. */}
          <div className="mt-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 md:p-6 text-left max-w-xl mx-auto">
            <p className="font-semibold text-white mb-3">Qué nos ayuda saber</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {QUE_AYUDA_SABER.map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/90 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

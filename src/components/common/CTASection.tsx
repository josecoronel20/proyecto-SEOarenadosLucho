import React from "react"
import { MessageCircle } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN_ON_DARK, WPP_MSG, QUE_AYUDA_SABER } from "@/lib/wpp"
import { H2, MEDIDA } from "@/components/common/system"

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
 *
 * El video de fondo se fue (1,1 MB descargados en cada página, decorativos). Lo
 * reemplaza el fondo tinta plano con el filete naranja: en el mundo del catálogo
 * impreso la última página es una hoja de pedido, no un clip en loop. Además el
 * texto ahora tiene 17:1 de contraste sin necesitar sombras para despegarse.
 */
const CTASection = ({
  message = WPP_MSG.general,
  title = "¿Tenés algo para arenar? Contanos qué es",
  subtitle = "Mandanos una foto por WhatsApp y te decimos qué necesita. La visita y el presupuesto son sin costo y sin compromiso.",
}: CTASectionProps) => {
  return (
    <section className="bg-tinta text-papel border-t-2 border-maquina-500">
      <div className="container mx-auto px-5 lg:px-8 py-16 md:py-24">
        <h2 className={H2}>{title}</h2>

        <p className={`mt-4 text-base md:text-lg leading-relaxed text-tinta-20 ${MEDIDA}`}>
          {subtitle}
        </p>

        <div className="mt-8">
          <WhatsAppCTA message={message} className={WPP_BTN_ON_DARK}>
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Escribinos por WhatsApp
          </WhatsAppCTA>
        </div>

        {/* Reemplaza al formulario: le dice a la persona qué contar en el primer
            mensaje para que ya sirva para cotizar. Va tabulado bajo un filete,
            no dentro de una caja: una caja adentro de una sección ya es anidar. */}
        <div className="mt-14 border-t border-white/20 pt-6">
          <p className="ficha-num text-sm font-semibold uppercase tracking-wider text-maquina-400">
            Qué nos ayuda saber
          </p>
          <ul className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2 max-w-3xl">
            {QUE_AYUDA_SABER.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 text-tinta-20 border-t border-white/10 pt-3"
              >
                <span className="ficha-num text-sm text-white/40 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CTASection

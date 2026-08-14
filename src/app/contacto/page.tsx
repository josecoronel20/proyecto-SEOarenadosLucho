import Link from "next/link"
import { MessageCircle, Clock, MapPin, CheckCircle2, Camera } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
// Fuente única de estilos y mensajes: antes estaban duplicados acá con
// `green-600`, que no llegaba al contraste AA.
import { WPP_BTN_LG as WPP_BTN, WPP_MSG as WPP_MSGS } from "@/lib/wpp"

const WPP_MSG = WPP_MSGS.general

const puntos = [
  {
    title: "Mandanos una foto",
    text: "Con una foto de lo que hay que arenar ya te podemos orientar. No hace falta que sepas nada técnico.",
  },
  {
    title: "Respondemos rápido",
    text: "Te contestamos por WhatsApp y coordinamos la visita el día que te sirva.",
  },
  {
    title: "Buenos Aires y AMBA",
    text: "Vamos con equipo propio a tu obra, galpón o casa. No trasladás nada.",
  },
]

export default function ContactoPage() {
  return (
    <div className="bg-papel py-16 md:py-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Sin el círculo verde con el globito adentro arriba del título: era
            decoración pura y además ponía un ícono flotando sobre el h1, que es
            justo lo que hace que una landing se lea como plantilla. */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-tinta">
          Pedí tu presupuesto de arenado
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-tinta-70 max-w-[62ch]">
          Escribinos por WhatsApp y te respondemos rápido. Contanos qué necesitás
          arenar —o mandanos una foto— y coordinamos una visita. La visita y el
          presupuesto son sin costo y sin compromiso.
        </p>

        <div className="mt-8">
          <WhatsAppCTA message={WPP_MSG} className={WPP_BTN}>
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            Escribinos por WhatsApp
          </WhatsAppCTA>
        </div>

        <p className="text-sm text-tinta-70 mt-4">
          Visita y presupuesto sin costo · Respondemos rápido
        </p>

        {/* Los tres puntos pasan a renglones tabulados. Antes eran tres tarjetas
            centradas con el ícono en un cuadradito arriba del título. */}
        <div className="mt-14 border-t border-papel-linea">
          {puntos.map(({ title, text }) => (
            <div
              key={title}
              className="grid gap-x-10 gap-y-1 border-b border-papel-linea py-5 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
            >
              <h2 className="font-semibold text-tinta">{title}</h2>
              <p className="text-tinta-70 leading-relaxed max-w-[62ch]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-4">
            Qué nos ayuda saber
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-papel-linea">
            {[
              "Qué hay que arenar (pileta, estructura, fachada, camión…)",
              "Tamaño aproximado o metros",
              "En qué zona está",
              "Para cuándo lo necesitás",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-papel-linea py-4 text-tinta-70"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-tinta-70 mt-4">
            ¿Es una pileta?{" "}
            <Link
              href="/arenado-de-piletas"
              className="text-tinta hover:underline font-medium"
            >
              Mirá cómo trabajamos las piletas
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

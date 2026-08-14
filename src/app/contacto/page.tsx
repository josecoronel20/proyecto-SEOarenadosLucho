import Link from "next/link"
import { MessageCircle, Clock, MapPin, CheckCircle2, Camera } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
// Fuente única de estilos y mensajes: antes estaban duplicados acá con
// `green-600`, que no llegaba al contraste AA.
import { WPP_BTN_LG as WPP_BTN, WPP_MSG as WPP_MSGS } from "@/lib/wpp"

const WPP_MSG = WPP_MSGS.general

const puntos = [
  {
    icon: Camera,
    title: "Mandanos una foto",
    text: "Con una foto de lo que hay que arenar ya te podemos orientar. No hace falta que sepas nada técnico.",
  },
  {
    icon: Clock,
    title: "Respondemos rápido",
    text: "Te contestamos por WhatsApp y coordinamos la visita el día que te sirva.",
  },
  {
    icon: MapPin,
    title: "Buenos Aires y AMBA",
    text: "Vamos con equipo propio a tu obra, galpón o casa. No trasladás nada.",
  },
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pedí tu presupuesto de arenado
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Escribinos por WhatsApp y te respondemos rápido. Contanos qué necesitás arenar
            —o mandanos una foto— y coordinamos una visita. La visita y el presupuesto son
            sin costo y sin compromiso.
          </p>

          <WhatsAppCTA message={WPP_MSG} className={WPP_BTN}>
            <MessageCircle className="w-6 h-6" />
            Escribinos por WhatsApp
          </WhatsAppCTA>

          <p className="text-sm text-gray-600 mt-4">
            Visita y presupuesto sin costo · Respondemos rápido
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {puntos.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-700 mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-1">{title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-white/70 p-6">
          <h2 className="font-semibold text-gray-900 mb-3">Qué nos ayuda saber</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              "Qué hay que arenar (pileta, estructura, fachada, camión…)",
              "Tamaño aproximado o metros",
              "En qué zona está",
              "Para cuándo lo necesitás",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            ¿Es una pileta?{" "}
            <Link
              href="/arenado-de-piletas"
              className="text-primary-600 hover:underline font-medium"
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

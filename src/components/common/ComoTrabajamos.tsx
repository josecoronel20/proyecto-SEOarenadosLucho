import { MessageCircle, Truck, Paintbrush } from "lucide-react"

/**
 * Los 3 pasos. Existe porque la gente no sabe **cómo se contrata** un arenado:
 * no sabe si tiene que llevar algo, si le van a cobrar la visita, ni qué recibe
 * al final. Bajar esa incertidumbre es lo que destraba el primer mensaje.
 */
const pasos = [
  {
    icon: MessageCircle,
    title: "1. Contanos qué necesitás",
    text: "Escribinos por WhatsApp con una foto o una descripción. Coordinamos una visita para verlo en persona: sin costo y sin compromiso.",
  },
  {
    icon: Truck,
    title: "2. Vamos con nuestro equipo",
    text: "Llegamos con compresores y equipo propio a tu obra, galpón o casa. No trasladás ni preparás nada: protegemos la zona y arenamos.",
  },
  {
    icon: Paintbrush,
    title: "3. Te lo entregamos listo",
    text: "Superficie limpia y pareja, lista para que le des pintura, antióxido o revestimiento cuando quieras.",
  },
]

export function ComoTrabajamos({ className = "bg-white" }: { className?: string }) {
  return (
    <section className={`py-14 md:py-20 ${className}`} aria-labelledby="como-trabajamos">
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          id="como-trabajamos"
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center"
        >
          Cómo trabajamos
        </h2>
        <p className="text-gray-700 text-base md:text-lg text-center mb-10 max-w-xl mx-auto">
          Tres pasos, sin vueltas. No hace falta que sepas nada técnico.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Ícono al lado del título, no en un cuadradito encima: esa pila
              (tile redondeado + h3 debajo) es la plantilla que sale de todos los
              generadores y hace que el sitio se lea como hecho a máquina. */}
          {pasos.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <h3 className="font-bold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

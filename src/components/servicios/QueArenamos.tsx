import Link from "next/link"
import { Building2, Warehouse, Waves, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN, WPP_MSG } from "@/lib/wpp"

// Cada grupo lleva su propio mensaje pre-cargado: el CTA está justo donde la
// persona se reconoce ("esto es lo mío"), y el chat arranca con el trabajo ya
// nombrado en vez de un "hola" genérico que obliga a repreguntar todo.
const grupos = [
  {
    icon: Building2,
    title: "En obra y restauración",
    text: "Recuperamos superficies viejas o descascaradas y las dejamos listas para repintar o revestir, sin frenar la obra.",
    items: [
      "Paredes y ladrillo a la vista",
      "Fachadas y frentes de edificio",
      "Vigas e hierros (antióxido)",
    ],
    message: WPP_MSG.obra,
    cta: "Consultar por un trabajo en obra",
  },
  {
    icon: Warehouse,
    title: "Industria y galpones (PYME)",
    text: "Vamos con el equipo a tu galpón o predio: no trasladás nada. Sacamos el óxido y la pintura vieja y dejamos el metal listo para el nuevo revestimiento.",
    items: [
      "Estructuras metálicas, tanques y silos",
      "Camiones, acoplados e hierros",
      "Quitar óxido y pintura vieja",
    ],
    message: WPP_MSG.galpon,
    cta: "Consultar por mi galpón",
  },
]

export function QueArenamos() {
  return (
    <section className="py-12 md:py-16 bg-papel border-b border-papel-linea" aria-label="Qué arenamos">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-tinta mb-3">
            Arenado para obra, industria y galpones
          </h2>
          <p className="text-tinta-70 text-base md:text-lg leading-relaxed">
            Arenamos casi cualquier superficie que haya que dejar limpia y lista para pintar o
            revestir — <strong>in situ, con equipo propio</strong>: vamos a tu obra, planta, galpón
            o domicilio y no trasladás nada a ningún taller.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {grupos.map(({ icon: Icon, title, text, items, message, cta }) => (
            <div
              key={title}
              className="flex flex-col rounded-sm border border-papel-linea bg-papel-alt/50 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-sm bg-papel-alt text-tinta">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-tinta">{title}</h3>
              </div>
              <p className="text-tinta-70 mb-4 leading-relaxed">{text}</p>
              <ul className="space-y-2 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-tinta-70 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-tinta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <WhatsAppCTA message={message} className={`${WPP_BTN} w-full`}>
                  <MessageCircle className="w-5 h-5" />
                  {cta}
                </WhatsAppCTA>
              </div>
            </div>
          ))}
        </div>

        {/* Deriva la intención de piletas a su landing dedicada */}
        <div className="max-w-4xl mx-auto mt-6">
          <Link
            href="/arenado-de-piletas"
            className="flex items-center justify-between gap-4 rounded-sm border border-papel-linea bg-papel-alt/50 p-5 hover:border-tinta transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-sm bg-papel-alt text-tinta">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-tinta">¿Es una pileta o piscina?</p>
                <p className="text-tinta-70 text-sm">Tenemos una página dedicada al arenado de piletas.</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-tinta font-semibold group-hover:text-tinta flex-shrink-0">
              Ver arenado de piletas
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

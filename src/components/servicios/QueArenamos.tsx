import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { WhatsAppCTA } from "@/components/common/WhatsAppCTA"
import { WPP_BTN, WPP_MSG } from "@/lib/wpp"
import { Section, SectionHead, H3, MEDIDA } from "@/components/common/system"

// Cada grupo lleva su propio mensaje pre-cargado: el CTA está justo donde la
// persona se reconoce ("esto es lo mío"), y el chat arranca con el trabajo ya
// nombrado en vez de un "hola" genérico que obliga a repreguntar todo.
const grupos = [
  {
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
    // Dos fichas tabuladas, no dos tarjetas. Antes cada grupo era una caja con
    // un ícono dentro de otro cuadradito: una caja adentro de otra caja, que es
    // el anidado que más delata plantilla. Ahora cada grupo es un bloque de
    // catálogo separado por filete, con su lista de superficies como
    // especificación y su CTA propio al pie.
    <Section fondo="papel" aria-label="Qué arenamos">
      <SectionHead
        titulo="Arenado para obra, industria y galpones"
        intro={
          <>
            Arenamos casi cualquier superficie que haya que dejar limpia y lista
            para pintar o revestir —{" "}
            <strong className="font-semibold text-tinta">in situ, con equipo propio</strong>:
            vamos a tu obra, planta, galpón o domicilio y no trasladás nada a
            ningún taller.
          </>
        }
      />

      <div className="ficha-lista border-y border-papel-linea">
        {grupos.map(({ title, text, items, message, cta }, i) => (
          <div key={title} className="py-8 md:py-10 md:grid md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-6">
            <span className="ficha-num text-sm font-medium text-maquina-700 hidden md:block md:pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={H3}>{title}</h3>
              <p className={`mt-2 leading-relaxed text-tinta-70 ${MEDIDA}`}>{text}</p>

              <ul className="mt-5 grid sm:grid-cols-3 gap-px bg-papel-linea border border-papel-linea">
                {items.map((item) => (
                  <li key={item} className="bg-papel px-4 py-3 text-sm text-tinta">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <WhatsAppCTA message={message} className={WPP_BTN}>
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  {cta}
                </WhatsAppCTA>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deriva la intención de piletas a su landing dedicada */}
      <Link
        href="/arenado-de-piletas"
        className="group mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-papel-linea pb-6"
      >
        <div>
          <p className="font-semibold text-tinta group-hover:text-maquina-700 transition-colors">
            ¿Es una pileta o piscina?
          </p>
          <p className="text-tinta-70 text-sm mt-1">
            Tenemos una página dedicada al arenado de piletas.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 font-semibold text-maquina-700">
          Ver arenado de piletas
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Section>
  )
}

import { Section, SectionHead, MEDIDA } from "@/components/common/system"

const requisitos = [
  "Que podamos acceder al lugar",
  "Un espacio para ubicar el equipo",
  "Definir con quién coordinamos (vos o el encargado de obra)",
  "Permisos, si el lugar los requiere (obra o vía pública)",
]

const logistica = [
  "Coordinamos día y horario con vos",
  "Trabajamos por zonas: intervenimos y liberamos rápido",
  "Compresores propios (no dependemos de la energía del lugar)",
  "Accesos y permisos acordados antes de empezar",
]

/**
 * Dos columnas de requisitos, tabuladas.
 *
 * Antes eran dos cajas con borde, y adentro de cada una cada renglón llevaba su
 * ícono en otro cuadradito con fondo: una caja adentro de una caja adentro de
 * una sección. El detector lo marcaba doce veces en esta página sola. Ahora es
 * una tabla de dos columnas: rótulo arriba, renglones separados por filete.
 */
const rotulo =
  "ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-4"

function Columna({ titulo, items }: { titulo: string; items: string[] }) {
  return (
    <div>
      <h3 className={rotulo}>{titulo}</h3>
      <ul className="border-t border-papel-linea">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-papel-linea py-4 text-tinta leading-relaxed"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LogisticaCoordinacion() {
  return (
    <Section fondo="papel" aria-label="Logística y requisitos">
      <SectionHead
        titulo="Coordinamos todo, sin frenar tu obra ni tu día"
        intro="Coordinamos el día y el horario que te sirva y trabajamos por zonas para intervenir y liberar lo antes posible —sin frenar tu obra, tu producción ni tu casa. Llevamos compresores propios, así que no dependemos de la energía del lugar."
      />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <Columna titulo="Para iniciar necesitamos" items={requisitos} />
        <Columna titulo="Cómo trabajamos" items={logistica} />
      </div>

      <p className={`mt-10 border-l-2 border-maquina-500 pl-5 text-lg font-semibold text-tinta ${MEDIDA}`}>
        Objetivo: intervenir, terminar y liberar el sector lo antes posible.
      </p>
    </Section>
  )
}

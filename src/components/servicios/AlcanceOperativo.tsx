import { Section, SectionHead } from "@/components/common/system"

// ⚠️ El rendimiento de ~100 m²/día es real pero CONDICIONAL (dato del dueño,
// 11/08/2026): aplica a superficies cómodas y planas —paredes, fachadas, piletas—.
// En estructuras metálicas complejas o con revestimientos muy resistentes se dilata.
// Se publica siempre CON la condición: sin ella sería una promesa que el trabajo
// más rentable (galpón, estructuras) no puede sostener. Por eso tampoco va en el
// copy de Ads, donde no entra la aclaración (`marketing/18-copy-ads.md` §10).
//
// Va como tabla de capacidad —concepto a la izquierda, cifra a la derecha—, que
// es exactamente la forma en la que un manual publica un rendimiento. Los cuatro
// íconos en cuadradito se fueron: no había nada que un reloj o un rayo
// explicaran mejor que la propia línea.
const items = [
  {
    concepto: "Equipos",
    detalle: "Dos equipos propios, cada uno con su compresor",
    cifra: "2",
  },
  {
    concepto: "Superficie plana y pareja",
    detalle: "Paredes, fachadas, piletas: cada equipo cubre alrededor de",
    cifra: "100 m²/día",
  },
  {
    concepto: "Estructuras complejas o revestimientos muy duros",
    detalle: "Lleva más tiempo. El plazo te lo damos en la visita, con el trabajo a la vista",
    cifra: "A medir",
  },
  {
    concepto: "Trabajos grandes",
    detalle: "Sumamos equipos en paralelo para acortar los tiempos",
    cifra: "Escalable",
  },
]

export function AlcanceOperativo() {
  return (
    <Section fondo="alt" aria-label="Alcance operativo">
      <SectionHead
        titulo="Arenado de estructuras y tanques: rápido y sin frenarte"
        intro="Capacidad y equipos propios. Los rendimientos de abajo son reales, con la condición que los acompaña: no todo se arena al mismo ritmo."
      />

      <dl className="border-t border-papel-linea">
        {items.map(({ concepto, detalle, cifra }) => (
          <div
            key={concepto}
            className="grid gap-x-6 gap-y-1 border-b border-papel-linea py-5 md:grid-cols-[minmax(0,1fr)_9rem]"
          >
            <dt>
              <span className="block font-semibold text-tinta">{concepto}</span>
              <span className="mt-1 block text-tinta-70 leading-relaxed max-w-[60ch]">
                {detalle}
              </span>
            </dt>
            <dd className="ficha-num font-bold text-tinta md:text-right md:text-lg">
              {cifra}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

import { Section, SectionHead, FichaLista, Ficha } from "@/components/common/system"

/**
 * Tres razones, tabuladas. Antes eran tres tarjetas centradas con el ícono en un
 * cuadradito arriba del texto: la pila ícono-sobre-título es la plantilla que
 * sale de cualquier generador, y acá los íconos (un rayo, un signo peso, un
 * apretón de manos) eran pura ilustración de la frase que estaba al lado.
 */
const items = [
  {
    title: "Podemos sumar equipos",
    text: "Si el plazo aprieta, ponemos más de un equipo a trabajar en paralelo para acortar los tiempos.",
  },
  {
    title: "Precios competitivos",
    text: "Estamos en línea con el mercado, y la visita y el presupuesto no te cuestan nada.",
  },
  {
    title: "Hablás directo con quien hace el trabajo",
    text: "No hay intermediarios ni call center: coordinás con la misma persona que va a estar en el lugar.",
  },
]

export function BloqueDiferencial() {
  return (
    <Section fondo="alt" aria-label="Bloque diferencial">
      <SectionHead titulo="¿Por qué elegirnos?" />

      <FichaLista>
        {items.map((item, i) => (
          <Ficha key={item.title} num={i + 1} titulo={item.title}>
            {item.text}
          </Ficha>
        ))}
      </FichaLista>
    </Section>
  )
}

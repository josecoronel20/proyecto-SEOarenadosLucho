import { Section, SectionHead, FichaLista, Ficha } from "@/components/common/system"

/**
 * Los 3 pasos. Existe porque la gente no sabe **cómo se contrata** un arenado:
 * no sabe si tiene que llevar algo, si le van a cobrar la visita, ni qué recibe
 * al final. Bajar esa incertidumbre es lo que destraba el primer mensaje.
 *
 * Va numerado y tabulado, como una orden de trabajo. Acá el número sí informa
 * —es una secuencia real, uno pasa antes que el otro—, que es la única razón
 * válida para numerar. Los íconos se fueron: un sobrecito al lado de "contanos"
 * no agregaba nada que la palabra no dijera.
 */
const pasos = [
  {
    title: "Contanos qué necesitás",
    text: "Escribinos por WhatsApp con una foto o una descripción. Coordinamos una visita para verlo en persona: sin costo y sin compromiso.",
    dato: "Sin cargo",
  },
  {
    title: "Vamos con nuestro equipo",
    text: "Llegamos con compresores y equipo propio a tu obra, galpón o casa. No trasladás ni preparás nada: protegemos la zona y arenamos.",
    dato: "Equipo propio",
  },
  {
    title: "Te lo entregamos listo",
    text: "Superficie limpia y pareja, lista para que le des pintura, antióxido o revestimiento cuando quieras.",
    dato: "Listo para pintar",
  },
]

export function ComoTrabajamos({ fondo = "papel" }: { fondo?: "papel" | "alt" }) {
  return (
    <Section fondo={fondo} aria-labelledby="como-trabajamos">
      <SectionHead
        id="como-trabajamos"
        titulo="Cómo trabajamos"
        intro="Tres pasos, sin vueltas. No hace falta que sepas nada técnico."
      />

      <FichaLista>
        {pasos.map((paso, i) => (
          <Ficha key={paso.title} num={i + 1} titulo={paso.title} dato={paso.dato}>
            {paso.text}
          </Ficha>
        ))}
      </FichaLista>
    </Section>
  )
}

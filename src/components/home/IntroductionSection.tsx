import { Section, SectionHead, MEDIDA } from "@/components/common/system"

const realizamos = [
  "Arenado en obra y construcción",
  "Estructuras metálicas, tanques y silos",
  "Restauración de fachadas, paredes y ladrillo a la vista",
  "Hierros, camiones y acoplados en tu galpón (in situ)",
  "Piletas listas para repintar o revestir",
  "Plantas, naves y trabajos de gran superficie",
]

const noRealizamos = [
  "Muebles y piezas sueltas chicas",
  "Portones y rejas de hogar",
  "Autos y motos particulares",
  "El pintado o el revestimiento final",
  "Granallado o arenado certificado con normas",
]

/**
 * La puerta de entrada del visitante que NO conoce la palabra "arenado" — un
 * segmento entero del negocio (el dueño de casa busca "sacar la pintura de la
 * pileta", no "arenado"). Por eso explica el servicio en criollo antes de vender.
 *
 * La lista de "lo que no hacemos" no es humildad: filtra al comprador equivocado
 * (que cuesta plata en Ads y tiempo en WhatsApp) y le da credibilidad al que sí
 * sirve. Incluye el límite que más malentendidos genera: no pintamos.
 *
 * Las dos listas van tabuladas bajo su rótulo, sin tilde verde ni cruz roja al
 * costado: el encabezado de la columna ya dice si es sí o no, y el ícono además
 * sumaba un rojo que no pasaba contraste. La columna del "no" va con la tinta
 * secundaria — se lee, pero no compite con la que vende.
 */
export function IntroductionSection() {
  return (
    <Section fondo="papel" aria-labelledby="que-es">
      <SectionHead
        id="que-es"
        titulo="¿Qué es el arenado y para qué te sirve?"
        intro={
          <>
            Si se te descascara la pintura, tenés óxido o una superficie vieja, el
            arenado es la forma más rápida de resolverlo: lanzamos arena a presión
            y sacamos de una sola vez la pintura vieja, el óxido y todo lo flojo,
            sin lijar ni rascar a mano.
          </>
        }
      />

      <p className={`-mt-4 mb-12 text-base md:text-lg leading-relaxed text-tinta-70 ${MEDIDA}`}>
        Lo hacemos <strong className="font-semibold text-tinta">in situ</strong> —en
        tu obra, en tu galpón o en tu casa— y te entregamos la superficie limpia y
        pareja,{" "}
        <strong className="font-semibold text-tinta">lista para pintar o revestir</strong>.
        La mano final la das vos, tu pintor o tu piletero, con el material que elijas.
      </p>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-4">
            Qué arenamos
          </h3>
          <ul className="border-t border-papel-linea">
            {realizamos.map((item) => (
              <li
                key={item}
                className="border-b border-papel-linea py-3 text-tinta font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="ficha-num text-xs font-semibold uppercase tracking-wider text-tinta-70 mb-4">
            Qué no hacemos
          </h3>
          <ul className="border-t border-papel-linea">
            {noRealizamos.map((item) => (
              <li
                key={item}
                className="border-b border-papel-linea py-3 text-tinta-70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

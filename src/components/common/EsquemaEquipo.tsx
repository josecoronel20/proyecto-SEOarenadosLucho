import { Section, SectionHead, MEDIDA } from "@/components/common/system"

/**
 * El espacio que necesita el equipo, dibujado.
 *
 * **Por qué un esquema y no una foto.** La pregunta que hace el cliente no es
 * "¿cómo es el equipo?" sino "¿cuánto lugar necesitan y dónde lo pongo?". Una
 * foto del compresor no contesta eso; un dibujo con la distancia sí. Y como se
 * ve claramente que es un dibujo, no promete ser una foto de nada.
 *
 * ⛔ El 21/08/2026 se descartó usar acá una imagen generada por IA. Motivo en
 * `contexto/21-realidad-operativa.md` §8: una imagen fotorrealista al lado de
 * las ~38 fotos reales del sitio se lee como documental, no como ilustración —
 * y esa en particular traía texto en chino, un modelo deformado y marca de agua.
 * **Solo fotos reales de trabajos propios, o dibujos que se vean como dibujos.**
 *
 * El trazo sigue el mundo del sitio: plano técnico de manual, dos tintas,
 * filetes finos y cotas. El naranja marca lo único que el cliente tiene que
 * resolver: la distancia.
 */
export function EsquemaEquipo({ fondo = "alt" }: { fondo?: "papel" | "alt" }) {
  return (
    <Section fondo={fondo} ritmo="compacto" aria-labelledby="esquema-equipo">
      <SectionHead
        id="esquema-equipo"
        titulo="Cuánto lugar necesitamos para el equipo"
        intro="Es lo que más nos preguntan. Un equipo son un compresor y una tolva, que llegan remolcados o en la camioneta. Lo importante no es el tamaño: es que puedan quedar cerca del trabajo."
      />

      <figure className="border-y border-papel-linea py-8">
        <svg
          viewBox="0 0 560 340"
          role="img"
          aria-labelledby="esq-titulo esq-desc"
          className="w-full h-auto max-w-3xl"
        >
          <title id="esq-titulo">
            Esquema del espacio necesario para el equipo de arenado
          </title>
          <desc id="esq-desc">
            A la izquierda, el compresor y la tolva apoyados en el piso. A la
            derecha, el tanque o superficie a arenar. Entre los dos, una cota que
            indica que la distancia debe ser la menor posible, porque la arena se
            traslada al hombro desde la tolva hasta el lugar de trabajo.
          </desc>

          {/* ---- piso ---- */}
          <line x1="20" y1="250" x2="540" y2="250" className="stroke-papel-linea" strokeWidth="2" />

          {/* ---- compresor: caja sobre ruedas, remolcado ---- */}
          <g className="stroke-tinta fill-none" strokeWidth="2">
            <rect x="24" y="182" width="100" height="48" rx="3" />
            <line x1="24" y1="196" x2="124" y2="196" />
            <circle cx="46" cy="240" r="10" />
            <circle cx="104" cy="240" r="10" />
            {/* lanza de remolque */}
            <path d="M24 218 L6 226" />
          </g>

          {/* ---- tolva: recipiente vertical sobre patas ----
               Separada del compresor lo suficiente para que los dos rótulos no
               se toquen. Sin manguera: dibujada, se leía como un brazo, y el
               recorrido ya lo cuenta la flecha naranja. */}
          <g className="stroke-tinta fill-none" strokeWidth="2">
            <path d="M180 186 Q198 168 216 186" />
            <rect x="180" y="186" width="36" height="42" />
            <path d="M186 228 L178 250 M198 228 L198 250 M210 228 L218 250" />
          </g>

          {/* ---- el trabajo: un tanque acostado ---- */}
          <g className="stroke-tinta fill-none" strokeWidth="2">
            <path d="M400 175 H520" />
            <path d="M400 235 H520" />
            <ellipse cx="400" cy="205" rx="14" ry="30" />
            <path d="M520 175 A14 30 0 0 1 520 235" />
            <rect x="418" y="235" width="16" height="15" />
            <rect x="486" y="235" width="16" height="15" />
          </g>

          {/* ---- el recorrido de la arena, al hombro ----
               Arranca en la tolva y termina en el borde del tanque: la flecha
               tiene que cubrir exactamente el tramo que se camina. */}
          <g className="stroke-maquina-500" strokeWidth="2" fill="none">
            <path d="M224 150 H374" strokeDasharray="7 6" />
            <path d="M386 150 l-12 -7 v14 z" className="fill-maquina-500" stroke="none" />
          </g>
          <text
            x="305"
            y="134"
            textAnchor="middle"
            className="fill-maquina-700"
            fontSize="18"
            fontWeight="600"
          >
            La arena se carga al hombro
          </text>

          {/* ---- cota ----
               Va de la pata de la tolva al borde del tanque. Antes terminaba
               antes de llegar: medía menos de lo que decía medir. */}
          <g className="stroke-tinta-50" strokeWidth="1.5">
            <path d="M224 288 v16 M386 288 v16" />
            <path d="M224 296 H386" />
          </g>
          <text
            x="305"
            y="326"
            textAnchor="middle"
            className="fill-tinta"
            fontSize="18"
            fontWeight="600"
          >
            Lo más cerca que se pueda
          </text>

          {/* ---- rótulos ---- */}
          <g className="fill-tinta-70 ficha-num" fontSize="15" textAnchor="middle">
            <text x="74" y="274">COMPRESOR</text>
            <text x="198" y="274">TOLVA</text>
            <text x="460" y="274">EL TRABAJO</text>
          </g>
        </svg>

        <figcaption className={`mt-6 text-tinta-70 leading-relaxed ${MEDIDA}`}>
          La arena se carga <strong className="font-semibold text-tinta">al hombro</strong> desde
          la tolva hasta donde se arena. Cuanto más lejos quede el equipo, más lento y
          más pesado se vuelve el trabajo — por eso pedimos un lugar para dejarlo
          cerca. En la visita miramos juntos dónde conviene ponerlo.
        </figcaption>
      </figure>
    </Section>
  )
}

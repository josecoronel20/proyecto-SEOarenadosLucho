import { ZONAS } from "@/lib/siteConfig"
import { Section, SectionHead, MEDIDA } from "@/components/common/system"

/**
 * Señal de SEO local **sin páginas delgadas**.
 *
 * La alternativa —una landing por partido— sería un doorway: sin contenido real
 * y distinto por zona, Google las trata como spam y diluyen la autoridad de las
 * 3 páginas que sí importan. Esta sección da la señal en texto; el trabajo pesado
 * de SEO local lo hace el Google Business Profile.
 *
 * Se nombran agrupaciones, no partidos: prometer zonas que después se rechazan
 * quema leads y reseñas.
 *
 * Los alfileres de mapa que había al lado de cada zona se fueron: repetían en
 * ícono lo que la palabra ya decía, y en un listado de seis eso es ruido.
 */
export function ZonasCobertura({ fondo = "alt" }: { fondo?: "papel" | "alt" }) {
  return (
    <Section fondo={fondo} ritmo="compacto" aria-labelledby="zonas">
      <SectionHead
        id="zonas"
        titulo="Dónde trabajamos"
        intro={
          <>
            Hacemos arenado a domicilio en{" "}
            <strong className="font-semibold text-tinta">
              Buenos Aires y todo el AMBA
            </strong>
            . Vamos con nuestros equipos y compresores: no dependemos de la energía
            del lugar ni tenés que trasladar nada.
          </>
        }
      />

      {/* Tabulado con filete, como una tabla de cobertura de un manual: entra
          todo en dos renglones y se lee de un vistazo. */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-px bg-papel-linea border border-papel-linea">
        {ZONAS.map((zona) => (
          <li
            key={zona}
            className="bg-papel px-4 py-4 md:px-6 font-medium text-tinta"
          >
            {zona}
          </li>
        ))}
      </ul>

      <p className={`mt-6 text-tinta-70 ${MEDIDA}`}>
        ¿Estás más lejos? Consultanos igual: según el trabajo, viajamos.
      </p>
    </Section>
  )
}

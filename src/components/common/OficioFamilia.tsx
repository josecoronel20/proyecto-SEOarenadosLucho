import { Section, H2, MEDIDA } from "@/components/common/system"

/**
 * El linaje del oficio.
 *
 * **Por qué existe esta sección.** Los anuncios prometen *"Oficio aprendido en
 * familia"* (RSA del grupo de marca) y llevan el texto destacado *"20 años de
 * oficio"*, pero ninguna de las dos landings de las campañas —`/` y
 * `/servicios`— lo decía. El respaldo estaba publicado solo en la FAQ. Alguien
 * que busca "arenados lucho" veía un aviso sobre oficio heredado y aterrizaba
 * en una página que no lo mencionaba: desajuste de mensaje justo en el tráfico
 * más barato de la cuenta.
 *
 * **El texto es el aprobado el 11/08/2026, casi literal de la FAQ.** No se
 * amplía ni se adorna, por una razón concreta: la cuenta tenía heredado
 * *"+20 años de experiencia"*, que es **falso** como antigüedad de la empresa
 * (el negocio tiene ~8 años) y estuvo corriendo en todos los anuncios sin que
 * nadie lo supiera.
 *
 * ⛔ **Nunca "20 años de experiencia", "en el mercado" ni "desde 200X".** Eso se
 * lee como antigüedad de la razón social y habría que salir a explicarlo. Se
 * dice **"de oficio"**, que habla de la gente que hace el trabajo y es
 * verificable. Ver `contexto/marketing/18-copy-ads.md` §4.
 */
export function OficioFamilia({ fondo = "alt" }: { fondo?: "papel" | "alt" }) {
  return (
    <Section fondo={fondo} ritmo="compacto" aria-labelledby="oficio">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 md:items-start">
        <div>
          <h2 id="oficio" className={H2}>
            El oficio viene de familia
          </h2>
          <p className={`mt-5 text-base md:text-lg leading-relaxed text-tinta-70 ${MEDIDA}`}>
            Se aprendió trabajando, no en un curso. Uno de los arenadores del
            equipo lleva más de 20 años haciendo esto. Hoy salimos con dos equipos
            propios completos: obra, restauración, galpones, estructuras
            industriales y piletas.
          </p>
        </div>

        {/* La cifra tabulada, como el rendimiento en la hoja de un manual. Es la
            que hace juego con el texto destacado del anuncio. */}
        <dl className="border-t-2 border-maquina-500 pt-4 md:min-w-[13rem]">
          <dt className="ficha-num text-4xl md:text-5xl font-bold text-tinta leading-none">
            20 años
          </dt>
          <dd className="ficha-num mt-2 text-xs font-semibold uppercase tracking-wider text-maquina-700">
            de oficio
          </dd>
        </dl>
      </div>
    </Section>
  )
}

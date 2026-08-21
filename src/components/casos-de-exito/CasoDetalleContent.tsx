import Image from "next/image"
import type { ProjectForDetail } from "@/lib/getProjectBySlug"
import { H2, H3, MEDIDA } from "@/components/common/system"

/**
 * El detalle de un caso.
 *
 * **Para quién está escrito.** No para un evaluador de licitación: para el
 * encargado de una PYME que tiene un tanque oxidado y está haciendo un
 * simulacro mental —*"si los llamo, ¿qué pasa el lunes en mi planta?"*—. Por eso
 * el orden es el del cliente, no el del proveedor: qué había, cómo se trabajó,
 * cómo quedó, y qué tiene que poner él.
 *
 * **Se fue la sección "Parámetros técnicos".** Le ponía nombre técnico a un
 * servicio que justamente no lo es: el negocio hace arenado sin vueltas y tiene
 * prohibido prometer trabajo medido con normas. Al que sabe le sugería
 * especificaciones que no existen; al que no sabe lo asustaba.
 *
 * En forma sigue el sistema del sitio: filetes, no tarjetas. Antes cada bloque
 * era una `Card` con su ícono, incluido un `Card` verde para "Resultados".
 */

const TIPO_LABEL: Record<string, string> = {
  "restauracion-mantenimiento": "Restauración y mantenimiento",
  "obra-publica": "Obra pública",
  "obra-construccion": "Obra en construcción",
}

const METODOLOGIA_LABELS: Record<string, string> = {
  planificacion: "Planificación",
  coordinacion: "Coordinación",
  coordinacionInstitucional: "Coordinación institucional",
  controlCalidad: "Control de calidad",
  controlContaminacion: "Control de contaminación",
  controlImpacto: "Control de impacto",
  seguridad: "Seguridad",
  sectorizacion: "Sectorización",
  reubicacionControlada: "Reubicación controlada",
}

/** Encabezado de bloque: chico, en caja alta, como el rótulo de una tabla. */
const ROTULO =
  "ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700 mb-4"

function Bloque({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-papel-linea pt-8">
      <h2 className={ROTULO}>{titulo}</h2>
      {children}
    </section>
  )
}

/** Lista tabulada: un renglón por ítem, separados por filete. */
function Lista({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-papel-linea">
      {items.map((item, i) => (
        <li
          key={i}
          className="border-b border-papel-linea py-3.5 leading-relaxed text-tinta-70"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Tabla concepto → detalle. */
function Tabla({ filas }: { filas: { concepto: string; detalle: string }[] }) {
  return (
    <dl className="border-t border-papel-linea">
      {filas.map(({ concepto, detalle }) => (
        <div
          key={concepto}
          className="grid gap-x-8 gap-y-1 border-b border-papel-linea py-4 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]"
        >
          <dt className="font-semibold text-tinta">{concepto}</dt>
          <dd className="leading-relaxed text-tinta-70">{detalle}</dd>
        </div>
      ))}
    </dl>
  )
}

interface CasoDetalleContentProps {
  project: ProjectForDetail
}

export function CasoDetalleContent({ project }: CasoDetalleContentProps) {
  const metodologia = project.metodologia
    ? Object.entries(project.metodologia)
        .filter(([, v]) => v)
        .map(([k, v]) => ({ concepto: METODOLOGIA_LABELS[k] ?? k, detalle: v }))
    : []

  const contexto = project.context
    ? [
        { concepto: "Qué era", detalle: project.context.tipoEstructura },
        { concepto: "Dónde", detalle: project.context.entornoTrabajo },
        { concepto: "Qué buscaba el cliente", detalle: project.context.objetivoCliente },
      ].filter((f): f is { concepto: string; detalle: string } => Boolean(f.detalle))
    : []

  return (
    <div className="max-w-[58ch] mx-auto space-y-10">
      {/* Encabezado */}
      <header>
        <p className="ficha-num text-xs font-semibold uppercase tracking-wider text-maquina-700">
          {project.tipo ? TIPO_LABEL[project.tipo] ?? project.tipo : project.category}
        </p>
        <h1 className={`mt-2 ${H2}`}>{project.title}</h1>
        <p className={`mt-5 text-base md:text-lg leading-relaxed text-tinta-70 ${MEDIDA}`}>
          {project.overview}
        </p>
      </header>

      {/* Fotos con pie, en orden de proceso. Es lo que el visitante vino a ver:
          cómo fue el trabajo. Cuando el caso todavía no tiene pies escritos,
          cae a la galería suelta de abajo. */}
      {project.fotos && project.fotos.length > 0 && (
        <Bloque titulo="Cómo fue el trabajo">
          <ol className="space-y-8">
            {project.fotos.map(({ src, pie }, i) => (
              <li key={src}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-papel-alt">
                  <Image
                    src={src}
                    alt={pie}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
                <p className="mt-3 flex gap-3 text-sm leading-relaxed text-tinta-70">
                  <span className="ficha-num font-medium text-maquina-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {pie}
                </p>
              </li>
            ))}
          </ol>
        </Bloque>
      )}

      {/* Galería suelta: solo para los casos que aún no tienen pies. */}
      {!project.fotos && project.images && project.images.length > 0 && (
        <Bloque titulo="Fotos del trabajo">
          <div className="grid grid-cols-2 gap-3">
            {project.images.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-papel-alt">
                <Image
                  src={src}
                  alt={`${project.title} — foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 350px"
                />
              </div>
            ))}
          </div>
        </Bloque>
      )}

      {contexto.length > 0 && (
        <Bloque titulo="El trabajo">
          <Tabla filas={contexto} />
        </Bloque>
      )}

      {project.alcanceTrabajo && project.alcanceTrabajo.length > 0 && (
        <Bloque titulo="Qué se hizo">
          <Lista items={project.alcanceTrabajo} />
        </Bloque>
      )}

      {project.desafiosOperativos.length > 0 && (
        <Bloque titulo="Lo complicado">
          <Lista items={project.desafiosOperativos} />
        </Bloque>
      )}

      {metodologia.length > 0 && (
        <Bloque titulo="Cómo se resolvió">
          <Tabla filas={metodologia} />
        </Bloque>
      )}

      <Bloque titulo="Cómo quedó">
        <p className={`leading-relaxed text-tinta ${MEDIDA}`}>{project.resultados}</p>
      </Bloque>

      {/* Generalidades, no datos de este trabajo. Van separadas a propósito: el
          caso cuenta lo que pasó, esto cuenta lo que suele pasar. Así el lector
          se lleva lo que necesita sin que el caso afirme nada que no se pueda
          sostener. */}
      {project.comoSuele && project.comoSuele.length > 0 && (
        <Bloque titulo="Cómo suele ser un trabajo así">
          <Tabla filas={project.comoSuele} />
        </Bloque>
      )}

      {/* Lo que pone el cliente. Se dice ANTES de contratar, no el día del
          trabajo. Ver `contexto/21-realidad-operativa.md`. */}
      {project.queNecesitamos && project.queNecesitamos.length > 0 && (
        <section className="border-t-2 border-maquina-500 pt-6">
          <h2 className={H3}>Qué necesitamos de tu lado</h2>
          <Lista items={project.queNecesitamos} />
        </section>
      )}

      {project.valorDiferencial && project.valorDiferencial.length > 0 && (
        <Bloque titulo="Por qué nos eligieron">
          <Lista items={project.valorDiferencial} />
        </Bloque>
      )}
    </div>
  )
}

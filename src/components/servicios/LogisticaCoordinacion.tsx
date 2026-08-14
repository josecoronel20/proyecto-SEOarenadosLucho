import { CalendarCheck, MapPin, Zap, FileCheck, Target, DoorOpen, Fence, UserCheck } from "lucide-react"

const requisitos = [
  { icon: DoorOpen, text: "Que podamos acceder al lugar" },
  { icon: Fence, text: "Un espacio para ubicar el equipo" },
  { icon: UserCheck, text: "Definir con quién coordinamos (vos o el encargado de obra)" },
  { icon: FileCheck, text: "Permisos, si el lugar los requiere (obra o vía pública)" },
]

const logistica = [
  { icon: CalendarCheck, text: "Coordinamos día y horario con vos" },
  { icon: MapPin, text: "Trabajamos por zonas: intervenimos y liberamos rápido" },
  { icon: Zap, text: "Compresores propios (no dependemos de la energía del lugar)" },
  { icon: FileCheck, text: "Accesos y permisos acordados antes de empezar" },
]

const sectionClass = "py-10 md:py-14 border-b border-papel-linea bg-papel"
const titleClass = "text-2xl md:text-3xl font-bold text-tinta mb-6 text-center"
const iconBoxClass = "flex-shrink-0 p-2 rounded-sm bg-papel-alt text-tinta mt-0.5"
const iconSizeClass = "w-5 h-5"
const textClass = "text-tinta-70 text-base leading-relaxed pt-1"

export function LogisticaCoordinacion() {
  return (
    <section className={sectionClass} aria-label="Logística y requisitos">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className={titleClass}>Coordinamos todo, sin frenar tu obra ni tu día</h2>

          <p className="text-tinta-70 text-base leading-relaxed mb-6 text-center">
            Coordinamos el día y el horario que te sirva y trabajamos por zonas para intervenir y liberar lo antes posible —sin frenar tu obra, tu producción ni tu casa. Llevamos compresores propios, así que no dependemos de la energía del lugar.
          </p>

          <div className="rounded-sm border border-papel-linea bg-papel-alt/50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-tinta mb-4">Para iniciar necesitamos:</p>
            <ul className="space-y-3">
              {requisitos.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className={iconBoxClass}>
                    <Icon className={iconSizeClass} />
                  </div>
                  <span className={textClass}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-papel-linea bg-papel-alt/50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-tinta mb-4">Cómo trabajamos:</p>
            <ul className="space-y-3">
              {logistica.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className={iconBoxClass}>
                    <Icon className={iconSizeClass} />
                  </div>
                  <span className={textClass}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-3 rounded-sm border border-papel-linea bg-papel-alt/50 p-4">
            <Target className="w-5 h-5 text-tinta flex-shrink-0 mt-0.5" />
            <p className="text-tinta font-semibold text-base leading-relaxed">
              Objetivo: intervenir, terminar y liberar el sector lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

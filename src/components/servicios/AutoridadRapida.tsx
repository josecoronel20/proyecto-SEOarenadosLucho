import { Shield, Building2, CircleDot, Wrench } from "lucide-react"

const items = [
  { icon: Shield, label: "Seguros vigentes" },
  { icon: Building2, label: "Ejecución en obras públicas" },
  { icon: CircleDot, label: "Superficie lista para pintar o revestir" },
  { icon: Wrench, label: "Equipos propios" },
]

const sectionClass = "py-10 md:py-14 border-b border-papel-linea bg-papel-alt"
const iconBoxClass = "flex-shrink-0 p-2 rounded-sm bg-papel-alt text-tinta"
const iconSizeClass = "w-5 h-5"

export function AutoridadRapida() {
  return (
    <section className={sectionClass} aria-label="Autoridad técnica">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-4 rounded-sm border border-papel-linea bg-papel"
            >
              <div className={iconBoxClass}>
                <Icon className={iconSizeClass} />
              </div>
              <span className="text-sm md:text-base font-semibold text-tinta">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

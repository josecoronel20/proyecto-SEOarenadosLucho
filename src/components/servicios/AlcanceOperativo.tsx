import { Users, LayoutGrid, Zap, Clock } from "lucide-react"

// ⚠️ El rendimiento de ~100 m²/día es real pero CONDICIONAL (dato del dueño,
// 11/08/2026): aplica a superficies cómodas y planas —paredes, fachadas, piletas—.
// En estructuras metálicas complejas o con revestimientos muy resistentes se dilata.
// Se publica siempre CON la condición: sin ella sería una promesa que el trabajo
// más rentable (galpón, estructuras) no puede sostener. Por eso tampoco va en el
// copy de Ads, donde no entra la aclaración (`marketing/18-copy-ads.md` §10).
const items = [
  { icon: Users, text: "2 equipos propios, con compresores propios" },
  {
    icon: LayoutGrid,
    text: "En superficies planas y parejas —paredes, fachadas— cada equipo cubre alrededor de 100 m² por día",
  },
  {
    icon: Clock,
    text: "En estructuras metálicas complejas o con revestimientos muy duros lleva más: te damos el plazo en la visita",
  },
  { icon: Zap, text: "Si el trabajo es grande, sumamos equipos para acortar los tiempos" },
]

const sectionClass = "py-10 md:py-14 border-b border-gray-200 bg-gray-50"
const titleClass = "text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center"
const subtitleClass = "text-primary-600 font-semibold text-base mb-6 text-center"

// Ajustes de layout para desktop (Tailwind utility classes)
// - max-w-3xl a max-w-4xl para mayor balance visual y aire en desktop
// - "ul" pasa a grid md:grid-cols-2 gap-x-8 gap-y-5 (espaciado horizontal + agrupación visual)
// - text-base md:text-lg pt-1 md:pt-0.5 para aprovechar mejor el espacio visual en desktop
// - iconBox: agrega md:p-3 para mejor escala y presencia de íconos en desktop

const iconBoxClass = "flex-shrink-0 p-2 md:p-3 rounded-lg bg-primary-100 text-primary-700 mt-0.5"
const iconSizeClass = "w-5 h-5 md:w-6 md:h-6"
const textClass = "text-gray-700 text-base md:text-lg leading-relaxed pt-1 md:pt-0.5"

export function AlcanceOperativo() {
  return (
    <section className={sectionClass} aria-label="Alcance operativo">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={titleClass}>Arenado de estructuras y tanques: rápido y sin frenarte</h2>
          <p className={subtitleClass}>Capacidad y equipos propios</p>
          <ul className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-5">
            {items.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className={iconBoxClass}>
                  <Icon className={iconSizeClass} />
                </div>
                <span className={textClass}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

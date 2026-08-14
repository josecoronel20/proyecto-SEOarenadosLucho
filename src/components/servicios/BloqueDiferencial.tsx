import { Zap, BadgeDollarSign, Handshake } from "lucide-react"

const items = [
  { icon: Zap, text: "Podemos aumentar equipos para acortar tiempos." },
  { icon: BadgeDollarSign, text: "Precios competitivos frente al mercado." },
  { icon: Handshake, text: "Hablás directo con quien hace el trabajo." },
]

const sectionClass = "py-10 md:py-14 bg-papel-alt"
const titleClass = "text-2xl md:text-3xl font-bold text-tinta mb-6 text-center"
const cardClass = "flex flex-col items-center text-center gap-3 p-5 rounded-sm border border-papel-linea bg-papel"
const iconBoxClass = "p-2.5 rounded-sm bg-papel-alt text-tinta"
const iconSizeClass = "w-5 h-5"
const textClass = "text-tinta-70 text-sm md:text-base leading-relaxed"

export function BloqueDiferencial() {
  return (
    <section className={sectionClass} aria-label="Bloque diferencial">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className={titleClass}>¿Por qué elegirnos?</h2>
        <div className="max-w-3xl mx-auto grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className={cardClass}>
              <div className={iconBoxClass}>
                <Icon className={iconSizeClass} />
              </div>
              <span className={textClass}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface Crumb {
  name: string
  href?: string
}

/** Breadcrumbs visibles. El JSON-LD BreadcrumbList se emite aparte en cada página. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-tinta-70">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="w-4 h-4 text-tinta-50" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-tinta transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-tinta-70 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

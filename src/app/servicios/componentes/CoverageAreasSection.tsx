import Link from "next/link"
import { MapPin } from "lucide-react"
import { WhatsAppButton } from "@/components/common/WhatsAppButton"

interface CoverageArea {
  name: string
  slug: string
  description: string
}

interface CoverageAreasSectionProps {
  title: string
  subtitle?: string
  coverageAreas: {
    [zone: string]: CoverageArea[]
  }
  notFoundTitle?: string
  notFoundDescription?: string
}

export function CoverageAreasSection({ 
  title, 
  subtitle,
  coverageAreas,
  notFoundTitle = "¿No encontrás tu zona?",
  notFoundDescription = "Cubrimos gran parte del Gran Buenos Aires. Consultanos por tu ubicación específica."
}: CoverageAreasSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(coverageAreas).map(([zone, areas]) => (
            <div key={zone} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <div className="text-xl font-bold text-gray-900">{zone}</div>
              </div>
              <ul className="flex flex-wrap gap-4">
                {areas.map((area) => (
                  <li key={area.name}>
                    <Link 
                      href={area.slug}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                      title={area.description}
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-xl font-semibold text-blue-900 mb-2">
              {notFoundTitle}
            </div>
            <p className="text-blue-800 mb-4">
              {notFoundDescription}
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}


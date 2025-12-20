import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, Factory, Car, Layers } from "lucide-react"

interface SubService {
  title: string
  href: string
  description: string
}

interface CategoryCardProps {
  title: string
  description: string
  href: string
  subServices: SubService[]
  icon: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export function CategoryCard({
  title,
  description,
  href,
  subServices,
  icon,
  imageSrc,
  imageAlt
}: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Header con imagen o icono */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-primary">
            {icon}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        {/* Lista de subservicios - Solo mostrar si hay subservicios */}
        {subServices.length > 0 && (
          <div className="space-y-2 mb-4">
            {subServices.map((subService, index) => (
              <div key={index} className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <Link
                    href={subService.href}
                    className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    {subService.title}
                  </Link>
                  <p className="text-xs text-gray-500 mt-0.5">{subService.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botón ver más */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
        >
          {subServices.length > 0 ? "Ver todos los servicios" : "Ver servicio"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Home, Factory, Car, Layers, MapPin, FileText, HelpCircle, FolderKanban, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{
    services: boolean
    coverage: boolean
    [key: string]: boolean
  }>({
    services: false,
    coverage: false,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleClose = () => {
    // Reset expanded sections when closing
    setExpandedSections({
      services: false,
      coverage: false,
    })
    onClose()
  }

  const serviceCategories = [
    {
      title: "Arenado Residencial",
      href: "/servicios/arenado-residencial",
      icon: Home,
      color: "text-blue-600",
      subServices: [
        {
          title: "Arenado de piletas",
          href: "/servicios/arenado-residencial/arenado-de-piletas",
        },
        {
          title: "Arenado de fachadas domiciliarias",
          href: "/servicios/arenado-residencial/arenado-de-fachadas-domiciliarias",
        },
        {
          title: "Arenado de pisos",
          href: "/servicios/arenado-residencial/arenado-de-pisos",
        },
        {
          title: "Arenado de muebles",
          href: "/servicios/arenado-residencial/arenado-de-muebles",
        }
      ]
    },
    {
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      icon: Factory,
      color: "text-orange-600",
      subServices: [
        {
          title: "Arenado de tanques",
          href: "/servicios/arenado-industrial/arenado-de-tanques",
        },
        {
          title: "Arenado de estructuras metálicas",
          href: "/servicios/arenado-industrial/arenado-de-estructuras-metalicas",
        },
        {
          title: "Arenado de edificios antiguos",
          href: "/servicios/arenado-industrial/arenado-de-edificios-antiguos",
        },
        {
          title: "Arenado en fábrica",
          href: "/servicios/arenado-industrial/arenado-en-fabrica",
        }
      ]
    },
    {
      title: "Arenado de Vehículos",
      href: "/servicios/arenado-de-vehiculos",
      icon: Car,
      color: "text-green-600",
      subServices: [
        {
          title: "Arenado de camiones",
          href: "/servicios/arenado-de-vehiculos/arenado-de-camiones",
        },
        {
          title: "Arenado de autos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-autos",
        },
        {
          title: "Arenado de barcos",
          href: "/servicios/arenado-de-vehiculos/arenado-de-barcos",
        }
      ]
    },
    {
      title: "Arenado de Superficies",
      href: "/servicios/arenado-de-superficies",
      icon: Layers,
      color: "text-purple-600",
      subServices: [
        {
          title: "Arenado de superficies metálicas",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-metalicas",
        },
        {
          title: "Arenado de superficies de madera",
          href: "/servicios/arenado-de-superficies/arenado-de-superficies-de-madera",
        }
      ]
    }
  ]

  const coverageZones = [
    {
      title: "Zona Norte",
      href: "/zonas-de-cobertura/zona-norte",
      description: "Pilar, San Isidro, Tigre y más"
    },
    {
      title: "Zona Oeste",
      href: "/zonas-de-cobertura/zona-oeste",
      description: "Moreno, Morón, Hurlingham y más"
    },
    {
      title: "CABA",
      href: "/zonas-de-cobertura/caba",
      description: "Palermo, Recoleta, Belgrano y más"
    }
  ]

  const navItems = [
    {
      title: "Proyectos",
      href: "/proyectos",
      icon: FolderKanban,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: FileText,
    },
    {
      title: "FAQ",
      href: "/preguntas-frecuentes",
      icon: HelpCircle,
    },
  ]

  if (!isOpen || !mounted) return null

  const menuContent = (
    <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-[100] bg-background overflow-y-auto shadow-lg">
      {/* Close Button */}
      
      
      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 space-y-1">
        {/* Inicio */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px]"
          onClick={handleClose}
        >
          <Home className="h-5 w-5 text-primary" />
          Inicio
        </Link>

        {/* Servicios */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection("services")}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px]"
          >
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-primary" />
              <span>Servicios</span>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform",
                expandedSections.services && "rotate-180"
              )}
            />
          </button>
          
          {expandedSections.services && (
            <div className="ml-4 space-y-1 border-l-2 border-muted pl-4">
              <Link
                href="/servicios"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-semibold text-primary min-h-[44px]"
                onClick={handleClose}
              >
                Todos los servicios
              </Link>
              
              {serviceCategories.map((category) => {
                const Icon = category.icon
                const categoryKey = `category-${category.href}`
                const isCategoryExpanded = expandedSections[categoryKey] || false
                
                return (
                  <div key={category.href} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSection(categoryKey)}
                        className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-semibold min-h-[40px]"
                      >
                        <Icon className={cn("h-4 w-4", category.color)} />
                        <span className="flex-1 text-left">{category.title}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isCategoryExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                    
                    {isCategoryExpanded && (
                      <div className="ml-6 space-y-1 border-l-2 border-muted pl-3">
                        <Link
                          href={category.href}
                            className="flex items-center px-3 py-2 rounded-lg hover:bg-accent transition-colors text-xs font-medium text-primary min-h-[36px]"
                          onClick={handleClose}
                        >
                          Ver todos
                        </Link>
                        {category.subServices.map((subService) => (
                          <Link
                            key={subService.href}
                            href={subService.href}
                            className="flex items-center px-3 py-2 rounded-lg hover:bg-accent transition-colors text-xs min-h-[36px]"
                            onClick={handleClose}
                          >
                            {subService.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Zonas de Cobertura */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection("coverage")}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px]"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Zonas de Cobertura</span>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform",
                expandedSections.coverage && "rotate-180"
              )}
            />
          </button>
          
          {expandedSections.coverage && (
            <div className="ml-4 space-y-1 border-l-2 border-muted pl-4">
              <Link
                href="/zonas-de-cobertura"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-semibold text-primary min-h-[44px]"
                onClick={handleClose}
              >
                Todas las zonas
              </Link>
              
              {coverageZones.map((zone) => (
                <Link
                  key={zone.href}
                  href={zone.href}
                  className="block px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm min-h-[44px]"
                  onClick={handleClose}
                >
                  <div className="font-medium">{zone.title}</div>
                  <p className="text-xs text-muted-foreground">{zone.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Otros links */}
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px]"
              onClick={handleClose}
            >
              <Icon className="h-5 w-5 text-primary" />
              {item.title}
            </Link>
          )
        })}

        {/* CTA Button */}
        <Button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold min-h-[48px] text-base"
          asChild
        >
          <Link href="/presupuesto-rapido" onClick={handleClose}>
            Presupuesto Rápido
          </Link>
        </Button>
      </nav>
    </div>
  )

  return createPortal(menuContent, document.body)
}

"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronDown, 
  Home, 
  Factory, 
  Car, 
  Layers, 
  MapPin, 
  FileText, 
  HelpCircle, 
  FolderKanban, 
  X, 
  Droplet, 
  Wrench, 
  TreePine,
  Calculator,
  Sparkles
} from "lucide-react"
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
  }>({
    services: false,
    coverage: false,
  })
  const servicesRef = useRef<HTMLDivElement>(null)
  const coverageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSection = (section: "services" | "coverage") => {
    setExpandedSections((prev) => {
      const newState = {
        ...prev,
        [section]: !prev[section],
      }
      
      // Scroll to expanded section
      if (!prev[section]) {
        setTimeout(() => {
          const ref = section === "services" ? servicesRef : coverageRef
          if (ref.current) {
            ref.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            })
          }
        }, 150)
      }
      
      return newState
    })
  }

  const handleClose = () => {
    setExpandedSections({
      services: false,
      coverage: false,
    })
    onClose()
  }

  const services = [
    {
      title: "Arenado de Piletas",
      href: "/servicios/arenado-de-piletas",
      icon: Droplet,
      color: "text-blue-600",
    },
    {
      title: "Arenado de Vehículos",
      href: "/servicios/arenado-de-vehiculos",
      icon: Car,
      color: "text-green-600",
    },
    {
      title: "Arenado Industrial",
      href: "/servicios/arenado-industrial",
      icon: Factory,
      color: "text-orange-600",
    },
    {
      title: "Arenado de Metales",
      href: "/servicios/arenado-de-metales",
      icon: Wrench,
      color: "text-purple-600",
    },
    {
      title: "Arenado de Madera",
      href: "/servicios/arenado-de-madera",
      icon: TreePine,
      color: "text-amber-600",
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
      description: "Morón, Ituzaingó, Hurlingham y más"
    },
    {
      title: "CABA",
      href: "/zonas-de-cobertura/caba",
      description: "Palermo, Recoleta, Belgrano y más"
    }
  ]

  const navItems = [
    {
      title: "Precios",
      href: "/precios-arenados",
      icon: Calculator,
    },
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
    <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 z-[100] bg-background overflow-y-auto shadow-xl">
      {/* Close Button - Sticky */}
     
      
      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 space-y-1 pb-8">
        {/* Inicio */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          onClick={handleClose}
        >
          <Home className="h-5 w-5 text-primary" />
          Inicio
        </Link>

        {/* Servicios */}
        <div ref={servicesRef} className="space-y-1">
          <button
            onClick={() => toggleSection("services")}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          >
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-primary" />
              <span>Servicios</span>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                expandedSections.services && "rotate-180"
              )}
            />
          </button>
          
          {expandedSections.services && (
            <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-4 mt-2 animate-in slide-in-from-top-2 duration-200">
              <Link
                href="/servicios"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent transition-colors text-sm font-semibold text-primary min-h-[44px] active:bg-accent"
                onClick={handleClose}
              >
                <Sparkles className="h-4 w-4" />
                Todos los servicios
              </Link>
              
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent transition-colors text-sm min-h-[44px] active:bg-accent"
                    onClick={handleClose}
                  >
                    <Icon className={cn("h-4 w-4 flex-shrink-0", service.color)} />
                    <span>{service.title}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Zonas de Cobertura */}
        <div ref={coverageRef} className="space-y-1">
          <button
            onClick={() => toggleSection("coverage")}
            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Zonas de Cobertura</span>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                expandedSections.coverage && "rotate-180"
              )}
            />
          </button>
          
          {expandedSections.coverage && (
            <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-4 mt-2 animate-in slide-in-from-top-2 duration-200">
              <Link
                href="/zonas-de-cobertura"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent transition-colors text-sm font-semibold text-primary min-h-[44px] active:bg-accent"
                onClick={handleClose}
              >
                <MapPin className="h-4 w-4" />
                Todas las zonas
              </Link>
              
              {coverageZones.map((zone) => (
                <Link
                  key={zone.href}
                  href={zone.href}
                  className="block px-4 py-2.5 rounded-lg hover:bg-accent transition-colors text-sm min-h-[44px] active:bg-accent"
                  onClick={handleClose}
                >
                  <div className="font-medium">{zone.title}</div>
                  <p className="text-xs text-muted-foreground mt-0.5">{zone.description}</p>
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
              onClick={handleClose}
            >
              <Icon className="h-5 w-5 text-primary" />
              {item.title}
            </Link>
          )
        })}

        {/* CTA Button */}
        <Button
          className="mt-4 bg-primary hover:bg-primary/90 text-white font-semibold min-h-[48px] text-base shadow-sm"
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

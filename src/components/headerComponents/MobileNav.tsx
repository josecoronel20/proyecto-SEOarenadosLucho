"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Layers, 
  MapPin, 
  FileText, 
  HelpCircle, 
  FolderKanban
} from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: (e?: React.MouseEvent) => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 z-[100] bg-background overflow-y-auto shadow-xl">
      {/* Close Button - Sticky */}
     
      
      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 space-y-1 pb-8">
        {/* Inicio */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          onClick={onClose}
        >
          <Home className="h-5 w-5 text-primary" />
          Inicio
        </Link>

        {/* Servicios */}
        <Link
          href="/servicios"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          onClick={onClose}
        >
          <Layers className="h-5 w-5 text-primary" />
          Servicios
        </Link>

        {/* Zonas de Cobertura */}
        <Link
          href="/zonas-de-cobertura"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
          onClick={onClose}
        >
          <MapPin className="h-5 w-5 text-primary" />
          Zonas de Cobertura
        </Link>

        {/* Otros links */}
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors text-base font-medium min-h-[48px] active:bg-accent"
              onClick={onClose}
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
          <Link href="/presupuesto-rapido" onClick={onClose}>
            Presupuesto Rápido
          </Link>
        </Button>
      </nav>
    </div>
  )

  return createPortal(menuContent, document.body)
}

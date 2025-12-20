"use client"

import { useState } from "react"
import Link from "next/link"
import { Brand } from "./Brand"
import { DesktopNav } from "./DesktopNav"
import { MobileToggle } from "./MobileToggle"
import { MobileNav } from "./MobileNav"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="w-full">
        {/* Top Row - Logo and Presupuesto Button (Desktop only) */}
        <div className="hidden lg:block border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between h-14">
              {/* Brand */}
              <div className="flex-shrink-0">
                <Brand />
              </div>

              {/* Presupuesto Button */}
              <div className="flex-shrink-0">
                <Button 
                  asChild 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold h-10 px-4 shadow-sm"
                >
                  <Link href="/presupuesto-rapido">Presupuesto Rápido</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Navigation Items (Desktop) / Mobile Header */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Brand (Mobile only) */}
            <div className="lg:hidden flex-shrink-0">
              <Brand />
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex-shrink-0">
              <MobileToggle 
                isOpen={isMenuOpen} 
                onToggle={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </div>

            {/* Desktop Navigation - Full Width */}
            <div className="hidden lg:flex w-full">
              <DesktopNav />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  )
}

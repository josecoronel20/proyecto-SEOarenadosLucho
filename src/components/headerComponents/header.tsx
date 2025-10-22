"use client"

import { useState } from "react"
import { Brand } from "./Brand"
import { DesktopNav } from "./DesktopNav"
import { MobileToggle } from "./MobileToggle"
import { MobileNav } from "./MobileNav"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-2">
          <Brand />
          <MobileToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
          <DesktopNav />
        </div>

        <MobileNav 
          isOpen={isMenuOpen}
          isServicesOpen={isServicesOpen}
          onToggleServices={() => setIsServicesOpen(!isServicesOpen)}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  )
}

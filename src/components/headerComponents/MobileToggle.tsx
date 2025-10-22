"use client"

import { Menu } from "lucide-react"

interface MobileToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileToggle({ isOpen, onToggle }: MobileToggleProps) {
  return (
    <button
      className="lg:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <Menu className="h-6 w-6 text-primary" />
    </button>
  )
}



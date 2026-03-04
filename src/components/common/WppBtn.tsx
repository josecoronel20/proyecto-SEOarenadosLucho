"use client"

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import React from 'react'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

const WppBtn = () => {
  const whatsappNumberPart1 = "5491123" 
  const whatsappNumberPart2 = "787750"
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría recibir asesoramiento sobre arenado."
  )
  const phoneNumber = whatsappNumberPart1 + whatsappNumberPart2
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'contact_whatsapp',
          event_category: 'Contact',
          event_label: 'WhatsApp Button Click',
          value: 1,
          timestamp: Date.now(),
        })
      }
      // Permitir que el enlace abra WhatsApp, no bloqueamos el default
    },
    []
  )

  return (
    <Link 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 flex items-center gap-2 hover:text-white transition-colors bg-green-600 rounded-full p-3 shadow-lg hover:shadow-xl z-20"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Link>
  )
}

export default WppBtn
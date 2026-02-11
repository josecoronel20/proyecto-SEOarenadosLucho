"use client"

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import React from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

interface WppBtnProps {
  type?: 'CTASection' | 'footer' | 'PresupuestoRapido'
}

const WppBtn = ({ type = 'CTASection' }: WppBtnProps) => {
  const whatsappNumberPart1 = "5491123" 
  const whatsappNumberPart2 = "787750"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir asesoramiento sobre arenado.")
  const phoneNumber = whatsappNumberPart1 + whatsappNumberPart2
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
  
  const [isProcessing, setIsProcessing] = React.useState(false)

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // Prevenir múltiples clicks rápidos
    if (isProcessing) {
      return
    }

    // Prevenir clicks duplicados en la misma sesión (dentro de 2 segundos)
    const lastClickKey = 'whatsapp_last_click'
    const lastClickTime = sessionStorage.getItem(lastClickKey)
    const now = Date.now()
    
    if (lastClickTime && (now - parseInt(lastClickTime)) < 2000) {
      return // Ignorar clicks dentro de 2 segundos
    }

    setIsProcessing(true)
    sessionStorage.setItem(lastClickKey, now.toString())

    // Generar ID único para este evento (evitar duplicados)
    const eventId = `whatsapp_${now}_${Math.random().toString(36).substr(2, 9)}`
    
    // Enviar evento a GTM / GA4 solo una vez
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ 
        event: 'contact_whatsapp',
        event_category: 'Contact',
        event_label: 'WhatsApp Button Click',
        event_id: eventId, // ID único para deduplicación en GA4
        value: 1,
        timestamp: now
      })
    }

    // Intentar abrir WhatsApp
    try {
      // Usar window.open inmediatamente (síncrono para evitar bloqueos)
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      
      // Verificar si se abrió correctamente (sin setTimeout para evitar bloqueos)
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        // Si window.open falla, usar location.href como fallback
        window.location.href = whatsappUrl
      }
      
      // Resetear estado después de un breve delay (solo para UI)
      setTimeout(() => {
        setIsProcessing(false)
      }, 500)
    } catch (error) {
      // Fallback si hay error
      console.error('Error al abrir WhatsApp:', error)
      window.location.href = whatsappUrl
      setIsProcessing(false)
    }

  }, [isProcessing, whatsappUrl])

  if (type === 'CTASection') {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isProcessing}
        aria-label="Contactar por WhatsApp"
        className="flex items-center gap-3 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MessageCircle className="w-5 h-5 text-green-600" />
        {isProcessing ? 'Abriendo...' : 'Contactar por WhatsApp'}
      </button>
    )
  }

  if (type === 'footer') {
    return (
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-2 hover:text-white transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Enviar mensaje por WhatsApp</span>
      </Link>
    )
  }

  if (type === 'PresupuestoRapido') {
    return (
      <Link 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        className="text-primary-600 hover:text-primary-700 font-semibold underline"
      >
        WhatsApp
      </Link>
    )
  }

  return null
}

export default WppBtn
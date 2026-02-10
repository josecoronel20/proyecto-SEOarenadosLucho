"use client"

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

interface EmailBtnProps {
  type?: 'CTASection' | 'footer' | 'PresupuestoRapido'
}

const EmailBtn = ({ type = 'CTASection' }: EmailBtnProps) => {
  const emailPart1 = "arenados"
  const emailPart2 = "lucho@hotmail.com"
  const email = `${emailPart1}${emailPart2}`
  const emailUrl = `mailto:${email}`
  
  const [isProcessing, setIsProcessing] = React.useState(false)

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // Prevenir múltiples clicks rápidos
    if (isProcessing) {
      return
    }

    // Prevenir clicks duplicados en la misma sesión (dentro de 2 segundos)
    const lastClickKey = 'email_last_click'
    const lastClickTime = sessionStorage.getItem(lastClickKey)
    const now = Date.now()
    
    if (lastClickTime && (now - parseInt(lastClickTime)) < 2000) {
      return // Ignorar clicks dentro de 2 segundos
    }

    setIsProcessing(true)
    sessionStorage.setItem(lastClickKey, now.toString())

    // Generar ID único para este evento (evitar duplicados)
    const eventId = `email_${now}_${Math.random().toString(36).substr(2, 9)}`
    
    // Enviar evento a GTM / GA4 solo una vez
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ 
        event: 'contact_email',
        event_category: 'Contact',
        event_label: 'Email Button Click',
        event_id: eventId, // ID único para deduplicación en GA4
        value: 1,
        timestamp: now
      })
    }

    // Intentar abrir cliente de email
    try {
      // Usar window.location.href para mailto (más confiable que window.open para mailto)
      window.location.href = emailUrl
      
      // Resetear estado después de un breve delay (solo para UI)
      setTimeout(() => {
        setIsProcessing(false)
      }, 500)
    } catch (error) {
      // Fallback si hay error
      console.error('Error al abrir cliente de email:', error)
      // Intentar con window.open como alternativa
      try {
        window.open(emailUrl, '_blank', 'noopener,noreferrer')
      } catch (fallbackError) {
        console.error('Error en fallback de email:', fallbackError)
      }
      setIsProcessing(false)
    }

  }, [isProcessing, emailUrl])

  if (type === 'CTASection') {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isProcessing}
        aria-label="Contactar por email"
        className="flex items-center gap-3 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Mail className="w-5 h-5 text-primary" />
        {isProcessing ? 'Abriendo...' : 'Contactar por email'}
      </button>
    )
  }

  if (type === 'footer') {
    return (
      <Link 
        href={emailUrl}
        onClick={handleClick}
        className="flex items-center gap-2 hover:text-white transition-colors"
      >
        <Mail className="w-4 h-4" />
        <span>Enviar mensaje por email</span>
      </Link>
    )
  }

  if (type === 'PresupuestoRapido') {
    return (
      <Link 
        href={emailUrl}
        onClick={handleClick}
        className="text-primary-600 hover:text-primary-700 font-semibold underline"
      >
        email
      </Link>
    )
  }

  return null
}

export default EmailBtn
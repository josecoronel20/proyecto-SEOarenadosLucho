"use client"

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import React from 'react'
import { MessageCircle } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const WppBtn = () => {
  const whatsappNumberPart1 = "5491123" 
  const whatsappNumberPart2 = "787750"
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría recibir asesoramiento sobre arenado."
  )
  const phoneNumber = whatsappNumberPart1 + whatsappNumberPart2
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  const handleConfirm = React.useCallback(() => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'contact_whatsapp',
          event_category: 'Contact',
          event_label: 'WhatsApp Button Click',
          value: 1,
          timestamp: Date.now(),
        })
      }
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }, [whatsappUrl])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          aria-label="Abrir WhatsApp"
          className="fixed bottom-6 right-6 flex items-center gap-2 transition-colors bg-green-700 hover:bg-green-800 rounded-full p-3 hover: z-50"
        >
          <MessageCircle className="w-6 h-6 text-papel" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Se abrirá WhatsApp</AlertDialogTitle>
          <AlertDialogDescription>
            Al continuar, te redirigiremos a WhatsApp para iniciar una conversación.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default WppBtn
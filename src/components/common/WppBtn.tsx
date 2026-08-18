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
import { urlWpp } from '@/lib/wppNumero'

const WppBtn = () => {
  // La URL se arma DENTRO del handler: antes se calculaba en el cuerpo del
  // componente, así que el número quedaba armado en cada render sin que nadie
  // hubiera tocado el botón.
  const handleConfirm = React.useCallback(() => {
      const whatsappUrl = urlWpp(
        "Hola, me gustaría recibir asesoramiento sobre arenado."
      )
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
  }, [])

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          aria-label="Abrir WhatsApp"
          className="fixed bottom-6 right-6 flex items-center gap-2 transition-colors bg-green-700 hover:bg-green-800 rounded-full p-3 z-50"
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
"use client";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import * as React from "react";

export function WhatsAppButton() {
  const label = "Consultar por WhatsApp";
  const className = "bg-[#22bd5b] hover:bg-[#1d9e4e] text-white shadow-lg";
  const variant = "default";
  const size = "lg";
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevenir múltiples clicks rápidos
    if (isProcessing) {
      return;
    }

    // Prevenir clicks duplicados en la misma sesión (dentro de 2 segundos)
    const lastClickKey = 'whatsapp_last_click';
    const lastClickTime = sessionStorage.getItem(lastClickKey);
    const now = Date.now();
    
    if (lastClickTime && (now - parseInt(lastClickTime)) < 2000) {
      return; // Ignorar clicks dentro de 2 segundos
    }

    setIsProcessing(true);
    sessionStorage.setItem(lastClickKey, now.toString());

    // Construir número de WhatsApp
    const part1 = '5491123'
    const part2 = '787750'
    const phoneNumber = part1 + part2;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Generar ID único para este evento (evitar duplicados)
    const eventId = `whatsapp_${now}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Enviar evento a GTM / GA4 solo una vez
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ 
        event: 'contact_whatsapp',
        event_category: 'Contact',
        event_label: 'WhatsApp Button Click',
        event_id: eventId, // ID único para deduplicación en GA4
        value: 1,
        timestamp: now
      });
    }

    // Intentar abrir WhatsApp
    try {
      // Usar window.open inmediatamente (síncrono para evitar bloqueos)
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Verificar si se abrió correctamente (sin setTimeout para evitar bloqueos)
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        // Si window.open falla, usar location.href como fallback
        window.location.href = whatsappUrl;
      }
      
      // Resetear estado después de un breve delay (solo para UI)
      setTimeout(() => {
        setIsProcessing(false);
      }, 500);
    } catch (error) {
      // Fallback si hay error
      console.error('Error al abrir WhatsApp:', error);
      window.location.href = whatsappUrl;
      setIsProcessing(false);
    }

  }, [isProcessing]);

  return (
    <Button 
      type="button"
      size={size} 
      variant={variant} 
      className={className}
      onClick={handleClick}
      aria-label={label}
      id="whatsapp-button"
      disabled={isProcessing}
    >
      <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
      {isProcessing ? 'Abriendo...' : label}
    </Button>
  );
}

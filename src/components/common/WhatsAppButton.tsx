"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import * as React from "react";

const SEND_TO = 'AW-11151875862/_Vc5CP7J7bYbEJa-0MUp';

export function WhatsAppButton() {
  const label = "Consultar por WhatsApp";
  const className = "bg-[#22bd5b] hover:bg-[#1d9e4e] text-white shadow-lg";
  const variant = "default";
  const size = "lg";

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Construir número dividido en partes
    const part1 = '549';
    const part2 = '11';
    const part3 = '23787750';
    const phoneNumber = part1 + part2 + part3;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Tracking de conversión
    try {
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion(whatsappUrl);
      } else if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: SEND_TO });
      }
    } catch {}

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      onClick={handleClick}
      aria-label={label}
    >
      <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
      {label}
    </Button>
  );
}


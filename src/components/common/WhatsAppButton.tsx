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

const WHATSAPP_NUMBER = '5491123787750';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const SEND_TO = 'AW-11151875862/_Vc5CP7J7bYbEJa-0MUp';

export function WhatsAppButton() {
  const whatsappUrl = WHATSAPP_BASE_URL;
  const label = "Consultar por WhatsApp";
  const className = "bg-[#22bd5b] hover:bg-[#1d9e4e] text-white shadow-lg";
  const variant = "default";
  const size = "lg";

  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (typeof window.gtag_report_conversion === 'function') {
        if (!e.metaKey && !e.ctrlKey && e.button === 0) {
          e.preventDefault();
          window.gtag_report_conversion(whatsappUrl);
        }
      } else if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: SEND_TO });
      }
    } catch {}
  }, [whatsappUrl]);

  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={onClick}
      >
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
        {label}
      </a>
    </Button>
  );
}


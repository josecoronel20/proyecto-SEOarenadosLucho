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

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const SEND_TO = 'AW-11151875862/_Vc5CP7J7bYbEJa-0MUp';

export function WhatsAppButton({ href, label = "Consultar por WhatsApp", className = "", variant = "outline", size = "lg" }: WhatsAppButtonProps) {
  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (typeof window.gtag_report_conversion === 'function') {
        if (!e.metaKey && !e.ctrlKey && e.button === 0) {
          e.preventDefault();
          window.gtag_report_conversion(href);
        }
      } else if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: SEND_TO });
      }
    } catch {}
  }, [href]);

  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={href}
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



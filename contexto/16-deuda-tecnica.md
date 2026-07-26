# Deuda técnica

Pendientes **no urgentes**. Bugs P0 corregidos en mayo 2026 — ver `15-bugs-conocidos.md`.

---

## Deuda real (pendiente)

| Ítem | Por qué sigue | Referencia |
|------|----------------|------------|
| Exceso de `"use client"` en secciones estáticas | Más JS del necesario | `14-reglas-de-implementacion.md` |
| Formspree ID hardcodeado en cliente | Sin `NEXT_PUBLIC_FORMSPREE_ID` | `contacto/page.tsx` |
| Mapeo GTM/GA4 solo en panel (no en repo) | Riesgo al cambiar eventos | `06-tracking-y-analytics.md` |
| `public/` sin assets en git local | Dev incompleto sin deploy | `19-deploy-y-entornos.md` |
| Peso real de videos MP4 | LCP puede seguir alto según tamaño de archivos | `11-performance.md` |

---

## Mejoras opcionales

| Ítem | Beneficio |
|------|-----------|
| `openGraph.images` en metadata | Mejor share en redes |
| FAQ schema `FAQPage` JSON-LD | Rich results |
| `NEXT_PUBLIC_*` en Vercel | Config por entorno |
| Teléfono visible en header | Conversión click-to-call |
| Unificar CTAs con `Button asChild` | Menos duplicación CSS |
| Vercel Speed Insights + tabla PSI | Métricas RUM |
| reCAPTCHA / Turnstile | Si persiste spam tras honeypot |
| Eliminar `HeroSecondaryCTA` si no se usa | Limpieza |
| Trim/max length en campos formulario | Validación extra |

---

## Refactors futuros

Sin cambio respecto a `18-decisiones-tecnicas.md`: API `/api/contact`, CMS, reducir client components masivo, landings por rubro, blog, tests E2E, CSP con GTM.

---

## Resuelto recientemente (no reabrir)

- Enlaces 404 industriales / términos  
- `sitemap.ts` / `robots.ts`  
- JSON-LD industrial  
- Honeypot formulario  
- `unoptimized` / `next/image` en casos  
- Imports muertos CTASection/Footer  
- Header sin h1 duplicado  
- `ServicesSection` en home  

---

## Relacionado

- Bugs: `15-bugs-conocidos.md`
- Roadmap: `17-roadmap-tecnico.md`
- ADRs: `18-decisiones-tecnicas.md`

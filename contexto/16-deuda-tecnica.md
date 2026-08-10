# Deuda técnica

Pendientes **no urgentes**. Bugs P0 corregidos en mayo 2026 — ver `15-bugs-conocidos.md`.

---

## Deuda real (pendiente)

| Ítem | Por qué sigue | Referencia |
|------|----------------|------------|
| **`heroVideo.mp4` sin comprimir (24,3 MB)** | Ya **no está en el camino crítico** (el hero usa una foto con `priority`), pero sigue en el repo y no se puede reponer hasta comprimirlo | `marketing/15-sitio-ideal.md` §5 |
| `arenadoParticular.JPG` (4,5 MB) | Ya no se sirve en la home; sigue en el repo | ídem |
| Casos en lenguaje de pliego | `projectsInfo.json` sigue con "relevamiento del sustrato", "procedimientos operativos" — contradice el pivote de copy. Los tiene que validar quien hizo los trabajos | ídem |
| `SITE_URL` y GTM ID hardcodeados | Sin `NEXT_PUBLIC_*`; `SITE_URL` está duplicado en 3 archivos | `19-deploy-y-entornos.md` |
| Video del hero sin comprimir (~25 MB) | Fase B del roadmap SEO; necesita el asset original | `11-performance.md` |
| Mapeo GTM/GA4 solo en panel (no en repo) | Riesgo al cambiar eventos | `06-tracking-y-analytics.md` |
| `public/` sin assets en git local | Dev incompleto sin deploy | `19-deploy-y-entornos.md` |
| Peso real de videos MP4 | LCP puede seguir alto según tamaño de archivos | `11-performance.md` |

---

## Mejoras opcionales

| Ítem | Beneficio |
|------|-----------|
| Imagen social branded 1200×630 dedicada | Mejor share en redes (hoy usa una foto genérica) |
| `NEXT_PUBLIC_*` en Vercel | Config por entorno |
| Unificar CTAs con `Button asChild` | Menos duplicación CSS |
| Vercel Speed Insights + tabla PSI | Métricas RUM |
| Eliminar `HeroSecondaryCTA` (no se monta) | Limpieza |

**Ya no aplican:** `openGraph.images` y `FAQPage` (hechos en las Fases C/E, 27/07) · teléfono visible en header y reCAPTCHA (**descartados**: el número va blindado y no hay formulario — ADR-019).
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

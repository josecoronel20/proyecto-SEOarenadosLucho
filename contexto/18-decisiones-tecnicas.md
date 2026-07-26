# Decisiones técnicas (ADR)

Registro de decisiones **importantes** para no reabrir debates con IA o en el equipo. Formato corto; ampliar solo si cambia la decisión.

**Cómo usar:** ante un “¿por qué no usamos X?” → buscar aquí. Si se revierte una decisión, **añadir entrada nueva** (no borrar la vieja).

---

## ADR-001 — App Router (Next.js `app/`)

| Campo | Valor |
|-------|--------|
| **Fecha** | Migración/consolidación 2025–2026 (refactor industrial) |
| **Motivo** | Metadata API, layouts, SSG de casos con `generateStaticParams`, alineación con Next 16 y deploy Vercel |
| **Impacto** | Rutas en `src/app/`; no usar Pages Router (`pages/`). Nuevas páginas = `page.tsx` + opcional `layout.tsx` |
| **Alternativas descartadas** | Pages Router (legacy), SPA sin SSR |

---

## ADR-002 — Una sola landing de servicios (`/servicios`)

| Campo | Valor |
|-------|--------|
| **Fecha** | Refactor industrial 2025–2026 |
| **Motivo** | Mensaje B2B unificado (Sa3, ISO 8501, logística); menos mantenimiento que micro-sitios por rubro |
| **Impacto** | No crear `/servicios/arenado-*` ni `/arenado-industrial` como página sin decisión nueva. Cards home deben apuntar a `/servicios` o `/contacto` |
| **Alternativas descartadas** | Múltiples landings por servicio (existían en rama anterior) |

---

## ADR-003 — Sin página de precios pública

| Campo | Valor |
|-------|--------|
| **Fecha** | Refactor 2025–2026 |
| **Motivo** | Ticket alto, cotización por proyecto; evitar comparación solo por precio |
| **Impacto** | Ruta `/precios-arenados` eliminada. CTAs a consulta, no a tabla de precios |
| **Alternativas descartadas** | Landing de precios con rangos |

---

## ADR-004 — Sin micro-sitios de zonas (`/zonas-de-cobertura/*`)

| Campo | Valor |
|-------|--------|
| **Fecha** | Refactor 2025–2026 |
| **Motivo** | Simplificar arquitectura; cobertura comunicada en copy/FAQ si hace falta |
| **Impacto** | No reintroducir árbol de zonas sin plan SEO local. Si vuelve: **una** página consolidada |
| **Alternativas descartadas** | Página por partido/zona |

---

## ADR-005 — Contenido de casos en JSON (`projectsInfo.json`)

| Campo | Valor |
|-------|--------|
| **Fecha** | Diseño actual del repo |
| **Motivo** | Pocos casos, cambios poco frecuentes, sin necesidad de CMS ni DB |
| **Impacto** | Editar JSON + `idSection` para slugs; build regenera `/casos-de-exito/[slug]` |
| **Alternativas descartadas** | CMS headless, Markdown en repo (posible futuro, no ahora) |

---

## ADR-006 — Sin base de datos

| Campo | Valor |
|-------|--------|
| **Fecha** | Diseño actual |
| **Motivo** | Sitio marketing estático; leads fuera del sitio (Formspree, mail, WhatsApp) |
| **Impacto** | No Prisma/Supabase. No API de lectura de contenido |
| **Alternativas descartadas** | DB para formularios o casos |

---

## ADR-007 — Formulario vía Formspree (cliente directo)

| Campo | Valor |
|-------|--------|
| **Fecha** | Implementación contacto actual |
| **Motivo** | Cero backend propio; notificaciones por email rápidas |
| **Impacto** | `POST https://formspree.io/f/xrgnqbod` desde `contacto/page.tsx`. No existe `POST /api/contact` |
| **Alternativas descartadas** | Resend/Nodemailer en API Route (pendiente si hay proxy) |

---

## ADR-008 — Analytics con GTM + `dataLayer` (no gtag hardcodeado)

| Campo | Valor |
|-------|--------|
| **Fecha** | Layout actual |
| **Motivo** | Marketing cambia tags sin deploy; GA4, Ads y Meta desde contenedor |
| **Impacto** | Contenedor `GTM-W63ZV9D9`. Eventos en código: `form_submit*`, `contact_whatsapp`, `contact_email`. Mapeo a `generate_lead` en GTM, no en React |
| **Alternativas descartadas** | gtag.js solo en código, Measurement Protocol en servidor |

---

## ADR-009 — Nombres de eventos custom estables

| Campo | Valor |
|-------|--------|
| **Fecha** | Acordado con implementación GTM |
| **Motivo** | Conversiones importadas en Ads/GA4 dependen de triggers |
| **Impacto** | No renombrar sin actualizar GTM y `06-tracking-y-analytics.md` |
| **Eventos** | `form_submit`, `form_submit_success`, `form_submit_error`, `contact_whatsapp`, `contact_email` |

---

## ADR-010 — Nav plana (sin dropdowns)

| Campo | Valor |
|-------|--------|
| **Fecha** | Refactor nav 2025–2026 |
| **Motivo** | Menos fricción móvil; rutas claras: Inicio, Servicios, Casos, FAQ, Contacto |
| **Impacto** | `Header.tsx` lista fija. No dropdown Servicios/Zonas. Item **Contactanos** destacado |
| **Alternativas descartadas** | Submenús por servicio o zona |

---

## ADR-011 — Stack UI: Tailwind + shadcn (Radix)

| Campo | Valor |
|-------|--------|
| **Fecha** | Inicio proyecto |
| **Motivo** | Velocidad de desarrollo, accesibilidad en dialogs/accordion/sheet |
| **Impacto** | Componentes en `src/components/ui/`; estilo **new-york**; no Bootstrap/MUI |
| **Alternativas descartadas** | CSS modules masivos, otra librería de componentes |

---

## ADR-012 — Tipografía system stack (sin Poppins/Google Fonts)

| Campo | Valor |
|-------|--------|
| **Fecha** | `globals.css` actual |
| **Motivo** | Performance (sin FOIT), simplicidad |
| **Impacto** | No añadir `@next/font` sin medir LCP |
| **Alternativas descartadas** | Poppins u otra webfont global |

---

## ADR-013 — Posicionamiento industrial en UI/copy

| Campo | Valor |
|-------|--------|
| **Fecha** | Refactor industrial 2025–2026 |
| **Motivo** | Cliente objetivo: obra, planta, B2B; filtrar leads chicos |
| **Impacto** | Hero y `/servicios` industriales; particular secundario. `.cursorrules` prioriza conversión calificada |
| **Alternativas descartadas** | Home centrada en piletas/particulares como eje principal |

---

## ADR-014 — WhatsApp flotante único (`WppBtn` en layout)

| Campo | Valor |
|-------|--------|
| **Fecha** | Implementación actual |
| **Motivo** | Un canal WA medible; confirmación antes de abrir (intención) |
| **Impacto** | Solo `WppBtn` en `layout.tsx`. AlertDialog + evento `contact_whatsapp` |
| **Alternativas descartadas** | Varios botones WA por sección |

---

## ADR-015 — Deploy en Vercel (orientado)

| Campo | Valor |
|-------|--------|
| **Fecha** | Stack documentado |
| **Motivo** | Integración Next.js, previews, dominio `arenadoslucho.com` |
| **Impacto** | `npm run build` como verdad local; variables en dashboard Vercel |
| **Alternativas descartadas** | Hosting estático sin SSR (limita App Router dinámico menor) |

---

## ADR-016 — Español Argentina en UI

| Campo | Valor |
|-------|--------|
| **Fecha** | Siempre |
| **Motivo** | Audiencia local B2B |
| **Impacto** | Copy, errores de formulario, metadata en español |
| **Alternativas descartadas** | i18n EN/ES |

---

## ADR-017 — Corrección enlaces legacy (mayo 2026)

| Campo | Valor |
|-------|--------|
| **Fecha** | 2026-05 |
| **Motivo** | Rutas `/arenado-industrial` eliminadas generaban 404 desde home y JSON |
| **Impacto** | Enlaces internos apuntan a `/servicios`, `/contacto`, `/casos-de-exito/{slug}`; campañas externas deben usar 301 si aplica |
| **Alternativas descartadas** | Recrear micro-landings por rubro |

---

## Decisiones pendientes (no cerradas)

| Tema | Opciones | Bloqueo |
|------|----------|---------|
| ¿Montar `ServicesSection` en home? | Sí con links a `/servicios` / No | Producto |
| ¿Página términos legales? | Crear vs quitar link | Legal |
| ¿Proxy `/api/contact`? | Sí vs mantener Formspree directo | Volumen spam |
| ¿Teléfono en header? | Visible + `tel:` vs solo WA/form | Número y tracking |

Al decidir, mover a ADR numerado nuevo (ADR-017+).

---

## Plantilla para nuevas decisiones

```markdown
## ADR-0XX — Título corto

| Campo | Valor |
|-------|--------|
| **Fecha** | YYYY-MM-DD |
| **Motivo** | … |
| **Impacto** | Qué hacer / no hacer en el código |
| **Alternativas descartadas** | … |
```

---

## Relacionado

- Deuda: `16-deuda-tecnica.md`
- Roadmap: `17-roadmap-tecnico.md`
- Stack: `01-stack-y-arquitectura.md`
- Rutas: `03-rutas-y-paginas.md`

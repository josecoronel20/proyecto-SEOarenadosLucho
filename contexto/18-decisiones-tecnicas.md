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
| **Motivo** | Sitio marketing estático; el lead ocurre fuera del sitio (WhatsApp) |
| **Impacto** | No Prisma/Supabase. No API de lectura de contenido |
| **Alternativas descartadas** | DB para formularios o casos |

---

## ADR-007 — Formulario vía Formspree (cliente directo) — **ANULADO por ADR-019**

| Campo | Valor |
|-------|--------|
| **Fecha** | Implementación original de `/contacto` |
| **Estado** | ⛔ **Anulado el 28/07/2026** — ver **ADR-019** |
| **Motivo original** | Cero backend propio; notificaciones por email rápidas |
| **Impacto (histórico)** | `POST https://formspree.io/f/xrgnqbod` desde `contacto/page.tsx` |
| **Por qué se anuló** | El dueño atiende por WhatsApp; el formulario producía leads que nadie miraba y una conversión paralela que ensuciaba Ads |

---

## ADR-008 — Analytics con GTM + `dataLayer` (no gtag hardcodeado)

| Campo | Valor |
|-------|--------|
| **Fecha** | Layout actual |
| **Motivo** | Marketing cambia tags sin deploy; GA4, Ads y Meta desde contenedor |
| **Impacto** | Contenedor `GTM-W63ZV9D9`. Evento en código: **`contact_whatsapp`** (único desde ADR-019). Mapeo a `generate_lead` en GTM, no en React |
| **Alternativas descartadas** | gtag.js solo en código, Measurement Protocol en servidor |

---

## ADR-009 — Nombres de eventos custom estables

| Campo | Valor |
|-------|--------|
| **Fecha** | Acordado con implementación GTM |
| **Motivo** | Conversiones importadas en Ads/GA4 dependen de triggers |
| **Impacto** | No renombrar sin actualizar GTM y `06-tracking-y-analytics.md` |
| **Eventos** | **`contact_whatsapp`** — el único vigente. Los `form_submit*` y `contact_email` fueron eliminados el 28/07/2026 (ADR-019) |

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
| **Impacto** | Copy, microcopy de los modales y metadata en español (Argentina) |
| **Alternativas descartadas** | i18n EN/ES |

---

## ADR-017 — Corrección enlaces legacy (mayo 2026)

| Campo | Valor |
|-------|--------|
| **Fecha** | 2026-05 |
| **Motivo** | Rutas `/arenado-industrial` eliminadas generaban 404 desde home y JSON |
| **Impacto** | Enlaces internos apuntan a `/servicios`, `/contacto`, `/casos-de-exito/{slug}`. Los **301 ya están implementados** en `next.config.js` (27/07/2026): `/arenado-industrial`→`/servicios`, `/arenado-particular`→`/arenado-de-piletas`, `/presupuesto-rapido`→`/contacto` |
| **Alternativas descartadas** | Recrear micro-landings por rubro |

---

## Decisiones pendientes (no cerradas)

| Tema | Opciones | Bloqueo |
|------|----------|---------|
| ¿Landing de "arenado in situ / a domicilio"? | Crear vs cubrirlo desde `/servicios` | Datos de demanda (SQR) |
| ¿Publicar el caso de "piezas"? | Sí vs dejarlo fuera | Fotos y prioridad |

**Cerradas:** ADR-016 cubre el idioma · ADR-019 cierra "¿proxy `/api/contact`?" (no hay formulario) y "¿teléfono en header?" (**no**: el número se mantiene blindado, ver `12-seguridad-y-validaciones.md`).

Al decidir, mover a un ADR numerado nuevo (ADR-020+).

---

## Plantilla para nuevas decisiones

## ADR-018 — Pivote de posicionamiento: "arenado sin vueltas" (supera parcialmente ADR-002 y ADR-013)

| Campo | Valor |
|-------|--------|
| **Fecha** | 2026-07-26 |
| **Motivo** | El dueño aclaró el negocio real: NO se hace arenado técnico medido (Sa3/ISO 8501/anclaje) ni granallado; se hace arenado simple in situ para obra, restauración, PYMEs con galpón y piletas. El copy técnico atraía licitaciones que se rechazan y espantaba al cliente real |
| **Impacto** | PROHIBIDO Sa3/ISO/metal blanco/granallado en copy, metadata, schema y anuncios. Piletas y PYMEs pasan a ser parte del mensaje (anula el "particular secundario" de ADR-013). Excepción aprobada a ADR-002: se crea `/arenado-de-piletas`. Reglas completas en `.cursorrules` y `contexto/00-proyecto-general.md` |
| **Alternativas descartadas** | Mantener el posicionamiento técnico certificado (era falso); competir por trabajos con requerimientos de norma |

---

## ADR-019 — Canal único WhatsApp: se elimina el formulario (anula ADR-007)

| Campo | Valor |
|-------|--------|
| **Fecha** | 2026-07-28 |
| **Motivo** | Decisión del dueño: atiende personalmente por WhatsApp y es el único canal donde responde. El formulario generaba leads que nadie miraba y una segunda conversión que ensuciaba la optimización de Google Ads |
| **Impacto** | ⛔ Eliminados el formulario de `/contacto`, la integración **Formspree** (`xrgnqbod`) y el componente **`EmailBtn`**. ⛔ Dejan de existir los eventos `form_submit`, `form_submit_success`, `form_submit_error` y `contact_email`. ✅ **Único evento de conversión: `contact_whatsapp`** (`WppBtn` + `WhatsAppCTA`). `/contacto` **se mantiene como ruta** (es landing de Ads y está enlazada en todo el sitio) y pasa a ser una página WhatsApp-first, ahora **Server Component**. En Ads, la única acción primaria pasa a ser `contact_whatsapp` |
| **Alternativas descartadas** | Mantener el formulario como canal secundario (sigue produciendo leads sin atender); micro-formulario de 1 campo; formulario de clientes potenciales de Google (el lead no llega al WhatsApp y no dispara el evento) |
| **Reintroducir un formulario** | Requiere **decisión explícita del dueño**: cambia la única conversión de la cuenta de Ads |

---

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

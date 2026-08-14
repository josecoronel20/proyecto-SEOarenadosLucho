# Roadmap técnico

Prioridades técnicas alineadas a **conversión B2B industrial** y stack simple. Revisar cada trimestre o tras un deploy grande.

**Última alineación:** refactor sitio industrial (App Router consolidado, sin micro-landings).

---

## P0 — Urgente (antes de escalar Ads o campañas)

| Tarea | Estado (mayo 2026) |
|-------|---------------------|
| Corregir **enlaces 404** | Hecho |
| **Formulario** estable + honeypot | Hecho |
| **ServicesSection en home** | Hecho |
| Validar **GTM en producción** | Pendiente (panel marketing) |
| **301** en hosting para URLs legacy externas | Pendiente si hay campañas viejas |

---

## P1 — Alta (conversión y medición)

| Tarea | Entregable | Notas |
|-------|------------|-------|
| **Verificar tracking end-to-end** | Mapeo estable `generate_lead` ← **`contact_whatsapp`**, validado en GTM Preview y GA4 DebugView | No renombrar el evento sin el checklist de `06` |
| **CTAs coherentes** | Primarios → `/contacto` o `WhatsAppCTA`; un solo `WppBtn` flotante | `04-componentes-ui` |
| ~~**Teléfono visible en header**~~ | **Descartado** — el número va blindado (ADR-019, `12-seguridad`) |
| ~~**Página términos**~~ | Hecho |
| ~~**Actualizar JSON-LD**~~ | Hecho |
| ~~**Anti-spam básico (honeypot)**~~ | Sin objeto: no hay formulario (ADR-019) |
| Completar **URLs finales Ads** | Tabla campaña ↔ URL en `08-google-ads-y-landings` | Marketing + dev |

---

## P2 — Media (SEO y performance)

| Tarea | Entregable | Notas |
|-------|------------|-------|
| **Optimizar LCP** | Comprimir MP4; medir PSI (parcial: `preload=metadata`, sin `unoptimized`) | `11-performance` |
| ~~**`sitemap.ts` + `robots.ts`**~~ | Hecho |
| **Canonical / OG image** | `alternates.canonical` si hace falta; imagen 1200×630 | Metadata |
| **FAQ `FAQPage` schema** | JSON-LD desde copy FAQ | `FaqAccordion` |
| Reducir **Client Components** innecesarios | Menos JS en `/servicios` | `14-reglas` |
| **Un solo h1** por página | Header sin `h1` duplicado | `Header.tsx` |
| Baseline **PageSpeed** | Tabla en `11-performance.md` con fechas | PSI manual |

---

## P3 — Baja (calidad y mantenimiento)

| Tarea | Entregable |
|-------|------------|
| Limpiar imports muertos | `CTASection`, `Footer` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Env en Vercel |
| Unificar estilos CTA (`Button asChild`) | Menos duplicación |
| Eliminar componentes huérfanos | `HeroSecondaryCTA` si no se usa |
| Vercel Speed Insights | Dashboard RUM |
| Variables env para GTM ID | Opcional |

---

## P4 — Futuro (solo con decisión de producto)

| Tarea | Depende de |
|-------|------------|
| API `/api/contact` + rate limit | Volumen spam / legal |
| CMS para casos y copy | Frecuencia de edición sin dev |
| **Landing `/arenado-de-piletas`** | ✅ **DECISIÓN TOMADA (26/07/2026)** — prioridad de contenido #1, ver `marketing/04-plan-de-contenidos.md` |
| Landing "arenado in situ / a domicilio" (PYMEs) | Si el grupo `pymes-in-situ` de Ads muestra demanda |
| Blog industrial | Content marketing |
| Página zonas de cobertura única | SEO local |
| Click-to-call con número en schema + header | Datos de negocio |
| Tests E2E flujo contacto | Madurez del equipo |

---

## No hacer ahora (explícito)

- Refactor masivo de carpetas o renombrar todo a Server Components en un solo PR  
- Migrar a CMS o DB “por si acaso”  
- Reintroducir `/precios-arenados` o micro-zonas sin estrategia  
- Cambiar stack (Vite, Remix, etc.)  
- Añadir blog o 10 landings nuevas sin capacidad de contenido  

---

## Métricas de éxito del roadmap

| Área | Señal de “hecho” |
|------|------------------|
| Conversión | Chats reales de WhatsApp + eventos `contact_whatsapp` estables en GA4, con proporción coherente entre ambos |
| Ads | URLs finales 200; conversiones importadas sin caída |
| SEO | Sitemap enviado en GSC; 0 enlaces internos 404 críticos |
| Performance | LCP mobile &lt; 2,5 s en `/` (PSI) o mejora documentada |
| Mantenimiento | `15-bugs-conocidos` con P0/P1 cerrados |

---

## Relacionado

- Deuda: `16-deuda-tecnica.md`
- Bugs: `15-bugs-conocidos.md`
- Negocio: `00-proyecto-general.md`
- Workflow: `13-workflow-cursor.md`

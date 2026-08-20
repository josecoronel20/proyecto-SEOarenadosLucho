# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este proyecto

Sitio de **marketing + conversión** para **Arenados Lucho**, empresa de arenado en Buenos Aires. Toda decisión técnica se subordina a un objetivo de negocio: **maximizar contactos calificados** (formulario, WhatsApp, email). Ver `.cursorrules` para las reglas de producto/copy/CTA que gobiernan cualquier cambio de UI o contenido — no son opcionales.

**Posicionamiento real (26/07/2026 — decisión del dueño):** el negocio hace arenado **"sin vueltas"** (obra, restauración, limpieza industrial básica, piletas, trabajos chicos). **NO hace arenado técnico medido** (Sa3, ISO 8501, metal blanco, perfil de anclaje) **ni granallado** — está **PROHIBIDO** prometer eso en copy, metadata, schema o anuncios. El sitio actual todavía lo promete: hay un **pivote de copy en curso** (`contexto/marketing/02-estrategia-seo.md` Fase 1). Negocio completo: `contexto/00-proyecto-general.md`.

El `package.json` se llama genéricamente `nextjs-project`; el producto real es Arenados Lucho.

## Comandos

```bash
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción (next build) — debe pasar limpio antes de mergear
npm run start    # servir el build de producción localmente
npm run lint     # ESLint (eslint-config-next)
```

**No hay suite de tests** (sin Jest/Vitest/Playwright ni script `test`). La verificación es `npm run build` + QA manual (formulario, CTAs, WhatsApp, responsive en 375px y 1024px). No inventar comandos de test.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript 5.9 (strict) · Tailwind CSS 3 · shadcn/ui estilo **new-york** (Radix) · `lucide-react` · `embla-carousel-react`. Alias `@/*` → `src/*`. Deploy en Vercel.

**No hay** base de datos, CMS, ni API Routes de negocio. El contenido vive en componentes React y en `src/lib/projectsInfo.json`. El formulario hace `fetch` directo a **Formspree** desde el cliente.

## Documentación del proyecto: `contexto/`

**Antes de cualquier tarea no trivial, consultá `contexto/`.** Es un sistema de documentación por temas (más profundo que este archivo) mantenido para asistentes de IA. `contexto/README.md` tiene una tabla "qué archivo consultar según el problema". Los más usados:

| Tema | Archivo |
|------|---------|
| **Negocio real, servicios, cliente objetivo** | `contexto/00-proyecto-general.md` |
| Rutas activas / eliminadas, App Router | `contexto/03-rutas-y-paginas.md` |
| Formularios, WhatsApp, endpoints de conversión | `contexto/05-formularios-y-conversion.md` |
| **GTM, `dataLayer`, eventos (crítico)** | `contexto/06-tracking-y-analytics.md` |
| Tailwind, colores, tipografía, design system | `contexto/10-estilos-y-design-system.md` |
| Estándares de código | `contexto/14-reglas-de-implementacion.md` |
| Bugs conocidos / deuda técnica | `contexto/15-bugs-conocidos.md`, `contexto/16-deuda-tecnica.md` |
| **Marketing: SEO, Google Ads, automatizaciones** | `contexto/marketing/` (empezar por su `README.md`) |

Si cambiás algo estructural (rutas, eventos, endpoints), **actualizá el archivo `contexto/` correspondiente** en el mismo cambio.

## Marketing: `contexto/marketing/` — el norte del proyecto

La **estrategia y operación de marketing** (SEO + Google Ads) vive en `contexto/marketing/`. Para cualquier tarea de marketing, empezar por `contexto/marketing/README.md` (índice) y `00-vision-y-objetivos.md` (estado actual y metas). Claves:

- **Objetivo y transición:** hoy se toma casi cualquier arenado (piletas con protagonismo — el lead más barato del historial); el norte es crecer hacia **obra en construcción y restauración de edificios** (tickets altos sin requisitos técnicos). El dueño no es técnico y delegó la operación: proponer con criterio, ejecutar con topes, registrar todo.
- **Keywords y negativas:** fuente única `marketing/03-keywords-maestro.md` (reescrito 26/07 con el historial real de la cuenta). Técnicas (granallado, sa3, iso 8501…) = negativas de cuenta; `pileta/piscina` **ya no es negativa** (es servicio core).
- **Google Ads — las 3 campañas ACTIVAS desde el 20/08/2026.** `AR-Search-Obra-Industrial` (3.000/día) · `AR-Search-Piletas` (1.250/día) · `AR-Search-General-Marca` (750/día). **La medición está verificada de punta a punta**: `contact_whatsapp` registra en la columna "Conversiones" de Ads (chequeo C3 aprobado el 20/08). Corriendo: el guardián de presupuesto (06, tope **ARS 300.000/mes**) y los 3 scripts de lectura (02/03/04). El **autopilot (05) sigue SIN instalar** — ahora sí se cumplen sus dos condiciones (conversiones fluyendo + URLs en 200), pero es una decisión explícita del dueño y no se toca durante el congelamiento. ⛔ **Congelamiento hasta el 03/09/2026**: no se tocan pujas, presupuestos, keywords ni textos; solo se agregan negativas. Estado real siempre en `marketing/09-automatizaciones.md` y `marketing/08-bitacora.md`. Política de scripts en `marketing/06-google-ads-scripts.md`.
- **Modo experto de Ads (decisión del dueño 28/07/2026):** toda tarea sobre la cuenta de Google Ads se trabaja como **consultor senior** — análisis profundo con datos reales (dossier, scripts, capturas) ANTES de cualquier cambio; nada de fixes superficiales. Playbook obligatorio: `marketing/13-modo-experto-ads.md` (principios, 8 áreas de análisis, protocolo de datos, cadencia). La ejecución en la cuenta sigue siendo **guiada** (el dueño clickea; Claude dirige y verifica por captura).
- **Automatizaciones vigentes** (scripts + auditoría SEO semanal programada): inventario y cómo frenarlas en `marketing/09-automatizaciones.md` — consultarlo antes de crear o tocar cualquier automatización.
- **Todo cambio de marketing se registra en `marketing/08-bitacora.md`** (qué, por qué, resultado esperado). Sin bitácora no hay aprendizaje.
- Al 25/07/2026 el fix de dominio `.com` está desplegado y **verificado**: `/robots.txt` y `/sitemap.xml` responden **200** en producción con `.com` (antes 404; resuelto vía PR #1). Próximo: enviar el sitemap en Google Search Console y pasos 2, 4 y 5 de `marketing/01-migracion-y-dominio.md` (sesión de Chrome para instalar/verificar los scripts de Ads).

## Arquitectura

### Estructura
```
src/app/                 # App Router: cada carpeta con page.tsx = una URL
  layout.tsx             # Layout raíz: Header, Footer, WppBtn, scripts GTM, JSON-LD, metadata base
  {ruta}/page.tsx        # Páginas (delgadas: componen secciones)
  sitemap.ts, robots.ts  # SEO generado (sitemap incluye slugs de casos)
src/components/
  common/                # Transversal: Header, Footer, CTASection, WppBtn, EmailBtn, H2
  home/ servicios/ casos-de-exito/ preguntas-frecuentes/   # Secciones por página
  ui/                    # Primitivos shadcn — reutilizar antes de crear variantes
src/lib/
  utils.ts               # cn() (clsx + tailwind-merge)
  projectsInfo.json      # Datos de casos de éxito
  getProjectBySlug.ts    # Lectura tipada de casos
```

Nueva página → `src/app/{ruta}/page.tsx`. Sección de una página → `src/components/{dominio}/`. Dato tipo listado → JSON en `src/lib/` + helper.

### Server vs Client Components
Default = **Server Component**. Poné `"use client"` solo si hay estado, handlers, hooks o browser APIs (formulario de contacto, Header con Sheet móvil, hero con video, FAQ accordion, filtros de casos, botones Wpp/Email). Varios bloques en `servicios/` y `home/` son client sin necesidad — **es deuda, no replicar** en código nuevo.

### Capa de datos de casos
Los casos de éxito viven en `src/lib/projectsInfo.json` y se leen con `getProjectBySlug.ts` (`getProjectBySlug`, `getAllSlugs`). El detalle `/casos-de-exito/[slug]` usa `generateStaticParams` + `generateMetadata` (SSG); el `slug` de la URL es el campo `idSection` del JSON. `sitemap.ts` también deriva sus entradas de casos desde `getAllSlugs()`. Al agregar un caso, el JSON es la fuente única.

## Invariantes críticos — romperlos NO falla el build pero rompe conversiones

El tracking es la razón de ser del sitio y es frágil: cambiar un nombre de evento o un ID rompe GA4 / Google Ads / Meta silenciosamente. Detalle completo en `contexto/06-tracking-y-analytics.md`.

- **GTM Container ID `GTM-W63ZV9D9`** en `src/app/layout.tsx`. El script `window.dataLayer = window.dataLayer || []` debe cargar **antes** del snippet GTM.
- **SOLO WhatsApp (decisión del dueño 28/07/2026):** se **eliminó el formulario** de `/contacto` y el `EmailBtn`. El **único canal de conversión es WhatsApp**. `/contacto` sigue existiendo (es landing de Ads y está enlazada en todo el sitio) pero ahora es una **página WhatsApp-first sin formulario**. Ya **no existen** los eventos `form_submit*` ni `contact_email`, ni el endpoint de Formspree.
- **Nombre de evento exacto (el único vigente):** `contact_whatsapp` — lo disparan `WppBtn.tsx` (flotante global, uno solo) y `WhatsAppCTA.tsx` (CTAs inline). Vía `window.dataLayer.push(...)` protegido por `typeof window !== 'undefined' && window.dataLayer`.
- `contact_whatsapp` **solo tras confirmar el `AlertDialog`** — no adelantar el evento al click.
- **El número de WhatsApp NUNCA queda contiguo en el bundle** (anti-scraping): vive como **array de dígitos** en `src/lib/wppNumero.ts` y se une con `.join("")` en runtime. ⚠️ El patrón anterior —`"5491123" + "787750"`— **no funcionaba**: el minificador plegaba la concatenación en build y el número salía entero en producción (verificado el 18/08/2026). Tampoco va en el JSON-LD (`telephone`) ni como texto en el sitio. Se abre con `window.open`, nunca con un `href`.
- **No enviar PII** (email/teléfono) dentro de eventos `dataLayer`.
- Un solo `WppBtn` flotante (global en el layout) — no agregar un segundo.
- **Copy sin promesas técnicas:** prohibido introducir (o reintroducir) Sa3, ISO 8501, metal blanco, granallado o mediciones en cualquier texto del sitio, metadata o schema (decisión 26/07/2026 — ver `.cursorrules`).

**Dominio de producción: `https://www.arenadoslucho.com`** (Vercel, migrado desde Framer el 25/07/2026). `SITE_URL` está hardcodeado en `layout.tsx`, `sitemap.ts` y `robots.ts`; si cambia el dominio, actualizá los tres. El `.com.ar` **nunca estuvo operativo** — si aparece en código o docs, es un error a corregir.

## Design system

**Fuente de verdad: [`DESIGN.md`](DESIGN.md) en la raíz.** Leerlo antes de tocar
cualquier UI. `contexto/10-estilos-y-design-system.md` quedó como historia del
sistema anterior — no seguir sus recomendaciones.

Sistema reemplazado por completo el 14/08/2026. El mundo es un **catálogo de
repuestos / manual de mantenimiento industrial**: papel técnico frío, dos tintas
y todo tabulado. Lo mínimo que hay que saber:

- **Se separa con filetes, no con cajas.** Prohibidas las tarjetas de ícono + título + texto en cuadrícula (era el patrón dominante del sitio viejo) y cualquier caja dentro de otra caja.
- **Prohibido el copete** (renglón chico arriba de un titular), las sombras, y el filete de color de 4px+ de un solo lado. El filete de marca es de 2px.
- **Color:** `tinta` / `papel` / `maquina` (naranja), con contrastes **medidos** en `tailwind.config.ts`. **Sobre naranja va texto tinta, nunca blanco** (blanco da 3,75:1 y no pasa AA). La escala azul `primary-*` está **muerta**.
- **CTA de WhatsApp: `green-700`**, único color ajeno al sistema, a propósito. Estilos en `src/lib/wpp.ts` — no duplicar clases de botón en las páginas.
- **Tipografía:** Archivo (Omnibus-Type), auto-alojada con `next/font`. No cargar Google Fonts por `<link>`.
- **Primitivos en `src/components/common/system.tsx`** (`Section`, `SectionHead`, `FichaLista`/`Ficha`, `FranjaDatos`). Una página compone, no inventa: dos ritmos verticales y un solo margen lateral (`px-5 lg:px-8`) para todo el sitio.
- **Gotcha que sigue:** `text-primary`/`bg-primary` (tokens HSL de shadcn) apuntan a casi negro y siguen usados dentro de `components/ui/`. No confundir con la escala hex muerta.
- `darkMode: ["class"]` existe pero **no hay toggle de tema** — no agregar variantes `dark:`.
- Imágenes con `next/image`; iconos solo `lucide-react`; combinar clases con `cn()`.
- **Verificar siempre con motor de navegador** (`.claude/skills/impeccable/scripts/detect.mjs <url>`), escritorio y celular. El escaneo estático da cero y no significa nada.

## Convenciones de código

- Copy y mensajes de UI en **español (Argentina)**.
- Componentes y archivos de sección en **PascalCase**; respetar el patrón de export existente por archivo (varios usan `export default`).
- Un solo `<h1>` por página (el hero); el resto con `H2` o clases equivalentes.
- Enlazar **solo rutas que existen** en `src/app/`. Rutas legacy `/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido` fueron eliminadas → apuntar a `/servicios` o `/contacto`.
- El agente **no commitea** salvo pedido explícito.

### No introducir sin decisión explícita
CMS o base de datos (Prisma/Supabase) · React Hook Form + Zod (no están en deps) · Pages Router · nuevas landings por rubro (`/servicios/arenado-*`) — **excepción ya aprobada (26/07/2026): `/arenado-de-piletas`**, ver `contexto/marketing/04-plan-de-contenidos.md` · Server Actions · fuentes web nuevas · `dangerouslySetInnerHTML` con input de usuario.

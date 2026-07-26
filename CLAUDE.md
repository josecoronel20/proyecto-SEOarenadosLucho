# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este proyecto

Sitio de **marketing + conversión** para **Arenados Lucho**, empresa de arenado industrial en Buenos Aires. Toda decisión técnica se subordina a un objetivo de negocio: **maximizar contactos calificados** (formulario, WhatsApp, email). Ver `.cursorrules` para las reglas de producto/copy/CTA que gobiernan cualquier cambio de UI o contenido — no son opcionales.

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

- **Objetivo:** maximizar leads industriales calificados en Buenos Aires/AMBA. El dueño no es técnico y delegó la operación: proponer con criterio, ejecutar con topes, registrar todo.
- **Keywords y negativas:** fuente única `marketing/03-keywords-maestro.md` (no duplicar listas en otros archivos).
- **Google Ads — scripts creados pero NO instalados todavía:** los scripts viven en `marketing/ads-scripts/` y el modelo aprobado es piloto automático con topes (autopilot + guardián de **ARS 300.000/mes**), pero **ninguno está instalado en la cuenta** (estado real en `marketing/09-automatizaciones.md`). Hasta instalarlos y verificar el trigger en la UI, **no hay autopilot corriendo ni tope de gasto real**. No comunicar "tope duro vigente" sin esa verificación. Política en `marketing/06-google-ads-scripts.md`; cambios estructurales, solo con el dueño al tanto.
- **Automatizaciones vigentes** (scripts + auditoría SEO semanal programada): inventario y cómo frenarlas en `marketing/09-automatizaciones.md` — consultarlo antes de crear o tocar cualquier automatización.
- **Todo cambio de marketing se registra en `marketing/08-bitacora.md`** (qué, por qué, resultado esperado). Sin bitácora no hay aprendizaje.
- Pendiente inmediato al 25/07/2026: verificar tras el próximo deploy que `/robots.txt` y `/sitemap.xml` respondan 200 en producción (daban 404); luego pasos 2, 4 y 5 de `marketing/01-migracion-y-dominio.md`.

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
- **Nombres de evento exactos** (no renombrar sin migrar los triggers en GTM): `form_submit`, `form_submit_success`, `form_submit_error` (`src/app/contacto/page.tsx`), `contact_whatsapp` (`WppBtn.tsx`), `contact_email` (`EmailBtn.tsx`). Todos vía `window.dataLayer.push(...)` protegido por `typeof window !== 'undefined' && window.dataLayer`.
- `form_submit_success` solo tras `response.ok` real de Formspree; `contact_whatsapp` solo tras confirmar el `AlertDialog`. No adelantar el evento al click.
- **Formspree endpoint `https://formspree.io/f/xrgnqbod`** y los nombres de campo JSON (`name`, `contact`, `description`, `_subject`) — cambiar cualquiera rompe el inbox del cliente.
- **No enviar PII** (email/teléfono) dentro de eventos `dataLayer`.
- Un solo `WppBtn` flotante (global en el layout) — no agregar un segundo.

**Dominio de producción: `https://www.arenadoslucho.com`** (Vercel, migrado desde Framer el 25/07/2026). `SITE_URL` está hardcodeado en `layout.tsx`, `sitemap.ts` y `robots.ts`; si cambia el dominio, actualizá los tres. El `.com.ar` **nunca estuvo operativo** — si aparece en código o docs, es un error a corregir.

## Design system

Detalle en `contexto/10-estilos-y-design-system.md`. Lo esencial:

- **Escala de marca `primary-50…900`** (hex, en `tailwind.config.ts`) para CTAs y títulos. CTA principal = `bg-primary-400 hover:bg-primary-500`, `rounded-full` en marketing.
- **Gotcha — doble sistema `primary`:** las clases `primary-400`/`primary-600` (escala hex azul, correcta para landings) **no son lo mismo** que `text-primary`/`bg-primary` (tokens HSL de shadcn que apuntan a casi negro). Para títulos de sección y CTAs usá la escala hex o el componente `H2`; reservá `text-primary`/`bg-primary` para donde ya está (Header, primitivos shadcn).
- Contenedor de sección: `container mx-auto px-4 lg:px-8`. Mobile-first; breakpoints usados `md:`/`lg:`/`xl:` (no `sm:` sistemático).
- Tipografía = **system UI stack** (en `globals.css`). No cargar Google Fonts sin evaluar LCP.
- `darkMode: ["class"]` existe pero **no hay toggle de tema** — no agregar variantes `dark:`.
- Imágenes con `next/image`; iconos solo `lucide-react`; combinar clases con `cn()`.

## Convenciones de código

- Copy y mensajes de UI en **español (Argentina)**.
- Componentes y archivos de sección en **PascalCase**; respetar el patrón de export existente por archivo (varios usan `export default`).
- Un solo `<h1>` por página (el hero); el resto con `H2` o clases equivalentes.
- Enlazar **solo rutas que existen** en `src/app/`. Rutas legacy `/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido` fueron eliminadas → apuntar a `/servicios` o `/contacto`.
- El agente **no commitea** salvo pedido explícito.

### No introducir sin decisión explícita
CMS o base de datos (Prisma/Supabase) · React Hook Form + Zod (no están en deps) · Pages Router · nuevas landings por rubro (`/servicios/arenado-*`) · Server Actions · fuentes web nuevas · `dangerouslySetInnerHTML` con input de usuario.

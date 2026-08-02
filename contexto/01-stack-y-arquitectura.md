# Stack y arquitectura

## Resumen

Sitio **marketing + conversión** en **Next.js (App Router)** con **TypeScript**, estilos con **Tailwind CSS** y componentes **shadcn/ui** (Radix). Contenido de casos en **JSON** en el repo. **Conversión por WhatsApp** (canal único; sin formularios ni backend). Analytics con **Google Tag Manager**. Desplegado en **Vercel**.

---

## Framework

| Tecnología | Uso |
|------------|-----|
| **Next.js 16** | App Router, `layout.tsx`, `page.tsx`, metadata API |
| **React 19** | UI, Client Components donde hace falta interactividad |
| **TypeScript 5.9** | Tipado en componentes y libs |

Rutas principales actuales:

- `/` — Home  
- `/servicios` — Landing única de servicios (industrial)  
- `/casos-de-exito` — Listado + `/casos-de-exito/[slug]`  
- `/preguntas-frecuentes`  
- `/contacto` — Formulario + tracking  
- `/politica-de-privacidad`

---

## Librerías principales

### UI y estilos

- **Tailwind CSS 3** + **PostCSS** + **Autoprefixer**
- **tailwindcss-animate**, **tailwind-merge**, **clsx**, **class-variance-authority**
- **lucide-react** — iconos
- **@radix-ui/react-*** — accordion, dialog, alert-dialog, slot (base shadcn)
- **embla-carousel-react** — carruseles
- **shadcn** (CLI/paquete en deps) — patrón de componentes en `src/components/ui/`

### Datos y utilidades

- **`src/lib/utils.ts`** — `cn()` y helpers
- **`src/lib/projectsInfo.json`** — casos de éxito
- **`src/lib/getProjectBySlug.ts`** — lectura de proyectos

### Conversión y terceros

- **WhatsApp** — único canal: `WppBtn` (flotante global) y `WhatsAppCTA` (inline), vía `window.open` a `wa.me`
- **GTM** — script en `src/app/layout.tsx`; el `dataLayer` solo emite `contact_whatsapp`

> El sitio **no hace POST a ningún servicio**: Formspree y el formulario se eliminaron el 28/07/2026.

---

## SSR / CSR / renderizado

| Patrón | Dónde |
|--------|--------|
| **Server Components (default)** | Páginas y layouts sin `"use client"` |
| **Client Components** | Header (Sheet móvil), Hero con video, acordeón FAQ, filtros de casos, `WppBtn` y `WhatsAppCTA`, varias secciones de servicios |
| **Metadata estática** | `export const metadata` en páginas + `canonical` self-referente |
| **JSON-LD** | `@graph` con `@id` en `layout.tsx` (LocalBusiness, WebSite) + `FAQPage`/`Service`/`BreadcrumbList`/`CreativeWork` por página |

No hay API Routes de negocio ni ningún envío de datos: la conversión abre WhatsApp desde el cliente.

Imágenes: **next/image** donde aplica; hero con **`<video>`** local en `/public/videos/`.

---

## Hosting

- **Vercel** (referencia en `.gitignore` → `.vercel`)
- Build: `npm run build` → `next build`
- Producción: `next start` o plataforma serverless de Vercel

`next.config.js` actual: `reactStrictMode`, `poweredByHeader: false`, `images.formats` (AVIF/WebP), **headers de seguridad** (`nosniff`, `Referrer-Policy`, `X-Frame-Options`, HSTS) y los **301 de rutas legacy**. Sin dominios remotos de imágenes.

---

## Base de datos

**No hay base de datos** en el proyecto.

- Contenido editable vía archivos en repo (JSON, TSX).
- No se recibe ni persiste ningún dato de usuario: el contacto ocurre dentro de WhatsApp.

---

## CMS

**No hay CMS** (WordPress, Sanity, Contentful, etc.).

Contenido vive en:

- Componentes React
- `projectsInfo.json`
- Textos en metadata de cada `page.tsx`

---

## Providers

No hay capa global de React Context para auth o tema complejo.

Patrón actual:

- **Layout raíz** (`src/app/layout.tsx`): `Header`, `Footer`, `WppBtn`, scripts GTM, structured data
- **Sin** `ThemeProvider` obligatorio (estilos Tailwind + `globals.css`)
- Estado local en Client Components (filtros de casos, menú móvil, acordeón)

---

## Estructura de carpetas (alto nivel)

```
src/
├── app/              # App Router (páginas, layouts, globals.css)
├── components/
│   ├── common/       # Header, Footer, CTAs, WppBtn, WhatsAppCTA, Breadcrumbs, H2
│   ├── home/         # Secciones home
│   ├── servicios/    # Secciones /servicios
│   ├── casos-de-exito/
│   ├── preguntas-frecuentes/
│   └── ui/           # shadcn (button, card, sheet, …)
└── lib/              # utils, JSON proyectos
public/               # imágenes, videos, favicon
contexto/             # documentación para IA
```

---

## Qué SÍ usar en este proyecto

- Next.js App Router y convenciones de `app/`
- Tailwind + tokens/colores del proyecto (`primary`, etc. en `tailwind.config`)
- Componentes `ui/` existentes antes de crear variantes nuevas
- `next/image` para fotos optimizadas
- `dataLayer.push` para el evento de conversión (`contact_whatsapp`) alineado a GTM
- `WhatsAppCTA` para cualquier CTA de WhatsApp inline
- JSON/TS en `lib/` para listados estáticos (casos, FAQs, datos del negocio)

---

## Qué NO usar (salvo decisión explícita)

| No usar | Motivo |
|---------|--------|
| **CMS headless** nuevo | No está en arquitectura; aumenta complejidad sin necesidad actual |
| **Base de datos** (Prisma, Supabase, etc.) | No hay modelo de datos en servidor |
| **Formulario de contacto de cualquier tipo** (Formspree, API Route, Server Action, Resend/Nodemailer) | **Eliminado el 28/07/2026 por decisión del dueño**: canal único WhatsApp. Reintroducirlo cambia la única conversión de la cuenta de Ads |
| **React Hook Form + Zod** | No están en dependencias; además, sin formularios no hay nada que validar |
| **Pages Router** (`pages/`) | Proyecto migrado/consolidado en `app/` |
| **Múltiples landings por servicio** (`/servicios/arenado-*`) | Enfoque actual: `/servicios` + la excepción aprobada `/arenado-de-piletas` |
| **Landing de precios** (`/precios-arenados`) | Eliminada en refactor; precio vía consulta |
| **Micro-sitios por zona** (`/zonas-de-cobertura/...`) | Si se retoma cobertura, preferir **una** página consolidada |
| **Styled-components / CSS modules** masivos | Tailwind es el estándar del repo |
| **jQuery / Bootstrap** | Stack moderno React only |
| **Secrets en el repo** | API keys y credenciales de paneles → env / panel de Vercel, nunca en git |

---

## Scripts npm

```bash
npm run dev      # desarrollo
npm run build    # producción
npm run start    # servidor producción
npm run lint     # ESLint (eslint-config-next)
```

---

## Notas de versión

- `package.json` puede mostrar nombre genérico `nextjs-project`; el producto real es **Arenados Lucho**.
- ESLint config puede estar en versión anterior a Next 16; validar en CI/build si hay warnings.

# Stack y arquitectura

## Resumen

Sitio **marketing + conversión** en **Next.js (App Router)** con **TypeScript**, estilos con **Tailwind CSS** y componentes **shadcn/ui** (Radix). Contenido de casos en **JSON** en el repo. Formularios vía **Formspree**. Analytics con **Google Tag Manager**. Despliegue orientado a **Vercel**.

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

- **Formspree** — `fetch` a `https://formspree.io/f/...` desde `/contacto` (cliente)
- **GTM** — script en `src/app/layout.tsx`, `dataLayer` en formulario, WhatsApp y mail

---

## SSR / CSR / renderizado

| Patrón | Dónde |
|--------|--------|
| **Server Components (default)** | Páginas y layouts sin `"use client"` |
| **Client Components** | Header (Sheet móvil), Hero con video, formulario contacto, acordeón FAQ, filtros casos, botones Wpp/Email, varias secciones de servicios |
| **Metadata estática** | `export const metadata` en páginas |
| **JSON-LD** | Generado en `layout.tsx` (Organization, LocalBusiness) |

No hay API Routes propias documentadas para negocio; el formulario sale directo al navegador → Formspree.

Imágenes: **next/image** donde aplica; hero con **`<video>`** local en `/public/videos/`.

---

## Hosting

- **Vercel** (referencia en `.gitignore` → `.vercel`)
- Build: `npm run build` → `next build`
- Producción: `next start` o plataforma serverless de Vercel

`next.config.js` actual: `reactStrictMode`, `images.domains` vacío (revisar si hace falta dominio remoto).

---

## Base de datos

**No hay base de datos** en el proyecto.

- Contenido editable vía archivos en repo (JSON, TSX).
- Formularios: envío externo (Formspree), sin persistencia en servidor propio.

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
- Estado local en Client Components (`useState` en contacto, filtros, etc.)

---

## Estructura de carpetas (alto nivel)

```
src/
├── app/              # App Router (páginas, layouts, globals.css)
├── components/
│   ├── common/       # Header, Footer, CTAs, WppBtn, EmailBtn
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
- `dataLayer.push` para eventos de conversión alineados a GTM
- Formspree (o el endpoint ya configurado) para formularios
- JSON en `lib/` para listados estáticos (casos)

---

## Qué NO usar (salvo decisión explícita)

| No usar | Motivo |
|---------|--------|
| **CMS headless** nuevo | No está en arquitectura; aumenta complejidad sin necesidad actual |
| **Base de datos** (Prisma, Supabase, etc.) | No hay modelo de datos en servidor |
| **Resend / Nodemailer en API Route** | Hoy el mail de contacto es Formspree + `mailto:` en botones |
| **React Hook Form + Zod** | No están en dependencias directas del app; formulario contacto es controlado simple |
| **Pages Router** (`pages/`) | Proyecto migrado/consolidado en `app/` |
| **Múltiples landings por servicio** (`/servicios/arenado-*`) | Enfoque actual: **una** landing `/servicios` |
| **Landing de precios** (`/precios-arenados`) | Eliminada en refactor; precio vía consulta |
| **Micro-sitios por zona** (`/zonas-de-cobertura/...`) | Si se retoma cobertura, preferir **una** página consolidada |
| **Styled-components / CSS modules** masivos | Tailwind es el estándar del repo |
| **jQuery / Bootstrap** | Stack moderno React only |
| **Secrets en el repo** | API keys, tokens Formspree sensibles → env / panel Vercel |

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

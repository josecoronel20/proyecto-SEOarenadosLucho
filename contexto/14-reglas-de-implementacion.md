# Reglas de implementación

Reglas técnicas concretas para código nuevo y cambios en el repo. Complementan `13-workflow-cursor.md` (proceso) y `.cursorrules` (negocio).

---

## App Router y componentes

### Server vs Client (prioridad)

| Regla | Detalle |
|-------|---------|
| **Default: Server Component** | `page.tsx` y secciones sin estado/eventos **sin** `"use client"` |
| **`"use client"` solo si hace falta** | Estado, handlers, hooks, Radix interactivo, browser APIs (`window`, `sessionStorage`) |
| **No convertir todo a client** | Varios bloques en `servicios/` y `home/` son client sin necesidad (deuda); **no replicar** el patrón en código nuevo |

**`/contacto` es Server Component** desde el 28/07/2026: al eliminar el formulario dejó de necesitar estado, y la única interactividad vive en `WhatsAppCTA` (client). Es el patrón a seguir: la página es servidor, el botón interactivo es un client component chico.

### Server Actions

| Regla | Detalle |
|-------|---------|
| **No usar Server Actions** en este proyecto | No hay `"use server"` ni `actions` en el repo, y no hay datos que enviar al servidor |
| **Conversión** | `window.open` a `wa.me` desde el cliente + `dataLayer.push` (ver `05-formularios-y-conversion.md`) |
| **Si alguna vez hace falta lógica de servidor** | Preferir **Route Handler** (`app/api/.../route.ts`) sobre Server Actions — pero un endpoint de contacto requiere decisión explícita del dueño (ADR-019) |

---

## React y hooks

| Regla | Detalle |
|-------|---------|
| **No `useEffect` innecesario** | No usar para datos que pueden venir del servidor, derivar en render, o manejarse con eventos |
| **`useEffect` aceptable** | Solo en primitivos que lo exigen (ej. `ui/carousel.tsx` — Embla) |
| **No fetch en `useEffect`** para contenido estático | Casos en JSON → Server Component + `getProjectBySlug` |
| **`useCallback`** | Solo en handlers pasados a hijos memoizados o con deps estables (`WppBtn`, `WhatsAppCTA` — OK) |
| **Estado mínimo** | Solo lo necesario (filtros de casos, menú móvil). El estado de los modales lo maneja Radix |

---

## Tamaño y estructura de componentes

| Regla | Límite orientativo |
|-------|-------------------|
| **Un componente = una sección o pieza UI** | Ej. `BloqueDiferencial.tsx`, `TrustBar.tsx` |
| **Evitar archivos gigantes** | &gt; ~200 líneas → dividir (subcomponentes en misma carpeta o `common/`) |
| **Páginas delgadas** | `page.tsx` compone secciones; poca lógica inline |
| **Datos** | JSON en `src/lib/`; helpers en `getProjectBySlug.ts` |

### Carpetas

```
src/app/{ruta}/page.tsx          → composición
src/components/{ruta}/           → secciones de esa página
src/components/common/           → Header, Footer, CTASection, H2, WppBtn
src/components/ui/               → shadcn (no lógica de negocio)
```

---

## Estilos y UI

| Regla | Referencia |
|-------|------------|
| **Tailwind** | Única forma de estilos; no CSS modules masivos |
| **Tokens marca** | `primary-400`…`900`, no hex sueltos |
| **Mobile-first** | Estilos base = móvil; `md:`, `lg:` para desktop |
| **Contenedor** | `container mx-auto px-4 lg:px-8` |
| **CTAs** | `bg-primary-400 hover:bg-primary-500`, `rounded-full` en marketing |
| **`cn()`** | `@/lib/utils` para combinar clases en componentes variables |
| **shadcn** | Reutilizar `Button`, `Card`, `Sheet`, etc. antes de inventar |
| **Iconos** | `lucide-react` únicamente |

Detalle: `10-estilos-y-design-system.md`.

---

## Imágenes y media

| Regla | Detalle |
|-------|---------|
| **`next/image`** | Por defecto; con `sizes` en `fill` |
| **No `unoptimized`** | Salvo motivo documentado (hoy es deuda en carrusel) |
| **No `<img>`** | Salvo migración pendiente (`CasoCard`) |
| **Video hero** | `muted`, `playsInline`, `autoPlay`; evaluar `preload` (ver `11-performance.md`) |
| **Assets** | Rutas bajo `/public/images`, `/public/videos` |

---

## Rutas y enlaces

| Regla | Detalle |
|-------|---------|
| **Solo enlazar rutas que existen** en `src/app/` | Ver `03-rutas-y-paginas.md` |
| **CTA conversión** | `/contacto` como destino principal |
| **Slugs de casos** | Deben coincidir con `idSection` en `projectsInfo.json` |
| **Redirects 301** | Si se elimina una URL usada en Ads, configurar en hosting |

---

## SEO y metadata

| Regla | Detalle |
|-------|---------|
| **`export const metadata`** | En `page.tsx` o `layout.tsx` de la ruta |
| **Un `<h1>` por página** | Evitar múltiples h1 (revisar Header que usa `h1` en logo) |
| **Títulos** | `title` corto + template `| Arenados Lucho` del layout raíz |
| **Copy en español (AR)** | UI y mensajes de error/éxito |

---

## Conversión y tracking

| Regla | Detalle |
|-------|---------|
| **No cambiar el nombre del evento** `contact_whatsapp` sin aviso | `06-tracking-y-analytics.md` |
| **Disparar solo tras confirmar el modal** | Nunca en el `onClick` del botón |
| **No PII en `dataLayer`** | No enviar nombre/email/teléfono en eventos |
| **Número partido y `window.open`** | Nunca contiguo, nunca en un `href`, nunca en el JSON-LD |
| **Un solo `WppBtn` flotante** | Los CTAs inline usan `WhatsAppCTA` |
| **Sin formularios** | No reintroducir formulario ni endpoint de contacto (ADR-019) |

---

## TypeScript

| Regla | Detalle |
|-------|---------|
| **Tipar props** | Interfaces en el mismo archivo o tipos exportados |
| **Evitar `any`** | En map de JSON usar tipos de `getProjectBySlug` o casts acotados |
| **Build limpio** | `npm run build` debe pasar sin errores TS |

---

## Imports y nombres

| Regla | Ejemplo |
|-------|---------|
| **Alias `@/`** | `@/components/...`, `@/lib/utils` |
| **PascalCase** | Componentes y archivos de sección |
| **default export** | Patrón existente en `WppBtn`, `CTASection`, `H2` — respetar por archivo |
| **Eliminar imports no usados** | No dejar `WppBtn` importado sin render |

---

## Qué no introducir sin decisión explícita

- CMS, base de datos, Prisma, Supabase  
- React Hook Form + Zod (no están en deps)  
- Pages Router (`pages/`)  
- Nuevas landings por rubro (`/servicios/arenado-*`)  
- Estilos inline masivos o librerías CSS extra  
- `dangerouslySetInnerHTML` con input de usuario  
- Commits automáticos del agente  

Ver `01-stack-y-arquitectura.md` → “Qué NO usar”.

---

## Checklist antes de dar por terminado

- [ ] ¿El cambio es el mínimo necesario?
- [ ] ¿Server Component si no hay interactividad?
- [ ] ¿Sin `useEffect` evitable?
- [ ] ¿Mobile-first y tokens `primary-*`?
- [ ] ¿Enlaces a rutas reales?
- [ ] ¿`npm run build` OK?
- [ ] ¿Tracking/form intactos o usuario avisado?

---

## Relacionado

- Workflow IA: `13-workflow-cursor.md`
- UI: `04-componentes-ui.md`, `10-estilos-y-design-system.md`
- Bugs: `15-bugs-conocidos.md`

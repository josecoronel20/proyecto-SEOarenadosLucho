# Estilos y design system

Fuente de verdad visual del proyecto. Usar estas convenciones en **código nuevo** para evitar inconsistencias entre páginas.

**Stack:** Tailwind CSS 3 + variables shadcn (`globals.css`) + escala custom `primary` (`tailwind.config.ts`).  
**UI base:** shadcn **new-york** (`components.json`).  
**Iconos:** `lucide-react`.

> **Nota:** No hay **Poppins** ni Google Fonts en el repo. La tipografía es **system UI stack** en `globals.css`.

---

## Colores

### Escala de marca `primary` (usar en marketing y CTAs)

Definida en `tailwind.config.ts` — preferir estos tokens sobre grises genéricos para identidad.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary-50` | `#E8F0F5` | Fondos suaves (contacto, legal) |
| `primary-100` | `#D1E1EB` | Iconos en círculo (`TrustBar`, bloques servicios) |
| `primary-200`–`300` | — | Hover suaves, acentos claros |
| **`primary-400`** | `#4787AF` | Bordes, íconos y acentos claros. ⛔ **NO como fondo de texto blanco** |
| **`primary-500`** | `#18415A` | **Fondo de CTA con texto blanco** |
| `primary-600` | `#133448` | Títulos de sección (`H2`), links |
| `primary-700` | `#0E2736` | Iconos trust, texto sobre claro |
| **`primary-800`** | `#0A1A24` | Footer, bloques FAQ CTA |
| **`primary-900`** | `#050D12` | Overlays hero/video (`from-primary-900`) |

### Tokens shadcn (HSL en `:root`)

En `globals.css`: `--background`, `--foreground`, `--primary`, `--border`, `--destructive`, etc.

| Clase Tailwind | Origen | Cuándo usar |
|----------------|--------|-------------|
| `bg-background` / `text-foreground` | shadcn | Body, cards base |
| `bg-primary` / `text-primary` | shadcn HSL | **Header** logo text, badges default, `Button` variant `default` |
| `bg-card`, `border-border` | shadcn | Cards `ui/card` |

### ⚠️ Doble sistema `primary` (evitar mezclar sin criterio)

| Patrón | Ejemplo | Problema si se mezcla |
|--------|---------|------------------------|
| `primary-400` / `primary-600` | CTAs, `H2`, heroes | Escala hex — **correcto para landings** |
| `text-primary` / `bg-primary` | Header, badges shadcn | Apunta a HSL casi negro (`--primary: 0 0% 9%`) — **no es el azul marca** |

**Regla:** CTAs y títulos de sección → **`primary-400`…`900`**.  
Solo usar `text-primary` / `bg-primary` donde ya está (Header, componentes shadcn) o al migrar shadcn a la escala hex.

### Colores semánticos (fijos)

| Uso | Clases |
|-----|--------|
| WhatsApp | `bg-green-600`, hover sombra |
| Éxito formulario | `green-100`, `green-600` |
| Error formulario | `red-50`, `red-200`, `red-700` |
| Texto cuerpo | `text-gray-700`, `text-gray-800`, `text-gray-900` |
| Fondos sección alternos | `bg-white`, `bg-gray-50` |
| Bordes | `border-gray-200` |
| Texto secundario hero | `text-white/95`, `text-gray-400` (línea auxiliar) |

### Gradientes estándar

| Contexto | Clase |
|----------|--------|
| Hero / video | `bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent` |
| Cards imagen (carrusel) | `from-black/90 via-black/50 to-transparent` |
| CTA section | Igual que hero sobre video |
| Páginas legales/contacto | `bg-gradient-to-br from-primary-50 to-primary-100` |

### Dark mode

- `darkMode: ["class"]` en Tailwind y variables `.dark` en CSS **existen**.
- **No hay** toggle de tema; casi no usar `dark:` salvo legacy (`ServicesSection` `dark:brightness-40`). No añadir más variantes dark sin producto definido.

---

## Spacing

### Contenedor (obligatorio en secciones)

```
container mx-auto px-4 lg:px-8
```

Ancho máximo de contenido narrativo: `max-w-3xl` (texto) · `max-w-4xl` · `max-w-5xl` · `max-w-6xl` según bloque.

### Padding vertical de sección (escala del repo)

| Token | Clases | Uso |
|-------|--------|-----|
| **Compacto** | `py-10 md:py-14` | Bloques servicios (`BloqueDiferencial`, etc.) |
| **Estándar** | `py-12 md:py-16` | Introduction, FAQ hero, casos listado |
| **Amplio** | `py-20` | `ServicesSection`, `ProjectsSection`, `CTASection` base |
| **CTA video** | `py-20 md:py-28 lg:py-32` | `CTASection` |
| **Trust bar** | `py-6 md:py-8` | Debajo del hero |

**Regla nueva:** elegir **una** escala por sección; no inventar `py-24` salvo hero/CTA.

### Gaps internos

| Contexto | Clase |
|----------|--------|
| Stack vertical hero | `gap-4 md:gap-6 lg:gap-8` |
| Grid 2–4 columnas | `gap-6 md:gap-8` |
| Icono + texto | `gap-3 md:gap-4` |
| Botones en fila | `gap-4` |

### Header

- Altura barra: `h-20`
- Hero viewport: `h-[calc(100vh-80px)]` (resta header)

---

## Tipografía

### Familia

```css
/* globals.css — única definición */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
```

No cargar fuentes web salvo decisión explícita (impacto performance).

### Escala de títulos

| Rol | Clases habituales |
|-----|-------------------|
| **H1 hero home** | `text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white` |
| **H1 servicios** | `text-3xl md:text-5xl lg:text-6xl font-bold text-primary-300` |
| **H1 página** (FAQ, etc.) | `text-3xl md:text-4xl font-bold text-gray-900` |
| **H2 sección (`H2`)** | `text-3xl md:text-4xl font-bold text-primary-600` + línea `w-20 h-1 bg-primary-600` |
| **H2 inline servicios** | `text-2xl md:text-3xl font-bold text-gray-900` |
| **H2 CTA video** | `text-3xl md:text-4xl lg:text-5xl font-bold text-white` |
| **Subtítulo hero** | `text-base md:text-lg lg:text-xl` (hasta `xl:text-2xl` en home) |
| **Cuerpo** | `text-sm md:text-base` o `text-base md:text-lg leading-relaxed` |
| **Labels form** | `text-sm font-semibold text-gray-700` |

**Regla:** títulos de sección en páginas marketing → componente **`H2`** o mismas clases que `H2`. No mezclar `text-primary` con `text-primary-600` en el mismo nivel.

### Peso

- Títulos: `font-bold`
- CTAs: `font-semibold`
- Trust / labels: `font-semibold` en labels cortos

### Utilidades

- `text-balance` — disponible en `globals.css`
- `line-clamp-3` — descripciones carrusel
- `drop-shadow-lg` / `drop-shadow-md` — texto sobre video/imagen

---

## Responsive

### Breakpoints (Tailwind default)

| Prefijo | Min width | Uso en proyecto |
|---------|-----------|-----------------|
| (none) | 0 | Mobile first |
| `md:` | 768px | Grids 2 col, texto mayor |
| `lg:` | 1024px | Nav desktop (`hidden lg:flex`), padding `lg:px-8` |
| `xl:` | 1280px | Logo hero más grande |

No se usa `sm:` de forma sistemática; está bien añadirlo solo si hace falta un paso intermedio.

### Patrones layout

| Patrón | Clases |
|--------|--------|
| Nav desktop | `hidden lg:flex` |
| Menú móvil | `Sheet` en Header |
| Grid servicios/casos | `grid-cols-1 md:grid-cols-2` |
| Trust bar | `grid-cols-2 md:grid-cols-4` |
| Carrusel proyectos | `basis-full md:basis-1/2 lg:basis-1/3` |
| CTA FAQ | `flex-col sm:flex-row` |

### Touch / móvil

- Botones CTA: `w-full` en el hero de home; el CTA de WhatsApp de `/contacto` usa `inline-flex` con `px-8 py-4` y `rounded-full`
- WhatsApp: `fixed bottom-6 right-6 z-50`
- `overflow-x: hidden` en `body` (`globals.css`)
- `scroll-behavior: smooth` en `html` y `body`

---

## Componentes visuales

### Botones

| Tipo | Estilo estándar |
|------|-----------------|
| **CTA primario (marketing)** | `bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full` + `px-8 py-4`. ⚠️ **Antes decía `primary-400`: daba 3,8:1 y no llega a AA** |
| **CTA de conversión (WhatsApp)** | Usar las constantes de `src/lib/wpp.ts` (`green-700`, 5,0:1). Nunca `green-600`: da 3,3:1 |
| **CTA sobre blanco (servicios hero)** | `bg-white text-primary-700 rounded-full border-2 border-white/90` |
| **CTA outline FAQ** | `border-2 border-white text-white rounded-full hover:bg-white/10` |
| **shadcn Button** | `variant` default/outline; en cards a menudo `className="w-full bg-primary-400"` |
| **Header contacto** | `bg-primary-400 rounded text-white px-4 py-2` (no full rounded-full) |

**Inconsistencia conocida:** Header usa `rounded`; landings usan `rounded-full`. Nuevos CTAs de conversión → **`rounded-full`** alineado a hero.

### Cards

| Variante | Clases |
|----------|--------|
| shadcn default | `rounded-xl border shadow` (`ui/card`) |
| Caso listado | `rounded-xl border-gray-200 shadow-sm hover:shadow-md` |
| Servicios home | `aspect-video` imagen + overlay `brightness-60` |
| Carrusel proyecto | altura fija `h-[500px] md:h-[600px]`, gradiente inferior |

### Badges

- shadcn `Badge`: `bg-primary/90 text-white` en casos
- Secundario servicios: `variant="secondary"`

### Iconos en caja

```
p-2.5 rounded-full bg-primary-100 text-primary-700   /* TrustBar */
p-2.5 rounded-lg bg-primary-100 text-primary-700     /* Bloques servicios */
w-5 h-5 md:w-6 md:h-6                                /* Tamaño icono */
```

### Overlays multimedia

- Video: `<video autoPlay loop muted playsInline className="object-cover w-full h-full">`
- Imagen hero: `next/image` o `fill` + `object-cover` + `rounded-lg` en contenedor

### Componentes reutilizables (UI)

| Componente | Archivo | Rol visual |
|------------|---------|------------|
| `H2` | `common/H2.tsx` | Título de sección |
| `Button` | `ui/button.tsx` | Acciones, forms |
| `Card` | `ui/card.tsx` | Contacto, servicios, carrusel |
| `Sheet` | `ui/sheet.tsx` | Nav móvil |
| `Accordion` | `ui/accordion.tsx` | FAQ |
| `AlertDialog` | `ui/alert-dialog.tsx` | Confirmación WhatsApp |
| `Carousel` | `ui/carousel.tsx` | Proyectos home |
| `Badge` | `ui/badge.tsx` | Etiquetas tipo obra |

Detalle de uso: `04-componentes-ui.md`.

---

## Anti-patrones (no hacer)

| ❌ Evitar | ✅ Hacer |
|----------|---------|
| Nuevo azul hex suelto (`#2563eb`) | `primary-400` / `primary-600` |
| `text-primary` para títulos de sección | `text-primary-600` o `H2` |
| Padding vertical aleatorio (`py-24`, `py-8`) sin escala | `py-12 md:py-16` o `py-20` |
| Botón inline con 15 clases distintas en cada página | `Button asChild` + clases CTA estándar |
| `dark:` sin tema activo | Solo light |
| `<img>` sin motivo | `next/image` con `sizes` |
| Fuente nueva sin medir LCP | System stack |

---

## Checklist UI antes de merge

- [ ] ¿Colores solo de `primary-*`, grises y semánticos?
- [ ] ¿`container mx-auto px-4 lg:px-8`?
- [ ] ¿Spacing vertical de la tabla de secciones?
- [ ] ¿Título de sección con `H2` o clases equivalentes?
- [ ] ¿CTA primario `primary-400` + `rounded-full`?
- [ ] ¿Responsive probado en 375px y 1024px?

---

## Archivos de referencia

| Archivo | Contenido |
|---------|-----------|
| `tailwind.config.ts` | Escala `primary`, radius shadcn |
| `src/app/globals.css` | Variables CSS, body font, utilities |
| `components.json` | shadcn new-york |
| `src/components/ui/*` | Primitivos |

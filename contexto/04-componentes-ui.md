# Componentes UI

Convenciones de interfaz, componentes reutilizables y reglas para no fragmentar el diseño.

---

## Principios UI del proyecto

- Estética **industrial, sobria, profesional** (ver `.cursorrules`).
- Priorizar **claridad y conversión** sobre decoración.
- Mobile-first; breakpoints estándar Tailwind (`md:`, `lg:`).
- Contenedor: `container mx-auto px-4 lg:px-8`.
- Paleta principal: escala **`primary`** (50–900) + `primary-400` / `primary-500` para CTAs fuertes.

---

## Naming (convenciones)

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componente de sección | `PascalCase`, sufijo descriptivo | `ServiciosHero.tsx`, `AlcanceOperativo.tsx` |
| Componente común | Carpeta `common/`, nombre corto | `WppBtn.tsx`, `CTASection.tsx` |
| Primitivos shadcn | Minúscula en `ui/` | `button.tsx`, `card.tsx` |
| Export | Named para secciones; **default** en `WppBtn`, `EmailBtn`, `CTASection`, `H2` | `export function Header` vs `export default WppBtn` |

**Imports:** alias `@/components/...`, `@/lib/utils`.

**No crear:** `PrimaryButton.tsx`, `WhatsAppButton.tsx` duplicados si ya existe el patrón abajo — extender el componente existente o usar `Button` + variantes.

---

## Capas de componentes

```
ui/           → Primitivos (shadcn + Radix)
common/       → Layout global, CTAs, contacto
home/         → Solo /
servicios/    → Solo /servicios
casos-de-exito/
preguntas-frecuentes/
```

---

## Componentes reutilizables (`common/`)

| Componente | Archivo | Uso |
|------------|---------|-----|
| **Header** | `Header.tsx` | Nav + Sheet móvil |
| **Footer** | `Footer.tsx` | Links, logo, legal |
| **CTASection** | `CTASection.tsx` | Bloque final con video + CTA a `/contacto` |
| **WppBtn** | `WppBtn.tsx` | WhatsApp flotante global (layout) |
| **EmailBtn** | `EmailBtn.tsx` | Mail con tracking (`type` opcional) |
| **H2** | `H2.tsx` | Título de sección centrado con línea decorativa |

### Secciones por página (no importar en otras rutas sin motivo)

- **home/** — `HeroSection`, `TrustBar`, `IntroductionSection`, `ServicesSection`, `ProjectsSection`, `ValueBullets`, …
- **servicios/** — `ServiciosHero`, `BloqueDiferencial`, `AlcanceOperativo`, etc.
- **casos-de-exito/** — `CasosHero`, `CasoCard`, `CasoDetalleContent`, `FiltroTipo`
- **preguntas-frecuentes/** — `FaqAccordion`

---

## Botones y CTAs

### 1. `Button` (shadcn) — base estándar

**Archivo:** `src/components/ui/button.tsx`

**Variantes (`variant`):**

| Variant | Uso en proyecto |
|---------|-----------------|
| `default` | Acciones primarias genéricas (shadcn primary) |
| `outline` | Secundarias con borde |
| `secondary` | Alternativas suaves |
| `ghost` / `link` | Poco usadas |
| `destructive` | Evitar salvo confirmaciones |

**Tamaños (`size`):** `default`, `sm`, `lg`, `icon`

**Patrón navegación:**

```tsx
<Button asChild className="bg-primary-400 hover:bg-primary-500">
  <Link href="/contacto">Contactanos</Link>
</Button>
```

**Usar en:** formulario `/contacto` (submit), acciones en cards si aplica.

---

### 2. `WppBtn` — WhatsApp (canal de conversión)

**Archivo:** `src/components/common/WppBtn.tsx`  
**Montaje:** `layout.tsx` (global, fixed bottom-right).

- Botón verde `bg-green-600`, ícono `MessageCircle`.
- **AlertDialog** de confirmación antes de abrir WhatsApp.
- Evento GTM: `contact_whatsapp`.
- URL: `wa.me` con mensaje precargado.

**Regla:** No duplicar otro botón flotante de WhatsApp. Ajustar solo este archivo.

---

### 3. `EmailBtn` — Email (canal de conversión)

**Archivo:** `src/components/common/EmailBtn.tsx`

**Props:** `type?: 'CTASection' | 'footer' | 'PresupuestoRapido'`

| type | Render |
|------|--------|
| `CTASection` | Botón blanco con borde |
| `footer` | Link en footer |
| `PresupuestoRapido` | Link texto subrayado |

- Evento GTM: `contact_email` con `event_id` único.
- Anti-doble-click: `sessionStorage` + debounce 2 s.

**Regla:** Para mail con tracking, usar `EmailBtn`, no `mailto:` suelto sin evento.

---

### 4. `CTASection` — bloque de cierre

**Archivo:** `src/components/common/CTASection.tsx`

- Video fondo `/videos/ctaVideo.mp4` + overlay `primary-900`.
- CTA principal: **Link estilizado** (no `Button`) → `/contacto`, clases `bg-primary-400 rounded-full`.

Usado en: home (final), detalle de casos.

---

### 5. CTAs hero / FAQ (patrón legacy — no replicar)

En **HeroSection** y **FAQ** hay `<Link className="... bg-primary-400 ...">` inline.

| Hacer en código nuevo | Evitar |
|----------------------|--------|
| `Button asChild` + `Link` | Copiar bloques largos de clases en cada `<Link>` |
| O extraer `ContactLinkButton` en `common/` si se repite mucho | Nuevo `<button>`/`<a>` con estilos únicos |

---

## Primitivos `ui/` (shadcn)

| Componente | Uso en proyecto |
|------------|-----------------|
| `Button` | Formulario, acciones |
| `Card` | Contacto, cards servicios/casos |
| `Sheet` | Menú móvil (Header) |
| `Accordion` | FAQ |
| `AlertDialog` | Confirmación WhatsApp |
| `Badge` | Etiquetas en cards |
| `Carousel` | Carruseles si aplica |

**Agregar nuevos:** `npx shadcn@latest add [component]` (respetar `components.json`).

---

## Variantes de color (Tailwind)

Escala custom en `tailwind.config.ts`:

- `primary-50` … `primary-900`
- CTAs habituales: **`primary-400`**, hover **`primary-500`**
- Fondos oscuros secciones: **`primary-800`**, **`primary-900`**
- Texto marca: **`text-primary-600`**

Variables CSS en `globals.css` para shadcn (`--primary`, `--background`, etc.).

**WhatsApp:** verde fijo `green-600` (solo en `WppBtn`).  
**Éxito formulario:** `green-100` / `green-600` (estado success contacto).

---

## Reglas UI (obligatorias)

### Botones y enlaces

1. **No crear botones inline** con 10+ clases Tailwind repetidas — usar `Button` + `asChild` o componente en `common/`.
2. **Un solo WhatsApp flotante:** `WppBtn` en layout.
3. **CTA principal de conversión** → `/contacto` salvo que el copy diga explícitamente WhatsApp.
4. Mantener **contraste** en CTAs sobre video/imagen (overlay + `drop-shadow` si hace falta).
5. Estados **disabled** en submit: `opacity-50`, `cursor-not-allowed`.

### Layout y secciones

1. Títulos de sección repetidos → **`H2`** con prop `title`.
2. Padding vertical típico: `py-12 md:py-16` o `py-20` en heroes.
3. Fondos alternados: `bg-white`, `bg-gray-50`, `bg-primary-800` para ritmo visual.

### Iconos

- **lucide-react** únicamente (tamaño habitual `h-4 w-4` o `h-5 w-5` en botones).
- `aria-hidden` en iconos decorativos; `aria-label` en botones solo ícono.

### Accesibilidad

- Botón WhatsApp: `aria-label="Abrir WhatsApp"`.
- Formulario: `<label htmlFor>` asociado a cada campo.
- Focus visible en inputs: `focus:ring-2 focus:ring-primary-500`.

### Client vs Server

- `"use client"` solo si hay estado, eventos, hooks, Radix interactivo.
- Secciones estáticas de copy → Server Component (sin directiva).

---

## Checklist antes de un PR de UI

- [ ] ¿Usé `Button` o componente `common/` existente?
- [ ] ¿El CTA lleva a `/contacto` o canal documentado (Wpp/Email)?
- [ ] ¿No dupliqué estilos de `primary-400` en otro archivo sin motivo?
- [ ] ¿Iconos y labels accesibles?
- [ ] ¿Responsive probado en móvil?

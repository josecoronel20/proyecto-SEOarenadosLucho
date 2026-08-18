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
| Export | Named para secciones y `WhatsAppCTA`; **default** en `WppBtn`, `CTASection`, `H2` | `export function Header` vs `export default WppBtn` |

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
| **WppBtn** | `WppBtn.tsx` | WhatsApp flotante global (layout) — **uno solo** |
| **WhatsAppCTA** | `WhatsAppCTA.tsx` | CTA inline de WhatsApp (mensaje parametrizable) |
| **CTASection** | `CTASection.tsx` | Cierre de página: **abre WhatsApp** + bloque "qué nos ayuda saber". Props: `message`, `title`, `subtitle` |
| **ComoTrabajamos** | `ComoTrabajamos.tsx` | Los 3 pasos del servicio. Prop: `className` (fondo) |
| **ZonasCobertura** | `ZonasCobertura.tsx` | Zonas en texto (SEO local sin páginas delgadas). Prop: `className` |
| **FaqCorta** | `FaqCorta.tsx` | FAQ para páginas que no son `/preguntas-frecuentes`. Props: `items`, `title`, `className` |
| **Breadcrumbs** | `Breadcrumbs.tsx` | Migas visibles + JSON-LD |
| **H2** | `H2.tsx` | Título de sección centrado con línea decorativa |

⚠️ **`FaqCorta` no declara el schema.** El `FAQPage` lo declara la **página** que lo monta, con **exactamente las mismas preguntas** que renderiza: Google penaliza el schema que no coincide con lo visible. Los subconjuntos viven en `src/lib/faqs.ts` (`faqsHome`, `faqsServicios`) y se arman con un helper que **lanza en build** si una pregunta no existe.

**Estilos y mensajes de los CTAs de WhatsApp: `src/lib/wpp.ts`** — fuente única de las clases (`WPP_BTN`, `WPP_BTN_LG`, `WPP_BTN_SM`, `WPP_BTN_ON_DARK`) y de los **mensajes pre-cargados por intención** (`WPP_MSG.general/obra/galpon/pileta/contratista/otro`). Usar el mensaje del contexto, no el genérico: el primer mensaje del cliente es lo único que tiene el dueño para cotizar.

> ⚠️ **`EmailBtn` fue eliminado el 28/07/2026** (canal único WhatsApp). No recrearlo: el evento `contact_email` ya no existe.

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

**Usar en:** acciones en cards y navegación a `/contacto`. (No hay formularios en el sitio.)

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

### 3. `WhatsAppCTA` — WhatsApp inline (canal de conversión)

**Archivo:** `src/components/common/WhatsAppCTA.tsx`

**Props:** `message?: string` · `className?: string` · `children: ReactNode`

- Mismo patrón que `WppBtn`: número armado en runtime con `urlWpp()` de `src/lib/wppNumero.ts`, `AlertDialog` de confirmación, `window.open` (nunca `<a href>`).
- Evento GTM: `contact_whatsapp` con `event_label: 'WhatsApp CTA Click'`, **solo tras confirmar**.
- `message` permite pre-cargar el chat según el contexto (dueño de casa vs contratista en la landing de piletas).
- No impone estilos: el diseño del botón viene por `className`.

**Regla:** para cualquier CTA de WhatsApp inline usar este componente. **No** es un segundo botón flotante — el flotante global sigue siendo único (`WppBtn`).

> **`EmailBtn` — ELIMINADO (28/07/2026).** Renderizaba un `mailto:` con evento `contact_email`. Se borró junto con el formulario al pasar a canal único WhatsApp; además era código muerto (no se renderizaba en ninguna página). No recrearlo.

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
| `Button` | Acciones y navegación |
| `Card` | Cards de servicios/casos |
| `Sheet` | Menú móvil (Header) |
| `Accordion` | FAQ (general y de piletas) |
| `AlertDialog` | Confirmación WhatsApp (`WppBtn`, `WhatsAppCTA`) |
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
**Verde de WhatsApp:** `green-600` / hover `green-700` (botón flotante y CTAs inline), `green-100` de fondo para el ícono en `/contacto`.

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

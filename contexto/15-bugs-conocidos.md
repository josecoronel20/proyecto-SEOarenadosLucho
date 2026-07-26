# Bugs conocidos

Lista viva. Al corregir un ítem, cambiar **Estado** a `Corregido`.

**Última revisión:** mayo 2026 — corrección masiva de enlaces, SEO, formulario y performance.

---

## Corregidos (mayo 2026)

### Enlaces 404 (`/arenado-industrial`, `/arenado-particular`, JSON)

**Estado:** Corregido  
**Cambio:** `ServicesSection` → `/servicios` y `/contacto`; `projectsInfo.json` → `/casos-de-exito/{slug}`; fallback carrusel → `/casos-de-exito`.

### `/terminos-y-condiciones`

**Estado:** Corregido  
**Cambio:** Nueva página `src/app/terminos-y-condiciones/page.tsx`.

### `/presupuesto-rapido` en `HeroSecondaryCTA`

**Estado:** Corregido  
**Cambio:** Link → `/contacto` (componente sigue sin montarse en home).

### `ServicesSection` ausente en home

**Estado:** Corregido  
**Cambio:** Import y render en `src/app/page.tsx` (después de `ProjectsSection`).

### Campo `contact` sin `required` HTML

**Estado:** Corregido  
**Cambio:** `required` en input + trim en submit.

### Imports no usados (`CTASection`, `Footer`)

**Estado:** Corregido  
**Cambio:** Eliminados imports de `WppBtn` / `EmailBtn`.

### Imágenes `unoptimized`

**Estado:** Corregido  
**Cambio:** Removido en `ProjectsSection` y `CasoDetalleContent`; `CasoCard` migrado a `next/image`.

### Video hero `preload="auto"`

**Estado:** Corregido  
**Cambio:** `preload="metadata"` en `HeroSection` y `CTASection`.

### JSON-LD con copy “piscinas”

**Estado:** Corregido  
**Cambio:** Descriptions industrial en `layout.tsx`.

### Sin `sitemap.xml` / `robots.txt`

**Estado:** Corregido  
**Cambio:** `src/app/sitemap.ts`, `src/app/robots.ts`.

### Doble `<h1>` en Header

**Estado:** Corregido  
**Cambio:** Marca en header usa `<p>` con estilos; un `h1` por página en heroes.

### `handleClose` en MobileNav (histórico)

**Estado:** Corregido

### `CTAActionButtons` sin `className` (histórico)

**Estado:** Corregido (componente ya no existe en repo)

---

## Abiertos / seguimiento

### `HeroSecondaryCTA` huérfano

**Impacto:** Código muerto si no se usa.  
**Estado:** Abierto (bajo)  
**Archivos:** `src/components/home/HeroSecondaryCTA.tsx`  
**Fix sugerido:** Montar en home o eliminar archivo.

### Assets en `public/` vacíos en repo local

**Impacto:** En dev local faltan videos/imágenes si no están en deploy.  
**Estado:** Abierto (entorno)  
**Fix:** Asegurar assets en Vercel / commitear o documentar en `19-deploy-y-entornos.md`.

### Validación servidor / spam avanzado

**Impacto:** Solo validación cliente + honeypot Formspree.  
**Estado:** Mejorado (honeypot `_gotcha` en contacto); reCAPTCHA sigue opcional.  
**Archivos:** `src/app/contacto/page.tsx`

---

## Cómo agregar un bug

```markdown
## Título corto

**Impacto:** …

**Estado:** Abierto | En progreso | Corregido

**Archivos afectados:**
- `ruta/archivo.tsx`

**Fix sugerido:** …
```

---

## Relacionado

- Deuda: `16-deuda-tecnica.md`
- Rutas: `03-rutas-y-paginas.md`
- Performance: `11-performance.md`

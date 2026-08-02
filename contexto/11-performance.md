# Performance

Objetivos, problemas detectados en código, patrones de assets/scripts y cómo obtener **métricas reales** en producción.

**Dominio:** `https://www.arenadoslucho.com`  
**Build local (referencia):** Next.js **16.1.6** (Turbopack) — `npm run build` OK, **12 rutas** estáticas/SSG (mayo 2026).

---

## Objetivos

| Métrica | Objetivo (mobile) | Prioridad |
|---------|-------------------|-----------|
| **LCP** | &lt; 2,5 s | Alta — hero con video/imagen |
| **INP** | &lt; 200 ms | Media — muchos client components |
| **CLS** | &lt; 0,1 | Media — videos, imágenes, carrusel |
| **TTFB** | &lt; 800 ms | Hosting (Vercel) + HTML estático |
| **Peso inicial home** | Minimizar video + JS cliente | Alta |

Alineado a `.cursorrules`: mobile-first, velocidad de carga, conversión (LCP lento = menos leads).

---

## Métricas reales (cómo medirlas)

No hay métricas fijas commiteadas en el repo (cambian con deploy, red y assets en `public/`).

### Herramientas recomendadas

| Herramienta | Qué mide |
|-------------|----------|
| [PageSpeed Insights](https://pagespeed.web.dev/?url=https://www.arenadoslucho.com) | LCP, INP, CLS, oportunidades |
| Chrome DevTools → Lighthouse | Misma página, modo mobile |
| Vercel Analytics / Speed Insights | Si está habilitado en el proyecto |
| GA4 | No sustituye CWV; solo comportamiento |

### Plantilla para registrar mediciones

Actualizar tras cada deploy importante:

| Fecha | URL | Estrategia | Performance | LCP | INP | CLS | Notas |
|-------|-----|------------|-------------|-----|-----|-----|-------|
| _pendiente_ | `/` | Mobile | — | — | — | — | Medir con PSI |
| _pendiente_ | `/servicios` | Mobile | — | — | — | — | |
| _pendiente_ | `/contacto` | Mobile | — | — | — | — | Sin video hero |

> En el entorno de desarrollo del agente no fue posible resolver el dominio ni la API de PSI (rate limit). **Ejecutar PSI manualmente** y pegar filas en la tabla.

### Build (métricas de compilación — local)

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully ~20s
✓ 12 páginas generadas (estáticas + 4 slugs casos)
○ Static: /, /servicios, /contacto, /casos-de-exito, /preguntas-frecuentes, …
● SSG: /casos-de-exito/[slug] × 4
```

- **Ventaja:** HTML pre-renderizado; buen TTFB teórico.
- **No muestra** peso de JS por ruta en el log actual; usar `@next/bundle-analyzer` si se necesita detalle.

---

## Problemas actuales (detectados en código)

### Críticos (impacto LCP / peso)

| Problema | Ubicación | Efecto |
|----------|-----------|--------|
| **Videos MP4 (peso del archivo)** | `HeroSection`, `CTASection` | `preload` pasó a `metadata` (mayo 2026); comprimir archivos sigue pendiente |
| **Assets no versionados en git** | `public/` casi vacío en repo (`.gitkeep`) | En local no se reproduce prod; en prod el peso depende de `/videos/*.mp4` e imágenes |

### Medios

| Problema | Ubicación | Efecto |
|----------|-----------|--------|
| **`<img>` nativo** | `CasoCard.tsx` (`loading="lazy"`) | Sin `sizes`/formatos modernos; inconsistente con `next/image` |
| **Sin `priority` en hero home** | Logo `Image` en hero sin `priority` | Logo puede competir con video por LCP |
| **`priority` solo en servicios** | `ServiciosHero.tsx` | Correcto en `/servicios`; home queda peor |

### JavaScript / hidratación

| Problema | Ubicación | Efecto |
|----------|-----------|--------|
| **Muchos `"use client"`** | Hero, Header, Footer, carrusel, `WppBtn`/`WhatsAppCTA`, FAQ accordion | Más JS hidratado que un sitio mostly-static |
| **Carrusel + embla** | `ProjectsSection` + `ui/carousel` | JS extra en home |
| **`HeroSecondaryCTA` sin montar** | `components/home/` | Código muerto (no entra al bundle, pero ensucia) |

### Red / terceros

| Problema | Ubicación | Efecto |
|----------|-----------|--------|
| **GTM en `<head>`** | `layout.tsx` | JS adicional antes de interactividad; necesario para negocio |
| **Solo GTM tiene `preconnect`** | `layout.tsx` | Suficiente: es el único tercero que el sitio carga |

### Configuración

| Problema | Ubicación | Efecto |
|----------|-----------|--------|
| **`images.domains: []`** | `next.config.js` | OK para archivos locales; si imágenes son URLs externas en JSON, hay que whitelist |
| **Sin `optimizePackageImports`** / analyzer | — | Oportunidad de optimización futura |

---

## Imágenes

### Uso actual de `next/image`

| Archivo | `priority` | `sizes` | `unoptimized` |
|---------|------------|---------|---------------|
| `HeroSection` (logo) | No | — | No |
| `ServiciosHero` | **Sí** | `100vw` | No |
| `ServicesSection` | No | `(max-width: 768px) 100vw…` | No |
| `ProjectsSection` | No | Sí | No |
| `Header` / `Footer` | No | — | No |
| `CasoDetalleContent` | No | — | No |

### Rutas de assets referenciadas

```
/images/logo-solo-blanco.png
/images/logo-solo-azul.png
/images/services/arenadoIndustrial.PNG
/images/services/arenadoParticular.JPG
/videos/heroVideo.mp4
/videos/ctaVideo.mp4
```

(+ URLs en `projectsInfo.json` para carrusel/casos si existen)

### Reglas recomendadas

1. **Hero above-the-fold:** una sola cosa con `priority` (imagen poster **o** video optimizado, no ambos pesados).
2. **Quitar `unoptimized`** en carrusel; servir WebP/AVIF vía Next Image.
3. **Siempre `sizes`** en `fill` / responsive.
4. **Unificar:** no mezclar `<img>` y `next/image` sin motivo.
5. Comprimir PNG/JPG fuente; preferir **WebP** en `public/`.

---

## Lazy loading

| Recurso | Comportamiento actual | Recomendación |
|---------|----------------------|---------------|
| `next/image` (default) | Lazy excepto `priority` | `priority` solo LCP; resto lazy |
| `CasoCard` `<img>` | `loading="lazy"` | Migrar a `next/image` |
| Videos hero/CTA | **Autoplay + sin lazy** | `preload="metadata"` o poster estático; cargar video bajo demanda |
| Componentes client | Se hidratan al cargar ruta | Mantener server components donde no haya estado |
| FAQ / below fold | Accordion client | Aceptable; no bloquea LCP si hero es el cuello |

### Patrón deseado para video CTA (futuro)

```tsx
// Poster estático LCP + video lazy o sin preload en mobile
<video preload="none" poster="/images/cta-poster.webp" … />
```

---

## Scripts

### En `layout.tsx` (todas las páginas)

| Script | Bloqueante | Notas |
|--------|------------|-------|
| `window.dataLayer = …` | Inline, pequeño | Necesario antes GTM |
| GTM snippet | Async load `gtm.js` | `GTM-W63ZV9D9` |
| JSON-LD | Inline | SEO, bajo costo |

### Por página (client bundles)

| Página | Principales dependencias client |
|--------|--------------------------------|
| `/` | Hero (video), TrustBar, ProjectsSection (carousel), ServicesSection, CTASection (video) |
| `/servicios` | Varios bloques client + CTASection |
| `/contacto` | Formulario completo client |
| Global | Header, Footer, WppBtn (AlertDialog) |

### Terceros (vía GTM, no en bundle Next)

- GA4, Google Ads, posible Meta Pixel — ver `06-tracking-y-analytics.md`

**Regla:** no añadir más scripts inline en `layout` sin medir impacto; preferir tags en GTM con disparadores acotados.

---

## Optimizaciones por prioridad

### P0 (antes de campañas Ads pesadas)

1. Comprimir / acortar `heroVideo.mp4` y `ctaVideo.mp4`; o sustituir LCP por **imagen poster** en mobile.
2. Cambiar hero `preload="auto"` → `metadata` o `none` en móvil.
3. Quitar `unoptimized` en `ProjectsSection`.
4. Añadir `priority` al recurso LCP real (poster o logo, no video si se pospone video).

### P1

5. Convertir assets a WebP; dimensionar anchos máximos (ej. 1920px hero).
6. Migrar `CasoCard` a `next/image`.
7. Limpiar imports muertos en `CTASection`.
8. Reducir client boundaries (evaluar Server Components en secciones estáticas de servicios).

### P2

9. `next.config`: `images.formats: ['image/avif', 'image/webp']` (Next 16 defaults si aplica).
10. Bundle analyzer en CI opcional.
11. Vercel Speed Insights en proyecto.
12. `loading.tsx` más liviano (hoy texto "Loading...").

---

## Páginas y riesgo performance

| Ruta | Riesgo | Motivo |
|------|--------|--------|
| `/` | **Alto** | 2 videos + carrusel + muchas imágenes |
| `/servicios` | **Alto** | Hero image priority + CTASection video |
| `/casos-de-exito` | Medio | Listado + imágenes opcionales |
| `/casos-de-exito/[slug]` | Medio–alto | CTASection video al pie |
| `/contacto` | **Bajo** | Sin video; form client |
| `/preguntas-frecuentes` | **Bajo** | Contenido estático + accordion |
| `/politica-de-privacidad` | **Bajo** | Card estática |

---

## Qué NO romper al optimizar

1. **GTM / dataLayer** — orden de carga en `layout.tsx`.
2. **Autoplay video** — requiere `muted` + `playsInline` (iOS); si se quita autoplay, revisar diseño.
3. **Formulario contacto** — no bloquear thread principal con validación pesada.
4. **WhatsApp flotante** — mantener `z-50` sin forzar repaints globales.

---

## Checklist post-cambio performance

- [ ] PSI mobile en `/` y `/servicios` (anotar en tabla de métricas).
- [ ] LCP element identificado en DevTools → Performance.
- [ ] Videos &lt; recomendado (~2–4 MB cada uno como máximo orientativo).
- [ ] `npm run build` sin errores.
- [ ] No regresión visual en hero/CTA.
- [ ] Conversión GTM sigue disparando (no relacionado a CWV pero crítico negocio).

---

## Relacionado

- Estilos y assets visuales: `10-estilos-y-design-system.md`
- Scripts GTM: `06-tracking-y-analytics.md`
- Stack: `01-stack-y-arquitectura.md`

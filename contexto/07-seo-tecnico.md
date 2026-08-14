# SEO técnico

Metadata, indexación, structured data y reglas para no degradar posicionamiento al cambiar páginas.

> ✅ **Pivote de copy + Fases A/C/E aplicadas (26/07/2026):** el sitio ya NO promete Sa3/ISO 8501/metal blanco/granallado; suma `canonical` por ruta, JSON-LD `@graph` completo (LocalBusiness/WebSite/FAQPage/Service/BreadcrumbList/CreativeWork), OG por página con imagen y `<h1>` semánticos. Las tablas de abajo están actualizadas al estado post-pivote (fuente de verdad = el código). Ver `marketing/08-bitacora.md` y el 🗺️ Roadmap al final de este archivo.

**Dominio canónico:** `https://www.arenadoslucho.com`  
**Constante en código:** `SITE_URL` en `src/app/layout.tsx`

---

## Metadata (Next.js Metadata API)

### Layout raíz — `src/app/layout.tsx`

Aplica a todas las rutas salvo override en `page.tsx` / `layout.tsx` hijo.

| Campo | Valor |
|-------|--------|
| `metadataBase` | `https://www.arenadoslucho.com` |
| `title.default` | `Arenado industrial profesional en Buenos Aires \| Arenados Lucho` |
| `title.template` | `%s \| Arenados Lucho` |
| `description` | Arenado profesional y preparación de superficies… Presupuesto rápido y atención por WhatsApp. |
| `keywords` | arenado, sandblasting, preparación de superficies, arenado industrial, arenado particular, Buenos Aires |
| `icons` | `/favicon.png` |
| `openGraph.type` | `website` |
| `openGraph.locale` | `es_AR` |
| `openGraph.url` | `SITE_URL` (home) |
| `openGraph.siteName` | `Arenados Lucho` |
| `twitter.card` | `summary_large_image` |
| `robots` | `index: true`, `follow: true`; `googleBot` con `max-image-preview: large` |

**Home (`/`):** no define `metadata` propia → usa `title.default` y `description` del layout.

### Metadata por ruta (títulos finales con template)

| Ruta | Archivo | `title` (segmento) | Title renderizado (~) |
|------|---------|-------------------|------------------------|
| `/servicios` | `app/servicios/page.tsx` | `Servicios de arenado industrial` | Servicios de arenado industrial \| Arenados Lucho |
| `/casos-de-exito` | `app/casos-de-exito/layout.tsx` | `Casos de arenado en Buenos Aires y AMBA` | Casos de arenado en Buenos Aires y AMBA \| Arenados Lucho |
| `/casos-de-exito/[slug]` | `app/casos-de-exito/[slug]/page.tsx` | `project.title` (dinámico) | {título caso} \| Arenados Lucho |
| `/preguntas-frecuentes` | `app/preguntas-frecuentes/page.tsx` | `Preguntas frecuentes` | Preguntas frecuentes \| Arenados Lucho |
| `/contacto` | `app/contacto/layout.tsx` | `Contacto y presupuesto de arenado` | Contacto y presupuesto de arenado \| Arenados Lucho |
| `/politica-de-privacidad` | `app/politica-de-privacidad/page.tsx` | `Política de Privacidad` | Política de Privacidad \| Arenados Lucho |
| `/terminos-y-condiciones` | `app/terminos-y-condiciones/page.tsx` | `Términos y Condiciones` | Términos y Condiciones \| Arenados Lucho |

### Descriptions por ruta

| Ruta | `description` |
|------|----------------|
| `/servicios` | Arenado industrial y en obra en Buenos Aires: estructuras, tanques, fachadas y piletas listas para pintar o revestir. ~100 m²/día, coordinación en obra. |
| `/casos-de-exito` | Casos de éxito de arenado: objetivo, retos, solución y resultado final. Estructuras, tanques, fachadas y piletas en Buenos Aires y AMBA. |
| `/casos-de-exito/[slug]` | `project.overview` (dinámico desde `projectsInfo.json`) |
| `/preguntas-frecuentes` | Respuestas simples: plazos, polvo, trabajo in situ, piletas y para qué queda lista la superficie. Buenos Aires y AMBA. |
| `/contacto` | Enviá tu solicitud con nombre, teléfono y descripción… WhatsApp. |
| `/politica-de-privacidad` | Política de Privacidad… Protección de datos personales en Buenos Aires. |
| `/terminos-y-condiciones` | Términos y condiciones de uso del sitio web de Arenados Lucho. |

### Slugs estáticos de casos (`generateStaticParams`)

Desde `src/lib/projectsInfo.json` → `idSection`:

- `nave-ferroviaria`
- `estructura-naval`
- `pasarela-urbana`
- `tanque-industrial`
- `arenado-pileta`

URLs: `/casos-de-exito/{idSection}`

---

## Canonical

| Estado | Detalle |
|--------|---------|
| **Explícito en código** | ✅ Sí (Fase A, 26/07): `alternates.canonical` (relativo) en cada ruta — home, servicios, casos, casos/[slug], faq, contacto, legales. |
| **Comportamiento Next.js** | Con `metadataBase`, el canonical relativo resuelve a absoluto con `www`. Verificado en el HTML: `<link rel="canonical" href="https://www.arenadoslucho.com/ruta">`. |
| **Por qué importa** | El tráfico de Google Ads llega con UTMs; el canonical evita que las variantes con querystring se indexen como URLs distintas. |
| **Regla** | Una sola URL pública por contenido: `www` (= `SITE_URL`). |

**No romper:** no cambiar `metadataBase` sin redirecciones 301 en Vercel/DNS.

> **Migración (25/07/2026):** dominio definitivo `www.arenadoslucho.com` en Vercel (antes Framer; `.com.ar` jamás resolvió). Tras cada deploy verificar que `/robots.txt` y `/sitemap.xml` respondan **200** con dominio `.com` — en el primer deploy daban 404. Checklist completo: `marketing/01-migracion-y-dominio.md`.

---

## Sitemap

| Estado | Detalle |
|--------|---------|
| **En repo** | `src/app/sitemap.ts` → `/sitemap.xml` |
| **Incluye** | Rutas estáticas + `/casos-de-exito/{slug}` vía `getAllSlugs()` |
| **URL base** | `https://www.arenadoslucho.com` |

---

## Robots

### En metadata (layout raíz)

```ts
robots: {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
}
```

Todas las páginas hijas **heredan** indexación salvo que definan `robots: { index: false }`.

### `robots.txt`

| Estado | Detalle |
|--------|---------|
| **En repo** | `src/app/robots.ts` → `/robots.txt` |
| **Sitemap** | `https://www.arenadoslucho.com/sitemap.xml` |
| **Reglas** | `allow: /` para todos los user agents |

### Política sugerida por tipo de página

| Página | Indexar |
|--------|---------|
| Home, servicios, casos, FAQ, contacto | Sí |
| Política de privacidad | Sí (confianza/legal); prioridad SEO baja |
| 404 / rutas rotas | No (no deben existir enlaces internos) |

---

## Schema (JSON-LD)

**Fuente de datos:** `src/lib/siteConfig.ts` (`BUSINESS`, `SITE_URL`, `BUSINESS_ID`, `OG_IMAGE`, helper `og()`).
**Refactorizado a `@graph` (Fase C, 26/07/2026):** un solo objeto `{ "@context", "@graph": [...] }` con entidades enlazadas por `@id`. Sin promesas técnicas en el copy.

### Global (en `layout.tsx`, aplica a todas las rutas)

| Nodo | Detalle |
|------|---------|
| `WebSite` | `@id` `{SITE_URL}/#website`, `inLanguage: es-AR`, `publisher` → negocio |
| `LocalBusiness` + `HomeAndConstructionBusiness` | `@id` `{SITE_URL}/#business`; `telephone` (= número de `WppBtn`), `email`, `logo`, `image` (fotos reales de obra), `openingHours`, `areaServed` = City Buenos Aires + AdministrativeArea "Gran Buenos Aires (AMBA)", `contactPoint` con teléfono/email |

### Por página

| Ruta | Schema |
|------|--------|
| `/preguntas-frecuentes` | `FAQPage` (14 Q&A desde `src/lib/faqs.ts`) |
| `/servicios` | 2× `Service` (obra/industrial · piletas/particular, `provider` → negocio) + `BreadcrumbList` |
| `/casos-de-exito/[slug]` | `BreadcrumbList` + `CreativeWork` (con `image` del caso) |
| Todas | `openGraph`/`twitter` con imagen (helper `og()`; per-caso = foto del caso) |

### Pendiente en schema (requiere dato real — NO inventar)

- `geo` (lat/long), `sameAs` (Google Business Profile / redes), `priceRange`.
- `aggregateRating` / `review`: **solo** con reseñas reales (inventarlas viola las guías de Google).
- **NO** agregar `SearchAction` (no hay buscador on-site en el sitio).

---

## Indexación y rutas

### Rutas indexables (objetivo)

| URL | Prioridad SEO |
|-----|----------------|
| `/` | Alta |
| `/servicios` | Alta |
| `/casos-de-exito` | Media-alta |
| `/casos-de-exito/*` | Media (long-tail por proyecto) |
| `/preguntas-frecuentes` | Media (objeciones + long-tail) |
| `/contacto` | Media (conversión; menos keywords) |
| `/politica-de-privacidad` | Baja |

### Rutas rotas (daño SEO si se enlazan)

Documentadas en `03-rutas-y-paginas.md`:

- `/arenado-industrial` ← `ServicesSection` home
- `/arenado-particular` ← `ServicesSection` home
- `/terminos-y-condiciones` ← Footer

**Regla:** corregir enlaces o crear páginas/redirects 301 antes de campañas SEO.

### HTML semántico

- `lang="es"` en `<html>` (`layout.tsx`).
- Un `<h1>` principal por página (heroes).
- Secciones con `<main>`, `<section>` donde aplica.

### Imágenes y assets

- `next.config.js` (Fase A): `images.formats` = AVIF + WebP; `poweredByHeader:false`; `headers()` de seguridad. Imágenes estáticas en `/public`.
- OG: `openGraph.images` / `twitter.images` definidos (default = foto real vía `siteConfig.OG_IMAGE`; per-caso = foto del caso). **Ideal pendiente:** imagen branded 1200×630 dedicada.
- **Assets pendientes:** favicon 293 KB → regenerar ~10 KB; borrar ~7 MB de JPGs sin usar en `arenadoParticular/Piezas/`; comprimir `heroVideo.mp4` (~25 MB, Fase B).

### Velocidad / mobile

- `format-detection: telephone=no` (evita auto-link de tel en iOS si no hay `tel:`).
- Mobile-first en componentes (ver `.cursorrules`).

---

## Reglas SEO del proyecto

### Contenido y posicionamiento

1. **Enfoque "arenado sin vueltas"** (obra, restauración, PYMEs in situ, piletas, limpieza) — **PROHIBIDO** prometer Sa3/ISO 8501/metal blanco/granallado en metadata, copy o schema (decisión del dueño 26/07/2026; ver `.cursorrules`). Piletas y PYMEs **SÍ son parte del negocio** y del copy — la regla anterior de "no diluir con piscinas/particular" queda anulada.
2. **Una intención principal por URL** (servicios = capacidad; casos = prueba; FAQ = objeciones).
3. **Títulos únicos** por ruta; usar `title` corto + template `| Arenados Lucho`.
4. **Descriptions** 150–160 caracteres aprox.; incluir ubicación y diferencial técnico cuando aplique.

### Técnico

1. No quitar `metadataBase` ni `robots.index: true` del layout sin motivo.
2. No publicar contenido duplicado en dos URLs sin canonical o 301.
3. Al añadir páginas: `export const metadata` + entrada en sitemap (cuando exista).
4. Casos nuevos: actualizar `projectsInfo.json`, `idSection` único, `generateStaticParams` regenera rutas en build.
5. Enlaces internos solo a rutas que existen.

### Conversión vs SEO

- CTA a `/contacto` y WhatsApp no compiten con keywords en `<title>`; el title sigue siendo informativo.
- Formulario indexable en `/contacto` está bien; el valor SEO está en otras landings.

### Alineación con `.cursorrules`

- Priorizar páginas que reducen objeciones (tiempos, norma, polvo, logística).
- Evitar thin content; cada sección importante debe aportar prueba técnica o social.

---

## Checklist al publicar cambios SEO

- [ ] ¿`title` y `description` únicos en la ruta nueva?
- [ ] ¿Slug de caso coincide con `idSection` en JSON?
- [ ] ¿No hay enlaces a rutas inexistentes?
- [ ] ¿Schema/copy industrial coherente si se tocó `layout.tsx`?
- [ ] ¿Build OK y URLs de casos responden 200?
- [ ] (Cuando exista) ¿URL en `sitemap.ts`?

---

## Pendientes técnicos (resumen)

| Ítem | Prioridad |
|------|-----------|
| ~~`app/sitemap.ts`~~ | Hecho |
| ~~`app/robots.ts`~~ | Hecho |
| ~~Verificar `/robots.txt` y `/sitemap.xml`~~ — ✅ resuelto 25/07 (PR #1): ambos 200 con dominio `.com` | Hecho |
| ~~`openGraph.images`~~ — ✅ Fase A/E (default + per-caso; falta imagen branded 1200×630) | Hecho |
| ~~FAQ `FAQPage` JSON-LD~~ — ✅ Fase C | Hecho |
| ~~Canonical explícito por ruta~~ — ✅ Fase A | Hecho |
| Reestructura de URLs + redirects 301 (legacy + apex→www) | Alta (Fase D) |
| Comprimir `heroVideo.mp4` (~25 MB) | Alta (Fase B) |
| `<main>` landmark, `<h1>` semánticos | Hecho (Fase E) |
| ~~Enlaces rotos industriales / términos~~ | Hecho (mayo 2026) |
| ~~JSON-LD industrial~~ | Hecho |

---

## 🗺️ Roadmap de optimización SEO — rediseño profundo

> **Construido el 26/07/2026** a partir de una **auditoría del código real** (8 lentes: indexabilidad, metadata/headings, schema, arquitectura/enlazado, performance/CWV, contenido, SEO local, accesibilidad). Este roadmap **expande y reemplaza** la tabla "Pendientes técnicos" de arriba.
>
> **Alcance decidido con el dueño (26/07):** **rediseño profundo** (IA, componentes, plantillas y **árbol de URLs con redirects 301**), **solo técnico / on-page**. La **creación de contenido** (blog, guías, nuevas landings por keyword) queda **FUERA** de este roadmap → vive en `marketing/04-plan-de-contenidos.md` y `marketing/ROADMAP.md`.

### Reglas del roadmap (no romper)

1. **Invariantes intocables** (`06-tracking-y-analytics.md`): el evento **`contact_whatsapp`** (el único vigente), disparado solo tras confirmar el `AlertDialog`; `GTM-W63ZV9D9`; init de `dataLayer` antes de GTM; el número partido en 2 strings y fuera del HTML; un solo `WppBtn` global; **sin PII** en el payload.
2. **No romper rutas que usa Google Ads.** Todo cambio de URL va con **301** y se monitorea en Search Console (cobertura + inspección de URL).
3. `SITE_URL` sincronizado en `layout.tsx`, `sitemap.ts`, `robots.ts`.
4. **Sin promesas técnicas** (Sa3/ISO 8501/metal blanco/perfil de anclaje/granallado) en copy, metadata ni schema (`.cursorrules`).
5. Sin CMS/DB/Server Actions/fuentes web nuevas sin decisión explícita (`CLAUDE.md`).
6. **Un cambio grande por vez**, en **branch + Preview de Vercel** antes de mergear a `main`, y registrado en `marketing/08-bitacora.md`. Commits solo a pedido del dueño.

### Cómo se prioriza

Impacto (SEO + conversión) × esfuerzo. **Severidad:** 🔴 crítico · 🟠 alto · 🟡 medio · ⚪ bajo. **Esfuerzo:** S (rápido) · M (medio) · L (grande). Recomendación: ejecutar por fases de A→G; A y B primero (mejor relación impacto/riesgo).

---

### Fase A — Fundaciones técnicas (quick wins, bajo riesgo)

| Ítem | Sev | Esf | Qué hacer (archivos) | Riesgo |
|------|-----|-----|----------------------|--------|
| Canonical self-referente | 🟡 | S | Agregar `alternates: { canonical }` por ruta (relativo, Next lo resuelve contra `metadataBase`). Clave por el tráfico de Ads con UTMs. `layout.tsx`, cada `page.tsx`/`layout.tsx`, `[slug]/page.tsx` = `/casos-de-exito/${slug}` | Bajo: el canonical debe apuntar a `www` (= `SITE_URL`) para no desindexar rutas de Ads |
| Quitar `keywords` meta obsoleta | ⚪ | S | Eliminar `keywords` de `layout.tsx:17-18` (descontinuada por Google; además con términos del posicionamiento viejo) | Ninguno |
| `next.config` moderno | 🟡 | S | `images: { formats: ['image/avif','image/webp'] }`; quitar `domains: []` (deprecado en Next 16); `poweredByHeader: false`; `async headers()` con headers de seguridad básicos (`X-Content-Type-Options`, `Referrer-Policy`, `HSTS`). `next.config.js` | Bajo: **NO** poner CSP estricta (rompería GTM/googletagmanager) |
| `theme-color` + viewport | ⚪ | S | `export const viewport = { themeColor: '#18415A' }` en `layout.tsx`; opcional `app/manifest.ts` | Ninguno |
| 404 / error en español | ⚪ | S | `not-found.tsx` está en inglés ("Not Found", `<h2>`, `text-blue-600`) y `error.tsx` también → traducir a es-AR, usar `<h1>`, sumar CTAs a `/servicios` y WhatsApp | Ninguno |
| Aligerar favicon | 🟡 | S | `public/favicon.png` pesa **293 KB** y carga en TODAS las páginas → regenerar a 32/48px (~5-15 KB) manteniendo la ruta. Borrar `public/images/favicon.png` (duplicado sin usar) | Ninguno |
| Borrar assets muertos | 🟡 | S | ~7 MB de JPGs HDR sin referenciar en `public/images/services/arenadoParticular/Piezas/IMG_20250531_*.JPG` (grep = 0 usos) | Confirmar 0 referencias antes de borrar |

### Fase B — Performance / Core Web Vitals (impacto directo en Ads y ranking)

| Ítem | Sev | Esf | Qué hacer (archivos) | Riesgo |
|------|-----|-----|----------------------|--------|
| **Hero video 25 MB** | 🔴 | M | `public/videos/heroVideo.mp4` ≈ **24,9 MB** en autoplay/loop sin `poster` en el hero de la home (= landing #1 de Ads). Re-encodear a ~720p, `<2-3 MB` (H.264 + opc. WebM/AV1); agregar `poster` (JPG/WebP ~30-80 KB) para pintado inmediato; en mobile `preload="none"` o solo poster. Igual a `ctaVideo.mp4`. `HeroSection.tsx`, `CTASection.tsx` | Above-the-fold de Ads: QA que autoplay muted + `playsInline` siga OK en iOS; mantener ruta del archivo |
| Imágenes fuente pesadas | 🟠 | M | `public/images/services/arenadoParticular.JPG` = **4,5 MB** servida en home → recomprimir a ~200-400 KB (mismo path). Fotos de casos son PNG de cámara → pasar fuente a JPG/WebP manteniendo paths de `projectsInfo.json` | Mantener nombres/rutas exactos (los usan `ServicesSection` y `projectsInfo.json`/sitemap) |
| `use client` innecesario | 🟡 | M | `HeroSection`, `CTASection`, `ServiciosHero`, `CasoCard` son `"use client"` sin estado/hooks/handlers → pasarlos a Server Components (menos JS/hidratación above-the-fold). **NO** tocar los que sí lo necesitan: `ProjectsSection`/`CasoDetalleContent` (embla), `FaqAccordion`, `Header` (Sheet), `WppBtn`/`WhatsAppCTA` (dataLayer) | Verificar build; no tocar componentes con eventos GTM |

### Fase C — Datos estructurados (schema) — refactor a `@graph`

| Ítem | Sev | Esf | Qué hacer (`layout.tsx` salvo indicado) | Riesgo |
|------|-----|-----|------------------------------------------|--------|
| LocalBusiness completo | 🟠 | S | Sumar `telephone` (mismo número que `WppBtn.tsx`, `+5491123787750`, sin duplicar fuente), `priceRange`, `geo`, imágenes reales de obra (no el logo); `@type` más específico `HomeAndConstructionBusiness`; **ampliar `areaServed` a AMBA** (hoy solo City "Buenos Aires", contradice el copy "Buenos Aires y AMBA") | No reintroducir ISO/Sa3 en `description`. `telephone` en JSON-LD NO choca con `format-detection: telephone=no` |
| **FAQPage** | 🟠 | S | Extraer el array `faqs` de `FaqAccordion.tsx` a `src/lib/faqs.ts`; emitir `<script type="application/ld+json">` `FAQPage` desde el Server Component `preguntas-frecuentes/page.tsx` (el accordion consume la misma fuente). *Nota honesta:* desde 2023 Google limitó el rich result de FAQ; el valor es semántico + elegibilidad futura, costo casi nulo | Serializar el JSON-LD desde el Server Component, no dentro del `"use client"` |
| Refactor a `@graph` con `@id` | 🟡 | S | Hoy `Organization` y `LocalBusiness` están duplicadas y sin enlazar → unificar en un `@graph`, LocalBusiness primaria con `@id` estable (`${SITE_URL}/#business`), Organization enlazada por `@id`. Dar `telephone`/`email` al `ContactPoint` (hoy vacío) o quitarlo. Unificar `areaServed` (hoy AR vs City) | Ninguno |
| `Service` schema | 🟡 | M | En `/servicios` (uno por línea: obra/industrial, particular/piletas) con `provider @id` → LocalBusiness y `areaServed` AMBA; describir solo el resultado ("listo para pintar o revestir") | Prohibido describir el Service con Sa3/ISO/granallado |
| `BreadcrumbList` | 🟡 | M | JSON-LD en detalle de casos (Inicio → Casos → `project.title`, con `item` = `SITE_URL + project.url`) y en `/servicios`. Emparejar con breadcrumbs visibles (Fase D) | Usar slugs reales de `getAllSlugs()` (URLs 200) |
| `CreativeWork`/`ImageObject` por caso | ⚪ | M | En `[slug]/page.tsx`: `name`=`project.title`, `description`=`project.overview`, `image`=`project.images` a URLs absolutas, `creator @id`→LocalBusiness | Verificar que las imágenes estén desplegadas (no 404) |
| `WebSite` node | ⚪ | S | Nodo `WebSite` simple en el `@graph`. **NO** agregar `SearchAction` (no hay buscador on-site) ni `aggregateRating`/`review` sin reseñas reales (riesgo de penalización) | El riesgo es agregar schema falso — no hacerlo |

### Fase D — Arquitectura, IA y URLs (reestructura con 301)

**IA objetivo:** la home y `/servicios` actúan como *hubs* que reparten hacia los destinos de conversión y prueba:

```
/ (home, hub)
├── /servicios (hub de servicio)  ─┐
├── /arenado-de-piletas (landing top, recibe Ads)  ← contenido: plan de marketing
├── /casos-de-exito (índice) → /casos-de-exito/[slug] (long-tail; enlazan de vuelta a servicios + casos hermanos)
├── /preguntas-frecuentes (objeciones + FAQPage)
└── /contacto (conversión)
```

| Ítem | Sev | Esf | Qué hacer (archivos) | Riesgo |
|------|-----|-----|----------------------|--------|
| **Mapa de redirects 301** | 🟠 | M | Hoy `next.config.js` NO tiene `redirects()` → las rutas legacy dan 404. Agregar `async redirects()`: `/arenado-industrial`→`/servicios`, `/arenado-particular`→`/arenado-de-piletas` (o `/servicios`), `/presupuesto-rapido`→`/contacto`. Verificar **apex→www** (config de dominio en Vercel, no en `next.config`). `next.config.js` | No apuntar 301 a rutas 404; mantener las URL activas de Ads |
| Landing `/arenado-de-piletas` (wiring) | 🟠 | M | La **página + copy** son contenido → `marketing/04-plan-de-contenidos.md` (Prioridad #1, ya aprobada). Lo **técnico/IA** de este roadmap: alta en `sitemap.ts`, `metadata` propia + canonical, `Service` schema, y **enlaces entrantes** desde home (card "Particular"), `/servicios`, FAQ (preguntas de pileta) y el caso `arenado-pileta` | Es la excepción aprobada; no toca rutas de Ads |
| Breadcrumbs (UI) | 🟡 | M | Componente de breadcrumb visible (Inicio > Casos > [caso]; Inicio > Servicios) con anchor descriptivo; hoy solo hay "Volver a casos" en `[slug]/page.tsx:36-42`. Emparejar con el schema de Fase C | Ninguno |
| Enlazado interno (fin de callejones) | 🟡 | M | Los detalles de caso solo enlazan a "volver" y `/contacto` → agregar bloque "Servicios relacionados" (→`/servicios`, →`/arenado-de-piletas` si es pileta) y "Otros casos" (2-3 hermanos). Home: enlazar a `/casos-de-exito` (bajo el carrusel) y a `/preguntas-frecuentes`. `CasoDetalleContent.tsx`, `page.tsx`, `ProjectsSection.tsx` | Ninguno |
| Anchor text descriptivo | 🟡 | S | Reemplazar "Ver Proyecto"/"Ver servicio"/"Ver caso completo" por anchors con keyword/título (`project.title` ya disponible). `ProjectsSection.tsx`, `ServicesSection.tsx`, `CasoCard.tsx`, `CasoDestacado.tsx` | Cambia texto, no `href` ni evento |
| Fix mismatch card "Particular" | 🟡 | S | El botón dice "Ver servicio" pero va a `/contacto` (`ServicesSection.tsx:29,70`) → apuntar a `/arenado-de-piletas` (cuando exista) o `/casos-de-exito/arenado-pileta`, con anchor coherente | Ninguno |

### Fase E — On-page y metadata (rediseño de plantillas)

| Ítem | Sev | Esf | Qué hacer (archivos) | Riesgo |
|------|-----|-----|----------------------|--------|
| **H1 semánticos** | 🟠 | S/M | `CardTitle` de shadcn renderiza un `<div>` (`ui/card.tsx:32-42`) → **sin `<h1>` en `/contacto`, `/politica-de-privacidad`, `/terminos-y-condiciones`**, y las páginas de caso tienen solo `h1` (subtítulos = `div`). Convertir el título principal a `<h1>` real y los títulos de sección de casos a `<h2>` (`asChild` o heading nativo con las mismas clases). `contacto/page.tsx`, legales, `CasoDetalleContent.tsx` | Cambio semántico; no toca el form/eventos |
| H1 de home con keyword | 🟠 | S | El único `h1` de la home es la marca "Arenados Lucho" (`HeroSection.tsx:40-42`) → reescribir a "Arenado en Buenos Aires y AMBA" (marca como eyebrow/logo). Alinear con "sin vueltas / listo para pintar o revestir" | Copy/diseño del hero; respeta el pivote |
| `<main>` landmark | 🟡 | S | Home, `/contacto` y legales no envuelven en `<main>` → envolver `{children}` en `<main>` en `layout.tsx` y quitar los `<main>` por página (evitar anidado) | Revisar que servicios/casos/faq no queden con `<main>` doble |
| OG/Twitter por página + `og:image` | 🟡 | M | Hoy OG/Twitter solo existen en el root con el texto de la home → todas las subpáginas se comparten iguales en WhatsApp/redes (canal clave). Agregar `openGraph` por ruta (o helper); `og:image` default 1200×630 en `/public`; `og:image` por caso = `project.images[0]`. `layout.tsx`, `servicios/page.tsx`, `[slug]/page.tsx` | Que la imagen exista; sin promesas técnicas en el copy OG |
| Titles/descriptions con keyword local | 🟡 | S | Enriquecer `/contacto` ("Contacto y presupuesto de arenado") y `/casos-de-exito` ("Casos de arenado en Buenos Aires y AMBA"); mantener <60 chars con la marca. `contacto/layout.tsx`, `casos-de-exito/layout.tsx` | Ninguno |
| **Refrescar tablas de este doc** | 🟡 | S | Actualizar las tablas "Descriptions por ruta" y "Metadata por ruta" de arriba al estado **post-pivote** (hoy muestran Sa3/ISO viejos; el código ya tiene los textos nuevos) | Solo doc |
| FAQ outline h1→h2→h3 | ⚪ | S | Agregar un `<h2>` de sección antes del acordeón (Radix rinde las preguntas como `h3`; hoy el único `h2` aparece al final). `preguntas-frecuentes/page.tsx` | Ninguno |
| Alt text enriquecido | ⚪ | M | Alts genéricos ("Arenado Industrial", "Imagen 1/2/3") → describir superficie + zona ("Arenado de pileta de hormigón en Buenos Aires"); logo del hero como `alt=""` (decorativo, el `h1` ya dice la marca). `ServicesSection`, `ServiciosHero`, `CasoDetalleContent`, `ProjectsSection` | Sin promesas técnicas |
| Cobertura de keywords (mapeo) | — | — | **Solo diagnóstico** (crear páginas = contenido, fuera de alcance): faltan destinos on-page para "arenado a domicilio / in situ", "sacar/remover pintura de pileta", geo "arenado + localidad". Piletas se cubre con `/arenado-de-piletas` (Fase D). El resto → `marketing/04-plan-de-contenidos.md` | — |

### Fase F — SEO local (on-site técnico)

| Ítem | Sev | Esf | Qué hacer (archivos) | Riesgo |
|------|-----|-----|----------------------|--------|
| `areaServed`/`geo`/`telephone` en schema | 🟠 | S | (= LocalBusiness completo, Fase C) — alinear con la geo AMBA de Ads y el copy | Ver Fase C |
| Bloque "Zonas de cobertura" | 🟡 | M | Renderizar el dato local que hoy vive **muerto** en `Footer.tsx:9` (`const address='Buenos Aires'` + `MapPin` importado sin usar); sumar lista de partidos/zonas de AMBA en home o `/servicios`; subir contraste del one-liner del hero (hoy `text-gray-400`). *Página `/zonas` completa = condicional a demanda (Search Console) + decisión* | Bloque on-page; una landing por localidad requiere aprobación (riesgo thin/duplicate) |
| Contraste CTAs (AA) | 🟡 | S | `primary-400` (#4787AF) con texto blanco ≈ 3.9:1 (< 4.5 AA) en "Contactanos" del header y botones → usar `primary-500` (#18415A, ~9:1) para texto normal. `Header.tsx`, `ServicesSection.tsx`, `ProjectsSection.tsx` | Cambio visual de marca; validar tono con el dueño |
| Teclado en carrusel home | 🟡 | S | "Ver Proyecto" es inalcanzable por teclado (`tabIndex={-1}` + `Button asChild` sobre `<span>`) → `<Button asChild><Link>` (patrón correcto de `ServicesSection`). `ProjectsSection.tsx` | Misma URL destino |
| Click-to-call / `sameAs` GBP | ⚪ | S | Decisión de negocio: el sitio rutea a WhatsApp a propósito. Si se agrega teléfono `tel:`, revisar `format-detection: telephone=no`. `sameAs` al Google Business Profile y redes **cuando existan** (GBP es tarea externa, `marketing/ROADMAP.md` Fase 2) | No fabricar perfiles/reseñas |

### Fase G — Medición y control (transversal)

- **Google Search Console** (ya en `marketing/ROADMAP.md` Fase 2): enviar `sitemap.xml`, revisar Cobertura, informe de Core Web Vitals e Inspección de URL tras cada deploy. Es el termómetro de todo lo anterior, sobre todo de la reestructura de URLs (Fase D).
- **Baseline de performance:** correr Lighthouse/PageSpeed (mobile) ANTES de Fase B y volver a medir después (el hero video es el mayor movimiento esperado en LCP).
- **Checklist post-deploy** (ver más arriba en este archivo) + verificar 301 y canonical con inspección de URL.
- **Proceso:** branch → Preview de Vercel → QA (form, WhatsApp, 375px/1024px, build limpio) → merge (con permiso) → verificar en prod → bitácora.

---

### Tabla maestra (top prioridad por impacto × esfuerzo)

| # | Ítem | Fase | Sev | Esf |
|---|------|------|-----|-----|
| 1 | Comprimir hero video (+ poster) | B | 🔴 | M |
| 2 | Canonical self-referente (tráfico Ads con UTMs) | A | 🟡 | S |
| 3 | LocalBusiness completo (telephone/geo/areaServed AMBA) | C/F | 🟠 | S |
| 4 | FAQPage schema | C | 🟠 | S |
| 5 | H1 semánticos (/contacto y casos) + H1 home con keyword | E | 🟠 | S/M |
| 6 | Mapa de redirects 301 (legacy + apex→www) | D | 🟠 | M |
| 7 | `next.config`: AVIF + headers + limpiar deprecados | A | 🟡 | S |
| 8 | Aligerar favicon + borrar assets muertos (~7 MB) | A | 🟡 | S |
| 9 | Recomprimir imágenes fuente / PNG→WebP | B | 🟠 | M |
| 10 | Enlazado interno + breadcrumbs (+ schema) | C/D | 🟡 | M |
| 11 | OG/Twitter por página + og:image | E | 🟡 | M |
| 12 | Quitar `use client` innecesario | B | 🟡 | M |

### Dependencias y secuencia

- **A y B primero** (mejor impacto/riesgo; B mueve CWV y Quality Score de Ads).
- **Fase D (URLs/301)** exige el mapa de redirects listo y GSC monitoreando ANTES de mergear; hacerla en un solo cambio controlado.
- **Fase C (schema)** es mayormente independiente; el `telephone`/`geo` se comparten con Fase F.
- **Breadcrumbs**: UI (D) + JSON-LD (C) van juntos.
- **/arenado-de-piletas**: su copy/página es prerequisito de contenido (marketing) para el wiring técnico de Fase D.

### Fuera de alcance de este roadmap (por decisión del dueño)

- **Creación de contenido**: blog/guías, nuevas landings por keyword, más casos, copy de `/arenado-de-piletas` → `marketing/04-plan-de-contenidos.md`.
- **Google Business Profile** (crear/reclamar, fotos, reseñas) → tarea externa, `marketing/ROADMAP.md` Fase 2.
- **Cualquier cambio al evento `contact_whatsapp` o al contenedor GTM**: prohibido sin migración coordinada.
- **Landings por rubro/localidad** (`/servicios/arenado-*`, `/zonas`): requieren demanda verificada + decisión + bitácora.

---

## Relacionado

- Rutas y CTAs: `03-rutas-y-paginas.md`
- Tracking de landings de conversión: `06-tracking-y-analytics.md`
- Estrategia SEO y pivote: `marketing/02-estrategia-seo.md` · Keywords: `marketing/03-keywords-maestro.md` · Contenido: `marketing/04-plan-de-contenidos.md`
- Roadmap general del proyecto: `marketing/ROADMAP.md`

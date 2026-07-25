# SEO técnico

Metadata, indexación, structured data y reglas para no degradar posicionamiento al cambiar páginas.

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
| `/casos-de-exito` | `app/casos-de-exito/layout.tsx` | `Casos de éxito` | Casos de éxito \| Arenados Lucho |
| `/casos-de-exito/[slug]` | `app/casos-de-exito/[slug]/page.tsx` | `project.title` (dinámico) | {título caso} \| Arenados Lucho |
| `/preguntas-frecuentes` | `app/preguntas-frecuentes/page.tsx` | `Preguntas frecuentes` | Preguntas frecuentes \| Arenados Lucho |
| `/contacto` | `app/contacto/layout.tsx` | `Contacto` | Contacto \| Arenados Lucho |
| `/politica-de-privacidad` | `app/politica-de-privacidad/page.tsx` | `Política de Privacidad` | Política de Privacidad \| Arenados Lucho |
| `/terminos-y-condiciones` | `app/terminos-y-condiciones/page.tsx` | `Términos y Condiciones` | Términos y Condiciones \| Arenados Lucho |

### Descriptions por ruta

| Ruta | `description` |
|------|----------------|
| `/servicios` | Arenado hasta metal blanco (Sa3), coordinación con obra, hasta 100 m² diarios… ISO 8501. Buenos Aires. |
| `/casos-de-exito` | Casos de éxito con resumen ejecutivo… Arenado industrial en Buenos Aires. |
| `/casos-de-exito/[slug]` | `project.overview` (dinámico desde `projectsInfo.json`) |
| `/preguntas-frecuentes` | Plazos, ISO 8501, capacidad, polvo, coordinación en obra… |
| `/contacto` | Enviá tu solicitud con nombre, teléfono y descripción… WhatsApp. |
| `/politica-de-privacidad` | Política de Privacidad… Protección de datos personales en Buenos Aires. |
| `/terminos-y-condiciones` | Términos y condiciones de uso del sitio web de Arenados Lucho. |

### Slugs estáticos de casos (`generateStaticParams`)

Desde `src/lib/projectsInfo.json` → `idSection`:

- `nave-ferroviaria`
- `estructura-naval`
- `pasarela-urbana`
- `tanque-industrial`

URLs: `/casos-de-exito/{idSection}`

---

## Canonical

| Estado | Detalle |
|--------|---------|
| **Explícito en código** | No hay `alternates.canonical` por página. |
| **Comportamiento Next.js** | Con `metadataBase`, Next genera URLs absolutas para OG y metadatos; las páginas heredan la base del dominio. |
| **Regla** | Una sola URL pública por contenido: preferir `www` (`SITE_URL` ya usa `www`). |
| **Pendiente recomendado** | Añadir `alternates: { canonical: '/ruta' }` en metadata de páginas clave si se confirma duplicidad (ej. sin www vs con www en hosting). |

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

**Ubicación:** `src/app/layout.tsx` → `<script type="application/ld+json">`  
**Función:** `generateStructuredData()` — array con dos entidades.

### 1. `Organization`

| Campo | Valor |
|-------|--------|
| `@type` | `Organization` |
| `name` | `Arenados Lucho` |
| `url` | `SITE_URL` |
| `logo` | `{SITE_URL}/images/logo-solo-azul.png` |
| `contactPoint` | `ContactPoint`, `customer service`, `Spanish`, `areaServed: AR` |
| `address` | Buenos Aires, AR |

### 2. `LocalBusiness`

| Campo | Valor |
|-------|--------|
| `@type` | `LocalBusiness` |
| `email` | `arenadoslucho@hotmail.com` |
| `openingHours` | `Mo-Sa 08:00-18:00` |
| `areaServed` | City `Buenos Aires` |

### Lo que **no** hay en schema hoy

- `FAQPage` en `/preguntas-frecuentes` (oportunidad: datos en `FaqAccordion.tsx`)
- `Service` por página de servicios
- `Article` / `Project` en detalle de casos
- `BreadcrumbList`

**Copy schema (mayo 2026):** descriptions de Organization y LocalBusiness alineadas a arenado industrial / ISO 8501.

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

- `next.config.js`: `images.domains` vacío; imágenes estáticas en `/public` (cuando existan en deploy).
- OG: no hay `openGraph.images` definido en metadata → completar imagen social recomendada (1200×630).

### Velocidad / mobile

- `format-detection: telephone=no` (evita auto-link de tel en iOS si no hay `tel:`).
- Mobile-first en componentes (ver `.cursorrules`).

---

## Reglas SEO del proyecto

### Contenido y posicionamiento

1. **Enfoque industrial B2B** (planta, obra, Sa3, ISO 8501, m²/día) — no diluir con copy de “piscinas/particular” en metadata ni schema sin estrategia.
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
| **Verificar `/robots.txt` y `/sitemap.xml` en producción (daban 404 el 25/07/2026)** | **Alta** |
| `openGraph.images` | Media |
| FAQ `FAQPage` JSON-LD | Media |
| Canonical explícito por ruta | Baja (si hay duplicados) |
| ~~Enlaces rotos industriales / términos~~ | Hecho (mayo 2026) |
| ~~JSON-LD industrial~~ | Hecho |

---

## Relacionado

- Rutas y CTAs: `03-rutas-y-paginas.md`
- Tracking de landings de conversión: `06-tracking-y-analytics.md`

# Estrategia SEO

Cómo ganar el orgánico en "arenado industrial + Buenos Aires". La base técnica (metadata, sitemap, schema) vive en `contexto/07-seo-tecnico.md`; acá se define **qué posicionar, en qué orden y con qué contenido**.

## Tesis

Es un nicho local B2B de **baja competencia SEO y alta intención comercial**: pocas empresas del rubro tienen sitios técnicamente sólidos. Un sitio rápido, con contenido técnico real (Sa3, ISO 8501, m²/día, casos con fotos) y señales locales consistentes puede dominar el cluster en meses, no años.

## Pilares (en orden de prioridad)

### 1. Cluster transaccional core → `/` y `/servicios`

Keywords tipo "arenado industrial buenos aires", "sandblasting industrial", "empresa de arenado". Detalle completo del mapa en `03-keywords-maestro.md`. Acciones: títulos/descriptions ya definidos en `contexto/07-seo-tecnico.md`; mantener el copy industrial (norma, capacidad, logística) y NO diluirlo con contenido doméstico.

### 2. Long-tail por tipo de obra → `/casos-de-exito/{slug}`

Cada caso nuevo es una página que puede posicionar "arenado de tanque", "arenado nave industrial", etc. Es el motor de crecimiento de contenido: **cada obra terminada = un caso publicado** (fotos antes/después, m², plazo, norma aplicada). Fuente única: `src/lib/projectsInfo.json`.

### 3. Long-tail informacional / objeciones → `/preguntas-frecuentes`

Preguntas reales de clientes ("cuánto tarda un arenado", "el arenado genera polvo", "qué es grado Sa3"). Ampliar el FAQ con las consultas que lleguen por WhatsApp/formulario. Pendiente técnico de alto valor: **schema `FAQPage`** (listado en `contexto/07-seo-tecnico.md` como oportunidad).

### 4. SEO local

- **Google Business Profile**: crear/reclamar ficha "Arenados Lucho" (categoría: servicio de chorro de arena / limpieza industrial), zona de servicio Buenos Aires/AMBA, fotos de obra, link al sitio. Hoy es probablemente el mayor quick-win fuera del sitio.
- NAP consistente (nombre, zona, email `arenadoslucho@hotmail.com`, horario Lu–Sá 08–18) entre sitio, schema `LocalBusiness` y la ficha.
- Reseñas: pedir reseña en Google a cada cliente industrial satisfecho (flujo post-obra).

### 5. Autoridad (link building realista)

Directorios industriales y de construcción argentinos, cámaras del sector, proveedores de pintura/recubrimientos (partners naturales: ellos necesitan superficies bien preparadas), notas en medios de construcción. Objetivo modesto: un puñado de links relevantes por trimestre — en este nicho alcanza.

---

## Roadmap

| Fase | Foco | Criterio de salida |
|------|------|--------------------|
| **0. Migración** | `01-migracion-y-dominio.md` completo | Sitio en Vercel `.com`, indexación estable |
| **1. Base on-page** | OG image, `FAQPage` schema, canonicals, un `<h1>` por página verificado | Pendientes de `contexto/07-seo-tecnico.md` cerrados |
| **2. Local** | Google Business Profile + primeras reseñas | Ficha activa con ≥5 reseñas |
| **3. Contenido** | 1–2 casos de éxito nuevos/mes + FAQ ampliado | Ritmo sostenido 3 meses (ver `04-plan-de-contenidos.md`) |
| **4. Autoridad** | Directorios + partners | 5–10 links relevantes |

## Reglas

1. Antes de crear una página nueva, verificar en `03-keywords-maestro.md` que ataca una intención no cubierta — nada de páginas que canibalicen `/servicios`.
2. Nuevas landings por rubro (`/servicios/arenado-*`) requieren decisión explícita (regla de `CLAUDE.md`); si el keyword research las justifica, proponerlas como decisión, no crearlas de una.
3. Cada página nueva cumple el checklist de publicación de `contexto/07-seo-tecnico.md`.
4. Medición: posiciones e impresiones se revisan en Search Console según rutina de `07-medicion-y-kpis.md`.

## Herramientas (gratis, suficientes para este nicho)

Google Search Console (rendimiento + indexación) · Google Business Profile · PageSpeed Insights · el propio autocompletado de Google y "búsquedas relacionadas" para descubrir long-tail · planificador de palabras clave de Google Ads (con la cuenta reactivada).

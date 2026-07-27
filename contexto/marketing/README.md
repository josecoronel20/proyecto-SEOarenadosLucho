# Contexto de marketing — Arenados Lucho

Sistema de documentación de **estrategia y operación de marketing** (SEO + Google Ads). Es el "norte" del proyecto: toda tarea de marketing con Claude u otro asistente arranca leyendo el archivo que corresponda de esta carpeta.

> **Posicionamiento vigente (26/07/2026):** arenado **"sin vueltas"** in situ — obra, restauración, PYMEs con galpón, piletas. **PROHIBIDO** prometer Sa3/ISO 8501/metal blanco/granallado (no se ofrece ese servicio). Detalle: `00-vision-y-objetivos.md` y `contexto/00-proyecto-general.md`.

Complementa (no reemplaza) al sistema técnico `contexto/00-20`. Regla de oro: **lo técnico del sitio vive en `contexto/`; la estrategia y la operación de marketing viven acá**. No duplicar: enlazar.

---

## Índice

| Archivo | Tema | Cuándo usarlo |
|---------|------|---------------|
| [ROADMAP.md](./ROADMAP.md) | **El paso a paso ordenado — "¿qué sigue?"** | Al empezar cualquier sesión de trabajo |
| [00-vision-y-objetivos.md](./00-vision-y-objetivos.md) | Norte del proyecto, metas, KPIs, funnel | Siempre, antes de cualquier decisión de marketing |
| [01-migracion-y-dominio.md](./01-migracion-y-dominio.md) | Migración Framer → Vercel — ✅ dominio y sitemap/robots ya en producción; quedan redirects, Search Console y seguimiento | Cerrar los pasos pendientes post-migración |
| [02-estrategia-seo.md](./02-estrategia-seo.md) | Estrategia SEO: pivote de copy (Fase 1), piletas, contenido, autoridad | Planificar u optimizar posicionamiento orgánico |
| [03-keywords-maestro.md](./03-keywords-maestro.md) | Mapa maestro de keywords ↔ URLs, negativas (incl. técnicas) | Escribir copy, metadata, anuncios o contenido nuevo |
| [04-plan-de-contenidos.md](./04-plan-de-contenidos.md) | Backlog y calendario de contenido (galería inmediata, landing piletas) | Decidir qué página/caso/FAQ crear después |
| [05-google-ads-operacion.md](./05-google-ads-operacion.md) | Relanzamiento (3 campañas, arranque 5.000/día) y operación | Auditar, estructurar o ajustar campañas |
| [06-google-ads-scripts.md](./06-google-ads-scripts.md) | Workflow Claude + Google Ads Scripts | Instalar/correr scripts y analizar sus reportes |
| [07-medicion-y-kpis.md](./07-medicion-y-kpis.md) | Métricas, fuentes de datos, rutinas de revisión | Reportes semanales/mensuales |
| [08-bitacora.md](./08-bitacora.md) | Registro de cambios, experimentos y decisiones | Después de cada cambio de marketing relevante |
| [09-automatizaciones.md](./09-automatizaciones.md) | **Qué corre solo** (scripts Ads, vigilancia SEO) y cómo frenarlo | Antes de crear o tocar cualquier automatización |
| [10-cuenta-ads-auditoria.md](./10-cuenta-ads-auditoria.md) | **Dossier de la cuenta de Ads** (26/07): radiografía cruda + análisis + plan corregido (§6 = versión vigente) | Analizar la cuenta o preparar el relanzamiento (autocontenido para otro chat) |
| [11-landing-piletas-ideal.md](./11-landing-piletas-ideal.md) | **Mapa de la landing IDEAL de piletas** (blueprint: estructura, copy propio, keywords por bloque, schema, reglas de conversión) | Diseñar o alinear la landing `/arenado-de-piletas` |
| [12-google-business-profile.md](./12-google-business-profile.md) | **Setup/optimización del Google Business Profile** (reclamar ficha, SAB, categorías, descripción, reseñas) | Crear/optimizar la ficha de Google (SEO local) |
| [ads-scripts/](./ads-scripts/) | Scripts listos para pegar en Google Ads | Ver `06-google-ads-scripts.md` |

---

## Cómo trabajar con Claude sobre esta carpeta

1. **Identificá la tarea** (ej. "optimizar metadata de /servicios", "analizar términos de búsqueda de Ads").
2. **Referenciá el archivo de marketing** que aplica + el archivo técnico de `contexto/` relacionado (ej. `02-estrategia-seo.md` + `contexto/07-seo-tecnico.md`).
3. Pedí el cambio o el análisis.
4. **Actualizá `08-bitacora.md`** con lo que se hizo (fecha, cambio, hipótesis, resultado esperado).

### Ejemplos

- "Reactivar Google Ads" → `05-google-ads-operacion.md` + `10-cuenta-ads-auditoria.md` (§6)
- "Analizar el CSV del script semanal" → `06-google-ads-scripts.md` + `07-medicion-y-kpis.md`
- "Nueva página orientada a una keyword" → `03-keywords-maestro.md` + `04-plan-de-contenidos.md` + `contexto/07-seo-tecnico.md`
- "Pivotar el copy del sitio" → `02-estrategia-seo.md` (Fase 1) + `.cursorrules` + `contexto/00-proyecto-general.md`

---

## Reglas de esta carpeta

- Archivos **cortos** (1–3 pantallas); lenguaje concreto (URLs, keywords y números reales).
- Datos sensibles (IDs de cuenta, presupuestos reales) se pueden anotar acá porque el repo es privado, pero **nunca credenciales/API keys**.
- Cada cambio estructural de campaña, keyword o contenido → entrada en `08-bitacora.md`.
- Si un dato técnico cambia (rutas, eventos, dominio), la fuente de verdad es `contexto/` — actualizar allá y enlazar.

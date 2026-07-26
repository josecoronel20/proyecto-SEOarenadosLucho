# Bitácora de marketing

Registro cronológico (más reciente arriba) de todo cambio, experimento y decisión de marketing. Sin bitácora no se puede saber qué causó qué. Formato de entrada:

```
## AAAA-MM-DD — Título corto
- **Qué se hizo:**
- **Por qué / hipótesis:**
- **Resultado esperado y cuándo revisarlo:**
- **Resultado real:** (completar después)
```

---

## 2026-07-26 — Sesión de Chrome: tope de gasto real + scripts instalados

- **Qué se hizo (sesión supervisada en la cuenta de Ads 953-841-6905):**
  - 🛡️ **Tope de gasto ACTIVADO:** presupuesto diario nativo de la campaña activa `busqueda-arenadoIndustrial` bajado de **25.000 → 10.000/día** (freno duro real). Antes estaba armada para ~750.000/mes (2,5× el tope).
  - ✅ **Guardián (06)** instalado + programado diario; Vista previa OK (heartbeat: `Mes ARS 12.237/300.000`).
  - ✅ **Scripts de lectura instalados:** `02-reporte-semanal`, `03-ngram-terminos`, `04-chequeo-urls`.
  - ⏸️ **Autopilot (05) NO instalado** a propósito (falta importar/limpiar conversiones + URLs 200 + data).
  - 🧹 **Conversiones:** "Lead form - Submit" pasada a secundaria. Las "Local actions" (Website visits, Other engagements) NO se pueden pasar a secundaria una por una (son "Alojada en Google") → se excluyen a nivel de campaña al relanzar.
  - 🐞 Corregido bug en `01-auditoria-cuenta.js` (`LAST_90_DAYS` no es literal válido de GAQL → se usa rango `BETWEEN`).
- **Auditoría de la cuenta (línea base):** cuenta con historial (la campaña activa gastó ~1,6M), casi todo REMOVED salvo `busqueda-arenadoIndustrial` (ENABLED) y `Leads-Performance Max-3` (PAUSED). Conversiones GA4→Ads YA existen (`contact_whatsapp`, `form_submit` primarias) pero conviven con basura primaria (visitas/engagements). URLs finales → `https://www.arenadoslucho.com/` (200, dominio correcto). Sin saldo actualmente.
- **Por qué:** dejar el gasto topeado y el monitoreo corriendo ANTES de recargar saldo; sin autopilot hasta tener conversiones limpias.
- **Pendiente antes de relanzar:** (1) limpiar conversiones a nivel campaña (optimizar solo hacia `form_submit_success` + WhatsApp + llamadas); (2) verificar que `form_submit` sea éxito y no intento (GTM/GA4); (3) recién ahí instalar autopilot (05) + recargar saldo.
- **Resultado esperado:** con presupuesto 10.000/día, aunque se recargue saldo el gasto no supera ~300.000/mes.
- **Resultado real:** _(completar tras relanzamiento)_

## 2026-07-25 (3) — Reconciliación de estado + endurecimiento del guardián (Claude Code)

- **Qué se hizo:**
  - 🔧 **Doc reconciliada con la realidad:** `09-automatizaciones.md`, `06-google-ads-scripts.md` y `CLAUDE.md` decían "piloto automático / tope duro vigente" cuando **ningún script está instalado**. Corregido a "creado, pendiente de instalar; sin autopilot ni tope real hasta verificar el trigger en la UI".
  - 🔧 Vigilancia SEO pasada de "✅ Activa desde 27/07" (fecha futura, hoy es 25/07) → "Programada, primera corrida pendiente de confirmar".
  - 🛡️ **Endurecido `ads-scripts/06-guardian-presupuesto.js`** (en el repo, sin instalar): `try/catch` en `costoPeriodo` (ante fallo NO asume gasto 0, avisa y aborta sin tocar nada), pausa al **95%** del tope (margen por latencia) en vez de 100%, **reactivación por mes guardado en la etiqueta** en vez de `getDate()<=2` (evita quedar apagado todo el mes si falla los días 1-2), **heartbeat** y **kill-switch** remoto (celda RUN/STOP con fail-safe: ante duda no reactiva). Aviso de 80% una sola vez por mes.
  - 🔧 Corregido un `.com.ar` perdido en `src/app/terminos-y-condiciones/page.tsx`.
  - 📌 Registrado que la política "piloto automático" (25/07) **reemplaza** la previa "solo lectura + cambios a mano" del mismo día.
- **Por qué / hipótesis:** operar creyendo que hay un tope de gasto que no existe es el mayor riesgo económico; antes de dar autonomía hay que arreglar la base y que la doc no sobrerreprese­nte el estado real.
- **Resultado esperado y cuándo revisarlo:** al instalar el guardián endurecido + fijar el presupuesto diario nativo, el tope se comporta como red real. Falta commit + push del fix de dominio para que `/robots.txt` y `/sitemap.xml` dejen de dar 404 en producción.
- **Resultado real (25/07/2026):** ✅ fix de dominio commiteado y mergeado a `main` vía **PR #1** (merge commit `9307485`); deploy de Vercel propagado y **verificado en producción**: `https://www.arenadoslucho.com/robots.txt` → **200** (`text/plain`, `Allow: /` + sitemap `.com`) y `/sitemap.xml` → **200** (11 URLs, todas `.com`, 0 `.com.ar`). Antes ambos daban 404 → bloqueante SEO #1 cerrado. **Sigue pendiente:** el guardián endurecido y el resto de los scripts de Ads están en el repo pero **sin instalar** (requiere sesión de Chrome); importación de conversiones GA4→Ads sin verificar.

## 2026-07-25 (2) — Migración completada + modo autopilot **preparado** (pendiente de instalar)

- **Qué se hizo:**
  - ✅ **Migración de dominio hecha por el dueño**: `www.arenadoslucho.com` ya apunta a Vercel y sirve el sitio Next.js (verificado por DNS: `vercel-dns-017.com`). Framer fuera.
  - ✅ Corregido `SITE_URL` `.com.ar` → `.com` en `layout.tsx`, `sitemap.ts` y `robots.ts` (falta commit + push para que Vercel lo despliegue).
  - ⚠️ **Pendiente urgente:** `/robots.txt` y `/sitemap.xml` devuelven **404 en producción** — el deploy parece anterior a esos archivos; el próximo push debería resolverlo. Verificar tras el deploy.
  - Creados scripts con escritura: `05-autopilot.js` y `06-guardian-presupuesto.js`.
  - Tarea programada semanal de vigilancia SEO creada en Claude (lunes a la mañana).
- **Decisiones del dueño:**
  - Google Ads en **piloto automático total** (negativas, pausas) con topes duros y aviso por email de cada cambio.
  - **Tope de gasto: ARS 300.000/mes** (guardián pausa todo al 100%).
  - Setup inicial de la cuenta (instalar scripts, auditar, campaña de relanzamiento) se hace con Claude manejando Chrome bajo supervisión.
  - Repo de GitHub privado → se creará un token para que Claude audite/corrija código en sesiones programadas.
- **Resultado esperado y cuándo revisarlo:** deploy con SITE_URL correcto + sitemap/robots vivos esta semana; primera corrida del autopilot tras la sesión de setup en Chrome.
- **Resultado real:** _(completar)_

## 2026-07-25 — Creación del sistema de contexto de marketing

- **Qué se hizo:** se creó `contexto/marketing/` (estrategia SEO + operación Google Ads + scripts) y se referenció desde `CLAUDE.md` y `contexto/README.md`.
- **Decisiones tomadas:**
  - El sitio Next.js del repo se publicará en **Vercel** bajo `www.arenadoslucho.com`; el sitio Framer actual se dará de baja.
  - Google Ads se gestionará con **Google Ads Scripts** (solo lectura) + análisis de Claude; cambios aplicados a mano.
  - La cuenta de Ads tiene historial pero está abandonada → plan de reactivación en `05-google-ads-operacion.md`.
- **Hallazgos de la auditoría inicial (25/07/2026):**
  - `www.arenadoslucho.com` → CNAME a `sites.framer.app` (el sitio vivo es Framer, no el repo).
  - `arenadoslucho.com.ar` (con y sin www) **no resuelve en DNS**, pero el código lo hardcodea como `SITE_URL` en `layout.tsx`, `sitemap.ts` y `robots.ts` → corregir a `.com` antes del deploy (checklist en `01-migracion-y-dominio.md`).
- **Próximos pasos:** (1) checklist pre-deploy de `01-migracion-y-dominio.md`; (2) instalar `ads-scripts/01-auditoria-cuenta.js` y traer el reporte a Claude; (3) capturar línea base de KPIs en `07-medicion-y-kpis.md`.

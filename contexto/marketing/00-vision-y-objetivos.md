# Visión y objetivos — norte del proyecto

## Visión

Convertir a **Arenados Lucho** en el proveedor de arenado industrial **más visible y con mejor conversión de Buenos Aires / AMBA** en Google, combinando SEO orgánico y Google Ads sobre un mismo sitio, un mismo mensaje y una misma medición.

El sitio no es un folleto: es una **máquina de generar consultas calificadas B2B** (formulario, WhatsApp, email). Todo esfuerzo de marketing se evalúa contra una sola pregunta: **¿produce más leads industriales calificados por peso invertido?**

Detalle de negocio, clientes y propuesta de valor: `contexto/00-proyecto-general.md` (no duplicar acá).

---

## Estado actual (julio 2026)

| Frente | Estado |
|--------|--------|
| Sitio vivo | ✅ Next.js (este repo) en **Vercel** bajo `www.arenadoslucho.com` — migrado el 25/07/2026; Framer dado de baja. El `.com.ar` jamás estuvo operativo: no usarlo |
| ⚠️ Pendiente inmediato | Push del fix `SITE_URL` (.com.ar → .com, ya corregido en local) y verificar que `/robots.txt` y `/sitemap.xml` respondan 200 (daban 404). Luego pasos 2, 4 y 5 de `01-migracion-y-dominio.md` |
| Google Ads | Cuenta con historial pero **abandonada**. Modo **autopilot** aprobado (tope ARS 300.000/mes); scripts listos en `ads-scripts/` — falta la sesión de setup en Chrome para instalarlos y relanzar. Ver `05-…` y `09-automatizaciones.md` |
| Vigilancia automática | ✅ Auditoría SEO del sitio todos los **lunes 08:00** (tarea programada de Claude, avisa por push/email). Detalle: `09-automatizaciones.md` |
| Tracking | GTM `GTM-W63ZV9D9` + eventos `dataLayer` implementados en el repo (`contexto/06-tracking-y-analytics.md`) |
| SEO orgánico | Base técnica sólida en el repo (metadata, sitemap, robots, JSON-LD); autoridad y contenido por construir |

---

## Objetivos

### Horizonte 90 días (reactivación)

1. **Migración limpia** Framer → Vercel en `.com` sin perder indexación (ver `01-migracion-y-dominio.md`).
2. **Google Ads reactivado**: 1 campaña Search industrial funcionando con conversiones bien medidas y términos de búsqueda limpios.
3. **Medición confiable**: GA4 + Ads + Search Console verificados y con datos coherentes entre sí.
4. **Línea base documentada**: primeras métricas registradas en `07-medicion-y-kpis.md` para comparar después.

### Horizonte 12 meses

1. Top 3 orgánico en Buenos Aires para el cluster "arenado industrial" (ver `03-keywords-maestro.md`).
2. Flujo estable de **leads industriales** mixto orgánico/pago, con CPA de Ads conocido y decreciente.
3. Casos de éxito posicionando long-tail por tipo de obra (nave, tanque, estructura metálica).
4. Operación de Ads semi-automatizada: scripts corriendo solos, Claude analizando reportes, cambios documentados.

---

## Funnel y prioridades

```
Búsqueda (SEO / Ads)
      ↓
Landing correcta según intención  (/, /servicios, /casos-de-exito, /preguntas-frecuentes)
      ↓
CTA → /contacto · WhatsApp · email
      ↓
Evento dataLayer → GTM → GA4 / Ads      ← la medición ES el negocio
      ↓
Lead calificado (industrial) → presupuesto
```

**Prioridad de lead:** industrial/obra >> particular. Las campañas y el copy filtran activamente lo doméstico (muebles, rejas, autos) — ver negativas en `03-keywords-maestro.md`.

---

## KPIs norte (resumen — detalle en `07-medicion-y-kpis.md`)

| KPI | Fuente | Meta 90 días |
|-----|--------|--------------|
| Leads totales/mes (form + WhatsApp + email) | GA4 (eventos dataLayer) | Línea base + 30% |
| % leads calificados (industrial) | Revisión manual del inbox | > 60% |
| CPA en Google Ads | Google Ads | Establecer línea base |
| Clics/impresiones orgánicas cluster industrial | Search Console | Recuperar niveles pre-migración |
| Core Web Vitals de landings | PageSpeed / Search Console | Todo en verde |

---

## Principios de decisión

1. **Message match**: keyword → anuncio/snippet → landing → CTA cuentan la misma historia.
2. **Una intención por URL** (regla ya establecida en `contexto/07-seo-tecnico.md`).
3. **No romper la medición**: los eventos `dataLayer` son intocables sin migración en GTM (`contexto/06-tracking-y-analytics.md`).
4. **Primero conversión, después tráfico**: no escalar inversión ni contenido hasta que la landing y la medición estén sanas.
5. **Todo cambio queda registrado** en `08-bitacora.md` — sin bitácora no hay aprendizaje.

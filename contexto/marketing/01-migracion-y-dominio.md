# Migración Framer → Vercel y dominio definitivo

**Decisión tomada (jul 2026):** el sitio Next.js de este repo se publica en **Vercel** bajo **`https://www.arenadoslucho.com`** y el sitio Framer se da de baja. Este archivo es el checklist para no perder SEO en el proceso. **Nada de lo que sigue en SEO/Ads rinde hasta completar esto.**

## Estado (actualizado 26/07/2026)

- ✅ **DNS migrado**: `www.arenadoslucho.com` en Vercel sirviendo el sitio Next.js. Framer fuera.
- ✅ **`SITE_URL` corregido, commiteado y desplegado** (PR #1, merge `9307485`): `/robots.txt` y `/sitemap.xml` **verificados 200 en producción**, sitemap con 11 URLs todas `.com`.
- Pendientes: pasos **2** (redirects 301 del apex y rutas legacy), **4** (post-corte: verificar propiedad en Search Console + enviar sitemap, GA4/GTM en el sitio nuevo, revisar URLs de Ads) y **5** (seguimiento semanas 2-6) del checklist de abajo.
- Dato histórico: `arenadoslucho.com.ar` (con y sin www) **nunca resolvió en DNS**; no usar ese dominio en ningún lado.

---

## Checklist de migración

### 1. Pre-deploy (en el repo)

- [ ] Cambiar `SITE_URL` a `https://www.arenadoslucho.com` en `layout.tsx`, `sitemap.ts` y `robots.ts` (los tres a la vez).
- [ ] Verificar que metadata, JSON-LD, sitemap y robots generen URLs `.com` (`npm run build` + inspección).
- [ ] Registrar el mapa de URLs del sitio Framer actual (crawl o listado manual) para planear redirects.

### 2. Redirecciones 301 (en Vercel)

- [ ] `arenadoslucho.com` (apex) → `https://www.arenadoslucho.com` (301).
- [ ] Toda URL del Framer que no exista en Next.js → 301 a la equivalente (`/servicios`, `/contacto`, etc.).
- [ ] Rutas legacy ya conocidas (`/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido`, `/precios-arenados`, `/zonas-de-cobertura/*`, `/blog/*`) → 301 según tabla de `contexto/08-google-ads-y-landings.md`.
- [ ] Verificar que ninguna URL devuelva 404 desde anuncios activos de Ads.

### 3. Corte de dominio

- [ ] En Vercel: agregar `www.arenadoslucho.com` y `arenadoslucho.com` como dominios del proyecto.
- [ ] En el DNS: cambiar el CNAME de `www` de `sites.framer.app` a Vercel; apex según instrucciones de Vercel.
- [ ] Confirmar SSL activo y sitio sirviendo desde Vercel en ambas variantes.
- [ ] Dar de baja el sitio en Framer **recién después** de confirmar que todo responde desde Vercel.

### 4. Post-corte (misma semana)

- [ ] Google Search Console: verificar propiedad **Dominio** `arenadoslucho.com` (si no existe), enviar `https://www.arenadoslucho.com/sitemap.xml`.
- [ ] Inspeccionar y pedir indexación de las 6 URLs principales.
- [ ] GA4/GTM: confirmar que `GTM-W63ZV9D9` dispara en el sitio nuevo y que los 5 eventos (`form_submit`, `form_submit_success`, `form_submit_error`, `contact_whatsapp`, `contact_email`) llegan (GTM Preview + GA4 DebugView).
- [ ] Google Ads: actualizar URLs finales si alguna apuntaba a rutas del Framer; revisar que las conversiones sigan registrando (ventana 48–72 h).
- [ ] Actualizar `contexto/07-seo-tecnico.md` y `contexto/19-deploy-y-entornos.md` con el dominio real.
- [ ] Registrar el corte en `08-bitacora.md` con fecha exacta (marca el "antes/después" de todas las métricas).

### 5. Seguimiento (semanas 2–6)

- [ ] Search Console: cobertura de indexación sin caídas; errores 404 → agregar redirect.
- [ ] Comparar clics/impresiones vs período Framer; una caída transitoria de 1–3 semanas es normal, más que eso se investiga.
- [ ] Core Web Vitals del sitio nuevo en verde (el Next.js debería superar al Framer — verificar, no asumir).

---

## Decisiones de dominio

| Tema | Decisión |
|------|----------|
| Canonical | `https://www.arenadoslucho.com` (con `www`) |
| `arenadoslucho.com.ar` | No operativo. Si algún día se registra, solo como redirect 301 al `.com` — nunca contenido duplicado |
| `http://` y apex | Siempre 301 a `https://www` |

## Qué NO hacer

- No publicar el sitio nuevo en un dominio distinto "para probar" dejándolo indexable (usar previews de Vercel con `noindex`, que ya lo traen por defecto).
- No dar de baja Framer antes de que Vercel responda en el dominio.
- No cambiar nombres de eventos ni el GTM ID durante la migración: un solo cambio grande a la vez.

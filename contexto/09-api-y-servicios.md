# API y servicios externos

Integraciones reales del proyecto: qué existe en código, qué no, y qué no romper al cambiar contacto o datos.

> **Cambio del 28/07/2026 — canal único WhatsApp.** Se eliminó el formulario de `/contacto` y con él la integración con **Formspree** (`xrgnqbod`), además del componente `EmailBtn`. **El sitio ya no hace ningún POST a un servicio externo.** Ver `05-formularios-y-conversion.md`.

---

## Resumen ejecutivo

| Tipo | Estado en repo |
|------|----------------|
| **API Routes Next.js** (`src/app/api/`) | **No existen** |
| **Backend propio** | No |
| **Base de datos** | No |
| **CMS** | No |
| **Formulario** | **No existe** (eliminado el 28/07/2026 junto con Formspree) |
| **Email transaccional** | No |
| **Analytics** | **GTM** + `dataLayer` en cliente |
| **Datos estáticos** | JSON en `src/lib/` |

---

## Lo que NO existe (importante)

El sitio **no envía datos a ningún lado**. No hay `POST` de contacto: la conversión es abrir una conversación de WhatsApp.

```
❌  POST /api/contact       →  no hay route handler
❌  POST formspree.io/...   →  eliminado el 28/07/2026
✅  window.open(wa.me/...)  →  contacto desde el navegador
✅  dataLayer.push          →  eventos GA4 vía GTM (no servidor)
```

⚠️ **No reintroducir un endpoint de contacto** (ni Formspree, ni API Route, ni Server Action) sin decisión explícita del dueño: cambiaría la única conversión de la cuenta de Google Ads.

---

## Diagrama de flujos

```
┌──────────────────────┐   window.open      ┌──────────────────┐
│ WppBtn (flotante)    │ ─────────────────► │ WhatsApp (Meta)  │
│ WhatsAppCTA (inline) │      wa.me         └──────────────────┘
└──────────┬───────────┘
           │ dataLayer.push('contact_whatsapp')
           ▼                    (solo tras confirmar el AlertDialog)
┌─────────────────┐
│ GTM-W63ZV9D9    │
└────────┬────────┘
         ▼
    GA4 / Ads / Meta (tags en GTM)
```

---

## Eventos de analytics (no son API REST)

Se disparan en el **navegador** tras acciones de usuario:

| Evento `dataLayer` | Archivo | Cuándo |
|--------------------|---------|--------|
| `contact_whatsapp` | `WppBtn.tsx` | Confirmar el modal (flotante global) |
| `contact_whatsapp` | `WhatsAppCTA.tsx` | Confirmar el modal (CTA inline) |

**Es el único evento del sitio.** `generate_lead` y las conversiones de Ads se configuran en **GTM**, no con una llamada a API desde el servidor.

Ver: `06-tracking-y-analytics.md`, `05-formularios-y-conversion.md`.

---

## Google Tag Manager

| Servicio | ID / URL |
|----------|------------|
| GTM | `GTM-W63ZV9D9` |
| Script | `https://www.googletagmanager.com/gtm.js` |
| Implementación | `src/app/layout.tsx` |

Carga tags de terceros (GA4, Ads, Meta Pixel) **sin** código adicional en el repo.

---

## WhatsApp

| Campo | Valor |
|-------|--------|
| **Componentes** | `src/components/common/WppBtn.tsx` (flotante, único) · `src/components/common/WhatsAppCTA.tsx` (inline) |
| **Número** | Array de dígitos unido en runtime (`src/lib/wppNumero.ts`) — **nunca contiguo en el bundle ni en el HTML**. Concatenar dos strings no alcanzaba: el minificador lo plegaba |
| **URL** | `https://wa.me/<número>?text=...` abierta con `window.open` (no `<a href>`) |
| **Mensaje default** | `WppBtn`: "Hola, me gustaría recibir asesoramiento sobre arenado." · `WhatsAppCTA`: parametrizable por `message` |
| **API** | Ninguna; apertura en nueva pestaña |

---

## Email

**No hay componente de email ni `mailto:` en la UI** (`EmailBtn` fue eliminado el 28/07/2026).

La dirección `arenadoslucho@hotmail.com` sigue viviendo en `src/lib/siteConfig.ts` y se emite en el **JSON-LD** de `layout.tsx` como campo `email` de `LocalBusiness` — es dato de entidad para SEO, no un canal de conversión medido.

⚠️ A diferencia del email, el **teléfono NO va en el JSON-LD** (`telephone` fue removido del schema) y el layout emite `<meta name="format-detection" content="telephone=no">`.

---

## Datos estáticos (sin API)

| Archivo | Uso | Consumido por |
|---------|-----|---------------|
| `src/lib/projectsInfo.json` | Casos de éxito | `getProjectBySlug.ts`, casos SSG |
| `src/lib/getProjectBySlug.ts` | Helpers slug / legacy map | `app/casos-de-exito/[slug]/page.tsx` |
| `src/lib/siteConfig.ts` | Datos de negocio para schema y metadata | `layout.tsx`, páginas |
| `src/lib/faqs.ts` | FAQ general + FAQ de piletas | `/preguntas-frecuentes`, `/arenado-de-piletas` |

**Build time:** `generateStaticParams()` genera las rutas `/casos-de-exito/{idSection}`.

No hay `fetch` a CMS ni REST interno para contenido.

---

## Hosting y deploy

| Servicio | Rol |
|----------|-----|
| **Vercel** | Hosting, preview, dominio |
| **Next.js 16** | SSR/SSG, sin servidor custom |

No se usan variables de entorno hoy: `GTM-W63ZV9D9` y `SITE_URL` están hardcodeados.

### Variables de entorno (recomendado a futuro)

| Variable sugerida | Uso |
|-------------------|-----|
| `NEXT_PUBLIC_GTM_ID` | Opcional; hoy hardcodeado `GTM-W63ZV9D9` |

---

## Webhooks

| Origen | Webhook en repo |
|--------|-----------------|
| Stripe / pagos | No |
| GitHub / CI | Fuera de alcance de la app |

No hay webhooks configurados en código.

---

## Servicios externos (lista)

| Servicio | Propósito | Dónde se usa |
|----------|-----------|--------------|
| **Google Tag Manager** | Tags de analytics/ads | `layout.tsx` |
| **Google Analytics 4** | Medición (vía GTM) | Panel de GTM |
| **Google Ads** | Conversiones (vía GA4/GTM) | Cuenta Ads `953-841-6905` |
| **Meta / WhatsApp** | Mensajería (único canal de contacto) | `WppBtn`, `WhatsAppCTA` → `wa.me` |
| **Vercel** | Hosting y dominio | Deploy |

Dominios a permitir en CSP/firewall si aplica: `googletagmanager.com`, `google-analytics.com`, `wa.me`.

**Ya no aplica:** `formspree.io`.

---

## Qué NO romper

1. **GTM** cargado antes de cualquier `dataLayer.push` en páginas nuevas.
2. **`contact_whatsapp`** solo tras la confirmación del modal — es la única conversión de la cuenta.
3. **El número como array de dígitos unido en runtime** y abierto con `window.open`; nunca en un `href` ni en el JSON-LD.
4. **`projectsInfo.json`**: `idSection` único por caso (romperlo rompe las URLs estáticas).
5. **No agregar un endpoint de contacto** sin decisión del dueño (ver arriba).

---

## Archivos clave

| Archivo | Responsabilidad |
|---------|-----------------|
| `src/app/contacto/page.tsx` | Landing WhatsApp-first (Server Component, sin formulario) |
| `src/components/common/WppBtn.tsx` | WhatsApp flotante + `contact_whatsapp` |
| `src/components/common/WhatsAppCTA.tsx` | CTA inline de WhatsApp + `contact_whatsapp` |
| `src/app/layout.tsx` | GTM, JSON-LD, metadata base; sin API |
| `src/lib/projectsInfo.json` | Datos de casos |
| `src/lib/getProjectBySlug.ts` | Acceso a casos por slug |

---

## Relacionado

- Canales de conversión: `05-formularios-y-conversion.md`
- Tracking: `06-tracking-y-analytics.md`
- Landings de Ads: `08-google-ads-y-landings.md`
- Stack: `01-stack-y-arquitectura.md`

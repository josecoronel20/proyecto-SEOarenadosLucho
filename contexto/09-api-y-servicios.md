# API y servicios externos

Integraciones reales del proyecto: qué existe en código, qué no, y qué no romper al cambiar contacto o datos.

---

## Resumen ejecutivo

| Tipo | Estado en repo |
|------|----------------|
| **API Routes Next.js** (`src/app/api/`) | **No existen** |
| **Backend propio** | No |
| **Base de datos** | No |
| **CMS** | No |
| **Formulario** | Cliente → **Formspree** (POST directo) |
| **Email transaccional** | No (solo `mailto:` + notificaciones Formspree) |
| **Analytics** | **GTM** + `dataLayer` en cliente |
| **Datos estáticos** | JSON en `src/lib/` |

---

## Lo que NO existe (importante)

El ejemplo típico **`POST /api/contact`** **no está implementado**.

```
❌  POST /api/contact     →  no hay route handler
✅  POST formspree.io/...  →  contacto desde el navegador
✅  dataLayer.push         →  eventos GA4 vía GTM (no servidor)
```

Si en el futuro se crea `/api/contact`, documentar aquí y migrar Formspree o proxy sin duplicar envíos ni eventos.

---

## Diagrama de flujos

```
┌─────────────────┐     POST JSON      ┌──────────────────┐
│ /contacto       │ ─────────────────► │ Formspree        │
│ (client)        │                    │ f/xrgnqbod       │
└────────┬────────┘                    └────────┬─────────┘
         │ dataLayer.push                        │ email al inbox
         ▼                                       ▼ configurado en panel
┌─────────────────┐                    Notificación Formspree
│ GTM-W63ZV9D9    │
└────────┬────────┘
         ▼
    GA4 / Ads / Meta (tags en GTM)

┌─────────────────┐     wa.me          ┌──────────────────┐
│ WppBtn          │ ─────────────────► │ WhatsApp (Meta)  │
└─────────────────┘                    └──────────────────┘

┌─────────────────┐     mailto:        ┌──────────────────┐
│ EmailBtn        │ ─────────────────► │ Cliente email    │
└─────────────────┘                    │ del usuario      │
                                       └──────────────────┘
```

---

## Formulario de contacto (único “submit” al servidor)

| Campo | Valor |
|-------|--------|
| **Archivo** | `src/app/contacto/page.tsx` |
| **Método** | `POST` |
| **URL** | `https://formspree.io/f/xrgnqbod` |
| **Headers** | `Content-Type: application/json` |
| **Auth** | Ninguna en cliente (endpoint público Formspree) |

### Body JSON enviado

```json
{
  "name": "string",
  "contact": "string",
  "description": "string",
  "_subject": "Nueva solicitud de contacto - Arenados Lucho"
}
```

Si `contact` estuviera vacío en lógica futura: se enviaría `"(no indicado)"` — hoy el UI exige contacto para habilitar envío.

### Respuesta

- **Éxito:** HTTP `response.ok` → UI éxito + `dataLayer` `form_submit_success`
- **Error:** catch / no ok → mensaje rojo + `form_submit_error`

### Qué hace Formspree (externo)

- Recibe el POST
- Envía **email de notificación** al destinatario configurado en [formspree.io](https://formspree.io) (panel del form `xrgnqbod`)
- Posible spam filtering / rate limit (panel Formspree)

**No hay** webhook documentado en código hacia el repo.

---

## Eventos de analytics (no son API REST)

Se disparan en el **navegador** tras acciones de usuario:

| Evento `dataLayer` | Archivo | Cuándo |
|--------------------|---------|--------|
| `form_submit` | `contacto/page.tsx` | Inicio submit |
| `form_submit_success` | `contacto/page.tsx` | Formspree OK |
| `form_submit_error` | `contacto/page.tsx` | Fallo |
| `contact_whatsapp` | `WppBtn.tsx` | Confirmar modal WA |
| `contact_email` | `EmailBtn.tsx` | Click mail |

**GA4** (`generate_lead`, etc.) se configura en **GTM**, no con llamada a API de Google desde el servidor.

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
| **Componente** | `src/components/common/WppBtn.tsx` |
| **Número** | `5491123787750` (partido en variables en código) |
| **URL** | `https://wa.me/5491123787750?text=...` |
| **Mensaje default** | `Hola, me gustaría recibir asesoramiento sobre arenado.` |
| **API** | Ninguna; apertura en nueva pestaña |

---

## Email (`mailto`)

| Campo | Valor |
|-------|--------|
| **Componente** | `src/components/common/EmailBtn.tsx` |
| **Dirección** | `arenadoslucho@hotmail.com` |
| **Protocolo** | `mailto:` vía `window.location.href` |
| **Servidor SMTP / API** | No en proyecto |

También aparece en JSON-LD (`layout.tsx`) como `email` de `LocalBusiness`.

---

## Datos estáticos (sin API)

| Archivo | Uso | Consumido por |
|---------|-----|---------------|
| `src/lib/projectsInfo.json` | Casos industriales | `getProjectBySlug.ts`, casos SSG |
| `src/lib/getProjectBySlug.ts` | Helpers slug / legacy map | `app/casos-de-exito/[slug]/page.tsx` |

**Build time:** `generateStaticParams()` genera rutas `/casos-de-exito/{idSection}`.

No hay `fetch` a CMS ni REST interno para contenido.

---

## Hosting y deploy

| Servicio | Rol |
|----------|-----|
| **Vercel** (habitual para Next.js) | Hosting, preview, dominio |
| **Next.js 16** | SSR/SSG, sin servidor custom |

No hay `vercel.json` obligatorio en repo; variables de entorno **no** usadas hoy para Formspree (ID hardcodeado en cliente).

### Variables de entorno (recomendado a futuro)

| Variable sugerida | Uso |
|-------------------|-----|
| `NEXT_PUBLIC_FORMSPREE_ID` | `xrgnqbod` — no commitear rotaciones sin actualizar doc |
| `NEXT_PUBLIC_GTM_ID` | Opcional; hoy está hardcodeado `GTM-W63ZV9D9` |

---

## Webhooks

| Origen | Webhook en repo |
|--------|-----------------|
| Formspree | **No** configurado en código |
| Stripe / pagos | No |
| GitHub / CI | Fuera de alcance app |

Si se añade webhook (ej. Formspree → Zapier → CRM), documentar URL y secret **fuera** del repo o en panel del proveedor.

---

## Servicios externos (lista)

| Servicio | Propósito | Dónde se usa |
|----------|-----------|--------------|
| **Formspree** | Recibir leads del formulario | `contacto/page.tsx` |
| **Google Tag Manager** | Tags analytics/ads | `layout.tsx` |
| **Google Analytics 4** | Medición (vía GTM) | GTM panel |
| **Google Ads** | Conversiones (vía GA4/GTM) | Cuenta Ads |
| **Meta / WhatsApp** | Mensajería | `WppBtn` → wa.me |
| **Hotmail / cliente mail** | Contacto email | `EmailBtn`, schema |
| **Google Fonts / CDN** | Solo si se añaden | No crítico hoy |

Dominios a permitir en CSP/firewall si aplica: `formspree.io`, `googletagmanager.com`, `google-analytics.com`, `wa.me`.

---

## Comparativa: patrón deseado vs actual

| Paso | Patrón `POST /api/contact` (ejemplo) | Implementación actual |
|------|--------------------------------------|------------------------|
| Cliente envía form | `fetch('/api/contact')` | `fetch('https://formspree.io/f/xrgnqbod')` |
| Servidor valida | Route Handler Next.js | Solo validación en cliente |
| Email | API Route + Resend/Nodemailer | Formspree notifica por email |
| Evento GA4 | Servidor Measurement Protocol | `dataLayer.push` en cliente |
| Secretos | `.env` en Vercel | Formspree ID visible en bundle (aceptable para forms públicos) |

### Si se implementa `/api/contact` en el futuro

1. Crear `src/app/api/contact/route.ts`.
2. Validar body (nombre, contacto, descripción).
3. Reenviar a Formspree **o** enviar con Resend/Nodemailer.
4. Mantener `dataLayer.push` en cliente **o** duplicar evento server-side (evitar doble conteo).
5. Actualizar este archivo y `05-formularios-y-conversion.md`.

Ejemplo orientativo (no existe hoy):

```ts
// POST /api/contact — NO IMPLEMENTADO
// Body: { name, contact, description }
// Respuesta: { ok: true } | { error }
// Side effect: email + opcional dataLayer vía cliente tras 200
```

---

## Qué NO romper

1. **URL Formspree** `https://formspree.io/f/xrgnqbod` sin migrar panel y notificaciones.
2. **Campos JSON** `name`, `contact`, `description`, `_subject`.
3. **Eventos** `form_submit_success` tras éxito real (no antes del OK de Formspree).
4. **GTM** antes que cualquier `dataLayer.push` en nuevas páginas.
5. **No** exponer API keys de Formspree premium en el cliente si se migran a server route.
6. **`projectsInfo.json`**: `idSection` único por caso (rompe URLs estáticas).

---

## Archivos clave

| Archivo | Responsabilidad |
|---------|-----------------|
| `src/app/contacto/page.tsx` | Form + Formspree + eventos formulario |
| `src/components/common/WppBtn.tsx` | WhatsApp + `contact_whatsapp` |
| `src/components/common/EmailBtn.tsx` | Mail + `contact_email` |
| `src/app/layout.tsx` | GTM, schema, sin API |
| `src/lib/projectsInfo.json` | Datos casos |
| `src/lib/getProjectBySlug.ts` | Acceso a casos por slug |

---

## Relacionado

- Formularios y anti-spam: `05-formularios-y-conversion.md`
- Tracking: `06-tracking-y-analytics.md`
- Landings Ads: `08-google-ads-y-landings.md`
- Stack: `01-stack-y-arquitectura.md`

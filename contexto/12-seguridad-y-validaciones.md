# Seguridad y validaciones

Estado real del proyecto: sitio **estático/marketing** sin API propia ni base de datos. La seguridad depende del **cliente**, **Formspree** y **buenas prácticas en deploy**.

---

## Modelo de amenazas (alcance)

| Riesgo | Mitigación actual | Nivel |
|--------|-------------------|--------|
| Spam en formulario | Cliente + Formspree | Parcial |
| XSS en inputs de usuario | React escapa por defecto; sin `dangerouslySetInnerHTML` en form | Bajo en UI |
| XSS en scripts layout | Solo GTM + JSON-LD estáticos en código | Controlado |
| Abuso de endpoint Formspree | Rate limit Formspree; ID público | Parcial |
| Filtración de secretos | No hay `.env` en repo | OK si se mantiene |
| CSRF en formulario | N/A (POST cross-origin a Formspree desde browser) | Aceptado por diseño |
| Scraping / bots | Sin WAF propio | Hosting (Vercel) |

---

## Rate limiting

### En el código (cliente)

| Mecanismo | Archivo | Comportamiento |
|-----------|---------|----------------|
| **Un submit a la vez** | `contacto/page.tsx` | `isSubmitting` bloquea reenvíos hasta terminar `fetch` |
| **Botón disabled** | `contacto/page.tsx` | Sin campos completos no envía |
| **Debounce email** | `EmailBtn.tsx` | `sessionStorage` `email_last_click` — ignora clicks &lt; **2 s** |
| **Debounce procesamiento** | `EmailBtn.tsx` | `isProcessing` evita doble click |

**No hay:** rate limit por IP, por sesión global de formulario, ni API Route con throttling (Upstash, etc.).

### En servicios externos

| Servicio | Rate limiting |
|----------|----------------|
| **Formspree** | Límites del plan (envíos/mes, spam filter en dashboard) |
| **GTM / GA4** | Cuotas de Google (no aplica al sitio directamente) |
| **Vercel** | Límites de bandwidth/requests del plan |

### Recomendado si aumenta spam

1. Honeypot + campo `_gotcha` en Formspree.
2. reCAPTCHA v3 o Turnstile (Cloudflare) antes del POST.
3. **API Route proxy** (`/api/contact`) con rate limit server-side y secret en servidor.

---

## Sanitización

### Entradas de usuario (formulario)

| Campo | Sanitización en código |
|-------|------------------------|
| `name`, `contact`, `description` | **Ninguna** explícita (trim, max length, regex no implementados) |
| Envío a Formspree | `JSON.stringify` del estado React tal cual |
| Render en UI | Valores en `value={}` controlados — React escapa al mostrar |

**Riesgo bajo de XSS reflejado** en la propia app (no se re-renderiza HTML del input). El riesgo principal es **contenido spam** en el inbox de Formspree, no ejecución en el sitio.

### Salida HTML

| Uso | Archivo | Notas |
|-----|---------|-------|
| `dangerouslySetInnerHTML` | `layout.tsx` | Solo scripts GTM, `dataLayer` init y **JSON-LD** generado en build (datos fijos del código) |
| Contenido FAQ / casos | Componentes React | Texto estático en TS/JSON — no HTML de usuario |

**Regla:** no usar `dangerouslySetInnerHTML` con datos de formulario o CMS sin sanitizar (DOMPurify o similar).

### Contenido estático JSON

`projectsInfo.json` — editado por desarrolladores, no por usuarios finales. Si algún día hay CMS, validar y sanitizar en build o en API.

---

## Validaciones

### Formulario `/contacto` (`src/app/contacto/page.tsx`)

| Campo | HTML | JavaScript (submit) | Servidor propio |
|-------|------|---------------------|-----------------|
| `name` | `required` | Botón disabled si vacío | No |
| `contact` | `required` | Botón disabled si vacío | No |
| `description` | `required` | Botón disabled si vacío | No |

**Mayo 2026:** `contact` tiene `required` HTML y trim en submit.

**No se valida:**

- Formato de email vs teléfono
- Longitud máxima de campos
- Caracteres permitidos
- Consentimiento explícito (checkbox privacidad)

### Otros flujos

| Flujo | Validación |
|-------|------------|
| WhatsApp | Modal de confirmación (no valida identidad) |
| Email `mailto:` | Ninguna |
| Navegación / enlaces | Next.js routing |

### Librerías

- **No** hay Zod, Yup, React Hook Form ni validación en API Route.

### Mejoras recomendadas (sin romper Formspree)

```ts
// Ejemplo de reglas futuras
name: trim, min 2, max 100
contact: trim, min 6, max 120 (tel o email regex opcional)
description: trim, min 20, max 5000
```

Añadir `required` en `contact` en HTML para alinear con UX.

---

## Protección spam

### Implementado

| Capa | Detalle |
|------|---------|
| UI | Campos obligatorios + `isSubmitting` |
| Formspree | Filtro anti-spam del proveedor (configurar en panel) |
| WhatsApp | Confirmación manual (reduce bots accidentales) |
| Email tracking | Debounce 2 s (anti-doble evento, no anti-spam) |
| Ofuscación menor | Teléfono/email partidos en strings (`WppBtn`, `EmailBtn`) — **no es seguridad**, solo obscuridad |

### No implementado

| Medida | Prioridad sugerida |
|--------|------------------|
| Honeypot (`_gotcha`) | **Hecho** en `contacto/page.tsx` (mayo 2026) |
| reCAPTCHA / Turnstile | Media si persiste spam |
| Validación server-side | Alta si se crea `/api/contact` |
| Bloqueo de dominios desechables en email | Baja |

Ver también: `05-formularios-y-conversion.md` (anti-spam).

---

## Variables sensibles

### Estado actual del repo

| Tipo | En repo | Dónde |
|------|---------|--------|
| `.env` / `.env.local` | **No** (no commiteados) |
| Formspree form ID | **Sí** (público) | `contacto/page.tsx` → `xrgnqbod` |
| GTM container ID | **Sí** (público) | `layout.tsx` → `GTM-W63ZV9D9` |
| Email negocio | **Sí** (público) | `EmailBtn`, JSON-LD |
| WhatsApp | **Sí** (público) | `WppBtn` |
| API keys privadas | **No** | — |

### Qué es “secreto” vs “público”

| Dato | Tratar como |
|------|-------------|
| `NEXT_PUBLIC_*` | Público (va al bundle cliente) |
| Formspree ID en cliente | Público (cualquiera puede POST al endpoint) |
| Formspree **access token** de API admin | **Secreto** — solo servidor / CI |
| GA4 measurement ID | Público en práctica (en GTM) |
| Passwords, SMTP, Resend keys | **Secreto** — Vercel env, nunca git |

### Reglas

1. **Nunca** commitear `.env`, tokens Formspree admin, claves Resend/SMTP.
2. Si se mueve Formspree a API Route, usar `FORMSPREE_*` o reenvío con key **solo en servidor**.
3. Rotar credenciales en panel si hubo leak; no solo cambiar código.
4. En `contexto/` y PRs: referenciar `process.env.FOO`, no valores reales.

### Vercel / producción

Variables a definir en dashboard (cuando existan):

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_FORMSPREE_ID` | Opcional migración desde hardcode |
| `FORMSPREE_API_KEY` | Solo si hay proxy server-side |

Detalle deploy: `19-deploy-y-entornos.md` (cuando esté completo).

---

## Headers y políticas (pendiente)

No hay en repo:

- `middleware.ts` con security headers (CSP, `X-Frame-Options`, etc.)
- `Content-Security-Policy` restrictiva para GTM

**Nota:** CSP estricta compite con GTM inline; configurar con cuidado si se añade.

---

## Privacidad y datos personales

- Formulario envía **nombre, contacto, descripción** a Formspree (procesador tercero).
- Política: `/politica-de-privacidad` — mantener alineada con campos reales del form.
- No hay cookies propias documentadas en código; GTM/GA4 pueden usar cookies — aviso legal según configuración de consentimiento en GTM (fuera del repo).

---

## Checklist al tocar formulario o datos

- [ ] ¿Campos nuevos tienen validación cliente (y servidor si hay API)?
- [ ] ¿No se commitean secretos?
- [ ] ¿Eventos GTM sin PII en `dataLayer` (no enviar email/tel en claro)?
- [ ] ¿Formspree sigue recibiendo el mismo JSON o se actualizó el panel?
- [ ] ¿Anti-spam considerado si el cambio abre nuevo vector (archivos, URLs)?

---

## Qué NO romper

1. **`isSubmitting`** — evita doble POST a Formspree.
2. **Nombres de campos** `name`, `contact`, `description` (integraciones email).
3. **No loguear** datos del formulario en `console` en producción.
4. **No** exponer tokens admin de Formspree en el cliente.

---

## Relacionado

- Formulario y eventos: `05-formularios-y-conversion.md`
- APIs: `09-api-y-servicios.md`
- Tracking (sin PII): `06-tracking-y-analytics.md`

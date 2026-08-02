# Seguridad y validaciones

Estado real del proyecto: sitio **estático/marketing** sin API propia, sin base de datos y **sin formulario**. La superficie de ataque es mínima; la seguridad depende del **cliente**, de los **headers de Next** y de **buenas prácticas en deploy**.

> **Cambio del 28/07/2026 — canal único WhatsApp.** Se eliminaron el formulario de `/contacto`, la integración con **Formspree** y el componente `EmailBtn`. **El sitio ya no recibe ni envía datos de usuario**: desaparecieron de golpe el vector de spam de formulario, la sanitización de inputs y la exposición de un endpoint público.

---

## Modelo de amenazas (alcance)

| Riesgo | Mitigación actual | Nivel |
|--------|-------------------|--------|
| Spam de formulario | **N/A** — no hay formulario | Eliminado |
| Abuso de endpoint público | **N/A** — no hay endpoint | Eliminado |
| XSS por input de usuario | **N/A** — el sitio no recibe input | Eliminado |
| XSS en scripts del layout | Solo GTM + JSON-LD estáticos, generados en build desde datos del código | Controlado |
| Clickjacking | `X-Frame-Options: SAMEORIGIN` en `next.config.js` | Cubierto |
| Sniffing de tipo MIME | `X-Content-Type-Options: nosniff` | Cubierto |
| Downgrade a HTTP | `Strict-Transport-Security` (1 año, `includeSubDomains`) | Cubierto |
| Fuga de referrer | `Referrer-Policy: strict-origin-when-cross-origin` | Cubierto |
| Filtración de secretos | No hay `.env` ni claves en el repo | OK si se mantiene |
| **Scraping del teléfono** | Número partido en 2 strings, armado en runtime, fuera del JSON-LD y de todo `href` | **Mitigación deliberada** |
| Scraping / bots genéricos | Sin WAF propio | Hosting (Vercel) |

---

## Headers de seguridad (implementados)

En `next.config.js`, aplicados a `/:path*`:

| Header | Valor |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |

Además: `poweredByHeader: false` (no se anuncia Next.js).

**No hay** `Content-Security-Policy`. Una CSP estricta compite con los scripts inline de GTM y del `dataLayer`; si se añade, hay que contemplar `googletagmanager.com` y los inline con nonce, y probar en Preview antes de mergear.

**No hay** `middleware.ts` — los headers se sirven desde la config, que alcanza para un sitio estático.

---

## Protección del número de WhatsApp (invariante del proyecto)

Es la única mitigación "activa" del sitio y es una **decisión de producto**, no un detalle de implementación:

1. El número **nunca se escribe contiguo** en el código: `"5491123" + "787750"`, concatenado en runtime.
2. Se abre con **`window.open`**, no con un `<a href="wa.me/...">` — un `href` dejaría el número completo en el DOM y en el HTML servido.
3. **No va en el JSON-LD** (`telephone` fue removido del schema) ni como texto visible en ninguna página.
4. `layout.tsx` emite `<meta name="format-detection" content="telephone=no">`.

**Por qué importa:** el número expuesto en Ads (extensión de llamada) fue la causa verificada de las llamadas pidiendo trabajo. Ver `contexto/marketing/08-bitacora.md` (28/07/2026).

Es **obscuridad, no criptografía**: frena scrapers automáticos, no a una persona mirando. Aun así, se mantiene.

---

## Rate limiting

### En el código (cliente)

| Mecanismo | Archivo | Comportamiento |
|-----------|---------|----------------|
| **Confirmación en `AlertDialog`** | `WppBtn.tsx`, `WhatsAppCTA.tsx` | Un paso deliberado antes de abrir WhatsApp: evita clicks accidentales y falsas conversiones |

**No hay** (ni hace falta): rate limit por IP, throttling de submits, debounce de eventos. Todo eso protegía el formulario eliminado.

⚠️ El evento `contact_whatsapp` **no está deduplicado en el código**: si el usuario confirma dos veces, se pushean dos eventos. La deduplicación se resuelve del lado de Google Ads (**Recuento = "Una"** en la acción de conversión). Ver `06-tracking-y-analytics.md`.

### En servicios externos

| Servicio | Rate limiting |
|----------|----------------|
| **GTM / GA4** | Cuotas de Google (no afectan al sitio) |
| **Vercel** | Límites de bandwidth/requests del plan |

---

## Sanitización

### Entradas de usuario

**No hay.** El sitio no tiene campos de entrada, ni query params que se rendericen, ni contenido generado por usuarios.

Si alguna vez se agrega una entrada (buscador, filtro por URL, formulario), este archivo debe actualizarse **en el mismo cambio**.

### Salida HTML

| Uso | Archivo | Notas |
|-----|---------|-------|
| `dangerouslySetInnerHTML` | `layout.tsx` y páginas con JSON-LD | Solo scripts GTM, init de `dataLayer` y **JSON-LD** generado en build desde datos fijos del código |
| Contenido de FAQ / casos | Componentes React | Texto estático en TS/JSON — nunca HTML de usuario |

**Regla (en `CLAUDE.md`):** prohibido `dangerouslySetInnerHTML` con input de usuario.

### Contenido estático JSON

`projectsInfo.json`, `faqs.ts` y `siteConfig.ts` los editan desarrolladores, no usuarios. Si algún día hay CMS, validar y sanitizar en build.

---

## Validaciones

| Flujo | Validación |
|-------|------------|
| WhatsApp (flotante e inline) | Modal de confirmación antes de abrir (no valida identidad — no puede) |
| Navegación / enlaces | Routing de Next.js |
| Datos de casos | Tipado TypeScript sobre `projectsInfo.json` vía `getProjectBySlug.ts` |

**Librerías:** no hay Zod, Yup ni React Hook Form — y **no deben agregarse sin decisión explícita** (`CLAUDE.md`). Sin formulario no hay nada que validar.

---

## Variables sensibles

### Estado actual del repo

| Tipo | En repo | Dónde |
|------|---------|--------|
| `.env` / `.env.local` | **No** (no commiteados) | — |
| GTM container ID | **Sí** (público por diseño) | `layout.tsx` → `GTM-W63ZV9D9` |
| Email del negocio | **Sí** (público) | `siteConfig.ts`, JSON-LD |
| WhatsApp | **Sí**, pero **partido** | `WppBtn.tsx`, `WhatsAppCTA.tsx` |
| API keys privadas | **No** | — |

### Qué es "secreto" vs "público"

| Dato | Tratar como |
|------|-------------|
| `NEXT_PUBLIC_*` | Público (va al bundle del cliente) |
| GTM container ID | Público (está en el HTML de todos modos) |
| GA4 measurement ID | Público en la práctica (vive en GTM) |
| Credenciales de Google Ads / GTM / Vercel | **Secreto** — nunca en el repo, ni siquiera en `contexto/` |
| Passwords, SMTP, claves de cualquier proveedor | **Secreto** — env de Vercel, nunca en git |

### Reglas

1. **Nunca** commitear `.env` ni credenciales de ningún panel.
2. En `contexto/` se pueden anotar IDs de cuenta y presupuestos (el repo es privado), **pero nunca credenciales ni API keys**.
3. Si hubo leak, rotar en el panel del proveedor; no alcanza con cambiar el código.
4. En PRs y docs: referenciar `process.env.FOO`, no valores reales.

---

## Privacidad y datos personales

- **El sitio no recolecta datos personales.** No hay formulario, no hay campos, no hay almacenamiento.
- Los datos personales que llegan lo hacen **dentro de WhatsApp**, fuera del sitio y bajo los términos de Meta.
- **Prohibido enviar PII** (nombre, teléfono, email) en el `dataLayer` — invariante de `CLAUDE.md`.
- ✅ `/politica-de-privacidad` y `/terminos-y-condiciones` **actualizadas el 02/08/2026**: declaran que el sitio no tiene formularios ni pide datos, que el contacto ocurre en WhatsApp (bajo políticas de Meta) y que las herramientas de medición no reciben nombre/teléfono/email.
- No hay cookies propias en el código; GTM/GA4 pueden setear las suyas — el aviso de consentimiento se configura en GTM, fuera del repo.

---

## Checklist al tocar conversión o datos

- [ ] ¿El cambio introduce alguna entrada de usuario? (si sí: validar, sanitizar y actualizar este archivo)
- [ ] ¿No se commitean secretos?
- [ ] ¿Los eventos de GTM siguen **sin PII** en el `dataLayer`?
- [ ] ¿El número de WhatsApp sigue partido y fuera del HTML servido?
- [ ] ¿`contact_whatsapp` sigue disparándose solo tras la confirmación?

---

## Qué NO romper

1. **El número partido** y el `window.open` (no convertirlo en un `<a href>` "para que sea más prolijo").
2. **Sin PII** en el `dataLayer`.
3. **Los headers de seguridad** de `next.config.js`.
4. **No loguear** datos en `console` en producción.
5. **No reintroducir un formulario ni un endpoint** sin decisión del dueño: reabre todos los vectores que esta versión eliminó.

---

## Relacionado

- Canales de conversión: `05-formularios-y-conversion.md`
- Servicios externos: `09-api-y-servicios.md`
- Tracking (sin PII): `06-tracking-y-analytics.md`

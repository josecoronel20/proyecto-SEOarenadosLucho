# Tracking y analytics

**Crítico:** cambios en nombres de eventos o en el contenedor GTM rompen conversiones en GA4, Google Ads y Meta sin que el build falle.

---

## Arquitectura de medición

```
Código (React)          →  window.dataLayer.push({ event: '...' })
         ↓
Google Tag Manager      →  GTM-W63ZV9D9 (tags, triggers, variables)
         ↓
    ┌────┴────┬──────────────┐
    ↓         ↓              ↓
  GA4    Google Ads    Meta Pixel
```

- **En el repo:** solo GTM + `dataLayer` (no hay `gtag`, `fbq` ni Pixel en código).
- **GA4, Ads y Meta:** se configuran **dentro de GTM** (o enlazados desde GA4). Verificar en [tagmanager.google.com](https://tagmanager.google.com) el contenedor `GTM-W63ZV9D9`.

---

## Google Tag Manager (GTM)

| Dato | Valor |
|------|--------|
| **Container ID** | `GTM-W63ZV9D9` |
| **Ubicación** | `src/app/layout.tsx` (`<head>` + `<noscript>` en `<body>`) |
| **Capa de datos** | `dataLayer` (nombre por defecto) |

### Orden de carga (obligatorio)

1. Script inline: `window.dataLayer = window.dataLayer || [];`
2. Script GTM (snippet estándar)
3. Resto de la página; componentes client hacen `push` en interacción

**Preconnect:** `https://www.googletagmanager.com`

### Eventos internos de GTM (automáticos)

| Evento | Origen |
|--------|--------|
| `gtm.js` | Primera carga del contenedor |
| `gtm.start` | Timestamp en el push inicial del snippet |

No modificar el ID del contenedor sin migrar todos los tags y conversiones importadas.

---

## GA4

- **No hay** measurement ID (`G-XXXXXXXX`) en el código.
- El tag **Google Analytics: GA4 Configuration** (o equivalente) debe estar en GTM apuntando a la propiedad de Arenados Lucho.
- Los eventos llegan a GA4 si GTM tiene **tags** que escuchan los nombres de la tabla siguiente.

### Eventos recomendados GA4 vs código

El código **no** envía `generate_lead` ni `gtag()` directamente. Eso se hace en GTM mapeando eventos custom del `dataLayer` a eventos recomendados de GA4.

| Evento GA4 (recomendado) | Uso de negocio | Disparadores sugeridos en GTM (desde código) |
|--------------------------|----------------|-----------------------------------------------|
| **`generate_lead`** | Lead / consulta calificada | `form_submit_success` **y/o** `contact_whatsapp` (confirmar en contenedor) |
| `form_submit` | Intento de envío (funnel) | Trigger: Custom Event `form_submit` |
| (opcional) `form_submit_success` | Éxito técnico | Mismo nombre custom o mapear solo a `generate_lead` para no duplicar |

**Ejemplo de regla de producto (documentar en GTM, no en repo):**

```
Evento GA4:     generate_lead
Se dispara cuando:
  - form_submit_success   (formulario /contacto enviado OK)
  - contact_whatsapp      (usuario confirmó abrir WhatsApp)
```

Opcional para email: `contact_email` → `generate_lead` o evento separado `contact` según estrategia de Ads.

### Deduplicación en GA4

- Formulario: `event_id` en `form_submit`, `form_submit_success`, `form_submit_error`.
- Email: `event_id` en `contact_email` (formato `email_{timestamp}_{random}`).

Configurar en GA4 **Event ID** como parámetro de deduplicación si el tag lo envía desde GTM.

---

## Meta Pixel (Facebook)

- **No hay** script `fbq` en el repositorio.
- Si el Pixel está activo, suele cargarse vía tag **Meta Pixel** en GTM (`GTM-W63ZV9D9`).

### Eventos Meta típicos (configuración en GTM)

| Evento Meta | Cuándo (mapear desde dataLayer) |
|-------------|----------------------------------|
| **`Lead`** | `form_submit_success` |
| **`Contact`** | `contact_whatsapp`, `contact_email` |
| (opcional) **`SubmitApplication`** | `form_submit` (solo si se quiere contar intentos) |

**Nombres exactos en Pixel API:** `Lead`, `Contact` (PascalCase en `fbq('track', 'Lead')`).

Verificar en **Events Manager** de Meta que los triggers coinciden con los nombres custom del código (tabla abajo).

---

## Conversiones Google Ads

- **No hay** snippet de conversión (`gtag('event', 'conversion', ...)`) en código.
- Flujo habitual:
  1. Importar conversiones desde **GA4** (`generate_lead` u otro evento marcado como conversión), **o**
  2. Tag **Google Ads Conversion Tracking** en GTM disparado por los mismos custom events que GA4.

**No romper:** al renombrar `form_submit_success` o `contact_whatsapp`, actualizar triggers de Ads en GTM y revalidar en **Herramientas → Conversiones**.

---

## Eventos custom en código (nombres exactos)

Todos usan:

```js
window.dataLayer.push({ ... })
```

Solo si `typeof window !== 'undefined' && window.dataLayer`.

### Resumen

| `event` (exacto) | Archivo | Momento |
|------------------|---------|---------|
| `form_submit` | `src/app/contacto/page.tsx` | Al hacer submit (antes del `fetch` a Formspree) |
| `form_submit_success` | `src/app/contacto/page.tsx` | `response.ok` de Formspree |
| `form_submit_error` | `src/app/contacto/page.tsx` | Error HTTP o `catch` |
| `contact_whatsapp` | `src/components/common/WppBtn.tsx` | Click en **Continuar** del AlertDialog |
| `contact_email` | `src/components/common/EmailBtn.tsx` | Click en botón/link mail (con debounce 2 s) |

### Payload completo por evento

#### `form_submit`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'form_submit'` |
| `event_category` | `'Contact'` |
| `event_label` | `'Contacto Form Submit'` |
| `event_id` | `'form_submit_' + timestamp + '_' + random` |
| `value` | `1` |
| `timestamp` | `Date.now()` al iniciar |
| `form_name` | `'contacto'` |

#### `form_submit_success`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'form_submit_success'` |
| `event_category` | `'Contact'` |
| `event_label` | `'Contacto Form Success'` |
| `event_id` | `'form_success_' + timestamp + '_' + random` |
| `value` | `1` |
| `timestamp` | `Date.now()` |
| `form_name` | `'contacto'` |

#### `form_submit_error`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'form_submit_error'` |
| `event_category` | `'Contact'` |
| `event_label` | `'Contacto Form Error'` |
| `event_id` | `'form_error_' + timestamp + '_' + random` |
| `value` | `0` |
| `timestamp` | `Date.now()` |
| `form_name` | `'contacto'` |

#### `contact_whatsapp`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'contact_whatsapp'` |
| `event_category` | `'Contact'` |
| `event_label` | `'WhatsApp Button Click'` |
| `value` | `1` |
| `timestamp` | `Date.now()` |

*(No lleva `event_id` ni `form_name` en código actual.)*

#### `contact_email`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'contact_email'` |
| `event_category` | `'Contact'` |
| `event_label` | `'Email Button Click'` |
| `event_id` | `'email_' + timestamp + '_' + random` |
| `value` | `1` |
| `timestamp` | `Date.now()` |

### Eventos que **no** existen en código

No buscar ni añadir duplicados con estos nombres salvo decisión explícita en GTM:

- `generate_lead`
- `gtag`, `page_view` manual (GA4 page_view lo gestiona GTM/GA4)
- `fbq`, `Lead`, `Contact` (Meta)
- `phone_click`, `click_to_call` (mencionados en `.cursorrules` como objetivo; **pendiente en código**)

---

## Variables GTM útiles (sugeridas)

Crear en GTM como **Data Layer Variables** si aún no existen:

| Nombre variable GTM | Clave dataLayer |
|---------------------|----------------|
| DLV - event | `event` |
| DLV - event_category | `event_category` |
| DLV - event_label | `event_label` |
| DLV - event_id | `event_id` |
| DLV - form_name | `form_name` |
| DLV - value | `value` |

**Triggers (Custom Event):** nombre del evento = valor exacto de la columna `event` (ej. trigger `CE - form_submit_success` → Event name `form_submit_success`).

---

## Archivos que emiten tracking

| Archivo | `"use client"` | Declara `Window.dataLayer` |
|---------|----------------|---------------------------|
| `src/app/layout.tsx` | No (solo scripts GTM) | Inicializa array |
| `src/app/contacto/page.tsx` | Sí | Sí |
| `src/components/common/WppBtn.tsx` | Sí | Sí |
| `src/components/common/EmailBtn.tsx` | Sí | Sí |

Cualquier componente nuevo con conversión debe seguir el mismo patrón y **documentarse aquí**.

---

## Qué NO romper

1. **ID GTM:** `GTM-W63ZV9D9`.
2. **Inicializar `dataLayer` antes** del script GTM en `layout.tsx`.
3. **Nombres exactos** de `event`: `form_submit`, `form_submit_success`, `form_submit_error`, `contact_whatsapp`, `contact_email`.
4. **`form_name: 'contacto'`** en eventos de formulario (filtros en GTM/GA4).
5. **`form_submit_success`** solo tras éxito real de Formspree (no en el click inicial).
6. **`contact_whatsapp`** solo tras confirmación en modal (intención real).
7. No mover tracking a otro contenedor sin export/import del workspace GTM y prueba en **Preview**.

---

## Checklist de verificación

- [ ] GTM Preview: al enviar contacto aparecen `form_submit` → `form_submit_success`.
- [ ] GTM Preview: WhatsApp → `contact_whatsapp` al confirmar.
- [ ] GA4 DebugView / Tiempo real: eventos o `generate_lead` según mapeo.
- [ ] Meta Test Events (si aplica): `Lead` / `Contact`.
- [ ] Google Ads: conversión registrada en prueba (sin tocar campañas en producción sin aviso).
- [ ] Tras cambio en código, actualizar triggers/tags en GTM y este documento.

---

## Relacionado

- Formulario y endpoints: `05-formularios-y-conversion.md`
- CTAs y componentes: `04-componentes-ui.md`

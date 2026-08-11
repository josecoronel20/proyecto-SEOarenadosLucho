# Tracking y analytics

**Crítico:** cambios en nombres de eventos o en el contenedor GTM rompen conversiones en GA4, Google Ads y Meta sin que el build falle.

> **Estado vigente (28/07/2026):** el sitio tiene **un solo evento de conversión: `contact_whatsapp`**. Los eventos `form_submit`, `form_submit_success`, `form_submit_error` y `contact_email` **fueron eliminados** junto con el formulario, Formspree y `EmailBtn` (decisión de canal único WhatsApp). Si aparecen en un tag de GTM o en una acción de conversión de Ads, están **huérfanos**: no los va a disparar nadie.

---

## Arquitectura de medición

```
Código (React)          →  window.dataLayer.push({ event: 'contact_whatsapp' })
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
3. Resto de la página; los componentes client hacen `push` en interacción

**Preconnect:** `https://www.googletagmanager.com`

### Eventos internos de GTM (automáticos)

| Evento | Origen |
|--------|--------|
| `gtm.js` | Primera carga del contenedor |
| `gtm.start` | Timestamp en el push inicial del snippet |

No modificar el ID del contenedor sin migrar todos los tags y conversiones importadas.

---

## El único evento custom del código

```js
window.dataLayer.push({ ... })
```

Solo si `typeof window !== 'undefined' && window.dataLayer`.

| `event` (exacto) | Archivo | Momento | `event_label` |
|------------------|---------|---------|---------------|
| `contact_whatsapp` | `src/components/common/WppBtn.tsx` | Click en **Continuar** del AlertDialog | `'WhatsApp Button Click'` |
| `contact_whatsapp` | `src/components/common/WhatsAppCTA.tsx` | Click en **Continuar** del AlertDialog | `'WhatsApp CTA Click'` |

Los dos componentes emiten el **mismo nombre de evento** a propósito: para GA4 y Ads son la misma conversión (una consulta abierta). El `event_label` permite separarlos en un informe si hace falta saber si convierte más el flotante o los CTAs inline.

### Payload de `contact_whatsapp`

| Campo | Valor / tipo |
|-------|----------------|
| `event` | `'contact_whatsapp'` |
| `event_category` | `'Contact'` |
| `event_label` | `'WhatsApp Button Click'` (flotante) · `'WhatsApp CTA Click'` (inline) |
| `value` | `1` |
| `timestamp` | `Date.now()` |

*(No lleva `event_id` ni `form_name`.)*

⚠️ **Sin PII.** Nunca agregar teléfono, email ni nombre al payload.

⚠️ **Sin deduplicación por `event_id`.** Si un usuario confirma dos veces, se cuentan dos eventos. Por eso la acción de conversión en Google Ads se configura con **Recuento = "Una"** (ver `contexto/marketing/ads-config/02-conversiones.md`): la deduplicación se resuelve del lado de Ads, no del código.

---

## GA4

- **No hay** measurement ID (`G-XXXXXXXX`) en el código.
- El tag **GA4 Configuration** (o equivalente) debe estar en GTM apuntando a la propiedad de Arenados Lucho.
- Los eventos llegan a GA4 si GTM tiene un **tag** que escucha el custom event `contact_whatsapp`.

### Mapeo recomendado

| Evento GA4 (recomendado) | Uso de negocio | Trigger en GTM |
|--------------------------|----------------|----------------|
| **`generate_lead`** | Lead / consulta calificada | Custom Event `contact_whatsapp` |

El código **no** envía `generate_lead` ni llama a `gtag()` directamente: ese mapeo se hace en GTM.

**Regla de producto (documentar en GTM, no en el repo):**

```
Evento GA4:     generate_lead
Se dispara cuando:
  - contact_whatsapp   (el usuario confirmó abrir WhatsApp)
```

⚠️ **Pendiente a verificar:** que `contact_whatsapp` esté marcado como **evento clave** en GA4 y que la propiedad esté vinculada a Google Ads. Es un bloqueante listado en `contexto/marketing/14-configuracion-objetivo-ads.md`.

---

## Meta Pixel (Facebook)

- **No hay** script `fbq` en el repositorio.
- Si el Pixel está activo, se carga vía tag **Meta Pixel** en GTM.

| Evento Meta | Trigger desde dataLayer |
|-------------|-------------------------|
| **`Lead`** o **`Contact`** | `contact_whatsapp` |

**Nombres exactos en Pixel API:** `Lead`, `Contact` (PascalCase en `fbq('track', 'Lead')`).

---

## Conversiones Google Ads

| Dato | Valor |
|------|-------|
| Cuenta de Ads | `953-841-6905` |
| **ID de conversiones (Google tag)** | `AW-11151875862` |
| Propiedad GA4 | `516818828` ("Arenados Lucho"), **vinculada a Ads** |

⛔ **La etiqueta `gtag.js` de Ads NO está instalada en el sitio, y es a propósito.** Google la ofrece en el asistente de campaña ("Instalar manualmente"). No se pega por dos motivos:

1. El sitio ya carga **GTM** (`GTM-W63ZV9D9`) con el `dataLayer` inicializado antes. Una segunda etiqueta de Google en la misma página rompe ese orden.
2. **Produciría doble conteo.** La conversión ya llega a Ads **importada desde GA4** (`Arenados Lucho SEO (web) contact_whatsapp`). Medir el mismo clic por dos vías es la señal de alarma #13 del plan de Ads. Fundamento completo: `contexto/marketing/17-diagnostico-cuenta-10-08.md` §"Decisión de medición".

Si algún día el volumen justificara una etiqueta directa (menor latencia para pujas automáticas), se migra **eliminando la importada en el mismo movimiento** — nunca conviviendo — y se despliega **desde GTM**, no pegando `gtag.js` en el código.

- Flujo vigente: evento `contact_whatsapp` → GA4 (evento clave) → importación a Ads.

**Estado objetivo de la cuenta:** una sola acción **Principal** llamada `WhatsApp - contacto confirmado`, categoría **Contacto**, recuento **Una**, ventana 30 días. Todo el historial sucio (visitas al sitio, engagements, llamadas, formulario) degradado a **Secundaria**. Detalle y verificación: `contexto/marketing/ads-config/02-conversiones.md`.

**No romper:** al renombrar `contact_whatsapp`, actualizar el trigger en GTM y revalidar en **Objetivos → Conversiones** de Ads.

---

## Eventos que **no** existen en código

No buscar ni añadir duplicados con estos nombres salvo decisión explícita:

- `form_submit`, `form_submit_success`, `form_submit_error` — **eliminados el 28/07/2026** con el formulario
- `contact_email` — **eliminado el 28/07/2026** con `EmailBtn`
- `generate_lead` — se produce en GTM, no en el código
- `gtag`, `page_view` manual (GA4 lo gestiona GTM/GA4)
- `fbq`, `Lead`, `Contact` (Meta) — se producen en GTM
- `phone_click`, `click_to_call` — **prohibidos**: el sitio no expone el teléfono (ver `05-formularios-y-conversion.md`)

---

## Variables GTM útiles (sugeridas)

Crear en GTM como **Data Layer Variables** si aún no existen:

| Nombre variable GTM | Clave dataLayer |
|---------------------|----------------|
| DLV - event | `event` |
| DLV - event_category | `event_category` |
| DLV - event_label | `event_label` |
| DLV - value | `value` |

**Trigger (Custom Event):** Event name = `contact_whatsapp`.

---

## Archivos que emiten tracking

| Archivo | `"use client"` | Declara `Window.dataLayer` |
|---------|----------------|---------------------------|
| `src/app/layout.tsx` | No (solo scripts GTM) | Inicializa el array |
| `src/components/common/WppBtn.tsx` | Sí | Sí |
| `src/components/common/WhatsAppCTA.tsx` | Sí | Usa la declaración global de `WppBtn` |

Cualquier componente nuevo con conversión debe seguir el mismo patrón y **documentarse aquí**.

---

## Qué NO romper

1. **ID GTM:** `GTM-W63ZV9D9`.
2. **Inicializar `dataLayer` antes** del script GTM en `layout.tsx`.
3. **Nombre exacto del evento:** `contact_whatsapp` (el único vigente).
4. **Disparar solo tras la confirmación** en el AlertDialog (intención real, no curiosidad).
5. **Sin PII** en el payload.
6. Un solo `WppBtn` flotante.
7. No mover el tracking a otro contenedor sin export/import del workspace GTM y prueba en **Preview**.

---

## Checklist de verificación

- [ ] GTM Preview: click al CTA → confirmar → aparece `contact_whatsapp` (y solo entonces).
- [ ] GTM Preview: el flotante y un CTA inline disparan el mismo evento, con `event_label` distinto.
- [ ] GA4 DebugView / Tiempo real: llega el evento (o `generate_lead` según el mapeo).
- [ ] Google Ads: la conversión aparece en la columna **"Conversiones"**, no solo en "Todas las conv.".
- [ ] El HTML servido **no** contiene el número contiguo.
- [ ] Tras un cambio en el código, actualizar triggers/tags en GTM y este documento.

---

## Relacionado

- Canales de conversión y componentes: `05-formularios-y-conversion.md`
- CTAs y componentes UI: `04-componentes-ui.md`
- Configuración de la conversión en la cuenta de Ads: `contexto/marketing/ads-config/02-conversiones.md`

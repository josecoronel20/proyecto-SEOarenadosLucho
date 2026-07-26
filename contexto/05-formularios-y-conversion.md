# Formularios y conversión

Documentación crítica: canales de contacto, tracking y qué no romper al modificar código.

---

## Objetivo de conversión

Maximizar **consultas calificadas** vía:

1. **Formulario** en `/contacto` (lead con contexto del proyecto)
2. **WhatsApp** (respuesta rápida, diálogo previo)
3. **Email** (`mailto:` con evento medible)

Prioridad de negocio (`.cursorrules`): contacto con intención clara (obra industrial, volumen, plazos).

---

## Canales de conversión (mapa)

| Canal | Componente / página | Endpoint / destino |
|-------|---------------------|-------------------|
| Formulario web | `app/contacto/page.tsx` | `POST https://formspree.io/f/xrgnqbod` |
| WhatsApp | `common/WppBtn.tsx` (global) | `https://wa.me/5491123787750?text=...` |
| Email | `common/EmailBtn.tsx` | `mailto:arenadoslucho@hotmail.com` |
| CTA navegación | Links → `/contacto` | Sin backend (solo routing) |

**GTM:** `GTM-W63ZV9D9` en `app/layout.tsx` — `dataLayer` inicializado antes del script GTM.

---

## Formulario existente: `/contacto`

**Archivo:** `src/app/contacto/page.tsx`  
**Tipo:** Client Component (`"use client"`).  
**Backend:** Formspree (JSON POST, sin API Route propia).

### Campos

| Campo | `name` | Validación UI | Notas |
|-------|--------|---------------|-------|
| Nombre | `name` | HTML `required` + disabled si vacío | |
| Contacto | `contact` | **Obligatorio para enviar** (`disabled` si vacío); sin `required` HTML | Teléfono o email en un solo campo |
| Descripción del proyecto | `description` | HTML `required` + disabled si vacío | `textarea`, 6 filas |

**Payload enviado a Formspree:**

```json
{
  "name": "...",
  "contact": "...",
  "description": "...",
  "_subject": "Nueva solicitud de contacto - Arenados Lucho"
}
```

Si `contact` vacío en lógica futura, el código actual envía `'(no indicado)'` — hoy el botón exige contacto.

### Estados del formulario

| Estado | Variable | UI |
|--------|----------|-----|
| Enviando | `isSubmitting` | Botón disabled, texto "Enviando...", spinner |
| Éxito | `isSubmitted` | Pantalla completa con check verde + mensaje |
| Error | `error` | Banner rojo sobre el botón |

### Mensajes de éxito (no cambiar sin motivo de producto)

**Título:** `Solicitud enviada`  
**Texto:** `Recibimos tu mensaje. Nos pondremos en contacto contigo a la brevedad.`  
**Acción secundaria:** botón `Enviar otra solicitud` → resetea `isSubmitted`.

### Mensajes de error

`Hubo un error al enviar el formulario. Por favor, intentá nuevamente.`

---

## Endpoint Formspree

```
POST https://formspree.io/f/xrgnqbod
Content-Type: application/json
```

- **No mover** el ID del formulario sin actualizar panel Formspree y notificar al equipo.
- **No** commitear API keys adicionales; este endpoint es público por diseño de Formspree.
- Respuesta esperada: `response.ok` → éxito.

**Campos extra Formspree:** se puede agregar `_gotcha` (honeypot) o configuración en dashboard Formspree — **no implementado en código hoy**; anti-spam principal es validación cliente + rate limit de Formspree.

---

## Eventos de tracking (`dataLayer`)

Todos los eventos usan `window.dataLayer.push({ ... })` si `dataLayer` existe.

### Formulario contacto

| Evento | Cuándo | Campos clave |
|--------|--------|--------------|
| `form_submit` | Al iniciar submit (antes del fetch) | `event_category: 'Contact'`, `form_name: 'contacto'`, `event_id` único |
| `form_submit_success` | `response.ok` | Mismos + `form_submit_success` |
| `form_submit_error` | catch / error HTTP | `form_submit_error`, `value: 0` |

**Importante para GTM/GA4:** mantener nombres de evento si hay tags configurados en el contenedor `GTM-W63ZV9D9`.

### WhatsApp (`WppBtn`)

| Evento | Cuándo |
|--------|--------|
| `contact_whatsapp` | Al confirmar en AlertDialog ("Continuar") |

Campos: `event_category: 'Contact'`, `event_label: 'WhatsApp Button Click'`, `timestamp`.

### Email (`EmailBtn`)

| Evento | Cuándo |
|--------|--------|
| `contact_email` | Un click cada 2 s máximo (dedup) |

Campos: `event_id` único para deduplicación en GA4.

---

## Validaciones (resumen)

| Área | Implementación |
|------|----------------|
| Formulario | HTML5 `required` (nombre, descripción); lógica JS en submit (`name`, `contact`, `description` no vacíos) |
| Submit | `disabled` mientras `isSubmitting` o campos incompletos |
| WhatsApp | Confirmación en modal antes de redirigir |
| Email | `isProcessing` + `sessionStorage` clave `email_last_click` (2 s) |
| Servidor | Sin validación server-side propia (depende de Formspree) |

**No hay:** Zod, React Hook Form, API Route de validación.

---

## Anti-spam y anti-abuso

| Mecanismo | Dónde |
|-----------|--------|
| Botón disabled hasta campos completos | `/contacto` |
| Un envío a la vez (`isSubmitting`) | `/contacto` |
| Formspree rate limiting / spam filter | Servicio externo (dashboard) |
| Debounce email 2 s | `EmailBtn` |
| Modal confirmación WhatsApp | `WppBtn` |
| Número WhatsApp partido en variables | Ofuscación mínima en código (no seguridad real) |

**Implementado (mayo 2026):** campo honeypot oculto `_gotcha` en `/contacto` (bots no envían; Formspree filtra si está configurado en panel).

**No implementado:** reCAPTCHA, hCaptcha.

---

## WhatsApp — detalles técnicos

**Componente:** `WppBtn.tsx`  
**Número (en código):** `549` + `11` + `23787750` → `5491123787750`  
**Mensaje default:** `Hola, me gustaría recibir asesoramiento sobre arenado.`

Flujo: click → AlertDialog → Confirmar → `dataLayer` + `window.open(whatsappUrl)`.

---

## Email — detalles técnicos

**Email (en código):** `arenados` + `lucho@hotmail.com`  
**URL:** `mailto:arenadoslucho@hotmail.com`

Tipos de render según `type` prop — ver `04-componentes-ui.md`.

---

## CTAs que llevan a conversión (sin formulario)

| Ubicación | Destino |
|-----------|---------|
| Hero home | `/contacto` |
| `CTASection` | `/contacto` |
| Header / Footer nav | `/contacto` (ítem "Contactanos") |
| FAQ (bloque final) | `/contacto` |

Estos **no disparan** eventos `form_*`; solo navegación. El embudo se mide en página de contacto + eventos globales Wpp/Email.

---

## Qué NO romper

### Formspree y formulario

1. **URL** `https://formspree.io/f/xrgnqbod` sin coordinar cambio en Formspree dashboard.
2. Nombres de campos JSON (`name`, `contact`, `description`, `_subject`) — emails/notificaciones pueden depender de ellos.
3. Flujo éxito/error: no eliminar `form_submit_success` / `form_submit_error` si GTM los usa en conversiones.
4. No quitar `disabled` en submit durante `isSubmitting` (doble envío).
5. No pasar el formulario a otro servicio sin migrar eventos GTM.

### Tracking

1. **GTM ID** `GTM-W63ZV9D9` y script `dataLayer` en `<head>` antes de GTM.
2. Nombres de eventos: `contact_whatsapp`, `contact_email`, `form_submit`, `form_submit_success`, `form_submit_error`.
3. Declaración global `Window.dataLayer` en archivos client que hacen push.

### WhatsApp / Email

1. Un solo **`WppBtn`** en layout — no agregar segundo flotante.
2. Mantener **AlertDialog** en WhatsApp (evita clicks accidentales y permite medir intención).
3. **EmailBtn:** conservar deduplicación de eventos si se toca el handler.

### UX / copy legal

1. Mensaje de éxito en español argentino coherente con el tono del sitio.
2. Placeholder del textarea orientado a obra (superficie, dimensiones, ubicación, plazos).

---

## Checklist al modificar conversión

- [ ] ¿Los eventos `dataLayer` siguen disparándose en el mismo orden?
- [ ] ¿Formspree recibe el mismo shape de JSON?
- [ ] ¿GTM en preview muestra los tags?
- [ ] ¿WhatsApp y mail siguen funcionando en móvil?
- [ ] ¿Submit no permite doble click?
- [ ] ¿Actualicé este archivo si cambió endpoint o eventos?

---

## Mejoras futuras (no hacer sin plan)

- Extraer `ContactForm` a `components/common/` reutilizable.
- Honeypot + validación server opcional (API Route proxy a Formspree).
- Unificar CTAs hero/FAQ con `Button asChild`.
- Variable de entorno `NEXT_PUBLIC_FORMSPREE_ID` en lugar de URL hardcodeada.
- Teléfono visible en header (`.cursorrules` lo menciona como objetivo).

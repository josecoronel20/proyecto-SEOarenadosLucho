# Conversión y canales de contacto

Documentación crítica: cómo convierte el sitio y qué no romper al modificar código.

> **Decisión del dueño (28/07/2026) — CANAL ÚNICO WHATSAPP.** Se eliminaron del sitio el **formulario de `/contacto`**, la integración con **Formspree** (`xrgnqbod`) y el componente **`EmailBtn`**. Ya **no existen** los eventos `form_submit`, `form_submit_success`, `form_submit_error` ni `contact_email`, ni ningún endpoint de formulario. **No reintroducir un formulario sin decisión explícita del dueño.** Registro: `contexto/marketing/08-bitacora.md` (28/07/2026).

---

## Objetivo de conversión

Maximizar **consultas calificadas por WhatsApp**. El sitio no captura datos: empuja a abrir una conversación, donde el dueño responde y coordina la visita.

Por qué un solo canal: el dueño atiende personalmente y el WhatsApp es donde efectivamente responde. Un formulario que nadie mira produce leads perdidos y una conversión falsa en Ads.

Prioridad de negocio (`.cursorrules`): contacto con intención clara (obra, PYME con galpón, piletas).

---

## Canales de conversión (mapa)

| Canal | Componente / página | Destino |
|-------|---------------------|---------|
| WhatsApp flotante (global) | `common/WppBtn.tsx` — **uno solo**, en `layout.tsx` | `https://wa.me/<número>?text=...` vía `window.open` |
| WhatsApp inline (CTAs) | `common/WhatsAppCTA.tsx` | Ídem, con `message` pre-cargado por contexto |
| CTA navegación | Links → `/contacto` | Sin backend (solo routing) |

**GTM:** `GTM-W63ZV9D9` en `app/layout.tsx` — `dataLayer` inicializado **antes** del script GTM.

**No hay:** API Routes de negocio, backend de formularios, servicio de email, base de datos.

---

## `/contacto` — página WhatsApp-first (sin formulario)

**Archivo:** `src/app/contacto/page.tsx`
**Tipo:** **Server Component** (ya no necesita `"use client"`: la interactividad vive en `WhatsAppCTA`).

Sigue existiendo como ruta porque **es landing de Google Ads**, está en el sitemap y la enlazan home, landing de piletas, Header y Footer: borrarla sería un 404 en los anuncios.

Estructura: `<h1>` con la keyword · párrafo de promesa (visita y presupuesto sin costo) · **CTA grande de WhatsApp** · 3 puntos ("Mandanos una foto" / "Respondemos rápido" / "Buenos Aires y AMBA") · bloque "Qué nos ayuda saber" (qué arenar, tamaño, zona, plazo) · link a `/arenado-de-piletas`.

El bloque "Qué nos ayuda saber" cumple la función que cumplía el formulario: le dice al usuario qué contar en el primer mensaje, sin pedirle que complete campos.

---

## `WhatsAppCTA` — el CTA inline reutilizable

**Archivo:** `src/components/common/WhatsAppCTA.tsx` (Client Component).

```tsx
<WhatsAppCTA message={WPP_MSG} className={WPP_BTN}>
  <MessageCircle className="w-6 h-6" />
  Escribinos por WhatsApp
</WhatsAppCTA>
```

| Prop | Uso |
|------|-----|
| `message` | Texto pre-cargado en el chat. Se personaliza por contexto (dueño de casa vs contratista en la landing de piletas). Default: consulta por pileta |
| `className` | Estilos del botón (el componente no impone diseño) |
| `children` | Contenido del botón (ícono + texto) |

Replica el patrón de `WppBtn`: número partido, `AlertDialog` de confirmación, evento solo tras confirmar, `window.open`. **No es un segundo botón flotante** — el flotante global sigue siendo único.

---

## Evento de tracking (`dataLayer`)

**Un solo evento de conversión en todo el sitio: `contact_whatsapp`.** Detalle completo del payload en `06-tracking-y-analytics.md`.

| Evento | Dónde | Cuándo |
|--------|-------|--------|
| `contact_whatsapp` | `WppBtn.tsx` (`event_label: 'WhatsApp Button Click'`) | Al confirmar **Continuar** en el AlertDialog |
| `contact_whatsapp` | `WhatsAppCTA.tsx` (`event_label: 'WhatsApp CTA Click'`) | Ídem |

Ambos hacen `window.dataLayer.push({ ... })` protegido por `typeof window !== 'undefined' && window.dataLayer`.

⚠️ **El evento va después de la confirmación, nunca en el click del botón.** Medir el click mide curiosidad; medir la confirmación mide intención — y es lo que Google Ads usa para pujar.

---

## Validaciones y anti-abuso

| Área | Implementación |
|------|----------------|
| WhatsApp | Confirmación en `AlertDialog` antes de redirigir (evita clicks accidentales y mide intención real) |
| Número | Partido en 2 strings, armado en runtime, abierto con `window.open` — nunca contiguo en el HTML ni en un `href` |
| Servidor | No aplica: no hay envío de datos desde el sitio |

**No hay** (ni hace falta): Zod, React Hook Form, honeypot, reCAPTCHA, rate limiting. Todo eso servía al formulario eliminado.

**El anti-spam real hoy es WhatsApp:** el spam llega al chat, no al sitio.

---

## WhatsApp — detalles técnicos

**Número (en código):** `"5491123" + "787750"` → se arma en runtime.
**Mensajes default:**
- `WppBtn`: `Hola, me gustaría recibir asesoramiento sobre arenado.`
- `WhatsAppCTA`: `Hola, quiero consultar por el arenado de mi pileta.` (o el `message` que reciba)

Flujo: click → `AlertDialog` → **Continuar** → `dataLayer.push` → `window.open(whatsappUrl, '_blank', 'noopener,noreferrer')`.

⚠️ **El número NUNCA se escribe contiguo** (anti-scraping): ni en el código, ni en el JSON-LD (`telephone` fue removido del schema), ni como texto visible en el sitio. Es la razón por la que se usa `window.open` y no un `<a href>`.

---

## CTAs que llevan a conversión

| Ubicación | Destino |
|-----------|---------|
| Hero home | `/contacto` |
| `CTASection` | `/contacto` |
| Header / Footer nav | `/contacto` (ítem "Contactanos") |
| FAQ (bloque final) | `/contacto` |
| Landing de piletas | `WhatsAppCTA` inline (varios bloques) |

Los links a `/contacto` **no disparan** eventos; solo navegación. El embudo se mide con `contact_whatsapp` desde cualquier página.

---

## Qué NO romper

### Tracking

1. **GTM ID** `GTM-W63ZV9D9` y `dataLayer` inicializado en `<head>` **antes** del snippet GTM.
2. **Nombre exacto del único evento vigente:** `contact_whatsapp`. Renombrarlo rompe GA4 y Google Ads sin que el build falle.
3. `contact_whatsapp` **solo tras confirmar el AlertDialog** — no adelantarlo al click.
4. **Sin PII** (teléfono, email, nombre) en el payload del `dataLayer`.
5. Declaración global `Window.dataLayer` en los archivos client que hacen push.

### WhatsApp

1. **Un solo `WppBtn` flotante** (global en el layout) — no agregar un segundo.
2. Mantener el **`AlertDialog`** en ambos componentes.
3. **Nunca** escribir el número contiguo, ni ponerlo en un `href`, ni devolverlo al JSON-LD.

### Ruta

1. **No borrar `/contacto`**: es landing de Ads y está enlazada en todo el sitio.
2. **No reintroducir el formulario** (ni Formspree, ni un reemplazo) sin decisión explícita del dueño: cambiaría la única conversión de la cuenta de Ads.

---

## Checklist al modificar conversión

- [ ] ¿`contact_whatsapp` sigue disparándose **solo** tras confirmar el modal?
- [ ] ¿Sigue habiendo un solo botón flotante?
- [ ] ¿El número quedó partido y fuera del HTML? (buscar `5491123787750` en el HTML servido: no debe aparecer)
- [ ] ¿GTM en preview muestra el tag?
- [ ] ¿WhatsApp abre bien en móvil y desktop?
- [ ] ¿Actualicé este archivo y `06-tracking-y-analytics.md` si cambió algo?

---

## Relacionado

- Eventos y payloads exactos: `06-tracking-y-analytics.md`
- Componentes y CTAs: `04-componentes-ui.md`
- Configuración de la conversión en Google Ads: `contexto/marketing/ads-config/02-conversiones.md`

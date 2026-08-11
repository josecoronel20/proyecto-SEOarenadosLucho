# Medición y KPIs

Qué se mide, dónde se mira y con qué rutina. La implementación técnica del tracking (GTM `GTM-W63ZV9D9`, eventos `dataLayer`, payloads) vive en `contexto/06-tracking-y-analytics.md` y es **intocable** sin migración coordinada.

## Fuentes de verdad

| Dato | Fuente | Acceso |
|------|--------|--------|
| Leads (WhatsApp) | GA4 — evento **`contact_whatsapp`** (el único del sitio desde el 28/07/2026) | **Propiedad GA4 `516818828`** ("Arenados Lucho") — verificado 10/08/2026: es **evento clave** y tiene flujo activo |
| Leads reales recibidos | **Chats de WhatsApp del dueño** (canal único) | Manual |
| Rendimiento orgánico | Google Search Console | _verificar propiedad tras migración_ |
| Rendimiento pago | Google Ads (+ scripts de `ads-scripts/`) | _completar ID cuenta_ |
| Velocidad / CWV | PageSpeed Insights, informe CWV de Search Console | Público |

**Regla de coherencia:** GA4, Ads y los chats nunca van a coincidir exacto; lo que importa es que las **tendencias** coincidan. Si GA4 dice 20 leads y llegaron 4 chats, hay un problema de medición — investigar antes de optimizar nada.

⚠️ **Brecha estructural del canal único:** `contact_whatsapp` se dispara al confirmar el modal, no al enviar el mensaje. Siempre va a haber más eventos que chats (gente que confirma y no escribe). Es esperable; lo que hay que vigilar es que la **proporción** se mantenga estable.

## KPIs y definiciones

| KPI | Definición exacta | Frecuencia |
|-----|-------------------|------------|
| **Leads/mes** | Eventos **`contact_whatsapp`** en GA4 (canal único). Cruzar siempre contra los chats reales: el evento mide "confirmó abrir WhatsApp", no "escribió" | Mensual |
| **% obra/PYME (métrica de la transición)** | Leads de obra/restauración + PYMEs galpón / leads totales, contados a mano del inbox. Piletas y trabajos chicos cuentan como leads VÁLIDOS (hoy se toma casi todo) — lo que se mide es el avance de la transición, no "calidad" | Mensual |
| **CPA Ads** | Costo / conversiones primarias en Google Ads | Semanal |
| **Tasa de conversión de landing** | Leads / sesiones de `/servicios`, `/arenado-de-piletas` y `/contacto` | Mensual |
| **Impresiones y clics orgánicos** | Search Console, cluster industrial (queries del `03-keywords-maestro.md`) | Mensual |
| **Posición media keywords core** | Search Console, filtrado por las keywords del Cluster 1 | Mensual |
| **Términos basura filtrados** | Negativas agregadas ese mes (del ciclo n-gram) | Semanal |

## Rutinas

### Semanal (~30 min, con scripts + Claude)

1. Llega el email del `02-reporte-semanal.js` y el `03-ngram-terminos.js`.
2. Pegar en Claude → análisis según `05-google-ads-operacion.md` y `06-google-ads-scripts.md`.
3. Aplicar cambios acordados en la cuenta.
4. Anotar en `08-bitacora.md` solo si hubo cambios.

### Mensual (~1 h)

1. Completar la tabla de línea de tiempo (abajo) con los KPIs del mes.
2. Search Console: queries nuevas con impresiones → actualizar `03-keywords-maestro.md`.
3. Cruce de calidad: revisar el inbox y clasificar leads (industrial / particular / basura).
4. Decidir UNA mejora prioritaria del mes siguiente (contenido, campaña o landing) y anotarla en la bitácora.

## Línea de tiempo de KPIs (completar cada mes)

| Mes | Leads | % calif. | Gasto Ads | CPA | Clics org. | Notas |
|-----|-------|----------|-----------|-----|------------|-------|
| _jul 2026 (pre-migración)_ | | | | | | Línea base a capturar |
| | | | | | | |

> La primera fila (línea base) se completa ANTES del corte de dominio para poder medir el efecto de la migración.

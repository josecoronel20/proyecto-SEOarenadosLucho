# Automatizaciones vigentes

Inventario de todo lo que corre **solo** (sin intervención humana), cómo enterarse de lo que hizo y cómo frenarlo. Cualquier asistente que trabaje en este proyecto debe conocer este archivo para no duplicar ni pisar automatizaciones.

## 1. Google Ads — scripts dentro de la cuenta

Aprobado por el dueño el 25/07/2026 como **modelo objetivo**: piloto automático con topes. **Estado real (26/07/2026):** instalados y programados el **guardián (06)** y los 3 de solo lectura (**02, 03, 04**), verificados en Vista previa (el guardián logueó su heartbeat OK). **Tope de gasto YA activo:** presupuesto diario nativo de la campaña activa fijado en **ARS 10.000/día** + guardián diario como red secundaria. El **autopilot (05) sigue SIN instalar** a propósito (recién con conversiones fluyendo y URLs en 200). Detalle y política: `06-google-ads-scripts.md`.

| Script | Frecuencia | Hace solo | Estado |
|--------|------------|-----------|--------|
| `05-autopilot.js` | Semanal (lun 07:00) | Negativas de lista negra, negativas exactas de términos que gastan sin convertir, pausa de keywords sangrantes. Máx. 25 negativas + 5 pausas por corrida; marca protegida; email de cada cambio | ⏳ **NO instalar aún** — recién con conversiones fluyendo + URLs 200 |
| `06-guardian-presupuesto.js` | **Diario** (06:00) | Red secundaria del tope **ARS 300.000/mes**: avisa al 80%, pausa todo al ~95% (margen por latencia), reactiva al cambiar el mes. Heartbeat + kill-switch. El freno duro por día es el **presupuesto nativo ≈ tope/30** (en la UI) | ✅ **Instalado y programado (diario)** — 26/07/2026; Vista previa OK (heartbeat) |
| `02-reporte-semanal.js` | Semanal (lun) | Solo lee: reporte de rendimiento por email | ✅ **Instalado** — 26/07/2026 |
| `03-ngram-terminos.js` | Semanal | Solo lee: análisis n-gram para negativas | ✅ **Instalado** — 26/07/2026 |
| `04-chequeo-urls.js` | Diario en migración, luego semanal | Solo lee: alerta URLs finales rotas | ✅ **Instalado** — 26/07/2026 |

**Frenarlos (3 vías):** (1) kill-switch remoto — poner `STOP` en la celda A1 de la hoja de control (si está configurada en `HOJA_CONTROL_URL` del guardián); (2) `MODO_PRUEBA: true` en el CONFIG del autopilot; (3) Google Ads → Herramientas → Scripts → pausar o eliminar.
**Cambiar el tope de gasto:** editar `TOPE_MENSUAL` en `06-guardian-presupuesto.js` (en la cuenta) **y** registrar la decisión en `08-bitacora.md`.

## 2. Vigilancia SEO — tarea programada de Claude

| Qué | Detalle |
|-----|---------|
| Nombre | "Vigilancia SEO semanal — Arenados Lucho" |
| Cuándo | Todos los **lunes 08:00** (hora AR) |
| Qué hace | Audita el sitio en vivo: que las URLs del sitemap respondan 200 (hoy 11 = 7 estáticas + 4 casos, derivadas de `getAllSlugs()`), robots.txt y sitemap.xml existentes y con dominio `.com`, títulos/descriptions correctos, rutas legacy sin contenido, PageSpeed móvil de `/` y `/servicios` (alerta si < 70), GTM presente |
| Cómo avisa | Notificación push + email al dueño con informe corto y UNA prioridad de la semana |
| Estado | 🗓️ **Programada**; primera corrida prevista lunes 27/07/2026 08:00 AR — pendiente de confirmar la primera ejecución (aún no ocurrió) |
| Frenarla / editarla | Desde la app de Claude (sección de tareas programadas), o pedírselo a Claude en cualquier chat |

## 3. Qué NO está automatizado (requiere humano o Claude en sesión)

- Crear/modificar **campañas, anuncios y presupuestos** de Ads → sesión de Chrome supervisada + registro en bitácora.
- **Cambios de código** del sitio (SEO on-page, contenido, casos de éxito) → Claude Code sobre el repo; commit/push siempre a pedido del dueño.
- **Análisis estratégico**: los emails de los scripts se pegan en un chat de Claude para decidir cambios de rumbo (rutina en `07-medicion-y-kpis.md`).
- Publicación de casos de éxito y contenido nuevo (`04-plan-de-contenidos.md`).

## 4. Pendientes para cerrar el círculo autónomo

1. **Instalar el autopilot (05) + relanzar la campaña** (`05-google-ads-operacion.md`) — solo cuando: conversiones GA4→Ads limpias y verificadas (primarias = `form_submit_success` + `contact_whatsapp` + llamadas), URLs finales en 200, y ≥2-4 semanas de data. *(Los otros 4 scripts + auditoría inicial + tope de gasto: hechos el 26/07/2026.)*
2. **Token de GitHub** (fine-grained, solo este repo, Contents read/write): permite que Claude audite y corrija código en sesiones programadas sin la computadora del dueño prendida.
3. Evaluar a futuro (decisión explícita + bitácora): reporte de Ads hacia una hoja de cálculo pública para que la revisión semanal de Claude lea datos de la cuenta sin intervención.

## Regla de oro

Toda automatización nueva, cambio de tope o baja de un script **se registra en `08-bitacora.md`** con fecha y motivo. Si un asistente detecta que una automatización listada acá no está corriendo (no llegan emails, no hay informe del lunes), avisar al dueño en vez de asumir.

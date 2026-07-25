# Workflow: Claude + Google Ads Scripts

Cómo se opera la cuenta de Ads con scripts (JavaScript que corre **dentro** de Google Ads) y Claude como analista. Los scripts extraen datos y aplican controles; **Claude analiza los reportes y propone los cambios**; los cambios estructurales los aplica una persona en la cuenta.

## Ciclo de trabajo

```
Script corre programado en Google Ads (semanal)
        ↓  (email con CSV / log)
Usuario trae el CSV o lo pega en el chat de Claude
        ↓
Claude analiza contra contexto/marketing/ (keywords, reglas, KPIs)
        ↓
Propuesta concreta: negativas, pujas, pausas, titulares nuevos
        ↓
Se aplica en la cuenta → se registra en 08-bitacora.md
```

## Instalación (una sola vez por script)

1. Google Ads → **Herramientas → Acciones en bloque → Scripts** (o "Scripts" en el menú de herramientas).
2. `+` nuevo script → pegar el contenido del archivo `.js` de [`ads-scripts/`](./ads-scripts/).
3. Completar el bloque `CONFIG` del inicio (email de destino, etc.).
4. **Autorizar** cuando lo pida, correr con "Vista previa" primero (no aplica cambios), revisar el log.
5. Programarlo: "Frecuencia" → semanal (lunes temprano recomendado).

## Scripts disponibles

| Archivo | Qué hace | Frecuencia | ¿Modifica la cuenta? |
|---------|----------|------------|---------------------|
| `ads-scripts/01-auditoria-cuenta.js` | Radiografía completa: campañas, grupos, keywords, conversiones, gasto 30/90 días. Correr primero al reactivar. | Manual (una vez, y ante dudas) | No — solo lee |
| `ads-scripts/02-reporte-semanal.js` | Rendimiento últimos 7 días por campaña y keyword + alertas (gasto sin conversiones, QS bajo, CPC disparado). Envía CSV por email. | Semanal | No — solo lee |
| `ads-scripts/03-ngram-terminos.js` | Análisis n-gram (1 y 2 palabras) de términos de búsqueda de 30 días: dónde se va la plata sin convertir → candidatas a negativas. | Semanal o quincenal | No — solo lee |
| `ads-scripts/04-chequeo-urls.js` | Verifica que toda URL final de anuncios/keywords responda 200 (crítico durante la migración Framer→Vercel). Alerta por email si hay rotas. | Diario durante migración, luego semanal | No — solo lee |
| `ads-scripts/05-autopilot.js` | **Aplica cambios solo:** negativas de lista negra, negativas exactas de términos que gastan sin convertir, y pausa de keywords sangrantes. Topes por corrida; email de cada cambio. | Semanal (lunes 07:00) | **Sí — con topes duros** |
| `ads-scripts/06-guardian-presupuesto.js` | **Red secundaria del tope:** avisa al 80%, pausa TODO al ~95% del mensual (margen por latencia) y reactiva al cambiar el mes. Heartbeat + kill-switch. El freno duro por día es el **presupuesto nativo de campaña ≈ tope/30 (en la UI)**. | **Diario** (06:00) | **Sí — pausa/reactiva** |

**Política aprobada por el dueño el 25/07/2026** (reemplaza la decisión previa del mismo día de "solo lectura + cambios a mano"): el **modelo objetivo** es piloto automático con topes. Los scripts 05 y 06 aplican cambios sin intervención humana dentro de estos límites inviolables: nunca crean campañas ni anuncios, nunca suben presupuestos ni pujas, máximo 25 negativas y 5 pausas por corrida, las keywords de marca están protegidas, y **cada cambio se informa por email**. Todo lo estructural (campañas nuevas, presupuestos, anuncios) pasa por Claude + sesión de Chrome supervisada.

> **⚠️ Estado real (no operativo todavía):** al 25/07/2026 **ningún script está instalado** en la cuenta (ver `09-automatizaciones.md`). Hasta instalarlos y verificar el trigger en la UI, **no hay autopilot ni tope de gasto real**. No afirmar "tope duro vigente" sin captura del trigger en Google Ads → Scripts.

> **El tope de ARS 300.000 no es solo el guardián.** El guardián corre a intervalos y depende del reporting (con latencia), así que por sí solo permite sobregasto de hasta ~1 día. El **freno duro real es fijar el presupuesto diario nativo de la campaña ≈ tope/30 (~ARS 10.000/día)** en la UI; el guardián es la red secundaria (pausa al ~95% del mensual). **Kill-switch:** `MODO_PRUEBA: true` (autopilot) o la celda `RUN/STOP` de la hoja de control (`HOJA_CONTROL_URL` del guardián); o pausar el script en Google Ads.

## Cómo pedirle el análisis a Claude

Pegar el CSV/log del script y pedir, por ejemplo:

- "Analizá este n-gram según `03-keywords-maestro.md` y proponé negativas nuevas" → Claude devuelve lista de negativas con concordancia sugerida y justificación.
- "Con este reporte semanal, ¿qué keywords pauso y dónde ajusto puja?" → contra las reglas de `05-google-ads-operacion.md`.
- "Redactá 5 titulares RSA nuevos para el grupo norma-sa3-iso" → usando mensajes clave de `contexto/08-google-ads-y-landings.md`.

Claude debe leer siempre `05-google-ads-operacion.md` (reglas duras) antes de proponer cambios.

## Límites de Ads Scripts a tener en cuenta

- Tiempo máximo de ejecución 30 min; cuentas chicas como esta no se acercan.
- `MailApp` tiene cuota diaria de emails — suficiente para reportes semanales.
- Los scripts ven la cuenta donde están instalados (no MCC salvo versión adaptada).
- Cambios de la API de Google Ads pueden requerir ajustes en los GAQL de los scripts; si un script falla, traer el error al chat y Claude lo corrige.

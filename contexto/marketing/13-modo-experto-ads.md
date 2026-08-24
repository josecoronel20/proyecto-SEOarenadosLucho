# Modo experto — gestión profesional de Google Ads
> ⚠️ **Las palabras negativas de Google NO reconocen variantes.** Singular, plural y acentos son términos distintos: `maquinas para arenar` no bloquea `maquina para arenar`. Al agregar una negativa, agregar también singular, plural y la variante con y sin acento. Verificado con gasto real el 24/08/2026 (ver `08-bitacora.md`).

> ⚠️ **Antes de escribir o aprobar cualquier texto de anuncio, leer [`contexto/21-realidad-operativa.md`](../21-realidad-operativa.md).** Un anuncio promete en 30 caracteres lo que después hay que cumplir en el lugar. Ahí está qué se hace, qué no, y qué datos no entran en un aviso porque no entra su condición.


> **Decisión del dueño (28/07/2026):** Claude trabaja sobre la cuenta como un **consultor senior de Google Ads**, al lado del dueño. No alcanza con fixes básicos (negativas, quitar un asset): se trabaja **en profundidad** — análisis de datos reales, estructura, configuraciones, calidad, pujas y medición — buscando el mejor rendimiento posible. Este archivo define QUÉ significa eso en la práctica. Se carga vía `CLAUDE.md` para toda tarea de marketing/Ads.

## Principios (no negociables)

1. **Datos antes que opinión.** Ningún cambio sin un dato de la cuenta que lo justifique (dossier `10-…`, scripts, capturas, términos de búsqueda). Si falta el dato, primero se pide.
2. **Diagnóstico → hipótesis → UN cambio → medir.** Un cambio estructural por vez, con 1–2 semanas de datos antes del siguiente. Todo a `08-bitacora.md`.
3. **Ejecución guiada, análisis profundo.** El dueño hace los clics (la UI de Ads crashea la automatización y los montos están bloqueados por el harness — ver memoria); Claude dirige con precisión de experto y verifica por captura. La profundidad va en el ANÁLISIS, no en quién clickea.
4. **La medición es la base de todo.** Optimizar contra conversiones sucias es peor que no optimizar. Primaria = **`contact_whatsapp` y nada más** (canal único desde el 28/07/2026), antes de escalar nada.
5. **Plata finita:** tope 300.000/mes (guardián) · arranque ~5.000/día · subas de 20–30% por vez solo con CPA estable y trabajos cobrados.

## Las 8 áreas de análisis profundo (checklist del profesional)

| # | Área | Qué se mira | Ejemplo real de ESTA cuenta |
|---|------|-------------|------------------------------|
| 1 | **Salud de conversiones** | Acciones primarias/secundarias, duplicados, ventana de conversión, modelo de atribución, valores, import GA4↔Ads | "Local actions" contaminando primarias (dossier §1); conv. históricas infladas |
| 2 | **Términos de búsqueda / waste** | SQR + n-gram: dónde se va la plata sin convertir; negativas nuevas cada semana | `arenado` en FRASE quemó **208k/21 conv (~9.9k CPA)** vs `arenados` exacta 28k/10 conv (~2.8k) |
| 3 | **Estructura** | Campañas/grupos por intención, concordancias, keywords solapadas (canibalización interna), prioridad de puja | 3 variantes de `arenado` compitiendo entre sí en el mismo grupo; BROAD regadas en campañas viejas |
| 4 | **Quality Score y sus 3 componentes** | QS por keyword + CTR esperado / relevancia del anuncio / experiencia de landing — cada componente pide un fix distinto | Core keywords con **QS 5** (mediocre): diagnosticar qué componente falla antes de tocar pujas |
| 5 | **Anuncios (RSA)** | Ad strength, cobertura de titulares/descripciones, pinning, mensaje-match anuncio↔landing↔keyword, assets (sitelinks, callouts, imagen) | Assets: sitelinks a /servicios, /arenado-de-piletas, /casos, /contacto; ❌ llamada NO (quitada 27/07) |
| 6 | **Configuraciones enterradas** | Redes (search partners/display OFF), ubicación **"presencia" vs "interés"**, idiomas, programación de anuncios, dispositivos, rotación, **auto-apply recommendations OFF**, exclusión de apps | A auditar — nunca se revisaron en esta cuenta (ver "Sesión #1" abajo) |
| 7 | **Pujas y presupuesto** | Estrategia por madurez de datos: CPC manual/Max clics con tope → Max conversiones → tCPA (recién con ≥15–30 conv/mes LIMPIAS); pacing, cuota de impresiones perdida por presupuesto vs ranking | Hoy: sin saldo → momento ideal para dejar todo perfecto ANTES de recargar |
| 8 | **Competencia y mercado** | Auction insights (quién puja, solapamiento, cuota), estacionalidad (piletas), CPC por segmento/zona | Piletas = estacional (pico ago-dic); invierno = anticipación barata |

## Protocolo de datos (cómo le llegan los datos a Claude)

- **Automático semanal:** emails de los scripts (lunes) — `02-reporte-semanal`, `03-ngram-terminos`, `04-chequeo-urls` → pegarlos en el chat.
- **A demanda:** correr `ads-scripts/01-auditoria-cuenta.js` (Vista previa → copiar salida) para radiografía completa.
- **Capturas dirigidas:** Claude pide pantallas exactas (ej. columnas de QS con los 3 componentes, Configuración de campaña, Auction insights). El dueño captura, Claude analiza.
- **Dossier base:** `10-cuenta-ads-auditoria.md` (corte 26/07) — la foto histórica de 365 días.

## Cadencia profesional

| Frecuencia | Trabajo |
|------------|---------|
| **Semanal** | SQR/n-gram → negativas · CPA y pacing · URLs 200 · anotar si hubo cambios |
| **Quincenal** | Keywords sin impresiones/conv → pausar o ajustar puja · revisar cuota de impresiones perdida |
| **Mensual** | RSAs (ad strength, variantes) · cruce Ads↔GA4↔inbox (leads REALES) · QS trend · auction insights · KPIs en `07-medicion-y-kpis.md` |
| **Trimestral** | Estructura completa vs mapa de keywords · estacionalidad piletas · revisión de la transición (% obra/PYME) |

## Sesión de profundidad #1 — pendiente de datos (pedir al dueño)

La cuenta está **sin saldo** = momento perfecto para dejarla impecable antes de recargar. Capturas necesarias (campaña `busqueda-arenadoIndustrial` + nivel cuenta):

1. **Configuración de campaña** completa: redes (¿search partners/display tildados?), ubicaciones y su opción avanzada (**presencia vs interés** — crítico: "interés" muestra avisos fuera de AMBA), idiomas, rotación de anuncios, programación.
2. **Recomendaciones → Aplicación automática**: ¿está ON? (si está ON, Google toca la cuenta solo → apagar).
3. **Keywords con columnas de QS**: agregar columnas *Nivel de calidad, CTR esperado, Relevancia del anuncio, Experiencia con la página de destino*.
4. **Conversiones (Objetivos → Conversiones)**: lista completa con columna "Acción primaria/secundaria" y ventana de conversión.
5. **Anuncios**: los RSA activos con su **Ad strength** y assets asociados.
6. **Términos de búsqueda** (últimos 30 días si hubo tráfico).

Con eso Claude entrega el diagnóstico profundo + plan de cambios priorizado (impacto × esfuerzo), para ejecutar guiado.

## Relacionado
Dossier: `10-cuenta-ads-auditoria.md` · Operación/relanzamiento: `05-google-ads-operacion.md` · Keywords/negativas: `03-keywords-maestro.md` · Scripts: `06-google-ads-scripts.md` · Automatizaciones: `09-automatizaciones.md` · KPIs: `07-medicion-y-kpis.md`.

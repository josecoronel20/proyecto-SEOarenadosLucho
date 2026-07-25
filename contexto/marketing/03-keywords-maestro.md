# Mapa maestro de keywords

Fuente única de keywords para **SEO y Google Ads**. Cada grupo mapea a UNA URL (regla: una intención por URL). Los grupos coinciden con los de `contexto/08-google-ads-y-landings.md`; este archivo agrega intención informacional, prioridades y el estado de validación.

> **Estado:** lista inicial basada en el copy del sitio y conocimiento del rubro. **Pendiente validar volúmenes** con el Planificador de palabras clave cuando se reactive la cuenta de Ads, y con términos de búsqueda reales (script n-gram) + Search Console después de la migración. Actualizar la columna "Val." (✓ validada / ✗ descartada / — pendiente).

## Cluster 1 — Transaccional core → `/servicios` (prioridad máxima)

| Keyword | Intención | Val. |
|---------|-----------|------|
| arenado industrial buenos aires | Contratar ya | — |
| sandblasting industrial argentina / buenos aires | Contratar ya | — |
| empresa de arenado | Buscar proveedor | — |
| arenado de estructuras metálicas | Contratar por tipo | — |
| arenado de tanques industriales | Contratar por tipo | — |
| granallado / arenado in situ · arenado en obra | Contratar con logística | — |
| preparación de superficies metálicas | Técnico-comercial | — |
| arenado sa3 / metal blanco · arenado iso 8501 | Técnico con especificación (lead de máxima calidad) | — |

## Cluster 2 — Marca y genérico → `/`

| Keyword | Intención | Val. |
|---------|-----------|------|
| arenados lucho / arenado lucho | Navegacional | — |
| arenado buenos aires · servicio de arenado | Genérico amplio | — |

## Cluster 3 — Por tipo de obra → `/casos-de-exito` y slugs

| Keyword | URL destino | Val. |
|---------|-------------|------|
| arenado nave industrial | `/casos-de-exito/nave-ferroviaria` | — |
| arenado de tanque | `/casos-de-exito/tanque-industrial` | — |
| arenado estructura naval / marina | `/casos-de-exito/estructura-naval` | — |
| arenado puente / pasarela metálica | `/casos-de-exito/pasarela-urbana` | — |

Cada caso nuevo publicado agrega su fila acá.

## Cluster 4 — Informacional / objeciones → `/preguntas-frecuentes`

| Keyword | Objeción que responde | Val. |
|---------|----------------------|------|
| cuánto tarda un arenado industrial | Plazos | — |
| arenado genera polvo / mitigación de polvo | Ambiental/vecinos | — |
| qué es grado sa3 / grados de limpieza iso 8501 | Especificación técnica | — |
| arenado vs granallado vs hidrolavado | Comparación de método | — |
| precio arenado por m2 | Costo (tratar con cuidado: atrae curiosos; responder con "de qué depende") | — |

## Cluster 5 — Particular (secundario, NO priorizar)

"arenado de pileta", "arenado de fachada", "arenado piezas metálicas" → hoy destino `/contacto` o `/servicios`. Solo invertir si sobra presupuesto; en Ads, campaña separada con presupuesto acotado (regla de `contexto/08-google-ads-y-landings.md`).

---

## Negativas (Ads) / anti-personas (SEO)

No escribir contenido para esto y bloquear en Ads: `pileta`* `piscina`* `auto` `autopartes` `llantas` `vehículo` `moto` `mueble` `silla` `portón` `reja` `casero` `como hacer` `alquiler de arenadora` `venta de arenadora` `compresor` `arena para arenado` `curso` `trabajo de arenador` `empleo` `barato` `precio barato`.

\* pileta/piscina solo si se decide no atender la línea particular de piletas; hoy la línea existe → mantener como negativa **solo en campañas industriales**, no a nivel cuenta.

**Distinción crítica:** "alquiler/venta de arenadora, arena, compresor" = quieren el equipo, no el servicio → negativa siempre. "Curso/empleo" = buscan trabajo → negativa siempre.

---

## Reglas de uso

1. Todo texto nuevo (metadata, H1, anuncio) usa keywords de este mapa en la URL que le corresponde — no cruzar clusters entre URLs.
2. Términos de búsqueda nuevos con conversiones (vía script n-gram, ver `06-google-ads-scripts.md`) se agregan acá antes de crear anuncios o contenido.
3. Search Console (queries con impresiones y sin clics) alimenta este mapa mensualmente — rutina en `07-medicion-y-kpis.md`.

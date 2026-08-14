# Diagnóstico profundo de la cuenta — 10/08/2026

> **Sesión de profundidad #1** (`13-modo-experto-ads.md`). Fuente: 14 capturas de la cuenta `953-841-6905` + lista de negativas, aportadas por el dueño el 10/08/2026.
>
> **Reemplaza al dossier `10-cuenta-ads-auditoria.md` (26/07) como foto vigente del estado de la cuenta.** El dossier sigue valiendo como historial de 365 días.

## Titular

La cuenta **no está en el estado que decía nuestra bitácora**. Dos arreglos que dimos por hechos el 28/07 no están aplicados, y apareció un problema que nunca habíamos auditado y que es el más grave de todos: **Google tiene permiso para cambiar la estrategia de puja y el CPA objetivo por su cuenta.**

Además, el diagnóstico de calidad da un resultado inequívoco y accionable: **el problema de esta cuenta no son los anuncios, es a dónde mandan.**

---

## P0 — Crítico

### 1. 🔴 Auto-apply de OFERTAS está ENCENDIDO (4 recomendaciones)

`Recomendaciones → Aplicación automática`: "Mantén tus anuncios" **0 de 7** ✅, pero **"Expande tu empresa" 4 de 14**, y las cuatro son de la familia *Ofertas*:

- Establecer ofertas más eficientes con **Maximizar conversiones**
- Establecer ofertas con **Maximizar conversiones con un CPA objetivo**
- **Establecer un CPA objetivo**
- **Ajustar tus objetivos de CPA**

**Qué significa:** Google puede cambiar la estrategia de puja y mover el CPA objetivo **sin aprobación y sin aviso**. Nunca habíamos mirado esta pantalla.

**Consecuencia inmediata:** el **tCPA de ARS 8.204,88** que veníamos tratando como "una decisión vieja a descartar" es, con altísima probabilidad, **algo que puso Google solo** — y que va a volver a poner apenas lo cambiemos, mientras estos cuatro sigan tildados.

**Acción:** destildar los 4, guardar, captura fechada. **Antes de tocar cualquier otra cosa de pujas** — si no, todo lo que configuremos lo pisa Google.

### 2. 🔴 La medición está podrida: 9 de 10 acciones son Principales

`Objetivos → Conversiones` — 10 acciones, **9 marcadas como "Principales"**. Solo `Lead form - Submit` está en Secundaria.

Hay **3 objetivos predeterminados de cuenta activos** (debería haber uno): *Enviar formularios de clientes potenciales*, *Clientes potenciales de llamada telefónica* y *Contactos*.

| Acción | Fuente | Estado | Recuento | Incluida en objetivos | Conv. (14 jul–10 ago) |
|---|---|---|---|---|---|
| `Lead form - Submit` | Google | Secundario | Una | No | 0 |
| `Arenados Lucho SEO (web) form_submit` | GA4 | **Principal** 🔴 | Una | **Sí** | 0 |
| `Calls from Smart Campaign Ads` | Llamadas | **Principal** 🔴 | Una | **Sí** | 0 |
| `Clicks to call` | Google | **Principal** 🔴 | **Todas** | No | **1,00** |
| `Smart campaign map clicks to call` | Google | **Principal** 🔴 | Todas | No | 0 |
| `Smart campaign ad clicks to call` | Llamadas | **Principal** 🔴 | Todas | **Sí** | 0 |
| **`Arenados Lucho SEO (web) contact_whatsapp`** | GA4 | **Principal** ✅ | Una | **Sí** | **0** |
| `Smart campaign map directions` | Google | **Principal** 🔴 | Todas | No | 0 |
| `Local actions - Other engagements` | Google | **Principal** 🔴 | Todas | No | **6,00** |
| `Local actions - Website visits` | Google | **Principal** 🔴 | Todas | No | 0 |

**El dato que lo resume todo: de las 7 conversiones del último mes, 6 son `Local actions - Other engagements`** — interacciones con el perfil de empresa de Google. **El 86% de lo que esta cuenta llama "conversión" es ruido**, y la campaña está optimizando hacia eso.

Cuatro acciones siguen usando **recuento "Todas"**, que mide clics repetidos en vez de personas.

### 3. 🟢 `contact_whatsapp` SÍ funciona — el problema es la importación a Ads

En Ads la acción figura con **"No hay conversiones recientes"** y **0,00 conversiones**, lo que hacía temer que el evento no disparara.

**Verificado en GA4 el 10/08/2026 (propiedad `516818828`, "Arenados Lucho"):** `contact_whatsapp` está marcado como **evento clave** y tiene **flujo de datos activo en los últimos 28 días**. ✅

**Conclusión: el tracking del sitio funciona.** El problema está aguas abajo — o no hubo tráfico pago que atribuir (la cuenta está sin saldo, que es lo más probable), o la importación GA4 → Ads no está trayendo los datos. **Se verifica en la Sesión 3.**

⚠️ Sigue pendiente: la **ventana de conversión es de 90 días** y el diseño pide **30**.

### 3 bis. 🟠 Eventos clave fantasma en GA4

La propiedad tiene **5 eventos clave**, y **3 no existen en el sitio**:

| Evento | Estado | Qué hacer |
|---|---|---|
| **`contact_whatsapp`** | ✅ Clave, **con datos** | Es el único válido. No tocar |
| `form_submit` | Clave, sin datos | **Desmarcar** — el formulario se eliminó el 28/07 (ADR-019) |
| `close_convert_lead` | Clave, sin datos | Investigar origen y desmarcar |
| `qualify_lead` | Clave, sin datos | Ídem |
| `purchase` | No clave, sin datos | Dejar como está |

Ninguno de los tres fantasma existe en el código del sitio (`06-tracking-y-analytics.md`: el único evento es `contact_whatsapp`). Probablemente vienen de una configuración vieja o de una plantilla. **Mientras sigan marcados como clave pueden importarse a Ads y volver a ensuciar la medición.**

### 4. 🔴 Informes de llamadas: ACTIVADO

`Configuración de la cuenta → Anuncios de llamada → Informes de llamadas: **Activado**`.

Es **la tercera puerta** por la que puede volver a aparecer el teléfono (las otras dos —extensión de llamada y recurso de ubicación— ya están cerradas). Con esto encendido Google puede usar un número de reenvío.

### 5. ✅/🔴 Negativas de cuenta: la lista está VACÍA

`Administrador → Configuración de la cuenta → Palabras clave negativas` → **"No tiene ninguna palabra clave negativa"** (verificado 10/08/2026).

- ✅ **`pileta`/`piscina` NO están bloqueadas.** El peor escenario posible queda descartado: el servicio más rentable del historial nunca estuvo apagado.
- 🔴 **Pero no hay ninguna protección permanente.** Las negativas técnicas (`granallado`, `sa3`, `iso 8501`, `metal blanco`, `shot blasting`) que el diseño exige a nivel cuenta **no existen** — y el informe de términos muestra que ese tráfico entró igual (P0 bis §13).
- 🔴 Los 20 términos de empleo del 28/07 viven **solo dentro de `busqueda-arenadoIndustrial`**. Al pausarla, **se pierden**.

**Acción:** cargar el bloque permanente a nivel cuenta **ya**, antes de construir nada. Es lo único que protege a cualquier campaña que exista, presente o futura.

---

## P1 — Contradice nuestra bitácora

### 6. 🔴 Idiomas: "Inglés y Español"

La bitácora del 28/07 dice *"Idiomas incluían Inglés → ✅ corregido a solo Español"*. **No está aplicado.** O no se guardó, o se revirtió. Corregido el registro en `08-bitacora.md`.

### 7. 🔴 Geo: confirmado y peor de lo pensado

`Ubicaciones: Provincia de Buenos Aires — Alcance 27.500.000`. Excluye CABA e incluye Mar del Plata y Bahía Blanca.

⚠️ **"Opciones de ubicación" sigue colapsado** en la captura: falta confirmar *Presencia* vs *Presencia o interés*.

### 8. 🟠 Anuncios dinámicos de búsqueda (DSA) — a confirmar

En *Otros parámetros* aparece **"Configuración de anuncios dinámicos de búsqueda: Obtenga la orientación de búsqueda automática y los títulos de anuncio personalizados…"**. Si está activo, Google **escribe titulares solo** leyendo el sitio y orienta por contenido — exactamente lo que el proyecto prohíbe (puede generar "granallado", "Sa3"). Hay que abrir esa fila y verificar.

### 9. 🟠 Las negativas de empleo son de CAMPAÑA, y faltan las técnicas

Los 20 términos de empleo están cargados **a nivel campaña** (`busqueda-arenadoIndustrial`), en frase. Bien cargados, mal ubicados:

- **No se heredan.** Si se pausa esa campaña y se crean las 3 nuevas, las negativas **no viajan**. Hay que recrearlas como lista compartida o a nivel cuenta.
- **No aparecen las negativas técnicas** (`granallado`, `granalla`, `sa3`, `iso 8501`, `metal blanco`, `perfil de anclaje`, `rugosidad`, `shot blasting`). El diseño las pide a nivel cuenta.

---

## P2 — El hallazgo de calidad más valioso

### 10. La landing es el problema, no el anuncio

Nivel de calidad de las keywords con volumen:

| Keyword | Conc. | Clics | Costo | QS | CTR esp. | Relev. anuncio | **Exp. landing** | Conv | CPA |
|---|---|---|---|---|---|---|---|---|---|
| `[arenado industrial]` | exacta | 122 | 65.106 | 5/10 | Promedio | **Superior** | **Inferior** 🔴 | 6 | 10.851 |
| `"arenado"` | frase | 622 | **208.332** | 5/10 | Promedio | **Superior** | **Inferior** 🔴 | 21 | 9.921 |
| `"arenado de metal"` | frase | 166 | 55.144 | — | Inferior | **Superior** | **Inferior** 🔴 | 8,5 | 6.487 |
| `[arenado]` | exacta | 131 | 64.754 | 5/10 | Promedio | **Superior** | **Inferior** 🔴 | 9 | 7.195 |
| `"arenado industrial"` | frase | 45 | 19.637 | 5/10 | Promedio | **Superior** | **Inferior** 🔴 | 6 | **3.273** ⭐ |
| `[arenado de metal]` | exacta | 32 | 20.948 | — | Inferior | **Superior** | **Inferior** 🔴 | 1,5 | 13.965 |
| `"precio de arenado por m2"` | frase | 4 | 1.903 | **3/10** | Inferior | Inferior | Inferior | 0 | — |

**"Experiencia con la página de destino: inferior al promedio" en el 100% de las keywords**, mientras **"Relevancia del anuncio" es "Superior al promedio" en casi todas**.

El diagnóstico es inequívoco: **los anuncios están bien escritos; el destino está mal.** La columna *URL final* está en `—` para todas → heredan la de la campaña, que apunta a la **home**. Una búsqueda de "arenado industrial" caía en una home genérica.

**Esto es lo más valioso del diagnóstico**, porque el fix ya está hecho: `/servicios` ahora es una landing dedicada con `<h1>` con keyword y zona, FAQ con schema y CTA de WhatsApp. **Solo hay que rutear ahí.** Cada punto de este componente abarata todos los clics de la cuenta.

### 11. Los dos sumideros conocidos, confirmados

- **`"arenado"` en frase quemó ARS 208.332** (el 13% del gasto histórico) con 21 conversiones sucias.
- **`"arenado industrial"` en frase es la mejor de la cuenta: CPA 3.273.** Es la que hay que proteger y escalar.
- `"precio de arenado por m2"`: QS **3/10** con los tres componentes en Inferior. El sitio no publica precios y la consulta busca precio.

---

## P3 — Higiene

| # | Hallazgo |
|---|---|
| 12 | **"Borradores en curso: 2"** en la vista de Campañas. Nadie los mencionó nunca — hay que ver qué son antes de construir |
| 13 | **Script "Secuencia de comandos sin nombre"**, habilitado, sin frecuencia, del 25/07. Identificar y borrar o nombrar |
| 14 | **Sin sufijo de URL de campaña** → cero UTMs |
| 15 | **Sin exclusiones de IP** → los clics del dueño y de quien gestione cuentan y ensucian el CTR |
| 16 | Estado de la campaña: **"Limitada por el volumen de búsquedas"** (no por presupuesto). Con la estructura nueva y frase/exacta bien armada debería mejorar |
| 17 | Los **4 scripts corren bien**: última ejecución 10/08 entre 6:32 y 6:40, "Finalizó sin cambios", habilitados ✅ |

---

## Línea base histórica (10 dic 2025 – 10 ago 2026)

**Campaña `busqueda-arenadoIndustrial`:** 5.859 clics · 132.547 impresiones · CTR 4,42% · CPC prom. ARS 273,05 · **costo ARS 1.599.826** · 182 conversiones · **CPA ARS 8.790**
**Cuenta completa:** 12.801 interacciones · ARS 2.151.59x · 423 conversiones · CPA ARS 5.087

⛔ **Ninguno de estos CPA es utilizable.** Mezclan visitas al sitio, engagements y llamadas. La línea base real se construye desde el día que quede una sola primaria limpia.

---

---

## P0 bis — El informe de términos de búsqueda (10 dic 2025 – 10 ago 2026)

126 páginas, **609 filas, 407 términos únicos**. Analizado con un parser sobre el PDF exportado.

### 12. 🔴🔴 IA Max generó el 45% de los términos

| Fuente del término | Filas | % |
|---|---|---|
| **Coincidencias expandidas de IA Max** | **277** | **45%** |
| Concordancia de frase | 174 | 29% |
| Concordancia de frase (variante cercana) | 130 | 21% |
| Concordancia exacta (variante cercana) | 28 | 5% |

**IA Max estuvo haciendo concordancia amplia encubierta**, exactamente lo que el diseño advertía en teoría. Acá está la prueba empírica en esta cuenta. Está apagado desde el 28/07, pero **todo el histórico de aprendizaje de puja se construyó con este tráfico**.

### 13. 🔴 IA Max compró tráfico del servicio que el negocio RECHAZA

**Granallado — 15 términos, 11 por IA Max:**
`granallar` · `granalladoras` · `granalladores` · `servicio de granallado` · `chorreado con granalla` · `granallado industrial` · `rendimiento de granalla por m2` · `arenados y granallados` · `tpm arenados y granallados`…

**Técnicos — 6 términos, 5 por IA Max:**
`arenado a metal blanco` · `arenado metal blanco` · `norma iso 8501` · `st 2 iso 8501 1` · `shot blasting`

El negocio **no hace granallado ni arenado certificado**. Cada uno de esos clics era pérdida garantizada: el que busca así pide lo que no vendemos.

⚠️ **Y no es solo IA Max:** 4 términos de granallado entraron por **variante cercana de frase**. O sea que aun con IA Max apagado, `"arenado"` en frase sigue filtrando a granallado. **Las negativas técnicas a nivel cuenta son obligatorias, no opcionales.**

### 14. 🔴 El idioma inglés + IA Max trajo consultas en inglés

`industrial painting solutions` · `industrial coatings` · `industrial cleaning` — todas vía IA Max.

Los dos problemas se potencian: **idiomas incluye Inglés** (hallazgo #6) e **IA Max expande**. Arreglar uno solo no alcanza.

### 15. 🟠 "Decapado" es una trampa: hay que ser quirúrgico

6 términos, **todos por IA Max**: `empresa de decapado` · `decapado quimico` · `decapado electrolítico` · `decapado mecanico` · `decapado y pasivado` · `decapado y pasivado inoxidable`.

**El decapado químico/electrolítico y el pasivado NO son arenado** — son otro proceso. Son leads de servicio equivocado.

⚠️ **Pero `decapar` figura en nuestro mapa de keywords como parte del gap sin jerga de piletas** ("decapar la pileta"). **No se puede negativizar `decapado` a secas.** Van como negativas de **frase específicas**: `decapado quimico`, `decapado electrolitico`, `decapado y pasivado`, `pasivado`. Nunca la raíz sola.

### 16. 🟠 También compró "pintura industrial", que tampoco hacemos

`servicio de pintura industrial` · `pintores industriales` (vía IA Max) · `empresas de arenado y pintura industrial` (frase). **No pintamos** — es un límite declarado en el sitio. Negativas: `pintura industrial`, `pintores`, `pintado`.

### 17. 🟢 Hay demanda real de piletas cayendo en la campaña industrial

**4 términos, ninguno por IA Max — todos por concordancia de frase:**
`arenado de piletas` · `arenado de piscinas` · `arenado piletas` · **`arenado de piletas precio`**

Dos conclusiones:

1. **`pileta` NO está bloqueada como negativa** en esta campaña. (Falta confirmar a nivel cuenta.)
2. **Esas consultas están cayendo en la campaña industrial, que apunta a la home.** Con la landing `/arenado-de-piletas` ya construida, es plata sobre la mesa: el ruteo por campaña que plantea el diseño captura esto desde el día uno.

### 18. 🟠 Compradores de equipos: 15 términos

`arenadoras en venta` · `maquinas para arenar` · `compresor para arenado` · `equipos para arenar` · `arenados caseros` · `arenadoras callone` · `arenadoras magal` · `arenadoras en zona sur`…

Buscan **comprar o alquilar una máquina**, no contratar el servicio. La lista `NEG-EQUIPOS-DIY` del diseño los cubre casi todos; **hay que sumar las marcas**: `callone`, `magal`.

### 19. 🟢 Alta intención sin cubrir: 15 términos de PRECIO

`arenado precio` · `arenados precios` · `precio de arenado por m2` · `precio de arenado por metro cuadrado` · `valor m2 de arenado` · `cuanto sale arenar` · `arenado de metales precio` · **`arenado de piletas precio`** · `como se cobra el arenado`

Es la consulta **más comercial que existe** —el que pregunta precio está listo para contratar— y el sitio no dice nada de precios. Coincide con que `"precio de arenado por m2"` tenga **QS 3/10 con los tres componentes en Inferior**: el anuncio y la landing no responden lo que la consulta pide.

**No implica publicar una lista de precios.** Implica responder *cómo se cobra* (por m², por trabajo, visita sin costo) en la FAQ y en el copy. Es una oportunidad de contenido, no un problema de Ads.

### 20. Vehículos y trabajos chicos: 3 términos

`arenado de autos` · `arenado de motor` · `arenado de llantas de aluminio`. Coherente con la política de aceptarlos si llegan pero no comprarles tráfico.

### 21. 🟢 Cero términos de empleo en el informe

Ni un `empleo`, `busco trabajo`, `cv` o `vacante` con clics. Las negativas del 28/07 están funcionando **o** las búsquedas de empleo nunca llegaron como término con clic: entraban por el **botón "Llamar" de la extensión**, que ya quitamos. Coherente con el diagnóstico del 27/07.

---

## Negativas nuevas que salen de este informe

Para sumar a lo que ya define `03-keywords-maestro.md`:

| Lista | Términos a agregar |
|---|---|
| **Cuenta — técnicas** | `granallar`, `granalladora`, `granalladoras`, `chorreado con granalla`, `shot blasting`, `metal blanco`, `iso 8501`, `st 2` |
| **Cuenta — servicio equivocado** | `pintura industrial`, `pintores`, `pintado industrial`, `decapado quimico`, `decapado electrolitico`, `decapado y pasivado`, `pasivado` |
| **`NEG-EQUIPOS-DIY`** | `callone`, `magal`, `arenadoras en venta`, `equipos para arenar`, `bolsón de arena`, `arena silica` |
| **`NEG-DATA`** | `llantas de aluminio`, `arenado de motor` |

⛔ **Nunca:** `decapar` a secas, `pileta`/`piscina` a nivel cuenta, `arenadora` sola, `precio` (es alta intención, no basura).

---

## Decisión de medición — se REEMPLAZA el paso 14 del plan

**Datos confirmados el 10/08/2026:** propiedad GA4 `516818828` · **vinculada a Ads** ✅ · **etiquetado automático ON** ✅ · acceso de publicación a GTM ✅ · `contact_whatsapp` es **evento clave con flujo activo** ✅.

El diseño del 29/07 (`ads-config/02-conversiones.md`, paso 14) mandaba **crear una acción nueva** `WhatsApp - contacto confirmado` con etiqueta propia de Ads vía GTM. **Eso ya no corresponde.**

**Por qué:** la cuenta **ya tiene** `Arenados Lucho SEO (web) contact_whatsapp`, importada de GA4, marcada Principal e incluida en los objetivos de cuenta. Crear una segunda acción que mida el mismo clic produciría **doble conteo** — que es exactamente la señal de alarma #13 del propio plan ("Ads/GA4 reportan muchas más conversiones que chats reales → no optimizar nada hasta resolverlo").

**Qué se hace en su lugar:** conservar la acción importada de GA4 y **corregirle los parámetros**:

| Parámetro | Estado actual | Objetivo |
|---|---|---|
| Optimización | Principal ✅ | Principal |
| Recuento | Una ✅ | Una |
| **Ventana post-clic** | **90 días** 🔴 | **30 días** |
| Categoría | a verificar | **Contacto** |

**Contra de esta decisión (aceptada):** la importación desde GA4 tiene latencia (hasta ~24-48 h) y pierde algunas conversiones por modelado y consentimiento, frente a una etiqueta directa de Ads que es casi en tiempo real. Con el volumen de esta cuenta (~15 conv/mes esperadas) esa diferencia no mueve la aguja, y **evitar el doble conteo vale más que la latencia**. Si algún día el volumen justifica bidding fino, se migra a etiqueta directa **eliminando la importada en el mismo movimiento**, nunca conviviendo.

## Qué cambia en el plan

1. **Nueva Sesión 0, antes que todo:** destildar los 4 auto-apply de ofertas. Mientras sigan ON, cualquier configuración de puja es provisoria.
2. **La Fase 3 se resuelve sola: pausar la campaña vieja.** Arrastra tCPA puesto por Google, idiomas mal, geo mal, keywords solapadas, negativas que no se heredan y DSA posiblemente activo. Limpiarla cuesta más que construir.
3. **Las negativas se recrean** como lista compartida + nivel cuenta, no a nivel campaña.
4. **Prioridad de ruteo:** cada grupo con su URL final explícita. Es el fix de mayor retorno de todo el diagnóstico.
5. **Verificar `contact_whatsapp` end-to-end es bloqueante del encendido**, no un chequeo post.

## Capturas que siguen faltando

1. **Negativas a nivel CUENTA** (¿está `pileta`?) — bloqueante
2. **Opciones de ubicación** desplegado (presencia vs interés)
3. **Fila de anuncios dinámicos de búsqueda** desplegada
4. **Recomendaciones → Aplicación automática → pestaña Historial** (qué aplicó Google solo)
5. **Los 2 borradores** de campaña

✅ Términos de búsqueda: **recibido y analizado** (P0 bis).

---

## Anexo — cómo se analizó el informe de términos

El PDF (126 páginas) se convirtió a texto con `pdf-parse` y se parseó con un script que separa cada fila por su marcador de tipo de concordancia, deduplica términos y los clasifica por categoría de intención. Los scripts quedaron en el scratchpad de la sesión, no en el repo.

**Para la próxima:** exportar el informe en **CSV** desde Google Ads en vez de PDF. El PDF parte las columnas en varias líneas y hace imposible cruzar término ↔ costo ↔ conversiones con precisión. Con CSV se puede además rankear por gasto, que es el corte que más importa.

⚠️ **Limitación de este análisis:** por el formato PDF no se pudo asociar cada término a su costo. Las conclusiones son sobre **qué tipo de tráfico entró y por qué vía**, no sobre cuánto costó cada término. El ranking por gasto queda pendiente del CSV.

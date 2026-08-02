## 2. Conversiones y medición

> Esta es la sección que gobierna a todas las demás. Con un solo canal de contacto, **la medición no es un accesorio del relanzamiento: es el relanzamiento**. Si esta sección queda mal, no importa cuán buena sea la estructura de campañas ni el copy: el algoritmo va a optimizar hacia ruido y el CPA que se reporte no va a significar nada.
>
> **Regla de orden de ejecución: las conversiones se configuran ANTES de crear las campañas.** Hacerlo al revés obliga a rehacer los objetivos campaña por campaña.

---

### 2.1 Punto de partida: qué mide hoy la cuenta (y por qué está roto)

La cuenta **953-841-6905** no arranca vacía en materia de conversiones: arrastra 11 acciones, y **7 de ellas están marcadas como primarias**. Ese es el motivo real por el que los ~2,9M ARS de historial no dejaron un CPA utilizable.

| Acción de conversión (nombre exacto en la cuenta) | Fuente | Categoría | Estado hoy | Qué es en realidad |
|---|---|---|---|---|
| `Arenados Lucho SEO (web) contact_whatsapp` | GA4_CUSTOM | CONTACT | **Primaria** | ✅ El único lead real |
| `Arenados Lucho SEO (web) form_submit` | GA4_CUSTOM | SUBMIT_LEAD_FORM | **Primaria** | ⛔ Obsoleta: el formulario se eliminó del sitio el 28/07/2026 |
| `Local actions - Website visits` | GOOGLE_HOSTED | PAGE_VIEW | **Primaria** | ⛔ Basura: es una visita, no un lead |
| `Local actions - Other engagements` | GOOGLE_HOSTED | ENGAGEMENT | **Primaria** | ⛔ Basura: interacción genérica |
| `Clicks to call` | GOOGLE_HOSTED | CONTACT | **Primaria** | ⛔ Llamadas — canal descartado por decisión del dueño |
| `Smart campaign map directions` | SMART_CAMPAIGN | GET_DIRECTIONS | **Primaria** | ⛔ Basura (además no hay local que visitar) |
| `Smart campaign map clicks to call` | SMART_CAMPAIGN | CONTACT | **Primaria** | ⛔ Llamadas |
| `Smart campaign ad clicks to call` | SMART_CAMPAIGN | CONTACT | **Primaria** | ⛔ Llamadas |
| `Calls from Smart Campaign Ads` | SMART_CAMPAIGN | PHONE_CALL_LEAD | **Primaria** | ⛔ Llamadas |
| `Lead form - Submit` | LEAD_FORM_SUBMIT | SUBMIT_LEAD_FORM | Secundaria (26/07) | ⛔ Formulario de Google, no usar |
| GA4 ocultas (`purchase`, `qualify_lead`, `close_convert_lead`) | GA4 | — | HIDDEN | No cuentan |

**Consecuencia directa:** las 182 "conversiones" de la campaña `busqueda-arenadoIndustrial` mezclan visitas al sitio, engagements y llamadas. Por eso:

- El **CPA histórico (~8.790 ARS) no es línea base válida** y no se puede usar para calibrar nada.
- El **tCPA de 8.204 ARS** que quedó cargado en la campaña vieja aprendió de esa mezcla → hay que descartarlo, no ajustarlo.
- Incluso el "mejor CPA" conocido (`arenados` en exacta ≈ 2.800 ARS) es **optimista**, porque una parte de esas conversiones eran basura.

**Traducción operativa: la cuenta no tiene línea base de CPA. Se construye desde cero a partir del día que quede una sola primaria limpia.** Cualquier objetivo de CPA fijado antes de eso es inventado.

---

### 2.2 Qué se mide, exactamente

El sitio dispara **un único evento de negocio**, y lo hace bien: se dispara **solo cuando el usuario confirma el `AlertDialog`**, no cuando hace clic en el botón.

```
Usuario hace clic en el botón de WhatsApp
        ↓
Se abre el AlertDialog "Se abrirá WhatsApp"   ← NO se mide nada acá
        ↓
Usuario hace clic en "Continuar"
        ↓
window.dataLayer.push({ event: 'contact_whatsapp', ... })   ← ACÁ se mide
        ↓
window.open('https://wa.me/...')
```

Payload real que emite el código (verificado en `src/components/common/WppBtn.tsx` y `src/components/common/WhatsAppCTA.tsx`):

| Campo | Valor |
|---|---|
| `event` | `contact_whatsapp` |
| `event_category` | `Contact` |
| `event_label` | `WhatsApp Button Click` (botón flotante) · `WhatsApp CTA Click` (CTA inline) |
| `value` | `1` |
| `timestamp` | `Date.now()` |

Tres consecuencias de este payload que impactan directo en la configuración de Ads:

1. **No hay `event_id`.** No existe un identificador de transacción para deduplicar → la deduplicación tiene que resolverse con el ajuste de **Recuento = "Una"** (ver §2.8).
2. **Hay dos componentes que emiten el mismo evento** (el botón flotante global y los CTA inline de la landing de piletas). Un mismo visitante puede confirmar los dos. Esto refuerza lo anterior.
3. **`value: 1` es un valor de relleno, no un valor de negocio.** En GTM **no** hay que mapearlo al campo "Valor de conversión" (ver §2.9).

> **Invariante de medición (no romper nunca):** el evento se dispara únicamente tras la confirmación, una sola vez por confirmación, y el `push` va **antes** del `window.open`. Adelantar el evento al clic del botón infla la medición entre 2× y 4× y es el error más común en este tipo de implementación.

---

### 2.3 Decisión: etiqueta nativa de Google Ads, no importación de GA4

Es la decisión de arquitectura más importante de la sección y hay que tomarla explícitamente, porque **la cuenta ya tiene una importación de GA4 funcionando** (`Arenados Lucho SEO (web) contact_whatsapp`, primaria). Lo cómodo sería dejarla. Lo correcto es no hacerlo.

| Criterio | Etiqueta nativa de Ads (vía GTM) | Importación desde GA4 |
|---|---|---|
| Latencia hasta el modelo de puja | Horas | 6-24 h típico, hasta 1-3 días |
| Atribución | Propia de Ads, a nivel clic | GA4 atribuye primero (sesiones), Ads re-atribuye |
| Control de recuento y ventana | Total, desde Ads | Puede quedar bloqueado según la config de atribución de GA4 |
| Conversiones mejoradas | Soporte nativo | Indirecto |
| Esfuerzo de implementación | ~20 min en GTM (una vez) | Ya está hecho |

**Decisión: crear la conversión NATIVA de Google Ads sobre el mismo evento `contact_whatsapp` del dataLayer, y dejarla como ÚNICA acción primaria.**

**Justificación (específica de este caso, no genérica):** la cuenta va a operar con ~10-20 conversiones al mes. Con ese volumen, cada conversión es una porción enorme de la señal total. Una latencia de 1 a 3 días sobre una señal tan escasa significa que el algoritmo toma decisiones con una foto vieja de una muestra chica — que es la peor combinación posible. Además, el plan de pujas contempla pasar de *Maximizar clics* a *Maximizar conversiones* en cuanto haya 15-30 conversiones limpias: ese pasaje exige que la señal llegue fresca y con la atribución de Ads, no filtrada por la lógica de sesiones de GA4.

**Qué pasa con la importación de GA4 que ya existe:** **NO se elimina — se degrada a secundaria.** Se conserva por tres razones: (a) mantiene la continuidad del histórico, (b) sirve de control cruzado contra la nativa, (c) borrar una acción de conversión puede afectar el aprendizaje. Pero deja de pujar.

> ⚠️ **La trampa más cara de toda esta sección:** si la etiqueta nativa **y** la importación de GA4 quedan las dos como primarias, **cada WhatsApp se cuenta dos veces** y el CPA aparece a la mitad del real. Es exactamente el tipo de error silencioso que ya arruinó el historial de esta cuenta. **Una sola primaria. Siempre.**
>
> Corolario práctico: las dos columnas nunca van a coincidir (la nativa y la de GA4 miden distinto). Eso es esperable, no es un bug. La nativa es la que manda.

**Plan B (si el acceso a GTM es un bloqueante):** mantener la importación de GA4 como única primaria y aceptar la latencia. Es peor, pero es viable. Lo que **no** es viable bajo ninguna circunstancia es tener las dos primarias.

---

### 2.4 La acción de conversión, campo por campo

**Ruta:** `Objetivos (ícono bandera) → Conversiones → Resumen → + Crear acción de conversión → Sitio web → Agregar manualmente con código`

| Campo | Valor exacto a cargar | Por qué |
|---|---|---|
| **Fuente** | Sitio web → "Agregar manualmente con código" | Habilita el ID + etiqueta para pegar en GTM |
| **Nombre** | `WhatsApp confirmado - web (contact_whatsapp)` | Dice qué mide (confirmado, no clic), de dónde viene (web) y el nombre exacto del evento, para que cualquiera que audite código/GTM/GA4 encuentre el hilo. Sin caracteres raros: los scripts de la cuenta filtran por nombre |
| **Categoría** | **Contacto** | Ver §2.5 |
| **Valor** | **No usar valor para esta acción de conversión** | Ver §2.9 |
| **Recuento** | **Una** | Ver §2.8 — el default es "Todas" y juega en contra |
| **Ventana de conversión de clic** | **30 días** | Ver §2.7 |
| **Ventana de vista interactiva** | 3 días (default) | Irrelevante en Búsqueda pura |
| **Ventana de visualización** | 1 día (default) | Irrelevante en Búsqueda pura |
| **Modelo de atribución** | **Basada en datos** (default) | Ver §2.10 |
| **Optimización de la acción** | **Principal** | Verificar explícitamente y sacar captura |

---

### 2.5 Categoría: **Contacto** (y por qué no otra)

La categoría no es cosmética: determina en qué **objetivo estándar** cae la acción, y el objetivo es la unidad con la que las campañas pujan y reportan.

- ✅ **Contacto** → cae en el objetivo estándar **"Contactos"**. Es lo que efectivamente ocurrió: el usuario declaró intención de contactar.
- ❌ **Enviar formulario de clientes potenciales** → sería mentira: el formulario se eliminó del sitio el 28/07/2026. Es además la categoría de la acción obsoleta que hay que degradar.
- ❌ **Solicitar presupuesto** → sobrevende. El presupuesto se pide *dentro* de WhatsApp, fuera del sitio; nosotros no lo vemos.
- ❌ **Otro** → cae en un objetivo huérfano, pierde contexto semántico y complica la segmentación.
- 🔒 **Reservadas para el futuro:** *Cliente potencial calificado* y *Cliente potencial convertido*, para las cargas offline (§2.13). La terna **Contacto → Calificado → Convertido** es el esqueleto de embudo que después permite comparar CPA por intención vs CPA por trabajo cobrado.

**Ventaja adicional de elegir Contacto:** la importación de GA4 ya existente también es de categoría `CONTACT`. Al usar la misma categoría, ambas caen en el **mismo objetivo estándar "Contactos"**, y entonces la configuración de objetivos a nivel campaña se resuelve con **una sola casilla tildada** en vez de dos.

---

### 2.6 Implementación en GTM (contenedor `GTM-W63ZV9D9`)

**Variables** (probablemente ya existan; crear solo las que falten) — `Variables → Definidas por el usuario → Nueva → Variable de capa de datos`:

| Nombre de la variable | Nombre de la variable de capa de datos |
|---|---|
| `DLV - event_label` | `event_label` |

**Activador** — `Activadores → Nuevo → Evento personalizado`:

| Campo | Valor |
|---|---|
| Nombre del activador | `CE - contact_whatsapp` |
| Nombre del evento | `contact_whatsapp` (exacto, sin regex) |
| Se activa en | Todos los eventos personalizados |

**Etiqueta** — `Etiquetas → Nueva → Seguimiento de conversiones de Google Ads`:

| Campo | Valor |
|---|---|
| Nombre de la etiqueta | `Google Ads - Conversión - WhatsApp confirmado` |
| ID de conversión | ⚠️ **A confirmar** — lo entrega la pantalla de creación de la acción (formato `AW-XXXXXXXXX`) |
| Etiqueta de conversión | ⚠️ **A confirmar** — misma pantalla |
| Valor de la conversión | **Vacío** (no mapear `DLV - value`) |
| ID de transacción | **Vacío** |
| Activador | `CE - contact_whatsapp` |

> **No mapear el `value: 1` del dataLayer.** Si se mapea, todas las conversiones entran con valor 1 y, el día que se evalúe puja por valor, el sistema va a creer que un arenado de fachada vale lo mismo que una pileta.

**Publicar el contenedor recién después de validar en Vista previa** (§2.14).

---

### 2.7 Ventana de conversión: **30 días post-clic**

Se deja el default de 30 días. **No es pereza, es el ciclo de venta real del negocio:** un arquitecto o un encargado de PYME pide dos o tres presupuestos y decide semanas después; un dueño de casa que quiere la pileta lista para el verano consulta en agosto y contrata en octubre. Acortar la ventana a 7 días "para ver el dato más rápido" recorta conversiones que son legítimas.

Dos advertencias operativas:

- **No tocar la ventana en medio de una prueba de puja:** invalida la comparación antes y después.
- **Los primeros 30 días de cada campaña el CPA se ve peor de lo que es**, porque hay conversiones que todavía no maduraron. **La lectura seria del CPA es a día 45**, no a día 15. Conviene decírselo al dueño de antemano para que no se tomen decisiones de pánico en la semana 2.

---

### 2.8 Recuento: **Una** (no "Todas")

El default de Google para acciones de sitio web es **"Todas"**, y acá juega claramente en contra.

**Por qué "Una", con el código en la mano:** existen dos componentes que emiten `contact_whatsapp` — el botón flotante global (`WppBtn`) y los CTA inline (`WhatsAppCTA`, presentes en la landing de piletas con mensajes distintos por público). Un mismo visitante puede perfectamente confirmar el CTA inline de contratistas y, más abajo, el botón flotante. Además el payload **no lleva `event_id`**, así que no hay deduplicación posible del lado del dato.

Con "Todas", ese visitante único cuenta como 2 o 3 conversiones. Sobre una base de 10-20 conversiones mensuales, eso infla el número entre un 30% y un 50% y le enseña al algoritmo a perseguir indecisos que reclickean en vez de gente que contrata.

**Lo que se quiere medir es "cuántas personas pidieron contacto", no "cuántos clics de WhatsApp hubo". Eso es exactamente "Una".**

`Objetivos → Conversiones → Resumen → clic en la acción → Editar configuración → Registrar → Una → Guardar`

---

### 2.9 Valor de conversión: **sin valor en la fase 1** (y el plan para la fase 2)

**Decisión fase 1 (ahora): no asignar valor.** CPA calculado a mano y registrado en `08-bitacora.md`.

**Por qué no poner un valor estimado ahora**, aunque la tentación sea grande:

1. Hay **una sola acción de conversión compartida por las 3 campañas**. Un valor único le enseñaría al sistema que un lead de pileta de ticket bajo vale exactamente lo mismo que una fachada de edificio — que es **lo contrario del norte declarado del negocio** (la transición hacia obra y restauración). Es peor que no poner nada.
2. El cálculo estándar (ticket promedio × tasa de cierre) requiere dos datos que hoy **no están medidos**: ⚠️ ticket promedio real por tipo de trabajo y ⚠️ tasa de cierre de consulta a trabajo cobrado.
3. La puja por valor exige 2+ valores distintos y ~15-30 conversiones/mes. No hay volumen.

**Mientras tanto, el control del mix se hace con presupuesto por campaña (60/25/15), que es más simple, más auditable y no depende de que el algoritmo entienda nada.**

**Plan fase 2 (con ≥15-30 conversiones limpias/mes y ticket promedio confirmado):** separar en **dos acciones de conversión por landing**, que se puede hacer **sin tocar el código** — en GTM se duplica la etiqueta y se condiciona con la variable integrada **Page Path**:

| Acción | Condición en GTM | Valor sugerido |
|---|---|---|
| `WhatsApp confirmado - obra/PYME` | Page Path **no contiene** `/arenado-de-piletas` | Valor alto (⚠️ a definir con ticket real) |
| `WhatsApp confirmado - piletas` | Page Path **contiene** `/arenado-de-piletas` | Valor bajo (⚠️ a definir con ticket real) |

⚠️ Advertencia: dos acciones parten la señal en dos. **No hacerlo antes de tener volumen**, y hacerlo como cambio único, documentado en la bitácora.

---

### 2.10 Atribución: **basada en datos**, y no se toca más

Google eliminó primer clic, lineal, deterioro temporal y basado en la posición. **Quedan solo dos modelos: basada en datos (DDA) y último clic.** Se deja **DDA**, que es el default y el que mejor alimenta Smart Bidding.

Con una cuenta 100% Búsqueda, un canal y una conversión, DDA y último clic van a dar resultados casi idénticos — razón de más para **fijarlo como decisión cerrada** y que no se convierta en otra perilla que alguien mueve. Cambiar el modelo con campañas corriendo genera un salto artificial en el histórico que arruina cualquier lectura de "antes y después".

**Nota para cuando aparezca la pregunta:** GA4 y Ads **nunca** van a mostrar el mismo número de conversiones. No es un error: son modelos, ventanas y unidades distintas (sesiones vs clics).

---

### 2.11 Conversiones mejoradas: activar el interruptor, no esperar nada

**Respuesta directa a "¿aplican sin formulario?": no, prácticamente no aplican — y conviene decirlo antes de que alguien las cuente como una mejora.**

Las conversiones mejoradas envían datos del usuario (email, teléfono) hasheados para recuperar conversiones perdidas. **En este sitio no hay absolutamente nada que hashear:**

- Se eliminó el formulario y el email como canal (28/07/2026).
- El número de WhatsApp ni siquiera se escribe contiguo en el código (protección anti-scraping).
- El proyecto **prohíbe enviar PII al dataLayer**.
- `wa.me` abre fuera del sitio: no hay página de agradecimiento donde capturar nada.

**Recomendación:** activar igual el interruptor **a nivel cuenta** en `Objetivos → Configuración → Uso de datos de clientes → Activar conversiones mejoradas` (aceptando las Condiciones de tratamiento de datos). Es gratis, deja el terreno listo para cuando el 15/06/2026 se unifiquen los controles, y no rompe nada.

**Pero:** no configurar una fuente de datos del usuario a nivel de acción, y **esperar que la pestaña Diagnóstico muestre cobertura nula o muy baja. Eso es lo correcto en este caso, no una implementación rota.**

La verdadera vía de first-party data para este negocio **no es la etiqueta: es la carga offline con GCLID** (§2.13). Si algún día se reintrodujera un micro-formulario, ahí las conversiones mejoradas pasan a ser prioridad #1.

**Consent Mode / CMP:** **no implementar.** La política de consentimiento de Google aplica al EEE, Reino Unido y Suiza. Con geo restringida a AMBA y opción **"Presencia"**, no hay tráfico afectado. Poner un banner de cookies "por las dudas" en un sitio con tráfico argentino solo destruye señal de conversión: en una cuenta con 10-20 conversiones/mes puede ser la diferencia entre poder usar Smart Bidding o no.

---

### 2.12 Limpieza de las conversiones basura heredadas

Este es el paso **bloqueante** del relanzamiento. Se hace en dos capas, porque **no todas las acciones se pueden degradar**.

#### Capa 1 — Degradar a secundaria lo que SÍ es editable

`Objetivos → Conversiones → pestaña Objetivos → localizar el objetivo → Editar objetivo → desplegar "Optimización de la acción de conversión" → Secundaria (solo observación) → Guardar`

| Acción | Acción a tomar | Motivo |
|---|---|---|
| `Arenados Lucho SEO (web) contact_whatsapp` | → **Secundaria** | Reemplazada por la nativa. Se conserva como control cruzado |
| `Arenados Lucho SEO (web) form_submit` | → **Secundaria** | El formulario ya no existe. Nunca optimizar hacia un intento |
| `Lead form - Submit` | Ya secundaria (26/07) ✅ | Formularios de Google descartados |

#### Capa 2 — Lo que NO se puede degradar: exclusión a nivel campaña

`Local actions - Website visits`, `Local actions - Other engagements`, `Clicks to call` y las `Smart campaign *` son **alojadas en Google** (`GOOGLE_HOSTED` / `SMART_CAMPAIGN`). Ya se verificó el 26/07/2026 que **las Local actions no se pueden pasar a secundarias una por una.**

**Único mecanismo de contención: excluirlas a nivel campaña** (§2.13). No hay otra vía.

> ⚠️ **Punto fino que hay que verificar con captura:** `Clicks to call` es categoría **CONTACT**, o sea que vive en el **mismo objetivo estándar "Contactos"** donde va a vivir nuestra conversión de WhatsApp. Tildar "Contactos" a nivel campaña la arrastra.
> - **Mitigación primaria:** intentar degradarla a secundaria. ⚠️ **A confirmar** si Google lo permite (siendo alojada en Google, probablemente no).
> - **Mitigación de fondo (la que realmente funciona):** que nunca tenga con qué dispararse — **cero recursos de llamada, cero anuncios de solo llamada, y "Informes de llamadas" desactivado** en `Administrador → Configuración de la cuenta → Informes de llamadas`. La extensión de llamada ya se quitó el 28/07/2026 por este motivo (traía llamados de gente buscando empleo).
> - **Control:** verificar mensualmente que `Clicks to call` siga en **0 conversiones**. Si algún mes marca un número distinto de cero, apareció un recurso de llamada que nadie cargó a propósito.

#### Capa 3 — Exclusión de datos históricos sucios

Como se **reutiliza la cuenta**, Smart Bidding puede seguir usando el historial contaminado. Hay una herramienta específica para esto:

`Herramientas → Biblioteca compartida → Estrategias de puja → pestaña "Controles avanzados" → Exclusiones de datos`

Cargar una exclusión que cubra **todo el período anterior a la fecha en que `contact_whatsapp` nativa quede como única primaria verificada**, y **anotar la fecha exacta de corte en `08-bitacora.md`**. Sin esto, el algoritmo arrastra el ruido de las visitas y engagements contadas como conversiones.

---

### 2.13 Objetivos de conversión a nivel campaña

**Decisión: en este caso SÍ se usan objetivos específicos de campaña en las 3 campañas.** Es una excepción justificada a la práctica general (que sería heredar los objetivos de cuenta), y el motivo es concreto: **es la única forma de sacar de la puja las "Acciones locales" y las de llamada, que no se pueden degradar individualmente.**

`Campañas → seleccionar la campaña → Configuración → desplegar "Objetivos de conversión" → "Utilizar la configuración de objetivos específicos de la campaña"`

Configuración idéntica en **las tres campañas** (`srch_obra-industrial_amba`, `srch_piletas_amba`, `srch_general-marca_amba`):

| Objetivo | Estado |
|---|---|
| **Contactos** | ✅ **TILDADO** (único) |
| Acciones locales | ❌ Destildado |
| Enviar formularios de clientes potenciales | ❌ Destildado |
| Clientes potenciales de llamada telefónica | ❌ Destildado |
| Compras / Ventas | ❌ Destildado |
| Otras | ❌ Destildado |

> Esto ya se identificó como pendiente en la auditoría del 28/07/2026 sobre la campaña vieja: el objetivo incluía **"Clientes potenciales de llamada telefónica"**, o sea que la campaña literalmente le estaba **pidiendo llamadas a Google** — la otra mitad del problema de las llamadas por trabajo, junto con la extensión que ya se quitó.

**Costo de mantenimiento que hay que aceptar y documentar:** una vez que una campaña pasa a objetivos específicos, **deja de heredar para siempre** los cambios futuros de los objetivos de cuenta. Si en 6 meses se agrega una acción nueva, hay que entrar campaña por campaña. **Registrarlo en `08-bitacora.md` con fecha** para que un asistente futuro no se vuelva loco buscando por qué una acción nueva no aparece.

**En paralelo, a nivel cuenta:** dejar **solo "Contactos"** como objetivo predeterminado y apagar el resto. `Objetivos → Conversiones → pestaña Objetivos → Editar objetivo → "Configuración predeterminada de la cuenta"`. El toggle está escondido dentro de "Editar objetivo", no en la pantalla Resumen.

**No usar objetivos personalizados.** Agregan una capa que el dueño no va a poder auditar solo y no resuelven ningún problema que el par principal/secundaria no resuelva.

---

### 2.14 Conversión offline "Trabajo cobrado" (crear ahora, como secundaria)

El CPA de Ads va a ser un **CPA por intención de contacto**, no por trabajo vendido. Nadie sabe si del otro lado de ese WhatsApp hubo un presupuesto real o alguien que escribió "hola" y desapareció. **Ese factor de conversión de lead a trabajo es el dato que hoy falta y el que define si la cuenta es rentable.**

**Recomendación: crear la acción ahora, pero como SECUNDARIA y con carga manual mensual.**

`Objetivos → Conversiones → Resumen → + Crear acción de conversión → Importar → Importaciones manuales con la API o las cargas`

| Campo | Valor |
|---|---|
| Nombre | `Trabajo cobrado (carga manual)` |
| Categoría | **Cliente potencial convertido** |
| Optimización | **Secundaria (solo observación)** |
| Recuento | Una |

**Por qué secundaria y no principal:** con 10-20 conversiones/mes, subir 2-3 trabajos cobrados no le da a Smart Bidding volumen para optimizar, y sí agrega una tarea manual que se abandona a los dos meses. Una señal intermitente es **peor** que ninguna. Sirve para calcular el factor lead→trabajo a mano. Promover a principal recién si la cuenta llega a 40-60 conversiones/mes estables.

**Reglas duras de la carga offline:**
- El **GCLID vence a los 90 días** desde el último clic; subidas posteriores no se importan.
- Hay que **esperar 4-6 horas** tras crear la acción antes de subir el primer archivo.
- Desde el **15/06/2026** estas cargas van por la **Data Manager API** (bloqueadas en la Google Ads API).

**Sobre meter el GCLID en el enlace de `wa.me`:** técnicamente se puede (arrastrarlo al texto prellenado). **No se recomienda en esta etapa:** el GCLID es visible para el cliente, se ve técnico y raro, y puede bajar la tasa de envío del mensaje — que es justo lo que no se quiere tocar. Si alguna vez se hace, usar un sufijo corto tipo ` [#AB12CD]`, no el GCLID crudo.

---

### 2.15 Verificación: cómo saber que mide bien

Nada de esto se da por hecho. **Cada paso se verifica con captura y se archiva en `08-bitacora.md`.**

#### Antes de encender presupuesto

| # | Chequeo | Ruta / método | Resultado esperado |
|---|---|---|---|
| 1 | **Etiquetado automático ON** | `Administrador → Configuración de la cuenta → Etiquetado automático` | Activado. Sin `gclid` no hay atribución ni cargas offline |
| 2 | **Vínculo GA4 ↔ Ads** | `Administrador → Vinculación de cuentas → Google Analytics` | Vinculado (⚠️ confirmar propiedad) |
| 3 | **GTM Vista previa — el evento NO se dispara al clic** | GTM → Vista previa → clic en el botón de WhatsApp | Se abre el AlertDialog y **no** aparece `contact_whatsapp` en la línea de tiempo |
| 4 | **GTM Vista previa — el evento SÍ se dispara al confirmar** | Clic en "Continuar" | Aparece `contact_whatsapp` **una sola vez** y la etiqueta `Google Ads - Conversión - WhatsApp confirmado` figura como **Fired** |
| 5 | **Un solo push por confirmación** | Repetir en `/arenado-de-piletas` (CTA inline) y con el botón flotante | Un push por confirmación, nunca dos simultáneos |
| 6 | **GA4 DebugView** | GA4 → Administrar → DebugView | Llega `contact_whatsapp` |
| 7 | **Una sola primaria** | `Objetivos → Conversiones → Resumen` → columna "Optimización de la acción de conversión" | **Exactamente una** dice "Principal": la nativa |
| 8 | **`gclid` sobrevive los 301** | Abrir `https://www.arenadoslucho.com/arenado-particular?gclid=TEST123` | Redirige a `/arenado-de-piletas` **conservando** `?gclid=TEST123`. *(Los redirects de `next.config.js` no llevan query propia, así que Next.js la preserva por defecto — verificar igual, son 2 minutos.)* |
| 9 | **URLs finales en 200** | Probar cada URL final con el sufijo de seguimiento puesto | 200, sin redirect intermedio |

#### Después del primer clic pago (24-48 h)

| # | Chequeo | Ruta | Resultado esperado |
|---|---|---|---|
| 10 | **Estado de la acción** | `Objetivos → Conversiones → Resumen` → columna "Estado" | Pasa de "Sin actividad reciente" a **"Registrando conversiones"** |
| 11 | **Columna correcta** | Tabla de campañas | La conversión aparece en **"Conversiones"**, no solo en "Todas las conv." |
| 12 | **Diagnóstico** | `Objetivos → Conversiones → Diagnóstico` | Sin errores de etiqueta. Cobertura de conversiones mejoradas baja = esperado (§2.11) |

> 🚨 **La alarma que hay que tener presente:** si a los **15 días** el estado sigue en "Sin actividad reciente" **y hubo más de 20 clics**, la etiqueta no está disparando y ya se quemó medio mes de presupuesto a ciegas. Es el fallo más caro y el más silencioso.

#### Control mensual — el único juez real

**Cruzar el número de conversiones de Ads contra las conversaciones reales de WhatsApp que recibió el dueño.** Si Ads dice 18 y en el teléfono hubo 4 conversaciones, hay un problema de medición y **no se optimiza nada hasta resolverlo**. No van a coincidir exacto nunca; lo que tiene que coincidir es el **orden de magnitud y la tendencia**.

---

### 2.16 Qué NO hacer

| ⛔ | Por qué |
|---|---|
| **Disparar el evento en el clic del botón** en vez de en la confirmación | Infla la medición 2-4×. El código hoy está bien resuelto: **no romperlo** |
| **Dejar la nativa y la importación de GA4 las dos como primarias** | Doble conteo: el CPA aparece a la mitad del real. **El riesgo #1 de esta sección** |
| **Usar conversiones de llamada, extensión de llamada o anuncios de solo llamada** | Fue la causa verificada de las llamadas de gente buscando empleo (28/07/2026) |
| **Usar formularios de clientes potenciales de Google** | El lead queda en un CSV alojado por Google, **no llega al WhatsApp** y **no dispara `contact_whatsapp`** → rompe la única conversión de la cuenta |
| **Poner Recuento en "Todas"** | Con dos componentes emitiendo el mismo evento y sin `event_id`, infla 30-50% |
| **Marcar micro-conversiones como principales** (page view, scroll, clic saliente) | Es exactamente lo que arruinó el historial de esta cuenta |
| **Fijar un tCPA basado en los 2.800 / 8.204 ARS históricos** | Son números calculados sobre conversiones sucias. **No hay línea base: se construye de cero** |
| **Prender Maximizar conversiones el día 1** | La acción no tiene historial. Arrancar en Maximizar clics con tope de CPC hasta tener 15-30 conversiones limpias |
| **Borrar las acciones viejas** en vez de degradarlas | Se pierde histórico y comparabilidad. Degradar, no borrar |
| **Mapear el `value: 1` del dataLayer** al valor de conversión | Le enseña al sistema que todos los trabajos valen igual |
| **Enviar PII** (teléfono, email) en el dataLayer | Prohibido por el proyecto y por política de Google |
| **Instalar un CMP / Consent Mode** para tráfico argentino | Destruye señal de conversión sin obligación legal que lo justifique |
| **Agregar un segundo botón flotante** o duplicar el push | Dispara dos conversiones por el mismo usuario |
| **Tocar la configuración de la conversión con campañas corriendo** | Cambiar la acción principal, la ventana o el modelo **resetea el aprendizaje de Smart Bidding desde cero**, sin aviso |

---

### 2.17 Estado objetivo — sección Conversiones

| # | Ítem | Estado objetivo | Dónde se configura | Verificación |
|---|---|---|---|---|
| 1 | Acción principal | **Una sola:** `WhatsApp confirmado - web (contact_whatsapp)` | `Objetivos → Conversiones → Resumen` | Columna "Optimización" = Principal |
| 2 | Fuente | Sitio web (etiqueta nativa vía GTM), **no** importación GA4 | `+ Crear acción → Sitio web → Agregar manualmente con código` | ID + etiqueta pegados en GTM |
| 3 | Categoría | **Contacto** → objetivo "Contactos" | Editar configuración → Categoría | Captura |
| 4 | Recuento | **Una** | Editar configuración → Registrar | Captura |
| 5 | Ventana de clic | **30 días** | Editar configuración → Ventana | Captura |
| 6 | Ventana de visualización | 1 día (default) | Editar configuración | Captura |
| 7 | Valor | **Sin valor** (fase 1) | Editar configuración → Valor | Captura |
| 8 | Atribución | **Basada en datos** (default, congelado) | Editar configuración → Modelo | Captura |
| 9 | GA4 `contact_whatsapp` | **Secundaria** (control cruzado, no puja) | `Conversiones → Objetivos → Editar objetivo` | Captura |
| 10 | GA4 `form_submit` | **Secundaria** (obsoleta: no hay formulario) | Ídem | Captura |
| 11 | `Lead form - Submit` | Secundaria ✅ (hecho 26/07/2026) | Ídem | — |
| 12 | Local actions / Smart campaign / Clicks to call | **No degradables** → excluidas a nivel campaña | Objetivos de campaña | 0 conversiones mensuales |
| 13 | Objetivo predeterminado de cuenta | **Solo "Contactos"** | `Conversiones → Objetivos → Config. predeterminada de la cuenta` | Captura |
| 14 | Objetivos a nivel campaña (las 3) | **"Objetivos específicos de la campaña" → solo "Contactos"** | `Campañas → Configuración → Objetivos de conversión` | Captura por campaña |
| 15 | Conversiones mejoradas | **Activadas a nivel cuenta**, sin expectativa de lift | `Objetivos → Configuración → Uso de datos de clientes` | Diagnóstico (cobertura baja = esperado) |
| 16 | Consent Mode / CMP | **No implementar** | — | Geo en "Presencia", solo AMBA |
| 17 | Etiquetado automático | **Activado** | `Administrador → Config. de la cuenta → Etiquetado automático` | Test `?gclid=TEST123` |
| 18 | Exclusión de datos histórica | **Cargada** hasta la fecha de corte de medición limpia | `Herramientas → Biblioteca compartida → Estrategias de puja → Controles avanzados` | Fecha en bitácora |
| 19 | `Trabajo cobrado (carga manual)` | **Creada como secundaria**, carga mensual | `+ Crear acción → Importar → Cargas manuales` | Primera carga al mes 2 |
| 20 | Recursos de llamada / formulario de Google | **Inexistentes** en los 3 niveles | `Campañas → Recursos` + `Config. cuenta → Informes de llamadas` | Captura mensual |
| 21 | Estado de la acción | **"Registrando conversiones"** a las 24-48 h del primer clic pago | `Conversiones → Resumen → Estado` | Captura |
| 22 | Cruce con la realidad | Conversiones de Ads ≈ conversaciones reales de WhatsApp | Manual, mensual | Bitácora |

---

### 2.18 Higiene documental — ✅ CERRADA (02/08/2026)

Varios documentos del repositorio describían como vigente un evento que ya no existe. **Todos fueron corregidos** a `contact_whatsapp` como único evento y única conversión primaria:

- `contexto/06-tracking-y-analytics.md` y `05-formularios-y-conversion.md` (reescritos)
- `contexto/09-api-y-servicios.md` y `12-seguridad-y-validaciones.md` (reescritos: sin Formspree, sin formulario)
- `contexto/03-rutas-y-paginas.md` (reescrito: rutas reales + `/arenado-de-piletas`)
- `contexto/01`, `02`, `04`, `07`, `08`, `10`, `11`, `13`, `14`, `15`, `16`, `17`, `19`, `20` y `README` (correcciones puntuales)
- `marketing/`: `01`, `05`, `07`, `09`, `10`, `11`, `13` y `ROADMAP.md`

**Fuente única de la decisión: ADR-019** en `contexto/18-decisiones-tecnicas.md` (anula ADR-007).

⚠️ Se conservan a propósito las menciones en registros **históricos**: entradas viejas de `08-bitacora.md` y el volcado crudo de la cuenta en `10-cuenta-ads-auditoria.md` §4.5. Describen lo que había, no lo que debe haber.

---

### 2.19 Datos a confirmar antes de ejecutar

| ⚠️ | Dato | Por qué bloquea |
|---|---|---|
| 1 | **ID de conversión (`AW-…`) y etiqueta** de la acción nueva | Sin eso no se puede armar la etiqueta en GTM. Se obtiene al crear la acción |
| 2 | **Propiedad y measurement ID de GA4** (el nombre sugiere "Arenados Lucho SEO (web)"); la doc del repo lo tiene sin completar | Necesario para verificar el vínculo y degradar la importación correcta |
| 3 | **¿El etiquetado automático está activado?** | Sin `gclid` no hay atribución fina ni cargas offline |
| 4 | **¿`Clicks to call` se puede degradar a secundaria?** (es alojada en Google) | Define si alcanza con degradarla o hay que depender solo de la exclusión a nivel campaña |
| 5 | **¿Se reutiliza la cuenta 953-841-6905 o se abre una nueva?** | Si se reutiliza, la exclusión de datos históricos es obligatoria; si es nueva, se pierde el historial de Nivel de calidad |
| 6 | **Ticket promedio por tipo de trabajo y tasa de cierre** de consulta a trabajo cobrado | Sin esos dos números no se puede asignar valor de conversión en la fase 2 |
| 7 | **¿`contact_whatsapp` está marcado como evento clave en GA4?** | Si no lo está, la importación (plan B) no funciona |
| 8 | **Acceso del dueño a GTM `GTM-W63ZV9D9`** con permisos de publicación | Es lo que habilita la etiqueta nativa; si no, se activa el plan B de §2.3 |

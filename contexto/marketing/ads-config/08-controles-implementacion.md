## 8. Controles, operación y plan de implementación

---

# BLOQUE A — Controles y operación

## 8.1 Aplicación automática de recomendaciones: apagar todo, en tres frentes

Google puede modificar la cuenta sin aprobación previa por **tres vías independientes que no se apagan entre sí**. Apagar una y suponer que las tres quedaron cubiertas es el error más caro de este arranque.

### Frente 1 — Aplicación automática de recomendaciones (nivel cuenta)

**Ruta:** `Campañas → Recomendaciones → botón "Aplicación automática" (arriba a la derecha)`
**Alternativa:** `Administrador → Configuración de la cuenta → Aplicación automática`

**Acción: destildar TODAS las opciones de los dos bloques ("Mantén tus anuncios" y "Haz crecer tu negocio") y guardar.** No hay interruptor maestro: se destilda una por una.

| Opción | Qué rompería en esta cuenta |
|---|---|
| Usar palabras clave de concordancia amplia | Viola la regla dura del proyecto **y** dispara la auto-migración a AI Max de septiembre 2026 |
| Agregar palabras clave nuevas | Reintroduce términos técnicos (granallado, Sa3) o de empleo |
| **Quitar palabras clave negativas en conflicto** | La más letal: borra negativas de EMPLEO o TÉCNICAS sin avisar. Vuelve el problema diagnosticado el 27/07/2026 |
| Ajustar presupuestos | Pasa por encima del reparto 3.000/1.250/750 y puede disparar el guardián a mitad de mes |
| Cambiar estrategia de puja | Resetea el aprendizaje; puede saltar a tCPA sin datos limpios |
| Expandir a Socios de búsqueda / Display | Diluye ~18 clics/día en inventario sin intención |
| Actualizar textos de anuncios | Puede colar promesas prohibidas |

> **Nota 2026:** "Añadir anuncios de búsqueda responsivos" salió de esta pantalla el 26/01/2026. Eso **no** reduce el riesgo: la generación automática de texto se mudó a AI Max (Frente 2).

Auditar lo que ya se aplicó solo: `Recomendaciones → Aplicación automática → pestaña Historial`.

### Frente 2 — AI Max (nivel campaña **y** nivel grupo de anuncios)

**Ruta campaña:** `Campañas → [campaña] → Configuración → sección "AI Max" → toggle en OFF`
**Ruta grupo:** `Campañas → [campaña] → Grupos de anuncios → [grupo] → Configuración del grupo para AI Max → "Concordancia con términos de búsqueda" en OFF`

Si por cualquier motivo el toggle de campaña queda encendido, destildar **los tres** parámetros: *Concordancia con términos de búsqueda*, *Personalización de texto* y *Expansión de la URL final*. No alcanza con uno: no existe un switch maestro de apagado.

Riesgo concreto acá, no teórico:
- **Personalización de texto** lee la landing y las keywords y escribe titulares nuevos → puede generar "granallado", "metal blanco", "Sa3", "norma ISO". Son promesas que el negocio no puede cumplir.
- **Expansión de la URL final** reemplaza la URL final por la página que la IA considere más relevante → manda una consulta de pileta a `/servicios` o a un caso de éxito, rompiendo el ruteo consulta→landing, que es exactamente lo que hace barato ese lead.
- **Concordancia con términos de búsqueda** es amplia con otro nombre.

### Frente 3 — Recursos automatizados a nivel de cuenta

**Ruta:** `Campañas → Recursos → pestaña "Asociaciones" → menú ⋮ → "Recursos automatizados a nivel de cuenta" → ⋮ → Configuración avanzada`

**Apagar:** vínculos a sitios dinámicos, textos destacados dinámicos, fragmentos estructurados dinámicos, imágenes dinámicas.
**Se puede dejar:** información dinámica del negocio (nombre y logo), si se quiere el logo.

⚠️ Apagar los dinámicos **y no cargar los manuales el mismo día** cuesta superficie en la SERP y baja la Eficacia del anuncio (que premia tener 6+ sitelinks elegibles). Van juntos: apagar y cargar en la misma sesión.

### Verificación recurrente (obligatoria, no opcional)

Los tres frentes se re-verifican **el primer lunes de cada mes**, con captura de pantalla fechada guardada y una línea en `08-bitacora.md`. Google agrega opciones nuevas ya tildadas y hay reportes recurrentes de reactivación tras migraciones de producto. Un chequeo único no sirve.

---

## 8.2 Nivel de optimización: qué hacer con él

**No es un KPI. Es la lista de tareas de Google, no la de Arenados Lucho.** El KPI del proyecto es CPA por lead de WhatsApp y trabajos cobrados.

- **Banda de operación: 70–85%.** Un 100% en esta cuenta significaría haber cedido keywords, pujas y presupuesto.
- **Dato clave que casi nadie usa: descartar también sube el score.** Google lo documenta explícitamente. Se puede llegar a 80–90% sin aplicar una sola recomendación tóxica.
- El **70% del badge de Google Partner es un requisito de agencia**, no de rendimiento. Acá no hay agencia ni MCC: es irrelevante. Si algún día entra un tercero a gestionar, dejar por escrito que el nivel de optimización no es KPI y que auto-apply queda en OFF.

**Ritual (15 min, cada 15 días):** `Campañas → Recomendaciones` → en cada tarjeta, `menú ⋮ → Descartar`, eligiendo motivo.

| Descartar SIEMPRE, sin leer | Se puede evaluar |
|---|---|
| Concordancia amplia / AI Max | Agregar sitelinks o textos destacados faltantes |
| Subir presupuesto | Corregir anuncios rechazados |
| Cambiar estrategia de puja | Arreglar keywords que no publican |
| Socios de búsqueda / Display | Corregir URLs finales rotas |
| Formulario de clientes potenciales | Corregir conflictos entre negativas y keywords (revisando **una por una**) |
| Recurso/extensión de llamada | |

Las descartadas **reaparecen** a las pocas semanas. Por eso el ritual es quincenal y no único. Anotar el score de arranque en la bitácora solo para tener tendencia; no reportarlo como resultado.

---

## 8.3 Cadencia de optimización para una cuenta chica

Principio rector: con ~18 clics/día en toda la cuenta, la disciplina que más plata salva no es optimizar más seguido sino **cambiar menos**. Se revisa seguido, se toca poco.

**Regla dura, sin excepciones:** un (1) cambio estructural por vez, **14 días de datos** antes del siguiente, y todo cambio a `08-bitacora.md` el mismo día con fecha y motivo. Cambios de presupuesto ≤25% por vez; cambios de target ≤20%.

### Diario — 2 minutos

| Qué se mira | Dónde | Criterio de acción |
|---|---|---|
| ¿Hubo gasto ayer en las 3 campañas? | `Campañas` (vista por defecto, últimos 7 días) | Gasto = 0 con campaña activa → ir a 8.7 (alarma) |
| ¿Llegó el heartbeat del guardián? | Email | No llega 2 días seguidos → script caído, revisar `Herramientas → Acciones masivas → Scripts` |
| ¿Algún email de alerta de los scripts? | Email | Si llegó, se atiende ese día |

**No se toca nada en la revisión diaria.** Es detección, no optimización.

### Semanal — 30 minutos (lunes, junto con los emails de los scripts)

1. **Términos de búsqueda + n-gram → negativas.** Detalle del método en 8.4.
2. **Historial de cambios de los últimos 7 días** (`Campañas → Estadísticas e informes → Historial de cambios`), ordenado por usuario. *Todo cambio debe tener un responsable conocido: el dueño o un script del proyecto.* Un cambio sin dueño → auto-apply reactivado o acceso ajeno → ir a 8.7.
3. **Pacing:** gasto acumulado del mes vs. el ritmo esperado. Con 5.000/día el ritmo sano es ≈152.000/mes; el guardián avisa al 80% de 300.000.
4. **URLs en 200:** llega el mail del `04-chequeo-urls.js`. ⚠️ Ese script solo revisa campañas **ENABLED** — no cubre campañas pausadas.
5. **Conversiones ≠ 0** si hubo más de 20 clics en la semana.
6. Anotar en bitácora **solo si hubo cambios**.

Criterio de acción semanal: solo se agregan negativas y se corrigen roturas. **No se tocan pujas, ni presupuestos, ni estructura.**

### Quincenal — 45 minutos

| Qué | Criterio de acción |
|---|---|
| Keywords con 0 impresiones en 14 días | Revisar en `Vista previa y diagnóstico de anuncios` por qué no publica (puja baja / negativa que la bloquea / volumen nulo). Si es volumen nulo, pausar |
| Keywords con ≥15 clics y 0 conversiones | Pausar o bajar puja. **No** pausar por debajo de 15 clics: no hay señal |
| Cuota de impresiones perdida | Ver 8.5: por presupuesto → problema de plata; por ranking → problema de calidad |
| Recomendaciones nuevas | Descartar (8.2) |
| **Re-verificar auto-apply, AI Max y recursos automatizados en OFF** | Si alguno apareció encendido: apagar el mismo día + bitácora |

### Mensual — 1.5 horas

| Qué | Criterio de acción |
|---|---|
| Nivel de calidad y sus 3 componentes | Ver 8.5. Solo keywords con ≥50 impresiones |
| RSA: rendimiento de recursos (`⋮ → Ver detalles del recurso`) | Reemplazar **solo** los assets etiquetados "Baja" que además tengan volumen real. No tocar copy antes de 4–6 semanas |
| Administrador de políticas | `Herramientas → Solución de problemas → Administrador de políticas`: cero rechazos, cero "Aprobado (limitado)" sin revisar |
| **Cruce Ads ↔ GA4 ↔ conversaciones reales de WhatsApp** | El único juez real. Si Ads dice 12 conversiones y el dueño recibió 3 chats, hay doble conteo o medición sucia: **investigar antes de optimizar nada** |
| Estadísticas de subasta | `tildar campaña → botón "Estadísticas de subasta"`. Direccional, mensual, solo a nivel campaña |
| Estadísticas de términos de búsqueda (Insights) | `Campañas → Estadísticas e informes → Estadísticas`: ¿el tráfico deriva a temas de obra/PYME o a empleo/insumos/DIY? |
| KPIs a `07-medicion-y-kpis.md` y decisión de **una** mejora prioritaria del mes | |

### Trimestral — media jornada

- Estructura completa contra el mapa de keywords (`03-keywords-maestro.md`): ¿algún grupo ya junta 15+ conversiones/mes y merece partirse?
- Estacionalidad de piletas: rebalanceo de presupuesto entre campañas (con bitácora, no por decisión del algoritmo).
- Revisión de la transición: % de leads de obra/PYME sobre el total, contado a mano del WhatsApp.
- Revisión del tope de 300.000 ARS/mes por inflación (`TOPE_MENSUAL` en `06-guardian-presupuesto.js`).
- Reverificar los puntos volátiles de 2026: fechas de migración a AI Max, defaults nuevos, cambios de pacing.

---

## 8.4 Cómo trabajar el informe de términos de búsqueda

**Ruta:** `Campañas → Estadísticas e informes → Términos de búsqueda`
**Alternativa:** `Campañas → Público, keywords y contenido → Palabras clave de búsqueda → pestaña "Términos de búsqueda"`

### Lo primero que hay que aceptar: no vas a ver todo lo que pagaste

Google oculta los términos que no superan un umbral de volumen a nivel de todo Google. Estimaciones de industria: ~40% del gasto no aparece como término individual, y con concordancia amplia puede pasar el 80%. Consecuencias operativas:

1. **Las negativas se cargan ANTES de encender, no después de ver el desperdicio** — la mitad del desperdicio nunca se ve.
2. **Frase y exacta no son una preferencia estética: son la única palanca que baja el porcentaje oculto.**
3. **Medir el gasto ciego cada mes:** costo total de la campaña − suma del costo de los términos visibles. Esa diferencia es el gasto que se hizo a ciegas. Si crece, algo se abrió.

### Rutina semanal (15 min de los 30)

1. Abrir el informe, últimos 7 días, con el conjunto de columnas `OP-Terminos` (8.6).
2. Leer el email del `03-ngram-terminos.js`: detecta patrones ("empleo", "curso", "alquiler") que a nivel término individual no llegan al umbral pero como n-grama sí.
3. Clasificar cada término con esta tabla antes de tocar nada:

| Situación | Acción | Dónde va |
|---|---|---|
| Empleo / búsqueda laboral | Negativa exacta + revisar que la raíz esté en la lista | Lista `NEG-EMPLEO` |
| Término técnico (granallado, Sa3, ISO, metal blanco) | Negativa | Lista `NEG-TECNICAS` |
| Alquiler/venta de equipos, insumos, hidrolavado | Negativa | Lista `NEG-EQUIPOS-DIY` |
| Curso, tutorial, casero, cómo hacer | Negativa | Lista `NEG-EQUIPOS-DIY` |
| Chasis, carrocería, llantas, autopartes | Negativa | Lista `NEG-DATA` |
| Consulta de pileta que cayó en Obra-Industrial | Negativa **de frase a nivel campaña** en Obra-Industrial | Lista `RUTEO-PILETAS` |
| Consulta de obra/galpón que cayó en Piletas | Negativa de frase a nivel campaña en Piletas | Nivel campaña |
| Término bueno con ≥2 conversiones que no es keyword | **Agregar como keyword en exacta** al grupo correcto | Grupo de anuncios |
| Término bueno, gasta y no convierte, ≥15 clics | Bajar puja o pausar la keyword que lo trajo | Grupo de anuncios |

### Lo que NUNCA se negativiza

- **`pileta`, `piletas`, `piscina`, `piscinas`, `natatorio` a nivel CUENTA** → apagaría el servicio más rentable del historial, en silencio y sin alerta. Solo van como negativa **de campaña** en Obra-Industrial y General-Marca.
- **`arenadora` sola** (la usa el comprador), **`zona norte`**, y **`contratar` / `personal` / `puesto` sueltos**.
- El vocabulario del dueño de casa que no conoce la palabra "arenado": **sacar pintura, quitar pintura, despintar, decapar, se descascara la pintura**. Ese es el gap de negocio, no basura.

### Arquitectura de negativas (tres niveles, a propósito)

| Nivel | Qué va | Ruta UI | Límite |
|---|---|---|---|
| **Cuenta** | Solo lo universalmente tóxico y permanente: bloque EMPLEO + bloque TÉCNICAS | `Administrador → Configuración de la cuenta → Palabras clave negativas` | 1.000, lista única, **no admite excepción por campaña** |
| **Listas compartidas** | `NEG-EQUIPOS-DIY`, `NEG-DATA` (aplicadas a las 3 campañas) y `RUTEO-PILETAS` (solo a Obra-Industrial y General-Marca) | `Herramientas → Biblioteca compartida → Listas de exclusión → pestaña "Listas de palabras clave negativas"` | 20 listas, 5.000 términos c/u |
| **Campaña** | Solo ruteo fino que no amerite lista | `Campañas → [campaña] → Público, keywords y contenido → Palabras clave → pestaña "Palabras clave negativas" → nivel Campaña` | 10.000 por campaña |

⚠️ Al agregar una negativa desde la vista de campaña, Google ofrece "guardar en una lista". **Si no se tilda, la negativa queda suelta en esa campaña y no se propaga.** Es la causa #1 de que una campaña quede desprotegida.

---

## 8.5 Nivel de calidad: leer los 3 componentes, no el número

**Cómo verlo:** `Campañas → Público, keywords y contenido → Palabras clave de búsqueda → ícono de columnas → Modificar columnas → desplegable "Nivel de calidad"` → tildar: *Nivel de calidad, CTR esperado, Relevancia del anuncio, Experiencia con la página de destino* (y sus versiones "(historial)" para ver tendencia) → **Aplicar**.

El QS 1–10 no entra a la subasta como input directo, pero sus tres componentes sí están en el denominador del CPC real: bajar cualquiera encarece cada clic. **7 o más es bueno.** El número compuesto no dice qué arreglar; los tres componentes sí, y cada uno pide un fix distinto.

| Componente "Por debajo del promedio" | Qué significa | Fix concreto en esta cuenta |
|---|---|---|
| **CTR esperado** | La keyword no está en el titular, o está en un grupo con intención mezclada | Separar la keyword a su propio grupo y escribir un titular con la keyword **literal**. En `ag-pileta-sin-jerga` el titular 1 fijado debe decir *"Sacamos la pintura de tu pileta"*, no *"Arenado de piletas"* — el usuario no conoce la palabra |
| **Relevancia del anuncio** | RSA genérico para el tema del grupo | Al menos 3 titulares con la keyword del grupo. Si el grupo tiene 2 temas, partir el grupo |
| **Experiencia con la página de destino** | Destino equivocado o promesa que la landing no respalda | Piletas → `/arenado-de-piletas` (nunca al home). Obra/PYME → `/servicios`. Genéricos → `/`. Marca → `/`. Y: un anuncio que prometa algo que la landing no dice castiga acá |

**Criterios de acción:**
- Solo actuar sobre keywords con **≥50 impresiones**. Debajo de eso el dato no existe.
- Revisión **mensual**, no semanal.
- Ver `—` los primeros días es normal: el QS necesita impresiones acumuladas (con este presupuesto puede tardar 2 semanas).
- ⛔ **Nunca subir la puja para "compensar" un QS bajo.** Arreglar el componente que falla. Subir la puja compra impresiones caras en una posición que igual no convierte.

---

## 8.6 Columnas que hay que dejar configuradas

Guardar cada conjunto con `Columnas → Modificar columnas → Guardar el conjunto de columnas como…` para no rearmarlo cada vez.

**`OP-Campañas`** (vista diaria/semanal)
> Presupuesto · Estado · Impresiones · Clics · CTR · CPC prom. · Costo · Conversiones · Costo/conv. · Porcentaje de impresiones de búsqueda · Porc. de impr. de búsqueda perdidas (presupuesto) · Porc. de impr. de búsqueda perdidas (ranking)

Las tres últimas son el diagnóstico central de una cuenta limitada: **perdida por presupuesto** = hay demanda y el techo es la plata (señal legítima para escalar, si además hay CPA aceptable y trabajos cobrados). **Perdida por ranking** = el problema es calidad o puja, y subir presupuesto no lo arregla.

**`OP-Keywords`** (mensual)
> Tipo de concordancia · Estado · Impresiones · Clics · CTR · CPC prom. · Costo · Conversiones · Costo/conv. · Nivel de calidad · CTR esperado · Relevancia del anuncio · Experiencia con la página de destino · Porc. de impr. de búsqueda perdidas (ranking)

**`OP-Terminos`** (semanal)
> Término de búsqueda · Tipo de concordancia · Palabra clave · Grupo de anuncios · Impresiones · Clics · Costo · Conversiones · Costo/conv.

**`OP-Anuncios`** (mensual)
> Estado · **Detalles de la política** (en `Modificar columnas → Atributos`) · Eficacia del anuncio · Impresiones · Clics · CTR · Conversiones · Costo/conv.

"Detalles de la política" es la única forma de ver por qué un anuncio quedó "Aprobado (limitado)" sin abrirlo uno por uno.

**Segmentos útiles** (`botón Segmento` sobre la tabla):
- **Red (con socios de búsqueda)** → verificación de que no hay tráfico de Socios ni Display. Si aparece, algo se encendió.
- **Dispositivo** → para decidir una exclusión (-100%), que sí funciona con Smart Bidding, a diferencia de los modificadores de puja.

⚠️ Con Smart Bidding, los **ajustes de puja** por ubicación, horario, audiencia y demografía se ignoran. No perder tiempo configurándolos: solo dejan rastro que después confunde el diagnóstico.

---

## 8.7 Señales de alarma que exigen intervención inmediata

| # | Señal | Dónde se ve | Qué significa | Acción (≤24 h) |
|---|---|---|---|---|
| 1 | **Gasto = 0** con campañas activas, 24 h | `Campañas` | Anuncios rechazados, grupo sin anuncios activos, o facturación caída | `Herramientas → Solución de problemas → Administrador de políticas` + `Vista previa y diagnóstico de anuncios` |
| 2 | **≥40 clics acumulados y 0 conversiones** | `Objetivos → Conversiones → Resumen`, columna Estado | La etiqueta no dispara | `Objetivos → Conversiones → Diagnóstico` + prueba manual del AlertDialog en el sitio. **Si a 60 clics sigue en 0: pausar todo** |
| 3 | La acción de conversión dice **"Sin actividad reciente"** a los 15 días | Ídem | Medición rota; medio mes gastado a ciegas | Pausar campañas y revisar GTM |
| 4 | **Aparece una acción de conversión que nadie creó** | `Objetivos → Conversiones → Resumen` | Recomendación auto-aplicada de la familia "medición" | Degradar a Secundaria el mismo día + revisar auto-apply + bitácora |
| 5 | **Cambio en el Historial sin autor conocido** | `Campañas → Estadísticas e informes → Historial de cambios` | Auto-apply reactivado o alguien más tiene acceso | `Recomendaciones → Aplicación automática → Historial` y `Administrador → Acceso y seguridad` |
| 6 | **Términos de empleo en el informe de términos** | Términos de búsqueda | Se cayó una negativa (probable: "quitar negativas en conflicto") | Recargar la lista `NEG-EMPLEO` y verificar auto-apply |
| 7 | **AI Max o "concordancia amplia a nivel campaña" aparece ON** | `Configuración de campaña` | Migración forzada o recomendación aplicada | Apagar el mismo día, captura y bitácora |
| 8 | **Gasto de un día > 2× el presupuesto diario de la campaña** | `Campañas`, segmentado por día | Presupuesto tocado, o dayparting con el pacing nuevo de junio 2026 | Historial de cambios + revisar programación de anuncios |
| 9 | **Email del guardián al 80% del tope antes del día 24** | Email | Ritmo de gasto desalineado con el mes | Bajar presupuestos diarios antes de que pause solo |
| 10 | **No llega el heartbeat diario del guardián** ni el reporte del lunes | Email | Script caído. Un script que dejó de correr se ve *exactamente igual* a uno que corre bien | `Herramientas → Acciones masivas → Scripts`: última ejecución y errores |
| 11 | **Cuota de impresiones perdida por ranking > 60%** en un grupo | `OP-Campañas` / nivel grupo | Problema de relevancia, no de plata | Diagnóstico de QS por componente (8.5) |
| 12 | **Anuncio en "Aprobado (limitado)"** | `OP-Anuncios`, columna Detalles de la política | Corre y gasta con alcance recortado, sin alerta ruidosa | Corregir el copy y reenviar a revisión |
| 13 | **Ads/GA4 reportan muchas más conversiones que chats reales** | Cruce mensual | Doble conteo (evento medido por dos vías), recuento en "Todas", o bots | No optimizar nada hasta resolverlo |
| 14 | **CPC promedio > 450 ARS sostenido 3 días** | `OP-Campañas` | Competencia, QS caído o tope de CPC mal puesto | Revisar tope de CPC y QS antes de tocar presupuesto |

---

---

# BLOQUE B — Plan de implementación paso a paso

Pensado para ejecutarse **a mano, guiado, en sesiones cortas**. Cada sesión termina con una verificación que hay que pasar antes de avanzar. Marcado: **[SIN SALDO]** = se puede hacer con la cuenta sin fondos; **[CON SALDO]** = requiere saldo cargado y campañas corriendo.

> **Regla que gobierna todo el orden:** las conversiones se configuran **antes** que las campañas. Hacerlo al revés obliga a rehacer los objetivos campaña por campaña.

---

## Sesión 1 — Decisiones previas, acceso y seguridad · ~30 min · [SIN SALDO]

**1.** Decidir y registrar en `08-bitacora.md`: **¿cuenta existente o cuenta nueva?**
- Cuenta existente: conserva historial de Quality Score, pero arrastra las conversiones infladas. Se corrige con una **exclusión de datos** (paso 19).
- Cuenta nueva: medición limpia, pierde señal histórica de calidad, y hay que reinstalar los 4 scripts.
- ⚠️ **A confirmar por el dueño.** El resto del plan asume **cuenta existente con la estructura vieja pausada** (no borrada: el historial vale).

**2.** `Administrador → Acceso y seguridad → pestaña "Usuarios"`: el dueño como **único Administrador**. Cualquier colaborador entra con acceso **Estándar** a su propio mail. Nunca compartir usuario y contraseña (rompe el Historial de cambios y expone la facturación).

**3.** `Administrador → Acceso y seguridad → pestaña "Administradores"`: desvincular cualquier **MCC** que no se reconozca. Un MCC de una agencia vieja sigue pudiendo tocar la cuenta.

**4.** Verificación en 2 pasos y **passkey** activas en la cuenta de Google del dueño (desde el 15/07/2026 la passkey se exige para agregar usuarios, cambiar facturación y actualizar vínculos).

**5.** Iniciar la **verificación de anunciante** por dominio (DNS en Vercel para `arenadoslucho.com`). Tarda semanas y bloquea el asset de nombre y logo del negocio: se arranca ahora, en paralelo.

**6.** Confirmar zona horaria `America/Buenos_Aires` y moneda **ARS** (`Administrador → Preferencias`). ⚠️ La zona horaria y la moneda **no se pueden cambiar** después en una cuenta existente.

> ✅ **Verificación de la sesión:** un solo Administrador · cero MCC desconocidos · 2FA + passkey activas · verificación de anunciante iniciada · zona horaria y moneda confirmadas.

---

## Sesión 2 — Blindaje de la cuenta (antes de que exista una sola campaña) · ~45 min · [SIN SALDO]

**7.** **Auto-apply OFF completo.** `Campañas → Recomendaciones → Aplicación autom.` → destildar todo → Guardar → **captura de pantalla fechada**.

**8.** **Recursos automatizados a nivel de cuenta OFF.** `Campañas → Recursos → Asociaciones → ⋮ → Recursos automatizados a nivel de cuenta → ⋮ → Configuración avanzada` → apagar vínculos dinámicos, textos destacados dinámicos, fragmentos estructurados dinámicos e imágenes dinámicas → **captura**.

**9.** **Etiquetado automático ON.** `Administrador → Configuración de la cuenta → Etiquetado automático`. Sin `gclid` no hay importación de conversiones ni atribución fina.

**10.** **Informes de llamadas OFF.** `Administrador → Configuración de la cuenta → Informes de llamadas` → desactivado. Evita el número de reenvío de Google y cierra una de las tres puertas por las que puede volver el teléfono.

**11.** **Negativas a nivel cuenta.** `Administrador → Configuración de la cuenta → Palabras clave negativas → +`. Cargar **solo** los dos bloques permanentes:
- *Técnicas:* `granallado`, `granalla`, `shot blasting`, `sa3`, `sa 2`, `sa 2.5`, `iso 8501`, `metal blanco`, `perfil de anclaje`, `rugosidad`, `espesor de pelicula`
- *Empleo:* `empleo`, `busco trabajo`, `busco empleo`, `trabajo de arenador`, `vacante`, `se busca personal`, `oferta laboral`, `oferta de trabajo`, `changa`, `changas`, `sueldo`, `cv`, `curriculum`, `rrhh`, `recursos humanos`, `empleado`

⛔ **Nada de pileta/piscina acá.** Sería catastrófico e invisible.

**12.** **Listas de negativas compartidas.** `Herramientas → Biblioteca compartida → Listas de exclusión → pestaña "Listas de palabras clave negativas" → +`. Crear:
- `NEG-EQUIPOS-DIY`: `alquiler de arenadora`, `venta de arenadora`, `comprar arenadora`, `maquina de arenar`, `arena para arenado`, `compresor`, `hidrolavado`, `curso`, `tutorial`, `como hacer`, `casero`, `aprender`
- `NEG-DATA`: `chasis`, `carroceria`, `llantas`, `autopartes`, `limpieza de chasis`
- `RUTEO-PILETAS`: `pileta`, `piletas`, `piscina`, `piscinas`, `natatorio` — **en concordancia de frase**

Las dos primeras se aplicarán a las 3 campañas; `RUTEO-PILETAS` **solo** a Obra-Industrial y General-Marca (paso 32).

> ✅ **Verificación:** capturas de auto-apply y recursos automatizados en OFF · etiquetado automático ON · negativas de cuenta cargadas y contadas · 3 listas compartidas creadas (todavía sin aplicar, porque no hay campañas). Todo registrado en `08-bitacora.md`.

---

## Sesión 3 — Medición: la conversión única · ~60 min · [SIN SALDO]

**13.** Vincular GA4 ↔ Ads: `Administrador → Vinculación de cuentas → Google Analytics`. ⚠️ **A confirmar:** ID de la propiedad de GA4 (el archivo `07-medicion-y-kpis.md` la tiene sin completar).

**14.** **Crear la acción de conversión.** `Objetivos → Conversiones → Resumen → + Crear acción de conversión → Sitio web → "Agregar manualmente con código"`. Configuración exacta:

| Campo | Valor |
|---|---|
| Nombre | `WhatsApp - contacto confirmado` |
| Categoría | **Contacto** |
| Valor | **No usar valor** (fase 1) |
| Recuento | **Una** ⚠️ el default es "Todas" y juega en contra: mide clics repetidos, no personas |
| Ventana de conversión post-clic | **30 días** |
| Ventana post-impresión | 1 día |
| Modelo de atribución | **Basada en datos** (default; no tocar nunca más) |
| Optimización de la acción | **Principal** ⚠️ verificar con captura, no asumir |

**15.** **Implementar en GTM** (`GTM-W63ZV9D9`): activador de **evento personalizado** `contact_whatsapp` → etiqueta de conversión de Google Ads con el ID y la etiqueta del paso 14. El push ya existe en el código y ya está protegido tras la confirmación del AlertDialog: **no tocarlo**. Publicar el contenedor y validar en Vista previa de GTM.

**16.** **Un solo objetivo predeterminado de cuenta.** `Objetivos → Conversiones → pestaña Objetivos → Todos tus objetivos → Editar objetivo`: dejar **solo "Contactos"** como predeterminado. Apagar el resto, incluido **"Acciones locales"** si aparece (es la explicación más probable de los CPA históricos absurdamente baratos: contaba visitas al sitio y "otras interacciones").

**17.** **Degradar todo el historial sucio a Secundaria.** `Objetivos → Conversiones → Resumen`, columna "Optimización de la acción de conversión": `Website visits`, `Other engagements`, indicaciones de mapa, `form_submit*`, `contact_email` y cualquier otra → **Secundaria**. Si alguna importada de GA4 no se deja degradar (caso de las acciones alojadas en Google), la salida es excluirla vía objetivos específicos de campaña.

**18.** **Conversiones mejoradas a nivel cuenta ON.** `Objetivos → Configuración → Uso de datos de clientes → Activar conversiones mejoradas` (aceptar las Condiciones de tratamiento de datos). Hoy no aporta —el sitio no captura email ni teléfono, y el proyecto prohíbe PII en el dataLayer— pero deja el terreno listo y evita el trabajo cuando se unifique el interruptor.

**19.** **Exclusión de datos** (solo si se reutiliza la cuenta vieja): `Herramientas → Biblioteca compartida → Estrategias de puja → pestaña "Controles avanzados" → Exclusiones de datos`, cubriendo todo el período anterior a la fecha en que `contact_whatsapp` quedó como única primaria verificada. Registrar la fecha de corte exacta en la bitácora.

**20.** **Acción secundaria "Trabajo cobrado"** (opcional pero recomendada): `+ Crear acción de conversión → Importar → Importaciones manuales con la API o las cargas`, categoría **Cliente potencial convertido**, marcada **Secundaria**. Carga a mano una vez por mes. No sirve para pujar; sirve para calcular el factor lead→trabajo, que es el dato que hoy falta.

**21.** ⛔ **NO crear:** formulario de clientes potenciales, acción de llamadas telefónicas, conversión de vista de página, ni vincular el perfil de empresa para "Acciones locales".

> ✅ **Verificación:** en `Objetivos → Conversiones → Resumen` hay **exactamente una** acción Principal, y es `WhatsApp - contacto confirmado`, con recuento **Una** y 30 días. En `pestaña Objetivos` hay **un solo** objetivo predeterminado: **Contactos**. Captura de ambas pantallas a la bitácora.

---

## Sesión 4 — Recursos (assets) a nivel campaña · ~40 min · [SIN SALDO]

Se cargan antes de crear las campañas para no dejar huecos de superficie cuando arranquen. Se cargan **a nivel campaña** una vez que las campañas existan (paso 29); esta sesión es para **redactarlos y aprobarlos como texto**, versionados en `contexto/marketing/`.

**22.** Redactar **6 sitelinks por campaña** (título 25 car. + 2 descripciones de 35 car.), con URL final propia:

*Obra-Industrial:* `Arenado en obra` → `/servicios` · `Galpones y estructuras` → `/servicios` · `Trabajos hechos` → `/casos-de-exito` · `Preguntas frecuentes` → `/preguntas-frecuentes` · `Pedir presupuesto` → `/contacto` · `Arenado de piletas` → `/arenado-de-piletas`

*Piletas:* `Arenado de piletas` → `/arenado-de-piletas` · `Antes y después` → `/casos-de-exito/arenado-pileta` · `Cómo trabajamos` → `/preguntas-frecuentes` · `Pedir presupuesto` → `/contacto` · `Otros servicios` → `/servicios` · `Quiénes somos` → `/`

*General-Marca:* `Servicios` → `/servicios` · `Arenado de piletas` → `/arenado-de-piletas` · `Casos de éxito` → `/casos-de-exito` · `Preguntas frecuentes` → `/preguntas-frecuentes` · `Pedir presupuesto` → `/contacto` · `Inicio` → `/`

⛔ Solo estas rutas existen. Nunca usar `/arenado-industrial`, `/arenado-particular` ni `/presupuesto-rapido` como URL final (tienen 301, pero un asset no debe apuntar a un redirect). No existe `/blog`.

**23.** **8–10 textos destacados** (≤20 caracteres reales): `Equipos propios` · `Vamos a tu obra` · `Presupuesto sin cargo` · `CABA y Gran Bs. As.` · `Contención de polvo` · `Listo para pintar` · `Turnos rápidos` · `Precio por trabajo`. En Piletas, cambiar dos por `Piletas de hormigón` y `Trabajamos con pileteros`.

**24.** **Fragmentos estructurados.** Obra-Industrial → encabezado *Catálogo de servicios*: `Arenado en obra`, `Estructuras metálicas`, `Tanques y silos`, `Ladrillo a la vista`, `Galpones`, `Camiones y acoplados`. Piletas → encabezado *Tipos*: `Piletas de hormigón`, `Sacado de pintura`, `Antes de revestir`, `Antes de pintar`.

**25.** **4–6 imágenes** reales de trabajo, sin texto ni marca de agua: cuadrada 1:1 (1200×1200) obligatoria + 1.91:1 (1200×628) opcional. Antes/después de pileta, ladrillo a la vista recuperado, estructura sin óxido, equipo en galpón.

**26.** ⛔ **Cero** recursos de **llamada**, **formulario de clientes potenciales**, **precio** y **ubicación**. El de ubicación queda bloqueado además porque el Google Business Profile **está sin reclamar**, y cuando se active mostraría el teléfono — reabriendo exactamente el problema de las llamadas de empleo y exponiendo el número que el sitio protege partido en dos strings.

**27.** Pasar **todo** el texto por la lista de bloqueo antes de aprobarlo: `granallado`, `granalla`, `shot blasting`, `sa3`, `sa 2`, `sa 2.5`, `iso`, `8501`, `metal blanco`, `perfil de anclaje`, `rugosidad`, `micras`, `espesor`, `certific-`, `norma`, `pintamos`, `revestimos`, `garantizamos`.

> ✅ **Verificación:** todos los textos guardados como archivo plano en `contexto/marketing/` (un archivo por campaña) y pasados por la lista de bloqueo. El copy publicado tiene que quedar auditable fuera de la interfaz de Google.

---

## Sesión 5 — Crear las 3 campañas (esqueleto, en pausa) · ~60 min · [SIN SALDO]

**Crear las tres siguiendo exactamente el mismo camino**, y dejarlas **PAUSADAS** hasta el pre-flight.

**28.** `Botón + Crear → Campaña → "Crear una campaña sin la orientación de un objetivo" → Tipo: Búsqueda`.
⚠️ **No elegir "Clientes potenciales":** ese camino esconde settings y empuja el formulario de clientes potenciales y la extensión de llamada como si fueran obligatorios.

**29.** Configuración idéntica en las tres, en este orden:

| Ajuste | Valor exacto | Ruta |
|---|---|---|
| Nombre | `AR-Search-Obra-Industrial` / `AR-Search-Piletas` / `AR-Search-General-Marca` | — |
| **Redes** | **Destildar "Incluir socios de búsqueda de Google"** (viene tildado) y verificar Display destildado | `Configuración → Redes` |
| **Ubicaciones** | CABA + partidos del GBA cargados **explícitamente** (pegar lista) | `Ubicaciones → Ingresá otra ubicación → Búsqueda avanzada → Ubicaciones múltiples` |
| **Opciones de ubicación** | **"Presencia"** — NO "Presencia o interés" | `Ubicaciones → Opciones de ubicación` (link **colapsado**: hay que abrirlo) |
| **AI Max** | Toggle **OFF**. Si aparece encendido, destildar los 3 parámetros | `Configuración → AI Max` |
| Concordancia amplia a nivel campaña | **OFF** (es la puerta de entrada automática a AI Max en septiembre 2026) | `Configuración adicional` |
| **Presupuesto diario** | Obra-Industrial **3.000** · Piletas **1.250** · General-Marca **750** ARS. Individuales, **nunca compartido** | `Configuración → Presupuesto` |
| **Puja** | **Maximizar clics** con la casilla **"Establecer un límite de CPC máximo"** tildada = **350 ARS** | `Ofertas` (hay que hacer clic en "seleccioná una estrategia de ofertas directamente") |
| Objetivos de conversión | **"Usar los objetivos de conversión de la cuenta"** (queda solo Contactos) | `Configuración → Objetivos de conversión` |
| Rotación de anuncios | **Optimizar** (default, está bien) | `Más configuraciones → Rotación de anuncios` |
| Programación de anuncios | **Sin restricción, 24/7** | `Más configuraciones` |
| Fecha de finalización | **Ninguna** | `Más configuraciones` |
| Exclusiones de IP | IP de la casa/oficina del dueño y de quien gestione (comodín en el último octeto: `200.45.12.*`, por IP dinámica) | `Más configuraciones → Exclusiones de IP` — **se configura por campaña: repetir en las 3** |
| **Sufijo de URL final** | `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&mt={matchtype}` | `Configuración adicional → Opciones de URL de la campaña` |

⚠️ **Ojo con la programación de anuncios:** desde el 01/06/2026 Google pacea al mes completo (30,4× el diario) aunque el calendario restrinja horas. Restringir a horario laboral comprime el gasto y hace tocar el tope de 2× diario seguido. Con WhatsApp asincrónico, un mensaje de las 22:30 se responde a las 8:00 sin perder el lead: **no hay razón para recortar**.

**30.** Repetir para las 3. Dejar las 3 en **Pausada**.

**31.** Aplicar las listas de negativas: `Herramientas → Biblioteca compartida → Listas de exclusión → [lista] → Aplicar a campañas`
- `NEG-EQUIPOS-DIY` y `NEG-DATA` → **las 3 campañas**
- `RUTEO-PILETAS` → **solo** Obra-Industrial y General-Marca

**32.** Negativas de campaña adicionales en Piletas (en frase, si aparecen luego en los términos): `galpon`, `estructura metalica`, `fachada`, `ladrillo`.

**33.** Cargar los recursos de la Sesión 4 **a nivel CAMPAÑA** (`Campañas → Recursos → + → [tipo] → elegir nivel: Campaña`).
⚠️ **Nunca cargar recursos a nivel grupo:** si existe aunque sea uno de un tipo a nivel grupo, los de ese tipo a nivel campaña y cuenta **dejan de mostrarse** en ese grupo. Nadie lo nota porque no da error.

> ✅ **Verificación (con captura de cada campaña):** Socios de búsqueda OFF · Display OFF · ubicación en **Presencia** · AI Max OFF · amplia a nivel campaña OFF · presupuesto correcto · CPC tope 350 · sufijo de URL cargado · listas de negativas aplicadas con el ruteo correcto · 6 sitelinks a nivel campaña.

---

## Sesión 6 — Grupos, keywords y RSA · ~60 min · [SIN SALDO]

**34.** Crear **6 grupos en total** (no más). Con ~6 clics/día por campaña, 4 grupos en Obra-Industrial darían ~1,5 clics/día cada uno: imposible de juzgar.

| Campaña | Grupo | Landing |
|---|---|---|
| Obra-Industrial | `ag-pymes-galpon-in-situ` (prioridad de puja: el trabajo más rentable por día) | `/servicios` |
| Obra-Industrial | `ag-obra-restauracion-estructuras` (fusiona obra/restauración + estructuras/tanques + industrial) | `/servicios` |
| Piletas | `ag-pileta-jerga` | `/arenado-de-piletas` |
| Piletas | `ag-pileta-sin-jerga` | `/arenado-de-piletas` |
| General-Marca | `ag-marca` | `/` |
| General-Marca | `ag-genericos` | `/servicios` |

Se parte un grupo **solo** cuando ese grupo solo junte 15+ conversiones/mes.

**35.** Cargar keywords desde `03-keywords-maestro.md`, **4–8 por grupo**, solo **frase y exacta**:
- **General-Marca: 100% exacta.** `[arenados]` (mejor CPA histórico ≈2.800 ARS), `[arenado]`, `[arenados lucho]`, `[arenado lucho]`. Cuanto más cerrada la concordancia, menor la superficie de términos ocultos.
- **Obra-Industrial:** exacta para las cabezas, frase acotada solo en `ag-pymes-galpon-in-situ`.
- **Piletas:** mayoría **frase** (la búsqueda sin jerga es imprevisible y ahí la frase aporta descubrimiento) + exacta para las cabezas.

⛔ Cero amplia. La investigación 2026 **no** justifica levantar la prohibición: la excepción teórica exige volumen de conversiones que esta cuenta no tiene, y acá la amplia ya está documentada como sumidero (`arenado` en frase quemó 208.331 ARS con 21 conversiones infladas).

**36.** **1 RSA por grupo** (no 2, no 3). `Campañas → [grupo] → Anuncios → + → Anuncio de búsqueda responsivo`. 12–15 titulares (apuntar a 20–26 caracteres reales) y 3–4 descripciones. Estructura de contenido por grupo:
- 2 titulares con la **keyword entera** (relevancia + Eficacia)
- 1 con la zona: `En CABA y Gran Buenos Aires`
- 1 con la **limitación honesta**: `No pintamos: lo dejamos listo` — filtra y da credibilidad
- 1 con capacidad: `2 equipos propios`
- 1 con el canal: `Presupuesto por WhatsApp`

**37.** **Pinning selectivo por pools** (nunca 1 asset por posición):
- **Posición 1:** pool de 3 titulares de "qué es y para quién", con la palabra del cliente. En `ag-pileta-sin-jerga`: `Sacamos la pintura de tu pileta` / `Despintamos piletas de hormigón` / `Quitamos pintura vieja de pileta`. En `ag-pymes-galpon-in-situ`: `Vamos con el equipo a tu galpón`.
- **Posición 2:** pool de 3 de alcance y limitación: `Queda lista para revestir` / `Vamos a tu casa o galpón` / `Presupuesto sin cargo`.
- **Descripción 1** fijada con la promesa completa; las otras 3 libres.
- Posición 3 y descripciones 2–4 **sin fijar**, para que Google combine.

**38.** Aceptar **Eficacia del anuncio "Buena"** y frenar ahí. No sacrificar un pin ni meter un titular genérico para ganar una barrita: la Eficacia **no** entra en Ad Rank ni en Nivel de calidad, y estudios sobre 1M+ anuncios encontraron que los "Media" rindieron mejor en CPA y CVR que los "Excelente".

**39.** Verificar que las URLs finales de cada grupo apunten a la landing correcta (tabla del paso 34) y que **no** haya quedado ninguna URL con `?utm_` pegado a mano (los UTM van por el sufijo de campaña, paso 29).

> ✅ **Verificación:** 6 grupos · keywords solo frase/exacta (filtrar por Tipo de concordancia y confirmar que no hay ninguna amplia) · 1 RSA por grupo con Eficacia ≥ Buena · pins en pools de 3 · URLs finales correctas · copy pasado por la lista de bloqueo.

---

## Sesión 7 — Pre-flight · ~30 min · [SIN SALDO, campañas todavía en pausa]

**40.** Correr el checklist completo de la sección siguiente (8.B-PRE). No se avanza con un solo ítem en rojo.

**41.** Verificar los scripts: `Herramientas → Acciones masivas → Scripts` → los 4 instalados (`02`, `03`, `04`, `06`) con última ejecución reciente y sin error. El **autopilot (05) sigue SIN instalar**, a propósito.

**42.** ⚠️ Recordar que `04-chequeo-urls.js` **solo revisa campañas ENABLED**: con las campañas en pausa no valida nada. Por eso el chequeo de URLs del pre-flight se hace a mano.

**43.** Ajustar el guardián si hace falta: `TOPE_MENSUAL` = 300.000 ARS. Y anotar la aritmética para el dueño: **5.000/día no significa "nunca más de 5.000 en un día"** — significa hasta ~152.000 en el mes, con picos de hasta 2× el diario en un día puntual.

> ✅ **Verificación:** checklist pre-flight 100% en verde, con capturas guardadas y una entrada en `08-bitacora.md` con fecha, presupuestos, estrategia de puja y estado de AI Max / auto-apply.

---

## Sesión 8 — Encendido y validación de la medición · [CON SALDO]

**44.** Cargar saldo. Activar **primero una sola campaña**: `AR-Search-General-Marca` (750 ARS/día, el riesgo más bajo). Dejar las otras dos en pausa 24 h.

**45.** **D+1 (24–48 h después del primer clic pago):** confirmar que la conversión aparece en la columna **"Conversiones"** —no solo en "Todas las conv."— y que el estado de la acción pasó a **"Registrando conversiones"** (`Objetivos → Conversiones → Resumen`). **Captura obligatoria a la bitácora.**
⛔ Si aparece solo en "Todas las conv.", la acción quedó como Secundaria: corregir **antes** de activar el resto.

**46.** **D+1:** hacer una conversión de prueba real (clic al CTA → confirmar el AlertDialog) y verificar que el chat le llegó al dueño. Cruzar contra el número de Ads.

**47.** Con la medición verificada, activar `AR-Search-Obra-Industrial` y `AR-Search-Piletas`.

**48.** **D+3:** `Herramientas → Solución de problemas → Administrador de políticas` → cero rechazos y cero "Aprobado (limitado)" sin revisar. Y `Vista previa y diagnóstico de anuncios` (español, ubicación CABA):
- una consulta de pileta debe disparar la campaña de **Piletas** hacia `/arenado-de-piletas`, no la de Obra;
- una consulta de empleo **no debe disparar nada**.
⛔ **Prohibido googlearse:** genera impresiones sin clic, baja el CTR y por lo tanto el CTR esperado (uno de los 3 componentes del QS). Usar siempre la herramienta.

**49.** **D+7:** primer ciclo semanal completo (8.3). Primer barrido de términos de búsqueda y primer cálculo del gasto ciego.

**50.** **D+30:** verificar auto-apply, AI Max y recursos automatizados **otra vez**. Primer QS con los 3 componentes. Primer cruce Ads ↔ GA4 ↔ chats reales.

**51.** **Semana 4–5:** si hay **≥15 conversiones limpias en 30 días**, recién ahí evaluar el pase a **Maximizar conversiones** (sin CPA objetivo) con una **estrategia de cartera** que agrupe **Obra-Industrial + Piletas** —economías comparables— dejando **General-Marca fuera** (convierte a CPA bajísimo y arrastraría el target hacia abajo, dejando de pujar por el tráfico caro de obra, que es el norte del negocio).

> ⚠️ **CPA objetivo: descartado como destino de este año.** La regla operativa es presupuesto diario ≥ 2× el CPA objetivo. Con 3.000/1.250/750 ARS/día, el tCPA máximo posible sería 1.500/625/375 ARS, y el CPA real esperado está entre 3.400 y 5.500. Cualquier tCPA honesto sería 2–4× el presupuesto de su campaña. Además, desde el 17/08/2026 las campañas **limitadas por presupuesto** con tCPA dejan de rendir por debajo del target y derivan **hacia** él: un target inflado "por las dudas" pasa a ser lo que se paga. Solo tendría sentido después de concentrar la campaña ganadora en 10.000–12.000 ARS/día.

---

## 8.B-PRE — Checklist "listo para encender" (pre-flight)

No se enciende con un solo ítem en rojo.

### A. URLs — todas deben responder **200**

Verificación manual, una por una, en una ventana de incógnito. `04-chequeo-urls.js` no cubre campañas pausadas.

- [ ] `https://www.arenadoslucho.com/`
- [ ] `https://www.arenadoslucho.com/servicios`
- [ ] `https://www.arenadoslucho.com/arenado-de-piletas`
- [ ] `https://www.arenadoslucho.com/casos-de-exito`
- [ ] `https://www.arenadoslucho.com/casos-de-exito/nave-ferroviaria`
- [ ] `https://www.arenadoslucho.com/casos-de-exito/estructura-naval`
- [ ] `https://www.arenadoslucho.com/casos-de-exito/pasarela-urbana`
- [ ] `https://www.arenadoslucho.com/casos-de-exito/tanque-industrial`
- [ ] `https://www.arenadoslucho.com/casos-de-exito/arenado-pileta`
- [ ] `https://www.arenadoslucho.com/preguntas-frecuentes`
- [ ] `https://www.arenadoslucho.com/contacto`
- [ ] `https://www.arenadoslucho.com/robots.txt`
- [ ] `https://www.arenadoslucho.com/sitemap.xml`

Chequeo rápido de todas de una (PowerShell, opcional):
```powershell
@("/","/servicios","/arenado-de-piletas","/casos-de-exito","/casos-de-exito/nave-ferroviaria","/casos-de-exito/estructura-naval","/casos-de-exito/pasarela-urbana","/casos-de-exito/tanque-industrial","/casos-de-exito/arenado-pileta","/preguntas-frecuentes","/contacto","/robots.txt","/sitemap.xml") | ForEach-Object { $u="https://www.arenadoslucho.com$_"; try { $r=Invoke-WebRequest -Uri $u -Method Head -MaximumRedirection 0 -ErrorAction Stop; "$($r.StatusCode)  $u" } catch { "$($_.Exception.Response.StatusCode.value__)  $u" } }
```

- [ ] **Query string sobrevive:** abrir `https://www.arenadoslucho.com/servicios?utm_source=google&utm_medium=cpc&gclid=TEST123` y confirmar que carga en 200 y que el `gclid` sigue en la barra tras la navegación de Next.js.
- [ ] **Los 301 legacy preservan la query string:** `/arenado-industrial?gclid=TEST123` → `/servicios?gclid=TEST123`; ídem `/arenado-particular` → `/arenado-de-piletas` y `/presupuesto-rapido` → `/contacto`. ⚠️ Si el redirect la pierde, se rompe la atribución; en ese caso, no usar rutas legacy en ningún asset (que es la regla igual).
- [ ] Ningún asset ni keyword apunta a `/blog` ni a rutas legacy.

### B. Conversión de WhatsApp

- [ ] `Objetivos → Conversiones → Resumen`: existe **una sola** acción **Principal** = `WhatsApp - contacto confirmado`, categoría **Contacto**.
- [ ] Recuento = **Una** · Ventana post-clic = **30 días** · Atribución = **Basada en datos**.
- [ ] `pestaña Objetivos`: **Contactos** es el único objetivo predeterminado de cuenta. **"Acciones locales" apagado** (o excluido en las 3 campañas).
- [ ] Todas las acciones históricas están en **Secundaria**.
- [ ] GTM `GTM-W63ZV9D9` publicado, con el activador de evento personalizado `contact_whatsapp` y la etiqueta de conversión de Ads. Validado en Vista previa de GTM.
- [ ] Prueba manual end-to-end: clic al CTA → **confirmar el AlertDialog** → se abre `wa.me` → el chat llega al dueño → el evento aparece en GA4 DebugView.
- [ ] `Objetivos → Conversiones → Diagnóstico`: sin errores de implementación.
- [ ] **Post-encendido (D+1/D+2):** la conversión aparece en la columna **"Conversiones"**, no solo en "Todas las conv.", y el estado dice **"Registrando conversiones"**. Captura a la bitácora.

### C. Blindaje

- [ ] Auto-apply: **todo destildado** (captura fechada).
- [ ] AI Max: **OFF** en las 3 campañas **y** en los 6 grupos (captura de cada una).
- [ ] Concordancia amplia a nivel campaña: **OFF** en las 3.
- [ ] Recursos automatizados a nivel de cuenta: dinámicos **OFF**.
- [ ] Etiquetado automático: **ON**.
- [ ] Informes de llamadas: **OFF**.
- [ ] Cero recursos de **llamada**, cero **formulario de clientes potenciales**, cero **ubicación**, cero **precio**.

### D. Campañas

- [ ] Socios de búsqueda **destildado** y Display **destildado** en las 3.
- [ ] Ubicación: CABA + GBA cargados explícitamente, y opción **"Presencia"** (no "Presencia o interés") en las 3.
- [ ] Presupuestos **individuales**: 3.000 / 1.250 / 750 ARS. Ningún presupuesto compartido, ningún presupuesto total de campaña.
- [ ] Puja: **Maximizar clics con límite de CPC = 350 ARS** en las 3.
- [ ] Sin programación de anuncios, sin fecha de finalización.
- [ ] Exclusiones de IP cargadas **en las 3** (se configuran por campaña).
- [ ] Sufijo de URL final cargado en las 3.

### E. Keywords y negativas

- [ ] Filtrar keywords por Tipo de concordancia: **cero amplia** en toda la cuenta.
- [ ] Negativas de cuenta cargadas (empleo + técnicas) y contadas.
- [ ] `NEG-EQUIPOS-DIY` y `NEG-DATA` aplicadas a las 3 campañas.
- [ ] `RUTEO-PILETAS` aplicada **solo** a Obra-Industrial y General-Marca.
- [ ] Verificado que **NO** hay `pileta`/`piscina` entre las negativas de cuenta.
- [ ] Verificado que **NO** están negativizadas `arenadora` sola, `zona norte`, ni `contratar`/`personal`/`puesto` sueltos.

### F. Anuncios

- [ ] 1 RSA por grupo, Eficacia ≥ **Buena**.
- [ ] Pins en pools de 3 por posición (nunca 1 solo).
- [ ] Todo el copy pasado por la lista de bloqueo y versionado en `contexto/marketing/`.
- [ ] 6 sitelinks + textos destacados + fragmentos estructurados cargados **a nivel campaña** (ninguno a nivel grupo).

### G. Scripts y registro

- [ ] `02`, `03`, `04` y `06` con última ejecución reciente y sin error.
- [ ] `05-autopilot.js` **NO instalado** (correcto en esta fase).
- [ ] `TOPE_MENSUAL` = 300.000 ARS confirmado en el guardián.
- [ ] Entrada en `08-bitacora.md` con fecha, estructura, presupuestos, estrategia de puja, estado de AI Max/auto-apply y capturas de referencia.

---

## Notas de higiene documental

✅ **Resuelto el 10/08/2026.** Varios archivos del repo nombraban `form_submit_success` y `contact_email` como conversiones primarias — desactualizado tras la decisión del 28/07/2026 (canal único WhatsApp). Se corrigieron **todos** los archivos afectados de `contexto/` y `contexto/marketing/`, y se agregó el **ADR-019** en `contexto/18-decisiones-tecnicas.md` como fuente única de la decisión.

**Regla vigente:** la única conversión del sitio es **`contact_whatsapp`**. Si un archivo del repo dice otra cosa, está desactualizado: corregirlo y anotarlo en `08-bitacora.md`.

Los archivos históricos (entradas viejas de `08-bitacora.md` y el volcado crudo de `10-cuenta-ads-auditoria.md` §4.5) **conservan** las menciones a propósito: documentan lo que la cuenta tenía en ese momento.

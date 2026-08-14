## 7. Pujas, presupuesto y fases de madurez

### 7.0 La conclusión primero (para no perderla entre los números)

Tres afirmaciones que gobiernan toda esta sección y conviene aceptar antes de leer el detalle:

1. **La cuenta no tiene un CPA base válido.** Las conversiones históricas incluían `Website visits` (PAGE_VIEW), `Other engagements` (ENGAGEMENT) y "cómo llegar". Los CPA de 2.813 (`arenados` exacta) y 3.273 (`arenado industrial` frase) **no son metas**: son artefactos de medición. Cualquier objetivo de CPA calibrado sobre ellos nace roto.
2. **El destino realista de 2026 es "Maximizar conversiones", no "CPA objetivo".** La regla operativa de tCPA es *presupuesto diario de la campaña ≥ 2× el CPA objetivo*. Con el tope duro de 300.000 ARS/mes (≈ 9.800/día para TODA la cuenta), el tCPA máximo que la aritmética permite es **4.900 ARS**, y solo si una sola campaña se lleva el 100% del presupuesto. Mientras el CPA limpio esté por encima de eso, el tCPA está fuera de la mesa. No es una opinión: es una división.
3. **El riesgo #1 de esta fase no es elegir mal la estrategia, es resetear el aprendizaje.** Con ~15 clics/día de arranque, cada reseteo cuesta entre 2 y 6 semanas de datos. La disciplina de "un cambio estructural cada 14 días" vale más que cualquier optimización fina.

---

### 7.1 Tabla maestra de fases

| Fase | Cuándo | Estrategia de puja | Presupuesto | Criterio de salida (medible, todos deben cumplirse) |
|---|---|---|---|---|
| **0 — Pre-vuelo** | 3 a 5 días antes de encender | Ninguna (gasto 0) | 0 | ✅ `contact_whatsapp` es la **única** acción principal · ✅ recuento en "**Una**" · ✅ ventana de clic 30 días · ✅ etiquetado automático ON · ✅ las 6 URLs finales responden 200 con query string · ✅ AI Max OFF en las 3 campañas (captura) · ✅ auto-aplicación de recomendaciones OFF (captura) · ✅ guardián `06` con última ejecución < 24 h |
| **Fase 1 — Datos limpios** | Semanas 1 a 6 | **Maximizar clics con límite de CPC máximo** | 5.000 ARS/día (3.000 / 1.250 / 750) | ✅ **≥ 15 conversiones `contact_whatsapp` en 30 días corridos** (suma de las 3 campañas) · ✅ **≥ 350 clics acumulados** en la cuenta · ✅ **conciliación ≥ 80%**: por cada 10 conversiones en Ads, el dueño encontró ≥ 8 chats reales en WhatsApp · ✅ estado de la acción = "Registrando conversiones" · ✅ 0 URLs finales fuera de 200 durante 7 días seguidos |
| **Fase 2 — Aprendizaje** | Semanas 7 a 18 | **Maximizar conversiones SIN objetivo de CPA**, en **estrategia de cartera** (Obra-Industrial + Piletas). General-Marca queda en Maximizar clics con tope | 5.000 → 6.500 ARS/día (escalones de ≤ 25%) | ✅ **≥ 30 conversiones en 30 días** en la cartera · ✅ **CPA estable**: la variación del CPA mensual entre dos meses consecutivos ≤ ±20% · ✅ ≥ 2 trabajos cobrados atribuibles a Ads · ✅ presupuesto diario de la campaña candidata **≥ 2× el CPA observado** |
| **Fase 3 — Eficiencia** *(condicional)* | Mes 5 en adelante, **solo si la aritmética lo permite** | **CPA objetivo** en UNA sola campaña, fuera de la cartera | La campaña candidata necesita ≥ 2× el CPA → en la práctica ≥ 9.800/día si el CPA ronda 4.900 | ✅ CPA limpio observado **< 4.900 ARS** durante 2 meses · ✅ el dueño acepta concentrar el presupuesto en una sola campaña · ✅ CPA de negocio (costo por trabajo cobrado) por debajo del techo de margen |
| **Fase 4 — Escala** *(paralela, no secuencial)* | Cuando haya trabajos cobrados | La que esté vigente | +20 a 25% por escalón, mínimo 14 días entre escalones, techo 9.800/día total | ✅ cuota de impresiones perdida por presupuesto > 20% en la campaña a escalar · ✅ CPA de esa campaña estable · ✅ trabajo cobrado atribuible en los últimos 30 días |

> ⚠️ **Fase 3 es condicional, no inevitable.** Si a los 6 meses el CPA limpio se estabiliza en 6.000-8.000 ARS, la respuesta profesional es **quedarse en Fase 2 indefinidamente**, no forzar un tCPA que el presupuesto no soporta. Una campaña con tCPA por encima de la mitad de su presupuesto diario queda estrangulada: casi no sirve impresiones y el diagnóstico parece "no hay demanda" cuando en realidad es una configuración imposible.

---

### 7.2 Fase 1 — Estrategia y topes de CPC concretos

#### Por qué Maximizar clics y no Maximizar conversiones

No es prudencia genérica. Son tres razones específicas de esta cuenta:

- La acción de conversión es **nueva** (`contact_whatsapp` como única principal). Historial de entrenamiento = 0.
- El historial de la cuenta vieja está contaminado; entregarle el volante al algoritmo con esa base es enseñarle a perseguir ruido.
- Fase 1 tiene un objetivo distinto de "conseguir leads baratos": **verificar que la medición funciona**. Comprar 350-500 clics rápido y baratos es la forma más económica de descubrir que el evento no dispara, antes de quemar un mes.

#### Cómo se calcula el tope de CPC (la fórmula, no el dedo)

```
Tope de CPC = CPA máximo admisible × Tasa de conversión clic→WhatsApp esperada
```

Con una CVR de clic a `contact_whatsapp` esperada de **4% a 8%** (landing de servicio local con CTA de WhatsApp y AlertDialog de confirmación) y un CPA admisible de arranque de **6.000 ARS** (ver 7.4):

- 6.000 × 4% = 240 ARS
- 6.000 × 6% = 360 ARS
- 6.000 × 8% = 480 ARS

El CPC promedio histórico de la cuenta fue **~273 ARS** — es decir, el rango calculado contiene al histórico, lo que valida el orden de magnitud. Se toma el punto medio-bajo y se diferencia por campaña según competencia esperada:

| Campaña | Presupuesto/día | **Límite de CPC máximo** | Clics/día esperados | Clics/mes | Justificación |
|---|---|---|---|---|---|
| `srch_obra-industrial_amba` | 3.000 ARS | **350 ARS** | ~8,6 | ~260 | Compite con empresas de granallado con bolsillo grande; +28% sobre el CPC histórico para no quedar fuera de la primera página |
| `srch_piletas_amba` | 1.250 ARS | **300 ARS** | ~4,2 | ~127 | Menos competencia directa, sobre todo en el grupo sin jerga ("sacar pintura de pileta") |
| `srch_general-marca_amba` | 750 ARS | **250 ARS** | ~3,0 | ~91 | 100% exacta; la marca es barata y los genéricos no justifican pagar de más. Función defensiva |
| **Total** | **5.000 ARS** | — | **~15,8** | **~478** | |

**Prueba de sanidad del umbral de salida de Fase 1:** con ~478 clics/mes, llegar a 15 conversiones exige una CVR ≥ **3,2%**. Si a las 4 semanas la CVR real está por debajo de 2%, el problema NO es la puja: es la landing, el ruteo o la medición. Antes de tocar un solo peso de presupuesto, revisar en ese orden.

#### Configuración exacta (UI)

**Al crear cada campaña:**
`Campañas → + Crear → Campaña → "Crear una campaña sin la orientación de un objetivo" → Búsqueda → paso "Ofertas" → "En qué querés centrarte" = Clics → tildar "Establecer un límite de CPC máximo para esta estrategia de puja" → escribir el valor de la tabla`

**En una campaña ya creada:**
`Campañas → [seleccionar campaña] → Configuración → Ofertas → "Cambiar estrategia de ofertas" → "O seleccioná una estrategia de ofertas directamente" → Maximizar clics → tildar el límite de CPC → Guardar`

⚠️ **No dejar el límite de CPC vacío.** "Maximizar clics" sin tope es la forma más rápida de que Google compre volumen a 900 ARS el clic en las primeras horas del día y deje la campaña sin presupuesto antes del mediodía.

#### El agujero de Maximizar clics: no se puede priorizar `pymes-galpon-in-situ` con puja

Bajo Maximizar clics, **las pujas a nivel grupo de anuncios y keyword se ignoran**: el límite es único y vive en la estrategia. Eso choca con la decisión del proyecto de darle prioridad de puja al grupo de PYMEs con galpón (el trabajo más rentable por día). El algoritmo va a comprar los clics *más baratos*, que probablemente sean los de obra genérica, no los de PYME.

**Regla condicional con disparador medible:** si en la **semana 3** el grupo `ag_pymes-galpon-in-situ` acumuló **menos del 25% de los clics** de la campaña Obra-Industrial, pasar **solo esa campaña** a **CPC manual** por el resto de la Fase 1, con pujas por grupo:

- `ag_pymes-galpon-in-situ` → CPC máx **380 ARS**
- `ag_obra-restauracion-estructuras` → CPC máx **260 ARS**

Ruta: `Campañas → [Obra-Industrial] → Configuración → Ofertas → "Cambiar estrategia de ofertas" → objetivo Conversiones → "Establecer las ofertas manualmente"` (desde el 15/01/2026 el CPC manual aparece ahí; ya no está escondido detrás de "no recomendado"). Luego `Grupos de anuncios → columna "Oferta de CPC máx." → editar por grupo`.

⚠️ Este cambio **resetea el aprendizaje** de esa campaña. Hacerlo una sola vez, y solo si el disparador se cumple.

---

### 7.3 Fase 2 — Migración a Maximizar conversiones

#### Los tres criterios de pasaje (los tres, no dos de tres)

1. **≥ 15 conversiones `contact_whatsapp` en 30 días corridos** sumando las 3 campañas.
2. **Conciliación ≥ 80% contra WhatsApp real.** Este es el criterio que nadie hace y el único que importa: el dueño abre WhatsApp, cuenta los chats entrantes del mes y los compara con la columna "Conversiones" de Ads. Si Ads dice 22 y en WhatsApp hay 6 conversaciones, **no se migra nada**: hay un problema de medición (doble conteo, recuento en "Todas", evento disparado antes de la confirmación) que arreglar primero.
3. **4 semanas cumplidas como mínimo.** Aunque las 15 conversiones lleguen en la semana 2, se esperan las 4 semanas: el CPA de los primeros 30 días está sistemáticamente sobreestimado porque hay conversiones dentro de la ventana de 30 días que todavía no maduraron. **La lectura seria del CPA es a día 45.**

#### La estrategia de cartera: la palanca clave de esta cuenta

Con 15-30 conversiones repartidas en 3 campañas, ninguna campaña sola llega al piso de aprendizaje. La cartera **agrupa los datos de conversión** de varias campañas bajo una sola estrategia (no comparte presupuesto — los presupuestos siguen siendo individuales).

**Qué crear:**

- Nombre: `port_maxconv_obra-piletas`
- Tipo: **Maximizar conversiones**, **sin** CPA objetivo
- Campañas asignadas: `srch_obra-industrial_amba` + `srch_piletas_amba`
- **`srch_general-marca_amba` queda AFUERA**, en Maximizar clics con tope de 250 ARS

Ruta: `Herramientas → Biblioteca compartida → Estrategias de puja → + → Maximizar conversiones → asignar campañas → Guardar`
⚠️ *A confirmar por captura: en algunas versiones de la interfaz en español figura como "Estrategias de oferta" dentro de "Datos compartidos".*

⚠️ **Por qué General-Marca no entra en la cartera:** la marca convierte a CPA bajísimo y arrastraría el target de la cartera hacia abajo. El algoritmo dejaría de pujar por el tráfico caro de obra — que es exactamente el tráfico que el negocio quiere ganar. Economías distintas, carteras distintas.

**Cuándo romper la cartera:** cuando *cada* campaña acumule 15-30 conversiones propias por mes. No antes.

---

### 7.4 Qué CPA objetivo sería realista (y por qué NO es 2.800)

#### Deflactar el histórico

El CPA de 2.813 ARS de `arenados` en exacta se calculó sobre conversiones que contaban visitas al sitio, engagements e indicaciones de mapa. Esos eventos son **mucho más frecuentes** que un clic a WhatsApp confirmado en un AlertDialog. Factor de deflación estimado: **3× a 5×**.

| Referencia histórica | Valor publicado | Equivalente estimado en conversiones limpias |
|---|---|---|
| `arenados` (exacta) — mejor CPA del histórico | 2.813 ARS | **8.400 – 14.000 ARS** |
| `arenado industrial` (frase) | 3.273 ARS | **9.800 – 16.400 ARS** |
| CPA de campaña (ENABLED) | 8.790 ARS | **26.000 – 44.000 ARS** |
| `servicio limpieza industrial` (exacta) | 784 ARS | Ignorar — CPA sospechosamente bajo, casi seguro 100% conversión basura |

#### Estimación bottom-up (la que se usa para planificar)

```
CPA = CPC ÷ CVR
CPA = 300 ARS ÷ 5%  = 6.000 ARS
CPA = 273 ARS ÷ 8%  = 3.400 ARS   (escenario optimista)
CPA = 350 ARS ÷ 4%  = 8.750 ARS   (escenario pesimista)
```

**Rango de planificación para el primer trimestre limpio: 5.000 a 9.000 ARS por `contact_whatsapp`, con 6.000 como número de trabajo.** Ese es el número que se usa para calcular el tope de CPC, no el 2.800.

#### El CPA de Ads NO es el CPA de negocio

`contact_whatsapp` mide **intención declarada**, no un lead. Nadie sabe si el usuario escribió el mensaje, si escribió "hola" y desapareció, o si era alguien buscando trabajo. El costo real por trabajo cobrado es:

```
Costo por trabajo = CPA de Ads ÷ (tasa chat→presupuesto pedido × tasa presupuesto→trabajo cobrado)
```

| Escenario | CPA Ads | chat→presup. | presup.→cobrado | Costo por trabajo |
|---|---|---|---|---|
| Optimista | 5.000 | 40% | 40% | **31.250 ARS** |
| Central | 6.000 | 30% | 33% | **60.600 ARS** |
| Pesimista | 8.000 | 25% | 25% | **128.000 ARS** |

⚠️ **A confirmar con el dueño:** margen bruto promedio por trabajo de obra/PYME y por trabajo de pileta, y las dos tasas de cierre. Sin esos tres números **no se puede decir si un CPA de 6.000 es bueno o catastrófico**, y por lo tanto no se puede fijar ningún CPA objetivo. La forma barata de conseguirlos: durante 60 días, el dueño anota en una hoja cada chat entrante (fecha, tipo de trabajo, si pidió presupuesto, si se cobró y por cuánto).

#### El techo aritmético del CPA objetivo

| Presupuesto diario de la campaña | tCPA máximo que la regla del 2× permite |
|---|---|
| 750 ARS (General-Marca) | 375 ARS |
| 1.250 ARS (Piletas) | 625 ARS |
| 3.000 ARS (Obra-Industrial) | 1.500 ARS |
| 9.800 ARS (toda la cuenta en una campaña) | **4.900 ARS** |

Conclusión operativa: **mientras el CPA limpio observado sea > 4.900 ARS, no existe ningún tCPA legítimo dentro del tope de 300.000/mes.** Quedarse en Maximizar conversiones y decirlo así en el reporte al dueño, sin disfrazarlo.

⚠️ **Cambio del 17/08/2026 que hace esto más caro:** a partir de esa fecha, las campañas marcadas como "Limitado por presupuesto" que usen tCPA dejan de rendir *por debajo* del target y derivan *hacia* él. Esta cuenta va a estar "Limitado por presupuesto" prácticamente siempre. Traducción: un tCPA inflado "por las dudas" deja de ser un techo teórico y pasa a ser **lo que se paga**. Si algún día se fija un tCPA, se fija **igual o levemente por debajo** del CPA ya logrado en los últimos 30 días — nunca por encima.

---

### 7.5 Reparto de presupuesto entre las 3 campañas y ajuste estacional

#### Base (invierno / arranque)

| Campaña | ARS/día | % | Techo mensual (× 30,4) |
|---|---|---|---|
| `srch_obra-industrial_amba` | 3.000 | 60% | 91.200 |
| `srch_piletas_amba` | 1.250 | 25% | 38.000 |
| `srch_general-marca_amba` | 750 | 15% | 22.800 |
| **Total** | **5.000** | 100% | **152.000** |

**Presupuestos INDIVIDUALES por campaña. Nunca presupuesto compartido.** Google reparte un pozo común según rendimiento previsto, no según prioridad de negocio: la campaña con más volumen de búsquedas (Piletas en temporada) se comería el pozo y Obra — que es el norte declarado del negocio — quedaría sin aire. Además el presupuesto compartido rompe la lectura de "cuota de impresiones perdida por presupuesto" por campaña, que es el diagnóstico principal en una cuenta limitada.

Ruta: `Campañas → columna "Presupuesto" → ícono de lápiz → "Presupuesto diario promedio"`

#### Calendario estacional de piletas (ago → dic)

El pico de piletas es primavera/verano; el invierno es anticipación con clics baratos. La palanca correcta para una temporada de 4-5 meses es **el presupuesto**, no los ajustes de estacionalidad (ver 7.7). Cada escalón respeta el límite de **±25%** para no resetear el aprendizaje, y deja **≥ 14 días** entre movimientos.

| Fecha | Obra-Industrial | Piletas | General-Marca | Total | Δ Piletas | Δ Obra |
|---|---|---|---|---|---|---|
| 01/08 (base) | 3.000 | 1.250 | 750 | 5.000 | — | — |
| 20/08 | 2.700 | 1.550 | 750 | 5.000 | +24% | −10% |
| 08/09 | 2.350 | 1.900 | 750 | 5.000 | +23% | −13% |
| 27/09 | 1.950 | 2.300 | 750 | 5.000 | +21% | −17% |
| 16/10 * | 1.900 | 2.850 | 750 | 5.500 | +24% | −3% |
| 05/11 * | 1.900 | 3.500 | 750 | 6.150 | +23% | 0% |

\* Los escalones marcados **suben el total** y solo se ejecutan si hay **trabajos cobrados atribuibles a Ads** en los 30 días previos. Sin trabajos cobrados, se congela el total en 5.000 y se sigue rebalanceando internamente.

**Retorno (post-temporada):**

| Fecha | Obra-Industrial | Piletas | General-Marca | Total |
|---|---|---|---|---|
| 10/01 | 2.200 | 2.800 | 750 | 5.750 |
| 01/02 | 2.600 | 2.200 | 750 | 5.550 |
| 20/02 | 3.000 | 1.700 | 750 | 5.450 |
| 10/03 (vuelta a base) | 3.000 | 1.250 | 750 | 5.000 |

**Regla de invierno:** la campaña de Piletas **no se apaga nunca**. Se baja el presupuesto y se cambia el mensaje a anticipación ("aprovechá el invierno: pileta lista antes del verano, turno inmediato"). Apagarla y reencenderla en agosto significa volver a fase de aprendizaje justo cuando arranca la temporada — el peor momento posible.

---

### 7.6 Gasto diario vs. gasto mensual: la aritmética que hay que explicarle al dueño

**El presupuesto diario NO es un tope diario. Es un promedio.**

- Google puede gastar hasta **2× el presupuesto diario** en un día puntual, y compensa a lo largo del mes.
- El techo mensual real es **30,4 × el presupuesto diario** (30,4 = 365 ÷ 12).
- Con 5.000/día: `5.000 × 30,4 = 152.000 ARS/mes` de techo. En un martes bueno pueden aparecer 10.000 ARS gastados. **Google no rompió nada.**

**El cálculo del tope duro:**

| Presupuesto diario total | Techo mensual (× 30,4) | ¿Respeta el tope de 300.000? |
|---|---|---|
| 5.000 (arranque) | 152.000 | ✅ Sí, con margen amplio |
| 9.800 | 297.920 | ✅ Sí, por 2.080 ARS |
| **10.000 (config actual)** | **304.000** | ❌ **NO — se pasa por 4.000 ARS** |

⚠️ **Corrección obligatoria:** la campaña vieja quedó con presupuesto diario nativo de **10.000 ARS/día**, que matemáticamente excede el tope de 300.000/mes. El guardián lo tapa (pausa al 95%), pero la configuración nativa está mal calibrada. **El techo total de la cuenta, sumando las 3 campañas, nunca debe superar 9.800 ARS/día.**

⚠️ **Cambio de pacing del 01/06/2026 — no poner programación de anuncios.** Desde esa fecha, Google pacea hacia el límite mensual completo (30,4×) *aunque* el calendario de anuncios solo habilite algunos días u horas. Antes escalaba proporcional a los días activos. Consecuencia concreta: si se limita la campaña a lunes-viernes de 9 a 18 "para no perder chats de madrugada", Google intenta gastar el mes entero comprimido en esas ventanas, toca el 2× diario constantemente y el gasto se descontrola visualmente.

**Decisión: 24/7 sin programación de anuncios.** El canal es WhatsApp asincrónico, no una llamada: un mensaje de las 22:30 se responde a las 8:00 sin perder el lead. Ruta que **NO** hay que tocar: `Campañas → Configuración → Programación de anuncios`.

---

### 7.7 Período de aprendizaje: duración y qué lo resetea

**Duración esperada en esta cuenta: 2 a 6 semanas** (no los "7 días" del caso ideal). Con ~15 clics/día, el volumen para salir del aprendizaje se acumula lento. La referencia de salida es ~50 conversiones acumuladas en la estrategia.

Dónde mirarlo: `Campañas → [campaña] → Configuración → Ofertas → "Estado de la estrategia de puja"`, o `Herramientas → Biblioteca compartida → Estrategias de puja → [clic en la estrategia]`.

#### ⚠️ Qué resetea el aprendizaje (memorizarlo)

| Acción | ¿Resetea? | Regla de contención |
|---|---|---|
| Cambiar la estrategia de puja | **Sí, completo** | Máximo 1 cambio de estrategia cada 4 semanas |
| Cambiar el valor de un tCPA/tROAS | **Sí, si el cambio > 20%** | Movimientos de ≤ 20% por vez |
| Cambiar el presupuesto | **Sí, si el cambio ≥ 30%** | Escalones de **≤ 25%**, mínimo 14 días entre escalones |
| Cambiar qué acción de conversión es **principal** | **Sí — y es el más silencioso** | Congelar la definición de `contact_whatsapp` una vez validada. No tocarla nunca "para probar" |
| Agregar/quitar acciones del objetivo de conversión | **Sí** | Todo lo demás va como **secundaria (solo observación)** |
| Pasar de objetivos de cuenta a objetivos específicos de campaña | **Sí, parcialmente** | No usarlo salvo para excluir "Acciones locales" |
| Agregar o quitar keywords, negativas, RSAs | No (impacto indirecto) | Se puede hacer semanalmente sin miedo |
| Cambiar geo, redes, dispositivos | No resetea formalmente, pero cambia la base de datos | Congelar durante Fase 1 |

**Regla dura del proyecto, reforzada:** **UN cambio estructural por vez, y 14 días de datos antes del siguiente.** Todo cambio se anota en `contexto/marketing/08-bitacora.md` el mismo día, con este formato:

```
### AAAA-MM-DD — [Ads] <qué se cambió>
- Campaña/estrategia afectada:
- Valor anterior → valor nuevo:
- Por qué (dato que lo justifica):
- Resultado esperado y en qué métrica se va a leer:
- ¿Resetea aprendizaje? SÍ/NO — fecha estimada de fin del aprendizaje:
```

**Auditoría semanal del reseteo (5 minutos):** `Campañas → Estadísticas e informes → Historial de cambios` → filtrar últimos 7 días → verificar que **todo cambio tenga un responsable conocido** (el dueño o un script del proyecto). Un cambio firmado por "Google Ads system" significa que se reactivó la aplicación automática de recomendaciones: apagarla el mismo día y anotarlo.

---

### 7.8 Ajustes estacionales vs. exclusiones de datos (no son lo mismo y se confunden siempre)

Ambos viven en `Herramientas → Biblioteca compartida → Estrategias de puja → pestaña "Controles avanzados"`.
⚠️ *A confirmar por captura: la ubicación exacta de "Controles avanzados" varía entre versiones de la interfaz.*

| | **Ajustes de estacionalidad** | **Exclusiones de datos** |
|---|---|---|
| Dirección | **Hacia adelante** (avisa de un cambio futuro de CVR) | **Hacia atrás** (le dice al algoritmo que ignore un período pasado) |
| Para qué sirve | Eventos cortos con CVR anómala | Datos corruptos: caída de tracking, medición rota, sitio caído |
| Duración útil | **1 a 7 días**; pierde eficacia por encima de 14 | El período contaminado |
| ¿Aplica en Fase 1? | **No** — requiere puja basada en conversiones; con Maximizar clics no tiene de dónde agarrarse | Sí, se carga antes de encender Fase 2 |

#### Cuándo usar cada uno en esta cuenta

**Ajustes de estacionalidad — SÍ, pero acotados.** Solo para ventanas puntuales y justificadas dentro de Fase 2 o posterior: la semana posterior a la primera ola de calor fuerte, un fin de semana largo con pico de búsquedas de pileta. Ajuste típico: +30% a +50% de CVR esperada, por 3 a 5 días.

**Ajustes de estacionalidad — NO para la temporada de piletas.** Cargar +80% desde agosto a diciembre está fuera del rango de utilidad de la herramienta y no hace nada útil. La palanca para una temporada de 5 meses es el **calendario de presupuesto de 7.5**.

**Exclusiones de datos — el instrumento exacto para el problema de la medición sucia.** Antes de activar cualquier estrategia basada en conversiones (Fase 2), hay que asegurarse de que Smart Bidding no entrene con el historial inflado.

Estrategia de dos capas, en este orden:

1. **Capa primaria (la que de verdad resuelve): acción de conversión NUEVA.** Crear `WhatsApp - contacto confirmado` desde cero y degradar **todas** las acciones históricas a "Secundaria (solo observación)". Una acción nueva no tiene historial contaminado que aportar. Ruta: `Objetivos → Conversiones → Resumen` (marcar principal/secundaria) y `Objetivos → Conversiones → Objetivos` (dejar **solo "Contactos"** como objetivo predeterminado de la cuenta; apagar "Acciones locales" si aparece).
2. **Capa secundaria: exclusión de datos**, solo si se reutiliza la cuenta vieja con sus campañas. Cubrir desde el inicio del historial hasta la **fecha de corte** = el día en que `contact_whatsapp` quedó como única acción principal verificada. Esa fecha se registra explícitamente en `08-bitacora.md`.

⚠️ **A confirmar:** Google desaconseja exclusiones de datos largas y las diseñó para caídas puntuales, no para años de historial. Si el período contaminado es muy extenso, es posible que la exclusión no se acepte o sea contraproducente — en ese caso la capa 1 (acción nueva + degradar las viejas) es suficiente y se documenta como decisión.

⚠️ **A confirmar:** si se abre una **cuenta nueva** en lugar de reutilizar la vieja, la exclusión de datos no hace falta (no hay historial), pero se pierde el historial de Nivel de calidad acumulado. Es una decisión abierta del proyecto; no hay ganador claro.

---

### 7.9 Control del tope de 300.000 ARS/mes — tres capas

**No existe un botón nativo de "no gastar más de 300.000 este mes".** Los "presupuestos de cuenta" (account budgets) con tope mensual real solo están disponibles para anunciantes con **facturación mensual**; una cuenta que paga con tarjeta no accede a esa función. ⚠️ *A confirmar el método de pago de esta cuenta.* Por eso el guardián no es redundante: **es el único tope duro que existe acá.**

| Capa | Qué es | Valor | Dónde |
|---|---|---|---|
| **1 — Freno por día (primaria)** | Suma de los presupuestos diarios nativos de las 3 campañas | Arranque **5.000**; techo absoluto **9.800** (nunca 10.000) | `Campañas → columna Presupuesto → lápiz` |
| **2 — Freno por mes (secundaria)** | Script `06-guardian-presupuesto.js`, corre **diario 06:00** | `TOPE_MENSUAL: 300000` · avisa al **80%** (240.000) · **pausa TODO al 95%** (285.000) · reactiva al cambiar el mes | `Herramientas → Acciones masivas → Scripts` |
| **3 — Verificación humana** | Chequeo semanal del gasto acumulado del mes | Alarma si al día 15 el acumulado supera **150.000** | `Facturación → Resumen` |

**Por qué la capa 1 tiene que estar bien calibrada:** si los presupuestos diarios suman ≤ 9.800, `9.800 × 30,4 = 297.920 < 300.000` y el guardián **nunca debería dispararse**. El guardián que se dispara no es una victoria: significa que la configuración nativa estaba mal.

⚠️ **Riesgo nuevo (pacing de junio 2026) sobre el guardián:** si Google acelera el gasto y el guardián pausa el día 24, la cuenta queda apagada 6 días — y eso mata el aprendizaje justo cuando estaba acumulando. Mitigación: revisar el gasto acumulado **semanalmente** el primer mes, no solo esperar el mail del 80%.

⚠️ **El guardián tiene `HEARTBEAT_EMAIL: false`.** Un script que dejó de correr se ve, visualmente, exactamente igual que uno que corre bien. Chequeo mensual de 2 minutos: `Herramientas → Acciones masivas → Scripts` → confirmar "última ejecución" < 24 h y sin error. **Si en 3 meses no llegó ningún mail del guardián, eso NO es buena señal: es señal de revisar.**

#### Qué NO usar como tope

- ❌ **Presupuestos totales de campaña** (beta abierta para Búsqueda desde el 15/01/2026). Es un **objetivo de gasto**, no un límite: le prometés a Google que querés gastar ese monto, y **sin el freno del 2× diario**. Para un tope de seguridad es la herramienta exactamente equivocada. Sirve, sí, para un empujón acotado de arranque de temporada de piletas (ej. "total X para los 21 días de la primera ola de calor"). ⚠️ *A confirmar si la beta está visible en esta cuenta argentina.*
- ❌ **Presupuestos compartidos.** Ver 7.5.
- ❌ **Fechas de finalización de campaña** como forma de limitar el gasto. Apagan la campaña, cortan el aprendizaje y al reactivar se vuelve a empezar. El gasto se limita con presupuesto, no con fechas.

---

### 7.10 Ajustes de puja por dispositivo, ubicación y horario: no configurar ninguno

Con Maximizar conversiones, tCPA, Maximizar valor y tROAS, Google **ignora** los ajustes de puja por ubicación, calendario de anuncios, audiencia, demografía e interacciones — ya usa esas señales internamente. Solo sobreviven dos cosas: la **exclusión** de dispositivo (−100%, que es una exclusión de elegibilidad, no una puja) y los modificadores de dispositivo bajo tCPA (que modifican el *target*, no la puja).

**Decisión: cero ajustes de puja en las 3 campañas, en todas las fases.** Si hace falta control geográfico o de dispositivo, se hace con **segmentación** (excluir zonas, excluir dispositivo con −100%), nunca con modificadores. Y al migrar desde la cuenta vieja, **limpiar los ajustes heredados**: un −30% en escritorio que quedó de 2024 no hace nada, pero confunde el diagnóstico de una caída de rendimiento seis meses después.

⚠️ Nota: en Fase 1 (Maximizar clics) los ajustes **sí** funcionarían. Aun así no se usan: agregan variables a un período cuyo único objetivo es obtener una línea base limpia de CPC y CVR.

---

### 7.11 Qué mirar cada semana para decidir presupuesto (y qué remedio aplica a cada síntoma)

Guardar un conjunto de columnas fijo: `Campañas → Columnas → Modificar columnas → "Métricas de la competencia"` → tildar **Porcentaje de impresiones de búsqueda**, **% de impresiones perdidas (presupuesto)** y **% de impresiones perdidas (ranking)** → Guardar el conjunto para reusarlo.

La identidad es: `Cuota de impresiones + Perdida por presupuesto + Perdida por ranking ≈ 100%`.

| Síntoma | Diagnóstico | Remedio correcto | Remedio equivocado (el que se aplica siempre) |
|---|---|---|---|
| Perdida por **presupuesto** alta en Obra-Industrial + CPA aceptable + trabajos cobrados | Hay demanda y el techo es la plata | **Escalar 20-25%** ese presupuesto | Subir las pujas (solo quema el diario más rápido) |
| Perdida por **ranking** alta en `ag_pileta-sin-jerga` | Problema de relevancia keyword ↔ anuncio ↔ landing | Reescribir el RSA con la palabra del cliente ("sacamos la pintura de tu pileta") y verificar que el destino sea `/arenado-de-piletas` | Subir presupuesto (compra más impresiones en posiciones perdedoras) |
| Estado "Limitado por presupuesto" en las 3 campañas | **Es el estado normal** con 5.000/día | Nada. No es una alarma | Escalar porque Google lo pide en Recomendaciones |
| CPA subiendo semana a semana en Fase 2 | Puede ser maduración de la ventana de 30 días | Esperar a día 45 antes de leer | Cambiar la estrategia de puja (resetea todo) |
| Maximizar conversiones se "enamora" de Piletas y ahoga Obra | El algoritmo persigue el lead más barato; no sabe que un chat de obra vale 10× | Se contiene con **presupuestos separados** (ya está resuelto por estructura) | Subir el presupuesto de Obra sin tocar el de Piletas dentro de la misma cartera |

**El orden de decisión para escalar es siempre el mismo: trabajo cobrado → escalar.** Nunca "estado en rojo → escalar".

---

### 7.12 Lo que NO se hace, en ninguna fase

1. ❌ Encender **Maximizar conversiones el día 1**. Sin historial, el sistema quema el presupuesto explorando.
2. ❌ Fijar un **tCPA de 2.800 ARS** (ni ningún número derivado del histórico inflado).
3. ❌ **Presupuesto compartido** entre las 3 campañas.
4. ❌ Meter **General-Marca en la cartera** de Obra + Piletas.
5. ❌ Usar **presupuestos totales de campaña** como tope de seguridad.
6. ❌ **Programación de anuncios** (dayparting) en los primeros 3 meses.
7. ❌ **Apagar la campaña de Piletas** en invierno.
8. ❌ **Ajustes de estacionalidad** para toda la temporada de piletas.
9. ❌ Cambiar de estrategia de puja **más de una vez cada 4 semanas**.
10. ❌ Aceptar el botón "Aplicar" de la **Bid Target Adjustment Tool** sin contrastarlo contra el margen real. ⚠️ *Con < 7 conversiones esa herramienta ni siquiera genera recomendaciones: es probable que aparezca vacía durante meses.*
11. ❌ Tocar la **ventana de conversión** (30 días post-clic) en medio de una prueba: invalida la comparación. En obra, el arquitecto pide 3 presupuestos y decide semanas después.
12. ❌ Dejar la **aplicación automática de recomendaciones** encendida: puede subir presupuestos por encima del tope y hacer que el guardián apague la cuenta entera.

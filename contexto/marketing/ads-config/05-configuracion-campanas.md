## 5. Configuración de cada campaña (opción por opción)

Esta sección define el **estado final exacto** de cada setting de las 3 campañas de Búsqueda, en el orden en que aparecen en la interfaz de Google Ads 2026. Está escrita para ejecución guiada: el dueño hace los clics siguiendo la ruta de UI, saca captura del estado y la pega en el chat para verificación.

**Tres reglas de método antes de empezar:**

1. **Ningún default de esta lista se da por sentado.** Google despliega la UI por oleadas y cambia defaults sin aviso. Cada punto marcado con 📸 exige captura de pantalla ANTES de publicar la campaña.
2. **Las 3 campañas se crean con la misma receta.** Solo cambia lo que está explícitamente marcado como distinto (presupuesto, geo, landing, negativas de ruteo). Si algo no está marcado como distinto, va idéntico en las tres.
3. **Nada se publica hasta que las 5 configuraciones de cuenta del punto 5.1 estén verificadas.** Se configuran una sola vez y protegen a las tres campañas.

---

### 5.1 Pre-vuelo: 5 interruptores a nivel CUENTA (antes de tocar "+ Crear")

Estos cinco no son configuración de campaña, pero si están mal, la configuración de campaña no sirve de nada.

| # | Qué | Estado final | Ruta de UI |
|---|-----|--------------|------------|
| 1 | **Aplicación automática de recomendaciones** | **TODAS las categorías en OFF**, una por una (no hay interruptor maestro) 📸 | Recomendaciones (ícono lamparita) → pestaña **Aplicación automática** |
| 2 | **Etiquetado automático (gclid)** | **ACTIVADO** — sin gclid no hay importación de conversiones desde GA4 ni atribución 📸 | Administrador → Configuración de la cuenta → **Etiquetado automático** |
| 3 | **Recursos automatizados a nivel de cuenta** | Vínculos dinámicos, textos destacados dinámicos, fragmentos dinámicos e imágenes dinámicas en **OFF** (es un sistema distinto de IA Max: hay que apagar los dos) | Campañas → Recursos → menú ⋮ → **Recursos automatizados a nivel de cuenta** → Configuración avanzada |
| 4 | **Objetivo de conversión predeterminado** | Solo **"Contactos"** (la acción de `contact_whatsapp`) como principal. Todo lo demás en Secundaria. Si existe el objetivo **"Acciones locales"**, desactivarlo como predeterminado | Objetivos → Conversiones → pestaña **Objetivos** → Editar objetivo |
| 5 | **Negativas a nivel cuenta** | Bloques **EMPLEO** y **TÉCNICAS** cargados (nunca `pileta`/`piscina` acá) | Administrador → Configuración de la cuenta → **Palabras clave negativas** |

> ⚠️ **Trampa #1 de todo el proyecto:** el punto 1. Google habilita auto-apply en cuentas nuevas y en cuentas que nunca abren la pestaña de Recomendaciones. La categoría **"Quitar palabras clave negativas en conflicto"** borraría las negativas de empleo y devolvería los llamados de gente buscando trabajo; **"Usar palabras clave de concordancia amplia"** viola la regla dura del proyecto **y** dispara la auto-migración a IA Max de septiembre 2026. Re-verificar mensualmente: Google agrega categorías nuevas ya tildadas.

---

### 5.2 Identidad y presupuesto de las 3 campañas

| Campaña | Nombre exacto | Presupuesto diario | ×30,4 (tope mes) | Landing por defecto |
|---------|---------------|--------------------|------------------|---------------------|
| 1 | `AR-Search-Obra-Industrial` | **ARS 3.000** | 91.200 | `/servicios` |
| 2 | `AR-Search-Piletas` | **ARS 1.250** | 38.000 | `/arenado-de-piletas` |
| 3 | `AR-Search-General-Marca` | **ARS 750** | 22.800 | genéricos → `/servicios` · marca → `/` |
| | **TOTAL** | **ARS 5.000/día** | **152.000/mes** | |

**Por qué estos nombres y no otros:** son los ya documentados en `05-google-ads-operacion.md` y en la bitácora. Los 4 scripts instalados filtran por **estado** (`campaign.status = "ENABLED"`), no por patrón de nombre, así que no hay ninguna dependencia técnica que obligue a renombrar — y cambiar los nombres ahora rompería la trazabilidad con la documentación existente. El prefijo `AR-Search-` ya cumple la función de la convención 2026 (canal + tema); no se agrega sufijo de geo porque las tres comparten geo y no aportaría poder de filtrado.

**Cuando se escale al tope:** el diario correcto es **9.800 ARS/día**, no 10.000 — porque 10.000 × 30,4 = 304.000 ARS/mes, por encima del tope duro de 300.000. Con 9.800 el mes cierra en 297.920. Reparto 60/25/15 a plena escala: **5.880 / 2.450 / 1.470**.

> ⚠️ **Presupuestos individuales, NUNCA compartido.** Un presupuesto compartido reparte según dónde Google ve oportunidad, no según prioridad de negocio: la campaña de mayor volumen (Piletas en temporada, o genéricos) se comería el pozo y Obra-Industrial —el norte del negocio— quedaría sin aire. Además rompe la lectura de "cuota de impresiones perdida por presupuesto" por campaña, que es el diagnóstico principal en cuentas limitadas.

> ⚠️ **No usar "presupuesto total de campaña"** (beta abierta para Búsqueda desde 15/01/2026). Es un **objetivo de gasto**, no un tope: le prometés a Google que querés gastar ese monto y encima queda sin el freno de 2× diario. El único tope duro real de esta cuenta sigue siendo el **script guardián** (06), porque los "presupuestos de cuenta" nativos solo existen con facturación mensual.

> 📌 **Aritmética que hay que explicarle al dueño una sola vez:** 5.000/día no significa "nunca más de 5.000 en un día". Google puede gastar hasta **2× el diario** en un día puntual y compensar en el mes. El techo real es 30,4 × el diario.

---

### 5.3 Configuración paso a paso, en orden de UI

#### 5.3.1 Objetivo de campaña

**Estado final:** ⚙️ **"Crear una campaña sin la orientación de un objetivo"**

**Ruta:** Botón **+ Crear** → **Campaña** → pantalla "¿Cuál es el objetivo de tu campaña?" → scrollear hasta abajo → **"Crear una campaña sin la orientación de un objetivo"** (ícono de engranaje)

**Por qué:** elegir un objetivo no cambia la subasta — cambia qué settings te muestra Google y cuáles te esconde o pre-configura. Sin objetivo, aparecen desplegados desde el arranque el checkbox de Socios de búsqueda, el de Display, el panel de IA Max y las opciones de ubicación. Es el único camino que garantiza verlos ANTES de publicar en vez de descubrirlos en una auditoría.

> ⚠️ **Trampa:** si elegís **"Clientes potenciales"**, Google prioriza Performance Max en la grilla y en el paso siguiente te ofrece el **formulario de clientes potenciales** y la **extensión de llamada** como si fueran obligatorios. Ambos están vetados en este proyecto.

#### 5.3.2 Tipo de campaña

**Estado final:** **Búsqueda**. Sin subtipo, sin Performance Max, sin Máximo Rendimiento, sin Demand Gen.

**Ruta:** misma pantalla, tras elegir "sin orientación" → **Búsqueda**

#### 5.3.3 "Formas de alcanzar tu objetivo" 🚨

**Estado final:** **solo "Visitas al sitio web"**, con la URL de la landing de la campaña. **Llamadas telefónicas: NO tildado. Envíos de formularios de clientes potenciales: NO tildado.**

**Ruta:** paso inmediatamente posterior a elegir tipo de campaña

**Por qué:** este es el paso exacto donde vuelve a entrar el problema diagnosticado el 27/07/2026. Si acá se carga un número de teléfono, Google crea el **recurso de llamada** y el anuncio muestra un botón "Llamar" a búsquedas de empleo → vuelven los llamados pidiendo trabajo. Y el formulario de clientes potenciales aloja el lead en Google: **no llega al WhatsApp del dueño y no dispara `contact_whatsapp`**, rompiendo la única conversión de la cuenta.

> ⚠️ Google quitó de la documentación (julio 2026) el requisito de USD 50.000 de gasto histórico que antes bloqueaba el lead form. O sea: pasó de "inalcanzable" a "disponible y ofrecido en el flujo". Descartarlo activamente.

#### 5.3.4 Nombre de la campaña

**Estado final:** el de la tabla 5.2, escrito exactamente igual (Google distingue mayúsculas de minúsculas).

#### 5.3.5 Ofertas (estrategia de puja)

**Estado final (semanas 1-4):** **"Maximizar clics"** CON la casilla **"Establecer un límite de CPC máximo"** tildada, en **ARS 350**.

**Ruta:** paso "Ofertas" → "En qué querés centrarte" → **Clics** → tildar "Establecer un límite de CPC máximo para esta estrategia de puja"

**Detalle completo, gates de pasaje a Maximizar conversiones y por qué Target CPA es inviable con este presupuesto: ver la sección de pujas y presupuesto.** Acá solo lo indispensable para no publicar mal:

- El límite de 350 ARS está por encima del CPC histórico (~273) para no ahogar la campaña, pero con techo.
- **NO tildar "Establecer un CPA objetivo"** aunque venga sugerido: con la acción de conversión recién creada y sin historial limpio, o la campaña no gasta nada o quema el día en 3 clics.
- Las estrategias reales están escondidas detrás del link **"O seleccioná una estrategia de ofertas directamente"**.

> ⚠️ **Cambio del 17/08/2026:** las campañas "Limitadas por presupuesto" con Target CPA/ROAS dejan de rendir por debajo del target y derivan **hacia** él. Esta cuenta va a estar limitada por presupuesto casi por definición: un tCPA inflado "por las dudas" se convierte en lo que se paga. Un motivo más para no ponerlo ahora.

#### 5.3.6 Presupuesto

**Estado final:** presupuesto diario promedio individual según tabla 5.2. **Sin presupuesto compartido. Sin presupuesto total de campaña.**

**Ruta:** paso "Presupuesto" (o Campañas → Configuración → Presupuesto)

#### 5.3.7 Redes 📸

| Opción | Estado final |
|--------|--------------|
| Red de Búsqueda de Google | ✅ Activada (obligatoria) |
| **Incluir socios de búsqueda de Google** | ❌ **DESTILDAR** |
| **Incluir la Red de Display de Google** | ❌ **Destildado** (verificar que siga así) |

**Ruta:** Configuración de la campaña → sección **Redes**. En campañas existentes la sección suele venir **colapsada**: hay que abrirla a propósito.

**Por qué:** Socios de búsqueda **viene tildado por defecto** (Google lo documenta explícitamente). Son cientos de sitios de terceros, barras de búsqueda y directorios; análisis independientes ubican su ROAS ~37% por debajo de Google Search puro. Con 5.000 ARS/día y CPC ~273, la cuenta compra ~18 clics/día en total: no hay margen para diluir en inventario de segunda. Display ahora nace destildado pero **conserva el rótulo "Recomendado"**, que es exactamente el gancho para que alguien no técnico lo active — y un banner en un blog no genera un WhatsApp de alguien que necesita arenar un galpón.

> ⚠️ El cambio de default de Display "no se confirmó en todas las cuentas". **Mirarlo con los propios ojos** en las tres campañas.

#### 5.3.8 IA Max 🚨 — LA DECISIÓN MÁS IMPORTANTE DE ESTA SECCIÓN

**Estado final: IA MAX COMPLETAMENTE APAGADO en las 3 campañas Y en todos los grupos de anuncios.** Los tres interruptores en OFF: **Concordancia con términos de búsqueda**, **Personalización de texto** y **Expansión de la URL final**. 📸 obligatoria antes de que corra el primer peso.

**Ruta:**
- **Nivel campaña:** Campañas → Configuración → [campaña] → sección **"IA Max"** → toggle **"Optimizá tu campaña con IA Max"** en OFF. Si el toggle queda encendido por algún motivo, hay que **destildar cada parámetro por separado**: no hay un solo switch maestro.
- **Nivel grupo de anuncios:** Campañas → Grupos de anuncios → [grupo] → configuración de IA Max → **Concordancia con términos de búsqueda** en OFF (este se apaga en el grupo, no en la campaña).

**Posición y justificación para ESTE cliente — tres argumentos, ninguno dogmático:**

**(a) Riesgo de copy prohibido — es el argumento decisivo.** La **Personalización de texto** (el ex "Recursos creados automáticamente") genera titulares y descripciones leyendo tu landing, tus otros anuncios y tus keywords. Arenados Lucho **no hace** arenado técnico medido ni granallado, y prometerlo no es una infracción cosmética: es vender algo que no se puede cumplir. Alcanza con que un término de búsqueda o el contenido de la competencia empuje en esa dirección para que aparezca un titular con "granallado", "Sa3", "metal blanco" o "norma ISO". El único control que existe —las **directrices de texto** (25 exclusiones de términos + 40 restricciones de mensaje, disponibles desde 26/02/2026)— es **semántico y probabilístico, no un filtro determinista**: reduce el riesgo, no lo elimina. Con IA Max apagado, el 100% del texto publicado lo escribimos nosotros, que es exactamente lo que este negocio necesita.

**(b) Riesgo de ruteo de landing.** La **Expansión de la URL final** reemplaza tu URL final por la página del dominio que la IA considere más relevante. Eso rompe la razón de ser de la campaña de Piletas: una consulta de "sacar pintura de pileta" podría aterrizar en `/servicios` (que no habla de piletas) o en un caso de éxito de nave ferroviaria. La correspondencia consulta → landing es lo que hace barato ese lead. Nota técnica: **la Expansión de URL requiere que Personalización de texto esté activa**, así que apagar la segunda apaga las dos.

**(c) La evidencia independiente no lo respalda a este volumen.** Smarter Ecommerce (250+ campañas, 600+ cuentas): ~35% menos de ROAS con IA Max. Test directo de 4 meses de Xavier Mantica: AI Max USD 100,37 por conversión vs frase 43,97 y exacta 52,69 — perdió contra **todos** los tipos de concordancia. Un test de 14 meses reportó 964 de 993 términos traídos por IA Max **sin un solo clic**. Los benchmarks buenos que publica Google vienen de cuentas con muchas conversiones diarias; acá hay ~18 clics/día para toda la cuenta.

**Condición de reevaluación (no "nunca", sino "todavía no"):** se evalúa recién con **30+ conversiones `contact_whatsapp` limpias por mes durante 2 meses seguidos**. Cuando llegue ese momento, se prueba con **Experimentos** (split 50/50) sobre **una sola** campaña —`AR-Search-General-Marca`, la de menor presupuesto—, nunca encima de las tres productivas, y **cargando primero** las 25 exclusiones de término (granallado, granalla, shot blasting, sa3, sa 2, sa 2.5, iso, 8501, metal blanco, perfil de anclaje, rugosidad, micras, espesor, certificado, certificación, norma) más la restricción de mensaje: *"No prometas normas, certificaciones ni mediciones técnicas de ningún tipo. No digas que pintamos o revestimos: solo dejamos la superficie lista."* Si el CPA sube más de 20% en 4 semanas, se apaga.

> ⚠️ **Trampa doble.** (1) Al **optar** por IA Max, Personalización de texto y Expansión de URL quedan **tildadas por defecto**. (2) Google anunció que las campañas que usen Personalización de texto y las que tengan **concordancia amplia a nivel campaña** se **auto-migran a IA Max desde septiembre de 2026**, sin opción de rechazo (la migración de los DSA sí se corrió a febrero de 2027, pero estas dos no). Verificación mensual obligatoria, y tratamiento de incidente si aparece un banner de migración.

#### 5.3.9 Ubicaciones

**Estado final:** carga **explícita** de CABA + los 24 partidos del GBA. **No usar radio como método principal.**

**Ruta:** Configuración → **Ubicaciones** → "Ingresá otra ubicación" → **Búsqueda avanzada** → pestaña **"Ubicaciones múltiples"** → pegar la lista completa → Guardar

**Lista para pegar (idéntica en las 3 campañas en el arranque):**

```
Ciudad Autónoma de Buenos Aires
Almirante Brown, Buenos Aires
Avellaneda, Buenos Aires
Berazategui, Buenos Aires
Esteban Echeverría, Buenos Aires
Ezeiza, Buenos Aires
Florencio Varela, Buenos Aires
General San Martín, Buenos Aires
Hurlingham, Buenos Aires
Ituzaingó, Buenos Aires
José C. Paz, Buenos Aires
La Matanza, Buenos Aires
Lanús, Buenos Aires
Lomas de Zamora, Buenos Aires
Malvinas Argentinas, Buenos Aires
Merlo, Buenos Aires
Moreno, Buenos Aires
Morón, Buenos Aires
Quilmes, Buenos Aires
San Fernando, Buenos Aires
San Isidro, Buenos Aires
San Miguel, Buenos Aires
Tigre, Buenos Aires
Tres de Febrero, Buenos Aires
Vicente López, Buenos Aires
```

**Por qué lista explícita y no radio:** con 2 equipos y ~100 m²/día, el viaje se come el margen. La lista permite después **ver el reporte por ubicación y excluir partidos que no convierten**, cosa que un radio no permite. Un radio además mete zonas irrelevantes y recorta otras arbitrariamente.

**Si igual se quiere usar radio** (más rápido de cargar): centrado en la **base operativa** (⚠️ A confirmar dirección exacta), **35 km** para Piletas y General-Marca, **60 km** para Obra-Industrial. Ruta: Ubicaciones → Búsqueda avanzada → pestaña **Radio**.

**Ampliación de Obra-Industrial (fase 2, no en el arranque):** solo cuando aparezcan consultas buenas de afuera del primer/segundo cordón, sumar el corredor industrial y el eje sur en **una única tanda**, registrando la fecha en bitácora para poder medir el antes/después: `Escobar`, `Pilar`, `Campana`, `Zárate`, `La Plata`, `Ensenada`, `Berisso`, `Cañuelas`. **Piletas y General-Marca no se amplían nunca**: el ticket no soporta el viaje.

> ⚠️ **Trampa:** el default de la sección puede venir en **"Argentina"** entera (a veces heredado del país de facturación). Publicar así con 5.000 ARS/día significa gastar en Salta, Mendoza y Neuquén el primer día.

#### 5.3.10 Opciones de ubicación: Presencia vs. Interés 🚨

**Estado final:** **"Presencia: personas que se encuentran en tus ubicaciones objetivo o que las frecuentan"**. En las 3 campañas, sin excepción. 📸

**Ruta:** Configuración → Ubicaciones → link **"Opciones de ubicación"** (viene **COLAPSADO** — hay que hacer clic a propósito) → seleccionar **Presencia**

**Por qué:** el default es **"Presencia o interés: personas que se encuentran en, visitan con frecuencia o mostraron interés en tus ubicaciones incluidas"**, y Google lo etiqueta como *"la opción predeterminada y recomendada"*. Con ese ajuste, el anuncio se puede mostrar a **cualquier persona del mundo** que haya buscado o mostrado interés en AMBA. Estimaciones de agencia ubican el desperdicio entre **20% y 35% del presupuesto** en cuentas de generación de leads. Nadie en Miami, en Barcelona o en Córdoba va a contratar arenado in situ en Lanús.

**Agravante local:** las cuentas en pesos argentinos tienen un **"Cargo operativo"** sobre el gasto servido **fuera de Argentina** (1% durante 2026; fue 20% en 2024). Aplica a cuentas con facturación mensual y Banelco (⚠️ A confirmar el método de pago de esta cuenta). El argumento principal —el desperdicio del 20-35%— vale igual.

**Es un clic y probablemente la mejor relación impacto/esfuerzo de toda la configuración.** Doble trampa: es el default, dice "recomendada", y el link está colapsado.

#### 5.3.11 Exclusiones de ubicación

**Estado final:** **ninguna exclusión en el arranque.** Con lista explícita + "Presencia", la exclusión es redundante. Se usan solo si más adelante se pasa a radio o si se amplía Obra-Industrial y hay que recortar zonas puntuales.

**Ruta:** Ubicaciones → Búsqueda avanzada → solapa **Excluir**

> ⚠️ **Asimetría poco conocida:** para las ubicaciones **excluidas** el criterio por defecto es **solo presencia**. Es decir, excluir una ciudad bloquea a quien está físicamente ahí, **no** a quien la menciona en la búsqueda. Como pasamos todo a "Presencia" en la inclusión, la asimetría deja de morder — pero si alguien vuelve a "Presencia o interés" queda la peor combinación posible: incluir por interés y excluir solo por presencia.

#### 5.3.12 Idiomas

**Estado final:** si el selector todavía aparece, **"Español"**. **NO agregar "Todos los idiomas".**

**Ruta:** Configuración → **Idiomas**

**Por qué:** Google **eliminó la segmentación manual por idioma** en campañas de Búsqueda a fines de 2025; en 2026 la decide su IA. El despliegue no fue uniforme, así que puede o no aparecer. No perder tiempo optimizándolo: el filtro real lo hacen las keywords en español y las negativas. Recordatorio conceptual: el ajuste nunca se refirió al idioma del anuncio sino al de la interfaz de Google del usuario.

**⚠️ A confirmar:** en qué estado aparece el selector al crear la primera campaña (registrarlo en bitácora para saber si la cuenta ya está migrada).

#### 5.3.13 Segmentos de audiencia

**Estado final:** modo **"Observación"**, nunca **"Segmentación"**. Pocos segmentos, con hipótesis explícita. **Cero ajustes de puja por audiencia.**

**Ruta:** Campañas → [campaña] → **Públicos, palabras clave y contenido** → Públicos → "Editar segmentos de audiencia" → selector **Observación**

**Segmentos a cargar (⚠️ los nombres exactos varían por país — abrir el selector y ver qué existe realmente en Argentina):**
- En-mercado: *Servicios para el hogar / Reformas del hogar*
- En-mercado: *Materiales y suministros de construcción*
- Datos propios (cuando existan): visitantes de `/arenado-de-piletas`, visitantes que NO llegaron a confirmar el AlertDialog

**Por qué Observación:** no restringe el alcance, solo reporta el rendimiento del segmento. Con este volumen las audiencias **no van a soportar ajustes de puja estadísticamente válidos** en el corto plazo: sirven para **leer quién convierte**, no para segmentar. Poner "Segmentación" en una cuenta con tan pocas conversiones recorta alcance sin datos que lo justifiquen.

> ⚠️ En flujos con objetivo (no "sin orientación"), Google preselecciona audiencias sugeridas. Verificar que ninguna quede en modo Segmentación.

#### 5.3.14 Configuración adicional

Todo lo que sigue está bajo **Configuración → "Mostrar más configuraciones" / "Configuración adicional"**.

##### a) Programación de anuncios

**Estado final:** **24/7, sin restricción**, durante las primeras 2-4 semanas en las 3 campañas.

**Ruta:** Más configuraciones → **Programación de anuncios**

**Por qué:** el canal es **WhatsApp asincrónico, no una llamada**. Un mensaje a las 22:30 se responde a las 8:00 sin perder el lead, así que el recorte nocturno clásico de negocios telefónicos no aplica igual. Además, correr 24/7 las primeras semanas es lo que genera el dato para decidir después (qué horas traen los WhatsApp buenos).

> ⚠️ **Cambio de pacing del 01/06/2026 — crítico si algún día se recorta el horario:** Google ahora pacea hacia el tope mensual **completo** (30,4×) aunque el calendario habilite solo algunos días u horas. Antes escalaba proporcionalmente a los días activos. Si se restringe a lunes-viernes 9-18, Google intenta gastar el mes entero comprimido en esas ventanas: el gasto por hora se acelera y el 2× diario se toca constantemente. El dueño ve 10.000 gastados un martes con presupuesto de 5.000 y cree que Google rompió el tope. No lo rompió. Si se hace dayparting, **recalcular el diario dividiendo el objetivo mensual por 30,4** y monitorear los primeros 7 días.

##### b) Fechas de inicio y finalización

**Estado final:** **fecha de inicio = el mismo día en las 3 campañas** (para poder compararlas). **Fecha de finalización: NINGUNA**, tampoco en Piletas.

**Ruta:** Más configuraciones → **Fechas de inicio y finalización**

**Por qué en Piletas tampoco hay fecha de fin:** la estrategia acordada es correr en invierno con mensaje de anticipación ("llegá al verano con la pileta lista") aprovechando clics baratos, y **modular con presupuesto, no con fechas**. Poner fecha de fin apaga la campaña sola, corta el aprendizaje, y al reactivar vuelve a fase de aprendizaje desde cero.

##### c) Rotación de anuncios

**Estado final:** **"Optimizar: preferir los anuncios con mejor rendimiento"** (el default está bien).

**Ruta:** Más configuraciones → **Rotación de anuncios**

**Por qué:** solo quedan dos opciones. "No optimizar" reparte parejo indefinidamente, lo que suena justo pero es una fantasía estadística acá: con ~18 clics/día nunca se van a acumular impresiones para declarar un ganador con significancia. El test real de creatividades se hace con el **reporte de rendimiento de recursos del RSA** (etiquetas Baja/Buena/Óptima), no rotando parejo. Es el setting donde más se pierde tiempo discutiendo por cero impacto: dejarlo y seguir.

##### d) Palabras clave de concordancia amplia (toggle a nivel campaña) 🚨

**Estado final:** **APAGADO** en las 3 campañas. 📸

**Ruta:** Configuración → **Configuración adicional** → "Palabras clave de concordancia amplia"

**Por qué:** además de violar la regla dura del proyecto (frase y exacta, amplia prohibida), en 2026 **activar este toggle equivale a firmar la migración automática a IA Max de septiembre 2026**. Es una bomba de tiempo: alguien lo prende "para probar" en agosto y en septiembre la campaña entera queda gobernada por IA Max sin aviso claro. Sumado al dato de la propia cuenta: `arenado` en **frase** quemó 208.331 ARS con 21 conversiones (~9.900 de CPA) **y esas conversiones estaban infladas**; la amplia históricamente fue peor.

##### e) Búsquedas de marca / inclusiones y exclusiones de marca

**Estado final:** **no configurar nada.** Los controles de marca de IA Max (inclusiones/exclusiones de marca, y el control "Búsquedas de marca" con sus tres opciones) **requieren IA Max activado** en campañas nuevas, y IA Max va apagado.

**Ruta (solo para saber dónde está):** Configuración → Configuración adicional → "Inclusiones de marca" / dentro del panel de IA Max

**Cómo se resuelve el tema marca sin esos controles:**
- La marca propia se cubre con **keywords en concordancia exacta** dentro de `AR-Search-General-Marca`: `[arenados lucho]`, `[arenado lucho]`.
- Para que las consultas de marca **no** se las lleve otra campaña por Ad Rank, cargar en **`AR-Search-Obra-Industrial` y `AR-Search-Piletas`** las negativas de **frase**: `"arenados lucho"`, `"arenado lucho"`.
- Si aparecen marcas de competidores o de fabricantes de equipos en el informe de términos de búsqueda, se manejan con **negativas normales** — más barato, más transparente y auditable.

> ⚠️ Si alguna vez se activan **inclusiones de marca** sin querer, el tráfico **no-marca** (que es ~85% del negocio) deja de servir. Google lo advierte explícitamente.

##### f) Feeds de página y DSA (anuncios dinámicos)

**Estado final:** **no crear ninguno.** Sin campañas DSA, sin grupos de anuncios dinámicos, sin feeds de página.

**Ruta (para verificar que no existan):** Herramientas → **Administrador de datos comerciales** → Feeds de página

**Por qué:** para un sitio de 7 páginas con landings específicas por intención (`/servicios`, `/arenado-de-piletas`, `/contacto`), un DSA no aporta nada que una estructura de keywords bien armada no cubra — y encima **genera títulos automáticos a partir del contenido de la página**, o sea el mismo riesgo de copy prohibido que la Personalización de texto. La función que un DSA cumplía (descubrir consultas nuevas) se cubre gratis leyendo el informe de términos de búsqueda cada semana.

> ⚠️ **Deuda futura garantizada:** si alguien crea un DSA "para descubrir keywords", en **febrero de 2027** se convierte solo en IA Max con las tres features encendidas. La creación de DSA nuevos se restauró el 15/06/2026, así que la opción está disponible y tienta.

##### g) Exclusiones de IP

**Estado final:** cargar desde el día 1 la IP de la casa/oficina del dueño y la de quien gestione la cuenta. **Se configura por campaña: hay que repetirlo en las 3.**

**Ruta:** Configuración → Más configuraciones → **Exclusiones de IP** → ingresar → Guardar

**Cómo obtenerlas:** googlear "cuál es mi IP" desde cada dispositivo. Como la mayoría de las conexiones hogareñas en Argentina tienen **IP dinámica**, usar comodín en el último octeto para cubrir el rango del ISP (ej. `200.45.12.*`) o revisarla periódicamente.

**⚠️ A confirmar:** IP del dueño y de la oficina.

**Límite:** 500 IPs por campaña. Es higiene básica (no gastar en los propios clics de verificación), **no** una defensa contra click fraud serio: no protege contra IP dinámica, móviles ni VPN.

##### h) Dispositivos

**Estado final:** **sin ningún ajuste de puja por dispositivo. Sin excluir ningún dispositivo.**

**Por qué:** con Smart Bidding, Google **ignora** los ajustes de puja por dispositivo, ubicación, calendario, audiencia y demografía — ya usa esas señales internamente. Solo sobrevive la **exclusión** (-100%), que acá no se usa: el móvil es exactamente donde vive el flujo WhatsApp. Configurar ajustes con Maximizar clics/conversiones activo es ruido puro y encima deja el rastro de un cambio que después confunde el diagnóstico de una caída.

##### i) Objetivos de conversión de la campaña

**Estado final:** **"Usar los objetivos de conversión de la cuenta"** en las 3 campañas.

**Ruta:** Configuración → **Objetivos de conversión**

**Excepción única:** si en la cuenta existe el objetivo **"Acciones locales"** (Visitas al sitio web, Otras interacciones, Cómo llegar — conversiones alojadas en Google) y no se puede desactivar como predeterminado de cuenta, entonces sí activar **"Utilizar la configuración de objetivos específicos de la campaña"** en las 3 y **destildar "Acciones locales"**. Esas acciones son la explicación más probable de los CPA históricos absurdamente baratos: contaban visitas e interacciones, no leads.

> ⚠️ Pasar a objetivos específicos de campaña es **camino de ida en la práctica**: la campaña deja de heredar cualquier cambio futuro de los objetivos de cuenta y hay que tocarla a mano una por una. Por eso solo se hace si hace falta, se hace en las 3 de una vez, y se anota en bitácora.

##### j) Opciones de URL de la campaña (UTMs) 🚨

**Estado final:** **plantilla de seguimiento VACÍA** + **sufijo de URL final** cargado a nivel campaña.

**Ruta:** Configuración → Configuración adicional → **Opciones de URL de la campaña** → campo **"Sufijo de URL final"**

**Por qué sufijo y no plantilla de seguimiento:**
- El sufijo **se hereda a las URLs de la campaña, incluidos los sitelinks**. Sin él habría que pegar UTMs a mano en 18 sitelinks (6 × 3 campañas) y rehacerlo cada vez que se cambia uno.
- No requiere `{lpurl}`. La plantilla de seguimiento **obliga** a incluirlo al principio; olvidarlo hace que los anuncios se rechacen o manden al lugar equivocado.
- El `gclid` lo pone el **etiquetado automático**, no la plantilla. La plantilla solo hace falta con un tracker externo de redirección, que acá no existe.

**Sufijos exactos (uno por campaña — copiar tal cual, SIN el `?` inicial: Google lo agrega):**

`AR-Search-Obra-Industrial`
```
utm_source=google&utm_medium=cpc&utm_campaign=obra-industrial&utm_content={adgroupid}&utm_term={keyword}&mt={matchtype}&net={network}&dev={device}
```

`AR-Search-Piletas`
```
utm_source=google&utm_medium=cpc&utm_campaign=piletas&utm_content={adgroupid}&utm_term={keyword}&mt={matchtype}&net={network}&dev={device}
```

`AR-Search-General-Marca`
```
utm_source=google&utm_medium=cpc&utm_campaign=general-marca&utm_content={adgroupid}&utm_term={keyword}&mt={matchtype}&net={network}&dev={device}
```

**Qué gana el negocio con esto:** como la única conversión (`contact_whatsapp`) se dispara **en el sitio**, con estos parámetros **GA4 puede segmentar qué keyword y qué tipo de concordancia generaron el WhatsApp** — exactamente el dato que faltó en todo el historial sucio de la cuenta. `mt=e` vs `mt=p` responde de una vez si la frase vale la pena o si hay que ir 100% exacta.

**Notas de implementación:**
- `utm_campaign` va **hardcodeado** (no `{campaignid}`) porque el sufijo se define por campaña: así GA4 muestra `piletas` en vez de un número de 10 dígitos.
- `utm_content={adgroupid}` sí queda numérico. Mantener en `08-bitacora.md` una tabla de mapeo `adgroupid → nombre de grupo`. **Alternativa opcional:** cargar el sufijo a nivel **grupo de anuncios** con el nombre del grupo hardcodeado (el sufijo existe también a nivel grupo) — más legible, más mantenimiento.
- Google URL-encodea los ValueTrack automáticamente (`{keyword}` con espacios llega bien).

**Verificación obligatoria antes de publicar (regla dura #1 del proyecto: nada se enciende con URLs que no respondan 200):**
1. Pegar en el navegador cada URL final con su sufijo ya resuelto y confirmar **200**, por ejemplo:
   `https://www.arenadoslucho.com/arenado-de-piletas?utm_source=google&utm_medium=cpc&utm_campaign=piletas&utm_content=123456&utm_term=sacar%20pintura%20de%20pileta&mt=p&net=g&dev=m`
2. Probar `https://www.arenadoslucho.com/servicios?gclid=TEST123` y confirmar que el parámetro **sobrevive** la navegación del App Router.
3. Usar el botón **"Probar"** de la sección de opciones de URL.

> ✅ **Dato verificado en el repo:** los 3 redirects legacy (`/arenado-industrial` → `/servicios`, `/arenado-particular` → `/arenado-de-piletas`, `/presupuesto-rapido` → `/contacto`) están definidos en `next.config.js` como `permanent: true` de Next.js, que **preserva la query string** por defecto. Aun así, **ninguna ruta legacy se usa como URL final** de anuncio ni de sitelink.

> ⚠️ **Trampa:** poner el UTM directo en la URL final de cada anuncio o sitelink (`/servicios?utm_source=google`). Se desincroniza, duplica parámetros y ensucia el informe de páginas de GA4.

#### 5.3.15 Recursos (assets)

Se detallan en la sección de anuncios y recursos. Lo que corresponde fijar **acá, como configuración**, es lo prohibido:

| Recurso | Estado |
|---------|--------|
| Vínculos a sitios (sitelinks) | ✅ 6 por campaña, **a nivel campaña** |
| Textos destacados | ✅ 8-10 por campaña, a nivel campaña |
| Fragmentos estructurados | ✅ 1 encabezado por campaña |
| Imagen | ✅ opcional, fotos reales |
| **Llamada** | ❌ **PROHIBIDO** — verificar en los 3 niveles (recurso, recursos automatizados de cuenta, e **Informes de llamadas OFF** en Administrador → Configuración de la cuenta) |
| **Formulario de clientes potenciales** | ❌ **PROHIBIDO** |
| **Ubicación** | ❌ **No activar todavía** — requiere GBP reclamado, y además **muestra el teléfono**, lo que reabre el problema de los llamados de empleo y expone el número que el sitio protege partido en 2 strings |
| Precio | ❌ No usar (el arenado se cotiza por m², estado y accesibilidad) |
| Promoción | ⚠️ Solo en Piletas y solo si el dueño sostiene la oferta |

> ⚠️ **Sitelinks heredados:** los recursos a nivel cuenta se aplican solos a campañas nuevas. Revisar que no haya sitelinks viejos apuntando a `/arenado-industrial`, `/arenado-particular` o `/presupuesto-rapido`. Y recordar la regla de jerarquía: **si existe un recurso de un tipo a nivel grupo, los de ese mismo tipo a nivel campaña y cuenta dejan de mostrarse en ese grupo.** Por eso todo va a nivel campaña.

---

### 5.4 Qué se configura DISTINTO en `AR-Search-Piletas`

Todo lo anterior aplica igual, salvo estos seis puntos:

| Aspecto | Obra-Industrial / General-Marca | **Piletas** | Por qué |
|---------|--------------------------------|-------------|---------|
| **Landing (URL final)** | `/servicios` · marca `/` | **`/arenado-de-piletas`**, sin excepción | Es la única página que habla el idioma del dueño de casa que no sabe qué es "arenado". Mandarlo a `/servicios` mata la conversión |
| **Geo** | Ampliable a fase 2 (Escobar, Pilar, Campana, Zárate, La Plata…) si aparece demanda de ticket alto | **AMBA estricto, nunca se amplía** | El ticket de una pileta no soporta el viaje: el traslado se come el margen |
| **Concordancia dominante** | Exacta en las cabezas; frase acotada | **Mayoría frase + exacta en las cabezas** | La búsqueda sin jerga es imprevisible ("se descascara la pintura de la pileta"): ahí la frase aporta descubrimiento real |
| **Negativas de ruteo (campaña)** | `"pileta"`, `"piletas"`, `"piscina"`, `"piscinas"`, `"natatorio"` en **frase** | `"galpón"`, `"estructura metálica"`, `"fachada"`, `"ladrillo"` en **frase**, solo si aparecen en el informe de términos | Bloquea el solapamiento en las dos direcciones |
| **Estacionalidad** | Estable todo el año | **Modular con PRESUPUESTO**, no con fechas ni con ajustes estacionales: mantener encendida en invierno con mensaje de anticipación y subir el diario desde ago-sep hacia el pico | Los ajustes de estacionalidad sirven para eventos de **1 a 7 días** y pierden eficacia arriba de 14; para una temporada completa la palanca correcta es el presupuesto |
| **Grupos de anuncios** | 2 grupos | 2 grupos con **copy literalmente distinto**: `pileta-jerga` y `pileta-sin-jerga` | Son dos audiencias que usan vocabulario opuesto; es la única fragmentación justificada a este volumen |

> ⚠️ **Lo que NO hay que hacer en Piletas:** cargar un ajuste de estacionalidad de +80% para toda la primavera-verano (fuera del rango de utilidad de la herramienta), ni poner fecha de finalización, ni activar **"Ubicaciones de interés"** de IA Max (suena a control de precisión pero es un **acelerador**: alcanza a gente que muestra interés en la zona sin estar en ella — exactamente el tráfico que no sirve para un servicio in situ).

---

### 5.5 Negativas de ruteo a nivel campaña (el pegamento entre las 3)

Cuando la misma keyword existe en dos campañas, Google **no** te hace competir contra vos mismo: hace una selección interna y manda **una sola**, la de mejor Ad Rank. El problema documentado es que puede ganar "el gemelo equivocado" — la versión con peor landing se lleva el clic. **La negativa de campaña es la única forma confiable de rutear.**

**Ruta:** Campañas → [seleccionar la **campaña**, no el grupo] → Públicos, palabras clave y contenido → Palabras clave de la Búsqueda → pestaña **"Palabras clave negativas de la Búsqueda"** → Editar exclusiones

| Campaña | Negativas de campaña (concordancia de **frase**) |
|---------|--------------------------------------------------|
| `AR-Search-Obra-Industrial` | `"pileta"` · `"piletas"` · `"piscina"` · `"piscinas"` · `"natatorio"` · `"arenados lucho"` · `"arenado lucho"` |
| `AR-Search-General-Marca` | `"pileta"` · `"piletas"` · `"piscina"` · `"piscinas"` · `"natatorio"` |
| `AR-Search-Piletas` | `"arenados lucho"` · `"arenado lucho"` · (reactivas, si aparecen en el informe: `"galpón"`, `"estructura metálica"`, `"fachada"`, `"ladrillo"`) |

**Las negativas transversales (técnicas, empleo, equipos/insumos, DIY, data-driven) NO van acá:** van a nivel cuenta y en listas compartidas, cargadas **ANTES** de encender nada. Motivo: el informe de términos de búsqueda oculta una porción grande del gasto por umbrales de privacidad (~40% promedio según estimaciones de industria), así que **la mitad del desperdicio nunca lo vas a ver**. La estrategia de negativas tiene que ser preventiva, no reactiva. Dato a favor: las negativas se aplican **antes** de cualquier lógica de expansión de IA.

> 🚨 **Nunca** poner `pileta` o `piscina` como negativa **a nivel cuenta**. Apagaría el servicio más rentable del historial y sería invisible: los anuncios simplemente dejan de mostrarse, sin alerta.

**Verificación del ruteo a la semana:** Herramientas → Solución de problemas → **Vista previa y diagnóstico de anuncios**, en español y ubicación CABA/GBA. Confirmar que (a) "sacar pintura de pileta" dispara el anuncio de Piletas y no el de Obra-Industrial, y (b) un término de empleo no dispara nada. **Prohibido googlearse:** genera impresiones sin clic, baja el CTR y por lo tanto el CTR esperado, que pesa ~39% del Nivel de calidad.

---

### 5.6 Checklist de verificación por captura (antes de publicar cada campaña)

| # | Setting | Estado esperado | 📸 |
|---|---------|-----------------|----|
| 1 | Objetivo de campaña | Sin orientación de objetivo → Búsqueda | |
| 2 | Formas de alcanzar el objetivo | Solo "Visitas al sitio web". Llamadas y lead form **destildados** | 📸 |
| 3 | Socios de búsqueda | **Destildado** | 📸 |
| 4 | Red de Display | **Destildado** | 📸 |
| 5 | **IA Max** | Toggle OFF (campaña) + Concordancia de términos OFF (cada grupo) | 📸 |
| 6 | Ubicaciones | CABA + 24 partidos cargados explícitamente | 📸 |
| 7 | **Opciones de ubicación** | **"Presencia"** (no "Presencia o interés") | 📸 |
| 8 | Idiomas | Español (o ausente si ya migró) | 📸 |
| 9 | Presupuesto | 3.000 / 1.250 / 750 · individual, no compartido | |
| 10 | Ofertas | Maximizar clics + límite CPC 350 ARS · **sin** CPA objetivo | 📸 |
| 11 | Programación | 24/7, sin restricción | |
| 12 | Fechas | Inicio común · **sin** fecha de fin | |
| 13 | Rotación | Optimizar | |
| 14 | Concordancia amplia a nivel campaña | **APAGADO** | 📸 |
| 15 | Audiencias | Modo **Observación** | |
| 16 | Exclusiones de IP | IP del dueño cargada (en las 3) | |
| 17 | Objetivos de conversión | "Usar los de la cuenta" (o específicos sin "Acciones locales") | 📸 |
| 18 | Sufijo de URL final | Cargado y **probado en 200** | 📸 |
| 19 | Plantilla de seguimiento | **Vacía** | |
| 20 | Negativas de ruteo | Cargadas según tabla 5.5 | 📸 |
| 21 | Recursos | Sin llamada, sin lead form, sin ubicación | 📸 |
| 22 | Auto-apply (cuenta) | Todo OFF | 📸 |

**Después de publicar:** re-verificar los puntos 3, 4, 5, 7, 14 y 22 **a los 7 días** y después **mensualmente**. Google reintroduce estos ajustes vía recomendaciones, migraciones de producto y categorías nuevas encendidas por defecto. Cada verificación, con fecha, a `08-bitacora.md`.

**Detector de humo semanal:** Campañas → Estadísticas e informes → **Historial de cambios**, filtro últimos 7 días, ordenado por usuario. Todo cambio tiene que tener un responsable conocido (el dueño o un script del proyecto). Si aparece un cambio sin dueño → auto-apply se reactivó o alguien más tiene acceso.

---

### 5.7 ⚠️ A confirmar antes de ejecutar

| Dato | Por qué bloquea | Cómo se resuelve |
|------|-----------------|------------------|
| **Si el toggle de IA Max viene ON por defecto** en campañas nuevas en Argentina | Fuentes contradictorias: la documentación de Google describe un opt-in explícito, pero varias fuentes de industria afirman que ya es el default | Captura de la pantalla del panel IA Max **antes** de avanzar y otra **después** de guardar |
| **Si el selector de Idiomas todavía aparece** | Google lo eliminó de Búsqueda pero el despliegue no fue uniforme | Mirarlo al crear la primera campaña y registrar el estado |
| **IP de la casa/oficina del dueño** (y si es fija o dinámica) | Sin eso no se pueden cargar las exclusiones de IP | Googlear "cuál es mi IP" desde cada dispositivo |
| **Dirección exacta de la base operativa** | Solo si se opta por radio en lugar de lista explícita de partidos | Preguntar al dueño |
| **Si existe el objetivo "Acciones locales"** en la cuenta | Determina si hay que usar objetivos específicos de campaña en las 3 | Objetivos → Conversiones → pestaña Objetivos |
| **Método de pago de la cuenta** (tarjeta vs. facturación mensual + Banelco) | Define si aplica el "Cargo operativo" del 1% sobre gasto fuera de Argentina, y si existe la opción de "presupuestos de cuenta" nativos | Facturación → Configuración |
| **ID de cuenta de Google Ads** (000-000-0000) | Sigue sin completarse en `05-google-ads-operacion.md` | Administrador → Configuración de la cuenta |
| **Nombres reales de los segmentos en-mercado** para construcción/reformas en Argentina | Los nombres y la cobertura varían por país | Abrir el selector de audiencias en la cuenta |
| **Etiquetas exactas de menú en español (AR)** | Google renombra secciones seguido ("Opciones de ubicación" vs "Configuración de ubicación", "Ofertas" vs "Estrategia de ofertas") | Verificar por captura durante la ejecución guiada |

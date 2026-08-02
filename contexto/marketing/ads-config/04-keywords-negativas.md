## 4. Palabras clave y negativas

> **Regla de oro de esta sección:** las negativas se cargan **ANTES** de encender la primera campaña, no después de ver el desperdicio. El informe de términos de búsqueda oculta una porción grande del gasto bajo "otros términos" (estimaciones de industria: ~40-51%, y crece cuanto más ancha la concordancia). La mitad del dinero mal gastado **nunca se ve**: por eso la estrategia de negativas es preventiva, no reactiva.

### Decisiones de esta sección (resumen ejecutivo)

| # | Decisión | Fundamento |
|---|----------|------------|
| 1 | **Amplia prohibida — se mantiene, sin matices.** Frase y exacta únicamente. | La investigación 2026 no da argumentos para levantarla en una cuenta con <15 conv/mes limpias. Se ofrece un experimento controlado con condiciones duras (§4.9). |
| 2 | **6 grupos de anuncios en total** (2 por campaña), no 8. Se fusionan `obra-restauracion` + `industrial-limpieza` + `estructuras-tanques` en un solo grupo. | Con ~5.000 ARS/día y CPC ~273 la cuenta compra ~18 clics/día. Cuatro grupos en Obra-Industrial dan ~2,7 clics/día cada uno: ninguno acumula datos. |
| 3 | **`arenado` NUNCA en frase.** Solo `[arenado]` en exacta y con tope de CPC. | Histórico: `arenado` en FRASE quemó **208.331 ARS con 21 conv (~9.900 CPA)** — y esas conversiones estaban infladas. `arenados` en exacta: ~2.813 CPA. |
| 4 | **82 keywords repartidas en 6 grupos** (24 exactas / 58 frases), con exacta en las cabezas y frase acotada para descubrimiento. | Frase 2026 se ensanchó hasta aproximar lo que era el viejo BMM: se usa quirúrgicamente, no por default. |
| 5 | **Negativas en 3 niveles:** cuenta (empleo + técnicas + homónimos), 3 listas compartidas transversales, 2 listas de ruteo. Nada suelto a nivel campaña. | El nivel cuenta no admite excepciones por campaña; las listas compartidas se editan una vez y se propagan. |
| 6 | **Se proponen 3 bloques de negativas nuevos** que hoy NO están en `03-keywords-maestro.md`: vidrio/grabado, homónimos de "pileta" (bacha, cocina, lavadero) y `"taller de arenado"`. | Riesgos reales del vocabulario argentino y de la restricción operativa (no hay taller). Requiere OK del dueño para incorporarlos al mapa maestro. |

---

### 4.1 Posición fundamentada sobre concordancias en 2026

#### Qué hace hoy cada concordancia

| Concordancia | Qué hace en 2026 | Uso en esta cuenta |
|---|---|---|
| **Amplia** (`arenado industrial`) | Consultas relacionadas semánticamente, sin necesidad de contener las palabras. Depende enteramente de que Smart Bidding tenga señal para filtrar. Además, el interruptor de "concordancia amplia a nivel campaña" **se auto-migra a AI Max en septiembre de 2026, sin opción de rechazo**. | ⛔ **PROHIBIDA.** Ni una sola keyword, ni el interruptor de campaña. |
| **Frase** (`"arenado industrial"`) | Ya **no** significa "contiene la frase". Se ensanchó hasta aproximar lo que hacía el Broad Match Modified antes de 2021: dispara con paráfrasis y sinónimos que preservan el significado. Es **más ancha hoy** que cuando esta cuenta quemó 208k con `arenado` en frase. | ✅ Permitida **con criterio**: solo donde hace falta descubrimiento (pileta sin jerga, cola larga de obra) y nunca sobre términos de una sola palabra genérica. |
| **Exacta** (`[arenado industrial]`) | Incluye variantes cercanas que **no se pueden desactivar**: errores de tipeo, singular/plural, raíces, acentos, abreviaturas, palabras funcionales agregadas y reordenamientos que no cambian el significado. Sigue siendo el control más fino disponible. | ✅ Base de la cuenta. **100% de General-Marca**, cabezas de Obra-Industrial y de Piletas. |

#### Los 5 motivos por los que la prohibición de amplia se sostiene (y no se matiza)

1. **Volumen insuficiente.** El argumento pro-amplia de 2026 es "Smart Bidding la compensa". Smart Bidding necesita 15-30 conversiones/mes para discriminar; esta cuenta arranca en **0 conversiones limpias** (el histórico está inflado por medición sucia) y con Maximizar clics, que ni siquiera optimiza a conversión. La amplia sin contención es gasto ciego.
2. **Evidencia propia.** En el histórico, prácticamente todo lo que gastó con 0 conversiones fue amplia: `arenado de metales` (12.356 / 0 conv), `zona norte` (6.180 / 0 conv, CPC ~1.545), `granallado` (6.138 / 0 conv), `servicios hogar`, `electricista`, `reformas`, `restauración de muebles`. No es dogma: es la radiografía de la propia cuenta.
3. **Evidencia externa 2026.** Los tests independientes de AI Max (la evolución de la amplia) lo muestran perdiendo contra frase **y** contra exacta en costo por conversión, y con adopción real marginal (~0,57% del gasto a nivel cuenta).
4. **Superficie oculta.** Cuanto más ancha la concordancia, mayor la porción de gasto que ni siquiera aparece en el informe de términos de búsqueda. Con exacta, la porción invisible es mínima.
5. **Bomba de tiempo de septiembre 2026.** Activar el interruptor de amplia a nivel campaña equivale a firmar la conversión automática de esa campaña a AI Max en semanas. Con AI Max encendido, la *expansión de URL final* mandaría tráfico de piletas a `/servicios` o a un caso de éxito, rompiendo el ruteo por landing que es la razón de ser de la campaña de Piletas. **Ya pasó en esta cuenta**: la auditoría del 28/07 encontró AI Max activo mandando clics a `/blog`, que no existe → 404 pagos.

#### El matiz que sí cambia la operación (importante)

La investigación 2026 **no** debilita la prohibición de amplia, pero sí **debilita la confianza en la frase**. La regla histórica del proyecto ("frase y exacta") se escribió cuando frase significaba "contiene la frase". Hoy no. Consecuencias operativas concretas:

- **Ninguna keyword de una sola palabra genérica va en frase.** `"arenado"` en frase es el sumidero documentado. Va solo como `[arenado]`.
- **La frase se reserva para consultas de 3+ palabras con intención propia** (`"sacar pintura de pileta"`, `"arenado de estructuras metálicas"`), donde el ensanchamiento agrega variantes útiles y no cambia de rubro.
- **Revisión de términos de búsqueda 2 veces por semana las primeras 4 semanas** — la frase también expande, y hay que verlo.

#### Nota técnica: `[arenado]` y `[arenados]` son variantes cercanas entre sí

Al ser singular/plural, ambas exactas son variantes cercanas y compiten internamente; Google elige una por Ad Rank. **Se cargan las dos igual**, porque cuando la consulta coincide literalmente con una keyword exacta, Google prioriza esa keyword — y eso mantiene el reporte separado (el histórico muestra CPA muy distintos: `arenados` ~2.813 vs `arenado` ~7.195). No es duplicación dañina; es trazabilidad.

---

### 4.2 Estructura de grupos: por qué 6 y no 8

La estructura objetivo del proyecto define 4 grupos dentro de Obra-Industrial. **Recomendación de lanzamiento: arrancar con 2.**

**La aritmética:** 5.000 ARS/día ÷ CPC histórico ~273 ARS ≈ **18 clics/día en toda la cuenta**. Obra-Industrial con 3.000 ARS/día compra ~11 clics/día. Repartidos en 4 grupos: **~2,7 clics/día por grupo**. Ningún grupo alcanza volumen para juzgar un RSA, una keyword ni un CPA en menos de un trimestre.

| Campaña | Presup./día | Grupos al arranque (5.000/día) | Grupos a plena escala (~10.000/día) |
|---|---|---|---|
| `AR-Search-Obra-Industrial` | 3.000 | `ag_pymes-galpon-in-situ` · `ag_obra-restauracion-estructuras` | + partir el segundo en `obra-restauracion` / `estructuras-tanques` / `industrial-limpieza` |
| `AR-Search-Piletas` | 1.250 | `ag_pileta-jerga` · `ag_pileta-sin-jerga` | igual (las dos audiencias exigen copy literalmente distinto) |
| `AR-Search-General-Marca` | 750 | `ag_genericos` · `ag_marca` | igual (landings distintas: `/servicios` vs `/`) |

**Criterio de partición:** un grupo se parte cuando **ese grupo solo** junta ≥15 conversiones/mes. No antes, y nunca "para ver mejor los datos" (el informe de términos de búsqueda y los segmentos ya dan esa visibilidad sin romper el aprendizaje).

**Por qué `pymes-galpon-in-situ` sí se mantiene separado** aunque el volumen sea bajo: es el trabajo más rentable por día según el dueño, necesita un RSA propio ("vamos con nuestro equipo a tu galpón") y su landing enfatiza otra cosa. Es una diferencia de mensaje real, no de prolijidad.

> ⚠️ **Advertencia sobre la "prioridad de puja" de `pymes-in-situ`.** El plan (`05-google-ads-operacion.md`) dice "favorecer al grupo con pujas". Bajo **Maximizar clics con tope de CPC** —la estrategia de arranque— las pujas por grupo y por keyword **se ignoran**: el tope es de estrategia, a nivel campaña. La prioridad de ese grupo en la Fase 1 se ejerce **solo** por composición de keywords y por calidad del RSA. Si se quiere prioridad de puja real desde el día 1, la única alternativa es CPC manual (y perder la optimización de clics). **Recomendación: aceptar la limitación en Fase 1** y recuperar la prioridad en Fase 2, cuando cada campaña tenga estrategia propia.

---

### 4.3 Keywords por grupo — listas para copiar y pegar

**Cómo se cargan:** `Campañas → [campaña] → [grupo] → Públicos, palabras clave y contenido → Palabras clave de la Búsqueda → botón + → seleccionar el grupo → pegar el bloque completo (una keyword por línea) → Guardar`.

**Sintaxis del pegado:** `"entre comillas"` = frase · `[entre corchetes]` = exacta · sin símbolos = amplia (**nunca usar**).

**Sobre acentos y tipeos:** la concordancia exacta y de frase absorben acentos, tildes y errores de tipeo como variantes cercanas. **No hace falta** cargar `"arenado de galpon"` y `"arenado de galpón"` por separado. (Ojo: esto **NO aplica a las negativas** — ver §4.7.)

---

#### CAMPAÑA 1 — `AR-Search-Obra-Industrial` (3.000 ARS/día)

##### Grupo `ag_pymes-galpon-in-situ` → `https://www.arenadoslucho.com/servicios`

*El aliado #1: PYME con galpón, terreno propio, sin quejas de vecinos, estructuras y flota. Incluye la variante "sin jerga" del metal (quitar óxido) porque el encargado de fábrica no siempre dice "arenado".*

```
[arenado industrial]
[arenado a domicilio]
[arenado in situ]
"arenado industrial"
"arenados industriales"
"arenado a domicilio"
"arenado in situ"
"arenado de galpón"
"arenado de galpones"
"empresa de arenado industrial"
"servicio de arenado industrial"
"arenado de camiones"
"arenado de acoplados"
"quitar óxido de metal"
"sacar óxido de metal"
"sacar el óxido del hierro"
"sandblasting"
"sandblasteo"
```
**18 keywords.** Notas:
- `"arenado industrial"` en **frase** es la ganadora histórica (~3.273/conv) y rinde **mejor que la exacta** (65.106 / 6 conv ≈ 10.851). Se cargan ambas para no perder la consulta literal, pero la expectativa es que la frase se lleve el volumen.
- `"arenado de camiones"` / `"arenado de acoplados"` son la **prueba de flota PYME**. ⚠️ Ver §4.6: obligan a afinar las negativas de `chasis`/`carrocería` para no bloquear al transportista.
- `sandblasteo` es la variante local más usada que **no** figura hoy en `03-keywords-maestro.md`.

##### Grupo `ag_obra-restauracion-estructuras` → `https://www.arenadoslucho.com/servicios`

*Fusiona obra/restauración + estructuras/tanques + limpieza industrial. Es el norte comercial (ticket alto) pero el de menor historial: casi todo es gap a validar.*

```
[arenado en obra]
[arenado de fachada]
[arenado de paredes]
[arenado de metal]
"arenado en obra"
"arenado de obra"
"arenado de paredes"
"arenado de ladrillo a la vista"
"arenado de ladrillos"
"arenado de fachada"
"arenado de fachadas"
"arenado de frente"
"arenado para pintar"
"arenado para repintar"
"arenado de vigas"
"arenado de estructuras metálicas"
"arenado de estructura metálica"
"arenado de tanques"
"arenado de silos"
"arenado de metal"
"arenado de metales"
"empresa de arenado"
"restauración de fachada"
"limpieza de ladrillo a la vista"
```
**24 keywords.** Notas:
- `"arenado de metal"` en frase: histórico ~6.487/conv, mejor que la exacta (20.947 / 1,5 conv). In-scope, se mantiene.
- `"arenado de tanques"` es la que más vigilancia pide: en Argentina "limpieza de tanques" arrastra intención de **tanque de agua domiciliario** (desinfección, potabilización), que es otro rubro. Por eso **no** se compra `"limpieza de tanques"` y se cargan negativas de campaña (§4.6).
- `"restauración de fachada"` y `"limpieza de ladrillo a la vista"` son entradas por el problema (el arquitecto no siempre dice "arenado"). Vigilar que no traigan pedidos de pintura/impermeabilización: el sitio dice explícitamente que **no pintamos ni revestimos**, y eso filtra.
- ⚠️ **Deliberadamente NO se compra `"limpieza industrial"` ni `"servicio limpieza industrial"`**: el CPA histórico (~784) es sospechosamente bajo y casi con seguridad es conversión basura (Local actions / page views). Volver a evaluarlo a los 60 días **con medición limpia**.

---

#### CAMPAÑA 2 — `AR-Search-Piletas` (1.250 ARS/día)

##### Grupo `ag_pileta-jerga` → `https://www.arenadoslucho.com/arenado-de-piletas`

*Ya saben que existe el arenado: incluye al contratista/piletero, que es el cliente recurrente (varias piletas por temporada).*

```
[arenado de pileta]
[arenado de piletas]
[arenado de piscina]
[arenado de piscinas]
"arenado de pileta"
"arenado de piletas"
"arenado de piscina"
"arenado de piscinas"
"arenado de pileta de hormigón"
"arenar pileta"
"limpieza de pileta para pintar"
"preparar pileta para pintar"
"preparar pileta para revestir"
"restaurar pileta"
"restaurar piscina"
```
**15 keywords.** Notas:
- `arenado de piletas` en exacta es el **lead más barato del historial** (4 conv / 2.156).
- ⛔ **`mantenimiento de piletas` queda FUERA a propósito.** Histórico: 3 conv / 8.847 (~2.949 con conversiones infladas → CPA real probablemente el doble o el triple). La intención dominante es **mantenimiento químico semanal**, un servicio que no prestamos. Igual criterio para `"limpieza de piletas"` sola y para `arenado pintura` (32.246 ARS / 75 clics / **1 conv** en frase — el segundo mayor sumidero del histórico después de `arenado`).
- ⛔ **`pintar pileta` / `pintura de piscina` quedan FUERA:** es pintado, no arenado. Ya fueron cortadas por la crítica adversarial del dossier (§4.6).

##### Grupo `ag_pileta-sin-jerga` → `https://www.arenadoslucho.com/arenado-de-piletas`

*El gap del negocio: el dueño de casa no sabe que se llama "arenado". Busca el problema. Es el único grupo donde la frase tiene un rol de descubrimiento genuino.*

```
[sacar pintura de pileta]
[quitar pintura de pileta]
[despintar pileta]
[decapar pileta]
"sacar pintura de pileta"
"sacar pintura de piscina"
"sacar la pintura de la pileta"
"quitar pintura de pileta"
"quitar pintura de piscina"
"remover pintura de pileta"
"despintar pileta"
"despintar piscina"
"decapar pileta"
"decapado de piscina"
"sacar pintura vieja de pileta"
```
**15 keywords.** Notas:
- ⚠️ **Volumen desconocido.** Ninguno de estos términos tiene historial en la cuenta. Antes de cargar, pasar la lista por `Herramientas → Planificación → Planificador de palabras clave`, con **ubicación = CABA + partidos del AMBA** e **idioma español**, y con las comillas/corchetes puestos (sin ellos el planificador estima como si fuera amplia y devuelve números fantasiosos). Es probable que la mitad quede sin impresiones: **eso está bien**, cuestan cero.
- ⛔ **`pileta descascarada` / `se descascara la pintura de la pileta` NO van a Ads.** El mapa maestro ya lo marca: son mejores para SEO y FAQ que para puja (intención informativa, sin decisión de compra). Se cubren con contenido en `/arenado-de-piletas` y `/preguntas-frecuentes`.

---

#### CAMPAÑA 3 — `AR-Search-General-Marca` (750 ARS/día)

##### Grupo `ag_genericos` → `https://www.arenadoslucho.com/servicios`

*100% exacta, sin una sola frase. Es donde vive el head term que quemó 208k: acá el control es todo.*

```
[arenado]
[arenados]
[arenadora]
[empresa de arenado]
[servicio de arenado]
[arenado buenos aires]
[arenados buenos aires]
```
**7 keywords.** Notas:
- `[arenados]` = **mejor CPA del histórico core** (~2.813). `[arenado]` = ~7.195. Ambos exactos, con tope de CPC de la campaña.
- `[arenadora]` **se compra** aunque suene a equipo: en exacta convirtió barato (1.999 / 14 clics / 3 conv). Funciona porque la lista `neg_equipos-insumos` bloquea *"alquiler de arenadora"*, *"venta de arenadora"* y *"comprar arenadora"* **en frase**, dejando pasar la consulta pelada de quien busca el servicio. Es el ejemplo canónico de cómo una negativa de frase protege una keyword exacta (§4.7).
- ⛔ **`taller de arenado` NO se compra** (histórico: 9.160 / 15 clics / **0 conv**) y además **pasa a ser negativa**: no hay taller y las piezas no se reciben (restricción logística del negocio). Ver §4.5.
- ⛔ **Términos de precio fuera:** `precio de arenado`, `valor arenado`, `arenado precio por m2`, `chorro de arena precio` — ~10.364 ARS con 0 conversiones en el histórico. No se compran **ni se negativizan** (§4.8).

##### Grupo `ag_marca` → `https://www.arenadoslucho.com/`

```
[arenados lucho]
[arenado lucho]
"arenados lucho"
```
**3 keywords.** Notas:
- Es la **única concesión de frase** en toda la campaña: la frase de marca captura `arenados lucho teléfono`, `arenados lucho opiniones`, `arenados lucho whatsapp` a costo casi nulo. El riesgo de contaminación es inexistente (nadie busca "lucho" en otro contexto comercial de arenado).
- Este grupo va a gastar muy poco y **está bien**: su función es defensiva, no de crecimiento. Su CPA se reporta **siempre por separado** — nunca promediar el CPA de marca con el de Obra-Industrial para decidir si escalar.

---

#### Totales y expectativa realista

| Campaña | Grupos | Keywords | Exactas | Frases |
|---|---|---|---|---|
| Obra-Industrial | 2 | 42 | 7 | 35 |
| Piletas | 2 | 30 | 8 | 22 |
| General-Marca | 2 | 10 | 9 | 1 |
| **Total** | **6** | **82** | **24** | **58** |

> **Expectativa:** con ~18 clics/día, entre el 60% y el 70% de estas keywords **no va a recibir ni una impresión el primer mes**. Es normal y no cuesta nada. A los **30 días** se hace la primera limpieza: pausar todo lo que tenga 0 impresiones y concentrar. A los **60 días**, pausar lo que tenga clics sin conversión y gasto acumulado >3× el CPA objetivo.

---

### 4.4 Arquitectura de negativas: qué va en cada nivel y por qué

Google ofrece tres lugares para cargar negativas, con propiedades distintas. Usarlos al azar es el error más común.

| Nivel | Límite | Propiedad clave | Qué se pone acá |
|---|---|---|---|
| **CUENTA** | 1.000 términos, **lista única** (no admite varias listas) | Aplica a **toda** campaña presente y futura, incluidas PMax/Smart si alguien las crea. **No se puede exceptuar una campaña.** | Solo lo que **jamás** va a ser deseable: empleo, técnicas, homónimos de otro rubro. |
| **LISTA COMPARTIDA** | 5.000 por lista · 20 listas por cuenta | Se edita una vez y se propaga a todas las campañas donde está aplicada. Reversible campaña por campaña. | Todo lo temático y todo lo que algún día podría levantarse: equipos, DIY, data-driven, ruteo. |
| **CAMPAÑA (suelta)** | 10.000 por campaña | Vive solo ahí y se desincroniza. | **Nada.** Reservado para emergencias de un día, y migrar a lista en la revisión semanal. |

**Regla del proyecto: el 100% de las negativas vive en el nivel cuenta o en una lista compartida.** Cero negativas sueltas.

#### Inventario de listas a crear

| Nombre de la lista | Aplicar a | Contenido |
|---|---|---|
| *(nivel cuenta — no es una lista)* | Toda la cuenta | Bloque A (empleo) + Bloque B (técnicas) + Bloque C (homónimos/vidrio) |
| `neg_equipos-insumos` | Las 3 campañas | Bloque D |
| `neg_diy-informacional` | Las 3 campañas | Bloque E |
| `neg_data-driven` | Las 3 campañas | Bloque F |
| `neg_RUTEO-piletas` | **Solo** Obra-Industrial + General-Marca | Bloque G |
| `neg_piletas-filtro` | **Solo** Piletas | Bloque H |

> ⚠️ El nombre `neg_RUTEO-piletas` lleva "RUTEO" en mayúsculas a propósito: si alguien alguna vez la aplica a la campaña de Piletas, **apaga el servicio más barato del negocio** y no hay ninguna alerta que lo avise. Los anuncios simplemente dejan de mostrarse.

---

### 4.5 Negativas de cuenta — bloques listos para pegar

**Ruta exacta:** `Administrador (ícono de engranaje, arriba a la derecha) → Configuración de la cuenta → sección "Palabras clave negativas" → botón + → pegar → Guardar`.
*(⚠️ A confirmar por captura: la etiqueta del menú varía entre despliegues es/es-419.)*

#### Bloque A — EMPLEO (crítico)

*Por qué sigue siendo crítico aunque se haya quitado la extensión de llamada: el clic se paga igual, y con `/contacto` siendo WhatsApp-first, el que busca laburo ahora manda un WhatsApp en vez de llamar. El problema cambió de canal, no desapareció.*

```
empleo
empleos
empleado
empleados
vacante
vacantes
changa
changas
sueldo
sueldos
cv
curriculum
currículum
rrhh
"recursos humanos"
"busco trabajo"
"busco empleo"
"necesito trabajo"
"quiero trabajar"
"trabajo de arenador"
"trabajos de arenador"
"arenador empleo"
"bolsa de trabajo"
"puesto de trabajo"
"oferta laboral"
"ofertas laborales"
"oferta de trabajo"
"ofertas de trabajo"
"se busca personal"
"se necesita personal"
"busca personal"
"trabajo disponible"
"trabajos disponibles"
"empleos disponibles"
computrabajo
zonajobs
bumeran
indeed
```
**38 términos.** Los de una palabra van en amplia (bloquean cualquier consulta que las contenga); los de dos o más van en **frase** para no bloquear al comprador (ver §4.8).

#### Bloque B — TÉCNICAS (servicio que no prestamos)

```
granallado
granallados
granalla
granallas
shotblasting
"shot blasting"
sa3
"sa 3"
"sa 2"
"sa 2.5"
"iso 8501"
iso8501
"norma iso"
"norma sspc"
"norma nace"
sspc
"metal blanco"
"grado sa"
"perfil de anclaje"
rugosidad
micras
micraje
"espesor de película"
"espesor de recubrimiento"
"medición de rugosidad"
"informe técnico"
"certificado de arenado"
certificación
certificado
"cabina de granallado"
```
**30 términos.** Notas:
- `granallado` y `granallados` van los dos: **las negativas no absorben plurales** (§4.7).
- `nace` va como `"norma nace"` en frase y **nunca** suelto: "nace" es una palabra corriente del español y en amplia bloquearía consultas legítimas.
- `certificado` / `certificación` filtran al comprador técnico que pide papeles. Es exactamente el cliente que se rechaza (caso naves ferroviarias).

#### Bloque C — HOMÓNIMOS DE OTRO RUBRO ⭐ **PROPUESTA NUEVA — requiere OK del dueño**

*En Argentina "arenado" es también el acabado esmerilado del **vidrio** (puertas, mamparas, vinilos "arenados"). Es un rubro entero que comparte la palabra. Hoy no está en `03-keywords-maestro.md` y es una fuga silenciosa: una consulta como "empresa de arenado de vidrios" **matchea la frase `"empresa de arenado"`** que sí compramos.*

```
vidrio
vidrios
cristal
cristales
esmerilado
esmerilada
blindex
mampara
mamparas
grabado
"vinilo arenado"
"papel arenado"
"efecto arenado"
```
**13 términos.** ⚠️ Verificar en el Planificador que ninguno de estos aparezca como modificador de una consulta industrial legítima antes de cargar (ej. "arenado de estructura de vidrio" — improbable, pero se chequea).

> **Total nivel cuenta: 81 términos** sobre un límite de 1.000. Espacio sobra; lo importante es no llenarlo con basura genérica que después no deje lugar para lo que importa.

---

### 4.6 Listas compartidas — bloques listos para pegar

**Ruta exacta para crear una lista:** `Herramientas (ícono de llave inglesa) → Biblioteca compartida → Listas de exclusiones → pestaña "Listas de palabras clave negativas" → botón + → poner el nombre → pegar los términos (uno por línea) → Guardar`.
**Ruta para aplicarla:** dentro de la lista → botón `Aplicar a campañas` → tildar las campañas → Aplicar.
*(⚠️ A confirmar por captura: en algunos despliegues la sección figura como "Datos compartidos" en vez de "Biblioteca compartida".)*

> ⚠️ **Trampa del alta desde la campaña:** si se agregan negativas desde `Campañas → Palabras clave negativas`, Google ofrece un checkbox "guardar en una lista". **Si no se tilda, la negativa queda suelta en esa campaña** y no se propaga a las otras dos. Siempre tildarlo y elegir la lista correcta.

#### Bloque D → lista `neg_equipos-insumos` (aplicar a las 3 campañas)

```
"alquiler de arenadora"
"alquiler de arenadoras"
"alquilar arenadora"
"venta de arenadora"
"venta de arenadoras"
"comprar arenadora"
"vendo arenadora"
"arenadora precio"
"arenadora usada"
"máquina de arenar"
"maquina arenadora"
"arena para arenado"
"arena sílice"
"venta de arena"
"óxido de aluminio"
"granate abrasivo"
abrasivo
abrasivos
compresor
compresores
hidrolavado
hidrolavadora
"cabina de arenado"
"pistola de arenado"
"boquilla de arenado"
"casco de arenado"
"repuestos de arenadora"
"tolva de arenado"
```
**28 términos.** Notas:
- **`arenadora` sola NO está en la lista** — solo sus frases de compra/alquiler. Esto es lo que permite comprar `[arenadora]` en exacta (§4.3).
- ⚠️ `"equipo de arenado"` / `"equipos de arenado"` se dejaron **fuera** a propósito: bloquearían "empresa de arenado con equipo propio", que es una consulta de comprador. Si aparecen en el informe de términos con intención de compra de máquinas, se suman entonces.
- `compresor` en amplia tiene un riesgo mínimo (bloquearía "arenado con compresor propio"). Se asume: el que escribe "compresor" quiere comprar o alquilar uno.

#### Bloque E → lista `neg_diy-informacional` (aplicar a las 3 campañas)

```
curso
cursos
capacitación
tutorial
tutoriales
casero
casera
diy
wikipedia
youtube
video
videos
"curso de arenado"
"como hacer"
"cómo hacer"
"como se hace"
"cómo se hace"
"como arenar"
"cómo arenar"
"hacerlo yo mismo"
"paso a paso"
"que es el arenado"
"qué es el arenado"
"que es arenado"
"significado de arenado"
"para que sirve el arenado"
"aprender a"
```
**27 términos.** Nota: `"que es el arenado"` se bloquea en **Ads** (histórico: campaña homónima, 9.092 ARS / 1 conv) pero se **cubre en SEO** — es exactamente el contenido de `/preguntas-frecuentes` y del bloque introductorio de la home. Tráfico informativo: sí, gratis; no, pago.

#### Bloque F → lista `neg_data-driven` (aplicar a las 3 campañas)

⚠️ **Cambio propuesto respecto de `03-keywords-maestro.md`.** El mapa maestro pone `chasis` y `carrocería` como negativas sueltas. Pero ahora se compra `"arenado de camiones"` y `"arenado de acoplados"`: una consulta como **"arenado de chasis de camión"** —un transportista PYME, exactamente el cliente objetivo— quedaría bloqueada. Se propone **acotar la negativa a la intención de detailing de autos** en vez de matar la palabra.

```
llanta
llantas
autopartes
"limpieza de chasis"
"limpieza de chasis y carrocería"
"chasis de auto"
"chasis de moto"
"carrocería de auto"
"arenado de auto"
"arenado de autos"
"arenado de moto"
"arenado de motos"
"arenado de llantas"
"chapa y pintura"
"auto clásico"
"restauración de autos"
"taller de arenado"
barato
"precio barato"
"lo más barato"
```
**20 términos.** Notas:
- ⚠️ **`"taller de arenado"` es propuesta nueva.** Doble fundamento: histórico (9.160 ARS / 0 conv) y operativo (**no hay taller**; las piezas sueltas no se reciben — restricción del dueño en `03-keywords-maestro.md` Cluster 5). Quien busca "taller" quiere llevar su pieza: no es cliente.
- 🔁 **Regla de reversión:** si a las 3 semanas el informe de términos muestra consultas de detailing de autos consumiendo >5.000 ARS con 0 conversiones, se revierte a `chasis` y `carrocería` en amplia (bloqueo total) y se acepta perder la cola de camiones. Anotar la decisión en `08-bitacora.md`.
- ⚠️ **`barato` es discutible.** El posicionamiento del negocio es "precio justo, sin vueltas" y hoy hace falta trabajo. Está en el mapa maestro, así que se respeta — pero **es la primera negativa a levantar** si falta volumen. Marcarlo así en la bitácora.

#### Bloque G → lista `neg_RUTEO-piletas` (aplicar **SOLO** a Obra-Industrial y General-Marca)

*Su función no es filtrar basura: es **empujar el tráfico de piletas a su campaña**, para que aterrice en `/arenado-de-piletas` y no en `/servicios` (que a propósito ya no habla de piletas).*

```
pileta
piletas
piscina
piscinas
alberca
albercas
natatorio
natatorios
```
**8 términos, todos en amplia** (en negativas de una sola palabra, amplia y frase son equivalentes — §4.7).

> ⛔ **ESTOS TÉRMINOS JAMÁS VAN A NIVEL CUENTA.** Si aparecen en la lista de cuenta o aplicados a la campaña de Piletas, se apaga el servicio más rentable del historial y no hay ninguna alerta. **Verificar antes de encender** que la cuenta no arrastre esta negativa de la configuración vieja.

#### Bloque H → lista `neg_piletas-filtro` (aplicar **SOLO** a Piletas)

*Dos funciones: (1) ruteo inverso hacia Obra-Industrial; (2) ⭐ **propuesta nueva** — filtrar los homónimos de "pileta" en el español rioplatense. En Argentina "pileta" es también la **bacha de cocina o de lavadero**: una consulta como "sacar pintura de pileta de cocina" matchea nuestra frase palabra por palabra.*

```
"de cocina"
"de lavar"
"de lavadero"
bacha
bachas
mesada
"acero inoxidable"
"pileta inflable"
"pileta desmontable"
"pileta de lona"
"pileta estructural"
pelopincho
intex
"construcción de pileta"
"construcción de piletas"
"construir pileta"
"hacer una pileta"
"empresa de piletas"
"pileta de fibra"
galpón
"estructura metálica"
fachada
"ladrillo a la vista"
```
**23 términos.** Notas:
- No hace falta cargar `"pileta de cocina"`: `"de cocina"` en frase ya la bloquea. Ídem lavar/lavadero.
- `"acero inoxidable"` va **solo acá** y nunca a nivel cuenta: bloquearía "arenado de tanque de acero inoxidable", que es un trabajo industrial legítimo.
- `pelopincho` / `intex` = marcas argentinas de piletas de lona/plástico. No son clientes.
- La familia "construcción de pileta" filtra a quien quiere **construir** una pileta nueva, no restaurarla.
- ⚠️ **`"pileta de fibra"` a confirmar:** ¿se arenan piletas de fibra de vidrio o solo de hormigón? Si se arenan, **sacar este término de la lista**. Mismo caso con "sacar venecitas / revestimiento": si el arenado no quita venecitas, conviene sumar `"sacar venecitas"` y `"sacar revestimiento"` a este bloque.

---

### 4.7 Negativas: amplia vs frase vs exacta — mecánica y efecto

La sintaxis del pegado es la misma que la de las keywords positivas, pero **el comportamiento es distinto y muchísimo más literal**.

| Cómo se carga | Sintaxis | Qué bloquea | Ejemplo de esta cuenta |
|---|---|---|---|
| **Amplia** (sin símbolos) | `granallado` | Toda consulta que contenga **todas** esas palabras, en **cualquier orden**, con lo que sea alrededor. | Bloquea "arenado y granallado zona sur" y "granallado arenado precio". **NO** bloquea "granallados". |
| **Frase** | `"busco trabajo"` | Consultas que contengan esa **secuencia exacta de palabras, en ese orden**, con otras alrededor. | Bloquea "busco trabajo de arenador". **NO** bloquea "trabajo de arenado en galpón" (que es una consulta de comprador). |
| **Exacta** | `[limpieza de piletas]` | **Solo** la consulta idéntica, nada más. | Bloquea la búsqueda "limpieza de piletas" (intención de mantenimiento químico) pero deja pasar "limpieza de pileta para pintar", que sí es nuestra. |

#### Las 4 reglas que hay que tener grabadas

1. **Las negativas NO tienen variantes cercanas.** Ni plurales, ni errores de tipeo, ni sinónimos, ni acentos. `granallado` **no** bloquea `granallados`; `carrocería` **no** bloquea `carroceria` sin tilde. **Consecuencia operativa:** cargar singular **y** plural, y con **y sin** tilde, en todo término crítico. Por eso los bloques de arriba parecen redundantes: no lo son.
2. **En negativas de UNA sola palabra, amplia y frase son equivalentes.** `pileta` y `"pileta"` bloquean exactamente lo mismo. La distinción solo importa a partir de 2 palabras.
3. **La amplia con 2+ palabras es un Y lógico sin orden — y es más ancha que la frase.** Ejemplo del peligro real: cargar `pintura pileta` en **amplia** bloquearía "sacar pintura de pileta", **que es una keyword que compramos**. La misma idea en frase (`"pintura de pileta"`) es inofensiva porque exige la secuencia.
4. **Las negativas se aplican ANTES de cualquier expansión de IA.** Cualquier consulta que contenga una negativa se excluye por más "semánticamente relevante" que la considere el sistema. Es la única defensa que sobrevive incluso si algún día se enciende AI Max por error o por migración forzada.

#### Cuándo usar cada una en esta cuenta

- **Amplia:** palabras que son tóxicas **siempre**, sin contexto que las salve → `granallado`, `empleo`, `vidrio`, `curso`, `pileta` (en la lista de ruteo).
- **Frase:** cuando la palabra suelta **también la usa el comprador** → `"se busca personal"` (protege "arenado personal/particular"), `"alquiler de arenadora"` (protege `[arenadora]`), `"chasis de auto"` (protege "arenado de chasis de camión").
- **Exacta:** cuando la consulta pelada es basura pero cualquier extensión de ella es buena → `[limpieza de piletas]`, `[arenado precio]`. Se usa poco: es la más quirúrgica y la más frágil.

---

### 4.8 Trampas — qué NO negativizar (y por qué)

| ⛔ No negativizar | Por qué | Qué hacer en su lugar |
|---|---|---|
| **`pileta` / `piscina` / `alberca` a nivel CUENTA** | Es el **core del negocio** desde el 26/07/2026 y el lead más barato del historial. A nivel cuenta apagaría la campaña de Piletas entera, en silencio. | Lista `neg_RUTEO-piletas`, aplicada **solo** a Obra-Industrial y General-Marca. |
| **`arenadora` sola** | En exacta convirtió barato (1.999 / 3 conv). | Negativizar solo las frases de compra/alquiler: `"alquiler de arenadora"`, `"venta de arenadora"`, `"comprar arenadora"`. |
| **`zona norte`** | Bloquearía "arenado industrial zona norte", una consulta geo-calificada perfecta. (Que en el histórico haya gastado 6.180 con 0 conv es culpa de estar en **amplia**, no del término.) | Nada: con frase/exacta el problema desaparece solo. |
| **`contratar` / `personal` / `puesto` sueltos** | Los usa el comprador: "contratar servicio de arenado", "arenado personal", "arenado particular". | Frases completas: `"se busca personal"`, `"puesto de trabajo"`. |
| **`trabajo` suelto** | "Trabajos de arenado en galpón", "trabajo de arenado de fachada" son consultas de comprador. | `"busco trabajo"`, `"trabajo de arenador"`, `"bolsa de trabajo"` en frase. |
| **`limpieza` suelta** | Mataría `"limpieza de ladrillo a la vista"` y toda la familia de limpieza industrial. | Solo las frases fuera de rubro: `"limpieza de chasis"`, `"limpieza de piletas"` (exacta). |
| **`precio` / `presupuesto`** | El encargado de PYME y el arquitecto los usan constantemente. Que los términos de precio no hayan convertido en el histórico (~10.364 / 0 conv) es un problema de **puja y de landing**, no de intención. | **No comprarlos** como keywords y vigilarlos en el informe de términos. Si drenan, negativa de campaña, no de cuenta. |
| **`madera` / `mueble` / `reja` / `portón`** | Son trabajos que el negocio **acepta si llegan** (Cluster 5). Bloquearlos a nivel cuenta cierra una puerta gratis en un momento donde hace falta trabajo. | No comprar esas keywords (ROI histórico malo). Vigilar en el SQR; si drenan >5.000 ARS sin conversión, entonces sí negativa de **campaña**, no de cuenta. |
| **`chasis` / `carrocería` en amplia** | Bloquearían "arenado de chasis de camión", que es el trabajo de flota PYME que sí queremos (§4.6). | Frases acotadas a la intención de auto: `"chasis de auto"`, `"limpieza de chasis"`, `"chapa y pintura"`. |
| **(riesgo inverso) Comprar un término técnico como KEYWORD** | Ya se probó: `granallado` en amplia gastó 6.138 ARS con 0 conversiones. Prometer lo que no se hace no solo quema el clic, quema la llamada. | Todos los técnicos están como negativa de cuenta (Bloque B), no como keyword. |

> ⚠️ **La trampa que borra negativas sola.** En `Recomendaciones → Aplicación automática` existe la opción **"Quitar palabras clave negativas en conflicto"**. Si está encendida, Google puede **borrar** una negativa de empleo o técnica porque "entra en conflicto" con una keyword. Debe estar en **OFF**, igual que todo el resto de la aplicación automática, verificado por captura antes de encender y re-verificado cada mes.

---

### 4.9 Experimento controlado de concordancia amplia (si algún día se plantea)

La regla se mantiene, pero conviene dejar por escrito **bajo qué condiciones se revisaría**, para que no se abra la discusión cada vez que Google lo recomiende.

**Condiciones de entrada — las tres a la vez, sin excepción:**
1. ≥30 conversiones `contact_whatsapp` **limpias** por mes, dos meses consecutivos.
2. Estrategia de puja basada en conversiones estable (Maximizar conversiones o CPA objetivo funcionando, no en aprendizaje).
3. Presupuesto ≥15.000 ARS/día en la campaña donde se probaría.

**Diseño del experimento (si se cumplen):**
- Usar `Campañas → Experimentos → Experimento personalizado`, split **50/50**, nunca encender amplia sobre la campaña productiva.
- **UN solo grupo de anuncios**, **una sola keyword** en amplia (candidata: `arenado industrial`, la ganadora histórica).
- ⛔ **Jamás activar el interruptor de "concordancia amplia a nivel campaña"**: dispara la auto-migración a AI Max de septiembre de 2026, sin opción de rechazo.
- Todas las listas de negativas aplicadas al brazo experimental.
- **Duración mínima:** 4 semanas o 100 clics por brazo, lo que llegue después.
- **Criterio de corte inmediato:** CPA del brazo amplia >1,25× el del control, **o** >30% de términos irrelevantes en el informe de términos del brazo experimental.
- Resultado a `08-bitacora.md` sí o sí, gane o pierda.

---

### 4.10 Mantenimiento de negativas — cadencia y fuentes

| Frecuencia | Tarea | Ruta / herramienta |
|---|---|---|
| **2×/semana las primeras 4 semanas**, después semanal | Informe de términos de búsqueda → sumar negativas a la lista compartida que corresponda (nunca sueltas) | `Campañas → Estadísticas e informes → Términos de búsqueda` |
| Semanal | N-gram sobre los términos: detecta patrones que a nivel término individual no superan el umbral de privacidad y por eso no se ven | Script `ads-scripts/03-ngram-terminos.js` (ya instalado, reporte por mail los lunes) |
| Semanal | Medir el **gasto ciego**: costo total de la campaña − suma del costo de los términos visibles. Esa diferencia es lo que se pagó sin poder verlo | Comparar la tabla de Términos de búsqueda contra la fila de la campaña |
| Mensual | `Estadísticas e informes → Estadísticas (Insights)` → tarjeta de categorías de búsqueda: ¿el tráfico deriva a obra/PYME (deseado) o a empleo/insumos/DIY (fuga)? | Es la única vista que muestra los temas de bajo volumen que el informe clásico oculta |
| Mensual | Verificar que las 5 listas siguen aplicadas a las campañas correctas y que la lista de cuenta no creció sola | `Herramientas → Biblioteca compartida → Listas de exclusiones` |
| Mensual | Verificar que **`neg_RUTEO-piletas` NO** está aplicada a la campaña de Piletas | Idem |

**Antes de negativizar cualquier término nuevo, pasarlo por estos 3 filtros:**
1. ¿Es el lenguaje del comprador **sin jerga**? ("sacar pintura", "despintar", "decapar", "sacar óxido", "se descascara") → **no negativizar nunca**, es el gap más valioso del negocio.
2. ¿La palabra suelta también la usa un comprador? → cargar en **frase**, no en amplia.
3. ¿Podría quererse levantar en 6 meses? → va a **lista compartida**, no a nivel cuenta.

---

### 4.11 Checklist de ejecución (orden exacto, antes de encender)

1. ☐ **Verificar que la cuenta NO arrastre `pileta`/`piscina` como negativa** (nivel cuenta o listas viejas). Captura.
2. ☐ Cargar las negativas de **nivel cuenta**: Bloques A + B + C (81 términos). Captura.
3. ☐ Crear las **5 listas compartidas** con los Bloques D, E, F, G, H. Captura de la pantalla de listas.
4. ☐ **Aplicar** cada lista a sus campañas — prestando especial atención a que `neg_RUTEO-piletas` **no** toque la campaña de Piletas y que `neg_piletas-filtro` **solo** toque Piletas. Captura de la columna "Campañas" de cada lista.
5. ☐ `Recomendaciones → Aplicación automática` → **todo en OFF**, con foco en "Quitar palabras clave negativas en conflicto", "Agregar palabras clave nuevas" y "Usar palabras clave de concordancia amplia". Captura.
6. ☐ Verificar en `Configuración` de cada campaña que el interruptor de **concordancia amplia a nivel campaña esté APAGADO** y que **AI Max esté apagado** (los tres parámetros). Captura.
7. ☐ Cargar las **keywords por grupo** (bloques de §4.3). Verificar que ninguna keyword quedó en amplia: `Palabras clave → columna "Tipo de concordancia"` → filtrar por "Amplia" → debe dar **0 resultados**. Captura.
8. ☐ Verificar el ruteo con `Herramientas → Solución de problemas → Vista previa y diagnóstico de anuncios`, en español y ubicación CABA: una consulta de pileta debe disparar el anuncio de la **campaña de Piletas** (no la de Obra), y una consulta de empleo **no debe disparar nada**.
   > ⚠️ **Nunca googlear los propios términos para probar:** genera impresiones sin clic, baja el CTR y con eso el CTR esperado, que pesa ~39% del Nivel de calidad. Es plata real.
9. ☐ Registrar en `08-bitacora.md`: fecha, cantidad de negativas por bloque, listas creadas y a qué campañas se aplicaron, y los 3 bloques propuestos nuevos aprobados o rechazados por el dueño.

---

### 4.12 Cambios propuestos a `03-keywords-maestro.md`

Esta sección introduce 5 cambios respecto del mapa maestro vigente. Ninguno se ejecuta sin el OK del dueño; todos van a bitácora.

| # | Cambio | Fundamento |
|---|---|---|
| 1 | **Agregar bloque "homónimos de otro rubro"** (vidrio, cristal, esmerilado, blindex, mampara, grabado, vinilo arenado) a las negativas de cuenta | El arenado de vidrio es un rubro entero que comparte la palabra y hoy no está bloqueado. Fuga silenciosa vía la frase `"empresa de arenado"`. |
| 2 | **Agregar bloque "homónimos de pileta"** (bacha, mesada, de cocina, de lavar, de lavadero, pelopincho, intex, inflable, desmontable) a la campaña de Piletas | "Pileta" es también la bacha de cocina en el español rioplatense. Matchea nuestras frases palabra por palabra. |
| 3 | **Agregar `"taller de arenado"` como negativa** | Histórico 9.160 ARS / 0 conv **y** restricción operativa: no hay taller, las piezas no se reciben. |
| 4 | **Acotar `chasis` / `carrocería`** de negativas sueltas a frases de intención de auto | Ahora se compra `"arenado de camiones"`: la negativa suelta bloquearía "arenado de chasis de camión", el cliente de flota PYME. Con regla de reversión a 3 semanas. |
| 5 | **Agregar `sandblasteo`** como keyword (hoy solo figura `sandblasting`) | Es la variante local más usada en Argentina. |

---

### ⚠️ A confirmar antes de ejecutar

- **¿Se arenan piletas de fibra de vidrio, o solo de hormigón?** Define si `"pileta de fibra"` es negativa o keyword.
- **¿El arenado quita venecitas / revestimiento, o solo pintura?** Define si `"sacar venecitas"` y `"sacar revestimiento de pileta"` van a negativas.
- **¿La cuenta arrastra `pileta`/`piscina` como negativa de la configuración vieja?** Bloqueante: hay que verificarlo por captura antes de encender.
- **¿Se aprueban los 3 bloques de negativas nuevos** (vidrio, homónimos de pileta, taller) y el acotamiento de `chasis`/`carrocería`?
- **¿Se arranca con 2 grupos en Obra-Industrial (recomendado) o con los 4 del plan original?** Es decisión del dueño; la recomendación se basa en volumen de clics disponible, no en un cambio de criterio.
- **Volumen real de las keywords sin jerga de pileta:** nunca se midió. Pasar la lista por el Planificador con geo AMBA e idioma español antes de cargar.
- **Etiquetas exactas de la UI en es-419** (Biblioteca compartida vs Datos compartidos; Listas de exclusiones vs Listas de palabras clave negativas): verificar por captura en la ejecución guiada.
- **`"servicio limpieza industrial"`:** CPA histórico ~784 casi con seguridad inflado por conversiones basura. Reevaluar a los 60 días con medición limpia antes de comprarlo.

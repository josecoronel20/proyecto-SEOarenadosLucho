# Meta Ads — plan completo de implementación

> **Estado: PROPUESTA. Nada de esto está ejecutado.** Escrito el 06/10/2026.
> No existe cuenta publicitaria, Business Manager, página de Facebook, Instagram
> ni píxel. Meta arranca de cero.
>
> Todo el copy de este archivo está verificado contra
> [`contexto/21-realidad-operativa.md`](../21-realidad-operativa.md) y contra la
> lista de bloqueo de [`18-copy-ads.md`](./18-copy-ads.md) §Bloqueo.
> **Ninguna frase nueva afirma nada que no esté en `21-realidad-operativa.md`.**

---

## 1. Por qué Meta no se trabaja como Google

Esta es la decisión que gobierna todo lo demás, y si se ignora el canal se quema.

| | Google Ads | Meta Ads |
|---|---|---|
| Qué hace | **Captura** demanda que ya existe | **Crea** demanda que no existía |
| Quién segmenta | La **keyword** | El **creativo** |
| Estado mental | "Necesito arenar una pileta" | Está mirando fotos de la familia |
| Precio | CPC ~350 ARS | CPM barato, clic mucho más barato |
| Lo que decide todo | Puja y nivel de calidad | **La foto** |

**Consecuencia operativa:** en Meta no se compra una intención, se interrumpe a
alguien. La foto del antes/después de una pileta descascarada frena a exactamente
una persona: la que tiene una pileta descascarada. **La foto ES la segmentación.**
Por eso en este plan los públicos son anchos y el trabajo está en el creativo —
al revés de Google, donde el trabajo está en la keyword y la puja.

### El comprador de piletas no sabe cómo se llama esto

`00-proyecto-general.md` lo dice textual: *"No sabe que el servicio se llama
'arenado'. Busca el problema"*. En Google eso se resuelve comprando
`"sacar pintura de pileta"`. **En Meta se resuelve no diciendo "arenado" en la
primera línea.** Se dice el problema con sus palabras, y recién después el oficio.

### Lo que esa persona tiene en la cabeza

Dos opciones, y las dos malas:

1. **Pintar encima otra vez** — y al verano siguiente está igual.
2. **Romper todo y hacerla de nuevo** — carísimo y da miedo.

**El anuncio existe para mostrarle una tercera que no sabe que existe.** Ese es el
trabajo, no "vender arenado".

### Y el de obra tiene un problema distinto

El dueño de galpón no sufre por el óxido. Sufre porque **la cosa no se puede
mover**: la cabriada está amurada al techo, el acoplado mide 12 metros. Sus
opciones son mandarlo a arenar afuera (desarmar + flete + parar producción) o que
un pintor lo lije a mano (resultado malo).

**"Vamos a tu galpón, no trasladás nada" no es una ventaja: es el producto entero.**
Y está respaldado por una restricción dura del negocio — **no hay taller**
(`00-proyecto-general.md`:38-40).

---

## 2. La arquitectura, y la jugada que la hace barata

```
      Google Ads (ya corriendo, ~120 clics/semana al sitio)
                          │
                          ▼
                  Píxel de Meta  ───────────┐
                  (sin gastar un peso)      │
                                            ▼
Meta ─ MT-Piletas ──► WhatsApp      MT-Marca-Remarketing
       MT-Obra-PYME ─► WhatsApp     (al tráfico que YA pagó Google)
```

**El remarketing de Meta se paga con el tráfico que ya comprás en Google.** Las
120 personas que entran por semana desde Google y no escriben (la mayoría) se
vuelven un público de Meta gratis, en cuanto el píxel esté puesto. Reimpactarlas
en Facebook cuesta una fracción de los 350 ARS por clic que cuestan en Google.

Es, lejos, la campaña con mejor retorno de las tres — y nadie la pidió.

### Click-to-WhatsApp: por qué el canal ya está resuelto

El negocio tiene **un solo canal de conversión: WhatsApp**. Meta tiene campañas
que mandan directo a WhatsApp y **cuentan las conversaciones de forma nativa, sin
píxel**. O sea:

- Funciona desde el día 1, sin esperar la medición.
- Saca la landing del medio: menos pasos, menos pérdida.
- El lead cae en el canal que el negocio ya atiende.
- Y el mensaje llega **pre-escrito**, lo que resuelve la atribución sin tocar código.

⚠️ **Decisión que es del dueño, no mía:** Click-to-WhatsApp **no muestra el número**
(Meta abre el chat solo), pero sí se lo entrega a Meta. El proyecto tiene una
decisión escrita de **no publicar el teléfono** porque *"trajo llamadas de gente
buscando empleo"* (`PRODUCT.md`:57). Click-to-WhatsApp no rompe esa decisión —
nadie ve el número — pero conviene que esté dicho.

⛔ **Lo que NO se usa, y por qué:**
- **Formularios instantáneos de Meta** — el formulario se eliminó del sitio el
  28/07 por decisión explícita, y *"no reintroducir el formulario sin decisión del
  dueño"* (`03-rutas-y-paginas.md`:195).
- **Botón "Llamar"** — el teléfono no es público.

---

## 3. Fase 0 — antes de gastar un peso

Esta cuenta ya cometió una vez el error de gastar con la medición rota: 2,9 M al
año con datos de conversión que no servían. **No se repite con otro logo.**

| # | Tarea | Quién | Bloquea |
|---|---|---|---|
| 0.1 | Crear **Business Manager** "Arenados Lucho" | Dueño | todo |
| 0.2 | Crear/reclamar **Página de Facebook** y vincular **Instagram** | Dueño | todo |
| 0.3 | Crear **cuenta publicitaria** en **ARS**, zona horaria **GMT-3** | Dueño | todo |
| 0.4 | Vincular el **WhatsApp Business** del negocio a la Página | Dueño | las 3 campañas |
| 0.5 | **Verificar el dominio** `arenadoslucho.com` en Business Manager | Guiado | píxel y remarketing |
| 0.6 | Crear el **píxel** y cargarlo **como tag de GTM**, nunca en el código | Guiado | remarketing |
| 0.7 | Tag de evento `Lead` disparado por `contact_whatsapp` en GTM | Guiado | optimización por conversión |
| 0.8 | Agregar Meta a la **política de privacidad** | Código | legal |
| 0.9 | Arreglar `origenTrafico.ts` (ver 3.1) | Código | atribución |
| 0.10 | Pedir las **fotos en alta** (ver 3.2) | Dueño | los creativos |

### 3.1 🔴 Un bug real que hay que arreglar antes de encender

`src/lib/origenTrafico.ts`:33-36 marca el tráfico como "ads" si ve
`utm_medium=cpc`, y la línea 84 antepone al mensaje de WhatsApp:
**"Hola, vi su anuncio en Google."**

Si Meta se etiqueta con la convención de Google, **cada lead de Meta va a llegar
diciendo que vino de Google.** La atribución queda dada vuelta y no hay forma de
saberlo mirando el inbox.

**Dos arreglos, y hay que hacer los dos:**

1. **UTM de Meta distinto** — nunca `utm_medium=cpc`:
   ```
   utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
   ```
2. **`origenTrafico.ts` tiene que reconocer `fbclid` y `utm_source=meta`**, y
   anteponer *"Hola, vi su anuncio en Facebook/Instagram."*

Mientras tanto, el **mensaje pre-escrito de Click-to-WhatsApp** resuelve la
atribución solo (ver 5.1). Es el mismo truco que ya usa el sitio, y es la única
atribución real que este negocio tiene — `21-realidad-operativa.md`:185 lo
documenta: *"sirve para los que escriben, no para los que llaman"*.

### 3.2 🔴 Las fotos no alcanzan para Meta

Las imágenes del repo están casi todas en **828×828**. Meta pide **1080×1080** como
mínimo y **1080×1350** para ganar pantalla en el feed. Escalar 828 → 1080 queda
blando, y en Meta una foto blanda es plata tirada: el creativo es la segmentación.

| Carpeta | Tiene | Sirve para |
|---|---|---|
| `arenadoParticular/Piletas` | 6 fotos, **3 pares antes/después** | ⭐ Piletas. Es el mejor material del repo. |
| `services/arenadoFachadas` | 11, **4 pares etiquetados** + 1 vertical 9:16 | Marca y obra residencial |
| `arenadoParticular/Piezas` | cabriadas antes/después | ⭐ PYME (cabriada = estructura de galpón) |
| `arenadoParticular/Vehículos` | acoplado antes (`2472`) / después (`2473`) | ⭐ PYME |
| `arenadoIndustrial/Tanque` | 6, todas exteriores | Obra/PYME |
| — | **no hay foto de galpón como sujeto** | hueco |

**Lo que hay que pedirle al dueño, en orden de impacto:**

1. **Las fotos originales del celular**, sin reducir. Las del repo se achicaron para
   la web; los originales están en el teléfono a 3000 px o más.
2. **Que etiquete los 3 pares de piletas** (cuál es antes y cuál es después). Hoy
   se deducen por número de archivo, y publicarlos al revés sería ridículo.
3. ⭐ **El pedido más barato y más rentable de todo este plan: que filmen.**
   20-30 segundos en vertical, con el celular, del arenador sacando la pintura de
   una pileta. Hay 2 equipos trabajando todos los días. **El video de la
   transformación es el idioma nativo de Reels** y no cuesta nada producirlo. Una
   foto fija compite con todo lo que hay en el feed; un chorro de arena sacando
   pintura, no.

⚠️ **Regla que no se negocia** (`21-realidad-operativa.md`:157,160,165): *"Solo
fotos reales de trabajos propios. Nunca una imagen generada por IA ni de banco."*
Si falta una foto, **se pide la foto, no se genera**.

---

## 4. Los 8 anuncios

> Formato Meta: la **primera línea del texto principal** es casi todo — en celular
> se corta cerca de los 125 caracteres y ahí aparece "ver más". Todas las primeras
> líneas de abajo entran completas.
>
> Todo verificado contra la lista de bloqueo: sin `granallado`, `sa3`, `iso 8501`,
> `metal blanco`, `perfil de anclaje`, `rugosidad`, `micras`, `certific-`, `norma`,
> `garantizamos`, `mediciones`. Sin "contenemos el polvo", sin "sumamos equipos",
> sin "años de experiencia", sin "sacamos el revestimiento".

### 4.1 Piletas

#### P1 — "El tercer camino" ⭐ *el principal*

> **Texto principal**
> Si la pintura de la pileta se descascara, pintar encima no sirve: al verano siguiente está igual.
>
> Sacamos toda la pintura vieja del hormigón, en tu casa, con equipo propio. Te la dejamos limpia y pareja, lista para que la repintes o la revistas. Sin lijar a mano ni rascar.
>
> Una pileta estándar queda lista en el día. Trabajamos en CABA y todo el AMBA.
>
> Mandanos una foto por WhatsApp y te decimos qué necesita. La visita y el presupuesto son sin costo.
>
> **Título:** La pileta, lista para pintar
> **Descripción:** Precio cerrado por pileta
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** par antes/después de pileta (`IMG_2454` → `IMG_2455`)

**Por qué:** ataca directo el modelo mental equivocado ("pinto encima"). Es el
único de los tres que *enseña* algo, y por eso es el que debería ganar.

#### P2 — "El reloj de la temporada"

> **Texto principal**
> Para tenerla lista en diciembre, el trabajo se hace ahora.
>
> Vamos a tu casa, sacamos toda la pintura vieja del hormigón y te la dejamos lista para repintar o revestir. Pileta estándar, lista en el día.
>
> 2 equipos con compresores propios. CABA y todo el AMBA.
>
> Mandanos una foto por WhatsApp y coordinamos la visita. Sin costo.
>
> **Título:** ¿La querés lista para el verano?
> **Descripción:** Visita y presupuesto sin costo
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** carrusel — antes · después · equipo trabajando

**Por qué:** urgencia **real**, no inventada. La temporada va de agosto a diciembre
(`PRODUCT.md`:38) y la landing ya tiene ese mismo mensaje. Caduca sola en febrero:
**rotar el bloque en marzo** igual que se rota el de la landing.

#### P3 — "Pileteros" *(fase 2)*

> **Texto principal**
> Si arreglás piletas, el arenado te lo hacemos nosotros.
>
> Vamos con equipo propio, sacamos toda la pintura vieja del hormigón y te la entregamos lista para que la revistas o la pintes. Precio cerrado por pileta: lo cargás a tu presupuesto sin sorpresas.
>
> Tenemos 2 equipos: en temporada podemos con varias seguidas.
>
> Escribinos por WhatsApp y coordinamos.
>
> **Título:** Arenado para pileteros
> **Descripción:** Trabajamos con pileteros
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** después, limpio y parejo (el "producto terminado" que él revende)

**Por qué:** el piletero es **cliente recurrente** — varias piletas por temporada
(`PRODUCT.md`:11-17). Un cliente vale 5 trabajos, no uno. Y la pregunta "¿sos
piletero?" filtra sola, sin segmentación.

### 4.2 Obra / PYME con galpón

#### O1 — "No hace falta moverlas" ⭐ *el principal*

> **Texto principal**
> ¿Tenés estructuras oxidadas que no podés mover? No hace falta moverlas.
>
> Vamos a tu galpón con equipo y compresores propios. Sacamos el óxido y la pintura vieja ahí mismo y dejamos el metal limpio y parejo, listo para el revestimiento que le pongas. No trasladás nada a ningún taller.
>
> Cabriadas, estructuras, camiones, acoplados y hierros. CABA y todo el AMBA.
>
> Visita y presupuesto sin costo. Escribinos por WhatsApp.
>
> **Título:** Arenado en tu galpón
> **Descripción:** No trasladás nada
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** cabriada antes/después, o el acoplado `IMG_2472` → `IMG_2473`

**Por qué:** dice el producto entero en la primera línea. Y "no trasladás nada" no
es una promesa de marketing — es la consecuencia de que el negocio **no tiene
taller**, o sea que es imposible de incumplir.

#### O2 — "El polvo, dicho antes" ⭐ *el que nadie más escribe*

> **Texto principal**
> El arenado hace polvo. No se puede evitar, es parte del trabajo — y por eso te lo decimos antes y no después.
>
> En la visita te marcamos exactamente qué tapar y hasta dónde llega. El cerramiento lo ponés vos; nosotros vamos con el equipo, arenamos lo que haya que arenar y al terminar retiramos la arena gruesa.
>
> Estructuras, máquinas, camiones y acoplados, en tu planta, con equipo propio.
>
> Escribinos por WhatsApp y coordinamos la visita. Sin costo.
>
> **Título:** Te decimos qué tapar, antes
> **Descripción:** Visita y presupuesto sin costo
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** `arenando-fachada-altura` (el polvo se ve) o el arenador en andamio

**Por qué:** este es el anuncio más valioso de los ocho, y sale directo de
`21-realidad-operativa.md`:34-44. **"Protegemos la zona" fue una de las cuatro
afirmaciones falsas que se publicaron, y el archivo la llama "la peor"** porque
crea una expectativa que se rompe en el lugar.

Darlo vuelta y decir la verdad hace tres cosas a la vez: no miente, se diferencia
de todo competidor que promete contención, y **filtra al cliente que después iba a
reclamar.** La frase está aprobada textual en el archivo.

#### O3 — "El resultado real"

> **Texto principal**
> El arenado saca el óxido. No rellena el metal: si estaba picado, va a quedar limpio y parejo, pero picado. Preferimos decírtelo antes de ir.
>
> Lo que sí hacemos: vamos a tu galpón o planta con equipo propio y sacamos óxido y pintura vieja de estructuras, camiones, acoplados y hierros. También tanques y silos por fuera, con la planta andando.
>
> Precio cerrado por trabajo. Visita sin costo en CABA y el AMBA.
>
> **Título:** Arenado sin vueltas, in situ
> **Descripción:** Precio cerrado por trabajo
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** tanque exterior con el arenador trabajando

**Por qué:** gestiona la expectativa que más decepciona (`21-realidad-operativa.md`:150-153)
y **filtra al comprador técnico**, que es lo que `.cursorrules`:13 pide
explícitamente. El que busca Sa3 se va solo, sin gastarnos un clic ni una visita.

⚠️ **"tanques y silos por fuera" está escrito así a propósito.** El interior de
tanques **sí se hace**, pero como subcontratistas y bajo permiso ajeno: publicarlo
sería la quinta afirmación falsa (`21-realidad-operativa.md`:112-140). **Si alguien
pregunta por interiores en el chat, la respuesta no es "sí".**

### 4.3 Marca

#### M1 — Remarketing

> **Texto principal**
> Viste nuestros trabajos y todavía no escribiste.
>
> Somos Arenados Lucho: arenado in situ en Buenos Aires y todo el AMBA. 20 años de oficio, aprendido en familia, y 2 equipos con compresores propios. Vamos a tu obra, a tu galpón o a tu casa.
>
> La visita y el presupuesto son sin costo, y el precio se cierra por trabajo, no por lista.
>
> Mandanos una foto por WhatsApp y te decimos qué necesita.
>
> **Título:** Arenados Lucho
> **Descripción:** Buenos Aires y todo el AMBA
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** carrusel con un antes/después de cada rubro (pileta · fachada · estructura)

#### M2 — Prueba

> **Texto principal**
> Así queda una pared después de arenarla. Sin lijar a mano, sin rascar.
>
> Arenado in situ en Buenos Aires y el AMBA: paredes, fachadas, ladrillo a la vista, estructuras, camiones y piletas de hormigón. Equipo y compresores propios — vamos nosotros, no trasladás nada.
>
> 20 años de oficio. Visita y presupuesto sin costo.
>
> Escribinos por WhatsApp.
>
> **Título:** Mirá los trabajos que hicimos
> **Descripción:** Fotos reales de antes y después
> **Botón:** Enviar mensaje de WhatsApp
> **Creativo:** los 4 pares de fachada (`frente-casa`, `muro-ladrillo`, `ladrillo-visto`, `esquina`)

### 4.4 Lo que ninguno de los ocho dice, y por qué

| No se dice | Porque |
|---|---|
| "Protegemos la zona", "contenemos el polvo", "sin ensuciar" | No se arma ningún cerramiento. Afirmación falsa ya publicada. |
| "Sumamos equipos" | El tope es 2. Ya se publicó y se corrigió el 28/09. |
| "+20 años de experiencia" | La empresa tiene ~8 años. Se dice **"20 años de oficio"**. |
| "~100 m²/día" | Solo vale en superficies cómodas. Sin su condición, no va en anuncios. |
| "No pintamos" como absoluto | Se pinta si lo piden, no se vende. Se dice **"lista para pintar o revestir"**. |
| "Sacamos el revestimiento" en piletas | Solo pintura sobre hormigón. Venecitas y mosaico **no**. |
| Granallado, Sa3, ISO, metal blanco, normas | No se hace. Prohibido en copy, metadata, schema y anuncios. |
| Portones, rejas de hogar, autos, motos, muebles | No se compran. Se aceptan si llegan solos. |
| "Arenamos tanques por dentro" | Se hace bajo permiso ajeno. Bloqueado hasta resolver el pendiente de seguridad. |

---

## 5. Configuración completa del panel

**Nomenclatura**, en la línea de la de Google (`AR-Search-*` / `ag_*`):
`MT-{Producto}-{Ángulo}` · conjuntos `cj_*` · anuncios `an_*`.

### 5.1 `MT-Piletas-Temporada` — la primera que se enciende

| Campo | Valor | Por qué |
|---|---|---|
| **Objetivo** | Ventas | Optimiza por conversación de calidad, no por clic |
| **Ubicación de la conversión** | App de mensajes → **WhatsApp** | Es el único canal del negocio |
| **Evento de optimización** | Conversaciones | Nativo, no depende del píxel |
| **Presupuesto** | **Del campaña (CBO) — 3.000 ARS/día** | El presupuesto fluye solo al anuncio que gana |
| **Estrategia de puja** | Mayor volumen, **sin tope de costo** | Un tope al inicio impide salir de aprendizaje |
| **Programación** | Todo el día | El lead de las 22 h se contesta a las 8 |

**Conjunto `cj_piletas-amba-amplio`** — uno solo, y es a propósito:

| Campo | Valor |
|---|---|
| Ubicación | CABA + GBA, **radio 60 km desde CABA** |
| Tipo de ubicación | ⚠️ **"Personas que viven en esta ubicación"** |
| Edad | 30 – 65 |
| Género | Todos |
| Segmentación detallada | **ninguna** |
| Público Advantage+ | Activado |
| Ubicaciones | Advantage+ (automáticas) |
| Idioma | Español |

⚠️ **El campo de tipo de ubicación es el mismo error que costó 6 semanas en
Google.** El 30/09 se descubrió que dos campañas estaban en *"Presencia o interés"*
y mostraban avisos fuera del AMBA desde el encendido. Meta tiene el equivalente
exacto, y viene mal por defecto. **Es el primer campo que hay que mirar.**

**Anuncios:**

| Anuncio | Copy | Creativo |
|---|---|---|
| `an_P1-tercer-camino` | P1 | Par antes/después |
| `an_P2-reloj-temporada` | P2 | Carrusel |

**Mensaje pre-escrito de WhatsApp** (se configura en el anuncio):
> `Hola, vi el anuncio de arenado de piletas. Te mando una foto.`

⭐ **Esto no es un detalle: es el sistema de atribución.** Cada conversación de
Meta llega marcada, y quien atiende el WhatsApp puede contarlas a mano sin
depender de ningún píxel. Es el mismo mecanismo que ya usa el sitio.

### 5.2 `MT-Obra-PYME-InSitu` — fase 2

| Campo | Valor |
|---|---|
| Objetivo | Ventas → WhatsApp → Conversaciones |
| Presupuesto | CBO **1.500 ARS/día** |
| Puja | Mayor volumen |

**Conjunto `cj_pyme-galpon`** — acá **sí** se segmenta fino, y es la diferencia
importante con piletas:

| Campo | Valor |
|---|---|
| Ubicación | Corredor industrial: Pilar, Malvinas Argentinas, José C. Paz, Escobar, Tigre, San Martín, Tres de Febrero, La Matanza, Esteban Echeverría, Avellaneda, Quilmes |
| Tipo de ubicación | **Personas que viven en esta ubicación** |
| Edad | 35 – 65 |
| Género | Todos |
| Intereses | Metalurgia · Soldadura · Industria manufacturera · Construcción · Mantenimiento industrial · Logística y transporte |
| Comportamientos | Propietarios de pequeñas empresas · Administradores de páginas de Facebook |
| Exclusión | Quienes interactuaron con los anuncios de piletas |
| Ubicaciones | **Solo Facebook Feed + Instagram Feed** |

**Por qué angosto acá y ancho en piletas:** el producto de piletas tiene cientos de
miles de compradores posibles en el AMBA y el creativo filtra solo. El de PYME con
galpón tiene quizá veinte mil, y en público amplio el 95% de las impresiones se
tira. Y Daniel no está en Reels: está en el feed de Facebook a las 21 h.

**Anuncios:** `an_O1-no-mover` · `an_O2-polvo-dicho-antes` · `an_O3-resultado-real`

**Mensaje pre-escrito:**
> `Hola, vi el anuncio de arenado en galpón. Quiero consultar por un trabajo.`

⚠️ **La lista de partidos de arriba es una propuesta, no un dato confirmado.**
`siteConfig.ts`:36-42 dice textual que *"no hay una lista cerrada confirmada"* y
que *"prometer partidos que después se rechazan quema leads y reseñas"*. **Hay que
cerrarla con el dueño antes de encender.**

### 5.3 `MT-Marca-Remarketing` — fase 2, y la de mejor retorno

| Campo | Valor |
|---|---|
| Objetivo | Ventas → WhatsApp → Conversaciones |
| Presupuesto | **500 ARS/día** |

**Conjunto `cj_rmk-visitantes-180d`:**

| Campo | Valor |
|---|---|
| Público personalizado | Visitantes del sitio, **180 días** |
| Excluir | Quienes dispararon `contact_whatsapp` en los últimos 90 días |
| Segmentación adicional | ninguna |
| **Límite de frecuencia** | **2 impresiones cada 7 días** |
| Ubicaciones | Advantage+ |

**Anuncios:** `an_M1-remarketing` · `an_M2-prueba`

**Conjunto `cj_lal-1pct`** — fase 3, recién con **100+ conversaciones acumuladas**:
público similar al 1% de quienes escribieron. Antes de ese volumen, un lookalike
es ruido.

### 5.4 Medición

| Qué | Cómo |
|---|---|
| Píxel | Tag en **GTM** (`GTM-W63ZV9D9`), nunca en el código |
| Evento | `Lead`, disparado por `contact_whatsapp` |
| UTM | `utm_source=meta&utm_medium=paid_social&...` — ⛔ **nunca `cpc`** |
| Conversaciones | Nativo de Meta, por campaña |
| Atribución en el inbox | El prefijo del mensaje pre-escrito |

⚠️ **Sin `event_id` no hay deduplicación.** Si algún día se suma la API de
Conversiones, hay que agregarlo primero o los eventos se cuentan dos veces.

---

## 6. Presupuesto y secuencia

**El presupuesto no es la restricción** (directiva del dueño, 30/09). **Pero en
Meta la restricción tampoco es la plata: son los eventos de aprendizaje.**

Meta necesita **~50 conversiones por semana por conjunto** para salir de la fase de
aprendizaje. Con un costo por conversación parecido al CPA de Google (~1.900), eso
serían ~95.000 ARS por semana **en un solo conjunto**. Hoy la cuenta entera de
Google gasta 38.900 por semana.

**Lo que se hace con eso, y no es "poner más plata":**

- ⭐ **Un solo conjunto por campaña.** Fragmentar el presupuesto en cuatro públicos
  es la forma más común de no salir nunca de aprendizaje.
- **No tocar nada durante 14 días.** Cada edición reinicia el aprendizaje.
- **CBO**, para que el presupuesto se vaya solo al anuncio que funciona.
- Aceptar que las primeras dos semanas el costo va a ser volátil.

| Semana | Qué corre | ARS/día | Mes |
|---|---|---|---|
| 0 | Fase 0. Nada gasta. | 0 | — |
| 1–2 | **Solo `MT-Piletas`** | 3.000 | ~42.000 |
| 3–4 | + `MT-Obra-PYME` + `MT-Marca-Remarketing` | 5.000 | ~70.000 |
| Mes 2 | Según resultado | — | — |

**Total mes 1 ≈ 90.000–110.000 ARS**, contra ~165.000 de Google. Razonable para un
canal sin un solo dato propio.

### "Ser el número 1" en Meta no significa lo mismo

En Google el puesto 1 se compra: hay una subasta por consulta y una posición. **En
Meta no hay consulta ni posición.** El equivalente de liderar es **ser el que
aparece en el feed de tu zona**: frecuencia alta sobre un geo bien definido. En el
AMBA eso es barato y alcanzable. Lo que no existe es un "puesto 1" que comprar.

---

## 7. Qué mirar, cuándo, y qué significa

| KPI | Contra qué se compara |
|---|---|
| ⭐ **Costo por conversación iniciada** | CPA de Google: **1.844** piletas · **2.798** obra |
| Conversaciones que llegan con el prefijo del anuncio | Se cuentan a mano en el inbox |
| Frecuencia | > 3 en 7 días con CTR cayendo = fatiga, rotar creativo |
| CTR en el feed | < 1% = el creativo no frena a nadie |
| **Trabajo cobrado** | **El juez final** (`21-realidad-operativa.md`:187) |

**Cadencia:** igual que Google — lectura los lunes, **un cambio estructural por
vez**, 1 a 2 semanas de datos antes del siguiente. Todo cambio va a
[`08-bitacora.md`](./08-bitacora.md).

### 🔴 El riesgo que puede hundir todo esto, y no es de Meta

**El lead de Google es intención; el de Meta es impulso.** El de Google buscó
"arenado de pileta" y tiene el problema en la cabeza hace semanas. El de Meta vio
una foto, se acordó de su pileta y escribió **en ese momento**. Si la respuesta
llega seis horas después, el impulso ya pasó.

**El tiempo de respuesta en WhatsApp es el KPI oculto de este canal.** El proyecto
tiene *"alguien dedicado a contestar"* (`PRODUCT.md`:36) — hay que avisarle que el
tráfico de Meta es distinto y que la velocidad vale más acá que en Google.

---

## 8. Decisiones que necesitan al dueño

| # | Pregunta | Bloquea |
|---|---|---|
| 1 | ¿Existe Página de Facebook / Instagram / Business Manager, o se crean de cero? | Todo |
| 2 | ¿Se acepta **Click-to-WhatsApp**? (no muestra el número, pero se lo da a Meta) | Las 3 campañas |
| 3 | ¿El WhatsApp es **WhatsApp Business**? Es requisito. | Las 3 campañas |
| 4 | **Lista cerrada de partidos** que se atienden | `MT-Obra-PYME` |
| 5 | Presupuesto de Meta y si cuenta contra el tope de 300.000/mes del guardián de Google | Encendido |
| 6 | Fotos originales en alta + etiquetar los pares de piletas + ⭐ filmar 20-30 s | Los creativos |
| 7 | ¿Hay autorización de uso de imagen de las personas que salen en las fotos? | Creativos con gente |

---

## 9. Hallazgo colateral: el error #4 sigue vivo en el sitio

Auditando el copy para este plan apareció que **"contención de polvo" / "conteniendo
el polvo" sigue publicado** en `src/lib/projectsInfo.json` (líneas 253, 429, 440,
444), en los casos `pasarela-urbana` y `arenado-pileta`.

Es **la misma afirmación falsa #4** que `21-realidad-operativa.md`:23-25 llama
*"la peor"*, porque promete algo operativo que se rompe en el lugar. Se corrigió en
la FAQ y en las landings, pero **quedó en los casos de éxito**.

**No es parte de este plan y no se toca acá** — pero hay que arreglarlo, y no se
puede reutilizar ese texto en ningún anuncio de Meta.

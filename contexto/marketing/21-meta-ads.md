# Meta Ads — plan completo de implementación

> ### ⚠️ Leé esto antes que nada — el plan se corrigió el mismo día
>
> Escrito el 06/10/2026 y **parcialmente ejecutado esa misma tarde**. Al llevarlo
> a la cuenta real, dos decisiones centrales resultaron equivocadas. Estado y
> detalle en [`08-bitacora.md`](./08-bitacora.md), entrada del **06/10 (3)**.
>
> | Lo que dice este plan | Lo que pasó de verdad |
> |---|---|
> | Campaña con objetivo **Ventas** | ⛔ Meta lo rechaza: con Ventas, "Maximizar conversaciones" no está permitido. **El correcto es Clientes potenciales.** Y el objetivo **no se puede cambiar** después de crear la campaña. |
> | Destino **Click-to-WhatsApp** | ⛔ Descartado por decisión del dueño: el flujo de bandeja compartida puede migrar el número a la API y **dejar sin app el teléfono de quien atiende**. Los anuncios van **al sitio**. |
> | El píxel es "Fase 2" | 🔴 Al ir al sitio, el píxel pasa a ser **camino crítico**: sin él Meta optimiza por clics. |
> | "No existe píxel" | ✅ Ya existe: **`28636604982615375`**, publicado en GTM el 06/10. |
> | Fase 2 a 5.000 ARS/día | ⚠️ **No entra.** Meta pone un techo de **3.399,40/día** a cuentas nuevas; sube solo con historial de pagos. |
>
> Lo que **sí** sigue vigente: todo el razonamiento estratégico, la segmentación,
> el presupuesto y los KPIs.
>
> 🔄 **Y los anuncios se reemplazaron por completo el mismo 06/10.** La tanda
> original de 8 piezas (P1-P3, O1-O3, M1-M2) **quedó sin efecto**: no se usa
> ninguna. La vigente es la de **§4**, seis anuncios (A1-A6) con públicos más
> específicos, a pedido del dueño.
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

## 4. Los anuncios

> **Tanda vigente desde el 06/10/2026.** Reemplaza por completo a la anterior de
> 8 piezas (P1-P3, O1-O3, M1-M2), que queda sin efecto: no se usa ninguna.
> El cambio responde a un brief del dueño que pide públicos **más específicos** y
> una comunicación **más comercial**.

### Cómo leer esta sección

Cada anuncio trae **lo que se pega en Meta** (texto principal, título,
descripción, botón) y **la dirección del creativo** — qué tiene que mostrar y qué
frase va encima de la imagen. **Las imágenes las diseña el dueño**; acá va el
qué y el porqué, no el archivo.

> **Formato Meta, lo que manda:** en celular el texto principal se corta cerca de
> los **125 caracteres** y recién ahí aparece "ver más". **La primera línea es casi
> todo el anuncio.** Todas las de abajo entran completas.
>
> El título se trunca cerca de los **40 caracteres**. La descripción casi nunca se
> muestra; vale como refuerzo, no como información necesaria.

**Todos pasaron la lista de bloqueo** (`18-copy-ads.md` §Bloqueo): sin
`granallado`, `sa3`, `iso 8501`, `metal blanco`, `perfil de anclaje`, `rugosidad`,
`certific-`, `norma`, `garantizamos`, `mediciones`. Y sin las afirmaciones falsas
ya publicadas: nada de contener el polvo, ni de sumar equipos, ni de "años de
experiencia", ni de sacar revestimientos de piletas.

---

### A1 — Pileta descascarada ⭐

**Quién:** dueño de casa con pileta de hormigón pintada, la pintura se levanta.
**No sabe que esto se llama arenado.**

> **Texto principal**
> ¿La pintura de la pileta se está descascarando y se cae en pedazos?
>
> Pintar encima no lo soluciona: al verano siguiente está igual. Primero hay que sacar toda la pintura vieja y lo que esté flojo.
>
> Con arenado se la sacamos del hormigón de una sola vez, sin lijar a mano, y te la dejamos limpia y pareja, lista para repintar o revestir. Vamos a tu casa con equipo propio y una pileta estándar queda lista en el día.
>
> Mirá trabajos reales y mandanos una foto por WhatsApp. La visita y el presupuesto son sin costo.
>
> **Título:** ¿Pileta descascarada?
> **Descripción:** Arenado de piletas de hormigón, in situ
> **Botón:** Más información
> **Destino:** `/arenado-de-piletas` ⬅ **nunca la home ni `/servicios`**

**Creativo — antes / después, y en ese orden**

| | |
|---|---|
| **Formato** | Carrusel de 3, o video vertical de 15 s |
| **1** | **Antes**: pintura celeste levantada, a pedazos. Primer plano, que se vea el daño. |
| **2** | **El trabajo**: el chorro sacando pintura. Es la imagen que explica el servicio sin una palabra. |
| **3** | **Después**: hormigón gris, limpio y parejo. |
| **Frase sobre la imagen 1** | **"¿Así está tu pileta?"** |
| **Frase sobre la imagen 3** | **"Lista para pintar"** |

**Assets que ya existen:** `public/images/services/arenadoParticular/Piletas` tiene
**3 pares antes/después probables** (`2454→2455`, `2456→2457`, `2478→2479`).
⚠️ Están en **828×828** y Meta pide 1080 mínimo — hacen falta los originales del
celular. Y los pares **no están etiquetados**: hay que confirmar cuál es antes y
cuál después antes de publicar.

**Por qué así:** esta persona tiene dos opciones en la cabeza —pintar encima otra
vez, o romper todo y hacerla de nuevo— y las dos son malas. **El anuncio existe
para mostrarle una tercera que no sabe que existe.** Por eso arranca con el
problema en sus palabras y la palabra "arenado" aparece recién en el tercer
párrafo.

---

### A2 — Piletero / contratista

**Quién:** piletero, constructor, mantenimiento. **Cliente recurrente**: varias
piletas por temporada, no una.

> **Texto principal**
> ¿Hacés o mantenés piletas? No pierdas días sacando pintura vieja a mano.
>
> Tercerizá el arenado: vamos con equipo propio, sacamos toda la pintura y el material flojo del hormigón y te entregamos la pileta lista para que vos hagas la pintura o el revestimiento.
>
> Precio cerrado por pileta, así lo cargás a tu presupuesto sin sorpresas. Tenemos 2 equipos: en temporada podemos con varias seguidas.
>
> Vos seguís con tu obra. Nosotros hacemos la parte pesada.
>
> **Título:** Piletero: tercerizá el arenado
> **Descripción:** Precio cerrado por pileta
> **Botón:** Enviar mensaje
> **Destino:** `/arenado-de-piletas`

**Creativo — tiene que verse trabajo, no casa**

| | |
|---|---|
| **Formato** | Imagen única 4:5, o carrusel de 2 |
| **Qué muestra** | El equipo trabajando: compresor, manguera, arenador con casco. **Contexto de obra, no de jardín.** |
| **Frase sobre la imagen** | **"Vos seguís con la obra. Nosotros hacemos la parte pesada."** |
| **Apoyo** | Un sello chico: **"Precio cerrado por pileta"** |

⚠️ **Lo que NO debe parecer:** una casa linda con una pileta celeste. Si se
confunde con el A1, los dos compiten por la misma gente y ninguno encuentra al
piletero.

**Por qué así:** un piletero vale 5 trabajos, no uno. Y "tercerizá" es la palabra
que lo hace sentir socio y no cliente — no le estás vendiendo a él, le estás
sacando el trabajo que odia.

---

### A3 — Estructuras, metalúrgicas y mucha pieza

**Quién:** metalúrgica, herrería grande, PYME con galpón propio. Tiene estructuras
montadas o cantidad de piezas para preparar, **en su propio lugar**.

> **Texto principal**
> ¿Tenés una estructura montada o mucha pieza para arenar y moverla es un problema?
>
> No hace falta desarmar ni mandar nada afuera. Vamos a tu planta, galpón u obra con equipo y compresores propios, sacamos el óxido y la pintura vieja ahí mismo y dejamos el metal listo para el revestimiento que le pongas.
>
> Estructuras, cabriadas, camiones, acoplados, hierros y piezas de gran tamaño, en cantidad.
>
> Contanos qué tenés para arenar. Visita y presupuesto sin costo en CABA y el AMBA.
>
> **Título:** Arenado en tu planta o galpón
> **Descripción:** In situ. No trasladás nada
> **Botón:** Enviar mensaje
> **Destino:** `/servicios`

**Creativo — industrial, y que se note el tamaño**

| | |
|---|---|
| **Formato** | Imagen única 4:5, o carrusel de 3 |
| **Qué muestra** | Cabriadas o estructura grande **antes y después** · el acoplado oxidado → gris · el equipo entrando al galpón |
| **Frase grande** | **"NO TRASLADÁS NADA"** — es el centro de la pieza |
| **Apoyo** | **"Vamos a tu galpón"** |

**Assets que ya existen:** `arenadoParticular/Piezas` tiene **cabriadas antes y
después** (estructura de galpón, exactamente el público). `arenadoParticular/Vehículos`
tiene el **acoplado** `IMG_2472` (oxidado) → `IMG_2473` (gris). ⚠️ No hay ninguna
foto de un galpón como sujeto: si la quieren, hay que sacarla.

🔴 **Cuidado con la palabra "piezas" sola.** En Google Ads, `arenado de metales`
acumuló **5.855 ARS y 19 clics sin una sola conversión** y se pausó el 05/10: las
búsquedas eran `arenado de piezas`, `arenado de muebles metalicos`,
`arenado de sillones de hierro`. **Son piezas sueltas chicas, y el negocio no las
toma** — `21-realidad-operativa.md`:103-104 las excluye y no hay taller.

Por eso el copy dice siempre **"de gran tamaño, en cantidad"** y **"en tu planta,
galpón u obra"**. Nunca "piezas" a secas. Si en el creativo se ve una pieza
chica suelta, el anuncio trae el mismo tráfico que Google acaba de matar.

---

### A4 — Industria: tanques y grandes superficies

**Quién:** planta, depósito, mantenimiento industrial. Tanque o estructura grande
con años de pintura y óxido.

> **Texto principal**
> ¿Tu empresa tiene un tanque o una estructura con años de pintura y óxido encima?
>
> Hacemos arenado in situ para dejar la superficie lista antes de pintar o revestir. Vamos a la planta, al galpón o a la obra con equipos propios y nos adaptamos a las condiciones de cada trabajo, con la planta andando.
>
> Tanques y silos por fuera, estructuras metálicas, pasarelas y superficies grandes.
>
> El arenado saca el óxido, no rellena el metal: si estaba picado, va a quedar limpio y parejo, pero picado. Preferimos decirlo antes de ir.
>
> **Título:** Arenado industrial in situ
> **Descripción:** Estructuras, tanques y grandes superficies
> **Botón:** Más información
> **Destino:** `/servicios`

**Creativo — el más industrial de los cinco**

| | |
|---|---|
| **Formato** | Imagen única 4:5 |
| **Qué muestra** | Tanque o silo exterior con el arenador trabajando · estructura naval sobre rampa · pasarela metálica remachada |
| **Frase grande** | **"ARENADO IN SITU"** |
| **Apoyo** | **"Con la planta funcionando"** |

**Assets que ya existen:** `arenadoIndustrial/Tanque` (6, todas exteriores),
`EstructuraNaval` (10), `Pasarela` (9), `Nave` (7, incluye un arenador en andamio
con casco y máscara — buena foto de capacidad).

⚠️ **"Tanques y silos POR FUERA" está escrito así a propósito.** El interior sí se
hace, pero como subcontratistas y bajo permiso ajeno: publicarlo sería la quinta
afirmación falsa (`21-realidad-operativa.md`:112-140). **Si alguien pregunta por
interiores en el chat, la respuesta no es "sí".**

**Por qué el párrafo del metal picado:** gestiona la expectativa que más
decepciona y **filtra al comprador técnico** —el que busca Sa3— antes de gastarle
una visita. Es lo que `.cursorrules`:13 pide explícitamente.

---

### A5 — Marca

**Quién:** gente y empresas que pueden necesitar arenado y no conocen Arenados
Lucho. Es la pieza de reconocimiento.

> **Texto principal**
> ¿Tenés algo que necesita arenado?
>
> Sacamos pintura vieja, óxido y material flojo, y dejamos la superficie lista para pintar o revestir. Estructuras metálicas, tanques por fuera, silos, camiones, piletas de hormigón y superficies grandes.
>
> Trabajamos in situ: vamos a la obra, al galpón o a tu casa con equipo y compresores propios. No trasladás nada.
>
> 20 años de oficio, aprendido en familia, en Buenos Aires y todo el AMBA. Mirá los trabajos que hicimos.
>
> **Título:** Arenados Lucho — Arenado in situ
> **Descripción:** Preparación y limpieza de superficies
> **Botón:** Más información
> **Destino:** `/casos-de-exito`

**Creativo — variedad, y la marca presente**

| | |
|---|---|
| **Formato** | Carrusel de 4, **un rubro por tarjeta** |
| **1** | Pileta: antes → después |
| **2** | Fachada o muro de ladrillo: antes → después |
| **3** | Estructura metálica o tanque |
| **4** | Cierre de marca: logo **Arenados Lucho** sobre fondo tinta, con "Buenos Aires y AMBA" |
| **Frase** | **"¿Tenés algo que necesita arenado?"** |

⚠️ **"20 años de oficio", nunca "más de 20 años" ni "de experiencia".** La empresa
tiene ~8 años; *"+20 años de experiencia"* fue la **afirmación falsa #1** de este
proyecto. "Oficio" es la única forma aprobada (`21-realidad-operativa.md`:194-195).

---

### A6 — "¿Qué es el arenado?" *(recomendado, y explico por qué)*

**El dueño pidió evaluar si vale. Vale, y puede ser el de mejor retorno a largo
plazo — pero no es un anuncio de venta y no hay que medirlo como tal.**

> **Texto principal**
> ¿Nunca escuchaste hablar del arenado?
>
> Pensalo como una lija, pero a muchísima más potencia. Un chorro de arena a presión saca pintura vieja, óxido y material flojo de una sola pasada, donde lijar a mano ya no tiene sentido.
>
> Sirve para piletas de hormigón, estructuras metálicas, tanques por fuera, camiones, paredes y ladrillo a la vista. La superficie queda limpia y pareja, lista para pintar o revestir.
>
> Lo hacemos in situ, con equipo propio. Mirá cómo queda.
>
> **Título:** ¿Qué es el arenado?
> **Descripción:** Como lijar, pero a mucha más potencia
> **Botón:** Más información
> **Destino:** `/servicios`

**Creativo — tiene que explicarse solo, sin leer**

| | |
|---|---|
| **Formato** | **Video vertical de 10-20 s**, sin texto hablado |
| **Qué muestra** | Plano fijo y cerrado del chorro **comiendo la pintura en tiempo real** |
| **Texto en pantalla** | *"Esto es arenado."* al principio · *"Como lijar, pero a mucha más potencia."* al final |

⭐ **Por qué lo recomiendo:** todo este plan arranca de que **el comprador de
piletas no sabe que el servicio se llama "arenado"**. Los otros cinco anuncios lo
esquivan hablando del problema. **Este resuelve la causa: enseña la categoría.**

⚠️ **Pero con una condición: va en la campaña de marca, no en las de venta.** Trae
curiosidad, no intención — si entra en la misma campaña que A1, le come
presupuesto a la que convierte y ensucia el aprendizaje. Se mide por **alcance y
reproducciones**, no por costo por lead.

Y es el más barato de producir de los seis: **un operario, un celular, veinte
segundos.** Hay 2 equipos trabajando todos los días.

---

### 4.1 Qué anuncio va en qué campaña

| Anuncio | Campaña | Conjunto |
|---|---|---|
| **A1** Pileta descascarada | `MT-Piletas-Temporada` | `cj_piletas-amba-amplio` |
| **A2** Piletero | `MT-Piletas-Temporada` | `cj_piletas-pileteros` *(fase 2)* |
| **A3** Estructuras / mucha pieza | `MT-Obra-PYME-InSitu` | `cj_pyme-galpon` |
| **A4** Industria / tanques | `MT-Obra-PYME-InSitu` | `cj_pyme-galpon` ⬅ **el mismo** |
| **A5** Marca | `MT-Marca-Remarketing` | `cj_rmk-visitantes-180d` |
| **A6** ¿Qué es el arenado? | `MT-Marca-Remarketing` | `cj_rmk-visitantes-180d` |

⚠️ **A3 y A4 van juntos en el mismo conjunto, y es a propósito.** Son dos ángulos
del mismo producto —arenado in situ para empresas— y el comprador se superpone
bastante. Separarlos en dos conjuntos parte un presupuesto que ya es chico y
**deja a los dos sin salir nunca de la fase de aprendizaje** (Meta pide ~50
conversiones por semana **por conjunto**). Juntos, Meta elige cuál mostrarle a
cada persona, que es exactamente para lo que sirve.

### 4.2 Lo que ninguno de los seis dice, y por qué

| No se dice | Porque |
|---|---|
| "Protegemos la zona", "contenemos el polvo", "sin ensuciar" | No se arma ningún cerramiento. **Afirmación falsa ya publicada, la peor de las cuatro.** |
| "Sumamos equipos" | El tope es 2. Ya se publicó y se corrigió el 28/09. |
| "+20 años de experiencia" | La empresa tiene ~8 años. Se dice **"20 años de oficio"**. |
| "~100 m²/día" | Solo vale en superficies cómodas. Sin su condición, no va en anuncios. |
| "No pintamos" como absoluto | Se pinta si lo piden, no se vende. Se dice **"lista para pintar o revestir"**. |
| "Sacamos el revestimiento" en piletas | Solo pintura sobre hormigón. Venecitas, mosaico y fibra de vidrio **no**. |
| Granallado, Sa3, ISO, metal blanco, normas, mediciones | No se hace. Prohibido en copy, metadata, schema y anuncios. |
| "Piezas" a secas | Trae muebles, sillones y rejas de hogar. No se toman y no hay taller. |
| "Arenamos tanques por dentro" | Se hace bajo permiso ajeno. Bloqueado hasta resolver el pendiente de seguridad. |
| Portones y rejas de casa, autos, motos | Se aceptan si llegan solos, pero **no se les compra tráfico**. |


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
| Ubicación | **Radio de 60 km desde Del Viso** ⬅ decidido el 06/10 |
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

#### ⚖️ Por qué piletas se centra en Del Viso y obra en CABA

**Decisión del dueño, 06/10/2026.** No es lo mismo trazar los 60 km desde un lado
o del otro: desde **Del Viso** entra Pilar, Escobar, Luján y Campana, y queda
afuera toda la Zona Sur; desde **CABA** entra el AMBA completo.

| Campaña | Centro del radio | Por qué |
|---|---|---|
| `MT-Piletas-Temporada` | **Del Viso** | Ticket ~800.000 y **un día de trabajo**: el viaje tiene que ser corto o se come el margen |
| `MT-Obra-PYME-InSitu` | **CABA** | Ticket de millones y ~una semana de obra: **banca el viaje** |

Es la misma lógica que ya está escrita para Google en
`ads-config/05-configuracion-campanas.md`: *"Piletas y General-Marca no se amplían
nunca: el ticket no soporta el viaje"*.

**Anuncios:**

| Anuncio | Copy | Creativo |
|---|---|---|
| `an_A1-pileta-descascarada` | **A1** | Carrusel antes · trabajo · después |

**Conjunto `cj_piletas-pileteros`** *(fase 2, mismo campaña)* — se separa de
`cj_piletas-amba-amplio` porque el piletero es otro comprador y conviene medirlo
aparte. Público amplio con intereses de construcción y mantenimiento de piscinas;
anuncio `an_A2-piletero-terceriza`.

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

**Anuncios:** `an_A3-estructuras-in-situ` · `an_A4-industria-tanques` — **los dos
en este mismo conjunto**, a propósito (ver §4.1).

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

**Anuncios:** `an_A5-marca` · `an_A6-que-es-arenado`

⚠️ **`an_A6` se mide por alcance y reproducciones, no por costo por lead.** Enseña
la categoría, no cierra una venta. Si se lo juzga con la vara de A1, parece malo y
se apaga justo el que estaba resolviendo el problema de fondo.

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

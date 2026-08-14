# Copy y recursos de Ads — versión aprobada, lista para pegar

> **Fuente única del copy publicado**, versionada fuera de la interfaz de Google para que sea auditable y comparable. Consolida y **revisa** el borrador del 29/07 (`ads-config/06-anuncios-recursos.md`) contra el **sitio rediseñado el 10/08** y contra el **informe de términos de búsqueda** analizado el 10/08.
>
> Caracteres verificados: titulares ≤30 · descripciones ≤90 · título de sitelink ≤25 · descripción de sitelink ≤35 · textos destacados y fragmentos ≤25.

---

## 0. Cambios respecto del borrador del 29/07

| # | Cambio | Motivo |
|---|---|---|
| 1 | ⛔ **Eliminado el "~100 m² por día por equipo"** de todos los titulares y descripciones | Confirmado por el dueño el 11/08, **pero es condicional**: vale para superficies planas, no para estructuras metálicas complejas ni revestimientos duros — justo el trabajo más rentable. En 30 caracteres no entra la condición. **Vive en el sitio con la aclaración** (§10) |
| 1b | ✅ **Agregado "Tu pileta lista en el día"** a RSA 4 | Plazo confirmado por el dueño el 11/08. Dato limpio, sin condición, y diferencial fuerte (§10) |
| 2 | ✅ **Agregado un titular de precio** en los 3 RSA que lo permitían | El informe de términos mostró **15 consultas de precio** (`arenado precio`, `cuanto sale arenar`, `valor m2 de arenado`) sin ninguna respuesta. Es la consulta más comercial que existe |
| 3 | ✅ **Bloqueante del logo resuelto** | `public/images/favicon.png` es el logo en **1906×1911** — supera el recomendado de 1200×1200 |
| 4 | ✅ **Bloqueante de fotos resuelto** | Las fotos de trabajo son **828×828**, por encima del mínimo de 300×300 de Google. Usables |
| 5 | ✅ Verificado el message-match contra las páginas nuevas | `/servicios` y `/arenado-de-piletas` ahora dicen literalmente lo que promete el copy. Era el componente de QS que estaba en "Inferior al promedio" en el 100% de las keywords |

---

## 0 bis. ⛔ Recursos HEREDADOS a nivel cuenta — borrar antes de cargar los nuestros

`Campañas → Recursos → filtro "Nivel" = Cuenta`

La cuenta arrastra recursos de su configuración anterior que **se aplican solos a cualquier campaña, incluidas las nuevas**. Nadie los cargó a propósito y **contradicen el negocio real**:

| Heredado | Problema |
|---|---|
| **"+20 años de experiencia"** | **Falso como antigüedad de la empresa** (~8 años). Ver la nota de la §4 |
| "Servicio de arenado móvil" · "Limpieza profunda" · "Resultado profesional" | Genéricos, no aprobados, y "preparación de superficie" aparecía en minúscula a mitad de frase |
| **5 sitelinks**, uno de ellos a **"Política de privacidad"** | Ocupa uno de los pocos espacios del aviso con una página legal. Nadie contrata desde ahí |

**Borrarlos todos.** No se pierde nada: los nuestros van a nivel campaña, escritos y contados uno por uno.

**Lección:** un recurso heredado no aparece como algo que cargaste, pero se publica igual. Auditar el nivel Cuenta es obligatorio antes de encender.

---

## 1. Listas de negativas compartidas

`Herramientas → Biblioteca compartida → Listas de exclusión → pestaña "Listas de palabras clave negativas" → +`

> Las **37 negativas permanentes** (técnicas, servicio equivocado y empleo) ya están **a nivel cuenta** desde el 10/08. Estas 3 listas son las que se aplican **por campaña**.

### `NEG-EQUIPOS-DIY` — el que quiere comprar la máquina, no contratarnos

```
alquiler de arenadora
venta de arenadora
comprar arenadora
arenadoras en venta
maquina de arenar
maquinas para arenar
equipos para arenar
equipo arenador
compresor para arenado
arena para arenado
arena silica
bolson de arena
hidrolavado
curso
tutorial
como hacer
casero
aprender
callone
magal
```

*Las dos últimas son marcas de arenadoras que aparecieron en el informe de términos.*

### `NEG-DATA` — trabajos que no compramos

```
chasis
carroceria
llantas
llantas de aluminio
autopartes
limpieza de chasis
arenado de motor
```

### `RUTEO-PILETAS` — **en concordancia de frase**

```
"pileta"
"piletas"
"piscina"
"piscinas"
"natatorio"
```

⚠️ **Esta lista NO bloquea piletas: las rutea.** Se aplica **solo a Obra-Industrial y General-Marca**, para que la consulta de pileta caiga en la campaña de Piletas y llegue a `/arenado-de-piletas`. ⛔ **Jamás a nivel cuenta ni en la campaña de Piletas.**

**Aplicación:** `NEG-EQUIPOS-DIY` y `NEG-DATA` → las 3 campañas · `RUTEO-PILETAS` → **solo** Obra-Industrial y General-Marca.

---

## 2. Recursos automatizados a nivel de cuenta → APAGAR

`Campañas → Recursos → pestaña "Asociaciones" → menú ⋮ → "Recursos automatizados a nivel de cuenta" → ⋮ → Configuración avanzada`

| Apagar | Dejar |
|---|---|
| Vínculos a sitios dinámicos · Textos destacados dinámicos · Fragmentos estructurados dinámicos · Imágenes dinámicas · **Ubicación** | Información del negocio (nombre y logo), si se quiere el logo |

🟢 **Ahora es el momento exacto:** el plan advierte que apagarlos sin cargar los manuales cuesta superficie en la SERP — pero **no hay ninguna campaña activa**, así que el costo hoy es **cero**.

---

## 3. Sitelinks — 6 por campaña, a nivel CAMPAÑA

⚠️ **Todo a nivel campaña, nada a nivel grupo.** Un solo sitelink a nivel grupo apaga los de campaña y cuenta en ese grupo, sin dar error.

### Obra-Industrial

| Título | Descripción 1 | Descripción 2 | URL |
|---|---|---|---|
| Arenado en obra | Paredes, fachadas y ladrillo | Queda listo para pintar | `/servicios` |
| Galpones y estructuras | Tanques, silos y hierros | Vamos a tu planta o galpón | `/casos-de-exito/tanque-industrial` |
| Trabajos que hicimos | Fotos reales de antes y después | Obras, galpones y piletas | `/casos-de-exito` |
| Cuánto sale y cuánto tarda | Cómo cobramos el arenado | Visita y presupuesto sin costo | `/preguntas-frecuentes` |
| Pedir presupuesto | Visita y presupuesto sin costo | Coordinamos por WhatsApp | `/contacto` |
| Arenado de piletas | Sacamos la pintura vieja | Lista para pintar o revestir | `/arenado-de-piletas` |

### Piletas

| Título | Descripción 1 | Descripción 2 | URL |
|---|---|---|---|
| Arenado de piletas | Sacamos toda la pintura vieja | Vamos a tu casa, AMBA | `/arenado-de-piletas` |
| Antes y después | Piletas reales que hicimos | Mirá cómo quedan | `/casos-de-exito/arenado-pileta` |
| Cuánto sale y cuánto tarda | ¿Pintan o revisten? No | Presupuesto sin costo | `/preguntas-frecuentes` |
| Pedir presupuesto | Mandanos una foto por WhatsApp | Visita sin costo | `/contacto` |
| Otros servicios | Obra, fachadas y galpones | También arenamos estructuras | `/servicios` |
| Quiénes somos | Equipo de oficio, no promesas | 2 equipos propios | `/` |

### General-Marca

| Título | Descripción 1 | Descripción 2 | URL |
|---|---|---|---|
| Qué arenamos | Obra, galpones y estructuras | Vamos con equipo propio | `/servicios` |
| Arenado de piletas | Sacamos la pintura vieja | Lista para pintar o revestir | `/arenado-de-piletas` |
| Trabajos que hicimos | Fotos reales de antes y después | Obras, galpones y piletas | `/casos-de-exito` |
| Cuánto sale y cuánto tarda | Cómo cobramos el arenado | Visita y presupuesto sin costo | `/preguntas-frecuentes` |
| Pedir presupuesto | Visita y presupuesto sin costo | Coordinamos por WhatsApp | `/contacto` |
| Arenado industrial | Estructuras, tanques y silos | Vamos a tu planta o galpón | `/casos-de-exito/nave-ferroviaria` |

**URLs válidas (las únicas):** `/` · `/servicios` · `/arenado-de-piletas` · `/casos-de-exito` · `/casos-de-exito/{nave-ferroviaria, estructura-naval, pasarela-urbana, tanque-industrial, arenado-pileta}` · `/preguntas-frecuentes` · `/contacto`.
⛔ Nunca `/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido` (tienen 301 pero un asset no apunta a un redirect). **No existe `/blog`.**

---

## 4. Textos destacados — 10 por campaña

| Obra-Industrial | Piletas | General-Marca |
|---|---|---|
| Equipo propio | Piletas de hormigón | Equipo propio |
| Vamos a tu obra | Vamos a tu casa | Trabajamos in situ |
| Trabajamos in situ | Sin lijar a mano | 2 equipos propios |
| 2 equipos propios | Listo para revestir | Listo para pintar |
| Listo para pintar | No pintamos: preparamos | Obra, galpón y pileta |
| No pintamos: preparamos | Presupuesto sin costo | No pintamos: preparamos |
| Presupuesto sin costo | CABA y Gran Bs. As. | Presupuesto sin costo |
| CABA y Gran Bs. As. | Trabajamos con pileteros | CABA y Gran Bs. As. |
| Turnos rápidos | Turnos rápidos | Turnos rápidos |
| Precio por trabajo | Mandá una foto | Precio por trabajo |
| **20 años de oficio** | **20 años de oficio** | **20 años de oficio** |

### ⛔ Límite de piletas — confirmado el 14/08/2026

**Se arena pintura sobre hormigón. Nada más.**

- ⛔ **No** se remueven revestimientos adheridos (venecitas, mosaico).
- ⛔ **No** se trabajan piletas de **fibra de vidrio**.

El copy anterior decía *"sacamos toda la pintura **o el revestimiento viejo**"* y estaba **publicado en producción**. Era una promesa falsa: corregida en el sitio, en el caso de éxito y acá.

⛔ **Nunca reintroducir "revestimiento viejo" como algo que se remueve.** Sí es correcto decir **"lista para pintar o revestir"** — eso describe lo que hace el cliente después, no lo que hacemos nosotros.

### ⚠️ Sobre "20 años de oficio" — leer antes de tocarlo

La cuenta tenía heredado un texto destacado que decía **"+20 años de experiencia"**. **Es falso como antigüedad de la empresa: el negocio tiene ~8 años.** Estuvo corriendo en todos los anuncios sin que nadie lo supiera.

**Pero la experiencia existe** (dato del dueño, 11/08/2026): el oficio viene del padre, que trabajó de esto muchos años y hoy no está activo, y **uno de los arenadores del equipo trabajó con él y lleva más de 20 años en el rubro**.

**Por eso se dice "20 años de OFICIO" y nunca "de experiencia" ni "en el mercado":**

- "+20 años de experiencia" en un aviso **se lee como antigüedad de la empresa**. Con 8 años de razón social, hay que salir a explicarlo — y si un competidor lo reporta, Google puede pedir respaldo.
- **"20 años de oficio" habla de la gente que hace el trabajo**, que es verificable y cierto.

⛔ **No revertir a "experiencia", "en el mercado" ni "desde 200X".**

## 5. Fragmentos estructurados

| Campaña | Encabezado | Valores |
|---|---|---|
| Obra-Industrial | Catálogo de servicios | Arenado en obra · Fachadas y frentes · Ladrillo a la vista · Estructuras metálicas · Tanques y silos · Galpones y techos · Camiones y acoplados |
| Piletas | Tipos | Piletas de hormigón · Piscinas · Sacado de pintura vieja · Antes de revestir · Antes de pintar · Obras de pileteros |
| General-Marca | Catálogo de servicios | Arenado en obra · Arenado industrial · Arenado de piletas · Estructuras y tanques · Fachadas y paredes |

*(No usar el encabezado "Barrios" para las zonas: está pensado para inmobiliarias.)*

---

## 6. Imágenes y logo — bloqueantes RESUELTOS

Medidas verificadas el 11/08/2026 sobre los archivos del repo.

### Logo del negocio ✅

**`public/images/favicon.png` — 1906×1911 px.** Es el monograma "AL" en azul sobre blanco, dentro de un círculo. Supera el recomendado (1200×1200), es legible a 48 px y no tiene texto chico. **Es el logo a cargar.**

⚠️ Los `logo-solo-azul.png` y `logo-solo-blanco.png` son **423×226** — apaisados, no sirven para este recurso.

### Fotos de trabajo ✅

Casi todas son **828×828**: por encima del mínimo de Google (300×300), por debajo del recomendado (1200×1200). **Se pueden usar** — pueden verse levemente blandas en pantallas grandes, pero no bloquean.

| Campaña | Archivos (4–6 por campaña) |
|---|---|
| **Piletas** | `services/arenadoParticular/Piletas/` → IMG_2454, 2455, 2456, 2457, 2478, 2479 (828×828) |
| **Obra-Industrial** | `services/arenadoIndustrial/Tanque/` (IMG_2438-2443) · `.../Nave/` (IMG_2423-2428) · `.../Pasarela/` · `.../EstructuraNaval/` |
| **General-Marca** | Mezcla: 1 pileta + 1 tanque + 1 estructura |

**Alta resolución disponible** si hiciera falta recortar con calidad: `services/arenadoParticular.JPG` (3472×4624) y las de `Piezas/` (3148×3148).

⚠️ Los archivos `.PNG` de 828×828 pesan ~200 KB, lo que sugiere que **son JPEG renombrados**. Abren bien, pero **si Google rechaza la subida, renombrar la extensión a `.jpg`** y reintentar.

⛔ Sin texto encima, sin logo grande y sin personas identificables: Google las rechaza por política.

---

## 7. Anuncios (RSA) — 1 por grupo

Pinning: **3 titulares fijados a posición 1**, **3 a posición 2**, **1 descripción a posición 1**. El resto libre. Nunca un solo asset por posición.

Se acepta **Eficacia "Buena"** (o "Media") y se frena ahí: la Eficacia **no entra en el Ad Rank ni en el Nivel de calidad**, y perseguir "Excelente" es lo que empuja a aceptar textos automáticos que pueden reintroducir promesas prohibidas.

### RSA 1 — `ag_pymes-galpon-in-situ` → `/servicios`

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenado industrial in situ | 26 | **1** |
| 2 | Arenado a domicilio en AMBA | 27 | **1** |
| 3 | Vamos a tu galpón a arenar | 26 | **1** |
| 4 | Arenado de tanques y silos | 26 | — |
| 5 | Arenado de estructuras | 22 | — |
| 6 | Sacamos óxido y pintura vieja | 29 | — |
| 7 | Queda listo para pintar | 23 | **2** |
| 8 | No pintamos: lo dejamos listo | 29 | **2** |
| 9 | 2 equipos con compresor propio | 30 | — |
| 10 | **Precio cerrado por trabajo** | 26 | — |
| 11 | Camiones, acoplados y hierros | 29 | — |
| 12 | Buenos Aires y todo el AMBA | 27 | — |
| 13 | Visita y presupuesto sin costo | 30 | **2** |
| 14 | Presupuesto por WhatsApp | 24 | — |
| 15 | Arenado sin vueltas, prolijo | 28 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenamos estructuras, tanques y máquinas en tu galpón. Queda listo para pintar. | 79 | **1** |
| 2 | Vamos con equipo y compresores propios. No trasladás nada a ningún taller. | 74 | — |
| 3 | Sacamos óxido, pintura vieja y suciedad. Trabajamos in situ en CABA y el AMBA. | 78 | — |
| 4 | No pintamos ni revestimos: dejamos la superficie lista. Visita y presupuesto sin costo. | 87 | — |

### RSA 2 — `ag_obra-restauracion-estructuras` → `/servicios`

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenado en obra y fachadas | 26 | **1** |
| 2 | Arenado de paredes y frentes | 28 | **1** |
| 3 | Arenado de ladrillo a la vista | 30 | **1** |
| 4 | Empresa de arenado para obra | 28 | — |
| 5 | Dejamos la pared para pintar | 28 | **2** |
| 6 | No pintamos: lo dejamos listo | 29 | **2** |
| 7 | Arenado de vigas y estructuras | 30 | — |
| 8 | Sacamos pintura vieja y óxido | 29 | — |
| 9 | Vamos a tu obra con el equipo | 29 | — |
| 10 | 2 equipos con compresor propio | 30 | — |
| 11 | **Precio cerrado por trabajo** | 26 | — |
| 12 | Buenos Aires y todo el AMBA | 27 | — |
| 13 | Visita y presupuesto sin costo | 30 | **2** |
| 14 | Presupuesto por WhatsApp | 24 | — |
| 15 | Sin frenarte la obra | 20 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenamos paredes, fachadas y ladrillo a la vista. Queda listo para pintar o revestir. | 85 | **1** |
| 2 | Vamos a tu obra con equipo propio. Trabajamos por sectores y liberamos rápido. | 78 | — |
| 3 | Sacamos pintura vieja, óxido y revestimiento flojo. Trabajamos en CABA y el AMBA. | 81 | — |
| 4 | No pintamos ni revestimos: entregamos la superficie lista. Presupuesto sin costo. | 81 | — |

### RSA 3 — `ag_pileta-sin-jerga` → `/arenado-de-piletas`

*El titular 1 usa la palabra del cliente, no la del rubro. Es el gap sin explotar.*

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Sacamos la pintura de pileta | 28 | **1** |
| 2 | Quitamos la pintura vieja | 25 | — |
| 3 | Despintamos piletas y piscinas | 30 | **1** |
| 4 | ¿Se descascara la pintura? | 26 | **1** |
| 5 | Sacar pintura de piscina | 24 | — |
| 6 | Dejamos la pileta para pintar | 29 | **2** |
| 7 | Lista para pintar o revestir | 28 | **2** |
| 8 | No sirve pintar encima | 22 | — |
| 9 | Vamos a tu casa con el equipo | 29 | — |
| 10 | Sin lijar a mano ni rascar | 26 | — |
| 11 | Piletas de hormigón, in situ | 28 | — |
| 12 | Buenos Aires y todo el AMBA | 27 | — |
| 13 | Visita y presupuesto sin costo | 30 | **2** |
| 14 | Mandanos una foto por WhatsApp | 30 | — |
| 15 | 2 equipos: turnos rápidos | 25 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Si la pintura de la pileta se descascara, se la sacamos toda y queda lista para pintar. | 87 | **1** |
| 2 | Vamos a tu casa con equipo propio. No lijás ni rascás nada: lo hacemos nosotros. | 80 | — |
| 3 | No pintamos ni revestimos: dejamos el hormigón limpio y parejo para tu pintor. | 78 | — |
| 4 | Mandanos una foto por WhatsApp y te decimos qué necesita. Presupuesto sin costo. | 80 | — |

### RSA 4 — `ag_pileta-jerga` → `/arenado-de-piletas`

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenado de piletas en AMBA | 26 | **1** |
| 2 | Arenado de piletas y piscinas | 29 | **1** |
| 3 | Arenado de pileta a domicilio | 29 | **1** |
| 4 | Arenado de piscinas in situ | 27 | — |
| 5 | Preparamos tu pileta | 20 | — |
| 6 | Lista para pintar o revestir | 28 | **2** |
| 7 | No pintamos: la dejamos lista | 29 | **2** |
| 8 | Sacamos toda la pintura vieja | 29 | — |
| 9 | Vamos a tu casa con el equipo | 29 | — |
| 10 | 2 equipos con compresor propio | 30 | — |
| 11 | Buenos Aires y todo el AMBA | 27 | — |
| 12 | Visita y presupuesto sin costo | 30 | **2** |
| 13 | Presupuesto por WhatsApp | 24 | — |
| 14 | **Precio cerrado por pileta** | 25 | — |
| 15 | **Tu pileta lista en el día** | 25 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenado de piletas y piscinas de hormigón. Queda lista para repintar o revestir. | 80 | **1** |
| 2 | Vamos a tu casa con equipo y compresores propios. Vos no movés ni preparás nada. | 80 | — |
| 3 | Sacamos toda la pintura vieja del hormigón. No pintamos ni revestimos. | 70 | — |
| 4 | Visita y presupuesto sin costo en CABA y el AMBA. Coordinamos por WhatsApp. | 75 | — |

### RSA 5 — `ag_genericos` → `/servicios`

⚠️ **Cambio de destino:** en el borrador de julio apuntaba a `/`. Ahora va a **`/servicios`**, porque las keywords genéricas (`arenado`, `arenados`) son de intención de servicio y la home es un hub de ruteo. Es exactamente el problema que Google marcaba como "experiencia con la página de destino: inferior".

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenados en Buenos Aires | 24 | **1** |
| 2 | Arenado en Buenos Aires | 23 | **1** |
| 3 | Empresa de arenado en AMBA | 26 | **1** |
| 4 | Arenado a domicilio | 19 | — |
| 5 | Arenado in situ con equipo | 26 | — |
| 6 | Obra, galpones y piletas | 24 | — |
| 7 | Queda listo para pintar | 23 | **2** |
| 8 | No pintamos: lo dejamos listo | 29 | **2** |
| 9 | 2 equipos con compresor propio | 30 | — |
| 10 | **Precio cerrado por trabajo** | 26 | — |
| 11 | Buenos Aires y todo el AMBA | 27 | — |
| 12 | Visita y presupuesto sin costo | 30 | **2** |
| 13 | Presupuesto por WhatsApp | 24 | — |
| 14 | Arenado sin vueltas, prolijo | 28 | — |
| 15 | Sacamos pintura vieja y óxido | 29 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenado en obra, galpones y piletas. Dejamos la superficie lista para pintar. | 77 | **1** |
| 2 | Vamos a tu obra, galpón o casa con equipo propio. Buenos Aires y todo el AMBA. | 78 | — |
| 3 | 2 equipos con compresores propios. Trabajamos rápido y prolijo, sin vueltas. | 76 | — |
| 4 | No pintamos ni revestimos: preparamos la superficie. Presupuesto sin costo. | 75 | — |

### RSA 6 — `ag_marca` → `/`

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenados Lucho | 14 | **1** |
| 2 | Arenados Lucho - Sitio oficial | 30 | **1** |
| 3 | Arenados Lucho en el AMBA | 25 | **1** |
| 4 | Arenado sin vueltas | 19 | — |
| 5 | Equipo propio, precio justo | 27 | — |
| 6 | 2 equipos con compresor propio | 30 | — |
| 7 | Obra, galpones y piletas | 24 | — |
| 8 | Queda listo para pintar | 23 | **2** |
| 9 | No pintamos: lo dejamos listo | 29 | **2** |
| 10 | Vamos a tu obra o galpón | 24 | — |
| 11 | Buenos Aires y todo el AMBA | 27 | — |
| 12 | Visita y presupuesto sin costo | 30 | **2** |
| 13 | Escribinos por WhatsApp | 23 | — |
| 14 | Mirá los trabajos que hicimos | 29 | — |
| 15 | **Oficio aprendido en familia** | 27 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenados Lucho: arenado sin vueltas en Buenos Aires y todo el AMBA. | 67 | **1** |
| 2 | Vamos a tu obra, galpón o casa con 2 equipos y compresores propios. | 67 | — |
| 3 | Dejamos la superficie lista para pintar o revestir. No pintamos ni revestimos. | 78 | — |
| 4 | Visita y presupuesto sin costo. Escribinos por WhatsApp y coordinamos. | 70 | — |

> **RSA de contratistas de piletas:** escrito y aprobado en `ads-config/06-anuncios-recursos.md` §RSA 5, **en reserva**. Se activa cuando aparezcan términos B2B reales en el informe de términos o al subir el presupuesto de Piletas por temporada (ago-sep). Hasta entonces el mensaje B2B vive en los sitelinks y en la landing.

---

## 8. Sufijo de URL final — una vez por campaña

`Configuración → Configuración adicional → Opciones de URL de la campaña → Sufijo de URL final`

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&mt={matchtype}
```

Las URLs de anuncios y sitelinks quedan **limpias**, sin UTM propio. Antes de encender: abrir `https://www.arenadoslucho.com/arenado-de-piletas?utm_source=google&utm_medium=cpc&gclid=TEST123` y confirmar **200** con los parámetros intactos.

---

## 9. Lista de bloqueo — pasar TODO el texto antes de pegarlo

```
granallado · granalla · shot blasting · sa3 · sa 2 · sa 2.5 · iso · 8501
metal blanco · perfil de anclaje · rugosidad · micras · espesor
certific- · norma · garantizamos · mediciones
pintamos (salvo en "no pintamos") · revestimos (salvo en "no revestimos")
```

✅ **Verificado:** cero coincidencias en todo el copy de este archivo.

---

## 10. Los dos datos de plazo — resueltos el 11/08/2026

### ~100 m² por día por equipo — **confirmado, pero CONDICIONAL → no va en los anuncios**

Palabras del dueño: *"es un número en condiciones óptimas, es decir, una superficie cómoda de arenar como puede ser una superficie plana y no estructuras metálicas complejas; tampoco deben estar con revestimientos demasiado resistentes, en esos casos se dilata más."*

**Decisión: se publica en el SITIO con la condición, y NO en los anuncios.** Tres motivos:

1. **En 30 caracteres no entra la condición.** "Unos 100 m² por día por equipo" se lee como una promesa lisa.
2. **El segmento donde NO aplica es el más rentable.** Las estructuras metálicas complejas y los revestimientos duros son exactamente el trabajo de la PYME con galpón —el aliado #1— y el de obra pesada. Prometer ese ritmo ahí es prometerle velocidad a quien menos se le puede garantizar.
3. **Donde sí aplica —paredes, fachadas, piletas— la velocidad no es la objeción principal**; la objeción es el polvo y si queda listo para pintar.

**Dónde vive ahora, con la condición explícita:**
- `/servicios` → `AlcanceOperativo`: "En superficies planas y parejas —paredes, fachadas— cada equipo cubre alrededor de 100 m² por día" + una línea aparte para estructuras complejas.
- FAQ (`¿Cuánto tardan?`) → misma distinción, y cierra en "en la visita te damos el plazo concreto".

Beneficio lateral: **pre-califica**. El que tiene una estructura compleja llega al WhatsApp con la expectativa correcta, y eso evita la conversación incómoda después.

### Pileta estándar: **un día** — confirmado ✅ → **sí va en los anuncios**

Es un dato limpio, sin condición, y un diferencial fuerte. La landing ya lo matiza correctamente para los casos grandes ("Una pileta familiar estándar suele quedar lista en el día; las más grandes o muy descascaradas pueden llevar más"), así que el anuncio puede decirlo y la página sostiene el detalle.

**Se agrega un titular a RSA 4** (`ag_pileta-jerga`), **sin fijar**, para que sea una combinación más y no la promesa central:

| Titular | Car. |
|---|---|
| Tu pileta lista en el día | 25 |

⚠️ **No** se agrega a RSA 3 (`ag_pileta-sin-jerga`): ahí el visitante todavía no sabe qué es el arenado, y el mensaje tiene que ser el problema ("se te descascara la pintura"), no el plazo.

---

## Relacionado

Diseño original y fundamentos: `ads-config/06-anuncios-recursos.md` · Estructura y grupos: `ads-config/03-estructura.md` · Keywords: `03-keywords-maestro.md` · Diagnóstico que motivó las revisiones: `17-diagnostico-cuenta-10-08.md` · Orden de trabajo: `16-roadmap-implementacion-ads.md`

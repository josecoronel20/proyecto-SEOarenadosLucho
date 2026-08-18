## 6. Anuncios (RSA) y recursos

Esta sección entrega el copy **listo para pegar** de los 7 anuncios de búsqueda responsivos (RSA) de la cuenta, la política de fijación (pinning), y la configuración de recursos (assets). Todos los textos están **contados carácter por carácter** (titulares ≤30, descripciones ≤90, títulos de sitelink ≤25, descripciones de sitelink ≤35, textos destacados y fragmentos ≤25) y **verificados contra la lista de términos prohibidos** (granallado, granalla, shot blasting, Sa3, Sa 2.5, ISO 8501, metal blanco, perfil de anclaje, rugosidad, micras, espesor, certificación, norma, mediciones, "garantizamos").

> **Regla de oro de esta sección:** en 2026 el riesgo #1 no es escribir mal, es que **Google escriba por vos**. El 40% del trabajo es redactar; el 60% es apagar la generación automática de texto en los **tres** lugares distintos donde vive (§6.5). Si eso queda encendido, la IA lee la landing y la competencia y puede publicar un titular con "granallado" o "Sa3" — exactamente lo que el negocio no puede cumplir.

---

### 6.1 Cuántos RSA por grupo y a qué landing apunta cada uno

| # | Grupo de anuncios | Campaña | URL final | RSA al lanzamiento |
|---|---|---|---|---|
| 1 | `ag_pymes-galpon-in-situ` | srch_obra-industrial_amba | `https://www.arenadoslucho.com/servicios` | 1 |
| 2 | `ag_obra-restauracion-estructuras` | srch_obra-industrial_amba | `https://www.arenadoslucho.com/servicios` | 1 |
| 3 | `ag_pileta-sin-jerga` | srch_piletas_amba | `https://www.arenadoslucho.com/arenado-de-piletas` | 1 |
| 4 | `ag_pileta-jerga` | srch_piletas_amba | `https://www.arenadoslucho.com/arenado-de-piletas` | 1 |
| 5 | `ag_pileta-contratistas` | srch_piletas_amba | `https://www.arenadoslucho.com/arenado-de-piletas` | **en reserva** (ver nota) |
| 6 | `ag_genericos` | srch_general-marca_amba | `https://www.arenadoslucho.com/` | 1 |
| 7 | `ag_marca` | srch_general-marca_amba | `https://www.arenadoslucho.com/` | 1 |

**Reglas:**

- **1 RSA por grupo** durante los primeros 60-90 días. El límite técnico son 3 RSA habilitados por grupo (los pausados no cuentan), pero con ~5.000 ARS/día y CPC ~273 la cuenta compra ~18 clics/día en total: dos anuncios en un mismo grupo parten una muestra que ya es estadísticamente inútil.
- **Segundo RSA solo cuando ese grupo acumule ≥1.000 impresiones/mes**, y siempre como test de **mensaje** (ej. "precio y rapidez" vs "oficio y prolijidad"), nunca como test de sinónimos. Registrar inicio y criterio de corte en `08-bitacora.md`.
- **Grupo 5 (contratistas):** el copy está escrito y aprobado, pero el grupo **no se crea al lanzamiento** — sobre-fragmenta una campaña que arranca con ~1.250 ARS/día. Se activa cuando (a) aparezcan términos B2B reales en el informe de términos de búsqueda ("tercerizar arenado de piletas", "arenado de piletas para contratistas"), o (b) arranque la temporada (ago-sep) y se suba el presupuesto de Piletas. Hasta entonces, el mensaje B2B vive en los sitelinks y en la landing.
- **Ruta de carga:** `Campañas → Campañas → [campaña] → [grupo de anuncios] → Anuncios → botón + → Anuncio de búsqueda responsivo`.

> **⚠️ A confirmar con la sección de estructura:** si Obra-Industrial arranca con 4 grupos en vez de 2, el RSA #1 sirve tal cual para `pymes-in-situ`; el #2 se parte en `obra-restauracion` (quitando H7 "Arenado de vigas y estructuras") y `estructuras-tanques` (reemplazando H1-H3 por H4/H5/H11 del RSA #1). No crear grupos sin RSA propio.

---

### 6.2 Política de pinning (fijar recursos)

**Mecánica exacta:** se fija un titular a la posición 1, 2 o 3, y una descripción a la posición 1 o 2. Si fijás **al menos un** asset a una posición, **solo** los assets fijados a esa posición pueden aparecer ahí. Si fijás 2-3 assets a la **misma** posición, Google rota entre ellos y conserva capacidad de aprendizaje.

**Política para esta cuenta — pinning selectivo por "pools", nunca 1 asset por posición:**

| Posición | Qué va | Cuántos |
|---|---|---|
| **Titular 1** | Qué hacemos, con la keyword del grupo entera (o el problema, en `ag_pileta-sin-jerga`) | **3 titulares fijados** |
| **Titular 2** | Alcance y limitación honesta ("queda listo para pintar", "no pintamos", "visita sin costo") | **3 titulares fijados** |
| **Titular 3 y formatos largos** | Libres — Google combina | 9 titulares sin fijar |
| **Descripción 1** | La promesa completa del grupo | **1 descripción fijada** |
| **Descripción 2** | Libres | 3 descripciones sin fijar |

**Por qué se fija acá (y no es una manía):** el pinning no se usa como táctica de rendimiento sino como **control de compliance y de claridad de oferta**. No existe ningún control nativo dentro de un RSA que bloquee palabras; lo que el pinning sí garantiza es que la promesa central y la limitación ("dejamos listo para pintar, **no pintamos**") aparezcan en la combinación que se muestra, en vez de quedar afuera por azar entre 15 titulares de los que Google muestra 2-3. La evidencia independiente además muestra que el pinning **selectivo** rinde levemente mejor que no fijar en CPA y ROAS; lo malo es el pinning pesado (1 asset por posición), que convierte el RSA en un anuncio de texto expandido sin testeo.

**Efecto en la Eficacia del anuncio (Ad Strength):** con esta política la Eficacia va a quedar en **"Buena"** y en algún grupo en **"Media"**. Es aceptable y está decidido:

- Google documenta explícitamente que la Eficacia **no influye en la elegibilidad de publicación, no entra en Ad Rank ni en el Nivel de calidad**. Es una métrica de proceso.
- Un estudio independiente sobre 1M+ anuncios encontró que los RSA con Eficacia "Media" tuvieron **mejor CPA y CVR** que los "Excelente".
- **Regla dura:** no se suelta ni un pin, no se agrega un titular genérico y no se enciende generación automática para subir la barrita. Perseguir "Excelente" es exactamente lo que empuja a aceptar textos de Google que pueden reintroducir promesas técnicas prohibidas.
- Truco legítimo para sumar Eficacia sin ceder nada: tener **6 o más sitelinks elegibles** suma al cálculo. Con los 6 sitelinks por campaña de §6.6 ya está cubierto.

**Ruta de UI:** dentro del editor del RSA, ícono de **chincheta (📌)** a la derecha de cada titular/descripción → elegir posición.

---

### 6.3 Copy listo para pegar

> En las tablas: **Car.** = caracteres (verificados); **Pin** = posición a fijar (`—` = sin fijar). Todo en *sentence case* (mayúscula solo al inicio), sin signos de exclamación, sin mayúsculas sostenidas.

#### RSA 1 — `ag_pymes-galpon-in-situ` → `/servicios`

*Audiencia: encargado de PYME con galpón, taller o planta. Mensaje: vamos nosotros con el equipo, sacamos óxido y pintura vieja, queda listo para pintar.*

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
| 10 | Unos 100 m² por día por equipo | 30 | — |
| 11 | Camiones, acoplados y hierros | 29 | — |
| 12 | Buenos Aires y todo el AMBA | 27 | — |
| 13 | Visita y presupuesto sin costo | 30 | **2** |
| 14 | Presupuesto por WhatsApp | 24 | — |
| 15 | Arenado sin vueltas, prolijo | 28 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenamos estructuras, tanques y máquinas en tu galpón. Queda listo para pintar. | 79 | **1** |
| 2 | Vamos con equipo y compresores propios. Unos 100 m² por día. No trasladás nada. | 79 | — |
| 3 | Sacamos óxido, pintura vieja y suciedad. Trabajamos in situ en CABA y el AMBA. | 78 | — |
| 4 | No pintamos ni revestimos: dejamos la superficie lista. Visita y presupuesto sin costo. | 87 | — |

**Rutas de visualización:** `arenado` / `industrial`

---

#### RSA 2 — `ag_obra-restauracion-estructuras` → `/servicios`

*Audiencia: arquitecto, constructora, encargado de obra. Mensaje: fachadas, paredes, ladrillo a la vista y estructuras, listas para pintar.*

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
| 11 | Unos 100 m² por día por equipo | 30 | — |
| 12 | Buenos Aires y todo el AMBA | 27 | — |
| 13 | Visita y presupuesto sin costo | 30 | **2** |
| 14 | Presupuesto por WhatsApp | 24 | — |
| 15 | Arenado sin vueltas, prolijo | 28 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenamos paredes, fachadas y ladrillo a la vista. Queda listo para pintar o revestir. | 85 | **1** |
| 2 | Vamos a tu obra con equipo propio: 2 equipos y compresores. Unos 100 m² por día. | 80 | — |
| 3 | Sacamos pintura vieja, óxido y revestimiento flojo. Trabajamos en CABA y el AMBA. | 81 | — |
| 4 | No pintamos ni revestimos: entregamos la superficie lista. Presupuesto sin costo. | 81 | — |

**Rutas de visualización:** `arenado` / `en-obra`

---

#### RSA 3 — `ag_pileta-sin-jerga` → `/arenado-de-piletas` · **variante DUEÑO DE CASA**

*Audiencia: dueño que ve la pintura descascarada y **no sabe que se llama "arenado"**. El titular 1 usa la palabra del cliente, no la del rubro. Es el gap sin explotar.*

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

**Rutas de visualización:** `pileta` / `sin-pintura`

---

#### RSA 4 — `ag_pileta-jerga` → `/arenado-de-piletas`

*Audiencia: el que ya busca "arenado de pileta/piscina". Titulares con la keyword entera para relevancia y Eficacia.*

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
| 14 | Arenado sin vueltas, prolijo | 28 | — |
| 15 | Coordinamos turno enseguida | 27 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenado de piletas y piscinas de hormigón. Queda lista para repintar o revestir. | 80 | **1** |
| 2 | Vamos a tu casa con equipo y compresores propios. Vos no movés ni preparás nada. | 80 | — |
| 3 | Sacamos toda la pintura vieja del hormigón. No pintamos ni revestimos. | 70 | — | ⚠️ corregido 14/08: no se remueve revestimiento |
| 4 | Visita y presupuesto sin costo en CABA y el AMBA. Coordinamos por WhatsApp. | 75 | — |

**Rutas de visualización:** `arenado` / `de-piletas`

---

#### RSA 5 — `ag_pileta-contratistas` → `/arenado-de-piletas` · **variante CONTRATISTA / PILETERO** *(en reserva)*

*Audiencia: piletero, remodelador o constructor que terceriza el arenado — el cliente recurrente. Mensaje: te sacamos la etapa sucia y lenta, precio cerrado, turnos que se cumplen.*

| # | Titular | Car. | Pin |
|---|---|---|---|
| 1 | Arenado de piletas por obra | 27 | **1** |
| 2 | Tercerizá el arenado | 20 | — |
| 3 | ¿Remodelás piletas? | 19 | **1** |
| 4 | Para pileteros y contratistas | 29 | **1** |
| 5 | Precio cerrado por pileta | 25 | **2** |
| 6 | Varias piletas por temporada | 28 | **2** |
| 7 | 2 equipos con compresor propio | 30 | — |
| 8 | Turnos que se cumplen | 21 | — |
| 9 | Te la dejamos para revestir | 27 | **2** |
| 10 | No pintamos ni revestimos | 25 | — |
| 11 | Buenos Aires y todo el AMBA | 27 | — |
| 12 | Vamos con el equipo a la obra | 29 | — |
| 13 | Presupuesto por WhatsApp | 24 | — |
| 14 | Arenado sin vueltas, prolijo | 28 | — |
| 15 | Tu proveedor de arenado | 23 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | ¿Remodelás o mantenés piletas? Tercerizá el arenado y ganá días de obra. | 72 | **1** |
| 2 | Llegamos con equipo propio, sacamos todo lo viejo y te la dejamos para revestir. | 80 | — |
| 3 | Precio cerrado por pileta y turnos que se cumplen. Varias piletas por temporada. | 80 | — |
| 4 | Vos ponés la terminación, nosotros el arenado. Escribinos por WhatsApp. | 71 | — |

**Rutas de visualización:** `arenado` / `contratistas`

---

#### RSA 6 — `ag_genericos` → `/`

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
| 10 | Unos 100 m² por día por equipo | 30 | — |
| 11 | Buenos Aires y todo el AMBA | 27 | — |
| 12 | Visita y presupuesto sin costo | 30 | **2** |
| 13 | Presupuesto por WhatsApp | 24 | — |
| 14 | Arenado sin vueltas, prolijo | 28 | — |
| 15 | Sacamos pintura vieja y óxido | 29 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenado en obra, galpones y piletas. Dejamos la superficie lista para pintar. | 77 | **1** |
| 2 | Vamos a tu obra, galpón o casa con equipo propio. Buenos Aires y todo el AMBA. | 78 | — |
| 3 | 2 equipos con compresores propios. Unos 100 m² por día. Rápido y prolijo. | 73 | — |
| 4 | No pintamos ni revestimos: preparamos la superficie. Presupuesto sin costo. | 75 | — |

**Rutas de visualización:** `arenados` / `buenos-aires`

---

#### RSA 7 — `ag_marca` → `/`

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
| 15 | Unos 100 m² por día por equipo | 30 | — |

| # | Descripción | Car. | Pin |
|---|---|---|---|
| 1 | Arenados Lucho: arenado sin vueltas en Buenos Aires y todo el AMBA. | 67 | **1** |
| 2 | Vamos a tu obra, galpón o casa con 2 equipos y compresores propios. | 67 | — |
| 3 | Dejamos la superficie lista para pintar o revestir. No pintamos ni revestimos. | 78 | — |
| 4 | Visita y presupuesto sin costo. Escribinos por WhatsApp y coordinamos. | 70 | — |

**Rutas de visualización:** `arenados` / `lucho`

---

### 6.4 Por qué el copy dice lo que NO hacemos

Cuatro titulares por grupo existen para **filtrar**, no para vender: "No pintamos: lo dejamos listo", "No pintamos ni revestimos", "No sirve pintar encima". No es modestia: con ~18 clics/día en toda la cuenta, cada clic de alguien que buscaba que le pinten la pileta es un lead menos. Decir el alcance en el anuncio baja el CTR bruto y sube la **calidad del WhatsApp**, que es el único KPI real.

Lo que **nunca** aparece en el copy (ni de Arenados Lucho ni generado por IA): normas, certificaciones, mediciones, granallado, ni la promesa de pintar o revestir. Ese filtro además protege la coherencia anuncio↔landing (`/servicios` y `/arenado-de-piletas` dicen exactamente lo mismo), que es el componente "experiencia en la página de destino" del Nivel de calidad.

---

### 6.5 🚨 Apagar la generación automática de copy — los TRES lugares

Son tres sistemas **independientes**. Apagar uno no apaga los otros. Los tres se verifican **con captura de pantalla antes de que corra el primer peso** y se re-verifican **una vez por mes**, registrando la fecha en `08-bitacora.md`.

#### (1) AI Max — nivel campaña y nivel grupo de anuncios

AI Max agrupa tres funciones que se encienden **juntas** con un solo toggle: *Concordancia con términos de búsqueda* (amplia + keywordless), *Personalización de texto* (los ex "Recursos creados automáticamente": Google escribe titulares y descripciones leyendo tu landing) y *Expansión de la URL final* (Google reemplaza tu URL por la página de tu dominio que considere más relevante). Al optar por AI Max, **Personalización de texto y Expansión de URL final quedan tildadas por defecto**.

- **Campaña nueva:** en la pantalla de creación, panel **"AI Max"** → dejar el toggle *"Optimizá tu campaña con AI Max"* en **OFF** antes de avanzar. Sacar captura.
- **Campaña existente:** `Campañas → Campañas → Configuración → [campaña] → sección "AI Max" → toggle OFF`. Si por algún motivo quedara encendido, **destildar como mínimo "Personalización de texto"** (apagarla apaga también la expansión de URL, porque la segunda depende de la primera).
- **Nivel grupo:** `Campañas → Grupos de anuncios → [grupo] → Configuración del grupo de anuncios (AI Max)` → verificar que la orientación por términos de búsqueda esté apagada. Es una pantalla distinta de la de campaña.
- **No activar "Concordancia amplia a nivel de campaña"** (`Configuración → Configuración adicional`): además de violar la regla de frase+exacta, es una **puerta de entrada automática a AI Max en septiembre de 2026**.

**Qué pasaría si queda encendido, en concreto:** (a) la IA podría escribir un titular con "granallado" o "metal blanco" copiando el lenguaje de la competencia — una promesa que el negocio no puede cumplir; (b) la expansión de URL mandaría una consulta de piletas a `/servicios` o a un caso de éxito en vez de `/arenado-de-piletas`, rompiendo el ruteo por intención que es la razón de ser de esa campaña.

> **Nota sobre "directrices de texto":** dentro de AI Max existen exclusiones de términos (25 por campaña) y restricciones de mensaje (40). **No se enciende AI Max para tener ese control**: son filtros semánticos probabilísticos, no deterministas. El control seguro es que la IA no escriba. Si algún día se prueba AI Max (no antes de 30+ conversiones limpias/mes durante 2 meses seguidos, y en una campaña experimental aparte), **primero** se cargan las exclusiones: granallado, granalla, shot blasting, sa3, sa 2, sa 2.5, iso, 8501, metal blanco, perfil de anclaje, rugosidad, espesor, micras, certificado, certificación, norma; y la restricción de mensaje: *"No prometas normas, certificaciones ni mediciones técnicas de ningún tipo. No digas que pintamos o revestimos: solo dejamos la superficie lista."*

#### (2) Recursos automatizados a nivel de CUENTA

Función separada de AI Max, **encendida por defecto**.

> ⚠️ **CORREGIDO el 11/08/2026 con la pantalla real de esta cuenta.** La lista que este documento anticipaba estaba **incompleta**: la cuenta tenía **10 tipos**, y dos de ellos son de los más peligrosos del proyecto y no estaban contemplados en ningún lado.

**Lista real y decisión tomada (11/08/2026):**

| Tipo | Estado hallado | Decisión | Por qué |
|---|---|---|---|
| **Llamadas dinámicas** | Activado | 🔴 **APAGAR** | **La CUARTA puerta del teléfono.** El proyecto tenía identificadas tres (extensión de llamada, informes de llamadas, recurso de ubicación). Google además **crea recursos de llamada por su cuenta** |
| **Títulos de anuncio más extensos** | Activado | 🔴 **APAGAR** | **Google escribe y alarga titulares.** Es generación automática de texto fuera de AI Max — la vía por la que se puede colar "granallado" o "metal blanco" |
| Fragmentos estructurados dinámicos | Activado | APAGAR | Los cargamos nosotros |
| Imágenes dinámicas | Activado | APAGAR | Extrae imágenes de la landing; cargamos las nuestras |
| Ubicaciones automáticas | Activado | APAGAR | Muestra el teléfono de la ficha |
| Aplicaciones automáticas | Activado | APAGAR | No hay app: es superficie inútil |
| Vínculos dinámicos a sitios | Desactivado | mantener OFF | Cargamos 6 sitelinks propios por campaña |
| **Calificaciones del vendedor** | Activado | ✅ **DEJAR** | Son estrellas de reseñas reales verificadas por Google: **no puede inventar nada** y suma el día que haya reseñas. Riesgo cero |
| **Nombres de empresas dinámicos** | Activado | ✅ **DEJAR** | Es identidad, no copy de venta. Además el asset manual manda por encima |
| **Logotipos de empresas dinámicos** | Activado | ✅ **DEJAR** | Ídem |

**El criterio, en una línea:** se apaga **todo lo que pueda escribir texto, mostrar el teléfono o elegir imágenes**; se deja lo que solo muestra identidad o reseñas verificadas.

- **Ruta:** `Campañas → Recursos → pestaña "Asociaciones" → menú ⋮ (arriba a la derecha) → "Recursos automatizados a nivel de cuenta" → ⋮ → "Configuración avanzada"` → desactivar por tipo (Google pide seleccionar un motivo y un comentario) → Guardar.
- **Apagar:** vínculos dinámicos, textos destacados dinámicos, fragmentos estructurados dinámicos, imágenes dinámicas y **ubicación**.
- **Dejar encendido (opcional):** solo "información del negocio" si se quiere el logo.
- **⚠️ Crítico de secuencia:** apagar los dinámicos **el mismo día** que se cargan los manuales de §6.6. Si se apagan sin cargar los propios, se pierde superficie en la SERP y se cae por debajo de los 6 sitelinks que suman a la Eficacia.
- Apagar los recursos automatizados **no afecta** a los recursos manuales ya cargados.

#### (3) Recomendaciones de aplicación automática

Google puede aplicar sola recomendaciones que agregan keywords, pasan todo a amplia, reescriben anuncios o suben presupuestos. **No hay interruptor maestro**: se destilda categoría por categoría.

- **Ruta:** `Campañas → Recomendaciones → pestaña "Aplicación automática"` → destildar **todas** las categorías → Guardar. Verificar también en `Administrador → Configuración de la cuenta → Aplicación automática`.
- Auditar lo ya aplicado en `Recomendaciones → Aplicación automática → Historial`.
- Google **agrega categorías nuevas** periódicamente y algunas llegan encendidas: un chequeo único no sirve.

#### Checklist mensual de defensa (2 minutos, con captura)

| Chequeo | Ruta | Estado esperado |
|---|---|---|
| AI Max en las 3 campañas | Configuración → AI Max | OFF |
| AI Max en cada grupo | Grupos de anuncios → Configuración del grupo | OFF |
| **Llamadas dinámicas** | Recursos → Asociaciones → ⋮ → Recursos automatizados | **OFF** |
| **Títulos de anuncio más extensos** | Ídem | **OFF** |
| Fragmentos, imágenes, ubicaciones y apps dinámicas | Ídem | OFF |
| Aplicación automática | Recomendaciones → Aplicación automática | Todo destildado |
| **Las 4 puertas del teléfono** | Recursos (filtro "Llamada") · Config. cuenta → Informes de llamadas · Recursos automatizados → Llamadas dinámicas · Recurso de ubicación | Las 4 cerradas |
| Anuncios con estado limitado | Anuncios → columna "Detalles de la política" | Sin rechazos |

⚠️ **El teléfono tiene CUATRO puertas, no tres.** Cerrar tres y suponer que quedó blindado fue exactamente el error que se cometió hasta el 11/08/2026.

---

### 6.6 Recursos (assets) a cargar

**Regla de jerarquía que rompe cuentas:** los recursos existen a nivel cuenta, campaña y grupo, y **el nivel más granular bloquea al superior**. Si existe un solo sitelink a nivel grupo, los sitelinks de campaña y cuenta **dejan de mostrarse en ese grupo**. Por eso:

> **Todo se carga a nivel CAMPAÑA.** Nada a nivel grupo. Nivel cuenta solo si en el futuro aparece algo verdaderamente transversal. Auditar con `Campañas → Recursos → filtro "Nivel"` cada vez que se agrega algo.

#### 6.6.1 Vínculos a sitios (sitelinks) — 6 por campaña

El recurso que más mueve la aguja: cada uno lleva **su propia URL final** (es ruteo de intención gratis), aporta superficie en la SERP, el impacto esperado de los recursos **sí entra en el Ad Rank**, y tener 6+ suma a la Eficacia. Se cargan con las **2 líneas de descripción** (70 caracteres extra gratis por sitelink).

**Ruta:** `Campañas → Recursos → botón + → Vínculo a sitio → nivel: Campaña`

**Campaña Obra-Industrial**

| Título (≤25) | Car. | Descripción 1 (≤35) | Descripción 2 (≤35) | URL final |
|---|---|---|---|---|
| Arenado en obra | 15 | Paredes, fachadas y ladrillo | Queda listo para pintar | `/servicios` |
| Galpones y estructuras | 22 | Tanques, silos y hierros | Vamos a tu planta o galpón | `/casos-de-exito/tanque-industrial` |
| Trabajos que hicimos | 20 | Fotos reales de antes y después | Obras, galpones y piletas | `/casos-de-exito` |
| Preguntas frecuentes | 20 | Cuánto tarda y cuánto sale | Qué hacemos y qué no | `/preguntas-frecuentes` |
| Pedir presupuesto | 17 | Visita y presupuesto sin costo | Coordinamos por WhatsApp | `/contacto` |
| Arenado de piletas | 18 | Sacamos la pintura vieja | Lista para pintar o revestir | `/arenado-de-piletas` |

**Campaña Piletas**

| Título (≤25) | Car. | Descripción 1 (≤35) | Descripción 2 (≤35) | URL final |
|---|---|---|---|---|
| Arenado de piletas | 18 | Sacamos toda la pintura vieja | Vamos a tu casa, AMBA | `/arenado-de-piletas` |
| Antes y después | 15 | Piletas reales que hicimos | Mirá cómo quedan | `/casos-de-exito/arenado-pileta` |
| Preguntas frecuentes | 20 | ¿Pintan o revisten? No | Cuánto tarda y cuánto sale | `/preguntas-frecuentes` |
| Pedir presupuesto | 17 | Mandanos una foto por WhatsApp | Visita sin costo | `/contacto` |
| Otros servicios | 15 | Obra, fachadas y galpones | También arenamos estructuras | `/servicios` |
| Quiénes somos | 13 | Equipo de oficio, no promesas | 2 equipos propios | `/` |

**Campaña General-Marca**

| Título (≤25) | Car. | Descripción 1 (≤35) | Descripción 2 (≤35) | URL final |
|---|---|---|---|---|
| Qué arenamos | 12 | Obra, galpones y estructuras | Vamos con equipo propio | `/servicios` |
| Arenado de piletas | 18 | Sacamos la pintura vieja | Lista para pintar o revestir | `/arenado-de-piletas` |
| Trabajos que hicimos | 20 | Fotos reales de antes y después | Obras, galpones y piletas | `/casos-de-exito` |
| Preguntas frecuentes | 20 | Cuánto tarda y cuánto sale | Qué hacemos y qué no | `/preguntas-frecuentes` |
| Pedir presupuesto | 17 | Visita y presupuesto sin costo | Coordinamos por WhatsApp | `/contacto` |
| Arenado industrial | 18 | Estructuras, tanques y silos | Vamos a tu planta o galpón | `/casos-de-exito/nave-ferroviaria` |

**URLs válidas del sitio (las únicas que se pueden usar):** `/` · `/servicios` · `/arenado-de-piletas` · `/casos-de-exito` · `/casos-de-exito/nave-ferroviaria` · `/casos-de-exito/estructura-naval` · `/casos-de-exito/pasarela-urbana` · `/casos-de-exito/tanque-industrial` · `/casos-de-exito/arenado-pileta` · `/preguntas-frecuentes` · `/contacto`.
**Prohibido** usar las rutas legacy (`/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido`): tienen 301 pero no se usan como URL final de un asset. **No existe `/blog`.**

**⚠️ Revisar antes de publicar:** si quedaron sitelinks heredados a nivel cuenta de la cuenta vieja, se aplican solos a las campañas nuevas y pueden apuntar a rutas eliminadas. Auditarlos en `Campañas → Recursos → filtro Nivel = Cuenta`.

#### 6.6.2 Textos destacados (callouts) — 10 por campaña

No son clickeables; Google muestra entre 2 y 6. Máximo 25 caracteres, pero conviene ≤20 porque en móvil se cortan los largos primero.

**Ruta:** `Campañas → Recursos → botón + → Texto destacado → nivel: Campaña`

| Obra-Industrial | Piletas | General-Marca |
|---|---|---|
| Equipo propio (13) | Piletas de hormigón (19) | Equipo propio (13) |
| Vamos a tu obra (15) | Vamos a tu casa (15) | Trabajamos in situ (18) |
| Trabajamos in situ (18) | Sin lijar a mano (16) | 2 equipos propios (17) |
| 2 equipos propios (17) | Listo para revestir (19) | Listo para pintar (17) |
| Listo para pintar (17) | No pintamos: preparamos (23) | Obra, galpón y pileta (21) |
| No pintamos: preparamos (23) | Presupuesto sin costo (21) | No pintamos: preparamos (23) |
| Presupuesto sin costo (21) | CABA y Gran Bs. As. (19) | Presupuesto sin costo (21) |
| CABA y Gran Bs. As. (19) | Trabajamos con pileteros (24) | CABA y Gran Bs. As. (19) |
| Turnos rápidos (14) | Turnos rápidos (14) | Turnos rápidos (14) |
| Precio por trabajo (18) | Mandá una foto (14) | Precio por trabajo (18) |

#### 6.6.3 Fragmentos estructurados

Encabezado predefinido + mínimo 3 valores (recomendado 4+), cada valor ≤25 caracteres. Los textos destacados dicen **por qué vos**; los fragmentos dicen **qué hacés**.

**Ruta:** `Campañas → Recursos → botón + → Fragmento estructurado → elegir encabezado → nivel: Campaña`

| Campaña | Encabezado | Valores |
|---|---|---|
| Obra-Industrial | Catálogo de servicios | Arenado en obra · Fachadas y frentes · Ladrillo a la vista · Estructuras metálicas · Tanques y silos · Galpones y techos · Camiones y acoplados |
| Piletas | Tipos | Piletas de hormigón · Piscinas · Sacado de pintura vieja · Antes de revestir · Antes de pintar · Obras de pileteros |
| General-Marca | Catálogo de servicios | Arenado en obra · Arenado industrial · Arenado de piletas · Estructuras y tanques · Fachadas y paredes |

*(No usar el encabezado "Barrios" para las zonas del AMBA: está pensado para inmobiliarias y se lee raro. La zona ya va en titulares y textos destacados.)*

#### 6.6.4 Recursos de imagen

Formatos: **cuadrada 1:1 obligatoria** (recomendado 1200×1200, mínimo 300×300) y **horizontal 1.91:1 opcional** (recomendado 1200×628, mínimo 600×314). Hasta 5.120 KB por archivo. Se muestran sobre todo en móvil.

**Ruta:** `Campañas → Recursos → botón + → Imagen → subir → recortar 1:1 y 1.91:1 → nivel: Campaña`

Cargar **4-6 fotos reales de trabajo, sin texto encima ni logo grande** (se rechazan por política). Material disponible en el repo:

| Campaña | Fotos sugeridas (ruta en el repo) |
|---|---|
| Piletas | `public/images/services/arenadoParticular/Piletas/` (6 fotos: IMG_2454, 2455, 2456, 2457, 2478, 2479) |
| Obra-Industrial | `public/images/services/arenadoIndustrial/Tanque/` · `.../Nave/` · `.../Pasarela/` · `.../EstructuraNaval/` |
| General-Marca | mezcla: 1 pileta + 1 tanque + 1 estructura |

En este negocio la foto de **antes/después** es el argumento de venta. Prioridad: después de sitelinks, callouts y fragmentos.

#### 6.6.5 Nombre y logo del negocio

Nombre (≤25 car.): **`Arenados Lucho`**. Logo cuadrado 1:1 (recomendado 1200×1200, mínimo 128×128, PNG/JPG).

**Ruta:** `Campañas → Recursos → botón + → Información del negocio`. Requiere **verificación del anunciante** (`Administrador → Verificación del anunciante`), que puede tardar semanas: **arrancar el trámite en paralelo al armado de campañas**, por DNS del dominio `arenadoslucho.com` (está en Vercel, es rápido). Aun verificado, Google no garantiza que se muestre.

**⚠️ Bloqueante detectado:** el único logo del repo (`public/images/logo-solo-azul.png`) mide **423×226 px** — no es cuadrado y no llega al recomendado. Hace falta una versión cuadrada 1200×1200, legible a 48 px, antes de cargar este recurso.

#### 6.6.6 Ubicación — **NO activar por ahora**

Requiere el Perfil de Empresa (GBP) reclamado y verificado, y hoy la ficha existe pero está **sin reclamar**.

**Ruta (cuando corresponda):** `Herramientas → Cuentas vinculadas → Perfil de Empresa`, luego `Herramientas → Biblioteca compartida → Administrador de ubicaciones`.

Aunque se reclame la ficha, **hay dos razones propias de este negocio para no encenderlo de inmediato**: (1) el recurso de ubicación **muestra el teléfono** de la ficha, lo que reabre el problema de las llamadas de gente buscando empleo — el motivo exacto por el que se quitó la extensión de llamada — y expone públicamente un número que el sitio protege del scraping; (2) Arenados Lucho trabaja **in situ**: no hay local que el cliente visite, la dirección no aporta valor comercial. Reclamar la ficha sí (sirve para orgánico y pack local); activar el asset de ubicación en Ads es una decisión posterior y explícita del dueño.

#### 6.6.7 Sufijo de URL final (una vez, a nivel campaña)

Sin esto habría que pegar UTMs a mano en 18 sitelinks y re-hacerlo cada vez que se cambia uno.

**Ruta:** `Campañas → Campañas → Configuración → [campaña] → Configuración adicional → Opciones de URL de la campaña → Sufijo de URL final`

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}&mt={matchtype}
```

Las URLs finales de anuncios y sitelinks quedan **limpias** (sin UTM propio) para no duplicar ni desincronizar. Verificar además que el **etiquetado automático (gclid)** esté activo en `Administrador → Configuración de la cuenta → Etiquetado automático` — sin gclid no hay importación de conversiones. Antes de encender, abrir en el navegador `https://www.arenadoslucho.com/arenado-de-piletas?utm_source=google&utm_medium=cpc&gclid=TEST123` y confirmar **200** con los parámetros intactos.

---

### 6.7 Lo que NO se carga (y por qué)

| Recurso | Decisión | Motivo |
|---|---|---|
| **Recurso de llamada** | ⛔ Prohibido | Decisión del dueño (28/07/2026): canal único WhatsApp. El teléfono en el anuncio traía llamadas de gente **buscando empleo**. Además Google está retirando los anuncios de solo llamada y va a empujar esta recomendación una y otra vez: **descartarla** cada vez que aparezca. Verificar en 3 lugares: `Campañas → Recursos → filtro tipo "Llamada"` (vacío), recursos automatizados de cuenta (sin llamada), y `Administrador → Configuración de la cuenta → Informes de llamadas` (desactivado, para evitar el número de reenvío de Google). |
| **Formulario de clientes potenciales (lead form)** | ⛔ Prohibido | El lead entra en un formulario alojado por Google: **no llega al WhatsApp** del dueño y **no dispara `contact_whatsapp`** — rompe la única conversión de la cuenta. Google quitó en julio de 2026 el requisito de gasto histórico que lo bloqueaba, así que ahora aparece disponible y tentador en el asistente. No se usa. |
| **Recurso de precio** | ⛔ No usar | El arenado se cotiza por m², estado de la superficie y accesibilidad. Publicar "desde $X" ancla el precio antes de la visita, atrae al comprador que compara por precio (el peor cliente para un servicio de oficio) y obliga a mantenerlo actualizado con inflación en ARS. |
| **Recurso de promoción** | ⚠️ Solo estacional | Únicamente en la campaña de Piletas y solo si el dueño sostiene la oferta. Alternativa de menor mantenimiento y mismo efecto: un texto destacado ("Turnos de septiembre") que se cambia en 10 segundos y no tiene fechas de vigencia que se venzan solas. |

---

### 6.8 QA antes de publicar y mantenimiento

**Checklist de publicación (por grupo):**

1. Pasar **todo** el texto por la lista de bloqueo antes de pegarlo: `granallado · granalla · shot blasting · sa3 · sa 2 · sa 2.5 · iso · 8501 · metal blanco · perfil de anclaje · rugosidad · micras · espesor · certific- · norma · garantizamos · pintamos (salvo en "no pintamos") · revestimos (salvo en "no revestimos")`.
2. Verificar que el contador de la UI coincida con la columna "Car." de las tablas (si difiere, la UI manda).
3. Confirmar los **pins**: 3 titulares en posición 1, 3 en posición 2, 1 descripción en posición 1. Nunca 1 solo asset por posición.
4. Confirmar la **URL final** del grupo (§6.1) y que responda 200 con el sufijo de UTM.
5. Aceptar Eficacia **"Buena"** (o "Media") y no tocar nada más.
6. Guardar el copy publicado como texto plano versionado en `contexto/marketing/` (propuesta: `14-copy-ads.md`, un bloque por campaña) para que sea auditable y diffeable, y no viva solo dentro de la interfaz de Google.

**Verificación post-publicación:**

- **Día 1 y día 3:** `Herramientas → Solución de problemas → Administrador de políticas` — cazar rechazos y estados "Aprobado (limitado)". Con 3 campañas creadas el mismo día, un rechazo silencioso puede dejar un grupo sin anuncios activos y la campaña gastando cero.
- **Nunca googlearse** para "ver si sale": genera impresiones sin clic y baja el CTR (39% del Nivel de calidad). Usar `Herramientas → Solución de problemas → Vista previa y diagnóstico de anuncios`, en español y ubicación CABA / Gran Buenos Aires. Dos tests obligatorios: que una consulta de pileta dispare el anuncio de **Piletas** (no el de Obra-Industrial), y que un término de empleo **no dispare nada**.

**Mantenimiento del copy — mensual, no semanal:**

- `Campañas → [campaña] → Anuncios → menú ⋮ del RSA → "Ver detalles del recurso"`: actuar **solo** sobre assets etiquetados "Baja" **que además tengan volumen real**. Con ~18 clics/día en toda la cuenta, la mayoría va a quedar en "Aprendiendo" durante meses — eso es normal, no un problema a resolver.
- No tocar copy antes de 4-6 semanas. Rotar titulares mirando etiquetas sin datos es ruido puro y reinicia el aprendizaje.
- La señal de verdad no es la etiqueta del asset: es el **informe de términos de búsqueda** y la **calidad de las conversaciones de WhatsApp** que recibe el dueño.

---

### ⚠️ A confirmar antes de publicar

1. **Rendimiento "~100 m² por día por equipo"** — aparece en 3 titulares y 2 descripciones. Es un dato afirmado, no medido: confirmarlo con el dueño antes de publicarlo como promesa en un anuncio. Si no se puede sostener, reemplazar esos titulares por "2 equipos: turnos rápidos" y "Coordinamos turno enseguida".
2. **Plazo de ejecución** — deliberadamente **no** aparece ningún "en el día" ni plazo concreto en el copy (el mapa de la landing lo marca como no verificado). No agregarlo hasta confirmarlo.
3. **Nombres finales de los grupos de anuncios** — deben coincidir exactamente con los de la sección de estructura de campañas; si esa sección mantiene 4 grupos en Obra-Industrial, aplicar el mapeo indicado en §6.1.
4. **Resolución real de las fotos** — los archivos con extensión `.PNG` del repo no tienen cabecera PNG válida (probablemente son JPG renombrados): hay que abrirlos y verificar que lleguen a 1200×1200 antes de recortar a 1:1. Confirmar también cuáles son "antes" y cuáles "después", y que ninguna tenga personas identificables ni texto encima.
5. **Logo cuadrado** — el disponible es 423×226; hace falta una versión 1200×1200 para el recurso de información del negocio.
6. **Verificación del anunciante** — arrancarla ya (por DNS del dominio). Bloquea el nombre y el logo del negocio.
7. **Pantalla de AI Max en la creación de campaña** — hay reportes contradictorios sobre si viene activada por defecto en cuentas nuevas de Argentina. **Sacar captura del panel antes de guardar y después de guardar**, en cada una de las 3 campañas.
8. **Sitelinks heredados a nivel cuenta** de la cuenta vieja — auditar que no apunten a rutas eliminadas antes de publicar.

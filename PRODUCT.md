# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Aliado #1 — PYME con galpón, taller o planta.** Encargado o dueño que tiene estructuras metálicas, tanques, camiones, acoplados o hierros para recuperar. Tiene terreno propio, así que no hay quejas de vecinos por el polvo. No pide nada técnico. Es el trabajo **más rentable por día** del negocio.

**El norte — obra en construcción y restauración de edificios.** Arquitecto, encargado de obra o constructora. Paredes, fachadas, ladrillo a la vista, vigas. Tickets altos sin requisitos técnicos. Es hacia donde el negocio quiere crecer.

**Dueño de casa con pileta.** **No sabe que el servicio se llama "arenado".** Busca el problema: "sacar la pintura de la pileta", "se me descascara". Es el lead más barato del historial.

**Contratistas y pileteros.** Remodelan piletas y tercerizan el arenado. **Cliente recurrente**: varias piletas por temporada. El mismo perfil aplica a pintores que subcontratan la preparación.

## Product Purpose

Servicio de arenado a domicilio en Buenos Aires y AMBA. El sitio existe para **conseguir consultas calificadas por WhatsApp**: no informa ni vende online, empuja a abrir una conversación con contexto suficiente para cotizar.

Éxito = mensajes de WhatsApp que se convierten en trabajos cobrados, con el mix desplazándose hacia obra y PYME.

## Positioning

**"Arenado sin vueltas."** Se saca pintura vieja, óxido y lo descascarado, y se entrega la superficie **lista para pintar o revestir**. Todo **in situ**, con equipos y compresores propios.

Lo que ningún competidor puede copiar: **el oficio viene de familia**. Se aprendió trabajando, no en un curso, y uno de los arenadores del equipo lleva **más de 20 años** en el rubro.

## Operating Context

- **No hay taller.** Todo se hace en el lugar: obra, galpón, planta o casa. El cliente no traslada nada.
- **2 equipos propios completos**, con compresores propios (no dependen de la energía del lugar).
- **Zona: CABA y Gran Buenos Aires, radio ~60 km.** *(Confirmado 14/08/2026.)*
- **Canal único: WhatsApp.** Hay **alguien dedicado a contestar** — la promesa de "respondemos rápido" se sostiene. *(Confirmado 14/08/2026.)*
- Visita y presupuesto **sin costo**, previos a cualquier trabajo. El precio se cierra por trabajo, no por lista.
- **Estacionalidad:** las piletas se concentran de agosto a diciembre. En invierno se vende anticipación.

## Capabilities and Constraints

**Sí se hace:** arenado en obra y construcción · estructuras metálicas, tanques y silos · fachadas, paredes y ladrillo a la vista · vigas e hierros · camiones y acoplados en galpón · **piletas de hormigón pintadas**.

**No se hace, y es una regla dura:**

- ⛔ **Arenado técnico medido** — Sa3, ISO 8501, metal blanco, perfil de anclaje, mediciones, informes. Se rechazan trabajos que lo exijan, aun con buena plata.
- ⛔ **Granallado.** Otro proceso, no se presta.
- ⛔ **El pintado o el revestimiento final.** Se entrega preparado; la terminación la da el cliente, su pintor o su piletero.
- ⛔ **Muebles, rejas de hogar, autos y motos particulares, piezas sueltas chicas.** Se aceptan si llegan, pero no se les compra tráfico.

**Límite de piletas** *(confirmado 14/08/2026)*: se saca **pintura sobre hormigón**. **No** se remueve revestimiento adherido (venecitas, mosaico) y **no** se trabajan piletas de **fibra de vidrio**.

**Rendimiento:** ~100 m²/día por equipo, **pero solo en superficies cómodas y planas** (paredes, fachadas, piletas). En estructuras metálicas complejas o con revestimientos muy resistentes se dilata. **Nunca publicar el número sin la condición.**

**Plazo de pileta estándar:** un día.

**Restricción técnica del sitio:** el teléfono **no existe públicamente**. Se arma partido en dos strings en runtime y se abre con `window.open`, nunca en un `href` ni en el schema. Exponerlo trajo llamadas de gente buscando empleo. Sin formularios, sin backend, sin recolección de datos.

## Brand Commitments

- **Nombre:** Arenados Lucho.
- **Idioma:** español de Argentina, tono llano y directo. Nada de jerga de licitación ("mitigación de riesgo", "relevamiento del sustrato").
- **Voz:** oficio, no marketing. Se dice lo que no se hace: filtra al comprador equivocado y da credibilidad.
- **Prohibido en todo texto** (sitio, metadata, schema, anuncios): Sa3, ISO 8501, metal blanco, perfil de anclaje, rugosidad, granallado, "certificado", "norma", "garantizamos".
- **Logo:** `public/images/favicon.png` (1906×1911). Los `logo-solo-*` son apaisados (423×226).

## Evidence on Hand

- **60+ fotos reales de trabajos** en `public/images/services/` (industrial: nave, tanque, pasarela, estructura naval; particular: piletas, piezas, vehículos). Mayormente 828×828.
- **5 casos publicados** en `src/lib/projectsInfo.json`. ⚠️ Sus textos siguen en lenguaje de pliego y contradicen el tono del resto del sitio.
- **Google Business Profile reclamado** (dirección en Del Viso, horario y categoría cargados).
- ⛔ **No hay reseñas todavía.** No inventar testimonios, cantidad de clientes, años de la empresa (son ~8, no 20 — lo de 20 es el oficio del arenador, no la antigüedad) ni precios de referencia.
- ⛔ **No está marcado cuál foto es el "antes" de cuál "después".**

## Product Principles

1. **La conversión es abrir WhatsApp con contexto suficiente para cotizar.** Todo lo demás es secundario.
2. **Rutear por trabajo, no por tipo de comprador.** El contratista que remodela piletas es una empresa comprando algo "particular".
3. **No asumir que el visitante conoce la palabra "arenado".** Un segmento entero busca el problema, no el servicio.
4. **Decir que no es una herramienta de venta.** Declarar los límites filtra al comprador equivocado y da credibilidad al que sirve.
5. **Ninguna promesa sin respaldo.** Un dato condicional se publica con su condición o no se publica.

## Accessibility & Inclusion

No se estableció un requisito específico del producto. El sitio se usa mayormente **desde el celular** —el dueño de casa con la foto de la pileta en la mano, el encargado en la obra—, así que mobile-first es una restricción real de uso, no una preferencia.

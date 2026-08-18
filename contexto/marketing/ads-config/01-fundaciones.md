## 1. Fundaciones de la cuenta

Todo lo de esta sección se ejecuta **antes de crear la primera campaña y antes de cargar saldo**. Son cambios que, hechos después, obligan a rehacer trabajo (los objetivos de conversión se configuran campaña por campaña) o directamente no se pueden deshacer (moneda, zona horaria). Cada paso termina con una **captura de pantalla** y una línea en `contexto/marketing/08-bitacora.md`.

---

### 1.1 El orden correcto (no es negociable)

La regla que gobierna toda la sección: **la medición se configura ANTES que las campañas**. Si se crean las campañas primero, heredan los objetivos de conversión sucios de la cuenta y hay que entrar a corregir campaña por campaña, reseteando el aprendizaje de puja cada vez.

| # | Paso | Por qué va acá | Bloquea a |
|---|------|----------------|-----------|
| F0 | Decidir cuenta a usar (existente vs. nueva) | Determina si hay que rehacer facturación y perder historial de Nivel de calidad | Todo |
| F1 | Modo experto confirmado | En Modo inteligente no existen concordancias, negativas ni scripts | Todo |
| F2 | Verificar moneda ARS + zona horaria `America/Buenos_Aires` | **Irreversibles**. Si están mal, la única salida es cuenta nueva | F3 en adelante |
| F3 | Facturación (perfil de pago, datos fiscales, método) | Sin esto los anuncios no publican; con esto mal cargado, la factura no sirve al contador | F8 |
| F4 | Accesos, usuarios y seguridad (2FA + passkey) | Los scripts quedan atados al usuario que los autoriza | F5, F7 |
| F5 | Vinculaciones (GA4, Search Console, GBP cuando se reclame) | La importación de conversiones necesita el vínculo GA4 + etiquetado automático | F6 |
| F6 | **Medición**: etiqueta/GTM, acción de conversión única, objetivos de cuenta | Es lo que define hacia dónde puja todo lo demás | F8 |
| F7 | Apagar defaults de cuenta (auto-apply, recursos automatizados, informes de llamadas) + cargar negativas de cuenta y listas compartidas | Las negativas se aplican ANTES de cualquier expansión de IA; el auto-apply puede reintroducir amplia o keywords de empleo | F8 |
| F8 | Recién ahora: crear campañas (Sección 2) | — | — |

**Regla de corte:** no se carga saldo hasta que F1→F7 estén verificados por captura. Con la cuenta sin saldo, ningún error de configuración cuesta plata.

---

### 1.2 F0 — Qué cuenta usar: la existente `953-841-6905`

La cuenta actual ya tiene **moneda ARS y zona horaria `America/Buenos_Aires`** (verificado en la auditoría del 26/07/2026), que son exactamente los dos únicos parámetros que justificarían abrir una cuenta nueva. Por lo tanto:

> **Decisión recomendada: se conserva el ID de cuenta `953-841-6905` y se reconstruye TODA la estructura desde cero adentro.** No se "arregla" nada viejo.

| Conservar la cuenta existente | Abrir cuenta nueva |
|---|---|
| ✅ Mantiene el historial de Nivel de calidad a nivel dominio/keyword | ❌ Arranca con QS sin historial → CPC inicial más caro |
| ✅ Facturación, perfil de pago y datos fiscales ya cargados | ❌ Rehacer todo el alta fiscal |
| ✅ Los 4 scripts ya instalados (guardián 06 + lectura 02/03/04) siguen corriendo | ❌ Reinstalar y reautorizar los 4 scripts |
| ✅ El ID de conversión existente sigue sirviendo | ❌ Nueva etiqueta, nuevo tag en GTM |
| ⚠️ Arrastra datos de conversión inflados (contaban visitas y engagements) | ✅ Medición limpia de origen |

El único contra real —los datos sucios— se neutraliza con dos acciones concretas, no con una cuenta nueva:

1. **Exclusión de datos** para todo el período anterior a la fecha de corte de medición limpia.
   `Herramientas → Biblioteca compartida → Estrategias de puja → pestaña "Controles avanzados" → Exclusiones de datos`
   Rango: desde el inicio del historial hasta el día en que `contact_whatsapp` queda como única acción principal verificada. Anotar la fecha exacta de corte en la bitácora.
2. **Campañas viejas en estado REMOVED/PAUSED, nunca reactivadas.** No se edita ni una campaña vieja: se crean las 3 nuevas con la convención de nombres de la Sección 2 y las viejas quedan como archivo histórico.

**Higiene previa dentro de la cuenta existente (hacer en F0):**
- `Campañas → Campañas` → confirmar que `busqueda-arenadoIndustrial` quede **PAUSADA** y `Leads-Performance Max-3` **PAUSADA** (nunca reactivar la de Máximo Rendimiento: no hay control de términos ni de landing).
- Renombrar la cuenta a algo que los scripts y los reportes puedan identificar: `Administrador → Configuración de la cuenta → Nombre de la cuenta` → **`Arenados Lucho — AMBA`**.

---

### 1.3 F1 — Modo experto: cómo NO caer en el Modo inteligente

El "Modo inteligente" (Smart mode) es la interfaz simplificada que Google ofrece por defecto a cuentas nuevas. **No sirve para este proyecto**: no permite elegir tipos de concordancia, no permite palabras clave negativas a escala, no expone la sección Redes, no tiene Biblioteca compartida ni Scripts, y sus "campañas inteligentes" pujan solas sin control de landing. Con las reglas duras del proyecto (frase y exacta, amplia prohibida, negativas de empleo y técnicas obligatorias) es directamente incompatible.

**Cómo verificar que la cuenta está en modo experto (30 segundos):**
- El menú lateral izquierdo muestra **Campañas · Objetivos · Herramientas · Facturación · Administrador**.
- Existe `Herramientas → Acciones masivas → Scripts` (en Modo inteligente esa sección no aparece).
- Si en cambio ves una interfaz reducida con "Anuncios inteligentes" y un solo panel de rendimiento, la cuenta está en Modo inteligente.

**Si hubiera que cambiar a modo experto:** `Administrador → Configuración de la cuenta` → enlace **"Cambiar al modo experto"** (en algunas interfaces el enlace figura al pie del menú de configuración). ⚠️ A confirmar por captura: la ubicación exacta del enlace varía según despliegue de UI.

**Si alguna vez hay que crear una cuenta nueva** (solo si moneda o zona horaria estuvieran mal): en el alta, Google fuerza a crear una campaña. El camino correcto es, en la primera pantalla de objetivo, hacer clic en **"Cambiar al modo experto"** y luego en **"Crear una cuenta sin una campaña"**. Nunca completar el asistente de alta.

⛔ **Prohibido en esta cuenta:** campañas inteligentes, Máximo Rendimiento (PMax), Display, Demand Gen y Video. Solo campañas de **Búsqueda**.

---

### 1.4 F2 — Moneda y zona horaria (los dos parámetros irreversibles)

| Parámetro | Valor exacto que debe figurar | Dónde se verifica |
|---|---|---|
| Moneda de facturación | **ARS — Peso argentino** | `Facturación → Configuración` (campo "Moneda") |
| Zona horaria de la cuenta | **(GMT-03:00) Buenos Aires** — `America/Buenos_Aires` | `Administrador → Configuración de la cuenta → Preferencias → Zona horaria` |
| País de facturación | **Argentina** | `Facturación → Configuración` |

⚠️ **Advertencias duras:**
- **La moneda NO se puede cambiar nunca.** Si estuviera en USD, la única salida es una cuenta nueva. (Verificado: está en ARS.)
- **La zona horaria NO se cambia desde la interfaz.** Requiere gestión con soporte de Google, se permite una sola vez y **parte el historial de informes en dos** (los días de la transición quedan mal contabilizados). Tratarla como irreversible.
- La zona horaria manda sobre **todo** lo operativo: el reinicio diario del presupuesto a medianoche, la ventana de los informes, el horario en que corren los scripts (el guardián `06` a las 06:00 AR) y la programación de anuncios. Si estuviera en otra zona, el guardián de presupuesto mediría "el mes" con un desfase.

**Acción concreta:** entrar a las dos pantallas, sacar captura de ambas, pegarlas en la bitácora con fecha. Es un chequeo de 2 minutos que evita una pérdida total del historial.

---

### 1.5 F3 — Facturación

`Facturación → Resumen · Configuración · Métodos de pago · Documentos`

| Campo | Valor / criterio |
|---|---|
| País | **Argentina** (define moneda e impuestos; no se cambia después) |
| Tipo de cuenta | **Empresa** u **Organización** si se factura con CUIT; **Individual** solo si el dueño factura como monotributista a su nombre — ⚠️ A confirmar con el contador |
| Nombre y dirección fiscal | Los que figuran en AFIP, **exactos** (si no coinciden, la factura no es deducible) |
| CUIT / condición frente al IVA | ⚠️ A confirmar con el contador |
| Perfil de pago | Uno solo. Verificar que no haya un perfil de pago viejo de una agencia asociado a la cuenta |
| Contacto de facturación | Mail del dueño **+** `impruvagencia@hotmail.com` en copia, para que las alertas de saldo no se pierdan |

**Método de pago — decisión a tomar:**

| Opción | Ventaja | Riesgo |
|---|---|---|
| **Pagos automáticos** (tarjeta, se cobra por umbral o cada 30 días) | La campaña nunca se apaga sola; no hay que acordarse de recargar | El único tope es el presupuesto diario + el script guardián |
| **Pagos manuales / prepago** (recargar saldo) | Tope físico natural: sin saldo no hay gasto | La cuenta se apaga en silencio a mitad de mes y se pierde el aprendizaje de puja (**es el estado actual: banner "Se agotó el saldo"**) |

> **Recomendación:** pagos automáticos si el método de pago lo permite, porque un corte de saldo a mitad de mes reinicia el aprendizaje y arruina la lectura del CPA. El tope real no lo da el saldo: lo dan el **presupuesto diario nativo** y el **script guardián** (ver 1.9). Si el dueño prefiere prepago por control psicológico, recargar **150.000 ARS** de una y poner recordatorio al día 20.

⚠️ **Dos aclaraciones que evitan discusiones a fin de mes:**
- Los **"presupuestos de cuenta"** (el tope mensual nativo real) **solo existen con facturación mensual por invoicing**, no con tarjeta. Por eso el script guardián de 300.000 ARS/mes no es redundante: es el único tope duro disponible.
- El **tope de 300.000 ARS/mes es de gasto de medios**, no de costo final: sobre ese monto se aplican IVA y percepciones argentinas. El débito real de la tarjeta será mayor. ⚠️ A confirmar con el contador el porcentaje vigente en 2026.
- Existe además un **cargo operativo** sobre el gasto que se sirve fuera de Argentina (aplicable a ciertos métodos de facturación). Es un motivo más para dejar la segmentación en **"Presencia"** y solo Argentina.

---

### 1.6 F4 — Accesos, usuarios y seguridad

`Administrador → Acceso y seguridad` → pestañas **Usuarios · Administradores · Solicitudes de acceso · Seguridad**

| Persona / mail | Nivel de acceso | Motivo |
|---|---|---|
| `josemaaria20@gmail.com` (dueño) | **Administrador** | Único que puede dar accesos, cambiar facturación y vincular cuentas |
| `impruvagencia@hotmail.com` (operación/marketing) | **Estándar** | Puede operar campañas y ver reportes; no toca facturación ni accesos |
| Contador | **Solo facturación** (si hace falta) | Ve documentos, no toca campañas |

**Reglas:**
1. **Nunca compartir usuario y contraseña.** Cada persona entra con su propio mail invitado. Si se comparte la clave, el `Historial de cambios` deja de servir para saber quién tocó qué —que es la herramienta principal para detectar cambios automáticos de Google.
2. **Verificación en 2 pasos activada** en la cuenta de Google del dueño, y **passkey configurada**: desde el 15/07/2026 Google la pide para acciones sensibles (agregar usuarios, cambiar facturación, actualizar vínculos de cuenta). Sin passkey, esas acciones se bloquean en medio de una sesión guiada.
3. **Auditar la pestaña "Administradores"**: ahí figuran las cuentas de administrador (MCC) vinculadas. Si aparece un MCC de una agencia vieja, **desvincularlo** — ese MCC puede seguir modificando la cuenta y aplicando recomendaciones. ⚠️ A confirmar: si hay algún MCC vinculado hoy.
4. **Revisar "Solicitudes de acceso"** cada vez que alguien diga ser representante de Google. Un rep legítimo no necesita acceso de administrador para dar soporte.
5. ⚠️ **Los scripts corren con la identidad del usuario que los autorizó.** Si se elimina o degrada ese usuario, los 4 scripts (guardián + lectura) dejan de ejecutarse **sin ningún aviso**. Antes de tocar accesos, verificar en `Herramientas → Acciones masivas → Scripts` con qué usuario están autorizados.

**Notificaciones:** `Administrador → Configuración de la cuenta → Preferencias de notificaciones` → dejar activadas al menos **alertas de facturación**, **desaprobaciones de anuncios** y **alertas de la cuenta**; desactivar las promocionales ("ideas y sugerencias de rendimiento"), que son el canal por el que llega la presión para aplicar recomendaciones.

---

### 1.7 F5 — Vinculaciones

`Administrador → Vinculación de cuentas`

| Producto | ¿Se vincula? | Cómo / condición |
|---|---|---|
| **Google Analytics 4** | ✅ **Obligatoria** | `Administrador → Vinculación de cuentas → Google Analytics (GA4) → Vincular`. Requiere ser Administrador en Ads y Editor en la propiedad GA4. ⚠️ A confirmar: ID de la propiedad GA4 de Arenados Lucho (no está documentado en el repo) |
| **Etiquetado automático (gclid)** | ✅ **Obligatorio** | `Administrador → Configuración de la cuenta → Etiquetado automático` → activar "Etiquetar la URL a la que hacen clic los usuarios en mi anuncio". **Sin esto no hay importación de conversiones desde GA4 ni atribución posible.** |
| **Search Console ↔ GA4** | ✅ Sí | Se hace **desde GA4**: `Administrar → Vínculos de productos → Search Console → Vincular`. Sirve para cruzar orgánico y pago en un solo lugar |
| **Search Console ↔ Google Ads** (informe de pago y orgánico) | ⚠️ A confirmar | Verificar si la opción sigue disponible en `Administrador → Vinculación de cuentas`. No es bloqueante |
| **Perfil de Empresa de Google (GBP)** | ⏸️ **Todavía no** | La ficha existe pero **está sin reclamar**. Se vincula recién cuando esté reclamada y verificada. **Y aun así, el recurso de ubicación queda apagado** (ver advertencia abajo) |
| **Merchant Center** | ❌ **No aplica** | No hay catálogo de productos ni ecommerce: es un servicio a domicilio. No vincular ni crear cuenta |
| **YouTube** | ❌ No aplica hoy | Solo si algún día se hace video (fuera de alcance) |
| **Data Manager / cargas offline** | ⏸️ Más adelante | Solo cuando se implemente la conversión offline "Trabajo cobrado" |

⚠️ **Advertencia específica sobre GBP:** el recurso de ubicación de Ads **muestra públicamente el teléfono de la ficha**, que según lo decidido es el WhatsApp del negocio. Eso (a) reabre el problema de las llamadas de gente buscando empleo —la razón por la que se sacó la extensión de llamada— y (b) expone el número que el sitio protege del scraping. **Reclamar la ficha sí (sirve para SEO local); activar el recurso de ubicación en Ads, no.** Verificar además que "Ubicación" esté apagada en los recursos automatizados de cuenta (F7).

**Test de 5 minutos antes de seguir (crítico y barato):** abrir `https://www.arenadoslucho.com/servicios?gclid=TEST123` y confirmar que el parámetro sobrevive la navegación. Repetir con las rutas legacy que tienen 301 (`/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido`): un 301 que descarta la query string rompe la atribución completa y no lo avisa nadie.

---

### 1.8 F6 — Medición: la etiqueta de Google, GTM y la conversión única

El contenedor **`GTM-W63ZV9D9`** ya está instalado en el sitio (en `src/app/layout.tsx`, con `window.dataLayer` inicializado antes del snippet). El evento **`contact_whatsapp`** ya se dispara —y solo se dispara— **tras confirmar el AlertDialog**, nunca en el click. Eso está bien resuelto y **no se toca**: acá solo se conecta.

**Decisión de arquitectura:** conversión **nativa de Google Ads disparada desde GTM** sobre el evento `contact_whatsapp` que ya existe. Motivo: la importación desde GA4 agrega de 6 a 24 horas de latencia (y hasta 1-3 días hasta que el dato llega al modelo de puja), inaceptable en una cuenta con pocas conversiones. Si además se importa el evento desde GA4 para tenerlo a la vista, se deja como **secundaria** y se documenta que las dos columnas nunca van a coincidir.

**Paso 1 — Crear la acción de conversión.**
`Objetivos → Conversiones → Resumen → + Crear acción de conversión → Sitio web → "Agregar manualmente con código"`

| Campo | Valor exacto |
|---|---|
| Nombre | `WhatsApp — contacto confirmado` |
| Categoría | **Contacto** (agrupa en el objetivo estándar "Contactos") |
| Valor | **No usar valor** (fase 1; ver nota abajo) |
| Recuento | **Una** ⚠️ el default es "Todas" y hay que cambiarlo |
| Ventana de conversión de clic | **30 días** |
| Ventana de visualización | **1 día** |
| Modelo de atribución | **Basada en datos** (default; no tocar nunca) |
| Optimización de la acción | **Principal** ⚠️ verificar en el mismo paso y sacar captura |

**Paso 2 — Implementar en GTM (`GTM-W63ZV9D9`):**
1. **Etiqueta "Vinculador de conversiones" (Conversion Linker)** → activador **All Pages / Todas las páginas**. Sin esto el gclid no se persiste en cookie propia y se pierden conversiones.
2. **Activador** tipo *Evento personalizado*, nombre exacto: `contact_whatsapp`.
3. **Etiqueta** tipo *Seguimiento de conversiones de Google Ads* con el ID de conversión (`AW-…`) y la etiqueta que devuelve el paso 1, disparada por ese activador.
4. Verificar en **Vista previa de GTM**: click en WhatsApp → confirmar el diálogo → el evento aparece **una sola vez** y la etiqueta dispara **una sola vez**.
5. Publicar el contenedor.

**Paso 3 — Limpiar los objetivos de la cuenta.**
`Objetivos → Conversiones → pestaña Objetivos`
- Dejar **"Contactos"** como **único objetivo predeterminado de la cuenta** (el interruptor está escondido dentro de `Editar objetivo → Configuración predeterminada de la cuenta`).
- Degradar a **Secundaria** absolutamente todo lo demás: las acciones históricas de formulario, "Lead form - Submit", clics de teléfono, vistas de página.
- ⚠️ Si aparece el objetivo **"Acciones locales"** (Visitas al sitio web, Otras interacciones, Cómo llegar): son conversiones **alojadas en Google** y no se pueden degradar una por una. Si no se puede apagar como predeterminado, la salida es activar objetivos específicos de campaña en las 3 campañas y **destildar "Acciones locales"**. Estas acciones son la explicación más probable de los CPA históricos absurdamente baratos.
- Resultado buscado, sin excepciones: **una sola acción principal en toda la cuenta**.

**Paso 4 — Conversiones mejoradas (a nivel cuenta).**
`Objetivos → Configuración → Uso de datos de clientes → Activar conversiones mejoradas` (hay que aceptar las Condiciones de tratamiento de datos).
Activarlo **igual**, aunque hoy **no aporte nada**: el sitio no captura email ni teléfono (se eliminó el formulario) y el proyecto prohíbe mandar PII al `dataLayer`, así que no hay nada que hashear. Se activa solo para dejar el terreno listo ante la unificación del interruptor. **No contarlo como una mejora de medición.**

**Paso 5 — Acción secundaria "Trabajo cobrado" (opcional pero recomendada).**
`Objetivos → Conversiones → + Crear acción de conversión → Importar → Importaciones manuales con la API o las cargas` → categoría **Cliente potencial convertido**, marcada como **Secundaria**. No se usa para pujar: se carga a mano una vez por mes para poder calcular el factor *lead → trabajo real*, que es el dato que hoy falta para saber si el CPA es rentable.

**Consent Mode / CMP:** **no implementar**. La política de consentimiento de Google aplica a EEE, Reino Unido y Suiza; el tráfico es 100% argentino y la segmentación va a estar en "Presencia" + Argentina. Un banner de cookies acá solo destruiría señal de conversión en una cuenta que ya tiene poquísima.

**Verificación de cierre (24-48 h después del primer clic pago):**
`Objetivos → Conversiones → Resumen` → la acción debe decir **"Registrando conversiones"** y la conversión debe aparecer en la columna **Conversiones** (no solo en "Todas las conv."). Si a los 15 días sigue en "Sin actividad reciente" con clics acumulados, la etiqueta no dispara: **frenar todo** y revisar GTM antes de gastar otro peso.

✅ **Deuda documental resuelta el 02/08/2026:** `13-modo-experto-ads.md`, `09-automatizaciones.md` y el resto de los archivos que listaban `form_submit_success` como primaria ya fueron corregidos. La decisión quedó registrada como **ADR-019** en `contexto/18-decisiones-tecnicas.md`.

---

### 1.9 F7 — Defaults de la cuenta que se apagan antes de la primera campaña

Todo esto es a **nivel cuenta** y protege a las 3 campañas por igual. Cada ítem, con captura.

| # | Qué | Ruta exacta | Estado objetivo |
|---|---|---|---|
| 1 | **Aplicación automática de recomendaciones** | `Campañas → Recomendaciones → "Aplicación automática"` | **TODAS las categorías apagadas**, una por una (no hay interruptor maestro). Las más peligrosas: "Agregar palabras clave nuevas", "Usar palabras clave de concordancia amplia", "Ajustar presupuestos", "Quitar palabras clave negativas en conflicto" |
| 2 | **Recursos automatizados a nivel de cuenta** | `Campañas → Recursos → menú ⋮ → "Recursos automatizados a nivel de cuenta" → Configuración avanzada` | Apagar **vínculos a sitios dinámicos, textos destacados dinámicos, fragmentos estructurados dinámicos, imágenes dinámicas y ubicación**. Es un sistema **distinto e independiente** de AI Max: apagar uno no apaga el otro |
| 3 | **Informes de llamadas** | `Administrador → Configuración de la cuenta → Informes de llamadas` | **Desactivado**. Evita el número de reenvío de Google y cierra la puerta a que reaparezca el canal telefónico |
| 4 | **Etiquetado automático** | `Administrador → Configuración de la cuenta → Etiquetado automático` | **Activado** (único de la lista que va en ON) |
| 5 | **Negativas a nivel cuenta** | `Administrador → Configuración de la cuenta → Palabras clave negativas` | Cargar **solo** los dos bloques universales: **EMPLEO** y **TÉCNICAS**. Límite 1.000, lista única, sin excepciones por campaña → nada modulable acá |
| 6 | **Listas de negativas compartidas** | `Herramientas → Biblioteca compartida → Listas de exclusiones → Listas de palabras clave negativas → +` | Crear las listas vacías ya (`neg_equipos-insumos`, `neg_diy`, `neg_data-driven`, `ruteo_piletas`) para poder aplicarlas en el mismo acto de crear cada campaña. Contenido: Sección de keywords |
| 7 | **Exclusión de datos** (solo por reutilizar la cuenta) | `Herramientas → Biblioteca compartida → Estrategias de puja → Controles avanzados → Exclusiones de datos` | Cubrir todo el histórico de medición sucia |
| 8 | **Scripts** | `Herramientas → Acciones masivas → Scripts` | Confirmar que los 4 instalados (guardián 06 + lectura 02/03/04) tengan **última ejecución reciente y sin error**. Un script caído se ve exactamente igual que uno sano |
| 9 | **Historial de cambios** (línea base) | `Campañas → Estadísticas e informes → Historial de cambios` | Mirarlo una vez ahora para tener referencia de "cuenta quieta": cualquier cambio futuro sin dueño conocido = auto-apply reactivado o acceso ajeno |

⚠️ **Sobre el presupuesto nativo:** la campaña vieja quedó en **10.000 ARS/día**, que × 30,4 = **304.000 ARS/mes, por encima del tope duro de 300.000**. Al relanzar, el arranque es **5.000 ARS/día en total** repartidos entre las 3 campañas; y si algún día se escala al tope, el diario correcto es **9.800 ARS/día** (9.800 × 30,4 = 297.920), no 10.000.

⚠️ **Ninguno de estos ajustes es "una sola vez".** Google reintroduce categorías nuevas ya encendidas y reactiva opciones tras migraciones de producto. Van a la **verificación mensual** con captura fechada en la bitácora.

---

### 1.10 ⛔ Advertencia: no dejar que el asistente de Google arme la campaña

Esta es la advertencia más importante de toda la sección. El flujo guiado de creación de campaña de Google **no es neutral**: está diseñado para maximizar alcance y presupuesto, y activa por defecto cosas que en esta cuenta son directamente destructivas.

**Lo que el asistente hace si se lo deja avanzar solo:**

| Lo que activa por defecto | Por qué acá es un problema |
|---|---|
| **Socios de búsqueda** tildado | Diluye ~18 clics/día en inventario de segunda |
| **"Presencia o interés"** como opción de ubicación, marcado como *recomendado* | Muestra el anuncio a cualquiera en el mundo que "mostró interés" en Buenos Aires. 20-35% de desperdicio en cuentas de leads |
| **AI Max** (personalización de texto + expansión de URL final) | La IA reescribe titulares leyendo la landing y la competencia → puede escribir **"granallado", "Sa3", "metal blanco"**, que son promesas que el negocio NO puede cumplir. Y la expansión de URL manda tráfico de piletas a `/servicios` |
| **Formulario de clientes potenciales** (lead form) | El lead queda en un CSV de Google, **no llega al WhatsApp** y **no dispara `contact_whatsapp`** → rompe la única conversión de la cuenta |
| **Extensión / recurso de llamada** y pedido de teléfono | Es exactamente lo que se sacó a propósito: traía llamadas de gente buscando empleo |
| **Presupuesto sugerido** (siempre mayor al planeado) | Pasa por encima del tope y puede disparar el guardián |
| **Concordancia amplia** y objetivo "Clientes potenciales" con tCPA pre-tildado | Viola la regla dura del proyecto y, si se activa amplia a nivel campaña, la campaña **se auto-migra a AI Max** en la ventana de septiembre 2026 |

**El protocolo obligatorio, en cambio:**

1. Entrar siempre por `Campañas → + → Campaña` → **"Crear una campaña sin la orientación de un objetivo"** → tipo **Búsqueda**. Es el único camino que muestra **todos** los ajustes desplegados (Redes, Ubicaciones, AI Max) antes de publicar. Elegir un objetivo los esconde o los pre-configura.
2. **Crear la campaña pausada** (o publicarla y pausarla en el acto). Ninguna campaña se activa el mismo minuto en que se crea.
3. Recorrer el checklist de configuración de la Sección 2 y **verificar cada ítem por captura de pantalla**, con la campaña todavía pausada.
4. Recién entonces activar, y volver a verificar los mismos ítems **a las 24 h y a los 7 días** (Google revierte ajustes tras migraciones).
5. Nunca aceptar un cambio propuesto por un representante de Google por teléfono sin verlo antes en pantalla y registrarlo en la bitácora. El "Nivel de optimización" **no es un KPI de este proyecto**: la banda de trabajo es 70-85%, descartando recomendaciones con criterio (descartar también sube el score).

---

### 1.11 Checklist de salida — no se crea ninguna campaña hasta tener esto en verde

- [ ] Cuenta `953-841-6905` en **modo experto**, renombrada `Arenados Lucho — AMBA` · captura
- [ ] Campañas viejas **pausadas** (incluida la de Máximo Rendimiento), ninguna editada
- [ ] **Moneda ARS** y **zona horaria (GMT-03:00) Buenos Aires** verificadas · captura de ambas
- [ ] Facturación: país Argentina, datos fiscales correctos, método de pago definido, contacto de facturación con copia a `impruvagencia@hotmail.com`
- [ ] Dueño = **Administrador** con **2FA + passkey**; operador = **Estándar**; pestaña "Administradores" sin MCC desconocidos
- [ ] **Etiquetado automático ACTIVADO**
- [ ] **GA4 vinculado** a Google Ads
- [ ] Search Console vinculado a GA4
- [ ] GBP: reclamo **iniciado** (no bloqueante) · recurso de ubicación **NO** activado
- [ ] Merchant Center: **no aplica**, no se crea
- [ ] Acción de conversión `WhatsApp — contacto confirmado` creada con: categoría **Contacto**, recuento **Una**, ventana **30 días**, atribución **basada en datos**, optimización **Principal** · captura
- [ ] GTM `GTM-W63ZV9D9`: Conversion Linker en todas las páginas + etiqueta de conversión sobre el evento `contact_whatsapp` · probado en Vista previa · **publicado**
- [ ] `Objetivos → Conversiones → Objetivos`: **"Contactos"** único objetivo predeterminado; todo lo demás **Secundario**; "Acciones locales" apagado o marcado para excluir por campaña
- [ ] Conversiones mejoradas activadas a nivel cuenta
- [ ] Acción secundaria "Trabajo cobrado" creada (carga manual mensual)
- [ ] **Aplicación automática de recomendaciones: TODO apagado** · captura
- [ ] **Recursos automatizados a nivel de cuenta: apagados** · captura
- [ ] **Informes de llamadas: desactivados**
- [ ] Negativas de **cuenta** cargadas (bloques EMPLEO + TÉCNICAS)
- [ ] Listas de negativas compartidas creadas (`neg_equipos-insumos`, `neg_diy`, `neg_data-driven`, `ruteo_piletas`)
- [ ] **Exclusión de datos** cargada sobre el período de medición sucia, con fecha de corte anotada
- [ ] Los 4 scripts con última ejecución reciente y sin error
- [ ] Test `?gclid=TEST123` sobrevive en `/`, `/servicios`, `/arenado-de-piletas` y en los 301 legacy
- [ ] Todo lo anterior registrado en `contexto/marketing/08-bitacora.md` con fecha y capturas

---

### 1.12 Qué se registra en la bitácora al cerrar esta sección

Una entrada con: fecha, decisión de conservar la cuenta `953-841-6905`, **fecha de corte de medición limpia** (la que se usó en la exclusión de datos), método de pago elegido, ID de la propiedad GA4 vinculada, ID de conversión (`AW-…`) usado en GTM, y el listado de defaults apagados con la fecha de verificación. Esa entrada es la que permite, dentro de seis meses, distinguir "esto lo cambiamos nosotros" de "esto lo cambió Google solo".

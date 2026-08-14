## 3. Estructura: campañas y grupos de anuncios

### 3.1. El criterio de separación (por qué 3 campañas y no 1, ni 5)

En 2026 la estructura dejó de ser una herramienta de control granular y pasó a ser una herramienta de **calidad de señal**. La regla operativa vigente es: *si no podés nombrar qué configuración va a ser distinta, no es una campaña nueva, es un grupo de anuncios*. Las tres campañas propuestas pasan ese test con diferencias duras, no con diferencias de reporting:

| Diferencia dura | `obra-industrial` | `piletas` | `general-marca` |
|---|---|---|---|
| **Landing final** | `/servicios` | `/arenado-de-piletas` | `/` |
| **Estacionalidad** | Plana todo el año | Pico sep–dic; piso mar–jul | Plana |
| **Geografía** | AMBA + radio ampliable (ticket alto banca el viaje) | AMBA estricto (el viaje mata el margen) | AMBA estricto |
| **CPA tolerable** | Alto (obra/PYME, ticket alto) | Bajo (trabajo chico, ticket bajo) | Muy bajo (defensivo) |
| **Rol en el negocio** | Crecimiento (el norte declarado) | Caja de hoy | Defensa de marca + genéricos |
| **Concordancias** | Exacta + frase acotada | Frase mayoritaria (descubrimiento) | 100 % exacta |
| **Estrategia de puja fase 1** | CPC manual (ver §3.6) | Maximizar clics + tope de CPC | Maximizar clics + tope de CPC |

Las tres razones que hacen **imprescindible** la separación, en orden de peso:

1. **Control de presupuesto por línea de negocio.** Dentro de una sola campaña no existe forma de garantizar que obra/PYME se lleve el 60 %. Google repartiría según dónde encuentre clics baratos y, con clics de pileta sistemáticamente más baratos que los de obra, el algoritmo se comería el presupuesto de la transición hacia el negocio de ticket alto. El reparto 60/25/15 sólo es ejecutable con presupuestos individuales por campaña.
2. **Estacionalidad de piletas.** El pico es sep–dic. Con campañas separadas, subir piletas en septiembre y bajarla en marzo es un cambio de un número; mezcladas, habría que hacerlo con ajustes de estacionalidad (herramienta pensada para 1–7 días, inútil para una temporada de 4 meses) o dejarlo al azar.
3. **Ruteo por intención → landing.** La consulta de pileta tiene que aterrizar en `/arenado-de-piletas`, que es la única página que habla del problema del dueño de casa que ni sabe que se llama "arenado". `/servicios` no menciona piletas. Sin campañas separadas + negativas de ruteo (§3.7), no hay garantía de que la consulta correcta llegue a la página correcta.

**Y por qué NO una cuarta campaña:** no se abre campaña por zona (Zona Norte, La Plata), por rubro (galpones vs. tanques), ni por tipo de anuncio. Con ~5.000 ARS/día y CPC promedio histórico ~273 ARS, la cuenta compra unos **18 clics/día en total**. Fragmentar más es garantizar que ningún contenedor acumule datos. La única cuarta campaña ya prevista y justificada es la graduación de `ag_pymes-in-situ` a campaña propia en fase 3 (§3.6), y su diferencia dura es presupuesto propio.

---

### 3.2. Convención de nombres

El valor de la convención en 2026 no es estético: es que los scripts, las reglas y los informes puedan **filtrar por patrón de texto**. Patrón adoptado, todo en **minúsculas** (Google Ads distingue mayúsculas), guion bajo entre conceptos y guion medio dentro de un concepto:

```
CAMPAÑA:  {canal}_{linea-de-negocio}_{geo}_{concordancia}
GRUPO:    ag_{tema-de-intencion}
LISTA:    neg_{bloque}
```

| Objeto | Nombre exacto a cargar |
|---|---|
| Campaña 1 | `srch_obra-industrial_amba_exa-fra` |
| Campaña 2 | `srch_piletas_amba_exa-fra` |
| Campaña 3 | `srch_general-marca_amba_exa` |
| Grupos | `ag_pymes-in-situ` · `ag_obra-industria` · `ag_pileta-jerga` · `ag_pileta-sin-jerga` · `ag_genericos` · `ag_marca` |
| Listas de negativas | `neg_equipos-insumos` · `neg_diy` · `neg_data-driven` · `neg_ruteo-piletas` · `neg_ruteo-no-pileta` |

> **Verificado en el repo:** ninguno de los 6 scripts instalados (`contexto/marketing/ads-scripts/`) filtra por nombre de campaña — todos usan `campaign.status = "ENABLED"` o consultas GAQL sin condición de nombre. Es decir: **renombrar no rompe ninguna automatización existente**, y la convención queda disponible para scripts futuros.

**Higiene de nombres del legacy (hacer ANTES de crear lo nuevo):**
- Pausar `busqueda-arenadoIndustrial` (hoy la única `ENABLED`, con 10.000 ARS/día cargados). Ruta: Campañas → Campañas → tildar la campaña → **Editar → Pausar**. **No borrar** (el historial de datos vale).
- Renombrar las viejas a `zz_legacy_{nombre-original}` (Campañas → doble clic sobre el nombre → lápiz) para que nunca aparezcan primeras en filtros ni informes.

---

### 3.3. Diagrama de la estructura

Fase 1 (arranque, 5.000 ARS/día). Cada bloque muestra: presupuesto diario · grupos · URL final · concordancia dominante.

```
CUENTA — ARS / America/Buenos_Aires
│  Negativas de CUENTA (Administrador → Configuración de la cuenta → Palabras clave negativas)
│    · bloque TÉCNICAS  (granallado, granalla, shot blasting, sa3, sa 2, iso 8501,
│                        metal blanco, perfil de anclaje, rugosidad, espesor de pelicula)
│    · bloque EMPLEO    (empleo, busco trabajo, busco empleo, vacante, se busca personal,
│                        oferta laboral, oferta de trabajo, changa, changas, sueldo,
│                        cv, curriculum, rrhh, recursos humanos, empleado)
│  Listas COMPARTIDAS aplicadas a las 3 campañas
│    · neg_equipos-insumos · neg_diy · neg_data-driven
│
├─ 1) srch_obra-industrial_amba_exa-fra ······················ 3.000 ARS/día (60 %)
│     Geo: AMBA (Presencia) + radio ampliable  │  Puja: CPC manual
│     Negativa de campaña: lista neg_ruteo-piletas  ← RUTEO
│     │
│     ├─ ag_pymes-in-situ        → /servicios      [EXACTA + frase]  ★ PRIORIDAD DE PUJA
│     │    arenado a domicilio · arenado in situ · arenado de galpon ·
│     │    quitar oxido de metal · restaurar metal · arenado de camiones (puja baja)
│     │
│     └─ ag_obra-industria       → /servicios      [EXACTA + frase]
│          arenado industrial ⭐ · arenado en obra · arenado de fachada ·
│          arenado de ladrillo a la vista · arenado de estructuras metalicas ·
│          arenado de tanques · arenado de metal · empresa de arenado
│
├─ 2) srch_piletas_amba_exa-fra ······························ 1.250 ARS/día (25 %)
│     Geo: AMBA estricto (Presencia)  │  Puja: Maximizar clics + tope CPC
│     Negativa de campaña: lista neg_ruteo-no-pileta  ← RUTEO INVERSO
│     │
│     ├─ ag_pileta-jerga         → /arenado-de-piletas  [EXACTA + frase]
│     │    arenado de pileta · arenado de piletas · arenado de piscina ·
│     │    limpieza de pileta para pintar · restaurar pileta
│     │    (RSA con doble ángulo: dueño de casa + contratista/piletero)
│     │
│     └─ ag_pileta-sin-jerga     → /arenado-de-piletas  [FRASE, siempre con el
│          sustantivo pileta/piscina dentro de la keyword]
│          sacar pintura de pileta · quitar pintura de pileta ·
│          remover pintura de piscina · despintar pileta · decapar pileta ·
│          preparar pileta para revestir
│
└─ 3) srch_general-marca_amba_exa ···························· 750 ARS/día (15 %)
      Geo: AMBA estricto (Presencia)  │  Puja: Maximizar clics + tope CPC bajo
      Negativa de campaña: lista neg_ruteo-piletas  ← seguro adicional
      │
      ├─ ag_genericos            → /              [100 % EXACTA]
      │    [arenados] ⭐ mejor CPA histórico · [arenado] con tope de CPC bajo
      │
      └─ ag_marca                → /              [100 % EXACTA]
           [arenados lucho] · [arenado lucho]
```

---

### 3.4. Tabla campaña → grupo → URL → intención

| Campaña | Grupo de anuncios | URL final (exacta) | Intención que compra | Concordancia | Prioridad |
|---|---|---|---|---|---|
| `srch_obra-industrial_amba_exa-fra` | `ag_pymes-in-situ` | `https://www.arenadoslucho.com/servicios` | **Encargado de PYME con galpón** que necesita que vayan con el equipo: óxido en estructuras, camiones, tanques, hierros. Intención de proveedor a domicilio. | Exacta (cabezas) + frase acotada | ★ **Máxima** |
| `srch_obra-industrial_amba_exa-fra` | `ag_obra-industria` | `https://www.arenadoslucho.com/servicios` | **Arquitecto / constructora / encargado** en obra o restauración: paredes, fachada, ladrillo a la vista, vigas, estructuras, tanques. Ticket alto, ciclo más largo. | Exacta (cabezas) + frase | Alta |
| `srch_piletas_amba_exa-fra` | `ag_pileta-jerga` | `https://www.arenadoslucho.com/arenado-de-piletas` | Ya sabe qué es arenado: **contratista/piletero** que terceriza, o dueño informado. Intención de proveedor recurrente. | Exacta + frase | Media |
| `srch_piletas_amba_exa-fra` | `ag_pileta-sin-jerga` | `https://www.arenadoslucho.com/arenado-de-piletas` | **Dueño de casa que NO conoce la palabra "arenado"**: busca el problema ("se descascara", "sacar la pintura"). Gap sin competencia directa. | Frase (con el sustantivo pileta/piscina dentro) | Media |
| `srch_general-marca_amba_exa` | `ag_genericos` | `https://www.arenadoslucho.com/` | Intención comercial indiferenciada ("arenados", "arenado"). No sabe todavía qué línea necesita → el home es la única página que presenta las tres. | 100 % exacta | Baja |
| `srch_general-marca_amba_exa` | `ag_marca` | `https://www.arenadoslucho.com/` | Marca: ya nos conoce o le recomendaron. Función defensiva. | 100 % exacta | Baja |

**Notas de implementación de las URLs (importantes):**

- En campañas de Búsqueda **la URL final vive en el anuncio (RSA), no en el grupo**. Ruta: Campañas → seleccionar campaña → seleccionar grupo → **Anuncios y recursos → Anuncios → + → Anuncio de búsqueda responsivo → campo "URL final"**. Se puede además fijar URL final a nivel keyword (Campañas → Públicos, palabras clave y contenido → Palabras clave de la Búsqueda → columna "URL final"), pero **no conviene**: duplica el mantenimiento y se desincroniza.
- **`/contacto` NO es URL final de ningún grupo.** Es página WhatsApp-first sin contenido persuasivo: alguien que llega frío desde un anuncio no tiene ahí con qué convencerse. Se usa como **sitelink** en las 3 campañas y como destino del CTA interno.
- **`/casos-de-exito` tampoco es URL final**: es prueba social, va como sitelink.
- Rutas legacy con 301 (`/arenado-industrial`, `/arenado-particular`, `/presupuesto-rapido`) **prohibidas como URL final** — un 301 en el destino de un anuncio agrega un salto, puede perder query params y complica el diagnóstico.
- **Regla dura #1 del proyecto:** ninguna campaña se enciende hasta que las 6 URLs respondan **200**. Verificar con el script `04-chequeo-urls.js` (ya instalado) o a mano, y guardar la captura en `08-bitacora.md`.
- Los UTMs se cargan **una sola vez por campaña** en Campañas → Configuración → Configuración adicional → **Opciones de URL de la campaña → Sufijo de URL final**, nunca pegados a mano en cada URL. (Detalle del sufijo: ver sección de configuración de campaña.)

> ⚠️ **Discrepancia documental a corregir:** `contexto/marketing/05-google-ads-operacion.md` (línea 78) manda los genéricos a `/servicios`, mientras que `03-keywords-maestro.md` (Cluster 4) los manda a `/`. Acá se resuelve a favor de **`/`**: quien busca "arenado" a secas puede querer pileta, y `/servicios` no habla de piletas. Actualizar `05-google-ads-operacion.md` al ejecutar.

---

### 3.5. Reparto de presupuesto y escalones

**Presupuestos individuales por campaña. Nunca presupuesto compartido**: Google reparte un pozo común según dónde prevé mejor rendimiento, no según prioridades de negocio — y como los clics de pileta son más baratos, un pozo compartido drenaría el presupuesto de la transición hacia obra. Además, el presupuesto compartido rompe la lectura de "cuota de impresiones perdida por presupuesto" por campaña, que es el diagnóstico principal en una cuenta limitada.

Ruta: Campañas → Campañas → columna **Presupuesto** (ícono de lápiz) → "Presupuesto diario promedio".

#### Escalones de escalado (subidas de ~25 %, mínimo 14 días entre escalones)

| Escalón | Total diario | `obra-industrial` | `piletas` | `general-marca` | Gasto mensual (× 30,4) |
|---|---|---|---|---|---|
| **0 — arranque** | 5.000 | **3.000** | **1.250** | **750** | 152.000 |
| 1 | 6.250 | 3.750 | 1.550 | 950 | 190.000 |
| 2 | 7.800 | 4.700 | 1.950 | 1.150 | 237.120 |
| **3 — tope** | **9.800** | **5.900** | **2.450** | **1.450** | **297.920** |

> ⚠️ **Corrección de calibración:** el tope correcto es **9.800 ARS/día, no 10.000**. El presupuesto diario es un promedio y el techo mensual real es **30,4 × el diario**: 10.000 × 30,4 = **304.000 ARS**, es decir por encima del tope duro de 300.000. Con 9.800 el techo queda en 297.920 y el guardián deja de ser lo único que evita pasarse. Hoy la campaña vieja está justamente en 10.000/día: bajarla o pausarla al relanzar.

**Condiciones para subir de escalón (las tres a la vez, no una sola):**
1. Cuota de impresiones perdida por **presupuesto** alta en esa campaña (Campañas → Columnas → Modificar columnas → Métricas de la competencia → "Porcentaje de impresiones de búsqueda perdidas (presupuesto)"). Si la pérdida es por **ranking**, más presupuesto no arregla nada: es problema de relevancia o de puja.
2. CPA de `contact_whatsapp` aceptable **contando sólo esa campaña** — nunca el CPA promedio de la cuenta, que `general-marca` distorsiona hacia abajo.
3. **Trabajos cobrados** atribuibles. El orden es "trabajo cobrado → escalar", jamás "estado en rojo → escalar".

Cada escalón se registra en `08-bitacora.md` con fecha, para poder separar el efecto del escalón del reseteo de aprendizaje que provoca.

#### Rebalanceo estacional (mismo total, distinto reparto)

La estacionalidad de piletas se maneja **moviendo puntos del reparto**, no subiendo el total y no con ajustes de estacionalidad (esa herramienta sirve para eventos de 1–7 días, pierde eficacia arriba de 14).

| Ventana | Reparto | A 5.000/día | A 9.800/día |
|---|---|---|---|
| **Temporada alta piletas** (sep–dic) | 50 / 35 / 15 | 2.500 / 1.750 / 750 | 4.900 / 3.430 / 1.470 |
| **Base** (ago, ene–feb) | 60 / 25 / 15 | 3.000 / 1.250 / 750 | 5.880 / 2.450 / 1.470 |
| **Piso piletas** (mar–jul) | 65 / 20 / 15 | 3.250 / 1.000 / 750 | 6.370 / 1.960 / 1.470 |

En invierno **la campaña de piletas no se apaga**: se baja y se cambia el mensaje a anticipación ("llegá al verano con la pileta lista, turno inmediato"). Los clics son más baratos y el que busca es el previsor o el contratista planificando temporada.

> ⚠️ **Pacing junio 2026:** desde el 01/06/2026 Google pacea hacia el mes completo (30,4×) aunque haya programación de anuncios restringida, concentrando el gasto en las horas activas. Por eso las 3 campañas arrancan **24/7 sin programación de anuncios**: con presupuesto chico, recortar horarios acelera el gasto por hora y hace tocar el tope de 2× diario constantemente. Y aclararle al dueño de entrada: *5.000/día no significa "nunca más de 5.000 en un día", significa "hasta 152.000 en el mes"*.

---

### 3.6. Prioridad de puja: `ag_pymes-in-situ`

**Por qué este grupo y no otro.** La PYME con galpón es el mejor ingreso por día-equipo del negocio hoy, por cuatro razones operativas concretas, todas del contexto del dueño:

1. **Terreno propio y grande** → se trabaja in situ sin la fricción #1 del trabajo domiciliario, que son las quejas de vecinos por el polvo.
2. **Volumen en un solo viaje** → los ~100 m²/día por equipo se aprovechan enteros; no se pierde media jornada en traslado por un trabajo chico.
3. **Trabajos medianos que se cobran bien y sin requisito técnico**: quitar óxido y pintura vieja de estructuras, camiones, acoplados, tanques y "hierros grandes". Nada de lo prohibido (Sa3, ISO, granallado) entra en la conversación.
4. **Cliente recurrente**: una flota o un parque de estructuras se re-arena; un dueño de casa arena una vez cada diez años.

**Cómo se implementa la prioridad — y la trampa técnica que hay que evitar.**

> ⚠️ **Bajo "Maximizar clics" las pujas por grupo de anuncios NO se aplican.** Esa estrategia fija las pujas sola hasta el límite de CPC máximo, que es **de campaña**. Es decir: si `srch_obra-industrial` arranca en Maximizar clics, **`ag_pymes-in-situ` no puede tener prioridad de puja**, y tampoco se puede poner una puja baja a `arenado de camiones` (que el proyecto ya decidió probar con puja mínima).

Por eso, **excepción acotada y deliberada**: `srch_obra-industrial_amba_exa-fra` arranca en **CPC manual**; `srch_piletas` y `srch_general-marca` arrancan en **Maximizar clics con límite de CPC**. Es la única campaña donde hay una diferencia de rentabilidad conocida *entre grupos*, y CPC manual es la única estrategia que expone pujas por grupo y por keyword. El costo es nulo: son ~15 keywords, no hay smart bidding en ninguna parte todavía, y el argumento de "no romper el aprendizaje" no aplica en fase de recolección.

Valores exactos de arranque (calibrados sobre el CPC promedio histórico de ~273 ARS):

| Nivel | Objeto | Puja / límite |
|---|---|---|
| Grupo | `ag_pymes-in-situ` | **CPC máx. 400 ARS** |
| Grupo | `ag_obra-industria` | CPC máx. 280 ARS |
| Keyword | `"arenado de camiones"` (frase, prueba) | CPC máx. 180 ARS |
| Campaña | `srch_piletas_amba_exa-fra` (Maximizar clics) | Límite de CPC 320 ARS |
| Campaña | `srch_general-marca_amba_exa` (Maximizar clics) | Límite de CPC 260 ARS |

Rutas: puja de grupo → Campañas → seleccionar campaña → **Grupos de anuncios** → columna "Oferta de CPC máx. predeterminada" → lápiz. Puja de keyword → Campañas → **Públicos, palabras clave y contenido → Palabras clave de la Búsqueda** → columna "CPC máx." → lápiz. Límite de CPC de Maximizar clics → Campañas → Configuración → **Ofertas** → tildar "Establecer un límite de CPC máximo para esta estrategia de puja".

**Cómo evoluciona la prioridad (importante, porque no sobrevive al cambio de estrategia).** Cuando `srch_obra-industrial` pase a Maximizar conversiones (recién con ≥15 conversiones limpias/mes), la puja por grupo desaparece como palanca. En ese momento la prioridad se convierte en **prioridad de presupuesto**: si `ag_pymes-in-situ` demostró el mejor CPA y los mejores chats, se **gradúa a campaña propia** `srch_pymes-in-situ_amba_exa-fra` con su propio presupuesto. Es la única cuarta campaña autorizada de antemano, y su diferencia dura declarada es presupuesto y objetivo de CPA propios.

---

### 3.7. Negativas de ruteo entre campañas

**El problema:** cuando una consulta es elegible en dos campañas de la misma cuenta, Google no te hace competir contra vos mismo — hace una selección interna y manda **una sola**, la de mejor **Ad Rank** (puja × nivel de calidad + impacto de recursos). El fallo documentado es que gana "el gemelo equivocado": si `obra-industrial` tiene más historial y mejor QS, se queda con "arenado de pileta" y lo manda a `/servicios`, que no habla de piletas. **No hay ninguna garantía de que gane la campaña más específica.** La única forma confiable de rutear es la negativa a nivel campaña.

**Dato técnico que cambia cómo se cargan:** las palabras clave negativas **no matchean variantes cercanas** — ni plurales, ni errores de tipeo, ni acentos. Hay que cargar cada forma explícitamente.

#### Lista `neg_ruteo-piletas` → aplicar a `srch_obra-industrial` y `srch_general-marca`

Concordancia **frase** para todos:

```
pileta
piletas
pileton
piscina
piscinas
picina
pisina
natatorio
natatorios
alberca
albercas
pileta de natacion
```

#### Lista `neg_ruteo-no-pileta` → aplicar a `srch_piletas`

Ruteo inverso: evita que la campaña de piletas se coma tráfico de obra/industria y, sobre todo, que las frases de `ag_pileta-sin-jerga` se desborden a superficies que no son una pileta. Concordancia **frase**:

```
galpon            estructura metalica     fachada
galpón            estructura metálica     ladrillo
tanque            camion                  viga
tanques           camión                  reja
industrial        acoplado                rejas
pared             contenedor              madera
paredes           chapa                   mueble
auto              moto                    muebles
autos             pelo                    uñas
ropa              tela                    barco
```

> **Defensa primaria contra el desborde: la keyword, no la negativa.** Ninguna keyword de `ag_pileta-sin-jerga` va sin el sustantivo `pileta` o `piscina` adentro. En 2026 la concordancia de frase expande por significado: `"sacar pintura"` suelto trae madera, rejas, autos, muebles y hasta pelo y uñas. `"sacar pintura de pileta"` no. La lista de arriba es el cinturón; la keyword bien escrita es los tirantes.

#### Dónde vive cada capa de negativas

| Nivel | Qué va acá | Ruta de UI |
|---|---|---|
| **CUENTA** (máx. 1.000) | Sólo lo que jamás debe entrar en ninguna campaña: bloque **TÉCNICAS** y bloque **EMPLEO** (~30 términos) | Administrador (ícono) → **Configuración de la cuenta → Palabras clave negativas** |
| **LISTAS COMPARTIDAS** (máx. 20 listas, 5.000 términos c/u) | `neg_equipos-insumos`, `neg_diy`, `neg_data-driven` (a las 3 campañas) + `neg_ruteo-piletas` y `neg_ruteo-no-pileta` (ruteo) | Herramientas → **Biblioteca compartida → Listas de exclusiones → Listas de palabras clave negativas → +** |
| **CAMPAÑA** (máx. 10.000) | Sólo lo que surja del informe de términos de búsqueda y sea específico de una campaña | Campañas → seleccionar campaña → **Públicos, palabras clave y contenido → Palabras clave de la Búsqueda → pestaña "Palabras clave negativas de la Búsqueda" → Editar exclusiones** |

> ⚠️ **`pileta` / `piscina` NUNCA a nivel cuenta.** Sería catastrófico e invisible: apagaría el servicio más rentable del historial sin ninguna alerta. Van sólo como negativa de campaña vía la lista compartida, aplicada a dos de las tres campañas.
>
> ⚠️ Al agregar negativas desde la vista de campaña, Google ofrece "guardar en una lista". **Si no se tilda, la negativa queda suelta en esa campaña y no se propaga.** Todo lo de ruteo va sí o sí a la lista.
>
> ⚠️ **Cargar todas las negativas ANTES de encender.** El informe de términos de búsqueda oculta ~40–51 % del gasto bajo "otros términos": la mitad del desperdicio no se ve nunca, así que el método reactivo de "voy negativizando lo que aparece" no alcanza.

#### Verificación del ruteo (a las 24 h y a los 7 días)

1. **Herramientas → Solución de problemas → Vista previa y diagnóstico de anuncios**, idioma español, ubicación **CABA**:
   - `arenado de pileta` → debe disparar `srch_piletas_amba_exa-fra` y mostrar `/arenado-de-piletas`.
   - `sacar pintura de pileta` → ídem.
   - `arenado industrial` → debe disparar `srch_obra-industrial_amba_exa-fra` → `/servicios`.
   - `busco trabajo de arenador` → **no debe disparar nada**.
   - Nunca googlear a mano para probar: genera impresiones sin clic y baja el CTR esperado, que pesa ~39 % del nivel de calidad.
2. **Campañas → Públicos, palabras clave y contenido → Términos de búsqueda**, filtrar por `srch_obra-industrial`: no debe haber ni un término con "pileta"/"piscina" con gasto.

---

### 3.8. Fase 2: cuándo abrir los grupos que hoy quedan fusionados

La estructura objetivo del proyecto tenía **4 grupos** en Obra-Industrial (obra/restauración, industrial-limpieza, estructuras-tanques, pymes-in-situ). Con 5.000 ARS/día eso es sobre-fragmentación: 3.000 ARS/día ÷ 273 ARS de CPC ≈ **11 clics/día para toda la campaña**; repartidos en 4 grupos son ~2,7 clics/día por grupo. Ningún grupo llegaría nunca a un dato juzgable y los cuatro quedarían en "volumen bajo".

Por eso `ag_obra-industria` arranca **fusionando** obra/restauración + industrial-limpieza + estructuras/tanques, y se parte después.

**Gatillo de partición (por grupo, no por campaña):** el grupo acumula **15+ conversiones `contact_whatsapp` propias en 30 días**. En la práctica esto llega junto con el escalón 2–3 de presupuesto.

| Fase 2 — qué se hace | Cómo |
|---|---|
| `ag_obra-industria` **se renombra** a `ag_obra-restauracion` | Renombrar conserva el ID del grupo y todo su histórico |
| Se crea `ag_industrial-limpieza` | Nuevas keywords: `arenado industrial` ⭐, `arenados industriales`, `servicio limpieza industrial`, `sandblasting`, `arenado de metal` |
| Se crea `ag_estructuras-tanques` | Nuevas keywords: `arenado de estructuras metalicas`, `arenado de tanques`, `limpieza de tanques`, `arenado de vigas` |
| `ag_pymes-in-situ` eventualmente se gradúa a campaña propia | Ver §3.6 |

> ⚠️ **Mover keywords entre grupos las recrea desde cero**: pierden nivel de calidad e historial de la keyword. Por eso la partición se hace una sola vez, cuando el volumen la justifica, y nunca "para ver mejor los datos" (el informe de términos de búsqueda y los segmentos ya dan esa visibilidad sin romper nada).

---

### 3.9. Checklist de creación, en orden (estructura únicamente)

Ejecución guiada: el dueño clickea, se verifica por captura en cada paso y se registra en `08-bitacora.md`.

**Antes de crear la primera campaña**
1. `contact_whatsapp` como **única acción de conversión principal**; todo lo demás secundario. Objetivo predeterminado de cuenta = **Contactos**. Si existe el objetivo "Acciones locales", quitarlo de predeterminado. *(Detalle: sección de conversiones.)*
2. **Recomendaciones → Aplicación automática → apagar todas las categorías**, una por una. Captura.
3. Cargar las negativas de **cuenta** (técnicas + empleo) y crear las 5 listas compartidas. Captura.
4. Verificar que las 6 URLs finales respondan **200**.
5. **Pausar** `busqueda-arenadoIndustrial` y renombrar las viejas a `zz_legacy_*`.

**Por cada campaña (repetir 3 veces)**

6. Campañas (ícono izquierdo) → **Campañas → botón + → Nueva campaña → "Crear una campaña sin la orientación de un objetivo" → Tipo: Búsqueda**. Este camino es el único que muestra todos los ajustes desplegados; con objetivo "Clientes potenciales" Google esconde settings y empuja formulario de clientes potenciales y extensión de llamada, **ambos prohibidos en este proyecto**.
7. Nombre exacto según §3.2.
8. **Presupuesto** según §3.5. Nunca compartido.
9. **Ofertas**: `obra-industrial` → CPC manual; las otras dos → Maximizar clics **con límite de CPC** (§3.6).
10. **Redes**: destildar "Incluir socios de búsqueda de Google" **y** "Incluir la Red de Display de Google".
11. **Ubicaciones** → "Ingresá otra ubicación" → **Búsqueda avanzada → Ubicaciones múltiples** → pegar la lista de CABA + partidos. Luego abrir el link colapsado **"Opciones de ubicación"** y cambiar a **"Presencia"** (el default es "Presencia o interés", que muestra el anuncio a cualquiera del mundo que se interese por la zona).
12. **AI Max**: verificar por captura que el panel esté **apagado** antes de guardar (personalización de texto y expansión de URL final vienen tildadas al optar; la expansión de URL final rompería el ruteo mandando piletas a `/servicios`). No activar el toggle de "concordancia amplia a nivel campaña": desde septiembre 2026 esas campañas se auto-migran a AI Max sin opción de rechazo.
13. Sin fecha de finalización. Sin programación de anuncios. Sin ajustes de puja por dispositivo/ubicación/horario.
14. Aplicar las listas de negativas que correspondan (§3.7).
15. Crear los **grupos** con los nombres de §3.2, cargar keywords en frase/exacta y las pujas de §3.6.
16. Un **RSA por grupo** con la URL final de §3.4. *(Copy: sección de anuncios y recursos.)*

**Después de publicar**
17. Verificación de ruteo con Vista previa y diagnóstico (§3.7).
18. A las 24–48 h del primer clic pago: confirmar que la conversión aparece en la columna **"Conversiones"**, no sólo en "Todas las conv.".
19. Revisar **Campañas → Estadísticas e informes → Historial de cambios** a los 7 días: todo cambio debe tener responsable conocido (el dueño o un script del proyecto). Un cambio sin dueño = auto-apply reactivado.

---

### 3.10. Puntos abiertos

- ⚠️ **A confirmar — lista exacta de partidos del GBA** que se cargan como ubicación, y hasta dónde viaja el equipo en trabajos de ticket alto (¿La Plata? ¿Campana–Zárate? ¿Escobar–Pilar?). Sin ese dato la geo de `obra-industrial` queda en AMBA estricto por defecto.
- ⚠️ **A confirmar — si se relanza sobre la cuenta existente (953-841-6905) o se abre una cuenta nueva.** Reutilizar conserva historial de nivel de calidad pero arrastra datos de conversión inflados (habría que cargar una exclusión de datos cubriendo todo lo anterior a la fecha de corte de medición limpia). Abrir nueva da medición limpia pero pierde señal de calidad. Afecta el paso 5 del checklist.
- ⚠️ **A confirmar por captura — si el panel "IA Max" aparece visible en el flujo de creación de campaña en una cuenta argentina**, o si queda escondido en configuración avanzada. Es el paso 12 y es el riesgo estructural más grande para el ruteo por landing.
- ⚠️ **A confirmar — saldo y fecha de relanzamiento.** La cuenta figuraba SIN SALDO en la auditoría del 26/07/2026; recargar es el último paso, después de las URLs en 200 y las negativas cargadas.
- ✅ **Corregido el 10/08/2026:** `05-google-ads-operacion.md`, `09-automatizaciones.md` y `13-modo-experto-ads.md` ya no listan `form_submit_success` como primaria. La única primaria es `contact_whatsapp` (ADR-019).

# Lo que falta para encender — checklist de ejecución

> Estado al **11/08/2026**. Todo lo que queda entre hoy y tener las campañas generando datos, en orden, con el cómo de cada punto.
>
> Copy y recursos: `18-copy-ads.md` · Keywords: `ads-config/04-keywords-negativas.md` · Detalle del pre-flight: `ads-config/08-controles-implementacion.md` §8.B-PRE

## Ya está hecho (no repetir)

✅ **Blindaje** — auto-apply de ofertas OFF · 37 negativas de cuenta · informes de llamadas OFF · 6 recursos automatizados OFF (incluidas *llamadas dinámicas* y *títulos más extensos*) · **Perfil de Empresa desvinculado** · rich media de Google OFF
✅ **Medición** — una sola conversión primaria (`contact_whatsapp`), ventana 30 días · objetivos de llamadas y formularios apagados · GA4 con un solo evento clave
✅ **Fundaciones** — verificación de anunciante (ya estaba desde 11/2025) · ARS y Buenos Aires confirmados · accesos limpios · campaña vieja **pausada**
✅ **3 listas de negativas compartidas** creadas
✅ **Campaña 1 `AR-Search-Obra-Industrial`** — 2 grupos con keywords, RSA y recursos cargados

**Las seis puertas del teléfono, cerradas.**

---

# PARTE A — Terminar de construir

## A1. Campaña 2 `AR-Search-Piletas` — en curso

**Configuración:** presupuesto **1.250**/día · redes destildadas · radio 60 km desde CABA con **Presencia** · solo español · AI Max OFF · **Clics con tope 350** · objetivos de la cuenta · sufijo UTM · exclusión de IP · **pausada**.

⚠️ Cada pantalla que pida URL va a `/arenado-de-piletas`, **no** a la home.

**Los 2 grupos, sus keywords y sus RSA:** ya te los pasé en el chat. Están también en `18-copy-ads.md` §7 (RSA 3 y 4) y en `ads-config/04` §4.3.

## A2. Recursos de la campaña de Piletas

`Recursos → + → nivel CAMPAÑA` (nunca grupo).

**6 sitelinks:**

| Título | Descripción 1 | Descripción 2 | URL |
|---|---|---|---|
| Arenado de piletas | Sacamos toda la pintura vieja | Vamos a tu casa, AMBA | `/arenado-de-piletas` |
| Antes y después | Piletas reales que hicimos | Mirá cómo quedan | `/casos-de-exito/arenado-pileta` |
| Cuánto sale y cuánto tarda | ¿Pintan o revisten? No | Presupuesto sin costo | `/preguntas-frecuentes` |
| Pedir presupuesto | Mandanos una foto por WhatsApp | Visita sin costo | `/contacto` |
| Otros servicios | Obra, fachadas y galpones | También arenamos estructuras | `/servicios` |
| Quiénes somos | Equipo de oficio, no promesas | 2 equipos propios | `/` |

**11 textos destacados:**
```
Piletas de hormigón
Vamos a tu casa
Sin lijar a mano
Listo para revestir
No pintamos: preparamos
Presupuesto sin costo
CABA y Gran Bs. As.
Trabajamos con pileteros
Turnos rápidos
Mandá una foto
20 años de oficio
```

**Fragmento estructurado** → encabezado **Tipos**:
```
Piletas de hormigón
Piscinas
Sacado de pintura vieja
Antes de revestir
Antes de pintar
Obras de pileteros
```

**4 imágenes:** `public/images/services/arenadoParticular/Piletas/` (IMG_2454, 2455, 2456, 2457). Son 828×828, recortar a cuadrado.

## A3. Campaña 3 `AR-Search-General-Marca`

**Configuración:** idéntica, con **750**/día.

### Grupo `ag_genericos` → `/servicios`

**Todas exactas, ni una frase.** Acá vive `arenado`, el término que quemó 208.000 en el histórico: el control es total.

```
[arenado]
[arenados]
[arenadora]
[empresa de arenado]
[servicio de arenado]
[arenado buenos aires]
[arenados buenos aires]
```

💡 `[arenadora]` se compra aunque suene a máquina: en exacta convirtió barato. Funciona **porque** la lista `NEG-EQUIPOS-DIY` bloquea "alquiler/venta/comprar arenadora" en frase y deja pasar la consulta pelada.

**RSA:** `18-copy-ads.md` §7 → RSA 5. **Ruta:** `arenados` / `buenos-aires`.

### Grupo `ag_marca` → `/`

```
[arenados lucho]
[arenado lucho]
"arenados lucho"
```

💡 Es la única frase de toda la campaña: captura "arenados lucho teléfono", "arenados lucho opiniones". Va a gastar muy poco y **está bien** — su función es defensiva. **Su CPA se reporta siempre por separado**, nunca promediado con el de obra.

**RSA:** `18-copy-ads.md` §7 → RSA 6 (incluye "Oficio aprendido en familia"). **Ruta:** `arenados` / `lucho`.

**Recursos de esta campaña:** sitelinks y textos destacados de la columna *General-Marca* en `18-copy-ads.md` §3 y §4.

## A4. Aplicar las listas de negativas ⚠️

`Herramientas → Biblioteca compartida → Listas de exclusión → [lista] → Aplicar a campañas`

| Lista | Obra-Industrial | Piletas | General-Marca |
|---|---|---|---|
| `NEG-EQUIPOS-DIY` | ✅ | ✅ | ✅ |
| `NEG-DATA` | ✅ | ✅ | ✅ |
| **`RUTEO-PILETAS`** | ✅ | ⛔ **NUNCA** | ✅ |

**Si aplicás `RUTEO-PILETAS` a Piletas, apagás la campaña entera** y no da ningún error. Es el error más caro posible de esta configuración.

## A5. Nombre y logo del negocio

`Campañas → Recursos → + → Información del negocio`

- **Nombre:** `Arenados Lucho`
- **Logo:** `public/images/favicon.png` (1906×1911, ya verificado)

La verificación de anunciante ya está completa, así que no hay espera.

---

# PARTE B — Pre-flight

**No se enciende con un solo punto en rojo.**

## B1. Que todas las URLs respondan

Abrí en una ventana de incógnito: `/` · `/servicios` · `/arenado-de-piletas` · `/casos-de-exito` · los 5 casos · `/preguntas-frecuentes` · `/contacto` · `/robots.txt` · `/sitemap.xml`

Y una con parámetros, para confirmar que no se rompen:
`https://www.arenadoslucho.com/arenado-de-piletas?utm_source=google&utm_medium=cpc&gclid=TEST123`

## B2. ⭐ Probar la conversión de punta a punta

**Es el punto más importante de todo el checklist.** `contact_whatsapp` funciona en Analytics pero **nunca registró una conversión en Ads**, porque nunca hubo tráfico pago.

1. Entrá al sitio desde el celular.
2. Tocá un botón de WhatsApp y **confirmá el cartel**.
3. Se tiene que abrir WhatsApp con el mensaje escrito.
4. En Analytics, `Informes → Tiempo real`, tiene que aparecer `contact_whatsapp` en minutos.

Si no aparece, **frenamos todo**: gastar sin medir es peor que no gastar.

## B3. Repasar el blindaje con captura

| Qué | Dónde | Esperado |
|---|---|---|
| Auto-apply | Recomendaciones → Aplicación automática | 0 de 7 y 0 de 14 |
| AI Max campaña | Configuración de cada campaña | OFF en las 3 |
| AI Max grupo | Configuración de cada grupo | "Solo tus palabras clave" en los 6 |
| Recursos automatizados | Recursos → Asociaciones → ⋮ | Los 6 en OFF |
| **Recursos heredados** | Recursos → **filtro Nivel = Cuenta** | **Vacío** |
| Recursos de llamada | Recursos → filtro tipo Llamada | **Vacío** |
| Ubicación | Administrador de ubicaciones | Sin ficha vinculada |

## B4. Repasar las campañas

- Socios de búsqueda y Display **destildados** en las 3
- Ubicación en **Presencia** (no "presencia o interés") en las 3
- Presupuestos **3.000 / 1.250 / 750**, individuales
- **Clics con tope 350** en las 3
- Sufijo UTM y exclusión de IP en las 3
- **Concordancia amplia a nivel campaña en OFF** en las 3

## B5. Cero keywords en amplia

`Palabras clave → filtrar por Tipo de concordancia`. Solo puede haber **frase** y **exacta**. Si aparece una sola amplia, se pausa.

## B6. Los pendientes menores

- **Los 2 borradores** que aparecen en Campañas: ver qué son y borrarlos, para no confundirlos con las nuevas.
- **Los pines de la campaña 1**: confirmar que se ven 3 títulos fijados a posición 1 y 3 a posición 2.
- **Scripts**: `Herramientas → Acciones masivas → Scripts` → los 4 con ejecución reciente y sin error. La quinta, "sin nombre", identificarla o borrarla.

---

# PARTE C — Encendido

## C1. Cargar saldo

## C2. Encender UNA campaña: `AR-Search-General-Marca`

**Solo esa.** Es la de menor riesgo: 750/día y tráfico de marca, gente que ya te busca por nombre. Las otras dos siguen pausadas 24 horas.

## C3. A las 24–48 h: verificar que la conversión llega ⭐

`Objetivos → Conversiones → Resumen`

- La conversión tiene que aparecer en la columna **"Conversiones"**, no solo en "Todas las conv."
- El estado tiene que decir **"Registrando conversiones"**
- **Captura obligatoria.**

⛔ Si aparece solo en "Todas las conv.", quedó como secundaria: **corregir antes de encender el resto.**

## C4. Comprobar el ruteo

`Herramientas → Solución de problemas → Vista previa y diagnóstico de anuncios`, en español y ubicación CABA:

- Una consulta de **pileta** tiene que disparar la campaña de **Piletas** hacia `/arenado-de-piletas`
- Una consulta de **empleo** **no tiene que disparar nada**

⛔ **Nunca te googlees para ver si salís.** Generás impresiones sin clic, baja tu CTR y eso encarece todos tus clics. Usá siempre esta herramienta.

## C5. Encender las otras dos

Recién con la medición verificada.

## C6. **No tocar nada 14 días**

Lo único que se hace en esas dos semanas: **agregar negativas** de los términos de búsqueda y arreglar lo que se rompa.

No se tocan pujas, ni presupuestos, ni keywords, ni textos. Se está fijando tu costo por consulta real, y cada cambio reinicia el aprendizaje.

---

# Después: la rutina

| Cuándo | Qué |
|---|---|
| **Diario, 2 min** | ¿Gastó? ¿Llegó el mail del guardián? **No se toca nada** |
| **Lunes, 30 min** | Términos de búsqueda → negativas nuevas · revisar que nadie haya cambiado algo |
| **Cada 15 días** | Keywords sin impresiones · descartar recomendaciones · **re-verificar que el blindaje siga en OFF** |
| **Mensual** | Calidad por componente · cruzar Ads contra los chats reales de WhatsApp — **el único juez** |

**Regla dura:** un cambio por vez, 14 días de datos antes del siguiente, y todo a `08-bitacora.md`.

---

## Qué esperar los primeros 30 días

- **Entre el 60% y el 70% de las 82 keywords no va a tener ni una impresión.** Es normal y no cuesta nada.
- El grupo `ag_pileta-sin-jerga` es una **apuesta**: no tiene historial. Si funciona, son los leads más baratos que vas a conseguir.
- El CPA de los primeros días **no significa nada**. La línea base real se lee a los 30 días.
- `ag_marca` va a gastar poquísimo. **Está bien.**

**El número que importa no es el de Google: son los chats que te llegan.** Si Ads dice 12 conversiones y recibiste 3 mensajes, hay un problema de medición — y en ese caso no se optimiza nada hasta resolverlo.

titulo: Codificación de equipos: tags ISA, KKS y RDS-PP con ejemplos
slug: codificacion-de-equipos-tags-isa-kks-rds-pp
resumen: Cómo codificar los equipos de una planta: tags de DTI, ubicación técnica ISO 14224, KKS y RDS-PP, con un mismo equipo codificado de cuatro formas.
imagenAlt: Técnico fotografía con el celular la placa de datos de un motor eléctrico en planta
---
Para codificar los equipos de una planta necesitas **dos códigos distintos que conviven**: el **tag** del diagrama de proceso (por ejemplo P-201A), que identifica el puesto en el proceso, y la **ubicación técnica** en tu CMMS, que ubica ese puesto dentro de la jerarquía de la planta (por ejemplo MX-EC1-T1-CMP-P201A). Si la planta es de generación eléctrica, además es probable que use **KKS** o su sucesor **RDS-PP**. Y cada máquina física lleva, aparte, su **número de serie**.

Este artículo explica cada sistema, cuándo conviene cada uno y cómo armar una regla de codificación que no se rompa en dos años. Al final hay un mismo equipo codificado de cuatro formas.

## Qué problema resuelve un buen código

Un código de equipo sirve para tres cosas:

1. **Encontrar el equipo** sin ambigüedad: en el DTI, en el CMMS y en campo, en la placa.
2. **Agrupar**: todas las bombas del sistema de condensado, todos los equipos del tren 1.
3. **Conservar la historia**: que las fallas y los trabajos queden asociados al puesto y a la máquina correctos.

Casi todos los problemas aparecen cuando **un solo código intenta hacer las tres cosas**, o cuando cada área inventó su propia regla.

## Los cuatro códigos que conviven en una planta

| Código | Qué identifica | Ejemplo | Quién lo define |
|---|---|---|---|
| **Tag de DTI** | El puesto en el proceso | P-201A | Ingeniería de proceso |
| **Ubicación técnica** | El puesto dentro de la jerarquía del CMMS | MX-EC1-T1-CMP-P201A | Mantenimiento (siguiendo la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224)) |
| **Número de equipo** | La máquina física dentro del CMMS | 10004587 | El CMMS (secuencial) |
| **Número de serie** | La máquina para el fabricante | SN 4521-B | El fabricante |

El tag y la ubicación técnica **identifican puestos**; el número de equipo y la serie **identifican máquinas**. Cuando una bomba se reemplaza por otra, el puesto se queda y la máquina cambia. Lo desarrollamos en [jerarquía de activos: ubicación técnica y equipo](/blog/jerarquia-de-activos-ubicacion-tecnica-y-equipo).

## 1. Tags de DTI e instrumentos (ISA-5.1)

Para **instrumentos**, la referencia es la norma **ANSI/ISA-5.1** (símbolos e identificación de instrumentación). El tag se forma con letras que indican la variable medida y la función, más un número de lazo:

| Tag | Primera letra (variable) | Letras siguientes (función) | Significado |
|---|---|---|---|
| PT-101 | P = presión | T = transmisor | Transmisor de presión del lazo 101 |
| FIC-205 | F = flujo | I = indicador, C = controlador | Controlador indicador de flujo del lazo 205 |
| LV-301 | L = nivel | V = válvula | Válvula de control de nivel del lazo 301 |
| TE-402 | T = temperatura | E = elemento primario | Elemento sensor de temperatura del lazo 402 |

Para **equipos mecánicos** (bombas, compresores, recipientes) no hay una norma única: la convención más extendida es una letra o prefijo por tipo y un número que suele indicar el área, por ejemplo **P** bombas, **K** o **C** compresores, **E** intercambiadores, **V** recipientes, **T** tanques o torres. Los sufijos **A/B** marcan equipos en paralelo o de respaldo. Cada empresa (o cada proyecto de ingeniería) fija su variante en un procedimiento.

**Lo bueno del tag:** todo el mundo en planta lo conoce y aparece en los planos. **Lo malo:** no dice a qué instalación ni a qué sistema pertenece, y los números se repiten entre plantas. Por eso el tag va **dentro** de la ubicación técnica, no en su lugar.

## 2. Ubicación técnica según la jerarquía ISO 14224

La ubicación técnica (*functional location*) se arma **agregando un segmento por nivel** de la jerarquía: instalación, planta, sistema y unidad de equipo. ISO 14224 no impone un formato de código, pero su jerarquía de niveles es la base natural:

```
MX-EC1 - T1 - CMP - P201A
│        │    │     └─ nivel 6: unidad de equipo (con el tag del DTI)
│        │    └─────── nivel 5: sistema (compresión de gas)
│        └──────────── nivel 4: planta / unidad (tren 1)
└───────────────────── nivel 3: instalación (estación de compresión Norte, México)
```

Reglas que funcionan:

- **Longitud fija por segmento** cuando se pueda (el CMMS lo valida con una máscara; en SAP PM se llama *indicador de estructura*).
- **Un separador único** (guion) y sin espacios ni acentos.
- **El último segmento es el tag**, para que se reconozca en campo.
- **Nada que cambie con el tiempo**: ni el nombre del responsable, ni el estado, ni la criticidad. La criticidad es un atributo, no parte del código.

## 3. KKS: el sistema de las centrales eléctricas

El **KKS** (*Kraftwerk-Kennzeichensystem*, sistema de identificación de centrales) lo publicó la asociación alemana de generadores **VGB PowerTech** y se usa en muchas centrales térmicas, de ciclo combinado e hidroeléctricas del mundo, también en Latinoamérica. Sus guías son la VGB-B 105 y la VGB-B 106.

El código KKS tiene **cuatro niveles**:

| Nivel KKS | Qué identifica | Formato |
|---|---|---|
| 0 · Planta total | La central o el bloque | Alfanumérico (se puede omitir si el código sigue siendo único) |
| 1 · Sistema | La función: letras de clasificación más número | Ej.: LAC 11 |
| 2 · Unidad de equipo | El tipo de equipo más número | Ej.: AP 001 |
| 3 · Componente | La parte del equipo más número | Ej.: -M01 |

Un ejemplo típico, **1 LAC11 AP001 -M01**, se lee así:

- **1**: bloque 1 de la central.
- **LAC11**: L = ciclos de agua, vapor y gas; LA = sistema de agua de alimentación; LAC = sistema de bombas de agua de alimentación; 11 = número del sistema.
- **AP001**: AP = unidad de bomba; 001 = la primera.
- **-M01**: el motor de esa bomba.

Las letras **I** y **O** no se usan, para no confundirlas con 1 y 0.

**Lo bueno del KKS:** la función está en el código, así que dos centrales distintas codifican igual el mismo sistema. **Lo malo:** es largo y difícil de leer sin la tabla de claves, y está pensado para generación eléctrica. Fuera de ese sector casi no se usa.

## 4. RDS-PP e IEC/ISO 81346: el sucesor

**RDS-PP** (*Reference Designation System for Power Plants*) es el reemplazo del KKS. Se basa en la serie **IEC/ISO 81346**, que define la **designación de referencia multiaspecto**: un mismo objeto se puede identificar desde tres puntos de vista, cada uno con su prefijo:

| Prefijo | Aspecto | Pregunta que responde |
|---|---|---|
| **=** | Función | ¿Para qué sirve? |
| **-** | Producto | ¿Qué es? |
| **+** | Ubicación | ¿Dónde está? |

La parte de la norma para centrales eléctricas es la **ISO 81346-10:2022**, y VGB publica las guías de aplicación (entre ellas la VGB-S-823). Para proyectos nuevos de generación, especialmente eólicos, RDS-PP ya es lo habitual. Para una planta industrial que no es de generación, adoptarlo completo suele ser más esfuerzo del que rinde; lo útil es copiar la idea de **separar función, producto y ubicación**, que es la misma que separa ubicación técnica y equipo.

## Un mismo equipo, cuatro códigos

La bomba de agua de alimentación A del bloque 1 de una central de ciclo combinado:

| Sistema | Código | Comentario |
|---|---|---|
| Tag de DTI | P-1101A | Conocido por operación; se repite en el bloque 2 |
| Ubicación técnica (jerarquía ISO 14224) | MX-CC1-B1-AGA-P1101A | Instalación, bloque, sistema de agua de alimentación y tag |
| KKS | 1 LAC11 AP001 | Bloque 1, sistema de bombas de agua de alimentación, bomba 001 |
| Número de equipo en el CMMS | 10004587 | La máquina; cambia si se instala otra bomba |

En una central que ya usa KKS, lo razonable es usar el **KKS como ubicación técnica** y guardar el tag de DTI como atributo para búsquedas. En una planta química, minera o de alimentos, la ubicación técnica construida con la jerarquía ISO 14224 y el tag al final suele ser la opción más clara.

<figure><img src="/sitio/valvula-placa.jpg" alt="Placa metálica de identificación colgada de una válvula en planta, con el tag grabado" loading="lazy" /><figcaption>El código del puesto va en la placa de campo; la máquina lleva además su número de serie del fabricante.</figcaption></figure>

## Códigos "inteligentes" frente a secuenciales

Un código **inteligente** lleva significado (tipo, área, número); uno **secuencial** es solo un número. La recomendación que sobrevive a los años:

- **Inteligente para puestos** (ubicación técnica y tag): la gente los lee y los reconoce en campo.
- **Secuencial para máquinas** (número de equipo): una máquina se mueve de puesto, cambia de área o de dueño, y un código con significado se vuelve mentira.
- **Nunca** pongas en un código un dato que pueda cambiar: estado, criticidad, responsable, centro de costos.

## Cómo escribir tu regla de codificación en una página

1. **Segmentos:** cuántos niveles tiene la ubicación técnica y qué va en cada uno.
2. **Longitud y caracteres:** largo de cada segmento, mayúsculas, sin acentos ni espacios, un solo separador.
3. **Tabla de prefijos** de tipos de equipo (P, K, E, V…), alineada con las [clases de equipo de ISO 14224](/blog/taxonomia-de-activos-iso-14224).
4. **Reglas de sufijos:** A/B para paralelos, cómo se nombran los equipos temporales y los de reserva en almacén.
5. **Qué hacer con los equipos nuevos:** quién asigna el código y en qué momento (antes de que llegue el equipo, no después).
6. **Cómo se jubila un código:** los códigos de equipos dados de baja no se reutilizan.

## Errores comunes

- **Reusar el código de un equipo dado de baja:** el historial nuevo se mezcla con el viejo.
- **Codificar la criticidad o el estado** dentro del código.
- **Un código por área:** la planta termina con tres "P-101".
- **Codificar sin ver los DTI:** aparecen equipos con dos códigos distintos (el del plano y el del CMMS) y nadie sabe cuál es el bueno.
- **Cambiar la regla cada proyecto:** mejor una regla imperfecta y estable que tres reglas buenas que no se hablan.

## Preguntas frecuentes

### ¿Qué es un tag de equipo?

Es el código que identifica un equipo o instrumento en los diagramas de proceso e instrumentación (DTI) y en su placa de campo, por ejemplo P-201A para una bomba o PT-101 para un transmisor de presión.

### ¿Qué significa KKS?

Kraftwerk-Kennzeichensystem, el sistema de identificación de centrales eléctricas publicado por VGB PowerTech. Codifica cada elemento en cuatro niveles: planta, sistema, unidad de equipo y componente.

### ¿KKS y RDS-PP son lo mismo?

No. RDS-PP es el sucesor del KKS y se basa en la norma IEC/ISO 81346, que separa función, producto y ubicación con los prefijos =, - y +. Muchas centrales existentes siguen con KKS y los proyectos nuevos adoptan RDS-PP.

### ¿ISO 14224 define un formato de código?

No. Define los niveles de la jerarquía, las clases de equipo con códigos de dos letras y los códigos de falla, pero no el formato de la ubicación técnica. Esa regla la fija cada empresa, normalmente con un segmento por nivel.

### ¿El tag del DTI puede ser el código del CMMS?

Puede ser el último segmento de la ubicación técnica, pero no conviene usarlo solo: se repite entre plantas y no dice a qué sistema pertenece el equipo.

En ReliaPlant cada equipo del [registro de activos](/producto/taxonomia) guarda su ubicación técnica, su tag de DTI y su clase ISO 14224 por separado, y se puede navegar desde el propio DTI de la planta.

<cta-demo titulo="Codifica tu planta una sola vez" texto="Ubicación técnica, tag de DTI y clase ISO 14224 en un mismo registro, listo para criticidad, RCM y tu CMMS." boton="Probar ReliaPlant gratis"></cta-demo>

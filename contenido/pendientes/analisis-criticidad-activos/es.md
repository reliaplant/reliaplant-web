titulo: Análisis de criticidad de activos: ejemplo y calculadora
slug: analisis-de-criticidad-de-activos
resumen: Cómo hacer un análisis de criticidad de equipos con el método CTR: fórmula, escalas, matriz, ejemplo resuelto de 8 equipos, calculadora y plantilla Excel.
imagenAlt: Equipo de ingenieros de mantenimiento revisa en una pantalla el diagrama de la planta para priorizar equipos
---
Un **análisis de criticidad de activos** ordena los equipos de una planta según el **riesgo que representa su falla**: cuánto afecta a la seguridad, al ambiente, a la producción y a los costos, multiplicado por lo seguido que falla. El método más usado en Latinoamérica, la **criticidad total por riesgo (CTR)**, lo calcula así:

> **Criticidad = Frecuencia × [(Impacto operacional × Flexibilidad) + Costo de mantenimiento + Impacto en seguridad, ambiente e higiene]**

El resultado decide dónde hacer RCM, qué equipos llevan monitoreo de condición, qué repuestos se tienen en almacén y qué órdenes de trabajo se atienden primero. Abajo tienes el método explicado, una **calculadora**, un **ejemplo resuelto de 8 equipos** de una estación de compresión, la regla que casi nadie aplica (el override por seguridad) y una **plantilla Excel** gratuita.

## Qué es la criticidad de un activo

La criticidad es una medida del **riesgo asociado a la falla** de un equipo. Como todo riesgo, combina dos factores: **probabilidad** (cada cuánto falla) y **consecuencia** (qué pasa cuando falla).

Por eso un equipo que falla seguido puede ser poco crítico y uno que casi nunca falla puede ser el más crítico de la planta. Una bomba de servicio con respaldo que se rompe cinco veces al año molesta mucho, pero su falla no detiene nada. Un compresor principal sin respaldo que falla una vez al año detiene la planta entera.

La familia de normas **ISO 55000** pide que las decisiones sobre activos se basen en el riesgo; el análisis de criticidad es la herramienta práctica para hacerlo a nivel de equipo.

## Métodos de análisis de criticidad

Hay varios métodos reconocidos. No compiten: todos son variantes de *probabilidad × consecuencia*, con distinto grado de detalle.

| Método | Cómo calcula | Cuándo conviene |
|---|---|---|
| **Criticidad total por riesgo (CTR)** | Frecuencia × [(Impacto operacional × Flexibilidad) + Costo + SHA]. Puntajes cerrados | Planta completa, equipo por equipo. Muy difundido en Latinoamérica (Parra y Crespo, INGEMAN) |
| **Método de los puntos (PDVSA)** | Frecuencia × [(Nivel de producción × % de impacto × tiempo para reparar) + Costo de reparación + Impacto en seguridad + Impacto ambiental] | Cuando hay buenos datos de producción y tiempos de reparación |
| **Matriz de riesgo 5 × 5** (ISO 31000, API 580/581) | Probabilidad (1–5) frente a consecuencia (1–5) en una matriz con zonas | Si la empresa ya usa una matriz corporativa de riesgo; integridad mecánica (RBI) |
| **NORSOK Z-008** | Clasificación de consecuencias por función, con criterios de salud, seguridad, ambiente y producción | Petróleo y gas costa afuera. La edición de 2001 se llamaba *Criticality analysis for maintenance purposes*; desde 2011, *Risk based maintenance and consequence classification* |
| **FMECA** (IEC 60812) | Criticidad por **modo de falla**, no por equipo | Cuando ya vas a hacer un AMEF o un RCM del equipo |

Para la mayoría de las plantas, el CTR es un buen punto de partida: es simple de explicar, se hace en sesiones de trabajo cortas y separa bien los equipos. Lo desarrollamos a continuación.

## El método CTR paso a paso

### La fórmula

- **Consecuencia** = (Impacto operacional × Flexibilidad operacional) + Costo de mantenimiento + Impacto en seguridad, ambiente e higiene (SHA)
- **Criticidad** = Frecuencia de falla × Consecuencia

La multiplicación *Impacto × Flexibilidad* es la idea clave: un equipo que detiene la planta (impacto 10) pero tiene respaldo inmediato (flexibilidad 1) suma 10; el mismo equipo sin respaldo (flexibilidad 4) suma 40.

### Escalas de puntaje

Una escala típica del método (ajusta las descripciones a tu planta):

| Criterio | Puntajes y significado |
|---|---|
| **Frecuencia de falla** | 1: menos de 1 al año · 2: de 1 a 2 · 3: de 2 a 4 · 4: más de 4 al año |
| **Impacto operacional** | 1: no afecta la producción · 4: la afecta parcialmente · 7: impacto importante en producción o calidad · 10: parada total |
| **Flexibilidad operacional** | 1: hay respaldo disponible · 2: respaldo compartido u operación reducida · 4: no hay respaldo |
| **Costo de mantenimiento** | 1: menor al umbral de la planta · 2: mayor al umbral (define el umbral con finanzas) |
| **Seguridad, ambiente e higiene (SHA)** | 0: sin impacto · 1: leve · 3: lesión menor o daño ambiental menor · 5: lesión con incapacidad o daño reportable · 8: lesión grave, fatalidad o daño ambiental mayor |

Con estas escalas, la consecuencia máxima es (10 × 4) + 2 + 8 = **50** y la criticidad máxima es 4 × 50 = **200**.

### Prueba la calculadora

Elige los puntajes de un equipo de tu planta. La matriz marca dónde cae.

<matriz-criticidad></matriz-criticidad>

## Ejemplo resuelto: 8 equipos de una estación de compresión

<figure><img src="/sitio/mapa-compresion.jpg" alt="Vista aérea de una estación de compresión de gas con compresores, enfriadores, separadores y tanques" loading="lazy" /><figcaption>Una estación de compresión típica: unos pocos equipos sin respaldo concentran casi todo el riesgo.</figcaption></figure>

Evaluamos ocho unidades de equipo (nivel 6 de la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224)) con las escalas de arriba. El umbral de costo de la planta es 20.000 USD por reparación.

| Equipo | Frec. | Impacto | Flex. | Costo | SHA | Consecuencia | Criticidad |
|---|---|---|---|---|---|---|---|
| Turbina de gas GT-101 (sin respaldo) | 2 | 10 | 4 | 2 | 8 | 50 | **100** |
| Compresor de gas K-101 (sin respaldo) | 2 | 10 | 4 | 2 | 5 | 47 | **94** |
| Compresor de aire de instrumentos KA-01 | 3 | 10 | 2 | 1 | 1 | 22 | **66** |
| Separador de entrada V-101 | 1 | 10 | 4 | 2 | 8 | 50 | **50** |
| Aeroenfriador de gas E-301 (4 bahías) | 2 | 4 | 2 | 1 | 0 | 9 | **18** |
| Bomba de condensado P-201A (respaldo B) | 3 | 1 | 1 | 1 | 3 | 5 | **15** |
| Bomba de drenaje cerrado P-501 | 4 | 1 | 1 | 1 | 1 | 3 | **12** |
| Bomba contra incendio P-601 | 1 | 1 | 1 | 1 | 8 | 10 | **10** |

Cómo se razonó cada uno:

- **GT-101 y K-101**: sin respaldo, su falla detiene toda la estación (impacto 10, flexibilidad 4). La turbina suma SHA 8 por el riesgo de incendio en el recinto.
- **KA-01**: sin aire de instrumentos las válvulas de control no operan y la planta se detiene (impacto 10), pero hay un compresor de respaldo compartido con otra área (flexibilidad 2). Falla 3 veces al año.
- **V-101**: casi nunca falla, pero una pérdida de contención de gas es grave (SHA 8) y no tiene respaldo.
- **E-301**: con una bahía fuera, la estación sigue con capacidad reducida (impacto 4, flexibilidad 2).
- **P-201A**: cuando falla, entra la P-201B (impacto 1, flexibilidad 1). La fuga de condensado es un riesgo menor (SHA 3).
- **P-501**: falla mucho (4), pero su falla no afecta nada.
- **P-601**: no participa en la producción, así que su consecuencia "operacional" es mínima. Pero es una **función de protección**: su falla solo se nota el día del incendio.

### La matriz y el override por seguridad

Con la matriz de ejemplo de la calculadora (frecuencia frente a rango de consecuencia), quedan así:

| Equipo | Criticidad | Nivel por matriz | Nivel final |
|---|---|---|---|
| GT-101 | 100 | A | **A** |
| K-101 | 94 | A | **A** |
| KA-01 | 66 | B | **B** |
| V-101 | 50 | B | **A** (override: SHA 8) |
| E-301 | 18 | C | **C** |
| P-201A | 15 | C | **C** |
| P-501 | 12 | B | **B** (por frecuencia) |
| P-601 | 10 | C | **A** (override: función de protección) |

Dos lecciones que el número solo no muestra:

1. **Override por seguridad.** Una fórmula que suma consecuencias puede dejar en criticidad media o baja a un equipo con riesgo de fatalidad, porque casi nunca falla. La regla que recomendamos: **todo equipo con SHA de 5 o más, o con función de protección** (contra incendio, válvulas de alivio, paros de emergencia, detectores de gas), **es A**, diga lo que diga el número. Esos equipos suelen tener [fallas ocultas](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) y su estrategia es la prueba funcional periódica.
2. **Frecuencia alta, consecuencia baja.** La P-501 sale B por fallar cuatro veces al año, no por su consecuencia. No necesita monitoreo de condición: necesita un [análisis de causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz) que corte la falla repetitiva.

### El Pareto

Los tres primeros equipos (GT-101, K-101 y KA-01) suman 260 de los 365 puntos de criticidad del grupo: el **71 %** del riesgo está en el 37 % de los equipos. Es el patrón habitual, y es la razón de hacer el análisis: concentrar el esfuerzo donde está el riesgo.

<descarga archivo="/descargas/plantilla-analisis-criticidad.xlsx" titulo="Plantilla Excel de análisis de criticidad (CTR)" texto="Escalas editables, fórmulas de consecuencia y criticidad, nivel por matriz, override por seguridad y el ejemplo de los 8 equipos." formato="Excel"></descarga>

## Cómo organizar el análisis en tu planta

1. **Define el nivel.** Se evalúa por **unidad de equipo** (nivel 6 de ISO 14224). Hacerlo por componente multiplica el trabajo sin cambiar las decisiones.
2. **Acuerda las escalas antes de evaluar** con operación, mantenimiento, seguridad y finanzas. Si se discute la escala en medio de la evaluación, los primeros equipos quedan puntuados con otra vara.
3. **Alinea la matriz con la corporativa.** Si seguridad industrial usa una matriz 5 × 5, que mantenimiento use la misma traducción de "alto", "medio" y "bajo".
4. **Junta los datos**: historial de fallas (para la frecuencia), costos de reparación, valor de la hora de producción, DTI para ver respaldos.
5. **Evalúa en sesiones cortas por sistema**, con gente de operación y mantenimiento. Pide evidencia cuando un puntaje se discute: "¿cuándo fue la última vez?".
6. **Revisa la distribución.** Si más del 30 % de los equipos queda en A, la escala no está discriminando: ajusta umbrales o descripciones.
7. **Aplica el override** por seguridad y funciones de protección.
8. **Publica y úsalo**: prioridad de órdenes, alcance del RCM, política de repuestos.
9. **Actualízalo** cuando cambie el proceso, se agregue un respaldo o el historial contradiga la frecuencia supuesta. Una vez al año como mínimo.

<figure><img src="/sitio/landing/rcm-taller-equipo.jpg" alt="Equipo de operación y mantenimiento reunido alrededor de una mesa con planos, evaluando la criticidad de los equipos" loading="lazy" /><figcaption>La criticidad se puntúa en equipo: operación conoce las consecuencias y mantenimiento conoce las fallas.</figcaption></figure>

## De la criticidad a la estrategia de mantenimiento

| Nivel | Qué hacer |
|---|---|
| **A** | [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) o [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) del equipo, [monitoreo de condición](/blog/mantenimiento-predictivo-curva-p-f) donde aplique, repuestos críticos en almacén, análisis de causa raíz de cada falla, prioridad máxima en órdenes de trabajo |
| **B** | Planes preventivos y predictivos estándar, revisados con datos; RCA de fallas repetitivas |
| **C** | Tareas básicas (limpieza, lubricación, rondas) o mantenimiento a la falla cuando sea lo más barato, si no hay riesgo de seguridad |

La criticidad también ordena los avisos: en un buen [GMAO](/blog/que-es-un-gmao-cmms-y-como-elegirlo), la prioridad de una orden de trabajo parte de la criticidad del equipo y se ajusta según el estado de la falla.

## Errores frecuentes

- **Confundir criticidad con importancia o con costo.** Un equipo caro con respaldo instantáneo puede ser C.
- **Puntuar de memoria.** La última falla grave siempre pesa más de lo que debería; contrasta con el historial.
- **Olvidar las funciones de protección.** Por su baja frecuencia, la fórmula las deja abajo. Usa el override.
- **Tratar la frecuencia alta como criticidad alta.** Un "mal actor" que falla mucho sin consecuencias pide RCA, no monitoreo caro.
- **Evaluar por área y no por equipo.** "La nave de bombas es crítica" no ayuda a decidir nada.
- **Hacerlo una vez y guardarlo.** Si no cambia la prioridad de las órdenes ni la política de repuestos, no sirvió.

## Preguntas frecuentes

### ¿Qué es un análisis de criticidad?

Es un método para clasificar los equipos de una planta según el riesgo de su falla, combinando la frecuencia de falla con sus consecuencias en seguridad, ambiente, producción y costos. El resultado suele ser una clasificación A, B y C que ordena el esfuerzo de mantenimiento.

### ¿Cómo se calcula la criticidad de un equipo?

Con el método de criticidad total por riesgo: Criticidad = Frecuencia × Consecuencia, donde Consecuencia = (Impacto operacional × Flexibilidad) + Costo de mantenimiento + Impacto en seguridad, ambiente e higiene.

### ¿Qué es la matriz de criticidad?

Es una tabla con la frecuencia de falla en un eje y la consecuencia en el otro, dividida en zonas de criticidad alta, media y baja. Los cortes entre zonas los define cada empresa, idealmente igual que su matriz de riesgo corporativa.

### ¿Cuántos equipos deberían ser de criticidad alta?

No hay un número fijo, pero si más de alrededor del 30 % de los equipos queda en A, la escala no está separando bien y conviene ajustarla. Lo normal es que pocos equipos concentren la mayor parte del riesgo.

### ¿Qué diferencia hay entre análisis de criticidad y FMECA?

El análisis de criticidad clasifica equipos completos. El FMECA (análisis de modos, efectos y criticidad de falla) clasifica cada modo de falla de un equipo y se usa dentro de un AMEF o un RCM, normalmente en los equipos que el análisis de criticidad dejó como A.

### ¿Cada cuánto se actualiza el análisis de criticidad?

Cuando cambia el proceso, se agrega o se quita un respaldo o el historial de fallas contradice la frecuencia supuesta, y como mínimo una vez al año.

## Criticidad, sobre los mismos equipos que mantienes

En ReliaPlant la criticidad se registra en cada equipo del [registro de activos ISO 14224](/producto/taxonomia) y queda disponible para priorizar los análisis [RCM](/producto/rcm) y decidir dónde investigar fallas con [RCA](/producto/rca).

<cta-demo titulo="Prioriza tu planta en una tarde" texto="Registra la criticidad de tus equipos sobre su jerarquía ISO 14224 y úsala directo para priorizar RCM y RCA." boton="Probar ReliaPlant gratis"></cta-demo>

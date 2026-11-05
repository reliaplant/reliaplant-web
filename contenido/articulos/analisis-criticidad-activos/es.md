titulo: Análisis de criticidad de activos: método paso a paso con matriz de riesgo
slug: analisis-de-criticidad-de-activos
resumen: Cómo hacer un análisis de criticidad de equipos: criterios, matriz de frecuencia por consecuencia, ejemplo de cálculo y cómo usar el resultado para priorizar.
---
Ninguna planta tiene recursos para tratar a todos sus equipos por igual. Siempre hay más órdenes de trabajo, más análisis pendientes y más repuestos por comprar que presupuesto. La pregunta no es si priorizar, sino **con qué criterio**.

El **análisis de criticidad** responde esa pregunta de forma ordenada: clasifica los activos según el riesgo que representa su falla para la seguridad, el ambiente, la producción y los costos. Bien hecho, decide dónde hacer RCM, qué equipos llevan monitoreo de condición, qué repuestos se mantienen en almacén y qué órdenes de trabajo se atienden primero. En este artículo explicamos **cómo hacerlo paso a paso, con un ejemplo numérico**.

## ¿Qué es la criticidad de un activo?

La criticidad de un activo es una medida del **riesgo asociado a su falla**. Como cualquier riesgo, combina dos factores:

> **Criticidad = Frecuencia de falla × Consecuencia de la falla**

Un equipo que falla seguido pero sin consecuencias (una bomba con respaldo en un servicio auxiliar) puede ser menos crítico que uno que casi nunca falla pero, cuando lo hace, detiene la planta o pone en riesgo a las personas (un compresor principal sin respaldo).

La norma **ISO 55000** de gestión de activos pide que las decisiones se basen en el riesgo; el análisis de criticidad es la herramienta práctica más usada para cumplirlo a nivel de equipo.

## Qué criterios evaluar

Los criterios cambian según la industria, pero casi todos los métodos consideran estos:

- **Frecuencia de falla**: cuántas veces falla el equipo (o equipos similares) por año. Se toma del historial; si no existe, de bases de datos genéricas o del juicio del equipo de trabajo.
- **Impacto en seguridad y salud**: desde ningún efecto hasta lesiones graves o fatalidades.
- **Impacto ambiental**: desde ninguno hasta un derrame o una emisión reportable.
- **Impacto en la producción**: cuánta producción se pierde mientras el equipo está fuera de servicio.
- **Flexibilidad operacional**: si hay respaldo, si se puede operar con capacidad reducida o si la falla detiene el proceso.
- **Costo de mantenimiento**: lo que cuesta reparar (mano de obra, repuestos, servicios externos).
- **Tiempo de reparación**: cuánto dura la parada, incluyendo la espera de repuestos.

## Un método de cálculo muy usado

Uno de los métodos más difundidos en Latinoamérica es el de **criticidad total por riesgo**, que asigna puntajes a cada criterio y los combina así:

> **Consecuencia = (Impacto operacional × Flexibilidad) + Costo de mantenimiento + Impacto en seguridad, ambiente e higiene**

Una escala típica de puntajes es la siguiente (ajústala a tu planta):

| Criterio | Puntajes |
|---|---|
| Frecuencia de falla | 1: menos de 1 falla por año · 2: 1 a 2 · 3: 2 a 4 · 4: más de 4 |
| Impacto operacional | 1: no afecta · 4: afecta parcialmente · 7: impacto en niveles de producción · 10: parada total |
| Flexibilidad | 1: hay respaldo disponible · 2: respaldo compartido u operación reducida · 4: sin respaldo |
| Costo de mantenimiento | 1: bajo · 2: alto (define el umbral, p. ej. 20.000 USD) |
| Seguridad, ambiente e higiene | 0 a 8, de "sin impacto" a "fatalidades o daño ambiental mayor" |

### Ejemplo

Comparemos dos equipos de la misma planta:

**Compresor de gas principal (sin respaldo):** falla 1 vez al año (frecuencia 2), su parada detiene la planta (impacto 10), no tiene respaldo (flexibilidad 4), reparar es caro (costo 2) y una falla puede liberar gas (seguridad 6).

- Consecuencia = (10 × 4) + 2 + 6 = **48**
- Criticidad = 2 × 48 = **96**

**Bomba de agua de servicio (con respaldo):** falla 5 veces al año (frecuencia 4), su parada no afecta la producción porque entra la de respaldo (impacto 1, flexibilidad 1), la reparación es barata (costo 1) y no tiene impacto de seguridad (0).

- Consecuencia = (1 × 1) + 1 + 0 = **2**
- Criticidad = 4 × 2 = **8**

La bomba es la que más órdenes de trabajo genera, pero el compresor es **doce veces más crítico**. Sin un análisis explícito, es común que la atención se la lleve el equipo que más "molesta", no el que más riesgo representa.

## La matriz de criticidad

El resultado se lleva a una matriz con la frecuencia en un eje y la consecuencia en el otro, dividida en zonas:

- **Alta criticidad (A)**: zona roja. Candidatos a RCM, monitoreo de condición, repuestos críticos en almacén y respuesta inmediata ante fallas.
- **Media criticidad (B)**: zona amarilla. Planes preventivos y predictivos estándar, revisión periódica.
- **Baja criticidad (C)**: zona verde. Mantenimiento mínimo o a la rotura, si no hay consecuencias de seguridad.

Los límites entre zonas deben ser coherentes con la **matriz de riesgo corporativa** de la empresa. Si seguridad industrial usa una matriz de 5 × 5, conviene que mantenimiento use la misma, para que un riesgo "alto" signifique lo mismo en toda la organización.

## Paso a paso

1. **Define el alcance y el nivel.** La criticidad se evalúa normalmente a nivel de **unidad de equipo** (nivel 6 de la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224)). Hacerlo por componente multiplica el trabajo sin cambiar las decisiones.
2. **Acuerda los criterios y la escala** con operación, mantenimiento, seguridad y finanzas, antes de evaluar el primer equipo. Si se discute la escala en medio de la evaluación, los resultados quedan sesgados.
3. **Junta la información**: historial de fallas, costos de reparación, valor de la producción por hora, diagramas de proceso para identificar respaldos.
4. **Evalúa en equipo**, en sesiones cortas, por sistema. Pide evidencia cuando un puntaje sea discutible: "¿cuándo fue la última vez que pasó?".
5. **Revisa la distribución.** Si más del 30–40 % de los equipos queda como alta criticidad, la escala no está discriminando. Ajusta los umbrales.
6. **Valida con la gerencia** y publica el resultado.
7. **Úsalo y actualízalo**: vuelve a evaluar cuando cambie el proceso, se agregue un respaldo o el historial muestre una frecuencia de falla distinta a la supuesta.

## Errores frecuentes

- **Confundir criticidad con importancia.** Un equipo "importante" con respaldo instantáneo puede tener baja criticidad. Lo que se evalúa es la consecuencia de su falla, no su tamaño o su costo.
- **Puntuar solo con la memoria.** El juicio del equipo es valioso, pero conviene contrastarlo con el historial: la última falla grave siempre pesa más de lo que debería.
- **Ignorar las fallas ocultas.** Las válvulas de seguridad, los sistemas contra incendio o los equipos de respaldo casi nunca fallan "en operación", pero su falla puede ser catastrófica cuando se necesitan.
- **Hacer el análisis y guardarlo.** Si la criticidad no se refleja en la prioridad de las órdenes de trabajo, en la política de repuestos y en el alcance del RCM, no sirvió de nada.

## Qué hacer con el resultado

- **Equipos A**: análisis [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011), [mantenimiento predictivo](/blog/mantenimiento-predictivo-curva-p-f), seguimiento de [MTBF y disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos), análisis de causa raíz de cada falla y repuestos críticos asegurados.
- **Equipos B**: planes preventivos optimizados y análisis de causa raíz para fallas repetitivas.
- **Equipos C**: tareas básicas (limpieza, lubricación, inspecciones de ronda) o mantenimiento a la rotura cuando sea la opción más económica.

En Reliaplant la criticidad se registra sobre cada equipo del [registro de activos](/modulos/registro-activos), de modo que queda disponible para filtrar, priorizar los análisis [RCM](/modulos/rcm) y decidir dónde investigar fallas con [RCA](/modulos/rca).

<cta-demo titulo="Prioriza con datos, no con urgencias" texto="Lleva la criticidad de cada equipo junto a su historial de fallas y sus análisis RCM y RCA." boton="Probar Reliaplant"></cta-demo>

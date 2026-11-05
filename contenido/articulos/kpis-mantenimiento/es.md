titulo: KPIs de mantenimiento: fórmulas, valores de referencia y cuáles medir primero
slug: kpis-de-mantenimiento-formulas-y-cuales-medir-primero
resumen: Los KPIs de mantenimiento que importan (OEE, MTBF, MTTR, backlog, cumplimiento del plan, costo/RAV): fórmulas, ejemplos, referencias SMRP y por dónde empezar.
---
Casi todas las gerencias de mantenimiento tienen un tablero de indicadores. Pocas pueden explicar de dónde sale cada número, qué decisión se tomó la última vez que uno se movió y por qué se miden veinte KPIs cuando solo se discuten tres.

En este artículo repasamos **los KPIs de mantenimiento más usados**, con su fórmula, un ejemplo numérico, qué indica cada uno y cuál es su trampa. También explicamos **qué hacer con los valores de referencia** que circulan y **cuáles conviene medir primero** si estás empezando.

## Indicadores de resultado y de proceso

Antes de las fórmulas, una distinción útil:

- **Indicadores de resultado** (*lagging*): muestran lo que ya pasó. Disponibilidad, MTBF, OEE, costo de mantenimiento.
- **Indicadores de proceso** (*leading*): muestran si se está haciendo lo que debería mejorar los resultados. Cumplimiento del plan, backlog, porcentaje de trabajo planificado.

Un tablero que solo tiene indicadores de resultado avisa tarde. Uno que solo tiene indicadores de proceso puede mostrar un 100 % de cumplimiento de un plan que no evita fallas. Hacen falta los dos.

## Las definiciones de la SMRP

La **SMRP** (*Society for Maintenance & Reliability Professionals*) publica un conjunto de métricas de mantenimiento y confiabilidad con **definiciones estandarizadas**: qué se incluye en el numerador, qué en el denominador y cómo se calcula cada una. En Europa, la norma **EN 15341** cumple un papel similar, y ambas organizaciones trabajaron en armonizar varios indicadores.

El valor principal de estas guías no son las metas, sino **las definiciones**. Dos plantas que calculan el "cumplimiento del preventivo" de forma distinta no pueden compararse, y una misma planta que cambia de definición a mitad de año no puede ver su tendencia. Por eso, el primer paso de cualquier tablero es escribir la ficha de cada indicador.

## Los KPIs, uno por uno

Los ejemplos numéricos de esta sección son **ilustrativos**.

### Disponibilidad, MTBF y MTTR

Son los indicadores de confiabilidad y mantenibilidad por equipo:

> **MTBF = Tiempo de operación ÷ Número de fallas**
>
> **MTTR = Tiempo total de reparación ÷ Número de reparaciones**
>
> **Disponibilidad = MTBF ÷ (MTBF + MTTR)**

Los tratamos en detalle, con calculadora y errores frecuentes, en el artículo sobre [MTBF, MTTR y disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos). La trampa principal: calcularlos a nivel de planta, mezclando equipos que no tienen nada que ver.

### OEE (Efectividad Global del Equipo)

El OEE, que viene del TPM, combina tres pérdidas en un solo número:

> **OEE = Disponibilidad × Rendimiento × Calidad**

- **Disponibilidad**: tiempo operando ÷ tiempo planificado de producción.
- **Rendimiento**: producción real ÷ producción a velocidad nominal en el tiempo operado.
- **Calidad**: unidades buenas ÷ unidades producidas.

Ejemplo: una línea con 90 % de disponibilidad, 95 % de rendimiento y 99 % de calidad tiene un OEE de 0,90 × 0,95 × 0,99 = **84,6 %**.

**Qué indica**: cuánto de la capacidad planificada se convierte en producto bueno. **Trampa**: es un indicador de producción, no solo de mantenimiento. Buena parte de sus pérdidas (cambios de formato, falta de materia prima, velocidad reducida por calidad) no dependen de mantenimiento. Además, funciona bien en líneas de manufactura discreta y es más difícil de interpretar en procesos continuos.

### Backlog (trabajo pendiente)

> **Backlog (semanas) = Horas-hombre de trabajo pendiente ÷ Horas-hombre disponibles por semana**

Ejemplo: 1.200 horas-hombre de órdenes aprobadas y pendientes, con una cuadrilla que dispone de 400 horas-hombre por semana para ese trabajo → **3 semanas de backlog**.

**Qué indica**: si la capacidad de la cuadrilla está alineada con la demanda. Un backlog que crece de forma sostenida indica falta de capacidad o exceso de trabajo reactivo; uno muy bajo puede indicar sobredimensionamiento o que no se están detectando trabajos. **Trampa**: medirlo en número de órdenes en lugar de horas, o mezclar órdenes listas para ejecutar con órdenes que esperan repuestos. Conviene separar el backlog **listo** del **total**.

### Cumplimiento del programa

> **Cumplimiento del programa = Horas (u órdenes) programadas ejecutadas ÷ Horas (u órdenes) programadas × 100**

Ejemplo: se programaron 320 horas para la semana y se ejecutaron 256 de esas horas programadas → **80 %**. El trabajo de emergencia que entró en la semana no suma al numerador: mide disciplina, no esfuerzo.

### Cumplimiento del preventivo

> **Cumplimiento del preventivo = Órdenes preventivas ejecutadas dentro de su ventana ÷ Órdenes preventivas programadas en el periodo × 100**

**Trampa**: la ventana de tolerancia. Si una tarea mensual se acepta como "cumplida" con tres semanas de atraso, el indicador mejora pero el intervalo real se alarga. Define la ventana por escrito, proporcional a la frecuencia de la tarea.

### Porcentaje de mantenimiento preventivo y predictivo

> **% proactivo = Horas de preventivo y predictivo ÷ Horas totales de mantenimiento × 100**

Su complemento útil es el **porcentaje de trabajo no planificado o de emergencia**. Juntos muestran si la cuadrilla controla su trabajo o el trabajo la controla a ella.

**Trampa**: un porcentaje de preventivo alto no significa que el plan sea bueno. Si las tareas no previenen los modos de falla reales, se puede tener un 80 % de preventivo y la misma cantidad de fallas. Por eso este indicador debe mirarse junto al MTBF. La elección del tipo de tarea correcto la tratamos en [preventivo, predictivo y correctivo](/blog/mantenimiento-preventivo-predictivo-correctivo-cuando-usar-cada-uno).

### Costo de mantenimiento sobre RAV

> **Costo de mantenimiento / RAV = Costo anual total de mantenimiento ÷ Valor de reemplazo de los activos × 100**

El **RAV** (*Replacement Asset Value*) es lo que costaría hoy reemplazar los activos productivos de la planta con su capacidad actual. Ejemplo: 4,5 millones de USD de costo anual de mantenimiento en una planta con un RAV estimado de 180 millones de USD → **2,5 %**.

**Qué indica**: permite comparar el gasto de mantenimiento entre plantas de distinto tamaño, mejor que el costo absoluto o el costo por unidad producida. **Trampa**: el RAV casi nunca está calculado. Usar el valor contable (depreciado) en su lugar infla el indicador en plantas antiguas. Y un costo bajo no es necesariamente bueno: puede ser una planta que está consumiendo su confiabilidad sin invertir.

## Resumen de fórmulas

| KPI | Fórmula | Tipo | Mejor cuando |
|---|---|---|---|
| MTBF | Tiempo de operación ÷ fallas | Resultado | Sube |
| MTTR | Tiempo de reparación ÷ reparaciones | Resultado | Baja |
| Disponibilidad | MTBF ÷ (MTBF + MTTR) | Resultado | Sube |
| OEE | Disponibilidad × rendimiento × calidad | Resultado | Sube |
| Backlog | Horas pendientes ÷ capacidad semanal | Proceso | Estable en el rango definido |
| Cumplimiento del programa | Programado ejecutado ÷ programado | Proceso | Sube |
| Cumplimiento del preventivo | PM en ventana ÷ PM programados | Proceso | Sube |
| % proactivo | Horas PM + PdM ÷ horas totales | Proceso | Sube, si el MTBF acompaña |
| Costo / RAV | Costo anual ÷ RAV | Resultado | Depende del contexto |

## ¿Y los valores de referencia?

Circulan muchas cifras de "clase mundial". Algunas tienen un origen identificable (el 85 % de OEE, por ejemplo, se asocia a la literatura del TPM) y otras son reglas prácticas, como mantener un backlog listo de entre dos y cuatro semanas. Otras no tienen una fuente clara.

Recomendaciones para usarlas con criterio:

- **Verifica la fuente y la definición.** Una referencia solo sirve si el indicador se calcula igual. Si una cifra se atribuye a la SMRP, consulta su publicación vigente: la SMRP pone sus métricas y estudios comparativos a disposición de sus miembros.
- **Compara contra industrias similares.** Una refinería, una planta de alimentos y una mina tienen estructuras de costo y de riesgo muy distintas.
- **Prioriza tu tendencia.** Para la mayoría de las plantas, mejorar de forma sostenida contra su propia línea base es más útil que perseguir un número externo.

## ¿Cuáles medir primero?

Si estás armando el tablero desde cero, un orden razonable es:

1. **Calidad del registro.** Antes de cualquier KPI: ¿todas las fallas generan una orden de trabajo?, ¿las órdenes se cierran con equipo, modo y causa de falla? Sin esto, el MTBF es ficción.
2. **Cumplimiento del preventivo y del programa.** Son baratos de medir y muestran si el plan se ejecuta.
3. **Backlog en semanas.** Indica si la capacidad alcanza.
4. **% de trabajo no planificado.** Muestra cuánto del tiempo se va en apagar incendios.
5. **MTBF, MTTR y disponibilidad de los equipos críticos.** No de toda la planta: de los equipos que salieron del [análisis de criticidad](/blog/analisis-de-criticidad-de-activos).
6. **Costo / RAV y OEE**, cuando la base anterior esté estable y se pueda estimar el RAV o se tengan datos de producción confiables.

Para cada indicador, define una ficha con fórmula, fuente de datos, responsable, frecuencia y **qué acción se toma si se sale de rango**. Un KPI sin acción asociada es decoración.

## Los indicadores dependen de los datos maestros

La mayoría de los problemas con los KPIs de mantenimiento no están en las fórmulas, sino en los datos: equipos duplicados, fallas registradas como texto libre, órdenes cerradas sin causa. Una [taxonomía de activos ISO 14224](/blog/taxonomia-de-activos-iso-14224) y un [catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo) bien definido son la base para que los indicadores signifiquen algo.

En Reliaplant, las fallas se registran sobre cada equipo del [registro de activos](/modulos/registro-activos) con modo y causa normalizados, y las fallas repetitivas que mueven los indicadores se pueden llevar directo a un [análisis causa raíz](/modulos/rca).

<cta-demo titulo="KPIs que puedes defender" texto="Registra fallas con modo y causa normalizados sobre tu jerarquía de activos y obtén MTBF, MTTR y disponibilidad de tus equipos críticos con datos consistentes." boton="Probar Reliaplant"></cta-demo>

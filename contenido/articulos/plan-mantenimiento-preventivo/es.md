titulo: Plan de mantenimiento preventivo: cómo armarlo desde cero, paso a paso
slug: como-hacer-un-plan-de-mantenimiento-preventivo
resumen: Cómo hacer un plan de mantenimiento preventivo desde cero: inventario, criticidad, manual del fabricante frente a RCM, frecuencias, hojas de ruta y revisión.
---
Armar un plan de mantenimiento preventivo desde cero parece una tarea administrativa: listar los equipos, copiar las recomendaciones del fabricante y cargarlas en el sistema. Ese camino produce planes enormes, difíciles de cumplir y que no evitan las fallas que más le cuestan a la planta.

En este artículo proponemos **un método paso a paso para construir un plan de mantenimiento preventivo** que se pueda ejecutar y defender: desde el inventario de activos hasta las hojas de ruta y la revisión periódica.

## Qué es (y qué no es) un plan de mantenimiento preventivo

Un plan de mantenimiento preventivo es el conjunto de **tareas programadas** que se ejecutan sobre los activos para prevenir o detectar sus fallas, cada una con:

- el **equipo** o ítem sobre el que se hace,
- **qué** se hace y cómo (procedimiento),
- **cada cuánto** (frecuencia en tiempo, horas de operación o ciclos),
- **quién** la hace (especialidad, operador o contratista),
- **qué se necesita**: horas, repuestos, herramientas, permisos y si requiere parada.

En la práctica, un buen plan "preventivo" incluye también tareas **a condición** (inspecciones, mediciones, análisis de vibraciones o aceite) y **pruebas de protecciones**. Por qué cada una tiene su lugar lo explicamos en [preventivo, predictivo y correctivo](/blog/mantenimiento-preventivo-predictivo-correctivo-cuando-usar-cada-uno).

Lo que **no** es: una lista de todo lo que el fabricante sugiere, ni un calendario de cambios de piezas "por las dudas".

## Paso 1: inventario y jerarquía de activos

No se puede planificar el mantenimiento de equipos que no están identificados. El primer paso es un **inventario completo**, organizado en una jerarquía: planta, área, sistema, equipo y, para los equipos importantes, sus subunidades e ítems mantenibles.

Para cada equipo, como mínimo:

- código único (tag) y ubicación,
- clase y tipo de equipo,
- fabricante, modelo y datos técnicos principales,
- documentación disponible (manuales, planos, hojas de datos),
- historial de fallas e intervenciones, si existe.

Definir las reglas de la jerarquía antes de levantar datos ahorra meses de retrabajo. La [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) es una buena referencia para los niveles y los límites de cada clase de equipo.

## Paso 2: criticidad para decidir el nivel de esfuerzo

No todos los equipos merecen el mismo análisis. Un [análisis de criticidad](/blog/analisis-de-criticidad-de-activos), que combine frecuencia de falla y consecuencias en seguridad, ambiente, producción y costo, permite repartir el esfuerzo:

| Criticidad | Cómo definir las tareas | Ejemplos |
|---|---|---|
| Alta | Análisis de modos de falla (AMEF o RCM) con equipo multidisciplinario | Compresor principal, bomba de alimentación sin respaldo |
| Media | Plan genérico por clase de equipo, ajustado con el historial y la experiencia | Bombas con respaldo, ventiladores de proceso |
| Baja | Tareas mínimas, rondas de operador o correctivo planificado | Equipos auxiliares redundantes, iluminación |

Esta tabla es **ilustrativa**: los límites entre niveles los define cada empresa.

## Paso 3: de dónde salen las tareas

### Recomendaciones del fabricante

El manual del fabricante es un punto de partida útil, sobre todo para lubricación, ajustes y tareas que afectan la garantía. Pero tiene limitaciones:

- El fabricante **no conoce tu contexto operacional**: si el equipo trabaja continuo o intermitente, con qué fluido, con qué redundancia, en qué ambiente.
- Las recomendaciones suelen ser **conservadoras**, porque el fabricante no paga las paradas ni los repuestos.
- Rara vez distinguen entre modos de falla con desgaste por edad y modos de falla aleatorios.

### Análisis de modos de falla (AMEF y RCM)

Para los equipos críticos, la forma más sólida de definir tareas es partir de **cómo puede fallar cada equipo**. El [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) identifica los modos de falla, y el [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) elige, para cada uno, la tarea técnicamente factible que vale la pena: a condición, reacondicionamiento o sustitución cíclica, búsqueda de fallas, rediseño o correctivo planificado.

### Comparación

| Aspecto | Manual del fabricante | AMEF / RCM |
|---|---|---|
| Esfuerzo inicial | Bajo | Alto |
| Considera el contexto operacional | No | Sí |
| Justificación de cada tarea | Implícita | Documentada, modo de falla por modo de falla |
| Cubre fallas ocultas y protecciones | Parcialmente | Sí, de forma explícita |
| Riesgo típico | Exceso de tareas por tiempo | Análisis que no termina en órdenes de trabajo |
| Uso recomendado | Equipos de baja criticidad, garantía, lubricación | Equipos de alta criticidad |

Las fuentes no se excluyen: lo habitual es combinar el manual, el historial de fallas, la experiencia de los técnicos y, en los equipos críticos, el análisis de modos de falla.

## Paso 4: definir frecuencias

La frecuencia es donde más se improvisa. Algunas reglas:

- **Tareas a condición**: la frecuencia depende del **intervalo P-F**, no de la vida del equipo. Si una falla de rodamiento da señales en vibración unas 8 semanas antes de fallar, inspeccionar cada 4 semanas da margen para detectarla y planificar. Lo explicamos en la [curva P-F](/blog/mantenimiento-predictivo-curva-p-f).
- **Reemplazos o reacondicionamientos por tiempo**: solo tienen sentido si el modo de falla tiene una **edad de desgaste** identificable y la mayoría de los componentes llega a ella. La frecuencia sale de esa edad, no del calendario.
- **Pruebas de protecciones (búsqueda de fallas)**: la frecuencia depende de la confiabilidad del dispositivo y del nivel de riesgo aceptable.
- **Usa la unidad correcta**: horas de operación o ciclos para equipos de uso intermitente; calendario para lo que se degrada con el tiempo aunque no opere (por ejemplo, ciertos elastómeros o la corrosión).
- **Agrupa frecuencias**: si tienes tareas cada 25, 30 y 35 días sobre el mismo equipo, normalízalas en una frecuencia mensual. Facilita la programación sin cambiar el resultado técnico.

## Paso 5: hojas de ruta y procedimientos

Las tareas se ejecutan a través de **hojas de ruta** (rutas de inspección o lubricación) y **órdenes de trabajo**. Para que funcionen:

- **Agrupa por recorrido y especialidad**: una ruta de lubricación por área, una ruta de vibraciones por sala de máquinas, una ronda de operador por turno.
- **Escribe criterios de aceptación**: "revisar temperatura" no sirve; "temperatura del soporte menor a 80 °C, si es mayor generar aviso" sí.
- **Separa las tareas con y sin parada**: las que requieren parada se agrupan en las ventanas de producción o en paradas programadas.
- **Asigna tareas a operadores** cuando sean simples (inspecciones visuales, ruidos, fugas, niveles). Liberan horas de técnicos para el trabajo especializado.
- **Estima horas y materiales** de cada tarea para poder programar según la capacidad real.

### Ejemplo de hoja de ruta

Hoja de ruta **ilustrativa** para una bomba centrífuga crítica sin respaldo:

| Tarea | Tipo | Frecuencia | Responsable | Criterio de aceptación | Parada |
|---|---|---|---|---|---|
| Inspección visual de fugas en sello y bridas | A condición | Cada turno | Operador | Sin goteo visible | No |
| Medición de vibraciones en soportes | Predictivo | Mensual | Técnico predictivo | Dentro de los límites de alarma definidos para el equipo | No |
| Lubricación de rodamientos | Preventivo | Por horas de operación, según fabricante | Lubricador | Cantidad y tipo de grasa según ficha | No |
| Análisis de aceite del soporte | Predictivo | Trimestral | Técnico predictivo | Dentro de límites de contaminación y degradación | No |
| Prueba funcional del interruptor de bajo caudal | Búsqueda de fallas | Semestral | Instrumentista | Dispara al valor de ajuste | Sí, coordinada |
| Verificación de alineación | A condición | Tras cada intervención | Mecánico | Dentro de la tolerancia del procedimiento | Sí |

## Paso 6: cargar el plan y medir

Con las tareas definidas, el plan se carga en el [GMAO o CMMS](/blog/que-es-un-gmao-cmms-y-como-elegirlo) para que genere las órdenes automáticamente. Antes de hacerlo, verifica que la carga total de horas sea compatible con la capacidad de la cuadrilla: un plan que necesita más horas de las disponibles no se cumplirá.

Para saber si el plan funciona, mide al menos:

- **Cumplimiento del preventivo**: ¿se ejecuta lo que se programó, dentro de su ventana?
- **Hallazgos**: ¿cuántas inspecciones detectan algo que genera una orden correctiva planificada?
- **Fallas no previstas** en equipos con plan: cada una es una señal de que falta una tarea o que la frecuencia no es la adecuada.
- **MTBF y disponibilidad** de los equipos críticos, con las definiciones de los [KPIs de mantenimiento](/blog/kpis-de-mantenimiento-formulas-y-cuales-medir-primero).

## Paso 7: revisar el plan

Un plan de mantenimiento no se termina nunca. Revísalo:

- **Cuando ocurre una falla no prevista** en un equipo crítico: el [análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz) suele mostrar una tarea faltante, una frecuencia inadecuada o un procedimiento mal ejecutado.
- **Cuando una tarea nunca encuentra nada** durante mucho tiempo: puede ser candidata a alargar su intervalo o a eliminarse, si el análisis lo respalda.
- **Cuando cambia el contexto operacional**: nuevo régimen de operación, otro producto, se agrega o se quita un equipo de respaldo.
- **Periódicamente**, al menos una vez al año para los equipos críticos.

## Del plan en papel al plan vivo

El riesgo de todo plan es que quede desconectado de su justificación: dentro de tres años nadie sabrá por qué una tarea es mensual y no trimestral. En Reliaplant, el plan nace del [registro de activos](/modulos/registro-activos) y del [análisis RCM](/modulos/rcm): cada tarea queda vinculada al modo de falla que previene y se exporta a tu GMAO con su frecuencia y procedimiento.

<cta-demo titulo="Un plan preventivo con su porqué" texto="Construye tu plan desde el registro de activos y el análisis de modos de falla, con cada tarea justificada y lista para cargar en tu GMAO." boton="Probar Reliaplant"></cta-demo>

titulo: Mantenimiento preventivo, predictivo y correctivo: cuándo conviene cada uno (con tabla de decisión)
slug: mantenimiento-preventivo-predictivo-correctivo-cuando-usar-cada-uno
resumen: Diferencias entre mantenimiento correctivo, preventivo, predictivo y basado en condición, cuándo conviene cada uno y una tabla de decisión por modo de falla.
---
"Hay que pasar de correctivo a preventivo" y "hay que pasar de preventivo a predictivo" son dos frases que se escuchan en casi todas las plantas. Las dos parten de una idea equivocada: que hay un tipo de mantenimiento mejor que los otros y que la meta es usarlo en todo.

La realidad es que **cada tipo de mantenimiento es la respuesta correcta para ciertos modos de falla y la incorrecta para otros**. En este artículo explicamos las diferencias entre correctivo, preventivo, predictivo y basado en condición, **cuándo conviene cada uno** y cómo decidirlo con una tabla simple.

## Las definiciones, sin ambigüedad

La terminología de mantenimiento está normalizada en la **EN 13306** y también se usa en la [ISO 14224](/blog/taxonomia-de-activos-iso-14224). Simplificando:

- **Mantenimiento correctivo**: se ejecuta **después** de detectar una falla, para devolver el equipo a un estado en que pueda cumplir su función. Puede ser inmediato o diferido (se programa para más adelante).
- **Mantenimiento preventivo**: se ejecuta **antes** de la falla, para reducir su probabilidad o la degradación. Se divide en dos grandes familias:
  - **Predeterminado o sistemático**: a intervalos fijos de tiempo, horas de operación, ciclos o producción, **sin mirar el estado del equipo**. Es lo que en el día a día se llama "preventivo".
  - **Basado en condición**: incluye la evaluación del estado del equipo (inspección, medición, monitoreo) y las acciones que se derivan de esa evaluación.
- **Mantenimiento predictivo**: mantenimiento basado en condición que se hace siguiendo una **predicción** obtenida del análisis y la evaluación de parámetros de degradación. En la práctica, "predictivo" y "basado en condición" se usan casi como sinónimos.

Hay una cuarta opción que no siempre se nombra pero que es una estrategia legítima: **operar hasta la falla** (*run to failure*), cuando se decide conscientemente no hacer ninguna tarea proactiva y reparar cuando falle.

## Qué hace bien cada uno

| Tipo | Cuándo actúa | Ventaja principal | Riesgo principal |
|---|---|---|---|
| Correctivo / a la rotura | Después de la falla | No gasta en tareas proactivas | Paradas no planificadas, daños secundarios, riesgo de seguridad |
| Preventivo por tiempo | A intervalo fijo | Fácil de planificar | Intervenir equipos sanos e introducir fallas tras la intervención |
| Basado en condición / predictivo | Cuando la condición lo indica | Interviene solo cuando hace falta | Requiere técnica, personal y datos; inútil si el intervalo es mal elegido |
| Búsqueda de fallas | A intervalo fijo, sobre protecciones | Descubre fallas ocultas | Si no se hace, la falla se descubre cuando ya es tarde |

## El dato que decide: cómo falla el equipo

La pregunta clave no es "¿qué tipo de mantenimiento prefiero?", sino **"¿cómo se comporta este modo de falla en el tiempo?"**. Los estudios que dieron origen al [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) mostraron que muchos componentes no tienen una edad de desgaste clara: su probabilidad de falla no aumenta con la edad.

La distribución de Weibull lo resume con su parámetro de forma β:

- **β < 1**: la tasa de falla baja con el tiempo (mortalidad infantil). Reemplazar por tiempo **empeora** las cosas, porque reinicia el periodo de mayor riesgo.
- **β ≈ 1**: la tasa de falla es constante (fallas aleatorias). Reemplazar por tiempo **no cambia nada**.
- **β > 1**: la tasa de falla crece con la edad (desgaste). Aquí el preventivo por tiempo **sí puede tener sentido**.

Cambia β en la gráfica para ver cómo cambia la tasa de falla:

<curva-weibull beta="3" eta="8000"></curva-weibull>

La consecuencia práctica es fuerte: **el preventivo por tiempo solo funciona para modos de falla con desgaste por edad**, como erosión, fatiga de ciclo conocido o desgaste de elementos de fricción. Para todo lo demás hay que buscar una tarea a condición o aceptar la falla.

## ¿Cuándo conviene el predictivo?

Una tarea basada en condición tiene sentido cuando se cumplen todas estas condiciones:

1. Existe una **falla potencial detectable**: una señal que aparece antes de la falla funcional (vibración, temperatura, partículas en el aceite, espesor de pared).
2. El **intervalo P-F** (tiempo entre que la falla se puede detectar y que ocurre) es suficientemente largo y razonablemente consistente.
3. Es práctico inspeccionar a un intervalo menor que el P-F y queda tiempo para planificar la intervención.
4. El costo del programa es menor que el de las consecuencias que evita.

El detalle de cómo calcular el intervalo de inspección está en el artículo sobre la [curva P-F](/blog/mantenimiento-predictivo-curva-p-f).

## ¿Cuándo conviene el correctivo?

Dejar fallar un equipo es una decisión válida cuando:

- La falla **no tiene consecuencias de seguridad ni ambientales**.
- La falla es **evidente** para los operadores (no es oculta).
- No hay una tarea proactiva factible, o cuesta más que reparar.
- Hay **redundancia** o la consecuencia operacional es tolerable.

Una luminaria de oficina, un ventilador de un tablero con respaldo o una bomba de drenaje con equipo de reserva son ejemplos típicos. Lo importante es que el correctivo sea **planificado**: repuesto definido, procedimiento disponible y prioridad acordada.

## Tabla de decisión por modo de falla

La siguiente tabla resume una lógica simplificada, inspirada en la del RCM, para elegir el tipo de tarea. Se aplica **a cada modo de falla**, no al equipo completo.

| Pregunta | Si la respuesta es sí | Si es no |
|---|---|---|
| 1. ¿La falla es oculta en operación normal? | Si no hay tarea a condición o por tiempo factible: **búsqueda de fallas** (prueba periódica de la protección) | Pasar a 2 |
| 2. ¿Hay una falla potencial detectable con un intervalo P-F útil? | **Basado en condición / predictivo** | Pasar a 3 |
| 3. ¿Hay una edad de desgaste identificable (β > 1) y la mayoría de los componentes llega a ella? | **Preventivo por tiempo** (reacondicionar o sustituir) | Pasar a 4 |
| 4. ¿La falla tiene consecuencias de seguridad o ambientales? | **Rediseño** obligatorio (o combinación de tareas que reduzca el riesgo a un nivel tolerable) | Pasar a 5 |
| 5. ¿Las consecuencias operacionales justifican un rediseño? | **Rediseño** | **Correctivo planificado** (a la rotura) |

En cada paso, la tarea también debe **valer la pena**: costar menos que las consecuencias que evita, o reducir el riesgo de seguridad a un nivel aceptable.

## Ejemplo aplicado a una bomba

Ejemplo **ilustrativo** para una bomba de proceso sin respaldo:

| Modo de falla | Comportamiento | Tarea elegida |
|---|---|---|
| Desgaste de rodamiento | Da señales de vibración semanas antes de fallar | Análisis de vibraciones (predictivo) |
| Degradación del aceite del soporte | Se degrada con las horas de operación | Cambio de aceite por horas (preventivo) o análisis de aceite |
| Fuga por sello mecánico | Aleatoria, con aviso corto | Inspección visual en ronda de operador y repuesto en almacén |
| Falla del interruptor de bajo caudal | Oculta | Prueba funcional periódica (búsqueda de fallas) |
| Falla de la luminaria del cuarto de bombas | Evidente, sin consecuencias | Correctivo planificado |

Un mismo equipo termina con **cuatro tipos de mantenimiento distintos**. Eso es lo normal en un plan bien construido.

## Cómo cambiar la mezcla sin desarmar la planta

Pasar de un plan dominado por el correctivo o por el preventivo por tiempo a una mezcla equilibrada no se hace de un día para otro. Un camino razonable:

1. **Empieza por los equipos críticos.** Revisa sus modos de falla y elimina o ajusta las tareas por tiempo que no previenen ningún modo de falla con desgaste por edad.
2. **Introduce tareas a condición donde haya falla potencial detectable**, empezando por técnicas simples: rondas de operador con criterios escritos, termografía, vibraciones básicas.
3. **Planifica el correctivo que decidas aceptar**: repuestos, procedimientos y prioridades definidos de antemano.
4. **Mide antes y después**: fallas no previstas, horas de emergencia y disponibilidad de los equipos intervenidos. Si no mejoran, revisa la tarea y no solo su cumplimiento.

## Errores frecuentes al elegir la estrategia

1. **Decidir por equipo y no por modo de falla.** "A esta bomba le hacemos predictivo" deja sin cubrir los modos de falla que el predictivo no detecta.
2. **Preventivo por tiempo para todo.** Cambiar rodamientos cada año "por las dudas" introduce fallas de montaje y consume repuestos sin reducir fallas.
3. **Comprar tecnología predictiva sin estrategia.** Sensores en equipos poco críticos y rutas que nadie analiza. El [análisis de criticidad](/blog/analisis-de-criticidad-de-activos) debe venir antes.
4. **Olvidar las fallas ocultas.** Válvulas de alivio, alarmas, disparos y equipos de respaldo necesitan pruebas, no solo inspecciones.
5. **Medir solo el porcentaje de preventivo.** Un porcentaje alto de preventivo no dice si las tareas son las correctas. Mira también el MTBF y la disponibilidad de los [indicadores de mantenimiento](/blog/kpis-de-mantenimiento-formulas-y-cuales-medir-primero).

## De la teoría al plan

Elegir bien el tipo de mantenimiento requiere conocer los modos de falla de cada equipo y su comportamiento real. Esa es justamente la tarea del [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) y del RCM. En Reliaplant, el [módulo de RCM](/modulos/rcm) aplica la lógica de decisión a cada modo de falla y genera un plan donde cada tarea, sea predictiva, preventiva, de búsqueda de fallas o correctiva planificada, tiene su justificación.

<cta-demo titulo="La tarea correcta para cada modo de falla" texto="Aplica la lógica de decisión del RCM modo por modo y obtén un plan que combina predictivo, preventivo y correctivo planificado con su justificación." boton="Probar Reliaplant"></cta-demo>

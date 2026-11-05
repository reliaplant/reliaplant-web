titulo: AMEF (FMEA) en mantenimiento: cómo hacerlo paso a paso, con ejemplo de una bomba centrífuga
slug: amef-fmea-en-mantenimiento-paso-a-paso
resumen: Cómo hacer un AMEF de mantenimiento paso a paso: ejemplo de bomba centrífuga, cálculo del RPN, sus límites frente a la matriz de criticidad y relación con RCM.
---
El **AMEF** (Análisis de Modos y Efectos de Falla), conocido en inglés como **FMEA** (*Failure Mode and Effects Analysis*), es probablemente la herramienta de confiabilidad más citada y una de las peor aplicadas. Muchas plantas tienen hojas de AMEF con cientos de filas, un número de prioridad de riesgo (RPN) en cada una y ninguna tarea de mantenimiento que haya cambiado por ellas.

En este artículo explicamos **cómo hacer un AMEF orientado a mantenimiento paso a paso**, con un ejemplo completo para una bomba centrífuga, **qué dice y qué no dice el RPN**, en qué se diferencia de la matriz de criticidad y cómo encaja dentro del RCM.

## Qué es un AMEF y para qué sirve en mantenimiento

Un AMEF es un análisis sistemático, de abajo hacia arriba, que responde para cada elemento de un sistema tres preguntas: **¿cómo puede fallar?** (modo de falla), **¿por qué?** (causa o mecanismo) y **¿qué pasa si falla?** (efecto). Cuando además se jerarquizan los modos de falla según su importancia, se habla de **AMEFC** o **FMECA** (con análisis de criticidad).

La referencia internacional para el método es la **IEC 60812**, que describe el AMEF y el AMEFC para sistemas y productos. En la industria automotriz se usa el manual conjunto **AIAG-VDA**, y en mantenimiento el AMEF suele aplicarse dentro de un análisis [RCM según la SAE JA1011](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).

En mantenimiento, el AMEF sirve para:

- Pasar de "la bomba falla" a una lista concreta de **modos de falla con causa**, sobre los que sí se puede definir una tarea.
- Detectar modos de falla que hoy **no tienen ninguna tarea asociada**, o tareas que no previenen ningún modo de falla.
- Dejar documentado el razonamiento detrás del plan de mantenimiento.

## Antes de empezar: alcance, nivel y equipo

La mayoría de los AMEF fracasan antes de la primera fila, por tres decisiones mal tomadas:

1. **Qué equipos analizar.** No se hace un AMEF a toda la planta. Usa un [análisis de criticidad](/blog/analisis-de-criticidad-de-activos) para elegir los equipos o sistemas donde el esfuerzo rinde.
2. **A qué nivel.** Si se analiza muy arriba ("tren de bombeo"), los modos de falla quedan vagos; si se baja demasiado (cada tornillo), el análisis no termina nunca. Un buen punto de partida es el **ítem mantenible** de la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224): sello, rodamiento, impulsor, acople, motor.
3. **Quién participa.** Operación, mantenimiento mecánico, eléctrico e instrumentación, y un facilitador que conozca el método. Un AMEF hecho por una sola persona en su escritorio suele copiar el manual del fabricante.

## Cómo hacer un AMEF paso a paso

### 1. Define la función con su estándar de desempeño

Sin una función medible no hay forma de saber cuándo hay falla. Para el ejemplo usaremos una bomba centrífuga horizontal sin respaldo cuya función es **"transferir crudo del tanque T-101 a la unidad de proceso a no menos de 800 L/min y 6 bar en la descarga, sin fugas al ambiente"**.

### 2. Identifica las fallas funcionales

Las maneras en que la bomba deja de cumplir esa función: no bombea, bombea menos de 800 L/min, no alcanza la presión, tiene fuga externa.

### 3. Lista los modos de falla por componente

Cada modo de falla debe describir **qué le pasa a qué componente y por qué**. "Falla del sello" es un tema; "**desgaste de caras del sello mecánico por operación en seco**" es un modo de falla. Usar un catálogo común ayuda a que todos describan igual; la ISO 14224 propone códigos de modo de falla por clase de equipo, como fuga externa de fluido de proceso (ELP), vibración (VIB), bajo rendimiento (LOO) o falla al arrancar (FTS). Si tu planta todavía no tiene uno, revisa cómo [elaborar un catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo).

### 4. Describe los efectos

Qué se observa cuando ocurre la falla: a nivel local (el componente), en el equipo y en la planta. Incluye lo que verían los operadores y el impacto en seguridad, ambiente y producción. Esta descripción alimenta la severidad.

### 5. Evalúa severidad, ocurrencia y detección

Cada modo de falla se califica, normalmente en escalas de 1 a 10:

- **Severidad (S)**: gravedad del efecto.
- **Ocurrencia (O)**: probabilidad o frecuencia de la causa.
- **Detección (D)**: probabilidad de **no** detectar la falla antes de que tenga efecto (10 = no se detecta).

Las escalas deben estar escritas con criterios propios de la empresa (por ejemplo, severidad 8 = lesión con tiempo perdido o pérdida de producción mayor a un turno) y ser las mismas para todos los análisis. Si no, el RPN de un equipo no se puede comparar con el de otro.

### 6. Calcula el RPN y prioriza

> **RPN = S × O × D**

El resultado va de 1 a 1.000 y sirve para ordenar los modos de falla. Más abajo vemos por qué **no conviene usarlo solo**.

### 7. Define acciones y responsables

Para cada modo de falla relevante, una tarea concreta (inspección, monitoreo, reemplazo, rediseño, procedimiento), con responsable y fecha. Al terminar, se recalcula el RPN con las acciones implementadas.

## Ejemplo: AMEF de una bomba centrífuga

Tabla **ilustrativa**: las calificaciones dependen de las escalas, del servicio y del historial de cada planta.

| Componente | Modo de falla | Efecto | S | O | D | RPN | Acción propuesta |
|---|---|---|---|---|---|---|---|
| Sello mecánico | Fuga externa por desgaste de caras al operar en seco | Fuga de crudo, riesgo de incendio, parada | 9 | 4 | 5 | 180 | Interlock por bajo nivel en T-101; inspección visual por ronda de operador |
| Rodamiento lado acople | Agarrotamiento por lubricación insuficiente | Parada de la bomba, daño al eje | 7 | 4 | 4 | 112 | Análisis de vibraciones mensual; ruta de lubricación con cantidad definida |
| Impulsor | Caudal bajo por desgaste erosivo | Caudal < 800 L/min, baja de carga en la unidad | 6 | 3 | 6 | 108 | Registro de curva de desempeño (caudal, presión, corriente) |
| Acople | Desalineación tras intervención | Vibración alta, falla prematura de rodamientos y sello | 5 | 5 | 4 | 100 | Alineación láser obligatoria con registro al cerrar la orden |
| Motor eléctrico | No arranca por falla de aislamiento | Bomba no disponible al arrancar la unidad | 7 | 2 | 6 | 84 | Medición de resistencia de aislamiento antes de arranque tras paradas largas |
| Válvula de retención | No cierra por desgaste del asiento | Flujo inverso, giro inverso al parar | 6 | 3 | 7 | 126 | Prueba funcional en cada parada programada |

Dos observaciones sobre este ejemplo:

- El sello aparece primero, pero **la acción más eficaz no es de mantenimiento**: es evitar la operación en seco. El AMEF muestra con frecuencia que la causa está en la operación o en el diseño.
- La válvula de retención tiene un RPN alto sobre todo por **detección**: su falla no se nota en operación normal. Es una falla oculta, y en RCM tendría un tratamiento específico (búsqueda de fallas).

## Los límites del RPN

El RPN es cómodo, pero tiene problemas conocidos:

- **Mismo número, riesgos distintos.** S = 10, O = 2, D = 5 da RPN 100; S = 2, O = 10, D = 5 también. El primero puede ser un accidente grave; el segundo, una molestia frecuente.
- **Las escalas son ordinales.** Una ocurrencia 6 no es "el doble" que una 3; multiplicarlas da un número sin significado físico.
- **Umbrales arbitrarios.** Reglas como "actuar si RPN > 100" llevan a ajustar las calificaciones para quedar por debajo del umbral.
- **La detección mezcla cosas.** Puede referirse a la detección por diseño, por operación o por mantenimiento, y cada equipo la interpreta distinto.

Por eso, la práctica recomendada es **mirar primero la severidad**: todo modo de falla con severidad alta (seguridad o ambiente) se trata aunque su RPN sea bajo. El manual AIAG-VDA, por ejemplo, reemplazó el RPN por una tabla de **prioridad de acción** que da más peso a la severidad. Otra opción es combinar severidad y ocurrencia en una matriz de riesgo.

## RPN frente a matriz de criticidad

Se suelen confundir, pero responden preguntas distintas:

| | RPN del AMEF | Matriz de criticidad |
|---|---|---|
| Nivel | Modo de falla | Equipo o sistema |
| Pregunta | ¿Qué modo de falla atiendo primero? | ¿Qué equipos analizo y protejo primero? |
| Variables | Severidad, ocurrencia, detección | Frecuencia de falla y consecuencias (seguridad, ambiente, producción, costo) |
| Momento | Durante el análisis | Antes del análisis, para priorizar |
| Resultado | Lista ordenada de acciones | Ranking de equipos (alta, media, baja criticidad) |

En la práctica se usan en secuencia: la [criticidad](/blog/analisis-de-criticidad-de-activos) elige los equipos; el AMEF desarma cada uno en modos de falla; el RPN o la matriz de riesgo ordena las acciones dentro de cada equipo.

## AMEF y RCM: cómo se relacionan

Las cuatro primeras preguntas del RCM (funciones, fallas funcionales, modos de falla y efectos) **son un AMEF**. Lo que el RCM agrega es la **lógica de decisión**: en lugar de ordenar los modos de falla por un número, los clasifica por su consecuencia (oculta, seguridad y ambiente, operacional o no operacional) y elige el tipo de tarea según criterios de factibilidad técnica y conveniencia económica.

Dicho de otra forma:

- Un **AMEF solo** dice qué puede fallar y qué tan grave es.
- Un **RCM** usa ese AMEF para decidir **qué tarea hacer, cada cuánto y qué hacer si no hay tarea adecuada**.

Si ya tienes un AMEF bien hecho, tienes más de la mitad de un RCM. Y cuando un modo de falla ocurre igual pese a las tareas, el [análisis causa raíz](/blog/fundamentos-del-analisis-causa-raiz) devuelve la información al AMEF para corregirlo.

## Errores comunes al hacer un AMEF

1. **Confundir modo, efecto y causa** en la misma columna ("vibración" puede ser cualquiera de los tres según el nivel).
2. **Calificar sin escalas escritas**, con lo que cada análisis usa su propio criterio.
3. **Analizar a demasiado detalle** y no terminar nunca, o a demasiado alto nivel y no poder definir tareas.
4. **Dejar las acciones sin responsable** ni seguimiento.
5. **No actualizarlo**: un AMEF que no se revisa con el historial de fallas real se vuelve un documento de archivo.

## Del AMEF al plan, sin perder el hilo

El problema habitual no es hacer el AMEF, sino mantenerlo vivo y conectado con el plan de mantenimiento. En Reliaplant, el [módulo de RCM](/modulos/rcm) trabaja sobre el [registro de activos](/modulos/registro-activos): los modos de falla se toman de catálogos por clase de equipo, el RPN se calcula con las escalas de tu empresa y cada tarea queda vinculada al modo de falla que la justifica.

<cta-demo titulo="Un AMEF que termina en tareas" texto="Analiza modos de falla con tus propias escalas de severidad, ocurrencia y detección, y convierte cada acción en una tarea del plan de mantenimiento." boton="Probar Reliaplant"></cta-demo>

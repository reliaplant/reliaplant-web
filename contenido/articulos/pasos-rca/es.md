titulo: Pasos para hacer un análisis causa raíz: procedimiento completo con un ejemplo industrial
slug: pasos-para-hacer-un-analisis-causa-raiz
resumen: El procedimiento del RCA paso a paso: preservar evidencia, formar el equipo, armar la cronología, analizar, definir acciones y hacer seguimiento.
---
Saber qué es un análisis causa raíz no garantiza hacerlo bien. La mayoría de los RCA fallidos no fallan por la técnica elegida, sino por el **procedimiento**: la evidencia se perdió en la primera hora, el evento se describió con la conclusión incluida o las acciones nunca se verificaron.

Este artículo es la guía práctica. Si necesitas la teoría (qué es el RCA, cuándo dispararlo y qué nivel de profundidad elegir), empieza por los [fundamentos del análisis causa raíz](/blog/fundamentos-del-analisis-causa-raiz). Aquí seguimos el proceso de la **BS EN 62740** (iniciación, establecer hechos, análisis, validación y presentación de resultados) desglosado en ocho pasos operativos, y lo aplicamos a un mismo caso de principio a fin.

## El caso que vamos a usar

> **Planta de proceso, bomba centrífuga P-204 de agua de enfriamiento.** El rodamiento lado acople del motor falló por tercera vez en once meses. En la última ocasión la bomba de respaldo estaba en mantenimiento y la unidad tuvo que bajar carga durante 9 horas.

El evento cumple dos criterios de disparo de la planta: falla repetitiva y pérdida de producción. Se decide un RCA de nivel estándar.

## Paso 1. Preservar la evidencia

Es el paso más urgente y el que más se olvida. La evidencia se degrada rápido: el aceite se cambia, las piezas se tiran, los registros del sistema de control se sobrescriben y la memoria de los testigos se mezcla con las versiones de los demás.

Qué preservar, en este orden:

- **Personas**: entrevistar pronto a quienes estaban presentes, por separado, antes de que se comente el evento en grupo.
- **Partes**: el componente fallado, sin limpiarlo, identificado y guardado. Fotografiar su posición antes de desmontar.
- **Posición**: estado de válvulas, interruptores y ajustes en el momento del evento.
- **Papel y datos**: órdenes de trabajo, permisos, bitácoras, tendencias de vibración y temperatura, alarmas del sistema de control, análisis de aceite.

**En el caso:** el técnico guarda el rodamiento con su grasa, se toman fotos del acople antes de desmontar y se exportan dos semanas de tendencias de vibración y temperatura del motor. También se recuperan las órdenes de trabajo de las dos fallas anteriores.

## Paso 2. Definir el evento focal, el objetivo y el alcance

El evento focal debe ser **breve, objetivo y sin causas sugeridas**. Debe decir qué pasó, dónde y cuándo, y con qué consecuencia.

- Mal: "Falla de la P-204 por rodamientos de mala calidad del nuevo proveedor".
- Bien: "Falla del rodamiento lado acople del motor de la bomba P-204 el 14 de mayo, con reducción de carga de la unidad durante 9 horas. Tercera falla del mismo tipo en once meses".

El **objetivo** dice qué se espera lograr: "Identificar las causas de la falla repetitiva y definir acciones que eliminen la recurrencia". El **alcance** fija los límites: aquí, el conjunto motor-bomba P-204 y su historial de mantenimiento; queda fuera el análisis de la bomba de respaldo, salvo como dato.

## Paso 3. Formar el equipo

Un RCA de nivel estándar necesita un equipo multidisciplinario pequeño, de cuatro a seis personas, con un **facilitador** que conozca el método y no tenga interés en el resultado.

| Rol | Aporte |
|---|---|
| Facilitador | Conduce el método, exige evidencia, evita que el equipo salte a conclusiones |
| Operador del área | Cómo se opera el equipo en la práctica, qué cambió |
| Técnico mecánico | Montaje, alineación, lubricación, historial de intervenciones |
| Ingeniero de confiabilidad | Datos de fallas, tendencias, análisis de modos de falla |
| Especialista de predictivo | Interpretación de vibraciones y análisis de aceite |

Dos precauciones: si el jefe directo del área participa, cuida que su presencia no inhiba al resto; y deja claro desde la primera reunión que **el análisis no busca culpables**.

## Paso 4. Establecer los hechos y la cronología

Con la evidencia preservada, el equipo reconstruye **qué pasó, cuándo y en qué orden**, sin interpretar todavía. Una cronología con fecha y hora es la mejor manera de ordenar los hechos y detectar huecos de información.

**Cronología del caso:**

| Fecha | Hecho | Fuente |
|---|---|---|
| Junio (año anterior) | Primera falla del rodamiento lado acople. Se reemplaza | Orden de trabajo |
| Octubre | Segunda falla, mismo rodamiento. Se reemplaza | Orden de trabajo |
| Octubre | Tras el montaje no se registra la alineación final | Orden de trabajo (campo vacío) |
| Marzo | La vibración en 1X y 2X empieza a subir de forma sostenida | Tendencia de vibración |
| 12 de mayo | Alarma de alta vibración, reconocida sin intervención | Registro de alarmas |
| 14 de mayo | Disparo por alta temperatura del rodamiento. Falla | Sistema de control |

Hechos de la inspección del rodamiento: desgaste de pista con patrón de carga desplazado y grasa en buen estado, sin contaminación visible. El [modo de falla](/blog/terminos-y-definiciones-analisis-causa-raiz), en términos de la [ISO 14224](/blog/taxonomia-de-activos-iso-14224), es vibración y sobretemperatura; todavía no sabemos la causa.

## Paso 5. Analizar: plantear hipótesis

Ahora sí se pregunta **cómo pudo ocurrir**. La técnica depende de la complejidad: para este caso basta un árbol lógico; para cadenas simples, los [5 porqués](/blog/ejemplo-de-los-5-porques-en-mantenimiento); para eventos con varias causas combinadas, un [árbol de fallos](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025). La [guía de técnicas de la BS EN 62740](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015) ayuda a elegir.

Hipótesis para la falla del rodamiento:

1. Lubricación deficiente (cantidad, tipo o frecuencia de grasa).
2. Defecto de fabricación del rodamiento.
3. Desalineación entre motor y bomba.
4. Pata coja o base deteriorada.
5. Carga hidráulica anormal (operación lejos del punto de mejor eficiencia).

## Paso 6. Validar cada hipótesis con evidencia

Cada hipótesis se confirma o se descarta con datos, nunca por consenso.

| Hipótesis | Evidencia | Resultado |
|---|---|---|
| Lubricación deficiente | Grasa en buen estado y en cantidad correcta; rutas de lubricación cumplidas | Descartada |
| Defecto de fabricación | Los tres rodamientos eran de lotes distintos; patrón de desgaste no indica defecto de origen | Descartada |
| Desalineación | Patrón de carga desplazado, vibración dominante en 1X y 2X axial; medición láser con desalineación angular fuera de tolerancia | **Validada** |
| Pata coja | Medida en la verificación de alineación, dentro de tolerancia | Descartada |
| Carga hidráulica anormal | Caudal y presión en el rango normal según el historial de proceso | Descartada |

La hipótesis validada se convierte en un hecho y se vuelve a preguntar por qué. ¿Por qué había desalineación? Porque tras los montajes no se hizo alineación de precisión. ¿Por qué? Porque el procedimiento de cambio de rodamientos no la exige, el taller no tiene un equipo láser asignado y la orden de trabajo permite cerrar sin registrar valores. Además, la alarma de vibración del 12 de mayo se reconoció sin generar aviso, porque no existe una respuesta definida para esa alarma.

Así quedan los tres niveles de causa:

- **Física:** fatiga del rodamiento por desalineación angular.
- **Humana:** montaje cerrado sin alineación de precisión.
- **Latentes:** procedimiento incompleto, falta de herramienta y orden de trabajo que no obliga a registrar la alineación; ausencia de respuesta definida ante la alarma de vibración.

La **regla de detención** acordada fue llegar hasta causas que la planta pueda corregir con sus propios recursos.

## Paso 7. Definir acciones

Cada causa latente necesita al menos una acción con **responsable, fecha y criterio de verificación**. Las acciones más fuertes cambian el sistema; las más débiles dependen de que alguien "tenga más cuidado".

| Acción | Causa que ataca | Responsable | Verificación |
|---|---|---|---|
| Incluir alineación láser con tolerancias en el procedimiento de cambio de rodamientos | Procedimiento incompleto | Planificación | Procedimiento aprobado |
| Asignar un alineador láser al taller y entrenar a los técnicos | Falta de herramienta | Jefe de mantenimiento | Equipo en taller, técnicos entrenados |
| Hacer obligatorios los valores de alineación para cerrar la orden de trabajo | OT que permite cerrar sin datos | Administración del sistema de mantenimiento | Campo obligatorio activo |
| Definir respuesta ante alarma de vibración: aviso automático a predictivo | Alarma sin respuesta | Operaciones y predictivo | Avisos generados en las alarmas siguientes |
| Revisar la alineación de las demás bombas intervenidas en el último año | Riesgo en equipos similares | Confiabilidad | Informe de mediciones |

La última acción es clave: la causa latente no es exclusiva de la P-204, así que el beneficio se extiende a toda la familia de equipos.

## Paso 8. Informar y hacer seguimiento

El informe debe ser corto y trazable: evento focal, cronología, hipótesis con su evidencia, causas por nivel y plan de acción. Se presenta a quien puede aprobar los recursos.

El RCA **no se cierra con el informe**. Se cierra cuando:

1. Todas las acciones están implementadas y verificadas.
2. Ha pasado un período razonable sin que el evento se repita. En el caso, se fijó revisar el [MTBF](/blog/mtbf-mttr-disponibilidad-como-calcularlos) de la P-204 y la tendencia de vibración a los doce meses.
3. Lo aprendido se incorporó a la estrategia: la tarea de verificación de alineación entra al plan, y el intervalo de monitoreo de vibración se revisa con el criterio de la [curva P-F](/blog/mantenimiento-predictivo-curva-p-f).

<cta-demo titulo="Del evento al plan de acción, sin perder la trazabilidad" texto="Arma la cronología, valida hipótesis con evidencia y sigue cada acción del RCA hasta su verificación, vinculada al equipo y a sus órdenes de trabajo." boton="Probar Reliaplant"></cta-demo>

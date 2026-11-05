titulo: Norma BS EN 62740 (IEC 62740): qué dice sobre el análisis causa raíz
slug: estandar-para-el-analisis-causa-raiz-bs-en-62740
resumen: Qué es la norma IEC/BS EN 62740:2015, su alcance, sus principios y las cinco etapas del proceso de análisis causa raíz que propone.
---
En casi todas las plantas se hacen "análisis causa raíz". Pero si se comparan los informes de dos supervisores distintos, a menudo parecen de empresas diferentes: uno es un Ishikawa lleno de post-its, otro es una cadena de cinco porqués que termina en "error humano" y un tercero es un correo con fotos. El problema no es la técnica elegida, sino que **no hay un proceso común** que diga qué se investiga, con qué evidencia y cuándo una causa se considera demostrada.

Eso es justamente lo que aporta la norma **IEC 62740:2015, *Root cause analysis (RCA)***. En este artículo explicamos qué es, qué cubre, qué principios plantea y cómo se traduce en el día a día de un área de mantenimiento y confiabilidad.

## IEC 62740 y BS EN 62740: la misma norma

La norma fue elaborada por el **comité técnico IEC/TC 56 (Dependability)**, el mismo que mantiene otras normas de confiabilidad muy usadas en la industria, como la IEC 61025 de árbol de fallos o la IEC 60812 de AMEF.

La **BS EN 62740:2015** es la adopción europea y británica del mismo documento. El contenido técnico es idéntico; cambian el prefijo y el organismo que la publica. En la práctica, cuando alguien cita la BS EN 62740 o la IEC 62740 está hablando del mismo estándar.

## Alcance: qué cubre y qué no

La norma describe **principios básicos, un proceso y un conjunto de técnicas** para identificar las causas raíz de un evento. Algunos puntos de su alcance merecen atención:

- **Es genérica.** No está escrita para un sector en particular. Sirve para fallas de equipos, incidentes de seguridad, problemas de calidad o desvíos de proceso.
- **Habla de "evento focal", no solo de falla.** El RCA puede aplicarse a un resultado indeseado o a uno exitoso que se quiere repetir. En mantenimiento casi siempre se usa para fallas, pero la idea de fondo es entender por qué ocurrió algo.
- **No es una norma de investigación legal ni de asignación de culpas.** Su objetivo es entender causas para modificar la probabilidad del evento o sus consecuencias.
- **No impone una técnica.** Describe varias y da criterios para elegir; la decisión depende del tipo de evento, de los datos disponibles y de la complejidad.

Para el vocabulario de base (evento focal, factor causal, causa raíz, falla, avería), conviene revisar [términos y definiciones del análisis causa raíz](/blog/terminos-y-definiciones-analisis-causa-raiz).

## Principios que plantea la norma

Más allá del texto exacto, la IEC 62740 se apoya en unas pocas ideas que cambian la manera de investigar:

1. **Un evento rara vez tiene una sola causa.** Normalmente hay varios factores causales que se combinan: una condición física, una decisión, un procedimiento incompleto, un control que no funcionó. Buscar "la" causa raíz suele llevar a simplificar demasiado.
2. **Las causas deben estar respaldadas por evidencia.** Una hipótesis que no se puede comprobar no es una causa; es una sospecha. La norma da mucho peso a la validación.
3. **El análisis debe llegar hasta donde se pueda actuar.** Detenerse en "falló el rodamiento" no permite prevenir nada; seguir indefinidamente hasta "la economía global" tampoco. El punto de corte razonable es aquel en el que la organización tiene control y puede cambiar algo.
4. **Hay que mirar factores técnicos, humanos y organizacionales.** Quedarse solo en lo técnico deja intactas las condiciones que harán que la falla vuelva.
5. **El objetivo es aprender, no culpar.** Si el RCA se usa para buscar responsables, la gente deja de aportar información y el análisis pierde calidad.

## El proceso de RCA según la IEC 62740

La norma organiza el análisis en cinco etapas. No son una receta rígida, pero sí un orden lógico que vale la pena respetar.

### 1. Iniciación

Se decide **si el evento merece un RCA** y con qué profundidad. Aquí se define el evento focal, el alcance, el equipo de trabajo, los recursos y el plazo. Un criterio útil es combinar la consecuencia del evento con la [criticidad del activo](/blog/analisis-de-criticidad-de-activos): no tiene sentido aplicar el mismo esfuerzo a una bomba de lavado que a un compresor sin respaldo.

### 2. Establecimiento de los hechos

Se reúne la información **antes de que se pierda**: piezas falladas, fotos, registros del sistema de control, historial de órdenes de trabajo, entrevistas, condiciones de operación. Es la etapa que más se descuida y la que más determina la calidad del resultado. Un buen registro histórico con [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) facilita mucho este paso, porque permite saber si el mismo modo de falla ya ocurrió en equipos similares.

### 3. Análisis

Se aplican una o varias técnicas para **ordenar los hechos e identificar los factores causales** y sus relaciones. Aquí entran los 5 porqués, el diagrama de Ishikawa, el árbol de fallos, el análisis de barreras y otras. La comparación entre ellas está en el artículo sobre [técnicas de análisis causa raíz basadas en la norma](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015).

### 4. Validación

Cada causa propuesta se contrasta con la evidencia. Preguntas típicas: ¿la secuencia explica todos los hechos observados?, ¿si se elimina esta causa, el evento no habría ocurrido?, ¿hay datos que la contradigan? Las causas que no pasan esta prueba se descartan o quedan como hipótesis abiertas.

### 5. Presentación de resultados

Se documenta el análisis de forma que **otra persona pueda seguir el razonamiento**: evento, hechos, causas, evidencia y recomendaciones. La norma pone el acento en que las recomendaciones respondan a las causas identificadas, no a soluciones que ya se tenían en mente antes de empezar.

El seguimiento de las acciones y la verificación de su eficacia no siempre se consideran parte del RCA en sentido estricto, pero sin ellos el análisis no sirve de nada. Un recorrido práctico paso a paso está en [pasos para hacer un análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz).

## Para qué le sirve a una planta

Adoptar la IEC 62740 como referencia no significa comprar la norma y archivarla. Su utilidad práctica está en:

| Problema habitual | Lo que aporta la norma |
|---|---|
| Cada RCA se hace "a su manera" | Un proceso común con etapas y entregables definidos |
| Conclusiones sin evidencia | Una etapa explícita de validación |
| Todo termina en "error humano" | Un enfoque que obliga a mirar factores organizacionales |
| Las mismas técnicas para todo | Criterios para elegir la técnica según el evento |
| Informes que nadie entiende | Requisitos para documentar el razonamiento |

También facilita la conexión con otros marcos. La ISO 9001 exige determinar las causas de las no conformidades sin decir cómo; la serie ISO 55000 pide aprender de incidentes y fallas como parte de la gestión de activos (ver [investigación de incidentes en el marco de la ISO 55000](/blog/investigacion-de-incidentes-rcas-en-el-marco-de-la-iso-55000)); y el [RCM según la SAE JA1011](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) se alimenta de los modos de falla que el RCA confirma en campo. La IEC 62740 da el "cómo" que esos marcos dejan abierto.

## Cómo empezar sin burocracia

Algunas recomendaciones para llevar la norma a la práctica:

- **Define disparadores claros**: por ejemplo, toda falla con parada de un equipo de criticidad alta, toda falla repetida en un período dado o todo incidente con lesión.
- **Usa niveles de profundidad.** Un análisis corto (5 porqués validados) para eventos menores y un análisis formal con equipo multidisciplinario para eventos graves.
- **Estandariza la plantilla** con las cinco etapas, aunque cada una ocupe pocas líneas.
- **Exige evidencia** en cada causa: una foto, un dato, una medición o un registro.
- **Cierra el ciclo**: cada acción con responsable, fecha y verificación de eficacia, y el modo de falla registrado en el historial del activo.

Si buscas el panorama general antes de entrar en la norma, empieza por [fundamentos del análisis causa raíz](/blog/fundamentos-del-analisis-causa-raiz).

<cta-demo titulo="Lleva la IEC 62740 a tu día a día" texto="Registra cada RCA con sus etapas, evidencia y acciones, vinculado al activo y a su historial de fallas." boton="Probar Reliaplant"></cta-demo>

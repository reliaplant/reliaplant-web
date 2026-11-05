titulo: Fundamentos del análisis causa raíz (RCA): qué es, cuándo hacerlo y errores comunes
slug: fundamentos-del-analisis-causa-raiz
resumen: Qué es el análisis causa raíz, para qué sirve, qué eventos deben dispararlo, cómo elegir su nivel de profundidad y los errores que lo vuelven inútil.
---
En casi todas las plantas hay un equipo que "siempre falla": la bomba a la que se le cambian los rodamientos cada pocos meses, el reductor que se recalienta cada verano, la válvula que vuelve a fugar después de cada parada. Cada vez se repara rápido y bien, y cada vez la falla regresa. El problema no es la reparación: es que **se está corrigiendo el síntoma y no la causa**.

El **análisis causa raíz (RCA, o ACR en español)** es la herramienta para romper ese ciclo. En este artículo explicamos qué es, para qué sirve, cuándo conviene hacerlo, cuánta profundidad necesita cada caso y cuáles son los errores que más a menudo lo vuelven un trámite.

## Qué es el análisis causa raíz

La norma **BS EN 62740:2015** (equivalente a la IEC 62740) define el RCA como un **proceso sistemático para identificar las causas de un evento focal**. El evento focal es aquello que queremos explicar: la parada de un compresor, una fuga de hidrocarburo, un lote fuera de especificación.

Tres ideas de esa definición importan más de lo que parece:

- **Sistemático**: no es una lluvia de ideas ni la opinión del técnico más experimentado. Sigue un proceso con hechos, hipótesis y validación.
- **Causas, en plural**: un evento rara vez tiene una única causa. Lo normal es encontrar varios factores causales que se combinaron.
- **Evento focal**: el análisis parte de un evento bien descrito. Si la descripción es vaga o ya trae una causa sugerida, el análisis nace sesgado.

La causa raíz, según la misma norma, es el **factor causal sin predecesor relevante para el propósito del análisis**. Es decir: no existe "la" causa raíz absoluta; existe el punto donde decidimos detenernos porque más allá ya no podemos o no nos interesa actuar. Por eso todo RCA necesita una **regla de detención** explícita. Encontrarás estas y otras definiciones en el [glosario de términos del análisis causa raíz](/blog/terminos-y-definiciones-analisis-causa-raiz).

### Causa física, humana y latente

En mantenimiento es útil separar tres niveles de causa, porque cada uno se corrige de forma distinta:

| Nivel | Qué es | Ejemplo | Cómo se corrige |
|---|---|---|---|
| Física | El mecanismo tangible que produjo la falla | Fatiga del rodamiento por desalineación | Reparar, alinear, cambiar el componente |
| Humana | La decisión o acción (u omisión) que activó la causa física | El montaje se hizo sin verificar la alineación | Corregir la acción puntual |
| Latente | La condición del sistema de gestión que permitió el error | No existe procedimiento de alineación ni herramienta láser en el taller | Cambiar procedimientos, formación, recursos, diseño |

Un RCA que se detiene en la causa física produce una reparación. Uno que llega a la causa latente cambia la forma de trabajar y evita que el mismo error aparezca en otros equipos.

## Para qué sirve

El objetivo de fondo es **evitar que el evento se repita**, o reducir su probabilidad o sus consecuencias cuando eliminarlo no es posible. En la práctica, un buen programa de RCA sirve para:

- **Eliminar fallas repetitivas**, que son las que más horas de mantenimiento y producción consumen sin que nadie las vea como un problema grave.
- **Investigar eventos de alta consecuencia** (seguridad, ambiente, grandes pérdidas) con evidencia defendible ante la gerencia, aseguradoras, proveedores o autoridades.
- **Descubrir debilidades del sistema** que no causaron este evento pero podrían causar el próximo.
- **Alimentar la estrategia de mantenimiento**: un modo de falla nuevo o mal cubierto debería terminar en un ajuste del plan, por ejemplo en el [análisis RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) del equipo.
- **Crear conocimiento reutilizable**: un catálogo de modos y causas de falla bien llevado hace que el siguiente análisis sea más rápido.

El RCA no se limita a mantenimiento. Se usa igual en calidad, seguridad de procesos y gestión de riesgos. Incluso puede aplicarse a eventos exitosos, para entender qué hizo que algo saliera mejor de lo esperado y repetirlo.

## Cuándo hacer un RCA: los disparadores

No todo evento merece un análisis formal. Si se intenta analizar todo, el programa colapsa en un mes. Lo recomendable es definir por escrito **criterios de disparo** que activen el RCA de forma automática. Los más habituales son:

1. **Eventos de seguridad o ambiente**: lesiones, casi accidentes graves, derrames, emisiones. Normalmente se investigan siempre, con independencia del costo.
2. **Pérdida de producción** por encima de un umbral definido por la planta (horas de parada o volumen dejado de producir).
3. **Costo de la falla** (repuestos, mano de obra, servicios externos) por encima de un monto fijado.
4. **Fallas repetitivas**: el mismo modo de falla en el mismo equipo un número determinado de veces en un período. Indicadores como el [MTBF](/blog/mtbf-mttr-disponibilidad-como-calcularlos) ayudan a detectarlas.
5. **Fallas en equipos críticos**, según el [análisis de criticidad de activos](/blog/analisis-de-criticidad-de-activos). Un umbral más bajo para los equipos de criticidad alta tiene sentido.
6. **Solicitud de la gerencia o de un cliente**, por ejemplo tras un reclamo de calidad.

Los umbrales concretos dependen de cada planta. Lo importante es que existan, que sean conocidos y que el sistema de gestión de mantenimiento permita identificar qué órdenes de trabajo los cumplen.

## Niveles de profundidad

El esfuerzo del análisis debe ser proporcional al evento. Una forma práctica de organizarlo es en tres niveles:

| Nivel | Cuándo se usa | Equipo | Herramientas típicas | Duración orientativa |
|---|---|---|---|---|
| 1. Rápido | Fallas de impacto bajo o primera repetición | El técnico y su supervisor | [5 porqués](/blog/ejemplo-de-los-5-porques-en-mantenimiento), Ishikawa simple | Horas |
| 2. Estándar | Fallas repetitivas o de impacto medio | Equipo multidisciplinario con facilitador | Árbol lógico, Ishikawa, análisis de evidencia física | Días a pocas semanas |
| 3. Formal | Eventos de seguridad, ambiente o pérdidas mayores | Equipo formal, a veces con especialistas externos | Árbol de fallos, diagrama de eventos y factores causales, laboratorio | Semanas |

La elección de la técnica es parte del diseño del análisis. La [guía de técnicas según la BS EN 62740](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015) compara las más usadas, y el [análisis por árbol de fallos (IEC 61025)](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025) es la referencia cuando el evento tiene varias causas que se combinan.

## El método científico como columna vertebral

Sea cual sea la herramienta, un RCA sólido sigue la lógica del método científico:

1. Observar y describir el evento focal con hechos.
2. Plantear hipótesis sobre cómo pudo ocurrir.
3. Contrastar cada hipótesis con evidencia: análisis de aceite, tendencias de vibración, registros del sistema de control, historial de mantenimiento, inspección del componente fallado.
4. Validar o descartar. Una hipótesis validada se convierte en un hecho y se vuelve a preguntar por qué ocurrió; una descartada se elimina del árbol con su justificación.
5. Repetir hasta llegar a la regla de detención.

La diferencia entre un RCA y una conversación de pasillo es justamente el paso 3: **nada se acepta como causa sin evidencia**. El procedimiento completo, paso a paso y con un ejemplo, está en [pasos para hacer un análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz).

## Errores comunes

Estos son los errores que más vemos en los programas de RCA de la industria:

- **Buscar culpables.** Si el análisis termina en "error del operador", se detuvo demasiado pronto. La pregunta correcta es qué condiciones del sistema hicieron posible ese error. Un RCA que castiga hace que la próxima vez nadie cuente lo que pasó.
- **Describir mal el evento focal.** "La bomba falló porque el rodamiento era de mala calidad" ya trae la conclusión. Mejor: "Parada de la bomba P-101 por alta vibración el 12 de marzo, con pérdida de 6 horas de producción".
- **Perder la evidencia.** Desechar el rodamiento dañado, limpiar el aceite o reiniciar el controlador antes de guardar los registros elimina las pruebas que el análisis necesitará.
- **Confundir modo, mecanismo y causa.** "Fuga" es un modo de falla, "corrosión" es un mecanismo, y ninguno de los dos es todavía una causa raíz.
- **Quedarse en la causa física.** Cambiar el componente por uno igual, sin entender por qué falló, garantiza que vuelva a fallar.
- **Acciones débiles.** "Capacitar al personal" o "tener más cuidado" rara vez resuelven nada. Las acciones más efectivas cambian el diseño, el procedimiento o las condiciones de trabajo.
- **No hacer seguimiento.** Un RCA se cierra cuando se verifica que las acciones se implementaron y que el evento no se repite, no cuando se entrega el informe.
- **Analizar todo.** Sin criterios de disparo, el equipo se ahoga en análisis de baja calidad y los eventos importantes no reciben la atención que merecen.

## El RCA dentro de la gestión de activos

El RCA no debería vivir aislado. Marcos como la [ISO 55000](/blog/investigacion-de-incidentes-rcas-en-el-marco-de-la-iso-55000) y la [PAS 55](/blog/la-pas-55-y-la-investigacion-de-fallas-e-incidentes) lo tratan como parte del ciclo de mejora continua: las fallas se registran con una [taxonomía de activos consistente](/blog/taxonomia-de-activos-iso-14224), los eventos que cumplen los criterios se analizan y las acciones resultantes modifican el plan de mantenimiento. Si quieres profundizar en el marco normativo, revisa el artículo sobre el [estándar BS EN 62740](/blog/estandar-para-el-analisis-causa-raiz-bs-en-62740).

<cta-demo titulo="Que cada falla repetitiva termine en un RCA" texto="Registra fallas con modo, mecanismo y causa, detecta las que cumplen tus criterios de disparo y haz el seguimiento de cada acción en un solo lugar." boton="Probar Reliaplant"></cta-demo>

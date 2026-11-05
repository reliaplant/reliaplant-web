titulo: RCM (Mantenimiento Centrado en Confiabilidad): las 7 preguntas de la SAE JA1011 explicadas
slug: rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011
resumen: Qué es el RCM, qué exige la norma SAE JA1011, los seis patrones de falla y cómo elegir la tarea de mantenimiento adecuada para cada modo de falla.
---
La mayoría de los planes de mantenimiento se armaron copiando el manual del fabricante y sumando tareas después de cada falla grave. El resultado suele ser el mismo: **mucho preventivo que no evita fallas** y fallas importantes que nadie estaba vigilando.

El **Mantenimiento Centrado en Confiabilidad (RCM)** propone lo contrario: partir de lo que la planta necesita que haga cada equipo y decidir, modo de falla por modo de falla, qué tarea tiene sentido técnico y económico. En este artículo explicamos **de dónde viene el RCM, qué pide la norma SAE JA1011 y cómo se llega a un plan de mantenimiento defendible**.

## Un poco de historia

El RCM nació en la aviación comercial. A finales de los años sesenta, con la llegada del Boeing 747, las aerolíneas y la autoridad aeronáutica de EE. UU. se dieron cuenta de que el enfoque de "revisar todo cada cierto tiempo" no era viable ni hacía más seguros a los aviones. El informe de **F. Stanley Nowlan y Howard Heap para United Airlines (1978)** formalizó el método y le dio el nombre.

Su hallazgo más conocido es que **la mayoría de los componentes no tiene una edad de desgaste clara**: reemplazarlos a intervalos fijos no mejora su confiabilidad y, a veces, la empeora por la mortalidad infantil que se introduce tras cada intervención.

Más tarde John Moubray adaptó el método a la industria (RCM II), y en 1999 la SAE publicó la norma **SAE JA1011**, que define los criterios mínimos para que un proceso pueda llamarse RCM. La guía complementaria **SAE JA1012** explica cómo aplicarlos.

## Las 7 preguntas del RCM

Según la SAE JA1011, un proceso RCM debe responder, en este orden, siete preguntas para cada activo analizado:

1. **¿Cuáles son las funciones** y los estándares de desempeño deseados del activo en su contexto operacional actual?
2. **¿De qué maneras puede dejar de cumplir** esas funciones? (fallas funcionales)
3. **¿Qué causa cada falla funcional?** (modos de falla)
4. **¿Qué pasa cuando ocurre cada falla?** (efectos de falla)
5. **¿De qué manera importa cada falla?** (consecuencias)
6. **¿Qué se debe hacer para predecir o prevenir cada falla?** (tareas proactivas e intervalos)
7. **¿Qué hacer si no se encuentra una tarea proactiva adecuada?** (acciones por defecto)

Las preguntas 1 a 4 forman el **AMEF** (análisis de modos y efectos de falla); las preguntas 5 a 7 son la **lógica de decisión** que convierte ese análisis en un plan.

### Funciones con números

La primera pregunta es la que más se subestima. "Bombear agua" no es una función útil para el análisis; "**bombear agua del tanque T-1 al tanque T-2 a no menos de 800 L/min**" sí lo es, porque permite definir cuándo hay una falla funcional (por ejemplo, caudal menor a 800 L/min) aunque la bomba siga girando.

Además de la función principal hay funciones secundarias: contener el fluido, proteger (alarmas, disparos), controlar, ser segura, cumplir con normas ambientales. Muchas fallas graves vienen de funciones secundarias que nadie listó.

### Modos de falla al nivel correcto

Un modo de falla debe describirse con suficiente detalle para poder elegir una tarea: "falla del rodamiento" es demasiado vago; "**desgaste del rodamiento lado acople por lubricación insuficiente**" ya permite pensar en monitoreo de vibraciones o en una tarea de relubricación. La [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) ayuda a ubicar cada modo en su ítem mantenible.

## Los seis patrones de falla

El estudio de United Airlines clasificó la probabilidad condicional de falla de los componentes en seis patrones:

| Patrón | Forma | Proporción en el estudio |
|---|---|---|
| A | Bañera: mortalidad infantil, tasa constante y desgaste final | 4 % |
| B | Tasa constante y desgaste al final | 2 % |
| C | Aumento gradual, sin edad de desgaste definida | 5 % |
| D | Baja al inicio, luego aumenta y se estabiliza | 7 % |
| E | Aleatoria: tasa constante durante toda la vida | 14 % |
| F | Mortalidad infantil, luego tasa constante | 68 % |

Solo los patrones A y B (y en parte C) tienen una edad de desgaste clara. Para el resto, **cambiar piezas por calendario no reduce la probabilidad de falla**. Las proporciones varían por industria y por tipo de equipo, pero la lección se mantiene: hay que conocer el comportamiento real de cada modo de falla antes de definir una tarea por tiempo.

La distribución de Weibull resume esto con su parámetro de forma β: con β < 1 la tasa de falla baja con el tiempo (mortalidad infantil), con β = 1 es constante (aleatoria) y con β > 1 aumenta (desgaste). Mueve el parámetro en la gráfica para ver la diferencia:

<curva-weibull beta="2.5" eta="1000"></curva-weibull>

## Las consecuencias deciden

La pregunta 5 clasifica cada modo de falla según su consecuencia, y esa clasificación decide cuánto se justifica gastar en evitarlo:

- **Fallas ocultas**: no se notan en operación normal (un dispositivo de protección, un equipo de respaldo). Solo se descubren cuando se necesitan o cuando ocurre una segunda falla. Son las más peligrosas.
- **Seguridad y ambiente**: pueden herir o matar a alguien o incumplir una norma ambiental. Una tarea solo es aceptable si reduce el riesgo a un nivel tolerable.
- **Operacionales**: afectan producción, calidad o servicio al cliente. Una tarea se justifica si cuesta menos que las consecuencias que evita.
- **No operacionales**: solo cuestan la reparación. La tarea se justifica si cuesta menos que reparar.

## Qué tareas puede recomendar el RCM

Para cada modo de falla, la lógica de decisión busca, en este orden, una tarea técnicamente factible y que valga la pena:

1. **Tareas a condición** (predictivo): inspeccionar o monitorear para detectar la falla potencial y actuar antes de la falla funcional. Su intervalo depende del [intervalo P-F](/blog/mantenimiento-predictivo-curva-p-f).
2. **Reacondicionamiento cíclico**: restaurar el componente a una edad fija, si existe una edad de desgaste identificable.
3. **Sustitución cíclica**: reemplazar el componente a una edad fija, con la misma condición.
4. **Búsqueda de fallas**: para las fallas ocultas, probar periódicamente que la protección funciona.
5. **Rediseño**: obligatorio si hay consecuencias de seguridad o ambiente y ninguna tarea reduce el riesgo; opcional en los demás casos.
6. **Mantenimiento a la rotura**: decisión válida cuando la falla no tiene consecuencias de seguridad y ninguna tarea es rentable.

El resultado es un plan donde **cada tarea existe por una razón documentada**. Eso permite auditarlo, defenderlo ante la gerencia y ajustarlo cuando cambian las condiciones de operación.

## Cómo llevar el RCM a la práctica

- **Prioriza.** No hagas RCM a toda la planta. Usa un [análisis de criticidad](/blog/analisis-de-criticidad-de-activos) para elegir los sistemas donde el esfuerzo rinde más.
- **Arma un equipo multidisciplinario**: operación, mantenimiento mecánico, eléctrico e instrumentación, con un facilitador que conozca el método. El conocimiento del RCM está en la gente de la planta, no en el facilitador.
- **Define el contexto operacional** por escrito: régimen de operación, redundancias, metas de producción, requisitos regulatorios. Las mismas bombas en servicio continuo o como respaldo tienen planes distintos.
- **Usa datos reales**: el historial de fallas y los [indicadores MTBF y MTTR](/blog/mtbf-mttr-disponibilidad-como-calcularlos) validan o corrigen las suposiciones del equipo.
- **Implementa y revisa.** Un análisis que no termina en órdenes de trabajo en el sistema de mantenimiento no cambió nada. Revisa el análisis cuando aparezcan fallas no previstas.

## RCM sin hojas de cálculo infinitas

El RCM suele vivir en hojas de cálculo enormes que nadie vuelve a abrir. En Reliaplant el [módulo de RCM](/modulos/rcm) parte del registro de activos y guía el análisis función por función: fallas funcionales, modos de falla, consecuencias y tareas, con la lógica de decisión de la SAE JA1011 y el plan resultante listo para exportar.

<cta-demo titulo="¿Tu RCM vive en Excel?" texto="Haz tus análisis RCM sobre tu registro de activos y genera el plan de mantenimiento con su justificación." boton="Probar Reliaplant"></cta-demo>

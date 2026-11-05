titulo: Mantenimiento predictivo y la curva P-F: cómo definir técnicas e intervalos de inspección
slug: mantenimiento-predictivo-curva-p-f
resumen: Qué es la curva P-F, cómo calcular el intervalo de inspección, qué detecta cada técnica predictiva y cuándo el mantenimiento a condición sí vale la pena.
---
El mantenimiento predictivo promete algo muy atractivo: intervenir los equipos **justo antes de que fallen**, ni antes ni después. Muchas plantas compran colectores de vibraciones, cámaras termográficas o sensores en línea y, un año después, tienen miles de mediciones y casi ninguna falla evitada.

El problema casi nunca es la tecnología, sino cómo se decide **qué medir, en qué equipos y cada cuánto**. La herramienta para tomar esas decisiones es la **curva P-F**. En este artículo explicamos cómo funciona, cómo se calcula un intervalo de inspección y qué detecta cada técnica.

## Mantenimiento predictivo, a condición y monitoreo de condición

Se usan como sinónimos, aunque tienen matices:

- **Monitoreo de condición**: medir parámetros que indican el estado del equipo (vibración, temperatura, condición del aceite, consumo eléctrico).
- **Mantenimiento a condición** (*on-condition*): la tarea que se decide en función de esa condición. Es el término del [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).
- **Mantenimiento predictivo**: el programa que organiza esas mediciones y estima cuándo intervenir.

La idea es la misma: **la mayoría de las fallas avisa antes de ocurrir**, y si detectamos ese aviso a tiempo, podemos planificar la intervención en vez de sufrir la falla.

## La curva P-F

La curva P-F describe cómo se degrada un equipo desde que empieza una falla hasta que deja de cumplir su función:

- **P (falla potencial)**: el primer punto en que es posible **detectar** que la falla está ocurriendo. Por ejemplo, el primer aumento medible de vibración en la frecuencia de defecto de un rodamiento.
- **F (falla funcional)**: el punto en que el equipo **ya no cumple** su función con el desempeño requerido.
- **Intervalo P-F**: el tiempo entre P y F. Es la ventana que tenemos para detectar la falla y actuar.

Un detalle clave: el punto P depende de la técnica. Un rodamiento que se está degradando suele mostrar primero señales en **ultrasonido** y **análisis de vibraciones** (en sus frecuencias de defecto), luego en el **análisis de aceite** (partículas de desgaste), después un aumento de **temperatura** y, al final, **ruido audible** y calor al tacto, poco antes de la falla. Cada técnica tiene su propio intervalo P-F para el mismo modo de falla: **cuanto antes detecta, más largo es el intervalo y más tiempo hay para planificar**.

## Cómo calcular el intervalo de inspección

Si la inspección se hace con un intervalo mayor que el intervalo P-F, la falla puede empezar y terminar entre dos inspecciones sin que nadie la vea. Por eso la regla es:

> **Intervalo de inspección < Intervalo P-F**

En la práctica se usa con frecuencia **la mitad del intervalo P-F**, lo que asegura al menos una oportunidad de detección y deja tiempo para actuar. Lo que realmente importa es el **intervalo P-F neto**: el tiempo que queda desde la detección hasta la falla, que debe alcanzar para emitir la orden de trabajo, conseguir repuestos, coordinar la parada y ejecutar el trabajo.

**Ejemplo.** Para el modo de falla "desgaste del rodamiento lado acople" en una bomba, el equipo estima un intervalo P-F de 8 semanas con análisis de vibraciones. Una ruta mensual (4 semanas) garantiza al menos una medición dentro de la ventana y deja un intervalo P-F neto mínimo de 4 semanas. Si conseguir el rodamiento y coordinar la parada toma 5 semanas, la ruta mensual no alcanza: hay que medir más seguido, tener el repuesto en almacén o cambiar a una técnica que detecte antes.

### ¿De dónde sale el intervalo P-F?

Rara vez está escrito en un manual. Se estima con:

- **La experiencia del personal**: "¿cuánto tiempo pasa desde que empezamos a notar la vibración hasta que el rodamiento se rompe?".
- **El historial de monitoreo**: tendencias de mediciones anteriores a fallas reales.
- **Referencias del fabricante, de la literatura técnica o de otras plantas** con equipos similares.

Conviene empezar con una estimación conservadora y ajustarla con los datos que genera el propio programa.

## Qué detecta cada técnica

| Técnica | Detecta principalmente | Equipos típicos |
|---|---|---|
| Análisis de vibraciones | Desbalance, desalineación, holguras, defectos de rodamientos y engranajes, resonancias | Bombas, motores, ventiladores, compresores, reductores |
| Ultrasonido | Lubricación deficiente, defectos incipientes en rodamientos, fugas de aire y gas, descargas eléctricas | Rodamientos de baja velocidad, trampas de vapor, tableros eléctricos |
| Termografía infrarroja | Conexiones eléctricas flojas o sobrecargadas, fallas de aislamiento, sobrecalentamiento de rodamientos y acoples | Tableros, transformadores, motores, refractarios |
| Análisis de aceite | Desgaste interno, contaminación (agua, polvo), degradación del lubricante | Reductores, sistemas hidráulicos, motores de combustión, turbinas |
| Análisis de corriente del motor (MCSA) | Barras rotas del rotor, excentricidad, problemas de alimentación | Motores de inducción |
| Inspección sensorial | Fugas, ruidos, olores, temperatura al tacto | Todos (rondas de operadores) |

Ninguna técnica sirve para todo. La elección sale de los **modos de falla** del equipo: primero se identifica qué puede fallar y cómo se manifiesta; después se elige la técnica que lo detecta antes.

## ¿Cuándo vale la pena el predictivo?

Según el RCM, una tarea a condición es **técnicamente factible** si se cumplen tres condiciones:

1. Existe una **falla potencial claramente detectable**.
2. El **intervalo P-F es razonablemente consistente**, de modo que se puede fijar un intervalo de inspección.
3. Es **práctico inspeccionar** con un intervalo menor que el intervalo P-F, y el intervalo P-F neto alcanza para actuar.

Y **vale la pena** si su costo es menor que el de las consecuencias que evita. Por eso el predictivo tiene más sentido en los equipos de alta [criticidad](/blog/analisis-de-criticidad-de-activos): una ruta de vibraciones mensual para una bomba de servicio con respaldo puede costar más que dejarla fallar y repararla.

## Errores comunes

- **Medir todo.** Cargar a la ruta todos los equipos de la planta diluye el esfuerzo y genera datos que nadie analiza. Empieza por los equipos críticos.
- **Intervalos por costumbre.** "Vibraciones cada mes" para todos los equipos ignora que cada modo de falla tiene su propio intervalo P-F.
- **No cerrar el ciclo.** Una alarma que no termina en una orden de trabajo, o una orden que no registra qué se encontró al abrir el equipo, impide validar las técnicas y los niveles de alarma.
- **No medir el resultado.** El programa debe mostrar fallas evitadas, reducción de correctivos y mejora del [MTBF y la disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos) de los equipos monitoreados.
- **Olvidar las fallas ocultas.** El predictivo no ayuda con los equipos de protección que solo se usan cuando algo sale mal; para ellos la tarea correcta es una prueba funcional periódica.

## Cómo armar el programa

1. **Prioriza** los equipos con el análisis de criticidad.
2. **Identifica sus modos de falla** (idealmente con RCM o AMEF), apoyándote en una [taxonomía de activos](/blog/taxonomia-de-activos-iso-14224) bien definida.
3. **Elige la técnica** que detecta antes cada modo de falla relevante.
4. **Estima el intervalo P-F** y define el intervalo de inspección y los niveles de alarma.
5. **Define la respuesta**: quién recibe la alarma, en cuánto tiempo y qué hace.
6. **Revisa** técnicas, intervalos y alarmas con los resultados reales cada cierto tiempo.

En Reliaplant las tareas a condición salen del [análisis RCM](/modulos/rcm) de cada equipo, con su modo de falla, su técnica y su intervalo justificados, y quedan ligadas al [registro de activos](/modulos/registro-activos) para que el programa predictivo cubra los equipos y los modos de falla que realmente importan.

<cta-demo titulo="Predictivo donde sí importa" texto="Define técnicas e intervalos de inspección desde el análisis de modos de falla de tus equipos críticos." boton="Probar Reliaplant"></cta-demo>

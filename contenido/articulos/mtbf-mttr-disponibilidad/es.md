titulo: MTBF, MTTR y disponibilidad: cómo calcularlos bien (con calculadora)
slug: mtbf-mttr-disponibilidad-como-calcularlos
resumen: Fórmulas de MTBF, MTTR y disponibilidad, un ejemplo resuelto, una calculadora interactiva y los errores que más distorsionan estos indicadores de mantenimiento.
---
MTBF, MTTR y disponibilidad son los tres indicadores de mantenimiento más usados y, también, los más mal calculados. Es común ver reportes con un MTBF que nadie sabe de dónde salió, una disponibilidad del 99,9 % en una planta que pasa paradas cada mes o comparaciones entre áreas que miden cosas distintas.

En este artículo explicamos **qué mide cada indicador, cómo se calcula, cómo se relacionan entre sí** y qué errores evitar para que los números sirvan para tomar decisiones.

## MTBF: tiempo medio entre fallas

El **MTBF** (*Mean Time Between Failures*) es el tiempo promedio que un equipo reparable opera entre una falla y la siguiente. Mide **confiabilidad**: cuanto más alto, menos seguido falla.

> **MTBF = Tiempo total de operación ÷ Número de fallas**

Dos detalles importan:

- **El tiempo es de operación**, no calendario. Si una bomba de respaldo estuvo detenida medio año, esas horas no cuentan; si se toma el tiempo calendario, el MTBF queda inflado.
- **Las fallas son fallas funcionales** del equipo: eventos en los que dejó de cumplir su función. Las paradas programadas no son fallas.

Para equipos no reparables (un rodamiento, un fusible) se usa el **MTTF** (*Mean Time To Failure*), que es la vida media hasta la única falla.

## MTTR: tiempo medio para reparar

El **MTTR** (*Mean Time To Repair*) es el tiempo promedio que toma devolver el equipo a operación después de una falla. Mide **mantenibilidad**: cuanto más bajo, más rápido se recupera.

> **MTTR = Tiempo total de reparación ÷ Número de reparaciones**

Aquí la discusión es qué se cuenta como "tiempo de reparación". La [norma ISO 14224](/blog/taxonomia-de-activos-iso-14224) distingue entre el **tiempo activo de reparación** (el trabajo en sí) y el **tiempo de parada** total, que además incluye la detección, la espera de personal, de permisos y de repuestos, y la puesta en marcha. Ambos son útiles, pero **no se deben mezclar**: el tiempo activo dice si el trabajo es eficiente; el tiempo de parada dice cuánto le cuesta la falla a la planta. En muchas plantas, la espera de repuestos y permisos es mayor que la reparación misma.

## Disponibilidad

La **disponibilidad** es la proporción del tiempo que el equipo está en condiciones de operar cuando se le necesita. Combina los dos indicadores anteriores:

> **Disponibilidad = MTBF ÷ (MTBF + MTTR)**

Esta fórmula da la **disponibilidad inherente**, que solo considera las fallas y su reparación. En la práctica se usan también:

- **Disponibilidad operacional**: incluye las demoras logísticas y administrativas y el mantenimiento planificado. Es la que "siente" producción y casi siempre es menor que la inherente.
- **Disponibilidad dentro del OEE**: el OEE multiplica disponibilidad × rendimiento × calidad, y su disponibilidad suele medirse sobre el tiempo planificado de producción.

Lo importante es **definir cuál se reporta** y usar siempre la misma.

## Ejemplo resuelto

Una bomba en servicio continuo durante un año (8.760 horas) tuvo **6 fallas** con un tiempo de parada total de **72 horas**.

- Tiempo de operación = 8.760 − 72 = 8.688 h
- **MTBF** = 8.688 ÷ 6 = **1.448 h** (unos 60 días)
- **MTTR** = 72 ÷ 6 = **12 h**
- **Disponibilidad** = 1.448 ÷ (1.448 + 12) = **99,18 %**

Una disponibilidad del 99 % suena excelente, pero equivale a 72 horas de parada al año. Si la bomba no tiene respaldo y cada hora de parada cuesta 5.000 USD de producción perdida, son **360.000 USD al año**. Bajar el MTTR de 12 a 6 horas, por ejemplo teniendo el repuesto en almacén, recupera la mitad.

Prueba con los valores de tus equipos:

<calculadora-disponibilidad mtbf="1448" mttr="12"></calculadora-disponibilidad>

## Lo que el MTBF no dice

El error de interpretación más común es pensar que el MTBF es "cada cuánto falla" el equipo o su vida útil. No lo es.

Si las fallas son aleatorias (tasa de falla constante, el caso más frecuente en equipos complejos), la probabilidad de que el equipo llegue sin fallar hasta un tiempo *t* es:

> **R(t) = e^(−t / MTBF)**

Con t = MTBF, R = e^(−1) ≈ **36,8 %**. Es decir, **casi dos de cada tres equipos fallan antes de alcanzar el MTBF**. Para la bomba del ejemplo, la probabilidad de operar un mes (720 h) sin fallas es e^(−720/1.448) ≈ 61 %.

Por eso el MTBF no sirve, por sí solo, para fijar intervalos de reemplazo. Si el modo de falla tiene desgaste por edad, hay que analizarlo con una distribución como Weibull; si es aleatorio, el reemplazo por tiempo no ayuda y conviene buscar una tarea a condición. Es exactamente la discusión de los patrones de falla del [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).

## Disponibilidad de sistemas

Cuando varios equipos trabajan en conjunto, la disponibilidad del sistema depende de cómo están conectados:

- **En serie** (si falla uno, se detiene todo): A = A₁ × A₂ × A₃… Tres equipos con 99 % cada uno dan **97,0 %** de disponibilidad del sistema.
- **En paralelo con respaldo** (basta con que funcione uno de dos): A = 1 − (1 − A₁)(1 − A₂). Dos equipos con 99 % dan **99,99 %**.

Esta es la razón por la que la [criticidad](/blog/analisis-de-criticidad-de-activos) de un equipo depende tanto de su redundancia, y por la que un equipo en serie con baja disponibilidad se convierte en el cuello de botella de toda la línea.

## Errores que distorsionan los indicadores

1. **Usar tiempo calendario en vez de tiempo de operación.** Infla el MTBF de equipos de respaldo o de operación intermitente.
2. **No registrar todas las fallas.** Si solo se registran las que generan una orden de trabajo formal, el MTBF sale más alto de lo real.
3. **Mezclar fallas con paradas programadas.** Una parada planificada no es una falla, aunque el equipo esté detenido.
4. **Calcular a nivel de planta o de área.** El MTBF tiene sentido por equipo o por clase de equipo, bien definida por la [taxonomía](/blog/taxonomia-de-activos-iso-14224). Un "MTBF de la planta" mezcla equipos que no tienen nada que ver.
5. **Pocos datos.** Con dos o tres fallas el promedio es muy incierto. Agrupa equipos similares en el mismo servicio o usa periodos más largos antes de sacar conclusiones.
6. **Mirar el promedio y no la tendencia.** Un MTBF que baja trimestre a trimestre es una alerta, aunque el valor anual siga dentro de la meta.

## Del indicador a la acción

- **MTBF bajo** → investigar las fallas repetitivas con análisis de causa raíz y revisar la estrategia de mantenimiento del equipo.
- **MTTR alto** → revisar repuestos, procedimientos, herramientas y tiempos de espera; casi siempre el problema está en la logística y no en la reparación.
- **Disponibilidad baja en equipos críticos** → evaluar redundancia, monitoreo de condición y [mantenimiento predictivo](/blog/mantenimiento-predictivo-curva-p-f).

Los indicadores son tan buenos como el registro de fallas que los alimenta. En Reliaplant las fallas se registran sobre cada equipo del [registro de activos](/modulos/registro-activos), con modo y causa de falla normalizados, para que el MTBF y la disponibilidad salgan de datos consistentes y se conecten con los análisis [RCA](/modulos/rca) y [RCM](/modulos/rcm).

<cta-demo titulo="Indicadores que salen de datos limpios" texto="Registra las fallas de cada equipo con códigos normalizados y calcula MTBF, MTTR y disponibilidad sin hojas de cálculo." boton="Probar Reliaplant"></cta-demo>

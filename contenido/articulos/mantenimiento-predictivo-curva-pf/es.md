titulo: Curva P-F: qué es y cómo calcular el intervalo de inspección
slug: mantenimiento-predictivo-curva-p-f
resumen: Qué es la curva P-F, cómo calcular el intervalo de inspección (P-F/2 y P-F/n), el P-F neto y un ejemplo con un rodamiento de bomba. Con calculadora.
imagenAlt: Inspector mide con un equipo de ultrasonido el estado de una tubería aislada en planta
---
La **curva P-F** muestra cómo se degrada un equipo desde que una falla se vuelve **detectable (P, falla potencial)** hasta que el equipo **deja de cumplir su función (F, falla funcional)**. El tiempo entre P y F es el **intervalo P-F**, y de él sale la regla más importante del mantenimiento predictivo: **hay que inspeccionar con una frecuencia menor que el intervalo P-F**; la convención más usada es **inspeccionar cada P-F/2**.

En este artículo tienes la curva explicada, la diferencia entre el intervalo P-F y el P-F neto, dos formas de calcular el intervalo de inspección (la regla de la mitad y la regla por probabilidad de detección), un ejemplo completo con un rodamiento de bomba y una **calculadora** para tus equipos.

## La curva P-F, punto por punto

<figure><img src="/blog/curva-pf/curva-pf.svg" alt="Gráfica de la curva P-F: la condición del equipo cae desde que empieza la falla, pasa por los puntos P1 y P2 donde la detectan distintas técnicas, y llega a F, la falla funcional" loading="lazy" /><figcaption>Cada técnica de monitoreo tiene su propio punto P para el mismo modo de falla.</figcaption></figure>

- **Inicio de la falla:** el mecanismo empieza (una grieta, el desgaste de una pista, la degradación del aceite), pero todavía no se puede medir.
- **P, falla potencial:** el primer momento en que la falla **se puede detectar** con una técnica dada. Por ejemplo, la primera señal en las frecuencias de defecto de un rodamiento.
- **F, falla funcional:** el equipo ya no cumple su función con el desempeño requerido (no da el caudal, se detiene, fuga). Ojo: F no es "se rompió del todo", sino "dejó de cumplir el estándar que necesita la operación".
- **Intervalo P-F:** el tiempo entre P y F. Es la ventana para detectar y actuar.

El concepto viene del trabajo de **F. Stanley Nowlan y Howard Heap para United Airlines (1978)**, el informe que dio origen al RCM, y lo difundió en la industria **John Moubray** con RCM II. Hoy es la base de las tareas "a condición" en cualquier análisis de [RCM según la SAE JA1011](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).

## El punto P depende de la técnica (y del modo de falla)

Un mismo modo de falla puede detectarse antes o después según **con qué** se mire. Para el desgaste de un rodamiento, por ejemplo, el ultrasonido, el análisis de vibraciones o el análisis de aceite pueden detectar señales mucho antes de que aumente la temperatura o se escuche ruido.

Dos aclaraciones que muchos artículos omiten:

1. **No hay un orden universal de técnicas.** Las fuentes técnicas no coinciden: algunas ponen primero el ultrasonido y otras el análisis de aceite. El orden depende del modo de falla, del equipo y de cómo se aplique la técnica. Lo correcto es estimarlo para cada modo de falla.
2. **El intervalo P-F no es una constante del equipo.** Cambia con la carga, la velocidad, la lubricación y la técnica. Por eso conviene estimarlo y corregirlo con tus propios datos.

| Modo de falla (ejemplo) | Técnicas que suelen detectarlo | Qué marca el punto P |
|---|---|---|
| Desgaste de rodamiento | Análisis de vibraciones, ultrasonido, análisis de aceite, termografía | Picos en las frecuencias de defecto, aumento de nivel ultrasónico, partículas de desgaste |
| Desalineación o desbalance | Análisis de vibraciones | Aumento a 1× o 2× la velocidad de giro |
| Degradación del lubricante | Análisis de aceite | Viscosidad, oxidación, agua o partículas fuera de límite |
| Conexión eléctrica floja | Termografía infrarroja, ultrasonido | Punto caliente o descarga detectable |
| Pérdida de espesor por corrosión | Medición de espesores por ultrasonido | Espesor por debajo del de alerta |
| Fuga en válvula o trampa de vapor | Ultrasonido | Ruido de paso con la válvula cerrada |

<figure><img src="/sitio/integridad-ultrasonido.jpg" alt="Técnico mide espesor de pared con un equipo de ultrasonido sobre una tubería con aislamiento dañado" loading="lazy" /><figcaption>La medición de espesores es una tarea a condición: su intervalo sale de la velocidad de corrosión, no del calendario.</figcaption></figure>

## Cómo calcular el intervalo de inspección

### Regla 1: P-F ÷ 2

Si inspeccionas con un intervalo igual al P-F, la falla puede aparecer justo después de una inspección y llegar a F antes de la siguiente. Con un intervalo de **la mitad del P-F**, cualquier falla potencial se ve al menos una vez antes de F.

> **Intervalo de inspección = Intervalo P-F ÷ 2**

Es una convención del RCM, no una exigencia de norma. La SAE JA1011 pide que el método para fijar intervalos sea **defendible** y esté aprobado por el responsable del activo, sin imponer un número.

### Regla 2: P-F ÷ n, según la probabilidad de detección

La regla de la mitad supone que una inspección **siempre** detecta la falla si ya está en zona P. En la práctica no es así: un punto de medición mal ubicado o un técnico distinto pueden no verla. Si conoces (o estimas) la probabilidad de detectar la falla en una sola inspección (θ) y la probabilidad que aceptas de que pase sin detectarse (P<sub>acc</sub>), el número de inspecciones que necesitas dentro del intervalo P-F es:

> **n = ln(P<sub>acc</sub>) ÷ ln(1 − θ)**  y  **Intervalo de inspección = Intervalo P-F ÷ n**

Ejemplo: si una inspección detecta la falla el 80 % de las veces (θ = 0,8) y aceptas un 1 % de probabilidad de no verla (P<sub>acc</sub> = 0,01), n = ln(0,01) ÷ ln(0,2) = 2,86, es decir **3 inspecciones** dentro del intervalo P-F.

### El P-F neto: lo que queda para actuar

Detectar no basta: después hay que emitir la orden, conseguir el repuesto, coordinar la parada y hacer el trabajo. El **P-F neto** es el tiempo que queda entre la detección y la falla funcional. En el peor caso (la falla potencial aparece justo después de una inspección):

> **P-F neto mínimo = Intervalo P-F − Intervalo de inspección**

La tarea solo sirve si **el P-F neto alcanza para actuar**. Si no alcanza, tienes tres salidas: inspeccionar más seguido, acortar el tiempo de respuesta (por ejemplo, tener el repuesto en almacén) o usar una técnica que detecte antes.

<intervalo-pf pf="56" respuesta="21"></intervalo-pf>

## Ejemplo completo: rodamiento de una bomba de proceso

Una bomba centrífuga sin respaldo, de [criticidad A](/blog/analisis-de-criticidad-de-activos), con un modo de falla dominante: **desgaste del rodamiento lado acople**.

1. **Técnica:** análisis de vibraciones con colector portátil.
2. **Intervalo P-F estimado:** el equipo de mantenimiento revisa las tendencias de las dos últimas fallas: la primera señal en las frecuencias de defecto apareció unas **8 semanas (56 días)** antes de que la bomba tuviera que detenerse por vibración alta.
3. **Tiempo para actuar:** el rodamiento está en almacén, pero la parada se coordina con operación y toma hasta **3 semanas (21 días)**.
4. **Con P-F ÷ 2:** inspeccionar cada **28 días**. P-F neto mínimo = 56 − 28 = **28 días** ≥ 21 → **alcanza**, con 7 días de margen.
5. **Con P-F ÷ n:** si el analista estima que una medición detecta el defecto el 80 % de las veces y la planta acepta 1 % de riesgo, n = 3 → inspeccionar cada **19 días**, con P-F neto mínimo de 37 días.
6. **Decisión:** la ruta de vibraciones pasa de mensual a **cada 3 semanas** para esta bomba, y se revisa el intervalo P-F con cada nueva falla detectada.

Prueba el caso en la calculadora de arriba: cambia el tiempo para actuar a 35 días (sin repuesto en almacén) y verás que la ruta mensual deja de alcanzar.

### El error más común

Asignar la misma frecuencia a todos los equipos por costumbre ("vibraciones, una vez al mes"). Si un modo de falla tiene un intervalo P-F de 2 semanas, una ruta mensual **no lo va a detectar a tiempo** la mayoría de las veces: el equipo falla entre dos rutas y se concluye, mal, que "el predictivo no funciona".

<figure><img src="/sitio/landing/rca-rodamiento-falla.jpg" alt="Eje con rodamiento dañado sobre una mesa de taller, con lupa y etiqueta de identificación de la falla" loading="lazy" /><figcaption>Cada rodamiento que falla sin aviso es un dato para corregir el intervalo P-F estimado.</figcaption></figure>

## ¿Cuándo vale la pena una tarea a condición?

Según la lógica del RCM, una tarea a condición es **técnicamente factible** si:

1. Existe una **falla potencial claramente detectable**.
2. El **intervalo P-F es razonablemente consistente**, de modo que se puede fijar un intervalo de inspección.
3. Es **práctico** inspeccionar con un intervalo menor que el P-F.
4. El **P-F neto** alcanza para actuar antes de la falla funcional.

Y **vale la pena** si su costo es menor que el de las consecuencias que evita. Por eso el predictivo rinde más en equipos de alta criticidad: para una bomba con respaldo y falla barata, dejarla fallar puede ser lo más económico. Lo vemos en [cuándo conviene preventivo, predictivo o correctivo](/blog/mantenimiento-preventivo-predictivo-correctivo-cuando-usar-cada-uno).

Para el diseño de un programa de monitoreo, la norma de referencia es **ISO 17359** (monitoreo de condición y diagnóstico de máquinas, guías generales).

## Cómo armar el programa con la curva P-F

1. **Prioriza** con el análisis de criticidad.
2. **Lista los modos de falla** dominantes de cada equipo crítico con un [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) o un RCM.
3. **Elige la técnica** que detecta antes cada modo de falla relevante.
4. **Estima el intervalo P-F** con la experiencia del personal y el historial, y sé conservador al principio.
5. **Calcula el intervalo de inspección** y comprueba el P-F neto.
6. **Define la respuesta**: quién recibe la alarma, en cuánto tiempo y qué hace.
7. **Cierra el ciclo**: registra qué se encontró al abrir el equipo y corrige el intervalo P-F con cada caso.

## Preguntas frecuentes

### ¿Qué es la curva P-F?

Es una gráfica que muestra cómo se degrada la condición de un equipo con el tiempo, desde el punto en que una falla se puede detectar (P, falla potencial) hasta el punto en que el equipo deja de cumplir su función (F, falla funcional).

### ¿Qué es el intervalo P-F?

Es el tiempo entre la falla potencial (P) y la falla funcional (F). Depende del modo de falla y de la técnica de detección: una técnica que detecta antes da un intervalo P-F más largo.

### ¿Cómo se calcula el intervalo de inspección con la curva P-F?

La regla más usada es inspeccionar cada P-F ÷ 2. Si la inspección no siempre detecta la falla, se usa P-F ÷ n, con n = ln(probabilidad aceptable de no detectarla) ÷ ln(1 − probabilidad de detectarla en una inspección).

### ¿Qué es el P-F neto?

Es el tiempo que queda entre la detección de la falla potencial y la falla funcional. En el peor caso es el intervalo P-F menos el intervalo de inspección, y tiene que alcanzar para planificar y ejecutar el trabajo.

### ¿Qué diferencia hay entre la curva P-F y la curva de la bañera?

La curva de la bañera describe cómo cambia la probabilidad de falla de un equipo con su edad. La curva P-F describe cómo evoluciona la condición del equipo una vez que una falla ya empezó, y sirve para fijar intervalos de inspección.

### ¿Quién creó la curva P-F?

Viene del trabajo de Nowlan y Heap para United Airlines (1978), que dio origen al RCM, y la difundió en la industria John Moubray con su libro RCM II.

## Del análisis al plan

En ReliaPlant las tareas a condición salen del [análisis RCM](/producto/rcm) de cada equipo, con su modo de falla, su técnica y su intervalo justificados, sobre el [registro de activos ISO 14224](/producto/taxonomia) de la planta.

<cta-demo titulo="Intervalos de inspección que se pueden defender" texto="Define técnicas e intervalos desde los modos de falla de tus equipos críticos, con su justificación documentada." boton="Probar ReliaPlant gratis"></cta-demo>

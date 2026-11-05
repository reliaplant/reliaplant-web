titulo: Taxonomía de activos según ISO 14224: guía práctica para armar tu jerarquía de equipos
slug: taxonomia-de-activos-iso-14224
resumen: Los 9 niveles de la taxonomía ISO 14224, cómo definir los límites de cada equipo y qué datos de falla registrar para que tu RCM y tus KPI tengan sentido.
---
Casi todos los problemas de un programa de confiabilidad empiezan en el mismo lugar: **el registro de activos**. Si una bomba aparece tres veces con nombres distintos, si nadie sabe si el motor "pertenece" a la bomba o es un equipo aparte, o si las fallas se cargan a la planta completa en vez de al componente que falló, ningún análisis posterior va a ser confiable. Ni el MTBF, ni la criticidad, ni el RCM.

La norma **ISO 14224** resuelve justamente eso: define una forma estándar de organizar los equipos y de registrar sus datos de falla y mantenimiento. Nació en la industria del petróleo y gas, pero su lógica se usa hoy en minería, energía, química, alimentos y casi cualquier industria con activos físicos. En este artículo explicamos **cómo está armada la taxonomía, cómo aplicarla a tu planta y qué errores evitar**.

## ¿Qué es ISO 14224 y para qué sirve?

ISO 14224 (*Petroleum, petrochemical and natural gas industries — Collection and exchange of reliability and maintenance data for equipment*) es la norma internacional para **recolectar e intercambiar datos de confiabilidad y mantenimiento**. Su edición vigente es la de 2016.

Su objetivo no es decirte cómo mantener un equipo, sino asegurar que los datos que registras sean **comparables**: entre plantas, entre empresas y a lo largo del tiempo. Para eso define tres cosas:

1. **Una taxonomía**: cómo se descompone una instalación en sistemas, equipos, subunidades y componentes.
2. **Límites de equipo** (*boundaries*): qué incluye y qué no incluye cada clase de equipo.
3. **Datos mínimos**: qué información registrar sobre el equipo, sus fallas y sus intervenciones de mantenimiento, con listas de códigos para modos, mecanismos y causas de falla.

Bases de datos de referencia como OREDA se construyen con esta misma estructura, lo que permite comparar tus tasas de falla con las de la industria.

## Los 9 niveles de la taxonomía

La taxonomía ISO 14224 tiene nueve niveles jerárquicos. Los cinco primeros describen **dónde y para qué se usa** el equipo; los cuatro últimos describen **el equipo en sí**.

| Nivel | Nombre | Ejemplo |
|---|---|---|
| 1 | Industria | Petróleo y gas |
| 2 | Categoría de negocio | Upstream (producción) |
| 3 | Instalación | Plataforma marina A |
| 4 | Planta / unidad | Tratamiento de gas |
| 5 | Sección / sistema | Compresión de gas |
| 6 | Unidad de equipo | Compresor centrífugo C-101 |
| 7 | Subunidad | Sistema de lubricación |
| 8 | Componente / ítem mantenible | Bomba de aceite de lubricación |
| 9 | Parte | Sello mecánico |

Algunas claves para leer la tabla:

- **El nivel 6 (unidad de equipo) es el corazón de la taxonomía.** Es el nivel donde se calculan los indicadores de confiabilidad (tasa de falla, MTBF, disponibilidad) y donde se asigna la **clase de equipo**: compresores, bombas, motores eléctricos, turbinas, intercambiadores de calor, recipientes, válvulas, etc.
- **El nivel 8 es el ítem mantenible**: lo que normalmente se repara o se reemplaza como un todo. Es el nivel donde tiene sentido registrar qué falló.
- **El nivel 9 (parte) es opcional** para muchos fines. Úsalo cuando la información realmente aporte (por ejemplo, para gestionar repuestos críticos), no por completar la tabla.

En plantas que no son de petróleo y gas, los niveles 1 a 3 se adaptan sin problema: industria (minería), categoría de negocio (concentración), instalación (planta concentradora Norte). Lo importante es **mantener la lógica**: arriba la ubicación y la función, abajo el equipo y sus piezas.

## Límites del equipo: la decisión que más se olvida

La norma define, para cada clase de equipo, un **diagrama de límites**: qué subunidades forman parte de la unidad de equipo y qué queda fuera. Por ejemplo, en una bomba centrífuga el límite suele incluir la bomba, el accionador (motor), la transmisión, el sistema de lubricación y los controles e instrumentos propios; las válvulas de entrada y salida y la tubería de proceso quedan fuera.

Parece un detalle, pero cambia los números:

- Si un equipo de mantenimiento incluye el motor dentro de la bomba y otro lo registra como un motor independiente, **la tasa de falla de "bombas" no es comparable** entre ambos.
- Si las válvulas de aislamiento se cuentan dentro de la bomba, sus fallas inflarán el MTBF de la bomba aunque la bomba nunca haya fallado.

**Recomendación práctica:** antes de cargar un solo equipo, define por escrito los límites de cada clase que tengas en planta y compártelos con todo el equipo. Es una página por clase y evita años de datos mezclados.

## Qué datos registrar en cada nivel

ISO 14224 agrupa los datos en tres categorías:

### Datos del equipo

Identificación (tag, número de serie), clase y tipo de equipo, fabricante y modelo, datos de diseño (potencia, velocidad, presión, caudal) y datos de operación (modo de operación normal, servicio, redundancia). Estos datos son los que permiten luego filtrar: "todas las bombas centrífugas de más de 100 kW en servicio continuo".

### Datos de falla

Para cada falla, la norma pide como mínimo:

- **Fecha** y equipo afectado.
- **Modo de falla**: cómo se manifiesta la falla a nivel de unidad de equipo. Cada clase tiene su lista; algunos ejemplos típicos son *falla al arrancar*, *fuga externa de fluido de proceso*, *vibración*, *salida baja* o *parada en operación*.
- **Mecanismo de falla**: el proceso físico que la produjo (desgaste, corrosión, fatiga, falla eléctrica, falla de instrumento…).
- **Causa de falla**: el origen (diseño, fabricación o instalación, operación o mantenimiento, causa administrativa).
- **Método de detección**: cómo se descubrió (inspección, monitoreo de condición, prueba funcional, en operación, por demanda).
- **Impacto**: en la función del equipo, en la planta y en la seguridad.
- **Ítem mantenible afectado** (nivel 8).

La diferencia entre modo, mecanismo y causa es lo que más se confunde. Una forma rápida de recordarlo: el **modo** es *lo que ves* ("la bomba fuga por el sello"), el **mecanismo** es *lo que pasó físicamente* ("desgaste de las caras del sello") y la **causa** es *por qué pasó* ("operación en seco por falta de NPSH").

### Datos de mantenimiento

Para cada intervención: tipo (correctivo o preventivo), actividad (reemplazo, reparación, ajuste, inspección, prueba), ítem intervenido, recursos (horas-hombre, especialidad), tiempos (tiempo de parada, tiempo activo de reparación) y repuestos usados. Con los tiempos bien registrados salen solos el MTTR y la disponibilidad.

## Cómo implementar la taxonomía paso a paso

1. **Define el alcance.** Empieza por un área o una unidad, no por la planta completa. Es mejor una unidad bien hecha que una planta entera a medias.
2. **Arma los niveles 1 a 5** con los diagramas de proceso (PFD y DTI). Cada sistema debe tener una función clara: "comprimir gas de 5 a 40 bar", no "área de compresores".
3. **Identifica las unidades de equipo (nivel 6)** recorriendo los DTI: cada tag principal es candidato. Asígnale su clase ISO 14224.
4. **Aplica los límites** de cada clase para decidir qué subunidades y componentes van dentro de cada equipo.
5. **Baja a subunidades e ítems mantenibles** solo hasta donde vayas a usar la información: planes de mantenimiento, repuestos, análisis de fallas.
6. **Normaliza la nomenclatura**: una sola regla de codificación de tags, un solo catálogo de clases, listas cerradas de modos y causas de falla. Los campos de texto libre son el enemigo de los datos comparables.
7. **Valida en campo.** Un recorrido de verificación siempre encuentra equipos que no están en los planos, y equipos en los planos que ya no existen.

## Errores comunes

- **Mezclar ubicación con equipo.** El tag de la posición (P-101) y el equipo físico que está instalado (bomba con serie 12345) no son lo mismo. Si la bomba se envía a taller y se instala una de repuesto, el historial de fallas debe seguir a quien corresponde.
- **Ir demasiado profundo.** Llegar al nivel de tornillo en todos los equipos multiplica el trabajo de carga y mantenimiento de datos sin mejorar ninguna decisión.
- **Listas de modos de falla abiertas.** Si cada técnico describe la falla con sus palabras, nunca podrás contar cuántas veces ocurrió el mismo modo.
- **No registrar fallas pequeñas.** Las fallas que no detienen la planta también cuentan para la confiabilidad del equipo, y suelen ser las primeras señales de un problema mayor.

## De la taxonomía al RCM y la criticidad

Una taxonomía bien armada es la base de todo lo demás: el [análisis de criticidad](/blog/analisis-de-criticidad-de-activos) se hace sobre las unidades de equipo, el [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) analiza las funciones de los sistemas y los modos de falla de sus ítems mantenibles, y los [indicadores como MTBF y MTTR](/blog/mtbf-mttr-disponibilidad-como-calcularlos) solo tienen sentido cuando las fallas están bien asignadas.

En Reliaplant el [registro de activos](/modulos/registro-activos) sigue la jerarquía de ISO 14224 y se construye a partir de los DTI de la planta, con clases de equipo y catálogos de falla normalizados, para que el registro quede listo para los análisis RCM y RCA desde el primer día.

<cta-demo titulo="Arma tu jerarquía ISO 14224 sin hojas de cálculo" texto="Carga tus equipos, sus subunidades y sus datos de falla en una estructura normalizada y lista para RCM." boton="Probar Reliaplant"></cta-demo>

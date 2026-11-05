titulo: Cómo elaborar un catálogo de fallas con ISO 14224 para petróleo y gas
slug: elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo
resumen: Estructura, códigos ISO 14224 y ejemplos para bombas, compresores y válvulas: cómo armar y mantener un catálogo de fallas útil en tu GMAO.
---
Cada aviso de avería que se carga en el GMAO es un dato de confiabilidad. Si el operador escribe "bomba mala", el mecánico cierra la orden con "se reparó" y nadie registra qué componente falló ni por qué, la planta acumula años de historial que no sirven para calcular un MTBF, detectar una falla repetitiva ni alimentar un RCM.

El **catálogo de fallas** es la herramienta que evita ese problema. Es el conjunto de listas cerradas y codificadas que usa el personal para describir **qué se observó, qué componente falló, por qué y qué se hizo** para recuperar el equipo. En petróleo y gas, la referencia natural para construirlo es la norma **ISO 14224**, que ya define clases de equipo, ítems mantenibles y códigos de modos, mecanismos y causas de falla.

En este artículo explicamos cómo estructurar el catálogo, qué tomar de la norma, cómo adaptarlo por clase de equipo y cómo mantenerlo vivo.

## ¿Qué es un catálogo de fallas y para qué sirve?

Un catálogo de fallas es la **interfaz entre lo que pasa en campo y lo que queda registrado en el sistema**. Cumple dos funciones que conviene separar desde el diseño:

1. **Crear el aviso.** Cualquier persona (operador, técnico, supervisor) debe poder describir lo que ve sin ser especialista: el equipo, el componente aproximado y el síntoma.
2. **Cerrar la orden de trabajo.** Quien ejecuta el trabajo confirma o corrige el componente, registra el mecanismo y la causa, y deja constancia de la actividad realizada.

Si el catálogo está bien hecho, el resultado es una base de datos homogénea con la que se pueden hacer análisis de tendencias, identificar los "malos actores", priorizar análisis causa raíz y comparar equipos entre plantas.

## Conceptos clave: modo, mecanismo y causa

La mayor fuente de errores en los catálogos es confundir estos tres conceptos. ISO 14224 los separa con claridad:

| Concepto | Qué describe | Ejemplo (bomba centrífuga) |
|---|---|---|
| **Modo de falla** | Cómo se observa la falla, a nivel de la unidad de equipo | Fuga externa de fluido de proceso |
| **Mecanismo de falla** | El proceso físico, químico o de otro tipo que produjo la falla en el componente | Desgaste de las caras del sello mecánico |
| **Causa de falla** | La circunstancia de diseño, fabricación, operación, mantenimiento o gestión que la originó | Operación fuera de diseño (marcha en seco por bajo NPSH) |
| **Método de detección** | Cómo se descubrió la falla | Observación casual del operador |

Una regla práctica: el **modo** es *lo que ves*, el **mecanismo** es *lo que le pasó al material o al componente* y la **causa** es *por qué pasó*. El modo se puede registrar al crear el aviso; el mecanismo y la causa casi siempre requieren desarmar, inspeccionar o analizar, y se registran al cierre.

Si quieres profundizar en la terminología, revisa nuestro [glosario de análisis causa raíz](/blog/terminos-y-definiciones-analisis-causa-raiz).

## Estructura del catálogo

Un catálogo útil tiene, como mínimo, estos campos codificados, asociados siempre a una **clase de equipo**:

| Campo | Quién lo llena | Cuándo | Referencia ISO 14224 |
|---|---|---|---|
| Ítem mantenible | Quien crea el aviso (aproximado) y quien cierra (confirmado) | Aviso y cierre | Nivel 8 de la taxonomía, tablas de subdivisión por clase (anexo A) |
| Modo de falla | Quien crea el aviso | Aviso | Modos de falla por clase de equipo (anexo B) |
| Mecanismo de falla | Ejecutor o ingeniero de confiabilidad | Cierre | Mecanismos de falla (anexo B) |
| Causa de falla | Ejecutor o ingeniero de confiabilidad | Cierre | Causas de falla (anexo B) |
| Método de detección | Quien crea el aviso | Aviso | Métodos de detección (anexo B) |
| Actividad de mantenimiento | Ejecutor | Cierre | Actividades de mantenimiento (anexo B) |

Dos recomendaciones de diseño:

- **No muestres la causa al crear el aviso.** El operador no la conoce, y si el campo está disponible lo llenará con una suposición. Déjala para el cierre.
- **Usa la misma lista para la actividad recomendada y la ejecutada.** Muchos catálogos duplican la lista ("reemplazar" / "reemplazado"). No hace falta: basta un campo de actividad en el aviso u orden y otro en el cierre, ambos con la misma lista cerrada.

## Qué tomar de ISO 14224

La norma (edición vigente: 2016) no es un catálogo listo para usar, pero sí da la base para que los datos sean comparables con otras plantas y con bancos de datos como OREDA. Estas son las listas principales.

### Ítems mantenibles

El nivel 8 de la taxonomía es el **componente o ítem mantenible**: el grupo de piezas que se repara o reemplaza como un todo (rodamiento, sello, impulsor, actuador). Para cada clase de equipo, el anexo A de la norma define el **límite del equipo**, sus subunidades y sus ítems mantenibles. Usa esa subdivisión como punto de partida y evita bajar al nivel de pieza (perno, junta) salvo que tengas un motivo concreto, como la gestión de repuestos críticos.

Si aún no tienes clara la jerarquía, empieza por nuestra guía de [taxonomía de activos según ISO 14224](/blog/taxonomia-de-activos-iso-14224).

### Mecanismos de falla

La norma agrupa los mecanismos en seis familias, cada una con subcódigos:

| Código | Familia | Ejemplos de subcódigos |
|---|---|---|
| 1 | Falla mecánica | 1.1 Fuga, 1.2 Vibración, 1.3 Holgura o desalineación, 1.4 Deformación, 1.5 Aflojamiento, 1.6 Atascamiento |
| 2 | Falla del material | 2.1 Cavitación, 2.2 Corrosión, 2.3 Erosión, 2.4 Desgaste, 2.5 Rotura, 2.6 Fatiga, 2.7 Sobrecalentamiento, 2.8 Estallido |
| 3 | Falla de instrumento | 3.1 Falla de control, 3.2 Sin señal o alarma, 3.3 Señal errónea, 3.4 Fuera de ajuste, 3.5 Falla de software |
| 4 | Falla eléctrica | 4.1 Cortocircuito, 4.2 Circuito abierto, 4.3 Sin alimentación, 4.4 Alimentación defectuosa, 4.5 Falla a tierra o de aislamiento |
| 5 | Influencia externa | 5.1 Bloqueo u obstrucción, 5.2 Contaminación, 5.3 Otras influencias externas |
| 6 | Misceláneos | 6.1 Sin causa encontrada, 6.2 Causas combinadas, 6.3 Otro, 6.4 Desconocido |

### Causas de falla

Las causas se organizan en cinco categorías: **relacionadas con el diseño** (capacidad o material inadecuados), **con la fabricación o instalación**, **con la operación o el mantenimiento** (servicio fuera de diseño, error de operación, error de mantenimiento, desgaste esperado), **con la gestión** (errores de documentación o de gestión) y **misceláneas** (sin causa encontrada, causa común, falla en cascada, desconocida).

La categoría de gestión es la que más se omite y la que más valor aporta: es donde aparecen las causas latentes (procedimientos inexistentes, capacitación insuficiente) que un [análisis causa raíz](/blog/fundamentos-del-analisis-causa-raiz) bien hecho termina encontrando.

### Métodos de detección

La lista de la norma incluye mantenimiento periódico, prueba funcional, inspección, monitoreo de condición periódico y continuo, interferencia con la producción, observación casual, mantenimiento correctivo y detección a demanda. Este campo parece secundario, pero dice mucho de tu estrategia: si casi todas las fallas se detectan "por interferencia con la producción", el monitoreo no está llegando a tiempo. Más sobre esto en [mantenimiento predictivo y la curva P-F](/blog/mantenimiento-predictivo-curva-p-f).

### Actividades de mantenimiento

La norma define doce actividades, válidas tanto para correctivo como para preventivo: reemplazar, reparar, modificar, ajustar, reacondicionar, verificar, servicio, prueba, inspección, mantenimiento mayor (overhaul), combinación y otro.

## Ejemplos por clase de equipo

Los modos de falla se definen **por clase de equipo**, con códigos de tres letras. Una bomba no falla "al cerrar" y una válvula no "vibra" como modo principal: por eso no conviene usar una lista única para toda la planta. Los ejemplos siguientes son una selección; verifica siempre la lista completa de cada clase en tu copia de la norma.

### Bomba centrífuga

| Ítem mantenible (ejemplos) | Modos de falla típicos | Mecanismos frecuentes |
|---|---|---|
| Sello mecánico | ELP – Fuga externa de fluido de proceso | 2.4 Desgaste, 1.1 Fuga |
| Rodamientos | VIB – Vibración, OHE – Sobrecalentamiento, NOI – Ruido | 2.4 Desgaste, 2.6 Fatiga, 1.3 Desalineación |
| Impulsor | LOO – Salida baja | 2.1 Cavitación, 2.3 Erosión |
| Acople | VIB – Vibración, BRD – Rotura | 1.3 Desalineación, 2.6 Fatiga |
| Instrumentación | AIR – Lectura anormal de instrumento, UST – Parada espuria | 3.3 Señal errónea |

### Compresor centrífugo

| Ítem mantenible (ejemplos) | Modos de falla típicos | Mecanismos frecuentes |
|---|---|---|
| Sellos secos de gas | ELP – Fuga externa de fluido de proceso | 5.2 Contaminación, 2.4 Desgaste |
| Cojinetes y sistema de lubricación | OHE – Sobrecalentamiento, VIB – Vibración | 5.2 Contaminación del aceite, 2.4 Desgaste |
| Rotor e impulsores | VIB – Vibración, LOO – Salida baja | 5.2 Ensuciamiento, 2.3 Erosión |
| Control antisurge | ERO – Salida errática, UST – Parada espuria | 3.1 Falla de control, 3.4 Fuera de ajuste |
| Accionador (motor o turbina) | FTS – Falla al arrancar | 4.4 Alimentación defectuosa |

### Válvula de control o de cierre

| Ítem mantenible (ejemplos) | Modos de falla típicos | Mecanismos frecuentes |
|---|---|---|
| Asiento y obturador | INL – Fuga interna, LCP – Fuga en posición cerrada | 2.3 Erosión, 2.2 Corrosión |
| Empaquetadura y bonete | ELP – Fuga externa de fluido de proceso | 2.4 Desgaste, 1.5 Aflojamiento |
| Actuador | FTO – Falla al abrir, FTC – Falla al cerrar, DOP – Operación retardada | 1.6 Atascamiento, 5.1 Obstrucción |
| Posicionador o solenoide | FTR – Falla al regular, SPO – Operación espuria | 3.4 Fuera de ajuste, 4.2 Circuito abierto |

Observa que el mismo mecanismo (desgaste) aparece en varios componentes y que el mismo modo (vibración) puede venir de componentes distintos. Por eso el catálogo debe registrar **la combinación** ítem + modo + mecanismo + causa, y no solo uno de ellos.

## Cómo construir el catálogo paso a paso

1. **Forma un equipo pequeño y transversal.** Ingeniería de confiabilidad, un planificador, técnicos senior de mecánica, electricidad e instrumentación y un representante de operaciones. El catálogo lo van a usar todos; si lo escribe solo ingeniería, nadie lo usará bien.
2. **Define las clases de equipo que realmente tienes.** Parte de las clases de ISO 14224 (equipos rotativos, mecánicos, eléctricos, de seguridad y control, submarinos, etc.) y descarta las que no existen en tu planta. Agrega las que falten, como vehículos, grúas o utilitarios.
3. **Toma de la norma la subdivisión y los modos de cada clase.** Úsalos como base y no los reinventes: es lo que permitirá comparar tus datos con otros.
4. **Complementa con la experiencia de tu planta.** Revisa el historial de órdenes de trabajo, especialmente los textos libres, para descubrir modos y causas que la norma no tiene con el nivel de detalle que necesitas. Agrega subcódigos propios sin romper la correspondencia con los códigos de la norma.
5. **Escribe los textos para quien los va a usar.** "Fuga externa de fluido de proceso" es preciso, pero quizá en planta se entienda mejor "fuga de producto al exterior". Mantén el código ISO y adapta la etiqueta.
6. **Limita la longitud de las listas.** Una lista de modos de falla con 40 opciones termina con la mayoría de los registros en "Otro". Entre 8 y 15 opciones por clase suele ser manejable; si necesitas más detalle, usa el mecanismo y la causa.
7. **Prueba con casos reales.** Toma 20 o 30 órdenes recientes y pide a técnicos distintos que las codifiquen con el catálogo. Si los resultados no coinciden, las definiciones no son claras.
8. **Capacita y publica.** Una página por clase de equipo, con definiciones y ejemplos, vale más que un manual de cien páginas.

## Cómo mantenerlo vivo

Un catálogo no es un documento que se escribe una vez. Para que siga siendo útil:

- **Mide el uso de "Otro" y "Desconocido".** Si superan un porcentaje relevante de los registros de una clase, falta una opción o las definiciones no se entienden. Revisa los textos libres asociados para descubrir cuál.
- **Asigna un dueño.** Normalmente ingeniería de confiabilidad. Los cambios se solicitan, se evalúan y se versionan; nadie agrega códigos directamente en el GMAO.
- **No cambies el significado de un código existente.** Si una definición cambia, crea un código nuevo y da de baja el anterior. Reasignar significados destruye la comparabilidad histórica.
- **Revisa la calidad del cierre.** Un muestreo mensual de órdenes cerradas, comparando la codificación con la descripción del trabajo, detecta rápido los problemas de capacitación.
- **Conecta el catálogo con los análisis.** Los modos de falla del catálogo deben coincidir con los que usa tu [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011). Así, cada falla registrada valida o corrige una suposición del análisis.

## Lo que gana la organización

Con un catálogo bien construido y en uso:

- Los avisos se crean más rápido y con mejor información, lo que mejora la planificación.
- Las fallas repetitivas se vuelven visibles con una consulta y no con la memoria de un técnico veterano, lo que permite elegir mejor qué [análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz) hacer primero.
- Los [indicadores MTBF, MTTR y disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos) se pueden calcular por clase de equipo, por modo de falla o por componente.
- El [análisis de criticidad](/blog/analisis-de-criticidad-de-activos) puede apoyarse en frecuencias de falla reales en lugar de estimaciones.

En Reliaplant, el [registro de activos](/modulos/registro-activos) sigue la taxonomía ISO 14224 e incluye catálogos de falla normalizados por clase de equipo, de modo que cada falla registrada queda lista para los análisis [RCM](/modulos/rcm) y [RCA](/modulos/rca).

<cta-demo titulo="Un catálogo de fallas que tu equipo sí usa" texto="Registra modos, mecanismos y causas con códigos ISO 14224 por clase de equipo y detecta tus fallas repetitivas sin limpiar datos." boton="Probar Reliaplant"></cta-demo>

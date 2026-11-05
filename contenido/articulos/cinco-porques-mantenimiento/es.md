titulo: Ejemplo de los 5 porqués en mantenimiento: falla repetida de sello en una bomba
slug: ejemplo-de-los-5-porques-en-mantenimiento
resumen: Un caso completo de 5 porqués en una bomba centrífuga, con bifurcaciones, evidencia para cada respuesta, acciones y los límites del método.
---
Los 5 porqués parecen la técnica más fácil del análisis causa raíz: se pregunta "¿por qué?" cinco veces y listo. En la práctica, la mayoría de los ejercicios que se ven en planta terminan en "falta de capacitación" o "error del técnico" después de una cadena de suposiciones que nadie verificó.

Este artículo muestra **un caso completo en una bomba centrífuga**, con lo que suele faltar en los ejemplos de manual: **bifurcaciones, evidencia para cada respuesta, hipótesis descartadas y acciones con verificación**. Al final repasamos los límites del método y cuándo conviene pasar a otra técnica. El caso es ilustrativo, pero el patrón es muy frecuente en la industria.

## El problema, bien definido

Un 5 porqués es tan bueno como la definición del problema. "La bomba falla" no sirve. Una buena definición dice **qué, dónde, cuándo y cuánto**:

> La bomba centrífuga P-205 de agua de proceso ha tenido tres fugas por el sello mecánico en cinco meses. Cada falla obliga a parar la bomba, cambiar el sello y realinear el conjunto. Las fugas aparecen entre cuatro y siete semanas después de cada reparación. La bomba gemela P-206, en el mismo servicio, no presenta el problema.

Dos datos de esta definición serán claves más adelante: **la falla aparece poco después de cada intervención** y **la bomba gemela no falla**. Esa comparación es, en sí misma, un pequeño análisis de cambios: algo distingue a P-205 de P-206.

## La cadena de porqués

### Porqué 1: ¿por qué fuga el sello?

**Respuesta:** las caras del sello presentan desgaste irregular, con una franja de contacto excéntrica y astillado en el borde.

**Evidencia:** inspección del sello retirado en taller, con fotografías de las caras. No hay signos de ataque químico ni de marcha en seco (sin decoloración térmica en las caras).

Aquí se descartan dos hipótesis habituales, **sello incompatible con el fluido** y **operación sin líquido**, con evidencia y no por opinión.

### Porqué 2: ¿por qué hay desgaste excéntrico en las caras?

**Respuesta:** el eje tiene un movimiento excesivo respecto del alojamiento del sello.

**Evidencia:** las mediciones de vibración tomadas antes de la última falla muestran amplitudes elevadas en el lado acople, con componentes a 1× y 2× la velocidad de giro y alta vibración axial.

En este punto el equipo abrió **dos hipótesis**:

- **H1: desalineación** entre motor y bomba.
- **H2: rodamientos dañados** en la bomba.

Los rodamientos se revisaron durante el desarme: sin picaduras, sin decoloración y con juego normal. El espectro tampoco mostraba frecuencias de defecto de rodamiento. **H2 se descarta.** El patrón 1× y 2× con componente axial es compatible con desalineación, así que se sigue por H1.

### Porqué 3: ¿por qué hay desalineación?

**Respuesta:** la medición con alineador láser, hecha por el equipo de confiabilidad con la bomba fría, encontró una **desalineación angular fuera de la tolerancia** que usa la planta y, además, **pata coja** en una de las patas del motor.

**Evidencia:** informe del alineador láser y medición de pata coja con comparador.

Son dos causas distintas que actúan juntas, así que la cadena **se bifurca**.

## Rama A: la alineación no se verifica después de reparar

**Porqué 4A: ¿por qué queda desalineada después de cada cambio de sello?**
Porque la alineación posterior al cambio se hace con regla y galgas, sin medición final ni registro.
*Evidencia:* entrevistas con los técnicos de los tres turnos y revisión de las tres órdenes de trabajo: ninguna registra valores de alineación.

**Porqué 5A: ¿por qué no se usa el alineador láser ni se registra la alineación?**
Porque el procedimiento de cambio de sello no incluye la alineación como paso obligatorio ni define tolerancias de aceptación, y la orden de trabajo se puede cerrar sin ese dato. El láser existe, pero está asignado a otra área y hay que solicitarlo con anticipación.
*Evidencia:* procedimiento vigente y configuración del cierre de órdenes en el sistema de mantenimiento.

**Causa raíz A:** el proceso de reparación no exige ni verifica la alineación final del conjunto.

## Rama B: la propia falla deteriora la base

**Porqué 4B: ¿por qué hay pata coja en el motor?**
Porque bajo esa pata hay seis lainas apiladas, varias de ellas corroídas y deformadas.
*Evidencia:* inspección de la base durante la intervención; las lainas de P-206 están en buen estado y son dos por pata.

**Porqué 5B: ¿por qué hay tantas lainas y por qué están corroídas?**
Porque cada fuga del sello moja la base y corroe las lainas de acero al carbono, y en cada reparación se agregan lainas nuevas encima de las viejas en lugar de reemplazarlas. No hay lainas de acero inoxidable en el almacén.
*Evidencia:* registro fotográfico de la base, consulta al almacén y testimonio de los técnicos.

**Causa raíz B:** no hay criterio para el estado de la base ni repuestos adecuados para corregirla, y la falla crea las condiciones para repetirse.

Esta rama es la que convierte una falla puntual en **un círculo vicioso**: la fuga corroe la base, la base corroída impide alinear bien, la desalineación daña el sello y el sello vuelve a fugar. Explica también por qué P-206 no falla.

## Validar antes de cerrar

Antes de pasar a las acciones, el equipo verificó que las causas explican todos los hechos:

| Hecho observado | ¿Lo explican las causas A y B? |
|---|---|
| Falla repetida tras cada reparación | Sí: cada reparación deja desalineación y agrega lainas |
| Falla en cuatro a siete semanas | Sí: compatible con desgaste acelerado de caras por desalineación |
| P-206 no falla | Sí: su base está sana y no ha tenido reparaciones recientes |
| Patrón de vibración 1× y 2× axial | Sí: típico de desalineación |

Si algún hecho hubiera quedado sin explicación, el análisis no estaría terminado. Esta es la **etapa de validación** que exige la [norma IEC 62740](/blog/estandar-para-el-analisis-causa-raiz-bs-en-62740) y la que más se omite.

## Acciones y verificación de eficacia

| Causa | Acción | Tipo | Verificación |
|---|---|---|---|
| A | Incluir alineación láser con tolerancias y registro obligatorio en el procedimiento de cambio de sello | Sistémica | Revisión de las próximas órdenes de trabajo |
| A | No permitir el cierre de la orden sin los valores de alineación | Sistémica | Prueba en el sistema de mantenimiento |
| B | Rehabilitar la base de P-205 y reemplazar las lainas por juegos de acero inoxidable | Correctiva | Medición de pata coja tras la reparación |
| B | Incorporar lainas inoxidables al catálogo de repuestos e incluir la base en la inspección de cada reparación | Sistémica | Existencia en almacén y lista de inspección actualizada |
| A y B | Medir vibración en P-205 de forma periódica durante los primeros meses | Seguimiento | Tendencia de vibración estable y sin fugas |

El criterio de cierre no es "acciones implementadas", sino **"el sello deja de fallar"**. El monitoreo de vibración, además, permite detectar la desalineación mucho antes de la fuga, aprovechando el intervalo P-F (ver [mantenimiento predictivo y curva P-F](/blog/mantenimiento-predictivo-curva-p-f)).

Para que el aprendizaje no se pierda, el modo de falla y sus causas deben registrarse en el historial del activo con códigos consistentes, como propone la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) y explica la guía para [elaborar un catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo).

## Qué hizo que este 5 porqués funcionara

- **Se definió el problema con datos**, incluida la comparación con la bomba gemela.
- **Cada respuesta tiene evidencia** física, de medición o documental.
- **Se descartaron hipótesis** con datos y quedó constancia de ello.
- **Se bifurcó** cuando apareció más de una causa.
- **No se buscaron culpables.** "El técnico alineó mal" habría sido una respuesta rápida e inútil; la pregunta correcta fue por qué el proceso permitía cerrar sin alinear.

## Los límites del método

Los 5 porqués son útiles, pero tienen límites claros:

- **Tienden a una sola línea causal.** Si no se fuerza la bifurcación, la rama B de este caso nunca habría aparecido.
- **No representan combinaciones.** Cuando un evento solo ocurre si fallan dos cosas a la vez (un equipo y su respaldo), hace falta un [árbol de fallos](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025).
- **Dependen del conocimiento del equipo.** Nadie pregunta por una causa que no conoce; por eso conviene incluir especialistas.
- **No son reproducibles.** Dos grupos pueden llegar a cadenas distintas con los mismos hechos.
- **No representan bien el tiempo.** En eventos con muchas personas y decisiones encadenadas, es mejor una línea de tiempo o un diagrama de eventos y factores causales.

En resumen: los 5 porqués son adecuados para fallas de equipos con evidencia física disponible. Para eventos complejos, con consecuencias graves o con factores organizacionales fuertes, conviene combinarlos con otras [técnicas de análisis causa raíz](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015).

<cta-demo titulo="Que la falla no vuelva" texto="Registra tus 5 porqués con evidencia y acciones en el historial de cada equipo, y verifica que la falla no se repita." boton="Probar Reliaplant"></cta-demo>

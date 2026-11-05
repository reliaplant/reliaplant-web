titulo: Investigación de incidentes (RCA) en el marco de la ISO 55000: cómo integrarla al sistema de gestión
slug: investigacion-de-incidentes-rcas-en-el-marco-de-la-iso-55000
resumen: Cómo encajan los RCA en un sistema ISO 55001: no conformidades, acción correctiva, mejora continua, evidencia para auditoría y un flujo práctico.
---
Muchas plantas hacen buenos análisis causa raíz, pero los tratan como un ejercicio aislado: se forma un equipo, se hace un diagrama, se entrega un informe y las acciones quedan en un correo. En un sistema de gestión de activos según **ISO 55001**, eso no alcanza. El RCA es una pieza del proceso de **no conformidad y acción correctiva**, y lo que un auditor va a revisar no es la calidad del diagrama, sino si el sistema **detecta, investiga, corrige, verifica y aprende** de forma consistente.

Este artículo explica dónde encaja el RCA dentro de la familia ISO 55000, qué evidencia necesitas y un flujo práctico para implementarlo.

## La familia ISO 55000 en dos minutos

- **ISO 55000:** visión general, principios y vocabulario. Define la gestión de activos como la actividad coordinada de una organización para obtener valor de sus activos.
- **ISO 55001:** requisitos del sistema de gestión de activos. Es la norma certificable. Su edición actual es de 2024.
- **ISO 55002:** guía para aplicar la ISO 55001.

La ISO 55001 sigue la **estructura común de los sistemas de gestión ISO**, la misma de ISO 9001, ISO 14001 o ISO 45001. Eso es una ventaja: si tu organización ya tiene un proceso de acción correctiva para calidad o seguridad, el de gestión de activos puede compartir la misma lógica y, a menudo, la misma herramienta.

Si vienes de la PAS 55, la norma británica que precedió a la ISO 55000 y que hoy está retirada, revisa primero [qué pedía la PAS 55 sobre investigación de fallas](/blog/la-pas-55-y-la-investigacion-de-fallas-e-incidentes). La diferencia clave es que la ISO no tiene una cláusula dedicada a "investigar fallas": las integra en el ciclo de mejora.

## Dónde encaja el RCA en la ISO 55001

### Las fallas son no conformidades

En la lógica de la norma, una **no conformidad** es el incumplimiento de un requisito. En gestión de activos eso incluye mucho más que un hallazgo de auditoría:

- una **falla funcional** de un activo (no cumple el desempeño requerido),
- un **incidente** de seguridad, ambiente o producción asociado a un activo,
- una **desviación del sistema de gestión** (un plan no ejecutado, un procedimiento no seguido, un objetivo no alcanzado).

La guía ISO 55002 lo dice de forma explícita: las no conformidades incluyen fallas e incidentes, y pueden ocurrir en los activos, en la gestión de activos o en el sistema de gestión de activos.

### Qué exige la acción correctiva

La cláusula 10 (Mejora) de la ISO 55001 pide, en esencia, lo mismo que cualquier norma de sistemas de gestión. Ante una no conformidad, la organización debe:

1. **Reaccionar:** controlarla, corregirla y hacer frente a sus consecuencias.
2. **Evaluar la necesidad de eliminar sus causas**, para que no se repita ni ocurra en otro lugar: revisarla, **determinar sus causas** y ver si existen o podrían existir no conformidades similares.
3. **Implementar** las acciones necesarias.
4. **Revisar la eficacia** de las acciones tomadas.
5. **Hacer cambios en el sistema de gestión** si es necesario.
6. **Conservar información documentada** como evidencia de la naturaleza de la no conformidad, las acciones tomadas y sus resultados.

El paso 2 es donde vive el RCA. Y la norma no pide un RCA para todo: pide **evaluar la necesidad**. Ahí es donde la proporcionalidad entra en juego.

### Qué agrega la guía ISO 55002

La ISO 55002 (en su edición 2018) desarrolla este punto con recomendaciones útiles:

- La acción correctiva y sus plazos deben ser **proporcionales al riesgo** y considerar la **criticidad del activo**.
- Las investigaciones deben buscar causas **físicas, humanas y latentes o sistémicas**, no solo la pieza que se rompió.
- Distingue familias de métodos según qué se investiga: para los **activos**, métodos de análisis causa raíz como Ishikawa, árbol de fallas, árbol de eventos o árbol lógico; para el **sistema de gestión**, métodos sistémicos de investigación de incidentes como MORT, ICAM o TRIPOD Beta; y para las **decisiones de gestión**, métodos de error humano.
- Remite a la **IEC 62740** (análisis causa raíz) y a la **IEC 62508** (factores humanos) para el detalle de los métodos.
- Si una acción correctiva introduce riesgos nuevos o cambia procesos, debe **evaluarse antes de implementarse**, y su finalización debe monitorearse.

Para elegir el método adecuado, revisa la [guía de técnicas de RCA según BS EN 62740](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015) y el artículo sobre [análisis por árbol de fallos (FTA)](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025).

## Un flujo práctico de RCA dentro del sistema

El siguiente flujo cumple con lo que pide la norma sin agregar burocracia innecesaria.

### 1. Registrar el evento

Toda falla, incidente o desviación se registra en un único lugar, asociada al **activo** (o al proceso del sistema de gestión) donde ocurrió. Si las fallas se registran con códigos normalizados de modo, mecanismo y causa, el paso 2 se vuelve casi automático. Ver [cómo elaborar un catálogo de fallas con ISO 14224](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo).

### 2. Contener y clasificar

Se toman las acciones inmediatas (contención) y se clasifica el evento según sus consecuencias reales y potenciales. Esta clasificación decide el nivel de investigación.

### 3. Decidir el nivel de investigación

Define criterios explícitos y documentados. Un esquema habitual:

| Nivel | Cuándo aplica (ejemplo) | Tipo de análisis | Responsable |
|---|---|---|---|
| Bajo | Falla menor en equipo de baja criticidad | Registro y análisis de tendencias | Supervisor de mantenimiento |
| Medio | Falla repetitiva o en equipo de criticidad media | Análisis simple, como los [5 porqués](/blog/ejemplo-de-los-5-porques-en-mantenimiento) | Ingeniero de confiabilidad |
| Alto | Falla en equipo crítico, incidente con consecuencias de seguridad o ambiente, casi accidente grave | RCA completo con equipo multidisciplinario | Equipo designado por la gerencia |

Los umbrales concretos dependen de tu matriz de riesgo y de tu [análisis de criticidad](/blog/analisis-de-criticidad-de-activos). Lo importante es que estén escritos y se apliquen de forma consistente: es lo primero que se audita.

### 4. Investigar

El equipo recopila evidencia, reconstruye la secuencia de eventos y aplica el método elegido hasta llegar a causas sobre las que la organización pueda actuar. Si necesitas una guía paso a paso, revisa [pasos para hacer un análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz).

### 5. Definir y aprobar acciones

Cada causa raíz tiene al menos una acción, con responsable y fecha. Antes de aprobarlas, pregunta:

- ¿La acción elimina la causa o solo la detecta antes?
- ¿Introduce algún riesgo nuevo o cambia un procedimiento? Si es así, pasa por gestión del cambio.
- ¿Afecta a otros activos similares? La norma pide revisar si la no conformidad existe o puede ocurrir en otros lugares.

### 6. Actualizar el sistema

Este es el paso que más se omite. Un RCA cerrado debería reflejarse donde corresponda: el **registro de riesgos**, el **plan de mantenimiento** (por ejemplo, revisando el análisis [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) del equipo), los procedimientos operativos, los planes de capacitación o los criterios de diseño de futuras compras.

### 7. Verificar la eficacia

Define desde el inicio **cómo y cuándo** sabrás si la acción funcionó: ausencia de recurrencia en un periodo definido, mejora del [MTBF](/blog/mtbf-mttr-disponibilidad-como-calcularlos) del equipo, resultados de inspecciones. Si no es eficaz, el ciclo vuelve a la investigación.

### 8. Revisar en conjunto

Periódicamente, consolida los resultados: causas raíz más frecuentes, acciones vencidas, tasa de recurrencia. Este resumen es una entrada natural para la **revisión por la dirección** y para la **mejora continua** del sistema.

## Evidencia para la auditoría

Un auditor de ISO 55001 normalmente buscará:

- un **procedimiento** que defina cómo se gestionan las no conformidades, con responsabilidades y criterios de investigación;
- **registros** de eventos, con su clasificación y la decisión sobre el nivel de análisis;
- **informes de investigación** coherentes con el criterio definido (si el procedimiento dice que un evento crítico requiere RCA completo, debe haberlo);
- **seguimiento de acciones**, con fechas, responsables y estado;
- **evidencia de verificación de eficacia**, no solo de cierre;
- trazabilidad hacia los **cambios** en riesgos, planes y procedimientos;
- uso de los resultados en la **revisión por la dirección**.

La falla más común no es la falta de análisis, sino la **falta de trazabilidad**: RCA en carpetas compartidas, acciones en hojas de cálculo distintas y ningún vínculo con el activo afectado.

## Errores frecuentes

- **Investigar todo con el mismo esfuerzo.** Satura al equipo y retrasa los análisis importantes.
- **Quedarse en la causa física.** Si todas tus causas raíz son "rodamiento desgastado", no estás llegando a las causas latentes que pide la guía.
- **Cerrar acciones sin verificar eficacia.** Una acción "ejecutada" no es una acción "eficaz".
- **No mirar a los equipos gemelos.** La misma causa suele estar presente en otros activos de la misma clase.
- **Desconectar el RCA del sistema.** Si el resultado no cambia ningún plan, riesgo o procedimiento, el sistema no aprendió.

## Conclusión

En el marco de la ISO 55000, el RCA deja de ser un informe técnico para convertirse en un **proceso del sistema de gestión**: se dispara con criterios definidos, se ejecuta con el método adecuado a lo que se investiga, produce acciones con seguimiento, verifica su eficacia y modifica el sistema. Si construyes ese ciclo, cumplir con la norma es una consecuencia, no un objetivo.

En Reliaplant, el [módulo de RCA](/modulos/rca) vincula cada investigación al activo de tu [registro de activos](/modulos/registro-activos), sigue las acciones hasta su verificación y conecta los resultados con los análisis [RCM](/modulos/rcm), para que la evidencia para la auditoría esté siempre en un solo lugar.

<cta-demo titulo="RCA con trazabilidad lista para auditoría" texto="Vincula cada investigación al activo afectado, sigue sus acciones correctivas hasta verificar su eficacia y lleva los resultados a tu plan de mantenimiento." boton="Probar Reliaplant"></cta-demo>

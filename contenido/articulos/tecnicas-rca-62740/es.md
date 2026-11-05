titulo: Técnicas de análisis causa raíz según la IEC 62740: cuándo usar cada una
slug: tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015
resumen: Comparación práctica de las técnicas de RCA de la IEC/BS EN 62740: 5 porqués, Ishikawa, árbol de fallos, árbol de causas, barreras y más.
---
Elegir mal la técnica es una de las razones más comunes por las que un análisis causa raíz no llega a nada. Un diagrama de Ishikawa para una falla de rodamiento con evidencia física clara es demasiado; unos 5 porqués para un incendio en una subestación son demasiado poco.

La norma **IEC 62740:2015** (publicada en Europa como BS EN 62740) describe un abanico de técnicas y deja claro que **no hay una mejor para todo**. Este artículo no repite qué es la norma ni su proceso; para eso está el artículo sobre [la norma BS EN 62740](/blog/estandar-para-el-analisis-causa-raiz-bs-en-62740). Aquí nos concentramos en comparar técnicas y en decidir cuál usar.

## Antes de elegir: tres preguntas

La elección depende menos del gusto del analista y más de las características del evento:

1. **¿Qué tan complejo es?** Un componente que falla por un mecanismo conocido no es lo mismo que un evento con varias personas, turnos y sistemas involucrados.
2. **¿Importa la secuencia en el tiempo?** Si el evento se desarrolló durante horas, con decisiones de operadores y alarmas, se necesita una técnica que represente el tiempo.
3. **¿Hay combinaciones de causas?** Cuando el evento solo ocurre si fallan dos cosas a la vez (por ejemplo, un equipo y su respaldo), hace falta lógica Y/O.

Con eso en mente, las técnicas se agrupan en cuatro familias.

## Familia 1: cadenas causales simples

### Método del porqué (5 porqués)

Se pregunta "¿por qué?" de forma repetida desde el evento hasta llegar a una causa sobre la que se pueda actuar. El número cinco es orientativo. Bien aplicado, **cada respuesta se valida con evidencia** y la cadena se ramifica cuando hay más de una causa. Mal aplicado, produce una única línea que termina en la opinión de quien dirige la reunión. Un caso completo está en el [ejemplo de los 5 porqués en mantenimiento](/blog/ejemplo-de-los-5-porques-en-mantenimiento).

### Análisis por qué-porque (WBA)

Construye una red de factores causales y comprueba cada relación con una **prueba contrafactual**: si este factor no hubiera existido, ¿el efecto habría ocurrido? Es más riguroso que los 5 porqués y produce un grafo en vez de una línea, pero exige más disciplina.

## Familia 2: exploración de causas posibles

### Diagrama de Ishikawa (espina de pescado)

Organiza las causas posibles en categorías (por ejemplo, máquina, método, materiales, mano de obra, medición y medio ambiente). Es excelente para **abrir el abanico** en una sesión de equipo y evitar que se pase por alto una línea de investigación. Su limitación es que no muestra relaciones entre causas ni prueba nada: es un punto de partida que luego debe confirmarse con otra técnica o con evidencia.

## Familia 3: árboles lógicos

### Árbol de fallos y árbol de éxito

El árbol de fallos parte del evento indeseado y lo descompone de arriba abajo con compuertas lógicas (Y, O) hasta llegar a eventos básicos. Es la técnica adecuada cuando el evento requiere **combinaciones de fallas** y cuando se quiere, además, estimar probabilidades. Su norma de referencia es la IEC 61025; lo explicamos en detalle en [análisis por árbol de fallos (FTA) y la IEC 61025](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025). El árbol de éxito es su versión inversa: qué tiene que funcionar para lograr un resultado.

### Método del árbol de causas (CTM)

Similar al árbol de fallos, pero pensado para eventos ya ocurridos y sin pretensión probabilística. Representa los hechos y condiciones que fueron necesarios para el evento, e incorpora de forma explícita **factores técnicos, humanos, organizacionales y del entorno**. Se usa mucho en investigación de accidentes laborales.

## Familia 4: secuencia temporal y factores del sistema

### Diagrama de eventos y factores causales (ECF)

Ordena en una línea de tiempo los eventos que llevaron al evento focal y, debajo de cada uno, las condiciones que lo hicieron posible. Es muy útil para **reconstruir lo que pasó** antes de analizar por qué pasó.

### MES y STEP

Secuenciación de eventos multilínea y trazado de eventos secuenciales cronometrados. Representan el evento en una **matriz de actores contra tiempo**: qué hizo cada persona, equipo o sistema y en qué orden. Son adecuados para eventos con muchos participantes.

### Técnicas orientadas a sistemas y organizaciones

La norma también describe enfoques más amplios:

- **MORT**: un árbol de fallos predefinido que revisa sistemáticamente los controles y el sistema de gestión.
- **Tripod Beta**: un árbol que conecta el evento con fallas en las barreras y, detrás de ellas, con condiciones latentes de la organización.
- **AcciMap**: un mapa que distribuye los factores causales en niveles (equipo, operación, gestión, regulación).
- **CAST**: basado en el modelo STAMP, analiza el evento como una falla de control en un sistema sociotécnico.
- **SOL** (*Safety through Organizational Learning*): desarrollado en el ámbito nuclear, guiado por listas de factores.

En una planta típica rara vez se usan como técnica principal, pero son valiosos para incidentes graves en los que la pregunta de fondo es organizacional.

## Técnicas de apoyo: barreras y cambios

Dos análisis acompañan con frecuencia a las técnicas anteriores:

- **Análisis de barreras.** Identifica qué barreras físicas o administrativas (protecciones, alarmas, permisos de trabajo, procedimientos) debían impedir el evento y por qué fallaron o no existían. Encaja con el modelo del queso suizo de James Reason.
- **Análisis de cambios.** Compara la situación en la que ocurrió el evento con una situación similar en la que no ocurrió y busca las diferencias: un nuevo proveedor de repuestos, un cambio de turno, una modificación de proceso. Es muy eficaz cuando un equipo que funcionaba bien empieza a fallar.

## Tabla comparativa: cuándo usar cada técnica

| Técnica | Mejor para | Complejidad | Representa tiempo | Combinaciones Y/O | Limitación principal |
|---|---|---|---|---|---|
| 5 porqués | Fallas de equipo con evidencia clara | Baja | No | No | Tiende a una sola causa |
| WBA | Cadenas causales que deben probarse | Media | No | Parcial | Requiere disciplina en la prueba contrafactual |
| Ishikawa | Lluvia de ideas inicial | Baja | No | No | No prueba ni relaciona causas |
| Árbol de fallos | Eventos por combinación de fallas, sistemas redundantes | Media-alta | No | Sí | Laborioso en sistemas grandes |
| Árbol de causas (CTM) | Accidentes y eventos con factores humanos | Media | Parcial | Sí | Necesita buena recopilación de hechos |
| ECF | Reconstruir eventos que se desarrollan en el tiempo | Media | Sí | No | Describe más de lo que explica |
| MES / STEP | Eventos con muchos actores | Alta | Sí | No | Requiere mucha información |
| Análisis de barreras | Incidentes de seguridad y procesos | Baja-media | No | No | No explica por sí solo las causas profundas |
| Análisis de cambios | Equipos que empezaron a fallar "de repente" | Baja | Parcial | No | Necesita una referencia comparable |
| MORT, Tripod Beta, AcciMap, CAST | Incidentes graves con causas organizacionales | Alta | Variable | Variable | Exigen formación específica |

## Combinar técnicas

En la práctica, un buen RCA suele **encadenar dos o tres técnicas**:

- Falla de equipo con evidencia física: **análisis de cambios + 5 porqués** con bifurcaciones validadas.
- Parada de una línea con equipos redundantes: **ECF** para reconstruir la secuencia + **árbol de fallos** para entender por qué falló el respaldo.
- Incidente con lesión: **ECF + análisis de barreras + árbol de causas**.
- Problema crónico sin evento puntual: **Ishikawa** para abrir hipótesis + datos de historial para descartar.

Para eventos menores, sin embargo, no hace falta complicarse: un 5 porqués bien validado y documentado es mejor que un árbol a medio terminar.

Si estás estructurando el proceso completo, revisa los [pasos para hacer un análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz) y pon a prueba lo aprendido con el [quiz de 10 preguntas sobre análisis causa raíz](/blog/quiz-de-10-preguntas-sobre-analisis-causa-raiz-acr).

<cta-demo titulo="Elige la técnica, no la hoja de cálculo" texto="Documenta cada análisis con la técnica que elijas, su evidencia y sus acciones, vinculado al activo que falló." boton="Probar Reliaplant"></cta-demo>

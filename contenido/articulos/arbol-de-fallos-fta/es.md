titulo: Análisis por árbol de fallos (FTA) según la IEC 61025, con un ejemplo industrial
slug: analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025
resumen: Cómo construir un árbol de fallos según la IEC 61025: eventos, compuertas, conjuntos mínimos de corte y cálculo con un ejemplo de bombas.
---
Hay fallas que no se explican con una cadena de porqués. Una planta tiene dos bombas de agua de enfriamiento, una en servicio y otra de respaldo, y aun así un día se queda sin enfriamiento. La pregunta útil no es "¿por qué falló la bomba?", sino **"¿qué combinación de cosas tiene que pasar para perder el servicio?"**. Para eso existe el **análisis por árbol de fallos (FTA, *Fault Tree Analysis*)**.

En este artículo explicamos qué es el FTA, qué establece la norma **IEC 61025**, cómo se construye un árbol y cómo se analiza, cualitativa y cuantitativamente, con un ejemplo pequeño de una planta industrial.

## Qué es un árbol de fallos

El FTA es un método **deductivo y de arriba hacia abajo**. Se parte de un evento indeseado, el **evento tope**, y se descompone en las causas inmediatas que lo producen, luego en las causas de esas causas, hasta llegar a eventos que no se descomponen más. Las relaciones entre niveles se expresan con **compuertas lógicas**.

El método nació en los años sesenta en la industria aeroespacial estadounidense y hoy se usa en confiabilidad, seguridad de procesos y análisis de riesgos. Tiene dos usos principales:

- **En diseño o en análisis de riesgos**, para saber qué combinaciones de fallas llevan a un evento grave y cuál es su probabilidad.
- **En análisis causa raíz**, para ordenar las hipótesis de un evento ya ocurrido y descartar ramas con evidencia. Por eso la IEC 62740 lo incluye entre sus técnicas (ver [técnicas de análisis causa raíz según la IEC 62740](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015)).

## La norma IEC 61025

La **IEC 61025, *Fault tree analysis (FTA)***, es la norma internacional de referencia. Su edición vigente más conocida es la segunda, de 2006, elaborada por el comité IEC/TC 56 de confiabilidad. La norma:

- define los **principios del método** y cuándo es apropiado usarlo;
- establece **símbolos estándar** para eventos y compuertas;
- describe los pasos para **construir, analizar y documentar** el árbol;
- explica el **análisis cualitativo** (conjuntos mínimos de corte) y el **cuantitativo** (probabilidad del evento tope);
- advierte sobre limitaciones como las **fallas de causa común** y la dependencia entre eventos.

No es una norma de cálculo exhaustivo: da el marco y los símbolos para que dos analistas construyan árboles comparables.

## Elementos del árbol

### Eventos

| Evento | Qué representa |
|---|---|
| Evento tope | El evento indeseado que se analiza; va en la cima |
| Evento intermedio | Un resultado que se sigue descomponiendo |
| Evento básico | Una falla elemental que no se descompone (por ejemplo, falla del motor) |
| Evento no desarrollado | Una causa que no se detalla por falta de información o de relevancia |
| Evento externo o "casa" | Una condición que normalmente ocurre o no ocurre (por ejemplo, equipo en mantenimiento) |
| Transferencia | Indica que el árbol continúa en otra hoja |

### Compuertas

- **O (OR):** el evento de salida ocurre si ocurre **al menos uno** de los de entrada.
- **Y (AND):** el evento de salida ocurre solo si ocurren **todos** los de entrada. Es la compuerta típica de la redundancia.
- **Votación k de n:** ocurre si fallan al menos k de n entradas; por ejemplo, un sistema de disparo 2 de 3.
- **Inhibición:** la entrada produce la salida solo si se cumple una condición.

La norma incluye otros símbolos, pero con estas compuertas se resuelve la gran mayoría de los árboles industriales.

## Ejemplo: pérdida de agua de enfriamiento

**Sistema:** dos bombas centrífugas, P-101A y P-101B, en paralelo (una basta para el servicio), alimentan el intercambiador E-201. Ambas comparten un filtro de succión y una válvula de descarga, y sus motores están alimentados desde el mismo centro de control de motores, CCM-1.

**Evento tope:** "No hay caudal de enfriamiento a E-201 al arrancar la unidad."

```
[TOPE] Sin caudal de enfriamiento a E-201
 └─ O
    ├─ E1  Filtro de succión común obstruido
    ├─ E3  Válvula de descarga común cerrada por error
    └─ G2  Ninguna bomba entrega caudal
        └─ Y
           ├─ G3  P-101A no entrega caudal
           │   └─ O
           │      ├─ A1  Falla mecánica de P-101A
           │      ├─ A2  Falla del motor de P-101A
           │      └─ E2  Sin energía en CCM-1
           └─ G4  P-101B no entrega caudal
               └─ O
                  ├─ B1  Falla mecánica de P-101B
                  ├─ B2  Falla del motor de P-101B
                  └─ E2  Sin energía en CCM-1
```

Fíjate en que **E2 aparece en las dos ramas**. Eso no es un error de dibujo: es la forma correcta de mostrar que un mismo evento afecta a ambas bombas.

## Análisis cualitativo: conjuntos mínimos de corte

Un **conjunto de corte** es un grupo de eventos básicos que, si ocurren juntos, provocan el evento tope. Es **mínimo** si al quitarle cualquier evento deja de provocarlo.

Reduciendo el árbol con álgebra de Boole:

- G2 = (A1 + A2 + E2) · (B1 + B2 + E2) = E2 + (A1 + A2) · (B1 + B2)
- Tope = E1 + E3 + E2 + A1·B1 + A1·B2 + A2·B1 + A2·B2

Los conjuntos mínimos de corte son:

| Orden | Conjuntos mínimos de corte |
|---|---|
| 1 (un solo evento) | {E1}, {E2}, {E3} |
| 2 (dos eventos) | {A1, B1}, {A1, B2}, {A2, B1}, {A2, B2} |

La conclusión cualitativa ya es valiosa sin calcular nada: **la redundancia de bombas solo protege contra fallas propias de cada bomba**. El filtro común, la válvula común y la alimentación eléctrica común son **puntos únicos de falla** que anulan el respaldo. Esto es lo que un análisis de [criticidad de activos](/blog/analisis-de-criticidad-de-activos) suele pasar por alto si mira cada equipo por separado.

## Análisis cuantitativo

Si se asigna una probabilidad a cada evento básico, se puede estimar la del evento tope. Los valores siguientes son **ilustrativos**, como probabilidad de falla a la demanda en el arranque; en un caso real saldrían del historial de la planta o de bases de datos de confiabilidad.

| Evento | Probabilidad (ilustrativa) |
|---|---|
| E1 filtro obstruido | 0,002 |
| E2 sin energía en CCM-1 | 0,005 |
| E3 válvula cerrada | 0,001 |
| A1, B1 falla mecánica de cada bomba | 0,02 |
| A2, B2 falla del motor de cada bomba | 0,01 |

Con la **aproximación de eventos raros**, la probabilidad del tope es aproximadamente la suma de las probabilidades de los conjuntos mínimos de corte, y la de cada conjunto es el producto de sus eventos (si son independientes):

- Orden 1: 0,002 + 0,005 + 0,001 = 0,008
- Orden 2: (0,02 + 0,01) × (0,02 + 0,01) = 0,0009
- **Total ≈ 0,0089**

Los tres puntos únicos de falla aportan alrededor del 90 % del riesgo y la alimentación eléctrica común, por sí sola, más de la mitad. Invertir en una tercera bomba casi no movería el resultado; **alimentar cada bomba desde un CCM distinto** sí.

Para que el cálculo sea creíble hace falta tener en cuenta:

- **Independencia.** El producto A·B supone que las bombas fallan de forma independiente. Si comparten lubricante, fluido sucio o un mismo error de mantenimiento, existe una falla de causa común que debe modelarse aparte.
- **Coherencia de unidades.** No se pueden mezclar probabilidades a la demanda con tasas de falla por hora sin convertirlas. Si trabajas con tasas, conviene repasar [MTBF, MTTR y disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos).
- **Calidad de los datos.** Un árbol bien construido con datos inventados da una falsa precisión. A menudo el resultado cualitativo es más útil que el número.

## FTA en un análisis causa raíz

Cuando el evento ya ocurrió, el árbol se usa de otra manera: se construye con todas las hipótesis razonables y luego **se poda con evidencia**. Si los registros muestran que CCM-1 estuvo energizado, la rama E2 se descarta; si el filtro se encontró limpio, se descarta E1. Lo que queda son las causas compatibles con los hechos, que luego se profundizan con 5 porqués u otra técnica. Este enfoque encaja con el proceso de la [norma IEC 62740](/blog/estandar-para-el-analisis-causa-raiz-bs-en-62740), que exige validar cada causa.

## Errores frecuentes

- **Evento tope vago.** "Falla del sistema" no sirve; hay que definir qué, dónde y en qué condición.
- **Saltar niveles.** Pasar del tope a componentes sin eventos intermedios oculta la lógica.
- **Nombrar eventos como estados ambiguos.** Cada evento debe ser una falla concreta: "motor no arranca", no "motor".
- **Ignorar las causas comunes.** Es exactamente lo que el ejemplo muestra: la redundancia aparente puede no existir.
- **Mezclar el árbol con el AMEF.** El AMEF va de componentes a efectos; el FTA va del efecto a sus causas. Se complementan, y ambos alimentan el [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).

<cta-demo titulo="Encuentra tus puntos únicos de falla" texto="Analiza fallas de sistemas redundantes y registra sus causas sobre la jerarquía real de tus activos." boton="Probar Reliaplant"></cta-demo>

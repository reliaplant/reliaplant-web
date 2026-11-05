titulo: Términos y definiciones del análisis causa raíz: glosario alineado con ISO 14224, IEC 60050-192 y BS EN 62740
slug: terminos-y-definiciones-analisis-causa-raiz
resumen: Glosario del análisis causa raíz: falla, modo, mecanismo, causa física, humana y latente, causa raíz, evento focal y más, según las normas de referencia.
---
Buena parte de las discusiones en un análisis causa raíz no son técnicas sino de vocabulario. Uno dice "falla" y piensa en el evento, otro piensa en el componente roto; uno llama "causa" a la corrosión y otro a la falta de un plan de inspección. Si el equipo no comparte las definiciones, el árbol de causas se mezcla y los datos de fallas que se registran en el sistema de mantenimiento no sirven para comparar.

Este glosario reúne los términos que más se usan en un RCA y los alinea, donde aplica, con tres normas de referencia:

- **IEC 60050-192**: el Vocabulario Electrotécnico Internacional, parte de confiabilidad (*dependability*).
- **ISO 14224**: recolección e intercambio de datos de confiabilidad y mantenimiento, base de la [taxonomía de activos](/blog/taxonomia-de-activos-iso-14224).
- **BS EN 62740:2015**: análisis causa raíz. Puedes ver su alcance en el artículo sobre el [estándar BS EN 62740](/blog/estandar-para-el-analisis-causa-raiz-bs-en-62740).

Las definiciones están parafraseadas en español; cuando un término no proviene de estas normas, lo indicamos.

## Términos sobre la falla

### Ítem

Cualquier elemento que se esté considerando: una pieza, un componente, un equipo, un subsistema o un sistema completo. Es el término genérico de la IEC 60050-192 y la BS EN 62740. Antes de hablar de una falla hay que decir **en qué ítem** ocurre, y la jerarquía de la ISO 14224 ayuda a ubicarlo en el nivel correcto.

### Falla

**Pérdida de la capacidad de un ítem para desempeñarse como se requiere** (IEC 60050-192). La falla es un **evento**: ocurre en un momento dado. Puede ser total (la bomba no impulsa) o parcial (impulsa por debajo del caudal requerido).

### Avería o estado de falla

**Incapacidad de un ítem para desempeñarse como se requiere debido a un estado interno** (en inglés, *fault*, en la IEC 60050-192). Es un **estado**, no un evento: después de una falla, el ítem queda averiado hasta que se repara. Distinguir falla (evento) de avería (estado) evita confusiones al calcular tiempos de reparación y [disponibilidad](/blog/mtbf-mttr-disponibilidad-como-calcularlos).

### Falla funcional

Estado en el que un activo no cumple una función específica al nivel de desempeño deseado. Es el término del RCM ([SAE JA1011](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011)) y exige que las funciones estén definidas con números: si la función es bombear 800 L/min, entregar 600 L/min es una falla funcional aunque la bomba siga girando.

### Falla potencial

Condición identificable que indica que una falla funcional está por ocurrir o en proceso de ocurrir: un aumento de vibración, partículas metálicas en el aceite, un punto caliente en una termografía. Es el concepto en el que se basa la [curva P-F](/blog/mantenimiento-predictivo-curva-p-f) del mantenimiento predictivo.

### Falla oculta

Falla que no se hace evidente para los operadores en condiciones normales de operación, típica de dispositivos de protección y equipos de respaldo. Es un término del RCM, no de las normas citadas arriba.

## Modo, mecanismo y causa

Estos tres términos son los que más se confunden y los que más importan para registrar datos útiles.

| Término | Pregunta que responde | Ejemplo en una bomba |
|---|---|---|
| Modo de falla | ¿Cómo se observa la falla? | Fuga externa del fluido de proceso |
| Mecanismo de falla | ¿Qué proceso físico o químico la produjo? | Desgaste de las caras del sello mecánico |
| Causa de falla | ¿Qué circunstancia llevó a ese mecanismo? | Operación en seco durante el arranque |

### Modo de falla

**Manera en que se manifiesta u observa la falla en el ítem** (ISO 14224; la IEC 60050-192 lo define como la manera en que ocurre la falla). Ejemplos: no arranca, vibración, fuga externa, sobrecalentamiento, salida baja. Es lo primero que se registra y lo que el técnico ve; no es todavía una explicación.

### Mecanismo de falla

**Proceso físico, químico u otro que conduce a la falla** (IEC 60050-192 e ISO 14224). Ejemplos: fatiga, corrosión, erosión, desgaste, sobrecarga, cortocircuito. La ISO 14224 agrupa los mecanismos en categorías como mecánicos, de material, eléctricos, de instrumentación e influencias externas.

### Causa de falla

**Circunstancias asociadas al diseño, la fabricación, la instalación, el uso o el mantenimiento que llevaron a la falla.** La ISO 14224 trata "causa de falla" y "causa raíz" como equivalentes y las agrupa en categorías como causas de diseño, de fabricación o instalación, de operación o mantenimiento y de gestión. En la práctica del RCA conviene separar la causa en los tres niveles siguientes.

## Niveles de causa en la práctica del RCA

La clasificación en causa física, humana y latente es habitual en las metodologías de RCA aplicadas a mantenimiento, pero **no está definida en la IEC 60050-192 ni en la ISO 14224**. Es muy útil porque cada nivel se corrige de manera distinta.

### Causa física

La condición o el mecanismo tangible que produjo directamente la falla: el rodamiento fatigado por desalineación, el eje fracturado por fatiga, el devanado quemado por sobrecorriente. Se identifica inspeccionando el componente y se corrige reparando o reemplazando.

### Causa humana

La acción u omisión de una persona que activó la causa física: un montaje sin alineación, un ajuste fuera de especificación, una lubricación con el producto equivocado. Se relaciona con el **error humano**, que la BS EN 62740 describe como la diferencia entre la acción humana realizada u omitida y la que se pretendía o se requería. Identificarla no es buscar un culpable, sino entender qué decisión se tomó y por qué parecía razonable en ese momento.

### Causa latente

La deficiencia del sistema de gestión que hizo posible la causa humana: procedimientos ausentes o incompletos, formación insuficiente, falta de herramientas, presión de producción, diseño que facilita el error. Las causas latentes suelen afectar a muchos equipos a la vez, por eso corregirlas es lo que más valor genera.

## Términos de la BS EN 62740

### Evento

Ocurrencia o cambio de un conjunto particular de circunstancias. La misma definición se usa en la gestión de riesgos (ISO 31000).

### Evento focal

El evento que se quiere explicar causalmente; en inglés, *focus event*. En español también se lo llama evento principal o evento clave. Debe describirse de forma breve, con contexto y sin sugerir causas.

### Causa

Circunstancia o conjunto de circunstancias que conduce a una falla o a un éxito. La norma admite analizar también eventos positivos.

### Factor causal

Condición, acción, evento o estado que fue necesario o contribuyó a que ocurriera el evento focal.

- **Factor causal necesario**: aquel sin el cual el evento no habría ocurrido.
- **Factor causal inmediato**: aquel entre el cual y el evento focal no hay ningún otro factor causal.
- **Factor contributivo**: condición, acción, evento o estado considerado secundario en la ocurrencia del evento focal; su eliminación cambia la probabilidad o la gravedad, pero no necesariamente evita el evento.

### Causa raíz

**Factor causal sin predecesor que sea relevante para el propósito del análisis.** La definición es deliberadamente relativa: la causa raíz depende de hasta dónde decidimos llegar. Un evento puede tener varias causas raíz.

### Regla de detención

Criterio razonado y explícito para decidir cuándo un factor causal se considera causa raíz. Un ejemplo frecuente: detenerse cuando la causa queda fuera del control de la organización, o cuando ya se puede definir una acción efectiva sobre ella.

### Parte interesada

Persona u organización que puede afectar, verse afectada o percibir que se ve afectada por una decisión o actividad.

## Otros términos útiles

### Consecuencia

Resultado de un evento que afecta los objetivos (ISO 31000). En mantenimiento se clasifica según su impacto en seguridad, ambiente, producción y costo, y es la base del [análisis de criticidad](/blog/analisis-de-criticidad-de-activos).

### Análisis causa raíz (RCA o ACR)

Proceso sistemático para identificar las causas de un evento focal (BS EN 62740). Ver [fundamentos del análisis causa raíz](/blog/fundamentos-del-analisis-causa-raiz) y [pasos para hacer un análisis causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz).

### Acción correctiva

Acción para eliminar la causa de un problema detectado y evitar que se repita. Se diferencia de la **corrección**, que solo elimina el problema puntual (cambiar el rodamiento), y de la **acción preventiva**, que actúa sobre una causa potencial antes de que el problema ocurra.

## Abreviaturas frecuentes

| Sigla | Inglés | Español |
|---|---|---|
| RCA | Root cause analysis | Análisis causa raíz |
| FTA | Fault tree analysis | Análisis por árbol de fallos ([IEC 61025](/blog/analisis-por-arbol-de-fallos-fta-y-la-norma-iec-61025)) |
| FMEA | Failure mode and effects analysis | Análisis de modos y efectos de falla (AMEF) |
| ECF | Events and causal factors | Eventos y factores causales |
| MORT | Management oversight and risk tree | Árbol de supervisión de la gestión y riesgos |
| STAMP | Systems-theoretic accident model and processes | Modelo de accidentes basado en teoría de sistemas |
| CAST | Causal analysis based on STAMP | Análisis causal basado en STAMP |
| HFACS | Human factors analysis and classification system | Sistema de análisis y clasificación de factores humanos |
| WBA | Why-because analysis | Análisis por qué-porque |

Para ver cuándo usar cada técnica, revisa la [guía de técnicas según la BS EN 62740](/blog/tecnicas-de-analisis-causa-raiz-guia-basada-en-la-norma-bs-en-62740-2015). Y si vas a construir tu propia lista de modos y causas, el artículo sobre [cómo elaborar un catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo) muestra cómo hacerlo.

<cta-demo titulo="Un mismo vocabulario para todas tus fallas" texto="Registra cada falla con modo, mecanismo y causa según catálogos alineados con la ISO 14224, y compara datos entre equipos y plantas." boton="Probar Reliaplant"></cta-demo>

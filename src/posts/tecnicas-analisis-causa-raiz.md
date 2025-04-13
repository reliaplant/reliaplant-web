---
title: "Técnicas de Análisis Causa Raíz: Guía Basada en la Norma BS EN 62740:2015"
date: "2022-03-03"
categories: "articulo"
tags: "entrevista"
---

El análisis de causa raíz (RCA, por sus siglas en inglés) es una metodología esencial para identificar las causas fundamentales de problemas, fallos o eventos no deseados en cualquier ámbito, desde la industria hasta la gestión de proyectos. La norma **BS EN 62740:2015** establece los principios y técnicas para realizar RCA de manera sistemática y efectiva. En este artículo, exploraremos las principales técnicas respaldadas por esta norma, su aplicación práctica y cómo contribuyen a la mejora continua.  


## 1. ¿Qué es el Análisis de Causa Raíz?  
Según la norma BS EN 62740:2015, el RCA es un **proceso sistemático** para identificar los factores que contribuyeron a un evento focal (éxito o fallo), con el fin de prevenir su recurrencia o replicar resultados positivos. A diferencia de abordar solo síntomas, el RCA busca causas subyacentes, como errores en diseño, procesos organizacionales o factores humanos (Sección 1 de la norma).  

> **Cita clave**:  
> *"El RCA tiene como objetivo revelar las causas raíz para que, o bien la probabilidad de que ocurran, o su impacto si ocurren, pueda ser modificado"* (Introducción, p. 8).  


## 2. Técnicas de RCA según la Norma BS EN 62740:2015  
La norma detalla múltiples técnicas, cada una con sus fortalezas y contextos de aplicación. A continuación, las más relevantes:  


| Técnica                                         | Descripción |
|-------------------------------------------------|-------------|
| **Eventos y factores causales (ECF) charting**  | El análisis ECF identifica la secuencia temporal de una serie de tareas y/o acciones y las condiciones circundantes que conducen a un evento focal. Estos se muestran en un diagrama de causa-efecto. |
| **Secuenciación de eventos multilineales (MES) y trazado de eventos secuencialmente cronometrados (STEP)** | MES y STEP son métodos de recopilación de datos y seguimiento para el análisis de eventos focales complejos. Los resultados se muestran como una matriz de tiempo-actores de eventos. |
| **Método del ‘por qué’**                        | El método del "por qué" guía el análisis a través de la cadena causal haciendo la pregunta "¿por qué?" varias veces. |
| **Método del árbol de causas (CTM)**            | CTM es una técnica sistemática para analizar y representar gráficamente los eventos y condiciones que contribuyeron a un evento focal. CTM es similar al método del "por qué" en concepto, pero construye un árbol más complejo y considera explícitamente causas técnicas, organizacionales, humanas y ambientales. |
| **Análisis por qué-porque (WBA)**               | WBA establece la red de factores causales responsables de un evento focal mediante una comparación de dos factores, la prueba contrafactual. La red de factores se muestra en un gráfico "por qué-porque". |
| **Árbol de fallas y árbol de éxito**            | El árbol de fallas o de éxito es una representación gráfica de información para ayudar al usuario a realizar un análisis deductivo y determinar rutas críticas para el éxito o el fracaso. Se presentan en forma de diagrama lógico en árbol. |
| **Diagrama de espina de pescado o Ishikawa**    | El diagrama de espina de pescado o Ishikawa es una técnica que ayuda a identificar, analizar y presentar las posibles causas de un evento focal. Ilustra la relación entre el evento y todos los factores que pueden influir en él. |
| **Seguridad a través del aprendizaje organizacional (SOL)** | SOL es una herramienta de análisis basada en listas de verificación, orientada a eventos focales en centrales nucleares. Los resultados se presentan en forma visual de un diagrama tiempo-actor, derivado del método MES/STEP. |
| **Supervisión de gestión y árbol de riesgos (MORT)** | El diagrama MORT es un árbol de fallas predefinido con eventos, generalmente fallos u omisiones, expresados en términos generales. Contiene dos ramas principales y múltiples subramas con un alto nivel de detalle. Una de las ramas identifica alrededor de 130 factores de control específicos, mientras que la otra identifica más de 100 factores del sistema de gestión. Además, contiene otros 30 factores del sistema de información comunes a ambas ramas. |
| **AcciMaps**                                    | AcciMaps es principalmente una técnica para visualizar los resultados de un análisis causal. Requiere un modelo organizacional para separar los factores en capas y extraer los factores dentro de estas capas. Aplica una versión de la prueba contrafactual (ver WBA) para determinar las relaciones causales entre los factores. |
| **Tripod Beta**                                 | Tripod Beta es una representación en diagrama de árbol de la red causal, enfocándose en factores humanos y buscando fallos en la organización que puedan causar errores humanos. |
| **Análisis causal para el modelo y proceso de accidentes teóricos de sistemas (STAMP) (CAST)** | CAST es una técnica que examina todo el proceso socio-técnico involucrado en un evento focal. CAST documenta el proceso dinámico que lleva al evento, incluyendo la estructura de control socio-técnico y las restricciones que fueron violadas en cada nivel de la estructura de control. |



### 2.1. Diagrama de Ishikawa (Espina de Pescado)  
 
Esta técnica visual, desarrollada por Kaoru Ishikawa, organiza posibles causas en categorías como Métodos, Máquinas, Personas, Materiales y Medio Ambiente. Es ideal para sesiones de lluvia de ideas.  

![Diagrama de Ishikawa](/imgs/tecnicas-analisis-causa-raiz/diagrama-ishiwaka.png)


**Pasos**:  
1. Define el evento focal en la "cabeza" del pez.  
2. Traza categorías principales como "espinas".  
3. Identifica causas específicas dentro de cada categoría.  

**Fortalezas**:  
- Fomenta la participación grupal.  
- Visualiza relaciones entre factores (Anexo C.8).  

**Limitaciones**:  
- Subjetivo si no se valida con datos.  

**Ejemplo práctico**:  
En un fallo de producción, el equipo podría identificar "falta de capacitación" (Personas) o "mantenimiento inadecuado" (Máquinas) como causas.  


### 2.2. Método de los "5 Porqués"  
 
Una técnica simple que consiste en preguntar "¿por qué?" sucesivamente hasta llegar a la causa raíz. Aunque se sugiere hacerlo cinco veces, el número varía según la complejidad.  

**Ejemplo (Anexo C.4)**:  
- **Evento**: Máquina detenida.  
  1. ¿Por qué? → Sobrecalentamiento.  
  2. ¿Por qué? → Ventilador obstruido.  
  3. ¿Por qué? → Falta de limpieza programada.  
  4. ¿Por qué? → No hay procedimiento de mantenimiento.  
  5. ¿Por qué? → Falta de supervisión.  

**Fortalezas**:  
- Rápido y fácil de aplicar.  
- No requiere herramientas especializadas.  

**Limitaciones**:  
- Riesgo de simplificar causas complejas.  


### 2.3. Árbol de Causas (CTM)  
 
El *Causes Tree Method* (CTM) construye un diagrama jerárquico que vincula eventos y condiciones necesarias para el evento focal. Usa lógica secuencial (AND/OR) para modelar relaciones (Anexo C.5).  

**Pasos**:  
1. Define el evento focal.  
2. Identifica causas inmediatas y sus predecesores.  
3. Valida con evidencia.  

**Ejemplo (Figura C.6)**:  
En un accidente laboral, el árbol podría mostrar desde "falta de equipo de protección" hasta "políticas de seguridad insuficientes".  

**Fortalezas**:  
- Estructura clara para análisis complejos.  
- Integra factores técnicos, humanos y organizacionales.  


### 2.4. Análisis de Barreras  
 
Identifica barreras físicas o administrativas que fallaron o estuvieron ausentes, permitiendo que una fuente de daño impactara en un objetivo (Anexo B.2).  

**Ejemplo (Tabla B.2)**:  
- **Barrera fallida**: Procedimiento de apagado de máquinas no seguido.  
- **Causa raíz**: Etiquetado confuso en los controles.  

**Fortalezas**:  
- Enfocado en prevención.  
- Útil en entornos de alto riesgo (ej.: plantas químicas).  


### 2.5. Modelo de Reason (Queso Suizo)  
 
Propuesto por James Reason, este modelo compara las defensas de un sistema con "rebanadas de queso suizo". Los fallos ocurren cuando los agujeros (errores latentes) se alinean (Anexo B.3).  

**Aplicación**:  
- **Errores activos**: Acciones inmediatas (ej.: operador presiona botón incorrecto).  
- **Errores latentes**: Fallos en gestión o diseño (ej.: procedimientos ambiguos).  

> **Cita**:  
> *"Los fallos surgen de la interacción de debilidades en los elementos del sistema"* (Anexo B.3.1).  


### 2.6. Análisis de Árbol de Fallos (FTA)  
 
Técnica deductiva que utiliza puertas lógicas (AND/OR) para explorar combinaciones de fallos que llevan al evento focal. Es común en ingeniería de confiabilidad (Anexo C.7).  

**Ejemplo**:  
En un apagón eléctrico, el FTA podría rastrear fallos en transformadores, sobrecargas o errores humanos.  

**Fortalezas**:  
- Cuantifica probabilidades de fallo.  
- Identifica puntos críticos.  

**Limitaciones**:  
- Requiere expertise técnico.  


## 3. Técnicas Avanzadas y Modelos Sistemáticos  

### 3.1. STAMP (Modelo Teórico de Accidentes y Procesos de Sistemas)  
 
STAMP analiza sistemas socio-técnicos complejos, centrándose en restricciones de seguridad violadas y fallos en estructuras de control (Anexo B.5).  

**Ejemplo (Figura C.13)**:  
En la contaminación de un suministro de agua, STAMP examinaría desde operadores locales hasta políticas gubernamentales.  

**Fortalezas**:  
- Aborda causas organizacionales y técnicas.  
- Ideal para sistemas críticos (ej.: aviación, energía).  


### 3.2. Tripod Beta  
 
Combina el modelo de Reason con análisis de barreras. Clasifica causas en errores humanos, precondiciones y fallos organizacionales (Anexo C.12).  

**Pasos**:  
1. Identifica agentes de daño (ej.: energía eléctrica).  
2. Analiza barreras fallidas.  
3. Rastrea hasta factores latentes (ej.: cultura de seguridad deficiente).  


### 3.3. Análisis de Factores Humanos (HFACS)  
 
Clasifica errores humanos en cuatro niveles: actos inseguros, precondiciones, supervisión e influencias organizacionales (Anexo E.4).  

**Ejemplo (Figura E.3)**:  
Un error médico podría vincularse a fatiga (precondición) y falta de capacitación (organizacional).  


## 4. Cómo Elegir la Técnica Adecuada  
La norma BS EN 62740:2015 enfatiza que la selección depende de:  
1. **Complejidad del evento**: Técnicas como STAMP o CTM son ideales para sistemas complejos.  
2. **Disponibilidad de datos**: El método de los "5 porqués" requiere menos evidencia que un FTA.  
3. **Objetivo del análisis**: ¿Prevención, mejora o cumplimiento normativo?  

> **Cita**:  
> *"El análisis debe ser trazable, repetible y verificable"* (Sección 6.2).  


## 5. Mejores Prácticas según la Norma  
- **Validación rigurosa**: Asegurar que las causas identificadas sean necesarias y suficientes (Sección 5.5).  
- **Enfoque sistémico**: Considerar interacciones entre personas, tecnología y organización.  
- **Acciones correctivas**: Deben abordar causas raíz sin introducir nuevos riesgos (Sección 5.6).  


## 6. Conclusión  
El análisis de causa raíz es una herramienta poderosa para transformar problemas en oportunidades de mejora. La norma **BS EN 62740:2015** no solo estandariza las técnicas, sino que también promueve un enfoque estructurado y basado en evidencia. Ya sea mediante un sencillo diagrama de Ishikawa o un modelo complejo como STAMP, la clave está en adaptar la técnica al contexto y validar rigurosamente los hallazgos.  

**Referencias**:  
- *BS EN 62740:2015 – Root cause analysis (RCA)*.  
- *Ishikawa, K. (1986). Guide to Quality Control*.  
- *Reason, J. (1990). Human Error*.  

Al integrar estas técnicas en tu organización, no solo resolverás problemas de manera efectiva, sino que también cultivarás una cultura de aprendizaje y mejora continua.


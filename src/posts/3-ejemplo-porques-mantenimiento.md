---
title: "Ejemplo de los 5 Porqués en Mantenimiento"
date: "2022-03-03"
categories: "articulo"
tags: "Análisis causa raíz"
---

## Metodo de los 5 porqués

El método de los 5 porqués es una herramienta fundamental en el análisis de causa raíz (RCA) para identificar fallas recurrentes en equipos industriales. Aunque su nombre sugiere un número fijo de preguntas, su aplicación es flexible y se adapta a la complejidad del problema, como lo establece la norma **BS EN 62740:2015**. 


### Paso 1: Definición del Problema  
La claridad en la descripción del problema es crítica. Debe incluir:  
- **Qué**: Tipo de falla (ej: apagado repentino, sobrecalentamiento).  
- **Cuándo**: Frecuencia y condiciones operativas (ej: turno nocturno).  
- **Dónde**: Ubicación del equipo y componentes afectados.  
- **Impacto**: Pérdidas económicas o de productividad.  

**Ejemplo**:  
*"El motor de una bomba centrífuga se apaga dos veces por semana durante el turno nocturno, causando 4 horas de downtime y pérdidas de $12,000 mensuales."*  

### Paso 2: Cadena de Porqués y Bifurcaciones  
Según la norma **BS EN 62740:2015**, cada respuesta debe validarse con datos técnicos (ej: registros de sensores, inspecciones). Las bifurcaciones son necesarias cuando una causa intermedia genera múltiples líneas de investigación.  

### Paso 3: Evaluación de Soluciones
Identifica las causas raíz, propone soluciones y evalúa su viabilidad con criterios como:  
- **Impacto**: Reducción de fallas o costos (escala 1-5, donde 5 es alto impacto).  
- **Esfuerzo**: Recursos y tiempo necesarios (escala 1-5, donde 5 es alto esfuerzo).  
- **Retorno de Inversión (ROI)**: Beneficio económico vs. costo de implementación.  

**Acción:** Prioriza soluciones usando una **matriz de impacto-esfuerzo**. Esta herramienta visual clasifica las soluciones en cuatro cuadrantes según su puntaje (Impacto × Esfuerzo), ayudando a decidir qué implementar primero. Calcula el ROI con datos reales (downtime, repuestos) para respaldar la decisión.

#### Matriz de Impacto-Esfuerzo
A continuación, se muestra una matriz genérica para clasificar soluciones. Los colores indican prioridades:  
- **Verde**: Alta prioridad (alto impacto, bajo esfuerzo).  
- **Amarillo**: Prioridad media (alto impacto, esfuerzo moderado o impacto moderado, bajo esfuerzo).  
- **Rojo**: Baja prioridad (bajo impacto o alto esfuerzo).  

| **Impacto \ Esfuerzo** | **1 (Bajo)**         | **3 (Medio)**        | **5 (Alto)**         |
|-------------------------|----------------------|----------------------|----------------------|
| **5 (Alto)**           | Amarillo (5)         | Amarillo (15)        | Rojo (25)            |
| **3 (Medio)**          | Verde (3)            | Amarillo (9)         | Rojo (15)            |
| **1 (Bajo)**           | Verde (1)            | Amarillo (3)         | Rojo (5)             |

**Interpretación:**  
- **Puntaje 1-5 (Verde):** Implementar de inmediato; soluciones rápidas con beneficios notables.  
- **Puntaje 6-10 (Amarillo):** Evaluar recursos disponibles; viables si hay capacidad.  
- **Puntaje 11-25 (Rojo):** Considerar solo si no hay opciones mejores; requieren justificar el esfuerzo.  

**Ejemplo práctico:**  
- Solución: "Implementar checklist digital" (Impacto: 5, Esfuerzo: 2). Puntaje: 10 (Amarillo). Acción: Implementar si hay presupuesto.  
- Solución: "Capacitar a todo el personal" (Impacto: 3, Esfuerzo: 5). Puntaje: 15 (Rojo). Acción: Posponer a menos que sea crítico.

**Nota:** En entornos digitales, aplica colores usando CSS (ej: `background-color: green` para puntajes bajos) o herramientas como Excel para visualización en reuniones.

## **Ejemplo aplicado a un motor**  

### **Cadena de Porqués**  

| **Pregunta**                        | **Respuesta Validada**                     | **Evidencia**                          | **Referencia**                      |  
|-------------------------------------|--------------------------------------------|----------------------------------------|--------------------------------------|  
| **1. ¿Por qué se apaga el motor?**  | Sistema de protección detecta alta temperatura. | Registros térmicos del PLC (máx. 120°C vs. 80°C nominal). | - |  
| **2. ¿Por qué sube la temperatura?**| Flujo de aire restringido.                 | Termografía muestra diferencia de 15°C entre entrada/salida del radiador. | - |  
| **3. ¿Por qué está restringido el flujo?** | Radiador cubierto de polvo y residuos. | Inspección visual: acumulación de 3 mm de suciedad en aletas. | - |  
| **4. ¿Por qué está sucio el radiador?** | Filtro de aire dañado.               | Filtro presenta fisuras (5 cm de longitud) y deformación térmica. | **Ver bifurcaciones ↓** |  
| **Bifurcación 1**                  | Filtro no se cambió                        | [Enlace a Tabla B1](#tabla-b1-filtro-no-cambiado) | |  
| **Bifurcación 2**                  | Filtro incorrecto instalado                | [Enlace a Tabla B2](#tabla-b2-filtro-incorrecto) | |  

---

### **Bifurcación 1 - Filtro no se cambió**
| **Pregunta**                        | **Respuesta Validada**                     | **Evidencia**                          |  
|-------------------------------------|--------------------------------------------|----------------------------------------|  
| **5. ¿Por qué no se cambió el filtro?** | No estaba en el plan de mantenimiento. | Checklist de PM omitía la tarea "Revisión de filtros". |  
| **6. ¿Por qué se omitió la tarea?** | Falta de estandarización en procedimientos. | Comparación con manual OEM: sección 4.2 exige revisión trimestral. |  
| **7. ¿Por qué no se estandarizó?**  | Documentación desactualizada desde 2022.   | Versión del manual en planta: Rev. 3 (actual es Rev. 7). |  
| **Causa Raíz 1**: Sistema de gestión documental obsoleto. | **Solución**: Implementar control de versiones digital. |  

---

### **Bifurcación 2 - Filtro incorrecto instalado**
| **Pregunta**                        | **Respuesta Validada**                     | **Evidencia**                          |  
|-------------------------------------|--------------------------------------------|----------------------------------------|  
| **5. ¿Por qué se instaló un filtro incorrecto?** | El técnico usó un modelo no homologado. | Etiqueta del filtro: "AF-203" (requerido: "AF-205"). |  
| **6. ¿Por qué eligió ese modelo?**  | Lista de repuestos no estaba actualizada.  | Lista en taller incluía códigos descontinuados. |  
| **7. ¿Por qué la lista estaba desactualizada?** | No hay responsable de actualizar inventario. | Entrevista con jefe de almacén: "No hay asignación formal". |  
| **Causa Raíz 2**: Falta de roles definidos para gestión de repuestos. | **Solución**: Designar un coordinador de inventario técnico. |  

### Identificación de Causas Raíces y Priorización 

| **Causa Raíz**                          | **Impacto (1-5)** | **Esfuerzo (1-5)** | **Prioridad (Impacto × Esfuerzo)** |  
|-----------------------------------------|-------------------|--------------------|------------------------------------|  
| Sistema de gestión documental obsoleto  | 5                 | 3                  | **15** (Crítica)                  |  
| Falta de roles en gestión de repuestos  | 4                 | 2                  | **8** (Alta)                      |  

**Escala de Prioridad**:  
- 1-5: Baja | 6-10: Media | 11-15: Crítica  


### **Evaluación Detallada del ROI por Solución**  

#### **Solución 1: Control de versiones digital**  
| **Parámetro**         | **Valor**                     | **Cálculo**                        |  
|-----------------------|-------------------------------|------------------------------------|  
| Costo inicial         | $8,000 (Software + capacitación) | -                                 |  
| Beneficio anual        | $24,000                       | 4 paradas/mes × $500/hr × 12 meses |  
| ROI                   | **200%**                      | \((24,000 - 8,000)/8,000 × 100\)  |  

#### **Solución 2: Coordinador de inventario técnico**  
| **Parámetro**         | **Valor**                     | **Cálculo**                        |  
|-----------------------|-------------------------------|------------------------------------|  
| Costo inicial         | $15,000 (Salario anual)       | -                                 |  
| Beneficio anual        | $45,000                       | $30,000 (repuestos) + $15,000 (productividad) |  
| ROI                   | **200%**                      | \((45,000 - 15,000)/15,000 × 100\)|  


### **Criterios de Evaluación del ROI**  
1. **Beneficios Cuantificables**:  
   - Reducción de downtime (USD/hora).  
   - Ahorro en compras de repuestos.  
   - Incremento de productividad (horas recuperadas).  

2. **Supuestos Clave**:  
   - Precio promedio de downtime: $500/hr (según datos históricos).  
   - Tasa de error en repuestos: 25% → 5% post-implementación.  


## Ejemplo Aplicado a una Torre de Enfriamiento (Sin Bifurcaciones)  

### **Definición del Problema**  
*"La temperatura del agua de proceso supera los 45°C (límite: 40°C) cada 72 horas, reduciendo la eficiencia del sistema en un 30%."*  


### **Cadena de 5 Porqués Lineal**  
| **Pregunta**                        | **Respuesta Validada**                     | **Evidencia**                          | **Norma BS EN 62740:2015**          |  
|-------------------------------------|--------------------------------------------|----------------------------------------|--------------------------------------|  
| **1. ¿Por qué sube la temperatura?**| Flujo de agua insuficiente en la torre.    | Caudalímetro: 200 m³/h (requerido: 300 m³/h). | Sección 5.3 (Recolección de datos) |  
| **2. ¿Por qué hay flujo insuficiente?** | Bomba de circulación opera al 60% de capacidad. | Análisis de vibración: cojinete desgastado. | Anexo C.7 (Análisis de fallas técnicas) |  
| **3. ¿Por qué falló el cojinete?**  | Lubricación inadecuada.                    | Muestra de aceite: contaminación por partículas (ISO 4406: 22/19/15). | Sección 5.4.1 (Validación técnica) |  
| **4. ¿Por qué no se lubricó bien?** | Mantenimiento preventivo omitido.          | Historial de mantenimiento: última lubricación hace 8 meses (debe ser trimestral). | Anexo C.4 (Método del porqué) |  
| **5. ¿Por qué se omitió el mantenimiento?** | Falta de checklist estandarizado.         | Procedimiento escrito no incluye lubricación de bombas. | Sección 6.2 (Gestión documental) |  

**Causa Raíz Única**: Ausencia de procedimientos formalizados para mantenimiento de bombas.  

---

### **Solución y ROI Estimado**  
| **Solución**                            | **Costo (USD)** | **Beneficio Anual (USD)** | **ROI (%)**                      |  
|-----------------------------------------|-----------------|---------------------------|----------------------------------|  
| Implementar checklist digital para bombas | 5,000           | 18,000 (Ahorro energético + productividad) | **(18,000 - 5,000)/5,000 × 100 = 260%** |  

**Cálculo Detallado**:  
- **Beneficio**:  
  - 15% reducción consumo energético: $12,000/año.  
  - 120 horas/año recuperadas: $6,000 (a $50/hora).  
- **Costo**: Software + capacitación.  

---

## Conclusión  
El método de los **5 porqués** se consolida como una herramienta 100% válida para el análisis de fallas en equipos industriales, tal como lo respalda la **norma BS EN 62740:2015**. Su simplicidad no limita su eficacia: incluso en problemas complejos, como el caso del motor con múltiples bifurcaciones, permite desentrañar causas raíz ocultas tras validar rigurosamente cada eslabón de la cadena causal con datos técnicos (termografías, análisis de aceite, registros históricos).  





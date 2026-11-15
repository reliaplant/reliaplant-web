titulo: Jerarquía de activos en el CMMS: ubicación técnica y equipo
slug: jerarquia-de-activos-ubicacion-tecnica-y-equipo
resumen: Cómo armar la jerarquía de activos en tu CMMS: niveles, ubicación técnica frente a equipo, ejemplo de reemplazo, errores y checklist de calidad.
imagenAlt: Cuadrilla de técnicos con casco y tableta recorre una planta verificando los equipos instalados
---
La **jerarquía de activos** es la forma en que tu CMMS o GMAO organiza los equipos de la planta en un árbol: de la instalación a los sistemas, de los sistemas a los equipos y de los equipos a sus componentes. Bien armada, permite encontrar cualquier equipo, sumar costos y fallas por sistema y conservar la historia de cada máquina aunque se mueva de lugar.

La clave que separa una jerarquía útil de una que se rompe al primer cambio es **distinguir el puesto (la ubicación técnica) de la máquina (el equipo)**. Este artículo explica cómo hacerlo, con un ejemplo de reemplazo de una bomba, cómo se ve en SAP PM y en Maximo, los errores más comunes y un checklist para revisar la calidad de tu jerarquía.

## Taxonomía, jerarquía y árbol de activos: no son lo mismo

| Término | Qué es | Ejemplo |
|---|---|---|
| **Taxonomía** | La regla: qué niveles existen, qué clases de equipo y qué límites | Los 9 niveles y las clases de la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) |
| **Jerarquía de activos** | Tu planta organizada con esa regla | Estación Norte → Tren 1 → Compresión → K-101 |
| **Árbol de activos** | La forma de ver la jerarquía en pantalla, como carpetas | La vista desplegable del CMMS |

Dos plantas con la misma taxonomía tienen jerarquías distintas, porque sus equipos son distintos. Por eso conviene **escribir primero la taxonomía** y después cargar la jerarquía.

## Cuántos niveles usar

Muchos proveedores proponen 4 o 5 niveles genéricos (sitio, área, sistema, equipo, componente). Funcionan, pero conviene **alinearlos con ISO 14224**, porque así tus datos se pueden comparar con otras plantas y con bases de datos como OREDA:

| Nivel ISO 14224 | En el CMMS | ¿Ubicación o equipo? |
|---|---|---|
| 3 · Instalación | Planta o sitio | Ubicación técnica |
| 4 · Planta / unidad | Área o unidad de proceso | Ubicación técnica |
| 5 · Sección / sistema | Sistema | Ubicación técnica |
| 6 · Unidad de equipo | Puesto del equipo (con su tag) | **Ubicación técnica**, donde se instala el equipo |
| 6 · Unidad de equipo | Máquina instalada | **Equipo** |
| 7–8 · Subunidad e ítem mantenible | Componentes o lista de materiales | Según el CMMS: sububicaciones, equipos hijos o lista de materiales |

Los niveles 1 y 2 (industria y categoría de negocio) son iguales para toda la empresa y casi nunca se cargan como nodos.

## Ubicación técnica frente a equipo

- La **ubicación técnica** es el **puesto** dentro del proceso: "bomba de condensado A del tren 1", con tag P-201A. Existe aunque no haya ninguna máquina instalada.
- El **equipo** es la **máquina** concreta, con número de serie, fabricante y modelo, que se **instala** en una ubicación y se puede **desmontar** para llevarla a taller o a otro puesto.

En los CMMS grandes la distinción existe con nombre propio: en **SAP PM** son la *ubicación técnica* y el *equipo*; en **IBM Maximo** son *locations* y *assets*. Los CMMS más simples a veces solo tienen "activos", y ahí la disciplina la tienes que poner tú.

### Ejemplo: el reemplazo de una bomba

La bomba P-201A falla por fuga del sello el 14 de marzo. Se desmonta, se manda a taller y se instala la bomba de repuesto del almacén. En junio la original vuelve reparada y se instala en el puesto P-305 de otra planta.

| Fecha | Ubicación técnica P-201A | Equipo 10004587 (serie 12345) | Equipo 10006120 (serie 67890) |
|---|---|---|---|
| Ene–mar | Tiene instalado el 10004587 | Instalado en P-201A, acumula horas y fallas | En almacén como repuesto |
| 14 mar | Falla ELP registrada en el puesto y en la máquina | Falla de sello; se desmonta y va a taller | Se instala en P-201A |
| Mar–jun | Tiene instalado el 10006120 | En taller: reparación registrada en su historial | Acumula horas y fallas en P-201A |
| Jun | Sin cambios | Se instala en P-305 **con toda su historia** | Sigue en P-201A |

Con este esquema puedes contestar dos preguntas distintas, y las dos importan:

- **¿Cómo le va al puesto P-201A?** Es la pregunta de operación y de criticidad: cuántas veces se detuvo esa función del proceso.
- **¿Cómo le va a la bomba 12345?** Es la pregunta de confiabilidad del equipo: si esa máquina es mala, falla en cualquier puesto, y su historia la sigue.

Si el CMMS solo conoce "P-201A", la segunda pregunta no tiene respuesta y el [MTBF](/blog/mtbf-mttr-disponibilidad-como-calcularlos) mezcla dos máquinas.

<figure><img src="/sitio/gmao-orden-bomba.jpg" alt="Dos técnicos trabajan en una bomba centrífuga desmontada mientras uno registra la orden de trabajo en una tableta" loading="lazy" /><figcaption>Cada desmontaje y montaje se registra: así la historia sigue a la máquina y no solo al puesto.</figcaption></figure>

### ¿Qué equipos merecen esta distinción?

No todos. Vale la pena para los **equipos reparables que rotan entre puestos**: bombas, motores, cajas de engranes, válvulas de control, instrumentos. Para un tanque soldado o una tubería, el puesto y el equipo son lo mismo en la práctica.

## Cómo armar la jerarquía paso a paso

1. **Escribe la taxonomía**: niveles, clases de equipo y sus límites. Una página por clase.
2. **Fija la regla de codificación** de la ubicación técnica (lo explicamos en [codificación de equipos: tags, KKS y RDS-PP](/blog/codificacion-de-equipos-tags-isa-kks-rds-pp)).
3. **Arma los niveles de ubicación** (instalación, planta, sistema) desde los PFD y los DTI. Un sistema por función.
4. **Crea los puestos de nivel 6** recorriendo los DTI, con su tag y su clase.
5. **Carga los equipos físicos** (serie, fabricante, modelo) e instálalos en sus puestos.
6. **Agrega componentes o listas de materiales** solo donde vayas a planificar trabajo o gestionar repuestos.
7. **Valida en campo** con un levantamiento: placa por placa.
8. **Asigna dueños** del dato: quién da de alta, quién modifica y quién aprueba.

<figure><img src="/sitio/campo-placa-motor.jpg" alt="Técnico toma con el celular una foto de la placa de datos de un motor eléctrico para registrarla" loading="lazy" /><figcaption>En el levantamiento, la foto de la placa es la prueba de la serie, el fabricante y el modelo.</figcaption></figure>

## Errores comunes

- **Copiar el registro de activos fijos de contabilidad.** Contabilidad registra lo que se compró ("planta de compresión, 12 millones") y mantenimiento necesita lo que se mantiene. Se conectan, pero no son el mismo árbol.
- **Organizar por lugar y no por función.** "Nave 2" agrupa equipos que no tienen nada que ver; "Sistema de aire comprimido" agrupa los que fallan juntos.
- **Solo ubicaciones, sin equipos.** El historial de las máquinas se pierde en cada reemplazo.
- **Solo equipos, sin ubicaciones.** No puedes saber qué puestos del proceso fallan más ni calcular la [criticidad](/blog/analisis-de-criticidad-de-activos) por función.
- **Niveles saltados o desparejos.** Un sistema con equipos colgados directo de la planta y otro con cuatro niveles intermedios: los reportes por nivel dejan de cuadrar.
- **Duplicados.** El mismo equipo cargado dos veces, una por el área de mecánica y otra por la de eléctrica.
- **Cargar todo antes de validar.** Es más rápido corregir una jerarquía en una hoja de cálculo que en un CMMS con dos años de órdenes encima.

## Checklist de calidad de tu jerarquía

Revisa estos puntos (la mayoría se puede sacar con un reporte del propio CMMS):

| Revisión | Cómo detectarlo | Meta |
|---|---|---|
| Equipos sin clase asignada | Filtro por clase vacía en el nivel 6 | 0 % |
| Puestos de nivel 6 sin equipo instalado (de los que deberían tenerlo) | Ubicaciones sin equipo | Solo los puestos realmente vacíos |
| Tags duplicados dentro de una instalación | Conteo por tag | 0 |
| Equipos sin número de serie o sin fabricante | Campos vacíos | Menos del 5 % en equipos críticos |
| Órdenes de trabajo cargadas a niveles 3–5 en vez de al equipo | Órdenes por nivel | Menos del 10 % |
| Fallas sin modo de falla codificado | Órdenes correctivas sin código | 0 % en equipos críticos |
| Sistemas con nombre de lugar y no de función | Revisión manual | 0 |

Si una sola de estas revisiones sale mal en más del 20 % de los registros, conviene corregir la jerarquía **antes** de lanzar análisis de criticidad, RCM o KPI: con datos así cualquier conclusión es discutible.

## Cómo migrar una jerarquía mal armada

1. **Exporta todo** (ubicaciones, equipos y órdenes abiertas) a una hoja de cálculo.
2. **Arma la jerarquía nueva al lado**, en la misma hoja, con una columna "código viejo → código nuevo". Puedes partir de nuestra [plantilla Excel de jerarquía ISO 14224](/descargas/plantilla-jerarquia-iso-14224.xlsx).
3. **Decide qué pasa con el historial**: normalmente se mueve con el equipo físico, y las órdenes viejas se reasignan a la ubicación nueva con la tabla de equivalencias.
4. **Prueba con un sistema** antes de migrar toda la planta.
5. **Congela las altas** durante la migración: nadie crea equipos nuevos con la regla vieja.

<descarga archivo="/descargas/plantilla-jerarquia-iso-14224.xlsx" titulo="Plantilla Excel de jerarquía de activos (ISO 14224)" texto="Ejemplo completo con ubicaciones técnicas, clases de equipo, listas de modos y causas de falla, y una hoja de registro de fallas." formato="Excel"></descarga>

## Preguntas frecuentes

### ¿Qué es una jerarquía de activos?

Es la organización de los equipos de una planta en un árbol de niveles (instalación, planta, sistema, equipo y componentes) dentro del CMMS o GMAO. Sirve para encontrar equipos, sumar costos y fallas por nivel y conservar la historia de cada máquina.

### ¿Qué es una ubicación técnica?

Es el puesto que ocupa un equipo dentro del proceso, identificado con un código jerárquico, por ejemplo MX-EC1-T1-CMP-P201A. Existe aunque no haya una máquina instalada y conserva la historia del puesto cuando la máquina cambia.

### ¿Cuál es la diferencia entre ubicación técnica y equipo?

La ubicación técnica es el puesto y el equipo es la máquina física que se instala en él. Cuando una bomba se reemplaza, la ubicación se queda y el equipo cambia; cada uno conserva su propio historial.

### ¿Cuántos niveles debe tener una jerarquía de activos?

Los que necesites para decidir, normalmente entre 5 y 7. Lo recomendable es alinearlos con los niveles 3 a 8 de la norma ISO 14224 para que los datos sean comparables.

### ¿La jerarquía de activos debe ser igual a la de contabilidad?

No. Contabilidad registra activos fijos por lo que se compró y mantenimiento necesita equipos por lo que se mantiene. Se relacionan con una referencia cruzada, pero son árboles distintos.

En ReliaPlant la jerarquía se arma desde los DTI de la planta, con ubicaciones técnicas, clases ISO 14224 y criticidad en cada equipo, y se exporta lista para cargar en tu CMMS. Mira cómo funciona el [registro de activos](/producto/taxonomia).

<cta-demo titulo="Arma tu jerarquía antes de cargar el CMMS" texto="Ubicaciones técnicas, clases ISO 14224 y criticidad sobre tus DTI, con exportación a Excel para tu CMMS." boton="Probar ReliaPlant gratis"></cta-demo>

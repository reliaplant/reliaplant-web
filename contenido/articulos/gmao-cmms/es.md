titulo: GMAO o CMMS: qué es, funciones y cómo elegirlo (checklist)
slug: que-es-un-gmao-cmms-y-como-elegirlo
resumen: Qué es un GMAO o CMMS, en qué se diferencia de un EAM y un ERP, funciones clave, cuánto cuesta, cómo implementarlo y checklist Excel para elegirlo.
imagenAlt: Dos técnicos reparan una bomba centrífuga mientras uno registra la orden de trabajo en una tableta
---
Un **GMAO** (Gestión del Mantenimiento Asistida por Ordenador) o **CMMS** (*Computerized Maintenance Management System*) es el software donde se registran los equipos de la planta, se reportan las fallas, se planifican y ejecutan las órdenes de trabajo y se guarda el historial de cada equipo. **GMAO y CMMS son lo mismo**: el primero es el nombre en español y francés, el segundo en inglés.

Un buen GMAO hace que nada dependa de la memoria de alguien: quién reportó la falla, cuándo empezó, quién la reparó, cuántas horas tomó, qué repuestos se usaron y **qué falló y por qué**. Con eso salen los indicadores (MTBF, MTTR, backlog, cumplimiento del preventivo) y se ve qué equipos y qué fallas se repiten.

En esta guía tienes las funciones que debe tener, la diferencia con un EAM, un ERP y un APM, cuánto cuestan los más conocidos, por qué fallan tantas implementaciones, cómo implementarlo paso a paso y un **checklist en Excel** para elegirlo con puntaje.

## Qué hace un GMAO, en una imagen

<figure><img src="/blog/gmao-cmms/ciclo-orden-de-trabajo.svg" alt="Diagrama del ciclo de una orden de trabajo en un GMAO: aviso, aprobación, orden de trabajo, programación, ejecución, cierre técnico e historial con indicadores" loading="lazy" /><figcaption>El corazón de un GMAO es el ciclo aviso → orden → ejecución → cierre. El historial que deja alimenta los planes.</figcaption></figure>

1. **Aviso:** cualquiera que ve una anomalía la reporta (idealmente desde el celular, con foto).
2. **Aprobación:** el supervisor la acepta, la rechaza o la marca como duplicada.
3. **Orden de trabajo:** tareas, horas estimadas, materiales, prioridad y responsable.
4. **Programación:** la orden entra a la semana de la cuadrilla, coordinada con operación si hay que parar el equipo.
5. **Ejecución:** el técnico la trabaja en campo.
6. **Cierre técnico:** horas reales, repuestos, **modo de falla, causa y acción**.
7. **Historial e indicadores:** MTBF, MTTR, costos, backlog, fallas repetitivas.

Los planes preventivos generan órdenes del paso 3 de forma automática (por fecha, por horas de operación o por condición).

## Funciones clave de un GMAO

| Función | Qué debe permitir |
|---|---|
| **Registro de activos** | Jerarquía de ubicaciones técnicas y equipos, datos técnicos, documentos, fotos |
| **Avisos o solicitudes** | Reporte de fallas por cualquier usuario, con foto, desde el celular y sin señal |
| **Órdenes de trabajo** | Aprobación, planificación, asignación, ejecución y cierre con datos de falla obligatorios |
| **Mantenimiento preventivo** | Planes por tiempo, por contador (horas, ciclos) y por condición, con generación automática de órdenes |
| **Planificación y programación** | Horas y materiales estimados, programa semanal, capacidad real de la cuadrilla |
| **Inventario y repuestos** | Listas de materiales por equipo, stock, reservas para órdenes, puntos de reorden |
| **Historial e indicadores** | Por equipo y por clase: costos, backlog, cumplimiento, MTBF, MTTR, disponibilidad |
| **Integraciones** | ERP (compras, costos), monitoreo de condición, herramientas de confiabilidad, API y exportación |

La función que no aparece en los folletos y decide si el sistema sirve: **el cierre técnico obligatorio**. Si se puede cerrar una orden sin decir qué falló y por qué, el historial será una lista de "se reparó" y no servirá para analizar nada.

<figure><img src="/sitio/landing/cmms-aviso-fuga.jpg" alt="Técnico de noche frente a una fuga de vapor en una tubería, tomando foto con el celular para reportar el aviso" loading="lazy" /><figcaption>El aviso nace en campo: si reportar toma más de un minuto o necesita señal, la mitad de las fallas no se registran.</figcaption></figure>

## GMAO, CMMS, EAM, ERP y APM: diferencias

| Sistema | Qué es | Alcance | Ejemplos |
|---|---|---|---|
| **GMAO / CMMS** | Gestión del trabajo de mantenimiento | Activos, avisos, órdenes, preventivo, repuestos, historial | MaintainX, UpKeep, Fiix, Limble, Fracttal |
| **EAM** | Gestión de activos de toda la empresa | Lo del CMMS más ciclo de vida, compras, contratos, finanzas, varias plantas | IBM Maximo, HxGN EAM, SAP EAM |
| **ERP** (módulo de mantenimiento) | Mantenimiento dentro del sistema de gestión de la empresa | Muy integrado con compras, almacén, costos y personal | SAP S/4HANA (PM), Oracle |
| **APM / confiabilidad** | Decide **qué** mantenimiento hacer | Taxonomía, criticidad, RCM, RCA, monitoreo de condición, salud del activo | Maximo Health/Predict, herramientas de RCM y RCA |

Cómo leerlo en la práctica:

- El **CMMS ejecuta** el plan; el **APM o la herramienta de confiabilidad lo diseña**. Un CMMS no te dice si cambiar un rodamiento cada año tiene sentido; solo genera la orden cada año.
- Un **EAM** conviene cuando hay muchas plantas, contratos y una gestión financiera fuerte de los activos. Para una o pocas plantas suele ser más de lo que se necesita.
- Si la empresa **ya usa SAP**, el módulo PM suele ser la opción natural para ejecutar mantenimiento; muchas plantas lo complementan con una app móvil o una herramienta de confiabilidad para lo que PM no hace cómodo.

## Cuánto cuesta un GMAO

La mayoría de los proveedores **no publica precios** y cotiza según usuarios, activos, módulos e integraciones. De los que sí los publican, estos eran los planes de entrada en sus páginas oficiales en noviembre de 2026 (antes de impuestos):

| Software | Precio publicado | Plan gratuito |
|---|---|---|
| MaintainX | Desde 20 USD por usuario al mes (pago anual) | Sí, plan básico |
| UpKeep | Desde 24 USD por usuario al mes | No; prueba sin tarjeta |
| Fiix (Rockwell) | Desde 45 USD por usuario al mes | Sí, plan gratuito |
| Mainsim | 89,90 EUR por usuario al mes (nube) | No indicado |
| IBM Maximo (Essentials) | "Menos de 40.000 USD al año" según IBM | No; prueba guiada |

Para 10 técnicos con licencia, eso va desde unos 2.400 USD al año en el plan de entrada más barato hasta decenas de miles en un EAM. A eso hay que sumar **implementación, carga de datos, integraciones y capacitación**, que en proyectos medianos suelen costar tanto o más que el primer año de licencias. La comparativa completa, con costos para 5, 10 y 25 usuarios, está en [mejores software GMAO y CMMS 2026](/blog/mejores-software-gmao-cmms-2026).

## Por qué fallan las implementaciones

1. **Elegir por cantidad de módulos y no por uso.** Si el técnico necesita siete pantallas para cerrar una orden, no la va a cerrar bien.
2. **Migrar los datos tal como están.** Equipos duplicados, códigos inconsistentes y planes que nadie revisó pasan intactos al sistema nuevo.
3. **No definir la jerarquía antes de cargar.** Cada área arma su árbol y después nada se puede comparar. Lo explicamos en [jerarquía de activos: ubicación técnica y equipo](/blog/jerarquia-de-activos-ubicacion-tecnica-y-equipo).
4. **Catálogos de falla en texto libre.** "Se rompió" o "revisar" no permiten calcular nada.
5. **Cargar el plan del fabricante sin revisarlo.** El GMAO automatiza la generación de órdenes; si las tareas no son las correctas, automatiza el desperdicio.
6. **Tratarlo como un proyecto de TI.** Es un cambio en la forma de trabajar de mantenimiento, operación y almacén.
7. **No medir la adopción.** Si nadie mide cuántas órdenes se cierran con datos completos, nadie sabe si el sistema se usa.

## Los datos maestros deciden el éxito

Los **datos maestros** son la información estable sobre la que se apoya todo: jerarquía de activos, clases de equipo, datos técnicos, listas de materiales, catálogos de falla y planes. Antes de cargar un solo equipo conviene tener:

- **Taxonomía y jerarquía:** niveles, clases de equipo y límites, con la [taxonomía ISO 14224](/blog/taxonomia-de-activos-iso-14224) como referencia, y una regla de [codificación de equipos](/blog/codificacion-de-equipos-tags-isa-kks-rds-pp) que no cambie cada proyecto.
- **Catálogos de falla** cerrados por clase de equipo: modo, mecanismo, causa y acción. Mira cómo [elaborar un catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo).
- **Criticidad** de cada equipo: define la prioridad de las órdenes y el stock de repuestos. Si aún no la tienes, empieza con un [análisis de criticidad](/blog/analisis-de-criticidad-de-activos).
- **Planes revisados** para los equipos críticos, no copiados del manual: cómo armar un [plan de mantenimiento preventivo](/blog/como-hacer-un-plan-de-mantenimiento-preventivo).

## Cómo implementar un GMAO paso a paso

| Fase | Qué se hace | Señal de que está lista |
|---|---|---|
| **1. Preparar** | Taxonomía, regla de codificación, catálogos de falla, criticidad, roles y dueños del dato | Documento de una página por cada regla, aprobado |
| **2. Datos piloto** | Levantamiento y carga de un área piloto: ubicaciones, equipos, listas de materiales, planes de los equipos críticos | Checklist de calidad de datos sin errores graves |
| **3. Configurar** | Flujo de avisos y órdenes, prioridades, cierre técnico obligatorio, reportes | Una orden de prueba recorre todo el ciclo |
| **4. Capacitar por rol** | Técnico: avisar y cerrar bien. Planificador: programar la semana. Supervisor: aprobar y leer reportes | Cada rol hace su tarea sin ayuda |
| **5. Piloto en vivo** | El área piloto trabaja solo en el sistema durante 2 a 3 meses | Indicadores de adopción en meta |
| **6. Extender** | Resto de la planta, por áreas, con el mismo método | — |

Indicadores de adopción que conviene medir desde el piloto:

- **Órdenes cerradas con modo y causa de falla:** meta cercana al 100 % en equipos críticos.
- **Trabajo hecho fuera del sistema:** órdenes creadas después de ejecutadas, o trabajos sin orden. Debe tender a cero.
- **Tiempo entre la ejecución y el cierre:** si las órdenes se cierran una semana después, los datos se inventan de memoria.
- **Avisos por semana:** si bajan, la gente dejó de reportar, no es que haya menos fallas.

<figure><img src="/sitio/landing/pm-planificadora-calendario.jpg" alt="Planificadora de mantenimiento frente a una pantalla con el calendario semanal de órdenes de trabajo por cuadrilla" loading="lazy" /><figcaption>Programar la semana según la capacidad real de la cuadrilla es lo que separa un GMAO de una lista de pendientes.</figcaption></figure>

## Checklist para elegir un GMAO

Úsalo en las demostraciones, **con tus propios datos**:

**Datos y estructura**
- ¿Separa ubicación técnica y equipo, y conserva el historial de la máquina cuando cambia de puesto?
- ¿Permite clases de equipo con atributos propios y catálogos de falla por clase?
- ¿Tiene carga masiva desde Excel con validación?

**Trabajo diario**
- ¿Un técnico avisa y cierra una orden desde el celular, sin señal, en pocos pasos y con datos de falla obligatorios?
- ¿Soporta planes por tiempo, por contador y por condición?
- ¿La prioridad de las órdenes parte de la criticidad del equipo?

**Análisis, integración y proveedor**
- ¿Calcula MTBF, MTTR y backlog con definiciones documentadas?
- ¿Tiene API documentada y exportación completa de tus datos?
- ¿Soporte en español y en tu horario? ¿Clientes de tu industria a los que puedas llamar?
- ¿Cuál es el costo total a cinco años: licencias, implementación, integraciones, soporte y capacitación?

Pide que hagan en vivo cuatro cosas: **cargar una clase de equipo nueva, cerrar una orden correctiva sin señal con modo y causa, sacar el historial y el MTBF de una familia de equipos y exportar todos tus datos**. Ver eso dice más que cualquier presentación.

<descarga archivo="/descargas/checklist-seleccion-gmao-cmms.xlsx" titulo="Checklist Excel para elegir un GMAO / CMMS" texto="20 criterios con peso, puntaje de 0 a 5 para hasta 4 proveedores, total ponderado y alerta cuando un proveedor falla un criterio imprescindible." formato="Excel"></descarga>

## Preguntas frecuentes

### ¿Qué significa GMAO?

Gestión del Mantenimiento Asistida por Ordenador. Es el software para gestionar los activos, los avisos de falla, las órdenes de trabajo, el mantenimiento preventivo, los repuestos y el historial de mantenimiento.

### ¿GMAO y CMMS son lo mismo?

Sí. CMMS (Computerized Maintenance Management System) es el nombre en inglés y GMAO el nombre en español. Describen el mismo tipo de software.

### ¿Cuál es la diferencia entre un CMMS y un EAM?

El CMMS gestiona el trabajo de mantenimiento: activos, órdenes, preventivo y repuestos. El EAM (Enterprise Asset Management) suma la gestión del ciclo de vida del activo, compras, contratos y finanzas, normalmente para varias plantas.

### ¿SAP sirve como GMAO?

Sí. El módulo de mantenimiento de SAP (PM) cumple las funciones de un GMAO y está muy integrado con compras, almacén y costos. Su punto débil suele ser la facilidad de uso en campo, que muchas plantas resuelven con una aplicación móvil.

### ¿Cuánto cuesta un software GMAO?

Los que publican precio van desde unos 20 USD por usuario al mes en planes de entrada hasta decenas de miles de dólares al año en sistemas empresariales. La mayoría cotiza según usuarios, activos y módulos, y la implementación suele costar tanto o más que el primer año de licencias.

### ¿Cuánto tarda implementar un GMAO?

Depende sobre todo de la calidad de los datos. Un piloto en un área con datos maestros preparados puede estar operando en pocos meses; sin taxonomía ni catálogos definidos, la implementación se alarga y el sistema hereda los problemas.

## Antes del GMAO, la estrategia

Un GMAO ejecuta el plan de mantenimiento; no decide si el plan es bueno. Para eso hacen falta un registro de activos bien estructurado, la criticidad y los análisis de [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) y [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011).

Eso es lo que hace hoy ReliaPlant, al lado de tu GMAO: con el [registro de activos](/producto/taxonomia) armas la jerarquía y los datos maestros con la taxonomía ISO 14224 y los exportas a Excel para cargarlos en tu sistema; con el [RCM](/producto/rcm) defines las tareas y frecuencias que luego se cargan como planes, y con el [RCA](/producto/rca) investigas las fallas repetitivas que aparecen en el historial. El módulo de gestión de mantenimiento (GMAO) de ReliaPlant está en desarrollo.

<!-- Cuando el módulo GMAO de ReliaPlant esté en producción: enlazar /producto/cmms aquí y actualizar este párrafo y el CTA. -->

<cta-demo titulo="Llega a tu GMAO con los datos ordenados" texto="Arma la jerarquía ISO 14224, la criticidad y tus planes con RCM, y expórtalos a tu GMAO listos para cargar." boton="Probar ReliaPlant gratis"></cta-demo>

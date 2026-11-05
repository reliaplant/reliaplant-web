titulo: GMAO o CMMS: qué es, qué funciones debe tener y cómo elegir uno (con checklist)
slug: que-es-un-gmao-cmms-y-como-elegirlo
resumen: Qué es un GMAO o CMMS, sus funciones clave, por qué fallan las implementaciones, el papel de los datos maestros y la taxonomía, y un checklist para elegir uno.
---
Muchas implementaciones de software de mantenimiento terminan igual: se compra una herramienta potente, se cargan los equipos a las apuradas desde una hoja de cálculo heredada y, un año después, los técnicos siguen anotando en papel, las órdenes se cierran sin causa de falla y nadie confía en los reportes.

El problema casi nunca es el software. En este artículo explicamos **qué es un GMAO o CMMS, qué funciones debe tener, por qué fallan tantas implementaciones** y cómo elegir uno con un checklist práctico.

## Qué es un GMAO o CMMS

**GMAO** (Gestión del Mantenimiento Asistida por Ordenador) y **CMMS** (*Computerized Maintenance Management System*) son dos nombres para lo mismo: el sistema donde se registran los activos, se planifica y ejecuta el trabajo de mantenimiento y se guarda su historial.

También aparecen otros términos:

- **EAM** (*Enterprise Asset Management*): un sistema más amplio que suma compras, finanzas, gestión del ciclo de vida y, a veces, varias plantas o negocios. Muchos ERP tienen su módulo de mantenimiento, que funciona como un EAM.
- **APM** (*Asset Performance Management*) y herramientas de confiabilidad: se enfocan en analizar el comportamiento de los activos (criticidad, RCM, RCA, monitoreo de condición) y definir **qué** mantenimiento hacer. El GMAO se encarga de **ejecutarlo**.

En la práctica, el GMAO es el sistema transaccional del día a día y las herramientas de confiabilidad lo alimentan con mejores planes.

## Funciones clave de un GMAO

| Función | Qué debe permitir |
|---|---|
| Registro de activos | Jerarquía de ubicaciones y equipos, datos técnicos, documentos, relación padre-hijo |
| Órdenes de trabajo | Solicitud, aprobación, planificación, asignación, ejecución y cierre con datos de falla |
| Mantenimiento preventivo | Planes por tiempo, por contador (horas, ciclos) y por condición, con generación automática de órdenes |
| Planificación y programación | Estimación de horas y materiales, programa semanal, capacidad de la cuadrilla |
| Inventario y repuestos | Listas de materiales por equipo, stock, reservas, puntos de reorden |
| Historial y reportes | Historial por equipo, costos, indicadores como backlog, cumplimiento, MTBF y MTTR |
| Movilidad | Consulta y cierre de órdenes desde el campo, incluso sin conexión |
| Integraciones | Con ERP, compras, sistemas de monitoreo de condición y herramientas de confiabilidad |

Una función que no aparece en los catálogos de los proveedores pero que es decisiva es la **calidad del cierre de órdenes**: si el sistema permite cerrar una orden sin indicar qué falló, por qué y qué se hizo, el historial no servirá para analizar nada.

## Por qué fallan las implementaciones

Los errores se repiten de planta en planta:

1. **Elegir por funcionalidades y no por uso.** Se compra el sistema con más módulos, y el técnico necesita siete pantallas para cerrar una orden. Si es difícil de usar en campo, no se usará.
2. **Migrar los datos tal como están.** Se trasladan al sistema nuevo los equipos duplicados, los códigos inconsistentes y los planes que nadie revisó. El software nuevo hereda los problemas del anterior.
3. **No definir la jerarquía antes de cargar.** Cada área arma su árbol a su manera y después es imposible comparar equipos entre plantas.
4. **Catálogos de falla en texto libre.** "Se rompió", "no funciona", "revisar" no permiten calcular nada. Sin listas normalizadas de modo y causa de falla no hay análisis posible.
5. **Cargar el plan del fabricante sin revisarlo.** El GMAO automatiza la generación de órdenes, pero si las tareas no son las correctas, solo se automatiza el desperdicio.
6. **Tratarlo como un proyecto de TI.** La implementación es un cambio en la forma de trabajar de mantenimiento, operación y almacén. Necesita dueños en esas áreas, procedimientos y capacitación, no solo un administrador del sistema.
7. **No medir la adopción.** Porcentaje de órdenes cerradas con datos completos, órdenes creadas fuera del sistema, tiempo entre ejecución y cierre. Si no se miden, nadie sabe si el sistema se usa.

## Los datos maestros deciden el éxito

Los **datos maestros** son la información estable sobre la que se apoya todo lo demás: la jerarquía de activos, las clases de equipo, los datos técnicos, las listas de materiales, los catálogos de falla y los planes de mantenimiento. Si están mal, todo lo que se construya encima también lo estará.

### La taxonomía, primero

Antes de cargar un solo equipo conviene definir la **taxonomía**: los niveles de la jerarquía (planta, sistema, equipo, subunidad, ítem mantenible), las reglas de codificación y los límites de cada clase de equipo. La [ISO 14224](/blog/taxonomia-de-activos-iso-14224) es la referencia más usada para esto en las industrias de proceso, y su lógica sirve aunque la planta no sea de petróleo y gas.

Una buena taxonomía permite:

- **Comparar equipos similares** entre áreas y plantas, porque todos se clasifican igual.
- **Calcular indicadores** por clase de equipo, como el [MTBF y el MTTR](/blog/mtbf-mttr-disponibilidad-como-calcularlos), con datos homogéneos.
- **Registrar fallas en el nivel correcto**: el modo de falla en el equipo, la causa en el ítem mantenible.
- **Reutilizar planes y análisis**: un análisis hecho para una clase de bomba se puede aplicar a todas las bombas de esa clase.

### Catálogos de falla

Junto con la jerarquía, el GMAO necesita listas cerradas de **modo de falla, mecanismo, causa y acción** por clase de equipo. Es lo que hace posible detectar fallas repetitivas y priorizar investigaciones. Revisa cómo [elaborar un catálogo de fallas](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo) antes de configurarlo.

### Criticidad

Cada equipo debería tener asignada su criticidad antes de entrar en producción en el sistema. Es lo que define la prioridad de las órdenes, el nivel de stock de repuestos y dónde vale la pena invertir en análisis. Si aún no la tienes, empieza por un [análisis de criticidad](/blog/analisis-de-criticidad-de-activos).

## Cómo encarar la implementación

Una vez elegido el sistema, el orden de los pasos importa tanto como la herramienta:

1. **Define la taxonomía, los catálogos y las reglas de codificación** antes de cargar datos.
2. **Limpia y valida los datos maestros** en una planta o área piloto: equipos, listas de materiales y planes.
3. **Revisa los planes de mantenimiento** de los equipos críticos antes de cargarlos, en lugar de migrarlos tal cual.
4. **Capacita por rol**: el técnico necesita cerrar órdenes bien; el planificador, programar la semana; el supervisor, leer los reportes.
5. **Estabiliza el piloto** y mide su adopción durante unos meses antes de extenderlo al resto de la planta.

## Checklist para elegir un GMAO

Usa esta lista en las demostraciones de los proveedores, idealmente con **tus propios datos** y casos reales:

**Datos y estructura**
- [ ] ¿Permite una jerarquía de varios niveles alineada con ISO 14224 o con tu propia taxonomía?
- [ ] ¿Se pueden definir clases de equipo con sus atributos técnicos propios?
- [ ] ¿Los catálogos de modo, mecanismo y causa de falla son configurables por clase de equipo?
- [ ] ¿Tiene herramientas de carga masiva y validación de datos?

**Trabajo diario**
- [ ] ¿Un técnico puede cerrar una orden desde el celular en pocos pasos, con los datos de falla obligatorios?
- [ ] ¿Funciona sin conexión en zonas de la planta sin señal?
- [ ] ¿Soporta planes por tiempo, por contador y por condición?
- [ ] ¿Permite programar la semana según la capacidad real de la cuadrilla?

**Análisis e integración**
- [ ] ¿Calcula backlog, cumplimiento, MTBF y MTTR con definiciones claras y documentadas?
- [ ] ¿Exporta los datos en formatos abiertos y tiene una API documentada?
- [ ] ¿Se integra con tu ERP y con las herramientas de confiabilidad que usas o planeas usar?

**Proveedor y costo**
- [ ] ¿Cuál es el costo total en cinco años: licencias, implementación, integraciones, soporte y capacitación?
- [ ] ¿Tiene clientes en tu industria y en tu región que puedas consultar?
- [ ] ¿Ofrece soporte e interfaz en español?
- [ ] ¿Qué pasa con tus datos si decides cambiar de sistema?

Pide al proveedor que haga en vivo tres tareas reales: cargar una clase de equipo nueva, cerrar una orden correctiva con su modo y causa, y obtener el historial de fallas de una familia de equipos. Ver eso suele decir más que cualquier presentación.

## Antes del GMAO, la estrategia

Un GMAO ejecuta el plan de mantenimiento; no decide si ese plan es bueno. Para eso hacen falta el registro de activos bien estructurado, la criticidad y los análisis de [AMEF](/blog/amef-fmea-en-mantenimiento-paso-a-paso) y RCM.

Reliaplant no reemplaza al GMAO: trabaja antes y al lado de él. Con el [registro de activos](/modulos/registro-activos) armas la jerarquía y los datos maestros con la taxonomía ISO 14224 y los exportas a tu sistema; con el [módulo de RCM](/modulos/rcm) defines las tareas y frecuencias que luego se cargan como planes en el GMAO, y con el [módulo de RCA](/modulos/rca) investigas las fallas repetitivas que aparecen en su historial.

<cta-demo titulo="Llega a tu GMAO con los datos ordenados" texto="Arma la jerarquía de activos con taxonomía ISO 14224, define tus planes con RCM y expórtalos a tu GMAO listos para usar." boton="Probar Reliaplant"></cta-demo>

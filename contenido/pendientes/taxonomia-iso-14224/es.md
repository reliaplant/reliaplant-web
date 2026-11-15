titulo: Taxonomía ISO 14224: 9 niveles, ejemplos y plantilla Excel
slug: taxonomia-de-activos-iso-14224
resumen: Guía completa de la taxonomía ISO 14224: 9 niveles, clases de equipo, límites, códigos de modo de falla y ejemplos reales. Con plantilla Excel gratis.
imagenAlt: Jerarquía de una planta en capas: instalación, sistema, equipo y componentes según ISO 14224
---
La **taxonomía ISO 14224** es la forma estándar de organizar los equipos de una planta en **9 niveles**: los niveles 1 a 5 dicen **dónde y para qué** se usa un equipo (industria, categoría de negocio, instalación, planta y sistema) y los niveles 6 a 9 dicen **qué es y de qué está hecho** (unidad de equipo, subunidad, ítem mantenible y parte). Junto con los niveles, la norma fija los **límites de cada clase de equipo** y unas **listas cerradas de códigos** para registrar modos, mecanismos y causas de falla.

Si tu registro de activos sigue esa estructura, los indicadores (MTBF, disponibilidad, tasa de falla) salen comparables entre plantas y a lo largo de los años, y los análisis de [criticidad](/blog/analisis-de-criticidad-de-activos), [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) y [causa raíz](/blog/pasos-para-hacer-un-analisis-causa-raiz) parten de datos limpios.

En esta guía tienes los 9 niveles explicados, la tabla de clases de equipo con sus códigos, los límites y subunidades de una bomba, un compresor, un motor eléctrico y una turbina de gas, un ejemplo completo de jerarquía, ejemplos para minería, alimentos y energía, la tabla de modos de falla con su traducción y una **plantilla Excel gratuita** lista para llenar.

## Qué es ISO 14224

ISO 14224 (*Petroleum, petrochemical and natural gas industries — Collection and exchange of reliability and maintenance data for equipment*) es la norma internacional para **recolectar e intercambiar datos de confiabilidad y mantenimiento de equipos**. No dice cómo mantener un equipo: dice **cómo registrar** lo que le pasa para que esos datos se puedan comparar y usar.

Algunos datos para ubicarla:

- **Ediciones:** 1999, 2006 y **2016 (tercera edición, la vigente)**. En Europa se adoptó como EN ISO 14224:2017.
- **Origen:** nació del proyecto **OREDA** (*Offshore and Onshore Reliability Data*), una base de datos de confiabilidad que comparten operadoras de petróleo y gas desde los años ochenta. La taxonomía de OREDA y la de ISO 14224 están alineadas.
- **Normas hermanas:** ISO 14224 tiene como referencia normativa a **ISO 20815** (aseguramiento de la producción y gestión de la confiabilidad), y se complementa con ISO/TR 12489 para el modelado de confiabilidad de sistemas de seguridad.
- **Alcance:** está escrita para petróleo, petroquímica y gas natural, pero su lógica se usa en minería, energía, química, alimentos y cualquier industria con equipos rotativos y estáticos.

La norma cubre tres cosas: la **taxonomía** (niveles y clases de equipo), los **límites** de cada clase (qué incluye y qué no) y los **datos mínimos** que hay que registrar sobre el equipo, sus fallas y su mantenimiento.

## Los 9 niveles de la taxonomía ISO 14224

<figure><img src="/blog/taxonomia-iso-14224/niveles-iso-14224.svg" alt="Diagrama de los 9 niveles de la taxonomía ISO 14224, desde industria hasta parte, con ejemplos de una estación de compresión" loading="lazy" /><figcaption>Los niveles 1 a 5 describen el uso y la ubicación; los niveles 6 a 9, el equipo y sus piezas.</figcaption></figure>

| Nivel | Nombre en la norma | Nombre en español | Ejemplo | Grupo |
|---|---|---|---|---|
| 1 | Industry | Industria | Petróleo y gas | Uso / ubicación |
| 2 | Business category | Categoría de negocio | Midstream (transporte) | Uso / ubicación |
| 3 | Installation | Instalación | Estación de compresión Norte | Uso / ubicación |
| 4 | Plant / Unit | Planta / unidad | Tren de compresión 1 | Uso / ubicación |
| 5 | Section / System | Sección / sistema | Compresión de gas | Uso / ubicación |
| 6 | Equipment unit | Unidad de equipo | Compresor centrífugo K-101 | Subdivisión del equipo |
| 7 | Subunit | Subunidad | Sistema de lubricación | Subdivisión del equipo |
| 8 | Component / Maintainable item | Componente / ítem mantenible | Bomba de aceite de lubricación | Subdivisión del equipo |
| 9 | Part | Parte | Sello mecánico de la bomba de aceite | Subdivisión del equipo |

### Niveles 1 a 5: uso y ubicación

Son los niveles que ubican al equipo en el negocio. Los niveles 1 y 2 (industria y categoría de negocio) casi nunca cambian dentro de una empresa; el trabajo real está en los niveles 3, 4 y 5.

El **nivel 5 (sistema)** merece cuidado: debe agrupar equipos que cumplen **una función** del proceso. "Compresión de gas de 5 a 40 bar" es un buen sistema; "Área de compresores" no, porque es un lugar y no una función. Esta diferencia importa cuando llegas al RCM, que analiza funciones de sistemas.

### Nivel 6: la unidad de equipo, el corazón de la taxonomía

El nivel 6 es donde se asigna la **clase de equipo** (compresor, bomba, motor, intercambiador…) y donde se calculan los indicadores de confiabilidad: **tasa de falla, MTBF, MTTR y disponibilidad**. Si hay un solo nivel que tienes que hacer bien, es este.

Una unidad de equipo es un conjunto que cumple una función principal y que se puede tratar como un todo: una bomba, un compresor, un motor eléctrico, un recipiente a presión, una válvula.

### Niveles 7 a 9: subunidades, ítems mantenibles y partes

- **Subunidad (7):** un conjunto dentro del equipo que cumple una función necesaria para él: sistema de lubricación, transmisión de potencia, control y monitoreo.
- **Ítem mantenible (8):** lo que normalmente se repara o se reemplaza como un todo. Es el nivel donde tiene sentido registrar **qué falló**.
- **Parte (9):** una pieza del ítem mantenible. La norma no lo desarrolla en detalle; úsalo solo cuando aporte, por ejemplo, para gestionar repuestos críticos.

## Ubicación funcional frente a equipo físico: el error más caro

Una distinción que casi ningún artículo explica, y que define si tu historial sirve o no:

- La **ubicación funcional** (o ubicación técnica) es el **puesto** en el proceso: "la bomba de condensado A del tren 1", con tag **P-201A**. Existe aunque esté vacío.
- El **equipo físico** es la máquina concreta, con su número de serie, que hoy está instalada en ese puesto.

<figure><img src="/sitio/valvula-placa.jpg" alt="Válvula en planta con placa metálica de identificación colgada, que muestra el tag del equipo" loading="lazy" /><figcaption>El tag en la placa identifica el puesto; el número de serie identifica la máquina. Son dos registros distintos.</figcaption></figure>

¿Por qué importa? Supón que la bomba con serie 12345 falla, se manda a taller y en su lugar se instala la bomba de repuesto 67890. Si tu sistema solo conoce "P-201A":

- el historial de la bomba 12345 se mezcla con el de la 67890;
- cuando la 12345 vuelve reparada y se instala en otro puesto, llega "sin historia";
- el MTBF de "P-201A" ya no describe a ninguna máquina real.

La regla práctica: **los niveles 1 a 5 y el puesto del nivel 6 son ubicaciones; el equipo físico se monta y desmonta en esas ubicaciones**, y cada movimiento queda registrado. Los buenos CMMS y EAM manejan las dos cosas (en SAP PM son la *ubicación técnica* y el *equipo*). Lo explicamos con más detalle en la guía de [jerarquía de activos en el CMMS](/blog/jerarquia-de-activos-ubicacion-tecnica-y-equipo).

## Clases de equipo y sus códigos

La norma asigna a cada clase un **código de dos letras** (Anexo A, tabla A.4). Estas son las clases de las cuatro categorías que más se usan en planta:

| Categoría | Código y clase |
|---|---|
| **Rotativos** | BL soplantes y ventiladores · CE motores de combustión · CO compresores · CF centrífugas · EG generadores eléctricos · EM motores eléctricos · GT turbinas de gas · LE expansores de líquido · MI mezcladores · PU bombas · ST turbinas de vapor · TE turboexpansores · CV transportadores y elevadores |
| **Mecánicos** | CR grúas · FS filtros y coladores · HE intercambiadores de calor · HB calentadores y calderas · LA brazos de carga · PI tuberías · VE recipientes a presión · SE eyectores de vapor · PL ductos (pipelines) · SI silos · TA tanques de almacenamiento · SW swivels · TU turrets · WI winches |
| **Eléctricos** | FC variadores de frecuencia · PC cables de potencia · PT transformadores de potencia · SG tableros de distribución (switchgear) · UP sistemas UPS |
| **Seguridad y control** | CL unidades lógicas de control · EC comunicación de emergencia · ER escape, evacuación y rescate · FG detectores de fuego y gas · FF equipos contra incendio · IG gas inerte · IP dispositivos de entrada (sensores) · LB botes salvavidas · NO boquillas · TC telecomunicaciones · VA válvulas |

Además hay categorías de equipos submarinos, terminación de pozos, perforación, marinos, servicios y auxiliares (por ejemplo, HVAC), que se usan sobre todo en upstream.

**¿Y si tu equipo no tiene clase?** Un molino SAG, un pasteurizador o una prensa no aparecen en la tabla. La norma permite definir clases propias: crea la clase siguiendo la misma lógica (código, límite escrito, subunidades e ítems mantenibles) y documéntala. Lo que no hay que hacer es meterla a la fuerza en una clase que no le corresponde.

## Límites del equipo: qué entra y qué no

<figure><img src="/blog/taxonomia-iso-14224/limite-bomba-iso-14224.svg" alt="Diagrama del límite de una bomba según ISO 14224: dentro quedan transmisión de potencia, unidad de bomba, control, lubricación, enfriamiento y misceláneos; el motor eléctrico queda fuera como otra unidad de equipo" loading="lazy" /><figcaption>En ISO 14224 el motor de una bomba es otra unidad de equipo (clase EM). Las válvulas de entrada y salida también quedan fuera.</figcaption></figure>

Cada clase de equipo tiene un **diagrama de límites** que define qué subunidades forman parte de la unidad. El caso que más confusión genera es el **accionador**: en bombas y compresores, el motor eléctrico o la turbina que los mueve **no es una subunidad**, sino **otra unidad de equipo** con su propia clase (EM, GT, ST) y su propio historial de fallas.

Parece un detalle, pero cambia los números. Si en una planta el motor se registra dentro de la bomba y en otra como equipo aparte, la tasa de falla de "bombas" de las dos plantas no es comparable. Y si las válvulas de aislamiento se cargan a la bomba, sus fallas bajan el MTBF de una bomba que nunca falló.

### Subunidades de los cuatro equipos más comunes

| Equipo (clase) | Subunidades según el Anexo A | Ítems mantenibles típicos (nivel 8) |
|---|---|---|
| **Bomba (PU)** | Transmisión de potencia · Unidad de bomba · Control y monitoreo · Sistema de lubricación · Enfriamiento / calefacción · Misceláneos | Acople, impulsor, sello mecánico, rodamientos, carcasa, instrumentos de vibración y temperatura |
| **Compresor (CO)** | Transmisión de potencia · Compresor · Control y monitoreo · Sistema de lubricación · Sistema de sellos del eje · Misceláneos | Caja de engranes, rotor e impulsores, rodamientos radiales y de empuje, sellos secos de gas, bombas y filtros de aceite |
| **Motor eléctrico (EM)** | Motor eléctrico · Control y monitoreo · Sistema de lubricación · Sistema de enfriamiento · Misceláneos | Estator, rotor, rodamientos, ventilador, caja de conexiones, detectores de temperatura (RTD) |
| **Turbina de gas (GT)** | Sistema de arranque · Entrada de aire · Sistema de combustión · Compresor · Turbina de alta presión · Turbina de potencia · Control y monitoreo · Lubricación · Combustible · Escape · Protección contra fuego y gas · Misceláneos, entre otras | Filtros de aire, cámaras y toberas de combustión, álabes, válvulas de combustible, encendedores |

<figure><img src="/sitio/skid-etiquetado.jpg" alt="Bomba centrífuga y motor eléctrico sobre un patín, con etiquetas en la válvula de succión, la descarga, la bomba y el motor" loading="lazy" /><figcaption>Bomba y motor sobre el mismo patín: dos unidades de equipo distintas, cada una con su tag.</figcaption></figure>

## Ejemplo completo: jerarquía de una estación de compresión

Así queda la jerarquía de una estación de compresión de gas, con una **ubicación técnica** que agrega un segmento por nivel. Es el mismo ejemplo que trae la plantilla Excel.

| Código (ubicación técnica) | Nivel | Descripción | Clase |
|---|---|---|---|
| MX-EC1 | 3 · Instalación | Estación de compresión Norte | |
| MX-EC1-T1 | 4 · Planta / unidad | Tren de compresión 1 | |
| MX-EC1-T1-CMP | 5 · Sistema | Compresión de gas (5 a 40 bar) | |
| MX-EC1-T1-CMP-K101 | 6 · Unidad de equipo | Compresor centrífugo K-101 | CO |
| MX-EC1-T1-CMP-K101-LU | 7 · Subunidad | Sistema de lubricación | |
| MX-EC1-T1-CMP-K101-LU-01 | 8 · Ítem mantenible | Bomba principal de aceite | |
| MX-EC1-T1-CMP-K101-SS-01 | 8 · Ítem mantenible | Sello seco de gas lado acople | |
| MX-EC1-T1-CMP-GT101 | 6 · Unidad de equipo | Turbina de gas que acciona al K-101 | GT |
| MX-EC1-T1-CMP-P201A | 6 · Unidad de equipo | Bomba de condensado A | PU |
| MX-EC1-T1-CMP-P201A-PU-01 | 8 · Ítem mantenible | Sello mecánico de la bomba | |
| MX-EC1-T1-CMP-PM201A | 6 · Unidad de equipo | Motor eléctrico de la bomba P-201A | EM |
| MX-EC1-T1-CMP-P201B | 6 · Unidad de equipo | Bomba de condensado B (respaldo) | PU |

Fíjate en tres decisiones:

1. La **turbina GT-101** y el **motor PM-201A** son unidades de equipo propias, no subunidades del compresor y de la bomba.
2. Las **bombas A y B** son dos unidades distintas aunque sean idénticas: cada una tiene su historial, y que una sea respaldo de la otra se registra como dato de operación (sirve para la criticidad).
3. Bajo cada equipo solo se bajó a nivel 8 donde hay algo que mantener o registrar. No hace falta llegar al tornillo.

<descarga archivo="/descargas/plantilla-jerarquia-iso-14224.xlsx" titulo="Plantilla Excel de jerarquía ISO 14224" texto="El ejemplo completo de la estación de compresión, listas desplegables con las clases de equipo, los modos de falla, las causas y los métodos de detección, y una hoja para registrar fallas." formato="Excel"></descarga>

## Ejemplos en otras industrias

La lógica es la misma en cualquier planta; lo que cambia son los sistemas y las clases que aparecen. Tres ejemplos resumidos, del nivel 3 al 6:

| Industria | Instalación (3) | Planta / unidad (4) | Sistema (5) | Unidades de equipo (6) |
|---|---|---|---|---|
| **Minería** | Planta concentradora | Molienda | Bombeo de pulpa a ciclones | Bombas de pulpa (PU) y sus motores (EM), variador (FC), correa de alimentación (CV); el molino, con clase propia |
| **Alimentos** | Planta de lácteos | Proceso de leche fluida | Pasteurización | Intercambiador de placas (HE), bombas sanitarias (PU) y sus motores (EM), tanque de balance (TA) |
| **Alimentos** | Planta de lácteos | Servicios | Refrigeración con amoníaco | Compresores de tornillo (CO) y sus motores (EM), condensadores (HE), recipiente recibidor (VE), detectores de amoníaco (FG) |
| **Energía** | Central de ciclo combinado | Bloque 1 | Generación con turbina de gas | Turbina de gas (GT), generador (EG), transformador elevador (PT), tablero (SG) |
| **Energía** | Central de ciclo combinado | Bloque 1 | Agua de alimentación de caldera | Bombas de alimentación (PU), motores (EM), calentador (HB) |

Dos aprendizajes que se repiten en las plantas que no son de petróleo y gas:

- **Los servicios también son sistemas.** Aire comprimido, refrigeración, vapor y agua de enfriamiento suelen tener equipos críticos que se olvidan porque "no son del proceso".
- **Los equipos sin clase ISO** (molinos, prensas, envasadoras) necesitan una clase propia con su límite escrito antes de cargarlos. Es una tarde de trabajo que evita años de datos mezclados.

<figure><img src="/sitio/landing/taxonomia-planta-etiquetada.jpg" alt="Vista aérea de una planta industrial al atardecer con etiquetas sobre los equipos principales" loading="lazy" /><figcaption>Cada equipo etiquetado en campo debe corresponder a una sola fila de la jerarquía.</figcaption></figure>

## Datos de falla: modo, mecanismo y causa

La segunda mitad de la norma (Anexo B) define **qué registrar cada vez que algo falla**, con listas cerradas de códigos. La diferencia entre los tres conceptos es lo que más se confunde:

- **Modo de falla:** cómo se manifiesta la falla en el equipo, *lo que ves*. Ejemplo: "fuga externa de fluido de proceso" (ELP).
- **Mecanismo de falla:** el proceso físico que la produjo, *lo que pasó*. Ejemplo: "fuga" (1.1) por desgaste de las caras del sello.
- **Causa de falla:** el origen, *por qué pasó*. Ejemplo: "servicio fuera de diseño" (3.3), porque la bomba operó con NPSH insuficiente.

### Modos de falla de equipos rotativos

Estos son los códigos de tres letras para equipos rotativos (bombas, compresores, motores, turbinas). No todos aplican a todas las clases: la norma marca cuáles corresponden a cada una.

| Código | En la norma | En español |
|---|---|---|
| AIR | Abnormal instrument reading | Lectura anormal de instrumento |
| BRD | Breakdown | Avería grave |
| DOP | Delayed operation | Operación retardada |
| ELF | External leakage – fuel | Fuga externa de combustible |
| ELP | External leakage – process medium | Fuga externa de fluido de proceso |
| ELU | External leakage – utility medium | Fuga externa de fluido de servicio (aceite, agua) |
| ERO | Erratic output | Salida errática |
| FTS | Failure to start on demand | No arranca cuando se requiere |
| HIO | High output | Salida alta |
| INL | Internal leakage | Fuga interna |
| LOO | Low output | Salida baja |
| NOI | Noise | Ruido anormal |
| OHE | Overheating | Sobrecalentamiento |
| PDE | Parameter deviation | Desviación de parámetro |
| PLU | Plugged / choked | Obstruido |
| SER | Minor in-service problems | Problemas menores en servicio |
| STD | Structural deficiency | Deficiencia estructural |
| STP | Failure to stop on demand | No se detiene cuando se requiere |
| UST | Spurious stop | Paro espurio (se detiene sin que se pida) |
| VIB | Vibration | Vibración |
| OTH / UNK | Other / Unknown | Otro / desconocido |

Ojo con **STP y UST**: en español es común encontrar STP traducido como "paro espurio", y no lo es. STP es *no se detiene cuando se le pide*; el paro espurio es **UST**.

### Mecanismos, causas y método de detección

| Lista | Grupos principales |
|---|---|
| **Mecanismos** | 1 Mecánico (fuga, vibración, holgura o alineación, deformación, aflojamiento, agarrotamiento) · 2 Material (cavitación, corrosión, erosión, desgaste, rotura, fatiga, sobrecalentamiento, estallido) · 3 Instrumento · 4 Eléctrico · 5 Influencia externa · 6 Misceláneo |
| **Causas** | 1 Diseño · 2 Fabricación o instalación · 3 Operación o mantenimiento (desgaste esperado, error de operación, servicio fuera de diseño, error de mantenimiento) · 4 Gestión (documentación, gestión) · 5 Misceláneo |
| **Detección** | Mantenimiento periódico · prueba funcional · inspección · monitoreo de condición periódico o continuo · prueba de presión · interferencia con la producción · observación casual · mantenimiento correctivo · por demanda |

### Un registro de falla bien hecho

> **14-mar-2026 · P-201A (PU) · ítem: sello mecánico**
> Modo **ELP** · mecanismo **1.1** (fuga por desgaste de caras) · causa **3.3** (servicio fuera de diseño: bajo NPSH en arranques) · detección **8** (observación casual del operador) · impacto en planta: ninguno, entró la P-201B · 6 h de parada.

Con 50 registros así puedes contestar en segundos cuántas fugas de sello hubo por clase de equipo, cuántas vienen de operación fuera de diseño y cuántas detectó el monitoreo y no el operador. Con texto libre ("se cambió sello"), no. Para armar la lista de fallas de tu planta, mira cómo [elaborar un catálogo de fallas con ISO 14224](/blog/elaboracion-de-un-catalogo-de-fallas-para-la-industria-del-gas-y-petroleo).

<cta-demo titulo="Tu jerarquía ISO 14224, lista en ReliaPlant" texto="Carga tus equipos con sus clases, límites y catálogos de falla normalizados, y úsalos directo en criticidad, RCM y RCA." boton="Probar ReliaPlant gratis"></cta-demo>

## Cómo implementar la taxonomía paso a paso

1. **Define el alcance.** Empieza por una unidad o un área, no por toda la planta.
2. **Escribe la regla de codificación** de la ubicación técnica antes de cargar nada: separadores, segmentos por nivel, cómo se nombran los respaldos. Si ya usas tags ISA o KKS, decide cómo conviven (lo vemos en [cómo codificar equipos: tags ISA, KKS y RDS-PP](/blog/codificacion-de-equipos-tags-isa-kks-rds-pp)).
3. **Arma los niveles 3 a 5** a partir de los diagramas de proceso (PFD y DTI), con un sistema por función.
4. **Identifica las unidades de equipo** recorriendo los DTI: cada tag principal es candidato a nivel 6. Asigna su clase.
5. **Escribe los límites** de cada clase que tengas en planta (una página por clase) y aplícalos.
6. **Baja a subunidades e ítems mantenibles** solo hasta donde vayas a usar el dato: planes, repuestos, fallas.
7. **Cierra las listas** de modos, mecanismos, causas y detección. Nada de texto libre en esos campos.
8. **Valida en campo.** Un levantamiento siempre encuentra equipos que no están en los planos y equipos en los planos que ya no existen.

<figure><img src="/sitio/landing/levantamiento-cuadrilla.jpg" alt="Dos técnicos con casco y tableta recorren una planta verificando placas y tags de los equipos" loading="lazy" /><figcaption>El levantamiento en campo es el paso que más errores corrige: placas, tags y equipos que no coinciden con los planos.</figcaption></figure>

Si no tienes gente para el levantamiento, ReliaPlant hace el [levantamiento de activos con taxonomía ISO 14224](/servicios/taxonomia-iso-14224) en planta.

## Errores comunes

- **Mezclar ubicación con equipo:** el historial se pierde en cada cambio de máquina.
- **Meter el accionador dentro de la bomba o del compresor:** rompe la comparación de tasas de falla.
- **Sistemas que son lugares y no funciones:** "Nave 2" no sirve para un RCM.
- **Bajar a nivel de tornillo en todo:** multiplica el trabajo de carga y mantenimiento de datos sin mejorar ninguna decisión.
- **Listas abiertas de modos de falla:** cada técnico escribe distinto y nunca se pueden contar.
- **Forzar clases ISO** en equipos que no las tienen, en vez de crear una propia documentada.
- **Copiar la jerarquía del ERP contable:** los activos fijos de contabilidad no siguen la lógica de mantenimiento (un "activo" contable puede ser media planta).

## Preguntas frecuentes

### ¿Qué es la taxonomía ISO 14224?

Es la clasificación jerárquica de equipos que define la norma ISO 14224 para recolectar datos de confiabilidad y mantenimiento. Tiene 9 niveles: industria, categoría de negocio, instalación, planta o unidad, sección o sistema, unidad de equipo, subunidad, componente o ítem mantenible, y parte.

### ¿Cuál es la edición vigente de ISO 14224?

La tercera edición, ISO 14224:2016, que reemplazó a la de 2006. En Europa se publicó como EN ISO 14224:2017.

### ¿ISO 14224 solo aplica a petróleo y gas?

Está escrita para petróleo, petroquímica y gas natural, pero su estructura de niveles, límites y códigos de falla se usa en minería, energía, química, alimentos y otras industrias. Para equipos que no tienen clase en la norma se crea una clase propia con la misma lógica.

### ¿Cuántos niveles debo usar?

Los que necesites para tomar decisiones. En la práctica casi todas las plantas usan del 3 al 8: los niveles 1 y 2 son iguales para toda la empresa y el 9 (parte) solo se usa para repuestos críticos.

### ¿El motor de una bomba es parte de la bomba?

No en ISO 14224. El motor eléctrico es otra unidad de equipo (clase EM) con su propio historial; la bomba (clase PU) incluye la transmisión de potencia, la unidad de bomba, el control y monitoreo, la lubricación, el enfriamiento y los misceláneos.

### ¿Qué diferencia hay entre taxonomía y jerarquía de activos?

La taxonomía es la regla (qué niveles existen, qué clases y qué límites); la jerarquía es tu planta organizada con esa regla. Dos plantas con la misma taxonomía tienen jerarquías distintas.

### ¿Qué es OREDA y qué relación tiene con ISO 14224?

OREDA es un proyecto conjunto de operadoras de petróleo y gas que recopila datos de confiabilidad de equipos y publica un manual con tasas de falla. ISO 14224 nació de ese proyecto y ambas usan la misma taxonomía, por eso puedes comparar tus tasas de falla con las de OREDA.

## Siguiente paso

Una taxonomía bien armada es la base de todo lo demás: la [criticidad](/blog/analisis-de-criticidad-de-activos) se evalúa por unidad de equipo, el [RCM](/blog/rcm-mantenimiento-centrado-en-confiabilidad-sae-ja1011) analiza las funciones de los sistemas y los modos de falla de sus ítems mantenibles, y los [indicadores como MTBF y MTTR](/blog/mtbf-mttr-disponibilidad-como-calcularlos) solo sirven si las fallas están bien asignadas.

En ReliaPlant el [registro de activos](/producto/taxonomia) sigue la jerarquía de ISO 14224 y se construye desde los DTI de la planta, con clases de equipo, límites y catálogos de falla normalizados, para que criticidad, RCM y RCA trabajen sobre los mismos equipos desde el primer día.

<cta-demo titulo="Arma tu jerarquía ISO 14224 sin hojas de cálculo" texto="Importa la plantilla o empieza desde tus DTI. Hay plan gratuito." boton="Probar ReliaPlant gratis"></cta-demo>

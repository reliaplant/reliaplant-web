import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "Taxonomía ISO 14224 y jerarquía de activos | ReliaPlant" },
  description:
    "Diseñamos tu jerarquía de activos según la norma ISO 14224: UT, tags, clases, criticidad y catálogo de fallas, lista para SAP PM o Maximo.",
  alternates: { canonical: "https://reliaplant.com/servicios/taxonomia-iso-14224" },
};

// Ejemplo de jerarquía entregada, en la vista Tabla de TAX. La columna "Nivel" muestra el nivel
// ISO 14224 que corresponde a cada fila. Clases, tipos y códigos de 4 letras son los del
// catálogo maestro real de la app (services/general/catalogoMaestro.ts).
const PANTALLA = `<div class="pantalla" role="img" aria-label="Jerarquía de activos según ISO 14224 en ReliaPlant: planta, sistema, equipos y subunidades con clase, tipo y criticidad">
<div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span class="act">TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div></div>
<div class="rp-sub"><span>Lista de Activos</span><span class="act">Tabla</span><span>Map view</span><span>DTIs</span><span>Documentos</span><span>Configuración</span></div>
<div class="scroll-x"><table class="tabla-app"><thead><tr><th class="c">Nivel</th><th>Código / Tag</th><th>Descripción</th><th>Equipo superior</th><th>Clase</th><th>Tipo</th><th class="c">Cód. tipo</th><th class="c">Criticidad</th></tr></thead><tbody>
<tr><td class="c">4</td><td class="mono b">CN</td><td>Planta Compresión Norte</td><td></td><td>Ubicación técnica</td><td></td><td class="c"></td><td class="c"></td></tr>
<tr><td class="c">5</td><td class="mono b">CN-210</td><td>Sistema de condensado</td><td></td><td>Ubicación técnica</td><td></td><td class="c"></td><td class="c"></td></tr>
<tr><td class="c">6</td><td class="mono b">V-210</td><td>Separador horizontal</td><td></td><td>Pressure Vessels</td><td>Separator</td><td class="c mono">PVSE</td><td class="c"><span class="crit-c" style="background:#dc2626">A</span></td></tr>
<tr><td class="c">6</td><td class="mono b">P-211A</td><td>Bomba centrífuga de condensado</td><td></td><td>Pumps</td><td>Centrifugal</td><td class="c mono">PUCE</td><td class="c"><span class="crit-c" style="background:#dc2626">A</span></td></tr>
<tr><td class="c">7</td><td class="mono b">PM-211A</td><td>Motor de la bomba P-211A</td><td class="mono">P-211A</td><td>Electric Motors</td><td>AC</td><td class="c mono">EMAC</td><td class="c"><span class="crit-c" style="background:#dc2626">A</span></td></tr>
<tr><td class="c">6</td><td class="mono b">LV-210</td><td>Válvula de control de nivel</td><td></td><td>Valves - Control</td><td>Control Valve (general)</td><td class="c mono">VCGE</td><td class="c"><span class="crit-c" style="background:#f97316">B</span></td></tr>
<tr><td class="c">6</td><td class="mono b">PT-212</td><td>Transmisor de presión</td><td></td><td>Input Devices</td><td>Pressure - Transmitter</td><td class="c mono">IPPT</td><td class="c"><span class="crit-c" style="background:#16a34a">C</span></td></tr>
<tr class="tot"><td></td><td colspan="7">Niveles 4 y 5: ubicaciones técnicas. Nivel 6: unidad de equipo con su clase. Nivel 7: subunidad enlazada a su equipo superior.</td></tr>
</tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "servicio",
  etiqueta: "Servicio · Taxonomía ISO 14224",
  titulo: "Taxonomía ISO 14224 diseñada para tu planta.",
  tituloGris: "Una jerarquía de activos que sirve para el CMMS, para RCM y para comparar fallas.",
  bajada:
    "Diseñamos la jerarquía de activos de tu planta según la norma ISO 14224: niveles, codificación de ubicaciones técnicas y tags, clases y tipos de equipo, criticidad, datos técnicos por clase y catálogo de fallas. Queda adaptada a SAP PM, Maximo o tu CMMS y cargada en ReliaPlant.",
  foto: { src: "/sitio/planta-dti-holograma.jpg", alt: "Planta de proceso con el DTI superpuesto sobre recipientes, bombas y válvulas" },
  tarjeta: {
    titulo: "P-211A",
    subtitulo: "Bomba centrífuga de condensado",
    filas: [
      ["Nivel ISO 14224", "6 · Unidad de equipo"],
      ["Clase · tipo", "Pumps · PUCE"],
      ["UT", "CN-210"],
    ],
  },
  pantalla: PANTALLA,
  pantallaPie:
    "Ejemplo de jerarquía entregada: cada ubicación técnica y cada equipo con su nivel ISO 14224, su clase y tipo del catálogo y su criticidad. La columna Nivel se agrega aquí para leer el ejemplo.",
  problema: {
    titulo: "Una jerarquía mal armada",
    tituloGris: "se paga en cada análisis que viene después.",
    puntos: [
      {
        titulo: "Cada área clasifica a su manera",
        texto:
          "Una bomba es \"BBA\" en un sistema y \"Bomba\" en otro. El motor a veces es parte de la bomba y a veces un equipo aparte. Así no se pueden contar fallas por clase.",
      },
      {
        titulo: "La estructura del CMMS no sigue al proceso",
        texto:
          "Ubicaciones técnicas creadas según quién las cargó, sin regla de codificación. Equipos colgados de la UT equivocada o sin UT. Encontrar el historial de un sistema es un trabajo manual.",
      },
      {
        titulo: "Las fallas se registran en texto libre",
        texto:
          "Sin modos, mecanismos y causas en listas cerradas, cada técnico describe la falla con sus palabras. El MTBF y el RCM terminan apoyados en datos que no se pueden agrupar.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Diagnóstico del registro actual",
      texto:
        "Revisamos tu listado de equipos o la exportación del CMMS contra los DTIs y PFDs. Marcamos tags duplicados, equipos sin ubicación técnica, clases escritas a mano y huecos de información.",
    },
    {
      titulo: "Diseño de niveles y codificación",
      texto:
        "Definimos qué nivel ISO 14224 ocupa cada cosa: planta, sistemas, unidades de equipo y subunidades. Fijamos la regla de codificación de UT y tags, los límites de cada clase y si la KEY de carga es el tag o el código.",
    },
    {
      titulo: "Clases, datos técnicos y fallas",
      texto:
        "Asignamos a cada equipo su categoría, clase y tipo del catálogo maestro. Definimos los datos técnicos por clase y el catálogo de fallas: modos por clase, mecanismos, causas y métodos de detección.",
    },
    {
      titulo: "Criticidad con tu equipo",
      texto:
        "Configuramos los niveles de criticidad de tu empresa y los asignamos equipo por equipo en sesiones con operaciones y mantenimiento.",
    },
    {
      titulo: "Carga en ReliaPlant y salida al CMMS",
      texto:
        "Cargamos ubicaciones técnicas y equipos con vista previa: nada se escribe hasta revisar qué se crea y qué cambia. Te entregamos el exportable en Excel con las columnas que pide tu SAP PM, Maximo u otro CMMS.",
    },
  ],
  capacidades: [
    {
      titulo: "Jerarquía por niveles ISO 14224",
      texto:
        "Ubicaciones técnicas anidadas para planta y sistemas. Equipos enlazados a su UT y, cuando aplica, a un equipo superior para representar subunidades y componentes.",
    },
    {
      titulo: "Regla de codificación de UT y tags",
      texto:
        "Una sola regla escrita para códigos de UT y tags, compatible con la máscara de tu CMMS. Tags normalizados en mayúsculas, sin espacios, aceptando formatos de línea como 1-1/2\"-GN-17025.",
    },
    {
      titulo: "Clases y tipos estandarizados",
      texto:
        "Catálogo maestro de 691 tipos en 97 clases y 10 categorías, cada tipo con un código de cuatro letras, como PUCE para bomba centrífuga. Los nombres y códigos se pueden ajustar.",
    },
    {
      titulo: "Datos técnicos por clase",
      texto:
        "Para cada clase se define qué datos lleva el equipo: potencia, caudal, presión de diseño, lo que aplique. Los valores se validan contra esa configuración y los fabricantes y modelos van a un catálogo de la empresa.",
    },
    {
      titulo: "Catálogo de fallas ISO 14224",
      texto:
        "Basado en el Anexo B de ISO 14224:2016: modos de falla por clase, mecanismos, causas, métodos de detección y actividades, más las partes de cada clase. Queda configurado en el módulo de mantenimiento de ReliaPlant.",
    },
    {
      titulo: "Criticidad por empresa",
      texto:
        "Niveles de criticidad propios de tu organización, con su etiqueta y su descripción. Cada equipo queda con su nivel, que es la base para priorizar RCM y planes de mantenimiento.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Arma tu taxonomía tú mismo",
      texto:
        "Si tu equipo ya tiene claros los niveles y la codificación, la plataforma trae las piezas para construir y mantener la jerarquía sin hojas de cálculo sueltas.",
      incluye: [
        "Catálogo maestro de clases y tipos con código de 4 letras",
        "Plantilla de carga configurable por planta, con vista previa",
        "Niveles de criticidad y datos técnicos por clase",
        "Catálogo de fallas ISO 14224 editable",
        "Exportable en Excel para tu CMMS",
      ],
    },
    servicio: {
      titulo: "La diseñamos y la cargamos por ti",
      texto:
        "Ingenieros de confiabilidad de ReliaPlant diseñan la taxonomía con tu equipo, la documentan y la dejan cargada y validada en la plataforma.",
      incluye: [
        "Diagnóstico del registro y del CMMS actual",
        "Documento de niveles, codificación y límites por clase",
        "Mapeo a ubicaciones técnicas y equipos de SAP PM o Maximo",
        "Sesiones de criticidad con operaciones y mantenimiento",
        "Carga en ReliaPlant y archivo listo para el CMMS",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es la norma ISO 14224?",
      respuesta:
        "Es la norma internacional para recolectar e intercambiar datos de confiabilidad y mantenimiento de equipos. ReliaPlant toma como referencia la edición de 2016. Define una taxonomía de equipos, los límites de cada clase y los datos mínimos de equipo, falla y mantenimiento, con listas de códigos para modos, mecanismos y causas de falla.",
    },
    {
      pregunta: "¿Cuáles son los niveles de la taxonomía ISO 14224?",
      respuesta:
        "Son nueve: 1 industria, 2 categoría de negocio, 3 instalación, 4 planta o unidad, 5 sección o sistema, 6 unidad de equipo, 7 subunidad, 8 componente o ítem mantenible y 9 parte. Los niveles 1 a 5 describen dónde y para qué se usa el equipo. Los niveles 6 a 9 describen el equipo en sí, y el 6 es donde se asigna la clase y se calculan los indicadores.",
    },
    {
      pregunta: "¿Qué es una jerarquía de activos?",
      respuesta:
        "Es la estructura que ordena los activos de una planta de lo general a lo particular: planta, sistemas, equipos y sus partes. Permite saber dónde está instalado cada equipo, a qué función sirve y a quién cargar cada falla y cada costo. Sin ella, el CMMS es una lista plana difícil de analizar.",
    },
    {
      pregunta: "¿La taxonomía ISO 14224 sirve si mi planta no es de petróleo y gas?",
      respuesta:
        "Sí. La norma nació en petróleo, petroquímica y gas natural, pero su lógica funciona en minería, energía, química y alimentos. Los niveles altos se adaptan al negocio y las clases de equipo como bombas, motores, compresores o válvulas son las mismas en casi cualquier planta.",
    },
    {
      pregunta: "¿Cómo se lleva la taxonomía a SAP PM o Maximo?",
      respuesta:
        "Los niveles de ubicación se vuelven ubicaciones técnicas en SAP PM o ubicaciones en Maximo, y las unidades de equipo se vuelven equipos o activos. La regla de codificación se define pensando en la máscara de tu CMMS. Desde ReliaPlant se exporta un Excel con las columnas que usa tu carga.",
    },
    {
      pregunta: "¿Hasta qué nivel conviene bajar la jerarquía?",
      respuesta:
        "Hasta donde vayas a usar la información. Las unidades de equipo son obligatorias; subunidades e ítems mantenibles se bajan en equipos críticos o donde haya planes, repuestos o análisis de falla que los necesiten. Llegar a nivel de parte en toda la planta multiplica el trabajo sin mejorar decisiones.",
    },
    {
      pregunta: "¿Qué necesitan de nuestra parte para empezar?",
      respuesta:
        "El listado actual de equipos o una exportación del CMMS, los DTIs y PFDs de las áreas del alcance y una persona de mantenimiento que conozca la planta. Si el listado no existe o no coincide con el campo, el paso previo es un levantamiento de activos.",
    },
  ],
  siguiente: { etiqueta: "Siguiente paso del ciclo", titulo: "Levantamiento de activos en campo", href: "/servicios/levantamiento-de-activos" },
  origen: "web - /servicios/taxonomia-iso-14224",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

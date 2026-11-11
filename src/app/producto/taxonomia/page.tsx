import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "Registro de activos y taxonomía ISO 14224 | ReliaPlant" },
  description:
    "Ubicaciones técnicas y equipos en jerarquía ISO 14224, carga masiva desde Excel con vista previa, DTIs con marcadores y app de campo offline.",
  alternates: { canonical: "https://reliaplant.com/producto/taxonomia" },
};

// Réplica de la vista previa de la carga masiva (Configuración → TAX → Carga de equipos).
// Acciones reales del análisis: crear, actualizar, sin cambio, conflicto, error.
const PANTALLA = `<div class="pantalla" role="img" aria-label="Vista previa de una carga masiva de equipos en ReliaPlant: cada fila del Excel clasificada antes de escribir">
<div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span class="act">TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div></div>
<div class="rp-sub"><span>Lista de Activos</span><span>Tabla</span><span>Map view</span><span>DTIs</span><span>Documentos</span><span class="act">Configuración</span></div>
<div class="scroll-x"><table class="tabla-app"><thead><tr><th class="c">Fila</th><th>Tag</th><th>Código</th><th>Descripción</th><th>UT</th><th>Acción</th><th>Detalle</th></tr></thead><tbody>
<tr><td class="c">2</td><td class="mono b">P-211A</td><td class="mono">10004512</td><td>Bomba centrífuga de condensado</td><td class="mono">CN-210</td><td><span class="chip-e e-azul">Actualizar</span></td><td>Criticidad: B → A</td></tr>
<tr><td class="c">3</td><td class="mono b">P-211B</td><td class="mono">10004513</td><td>Bomba centrífuga de condensado</td><td class="mono">CN-210</td><td><span class="chip-e p-baja">Sin cambio</span></td><td>—</td></tr>
<tr><td class="c">4</td><td class="mono b">LV-210</td><td class="mono">10004520</td><td>Válvula de control de nivel</td><td class="mono">CN-210</td><td><span class="chip-e e-azul">Actualizar</span></td><td>Fabricante: Fisher → (vacío, se borra)</td></tr>
<tr><td class="c">5</td><td class="mono b">PT-213</td><td class="mono">10004561</td><td>Transmisor de presión</td><td class="mono">CN-210</td><td><span class="chip-e e-cerr">Crear</span></td><td>Equipo superior: V-210</td></tr>
<tr><td class="c">6</td><td class="mono b">E-410C</td><td class="mono">10004102</td><td>Enfriador por aire</td><td class="mono">CN-400</td><td><span class="chip-e e-rev">Conflicto</span></td><td>El tag apunta a un equipo y el código a otro</td></tr>
<tr><td class="c">7</td><td class="mono b">K-301A</td><td class="mono">10003310</td><td>Compresor reciprocante</td><td class="mono">CN-399</td><td><span class="chip-e e-rojo">Error</span></td><td>La ubicación técnica CN-399 no existe en la planta</td></tr>
<tr class="tot"><td></td><td colspan="6">1 crear · 2 actualizar · 1 sin cambio · 1 conflicto · 1 error. Nada se escribe hasta que confirmas.</td></tr>
</tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · Taxonomía",
  titulo: "Registro de activos con taxonomía ISO 14224.",
  tituloGris: "Cada equipo en su sitio, con su tag, su DTI y su punto en el mapa.",
  bajada:
    "Software de registro de activos para plantas industriales: ubicaciones técnicas y equipos en jerarquía, carga masiva desde Excel con vista previa, DTIs con los equipos marcados y una app de campo que funciona sin señal.",
  foto: { src: "/sitio/skid-etiquetado.jpg", alt: "Skid de proceso con equipos identificados por tag" },
  tarjeta: {
    titulo: "P-211A",
    subtitulo: "Bomba centrífuga de condensado",
    filas: [
      ["UT", "CN-210"],
      ["Criticidad", "A"],
      ["DTI", "DTI-CN-210-01"],
    ],
  },
  pantalla: PANTALLA,
  pantallaPie:
    "Vista previa de una carga masiva: cada fila del Excel se clasifica y muestra qué campo cambia antes de escribir nada en la base de datos.",
  problema: {
    titulo: "Sin un registro confiable,",
    tituloGris: "todo lo que viene después falla.",
    puntos: [
      {
        titulo: "El listado vive en un Excel",
        texto:
          "Hay varias versiones, cada área tiene la suya y nadie sabe cuál es la buena. Tags repetidos, equipos sin ubicación y códigos que no existen en el CMMS.",
      },
      {
        titulo: "El DTI y el campo no coinciden",
        texto:
          "El plano dice una cosa, la placa del equipo otra y el registro una tercera. Encontrar un equipo en planta depende de quién lleva más años.",
      },
      {
        titulo: "RCM y planes sobre arena",
        texto:
          "Sin jerarquía ni criticidad definidas, los análisis de confiabilidad y los planes de mantenimiento se arman sobre un inventario incompleto.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Configura la plantilla",
      texto:
        "Define qué columnas trae tu archivo y con qué nombre, por ejemplo CÓDIGO SAP. Eliges la KEY: tag o código. La plantilla sale con una hoja que explica cada campo.",
    },
    {
      titulo: "Carga ubicaciones técnicas y equipos",
      texto:
        "Subes el Excel y ves la vista previa: qué se crea, qué se actualiza campo por campo, qué no cambia y qué tiene error. También ves los equipos de la planta que no vienen en el archivo.",
    },
    {
      titulo: "Marca los equipos en DTIs y mapa",
      texto:
        "Subes los DTIs en PDF y ubicas cada equipo con un marcador en su página. En el Map view satelital dibujas áreas y pones el punto de cada equipo.",
    },
    {
      titulo: "Completa en campo",
      texto:
        "El técnico busca el equipo por tag, código o QR, ve su DTI con el marcador y toma fotos y notas sin señal. Todo se sincroniza al volver a tener conexión.",
    },
    {
      titulo: "Exporta y sigue con RCM",
      texto:
        "Descargas el registro en Excel con las mismas columnas de tu plantilla para llevarlo a SAP u otro CMMS. Con la criticidad asignada, pasas al análisis RCM.",
    },
  ],
  capacidades: [
    {
      titulo: "Jerarquía ISO 14224",
      texto:
        "Ubicaciones técnicas anidadas y equipos con equipo superior. Catálogo de 691 tipos en 97 clases y 10 categorías, con código propio de cuatro letras.",
    },
    {
      titulo: "Carga masiva con reglas claras",
      texto:
        "Todas las columnas configuradas son obligatorias. Celda vacía borra el dato. Detecta tags duplicados, padres inexistentes y ciclos en la jerarquía antes de escribir.",
    },
    {
      titulo: "DTIs con marcadores",
      texto:
        "Visor de PDF vectorial con banco de trabajo: filtros, navegación al marcador y tooltip con tag, descripción y código de cada equipo.",
    },
    {
      titulo: "Map view satelital",
      texto:
        "Imagen satelital de la planta, girada para que coincida con tu plano. Áreas dibujadas, asociadas a una UT si quieres, y el punto de cada equipo.",
    },
    {
      titulo: "Modo construcción",
      texto:
        "Guarda el registro original antes de empezar, marca los equipos nuevos del levantamiento y cierra el ciclo con un registro final descargable.",
    },
    {
      titulo: "Criticidad y datos técnicos",
      texto:
        "Niveles de criticidad configurables por empresa. Datos técnicos por clase de equipo y catálogo de fabricantes y modelos que crece con tu planta.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Arma tu registro tú mismo",
      texto:
        "Tu equipo carga y mantiene la taxonomía en la plataforma. También puedes pedir cambios a un asistente de IA por MCP: propone los cambios y tú los apruebas antes de aplicarlos.",
      incluye: [
        "Plantilla de carga configurable por planta",
        "Vista previa de cada carga antes de escribir",
        "Visor de DTIs y Map view",
        "App de campo offline para fotos y notas",
        "Exportable en Excel para tu CMMS",
      ],
    },
    servicio: {
      titulo: "Lo levantamos por ti",
      texto:
        "Nuestros ingenieros recorren la planta, depuran tu listado actual y te entregan el registro completo y cargado en ReliaPlant.",
      incluye: [
        "Levantamiento de activos en campo con fotos de placa",
        "Estructura de ubicaciones técnicas según ISO 14224",
        "Marcado de equipos en DTIs y en el mapa",
        "Asignación de criticidad con tu equipo",
        "Archivo de carga listo para SAP u otro CMMS",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿ReliaPlant trae un catálogo de clases y tipos de equipo?",
      respuesta:
        "Sí. El catálogo maestro tiene 691 tipos de equipo en 97 clases y 10 categorías, basado en ISO 14224. Cada tipo tiene un código de cuatro letras, como PUCE para bomba centrífuga. Puedes ajustar nombres y códigos a los de tu empresa.",
    },
    {
      pregunta: "¿Qué debe tener un registro de activos?",
      respuesta:
        "Como mínimo: tag, descripción, código del CMMS, ubicación técnica, equipo superior, clase y tipo, y criticidad. Luego suma datos de placa, datos técnicos por clase, fotos y la referencia al DTI donde aparece. Sin esa base, RCM, planes de mantenimiento y órdenes de trabajo quedan incompletos.",
    },
    {
      pregunta: "¿Cuál es la diferencia entre ubicación técnica y equipo?",
      respuesta:
        "La ubicación técnica es el lugar funcional de la planta, por ejemplo el sistema de condensado CN-210, y se mantiene aunque cambies el equipo. El equipo es el activo físico, como la bomba P-211A, que se instala en esa ubicación. En ReliaPlant cada equipo queda enlazado a su UT y puede tener un equipo superior.",
    },
    {
      pregunta: "¿Puedo cargar mi listado de equipos desde Excel o SAP?",
      respuesta:
        "Sí. Configuras la plantilla con los nombres de columna de tu archivo y eliges si la KEY es el tag o el código. Antes de escribir ves la vista previa con lo que se crea, se actualiza y tiene error. Ojo: una celda vacía borra ese dato del equipo, no lo deja igual.",
    },
    {
      pregunta: "¿Qué ofrece un software de registro de activos frente a una hoja de cálculo?",
      respuesta:
        "Una sola versión del registro, con jerarquía, validaciones y trazabilidad de cada carga. Además conecta cada equipo con su DTI, su punto en el mapa, sus fotos de campo y los análisis de RCM, RCA y planes de mantenimiento que vienen después.",
    },
    {
      pregunta: "¿La app de campo funciona sin señal?",
      respuesta:
        "Sí. Descargas la planta al teléfono y puedes buscar equipos por tag, código o QR, ver su ficha y su DTI con el marcador, y tomar fotos y notas sin conexión. Los cambios quedan en cola y se sincronizan solos cuando vuelve la señal.",
    },
    {
      pregunta: "¿Qué pasa con los equipos nuevos durante un levantamiento?",
      respuesta:
        "Activas el modo construcción en la planta. Se guarda el registro original y cada equipo creado queda marcado como nuevo. Si el código no es la KEY, los equipos nuevos reciben un código provisional N-00001 que luego concilias con tu CMMS.",
    },
  ],
  siguiente: { etiqueta: "Siguiente paso del ciclo", titulo: "Análisis RCM sobre tus equipos críticos", href: "/producto/rcm" },
  origen: "web - /producto/taxonomia",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

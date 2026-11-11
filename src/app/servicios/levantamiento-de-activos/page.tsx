import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";
import { TELEFONO } from "@/components/home/piezas";

export const metadata: Metadata = {
  title: { absolute: "Levantamiento de activos y censo de equipos | ReliaPlant" },
  description:
    "Recorremos tu planta por ubicación técnica con app offline: tags, placas, fotos con GPS y notas de voz. Entregamos la taxonomía cargada y lista para SAP.",
  alternates: { canonical: "https://reliaplant.com/servicios/levantamiento-de-activos" },
};

// Réplica de TAX → Recorrido en la web: resultado en campo por equipo (estados reales de
// ESTADOS_CAMPO: Encontrado, Con comentarios, No encontrado, No requiere confirmación),
// con fotos y notas de voz que sube la app de campo. N-00014 = equipo nuevo con código provisional.
const PANTALLA = `<div class="pantalla" role="img" aria-label="Recorrido en campo en ReliaPlant: cada equipo de la UT CN-210 con su resultado, fotos y notas de voz">
<div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span class="act">TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div></div>
<div class="rp-sub"><span>Lista de Activos</span><span>Tabla</span><span>Map view</span><span>DTIs</span><span>Documentos</span><span class="act">Recorrido</span></div>
<div class="scroll-x"><table class="tabla-app"><thead><tr><th>Tag</th><th>Código</th><th>Descripción</th><th>UT</th><th class="c">Fotos</th><th class="c">Notas de voz</th><th>En campo</th></tr></thead><tbody>
<tr><td class="mono b">P-211A</td><td class="mono">10004512</td><td>Bomba centrífuga de condensado</td><td class="mono">CN-210</td><td class="c">4</td><td class="c">1</td><td><span class="chip-e e-cerr">Encontrado</span></td></tr>
<tr><td class="mono b">P-211B</td><td class="mono">10004513</td><td>Bomba centrífuga de condensado</td><td class="mono">CN-210</td><td class="c">3</td><td class="c">0</td><td><span class="chip-e e-cerr">Encontrado</span></td></tr>
<tr><td class="mono b">PM-211A</td><td class="mono">10004514</td><td>Motor eléctrico 75 kW</td><td class="mono">CN-210</td><td class="c">5</td><td class="c">2</td><td><span class="chip-e e-azul">Con comentarios</span></td></tr>
<tr><td class="mono b">PSV-2104</td><td class="mono">10004530</td><td>Válvula de alivio de descarga</td><td class="mono">CN-210</td><td class="c">0</td><td class="c">1</td><td><span class="chip-e e-rojo">No encontrado</span></td></tr>
<tr><td class="mono b">FV-2107</td><td class="mono">N-00014</td><td>Válvula de control de recirculación</td><td class="mono">CN-210</td><td class="c">2</td><td class="c">1</td><td><span class="chip-e e-cerr">Encontrado</span></td></tr>
<tr><td class="mono b">HT-2101</td><td class="mono">10004541</td><td>Polipasto manual 2 t</td><td class="mono">CN-210</td><td class="c">1</td><td class="c">0</td><td><span class="chip-e e-nuevo">No requiere confirmación</span></td></tr>
</tbody></table></div>
</div>`;

const datos: DatosPagina = {
  tipo: "servicio",
  etiqueta: "Servicio · Levantamiento de activos",
  titulo: "Levantamiento de activos en campo,",
  tituloGris: "equipo por equipo y con evidencia.",
  bajada:
    "Hacemos el censo de equipos de tu planta recorriendo cada ubicación técnica con nuestra app de campo, aunque no haya señal. Tags, placas, fotos con GPS y notas de voz. Te entregamos la taxonomía ISO 14224 cargada en ReliaPlant y exportable a tu CMMS.",
  foto: { src: "/sitio/campo-placa-motor.jpg", alt: "Técnico fotografiando la placa de un motor con el celular durante el levantamiento de activos" },
  tarjeta: {
    titulo: "CN-210",
    subtitulo: "Recorrido · Compresión Norte",
    filas: [
      ["Encontrados", "38 de 42"],
      ["Equipos nuevos", "3"],
      ["Fotos con GPS", "164"],
    ],
  },
  pantalla: PANTALLA,
  pantallaPie:
    "TAX → Recorrido: lo que marca el equipo de campo llega a la plataforma con sus fotos y notas de voz. Los equipos nuevos entran con código provisional (N-00014) hasta tener el definitivo.",
  destacado: {
    etiqueta: "App de campo · Android",
    titulo: "El levantamiento se hace en planta,",
    tituloGris: "aunque no haya señal.",
    texto: "Nuestro equipo descarga la planta al teléfono antes de bajar. Registra equipos, toma fotos y graba notas de voz en cada UT. Al recuperar señal, todo se sube solo a tu plataforma.",
    puntos: [
      "Fotos en calidad original, con GPS y fecha.",
      "Los DTIs de la planta guardados en el teléfono, con zoom.",
      "Equipos nuevos directo en su ubicación técnica.",
      "Si la señal se cae a mitad de una subida, no se pierde ni se duplica nada.",
    ],
    foto: { src: "/sitio/campo-placa-motor.jpg", alt: "Técnico fotografiando la placa de un motor con el celular" },
    pantalla: TELEFONO,
  },
  problema: {
    titulo: "El listado de equipos dice una cosa.",
    tituloGris: "La planta dice otra.",
    puntos: [
      {
        titulo: "Un maestro de equipos que nadie confía",
        texto:
          "Tags repetidos, equipos dados de baja que siguen activos en el sistema y equipos instalados que nunca se dieron de alta. Cada análisis de criticidad o RCM arranca con semanas de limpieza.",
      },
      {
        titulo: "Datos de placa en libretas y fotos sueltas",
        texto:
          "El levantamiento clásico termina en cientos de fotos sin nombre en un teléfono y una hoja de Excel que alguien transcribe después. Lo que no se anotó en campo se pierde.",
      },
      {
        titulo: "Proyectos que cambian la planta",
        texto:
          "Una ampliación o un paro mayor agrega, mueve y retira equipos. Si no se registra qué había antes y qué quedó al final, el CMMS queda desfasado el día que arranca la operación.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Preparación y criterios",
      texto:
        "Revisamos tu listado actual, DTIs y estructura de ubicaciones técnicas. Acordamos con tu equipo la jerarquía ISO 14224, criterios de codificación, qué equipos entran y qué datos técnicos se levantan por clase.",
    },
    {
      titulo: "Carga inicial y descarga offline",
      texto:
        "Cargamos lo que ya existe en ReliaPlant con la carga masiva desde Excel. El equipo de campo descarga la planta al teléfono: equipos, UTs y DTIs quedan disponibles sin señal.",
    },
    {
      titulo: "Recorrido por ubicación técnica",
      texto:
        "En cada UT se confirma cada equipo: encontrado, con comentarios, no encontrado o no requiere confirmación. Se toman fotos del equipo y de la placa con GPS, se graban notas de voz y se registran los equipos que no estaban en el listado.",
    },
    {
      titulo: "Consolidación en oficina",
      texto:
        "Mientras avanza el campo, el equipo remoto completa datos técnicos, ubica cada equipo con su marcador en el DTI y en el mapa satelital, y resuelve los pendientes que deja el recorrido.",
    },
    {
      titulo: "Entrega y exportación",
      texto:
        "Revisas la taxonomía en la plataforma, con su evidencia. Exportamos equipos y ubicaciones técnicas a Excel con el formato de tu CMMS para la carga en SAP PM u otro sistema.",
    },
  ],
  capacidades: [
    {
      titulo: "App de campo offline",
      texto:
        "Funciona dentro de la planta sin señal. Lo que se registra queda en cola en el teléfono y se sincroniza solo al recuperar conexión.",
    },
    {
      titulo: "Fotos con GPS y notas de voz",
      texto:
        "Cada foto guarda su posición en los datos de la imagen. Las notas de voz quedan ligadas al equipo o a la UT, así nada depende de la memoria de quien hizo el recorrido.",
    },
    {
      titulo: "Equipos nuevos desde el teléfono",
      texto:
        "Lo que aparece en campo y no estaba en el listado se registra con tag, fotos y audio. Si el código no es la KEY de carga, recibe un código provisional N-00001 hasta tener el definitivo.",
    },
    {
      titulo: "Ubicación en DTIs y mapa",
      texto:
        "Cada equipo queda con su marcador en el DTI y su punto en la vista satelital de la planta. Desde la ficha se llega directo a dónde está.",
    },
    {
      titulo: "Taxonomía ISO 14224 lista",
      texto:
        "Ubicaciones técnicas, equipos y subequipos en jerarquía, con clase, tipo, criticidad, centro de costo y datos técnicos validados contra la configuración de cada clase.",
    },
    {
      titulo: "Modo construcción para proyectos",
      texto:
        "Para ampliaciones y paros: registro original al iniciar, equipos nuevos marcados con su ciclo y un cierre con exportable que deja constancia de qué cambió.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo hace el recorrido",
      texto:
        "Si tienes técnicos disponibles, les das la app de campo y la plataforma. Tú defines el ritmo y nosotros te dejamos la estructura configurada.",
      incluye: [
        "App de campo offline para tus técnicos",
        "Carga masiva desde Excel con vista previa antes de escribir",
        "Fotos y notas de voz de campo en la ficha de cada equipo",
        "Banco de trabajo para marcar equipos en DTIs",
        "Exportable de equipos y UTs en el formato de tu CMMS",
      ],
    },
    servicio: {
      titulo: "Nosotros levantamos la planta",
      texto:
        "Nuestro equipo va a campo y otro trabaja en remoto en paralelo. Te entregamos la taxonomía terminada, con evidencia por equipo, y la carga lista para tu CMMS.",
      incluye: [
        "Definición de jerarquía y criterios de codificación ISO 14224",
        "Levantamiento en campo: tags, placas, fotos con GPS y notas de voz",
        "Datos técnicos por clase de equipo y marcadores en DTIs",
        "Registro de equipos nuevos y conciliación de no encontrados",
        "Exportación para SAP PM u otro CMMS",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es un levantamiento de activos?",
      respuesta:
        "Es el recorrido en campo para confirmar qué equipos existen en la planta, dónde están y cuáles son sus datos de placa. El resultado es un registro de activos confiable, ordenado por ubicación técnica, que sirve de base para criticidad, planes de mantenimiento y el CMMS.",
    },
    {
      pregunta: "¿Cuál es la diferencia entre censo de equipos y taxonomía?",
      respuesta:
        "El censo de equipos dice qué hay y dónde. La taxonomía ordena esos equipos en una jerarquía (planta, sistema, ubicación técnica, equipo, subequipo) con clases y tipos según ISO 14224. En este servicio hacemos las dos cosas: levantamos en campo y entregamos la jerarquía armada.",
    },
    {
      pregunta: "¿Qué datos se levantan de cada equipo?",
      respuesta:
        "Como mínimo tag, descripción, ubicación técnica, equipo superior, fotos del equipo y de la placa. Según lo que acordemos por clase se agregan fabricante, modelo, serie y datos técnicos como potencia, caudal o presión de diseño. Lo que no se puede leer en campo queda como pendiente con su foto.",
    },
    {
      pregunta: "¿Qué pasa con los equipos que no se encuentran en campo?",
      respuesta:
        "Quedan marcados como no encontrados, con lo que haya anotado quien hizo el recorrido. No se borran del registro: los revisamos contigo para decidir si se dan de baja, si cambiaron de tag o si están en otra ubicación técnica.",
    },
    {
      pregunta: "¿Qué se entrega al terminar el tagging de equipos?",
      respuesta:
        "La taxonomía cargada en ReliaPlant con fotos, notas de voz, marcadores en DTIs y ubicación en el mapa por equipo, más el exportable en Excel con el formato de tu CMMS. También te entregamos la lista de equipos no encontrados y de equipos nuevos para conciliar con tu CMMS.",
    },
    {
      pregunta: "¿Cómo se cotiza un levantamiento de activos?",
      respuesta:
        "Depende de la cantidad aproximada de equipos y ubicaciones técnicas, de si hay DTIs y un listado previo, de los datos técnicos que se quieran por clase y de las condiciones de acceso a planta. Con un listado o un DTI de muestra armamos el alcance y te enviamos la propuesta.",
    },
    {
      pregunta: "¿Sirve para un proyecto de ampliación o un paro de planta?",
      respuesta:
        "Sí. Con el modo construcción se guarda un registro original al iniciar, los equipos que entran quedan marcados como nuevos en ese ciclo y al cerrar queda un registro con exportable de cómo terminó la planta.",
    },
  ],
  siguiente: {
    etiqueta: "Siguiente paso del ciclo",
    titulo: "Registro de activos en la plataforma",
    href: "/producto/taxonomia",
  },
  origen: "web - /servicios/levantamiento-de-activos",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";
import { RCM } from "@/components/home/piezas";

export const metadata: Metadata = {
  title: { absolute: "RCM: mantenimiento centrado en confiabilidad | ReliaPlant" },
  description:
    "Haz el análisis RCM completo sobre tus equipos: funciones, modos de falla, NPR con tus escalas, diagrama de decisión y plan exportable a Excel.",
  alternates: { canonical: "https://reliaplant.com/producto/rcm" },
};

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · RCM",
  titulo: "Software RCM para hacer el análisis completo,",
  tituloGris: "de la función a la tarea.",
  bajada:
    "Mantenimiento centrado en confiabilidad sobre los equipos de tu taxonomía. Funciones, fallas funcionales, modos de falla, efectos y consecuencias en una sola hoja. El NPR se calcula con las escalas de tu empresa y cada modo termina en una tarea con frecuencia, ejecutor y horas.",
  foto: { src: "/sitio/equipo/bombas-ab.jpg", alt: "Bombas centrífugas P-211A y P-211B en una planta de proceso" },
  tarjeta: {
    titulo: "RCM · P-211A",
    subtitulo: "Bomba de condensado · CN-210",
    filas: [
      ["Modos de falla", "3"],
      ["NPR más alto", "140"],
      ["Tareas a condición", "2"],
    ],
  },
  pantalla: RCM,
  pantallaPie:
    "Hoja de análisis RCM de la P-211A: el NPR (F × S × D) se pinta en verde, amarillo o rojo según los umbrales de tu empresa.",
  problema: {
    titulo: "El RCM se queda en una hoja de Excel",
    tituloGris: "que nadie vuelve a abrir.",
    puntos: [
      {
        titulo: "Cada analista con su formato",
        texto:
          "Columnas distintas, escalas de severidad distintas y criterios distintos. Comparar dos análisis de la misma planta es imposible.",
      },
      {
        titulo: "El análisis no termina en el plan",
        texto:
          "Las tareas se copian a mano al sistema de mantenimiento. En el camino se pierden frecuencias, ejecutores y el motivo de cada tarea.",
      },
      {
        titulo: "Se empieza de cero en cada equipo",
        texto:
          "Diez bombas iguales, diez análisis desde la hoja en blanco. Lo que el equipo de trabajo ya decidió no se reutiliza.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Crea el proyecto sobre el equipo",
      texto:
        "Eliges el equipo de la taxonomía y el proyecto toma su tag, ubicación técnica, clase y criticidad. Asignas responsable, prioridad y fecha estimada de fin.",
    },
    {
      titulo: "Documenta el contexto",
      texto:
        "Límite del análisis, premisas, contexto operacional y entrevistas. Registras el equipo natural de trabajo, con miembros internos y externos.",
    },
    {
      titulo: "Llena la hoja de análisis",
      texto:
        "Funciones, fallas funcionales, modos de falla y efectos. Calificas F, S y D con las escalas de tu empresa y el NPR se calcula solo. Si el equipo es grande, lo divides en unidades.",
    },
    {
      titulo: "Decide la tarea con el diagrama",
      texto:
        "Respondes el diagrama de decisión por modo de falla: consecuencia oculta, de seguridad, ambiental u operacional. El resultado sugiere el tipo de tarea: a condición, preventiva, búsqueda de fallas o rediseño.",
    },
    {
      titulo: "Saca el plan y da seguimiento",
      texto:
        "La pestaña Plan junta todas las tareas con frecuencia, ejecutor y horas. Lo descargas en Excel con la salida para tu CMMS, y las recomendaciones quedan con responsable, estatus y fecha.",
    },
  ],
  capacidades: [
    {
      titulo: "NPR con las escalas de tu empresa",
      texto:
        "Defines las escalas de frecuencia, severidad y detectabilidad, y los umbrales del semáforo del NPR. Todos los proyectos de la organización usan el mismo criterio.",
    },
    {
      titulo: "Diagrama de decisión RCM",
      texto:
        "Preguntas de sí o no por modo de falla que separan consecuencias ocultas, de seguridad, ambientales y operacionales. Las respuestas quedan guardadas en el análisis.",
    },
    {
      titulo: "Catálogo de tipos de tarea",
      texto:
        "Tareas a condición (predictivo, inspección, ensayos no destructivos), búsqueda de fallas, preventivas (lubricación, ajuste, sustitución cíclica), correr hasta la falla y rediseño. Puedes ajustar el catálogo y los ejecutores.",
    },
    {
      titulo: "Plantillas reutilizables",
      texto:
        "Guarda un análisis como plantilla, ordénala por categoría (por ejemplo, por familia de equipo) e impórtala en el siguiente proyecto. También hay plantillas por unidad, como un sello o un motor.",
    },
    {
      titulo: "Excel de ida y vuelta",
      texto:
        "Descarga el análisis con hojas de resumen, plan de mantenimiento, template CMMS y recomendaciones. Edítalo en Excel y vuelve a subirlo: el NPR y la clasificación se recalculan.",
    },
    {
      titulo: "Indicadores de RCM",
      texto:
        "Proyectos creados por mes y por estatus, recomendaciones por estado y distribución de análisis por ubicación técnica, clase de equipo y criticidad.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo hace el RCM en ReliaPlant",
      texto:
        "Tus ingenieros arman los proyectos, facilitan las sesiones y llenan la hoja de análisis. La plataforma pone el formato, las escalas y el diagrama de decisión.",
      incluye: [
        "Proyectos RCM sobre los equipos de tu taxonomía",
        "Escalas de F, S y D y umbrales de NPR configurables",
        "Diagrama de decisión y catálogo de tareas",
        "Plantillas por categoría y por unidad",
        "Exportación del plan a Excel con salida para CMMS",
      ],
    },
    servicio: {
      titulo: "Nosotros hacemos el estudio RCM",
      texto:
        "Ingenieros de confiabilidad de ReliaPlant facilitan el análisis con tu personal de operación y mantenimiento, y te entregan el plan cargado en la plataforma.",
      incluye: [
        "Selección de equipos críticos y alcance del estudio",
        "Facilitación de sesiones con tu equipo natural de trabajo",
        "Hoja de análisis completa con NPR y decisión de tareas",
        "Plan de mantenimiento listo para tu CMMS",
        "Plantillas de tus familias de equipo para los siguientes análisis",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es el mantenimiento centrado en confiabilidad (RCM)?",
      respuesta:
        "Es una metodología para definir qué mantenimiento necesita cada equipo según lo que debe hacer en su contexto de operación. Parte de las funciones, identifica cómo puede fallar y qué consecuencias tiene cada falla. Con eso decide la tarea que vale la pena hacer, o si conviene rediseñar.",
    },
    {
      pregunta: "¿Cuáles son las 7 preguntas del RCM?",
      respuesta:
        "Cuáles son las funciones del equipo, de qué forma puede fallar, qué causa cada falla, qué pasa cuando falla, qué importancia tiene cada falla, qué se puede hacer para prevenirla y qué hacer si no hay una tarea adecuada. En ReliaPlant las cinco primeras viven en la hoja de análisis y las dos últimas en el diagrama de decisión.",
    },
    {
      pregunta: "¿Qué hace un software RCM que no hace una hoja de Excel?",
      respuesta:
        "Mantiene un solo formato y las mismas escalas en todos los análisis de la empresa. Enlaza cada análisis con el equipo real de la taxonomía, guarda el diagrama de decisión y junta las tareas en un plan. Y permite reutilizar análisis como plantillas. Si igual quieres trabajar en Excel, ReliaPlant exporta e importa la hoja de análisis.",
    },
    {
      pregunta: "¿Cómo se calcula el NPR en un análisis RCM?",
      respuesta:
        "El NPR (número de prioridad de riesgo) es el producto de frecuencia, severidad y detectabilidad: NPR = F × S × D. Con escalas de 1 a 10 va de 1 a 1000. En ReliaPlant la empresa define sus escalas y los cortes que pintan el NPR en verde, amarillo o rojo.",
    },
    {
      pregunta: "¿Cuál es la diferencia entre RCM y FMEA?",
      respuesta:
        "El FMEA (o AMEF) identifica modos de falla y sus efectos, y suele priorizarlos con el NPR. El RCM incluye ese análisis, pero parte de las funciones del equipo, evalúa las consecuencias de cada falla y termina en una decisión de tarea de mantenimiento.",
    },
    {
      pregunta: "¿Qué tipos de tareas resultan de un RCM?",
      respuesta:
        "Tareas a condición, que buscan síntomas de falla, como análisis de vibraciones o inspecciones. Tareas preventivas a intervalo fijo, como lubricación o sustitución cíclica. Búsqueda de fallas para funciones ocultas, correr hasta la falla cuando no conviene hacer nada, y rediseño cuando ninguna tarea reduce el riesgo.",
    },
    {
      pregunta: "¿Cuánto tarda un análisis RCM de un equipo?",
      respuesta:
        "Depende del equipo, del alcance y de cuánta información haya. Un equipo sencillo puede salir en una o dos sesiones con el equipo de trabajo. Las plantillas por familia de equipo acortan mucho los análisis de equipos parecidos.",
    },
  ],
  siguiente: {
    etiqueta: "Siguiente en el ciclo: si una falla ya ocurrió",
    titulo: "Análisis de causa raíz (RCA)",
    href: "/producto/rca",
  },
  origen: "web - /producto/rcm",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";
import { RCA } from "@/components/home/piezas";

export const metadata: Metadata = {
  title: { absolute: "Software de análisis de causa raíz (RCA) | ReliaPlant" },
  description:
    "Software de análisis de causa raíz: árbol lógico, hipótesis verificadas con tareas, IA que sugiere modos de falla y reporte PDF listo para el comité.",
  alternates: { canonical: "https://reliaplant.com/producto/rca" },
};

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · RCA",
  titulo: "Análisis de causa raíz con método,",
  tituloGris: "sin burocracia.",
  bajada:
    "Software de análisis de causa raíz (RCA) para mantenimiento y confiabilidad. Del evento al árbol lógico: modos de falla, hipótesis verificadas en campo y causas físicas, humanas y de gestión. La IA propone y tu equipo decide.",
  foto: { src: "/sitio/equipo-rca.jpg", alt: "Equipo de confiabilidad analizando la causa raíz de una falla" },
  tarjeta: {
    titulo: "P-211A · Disparo por vibración",
    subtitulo: "RCA en proceso",
    filas: [
      ["Hipótesis", "5 · 2 descartadas"],
      ["Tareas de verificación", "3 de 4"],
      ["Recomendaciones", "4"],
    ],
  },
  pantalla: RCA,
  pantallaPie:
    "Árbol lógico de un RCA en ReliaPlant: el evento arriba, los modos de falla, las hipótesis verificadas o descartadas y las causas raíz clasificadas.",
  problema: {
    titulo: "La misma falla vuelve.",
    tituloGris: "Y el RCA quedó en una presentación.",
    puntos: [
      {
        titulo: "Hipótesis sin verificar",
        texto:
          "El análisis se cierra con la opinión de quien habló más fuerte. Nadie fue a medir, a revisar el aceite ni a sacar el registro de la alineación.",
      },
      {
        titulo: "Se queda en la causa física",
        texto:
          "Se cambia el rodamiento y se cierra el caso. La causa humana y la de gestión, las que hacen que la falla se repita, no se tocan.",
      },
      {
        titulo: "Recomendaciones que nadie sigue",
        texto:
          "Las acciones viven en un acta o en un correo. Seis meses después nadie sabe cuáles se hicieron, cuáles se descartaron ni quién las tenía.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Registra el evento",
      texto:
        "Título, tipo de evento, fecha, impacto y el equipo afectado desde la taxonomía, con su UT, criticidad y equipo superior. Arma el equipo de trabajo con gente de la organización o externos.",
    },
    {
      titulo: "Reconstruye la cronología",
      texto:
        "Sube evidencias (fotos, PDF, hojas de cálculo) y arma la línea de tiempo de eventos. La IA puede leer las evidencias y proponer los eventos con fecha y hora.",
    },
    {
      titulo: "Construye el árbol lógico",
      texto:
        "Del evento a los modos de falla y de ahí a las hipótesis. El asistente de IA sugiere modos de falla e hipótesis a partir del evento y del equipo; tú eliges cuáles entran.",
    },
    {
      titulo: "Verifica cada hipótesis",
      texto:
        "Cada hipótesis lleva tareas con responsable y fecha. Con las evidencias en mano se marca como causa (principal o contribuyente) o se descarta, con su conclusión.",
    },
    {
      titulo: "Recomienda y da seguimiento",
      texto:
        "Cada causa genera recomendaciones con responsable, fechas y prioridad por impacto y esfuerzo. Se siguen con hitos y notas hasta implementarlas, y el reporte PDF sale del mismo análisis.",
    },
  ],
  capacidades: [
    {
      titulo: "Árbol lógico visual",
      texto:
        "Evento, modos de falla, hipótesis, mecanismos de falla, hechos y causas humanas, de gestión y ambientales. Las hipótesis descartadas quedan a la vista, en gris.",
    },
    {
      titulo: "IA que propone, no decide",
      texto:
        "Sugiere modos de falla con preguntas guiadas e hipótesis con su razonamiento y las tareas para verificarlas. Nada entra al árbol sin que lo selecciones.",
    },
    {
      titulo: "Evidencias y cronología",
      texto:
        "Fotos y documentos asociados a cada hipótesis. Línea de tiempo del evento, armada a mano o propuesta por la IA a partir de las evidencias.",
    },
    {
      titulo: "Tareas de verificación",
      texto:
        "Responsable, fecha de vencimiento y estado (pendiente, completada, atrasada) por tarea. Recordatorios por correo al equipo desde el mismo análisis.",
    },
    {
      titulo: "Recomendaciones con seguimiento",
      texto:
        "Matriz impacto por esfuerzo para priorizar, hitos, notas, anexos e historial. Vistas por proyecto, por responsable, por estatus y tablero kanban.",
    },
    {
      titulo: "Reportes y KPIs",
      texto:
        "Reporte PDF con el árbol, descarga del proyecto completo en ZIP y editables en Excel. KPIs de RCAs por estatus, impacto y mes, tiempo promedio y avance de recomendaciones.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo hace el RCA en ReliaPlant",
      texto:
        "El ingeniero de confiabilidad facilita el análisis, el equipo de trabajo carga evidencias y cierra tareas, y la IA acelera las partes lentas.",
      incluye: [
        "Árbol lógico con modos de falla, hipótesis y causas raíz",
        "Asistente de IA para modos de falla, hipótesis y cronología",
        "Tareas de verificación con responsable y fecha",
        "Recomendaciones con prioridad, hitos y seguimiento",
        "Reporte PDF y KPIs del programa de RCA",
      ],
    },
    servicio: {
      titulo: "Facilitamos el RCA con tu equipo",
      texto:
        "Un especialista de ReliaPlant conduce el análisis de los eventos que más te cuestan y deja todo cargado en la plataforma, listo para dar seguimiento.",
      incluye: [
        "Facilitación de sesiones de RCA con el equipo de trabajo",
        "Recolección y orden de evidencias del evento",
        "Árbol lógico completo y verificación de hipótesis",
        "Reporte final y plan de recomendaciones",
        "Formación de facilitadores internos en la metodología",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es un análisis de causa raíz (RCA)?",
      respuesta:
        "Es un método para encontrar por qué ocurrió una falla y qué hay que cambiar para que no se repita. Parte del evento, identifica los modos de falla, plantea hipótesis y las verifica con evidencia hasta llegar a las causas físicas, humanas y de gestión. El resultado son recomendaciones concretas con responsable.",
    },
    {
      pregunta: "¿Qué debe tener un buen software de análisis de causa raíz?",
      respuesta:
        "Un árbol lógico donde se vea el razonamiento completo, tareas para verificar cada hipótesis, evidencias asociadas y un seguimiento real de las recomendaciones. También debe estar ligado al equipo y a su historial, no ser un documento suelto. ReliaPlant cubre todo eso y suma un asistente de IA y un reporte PDF.",
    },
    {
      pregunta: "¿Cuál es la diferencia entre causa física, causa humana y causa de gestión?",
      respuesta:
        "La causa física es el mecanismo que produjo la falla, por ejemplo lubricante contaminado con agua. La causa humana es la acción o decisión que la permitió, como una alineación hecha sin procedimiento. La causa de gestión es la falla del sistema que dejó que eso pasara, como no tener una rutina de análisis de aceite. Las recomendaciones de fondo atacan esta última.",
    },
    {
      pregunta: "¿Cuándo conviene hacer un RCA?",
      respuesta:
        "Ante fallas repetitivas, eventos de seguridad o fallas con alto impacto en producción, ambiente o costo. En ReliaPlant cada RCA lleva tipo de evento e impacto y se puede marcar como prioritario. Así el equipo dedica el esfuerzo a los eventos que lo justifican.",
    },
    {
      pregunta: "¿Cómo ayuda la IA en el análisis de causa raíz?",
      respuesta:
        "Sugiere modos de falla a partir de lo que ocurrió y cómo se manifestó, propone hipótesis con su razonamiento y las tareas para verificarlas, y arma la cronología leyendo las evidencias. Todo llega como propuesta: el equipo decide qué entra al árbol.",
    },
    {
      pregunta: "¿Qué diferencia hay entre RCA y RCM?",
      respuesta:
        "El RCA es reactivo: investiga una falla que ya ocurrió. El RCM es proactivo: analiza los modos de falla de un equipo antes de que fallen y define la tarea de mantenimiento para cada uno. Se complementan: lo que aprendes en un RCA alimenta el plan de mantenimiento.",
    },
    {
      pregunta: "¿Puedo sacar un reporte del RCA para el comité?",
      respuesta:
        "Sí. El reporte PDF incluye la información del evento, el equipo, el árbol lógico, las hipótesis y las recomendaciones. También puedes descargar el proyecto completo en ZIP con las evidencias, o los editables en Excel con la imagen del árbol.",
    },
  ],
  siguiente: {
    etiqueta: "Siguiente en el ciclo",
    titulo: "Planes de mantenimiento",
    href: "/producto/planes-de-mantenimiento",
  },
  origen: "web - /producto/rca",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

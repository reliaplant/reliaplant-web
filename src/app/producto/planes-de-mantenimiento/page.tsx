import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "Software de plan de mantenimiento preventivo | ReliaPlant" },
  description:
    "Arma rutinas con tareas, frecuencias y horas-hombre, asígnalas a tus equipos y ve el plan maestro anual mes a mes. Carga tus hojas de ruta desde Excel.",
  alternates: { canonical: "https://reliaplant.com/producto/planes-de-mantenimiento" },
};

// Réplica de la pestaña PM → Rutinas: detalle de una rutina con sus tareas (mismas columnas que RutinaModal).
const fila = (n: number, tarea: string, puesto: string, personas: number, horas: string, frec: string, hh: string) =>
  `<tr><td class="c mono">${n}</td><td>${tarea}</td><td>${puesto}</td><td class="c">${personas}</td><td class="c">${horas}</td><td>${frec}</td><td class="c">${hh}</td></tr>`;

const PANTALLA =
  `<div class="pantalla" role="img" aria-label="Pantalla de PM en ReliaPlant: rutina RB-CEN de bomba centrífuga con sus tareas, puestos, horas y frecuencias">` +
  `<div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span>TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span class="act">PM</span><span>RBI</span></div></div>` +
  `<div class="rp-sub"><span class="act">Rutinas</span><span>Planes de Mantenimiento</span><span>Plan Maestro</span><span>Indicadores</span></div>` +
  `<div class="scroll-x"><table class="tabla-app"><thead><tr><th class="c">#</th><th>Tarea · RB-CEN Bomba centrífuga</th><th>Puesto de trabajo</th><th class="c">Personas</th><th class="c">Horas c/u</th><th>Frecuencia</th><th class="c">H-H / año</th></tr></thead><tbody>` +
  fila(10, "Inspección de fuga del sello mecánico", "Mecánica", 1, "0,5", "cada mes", "6") +
  fila(20, "Análisis de vibraciones en rodamientos", "Predictivo", 1, "0,5", "cada mes", "6") +
  fila(30, "Cambio de aceite de rodamientos", "Mecánica", 1, "1,5", "cada 3 meses", "6") +
  fila(40, "Revisión de alineación bomba-motor", "Mecánica", 2, "2", "cada 6 meses", "8") +
  fila(50, "Medición de aislamiento del motor", "Electricidad", 1, "1", "cada año", "1") +
  `<tr class="tot"><td colspan="6">Frecuencias 1M, 3M, 6M, 1A · horas-hombre al año por cada equipo con esta rutina</td><td class="c">27</td></tr>` +
  `</tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · Planes de mantenimiento",
  titulo: "Tu plan de mantenimiento preventivo,",
  tituloGris: "con horas-hombre y calendario del año.",
  bajada:
    "Software de planes de mantenimiento para armar rutinas por tipo de equipo, asignarlas a cada tag de tu taxonomía y ver el plan maestro del año mes a mes, con la carga por puesto de trabajo.",
  foto: { src: "/sitio/preventivo-engrase.jpg", alt: "Técnico haciendo una tarea de lubricación preventiva en una bomba" },
  tarjeta: {
    titulo: "RB-CEN",
    subtitulo: "Rutina · Bomba centrífuga",
    filas: [
      ["Tareas", "5"],
      ["Frecuencias", "1M · 3M · 6M · 1A"],
      ["H-H / año por equipo", "27 h"],
    ],
  },
  pantalla: PANTALLA,
  pantallaPie:
    "Una rutina por tipo de equipo. Cada tarea lleva su puesto de trabajo, personas, horas y frecuencia propia, y la rutina suma sola las horas-hombre al año.",
  problema: {
    titulo: "El preventivo vive en un Excel",
    tituloGris: "que nadie se atreve a tocar.",
    puntos: [
      {
        titulo: "Las rutinas no tienen dueño",
        texto:
          "La misma bomba tiene tres versiones de su rutina, cada una con horas distintas. Nadie sabe cuál es la vigente ni de dónde salieron las frecuencias.",
      },
      {
        titulo: "No sabes cuánta gente necesitas",
        texto:
          "El plan dice qué hacer, pero no cuántas horas-hombre pide cada mes por especialidad. Te enteras de que no alcanza cuando el backlog ya creció.",
      },
      {
        titulo: "Hay equipos críticos sin preventivo",
        texto:
          "Sin cruzar el plan con la taxonomía y la criticidad, siempre quedan equipos importantes sin ninguna rutina asignada, y nadie lo nota hasta la falla.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Arma o carga tus rutinas",
      texto:
        "Crea la rutina de cada tipo de equipo con sus tareas, o súbelas desde Excel. Cada tarea lleva puesto de trabajo, personas, horas y frecuencia.",
    },
    {
      titulo: "Asigna rutinas a equipos",
      texto:
        "Un plan de mantenimiento es una lista de filas equipo → rutina, tomadas de tu taxonomía. Un mismo equipo puede llevar varias rutinas, por ejemplo bomba y motor.",
    },
    {
      titulo: "Define la fecha de inicio",
      texto:
        "Todas las fechas del plan se calculan desde esa fecha, sin encadenarse. Las tareas de distintas frecuencias que caen el mismo día se juntan en un solo paquete.",
    },
    {
      titulo: "Revisa el plan maestro y los indicadores",
      texto:
        "Ve todos los planes activos mes a mes en el año actual y el siguiente, la carga de horas-hombre por puesto y qué equipos críticos siguen sin preventivo.",
    },
  ],
  capacidades: [
    {
      titulo: "Rutinas con tareas detalladas",
      texto:
        "Tareas numeradas 10, 20, 30, con descripción, puesto de trabajo, personas, horas por persona y procedimiento paso a paso opcional.",
    },
    {
      titulo: "Una frecuencia por tarea",
      texto:
        "En la misma rutina conviven tareas mensuales, trimestrales y anuales. Frecuencias en días, semanas, meses o años, con atajos de un clic.",
    },
    {
      titulo: "Planes por área o sistema",
      texto:
        "Agrupa equipos y rutinas en planes como \"Preventivo área de bombeo\". Cada plan se puede pausar sin perder su configuración.",
    },
    {
      titulo: "Plan maestro anual",
      texto:
        "Calendario de dos años con los planes desplegados por equipo. Un marcador en cada mes donde toca algo y, con un clic, las tareas de ese mes.",
    },
    {
      titulo: "Indicadores del preventivo",
      texto:
        "Horas-hombre de los próximos 12 meses por puesto de trabajo, mes más cargado, cobertura de equipos por criticidad y una lista de cosas por revisar.",
    },
    {
      titulo: "Carga desde Excel o SAP",
      texto:
        "Plantilla con una fila por tarea. Reconoce columnas de hojas de ruta de SAP y frecuencias como 1M o 6M. Si hay un error, no importa nada.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Arma y mantén tu preventivo tú mismo",
      texto:
        "Tu equipo de planificación crea las rutinas, arma los planes sobre la taxonomía y sigue la carga de horas-hombre desde la plataforma.",
      incluye: [
        "Rutinas y planes de mantenimiento por planta",
        "Carga masiva de rutinas desde Excel",
        "Plan maestro de dos años",
        "Indicadores de carga y cobertura por criticidad",
      ],
    },
    servicio: {
      titulo: "Te armamos el plan de mantenimiento",
      texto:
        "Nuestros ingenieros de confiabilidad construyen el plan con tu gente, a partir de tus equipos, tu historial y las recomendaciones del fabricante.",
      incluye: [
        "Levantamiento y taxonomía de los equipos",
        "Definición de rutinas por tipo de equipo, basada en RCM cuando aplica",
        "Migración de hojas de ruta existentes, por ejemplo desde SAP",
        "Balanceo de la carga de horas-hombre por especialidad",
        "Capacitación del equipo de planificación",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es un plan de mantenimiento preventivo?",
      respuesta:
        "Es el conjunto de tareas programadas que se hacen a cada equipo con una frecuencia definida, antes de que falle. Indica qué se hace, cada cuánto, quién lo hace y cuántas horas toma. En ReliaPlant se arma con rutinas por tipo de equipo asignadas a los equipos de tu taxonomía.",
    },
    {
      pregunta: "¿Cómo se hace un plan de mantenimiento preventivo paso a paso?",
      respuesta:
        "Primero ten la lista de equipos ordenada por ubicación técnica y criticidad. Luego define una rutina por tipo de equipo con tareas, frecuencias, especialidades y horas. Después asigna las rutinas a cada equipo, fija la fecha de inicio y revisa que la carga mensual de horas-hombre sea viable para tu personal.",
    },
    {
      pregunta: "¿Qué diferencia hay entre una rutina y un plan de mantenimiento?",
      respuesta:
        "La rutina es la lista estándar de tareas para un tipo de equipo, por ejemplo una bomba centrífuga. El plan dice a qué equipos concretos se aplica cada rutina y desde qué fecha. Así una sola rutina sirve para todas las bombas iguales de la planta.",
    },
    {
      pregunta: "¿Qué es un plan maestro de mantenimiento?",
      respuesta:
        "Es la vista anual de todo el preventivo de la planta: qué equipo recibe qué tareas en cada mes. Sirve para ver picos de carga, como un mes con varios overhauls, y para coordinar paradas. En ReliaPlant se genera solo a partir de los planes activos.",
    },
    {
      pregunta: "¿Cómo calculo las horas-hombre del mantenimiento preventivo?",
      respuesta:
        "Por cada tarea se multiplican personas por horas por persona y por las veces que se repite en el año. La suma de todas las tareas de todos los equipos da la carga anual. ReliaPlant hace ese cálculo por rutina, por plan y por puesto de trabajo mes a mes.",
    },
    {
      pregunta: "¿Puedo pasar mis hojas de ruta de SAP o Excel a ReliaPlant?",
      respuesta:
        "Sí. La carga de rutinas usa una fila por tarea y reconoce columnas típicas de hojas de ruta de SAP y frecuencias escritas como mensual, cada 3 meses o 6M. Antes de importar ves una vista previa con rutinas nuevas, actualizadas y errores.",
    },
    {
      pregunta: "¿Qué debe tener un buen software de planes de mantenimiento?",
      respuesta:
        "Rutinas reutilizables, frecuencias por tarea, enlace a la taxonomía de equipos, cálculo de horas-hombre por especialidad y una vista anual del programa. También conviene que muestre qué equipos críticos no tienen preventivo, para cerrar esos huecos.",
    },
  ],
  siguiente: {
    etiqueta: "Siguiente en el ciclo",
    titulo: "Integridad mecánica con RBI",
    href: "/producto/integridad-rbi",
  },
  origen: "web - /producto/planes-de-mantenimiento",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

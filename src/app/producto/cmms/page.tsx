import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "Software de gestión de mantenimiento (CMMS) | ReliaPlant" },
  description:
    "CMMS / GMAO para plantas industriales: avisos desde campo aun sin señal, órdenes de trabajo con horas y materiales, calendario y cierre técnico por equipo.",
  alternates: { canonical: "https://reliaplant.com/producto/cmms" },
};

// Réplica de la pestaña GMAO → Órdenes de trabajo (columnas y estatus reales de OrdenesTab.tsx).
const PANTALLA_OT = `<div class="pantalla" role="img" aria-label="Pantalla de órdenes de trabajo del GMAO de ReliaPlant"><div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span>TAX</span><span class="act">GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div></div><div class="rp-sub"><span>Avisos</span><span class="act">Órdenes de Trabajo</span><span>Calendario</span><span>Configuración</span></div><div class="scroll-x"><table class="tabla-app"><thead><tr><th>N.º OT</th><th>Título</th><th>Tipo</th><th>Tag de equipo</th><th class="c">Prioridad</th><th>Inicio planificado</th><th>Responsable</th><th class="c">Horas est.</th><th class="c">Horas reales</th><th class="c">Estatus</th></tr></thead><tbody><tr><td class="mono">OT-000456</td><td>Cambio de sello mecánico</td><td>Correctiva</td><td class="mono b">P-211A</td><td class="c"><span class="chip-e p-alta">Alta</span></td><td class="mono">12/11 07:00</td><td>J. Pérez</td><td class="c mono">6,0</td><td class="c mono">4,5</td><td class="c"><span class="chip-e e-aprob">En ejecución</span></td></tr><tr><td class="mono">OT-000455</td><td>Revisión de válvulas del cilindro 2</td><td>Correctiva</td><td class="mono b">K-301B</td><td class="c"><span class="chip-e p-emer">Emergencia</span></td><td class="mono">12/11 14:00</td><td>M. Rondón</td><td class="c mono">12,0</td><td class="c mono">0,0</td><td class="c"><span class="chip-e e-rev">Planificada</span></td></tr><tr><td class="mono">OT-000453</td><td>Lubricación de rodamientos</td><td>Preventiva</td><td class="mono b">E-410C</td><td class="c"><span class="chip-e p-baja">Baja</span></td><td class="mono">13/11 08:00</td><td>L. Gómez</td><td class="c mono">2,0</td><td class="c mono">0,0</td><td class="c"><span class="chip-e e-rev">Planificada</span></td></tr><tr><td class="mono">OT-000451</td><td>Medición de vibraciones</td><td>Predictiva</td><td class="mono b">P-211B</td><td class="c"><span class="chip-e p-media">Media</span></td><td class="mono">10/11 09:00</td><td>C. Ruiz</td><td class="c mono">1,5</td><td class="c mono">1,5</td><td class="c"><span class="chip-e e-cerr">Cerrada</span></td></tr><tr><td class="mono">OT-000449</td><td>Reemplazar manómetro por transmisor</td><td>Mejora</td><td class="mono b">PI-213</td><td class="c"><span class="chip-e p-media">Media</span></td><td class="mono">Sin programar</td><td>Sin responsable</td><td class="c mono">3,0</td><td class="c mono">0,0</td><td class="c"><span class="chip-e e-nuevo">Abierta</span></td></tr></tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · GMAO / CMMS",
  titulo: "Software de gestión de mantenimiento,",
  tituloGris: "del aviso en campo a la orden cerrada.",
  bajada:
    "Un CMMS (GMAO) conectado a tu taxonomía. El técnico reporta la falla desde el teléfono, el supervisor la aprueba y la vuelve orden de trabajo, la programa en el calendario y la cierra con parte, daño y causa.",
  foto: { src: "/sitio/gmao-orden-bomba.jpg", alt: "Técnicos ejecutando una orden de trabajo en una bomba" },
  tarjeta: {
    titulo: "OT-000456",
    subtitulo: "P-211A · Cambio de sello mecánico",
    filas: [
      ["Tipo", "Correctiva"],
      ["Horas est. / reales", "6,0 / 4,5"],
      ["Estatus", "En ejecución"],
    ],
  },
  pantalla: PANTALLA_OT,
  pantallaPie:
    "Órdenes de trabajo de la planta Compresión Norte: tipo, prioridad, fecha planificada, responsable y horas estimadas contra reales.",
  problema: {
    titulo: "El mantenimiento se hace.",
    tituloGris: "Lo que no queda es el registro.",
    puntos: [
      {
        titulo: "Fallas que se reportan por WhatsApp",
        texto: "El aviso llega en un mensaje o de palabra. No queda el equipo exacto, ni cuándo empezó la falla, ni si el equipo quedó parado.",
      },
      {
        titulo: "Órdenes cerradas sin cierre técnico",
        texto: "La OT dice \"reparado\" y nada más. Sin parte, daño ni causa no hay forma de calcular MTBF ni de saber qué falla se repite.",
      },
      {
        titulo: "Programación que vive en una hoja aparte",
        texto: "El calendario está en Excel y no cruza con quién está disponible. Dos órdenes caen al mismo técnico a la misma hora y nadie lo ve.",
      },
    ],
  },
  pasos: [
    {
      titulo: "El técnico reporta el aviso",
      texto: "Desde la app de campo elige el equipo, describe la falla, marca si está parado y toma fotos. Sin señal, el aviso queda en cola y se envía al volver la conexión.",
    },
    {
      titulo: "El supervisor lo revisa",
      texto: "ReliaPlant sugiere la prioridad según la criticidad del equipo, el impacto en la función y si está parado. El supervisor lo aprueba, lo rechaza o lo marca como duplicado.",
    },
    {
      titulo: "Se vuelve orden de trabajo",
      texto: "Al aprobar el aviso nace la OT. Se planifica con operaciones, especialidad, personas, horas estimadas, técnicos asignados y materiales.",
    },
    {
      titulo: "Se programa y se ejecuta",
      texto: "La OT se arrastra a un día y hora del calendario. El responsable la inicia y registra las horas reales de cada técnico por operación.",
    },
    {
      titulo: "Se cierra con datos útiles",
      texto: "El cierre técnico pide parte, daño, causa, acción y fin de la falla. Queda el tiempo fuera de servicio, base para MTBF y MTTR.",
    },
  ],
  capacidades: [
    {
      titulo: "Avisos con prioridad sugerida",
      texto: "Prioridad emergencia, alta, media o baja, impacto en la función (crítica, degradada, incipiente), equipo parado, método de detección y fecha de inicio de la avería.",
    },
    {
      titulo: "App de campo sin señal",
      texto: "Avisos con fotos desde el teléfono. Si no hay cobertura en planta, quedan guardados y se suben solos cuando vuelve la señal, sin duplicarse.",
    },
    {
      titulo: "Órdenes de trabajo completas",
      texto: "Tipos correctiva, preventiva, predictiva y mejora. Operaciones numeradas 10, 20, 30, horas estimadas contra reales, técnicos, materiales y si requiere parada.",
    },
    {
      titulo: "Calendario de OT",
      texto: "Vistas de día, semana y mes. Marca órdenes atrasadas, excedidas y cruces del mismo responsable. Reprogramas arrastrando, en pasos de 30 minutos.",
    },
    {
      titulo: "Ejecutores y disponibilidad",
      texto: "Puestos de trabajo con sus técnicos, tengan o no cuenta en la app. Calendario mensual de ausencias y feriados para saber cuántas horas hay de verdad.",
    },
    {
      titulo: "Catálogo de fallas e historial",
      texto: "Catálogo por clase de equipo con partes, daños y causas, alineado con ISO 14224 y SAP PM. Cada aviso y OT guarda quién cambió qué y cuándo. Exporta a Excel.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo gestiona el mantenimiento en ReliaPlant",
      texto: "Configuras ejecutores, prioridades y catálogo de fallas, y empiezas a recibir avisos el mismo día. Los equipos y ubicaciones técnicas ya vienen de tu taxonomía.",
      incluye: [
        "Avisos desde la web y desde la app de campo",
        "Órdenes de trabajo con operaciones, horas y materiales",
        "Calendario de programación con arrastre",
        "Ejecutores, técnicos y disponibilidad mensual",
        "Exportación de avisos y órdenes a Excel",
      ],
    },
    servicio: {
      titulo: "Lo implementamos contigo",
      texto: "Si no tienes la base lista, nuestros ingenieros la arman: equipos, catálogo y flujo de avisos, para que el GMAO arranque con datos confiables.",
      incluye: [
        "Levantamiento de activos y taxonomía ISO 14224",
        "Catálogo de fallas por clase de equipo",
        "Configuración de prioridades, especialidades y ejecutores",
        "Capacitación a técnicos, supervisores y planificadores",
        "Acompañamiento en las primeras semanas de uso",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es un software de gestión de mantenimiento (CMMS)?",
      respuesta:
        "Es un sistema para registrar fallas, planificar y ejecutar órdenes de trabajo y guardar el historial de cada equipo. CMMS es la sigla en inglés; en español se le dice GMAO. En ReliaPlant está conectado a la taxonomía de activos, al RCM y a los planes de mantenimiento.",
    },
    {
      pregunta: "¿Qué diferencia hay entre GMAO y CMMS?",
      respuesta:
        "Ninguna en la práctica. GMAO significa Gestión de Mantenimiento Asistida por Ordenador y CMMS es Computerized Maintenance Management System. Los dos nombres describen el mismo tipo de software de mantenimiento.",
    },
    {
      pregunta: "¿Qué diferencia hay entre un aviso y una orden de trabajo?",
      respuesta:
        "El aviso es el reporte de una falla o anomalía en un equipo. La orden de trabajo es el trabajo aprobado para atenderla, con operaciones, horas, técnicos y materiales. En ReliaPlant, al aprobar un aviso se crea su OT.",
    },
    {
      pregunta: "¿Los técnicos pueden reportar fallas sin internet?",
      respuesta:
        "Sí. La app de campo guarda el aviso y sus fotos en el teléfono y los envía cuando vuelve la señal. Antes de enviarlo revisa que no se haya creado ya, para no duplicarlo.",
    },
    {
      pregunta: "¿Qué datos debe tener el cierre técnico de una orden de trabajo?",
      respuesta:
        "Como mínimo la parte que falló, el daño o modo de falla, la causa, la acción realizada y el inicio y fin de la falla. Con eso se calculan el tiempo fuera de servicio, el MTBF y el MTTR, y se alimentan los análisis RCA y RCM.",
    },
    {
      pregunta: "¿Cómo se define la prioridad de un aviso de mantenimiento?",
      respuesta:
        "ReliaPlant parte de la criticidad del equipo y la sube si el equipo está parado o el impacto es crítico, o la baja si la falla es incipiente. El supervisor puede cambiarla y queda registrada la sugerida para auditar.",
    },
    {
      pregunta: "¿El CMMS sirve para mantenimiento preventivo y predictivo?",
      respuesta:
        "Sí. Las órdenes de trabajo pueden ser correctivas, preventivas, predictivas o de mejora. Las rutinas preventivas se definen en el módulo de planes de mantenimiento con los mismos ejecutores.",
    },
  ],
  siguiente: { etiqueta: "Siguiente en el ciclo", titulo: "Inventario de repuestos", href: "/producto/inventario" },
  origen: "web - /producto/cmms",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

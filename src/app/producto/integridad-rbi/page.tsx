import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "RBI: inspección basada en riesgo e integridad | ReliaPlant" },
  description:
    "Análisis RBI por equipo y parte: lazos de corrosión, mecanismos de daño API 581, efectividad y frecuencia. Exporta el plan de inspección en Excel.",
  alternates: { canonical: "https://reliaplant.com/producto/integridad-rbi" },
};

// Réplica de la pestaña RBI (vista Equipos): un equipo ocupa varias filas, una por mecanismo de cada parte.
const ef = (letra: string, texto: string, color: string) =>
  `<span class="crit-c" style="background:${color}">${letra} – ${texto}</span>`;
const A = ef("A", "Highly", "#15803d");
const B = ef("B", "Usually", "#1d4ed8");
const C = ef("C", "Fairly", "#d97706");
const D = ef("D", "Poorly", "#b91c1c");

const PANTALLA = `<div class="pantalla" role="img" aria-label="Pestaña RBI de ReliaPlant: análisis por equipo, parte, lazo de corrosión, mecanismo de daño y efectividad de inspección">
<div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span>TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span class="act">RBI</span></div></div>
<div class="rp-sub"><span class="act">Equipos</span><span>Piping</span><span>Loops</span></div>
<div class="scroll-x"><table class="tabla-app"><thead><tr>
<th>Asset</th><th class="c">Clase / Tipo</th><th class="c">Riesgo</th><th>Parte</th><th class="c">Lazo</th><th>Mecanismo</th><th class="c">Criticidad</th><th class="c">Frec.</th><th class="c">Efectividad</th>
</tr></thead><tbody>
<tr><td class="mono b" rowspan="3">V-210<br><span style="font-family:var(--sans);font-weight:400;color:#6b7280;font-size:11px">Separador de entrada</span></td><td class="c" rowspan="3">VESSEL, SEPARATOR</td><td class="c" rowspan="3"><span class="chip-e r-medalto">Medio-Alto</span></td>
<td rowspan="2">Shell</td><td class="c mono" rowspan="2">CL-02</td><td>Internal Local Thinning <span class="mono" style="color:#9ca3af">THI-04</span></td><td class="c">Alta</td><td class="c mono">3Y</td><td class="c">${B}</td></tr>
<tr><td>CUI <span class="mono" style="color:#9ca3af">EXT-03</span></td><td class="c">Media</td><td class="c mono">4Y</td><td class="c">${C}</td></tr>
<tr><td>Head Top</td><td class="c mono">CL-02</td><td>SSC <span class="mono" style="color:#9ca3af">SCC-06</span></td><td class="c">Alta</td><td class="c mono">3Y</td><td class="c">${B}</td></tr>
<tr><td class="mono b" rowspan="2">E-410C<br><span style="font-family:var(--sans);font-weight:400;color:#6b7280;font-size:11px">Enfriador de gas</span></td><td class="c" rowspan="2">HEAT EXCHANGER, SHELL AND TUBE</td><td class="c" rowspan="2"><span class="chip-e r-medio">Medio</span></td>
<td>Shell</td><td class="c mono">CL-05</td><td>Internal General Thinning <span class="mono" style="color:#9ca3af">THI-02</span></td><td class="c">Media</td><td class="c mono">5Y</td><td class="c">${C}</td></tr>
<tr><td>Tubes</td><td class="c mono">CL-05</td><td>Tube bundle <span class="mono" style="color:#9ca3af">TB-01</span></td><td class="c">Media</td><td class="c mono">4Y</td><td class="c">${A}</td></tr>
<tr><td class="mono b">T-501<br><span style="font-family:var(--sans);font-weight:400;color:#6b7280;font-size:11px">Tanque de agua tratada</span></td><td class="c">TANK, ATMOSPHERIC</td><td class="c"><span class="chip-e r-bajo">Bajo</span></td>
<td>Bottom</td><td class="c mono">CL-07</td><td>Bottom Corrosion <span class="mono" style="color:#9ca3af">TANK-03</span></td><td class="c">Baja</td><td class="c mono">10Y</td><td class="c">${D}</td></tr>
</tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · Integridad RBI",
  titulo: "Inspección basada en riesgo (RBI),",
  tituloGris: "equipo por equipo y parte por parte.",
  bajada:
    "Integridad mecánica para recipientes, intercambiadores, tanques y líneas: lazos de corrosión, mecanismos de daño según API 581 y la actividad de inspección que corresponde a cada uno, con su efectividad y frecuencia.",
  foto: { src: "/sitio/integridad-ultrasonido.jpg", alt: "Inspector midiendo espesor de pared de una tubería con ultrasonido" },
  tarjeta: {
    titulo: "V-210 · Shell",
    subtitulo: "Lazo CL-02 · Gas húmedo",
    filas: [
      ["Mecanismo", "THI-04"],
      ["Efectividad", "B · 3Y"],
      ["Riesgo", "Medio-Alto"],
    ],
  },
  pantalla: PANTALLA,
  pantallaPie:
    "Vista Equipos de la pestaña RBI: cada parte con su lazo de corrosión y cada mecanismo con criticidad, frecuencia y efectividad de inspección.",
  problema: {
    titulo: "El plan de inspección se hereda.",
    tituloGris: "Nadie recuerda por qué se inspecciona así.",
    puntos: [
      {
        titulo: "Se inspecciona por costumbre",
        texto: "Las frecuencias se heredaron del arranque o del último paro. Nadie sabe ya qué mecanismo de daño justifica cada medición de espesores.",
      },
      {
        titulo: "El estudio RBI quedó en un informe",
        texto: "La consultora entregó un PDF y un Excel con cientos de filas. Al año, los equipos nuevos y los cambios de servicio no están en ninguno de los dos.",
      },
      {
        titulo: "Cada inspector escribe la tarea a su manera",
        texto: "Para el mismo mecanismo hay tres textos distintos en el sistema de mantenimiento. Así no se puede comparar efectividad ni agrupar trabajos.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Define los lazos de corrosión",
      texto: "Crea los lazos con su código, código de servicio, fluido y descripción. O súbelos todos desde Excel.",
    },
    {
      titulo: "Arma el análisis por equipo",
      texto: "Para cada equipo o línea: tipo, clase, subtipo, nivel de riesgo de tu matriz y sus partes (Shell, Head, Tubes, Bottom…). Cada parte hereda el lazo del equipo o tiene el suyo.",
    },
    {
      titulo: "Asigna los mecanismos de daño",
      texto: "Eliges el mecanismo del catálogo API 581 por categoría, con su referencia y si es interno o externo. Le das criticidad, frecuencia y efectividad de A a D.",
    },
    {
      titulo: "Obtén la actividad de inspección",
      texto: "Con el subgrupo y la efectividad, ReliaPlant trae el texto de inspección, las técnicas END y el código de la tarea. Si el mecanismo no aplica, lo marcas como no requerido.",
    },
    {
      titulo: "Exporta el plan RBI",
      texto: "Descarga el plan agrupado por código de tarea, con los equipos y partes de cada posición, listo para pasarlo al sistema de mantenimiento.",
    },
  ],
  capacidades: [
    {
      titulo: "Equipos, piping y lazos",
      texto: "Tres vistas en la misma pestaña. Filtros por clase, parte, lazo y mecanismo, y orden por planta o tag.",
    },
    {
      titulo: "Catálogo de mecanismos API 581",
      texto: "Adelgazamiento interno, agrietamiento por corrosión bajo tensión (SCC), daño externo y CUI, tanques, componentes enterrados y haces de tubos, con su tabla de referencia.",
    },
    {
      titulo: "Efectividad y técnicas END",
      texto: "Para cada esquema A, B, C o D se ve qué técnicas aplican (VT, UT, RT, PT, ECT, IRIS, MFL…) y con qué cobertura. Intrusivo o no intrusivo según el subgrupo.",
    },
    {
      titulo: "Análisis por parte",
      texto: "Un equipo se divide en partes con su propio lazo y sus mecanismos. Marcas la parte principal y copias el análisis de otro equipo parecido para no empezar de cero.",
    },
    {
      titulo: "Carga masiva desde Excel",
      texto: "Plantilla con hoja de valores válidos. Una fila por tag, parte y código de tarea; ReliaPlant lee el código de tarea y te muestra mecanismo, efectividad, frecuencia y actividad antes de guardar.",
    },
    {
      titulo: "Revisión y exportables",
      texto: "Cada análisis queda pendiente o revisado, con su texto de análisis y notas. Exporta la tabla completa o el plan RBI con el detalle de cada tarea.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo de integridad arma el RBI",
      texto: "Cargas lazos y equipos, asignas mecanismos y efectividades, y mantienes el plan al día cuando cambia un servicio o entra un equipo nuevo.",
      incluye: [
        "Pestaña RBI con vistas de equipos, piping y lazos.",
        "Catálogo de mecanismos de daño y esquemas de inspección.",
        "Plantillas de carga masiva para análisis y lazos.",
        "Exportación del análisis y del plan RBI en Excel.",
      ],
    },
    servicio: {
      titulo: "Hacemos el estudio RBI contigo",
      texto: "Nuestros especialistas levantan la información, definen lazos y mecanismos con tu gente y te entregan el estudio cargado en la plataforma.",
      incluye: [
        "Revisión de DTIs, materiales y condiciones de proceso.",
        "Definición de lazos de corrosión y partes por equipo.",
        "Talleres para asignar mecanismos de daño y criticidad.",
        "Selección de técnicas y frecuencias de inspección.",
        "Plan RBI cargado y listo para tu sistema de mantenimiento.",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es la inspección basada en riesgo (RBI)?",
      respuesta:
        "Es una metodología para decidir qué inspeccionar, con qué técnica y cada cuánto, según el riesgo de falla de cada equipo. El riesgo combina la probabilidad de falla, que depende de los mecanismos de daño activos, con la consecuencia si el equipo pierde contención. Así el esfuerzo de inspección se concentra donde el riesgo es mayor.",
    },
    {
      pregunta: "¿Qué diferencia hay entre RBI e integridad mecánica?",
      respuesta:
        "Integridad mecánica es el programa completo para que recipientes, tuberías y tanques contengan el fluido durante su vida útil: diseño, inspección, pruebas y reparaciones. RBI es la herramienta dentro de ese programa que define el plan de inspección según el riesgo.",
    },
    {
      pregunta: "¿Qué normas se usan para un análisis RBI?",
      respuesta:
        "Las más usadas son API RP 580, que da los principios, y API RP 581, que da la metodología y las tablas de efectividad de inspección. API RP 571 describe los mecanismos de daño. El catálogo de ReliaPlant sigue las tablas de API 581 para asignar la efectividad de cada inspección.",
    },
    {
      pregunta: "¿Qué es un lazo de corrosión?",
      respuesta:
        "Es un grupo de equipos y líneas que comparten material, fluido y condiciones de operación, y por eso sufren los mismos mecanismos de daño. Definir lazos evita analizar cada componente por separado y ayuda a extender los hallazgos de una inspección al resto del lazo.",
    },
    {
      pregunta: "¿Qué significa la efectividad de inspección A, B, C o D?",
      respuesta:
        "Es la capacidad de una inspección para detectar el daño que se busca. A es muy efectiva y D poco efectiva, según API 581. Una inspección más efectiva da más confianza en el estado del equipo y puede justificar intervalos más largos.",
    },
    {
      pregunta: "¿Puedo cargar un estudio RBI que ya tengo en Excel?",
      respuesta:
        "Sí. Descargas la plantilla, pones una fila por tag, parte y código de tarea, con riesgo, lazo y criticidad, y la subes. Antes de guardar ves cada fila con su mecanismo, efectividad, frecuencia y actividad, o el error que impide la carga. Los lazos de corrosión tienen su propia plantilla.",
    },
  ],
  siguiente: { etiqueta: "Siguiente paso del ciclo", titulo: "Gestión de mantenimiento", href: "/producto/cmms" },
  origen: "web - /producto/integridad-rbi",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}

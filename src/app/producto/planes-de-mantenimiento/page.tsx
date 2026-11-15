import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import {
  Nb, PantallaRutinas, PantallaRutinaModal, PantallaPlanModal, PantallaCalendarioPlan,
  PantallaPlanMaestro, PantallaIndicadores, PantallaCarga,
} from "./Pantallas";
import Calculadora from "./Calculadora";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Software de plan de mantenimiento preventivo | ReliaPlant" },
  description:
    "Rutinas con tareas, frecuencias y horas-hombre asignadas a cada tag. Plan maestro del año, carga por puesto vs. capacidad e importación desde Excel o SAP.",
  alternates: { canonical: "https://reliaplant.com/producto/planes-de-mantenimiento" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/planes-de-mantenimiento";

const FAQ = [
  {
    pregunta: "¿Qué debe incluir un plan de mantenimiento preventivo?",
    respuesta:
      "Para cada equipo: qué tareas se hacen, cada cuánto, qué especialidad las hace, cuántas personas y cuántas horas, y desde qué fecha. Con eso puedes sacar el calendario del año y la carga de horas-hombre por puesto. Si además cada tarea tiene su procedimiento paso a paso, el técnico sabe qué hacer sin depender de la memoria de nadie.",
  },
  {
    pregunta: "¿Qué es una hoja de ruta en mantenimiento?",
    respuesta:
      "Es la lista ordenada de operaciones que se hacen en un equipo durante un preventivo. En SAP PM cada operación lleva un número (10, 20, 30…), un texto, un puesto de trabajo, el número de personas y la duración. En ReliaPlant la hoja de ruta se llama rutina: guarda esas mismas columnas, le agrega la frecuencia de cada tarea y un procedimiento opcional por tarea, y una misma rutina se asigna a todos los equipos del mismo tipo.",
  },
  {
    pregunta: "¿Cómo se calculan las horas-hombre del mantenimiento preventivo?",
    respuesta:
      "Por cada tarea: personas × horas por persona × veces al año. Las veces al año salen de dividir 365,25 entre los días del intervalo, así que una tarea mensual cuenta 12 veces y una semestral 2. La suma de las tareas da las horas-hombre de la rutina, y multiplicada por los equipos que la usan da la carga del plan.",
  },
  {
    pregunta: "¿Qué diferencia hay entre programación fija y flotante en el preventivo?",
    respuesta:
      "En la fija cada fecha se calcula desde la fecha de inicio, sin importar cuándo se ejecutó la vez anterior. En la flotante la próxima fecha se cuenta desde la última ejecución, así que cada atraso empuja el resto del año. La fija mantiene el calendario y los paquetes de tareas alineados; la flotante respeta el intervalo real entre intervenciones. ReliaPlant usa programación fija.",
  },
  {
    pregunta: "¿Qué es un plan maestro de mantenimiento?",
    respuesta:
      "Es la vista de todo el preventivo de la planta mes a mes: qué planes y qué equipos tienen trabajo cada mes y cuántas horas-hombre suma cada plan. Sirve para ver los picos antes de que lleguen, coordinar paradas y decidir si conviene mover la fecha de inicio de algún plan.",
  },
  {
    pregunta: "¿Con cuántos días de anticipación se crea la orden de trabajo de un preventivo?",
    respuesta:
      "Depende de la tarea más frecuente del plan. Si la orden se crea antes que la frecuencia, tendrías dos órdenes de la misma tarea abiertas a la vez. ReliaPlant recomienda la mitad de la frecuencia más corta con un tope de 30 días: 3 días para tareas semanales, 15 para mensuales y 30 para trimestrales o más largas.",
  },
  {
    pregunta: "¿Puedo pasar mis hojas de ruta de SAP PM a otro software?",
    respuesta:
      "Sí, si las exportas a Excel con una fila por operación. ReliaPlant reconoce las columnas de las hojas de ruta de SAP (PLNNR, KTEXT, LTXA1, ARBPL, ANZZL) y frecuencias como 1M, 3M o 6M. Si tu exportación no trae la frecuencia, agrégala como columna antes de subirla. Si hay un solo error, no se importa nada.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.pregunta, acceptedAnswer: { "@type": "Answer", text: f.respuesta } })),
  };
  const demo = (texto: string, variante: "primary" | "borde" | "white" = "primary") => (
    <AbrirFormContacto buttonText={texto} variant={variante} icon={null} modalTitle={texto} btnText="Enviar" especial={ORIGEN} />
  );

  return (
    <div className="rph lp-pm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada: título + la pestaña Rutinas tal cual ── */}
      <section className="pm-hero">
        <div className="env">
          <div className="pm-hero-top">
            <div>
              <span className="chip-sec"><i />Producto · Planes de mantenimiento</span>
              <h1>Tu plan de mantenimiento preventivo, <span className="gris">con horas-hombre y calendario del año.</span></h1>
            </div>
            <div className="pm-hero-der">
              <p>Arma una rutina por tipo de equipo, asígnala a cada tag de tu taxonomía y mira el año completo: qué toca cada mes, cuántas horas-hombre pide cada puesto y si tu gente alcanza.</p>
              <div className="pm-ctas">
                <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                {demo("Solicita una demo", "borde")}
              </div>
            </div>
          </div>
          <div className="pm-vitrina">
            <PantallaRutinas />
            <p className="pm-pie">
              <span><b>Rutinas</b> por tipo de equipo, con sus tareas ordenadas de la más a la menos frecuente.</span>
              <span><b>H-H / año</b> por cada equipo que la usa.</span>
              <span><b>Se usa en</b>: cuántos equipos la llevan en planes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Las tres piezas ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Cómo se arma</span>
            <h2>Rutina, plan y plan maestro. <span className="gris">Tres piezas, en ese orden.</span></h2>
            <p>La rutina se escribe una vez por tipo de equipo. El plan dice a qué tags se aplica y desde cuándo. El plan maestro junta todos los planes activos y los despliega mes a mes.</p>
          </div>
          <div className="piezas">
            <div className="pieza">
              <span className="eti">1 · Rutina</span>
              <h3>Qué se le hace a un tipo de equipo</h3>
              <p>Lista de tareas estándar. Cada tarea con su puesto de trabajo, personas, horas y su propia frecuencia.</p>
              <div className="ej">
                <div><span>Rutina</span><b>RB-CEN</b></div>
                <div><span>Tareas</span><b>5</b></div>
                <div><span>Frecuencias</span><b>1M, 3M, 6M, 1A</b></div>
                <div><span>H-H / año</span><b>27 h</b></div>
              </div>
            </div>
            <div className="flecha" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 12h15M14 7l5 5-5 5" /></svg></div>
            <div className="pieza">
              <span className="eti">2 · Plan</span>
              <h3>A qué tags y desde cuándo</h3>
              <p>Filas equipo → rutina, tomadas de tu taxonomía. Una fecha de inicio para todo el plan. Un equipo puede llevar varias rutinas.</p>
              <div className="ej">
                <div><span>P-211A</span><b>RB-CEN + RM-ELE</b></div>
                <div><span>P-211B</span><b>RB-CEN + RM-ELE</b></div>
                <div><span>LV-210</span><b>RV-CTL</b></div>
                <div><span>Desde</span><b>15/01/2027</b></div>
              </div>
            </div>
            <div className="flecha" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 12h15M14 7l5 5-5 5" /></svg></div>
            <div className="pieza">
              <span className="eti">3 · Plan maestro</span>
              <h3>Todo el preventivo, mes a mes</h3>
              <p>Los planes activos de la planta en un calendario de dos años, con las horas-hombre de cada plan por mes.</p>
              <div className="ej" aria-label="Meses con trabajo del plan PM-CN-210 y de PM-CN-300">
                <div><span>PM-CN-210</span></div>
                <div className="mini-cal">{Array.from({ length: 12 }, (_, m) => <i key={m} className={[0, 6].includes(m) ? "on" : "on2"} />)}</div>
                <div><span>PM-CN-300</span></div>
                <div className="mini-cal">{Array.from({ length: 12 }, (_, m) => <i key={m} className={m === 2 || m === 8 ? "on" : m > 2 ? "on2" : undefined} />)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Anatomía de una rutina ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Anatomía de una rutina</span>
            <h2>Una tarea, una línea. <span className="gris">Con todo lo que hace falta para programarla.</span></h2>
            <p>Así se ve la rutina de una bomba centrífuga en ReliaPlant. Lo que falta queda en amarillo y no se puede guardar hasta completarlo.</p>
          </div>
          <div className="anat">
            <PantallaRutinaModal />
            <ol className="notas">
              <li><i>1</i><div><b>Código único por planta</b><p>Es lo que usan los planes para enlazar la rutina. Si lo repites, la app te avisa antes de guardar.</p></div></li>
              <li><i>2</i><div><b>Tareas numeradas 10, 20, 30</b><p>Es el orden de ejecución. Si subes o bajas una tarea, se renumera sola, como en una hoja de ruta.</p></div></li>
              <li><i>3</i><div><b>Puesto de trabajo</b><p>Mecánica, eléctrica, instrumentación, lubricación o los que definas en GMAO. De aquí sale la carga por especialidad.</p></div></li>
              <li><i>4</i><div><b>Personas × horas c/u</b><p>Dos mecánicos durante 2 horas son 4 horas-hombre. Duración y horas-hombre no son lo mismo: el plan muestra la duración y la rutina suma las horas-hombre.</p></div></li>
              <li><i>5</i><div><b>Una frecuencia por tarea</b><p>Semanal, quincenal, mensual, bimestral, trimestral, semestral, anual o cada 2 años con un clic. Para lo demás, &quot;Otra…&quot;: cada N días, semanas, meses o años.</p></div></li>
              <li><i>6</i><div><b>Procedimiento paso a paso</b><p>Opcional en cada tarea. Aparece en el detalle de cada fecha del calendario para quien la va a ejecutar.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── Ejemplo resuelto + calculadora ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Ejemplo resuelto</span>
            <h2>¿Cuánto preventivo lleva una bomba al año? <span className="gris">27 horas-hombre.</span></h2>
            <p>Las bombas P-211A y P-211B de la UT CN-210 llevan la rutina RB-CEN. Este es el cálculo que hace ReliaPlant con cada rutina, cada plan y cada puesto.</p>
          </div>
          <div className="formula" aria-label="Fórmula de horas-hombre al año">
            <span className="f">H-H/año</span><span className="op">=</span>
            <span className="f">Σ personas × horas c/u × veces al año</span>
            <span className="op">·</span>
            <span className="f">veces al año = 365,25 ÷ días del intervalo</span>
            <small>Mensual = 12 veces · trimestral = 4 · semestral = 2 · anual = 1. Para RB-CEN: 6 + 6 + 6 + 8 + 1 = 27 h por bomba, 54 h por las dos.</small>
          </div>
          <Calculadora />
        </div>
      </section>

      {/* ── Programación fija ── */}
      <section className="sec">
        <div className="env prog">
          <div className="sec-cab" style={{ marginBottom: 0 }}>
            <span className="chip-sec"><i />Cómo se calculan las fechas</span>
            <h2>Fechas fijas desde el inicio. <span className="gris">Un atraso no corre el año entero.</span></h2>
            <p>Cada fecha del plan se calcula desde su fecha de inicio, nunca desde la ejecución anterior. Así el calendario que aprobaste en enero sigue siendo el de diciembre.</p>
            <div className="reglas">
              <div className="regla"><b>Paquetes del mismo día</b><p>Cuando tareas de distinta frecuencia caen el mismo día, se juntan en una sola visita al equipo. En enero, la bomba recibe las cinco tareas juntas.</p></div>
              <div className="regla"><b>Fin de mes</b><p>Si el plan arranca el 31 de enero, la tarea mensual cae el 28 de febrero (o 29) y vuelve al 31 en marzo.</p></div>
              <div className="regla"><b>Antes del inicio no hay nada</b><p>Un plan que arranca en marzo no muestra trabajo en enero ni febrero. Mover la fecha de inicio mueve todo el plan.</p></div>
            </div>
          </div>
          <figure className="linea-t" style={{ margin: 0 }}>
            <div className="scroll-x">
              <svg viewBox="0 0 640 250" role="img" aria-label="Comparación de una tarea mensual con programación fija y con programación flotante cuando la ejecución de febrero se atrasa diez días" fontFamily="IBM Plex Sans, sans-serif">
                {/* meses */}
                {["ene", "feb", "mar", "abr", "may", "jun"].map((m, i) => (
                  <g key={m}>
                    <line x1={110 + i * 88} y1={30} x2={110 + i * 88} y2={222} stroke="#eef0f3" />
                    <text x={110 + i * 88 + 4} y={22} fontSize="12.5" fill="#9aa1ad">{m}</text>
                  </g>
                ))}
                {/* Fija */}
                <text x={0} y={78} fontSize="14" fontWeight="600" fill="#0f1115">Fija</text>
                <text x={0} y={94} fontSize="12" fill="#5b6170">ReliaPlant</text>
                <line x1={110} y1={84} x2={630} y2={84} stroke="#d6d9df" />
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <g key={i}>
                    <circle cx={110 + i * 88 + 41} cy={84} r={7} fill={i === 1 ? "#fff" : "#2563eb"} stroke="#2563eb" strokeWidth="2" />
                    <text x={110 + i * 88 + 41} y={68} fontSize="12" fill="#5b6170" textAnchor="middle">15</text>
                  </g>
                ))}
                <circle cx={110 + 88 + 70} cy={84} r={5} fill="#0f1115" />
                <text x={110 + 88 + 70} y={118} fontSize="12" fill="#5b6170" textAnchor="middle">se hizo el 25</text>
                {/* Flotante */}
                <text x={0} y={178} fontSize="14" fontWeight="600" fill="#0f1115">Flotante</text>
                <text x={0} y={194} fontSize="12" fill="#5b6170">desde la última</text>
                <line x1={110} y1={184} x2={630} y2={184} stroke="#d6d9df" />
                {[41, 88 + 70, 176 + 70, 264 + 70, 352 + 70, 440 + 70].map((x, i) => (
                  <g key={i}>
                    <circle cx={110 + x} cy={184} r={7} fill={i === 1 ? "#0f1115" : "#9aa1ad"} />
                    <text x={110 + x} y={168} fontSize="12" fill="#5b6170" textAnchor="middle">{i === 0 ? "15" : "25"}</text>
                  </g>
                ))}
                <text x={632} y={212} fontSize="12" fill="#b91c1c" textAnchor="end">+10 días para siempre</text>
                <text x={110 + 176 + 41} y={104} fontSize="12" fill="#1d4ed8" textAnchor="middle">sigue el 15</text>
              </svg>
            </div>
            <figcaption style={{ fontSize: 13, color: "var(--gris-texto)", marginTop: 8 }}>
              Tarea mensual que arranca el 15 de enero. En febrero se ejecuta 10 días tarde. Con fechas fijas, marzo sigue el 15 y el paquete con las tareas trimestrales no se rompe.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Del plan a los tags ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Asignar rutinas a equipos</span>
            <h2>Un plan es una tabla: <span className="gris">equipo, ubicación técnica y rutina.</span></h2>
            <p>Los equipos salen de tu <a href="/producto/taxonomia" style={{ color: "var(--azul)", fontWeight: 600 }}>registro de activos</a>, con su tag y su UT. Nada de escribir el tag a mano y equivocarse en una letra.</p>
          </div>
          <div className="anat">
            <PantallaPlanModal />
            <ol className="notas">
              <li><i>1</i><div><b>Desde cuándo</b><p>La primera vez que toca. Es el ancla de todas las fechas del plan.</p></div></li>
              <li><i>2</i><div><b>Crear la orden N días antes</b><p>Recomendado: la mitad de la frecuencia más corta, con tope de 30 días. Con tareas mensuales, 15. El máximo es la frecuencia más corta menos un día, para no tener dos órdenes de la misma tarea abiertas.</p></div></li>
              <li><i>3</i><div><b>Equipos de la taxonomía</b><p>Buscas por tag, código o descripción. Al pasar el cursor ves su código y su UT. Si mezclas equipos de varias UTs, la app te lo advierte.</p></div></li>
              <li><i>4</i><div><b>Un equipo, varias rutinas</b><p>La P-211A lleva la rutina de bomba y la del motor. El mismo equipo con la misma rutina dos veces se marca como repetida.</p></div></li>
              <li><i>5</i><div><b>Cargar varios equipos seguidos</b><p>Cada fila nueva hereda la rutina de la anterior: eliges la rutina una vez y vas agregando tags.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── Calendario del plan ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Calendario del plan</span>
            <h2>Antes de guardar, <span className="gris">ves cada tarea en su mes.</span></h2>
            <p>La pestaña Previsualización despliega cada equipo en sus tareas. En la fila del equipo, las horas-hombre de cada mes. Un clic en un marcador abre la tarea con su fecha, el día en que se crea la orden y el procedimiento.</p>
          </div>
          <PantallaCalendarioPlan />
        </div>
      </section>

      {/* ── Plan maestro ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Plan maestro</span>
            <h2>El año de la planta <span className="gris">en una sola tabla.</span></h2>
            <p>Todos los planes activos, cada uno con sus equipos, en el año actual y el siguiente. Buscas por plan, rutina o tag y ves solo eso. Un clic en un marcador muestra las tareas de ese equipo en ese mes.</p>
          </div>
          <PantallaPlanMaestro />
          <div className="picos">
            <div className="pico"><b>enero</b><span>Arranca PM-CN-210: las bombas reciben todas sus tareas juntas. 26 h.</span></div>
            <div className="pico"><b>marzo</b><span>Primera vez de los compresores K-301A/B: válvulas y empaquetaduras. 45 h.</span></div>
            <div className="pico"><b>mayo</b><span>Limpieza de haces de los E-410 antes del verano. 40.5 h.</span></div>
          </div>
          <p className="enlaces">Si dos picos caen en el mismo mes, mueves la fecha de inicio de uno de los planes y el plan maestro se recalcula.</p>
        </div>
      </section>

      {/* ── Indicadores y capacidad ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Indicadores del preventivo</span>
            <h2>¿Te alcanza la gente? <span className="gris">La respuesta, mes a mes y por puesto.</span></h2>
            <p>La pestaña Indicadores suma los próximos 12 meses de todos los planes activos y los compara con la capacidad real de cada puesto. También cruza el plan con la criticidad de tus equipos.</p>
          </div>
          <PantallaIndicadores />
          <div className="cap-form">
            <div><b>Capacidad real del mes</b><p>Personas de cada puesto × horas por día × días laborables, menos feriados y ausencias que cargas en GMAO. La línea punteada de cada barra.</p></div>
            <div><b>Meses sobre capacidad</b><p>Si la carga pasa la línea, el número se pone en rojo. Ese mes vas a necesitar horas extra, contratistas o mover un plan.</p></div>
            <div><b>Críticos sin preventivo</b><p>Equipos del nivel de criticidad más alto que no están en ningún plan activo. Es el hueco que se descubre en la próxima falla.</p></div>
          </div>
        </div>
      </section>

      {/* ── Carga desde Excel o SAP ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Importar hojas de ruta</span>
            <h2>Tus rutinas de Excel o SAP, <span className="gris">sin reescribirlas.</span></h2>
            <p>Una fila por tarea. Las filas con el mismo código forman una rutina. Antes de importar ves qué entra, qué se actualiza y qué está mal.</p>
          </div>
          <div className="carga">
            <div>
              <div className="scroll-x">
                <table className="mapa-col">
                  <thead><tr><th>Columna</th><th>También reconoce</th><th>Ejemplo</th></tr></thead>
                  <tbody>
                    <tr><td>Código rutina</td><td>Código, Grupo hoja de ruta, <span className="sap">PLNNR</span></td><td>RB-CEN</td></tr>
                    <tr><td>Nombre rutina</td><td>Nombre, Descripción rutina, <span className="sap">KTEXT</span></td><td>Preventivo bomba…</td></tr>
                    <tr><td>Tarea</td><td>Descripción tarea, Operación, <span className="sap">LTXA1</span></td><td>Cambiar aceite…</td></tr>
                    <tr><td>Puesto de trabajo</td><td>Puesto, Especialidad, <span className="sap">ARBPL</span></td><td>LUB</td></tr>
                    <tr><td>Personas</td><td>Cantidad de personas, <span className="sap">ANZZL</span></td><td>1</td></tr>
                    <tr><td>Horas c/u</td><td>Horas, Horas por persona, Duración</td><td>1.5</td></tr>
                    <tr><td>Frecuencia</td><td>Cada</td><td>Trimestral</td></tr>
                    <tr><td>Procedimiento</td><td>Texto explicativo, Paso a paso (opcional)</td><td>1. Aislar…</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="frecs" aria-label="Ejemplos de frecuencias que entiende la importación">
                <div className="frec"><code>Mensual</code><span>cada mes</span></div>
                <div className="frec"><code>3M</code><span>cada 3 meses</span></div>
                <div className="frec"><code>cada 2 semanas</code><span>cada 2 semanas</span></div>
                <div className="frec"><code>1A</code><span>cada año</span></div>
                <div className="frec"><code>15 días</code><span>cada 15 días</span></div>
                <div className="frec mal"><code>según condición</code><span>error: no la entiende</span></div>
              </div>
            </div>
            <div>
              <PantallaCarga />
              <ul className="lista reglas-carga">
                <li>Si el código ya existe, se reemplazan las tareas de esa rutina. No se duplica.</li>
                <li>Las filas de ejemplo de la plantilla (las que empiezan con ✎) se ignoran.</li>
                <li>Si hay un solo error, no se importa nada. Nunca adivina en silencio.</li>
                <li>El botón Excel exporta tus rutinas en el mismo formato, para editarlas y volver a subirlas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hazlo tú o lo hacemos por ti ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>La plataforma es tuya. <span className="gris">El trabajo pesado, si quieres, lo hacemos nosotros.</span></h2>
            <p>Muchas plantas tienen el preventivo repartido en un SAP a medio cargar, Excels de cada supervisor y manuales del fabricante. Nuestros ingenieros de confiabilidad lo ordenan contigo.</p>
          </div>
          <div className="servicio">
            <figure className="serv-foto" style={{ margin: 0 }}>
              <Image src="/sitio/preventivo-engrase.jpg" alt="Técnico haciendo una tarea de lubricación preventiva en una bomba" fill sizes="(max-width: 980px) 100vw, 380px" style={{ objectFit: "cover" }} />
              <figcaption>Cada tarea del plan termina en una visita como esta. Por eso cada hora cuenta.</figcaption>
            </figure>
            <div>
              <div className="entrega">
                <div className="ent-col">
                  <span className="ent-eti">Nos mandas</span>
                  <ul>
                    <li><b>Exportación de SAP PM</b><span>Hojas de ruta y planes, con sus columnas tal cual.</span></li>
                    <li><b>Excels de cada supervisor</b><span>Aunque se contradigan. Los unificamos.</span></li>
                    <li><b>Manuales del fabricante</b><span>Para las tareas que nunca se cargaron.</span></li>
                    <li><b>Tus puestos de trabajo</b><span>Y cuántas personas tiene cada uno.</span></li>
                  </ul>
                </div>
                <div className="ent-flecha" aria-hidden="true"><svg viewBox="0 0 24 60"><path d="M12 2v52M5 46l7 8 7-8" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg></div>
                <div className="ent-col dev">
                  <span className="ent-eti">Te devolvemos en ReliaPlant</span>
                  <ul>
                    <li><b>Rutinas por tipo de equipo</b><span>Con tareas, puesto, personas, horas y frecuencia. Con <a href="/producto/rcm">RCM</a> cuando aplica.</span></li>
                    <li><b>Planes por área</b><span>Cada rutina asignada a sus tags. Si faltan equipos, primero el <a href="/servicios/levantamiento-de-activos">levantamiento</a>.</span></li>
                    <li><b>Fechas de inicio escalonadas</b><span>Para que los paquetes anuales no caigan el mismo mes.</span></li>
                    <li><b>Carga balanceada por puesto</b><span>Revisada con tu planificador, y tu equipo capacitado.</span></li>
                  </ul>
                </div>
              </div>
              <div className="serv-ctas">
                {demo("Cotizar el servicio")}
                <a className="btn btn-borde" href={APP}>Prueba gratis</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="sec suave">
        <div className="env faq-env">
          <div className="sec-cab"><h2>Preguntas frecuentes <span className="gris">sobre planes de mantenimiento.</span></h2></div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.pregunta}><summary>{f.pregunta}</summary><p>{f.respuesta}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Siguiente paso + cierre ── */}
      <section className="cierre" style={{ paddingTop: 96 }}>
        <div className="env">
          <a className="sig" href="/producto/integridad-rbi">
            <span>Siguiente en el ciclo: protege lo estático</span>
            <b>Integridad mecánica con RBI →</b>
          </a>
          <div className="cierre-caja">
            <div>
              <h2>Trae tus hojas de ruta. <span className="gris">Te las mostramos como plan maestro.</span></h2>
              <p>Mándanos tu Excel de rutinas o una exportación de SAP. En la demo lo ves cargado, con tus tags, tus puestos y la carga del año.</p>
            </div>
            <div className="ctas">
              {demo("Solicita una demo")}
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
          <p className="enlaces">
            También en la suite: <a href="/producto/rcm">RCM</a> para justificar cada tarea y <a href="/producto/rca">RCA</a> para investigar las fallas que se repiten. La gestión de mantenimiento y el inventario llegan muy pronto.
          </p>
        </div>
      </section>
    </div>
  );
}

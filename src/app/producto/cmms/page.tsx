import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import MatrizPrioridad from "./MatrizPrioridad";
import {
  TelefonoAviso, PantallaAvisos, ChatAviso, PantallaOrdenes, ChatOrden, ChatOrdenCerrada,
  CalendarioSemana, KanbanEjecutores, Num,
} from "./Pantallas";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Software de mantenimiento CMMS / GMAO | ReliaPlant" },
  description:
    "CMMS / GMAO para plantas: avisos desde campo aun sin señal, prioridad por criticidad, órdenes con horas y técnicos, calendario y cierre técnico ISO 14224.",
  alternates: { canonical: "https://reliaplant.com/producto/cmms" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/cmms";

const FAQ = [
  {
    p: "¿Qué es un CMMS y para qué sirve?",
    r: "Un CMMS (Computerized Maintenance Management System) es el software donde se registran las fallas, se planifican y ejecutan las órdenes de trabajo y se guarda el historial de cada equipo. Sirve para que nada dependa de la memoria de alguien: quién reportó, cuándo empezó la falla, quién la reparó, cuántas horas tomó y qué se encontró.",
  },
  {
    p: "¿Cuál es la diferencia entre GMAO, CMMS y EAM?",
    r: "GMAO (Gestión de Mantenimiento Asistida por Ordenador) y CMMS son lo mismo dicho en español y en inglés. Un EAM (Enterprise Asset Management) abarca además el ciclo de vida completo del activo: compras, finanzas, contratos. En ReliaPlant el GMAO convive con la taxonomía, el RCM, el RCA, los planes de mantenimiento y el inventario sobre los mismos equipos.",
  },
  {
    p: "¿Qué debe contener una orden de trabajo de mantenimiento?",
    r: "Como mínimo: el equipo (tag y ubicación técnica), el tipo de trabajo, la prioridad, un responsable, la fecha planificada, las tareas con su puesto de trabajo, personas y horas estimadas, si requiere parar el equipo y los materiales. Al cerrar: horas reales, parte que falló, daño, causa, acción realizada y cuándo quedó disponible el equipo.",
  },
  {
    p: "¿Cómo se calculan el MTBF y el MTTR?",
    r: "MTBF = tiempo en operación ÷ número de fallas. MTTR = suma de los tiempos de reparación ÷ número de fallas. Para calcularlos necesitas, por cada falla, cuándo empezó y cuándo el equipo volvió a estar disponible. Por eso el cierre de la OT en ReliaPlant pide el fin de la falla y lo resta del inicio de la avería que se reportó en el aviso.",
  },
  {
    p: "¿Cuál es la diferencia entre un aviso y una orden de trabajo?",
    r: "El aviso es el reporte de una condición anormal en un equipo: lo hace cualquiera que la vea. La orden de trabajo es el trabajo aprobado para atenderla, con responsable, tareas, horas y materiales. Un aviso se puede rechazar o marcar como duplicado; si se aprueba, nace su orden de trabajo correctiva.",
  },
  {
    p: "¿Un software de mantenimiento puede funcionar sin internet en planta?",
    r: "La app de campo de ReliaPlant sí, para reportar: el aviso y sus fotos se guardan en el teléfono como pendientes de enviar y suben solos cuando vuelve la señal. Antes de crearlo en el servidor revisa si ya existe un aviso del mismo reportante, con el mismo inicio y el mismo título, para no duplicarlo.",
  },
  {
    p: "¿Cómo se define la prioridad de un aviso de mantenimiento?",
    r: "Con criterios fijos y no con quien insiste más. ReliaPlant parte de la criticidad del equipo, la sube un nivel si el equipo está parado o la falla es crítica y la baja si la falla es incipiente. Cada prioridad tiene un plazo objetivo de atención: emergencia 4 h, alta 24 h, media 7 días y baja 30 días.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };

  return (
    <div className="rph lp-cmms">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ───────── Portada ───────── */}
      <section className="cm-hero">
        <div className="env cm-hero-grid">
          <div className="cm-hero-txt">
            <span className="chip-sec"><i />Gestión de mantenimiento · GMAO / CMMS</span>
            <h1>El software de mantenimiento que empieza en campo <span className="gris">y termina en el historial del equipo.</span></h1>
            <p className="cm-bajada">
              El técnico reporta la falla desde el teléfono, aunque no haya señal. El supervisor la revisa con la prioridad ya sugerida, la convierte en orden de trabajo, la programa y la cierra con parte, daño y causa. Todo sobre los equipos de tu taxonomía.
            </p>
            <div className="ctas">
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
              <AbrirFormContacto buttonText="Solicita una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
            </div>
            <dl className="cm-hero-datos">
              <div><dt>10</dt><dd>preguntas guían el aviso en campo</dd></div>
              <div><dt>4</dt><dd>prioridades con plazo objetivo</dd></div>
              <div><dt>ISO 14224</dt><dd>catálogo de fallas por clase</dd></div>
            </dl>
          </div>
          <div className="cm-hero-vis">
            <TelefonoAviso />
            <div className="cm-pend">
              <b>Pendientes de enviar</b>
              <span className="cm-pend-est"><i />Sin señal: se enviará al reconectar</span>
              <div className="cm-pend-av"><span className="mono">P-211A</span> Fuga por el sello mecánico<small>Aviso sin número · 2 fotos</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── El viaje de una falla ───────── */}
      <section className="sec suave" id="flujo">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />El viaje de una falla</span>
            <h2>Una fuga en la P-211A, <span className="gris">de las 5:50 a las 15:30.</span></h2>
            <p>Así recorre ReliaPlant una falla real de planta Compresión Norte. Cada paso tiene un estado, un color y un dueño. Nada se pasa por WhatsApp.</p>
          </div>

          <ol className="cm-viaje">
            <li>
              <span className="cm-hora">05:50 · 06:22</span>
              <span className="chip-e cm-pendiente">Pendiente de enviar</span>
              <h3>Lucía reporta desde la ronda</h3>
              <p>En la app de campo elige la P-211A, contesta las 10 preguntas y toma 2 fotos. En el área no hay señal: el aviso queda en el teléfono.</p>
              <span className="cm-quien">Cualquier usuario de la planta</span>
            </li>
            <li>
              <span className="cm-hora">06:45</span>
              <span className="chip-e e-nuevo">Nuevo</span>
              <h3>Llega solo al servidor</h3>
              <p>Al volver a la sala de control el teléfono sincroniza. El aviso recibe su número consecutivo de planta: <b className="mono">AV-000412</b>.</p>
              <span className="cm-quien">Automático</span>
            </li>
            <li>
              <span className="cm-hora">07:05</span>
              <span className="chip-e e-aprob">Aprobado</span>
              <h3>Marta lo revisa y lo aprueba</h3>
              <p>Ve la prioridad sugerida (alta, 24 h), las fotos y el impacto. «Aprobar y crear OT» crea la <b className="mono">OT-000456</b> correctiva.</p>
              <span className="cm-quien">Administrador</span>
            </li>
            <li>
              <span className="cm-hora">07:30</span>
              <span className="chip-e e-rev">Planificada</span>
              <h3>Se planifica</h3>
              <p>Responsable Jorge, inicio 8:00, cinco tareas numeradas 10 a 50, 12.5 h-hombre, requiere parar el equipo y un sello de repuesto.</p>
              <span className="cm-quien">Administrador</span>
            </li>
            <li>
              <span className="cm-hora">08:05</span>
              <span className="chip-e e-aprob">En ejecución</span>
              <h3>Jorge inicia el trabajo</h3>
              <p>Cada técnico registra sus horas por tarea. El calendario marca en rojo si se pasa de su hora de fin.</p>
              <span className="cm-quien">Responsable de la OT</span>
            </li>
            <li>
              <span className="cm-hora">15:30</span>
              <span className="chip-e e-cerr">Cerrada</span>
              <h3>Cierre técnico</h3>
              <p>Parte, daño, causa, acción y fin de la falla. La OT queda cerrada y el aviso AV-000412 se cierra con ella. Fuera de servicio: 9.7 h.</p>
              <span className="cm-quien">Responsable de la OT</span>
            </li>
          </ol>

          <div className="cm-estados">
            <div className="cm-carril">
              <b className="cm-carril-n">Aviso</b>
              <div className="cm-carril-flujo">
                <span className="chip-e e-nuevo">Nuevo</span><i>→</i><span className="chip-e e-rev">En revisión</span><i>→</i><span className="chip-e e-aprob">Aprobado</span><i>→</i><span className="chip-e e-cerr">Cerrado</span>
              </div>
              <div className="cm-carril-alt"><span className="chip-e e-rojo">Rechazado</span> pide motivo · <span className="chip-e p-baja">Duplicado</span> pide el aviso original</div>
            </div>
            <div className="cm-enlace-carril"><span>Aprobar crea la OT</span><span>Cerrar la OT cierra el aviso</span></div>
            <div className="cm-carril">
              <b className="cm-carril-n">Orden de trabajo</b>
              <div className="cm-carril-flujo">
                <span className="chip-e e-nuevo">Abierta</span><i>→</i><span className="chip-e e-rev">Planificada</span><i>→</i><span className="chip-e e-aprob">En ejecución</span><i>→</i><span className="chip-e e-cerr">Cerrada</span>
              </div>
              <div className="cm-carril-alt"><span className="chip-e p-baja">Anulada</span> desde abierta o planificada, con motivo registrado</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 1. El aviso ───────── */}
      <section className="sec" id="avisos">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">01</span>
            <div className="sec-cab">
              <h2>El aviso: <span className="gris">datos completos desde el primer minuto.</span></h2>
              <p>Un aviso mal hecho genera una orden mal planificada. Por eso la app no deja un formulario en blanco: hace una pregunta a la vez, en el mismo orden en la web y en el teléfono.</p>
            </div>
          </div>

          <div className="cm-dos">
            <ol className="cm-preguntas">
              {[
                ["Equipo", "Por tag o código, o escaneando su QR o código de barras. Sin UT asignada no se puede reportar."],
                ["Título", "Una frase corta: «Fuga por el sello mecánico»."],
                ["Inicio de la avería", "«Hoy a las 5:50». No acepta fechas futuras. Es el punto de partida del tiempo fuera de servicio."],
                ["Estado del equipo", "¿Está parado? Sube la prioridad y se marca en rojo en la lista."],
                ["Impacto en la función", "Crítica, degradada o incipiente, según ISO 14224."],
                ["Síntoma", "Vibración, ruido, fuga, temperatura alta, no arranca, disparo…"],
                ["Método de detección", "Inspección, monitoreo de condición, observación casual… (ISO 14224 B.4)."],
                ["Descripción", "Qué se ve, qué se oye, desde cuándo, qué se hizo."],
                ["Fotos", "Hasta 6, de máximo 10 MB cada una. Opcional."],
                ["Prioridad", "Sugerida por la criticidad, el impacto y si está parado. Se puede cambiar."],
              ].map(([t, d], i) => (
                <li key={t}><span className="n">{i + 1}</span><div><b>{t}</b><p>{d}</p></div></li>
              ))}
            </ol>
            <div className="cm-pant-anot">
              <PantallaAvisos marcas />
              <ul className="cm-anot">
                <li><Num n={1} /><p><b>Impacto crítico y equipo parado en rojo.</b> El que tiene que actuar primero se ve sin abrir nada.</p></li>
                <li><Num n={2} /><p><b>Filtros por columna</b> con el embudo: prioridad, impacto, parado, fecha de avería, reportante y estatus.</p></li>
                <li><Num n={3} /><p><b>«Ocultar cerrados»</b> esconde los cerrados, rechazados y duplicados. Lo que queda es lo pendiente.</p></li>
                <li><Num n={4} /><p><b>Excel</b> descarga lo filtrado con método de detección, UT y descripción incluidos.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 2. La prioridad ───────── */}
      <section className="sec suave" id="prioridad">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">02</span>
            <div className="sec-cab">
              <h2>La prioridad sale de una regla, <span className="gris">no de quien grita más fuerte.</span></h2>
              <p>ReliaPlant cruza la criticidad que el equipo ya tiene en la taxonomía con dos respuestas del aviso. Pruébalo: elige un caso y mira dónde cae en la matriz.</p>
            </div>
          </div>
          <MatrizPrioridad />
          <div className="cm-regla">
            <div><b>La regla completa</b><p>Muy alta y alta parten en <em>alta</em>. Media-alta, media y sin criticidad parten en <em>media</em>. Media-baja y baja parten en <em>baja</em>. Equipo parado o falla crítica sube un nivel. Falla incipiente baja un nivel. Nunca pasa de emergencia ni baja de baja.</p></div>
            <div><b>Queda la sugerida</b><p>El supervisor puede cambiarla. El aviso guarda la prioridad sugerida al lado de la final, y el cambio queda en el historial con nombre y hora. Así se puede auditar cuántas veces se corrige la regla y por qué.</p></div>
          </div>
        </div>
      </section>

      {/* ───────── 3. La revisión ───────── */}
      <section className="sec" id="revision">
        <div className="env cm-dos cm-dos-inv">
          <div className="cm-txt">
            <div className="cm-cab-num solo">
              <span className="cm-paso">03</span>
            </div>
            <h2 className="cm-h2">El supervisor lee el aviso <span className="gris">como una conversación.</span></h2>
            <p className="cm-p">En vez de un formulario con 15 campos, ReliaPlant cuenta el aviso en frases cortas: quién, qué equipo, si está parado, desde cuándo, las fotos y la prioridad. Al final pregunta qué hacer.</p>
            <ul className="cm-decisiones">
              <li><span className="chip-e e-aprob">Aprobar y crear OT</span><p>Nace la orden correctiva con el equipo, la prioridad y la descripción del aviso. Si el equipo estaba parado, la OT ya marca que requiere parada.</p></li>
              <li><span className="chip-e e-rojo">Rechazar</span><p>Pide el motivo y lo guarda. Ej.: «no es falla, es parte de la operación normal».</p></li>
              <li><span className="chip-e p-baja">Es duplicado</span><p>Pide el aviso original. La misma fuga reportada por dos operadores no genera dos órdenes.</p></li>
              <li><span className="chip-e p-media">Cambiar prioridad</span><p>Muestra cuál era la sugerida y registra el cambio en el historial.</p></li>
            </ul>
          </div>
          <ChatAviso />
        </div>
      </section>

      {/* ───────── 4. La orden de trabajo ───────── */}
      <section className="sec suave" id="ordenes">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">04</span>
            <div className="sec-cab">
              <h2>La orden de trabajo, <span className="gris">con tareas, técnicos y horas que se pueden medir.</span></h2>
              <p>Planificar es contestar seis preguntas: responsable, fecha, tareas, quién hace cada una, si hay que parar el equipo y qué materiales se necesitan. Para un correctivo, ReliaPlant propone empezar por una tarea de 2 h: «Inspeccionar y diagnosticar».</p>
            </div>
          </div>

          <PantallaOrdenes />
          <p className="cm-pie">Correctiva, preventiva, predictiva o mejora. La fecha de inicio planificado sale en rojo cuando ya pasó y la OT sigue abierta o planificada (OT-000453).</p>

          <div className="cm-ot-grid">
            <ChatOrden />
            <div className="cm-ot-lado">
              <figure className="cm-foto">
                <Image src="/sitio/gmao-orden-bomba.jpg" alt="Técnicos cambiando el sello de una bomba con el tablero bloqueado y etiquetado" fill sizes="(max-width: 900px) 100vw, 440px" style={{ objectFit: "cover" }} />
                <figcaption><b className="mono">Tarea 10</b> Aislar y bloquear (LOTO) antes de tocar la bomba. El candado rojo del tablero es parte de la orden.</figcaption>
              </figure>
              <div className="cm-nota">
                <b>¿Por qué 10, 20, 30?</b>
                <p>Es la convención de las hojas de ruta de SAP PM: numerar de diez en diez deja espacio para insertar una tarea entre dos sin renumerar. Si al desmontar aparece un rodamiento dañado, entra como 25.</p>
              </div>
              <div className="cm-nota">
                <b>Horas-hombre, no horas reloj</b>
                <p>La tarea 20 dura 2 h con 2 mecánicos: son 4 h-hombre. La OT suma 12.5 h-hombre estimadas aunque en el calendario ocupe 7.5 h. Las horas reales se registran por técnico y por tarea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 5. Calendario ───────── */}
      <section className="sec" id="calendario">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">05</span>
            <div className="sec-cab">
              <h2>Programar es arrastrar. <span className="gris">Los problemas se ven en rojo.</span></h2>
              <p>Vistas de día, semana y mes. Arrastras una OT a otra hora y conserva su duración. Arrastras una OT sin fecha y se abre su planificación con ese día y hora. Pasos de 30 minutos, nunca en el pasado.</p>
            </div>
          </div>
          <CalendarioSemana />
          <div className="cm-leyenda">
            <div><span className="cm-mu planificada" />Programada</div>
            <div><span className="cm-mu en_ejecucion" />Se está haciendo ahora</div>
            <div><span className="cm-mu cerrada">✓</span>Terminada</div>
            <div><span className="cm-mu planificada emer" />Emergencia</div>
            <div><span className="cm-mu-marca">!</span><span><b>Atrasada</b>: planificada y ya debía empezar. <b>Excedida</b>: en ejecución y pasó su fin. <b>Cruce</b>: el mismo responsable con dos OT a la vez.</span></div>
            <div><span className="cm-mu-ahora" />La hora actual</div>
          </div>
        </div>
      </section>

      {/* ───────── 6. Ejecutores y capacidad ───────── */}
      <section className="sec suave" id="ejecutores">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">06</span>
            <div className="sec-cab">
              <h2>Cuántas horas tienes de verdad <span className="gris">antes de prometer una fecha.</span></h2>
              <p>Los puestos de trabajo (mecánica, eléctrica, instrumentación, contratistas) tienen técnicos con nombre, tengan o no cuenta en la app. Los mismos puestos usa el módulo de planes de mantenimiento para su línea de capacidad.</p>
            </div>
          </div>
          <KanbanEjecutores />

          <div className="cm-capacidad">
            <div className="cm-cap-txt">
              <h3>Ejemplo resuelto: mecánica en noviembre de 2026</h3>
              <p>La columna muestra la capacidad teórica. La pestaña Disponibilidad descuenta feriados de la planta y ausencias de cada técnico, día por día.</p>
            </div>
            <div className="cm-cuentas">
              <div className="cm-cuenta">
                <span>Teórica</span>
                <code>3 técnicos × 8 h × 5 días × 4.348 semanas</code>
                <b>522 H-H</b>
              </div>
              <div className="cm-cuenta">
                <span>Días laborables</span>
                <code>30 días − 9 de fin de semana − 1 feriado (16 nov)</code>
                <b>20 días</b>
              </div>
              <div className="cm-cuenta">
                <span>Real</span>
                <code>3 × 20 días × 8 h − 3 días de vacaciones de Raúl × 8 h</code>
                <b className="azul">456 H-H</b>
              </div>
              <p className="cm-cuenta-pie">66 H-H menos que la cuenta rápida: más de 5 órdenes como la del sello de la P-211A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 7. Cierre técnico e ISO 14224 ───────── */}
      <section className="sec" id="cierre">
        <div className="env">
          <div className="cm-cab-num">
            <span className="cm-paso">07</span>
            <div className="sec-cab">
              <h2>«Reparado» no es un cierre. <span className="gris">Parte, daño, causa y acción sí.</span></h2>
              <p>El cierre técnico hace cuatro preguntas y pide cuándo quedó el equipo disponible. Son los mismos campos que piden ISO 14224 y los catálogos de SAP PM, para que el historial sirva el día que hagas un RCA o revises un plan.</p>
            </div>
          </div>

          <div className="cm-cierre">
            <ChatOrdenCerrada />
            <div className="scroll-x">
              <table className="cm-iso">
                <thead><tr><th>Pregunta del cierre</th><th>ISO 14224</th><th>SAP PM</th><th>Ejemplo del catálogo base · Bombas</th></tr></thead>
                <tbody>
                  <tr><td>¿Qué parte del equipo falló?</td><td>Unidad mantenible</td><td>Catálogo B · Parte del objeto</td><td><span className="mono">SELL</span> Sello mecánico / empaquetadura</td></tr>
                  <tr><td>¿Qué daño encontraste?</td><td>B.6 Modo de falla</td><td>Catálogo C · Daño</td><td><span className="mono">ELP</span> Fuga externa de fluido de proceso</td></tr>
                  <tr><td>¿Cuál crees que fue la causa?</td><td>B.3 Causa de falla</td><td>Catálogo 5 · Causa</td><td><span className="mono">3.1</span> Servicio fuera de diseño</td></tr>
                  <tr><td>¿Qué hiciste para repararlo?</td><td>B.5 Actividad de mantenimiento</td><td>Actividad</td><td><span className="mono">1</span> Reemplazar</td></tr>
                  <tr><td>Detectado por (del aviso)</td><td>B.4 Método de detección</td><td>-</td><td><span className="mono">3</span> Inspección</td></tr>
                  <tr><td>¿Cuándo quedó disponible?</td><td>Tiempo fuera de servicio</td><td>Fin de avería</td><td>11 nov 05:50 → 15:30 = 9.7 h</td></tr>
                </tbody>
              </table>
              <p className="cm-pie">El catálogo base viene cargado para bombas, compresores, motores eléctricos, válvulas de control e intercambiadores de calor, más listas generales de mecanismos (B.2), causas (B.3), detección (B.4) y acciones (B.5).</p>
            </div>
          </div>

          <div className="cm-mtbf">
            <div className="cm-mtbf-cab">
              <span className="chip-sec"><i />Ejemplo resuelto</span>
              <h3>Tres cierres de la P-211A en un año, <span className="gris">convertidos en MTBF, MTTR y disponibilidad.</span></h3>
            </div>
            <div className="cm-mtbf-grid">
              <table className="cm-fallas">
                <thead><tr><th>OT</th><th>Inicio de avería</th><th>Disponible</th><th className="r">Fuera de servicio</th></tr></thead>
                <tbody>
                  <tr><td className="mono">OT-000188</td><td>02 feb 14:10</td><td>02 feb 20:22</td><td className="r">6.2 h</td></tr>
                  <tr><td className="mono">OT-000301</td><td>19 jun 03:40</td><td>19 jun 14:46</td><td className="r">11.1 h</td></tr>
                  <tr><td className="mono">OT-000456</td><td>11 nov 05:50</td><td>11 nov 15:30</td><td className="r">9.7 h</td></tr>
                  <tr className="tot"><td colSpan={3}>Total en 12 meses (8,760 h)</td><td className="r">27 h</td></tr>
                </tbody>
              </table>
              <div className="cm-formulas">
                <div><span>MTBF</span><code>(8,760 − 27) ÷ 3 fallas</code><b>2,911 h</b><small>unos 121 días entre fallas</small></div>
                <div><span>MTTR</span><code>27 h ÷ 3 fallas</code><b>9 h</b><small>desde el inicio de la avería hasta que quedó disponible</small></div>
                <div><span>Disponibilidad</span><code>2,911 ÷ (2,911 + 9)</code><b>99.69 %</b><small>la bomba B cubre el resto</small></div>
              </div>
            </div>
            <p className="cm-pie">Ojo con el MTTR: medido desde el inicio de la avería incluye la espera hasta que empieza el trabajo (05:50 a 08:05). ReliaPlant guarda las dos marcas, inicio de la avería e inicio real de la OT, para separar el tiempo de respuesta del tiempo de reparación. Y si las tres fallas son del sello, ese es el modo de falla que hay que mirar en el RCM.</p>
          </div>
        </div>
      </section>

      {/* ───────── 8. Conectado vs suelto ───────── */}
      <section className="sec suave" id="conectado">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Por qué conectado</span>
            <h2>Un CMMS suelto registra trabajo. <span className="gris">Uno conectado aprende de él.</span></h2>
            <p>El GMAO de ReliaPlant no tiene su propia lista de equipos. Usa la de la taxonomía, la misma que analizan el RCM, el RCA y los planes de mantenimiento.</p>
          </div>
          <div className="scroll-x">
            <table className="cm-comp">
              <thead><tr><th /><th>Excel y WhatsApp</th><th>CMMS suelto</th><th className="rp">ReliaPlant</th></tr></thead>
              <tbody>
                <tr><th>Dónde nace el aviso</th><td>Un mensaje o una llamada</td><td>Un formulario en la oficina</td><td>La app de campo, con fotos y sin señal</td></tr>
                <tr><th>Cómo se identifica el equipo</th><td>«La bomba de condensado»</td><td>Una lista de equipos propia del CMMS que hay que mantener</td><td>Tag, UT y clase de la taxonomía; QR o código de barras en el teléfono</td></tr>
                <tr><th>Prioridad</th><td>Quien insiste más</td><td>La que elige quien reporta</td><td>Regla con la criticidad del equipo, el impacto y si está parado</td></tr>
                <tr><th>Capacidad</th><td>Nadie la calcula</td><td>Horas por técnico</td><td>Puestos de trabajo con feriados y ausencias, compartidos con los planes de mantenimiento</td></tr>
                <tr><th>Cierre</th><td>«Reparado»</td><td>Campos libres</td><td>Parte, daño, causa, acción y fin de la falla, en lenguaje ISO 14224</td></tr>
                <tr><th>Después del cierre</th><td>Se pierde</td><td>Un reporte</td><td>Queda en el mismo equipo que analizan el RCM y el RCA</td></tr>
              </tbody>
            </table>
          </div>
          <div className="cm-ciclo">
            <a href="/producto/taxonomia"><span>Antes</span><b>Taxonomía</b><small>Los equipos, su UT y su criticidad</small></a>
            <a href="/producto/planes-de-mantenimiento"><span>En paralelo</span><b>Planes de mantenimiento</b><small>El preventivo con los mismos puestos de trabajo</small></a>
            <a href="/producto/rca"><span>Cuando se repite</span><b>RCA</b><small>Causa raíz de la falla que vuelve</small></a>
            <a href="/producto/rcm"><span>Para prevenir</span><b>RCM</b><small>La tarea correcta para cada modo de falla</small></a>
          </div>
        </div>
      </section>

      {/* ───────── 9. Hazlo tú o lo hacemos por ti ───────── */}
      <section className="sec" id="servicio">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>El GMAO necesita cuatro cosas para arrancar. <span className="gris">Tú decides quién las prepara.</span></h2>
          </div>
          <ol className="cm-req">
            {[
              ["Equipos con tag y UT", "Carga masiva desde Excel con vista previa de cada cambio, o levanta en campo con la app.", "Levantamiento de activos en planta: tags, placas, fotos y DTIs.", "/servicios/levantamiento-de-activos"],
              ["Clase y jerarquía ISO 14224", "Catálogo de clases y tipos de equipo listo para usar.", "Taxonomía ISO 14224 armada y revisada por ingenieros de confiabilidad.", "/servicios/taxonomia-iso-14224"],
              ["Criticidad de cada equipo", "Niveles A, B, C (o los tuyos) asignados por equipo.", "Análisis de criticidad con tu equipo de operaciones y mantenimiento.", ""],
              ["Puestos de trabajo y técnicos", "Lista inicial de 7 puestos lista para ajustar y agregar a tus técnicos.", "Configuración de puestos, técnicos y disponibilidad, y capacitación a supervisores y técnicos.", ""],
            ].map(([q, tu, nos, href], i) => (
              <li key={q} className="cm-req-it">
                <span className="cm-req-n">{i + 1}</span>
                <h3>{q}</h3>
                <p><b>Tú</b>{tu}</p>
                <p className="nos"><b>Nosotros</b>{nos}{href && <> <a href={href}>Ver servicio →</a></>}</p>
              </li>
            ))}
          </ol>
          <div className="cm-arr-ctas">
            <a className="btn btn-azul" href={APP}>Empezar yo</a>
            <AbrirFormContacto buttonText="Que lo hagan por mí" variant="borde" icon={null} modalTitle="Implementación del GMAO" btnText="Enviar" especial={ORIGEN} />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="sec suave" id="faq">
        <div className="env cm-faq-env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>Sobre CMMS y GMAO</h2>
          </div>
          <div className="cm-faq">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>{f.p}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Cierre ───────── */}
      <section className="cierre">
        <div className="env">
          <div className="cierre-caja">
            <div>
              <h2>Reporta la primera falla hoy. <span className="gris">Ciérrala con datos mañana.</span></h2>
              <p>En la demo cargamos un par de tus equipos y recorremos un aviso completo, del teléfono al cierre técnico.</p>
            </div>
            <div className="ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="white" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
          <a className="cm-sig" href="/producto/inventario">
            <span>Siguiente en el ciclo</span>
            <b>Inventario de repuestos: que el sello esté en el almacén antes de que falle →</b>
          </a>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { PantallaHoja, PantallaInfo, PantallaPlan, PantallaBiblioteca, PantallaRecomendaciones } from "./Pantallas";
import DiagramaDecision from "./Diagrama";
import CalculadoraNPR from "./CalculadoraNPR";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Software RCM según SAE JA1011 | ReliaPlant" },
  description:
    "Mantenimiento centrado en confiabilidad: las 7 preguntas de SAE JA1011, NPR con tus escalas, diagrama de decisión y plan en Excel listo para tu CMMS.",
  alternates: { canonical: "https://reliaplant.com/producto/rcm" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/rcm";

// ── Las 7 preguntas (SAE JA1011) y dónde vive cada una en ReliaPlant ──
const PREGUNTAS = [
  {
    q: "¿Qué funciones tiene el equipo y qué desempeño se espera de él en su contexto?",
    que: "La función se escribe con verbo, objeto y estándar de desempeño. Sin número no hay forma de decir cuándo falló.",
    donde: <><b>Columna Función</b> de la hoja de análisis, más el contexto operacional de la información preliminar.</>,
    ej: <>Bombear condensado del <code>V-210</code> al desaireador: no menos de 45 m³/h a 62 m.</>,
  },
  {
    q: "¿De qué forma puede dejar de cumplir esas funciones?",
    que: "Cada función tiene una o varias fallas funcionales: la pérdida total y las pérdidas parciales que violan el estándar.",
    donde: <><b>Columna Falla funcional</b>, identificada con letra (A, B, …) dentro de cada función.</>,
    ej: <>A: no bombea. B: bombea menos de 45 m³/h.</>,
  },
  {
    q: "¿Qué causa cada falla funcional?",
    que: "El modo de falla es el evento que provoca la falla, al nivel donde tiene sentido hacer algo. Opcionalmente se registra el patrón: mortalidad infantil, aleatorio o relacionado con la edad.",
    donde: <><b>Columna Modo de falla</b> y, si tu empresa la activa, <b>Patrón de falla</b>.</>,
    ej: <>Desgaste de caras del sello mecánico por marcha en seco.</>,
  },
  {
    q: "¿Qué pasa cuando ocurre cada falla?",
    que: "El efecto cuenta la historia: qué se ve, qué se para, cuánto tarda en volver a operar. Es la evidencia que usa la siguiente pregunta.",
    donde: <><b>Columna Efecto de falla</b>. La consecuencia no se puede definir hasta que el efecto esté escrito.</>,
    ej: <>Gotea condensado a 95 °C hasta que hay que parar. La <code>P-211B</code> entra en 20 minutos.</>,
  },
  {
    q: "¿De qué manera importa cada falla?",
    que: "Se clasifica la consecuencia: oculta, de seguridad, ambiental, operacional o no operacional. El NPR (F × S × D) ayuda a priorizar, pero no reemplaza esta pregunta.",
    donde: <><b>Diagrama de decisión</b> (preguntas H, S, E, O) y columna <b>Consecuencia</b>; el NPR va en la columna <b>Riesgo</b>.</>,
    ej: <>Falla evidente con consecuencia operacional. NPR 5 × 4 × 5 = 100.</>,
  },
  {
    q: "¿Qué se puede hacer para predecir o prevenir cada falla?",
    que: "Se evalúa primero una tarea a condición, después una preventiva a intervalo fijo. Cada una debe ser técnicamente factible y valer la pena para esa consecuencia.",
    donde: <>Preguntas <b>1 y 2 de cada carril</b> del diagrama y columna <b>Actividad</b>, con tipo, frecuencia, ejecutor y horas.</>,
    ej: <>Inspección visual de goteo por el sello, cada semana, a cargo del operador.</>,
  },
  {
    q: "¿Qué hacer si no hay una tarea proactiva adecuada?",
    que: "Búsqueda de fallas para funciones ocultas, rediseño cuando la ley o la seguridad lo exigen, o dejar operar hasta la falla (RTF) cuando no conviene hacer nada.",
    donde: <>Preguntas <b>H4, H5, S4 y O5</b> del diagrama. Los rediseños pasan a <b>Recomendaciones</b> con responsable y fecha.</>,
    ej: <>Probar el disparo del <code>PSL-211</code> cada 4 meses. Evaluar un sello doble.</>,
  },
];

const CONSECUENCIAS = [
  { l: "H", c: "l-h", t: "Falla oculta", d: "Nadie se entera cuando ocurre. Solo importa si además falla otra cosa, como un dispositivo de protección cuando se le necesita." },
  { l: "H", c: "l-h", t: "Falla oculta con consecuencia a la seguridad o el ambiente", d: "La falla múltiple puede lesionar a alguien o violar una norma. Si no hay tarea que sirva, el rediseño es obligatorio." },
  { l: "S", c: "l-s", t: "Falla evidente con consecuencia a la seguridad", d: "La pérdida de función o sus daños pueden lesionar o matar a alguien." },
  { l: "E", c: "l-e", t: "Falla evidente con consecuencia al ambiente", d: "Puede infringir una norma o reglamento ambiental. Se trata en el mismo carril que seguridad." },
  { l: "O", c: "l-o", t: "Falla evidente con consecuencia operacional", d: "Afecta producción, calidad, servicio o costos de operación, además de la reparación." },
  { l: "N", c: "l-n", t: "Falla evidente con consecuencia no operacional", d: "Solo cuesta la reparación. La tarea se justifica únicamente si sale más barata que reparar." },
];

const CATALOGO = [
  { c: "c1", t: "Tarea a condición", items: [["Monitoreo de variables operativas", "presión, temperatura, flujo en sitio o por DCS"], ["Predictivo", "vibración de espectro completo, aceite, termografía"], ["Medición de parámetros", "corriente, aislamiento, factor de potencia"], ["Inspección visual", "fugas, ruido, calentamiento, corrosión"], ["Inspección interna", "boroscopio, desarme parcial"], ["Ensayos no destructivos", "ultrasonido, líquidos penetrantes, partículas magnéticas"], ["Prueba de desempeño", "prueba de lazo, de sellado, de eficiencia, hidrostática"]] },
  { c: "c2", t: "Búsqueda de fallas", items: [["Prueba periódica de funcionamiento", "simulación de disparo, enclavamientos, alarmas, detectores de gas"]] },
  { c: "c3", t: "Preventivo", items: [["Restauración de apariencia", "limpieza técnica, pintura, recubrimiento"], ["Lubricación", "engrase de rodamientos, cambio de aceite"], ["Ajuste", "alineación, balanceo, calibración"], ["Tarea de servicio", "limpieza exterior, consumibles"], ["Tarea de vigilancia", "niveles, luces piloto, resistencias"], ["Sustitución cíclica", "filtros, sellos, mangueras, baterías, correas"], ["Reacondicionamiento menor o mayor", "overhaul, mantenimiento mayor"]] },
  { c: "c4", t: "RTF", items: [["Correr hasta la falla", "se deja fallar a propósito y se repara"]] },
  { c: "c5", t: "Rediseño", items: [["Cambio de diseño, material o configuración", "otro tipo de bomba, otra malla de filtro"]] },
];

const MODOS = [
  ["Selección de equipos y alcance", "Eliges los equipos de tu taxonomía y abres un proyecto por cada uno.", "Priorizamos contigo por criticidad y te proponemos el alcance del estudio."],
  ["Información preliminar", "Límites, premisas y contexto operacional en la pestaña 1.", "Recopilamos DTIs, historial de fallas y manuales, y lo dejamos documentado."],
  ["Sesiones con el equipo natural de trabajo", "Tu ingeniero facilita; la hoja y el diagrama ordenan la discusión.", "Un facilitador de ReliaPlant conduce las sesiones con tu operación y mantenimiento."],
  ["Hoja de análisis y decisión", "Funciones, modos, NPR y consecuencias con las escalas de tu empresa.", "Te entregamos la hoja completa, con cada tarea justificada en el diagrama."],
  ["Plan para el CMMS", "Exportas a Excel con la hoja CMMS Template configurada.", "Dejamos el plan cargado en la plataforma y el Excel listo para tu CMMS."],
  ["Plantillas para lo que sigue", "Guardas tus análisis como plantillas y los reutilizas.", "Armamos las plantillas de tus familias de equipo para que sigas tú."],
];

const FAQ = [
  {
    p: "¿Qué es el mantenimiento centrado en confiabilidad (RCM)?",
    r: "Es un método para decidir qué mantenimiento necesita cada equipo según lo que debe hacer en su contexto de operación. Parte de las funciones, identifica cómo pueden fallar, qué causa cada falla y qué consecuencias tiene, y con eso elige la tarea que vale la pena hacer, o concluye que conviene rediseñar o dejar operar hasta la falla.",
  },
  {
    p: "¿Cuáles son las 7 preguntas del RCM según SAE JA1011?",
    r: "Funciones y estándares de desempeño, fallas funcionales, modos de falla, efectos de falla, consecuencias, tareas proactivas y acciones a falta de una tarea adecuada. La norma SAE JA1011 dice que un proceso solo se puede llamar RCM si responde las siete, en ese orden.",
  },
  {
    p: "¿Qué diferencia hay entre RCM y FMEA (AMEF)?",
    r: "El FMEA identifica modos de falla y efectos, y suele priorizarlos con el NPR. El RCM contiene un FMEA, pero empieza antes, en las funciones y su estándar de desempeño, y sigue después: clasifica la consecuencia de cada modo y termina en una decisión de tarea con frecuencia y ejecutor.",
  },
  {
    p: "¿Cómo se calcula el NPR y cuál es un valor aceptable?",
    r: "NPR = F × S × D, con escalas de 1 a 10, así que va de 1 a 1000. No hay un valor universal: depende de las escalas. Con las escalas por defecto de ReliaPlant, los cortes 50 y 150 reparten las combinaciones plausibles en tercios. Cada empresa puede cambiar escalas y cortes.",
  },
  {
    p: "¿Qué es el intervalo P-F y cómo define la frecuencia de una tarea a condición?",
    r: "Es el tiempo entre el momento en que una falla se puede detectar (P, falla potencial) y el momento en que ocurre (F, falla funcional). La tarea a condición se hace a intervalos menores que el P-F, normalmente la mitad, para tener tiempo de planificar la intervención.",
  },
  {
    p: "¿Qué es una falla oculta y cómo se mantiene?",
    r: "Es una falla que el operador no ve en condiciones normales, típica de protecciones y equipos de respaldo. Se maneja con búsqueda de fallas: una prueba periódica que confirma que el dispositivo aún funciona. Si no hay prueba posible y la falla múltiple afecta la seguridad o el ambiente, hay que rediseñar.",
  },
  {
    p: "¿Por qué equipos conviene empezar un RCM?",
    r: "Por los de criticidad alta, los que más fallan o los que más cuestan en mantenimiento. Un buen primer análisis es una familia con muchos equipos parecidos, como bombas centrífugas, porque el resultado se vuelve plantilla para el resto.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };

  return (
    <div className="rph lp-rcm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada ── */}
      <section className="rc-hero">
        <div className="env">
          <span className="chip-sec"><i />Software RCM</span>
          <div className="rc-hero-top">
            <h1>Mantenimiento centrado en confiabilidad, <span className="gris">de la función del equipo a la tarea que la protege.</span></h1>
            <div className="rc-hero-der">
              <p className="rc-hero-sub">
                La hoja de análisis, el diagrama de decisión y el plan de mantenimiento en un solo lugar, sobre los equipos de tu taxonomía. Cada tarea queda amarrada al modo de falla que ataca.
              </p>
              <div className="ctas">
                <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                <AbrirFormContacto buttonText="Solicita una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Solicitar demo" especial={ORIGEN} />
              </div>
            </div>
          </div>
          <div className="rc-norma">
            <span>Las 7 preguntas de SAE JA1011</span>
            <span>NPR con las escalas de tu empresa</span>
            <span>Diagrama de decisión H · S · E · O</span>
            <span>Excel de ida y vuelta</span>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 24 }} aria-label="Hoja de análisis RCM">
        <div className="env">
          <PantallaHoja />
          <div className="rc-leyenda">
            <span><span className="rc-num">1</span>Función</span>
            <span><span className="rc-num">2</span>Falla funcional</span>
            <span><span className="rc-num">3</span>Modo de falla</span>
            <span><span className="rc-num">4</span>Efecto</span>
            <span><span className="rc-num">5</span>Consecuencia</span>
            <span><span className="rc-num">6</span>Tarea proactiva</span>
            <span><span className="rc-num">7</span>Qué hacer si no hay tarea</span>
          </div>
          <p className="rc-pie">Hoja de análisis de la P-211A en la planta Compresión Norte. Cada número es una de las 7 preguntas del RCM. Abajo, las unidades del análisis, como pestañas de Excel.</p>
        </div>
      </section>

      {/* ── Las 7 preguntas ── */}
      <section className="sec suave" id="siete-preguntas">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />SAE JA1011</span>
            <h2>Siete preguntas. <span className="gris">Cada una con su lugar en la hoja.</span></h2>
            <p>La norma SAE JA1011 define qué tiene que responder un proceso para llamarse RCM. En ReliaPlant no hay una columna de más ni una pregunta que se pueda saltar.</p>
          </div>
          <div className="rc-7">
            <ol>
              {PREGUNTAS.map((p, i) => (
                <li key={p.q}>
                  <span className="n">{i + 1}</span>
                  <div><h3>{p.q}</h3><p>{p.que}</p></div>
                  <div className="donde"><span className="eti">Dónde vive</span>{p.donde}</div>
                  <div className="ej"><span className="eti">En la P-211A</span>{p.ej}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Información preliminar y ENT ── */}
      <section className="sec">
        <div className="env rc-dos">
          <div className="sec-cab">
            <span className="chip-sec"><i />Antes de la hoja</span>
            <h2>El contexto decide el plan. <span className="gris">Escríbelo primero.</span></h2>
            <p>Dos bombas idénticas pueden terminar con planes distintos. Si la P-211A tiene una reserva que entra en 20 minutos, perderla cuesta poco. Si estuviera sola, la misma falla pararía la planta.</p>
            <ul className="rc-notas">
              <li><span className="rc-num">1</span><span><b>Límites del análisis.</b> <span className="t">Dónde empieza y dónde termina el equipo: de brida a brida, con o sin motor, con o sin protecciones.</span></span></li>
              <li><span className="rc-num">2</span><span><b>Premisas y contexto operacional.</b> <span className="t">Régimen de operación, reservas, autonomía del tanque. Es lo que justifica la severidad que pones después.</span></span></li>
              <li><span className="rc-num">3</span><span><b>Equipo natural de trabajo.</b> <span className="t">Operación, mantenimiento e ingeniería en la misma mesa, con integrantes de tu organización y externos, como el técnico del fabricante del sello.</span></span></li>
            </ul>
            <p className="rc-cita">Todo esto sale en la hoja Resumen del Excel, junto a los datos del equipo que el proyecto toma de la taxonomía: tag, clase, criticidad y ubicación técnica.</p>
          </div>
          <PantallaInfo />
        </div>
      </section>

      {/* ── Ejemplo resuelto ── */}
      <section className="sec suave" id="ejemplo">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Ejemplo resuelto</span>
            <h2>Un modo de falla, <span className="gris">de punta a punta.</span></h2>
            <p>El sello de la P-211A, como se ve en la hoja y en el diagrama. Los valores de F, S y D salen de las escalas por defecto de ReliaPlant.</p>
          </div>
          <div className="rc-ej">
            <figure className="rc-ej-foto" style={{ margin: 0 }}>
              <div className="img">
                <Image src="/sitio/equipo/sello.jpg" alt="Sello mecánico de una bomba centrífuga con rastros de goteo en la carcasa" fill sizes="(max-width: 960px) 50vw, 380px" style={{ objectFit: "cover" }} />
              </div>
              <div>
                <div className="ficha-mini">
                  <div><span>Equipo</span><b>P-211A</b></div>
                  <div><span>UT</span><b>CN-210</b></div>
                  <div><span>Reserva</span><b>P-211B</b></div>
                  <div><span>Criticidad</span><b>A</b></div>
                </div>
                <figcaption style={{ marginTop: 10 }}>El goteo por el sello aparece semanas antes de la fuga franca. Ese tiempo es el intervalo P-F.</figcaption>
              </div>
            </figure>
            <ol className="rc-cadena">
              <li>
                <span className="k">Función<small>pregunta 1</small></span>
                <div className="v"><p>Bombear condensado del V-210 al desaireador: no menos de 45 m³/h a 62 m de altura.</p></div>
              </li>
              <li>
                <span className="k">Falla funcional<small>pregunta 2</small></span>
                <div className="v"><p>A. No bombea.</p><p className="por">La falla B, bombear menos de 45 m³/h, tiene sus propios modos, como el desgaste del impulsor por cavitación.</p></div>
              </li>
              <li>
                <span className="k">Modo de falla<small>pregunta 3</small></span>
                <div className="v"><p>Desgaste de caras del sello mecánico por marcha en seco.</p></div>
              </li>
              <li>
                <span className="k">Efecto<small>pregunta 4</small></span>
                <div className="v">
                  <p>Gotea condensado a 95 °C por el sello. El goteo crece hasta que hay que parar la bomba. El operador arranca la P-211B en unos 20 minutos.</p>
                  <div className="rc-fsd">
                    <div><b>F 5</b>Ocasional: alrededor de 1 vez al año.</div>
                    <div><b>S 4</b>De 10 a 30 minutos de producción perdida.</div>
                    <div><b>D 5</b>La ve el operador en su ronda, ya evidente.</div>
                    <div className="npr npr-a"><span><b>100</b>NPR · amarillo</span></div>
                  </div>
                </div>
              </li>
              <li>
                <span className="k">Consecuencia<small>pregunta 5</small></span>
                <div className="v">
                  <p>Falla evidente con consecuencia operacional.</p>
                  <div className="rc-ruta">
                    <span><b>H</b> Sí</span><i>→</i><span><b>S</b> No</span><i>→</i><span><b>E</b> No</span><i>→</i><span><b>O</b> Sí</span><i>→</i><span><b>O1</b> Sí</span><i>→</i><span className="fin">Tarea a condición</span>
                  </div>
                  <p className="por">La pérdida de función es evidente, nadie sale lastimado porque la fuga se ve venir y la zona tiene acceso restringido, no hay norma ambiental en juego y sí se pierde producción.</p>
                </div>
              </li>
              <li>
                <span className="k">Tarea<small>preguntas 6 y 7</small></span>
                <div className="v">
                  <p>Inspección visual de goteo por el sello y del plan de lavado.</p>
                  <div className="rc-tarea">
                    <div><small>Tipo</small>Inspección visual</div>
                    <div><small>Frecuencia</small>1 S</div>
                    <div><small>Ejecutor</small>Operador</div>
                    <div><small>Hrs</small>0,2</div>
                  </div>
                  <p className="por">¿Por qué semanal? El goteo aparece unas tres semanas antes de la fuga que obliga a parar. La regla práctica es inspeccionar a la mitad del intervalo P-F o menos, para tener tiempo de programar el cambio del sello.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="rc-oculta" style={{ marginTop: 40 }}>
            <span className="chip-sec" style={{ justifySelf: "start" }}><i />Y una falla oculta</span>
            <h3>¿Cada cuánto se prueba el PSL-211?</h3>
            <p>El presostato que para la bomba con baja succión puede estar pegado meses sin que nadie lo note. En el diagrama la respuesta a H es No, y las preguntas H1 y H2 tampoco dan una tarea: no hay síntoma que medir ni edad de desgaste. La salida es H4, búsqueda de fallas. Para fijar el intervalo, la fórmula clásica para un dispositivo de protección simple es:</p>
            <div className="rc-formula">
              <div>Intervalo = 2 × U × MTBF <span className="g">  U: indisponibilidad tolerable del dispositivo</span></div>
              <div>Intervalo = 2 × 0,02 × 10 años = <b>0,4 años ≈ 4,8 meses</b></div>
              <div className="g">→ Prueba periódica de funcionamiento cada 4 meses, a cargo del instrumentista.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diagrama de decisión ── */}
      <section className="sec" id="diagrama">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Diagrama de decisión</span>
            <h2>La consecuencia elige la tarea. <span className="gris">No el color del NPR.</span></h2>
            <p>En ReliaPlant haces clic en la celda Consecuencia y respondes Sí o No. Las respuestas quedan guardadas en el modo de falla y la columna Actividad solo te ofrece las tareas que el carril permite.</p>
          </div>
          <div className="rc-diag scroll-x"><DiagramaDecision /></div>
          <div className="rc-cons">
            {CONSECUENCIAS.map((c) => (
              <div key={c.t}>
                <b><span className={`l ${c.c}`}>{c.l}</span>{c.t}</b>
                <span>{c.d}</span>
              </div>
            ))}
          </div>
          <p className="rc-pie">Estas son las seis etiquetas que quedan escritas en la columna Consecuencia, en la app y en el Excel.</p>

          <div className="rc-cat">
            {CATALOGO.map((g) => (
              <div key={g.t} className={g.c}>
                <h4>{g.t}</h4>
                <ul>{g.items.map(([a, b]) => <li key={a}>{a}<small>{b}</small></li>)}</ul>
              </div>
            ))}
          </div>
          <p className="rc-pie">Catálogo de tipos de actividad que trae ReliaPlant. Tu empresa puede editarlo, junto con la lista de ejecutores.</p>
        </div>
      </section>

      {/* ── NPR ── */}
      <section className="sec suave" id="npr">
        <div className="env rc-npr">
          <div>
            <div className="sec-cab">
              <span className="chip-sec"><i />Número de prioridad de riesgo</span>
              <h2>Escalas que dos analistas <span className="gris">puntúan igual.</span></h2>
            </div>
            <div className="rc-ec">NPR = F × S × D<span>Cada factor va de 1 a 10, así que el NPR va de 1 a 1000.</span></div>
            <div className="rc-escalas">
              <div><b>F se ancla al tiempo.</b><p>Cada nivel es un intervalo concreto: 5 es una vez al año, 8 una vez al mes. Si hay historial se usa; si no, se estima con el fabricante o equipos parecidos.</p></div>
              <div><b>S se mide en producción perdida.</b><p>Equipo parado o produciendo fuera de especificación cuentan igual. Del 3 al 8 son bandas de tiempo, de 10 minutos a más de 8 horas. El 9 y el 10 son seguridad, ambiente o normativa, y los separa si la falla avisa antes.</p></div>
              <div><b>D se decide por el medio de detección que existe hoy.</b><p>Va al revés: 1 es una alarma que siempre dispara, 10 es que no hay forma de verla venir. Si instalas un sensor, D baja y el NPR cae. Eso es justo lo que el número debe mostrar.</p></div>
              <div><b>Semáforo 50 / 150 por defecto.</b><p>De las 1000 combinaciones se descartan las que nadie sostendría en operación, como un modo que puede matar a alguien y ocurre cada semana. Sobre las 860 que quedan, 50 y 150 son los percentiles 33 y 66: un tercio verde, un tercio amarillo, un tercio rojo.</p></div>
            </div>
          </div>
          <div>
            <CalculadoraNPR />
            <p className="rc-aviso">Un NPR bajo no es permiso para no hacer nada. Un modo raro y muy detectable que puede matar a alguien da un número chico. Por eso en ReliaPlant la decisión final la toma el diagrama de decisión.</p>
          </div>
        </div>
      </section>

      {/* ── Del análisis al CMMS ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Plan de mantenimiento</span>
            <h2>Del análisis al CMMS <span className="gris">sin copiar a mano.</span></h2>
            <p>Cada actividad que eliges en la hoja aparece en la pestaña Plan de Mantenimiento con los modos de falla que ataca. Ahí completas ejecutor, horas y frecuencia con su unidad: horas, turnos, días, semanas, meses o años.</p>
          </div>
          <PantallaPlan />
          <div className="rc-cons" style={{ marginTop: 20 }}>
            <div><b><span className="rc-num" style={{ marginRight: 8 }}>1</span>Una tarea, varios modos</b><span>Si un cambio de aceite protege dos modos de falla, el plan lo muestra una vez, con los dos modos relacionados.</span></div>
            <div><b><span className="rc-num" style={{ marginRight: 8 }}>2</span>Columnas a tu medida</b><span>Texto extendido, materiales, horas, máquina parada y cambio realizado se activan en la configuración de la empresa.</span></div>
            <div><b><span className="rc-num" style={{ marginRight: 8 }}>3</span>Revisión de planes existentes</b><span>Con Cambio realizado marcas si una tarea se usa como está, se acorta o se extiende el intervalo, es nueva o se elimina por duplicada o por no agregar valor.</span></div>
          </div>

          <div className="rc-libro" role="img" aria-label="Libro de Excel que descarga ReliaPlant con sus hojas">
            <div className="rc-libro-cab"><i>X</i>RCM P-211A · Bomba de condensado.xlsx</div>
            <div className="rc-hojas">
              <div><b>Resumen</b><span>Datos del equipo, límites, premisas, contexto operacional y equipo natural de trabajo.</span></div>
              <div><b>Hoja de análisis</b><span>Una fila por actividad, sin celdas combinadas. NPR y clasificación van como fórmulas.</span></div>
              <div><b>Plan de Mantenimiento</b><span>Todas las unidades en una sola hoja, con ejecutor, horas y frecuencia.</span></div>
              <div className="op"><b>CMMS Template</b><span>El plan mapeado a las columnas que pide tu CMMS, según lo configure tu empresa.</span></div>
              <div className="op"><b>Recomendaciones</b><span>Descripción, impacto, esfuerzo y prioridad.</span></div>
              <div><b>Tipos de actividad</b><span>El catálogo con su clasificación y ejemplos.</span></div>
              <div><b>Catalogos</b><span>Alimentan las listas desplegables de la hoja de análisis.</span></div>
              <div><b>Escalas NPR</b><span>Las escalas F, S y D de tu empresa y los cortes del semáforo.</span></div>
            </div>
            <div className="rc-xtabs" aria-hidden="true">
              <span>Resumen</span><span className="act">Hoja de análisis</span><span>Plan de Mantenimiento</span><span>CMMS Template</span><span>Recomendaciones</span><span>Tipos de actividad</span><span>Catalogos</span><span>Escalas NPR</span>
            </div>
          </div>
          <p className="rc-pie">¿Tu equipo prefiere trabajar en Excel? Descarga, edita la hoja de análisis y vuelve a subirla con “Importar RCM desde Excel”. El NPR y la clasificación se recalculan al importar.</p>
        </div>
      </section>

      {/* ── Plantillas ── */}
      <section className="sec suave">
        <div className="env rc-dos">
          <div className="sec-cab">
            <span className="chip-sec"><i />Biblioteca</span>
            <h2>Analiza una familia una vez. <span className="gris">Replica en el resto.</span></h2>
            <p>Compresión Norte tiene decenas de bombas centrífugas parecidas a la P-211A. No tiene sentido empezar cada análisis desde la hoja en blanco.</p>
            <ul className="rc-notas">
              <li><span className="rc-num">1</span><span><b>Plantillas RCM.</b> <span className="t">Un análisis completo que importas en un proyecto nuevo con “Importar RCM desde biblioteca”. Después ajustas lo que cambia por contexto.</span></span></li>
              <li><span className="rc-num">2</span><span><b>Plantillas de unidades.</b> <span className="t">Un pedazo reutilizable, como un sello mecánico o un motor eléctrico, que agregas como unidad dentro de cualquier análisis.</span></span></li>
              <li><span className="rc-num">3</span><span><b>Estatus y autor.</b> <span className="t">Cada plantilla queda activa, en borrador o inactiva, con quién la creó. Se duplica, se edita o se borra desde la misma lista.</span></span></li>
            </ul>
          </div>
          <PantallaBiblioteca />
        </div>
      </section>

      {/* ── Recomendaciones y KPIs ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Seguimiento</span>
            <h2>Lo que no es tarea <span className="gris">también tiene dueño.</span></h2>
            <p>Un sello doble, una alarma de nivel o un cambio de procedimiento no van al plan: van a Recomendaciones, con responsable, fecha fin y estatus. Las tareas de rediseño del plan generan su seguimiento ahí mismo, sin capturarlas dos veces.</p>
          </div>
          <PantallaRecomendaciones />
          <div className="rc-cons" style={{ marginTop: 20 }}>
            <div><b>Prioridad por impacto y esfuerzo</b><span>Cada recomendación se califica de 1 a 5 en impacto y en esfuerzo. Mucho impacto con poco esfuerzo sale como prioridad alta.</span></div>
            <div><b>Vista de toda la planta</b><span>Las recomendaciones de todos los análisis en una tabla, con búsqueda por análisis, equipo o texto y filtros por columna.</span></div>
            <div><b>KPIs del programa RCM</b><span>RCMs creados por mes y por estatus, estado de las recomendaciones y análisis por ubicación técnica, clase de equipo y criticidad.</span></div>
          </div>
        </div>
      </section>

      {/* ── Hazlo tú o lo hacemos por ti ── */}
      <section className="sec suave" id="servicio">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>El método es el mismo. <span className="gris">Tú decides quién facilita.</span></h2>
            <p>Si tu equipo ya sabe RCM, la plataforma le da formato, escalas y trazabilidad. Si no hay horas o experiencia, nuestros ingenieros de confiabilidad hacen el estudio contigo y te lo dejan en ReliaPlant.</p>
          </div>
          <div className="rc-modos">
            <div className="rc-modos-cab">
              <div><b>Etapa del estudio</b><span>Lo que pide un RCM bien hecho</span></div>
              <div><b>Tú en ReliaPlant</b><span>Tu personal hace el análisis en la plataforma</span></div>
              <div className="os"><b>ReliaPlant lo hace</b><span>Facilitamos y entregamos el estudio</span></div>
            </div>
            {MODOS.map(([e, a, b]) => (
              <div key={e} className="rc-modos-fila"><div>{e}</div><div>{a}</div><div>{b}</div></div>
            ))}
            <div className="rc-modos-pie">
              <span>¿Tienes una lista de equipos críticos? Con eso armamos la propuesta.</span>
              <div className="ctas">
                <AbrirFormContacto buttonText="Cotizar un estudio RCM" variant="primary" icon={null} modalTitle="Cotizar un estudio RCM" btnText="Enviar" especial={ORIGEN} />
                <a className="btn btn-borde" href={APP}>Hacerlo yo, gratis</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec" id="preguntas">
        <div className="env rc-faq">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>Sobre RCM, <span className="gris">en corto.</span></h2>
          </div>
          <div className="rc-faq-lista">
            {FAQ.map((f) => (
              <details key={f.p}><summary>{f.p}</summary><p>{f.r}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="cierre" id="demo">
        <div className="env">
          <div className="cierre-caja">
            <div>
              <h2>Trae un equipo crítico. <span className="gris">Lo analizamos en la demo.</span></h2>
              <p>Dinos qué equipo te quita el sueño y en la demo armamos su hoja de análisis contigo, con tus escalas y tu contexto operacional.</p>
            </div>
            <div className="rc-cierre-ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="white" icon={null} modalTitle="Solicita una demo" btnText="Solicitar demo" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
          <div className="rc-sig">
            <a className="prin" href="/producto/rca"><span>Siguiente en el ciclo: si la falla ya ocurrió</span><b>Análisis de causa raíz (RCA) →</b></a>
            <a href="/producto/planes-de-mantenimiento"><span>Lleva las tareas a rutinas y calendario</span><b>Planes de mantenimiento →</b></a>
            <a href="/producto/taxonomia"><span>El RCM empieza con buenos datos del equipo</span><b>Registro de activos →</b></a>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { ArbolSVG } from "./arbol";
import ArbolCaso from "./ArbolCaso";
import MatrizPrioridad from "./MatrizPrioridad";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Software de análisis de causa raíz (RCA) | ReliaPlant" },
  description:
    "Software de análisis de causa raíz: árbol lógico, hipótesis verificadas con evidencia, causas físicas, humanas y de gestión, IA y reporte PDF.",
  alternates: { canonical: "https://reliaplant.com/producto/rca" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/rca";

const FAQ = [
  {
    q: "¿Qué es un análisis de causa raíz (RCA) en mantenimiento?",
    a: "Es una investigación estructurada de una falla que ya ocurrió para encontrar por qué pasó y qué hay que cambiar para que no se repita. Parte del evento, plantea hipótesis, las verifica con evidencia y llega hasta las causas físicas, humanas y de gestión. Termina en recomendaciones con responsable y fecha.",
  },
  {
    q: "¿Qué metodologías de análisis de causa raíz existen y cuál conviene?",
    a: "Las más usadas son los 5 porqués, el diagrama de Ishikawa (espina de pescado), el árbol lógico y el árbol de fallas (FTA). Los 5 porqués sirven para problemas simples con una sola cadena causal. Ishikawa ayuda a abrir el abanico de causas en una lluvia de ideas. El árbol lógico es el que mejor funciona para fallas de equipos con varias causas, porque obliga a verificar cada hipótesis y deja registro de las descartadas.",
  },
  {
    q: "¿Qué es un árbol lógico de fallas y cómo se construye?",
    a: "Es un diagrama que va del evento hacia abajo: modos de falla, hipótesis y causas. Se construye preguntando en cada nivel cómo pudo ocurrir lo de arriba, verificando cada hipótesis con hechos y descartando las que no se sostienen. Se termina cuando se llega a las causas humanas y de gestión sobre las que se puede actuar.",
  },
  {
    q: "¿Qué es una causa raíz latente o de gestión?",
    a: "Es la falla del sistema de gestión que permitió la decisión o la acción que causó la falla física. Por ejemplo, no tener un procedimiento de limpieza o no incluir análisis de aceite en el plan de mantenimiento. Es la más difícil de ver y la que más rinde: corregirla evita la misma falla en otros equipos.",
  },
  {
    q: "¿Qué establece la norma IEC 62740 (BS EN 62740) sobre el RCA?",
    a: "Es la norma internacional sobre análisis de causa raíz, adoptada en Europa como BS EN 62740. Describe los principios del RCA, un proceso general que va desde definir el alcance y reunir la información hasta identificar causas, validarlas y presentar recomendaciones, y compara las técnicas más usadas. No obliga a una técnica: pide que el método sea sistemático y esté basado en evidencia.",
  },
  {
    q: "¿Quiénes deben participar en un análisis de causa raíz?",
    a: "Un equipo natural de trabajo pequeño: un facilitador que conozca el método, quien opera el equipo, quien lo mantiene y un especialista en la tecnología del equipo. Si hace falta se suman externos, como el técnico del fabricante. En ReliaPlant se agregan integrantes de la organización o externos con nombre, rol, empresa y correo.",
  },
  {
    q: "¿Cuánto tiempo debe durar un RCA?",
    a: "Depende del evento. Una falla repetitiva en una bomba puede cerrarse en dos o tres semanas; un incidente de seguridad puede tomar meses. Lo importante es fijar un plazo al abrir el análisis. En ReliaPlant eliges el tiempo estipulado (de 1 semana a 6 meses), la fecha de fin se calcula sola y el proyecto se marca en rojo si se pasa.",
  },
];

const PASOS_APP = ["Información Preliminar", "ENT", "Eventos", "Árbol", "Tareas", "Evidencias", "Recomendaciones"];

function CabProyecto() {
  return (
    <>
      <div className="lp-rca-phead">
        <span className="vol">
          <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="#d1d5db" strokeWidth="1.6"><path d="M13 8H3M7 4L3 8l4 4" /></svg>
          Regresar a proyectos
        </span>
        <span className="tit"><b>RCA</b><i>|</i>P-211A / Disparo de P-211A por vibración alta</span>
        <span className="der">
          <span className="gu">Guardado</span>
          <span className="est"><i />En proceso ▾</span>
          <span className="des">Descargas ▾</span>
        </span>
      </div>
      <div className="lp-rca-steps" aria-hidden="true">
        {PASOS_APP.map((s, i) => (
          <span key={s} className={i === 3 ? "act" : ""}><b>{i + 1}</b>{s}</span>
        ))}
      </div>
    </>
  );
}

function Seccion({ id, n, eti, titulo, gris, children }: { id: string; n?: string; eti: string; titulo: string; gris?: string; children?: React.ReactNode }) {
  return (
    <div className="sec-cab lp-rca-cab" id={id}>
      <span className="chip-sec">{n ? <em className="lp-rca-n">{n}</em> : <i />}{eti}</span>
      <h2>{titulo} {gris && <span className="gris">{gris}</span>}</h2>
      {children}
    </div>
  );
}

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="rph lp-rca">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ───────── Portada ───────── */}
      <section className="lp-rca-hero">
        <div className="env">
          <div className="lp-rca-hero-txt">
            <span className="chip-sec"><i />Producto · Análisis de causa raíz</span>
            <h1>La P-211A disparó por tercera vez este año. <span className="gris">Esta vez vas a saber por qué.</span></h1>
            <p className="hero-sub">
              Software de análisis de causa raíz (RCA) para mantenimiento y confiabilidad. Árbol lógico con hipótesis verificadas
              en campo, causas físicas, humanas y de gestión, y recomendaciones con responsable hasta cerrarlas.
            </p>
            <div className="ctas">
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
              <AbrirFormContacto buttonText="Ver una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
            </div>
            <ul className="lp-rca-hero-meta">
              <li><b>7</b> etapas, de la información preliminar a las recomendaciones</li>
              <li><b>3</b> asistentes de IA: modos de falla, hipótesis y cronología</li>
              <li><b>1</b> reporte PDF que sale del mismo análisis</li>
            </ul>
          </div>
        </div>
        <div className="env lp-rca-vitrina">
          <div className="pantalla lp-rca-hero-p">
            <CabProyecto />
            <div className="scroll-x lp-rca-lienzo">
              <ArbolSVG notas resaltar={false} />
            </div>
          </div>
          <ol className="lp-rca-notas">
            <li><b>1</b><span><strong>Evento</strong> Lo que pasó, con el tag del equipo. Viene de la taxonomía con su UT y su criticidad.</span></li>
            <li><b>2</b><span><strong>Modo de falla</strong> Cómo se manifestó. Cada modo abre su propia rama.</span></li>
            <li><b>3</b><span><strong>Mecanismo validado</strong> La causa física, en rojo, con su conclusión y su evidencia.</span></li>
            <li><b>4</b><span><strong>Descartadas</strong> Quedan a la vista en gris. Prueban que se revisaron.</span></li>
            <li><b>5</b><span><strong>Causa de gestión</strong> Lo que hay que cambiar para que no se repita.</span></li>
          </ol>
        </div>
      </section>

      {/* ───────── El caso ───────── */}
      <section className="sec suave lp-rca-caso">
        <div className="env">
          <div className="lp-rca-caso-grid">
            <div className="lp-rca-relato">
              <span className="chip-sec"><i />Un caso de principio a fin</span>
              <h2>Compresión Norte, 14 de octubre, 03:40.</h2>
              <p>
                La P-211A, bomba de condensado del separador V-210, dispara por alta vibración. La P-211B arranca en automático
                y la planta no pierde producción. Es la tercera vez en el año. Las dos anteriores se cambió el rodamiento y se cerró la orden.
              </p>
              <p>
                Esta vez María, ingeniera de confiabilidad, abre un RCA en ReliaPlant. Lo que sigue es ese análisis, etapa por etapa,
                tal como se ve en la plataforma.
              </p>
            </div>
            <div className="lp-rca-ficha">
              <div className="cab">Ficha del caso</div>
              <dl>
                <dt>Equipo</dt><dd><b>P-211A</b> · Bomba centrífuga de condensado</dd>
                <dt>Ubicación técnica</dt><dd>CN-210 · Separador V-210</dd>
                <dt>Criticidad</dt><dd><span className="crit">A</span></dd>
                <dt>Tipo de análisis</dt><dd>Falla repetitiva</dd>
                <dt>Tiempo estipulado</dt><dd>3 semanas · fin 04 nov</dd>
                <dt>Responsable</dt><dd>María Rondón</dd>
              </dl>
            </div>
          </div>
          <nav className="lp-rca-ruta" aria-label="Etapas del análisis">
            {[
              ["#info", "Información preliminar"], ["#info", "ENT"], ["#eventos", "Eventos"], ["#arbol", "Árbol"],
              ["#tareas", "Tareas"], ["#tareas", "Evidencias"], ["#recomendaciones", "Recomendaciones"], ["#reporte", "Reporte"],
            ].map(([h, t], i) => (
              <a key={t} href={h}><b>{i < 7 ? i + 1 : "PDF"}</b><span>{t}</span></a>
            ))}
          </nav>
        </div>
      </section>

      {/* ───────── 1-2 Información preliminar + ENT ───────── */}
      <section className="sec lp-rca-etapa">
        <div className="env lp-rca-dos">
          <div className="lp-rca-txt">
            <Seccion id="info" n="1 · 2" eti="Información preliminar y ENT" titulo="Antes de buscar causas," gris="define bien el evento.">
              <p>
                Un RCA mal delimitado se vuelve una discusión infinita. La primera pestaña obliga a escribir qué pasó, cuándo,
                en qué equipo y cuánto costó. El equipo se elige de la taxonomía y trae solo su ubicación técnica, su criticidad y su equipo superior.
              </p>
            </Seccion>
            <ul className="lista">
              <li>El <b>impacto</b> se mide en cuatro categorías (seguridad, medio ambiente, operaciones y costos de reparación) con niveles de 0 a 4 descritos en palabras, no en números sueltos.</li>
              <li>El <b>tipo de análisis</b> (falla repetitiva, falla única, seguridad u otro) y las categorías los configura cada empresa.</li>
              <li>El <b>tiempo estipulado</b> calcula la fecha de fin. Si se pasa, el proyecto aparece en rojo en la lista.</li>
            </ul>
            <div className="lp-rca-ent">
              <div className="cab">Equipo natural de trabajo (ENT)</div>
              <ul>
                <li><i>MR</i><span><b>María Rondón</b> Ing. de confiabilidad · responsable</span></li>
                <li><i>LO</i><span><b>Luis Ortega</b> Supervisor mecánico</span></li>
                <li><i>AB</i><span><b>Ana Beltrán</b> Operadora de turno noche</span></li>
                <li><i className="ext">CN</i><span><b>Carlos Núñez</b> Especialista en sellos · externo</span></li>
              </ul>
              <p>Integrantes de la organización o externos con nombre, rol, empresa y correo. Todos reciben los recordatorios de sus tareas.</p>
            </div>
          </div>

          <div className="pantalla lp-rca-prelim" role="img" aria-label="Pestaña Información Preliminar de un RCA en ReliaPlant">
            <div className="lp-rca-pre">Información del Evento</div>
            <table className="lp-rca-kv">
              <tbody>
                <tr><td>Título del evento</td><td>Disparo de P-211A por vibración alta</td></tr>
                <tr><td>Tipo de análisis</td><td>Falla repetitiva</td></tr>
                <tr><td>Fecha del evento</td><td>14 oct 2026</td></tr>
                <tr><td>Fecha de fin</td><td>04 nov 2026</td></tr>
                <tr><td>Responsable</td><td><span className="av">M</span>María Rondón</td></tr>
                <tr><td>¿Es prioritario?</td><td><span className="lp-rca-chip azul">Prioridad</span></td></tr>
              </tbody>
            </table>
            <div className="lp-rca-pre">Impacto del evento (consecuencias)</div>
            <table className="lp-rca-imp">
              <thead><tr><th>Categoría</th><th>Nivel</th><th>Descripción</th></tr></thead>
              <tbody>
                <tr><td>Seguridad</td><td className="n0">0</td><td>Sin impacto</td></tr>
                <tr><td>Medio Ambiente</td><td className="n1">1</td><td>Impacto ambiental leve, totalmente reversible</td></tr>
                <tr><td>Operaciones</td><td className="n2">2</td><td>Paro parcial o corrección de desvíos</td></tr>
                <tr><td>Costos de Reparación</td><td className="n3">3</td><td>Reparaciones en componentes mayores</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────── 3 Eventos ───────── */}
      <section className="sec suave lp-rca-etapa">
        <div className="env">
          <Seccion id="eventos" n="3" eti="Cronología de eventos" titulo="Primero la secuencia," gris="después las opiniones.">
            <p>
              La cronología ordena lo que pasó antes y después del disparo. Separa los hechos con fecha y fuente de lo que cada quien
              recuerda, y casi siempre muestra el cambio que nadie relacionó con la falla.
            </p>
          </Seccion>
          <div className="pantalla" role="img" aria-label="Pestaña Eventos: cronología del RCA de la P-211A">
            <div className="lp-rca-pre lp-rca-pre-acc">
              <span>Eventos (5)</span>
              <span className="acc"><span className="b ia">✦ Construir cronología con IA</span><span className="b">+ Agregar evento</span></span>
            </div>
            <div className="scroll-x">
              <table className="tabla-app lp-rca-tab">
                <thead><tr><th>No</th><th>Fecha</th><th>Hora</th><th>Evento</th><th>Fuente</th><th>Evidencia</th></tr></thead>
                <tbody>
                  <tr><td className="no">1</td><td>02 sep 2026</td><td className="c">10:15</td><td>Cambio de sello mecánico de P-211A (OT 48213)</td><td>Historial de OT</td><td>Orden de trabajo 48213</td></tr>
                  <tr><td className="no">2</td><td>12 oct 2026</td><td className="c">22:00</td><td>Lavado del área de bombas con manguera a presión</td><td>Bitácora de operación</td><td><i className="sin">Sin evidencia</i></td></tr>
                  <tr><td className="no">3</td><td>14 oct 2026</td><td className="c">03:12</td><td>Alarma de alta vibración en soporte lado acople</td><td>DCS</td><td>Tendencia de vibración</td></tr>
                  <tr className="princ"><td className="no">4</td><td>14 oct 2026</td><td className="c">03:40</td><td>Disparo de P-211A por vibración alta; arranca P-211B</td><td>DCS</td><td>Tendencia de vibración</td></tr>
                  <tr><td className="no">5</td><td>14 oct 2026</td><td className="c">09:30</td><td>Aceite turbio en la mirilla del soporte; se toma muestra</td><td>Inspección de campo</td><td>Fotos del soporte LA</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lp-rca-tres">
            <div><b>Fila verde</b><p>Es el evento principal del RCA. Los demás se ordenan alrededor por fecha y hora.</p></div>
            <div><b>Fuente en cada fila</b><p>DCS, bitácora, historial de OT, entrevista. Si no hay fuente, es una opinión y se trata como hipótesis.</p></div>
            <div><b>Cronología con IA</b><p>Seleccionas evidencias (PDF, fotos, Excel o CSV) y la IA propone eventos con fecha, hora y fuente. Tú eliges cuáles entran.</p></div>
          </div>
        </div>
      </section>

      {/* ───────── 4 Árbol ───────── */}
      <section className="sec lp-rca-etapa">
        <div className="env">
          <Seccion id="arbol" n="4" eti="Árbol lógico" titulo="El árbol crece un nivel a la vez." gris="Recórrelo.">
            <p>
              Cada nivel responde una pregunta distinta. Toca un nivel para ver cómo estaba el árbol de la P-211A en ese momento;
              los nodos nuevos aparecen marcados.
            </p>
          </Seccion>
          <ArbolCaso />
        </div>
      </section>

      {/* ───────── Vocabulario ───────── */}
      <section className="sec suave">
        <div className="env">
          <Seccion id="tipos" eti="Tipos de nodo" titulo="Un color para cada tipo de causa," gris="el mismo en toda la empresa.">
            <p>Al validar una hipótesis se clasifica. El color del nodo cambia y el árbol se lee de un vistazo, también en el reporte PDF.</p>
          </Seccion>
          <div className="lp-rca-vocab">
            {[
              { c: "#1e3a8a", l: "Evento", d: "La cabeza del árbol. Una sola por análisis." },
              { c: "#374151", l: "Modo de falla", d: "Cómo se manifestó la falla en el equipo." },
              { c: "#6b7280", l: "Hipótesis", d: "Causa posible, todavía por validar." },
              { c: "#374151", l: "Hecho", d: "Algo comprobado que sostiene la rama. No lleva contribución." },
              { c: "#ef4444", l: "Mecanismo de falla", d: "La causa física. Exige conclusión y conviene adjuntar evidencia." },
              { c: "#22c55e", l: "Causa humana", d: "La acción u omisión de una persona que permitió el mecanismo." },
              { c: "#3b82f6", l: "Causa de gestión", d: "La falla del sistema que permitió la acción humana." },
              { c: "#fef08a", l: "Causa ambiental", d: "Temperatura, humedad, contaminación. Siempre contribuyente.", osc: true },
              { c: "#bfdbfe", l: "Contribuyente", d: "Mismo tipo en tono claro: ayudó, pero no fue la causa principal.", osc: true },
              { c: "#6b7280", l: "Descartada", d: "Verificada y no sostenida. Queda en gris, no se borra.", desc: true },
            ].map((t) => (
              <div key={t.l} className={`lp-rca-vn${t.desc ? " desc" : ""}`}>
                <span className="h" style={{ background: t.c, color: t.osc ? "#374151" : "#fff" }}>{t.l}</span>
                <p>{t.d}</p>
              </div>
            ))}
          </div>
          <div className="lp-rca-catalogo">
            <div>
              <h3>Mecanismos de falla</h3>
              <p><b>Mecánicas:</b> desalineación, desbalance, deformación, soltura, atascamiento, fatiga, rotura, erosión, corrosión.</p>
              <p><b>Eléctricas:</b> alimentación insuficiente o inadecuada, falla a tierra, falla de aislamiento, cortocircuito, circuito abierto.</p>
              <p><b>Instrumentación:</b> señal errática, pérdida de señal, descalibración, cableado, comunicación, hardware, software.</p>
            </div>
            <div>
              <h3>Causas humanas</h3>
              <p>Error de instalación, mantenimiento no previsto, mantenimiento incorrecto, error de fabricación, material incorrecto, operación incorrecta, diseño incorrecto, negligencia.</p>
            </div>
            <div>
              <h3>Causas de gestión</h3>
              <p>Recursos insuficientes (backlog), falta de capacitación, falla de documentación, plan de mantenimiento inexistente, falla en el sistema de gestión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── IA ───────── */}
      <section className="sec lp-rca-ia">
        <div className="env">
          <Seccion id="ia" eti="Asistentes de IA" titulo="La IA propone hipótesis." gris="Tu equipo decide cuáles entran.">
            <p>
              Hay un asistente en cada nodo del árbol. Recibe el evento, el equipo y la cadena de causas que ya tienes, y devuelve
              propuestas para marcar o desmarcar. Nada entra al árbol sin que lo selecciones.
            </p>
          </Seccion>
          <div className="lp-rca-ia-grid">
            <div className="lp-rca-chat">
              <div className="lp-rca-chat-cab"><span>✦</span> Asistente de IA · Modos de Falla</div>
              <div className="lp-rca-q">¿Cómo se manifestó la falla? (síntomas observables)</div>
              <div className="burb yo">Vibración de 7,1 mm/s en el soporte lado acople, ruido de rodamiento y aceite turbio en la mirilla.</div>
              <div className="lp-rca-r">Se encontraron <b>3</b> modo(s) de falla sugerido(s). Selecciona los que deseas agregar al análisis.</div>
              <div className="lp-rca-sug on"><i>✓</i><div><b>Falla del rodamiento lado acople</b><span>Ruido, vibración localizada en el soporte y aceite alterado apuntan al rodamiento.</span></div></div>
              <div className="lp-rca-sug on"><i>✓</i><div><b>Desbalance del impulsor</b><span>Produce vibración a 1X; conviene descartarlo con el espectro.</span></div></div>
              <div className="lp-rca-sug"><i /><div><b>Holgura en la base</b><span>Posible si la vibración varía con el apriete de pernos.</span></div></div>
              <div className="lp-rca-chat-pie"><span className="bt">Agregar seleccionados (2)</span></div>
            </div>

            <div className="lp-rca-chat">
              <div className="lp-rca-chat-cab"><span>✦</span> Asistente de IA · Hipótesis <em>Paso 2 de 3</em></div>
              <div className="lp-rca-razon">
                El rodamiento falló dos veces antes con el mismo síntoma. Si el cambio no resolvió, la causa está en lo que lo rodea:
                lubricación, montaje o alineación.
              </div>
              <div className="lp-rca-sug on"><i>✓</i><div><b>Agua en el lubricante del soporte <span className="cat mec">Mecanismo de falla</span></b><span><em>Verificación:</em> tomar muestra de aceite y medir contenido de agua.</span></div></div>
              <div className="lp-rca-sug on"><i>✓</i><div><b>Desalineación tras el cambio de sello <span className="cat mec">Mecanismo de falla</span></b><span><em>Verificación:</em> medir alineación con láser en el acople.</span></div></div>
              <div className="lp-rca-sug on"><i>✓</i><div><b>Rodamiento mal montado <span className="cat hum">Causa humana</span></b><span><em>Verificación:</em> inspeccionar huellas en pistas del rodamiento retirado.</span></div></div>
              <div className="lp-rca-prof">
                <b>Preguntas para profundizar:</b>
                <span>• ¿Hubo lavados o lluvias fuertes antes del disparo?</span>
                <span>• ¿Qué lubricante y con qué frecuencia se repone?</span>
              </div>
              <div className="lp-rca-chat-pie"><span className="bt">Agregar y crear tareas →</span></div>
            </div>
          </div>
          <div className="lp-rca-ia-reglas">
            <div>
              <b>Empuja el árbol hacia abajo</b>
              <p>Bajo un modo de falla sugiere mecanismos. Cuando la cadena ya tiene dos mecanismos, pasa a causas humanas, y después de dos humanas, a causas de gestión. Así el análisis no se queda en el rodamiento.</p>
            </div>
            <div>
              <b>Cada hipótesis trae su verificación</b>
              <p>Una sola acción concreta para comprobarla. En el paso 3 se convierte en tarea; le pones responsable y fecha después.</p>
            </div>
            <div>
              <b>Usa tu contexto</b>
              <p>Puedes agregar lo que sabes (&quot;tres meses sin mantenimiento&quot;, &quot;cambio de operador&quot;) y las hipótesis se enfocan en eso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 5-6 Tareas y evidencias ───────── */}
      <section className="sec suave lp-rca-etapa">
        <div className="env">
          <Seccion id="tareas" n="5 · 6" eti="Tareas y evidencias" titulo="Una hipótesis sin verificar" gris="es una opinión.">
            <p>
              Cada hipótesis lleva tareas con responsable y fecha. Con el resultado en mano se valida o se descarta, y la evidencia
              queda pegada al nodo: la foto, el informe del laboratorio, la hoja de alineación.
            </p>
          </Seccion>
          <div className="pantalla" role="img" aria-label="Pestaña Tareas de un RCA en ReliaPlant">
            <div className="lp-rca-pre lp-rca-pre-acc">
              <span>Tareas (5) <em className="rojo">• 2 pendientes</em></span>
              <span className="acc"><span className="ul">Último recordatorio: 10 nov 2026</span><span className="b">✉ Enviar recordatorios</span></span>
            </div>
            <div className="scroll-x">
              <table className="tabla-app lp-rca-tab">
                <thead><tr><th>No</th><th>Título</th><th>Responsable</th><th>Vencimiento</th><th>Estado</th></tr></thead>
                <tbody>
                  <tr><td className="no">1</td><td>Tomar muestra de aceite del soporte LA y medir agua</td><td>Jorge Salas</td><td>15 oct 2026</td><td className="st hecha">Completada</td></tr>
                  <tr><td className="no">2</td><td>Medir alineación con láser en el acople</td><td>Luis Ortega</td><td>16 oct 2026</td><td className="st hecha">Completada</td></tr>
                  <tr><td className="no">3</td><td>Inspeccionar pistas del rodamiento retirado</td><td>Carlos Núñez</td><td>17 oct 2026</td><td className="st hecha">Completada</td></tr>
                  <tr><td className="no">4</td><td>Revisar procedimiento de limpieza del área de bombas</td><td>Ana Beltrán</td><td>08 nov 2026</td><td className="st tarde">Retrasada (3 días)</td></tr>
                  <tr><td className="no">5</td><td>Revisar rutinas de lubricación del plan de P-211A/B</td><td>María Rondón</td><td>18 nov 2026</td><td className="st pend">Pendiente</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lp-rca-valid-grid">
            <div className="lp-rca-modal" role="img" aria-label="Ventana de validación de una hipótesis con su evidencia">
              <div className="mcab">Validación <span>×</span></div>
              <div className="mcuerpo">
                <div className="col">
                  <div className="lbl">Clasificación de Causa</div>
                  <span className="rd"><i />Hecho</span>
                  <span className="rd on"><i />Mecanismo de falla</span>
                  <span className="rd"><i />Causa humana</span>
                  <span className="rd"><i />Causa de gestión</span>
                  <span className="rd"><i />Causa ambiental</span>
                  <div className="sep" />
                  <div className="lbl">Contribución</div>
                  <span className="rd on"><i />Principal</span>
                  <span className="rd"><i />Contribuyente</span>
                </div>
                <div className="col der">
                  <div className="lbl">Estado</div>
                  <div className="seg"><span>✕ Descartada</span><span>○ Por validar</span><span className="on">✓ Validada</span></div>
                  <div className="lbl">Análisis y Conclusión <em>*</em></div>
                  <div className="concl">Laboratorio reporta 2.300 ppm de agua en el aceite del soporte LA. Pistas con marcas de corrosión y descascarado por fatiga. Se valida como mecanismo principal.</div>
                  <div className="lbl">Evidencias</div>
                  <div className="evi">
                    <span className="et">Fotos del soporte LA tras el disparo</span>
                    <div className="fotos">
                      <Image src="/sitio/equipo/sello.jpg" alt="Soporte y sello de la bomba con restos de aceite" width={64} height={64} />
                      <Image src="/sitio/equipo/bomba.jpg" alt="Bomba de condensado P-211A en campo" width={64} height={64} />
                    </div>
                    <span className="doc">📄 Informe_laboratorio_aceite.pdf</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lp-rca-txt">
              <h3>Lo que la validación no deja pasar</h3>
              <ul className="lista">
                <li>Un <b>mecanismo de falla</b> no se valida sin conclusión, y la plataforma te avisa si no tiene evidencia.</li>
                <li>Tipo y contribución solo se eligen cuando la hipótesis está <b>validada</b>.</li>
                <li>Las <b>causas ambientales</b> son siempre contribuyentes y los <b>hechos</b> no llevan contribución.</li>
                <li>Al validar una causa, ReliaPlant pregunta si quieres crear la recomendación en ese momento.</li>
                <li>Las tareas atrasadas se marcan en rojo y el botón de recordatorios avisa por correo a cada responsable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 7 Recomendaciones ───────── */}
      <section className="sec lp-rca-etapa">
        <div className="env">
          <Seccion id="recomendaciones" n="7" eti="Recomendaciones" titulo="Cinco acciones para la P-211A." gris="¿Cuál va primero?">
            <p>
              Cada recomendación sale de una causa validada y se prioriza con una matriz de impacto por esfuerzo de 5 × 5. La regla
              es simple: <b>impacto + (6 − esfuerzo)</b>. Con 8 o más es prioridad alta, de 5 a 7 media y por debajo de 5 baja.
              Prueba con las del caso o toca cualquier celda.
            </p>
          </Seccion>
          <MatrizPrioridad />

          <div className="pantalla lp-rca-rec-p" role="img" aria-label="Tabla de recomendaciones del RCA">
            <div className="lp-rca-pre">Recomendaciones (5)</div>
            <div className="scroll-x">
              <table className="tabla-app lp-rca-tab">
                <thead><tr><th>No</th><th>Recomendación</th><th>Impacto</th><th>Esfuerzo</th><th>Prioridad</th><th>Responsable</th><th>Categoría</th><th>Fecha fin</th><th>Estatus</th></tr></thead>
                <tbody>
                  <tr><td className="no">1</td><td>Procedimiento de limpieza sin chorro directo a soportes</td><td>Medio-Alto</td><td>Bajo</td><td className="pr alta">Alta</td><td>Ana Beltrán</td><td><span className="lp-rca-cat c2">Procedimiento</span></td><td>30 nov 2026</td><td><span className="chip-e lp-rca-e-proc">En proceso</span></td></tr>
                  <tr><td className="no">2</td><td>Análisis de aceite trimestral en P-211A/B</td><td>Medio-Alto</td><td>Medio-Bajo</td><td className="pr alta">Alta</td><td>Jorge Salas</td><td><span className="lp-rca-cat c0">Ajuste de mantenimiento</span></td><td>15 nov 2026</td><td><span className="chip-e lp-rca-e-ok">Completado</span></td></tr>
                  <tr><td className="no">3</td><td>Instalar aisladores de rodamiento en P-211A/B</td><td>Alto</td><td>Medio</td><td className="pr alta">Alta</td><td>Luis Ortega</td><td><span className="lp-rca-cat c1">Rediseño / Ingeniería</span></td><td>31 ene 2027</td><td><span className="chip-e lp-rca-e-prog">Programada</span></td></tr>
                  <tr><td className="no">4</td><td>Capacitar a la cuadrilla de limpieza</td><td>Medio</td><td>Medio-Bajo</td><td className="pr media">Media</td><td>Ana Beltrán</td><td><span className="lp-rca-cat c3">Capacitación</span></td><td>15 dic 2026</td><td><span className="chip-e lp-rca-e-prog">Programada</span></td></tr>
                  <tr><td className="no">5</td><td>Cambiar a lubricante con mejor demulsibilidad</td><td>Medio-Bajo</td><td>Medio</td><td className="pr media">Media</td><td>Jorge Salas</td><td><span className="lp-rca-cat c4">Repuesto / Materiales</span></td><td>31 ene 2027</td><td><span className="chip-e lp-rca-e-prog">Programada</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lp-rca-tres">
            <div><b>Hitos y notas</b><p>Cada recomendación se divide en hitos con fecha y lleva notas, anexos e historial de cambios de estatus.</p></div>
            <div><b>Todas en un tablero</b><p>La pestaña Recomendaciones del módulo junta las de todos los RCA de la planta, con filtros por prioridad, responsable y estatus.</p></div>
            <div><b>De la causa a la acción</b><p>Una recomendación sin causa validada no tiene sustento. En ReliaPlant cada una cuelga de su nodo en el árbol.</p></div>
          </div>
        </div>
      </section>

      {/* ───────── Reporte ───────── */}
      <section className="sec suave">
        <div className="env lp-rca-dos lp-rca-rep">
          <div className="lp-rca-txt">
            <Seccion id="reporte" eti="Reporte y descargas" titulo="El reporte para el comité" gris="sale del mismo análisis.">
              <p>
                No hay que pasar nada a PowerPoint. El PDF se arma con lo que ya está en la plataforma: el evento, el equipo, el ENT,
                la imagen del árbol, las causas con su conclusión y las recomendaciones, más las evidencias como anexo.
              </p>
            </Seccion>
            <div className="lp-rca-desc">
              <div className="it"><b>Descargar reporte (PDF)</b><span>Listo para firmar y archivar.</span></div>
              <div className="it"><b>Descargar editables (zip)</b><span>Excel con hojas de Información, Equipo de trabajo, Causas, Recomendaciones y Evidencias; la imagen del árbol en PNG y la carpeta de evidencias.</span></div>
            </div>
          </div>
          <div className="lp-rca-pdf" role="img" aria-label="Índice del reporte PDF de un RCA generado por ReliaPlant">
            <div className="hoja atras" />
            <div className="hoja">
              <div className="pcab"><span className="logo">RELIAPLANT</span><span>Reporte de Análisis de Causa Raíz</span></div>
              <div className="ptit">Disparo de P-211A por vibración alta</div>
              <div className="psub">Compresión Norte · CN-210 · Falla repetitiva</div>
              <ol>
                <li>Información del Evento</li>
                <li>Información del Equipo</li>
                <li>Equipo natural de trabajo</li>
                <li>Árbol de Análisis de Causa Raíz (RCA)<div className="mini"><ArbolSVG resaltar={false} /></div></li>
                <li>Causas Identificadas</li>
                <li>Recomendaciones</li>
              </ol>
              <div className="anx">ANEXOS · Anexo 1. Evidencias Detalladas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Metodología ───────── */}
      <section className="sec lp-rca-metodo">
        <div className="env">
          <Seccion id="metodo" eti="Metodología" titulo="Lo que pide la norma," gris="y dónde vive en ReliaPlant.">
            <p>
              La IEC 62740 (en Europa, BS EN 62740) es la norma internacional de análisis de causa raíz. No impone una técnica:
              pide un proceso sistemático, basado en evidencia y documentado. Así se reparte ese proceso en la plataforma.
            </p>
          </Seccion>
          <div className="scroll-x">
            <table className="lp-rca-norma">
              <thead><tr><th>Fase del proceso</th><th>Qué se busca</th><th>En ReliaPlant</th></tr></thead>
              <tbody>
                <tr><td>Inicio y alcance</td><td>Definir el evento, su impacto y quién investiga.</td><td><span className="pa">1</span> Información preliminar · <span className="pa">2</span> ENT</td></tr>
                <tr><td>Recolección de datos</td><td>Reunir hechos antes de opinar: registros, muestras, entrevistas.</td><td><span className="pa">3</span> Eventos · <span className="pa">6</span> Evidencias</td></tr>
                <tr><td>Análisis de causas</td><td>Identificar factores causales y llegar a las causas raíz.</td><td><span className="pa">4</span> Árbol lógico con asistentes de IA</td></tr>
                <tr><td>Validación</td><td>Confirmar cada causa con evidencia y descartar las que no se sostienen.</td><td><span className="pa">5</span> Tareas · validación de nodos</td></tr>
                <tr><td>Resultados y acciones</td><td>Recomendar, asignar y comunicar.</td><td><span className="pa">7</span> Recomendaciones · reporte PDF</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="lp-rca-h3">Cuatro técnicas, cuándo usar cada una</h3>
          <div className="lp-rca-tecnicas">
            <div><b>5 porqués</b><p>Rápida y buena para problemas simples con una sola cadena. Se queda corta cuando hay varias causas, porque obliga a elegir un solo camino.</p></div>
            <div><b>Ishikawa</b><p>Sirve para abrir el abanico en una lluvia de ideas por categorías. No verifica nada ni muestra cómo se encadenan las causas.</p></div>
            <div className="dest"><b>Árbol lógico</b><p>Varias ramas, cada hipótesis verificada y las descartadas a la vista. Es el que usa ReliaPlant para fallas de equipos.</p></div>
            <div><b>Árbol de fallas (FTA)</b><p>Compuertas lógicas Y/O con probabilidades. Útil en diseño y en análisis de riesgo de sistemas, pesado para un evento puntual.</p></div>
          </div>

          <div className="lp-rca-raices">
            <h3 className="lp-rca-h3">Las tres raíces del caso P-211A</h3>
            <div className="lp-rca-rf">
              <div className="r fis"><span>Física</span><b>Fatiga del rodamiento por agua en el lubricante</b><p>Si solo atacas esta, cambias el rodamiento por cuarta vez.</p></div>
              <div className="flecha">→</div>
              <div className="r hum"><span>Humana</span><b>Lavado con manguera a presión sobre los soportes</b><p>Explica cómo entró el agua. Corregirla en una bomba no protege a las demás.</p></div>
              <div className="flecha">→</div>
              <div className="r ges"><span>Gestión</span><b>Sin procedimiento de limpieza ni análisis de aceite en el plan</b><p>Es la que evita la misma falla en todas las bombas de la planta.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── KPIs ───────── */}
      <section className="sec suave">
        <div className="env lp-rca-dos lp-rca-kpi-grid">
          <div className="lp-rca-txt">
            <Seccion id="kpis" eti="KPIs del programa" titulo="Un RCA cierra un evento." gris="Veinte cambian la planta.">
              <p>
                La pestaña KPIs mide el programa completo: cuántos análisis abres y cierras, cuánto tardan, cuántas recomendaciones
                se cumplen y dónde se concentran los eventos por ubicación técnica, por clase de equipo y por criticidad.
              </p>
            </Seccion>
            <ul className="lista">
              <li>Si el <b>% de recomendaciones completadas</b> se queda bajo, el programa produce reportes, no mejoras.</li>
              <li>Si una <b>UT</b> concentra los RCA, el problema es de diseño u operación de ese sistema, no del equipo.</li>
              <li>El <b>tiempo promedio</b> dice si el método es sostenible para tu equipo.</li>
            </ul>
          </div>
          <div className="pantalla lp-rca-kpi" role="img" aria-label="Pestaña KPIs del módulo RCA con datos de ejemplo">
            <div className="lp-rca-subtabs"><span>Proyectos</span><span>Recomendaciones</span><span className="act">KPIs</span></div>
            <div className="cuerpo">
              <div className="cards">
                <div><span>Cantidad de RCAs</span><b>18</b><em>excluye archivados</em></div>
                <div><span>% de completación</span><b className="v">72%</b><em>13 de 18 completados</em></div>
                <div><span>Recomendaciones derivadas de RCA</span><b>64</b><em>acumuladas en proyectos</em></div>
                <div><span>% de completación de recomendaciones</span><b className="v">58%</b><em>37 de 64 completadas</em></div>
                <div><span>Tiempo promedio de RCA</span><b>26 días</b><em>de proyectos completados</em></div>
              </div>
              <div className="card">
                <div className="ct">RCAs por ubicación técnica</div>
                {[["CN-210 · Separador V-210", 5], ["CN-310 · Compresión etapa 1", 4], ["CN-410 · Aeroenfriadores", 3], ["CN-520 · Agua de servicio", 2]].map(([l, v]) => (
                  <div key={l as string} className="bar"><span>{l}</span><i style={{ width: `${(v as number) * 18}%` }} /><b>{v}</b></div>
                ))}
              </div>
              <p className="ej">Datos de ejemplo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Hazlo tú o lo hacemos por ti ───────── */}
      <section className="sec lp-rca-serv">
        <div className="env">
          <Seccion id="servicio" eti="Hazlo tú o lo hacemos por ti" titulo="Tu equipo facilita el RCA," gris="o lo facilitamos con ellos.">
            <p>
              Muchas plantas tienen la plataforma pero no un facilitador con experiencia. Un especialista de ReliaPlant conduce las
              sesiones de los eventos que más te cuestan, con tu ENT, y deja todo cargado para que lo sigan ustedes.
            </p>
          </Seccion>
          <div className="lp-rca-serv-grid">
            <figure className="lp-rca-foto">
              <Image src="/sitio/equipo-rca.jpg" alt="Sesión de análisis de causa raíz con el equipo de trabajo frente al árbol lógico" fill sizes="(max-width: 900px) 100vw, 460px" style={{ objectFit: "cover" }} />
              <figcaption>Sesión de RCA con el equipo natural de trabajo.</figcaption>
            </figure>
            <div className="lp-rca-quien">
              <div className="lp-rca-modo">
                <h3>Lo facilita tu equipo</h3>
                <ul>
                  <li>Tu ingeniero de confiabilidad registra el evento y arma el ENT.</li>
                  <li>La cronología y los modos de falla salen más rápido con los asistentes de IA.</li>
                  <li>Las verificaciones quedan como tareas con responsable y fecha.</li>
                  <li>La matriz de recomendaciones y el PDF salen de la plataforma.</li>
                </ul>
              </div>
              <div className="lp-rca-modo osc">
                <h3>Lo facilitamos con tu ENT</h3>
                <ul>
                  <li>Abrimos con tu equipo la primera sesión: evento, alcance e integrantes.</li>
                  <li>Guiamos la recolección de evidencias y conducimos las sesiones del árbol.</li>
                  <li>Revisamos cada validación antes de dar una causa por confirmada.</li>
                  <li>Presentamos el reporte al comité y formamos a tus facilitadores internos.</li>
                </ul>
              </div>
              <div className="ctas">
                <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                <AbrirFormContacto buttonText="Cotizar facilitación de RCA" variant="borde" icon={null} modalTitle="Cotizar facilitación de RCA" btnText="Enviar" especial={ORIGEN} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="sec suave">
        <div className="env lp-rca-faq">
          <div className="sec-cab"><h2>Preguntas frecuentes <span className="gris">sobre análisis de causa raíz</span></h2></div>
          <div>
            {FAQ.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Siguiente + cierre ───────── */}
      <section className="cierre lp-rca-cierre">
        <div className="env">
          <div className="lp-rca-sig">
            <Link href="/producto/planes-de-mantenimiento" className="prin">
              <span>Siguiente en el ciclo</span>
              <b>Planes de mantenimiento →</b>
              <p>La recomendación &quot;análisis de aceite trimestral&quot; se vuelve una tarea del plan de la P-211A, con frecuencia y hoja de ruta.</p>
            </Link>
            <Link href="/producto/rcm"><span>Antes de que falle</span><b>RCM →</b><p>Modos de falla analizados por adelantado.</p></Link>
            <Link href="/producto/taxonomia"><span>La base</span><b>Taxonomía →</b><p>El equipo, su UT y su criticidad, de donde parte cada RCA.</p></Link>
          </div>
          <div className="cierre-caja">
            <div>
              <h2>Trae tu última falla repetitiva. <span className="gris">La analizamos contigo en la demo.</span></h2>
              <p>En la demo armamos el evento, los modos de falla y las primeras hipótesis en ReliaPlant, con tu equipo y tus tags.</p>
            </div>
            <div className="ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="primary" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { VistaEquipos, VistaLoops, ModalAnalisis, ExcelPlan, CargaExcel } from "./Pantallas";
import Catalogo from "./Catalogo";
import Explorador from "./Explorador";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "RBI: inspección basada en riesgo e integridad | ReliaPlant" },
  description:
    "Inspección basada en riesgo para recipientes, tuberías y tanques: lazos de corrosión, mecanismos API 581, efectividad A–D y plan de inspección en Excel.",
  alternates: { canonical: "https://reliaplant.com/producto/integridad-rbi" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/integridad-rbi";

const FAQ = [
  {
    p: "¿Qué es la inspección basada en riesgo (RBI)?",
    r: "Es una metodología para decidir qué inspeccionar, con qué técnica, con qué cobertura y cada cuánto, según el riesgo de pérdida de contención de cada equipo. El riesgo combina la probabilidad de falla, que depende de los mecanismos de daño activos y de lo que ya se inspeccionó, con la consecuencia de la falla. El esfuerzo de inspección se concentra donde el riesgo es mayor y se reduce donde es bajo.",
  },
  {
    p: "¿Cuál es la diferencia entre API 580 y API 581?",
    r: "API RP 580 define los principios y los requisitos mínimos de un programa RBI: qué debe tener, quién participa y cómo se documenta. API RP 581 es una metodología concreta y cuantitativa para calcular probabilidad y consecuencia de falla, e incluye las tablas de efectividad de inspección por mecanismo de daño. Se puede cumplir API 580 con otra metodología, pero API 581 es la más usada.",
  },
  {
    p: "¿Qué es un lazo de corrosión?",
    r: "Es un grupo de equipos y tuberías con el mismo material y las mismas condiciones de proceso (fluido, temperatura, presión), que por eso esperan los mismos mecanismos de daño. Agrupar por lazos evita analizar cada componente desde cero y permite extender lo que se encuentra en una inspección al resto del lazo. Un mismo equipo puede tener partes en lazos distintos, como un separador cuya bota trabaja con agua y su cuerpo con gas.",
  },
  {
    p: "¿Qué significa la efectividad de inspección A, B, C y D?",
    r: "Es la capacidad de una inspección para detectar y medir el daño que se busca. En API 581 va de A (Highly Effective) a D (Poorly Effective), y para cada mecanismo hay una tabla que dice qué técnica y qué cobertura corresponde a cada letra. Por ejemplo, en adelgazamiento general no intrusivo, más de 75 % de spot UT es B y más de 25 % es D. Una inspección más efectiva reduce más la incertidumbre sobre el estado del equipo.",
  },
  {
    p: "¿Cómo se inspecciona la corrosión bajo aislamiento (CUI)?",
    r: "Siempre empieza con inspección visual externa del 100 % del aislamiento, buscando daños, sellos rotos y manchas. Después hay dos caminos: retirar el aislamiento en las zonas dañadas o sospechosas y medir con UT o pit gauge, o hacer radiografía de perfil sin retirarlo. El porcentaje de zonas sospechosas que se descubre o se radiografía define si la inspección es A, B, C o D.",
  },
  {
    p: "¿Cada cuánto se debe inspeccionar un recipiente a presión?",
    r: "API 510 fija como regla general que el intervalo entre inspecciones internas u on-stream no supere la mitad de la vida remanente del recipiente ni 10 años, lo que ocurra primero. El mismo código permite fijar los intervalos con un análisis RBI. En la práctica, cada mecanismo de daño termina con su propia frecuencia según su criticidad y la efectividad de la inspección elegida.",
  },
  {
    p: "¿ReliaPlant calcula la probabilidad y la consecuencia de falla?",
    r: "No. ReliaPlant no hace el cálculo cuantitativo de API 581. El nivel de riesgo de cada equipo lo traes de tu matriz o de tu estudio. Lo que hace ReliaPlant es organizar el análisis por equipo, parte, lazo y mecanismo, darte el esquema de inspección de API 581 para la efectividad que elijas y generar el plan de inspección con sus códigos de tarea.",
  },
];

const OTRAS = [
  { href: "/producto/taxonomia", t: "Registro de activos", d: "Los tags y ubicaciones sobre los que corre el RBI." },
  { href: "/producto/planes-de-mantenimiento", t: "Planes de mantenimiento", d: "El preventivo de los equipos rotativos, que no van en RBI." },
  { href: "/producto/rca", t: "RCA", d: "Cuando una inspección encuentra una falla, su causa raíz." },
  { href: "/servicios/levantamiento-de-activos", t: "Levantamiento de activos", d: "Placas, fotos y DTIs de campo antes del estudio." },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };

  return (
    <div className="rph lp-rbi">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada ── */}
      <section className="portada">
        <div className="env">
          <div className="portada-txt">
            <span className="chip-sec"><i />Producto · Integridad RBI</span>
            <h1>Inspección basada en riesgo, <span className="gris">parte por parte y mecanismo por mecanismo.</span></h1>
            <p className="bajada">
              Lazos de corrosión, mecanismos de daño de API 581 y la inspección que corresponde a cada uno, con su técnica, su cobertura y su frecuencia. Para recipientes, intercambiadores, tanques y líneas.
            </p>
            <div className="ctas">
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
              <AbrirFormContacto buttonText="Solicita una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
            </div>
          </div>
          <dl className="portada-datos">
            <div><dt>25</dt><dd>mecanismos de daño en 6 categorías</dd></div>
            <div><dt>A–D</dt><dd>efectividad con técnica END y cobertura</dd></div>
            <div><dt>1Y–10Y</dt><dd>frecuencias por mecanismo</dd></div>
          </dl>
        </div>
      </section>

      {/* ── Pantalla 1: vista Equipos ── */}
      <section className="vitrina-rbi" aria-label="Vista Equipos del módulo RBI">
        <div className="env">
          <VistaEquipos />
          <ol className="notas">
            <li><b>Un equipo, varias filas.</b> V-210 ocupa cinco: una por cada mecanismo de cada parte. El tag, la clase y el riesgo se ven una sola vez.</li>
            <li><b>El lazo es por parte.</b> El cuerpo del separador va en CL-02 (gas húmedo) y la bota en CL-07 (agua producida). Si la parte no tiene lazo propio, hereda el del equipo.</li>
            <li><b>Nombre y código de API 581.</b> Debajo de cada mecanismo va su código del catálogo (THI, SCC, EXT, TANK, BUR, TB).</li>
            <li><b>N/R también es una decisión.</b> Un mecanismo evaluado que no requiere inspección queda escrito, no borrado.</li>
            <li><b>Riesgo de tu matriz.</b> Bajo, Medio, Medio-Alto, Alto o Muy Alto, con el color de la celda completa. Filtras por clase, parte, lazo y mecanismo desde el encabezado.</li>
          </ol>
        </div>
      </section>

      {/* ── El oficio ── */}
      <section className="sec suave">
        <div className="env oficio">
          <div className="sec-cab">
            <span className="chip-sec"><i />Lo que dice la norma</span>
            <h2>Inspeccionar no reduce el daño. <span className="gris">Reduce lo que no sabes de él.</span></h2>
            <p>Esa es la idea central de RBI. El riesgo de un equipo es su probabilidad de falla por la consecuencia de que pierda contención. La inspección no cambia la consecuencia ni detiene la corrosión, pero cada inspección efectiva baja la incertidumbre sobre el estado real del equipo, y con ella la probabilidad de falla que se le asigna.</p>
          </div>
          <div className="oficio-grid">
            <div className="formula">
              <div className="f-linea"><span>Riesgo</span><i>=</i><span>PoF</span><i>×</i><span>CoF</span></div>
              <div className="f-linea f-sub"><span>PoF(t)</span><i>=</i><span>g<sub>ff</sub></span><i>×</i><span>D<sub>f</sub>(t)</span><i>×</i><span>F<sub>MS</sub></span></div>
              <dl>
                <dt>g<sub>ff</sub></dt><dd>Frecuencia genérica de falla del tipo de componente, tomada de bases de datos de la industria.</dd>
                <dt>D<sub>f</sub>(t)</dt><dd>Factor de daño. Crece con la velocidad del mecanismo y el tiempo en servicio, y baja con el número y la efectividad de las inspecciones hechas.</dd>
                <dt>F<sub>MS</sub></dt><dd>Factor del sistema de gestión de integridad de la planta.</dd>
                <dt>CoF</dt><dd>Consecuencia de la pérdida de contención: área afectada por incendio, explosión o tóxico, y costo de la falla.</dd>
              </dl>
              <p className="f-nota">Metodología de API RP 581. ReliaPlant no hace este cálculo: el nivel de riesgo lo traes de tu matriz o de tu estudio cuantitativo, y ReliaPlant convierte el estudio en un plan que se puede ejecutar.</p>
            </div>
            <div className="matriz-caja">
              <svg viewBox="0 0 300 300" className="matriz" role="img" aria-label="Matriz de riesgo 5 por 5 con V-210 en Medio-Alto, E-410C en Medio y T-501 en Bajo">
                {Array.from({ length: 25 }).map((_, k) => {
                  const fila = Math.floor(k / 5); // 0 arriba (probabilidad alta)
                  const col = k % 5;
                  const nivel = (4 - fila) + col; // 0..8
                  const color = nivel <= 2 ? "#16a34a" : nivel <= 4 ? "#facc15" : nivel <= 6 ? "#f97316" : "#dc2626";
                  return <rect key={k} x={40 + col * 50} y={10 + fila * 50} width="48" height="48" fill={color} opacity="0.88" />;
                })}
                <text x="165" y="292" textAnchor="middle" className="m-eje">Consecuencia →</text>
                <text x="16" y="135" textAnchor="middle" className="m-eje" transform="rotate(-90 16 135)">Probabilidad →</text>
                <g className="m-pto"><circle cx="214" cy="84" r="6" /><text x="205" y="72" textAnchor="end">V-210</text></g>
                <g className="m-pto"><circle cx="164" cy="134" r="6" /><text x="155" y="122" textAnchor="end">E-410C</text></g>
                <g className="m-pto"><circle cx="64" cy="234" r="6" /><text x="76" y="222">T-501</text></g>
              </svg>
              <p>Matriz de ejemplo. La posición de cada equipo sale de tu estudio; en ReliaPlant queda su nivel.</p>
            </div>
          </div>
          <div className="normas">
            <div><b>API RP 580</b><span>Principios y requisitos mínimos de un programa RBI.</span></div>
            <div><b>API RP 581</b><span>Método cuantitativo y tablas de efectividad por mecanismo (anexo 2.F). Base del catálogo de ReliaPlant.</span></div>
            <div><b>API RP 571</b><span>Descripción de los mecanismos de daño: dónde aparecen y cómo se ven.</span></div>
            <div><b>API 510 · 570 · 653</b><span>Códigos de inspección de recipientes, tuberías y tanques. Aceptan RBI para fijar intervalos.</span></div>
          </div>
        </div>
      </section>

      {/* ── Lazos de corrosión ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Lazos de corrosión</span>
            <h2>Primero se agrupa. <span className="gris">Después se analiza.</span></h2>
            <p>Un lazo junta equipos y líneas con el mismo material y las mismas condiciones de proceso. Lo que se espera en uno se espera en todos, y lo que se encuentra en uno se revisa en los demás. Así se ve la entrada de la planta Compresión Norte, UT CN-210.</p>
          </div>
          <div className="lazo">
            <figure className="lazo-fig">
              <svg viewBox="0 0 900 430" role="img" aria-label="Diagrama de la entrada de Compresión Norte con tres lazos de corrosión: CL-02 gas húmedo, CL-05 gas comprimido y CL-07 agua producida">
                <defs>
                  <marker id="rbi-fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#94a3b8" /></marker>
                </defs>
                {/* CL-02 gas húmedo */}
                <path d="M20 170 H300" className="ln l02" />
                <path d="M355 78 V36 H530" className="ln l02" />
                <text x="40" y="158" className="lt">8&quot;-GN-2101</text>
                <rect x="300" y="78" width="110" height="232" rx="55" className="eqp e02" />
                <text x="355" y="168" textAnchor="middle" className="et">V-210</text>
                <text x="355" y="192" textAnchor="middle" className="es">Shell</text>
                <text x="355" y="210" textAnchor="middle" className="es">Head Top</text>
                {/* bota en CL-07 */}
                <rect x="330" y="300" width="50" height="46" rx="6" className="eqp e07" />
                <text x="355" y="328" textAnchor="middle" className="es">Bottom</text>
                {/* compresor fuera de alcance */}
                <circle cx="560" cy="36" r="26" className="eqp ek" />
                <text x="560" y="40" textAnchor="middle" className="es">K-210</text>
                <text x="560" y="80" textAnchor="middle" className="nota-g">rotativo, fuera de RBI</text>
                {/* CL-05 gas comprimido */}
                <path d="M586 36 H660 V118" className="ln l05" />
                <rect x="620" y="118" width="230" height="74" rx="37" className="eqp e05" />
                <text x="735" y="152" textAnchor="middle" className="et">E-410C</text>
                <text x="735" y="170" textAnchor="middle" className="es">Shell · Tubes</text>
                <path d="M850 155 H890" className="ln l05" markerEnd="url(#rbi-fl)" />
                <text x="700" y="30" className="lt">6&quot;-GC-2203</text>
                {/* CL-07 agua producida */}
                <path d="M355 346 V396 H640" className="ln l07" />
                <path d="M500 384 L520 396 L500 408 Z M540 384 L520 396 L540 408 Z" className="vlv" />
                <text x="520" y="376" textAnchor="middle" className="es">LV-2105</text>
                <text x="388" y="386" className="lt">3&quot;-AP-2107</text>
                <rect x="640" y="296" width="170" height="118" className="eqp e07" />
                <path d="M640 296 L725 276 L810 296" className="eqp e07 sin-f" />
                <text x="725" y="352" textAnchor="middle" className="et">T-501</text>
                <text x="725" y="370" textAnchor="middle" className="es">Course · Bottom</text>
                {/* etiquetas de lazo */}
                <g className="bad b02"><rect x="140" y="190" width="84" height="30" rx="15" /><text x="182" y="210" textAnchor="middle">CL-02</text></g>
                <g className="bad b05"><rect x="693" y="206" width="84" height="30" rx="15" /><text x="735" y="226" textAnchor="middle">CL-05</text></g>
                <g className="bad b07"><rect x="226" y="350" width="84" height="30" rx="15" /><text x="268" y="370" textAnchor="middle">CL-07</text></g>
              </svg>
            </figure>
            <div className="lazo-ley">
              <div className="ley l02">
                <h3><i />CL-02 · Gas húmedo</h3>
                <p>Acero al carbono. Gas de entrada con H₂S y CO₂ y agua libre. Cuerpo y cabeza de V-210 y la línea 8&quot;-GN-2101.</p>
                <span>THI-04 · SCC-06 · SCC-07 · EXT-03</span>
              </div>
              <div className="ley l05">
                <h3><i />CL-05 · Gas comprimido</h3>
                <p>Gas seco y caliente a la descarga del compresor. Shell y tubos de E-410C y la línea de salida.</p>
                <span>THI-02 · EXT-03</span>
              </div>
              <div className="ley l07">
                <h3><i />CL-07 · Agua producida</h3>
                <p>Agua con cloruros y sólidos. Bota de V-210, línea 3&quot;-AP-2107 y tanque T-501.</p>
                <span>THI-02 · TANK-01 · TANK-03</span>
              </div>
              <p className="ley-nota">La bota del separador no comparte servicio con el cuerpo, así que va en otro lazo. En ReliaPlant cada parte puede tener su lazo, y el análisis lo marca con el aviso “Más de un CL”.</p>
            </div>
          </div>
          <div className="lazo-pant">
            <div className="lazo-pant-txt">
              <h3>Los lazos tienen su propia vista</h3>
              <p>En la vista Loops creas cada lazo con su código, código de servicio y fluido, o los subes todos con su plantilla de Excel. Después, en el análisis de cada equipo, eliges el lazo del equipo y el de cada parte que lo necesite.</p>
            </div>
            <VistaLoops />
          </div>
        </div>
      </section>

      {/* ── Catálogo ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Catálogo de mecanismos de daño</span>
            <h2>25 mecanismos de API 581, <span className="gris">listos para asignar.</span></h2>
            <p>Cada mecanismo trae su código, si es interno o externo, la tabla de API 581 de donde salen sus esquemas y sus subgrupos: intrusivo o no intrusivo, aislado o no, lado suelo o lado producto, tipo de material del tubo. Tú eliges el mecanismo; el subgrupo define qué inspección aplica.</p>
          </div>
          <Catalogo />
        </div>
      </section>

      {/* ── Efectividad ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Efectividad de inspección</span>
            <h2>B no es una nota. <span className="gris">Es una técnica con una cobertura.</span></h2>
            <p>Para cada subgrupo, API 581 dice qué hay que hacer para que una inspección cuente como A, B, C o D. ReliaPlant trae esas tablas: eliges la letra y la frecuencia, y tienes el texto de la inspección, las técnicas END y el código de la tarea. Prueba con los subgrupos de abajo.</p>
          </div>
          <Explorador />
          <div className="cui">
            <figure className="cui-foto">
              <Image src="/sitio/integridad-ultrasonido.jpg" alt="Inspector midiendo espesor con ultrasonido en una tubería con el aislamiento retirado" fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
            </figure>
            <div className="cui-txt">
              <span className="mono cui-cod">EXT-03 · CUI · aislamiento removido</span>
              <h3>Así se ve un esquema de CUI en campo.</h3>
              <p>Visual externa de todo el aislamiento, retiro en las zonas dañadas o sospechosas y medición de espesor con UT donde aparece corrosión. Lo que define la letra no es el equipo de medición: es qué porcentaje de las zonas sospechosas se descubrió.</p>
              <table className="cui-tabla">
                <thead><tr><th>Efect.</th><th>Aislamiento retirado</th><th>Sin retirar (RT de perfil)</th></tr></thead>
                <tbody>
                  <tr><td><span className="efl ef-a">A</span></td><td>100 % de zonas sospechosas</td><td>100 %</td></tr>
                  <tr><td><span className="efl ef-b">B</span></td><td>&gt; 50 %</td><td>&gt; 65 %</td></tr>
                  <tr><td><span className="efl ef-c">C</span></td><td>&gt; 25 %</td><td>&gt; 35 %</td></tr>
                  <tr><td><span className="efl ef-d">D</span></td><td>&gt; 5 % del área aislada</td><td>&gt; 5 %</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="glosario">
            <h3>Las técnicas END que aparecen en los esquemas</h3>
            <dl>
              <div><dt>VT</dt><dd>Inspección visual, externa o interna.</dd></div>
              <div><dt>UT spot · UT scan</dt><dd>Espesor por ultrasonido en puntos (CMLs) o en barrido continuo.</dd></div>
              <div><dt>RT de perfil</dt><dd>Radiografía tangencial que mide espesor sin retirar aislamiento.</dd></div>
              <div><dt>PT</dt><dd>Líquidos penetrantes para grietas que llegan a la superficie.</dd></div>
              <div><dt>WFMT / ACFM</dt><dd>Partículas magnéticas fluorescentes húmedas o campo alterno, para grietas en soldaduras.</dd></div>
              <div><dt>C-scan · TOFD</dt><dd>UT avanzado para daño subsuperficial como HIC y SOHIC.</dd></div>
              <div><dt>ECT · IRIS · RFET</dt><dd>Eddy current y ultrasonido rotativo para haces de tubos.</dd></div>
              <div><dt>MFL · floor scan</dt><dd>Fuga de flujo magnético para fondos de tanque y tubos.</dd></div>
              <div><dt>Guided-wave UT</dt><dd>Ondas guiadas para tramos enterrados o de difícil acceso.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── Análisis por parte ── */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />El análisis de un equipo</span>
            <h2>Un separador no es una pieza. <span className="gris">Es un shell, dos cabezas y una bota.</span></h2>
            <p>Cada equipo se divide en partes (Shell, Top, Bottom, Channel, Tubes, Course, Roof, Pipe…) y cada parte lleva sus mecanismos, con criticidad, frecuencia y efectividad. La actividad de inspección no se escribe: sale del catálogo según el subgrupo y la letra.</p>
          </div>
          <ModalAnalisis />
          <ol className="notas notas-4">
            <li><b>Copiar de…</b> Busca otro equipo parecido por tag o descripción y trae su análisis. Analizas el primer separador; los demás parten de ahí.</li>
            <li><b>Más de un CL.</b> El aviso aparece cuando las partes del equipo están en lazos distintos, como el shell en CL-02 y la bota en CL-07.</li>
            <li><b>Subgrupo.</b> Si el mecanismo tiene varios (intrusivo y no intrusivo), marcas cuáles aplican. Cada uno trae su propio texto de inspección.</li>
            <li><b>Código de tarea.</b> Con efectividad y frecuencia elegidas aparece el código, por ejemplo THI-04-NI-B-3Y. Al abrirlo ves el texto extendido para SAP en español o inglés y las técnicas END con su cobertura.</li>
          </ol>
        </div>
      </section>

      {/* ── Código de tarea y plan ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Del análisis al plan</span>
            <h2>Un código dice qué, cómo y cada cuánto. <span className="gris">El plan los junta.</span></h2>
            <p>Todos los equipos y partes que llevan la misma inspección comparten el mismo código de tarea. Por eso el plan RBI no es una lista de cientos de filas: es una lista de tareas, cada una con los equipos que la llevan.</p>
          </div>
          <div className="anat" aria-label="Anatomía del código de tarea THI-02-NI-B-5Y">
            <div className="anat-cod">
              <span className="a1">THI-02</span><span className="g">-</span><span className="a2">NI</span><span className="g">-</span><span className="a3">B</span><span className="g">-</span><span className="a4">5Y</span>
            </div>
            <div className="anat-partes">
              <div className="a1"><b>Mecanismo</b><span>THI-02 · Internal General Thinning</span></div>
              <div className="a2"><b>Subgrupo</b><span>NI · no intrusivo, desde afuera y en operación</span></div>
              <div className="a3"><b>Efectividad</b><span>B · Usually Effective: más de 75 % spot UT</span></div>
              <div className="a4"><b>Frecuencia</b><span>5Y · cada 5 años</span></div>
            </div>
          </div>
          <div className="plan-rbi">
            <div className="plan-txt">
              <h3>Generar Plan RBI</h3>
              <p>Desde Acciones descargas <span className="mono">Plan_Mantenimiento_RBI.xlsx</span> con lo que tengas filtrado en pantalla. Los mecanismos marcados N/R no entran.</p>
              <ul className="lista">
                <li><span>Hoja <b>Plan RBI</b>: una posición por código de tarea, con TAG, parte, lazo, riesgo y criticidad de cada equipo que la lleva.</span></li>
                <li><span>Hoja <b>Detalle HR</b>: por código, la descripción corta, el texto extendido para SAP, la cobertura de cada técnica END y el número de equipos.</span></li>
                <li><span>Aparte, la tabla completa del análisis en Excel, de equipos, de piping o de lazos.</span></li>
              </ul>
            </div>
            <ExcelPlan />
          </div>
        </div>
      </section>

      {/* ── Carga masiva ── */}
      <section className="sec suave">
        <div className="env carga-grid">
          <div className="sec-cab carga-cab">
            <span className="chip-sec"><i />Carga masiva</span>
            <h2>¿Ya tienes el estudio en Excel? <span className="gris">Súbelo por código de tarea.</span></h2>
            <p>La plantilla pide una fila por TAG, parte y código de tarea. ReliaPlant lee el código y deduce el mecanismo, el subgrupo, la efectividad, la frecuencia y la actividad. Antes de importar ves cada fila resuelta.</p>
            <ul className="lista">
              <li>Columnas: Planta, TAG, Descripción, Tipo, Clase, Subtipo, Riesgo, Corrosion Loop, Parte, Criticidad y HR Code. Solo TAG y HR Code son obligatorias.</li>
              <li>La plantilla trae una hoja Valores con las clases, subtipos, partes, niveles de riesgo y todos los códigos válidos.</li>
              <li>Si un código no existe en el catálogo, la carga se detiene y te dice en qué fila está.</li>
              <li>Los lazos tienen su propia plantilla: Código, Código Servicio, Fluido y Planta.</li>
            </ul>
          </div>
          <CargaExcel />
        </div>
      </section>

      {/* ── Hazlo tú o lo hacemos por ti ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>El estudio RBI lo haces tú en la plataforma, <span className="gris">o lo hacemos contigo.</span></h2>
            <p>Si tu equipo de integridad ya domina API 581, la plataforma le ahorra el armado y el plan. Si no hay horas o no hay quién, nuestros especialistas hacen el estudio con tu gente y te lo entregan cargado.</p>
          </div>
          <div className="reparto scroll-x">
            <table>
              <thead><tr><th>Etapa</th><th>Tu equipo, en ReliaPlant</th><th className="osc">Con el servicio de ReliaPlant</th></tr></thead>
              <tbody>
                <tr><td>Información base</td><td>Subes equipos y lazos con las plantillas de Excel.</td><td className="osc">Revisamos DTIs, materiales y condiciones de proceso.</td></tr>
                <tr><td>Lazos de corrosión</td><td>Creas cada lazo con su servicio y su fluido.</td><td className="osc">Definimos los lazos con tu gente de proceso y de integridad.</td></tr>
                <tr><td>Partes y mecanismos</td><td>Divides cada equipo y eliges del catálogo API 581.</td><td className="osc">Talleres para asignar mecanismos de daño y criticidad por parte.</td></tr>
                <tr><td>Efectividad y frecuencia</td><td>Eliges la letra y la frecuencia; la plataforma trae el texto y el código.</td><td className="osc">Seleccionamos técnicas, coberturas y frecuencias de inspección.</td></tr>
                <tr><td>Plan de inspección</td><td>Generas el Plan RBI en Excel cuando lo necesites.</td><td className="osc">Te entregamos el plan cargado y listo para tu sistema de mantenimiento.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="reparto-ctas">
            <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            <AbrirFormContacto buttonText="Cotizar el estudio RBI" variant="primary" icon={null} modalTitle="Cotizar el estudio RBI" btnText="Enviar" especial={ORIGEN} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec suave">
        <div className="env faq-rbi">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>RBI e integridad mecánica, <span className="gris">en corto.</span></h2>
          </div>
          <div className="faq-lista">
            {FAQ.map((f, i) => (
              <details key={f.p} open={i === 0}>
                <summary><span className="n">{String(i + 1).padStart(2, "0")}</span>{f.p}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="cierre">
        <div className="env">
          <div className="cierre-caja">
            <div>
              <h2>Mándanos tu estudio RBI. <span className="gris">En la demo lo ves cargado.</span></h2>
              <p>Con tus tags, tus lazos y tus códigos de tarea, y el plan de inspección generado desde ReliaPlant.</p>
            </div>
            <div className="ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="white" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
          <a className="siguiente" href="/producto/cmms">
            <span>Siguiente paso del ciclo</span>
            <b>Gestión de mantenimiento: del aviso en campo a la orden cerrada →</b>
          </a>
          <div className="otras">
            {OTRAS.map((o) => (
              <a key={o.href} href={o.href}><b>{o.t}</b><span>{o.d}</span></a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { ArbolUT, DatosTecnicos, Criticidad, CatalogoFallas } from "./Pantallas";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Taxonomía ISO 14224 y jerarquía de activos | ReliaPlant" },
  description:
    "Diseñamos tu taxonomía ISO 14224: niveles, codificación de UT y tags, clases de equipo, criticidad y catálogo de fallas, lista para SAP PM o Maximo.",
  alternates: { canonical: "https://reliaplant.com/servicios/taxonomia-iso-14224" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /servicios/taxonomia-iso-14224";

// ── Los 9 niveles con un ejemplo de planta de gas y dónde vive cada uno en ReliaPlant ──
const NIVELES = [
  { n: 1, nom: "Industria", ej: "Petróleo y gas natural", rp: "Organización" },
  { n: 2, nom: "Categoría de negocio", ej: "Midstream: procesamiento de gas", rp: "Organización" },
  { n: 3, nom: "Instalación", ej: "CN · Planta Compresión Norte", rp: "Planta y UT raíz" },
  { n: 4, nom: "Planta / unidad", ej: "CN-200 · Separación", rp: "UT" },
  { n: 5, nom: "Sección / sistema", ej: "CN-210 · Sistema de condensado", rp: "UT" },
  { n: 6, nom: "Unidad de equipo", ej: "P-211A · Bomba centrífuga (PUCE)", rp: "Equipo con clase y tipo" },
  { n: 7, nom: "Subunidad", ej: "Unidad de bombeo de P-211A", rp: "Equipo con equipo superior" },
  { n: 8, nom: "Componente / ítem mantenible", ej: "SELL · Sello mecánico", rp: "Parte del catálogo de fallas" },
  { n: 9, nom: "Parte", ej: "Cara de carbón del sello", rp: "Material del inventario" },
];

const CATEGORIAS: [string, number, number][] = [
  ["Mechanical", 33, 242], ["Control", 15, 156], ["Rotating", 15, 82], ["Electrical", 14, 77], ["Safety", 7, 63],
  ["Auxiliaries", 6, 35], ["Civil", 2, 14], ["Drilling", 2, 10], ["Subsea", 2, 7], ["Marine", 1, 5],
];

const CODIGOS: [string, string, string, string][] = [
  ["PUCE", "Pumps", "Centrifugal", "P-211A"],
  ["EMAC", "Electric Motors", "AC (Alternating Current)", "PM-211A"],
  ["COCE", "Compressors", "Centrifugal", "K-310"],
  ["PVSE", "Pressure Vessels", "Separator", "V-210"],
  ["HEST", "Heat Exchangers", "Shell and Tube", "E-215"],
  ["VCGE", "Valves - Control", "Control Valve (general)", "LV-210"],
  ["VSPC", "Valves - Safety", "PSV - Conventional", "PSV-210"],
  ["IPPT", "Input Devices", "Pressure - Transmitter", "PT-212"],
];

const ERRORES = [
  { t: "El motor adentro de la bomba", d: "Para bombas y compresores la norma deja el accionador fuera del límite: el motor es su propia unidad de equipo, clase Electric Motors. Si lo metes en la bomba, cada falla eléctrica sube la tasa de falla de las bombas." },
  { t: "Ubicación y equipo mezclados", d: "P-211A es una posición en el proceso. La bomba con número de serie 4471 es el equipo que hoy está ahí. Si la mandas a taller y montas la de respaldo, el historial tiene que seguir a cada una por su lado." },
  { t: "Clases escritas a mano", d: "\"BBA\", \"Bomba\", \"Bombas centríf.\" son tres clases para el software. Con un catálogo cerrado y un código de 4 letras, contar fallas por clase es un filtro y no una limpieza de datos." },
  { t: "Bajar a nivel de tornillo en toda la planta", d: "Subunidades e ítems mantenibles se bajan donde hay plan, repuesto o análisis que los use. En el resto, la unidad de equipo basta. Más niveles es más datos que nadie mantiene." },
  { t: "Sistemas sin función", d: "\"Área de bombas\" no dice para qué existe. \"CN-210 · Separar y enviar el condensado a almacenamiento\" sí, y es la frase con la que después arranca el RCM." },
  { t: "Tags repetidos sin regla", d: "Una válvula y su actuador suelen compartir tag. Si la carga se reconoce solo por tag, uno pisa al otro. Por eso definimos si la KEY es el tag, el código del CMMS o ambos." },
];

const FASES = [
  {
    t: "Diagnóstico del registro",
    d: "Cruzamos tu listado o la exportación del CMMS con los DTIs y PFDs. Marcamos tags duplicados, equipos sin UT, clases en texto libre y equipos que están en los planos pero no en el registro.",
    e: "Informe de hallazgos por área",
  },
  {
    t: "Niveles, límites y codificación",
    d: "Decidimos qué nivel ocupa cada cosa, escribimos el límite de cada clase que tengas en planta y fijamos la regla de codificación de UT y tags compatible con la máscara de tu CMMS.",
    e: "Documento de taxonomía",
  },
  {
    t: "Clases, datos técnicos y fallas",
    d: "Asignamos categoría, clase y tipo del catálogo a cada equipo. Definimos qué datos técnicos lleva cada clase y el catálogo de fallas: partes, modos, mecanismos, causas, detección y acciones.",
    e: "Listado maestro de equipos",
  },
  {
    t: "Criticidad con tu gente",
    d: "Acordamos los niveles y los criterios con operaciones, mantenimiento y seguridad, y asignamos la criticidad equipo por equipo en sesiones de trabajo.",
    e: "Criticidad por equipo",
  },
  {
    t: "Carga y salida al CMMS",
    d: "Cargamos UT y equipos en ReliaPlant con vista previa: nada se escribe hasta revisar qué se crea, qué cambia y qué tiene error. Te entregamos el Excel con las columnas que pide tu carga.",
    e: "Taxonomía cargada + exportable",
  },
];

const FAQ = [
  {
    p: "¿Qué es la norma ISO 14224 y para qué sirve?",
    r: "Es la norma internacional para recolectar e intercambiar datos de confiabilidad y mantenimiento de equipos en petróleo, petroquímica y gas natural. La edición de referencia es la de 2016. Define la taxonomía de equipos, los límites de cada clase y los datos mínimos de equipo, falla y mantenimiento, con códigos para modos, mecanismos y causas de falla. Sirve para que tus datos sean comparables entre equipos, plantas y bancos de datos como OREDA.",
  },
  {
    p: "¿Cuáles son los 9 niveles de la taxonomía ISO 14224?",
    r: "1 industria, 2 categoría de negocio, 3 instalación, 4 planta o unidad, 5 sección o sistema, 6 unidad de equipo, 7 subunidad, 8 componente o ítem mantenible y 9 parte. Los niveles 1 a 5 describen el uso y la ubicación. Los niveles 6 a 9 describen la subdivisión del equipo. En el nivel 6 se asigna la clase y se calculan los indicadores.",
  },
  {
    p: "¿Qué es el límite de un equipo en ISO 14224?",
    r: "Es la frontera que define qué subunidades y componentes forman parte de una unidad de equipo y qué queda fuera. La norma la dibuja para cada clase. En una bomba, por ejemplo, la transmisión, la unidad de bombeo, el control y monitoreo y la lubricación quedan dentro, mientras que las válvulas de entrada y salida y el accionador quedan fuera. Sin límites escritos, dos personas registran la misma falla en equipos distintos.",
  },
  {
    p: "¿El motor de una bomba se registra como equipo aparte?",
    r: "Sí. Para bombas y compresores, ISO 14224 registra el accionador (motor eléctrico, turbina o motor de combustión) como su propia unidad de equipo, con su clase. En ReliaPlant el motor PM-211A puede colgar de la bomba P-211A como equipo superior para navegar, pero conserva su clase Electric Motors y sus fallas se cuentan como fallas de motor.",
  },
  {
    p: "¿Qué diferencia hay entre modo, mecanismo y causa de falla?",
    r: "El modo es lo que se observa en la unidad de equipo, por ejemplo fuga externa de fluido de proceso. El mecanismo es el proceso físico que la produjo en el componente, por ejemplo desgaste de las caras del sello. La causa es por qué ocurrió, por ejemplo servicio fuera de diseño por bajo NPSH. El modo se registra al crear el aviso; mecanismo y causa casi siempre al cierre, después de inspeccionar.",
  },
  {
    p: "¿Cómo se lleva una taxonomía ISO 14224 a SAP PM?",
    r: "Los niveles de instalación, unidad y sistema se vuelven ubicaciones técnicas, con una máscara de codificación que respete la regla. Las unidades de equipo se vuelven equipos montados en su ubicación técnica, con su clase. El catálogo de fallas se arma en perfiles de catálogo: parte del objeto, daño, causa y actividad. Desde ReliaPlant se exporta un Excel con las columnas que usa tu carga.",
  },
  {
    p: "¿Qué diferencia hay entre ubicación técnica y equipo?",
    r: "La ubicación técnica es el lugar y la función dentro del proceso: CN-210, sistema de condensado. El equipo es el activo físico que cumple esa función y tiene tag, fabricante, modelo y serie. La ubicación se queda fija; el equipo se puede reemplazar o mover. Separarlos permite seguir el historial de cada activo y el de cada posición.",
  },
];

const Cotizar = ({ texto = "Cotizar la taxonomía", v = "primary" as "primary" | "white" | "borde" }) => (
  <AbrirFormContacto buttonText={texto} variant={v} icon={null} modalTitle="Cotizar la taxonomía ISO 14224" btnText="Enviar" especial={ORIGEN} />
);

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };
  const maxTipos = 242;

  return (
    <div className="rph lp-iso">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada ── */}
      <section className="portada">
        <div className="env portada-grid">
          <div className="portada-txt">
            <span className="chip-sec"><i />Servicio · Taxonomía ISO 14224</span>
            <h1>Tu jerarquía de activos según ISO 14224, <span className="gris">diseñada por ingenieros de confiabilidad.</span></h1>
            <p className="bajada">
              Definimos los niveles de tu planta, la regla para codificar UT y tags, la clase de cada equipo, sus datos técnicos, la criticidad y el catálogo de fallas. Te la entregamos documentada, cargada en ReliaPlant y lista para SAP PM, Maximo o tu CMMS.
            </p>
            <div className="ctas">
              <Cotizar />
              <a className="btn btn-borde" href="#niveles">Ver cómo la armamos</a>
            </div>
          </div>
          <figure className="capas">
            <Image src="/sitio/landing/iso-jerarquia-capas.jpg" alt="Una planta descompuesta en capas: planta, unidad de proceso, patín, bomba con motor y, abajo, válvula, rodamiento y sello" fill priority sizes="(max-width: 900px) 100vw, 620px" style={{ objectFit: "contain" }} />
            <span className="capa c1"><b>3</b>Instalación · CN</span>
            <span className="capa c2"><b>4</b>Unidad · CN-200</span>
            <span className="capa c3"><b>5</b>Sistema · CN-210</span>
            <span className="capa c4"><b>6</b>Equipo · P-211A</span>
            <span className="capa c5"><b>8–9</b>Ítems y partes</span>
          </figure>
        </div>
        <div className="env">
          <dl className="cifras">
            <div><dt>9</dt><dd>niveles de la norma, de la industria a la parte</dd></div>
            <div><dt>691</dt><dd>tipos de equipo en el catálogo maestro</dd></div>
            <div><dt>97</dt><dd>clases en 10 categorías, con código de 4 letras</dd></div>
            <div><dt>Anexo B</dt><dd>38 mecanismos, 20 causas, 11 métodos de detección y 12 acciones</dd></div>
          </dl>
        </div>
      </section>

      {/* ── Los 9 niveles ── */}
      <section className="sec suave" id="niveles">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Los niveles de la norma</span>
            <h2>Nueve niveles. <span className="gris">Así se ven en una planta de gas.</span></h2>
            <p>Los niveles 1 a 5 dicen dónde está el equipo y para qué sirve. Los niveles 6 a 9 lo descomponen. El que manda es el 6: ahí se asigna la clase y ahí se cuentan las fallas para el MTBF.</p>
          </div>

          <div className="piramide" role="table" aria-label="Niveles de la taxonomía ISO 14224 con ejemplo de la planta Compresión Norte">
            <div className="pir-cab" role="row">
              <span role="columnheader">Nivel ISO 14224</span>
              <span role="columnheader">Ejemplo · Compresión Norte</span>
              <span role="columnheader">En ReliaPlant</span>
            </div>
            {NIVELES.map((l) => (
              <div key={l.n} role="row" className={`pir-fila${l.n === 6 ? " clave" : ""}${l.n <= 5 ? " uso" : " equipo"}`}>
                <div role="cell" className="pir-banda">
                  <span className="forma" style={{ width: `${34 + l.n * 7.3}%` }}>
                    <b>{l.n}</b>{l.nom}
                  </span>
                </div>
                <div role="cell" className="pir-ej">{l.ej}</div>
                <div role="cell" className="pir-rp">{l.rp}</div>
              </div>
            ))}
            <div className="pir-zonas" aria-hidden="true">
              <span className="z1">Uso y ubicación</span>
              <span className="z2">Subdivisión del equipo</span>
            </div>
          </div>
          <p className="nota-pie">El nivel 6 se marca en azul: es la unidad sobre la que se calculan tasa de falla, MTBF y disponibilidad. Las partes del nivel 8 son las que la configuración del GMAO trae por clase (SELL, IMPU, RODR…).</p>

          <div className="arbol-grid">
            <div className="arbol-txt">
              <h3>La misma jerarquía, en el árbol de ReliaPlant</h3>
              <p>Así queda CN-210 cuando terminamos. Cada equipo cuelga de su UT por su identificador, no por el texto del código, así que renombrar una UT no rompe nada.</p>
              <ol className="notas">
                <li><b>1</b><span>UT anidadas de los niveles 3 a 5, con el total de equipos de cada una entre paréntesis.</span></li>
                <li><b>2</b><span>Unidades de equipo del nivel 6 dentro de su sistema: separador, bombas, válvula, transmisor.</span></li>
                <li><b>3</b><span>El motor PM-211A cuelga de P-211A como equipo superior para navegar, pero conserva su clase Electric Motors.</span></li>
                <li><b>4</b><span>Las otras unidades de la planta, cerradas: el árbol carga cada UT cuando la abres.</span></li>
              </ol>
            </div>
            <ArbolUT />
          </div>
        </div>
      </section>

      {/* ── Codificación ── */}
      <section className="sec" id="codificacion">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Codificación</span>
            <h2>Un código que se lee solo. <span className="gris">Una regla, escrita una vez.</span></h2>
            <p>La regla de codificación es el entregable que más se usa después del proyecto. Con ella cualquiera crea una UT o un tag nuevo sin preguntar, y el CMMS la acepta.</p>
          </div>

          <div className="anatomias">
            <div className="anat">
              <span className="anat-eti">Ubicación técnica</span>
              <div className="anat-cod" aria-label="CN-210">
                <span className="seg s1">CN<i>planta</i></span><span className="sepa">-</span><span className="seg s2">2<i>unidad</i></span><span className="seg s3">10<i>sistema</i></span>
              </div>
              <p>El hijo hereda el prefijo del padre: CN-210 vive dentro de CN-200, que vive dentro de CN. Leyendo el código sabes dónde está.</p>
            </div>
            <div className="anat">
              <span className="anat-eti">Tag de equipo</span>
              <div className="anat-cod" aria-label="P-211A">
                <span className="seg s1">P<i>tipo</i></span><span className="sepa">-</span><span className="seg s2">21<i>sistema</i></span><span className="seg s3">1<i>número</i></span><span className="seg s4">A<i>tren</i></span>
              </div>
              <p>P de bomba, como V recipiente, E intercambiador o K compresor. La letra A indica el tren: A opera, B respalda. Las dos son unidades de equipo distintas.</p>
            </div>
            <div className="anat">
              <span className="anat-eti">Tag de instrumento · ISA 5.1</span>
              <div className="anat-cod" aria-label="PT-212">
                <span className="seg s1">P<i>variable</i></span><span className="seg s2">T<i>función</i></span><span className="sepa">-</span><span className="seg s3">212<i>lazo</i></span>
              </div>
              <p>Primera letra la variable medida (P presión, L nivel, F flujo), luego la función (T transmisor, V válvula). LV-210 es la válvula del lazo de nivel 210.</p>
            </div>
            <div className="anat">
              <span className="anat-eti">Tag de línea</span>
              <div className="anat-cod pequeno" aria-label='1-1/2"-GN-17025-B0A1'>
                <span className="seg s1">1-1/2&quot;<i>diámetro</i></span><span className="sepa">-</span><span className="seg s2">GN<i>servicio</i></span><span className="sepa">-</span><span className="seg s3">17025<i>línea</i></span><span className="sepa">-</span><span className="seg s4">B0A1<i>especificación</i></span>
              </div>
              <p>Diámetro, servicio (GN gas natural), número de línea y especificación de tubería. ReliaPlant acepta las comillas y la diagonal tal cual.</p>
            </div>
          </div>

          <div className="reglas">
            <div className="regla">
              <h3>Cómo normaliza ReliaPlant cada tag</h3>
              <ul className="lista">
                <li>Se guarda en mayúsculas: <code>p-211a</code> queda <code>P-211A</code>.</li>
                <li>Un espacio se cambia por guion: <code>P 211A</code> queda <code>P-211A</code>.</li>
                <li>Se aceptan letras, números, guion, comillas dobles, diagonal y punto. Lo demás se quita.</li>
                <li>Un tag que ya existe en la planta se respeta tal cual.</li>
              </ul>
            </div>
            <div className="regla">
              <h3>La KEY: cómo se reconoce un equipo al recargar</h3>
              <ul className="lista">
                <li>Puede ser el tag, el código del CMMS o los dos. Se configura por planta.</li>
                <li>Si el código es KEY y una fila llega sin código, se detiene la carga completa. No se inventan códigos.</li>
                <li>Con tags repetidos (válvula y actuador), el equipo superior se indica por código y no por tag.</li>
                <li>Celda vacía borra el dato. Por eso la plantilla se descarga desde la propia configuración y se revisa en vista previa.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clases y tipos ── */}
      <section className="sec suave" id="clases">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Clases y tipos de equipo</span>
            <h2>Cada equipo con su clase. <span className="gris">De un catálogo cerrado, no de lo que alguien escribió.</span></h2>
            <p>Partimos del catálogo maestro de ReliaPlant: 10 categorías, 97 clases y 691 tipos con nombres en inglés alineados a la norma. Los nombres y códigos se pueden ajustar a tu empresa sin romper nada, porque cada categoría, clase y tipo tiene una identidad fija aparte de su nombre.</p>
          </div>

          <div className="cat-grid">
            <div className="barras" aria-label="Tipos de equipo por categoría del catálogo maestro">
              <div className="barras-cab"><span>Categoría</span><span>Clases</span><span>Tipos</span></div>
              {CATEGORIAS.map(([c, cl, ti]) => (
                <div key={c} className="barra-f">
                  <span className="nom">{c}</span>
                  <span className="cl">{cl}</span>
                  <span className="pista"><i style={{ width: `${(ti / maxTipos) * 100}%` }} /><em>{ti}</em></span>
                </div>
              ))}
            </div>

            <div className="codigos">
              <h3>El código de tipo, en 4 letras</h3>
              <p>Las dos primeras letras son la clase y las dos últimas el tipo. <b>PU</b>+<b>CE</b> es bomba centrífuga. En la plantilla de carga, la columna CÓDIGO DE TIPO llena categoría, clase y tipo de una vez.</p>
              <div className="scroll-x">
                <table className="t-cod">
                  <thead><tr><th>Código</th><th>Clase</th><th>Tipo</th><th>Ejemplo</th></tr></thead>
                  <tbody>
                    {CODIGOS.map(([c, cl, t, e]) => (
                      <tr key={c}>
                        <td className="cod"><b>{c.slice(0, 2)}</b>{c.slice(2)}</td>
                        <td>{cl}</td><td>{t}</td><td className="mono">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="dt-grid">
            <DatosTecnicos />
            <div className="dt-txt">
              <h3>Datos técnicos por clase</h3>
              <p>Una bomba no se describe igual que un tanque. Para cada clase definimos qué datos lleva el equipo, con su unidad y su tipo, y la plataforma valida los valores contra esa definición.</p>
              <ol className="notas">
                <li><b>1</b><span>ReliaPlant trae 13 clases configuradas de inicio. Agregamos las que tu planta necesite.</span></li>
                <li><b>2</b><span>Cuatro tipos de dato: numérico con unidad, texto, selección y sí/no.</span></li>
                <li><b>3</b><span>Las listas cerradas, como el tipo de sello, son las que después te dejan filtrar: todas las bombas con sello doble de más de 100 kW.</span></li>
              </ol>
              <p className="aparte">Fabricante y modelo van a un catálogo de la empresa: lo que se escribe en un equipo queda disponible para el siguiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Criticidad ── */}
      <section className="sec" id="criticidad">
        <div className="env crit-grid">
          <div>
            <div className="sec-cab" style={{ marginBottom: 28 }}>
              <span className="chip-sec"><i />Criticidad</span>
              <h2>Tus niveles, <span className="gris">con tus criterios.</span></h2>
              <p>La criticidad es de la organización, no de cada planta: un equipo A significa lo mismo en todas. Partimos de A, B y C y agregamos los niveles que tu empresa ya usa.</p>
            </div>
            <ol className="notas">
              <li><b>1</b><span>La etiqueta es lo que se escribe en la plantilla de carga y lo que se ve en el árbol y en las tablas.</span></li>
              <li><b>2</b><span>El nivel fija el color, de una escala de siete: de muy alta a sin criticidad.</span></li>
              <li><b>3</b><span>A, B y C no se pueden borrar. Los niveles que agregas, como AA, sí.</span></li>
            </ol>
            <div className="criterios">
              <h3>Cómo la asignamos</h3>
              <p>En sesiones con operaciones, mantenimiento y seguridad. Para cada unidad de equipo se pregunta qué pasa si falla: efecto en la seguridad de las personas, en el ambiente, en la producción y en el costo de reparar. El peor de los efectos fija el nivel. Lo que se acuerda queda escrito para que el equipo que llegue el próximo año asigne igual.</p>
            </div>
          </div>
          <Criticidad />
        </div>
      </section>

      {/* ── Catálogo de fallas ── */}
      <section className="sec suave" id="fallas">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Catálogo de fallas · Anexo B</span>
            <h2>Fallas en listas cerradas. <span className="gris">Para poder contarlas.</span></h2>
            <p>El Anexo B de ISO 14224:2016 trae las listas de códigos para describir una falla. Las dejamos configuradas por clase en el GMAO de ReliaPlant, como base del cierre técnico de cada orden.</p>
          </div>

          <div className="fallas-grid">
            <CatalogoFallas />
            <div>
              <ol className="notas">
                <li><b>1</b><span>Por clase: partes (ítems mantenibles) y daños o modos de falla. Una bomba tiene 13 partes y 20 modos; una válvula de control, 10 y 16.</span></li>
                <li><b>2</b><span>Listas generales para todas las clases: mecanismos (B.2), causas (B.3), métodos de detección (B.4) y acciones (B.5).</span></li>
              </ol>
              <div className="impacto">
                <h3>Impacto en la función</h3>
                <p>Cada aviso registra además cuánto afectó la falla a la función del equipo:</p>
                <div className="imp-fila"><span className="chip-e e-rojo">Crítica</span><span>La función se perdió de golpe.</span></div>
                <div className="imp-fila"><span className="chip-e e-azul">Degradada</span><span>Sigue operando, fuera de lo aceptable.</span></div>
                <div className="imp-fila"><span className="chip-e e-nuevo">Incipiente</span><span>Todavía no afecta, pero va a empeorar.</span></div>
              </div>
            </div>
          </div>

          <div className="resuelto">
            <div className="res-cab">
              <span className="res-eti">Ejemplo resuelto</span>
              <h3>Fuga por el sello de P-211A, codificada con la norma</h3>
              <p>El operador ve goteo en la bomba durante su ronda. Así queda la falla cuando el aviso se cierra:</p>
            </div>
            <div className="cadena">
              <div className="esl"><span className="q">Lo que se vio</span><b>Modo · ELP</b><span>Fuga externa de fluido de proceso</span></div>
              <div className="esl"><span className="q">Dónde</span><b>Parte · SELL</b><span>Sello mecánico</span></div>
              <div className="esl"><span className="q">Qué le pasó</span><b>Mecanismo · 2.4</b><span>Desgaste</span></div>
              <div className="esl"><span className="q">Por qué</span><b>Causa · 3.1</b><span>Servicio fuera de diseño: marcha en seco por bajo NPSH</span></div>
              <div className="esl"><span className="q">Cómo se supo</span><b>Detección · 8</b><span>Observación casual</span></div>
              <div className="esl"><span className="q">Qué se hizo</span><b>Acción · 1</b><span>Reemplazar</span></div>
            </div>
            <p className="res-pie">Con cien avisos codificados así, la pregunta “¿cuántas fugas por sello tuvieron las bombas centrífugas este año y cuántas fueron por operación fuera de diseño?” se responde con un filtro. Con texto libre, no se responde.</p>
          </div>
        </div>
      </section>

      {/* ── Antes y después ── */}
      <section className="sec" id="errores">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Errores típicos</span>
            <h2>Lo que encontramos <span className="gris">en casi todos los registros.</span></h2>
            <p>Esta es la misma área en un registro sin taxonomía y después del servicio. Los datos son de ejemplo, los problemas son los de siempre.</p>
          </div>

          <div className="antes-despues">
            <div className="ad ad-antes">
              <div className="ad-eti">Antes · exportación del CMMS</div>
              <div className="scroll-x">
                <table className="t-ad">
                  <thead><tr><th>Equipo</th><th>Ubicación</th><th>Clase</th></tr></thead>
                  <tbody>
                    <tr><td>BBA CONDENSADO 1</td><td>AREA 2</td><td>BOMBA</td></tr>
                    <tr><td>Bomba P211-A c/motor</td><td><span className="vacio">vacío</span></td><td>Bombas</td></tr>
                    <tr><td>P 211 B</td><td>COMPRESION</td><td>BBA</td></tr>
                    <tr><td>MOTOR BBA COND</td><td>AREA 2</td><td><span className="vacio">vacío</span></td></tr>
                    <tr><td>PT212</td><td><span className="vacio">vacío</span></td><td>INSTRUMENTO</td></tr>
                  </tbody>
                </table>
              </div>
              <ul className="ad-prob">
                <li>Tres nombres para la misma clase.</li>
                <li>El motor dentro de una bomba y suelto en otra.</li>
                <li>P-211B registrada en el área equivocada.</li>
              </ul>
            </div>
            <div className="ad flecha" aria-hidden="true">
              <svg viewBox="0 0 40 40"><path d="M8 20h22M22 12l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="ad ad-despues">
              <div className="ad-eti">Después · taxonomía ISO 14224</div>
              <div className="scroll-x">
                <table className="t-ad">
                  <thead><tr><th>Tag</th><th>UT</th><th>Tipo</th><th>Crit.</th></tr></thead>
                  <tbody>
                    <tr><td className="mono">P-211A</td><td className="mono">CN-210</td><td className="mono">PUCE</td><td><span className="crit-c" style={{ background: "#da1e28" }}>A</span></td></tr>
                    <tr><td className="mono">P-211B</td><td className="mono">CN-210</td><td className="mono">PUCE</td><td><span className="crit-c" style={{ background: "#da1e28" }}>A</span></td></tr>
                    <tr><td className="mono">PM-211A</td><td className="mono">CN-210</td><td className="mono">EMAC</td><td><span className="crit-c" style={{ background: "#da1e28" }}>A</span></td></tr>
                    <tr><td className="mono">PM-211B</td><td className="mono">CN-210</td><td className="mono">EMAC</td><td><span className="crit-c" style={{ background: "#da1e28" }}>A</span></td></tr>
                    <tr><td className="mono">PT-212</td><td className="mono">CN-210</td><td className="mono">IPPT</td><td><span className="crit-c" style={{ background: "#24a148" }}>C</span></td></tr>
                  </tbody>
                </table>
              </div>
              <ul className="ad-ok">
                <li>Un tipo del catálogo por equipo.</li>
                <li>Cada motor es su propia unidad de equipo.</li>
                <li>Todo en su sistema, con su criticidad.</li>
              </ul>
            </div>
          </div>

          <div className="errores">
            {ERRORES.map((e, i) => (
              <div key={e.t} className="error">
                <span className="en">{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Del estándar a tu CMMS ── */}
      <section className="sec suave" id="cmms">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />SAP PM · Maximo · tu CMMS</span>
            <h2>La norma es el estándar. <span className="gris">Tu CMMS es donde vive.</span></h2>
            <p>Diseñamos pensando en el sistema donde la taxonomía se va a usar todos los días. Esta es la correspondencia que usamos como punto de partida y que ajustamos a la configuración de cada cliente.</p>
          </div>
          <div className="scroll-x mapeo-env">
            <table className="mapeo">
              <thead><tr><th>ISO 14224</th><th>ReliaPlant</th><th>SAP PM</th><th>IBM Maximo</th></tr></thead>
              <tbody>
                <tr><td><b>3</b> Instalación</td><td>Planta + UT raíz</td><td>Centro de planificación + ubicación técnica de primer nivel</td><td>Site + location de primer nivel</td></tr>
                <tr><td><b>4–5</b> Unidad y sistema</td><td>UT anidadas</td><td>Ubicaciones técnicas con su indicador de estructura</td><td>Locations en jerarquía</td></tr>
                <tr className="fuerte"><td><b>6</b> Unidad de equipo</td><td>Equipo con clase, tipo y código de 4 letras</td><td>Equipo montado en su ubicación técnica, con clase</td><td>Asset en su location</td></tr>
                <tr><td><b>7</b> Subunidad</td><td>Equipo con equipo superior</td><td>Equipo subordinado</td><td>Child asset</td></tr>
                <tr><td><b>8</b> Ítem mantenible</td><td>Parte del catálogo de fallas</td><td>Catálogo B: parte del objeto</td><td>Failure class y problema</td></tr>
                <tr><td><b>9</b> Parte</td><td>Material del inventario</td><td>Material / lista de materiales</td><td>Item / spare parts</td></tr>
                <tr><td>Fallas · Anexo B</td><td>Catálogo de fallas del GMAO</td><td>Catálogos C daño, 5 causa, A actividad</td><td>Problem, cause, remedy</td></tr>
              </tbody>
            </table>
          </div>
          <div className="salida">
            <p><b>La salida:</b> un Excel con exactamente las columnas de tu carga. En ReliaPlant cada planta tiene su propia configuración de columnas, cuáles son obligatorias y cuál es la KEY, y el exportable sale con esa misma estructura.</p>
          </div>
        </div>
      </section>

      {/* ── Método y entregables ── */}
      <section className="sec" id="metodo">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Método de trabajo</span>
            <h2>Cinco fases, <span className="gris">cada una con algo que se entrega.</span></h2>
            <p>Empezamos por un área y la cerramos completa antes de pasar a la siguiente. Una unidad bien hecha sirve; una planta entera a medias, no.</p>
          </div>
          <ol className="fases">
            {FASES.map((f, i) => (
              <li key={f.t} className="fase">
                <span className="fn">{i + 1}</span>
                <div className="fc">
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
                <span className="fe"><i>Entregable</i>{f.e}</span>
              </li>
            ))}
          </ol>

          <div className="carga-grid">
            <div className="carga-txt">
              <h3>El límite de cada clase, por escrito</h3>
              <p>Es el entregable que más discusiones evita. Dice qué es parte de la bomba y qué no. Sin él, una falla del motor termina en el historial de la bomba y el MTBF de las dos clases sale mal.</p>
              <ol className="notas">
                <li><b>1</b><span>Dentro del límite van las subunidades. Sus fallas se registran en el equipo.</span></li>
                <li><b>2</b><span>Fuera quedan el motor, las válvulas y la alimentación. Cada uno es otro equipo, con su clase.</span></li>
              </ol>
              <p className="aparte">Hacemos un diagrama así por cada clase que tengas en planta: bombas, compresores, intercambiadores, recipientes, motores y las que apliquen.</p>
            </div>
            <figure className="limite">
              <svg viewBox="0 0 640 330" role="img" aria-label="Límite de equipo de la clase Pumps según ISO 14224: el motor, las válvulas y la alimentación eléctrica quedan fuera">
                <rect x="150" y="40" width="340" height="250" rx="10" fill="#eef3fe" stroke="#2563eb" strokeWidth="1.6" strokeDasharray="7 5" />
                <text x="320" y="30" textAnchor="middle" className="lim-cab">Límite de la unidad de equipo · P-211A (Pumps)</text>
                <g><rect x="170" y="62" width="140" height="46" rx="4" fill="#fff" stroke="#93b4f5" /><text x="240.0" y="82" textAnchor="middle" className="lim-t">Transmisión</text><text x="240.0" y="98" textAnchor="middle" className="lim-s">acople, caja</text></g>
                <g><rect x="330" y="62" width="140" height="46" rx="4" fill="#fff" stroke="#93b4f5" /><text x="400.0" y="82" textAnchor="middle" className="lim-t">Unidad de bomba</text><text x="400.0" y="98" textAnchor="middle" className="lim-s">carcasa, impulsor, sello</text></g>
                <g><rect x="170" y="128" width="140" height="46" rx="4" fill="#fff" stroke="#93b4f5" /><text x="240.0" y="148" textAnchor="middle" className="lim-t">Lubricación</text><text x="240.0" y="164" textAnchor="middle" className="lim-s">aceite, enfriador</text></g>
                <g><rect x="330" y="128" width="140" height="46" rx="4" fill="#fff" stroke="#93b4f5" /><text x="400.0" y="148" textAnchor="middle" className="lim-t">Control y monitoreo</text><text x="400.0" y="164" textAnchor="middle" className="lim-s">instrumentos locales</text></g>
                <g><rect x="250" y="194" width="140" height="46" rx="4" fill="#fff" stroke="#93b4f5" /><text x="320.0" y="214" textAnchor="middle" className="lim-t">Misceláneos</text><text x="320.0" y="230" textAnchor="middle" className="lim-s">tuberías propias</text></g>
                <text x="320" y="270" textAnchor="middle" className="lim-s">5 subunidades dentro del límite</text>
                <g><rect x="10" y="62" width="120" height="46" rx="4" fill="#f3f4f6" stroke="#d1d5db" /><text x="70.0" y="82" textAnchor="middle" className="lim-f">Motor</text><text x="70.0" y="98" textAnchor="middle" className="lim-s">PM-211A, otro equipo</text></g>
                <g><rect x="10" y="194" width="120" height="46" rx="4" fill="#f3f4f6" stroke="#d1d5db" /><text x="70.0" y="214" textAnchor="middle" className="lim-f">Energía</text><text x="70.0" y="230" textAnchor="middle" className="lim-s">alimentación eléctrica</text></g>
                <g><rect x="510" y="62" width="120" height="46" rx="4" fill="#f3f4f6" stroke="#d1d5db" /><text x="570.0" y="82" textAnchor="middle" className="lim-f">Válvulas</text><text x="570.0" y="98" textAnchor="middle" className="lim-s">succión y descarga</text></g>
                <g><rect x="510" y="194" width="120" height="46" rx="4" fill="#f3f4f6" stroke="#d1d5db" /><text x="570.0" y="214" textAnchor="middle" className="lim-f">Instrumentación</text><text x="570.0" y="230" textAnchor="middle" className="lim-s">remota, en sala</text></g>
                <path d="M130 85h40M130 217h40M470 85h40M470 217h40" stroke="#9ca3af" strokeWidth="1.4" strokeDasharray="3 3" />
              </svg>
              <figcaption>Límite de la clase Pumps según ISO 14224. Lo que queda fuera tiene su propio tag y su propia clase.</figcaption>
            </figure>
          </div>

          <div className="necesitamos">
            <h3>Lo que necesitamos de tu lado</h3>
            <ul className="lista">
              <li>El listado de equipos actual o una exportación del CMMS.</li>
              <li>Los DTIs y PFDs de las áreas del alcance.</li>
              <li>Una persona de mantenimiento que conozca la planta, para las sesiones.</li>
              <li>Si usas SAP PM o Maximo, la máscara de codificación y la plantilla de carga actuales.</li>
            </ul>
            <p>Si el listado no existe o no coincide con lo que hay en campo, el paso previo es un <a href="/servicios/levantamiento-de-activos">levantamiento de activos</a>.</p>
          </div>
        </div>
      </section>

      {/* ── Servicio o plataforma ── */}
      <section className="sec suave" id="modos">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Lo hacemos por ti o lo haces tú</span>
            <h2>El servicio es el atajo. <span className="gris">La plataforma queda para seguir.</span></h2>
          </div>
          <div className="modos">
            <div className="modo servicio">
              <span className="m-eti">Servicio ReliaPlant</span>
              <h3>Ingenieros de confiabilidad diseñan tu taxonomía con tu equipo</h3>
              <div className="m-cols">
                <ul>
                  <li>Diagnóstico del registro y del CMMS actual</li>
                  <li>Documento de niveles, límites por clase y regla de codificación</li>
                  <li>Clase, tipo y datos técnicos de cada equipo</li>
                  <li>Catálogo de fallas por clase</li>
                </ul>
                <ul>
                  <li>Sesiones de criticidad con operaciones y mantenimiento</li>
                  <li>Carga validada en ReliaPlant</li>
                  <li>Exportable con las columnas de tu SAP PM, Maximo u otro CMMS</li>
                  <li>Traspaso a tu equipo para que la mantenga</li>
                </ul>
              </div>
              <Cotizar texto="Cotizar el servicio" v="white" />
            </div>
            <div className="modo plataforma">
              <span className="m-eti">Si prefieres hacerlo tú</span>
              <h3>La plataforma trae las piezas</h3>
              <ul>
                <li>Catálogo maestro de 691 tipos con código de 4 letras</li>
                <li>Plantilla de carga configurable por planta, con vista previa</li>
                <li>Niveles de criticidad y datos técnicos por clase</li>
                <li>Catálogo de fallas ISO 14224 en el GMAO</li>
              </ul>
              <div className="m-links">
                <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                <a className="mas" href="/producto/taxonomia">Ver el módulo de taxonomía →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec" id="faq">
        <div className="env faq-env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>ISO 14224, <span className="gris">en preguntas.</span></h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>{f.p}</summary>
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
              <h2>Trae la exportación de tu CMMS. <span className="gris">Te mostramos dónde se rompe la jerarquía.</span></h2>
              <p>En la llamada revisamos una muestra de tu registro contra la norma y te proponemos el alcance por áreas.</p>
            </div>
            <div className="ctas">
              <Cotizar texto="Solicita una demo" />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
          <div className="siguientes">
            <a className="sig principal" href="/servicios/levantamiento-de-activos">
              <span className="s-eti">Siguiente paso del ciclo</span>
              <b>Levantamiento de activos en campo</b>
              <span>Verificar en planta cada tag de la taxonomía, con fotos y placa.</span>
            </a>
            <a className="sig" href="/producto/rcm">
              <span className="s-eti">Después</span>
              <b>RCM sobre tu taxonomía</b>
              <span>Las funciones salen de los sistemas; los modos, del catálogo.</span>
            </a>
            <a className="sig" href="/producto/cmms">
              <span className="s-eti">En el día a día</span>
              <b>Avisos y órdenes codificados</b>
              <span>El GMAO usa las mismas clases y el mismo catálogo de fallas.</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

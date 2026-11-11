import type { Metadata } from "next";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import "@/app/home.css";
import "./estilos.css";
import {
  DonaAvance, TarjetaUT, TelefonoFicha, VentanaRecorrido, TablaPendientes, PanelConstruccion,
  MiniIniciar, MiniDescargar, MiniResultado, MiniNuevo, N, CAMPO,
} from "./pantallas";

const RUTA = "/servicios/levantamiento-de-activos";
const APP = "https://app.reliaplant.com/";

export const metadata: Metadata = {
  title: { absolute: "Levantamiento de activos y censo de equipos | ReliaPlant" },
  description:
    "Recorremos tu planta por ubicación técnica con app offline: tags, placas, fotos con GPS y notas de voz. Te entregamos la taxonomía cargada para tu CMMS.",
  alternates: { canonical: `https://reliaplant.com${RUTA}` },
};

const FAQ = [
  {
    p: "¿Qué es un levantamiento de activos?",
    r: "Es el recorrido en campo para confirmar qué equipos existen en la planta, dónde están y qué dice su placa. Se compara contra el listado que ya existe (por ejemplo, el maestro de equipos de SAP PM) y el resultado es un registro de activos confiable, ordenado por ubicación técnica, que sirve de base para criticidad, planes de mantenimiento y el CMMS.",
  },
  {
    p: "¿Qué diferencia hay entre un levantamiento de activos de mantenimiento y un inventario de activos fijos?",
    r: "El inventario de activos fijos es contable: busca la placa de inventario, el valor en libros y la depreciación. El levantamiento de mantenimiento busca la ubicación técnica, el equipo superior, la clase y tipo, los datos de placa del fabricante y la evidencia fotográfica. Pueden cruzarse, pero no responden a la misma pregunta.",
  },
  {
    p: "¿Qué es el tagging de equipos?",
    r: "Es asignar y verificar el identificador de cada equipo (tag), normalmente el mismo del DTI, por ejemplo P-211A para la bomba A del servicio 211. En el levantamiento se confirma que el tag del plano, el del CMMS y el que está físicamente en el equipo coincidan. Cuando no coinciden, queda como pendiente con foto para resolverlo.",
  },
  {
    p: "¿Se puede hacer el censo de equipos con la planta en operación?",
    r: "Sí, es lo más común. El recorrido es visual y no requiere intervenir equipos. Lo que no se puede ver por acceso, aislamiento o riesgo se marca como placa inaccesible y se agenda para un paro. Se trabaja con los permisos de trabajo y la inducción de seguridad de tu planta.",
  },
  {
    p: "¿Cómo se registran los equipos que no tienen tag ni placa?",
    r: "Se registran como equipos nuevos desde la app, en la ubicación técnica donde están, con fotos y una nota de voz que describe qué son y dónde están. Reciben un código provisional hasta que tu CMMS les asigne el definitivo. La placa queda como Sin placa o No legible, según el caso.",
  },
  {
    p: "¿Cómo se carga el resultado del levantamiento en SAP PM?",
    r: "ReliaPlant exporta las ubicaciones técnicas y los equipos a Excel con las mismas columnas de tu configuración de carga. Con ese archivo tu equipo de SAP hace la carga, o lo usamos como base para el formato de carga que ya tengan. Los equipos nuevos y los no encontrados van en listas aparte para revisarlos antes.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };
  const cotizar = (texto: string, variante: "primary" | "white" | "borde" = "primary") => (
    <AbrirFormContacto buttonText={texto} variant={variante} icon={null} modalTitle={texto} btnText="Enviar" especial={`web - ${RUTA}`} />
  );

  return (
    <div className="rph lp-lev">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada ── */}
      <section className="lv-hero">
        <div className="env">
          <div className="lv-hero-cab">
            <div>
              <span className="chip-sec"><i />Servicio · Levantamiento de activos en campo</span>
              <h1>Recorremos tu planta equipo por equipo <span className="gris">y te la entregamos cargada, con evidencia.</span></h1>
            </div>
            <div className="lv-hero-der">
              <p className="lv-hero-sub">
                Censo de equipos por ubicación técnica con nuestra app de campo, aunque no haya señal. Cada equipo queda marcado en el recorrido, con fotos con GPS, notas de voz y estado de placa. Lo que ya tenías se guarda como registro original para comparar al cierre.
              </p>
              <div className="ctas">
                {cotizar("Cotizar el levantamiento")}
                <a className="btn btn-borde" href="#proyecto">Ver el proyecto paso a paso</a>
              </div>
            </div>
          </div>

          <div className="lv-banda-wrap">
            <div className="lv-banda">
              <Image src="/sitio/landing/levantamiento-cuadrilla.jpg" alt="Cuadrilla de levantamiento recorriendo un rack de tuberías con la app de campo" fill priority sizes="(max-width: 1180px) 100vw, 1140px" />
              <TarjetaUT />
              <p className="lv-banda-pie">Cada frente recorre una UT a la vez. Al terminarla, la UT se marca como revisada.</p>
            </div>
            <DonaAvance />
          </div>

          <ul className="lv-queda" style={{ marginTop: 28 }}>
            <li><b>Resultado en campo</b>Encontrado, con comentarios, no encontrado o no requiere confirmación.</li>
            <li><b>Estado de placa</b>Legible, no legible, inaccesible o sin placa.</li>
            <li><b>Evidencia</b>Fotos en calidad original con posición GPS y notas de voz.</li>
            <li><b>Ubicación</b>UT, equipo superior, marcador en el DTI y punto en el mapa.</li>
          </ul>

          <nav className="lv-indice" aria-label="En esta página">
            <a href="#por-que"><span>01</span>Por qué</a>
            <a href="#proyecto"><span>02</span>El proyecto</a>
            <a href="#app"><span>03</span>App de campo</a>
            <a href="#plataforma"><span>04</span>Lo que ves</a>
            <a href="#conciliacion"><span>05</span>Conciliación</a>
            <a href="#construccion"><span>06</span>Registro original</a>
            <a href="#que-se-levanta"><span>07</span>Qué se levanta</a>
            <a href="#entregables"><span>08</span>Entregables</a>
            <a href="#cotizar"><span>09</span>Cotizar</a>
          </nav>
        </div>
      </section>

      {/* ── 01 Por qué ── */}
      <section className="sec" id="por-que">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />01 · Por qué</span>
            <h2>El listado de equipos dice una cosa. <span className="gris">La planta dice otra.</span></h2>
            <p>Tags repetidos, equipos dados de baja que siguen en el CMMS y equipos instalados que nunca se dieron de alta. Cualquier análisis de criticidad o RCM arranca con semanas de limpieza. El levantamiento lo resuelve una vez, en campo, y deja la prueba.</p>
          </div>
          <div className="lv-comp">
            <div className="lv-comp-f cab"><span>Situación en campo</span><span>Con libreta y Excel</span><span className="rp">Con el levantamiento ReliaPlant</span></div>
            <div className="lv-comp-f">
              <h3>No hay señal dentro de la planta</h3>
              <p className="ex">Se anota en papel y se transcribe en la noche. Lo que no se anotó se pierde.</p>
              <p className="rp">La planta está descargada en el teléfono. Todo queda en cola y sube solo al recuperar señal, sin duplicarse.</p>
            </div>
            <div className="lv-comp-f">
              <h3>La foto de la placa</h3>
              <p className="ex">Cientos de fotos IMG_4471.jpg en un celular. Nadie sabe de qué equipo es cada una.</p>
              <p className="rp">La foto se toma desde la ficha del equipo y queda ligada a él, con GPS si el teléfono tiene una posición reciente.</p>
            </div>
            <div className="lv-comp-f">
              <h3>Aparece un equipo que no estaba</h3>
              <p className="ex">Se agrega una fila al final del Excel, sin ubicación ni jerarquía.</p>
              <p className="rp">Se registra en su UT con tag, fotos y audio. Entra con código provisional y marcado como nuevo del ciclo.</p>
            </div>
            <div className="lv-comp-f">
              <h3>Un equipo del listado no se encuentra</h3>
              <p className="ex">Se borra la fila o se deja igual. No queda rastro de la decisión.</p>
              <p className="rp">Queda <code>No encontrado</code> con quién y cuándo lo marcó. Nada se borra sin revisarlo contigo.</p>
            </div>
            <div className="lv-comp-f">
              <h3>¿Cuánto falta?</h3>
              <p className="ex">Alguien cuenta filas con color en el Excel cada viernes.</p>
              <p className="rp">El avance por UT se ve en vivo, en la web y en el teléfono, con el mismo cálculo.</p>
            </div>
            <div className="lv-comp-f">
              <h3>¿Qué había antes de empezar?</h3>
              <p className="ex">Versiones del Excel con nombres como final_v3_revisado.</p>
              <p className="rp">El registro original queda guardado como archivo fijo el día que arranca la construcción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 El proyecto ── */}
      <section className="sec suave" id="proyecto">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />02 · El proyecto de principio a fin</span>
            <h2>Siete fases. <span className="gris">Cada una deja algo registrado.</span></h2>
            <p>Un levantamiento bien hecho no es solo caminar la planta. Es saber qué había, qué se encontró, qué cambió y quién lo decidió.</p>
          </div>
          <ol className="lv-tl">
            <li className="lv-fase">
              <span className="lv-num">01</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="cli">Con tu equipo</span><span className="ofi">Oficina</span></div>
                <h3>Arranque: criterios y carga de lo existente</h3>
                <p>Revisamos tu listado actual, los DTIs y la estructura de ubicaciones técnicas. Acordamos la jerarquía ISO 14224, el criterio de codificación, qué entra al alcance y qué datos técnicos se levantan por clase.</p>
                <p>Cargamos lo existente con la carga masiva desde Excel. La carga primero muestra una vista previa de qué se crea, qué se actualiza y qué se desasigna. Nada se escribe hasta confirmar.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Queda registrado</span>
                  <MiniIniciar />
                  <span>Al iniciar la construcción se guarda el <b>registro original</b>: el exportable de UTs y equipos tal como llegaron.</span>
                </div>
              </div>
            </li>
            <li className="lv-fase">
              <span className="lv-num">02</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="campo">Campo</span></div>
                <h3>La planta en el teléfono</h3>
                <p>Antes de bajar a planta, cada técnico descarga los datos: equipos, UTs y configuración. Las páginas de los DTIs se guardan como imágenes para verlas con zoom sin señal.</p>
                <ul className="lista">
                  <li>Búsqueda por tag o código, o escaneando el QR del equipo.</li>
                  <li>Árbol de ubicaciones igual al de la web.</li>
                  <li>El marcador del equipo encima de su DTI.</li>
                </ul>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">En el teléfono</span>
                  <MiniDescargar />
                </div>
              </div>
            </li>
            <li className="lv-fase">
              <span className="lv-num">03</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="campo">Campo</span></div>
                <h3>Recorrido por ubicación técnica</h3>
                <p>Se camina una UT a la vez. Cada equipo del listado recibe uno de cuatro resultados. Se revisa la placa, se toman fotos y, si hace falta explicar algo, se graba una nota de voz en lugar de escribir con guantes.</p>
                <p>Al terminar la UT, se marca como revisada y aparece con su check en el árbol de la plataforma. Así se sabe qué UTs están cerradas aunque tengan equipos con comentarios.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Un toque por equipo</span>
                  <MiniResultado />
                  <span>Tocar el resultado elegido otra vez lo quita. Cada marca guarda quién la hizo y cuándo.</span>
                </div>
              </div>
            </li>
            <li className="lv-fase">
              <span className="lv-num">04</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="campo">Campo</span></div>
                <h3>Equipos nuevos, pendientes y notas generales</h3>
                <p>Lo que aparece en campo y no estaba en el listado se registra con el botón + de la UT o desde la pestaña Nuevo. Lleva tag, fotos y audio, y sube con un código provisional de 8 caracteres hasta que tenga el definitivo.</p>
                <p>Lo que no se puede resolver frente al equipo se abre como <b>pendiente</b>, con fotos y audio. Lo que no es de un equipo en particular va como <b>nota general</b>.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Equipo nuevo en CN-210</span>
                  <MiniNuevo />
                </div>
              </div>
            </li>
            <li className="lv-fase">
              <span className="lv-num">05</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="ofi">Oficina</span></div>
                <h3>DTIs, mapa y datos técnicos</h3>
                <p>Mientras el campo avanza, el equipo de oficina trabaja sobre lo que va subiendo. Pone el marcador de cada equipo en su DTI con el banco de trabajo, ubica su punto en la vista satelital de la planta y completa los datos técnicos leyendo las fotos de placa.</p>
                <p>Los datos técnicos siguen la configuración de cada clase que se definió en el arranque, así todas las bombas quedan con los mismos campos.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Queda en la ficha</span>
                  <span>Marcador en el DTI · Punto en Map view · Fabricante, modelo y serie · Datos técnicos por clase · Equipo superior.</span>
                  <span>Los marcadores de equipos nuevos se ven en verde y su icono en el árbol en naranja mientras dure la construcción.</span>
                </div>
              </div>
            </li>
            <li className="lv-fase">
              <span className="lv-num">06</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="ofi">Oficina</span><span className="cli">Con tu equipo</span></div>
                <h3>Conciliación</h3>
                <p>Revisamos contigo los no encontrados, los comentarios de campo y los pendientes. Cada caso termina en una decisión con su resolución escrita: se da de baja, cambió de tag, está en otra UT o queda por revisar en el próximo paro.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Queda registrado</span>
                  <span>Comentarios de campo marcados como revisados. Pendientes como <b>Completado</b> o <b>Descartado</b>, con su resolución.</span>
                </div>
              </div>
            </li>
            <li className="lv-fase cierre-f">
              <span className="lv-num">07</span>
              <div className="lv-fase-txt">
                <div className="lv-quien"><span className="cli">Con tu equipo</span></div>
                <h3>Cierre y paso a producción</h3>
                <p>Con el levantamiento validado, la planta pasa a producción. Se guarda el registro de cierre, otro exportable fijo. Entre el registro original y el de cierre está todo lo que cambió.</p>
              </div>
              <div className="lv-fase-vis">
                <div className="lv-queda-box">
                  <span className="t">Queda registrado</span>
                  <span>Registro <b>Paso a producción</b> con sus archivos de UTs y equipos. Los respaldos intermedios quedan en el historial.</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ── 03 App de campo ── */}
      <section className="sec" id="app">
        <div className="env lv-campo">
          <div>
            <div className="sec-cab" style={{ marginBottom: 20 }}>
              <span className="chip-sec"><i />03 · App de campo</span>
              <h2>Frente al equipo, <span className="gris">todo en una pantalla.</span></h2>
              <p>La ficha del equipo en el teléfono está pensada para usarse de pie, con guantes y sin señal. Botones grandes, nada que escribir si no hace falta.</p>
            </div>
            <ol className="lv-notas">
              <li><N n={1} /><span><b>Tag, descripción y UT.</b> Tocar la UT lleva a ese punto del árbol. Si el equipo tiene marcador, el botón DTI abre su plano.</span></li>
              <li><N n={2} /><span><b>Notas de voz.</b> Se graba lo que se ve: &quot;el sello gotea por el lado acople&quot;. La nota queda en el equipo, con autor y fecha.</span></li>
              <li><N n={3} /><span><b>Fotos con GPS.</b> La posición se guarda en la foto si el teléfono tiene una de menos de 2 minutos y con error de hasta 50 m. Nunca se espera al GPS para disparar.</span></li>
              <li><N n={4} /><span><b>Resultado en campo.</b> Uno de cuatro, fijo abajo. Con comentarios se usa cuando el equipo está pero algo no cuadra.</span></li>
            </ol>
          </div>
          <div className="lv-campo-vis">
            <figure className="lv-campo-foto" style={{ margin: 0 }}>
              <Image src="/sitio/campo-placa-motor.jpg" alt="Técnico fotografiando con el celular la placa de un motor eléctrico" fill sizes="(max-width: 900px) 100vw, 560px" />
              <figcaption>Foto de placa tomada desde la ficha del motor.</figcaption>
            </figure>
            <TelefonoFicha />
          </div>
        </div>
      </section>

      {/* ── 04 Plataforma ── */}
      <section className="sec suave" id="plataforma">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />04 · Lo que ves desde la oficina</span>
            <h2>El avance de campo, <span className="gris">en tu taxonomía y en vivo.</span></h2>
            <p>No esperas un informe semanal. Lo que marca la cuadrilla aparece en el árbol de la plataforma en cuanto el teléfono tiene señal.</p>
          </div>
          <VentanaRecorrido />
          <div className="lv-pie-notas">
            <div><N n={1} /><span><b>UT revisada</b>Check verde en el árbol mientras la planta está en construcción.</span></div>
            <div><N n={2} /><span><b>Marcador de estado</b>Verde, azul, rojo o gris al lado de cada equipo, con el resultado del recorrido actual.</span></div>
            <div><N n={3} /><span><b>Equipo nuevo</b>Icono naranja: se creó en este ciclo de construcción.</span></div>
            <div><N n={4} /><span><b>En la ficha</b>Resultado en campo, estado de placa, comentarios y notas de voz.</span></div>
          </div>
        </div>
      </section>

      {/* ── 05 Conciliación: avance + pendientes ── */}
      <section className="sec" id="conciliacion">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />05 · Avance y conciliación</span>
            <h2>Cómo se mide el avance <span className="gris">y qué pasa con lo que no cuadra.</span></h2>
          </div>
          <div className="lv-avance">
            <div className="lv-formula">
              <h3 style={{ fontSize: 20 }}>La fórmula</h3>
              <div className="f">avance = revisados / (total − no requieren)</div>
              <p><b>Revisados</b> son los equipos con resultado Encontrado, Con comentarios o No encontrado. Un no encontrado sí cuenta como revisado: alguien fue y lo buscó.</p>
              <p><b>No requieren confirmación</b> salen del cálculo. Son equipos que no tiene sentido buscar uno por uno, como un polipasto portátil o un instrumento que vive en el taller.</p>
              <p>El avance de una UT incluye el de sus sub-UTs, igual que los totales del árbol.</p>
            </div>
            <div className="lv-ej">
              <div className="lv-ej-cab"><b>Ejemplo resuelto · CN-200 Separación</b><span>212 equipos en el registro original</span></div>
              <div className="lv-barra" role="img" aria-label="Barra de avance: 171 encontrados, 14 con comentarios, 9 no encontrados, 6 sin revisar">
                <span style={{ width: "85.5%", background: CAMPO.encontrado.color }}>171</span>
                <span style={{ width: "7%", background: CAMPO.con_comentarios.color }}>14</span>
                <span style={{ width: "4.5%", background: CAMPO.no_encontrado.color }}>9</span>
                <span style={{ width: "3%", background: "#e5e7eb", color: "#6b7280" }} />
              </div>
              <table className="lv-tabla-ej">
                <tbody>
                  <tr><td><i style={{ background: CAMPO.encontrado.color }} />Encontrados</td><td>171</td></tr>
                  <tr><td><i style={{ background: CAMPO.con_comentarios.color }} />Con comentarios</td><td>14</td></tr>
                  <tr><td><i style={{ background: CAMPO.no_encontrado.color }} />No encontrados</td><td>9</td></tr>
                  <tr><td><i style={{ background: "#e5e7eb" }} />Sin revisar</td><td>6</td></tr>
                  <tr className="fuera"><td><i style={{ background: "#6b7280" }} />No requieren confirmación (fuera del cálculo)</td><td>12</td></tr>
                  <tr className="res"><td>Avance = (171 + 14 + 9) / (212 − 12) = 194 / 200</td><td>97 %</td></tr>
                </tbody>
              </table>
              <p className="lv-res">Faltan <b>6 equipos</b>. Y hay <b>23 casos para conciliar</b>: 14 comentarios por revisar y 9 no encontrados. Esa es la lista de trabajo de la fase 06.</p>
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <TablaPendientes />
            <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--gris-texto)" }}>TAX → Recorrido → Pendientes. Se crean en la web o en el teléfono. Las fotos y notas de voz se agregan desde la app; la resolución y el estado se cierran en la web.</p>
          </div>

          <div className="lv-reglas">
            <div className="lv-regla">
              <h3><span className="dot" style={{ background: CAMPO.no_encontrado.color }} />No encontrado no es borrar</h3>
              <p>El equipo sigue en el registro con su marca. Se decide contigo si se da de baja, si cambió de tag o si está en otra UT. Lo que estaba en el registro original sigue en ese archivo pase lo que pase.</p>
            </div>
            <div className="lv-regla">
              <h3><span className="dot" style={{ background: CAMPO.con_comentarios.color }} />Con comentarios se valida en la web</h3>
              <p>Alguien en oficina lee el comentario de campo, hace el ajuste en la ficha y lo marca como revisado. Así se distingue lo pendiente de lo ya atendido.</p>
            </div>
            <div className="lv-regla">
              <h3><span className="dot" style={{ background: "#d97706" }} />Tags repetidos no siempre son duplicados</h3>
              <p>Una válvula y su actuador pueden llevar el mismo tag en el DTI. Se resuelven como equipo y subequipo. ReliaPlant identifica cada equipo por su id y su código, no por el tag.</p>
            </div>
            <div className="lv-regla">
              <h3><span className="dot" style={{ background: "#6b7280" }} />Código provisional hasta el definitivo</h3>
              <p>Los equipos nuevos entran con un código provisional. Cuando tu CMMS les asigna código, se reemplaza en la ficha. La lista de nuevos sale aparte para que tu equipo de SAP los dé de alta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Modo construcción ── */}
      <section className="sec suave" id="construccion">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />06 · Modo construcción</span>
            <h2>Lo que había, lo que quedó <span className="gris">y cada punto intermedio.</span></h2>
            <p>Mientras dura el levantamiento, la planta está en construcción. Es el mismo modo que se usa en ampliaciones y paros mayores: separa lo original de lo nuevo y guarda una foto de la planta en cada momento importante.</p>
          </div>
          <div className="lv-mc-grid">
            <PanelConstruccion />
            <div className="lv-foto-ciclo">
              <div className="lv-snap">
                <span className="k ori">Registro original · al iniciar</span>
                <span className="v">94 UTs · 1.284 equipos</span>
                <p>Todo lo que existe en ese momento es original. Lo que se cree después, nuevo.</p>
              </div>
              <div className="lv-entre">
                <span><b>Respaldos</b> antes de cada carga masiva grande o al terminar un área.</span>
                <span><b>Respaldo automático</b> cuando el asistente de ReliaPlant aplica cambios.</span>
                <span>Equipos creados con marca de nuevo y el id del ciclo.</span>
              </div>
              <div className="lv-snap">
                <span className="k cie">Paso a producción · al cerrar</span>
                <span className="v">98 UTs · 1.297 equipos</span>
                <p>Exportable fijo de cómo quedó la planta. Si más adelante se abre otra construcción, empieza un ciclo nuevo con su propio registro original.</p>
              </div>
              <p style={{ fontSize: 13.5, color: "var(--gris-texto)" }}>Cada registro guarda dos archivos que no cambian nunca: UTs y equipos. El registro original de la construcción en curso no se puede eliminar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Qué se levanta ── */}
      <section className="sec" id="que-se-levanta">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />07 · Qué se levanta</span>
            <h2>El método, <span className="gris">dato por dato.</span></h2>
            <p>Antes de bajar a campo se fija qué se captura de cada equipo. El mínimo es igual para todos; los datos técnicos dependen de la clase, siguiendo la lógica de ISO 14224.</p>
          </div>
          <div className="lv-placa-grid">
            <div>
              <figure className="lv-placa" style={{ margin: 0 }}>
                <Image src="/sitio/equipo/placa.jpg" alt="Placa de una bomba centrífuga con modelo, serie, capacidad, altura, rpm y potencia" fill sizes="(max-width: 900px) 100vw, 460px" />
                <N n={1} style={{ position: "absolute", left: "60%", top: "33%" }} />
                <N n={2} style={{ position: "absolute", left: "60%", top: "41.5%" }} />
                <N n={3} style={{ position: "absolute", left: "60%", top: "49%" }} />
                <N n={4} style={{ position: "absolute", left: "60%", top: "56.5%" }} />
              </figure>
              <ol className="lv-placa-ley">
                <li><N n={1} />Modelo y serie</li>
                <li><N n={2} />Caudal y altura</li>
                <li><N n={3} />RPM y potencia</li>
                <li><N n={4} />Eficiencia, fecha y fabricante</li>
              </ol>
              <div className="lv-placa-est">
                {[["Legible", "#16a34a"], ["No legible", "#dc2626"], ["Inaccesible", "#2563eb"], ["Sin placa", "#6b7280"]].map(([t, c]) => (
                  <span key={t} className="lv-chip-c" style={{ color: c, borderColor: c, fontSize: 12.5, padding: "3px 10px" }}><i style={{ background: c }} />{t}</span>
                ))}
              </div>
              <p style={{ marginTop: 10, fontSize: 14, color: "var(--gris-texto)" }}>Estado de placa en la ficha. Una placa inaccesible se agenda para el próximo paro; una no legible se completa con documentos del fabricante o con almacén.</p>
            </div>
            <div className="lv-clases">
              <div className="pantalla">
                <div className="scroll-x">
                  <table className="tabla-app">
                    <thead><tr><th>Clase</th><th>Ejemplo</th><th>Datos técnicos que se levantan</th></tr></thead>
                    <tbody>
                      <tr><td className="b">Todas</td><td className="mono">—</td><td className="wrap">Tag, descripción, UT, equipo superior, clase y tipo, foto general con el tag visible, foto de placa, estado de placa, resultado en campo.</td></tr>
                      <tr><td className="b">Bomba</td><td className="mono">P-211A</td><td className="wrap">Fabricante, modelo, serie, caudal, altura, rpm, potencia, tipo de sello.</td></tr>
                      <tr><td className="b">Motor eléctrico</td><td className="mono">PM-211A</td><td className="wrap">Potencia, tensión, corriente, rpm, carcasa, clase de aislamiento, protección IP.</td></tr>
                      <tr><td className="b">Válvula de control</td><td className="mono">FV-2107</td><td className="wrap">Diámetro, rating, tipo de cuerpo, actuador (como subequipo), posicionador.</td></tr>
                      <tr><td className="b">Válvula de alivio</td><td className="mono">PSV-2104</td><td className="wrap">Presión de ajuste, orificio, tamaño entrada y salida, fabricante y serie.</td></tr>
                      <tr><td className="b">Recipiente</td><td className="mono">V-210</td><td className="wrap">Presión y temperatura de diseño, material, año, número de registro.</td></tr>
                      <tr><td className="b">Instrumento</td><td className="mono">PT-212</td><td className="wrap">Rango, señal, fabricante, modelo, lazo al que pertenece.</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--gris-texto)" }}>Ejemplo de alcance. Los campos por clase se configuran para tu empresa en ReliaPlant. La jerarquía completa se explica en <a href="/servicios/taxonomia-iso-14224" style={{ color: "var(--azul)", fontWeight: 600 }}>Taxonomía ISO 14224</a>.</p>
            </div>
          </div>
          <div className="lv-criterios">
            <div><h3>Criterio de foto</h3><p>Una general con el tag visible, una de la placa de frente y sin reflejo, y una del entorno si el equipo es difícil de ubicar. La foto principal es la que se ve en la ficha.</p></div>
            <div><h3>Criterio de jerarquía</h3><p>El equipo cuelga de su UT por el id, no por el código. Motor y bomba son equipos distintos, porque ISO 14224 define límites separados para cada clase. En el árbol el motor puede colgar de la bomba, como PM-211A bajo P-211A.</p></div>
            <div><h3>Criterio de alcance</h3><p>Se define por clase qué se confirma uno por uno y qué no requiere confirmación. Así el avance mide lo que importa y no se infla con herramientas portátiles.</p></div>
          </div>
        </div>
      </section>

      {/* ── 08 Entregables ── */}
      <section className="sec suave" id="entregables">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />08 · Entregables</span>
            <h2>Lo que recibes <span className="gris">al cerrar el levantamiento.</span></h2>
          </div>
          <div className="lv-entregas">
            <div className="lv-entrega"><span className="fmt">ReliaPlant</span><h3>Taxonomía cargada</h3><p>Ubicaciones técnicas, equipos y subequipos en jerarquía, con clase, tipo, criticidad, centro de costo y datos técnicos.</p></div>
            <div className="lv-entrega"><span className="fmt">Fotos · audio</span><h3>Evidencia por equipo y por UT</h3><p>Fotos en calidad original y notas de voz ligadas a cada equipo, con autor y fecha. También las fotos y notas de cada UT.</p></div>
            <div className="lv-entrega"><span className="fmt">DTI · mapa</span><h3>Dónde está cada equipo</h3><p>Marcador en su DTI y punto en la vista satelital de la planta. Desde la ficha se llega directo a ambos.</p></div>
            <div className="lv-entrega"><span className="fmt">.xlsx</span><h3>Exportable para tu CMMS</h3><p>UTs y equipos con las columnas de tu configuración de carga, listos para SAP PM u otro sistema.</p></div>
            <div className="lv-entrega"><span className="fmt">.xlsx</span><h3>Registro original y de cierre</h3><p>Los dos archivos fijos del ciclo, más los respaldos intermedios. La comparación entre ambos es el cambio real de la planta.</p></div>
            <div className="lv-entrega"><span className="fmt">Listas</span><h3>Nuevos, no encontrados y pendientes</h3><p>Equipos nuevos con código provisional, no encontrados con su decisión y pendientes con su resolución.</p></div>
          </div>
        </div>
      </section>

      {/* ── Quién hace qué ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />El equipo</span>
            <h2>Lo hacemos por ti, <span className="gris">o lo haces tú con nuestra app.</span></h2>
            <p>El servicio es un equipo en campo y otro trabajando en remoto en paralelo. Si tienes técnicos disponibles, también puedes poner tú la cuadrilla.</p>
          </div>
          <div className="scroll-x">
            <table className="lv-matriz">
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th className="dest">Servicio ReliaPlant<small>Nosotros levantamos la planta</small></th>
                  <th>Mixto<small>Tu gente en campo, nosotros en oficina</small></th>
                  <th>Plataforma<small>Tu equipo hace todo</small></th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Jerarquía ISO 14224 y criterios de codificación</td><td className="dest q"><b>ReliaPlant</b> con tu validación</td><td className="q"><b>ReliaPlant</b> con tu validación</td><td className="q">Tu equipo</td></tr>
                <tr><td>Carga de lo existente y registro original</td><td className="dest q"><b>ReliaPlant</b></td><td className="q"><b>ReliaPlant</b></td><td className="q">Tu equipo, con la carga masiva</td></tr>
                <tr><td>Recorrido en campo, fotos, placas y audio</td><td className="dest q"><b>Cuadrilla ReliaPlant</b></td><td className="q">Tus técnicos con la app</td><td className="q">Tus técnicos con la app</td></tr>
                <tr><td>Marcadores en DTI, mapa y datos técnicos</td><td className="dest q"><b>Oficina ReliaPlant</b></td><td className="q"><b>Oficina ReliaPlant</b></td><td className="q">Tu equipo</td></tr>
                <tr><td>Conciliación de no encontrados y pendientes</td><td className="dest q"><b>Juntos</b></td><td className="q"><b>Juntos</b></td><td className="q">Tu equipo</td></tr>
                <tr><td>Exportable para el CMMS y cierre</td><td className="dest q"><b>ReliaPlant</b></td><td className="q"><b>ReliaPlant</b></td><td className="q">Tu equipo</td></tr>
                <tr className="lv-acc">
                  <td />
                  <td className="dest">{cotizar("Cotizar el servicio")}</td>
                  <td>{cotizar("Cotizar mixto", "borde")}</td>
                  <td><a className="btn btn-borde" href={APP}>Prueba gratis</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 09 Cotizar ── */}
      <section className="sec suave" id="cotizar">
        <div className="env lv-cot">
          <div className="lv-cot-izq">
            <span className="chip-sec"><i />09 · Cómo se cotiza</span>
            <h2 style={{ fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>Con esto armamos <span className="gris">el alcance y la propuesta.</span></h2>
            <p>No hay precio por equipo de lista: depende de la planta. Mándanos lo que tengas y te devolvemos alcance, frentes de trabajo y cronograma.</p>
            {cotizar("Enviar datos para cotizar")}
          </div>
          <ol className="lv-cot-lista">
            <li><div><b>Listado actual de equipos</b><span>El export de tu CMMS o el Excel que tengan, aunque esté desordenado. Con eso estimamos cantidad de equipos y UTs.</span></div></li>
            <li><div><b>DTIs disponibles</b><span>En PDF, con su revisión. Indican cuántos equipos hay que ubicar en plano.</span></div></li>
            <li><div><b>Áreas y alcance</b><span>Qué áreas entran, qué clases de equipo se confirman y qué datos técnicos quieres por clase.</span></div></li>
            <li><div><b>Condiciones de acceso</b><span>Permisos de trabajo, inducción de seguridad, áreas clasificadas, trabajo en alturas y horarios.</span></div></li>
            <li><div><b>Planta en operación o en paro</b><span>Cambia qué placas se pueden ver y cuántos frentes pueden trabajar a la vez.</span></div></li>
            <li><div><b>Ubicación y CMMS destino</b><span>Ciudad de la planta y sistema donde se cargará el resultado (SAP PM, Maximo u otro).</span></div></li>
          </ol>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec">
        <div className="env lv-faq-grid">
          <div className="sec-cab" style={{ marginBottom: 0 }}><h2>Preguntas frecuentes</h2></div>
          <div className="lv-faq">
            {FAQ.map((f) => (
              <details key={f.p}><summary>{f.p}</summary><p>{f.r}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Siguiente paso + cierre ── */}
      <section className="cierre">
        <div className="env">
          <div className="lv-sig">
            <a className="princ" href="/producto/taxonomia"><span>Siguiente paso del ciclo</span><b>Registro de activos en la plataforma →</b></a>
            <a href="/servicios/taxonomia-iso-14224"><span>Servicio relacionado</span><b>Taxonomía ISO 14224 →</b></a>
            <a href="/producto/rcm"><span>Con la taxonomía lista</span><b>Análisis RCM →</b></a>
          </div>
          <div className="cierre-caja">
            <div>
              <h2>Cuéntanos qué planta hay que recorrer. <span className="gris">Te proponemos el alcance por áreas.</span></h2>
              <p>Con un export de equipos o un DTI de muestra armamos la propuesta. En la demo ves cómo se vería tu recorrido en ReliaPlant, con tus tags y tus ubicaciones técnicas.</p>
            </div>
            <div className="ctas">
              {cotizar("Solicita una demo", "white")}
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

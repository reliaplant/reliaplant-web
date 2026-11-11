import type { Metadata } from "next";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { VENTANA, MAPA, CHAT } from "@/components/home/piezas";
import { PlantillaExcel, VistaPrevia, Resultado, BancoDTI, Catalogo } from "./Pantallas";
import "@/app/home.css";
import "./estilos.css";

export const metadata: Metadata = {
  title: { absolute: "Registro de activos y taxonomía ISO 14224 | ReliaPlant" },
  description:
    "Software de registro de activos con jerarquía ISO 14224: carga desde Excel con vista previa, DTIs con marcadores, mapa satelital y modo construcción.",
  alternates: { canonical: "https://reliaplant.com/producto/taxonomia" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/taxonomia";

function Pieza({ html }: { html: string }) {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}

// Reglas reales del parser (services/taxonomy/analyzeUpload.ts y guiaCampos.ts).
const REGLAS: { si: string; pasa: string; tono: "alto" | "error" | "info" }[] = [
  { si: "Falta una columna configurada, viene repetida o quedó una fila \"✎ ejemplo\"", pasa: "No se carga nada. El mensaje dice qué columna falta.", tono: "alto" },
  { si: "El CÓDIGO es KEY y una fila viene sin código", pasa: "Se bloquea toda la carga. Nunca se inventa un código para un equipo existente.", tono: "alto" },
  { si: "Una celda vacía en una columna del archivo", pasa: "Se borra ese dato del equipo. En la vista previa lo ves tachado antes de confirmar.", tono: "info" },
  { si: "El mismo tag o código KEY aparece dos veces", pasa: "Error en todas las filas repetidas, con sus números de fila.", tono: "error" },
  { si: "La UT o el equipo superior no existen", pasa: "Error en esa fila. El padre puede venir en el mismo archivo.", tono: "error" },
  { si: "A es padre de B y B es padre de A", pasa: "Error por dependencia circular. Se detecta por identidad, no por tag.", tono: "error" },
  { si: "La criticidad no coincide con tus etiquetas", pasa: "Se ignora la criticidad. El resto de la fila sí se carga.", tono: "info" },
  { si: "Viene el CÓDIGO DE TIPO del catálogo", pasa: "Sobrescribe categoría, clase y tipo con los del catálogo.", tono: "info" },
  { si: "Equipos de la planta que no vienen en el archivo", pasa: "Te los lista. Los conservas o los eliminas en tres pasos, escribiendo ELIMINAR.", tono: "info" },
];

const FAQ: { p: string; r: string }[] = [
  {
    p: "¿Qué es un software de registro de activos?",
    r: "Es la base donde vive el listado maestro de equipos de una planta, con su jerarquía de ubicaciones técnicas, su clase, su criticidad y sus documentos. A diferencia de una hoja de cálculo, valida lo que entra: no deja un equipo colgado de una ubicación que no existe, detecta tags repetidos y guarda quién cargó qué. En ReliaPlant esa base es la misma que usan el RCM, los planes de mantenimiento y las órdenes de trabajo.",
  },
  {
    p: "¿Qué pasa si una celda viene vacía en la carga masiva?",
    r: "En ReliaPlant una celda vacía borra el dato que el equipo tenía en esa columna. No se interpreta como \"dejar igual\". La única excepción es la columna que usas como llave. Por eso la vista previa muestra el valor anterior tachado antes de confirmar: si no querías borrarlo, corriges el archivo y lo vuelves a subir.",
  },
  {
    p: "¿Cómo se registran los equipos nuevos que aparecen en un levantamiento?",
    r: "Se pone la planta en modo construcción. Desde ese momento, cada equipo que se crea queda marcado como nuevo: icono naranja en el árbol y marcador verde en el DTI. Si el código no forma parte de la llave, los equipos sin código reciben uno provisional (N-00001, N-00002…) que después reemplazas por el del CMMS. Si la llave es el código, ReliaPlant no inventa códigos y la fila sin código detiene la carga.",
  },
  {
    p: "¿Cómo se arma el tag de un equipo industrial?",
    r: "No hay una sola regla, pero la convención más usada combina letras de función con un número de área y de lazo. En instrumentos se usan las letras de ISA 5.1: PT es transmisor de presión, LV válvula de control de nivel, PSV válvula de seguridad. En equipos mayores, una letra por tipo (P bomba, K compresor, V recipiente, E intercambiador), el número de servicio y una letra para equipos en paralelo, como P-211A y P-211B. ReliaPlant acepta letras, números, guion, comillas, diagonal y punto, así que también sirven tags de líneas como 6\"-GN-031.",
  },
  {
    p: "¿Qué es un registro de activos y qué datos debe tener?",
    r: "Es el listado maestro de los equipos de una planta con su identificación y su lugar en la jerarquía. Lo mínimo es tag, código del CMMS, descripción, ubicación técnica, equipo superior, clase y tipo, y criticidad. Después se suman datos de placa (fabricante, modelo, serie), datos técnicos de la clase, fotos y el DTI donde aparece. Sin esa base, el RCM, los planes de mantenimiento y las órdenes de trabajo quedan cojos.",
  },
  {
    p: "¿Cómo paso mi listado de equipos de Excel a un software de mantenimiento?",
    r: "Primero depura: un tag por equipo, ubicaciones técnicas que existan y padres que apunten a equipos reales. Luego define la llave, tag o código del CMMS, y respétala en todo el archivo. En ReliaPlant configuras la plantilla con los nombres de columna de tu archivo, subes el Excel y revisas la vista previa fila por fila antes de que se escriba nada. Recuerda que una celda vacía borra el dato existente.",
  },
  {
    p: "¿Qué es un DTI y por qué ligarlo a cada equipo?",
    r: "El DTI (diagrama de tuberías e instrumentación, P&ID en inglés) muestra equipos, líneas, válvulas e instrumentos con sus tags y cómo se conectan. Ligar cada equipo a su marcador en el DTI permite ver de un clic qué tiene aguas arriba y aguas abajo, algo que se usa en el RCM, en un RCA y al preparar un aislamiento. En ReliaPlant el marcador se pone en la página exacta del plano y se puede cargar también desde Excel con su posición.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
  };

  return (
    <div className="rph lp-tax">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada ── */}
      <section className="lp-hero">
        <div className="env lp-hero-grid">
          <div className="lp-hero-txt">
            <span className="chip-sec"><i />Producto · Registro de activos</span>
            <h1>Tu registro de activos con taxonomía ISO 14224. <span className="gris">Cada equipo con su tag, su lugar y su plano.</span></h1>
            <p className="lp-bajada">
              Ubicaciones técnicas y equipos en jerarquía, un catálogo de 691 tipos de equipo, carga masiva desde Excel con vista previa, DTIs con cada equipo marcado y el mapa satelital de la planta. Es la base sobre la que trabajan el RCM, los planes y las órdenes de trabajo.
            </p>
            <div className="lp-ctas">
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
              <AbrirFormContacto buttonText="Solicita una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
            </div>
          </div>

          {/* Un equipo, tres vistas */}
          <figure className="lp-tag lp-vistas" aria-label="Dónde vive el equipo P-211A en ReliaPlant">
            <figcaption>Un equipo, tres vistas</figcaption>
            <div className="lp-vistas-tag">P-211A <span>Bomba de condensado · Criticidad A</span></div>
            <ol className="lp-vistas-l">
              <li><b>Árbol</b><span className="ruta">CN <i>›</i> CN-200 <i>›</i> CN-210 <i>›</i> <em>P-211A</em></span></li>
              <li><b>DTI</b><span className="ruta">DTI-CN-210-01 <i>·</i> página 1</span></li>
              <li><b>Mapa</b><span className="ruta">Punto dentro del área &quot;CN-200 Separación&quot;</span></li>
            </ol>
            <p className="lp-tag-pie">Es un solo registro. Si corriges el tag en la ficha, el árbol, el marcador del DTI y el punto del mapa ya muestran el nuevo.</p>
          </figure>
        </div>
      </section>

      {/* ── La pantalla principal, anotada ── */}
      <section className="lp-vitrina" aria-label="Pantalla principal del módulo de taxonomía">
        <div className="env">
          <div className="lp-anotada">
            <Pieza html={VENTANA} />
            <span className="lp-n lp-v1">1</span>
            <span className="lp-n lp-v2">2</span>
            <span className="lp-n lp-v3">3</span>
            <span className="lp-n lp-v4">4</span>
          </div>
          <ol className="lp-notas">
            <li><b>1</b><div><h3>Árbol de la planta</h3><p>Ubicaciones técnicas anidadas y, dentro, los equipos con su equipo superior. Se busca por tag, código o descripción.</p></div></li>
            <li><b>2</b><div><h3>Totales por UT</h3><p>&quot;(38 E)&quot; es el número de equipos de esa ubicación. Se ve de un vistazo dónde falta levantar.</p></div></li>
            <li><b>3</b><div><h3>Equipo nuevo</h3><p>El icono naranja marca los equipos creados durante la construcción en curso, como el PT-212.</p></div></li>
            <li><b>4</b><div><h3>Ficha del equipo</h3><p>Identificación, datos generales y datos específicos de su clase. La criticidad toma el color de tu matriz.</p></div></li>
          </ol>
        </div>
      </section>

      {/* ── ISO 14224 ── */}
      <section className="sec suave" id="arbol">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Cómo se arma el árbol</span>
            <h2>Tu jerarquía, como la usa tu planta. <span className="gris">Sin forzar niveles fijos.</span></h2>
            <p>El árbol tiene dos piezas: ubicaciones técnicas y equipos. Con esas dos cubres desde el área de proceso hasta el motor de una bomba. Estas son las reglas que lo mantienen ordenado.</p>
          </div>
          <div className="lp-arbol-reglas">
            <div><code>CN › CN-200 › CN-210</code><h3>UTs anidadas</h3><p>Una ubicación técnica puede tener otras dentro, las veces que haga falta. Área, unidad y sistema, o solo dos niveles si tu planta es chica.</p></div>
            <div><code>P-211A › PM-211A</code><h3>Equipo dentro de equipo</h3><p>El motor cuelga de su bomba con el campo equipo superior. Sigue siendo un equipo con su propia clase, su tag y su historial.</p></div>
            <div><code>UT → id interno</code><h3>Enlace por identidad</h3><p>El equipo se liga a su UT por un identificador interno, no por el texto del código. Renombrar la UT no deja equipos huérfanos.</p></div>
            <div><code>(38 E)</code><h3>Totales por UT</h3><p>Cada UT del árbol muestra cuántos equipos tiene debajo. Una UT en cero salta a la vista.</p></div>
          </div>
          <div className="lp-ut-eq">
            <div>
              <span className="lp-eti">Ubicación técnica</span>
              <h3>La función. <span className="gris">Se queda.</span></h3>
              <p>CN-210 es &quot;separar el condensado del gas de entrada&quot;. Existe aunque cambies todos los equipos que la cumplen. El historial de la función vive aquí.</p>
            </div>
            <div className="flecha" aria-hidden="true">
              <svg viewBox="0 0 60 24"><path d="M2 12h52M46 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
              <span>se instala en</span>
            </div>
            <div>
              <span className="lp-eti">Equipo</span>
              <h3>El activo físico. <span className="gris">Se cambia.</span></h3>
              <p>P-211A es una bomba Goulds con número de serie. Si sale a taller y entra la de repuesto, la UT no cambia y su historial tampoco.</p>
            </div>
          </div>
          <p className="lp-iso-link">¿Cómo caen los 9 niveles de ISO 14224 en este árbol? Lo explicamos nivel por nivel en el <a href="/servicios/taxonomia-iso-14224">servicio de taxonomía ISO 14224 →</a></p>
        </div>
      </section>

      {/* ── Catálogo y datos técnicos ── */}
      <section className="sec" id="catalogo">
        <div className="env">
          <div className="lp-dos">
            <div className="sec-cab" style={{ marginBottom: 0 }}>
              <span className="chip-sec"><i />Clase y tipo</span>
              <h2>691 tipos de equipo, <span className="gris">cada uno con su código.</span></h2>
              <p>El catálogo sigue la lógica de clases de ISO 14224: 10 categorías, 97 clases y 691 tipos. Cada tipo tiene un código de cuatro letras: PUCE es bomba centrífuga y CORE compresor reciprocante. Si la plantilla trae el código, la carga llena categoría, clase y tipo sola.</p>
              <ul className="lista">
                <li>383 tipos principales y 308 extendidos para clases especiales.</li>
                <li>Tu empresa oculta los tipos que no usa y agrega los propios.</li>
                <li>Cada clase tiene sus datos técnicos: numérico con unidad, texto, selección o sí/no.</li>
              </ul>
            </div>
            <figure className="lp-cat-fig">
              <Catalogo />
              <figcaption>Extracto del catálogo. El código es único y es lo que se escribe en la columna CÓDIGO DE TIPO.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Carga masiva ── */}
      <section className="sec suave" id="carga-masiva">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Carga masiva desde Excel</span>
            <h2>Mil equipos en una carga. <span className="gris">Nada se escribe sin que lo veas.</span></h2>
            <p>La carga trabaja en dos tiempos: primero analiza el archivo contra lo que ya hay en la planta, sin tocar nada. Solo cuando confirmas, escribe. Funciona igual para ubicaciones técnicas y para equipos.</p>
          </div>

          <ol className="lp-recorrido">
            <li>
              <div className="lp-rec-txt">
                <span className="lp-paso-n">01</span>
                <h3>La plantilla habla tu idioma</h3>
                <p>Configuras, por planta, qué columnas trae tu archivo y cómo se llaman. Si tu gente dice CÓDIGO SAP, la columna se llama CÓDIGO SAP. Eliges la llave: tag, código o ambos.</p>
                <p className="gris-t">La plantilla sale con una segunda hoja, Guía de campos, que explica qué escribir en cada columna y qué pasa si la dejas vacía.</p>
              </div>
              <PlantillaExcel />
            </li>
            <li>
              <div className="lp-rec-txt">
                <span className="lp-paso-n">02</span>
                <h3>La vista previa clasifica cada fila</h3>
                <p>Nuevo, actualizar, sin cambio, conflicto o error. En las filas que se actualizan ves el valor nuevo arriba y el anterior tachado. Los errores traen el motivo exacto y se descargan en un Excel para corregir.</p>
                <p className="gris-t">En la fila 4 el fabricante viene vacío: Fisher se va a borrar. Lo ves antes, no después.</p>
              </div>
              <VistaPrevia />
            </li>
            <li>
              <div className="lp-rec-txt">
                <span className="lp-paso-n">03</span>
                <h3>Confirmas y queda registrado</h3>
                <p>La carga escribe por lotes y te muestra lo creado, actualizado, omitido y con error. Si la planta está en construcción y el código no es la llave, los equipos nuevos sin código reciben uno automático.</p>
                <p className="gris-t">Después descargas el exportable con las mismas columnas de tu plantilla para llevarlo a SAP PM u otro CMMS.</p>
              </div>
              <Resultado />
            </li>
          </ol>

          <div className="lp-reglas">
            <div className="lp-reglas-cab">
              <h3>Las reglas de la carga, sin letra chica</h3>
              <p>Son las que aplica el analizador. Las escribimos aquí porque son las que más sorprenden la primera vez.</p>
            </div>
            <div className="scroll-x">
              <table>
                <thead><tr><th>Si en el archivo…</th><th>ReliaPlant…</th></tr></thead>
                <tbody>
                  {REGLAS.map((r) => (
                    <tr key={r.si}>
                      <td>{r.si}</td>
                      <td><span className={`lp-tono ${r.tono}`}>{r.tono === "alto" ? "Detiene" : r.tono === "error" ? "Error de fila" : "Aviso"}</span>{r.pasa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── DTIs ── */}
      <section className="sec" id="dti">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />DTIs con marcadores</span>
            <h2>Del tag en la ficha <span className="gris">al punto exacto del plano.</span></h2>
            <p>Subes el DTI en PDF y lo abres en el banco de trabajo: a la izquierda el árbol de la planta, a la derecha el plano. Eliges un equipo y haces clic donde aparece. El PDF se ve vectorial, así que el zoom no pixela los tags.</p>
          </div>
          <div className="lp-dti-grid">
            <BancoDTI />
            <ol className="lp-ley">
              <li><b>1</b><div><span className="mk-demo" />Marcador azul: equipo marcado en esta página. Relleno translúcido para que el tag del plano se siga leyendo.</div></li>
              <li><b>2</b><div><span className="mk-demo nuevo" />Verde: equipo creado durante la construcción en curso. Al pasar la planta a producción vuelve a azul.</div></li>
              <li><b>3</b><div><span className="mk-demo com" />Punto rojo: el equipo tiene comentarios. Útil para dejar pendientes del levantamiento.</div></li>
              <li><b>4</b><div>Al pasar el cursor: tag, descripción y código.</div></li>
              <li className="arbol"><div>En el árbol, el punto lleno dice que el equipo está marcado en este DTI, el claro que está en otro y el vacío que no tiene marcador. Clic en uno marcado y el plano te lleva a él.</div></li>
            </ol>
          </div>
          <div className="lp-dti-extra">
            <div><h3>Ida y vuelta</h3><p>Desde la ficha del equipo abres su DTI con el marcador. Desde el marcador vuelves a la información del activo.</p></div>
            <div><h3>Marcadores por Excel</h3><p>Las columnas CÓDIGO DTI, PÁGINA DTI, POSICIÓN X y POSICIÓN Y (en % de la hoja, de 0 a 100) cargan cientos de marcadores de una vez.</p></div>
            <div><h3>Varios DTIs por equipo</h3><p>Un equipo puede estar asociado a varios planos. Los códigos van separados por coma en la misma celda.</p></div>
          </div>
        </div>
      </section>

      {/* ── Map view ── */}
      <section className="sec suave" id="mapa">
        <div className="env lp-mapa">
          <div className="sec-cab" style={{ marginBottom: 0 }}>
            <span className="chip-sec"><i />Map view</span>
            <h2>La planta vista desde arriba, <span className="gris">con sus áreas y sus equipos.</span></h2>
            <p>Sobre la imagen satelital dibujas las áreas de la planta con un clic en cada esquina. Cada área se liga a su ubicación técnica, o lleva un nombre propio si no tiene UT, como &quot;Zona de tanques&quot;.</p>
            <ul className="lista">
              <li>Vista inicial guardada por planta, girada para que coincida con tu plano de arreglo general.</li>
              <li>Buscador de equipo o UT por tag, código o descripción que te lleva al punto.</li>
              <li>La ficha de cada equipo muestra su ubicación en el mapa, o &quot;Sin definir&quot; si aún no la tiene.</li>
              <li>Capas de áreas y de equipos que se prenden y apagan.</li>
            </ul>
          </div>
          <Pieza html={MAPA} />
        </div>
      </section>

      {/* ── Modo construcción ── */}
      <section className="sec" id="modo-construccion">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Modo construcción</span>
            <h2>Un levantamiento tiene principio y fin. <span className="gris">ReliaPlant guarda los dos.</span></h2>
            <p>Cuando vas a levantar o ampliar la taxonomía a partir de la información del cliente, pasas la planta a construcción. Todo lo que existe en ese momento queda como original; todo lo que se cree después, como nuevo. Así se ve un proyecto típico.</p>
          </div>
          <ol className="lp-linea">
            <li>
              <span className="cuando">Semana 0</span>
              <h3>Iniciar construcción</h3>
              <p>Se guarda el registro original: el Excel de UTs y el de equipos tal como estaban. En la cabecera aparece EN CONSTRUCCIÓN.</p>
            </li>
            <li>
              <span className="cuando">Semanas 1 a 5</span>
              <h3>Levantamiento en campo</h3>
              <p>Los equipos que se crean salen en naranja en el árbol y en verde en los DTIs. Los que no traen código reciben N-00001, N-00002… sin repetirse aunque dos personas carguen a la vez.</p>
            </li>
            <li>
              <span className="cuando">Semana 3</span>
              <h3>Respaldo antes de la carga grande</h3>
              <p>Un punto de control que puedes descargar o recuperar. El asistente de IA hace uno automático antes de aplicar sus cambios y guarda los tres más recientes.</p>
            </li>
            <li>
              <span className="cuando">Semana 6</span>
              <h3>Pasar a producción</h3>
              <p>Se guarda el registro de cierre. Las marcas de nuevo dejan de verse, pero el dato queda en cada equipo como historial del ciclo.</p>
            </li>
          </ol>
          <div className="lp-mc-solo">
            <div className="lp-mc-notas">
              <h3>Lo que protege</h3>
              <ul className="lista">
                <li>Las transiciones validan el estado actual: dos personas no pueden iniciar o cerrar la misma construcción a la vez.</li>
                <li>El registro original de la construcción en curso no se puede borrar.</li>
                <li>Borrar cualquier otro registro pide tres confirmaciones.</li>
                <li>Si se usa el código del CMMS como llave, nunca se generan códigos automáticos.</li>
              </ul>
              <p className="lp-iso-link">El panel de registros y la app de campo, paso a paso, en el <a href="/servicios/levantamiento-de-activos">servicio de levantamiento de activos →</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IA por MCP ── */}
      <section className="sec suave" id="ia">
        <div className="env ia-grid">
          <div className="sec-cab" style={{ marginBottom: 0 }}>
            <span className="chip-sec"><i />IA conectada por MCP</span>
            <h2>Pídele el cambio al asistente. <span className="gris">Tú lo apruebas.</span></h2>
            <p>ReliaPlant se conecta con Claude y otros asistentes compatibles con MCP. El asistente busca equipos, lee DTIs y fotos de placa, y arma una propuesta de cambios. Nada se guarda hasta que la apruebas, y se puede deshacer.</p>
            <ul className="lista">
              <li>Mover equipos de UT, cambiar criticidad o completar datos de placa en lote.</li>
              <li>Ubicar equipos en el mapa y dibujar áreas.</li>
              <li>Subir fotos, DTIs y documentos al equipo correcto.</li>
            </ul>
          </div>
          <Pieza html={CHAT} />
        </div>
      </section>

      {/* ── Hazlo tú o lo hacemos por ti ── */}
      <section className="sec" id="servicio">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>¿No tienes quién levante la planta? <span className="gris">Vamos nosotros.</span></h2>
          </div>
          <div className="lp-serv">
            <div className="lp-serv-tu">
              <span className="lp-eti">Con tu equipo</span>
              <h3>Tú cargas, ReliaPlant valida</h3>
              <p>Tu gente arma el registro con la plantilla, la vista previa y la app de campo. La plataforma cuida las reglas y guarda cada registro.</p>
              <ul className="lista">
                <li>Plan gratuito para empezar, sin tarjeta.</li>
                <li>Plantilla y exportable con las columnas de tu CMMS.</li>
                <li>App de campo para fotos y notas sin señal.</li>
              </ul>
              <a className="btn btn-borde" href={APP}>Crear cuenta gratis</a>
            </div>
            <div className="lp-serv-nos">
              <div className="txt">
                <span className="lp-eti">Con ingenieros de ReliaPlant</span>
                <h3>Lo levantamos y te lo entregamos cargado</h3>
                <p>Recorremos la planta equipo por equipo, leemos placas, depuramos tu listado actual y te entregamos la taxonomía completa en ReliaPlant.</p>
                <ul className="lista">
                  <li>Estructura de UTs según ISO 14224, revisada con tu equipo.</li>
                  <li>Fotos de placa y datos técnicos por clase.</li>
                  <li>Equipos marcados en DTIs y en el mapa.</li>
                  <li>Archivo de carga listo para SAP PM u otro CMMS.</li>
                </ul>
                <div className="lp-serv-links">
                  <a href="/servicios/levantamiento-de-activos">Levantamiento de activos →</a>
                  <a href="/servicios/taxonomia-iso-14224">Taxonomía ISO 14224 →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec suave" id="preguntas">
        <div className="env lp-faq-env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>Registro de activos, <span className="gris">lo que más se pregunta.</span></h2>
          </div>
          <div className="lp-faq">
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
          <a className="lp-sig" href="/producto/rcm">
            <span>Siguiente paso del ciclo</span>
            <b>Con los equipos y su criticidad, analiza los críticos con RCM →</b>
          </a>
          <div className="cierre-caja">
            <div>
              <h2>Trae un DTI y tu listado de equipos. <span className="gris">En la demo los ves ligados.</span></h2>
              <p>Cargamos una muestra de tus equipos, marcamos algunos en tu plano y recorres la ficha, el árbol y el DTI con tus propios tags.</p>
            </div>
            <div className="lp-ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="primary" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

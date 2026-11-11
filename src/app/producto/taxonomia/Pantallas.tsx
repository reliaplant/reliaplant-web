// Réplicas de pantallas reales del módulo TAX de ReliaPlant (reliaplant-app).
// Cada una sale de un componente de la app, citado arriba de su función.
// Estáticas (Server Components). Estilos: app/home.css (.rph) + ./estilos.css (.lp-tax).

const TABS = ["TAX", "GMAO", "RCA", "RCM", "PM", "RBI"];
const SUB_TAX = ["Lista de Activos", "Tabla", "Map view", "DTIs", "Documentos", "Configuración"];

export function Cabecera({
  sub,
  planta,
  construccion = false,
}: {
  sub?: string;
  planta?: string;
  construccion?: boolean;
}) {
  return (
    <>
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        {planta && (
          <div className="rp-planta">
            {planta}
            {construccion && <span className="cons">EN CONSTRUCCIÓN</span>}
          </div>
        )}
        <div className="rp-tabs">
          {TABS.map((t) => (
            <span key={t} className={t === "TAX" ? "act" : undefined}>{t}</span>
          ))}
        </div>
      </div>
      {sub && (
        <div className="rp-sub">
          {SUB_TAX.map((s) => (
            <span key={s} className={s === sub ? "act" : undefined}>{s}</span>
          ))}
        </div>
      )}
    </>
  );
}

const Ok = ({ c }: { c: string }) => (
  <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill={c} />
    <path d="M4.8 8.3l2.2 2.2 4.2-4.6" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Equis = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ── Plantilla Excel que descarga la app (taxonomyUploadConfig.generateTemplate):
// fila 1 título, fila 2 encabezados de TU archivo, fila 3 REQUERIDO/KEY/opcional, fila 4+ "✎ ejemplo".
export function PlantillaExcel() {
  const cols: [string, string][] = [
    ["TAG", "REQUERIDO · KEY"],
    ["CÓDIGO SAP", "KEY"],
    ["DESCRIPCIÓN", "REQUERIDO"],
    ["UBICACIÓN TÉCNICA", "REQUERIDO"],
    ["TAG EQUIPO SUPERIOR", "opcional"],
    ["CÓDIGO DE TIPO", "opcional"],
    ["CRITICIDAD", "opcional"],
    ["CÓDIGO DTI", "opcional"],
  ];
  return (
    <div className="lp-xls" role="img" aria-label="Plantilla de carga de equipos en Excel generada por ReliaPlant">
      <div className="lp-xls-barra"><span>plantilla_equipos_reliaplant.xlsx</span><span className="lp-xls-hojas"><b>Equipos</b><i>Guía de campos</i></span></div>
      <div className="scroll-x">
        <table>
          <tbody>
            <tr className="t1"><td colSpan={cols.length}>ReliaPlant — Plantilla de Equipos · <span>Reemplaza las filas de ejemplo con tus datos y vuelve a subir el archivo</span></td></tr>
            <tr className="t2">{cols.map(([c]) => <td key={c}>{c}</td>)}</tr>
            <tr className="t3">{cols.map(([c, r]) => <td key={c} className={r.includes("KEY") ? "key" : r === "REQUERIDO" ? "req" : ""}>{r}</td>)}</tr>
            <tr className="ej"><td>✎ ejemplo · P-211A</td><td>10004512</td><td>Bomba centrífuga de condensado</td><td>CN-210</td><td>V-210</td><td>PUCE</td><td>A</td><td>DTI-CN-210-01</td></tr>
            <tr className="ej"><td>✎ ejemplo · PT-212</td><td>10004560</td><td>Transmisor de presión</td><td>CN-210</td><td>V-210</td><td></td><td>C</td><td>DTI-CN-210-01</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Vista previa de carga (app/configuracion/components/TaxonomyUploadPreview.tsx + StepIndicator.tsx)
export function VistaPrevia() {
  const pasos = ["Subir archivo", "Análisis", "Vista previa", "Resultado"];
  return (
    <div className="pantalla" role="img" aria-label="Vista previa de una carga masiva en ReliaPlant: cada fila del Excel clasificada antes de escribir">
      <Cabecera sub="Configuración" planta="Compresión Norte" />
      <div className="lp-wiz">
        <div className="lp-pasos">
          {pasos.map((p, i) => (
            <div key={p} className={`lp-paso ${i < 2 ? "hecho" : i === 2 ? "actual" : ""}`}>
              {i > 0 && <span className="lin" />}
              <span className="num">{i < 2 ? "✓" : i + 1}</span>
              <span className="et">{p}</span>
            </div>
          ))}
        </div>
        <div className="lp-wiz-cuerpo">
          <div className="lp-wiz-tit">Vista previa de carga</div>
          <div className="lp-wiz-sub">Revisa los cambios antes de ejecutarlos. Resuelve conflictos si los hay.</div>
          <div className="lp-stats">
            <div><b style={{ color: "#16a34a" }}>38</b><span>Nuevos</span></div>
            <div><b style={{ color: "#2563eb" }}>112</b><span>Actualizar</span></div>
            <div><b style={{ color: "#6b7280" }}>1.127</b><span>Sin cambio</span></div>
            <div><b style={{ color: "#6b7280" }}>0</b><span>Conflictos</span></div>
            <div><b style={{ color: "#dc2626" }}>7</b><span>Errores</span></div>
          </div>
          <div className="lp-ftabs">
            <span className="act">Todos (1.284)</span><span>Nuevos (38)</span><span>Actualizar (112)</span><span>Sin cambio (1.127)</span><span>Errores (7)</span>
          </div>
          <div className="scroll-x">
            <table className="lp-tp">
              <thead>
                <tr><th style={{ width: 34 }} /><th>Fila</th><th>TAG</th><th>CÓDIGO SAP</th><th>DESCRIPCIÓN</th><th>UBICACIÓN TÉCNICA</th><th>CRITICIDAD</th><th>FABRICANTE</th><th>Acción</th></tr>
              </thead>
              <tbody>
                <tr className="az">
                  <td className="c"><Ok c="#2563eb" /></td><td className="gr">2</td><td>P-211A</td><td>10004512</td><td>Bomba de condensado</td><td>CN-210</td>
                  <td><b>A</b><br /><s>B</s></td><td>Goulds</td><td><span className="lp-chip azul">Actualizar</span></td>
                </tr>
                <tr className="gris">
                  <td className="c">—</td><td>3</td><td>P-211B</td><td>10004513</td><td>Bomba de condensado</td><td>CN-210</td><td>A</td><td>Goulds</td><td><span className="lp-chip gris">Sin cambio</span></td>
                </tr>
                <tr className="az">
                  <td className="c"><Ok c="#2563eb" /></td><td className="gr">4</td><td>LV-210</td><td>10004520</td><td>Válvula de control</td><td>CN-210</td><td>B</td>
                  <td><b className="vacio">(vacío)</b><br /><s>Fisher</s></td><td><span className="lp-chip azul">Actualizar</span></td>
                </tr>
                <tr>
                  <td className="c"><Ok c="#16a34a" /></td><td className="gr">5</td><td>PT-213</td><td>10004561</td><td>Transmisor de presión</td><td>CN-210</td><td>C</td><td>Rosemount</td><td><span className="lp-chip verde">Nuevo</span></td>
                </tr>
                <tr className="rj">
                  <td className="c"><Equis /></td><td className="gr">7</td><td>K-301A</td><td>10003310</td><td>Compresor reciprocante</td><td>CN-399</td><td>A</td><td>Ariel</td><td><span className="lp-chip rojo">Error</span></td>
                </tr>
                <tr className="rj motivo"><td colSpan={9}>La ubicación técnica &quot;CN-399&quot; no existe en la planta</td></tr>
                <tr className="rj">
                  <td className="c"><Equis /></td><td className="gr">9</td><td>P-211A</td><td>10004874</td><td>Bomba de condensado</td><td>CN-210</td><td>A</td><td>Goulds</td><td><span className="lp-chip rojo">Error</span></td>
                </tr>
                <tr className="rj motivo"><td colSpan={9}>Duplicado: el campo &quot;TAG&quot; con valor &quot;P-211A&quot; aparece en las filas 2, 9</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Resultado de la carga (TaxonomyUploadWizard.tsx, paso "result")
export function Resultado() {
  return (
    <div className="pantalla lp-res" role="img" aria-label="Resultado de una carga masiva con códigos automáticos asignados">
      <div className="lp-res-ban"><Ok c="#16a34a" /><div><b>Carga completada exitosamente</b><span>1.284 registros procesados en 9,4 segundos</span></div></div>
      <div className="lp-res-stats">
        <div><b style={{ color: "#16a34a" }}>38</b><span>Creados</span></div>
        <div><b style={{ color: "#2563eb" }}>112</b><span>Actualizados</span></div>
        <div><b style={{ color: "#6b7280" }}>1.127</b><span>Omitidos</span></div>
        <div><b style={{ color: "#dc2626" }}>0</b><span>Errores</span></div>
      </div>
      <div className="lp-res-cod">
        Se asignaron <b>38</b> códigos automáticos (<code>N-00113</code> a <code>N-00150</code>). Descarga el exportable antes de tu próxima carga para trabajar con ellos.
      </div>
    </div>
  );
}

// ── Banco de trabajo de DTIs (app/dashboard/components/DTIMarkerWorkbench.tsx + MarcadorDTI.tsx + ArbolTaxonomia)
const icUT = (
  <svg className="ic" viewBox="0 0 16 16" fill="#2563eb" aria-hidden="true"><path d="M3 14V2h7v4h3v8H9v-3H7v3zM5 4v1.5h1.5V4zm0 3v1.5h1.5V7zm3-3v1.5h1.5V4zm0 3v1.5h1.5V7z" /></svg>
);
const icEq = (color: string) => (
  <svg className="ic" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.3" aria-hidden="true"><rect x="2.5" y="2.5" width="11" height="11" /><circle cx="8" cy="8" r="2.6" /><path d="M8 2.5v2.9M8 10.6v2.9" /></svg>
);

export function BancoDTI() {
  const filas: { tag: string; d: string; pt: "este" | "otro" | "no"; nuevo?: boolean; sel?: boolean }[] = [
    { tag: "V-210", d: "Separador horizontal", pt: "este" },
    { tag: "P-211A", d: "Bomba de condensado", pt: "este", sel: true },
    { tag: "P-211B", d: "Bomba de condensado", pt: "este", nuevo: true },
    { tag: "LV-210", d: "Válvula de control", pt: "este" },
    { tag: "LT-210", d: "Transmisor de nivel", pt: "este" },
    { tag: "PT-212", d: "Transmisor de presión", pt: "este" },
    { tag: "PSV-216", d: "Válvula de seguridad", pt: "otro" },
    { tag: "PT-213", d: "Transmisor de presión", pt: "no" },
  ];
  return (
    <div className="pantalla lp-banco" role="img" aria-label="Banco de trabajo de DTIs en ReliaPlant: árbol de equipos a la izquierda y plano con marcadores a la derecha">
      <div className="lp-banco-cab">
        <div className="tit">
          <svg viewBox="0 0 16 16" width="15" height="15" fill="#2563eb" aria-hidden="true"><path d="M8 1a5 5 0 0 0-5 5c0 3.6 5 9 5 9s5-5.4 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
          <b>Marcar activos — DTI-CN-210-01</b><span>· 7 marcados en este DTI</span>
        </div>
        <div className="ctl"><span>−</span><span className="z">100%</span><span>+</span><span>Ajustar</span><i /><span className="z">1 / 2</span><span>‹</span><span>›</span><i /><span>✕</span></div>
      </div>
      <div className="lp-banco-cuerpo">
        <aside className="lp-banco-arbol">
          <div className="rp-buscar">Buscar por tag, descripción o UT...</div>
          <div className="arb">
            <div className="fila" style={{ paddingLeft: 6 }}>
              <svg className="car abierto" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M6 4l4 4-4 4z" /></svg>
              {icUT}<span>CN-210</span><span className="d">- Separador V-210</span>
            </div>
            {filas.map((f) => (
              <div key={f.tag} className={`fila${f.sel ? " sel" : ""}`} style={{ paddingLeft: 26 }}>
                <span className={`lp-pt ${f.pt}`} />
                {icEq(f.nuevo ? "#d97706" : "#3b82f6")}
                <span>{f.tag}</span><span className="d">- {f.d}</span>
              </div>
            ))}
          </div>
        </aside>
        <div className="dti lp-banco-plano">
          <div className="dti-hoja">
            <svg viewBox="0 0 640 340" aria-hidden="true">
              <g fill="none" stroke="#111" strokeWidth="1.3">
                <rect x="8" y="8" width="624" height="324" />
                <path d="M20 110H140" /><path d="M140 110l-8-4v8z" fill="#111" />
                <rect x="150" y="80" width="200" height="64" rx="32" />
                <path d="M175 128H325" strokeDasharray="4 4" stroke="#888" />
                <path d="M250 80V44H560" />
                <path d="M400 36l14 8-14 8zM428 36l-14 8 14 8z" fill="#fff" /><path d="M414 44V28" /><rect x="407" y="18" width="14" height="10" fill="#fff" />
                <path d="M290 144V210H320" />
                <path d="M320 202l14 8-14 8zM348 202l-14 8 14 8z" fill="#fff" /><path d="M334 210V192" /><circle cx="334" cy="185" r="7" fill="#fff" />
                <path d="M348 210H400V270H420" /><path d="M400 240H470V270" />
                <circle cx="440" cy="270" r="18" fill="#fff" /><path d="M431 261l22 9-22 9z" />
                <circle cx="490" cy="270" r="18" fill="#fff" /><path d="M481 261l22 9-22 9z" />
                <path d="M458 270H472M508 270H600" />
                <path d="M215 80V64" /><circle cx="215" cy="52" r="12" fill="#fff" />
                <path d="M350 112H372" /><circle cx="384" cy="112" r="12" fill="#fff" />
                <path d="M470 300h150v26H470z" /><path d="M540 300v26" />
              </g>
              <g fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#222" textAnchor="middle">
                <text x="215" y="51">PT</text><text x="215" y="60">212</text>
                <text x="384" y="111">LT</text><text x="384" y="120">210</text>
                <text x="250" y="164">V-210</text>
                <text x="70" y="102">8&quot;-PG-010</text><text x="520" y="38">6&quot;-GN-031</text>
                <text x="505" y="316" fontSize="7">DTI-CN-210-01</text><text x="580" y="316" fontSize="7">REV 4</text>
              </g>
            </svg>
            <span className="mk" style={{ left: "39%", top: "33%" }} />
            <span className="mk com" style={{ left: "33.6%", top: "15.3%" }} />
            <span className="mk" style={{ left: "64.7%", top: "12.9%" }} />
            <span className="mk" style={{ left: "52.2%", top: "61.8%" }} />
            <span className="mk" style={{ left: "60%", top: "32.9%" }} />
            <span className="mk" style={{ left: "68.75%", top: "79.4%" }} />
            <span className="mk nuevo" style={{ left: "76.6%", top: "79.4%" }} />
            <span className="lp-tip" style={{ left: "68.75%", top: "79.4%" }}>
              <b>P-211A</b><span>Bomba centrífuga de condensado</span><code>Código: 10004512</code>
            </span>
            <span className="lp-n" style={{ left: "44%", top: "37%" }}>1</span>
            <span className="lp-n" style={{ left: "82%", top: "88%" }}>2</span>
            <span className="lp-n" style={{ left: "26%", top: "8%" }}>3</span>
            <span className="lp-n" style={{ left: "83%", top: "57%" }}>4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Configuración → Datos técnicos (app/configuracion/components/DatosTecnicos.tsx)
export function DatosTecnicos() {
  const clases = ["Pumps", "Compressors", "Vessels", "Valves - Control", "Heat Exchangers", "Electric Motors"];
  const campos: [string, string, string][] = [
    ["CAUDAL NOMINAL", "Numérico", "m³/h"],
    ["ALTURA DIFERENCIAL", "Numérico", "m"],
    ["POTENCIA", "Numérico", "kW"],
    ["VELOCIDAD", "Numérico", "rpm"],
    ["TIPO DE SELLO", "Selección", "Simple · Doble · Cartucho"],
    ["PLAN API 682", "Selección", "11 · 13 · 21 · 52 · 53A"],
    ["CON VARIADOR", "Sí / No", ""],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Configuración de datos técnicos por clase de equipo en ReliaPlant">
      <Cabecera sub="Configuración" />
      <div className="lp-dt">
        <aside>
          <div className="cab">Clases de equipo</div>
          {clases.map((c, i) => <div key={c} className={i === 0 ? "act" : undefined}>{c}</div>)}
        </aside>
        <div className="scroll-x">
          <table className="tabla-app lp-dt-t">
            <thead><tr><th>Campo</th><th>Tipo</th><th>Unidad</th><th className="c">Acciones</th></tr></thead>
            <tbody>
              {campos.map(([c, t, u]) => (
                <tr key={c}><td className="b">{c}</td><td>{t}</td><td className={t === "Selección" ? "op" : "mono"}>{u}</td><td className="c ac">Editar · Eliminar</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Catálogo maestro (services/general/catalogoMaestro.ts: 691 tipos · 97 clases · 10 categorías)
export function Catalogo() {
  const filas: [string, string, string, string, string][] = [
    ["Rotating", "Pumps", "Centrifugal", "PUCE", "Principal"],
    ["Rotating", "Pumps", "Diaphragm - Metering / Dosing", "PUDM", "Extendido"],
    ["Rotating", "Compressors", "Reciprocating", "CORE", "Principal"],
    ["Rotating", "Compressors", "Screw", "COSC", "Principal"],
    ["Control", "Valves - Control", "Globe Valve", "VCGL", "Principal"],
    ["Control", "Valves - Actuators", "Valve Actuator - Control", "VTAC", "Principal"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Extracto del catálogo de tipos de equipo de ReliaPlant con su código de cuatro letras">
      <div className="lp-cat-cab"><b>Catálogo de tipos de equipo</b><span>691 tipos · 97 clases · 10 categorías</span></div>
      <div className="scroll-x">
        <table className="tabla-app lp-cat-t">
          <thead><tr><th>Categoría</th><th>Clase</th><th>Tipo</th><th className="c">Código</th><th className="c">Alcance</th></tr></thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f[3]}><td>{f[0]}</td><td>{f[1]}</td><td>{f[2]}</td><td className="c mono b">{f[3]}</td><td className="c"><span className={`lp-chip ${f[4] === "Principal" ? "azul" : "gris"}`}>{f[4]}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Configuración → Modo construcción (app/configuracion/components/ModoConstruccionPanel.tsx)
const DESCARGA = (
  <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" aria-hidden="true"><path d="M7.3 1h1.4v8.2l2.8-2.8 1 1L8 11.9 3.5 7.4l1-1 2.8 2.8zM2 13h12v1.5H2z" /></svg>
);
export function Registros() {
  const filas: { t: string; cl: string; f: string; por: string; d: string; ut: string; eq: string; bloq?: boolean }[] = [
    { t: "Respaldo automático", cl: "auto", f: "14 oct 2026, 16:42", por: "mrondon@gasdelnorte.com", d: "Antes de aplicar la propuesta #184 del asistente.", ut: "64", eq: "1.251" },
    { t: "Respaldo", cl: "resp", f: "2 oct 2026, 09:15", por: "mrondon@gasdelnorte.com", d: "Antes de la carga masiva del área norte.", ut: "64", eq: "1.247" },
    { t: "Registro original", cl: "orig", f: "15 sept 2026, 08:03", por: "mrondon@gasdelnorte.com", d: "Registro SAP entregado por el cliente el 12/09, versión 3.", ut: "58", eq: "1.102", bloq: true },
  ];
  return (
    <div className="pantalla" role="img" aria-label="Panel de modo construcción con los registros de la planta Compresión Norte">
      <Cabecera planta="Compresión Norte" construccion sub="Configuración" />
      <div className="lp-mc">
        <div className="lp-mc-cab">
          <div><b>Modo construcción</b><span className="lp-estado"><i />En construcción</span></div>
          <div className="bt"><span className="b2">Crear respaldo</span><span className="b1">Pasar a producción</span></div>
        </div>
        <div className="scroll-x">
          <table className="tabla-app lp-mc-t">
            <thead><tr><th>Tipo</th><th>Fecha</th><th>Registrado por</th><th>Descripción</th><th>UTs</th><th>Equipos</th><th /></tr></thead>
            <tbody>
              {filas.map((r) => (
                <tr key={r.t}>
                  <td><span className={`lp-reg ${r.cl}`}>{r.t}</span></td><td>{r.f}</td><td className="gr">{r.por}</td><td className="desc">{r.d}</td>
                  <td className="lnk">{DESCARGA}{r.ut}</td><td className="lnk">{DESCARGA}{r.eq}</td>
                  <td className={`c bote${r.bloq ? " off" : ""}`}><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 9h5.8l.6-9M7 7v4.5M9 7v4.5" /></svg></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

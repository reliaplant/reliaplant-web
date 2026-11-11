// Réplicas de pantallas reales del módulo RBI de ReliaPlant.
// Fuente: reliaplant-app/app/dashboard/pm/components/RBITab.tsx (vista Equipos y Loops),
// CrearEditarAnalisisRBIModal.tsx (análisis por parte), CargaRBIModal.tsx (carga masiva)
// y handleGenerarPlan de RBITab.tsx (Excel "Plan RBI").
// Colores tal como en el código: efectividad A green-700, B blue-700, C amber-600, D red-700, NR gray-500;
// criticidad Muy Alta red-700, Alta orange-600, Media amber-500, Baja green-600; riesgo por celda completa.

import React from "react";

const Pin = ({ n }: { n: number }) => <i className="pin" aria-hidden="true">{n}</i>;

const Cabecera = () => (
  <div className="rp-head">
    <div className="rp-logo">RELIAPLANT</div>
    <div className="rp-tabs"><span>TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span className="act">RBI</span></div>
  </div>
);

const Ef = ({ v }: { v: "A" | "B" | "C" | "D" | "NR" }) => {
  const t = { A: "A – Highly", B: "B – Usually", C: "C – Fairly", D: "D – Poorly", NR: "N/R" }[v];
  return <td className={`c ef ef-${v.toLowerCase()}`}>{t}</td>;
};

const Lazo = ({ c, f, rs }: { c: string; f: string; rs?: number }) => (
  <td className="c nw" rowSpan={rs}><b className="lz">{c}</b><span className="sub9">{f}</span></td>
);

const Mec = ({ n, c }: { n: string; c: string }) => (
  <td className="nw"><span>{n}</span><span className="sub9 mono">{c}</span></td>
);

const Chk = ({ rs }: { rs?: number }) => <td className="c chk" rowSpan={rs}><span className="cb" /></td>;

/* ─────────────── 1. Vista Equipos ─────────────── */
export function VistaEquipos() {
  return (
    <div className="pantalla" role="img" aria-label="Pestaña RBI de ReliaPlant, vista Equipos: cada equipo con sus partes, lazos de corrosión, mecanismos de daño y efectividad de inspección">
      <Cabecera />
      <div className="barra">
        <div className="tg"><span className="on-dark">Todas</span><span>REG</span><span>LIQ</span></div>
        <i className="sep" />
        <div className="tg"><span className="on-blue">Equipos</span><span>Piping</span><span>Loops</span></div>
        <span className="cnt"><b>3</b> equipos</span>
        <span className="der"><span className="b-gris">Acciones ▾</span><span className="b-azul">+ Crear</span></span>
      </div>
      <div className="scroll-x">
        <table className="t-rbi">
          <thead>
            <tr>
              <th className="c w32"><span className="cb" /></th>
              <th className="c">Planta</th>
              <th>Asset</th>
              <th className="c">Clase / Tipo ▾</th>
              <th className="c">Riesgo</th>
              <th>Parte ▾</th>
              <th className="c">Lazo ▾</th>
              <th>Mecanismo ▾</th>
              <th className="c">Efectividad</th>
              <th className="c">Análisis</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr className="eq">
              <Chk rs={5} />
              <td className="c" rowSpan={5}><span className="pl">REG</span></td>
              <td rowSpan={5} className="nw"><b className="tagc">V-210</b><span className="sub9">Separador de entrada</span><Pin n={1} /></td>
              <td className="c g10" rowSpan={5}>VESSEL, SEPARATOR</td>
              <td className="c rk rk-medalto" rowSpan={5}>Medio-Alto<Pin n={5} /></td>
              <td className="pt" rowSpan={3}>Shell</td>
              <Lazo c="CL-02 - SVC-GH" f="Gas húmedo H₂S/CO₂" rs={3} />
              <Mec n="Internal Local Thinning" c="THI-04" />
              <Ef v="B" />
              <td className="c g10" rowSpan={5}>SSC y HIC en soldaduras del shell…</td>
              <td className="g11" rowSpan={5}>Aislado hasta la línea de nivel</td>
            </tr>
            <tr><Mec n="SSC" c="SCC-06" /><Ef v="B" /></tr>
            <tr><Mec n="CUI" c="EXT-03" /><Ef v="C" /></tr>
            <tr><td className="pt">Head Top</td><Lazo c="CL-02 - SVC-GH" f="Gas húmedo H₂S/CO₂" /><td className="nw"><span>HIC/SOHIC-H2S Cracking</span><span className="sub9 mono">SCC-07<Pin n={3} /></span></td><Ef v="C" /></tr>
            <tr><td className="pt">Bottom</td><td className="c nw"><b className="lz">CL-07 - SVC-AP</b><span className="sub9">Agua producida</span><Pin n={2} /></td><Mec n="Internal General Thinning" c="THI-02" /><Ef v="B" /></tr>

            <tr className="eq">
              <Chk rs={3} />
              <td className="c" rowSpan={3}><span className="pl">REG</span></td>
              <td rowSpan={3} className="nw"><b className="tagc">E-410C</b><span className="sub9">Enfriador de gas</span></td>
              <td className="c g10" rowSpan={3}>HEAT EXCHANGER, SHELL AND TUBE</td>
              <td className="c rk rk-medio" rowSpan={3}>Medio</td>
              <td className="pt" rowSpan={2}>Shell</td>
              <Lazo c="CL-05 - SVC-GC" f="Gas comprimido" rs={2} />
              <Mec n="Internal General Thinning" c="THI-02" />
              <Ef v="C" />
              <td className="c gris3" rowSpan={3}>–</td>
              <td className="g11" rowSpan={3}>Sin aislamiento desde 2023</td>
            </tr>
            <tr><Mec n="CUI" c="EXT-03" /><td className="c ef ef-nr">N/R<Pin n={4} /></td></tr>
            <tr><td className="pt">Tubes</td><Lazo c="CL-05 - SVC-GC" f="Gas comprimido" /><Mec n="Internal General Thinning" c="THI-02" /><Ef v="A" /></tr>

            <tr className="eq">
              <Chk rs={2} />
              <td className="c" rowSpan={2}><span className="pl">REG</span></td>
              <td rowSpan={2} className="nw"><b className="tagc">T-501</b><span className="sub9">Tanque de agua producida</span></td>
              <td className="c g10" rowSpan={2}>TANK, ATMOSPHERIC</td>
              <td className="c rk rk-bajo" rowSpan={2}>Bajo</td>
              <td className="pt">Bottom</td>
              <Lazo c="CL-07 - SVC-AP" f="Agua producida" />
              <Mec n="Bottom Corrosion" c="TANK-03" />
              <Ef v="C" />
              <td className="c gris3" rowSpan={2}>–</td>
              <td className="gris3" rowSpan={2}>–</td>
            </tr>
            <tr><td className="pt">Course</td><Lazo c="CL-07 - SVC-AP" f="Agua producida" /><Mec n="Internal Corrosion" c="TANK-01" /><Ef v="D" /></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────── 2. Vista Loops ─────────────── */
export function VistaLoops() {
  const filas = [
    ["CL-02", "SVC-GH", "Gas húmedo H₂S/CO₂"],
    ["CL-05", "SVC-GC", "Gas comprimido"],
    ["CL-07", "SVC-AP", "Agua producida"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Vista Loops de la pestaña RBI: lazos de corrosión con código, código de servicio y fluido">
      <Cabecera />
      <div className="barra">
        <div className="tg"><span className="on-dark">Todas</span><span>REG</span><span>LIQ</span></div>
        <i className="sep" />
        <span className="buscar">Buscar código, servicio, fluido...</span>
        <div className="tg"><span>Equipos</span><span>Piping</span><span className="on-blue">Loops</span></div>
        <span className="cnt"><b>3</b> loops</span>
        <span className="der ocultar-m"><span className="b-gris">Cargar Excel</span><span className="b-azul">+ Crear Loop</span></span>
      </div>
      <div className="scroll-x">
        <table className="t-rbi t-loops">
          <thead><tr><th className="c w32"><span className="cb" /></th><th className="c">Planta</th><th>Código</th><th>Cód. Servicio</th><th>Fluido</th></tr></thead>
          <tbody>
            {filas.map(([c, s, f]) => (
              <tr key={c}><Chk /><td className="c"><span className="pl">REG</span></td><td><b className="tagc">{c}</b></td><td className="g11">{s}</td><td>{f}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────── 3. Análisis por parte (modal Editar Equipo) ─────────────── */
export function ModalAnalisis() {
  return (
    <div className="pantalla modal-rbi" role="img" aria-label="Análisis RBI del separador V-210: parte Shell con tres mecanismos de daño, criticidad, frecuencia, efectividad, subgrupo y actividad de inspección">
      <div className="m-cab">
        <span className="m-tit"><span className="doc" />Editar Equipo: V-210</span>
        <span className="m-acc"><span className="b-blanco">⧉ Copiar de...<Pin n={1} /></span><span className="x">✕</span></span>
      </div>
      <div className="scroll-x">
        <div className="m-cuerpo">
          <div className="m-izq">
            <div className="m-sec">
              <h4>Equipo</h4>
              <table className="t-mod">
                <thead><tr><th>TAG *</th><th>Descripción</th><th>Tipo</th><th>Clase</th><th>Tipo de Equipo</th><th>Riesgo</th></tr></thead>
                <tbody><tr><td>V-210</td><td>Separador de entrada</td><td>Equipo</td><td>VESSEL</td><td>SEPARATOR</td><td className="c rk rk-medalto">Medio-Alto</td></tr></tbody>
              </table>
            </div>
            <div className="m-sec">
              <div className="m-fila"><h4>Partes y Mecanismos de Daño</h4><span className="mas-cl">Más de un CL<Pin n={2} /></span></div>
              <div className="parte">
                <div className="p-cab"><span className="p-n">Parte 1</span><span className="p-pr">★ Principal</span><span className="p-nom">Shell</span></div>
                <div className="p-cuerpo">
                  <table className="t-mod t-mec">
                    <thead><tr><th className="c">#</th><th>Mecanismo de Daño *</th><th className="c">Criticidad</th><th className="c">Frecuencia</th><th className="c">Efectividad</th><th>Subgrupo</th><th>Actividad de Inspección</th></tr></thead>
                    <tbody>
                      <tr>
                        <td className="c mono g9" rowSpan={2}>1</td>
                        <td rowSpan={2}><b>Internal Local Thinning</b> <span className="mono g9">THI-04</span></td>
                        <td className="c cr cr-a" rowSpan={2}>Alta</td>
                        <td className="c" rowSpan={2}>3Y</td>
                        <td className="c ef ef-b" rowSpan={2}>B – Usually</td>
                        <td className="sg"><span className="cb" />I - Intrusive</td>
                        <td className="g3">—</td>
                      </tr>
                      <tr>
                        <td className="sg on"><span className="cb on" />NI - Non Intrusive<Pin n={3} /></td>
                        <td className="act on">Componentes con y sin Cladding<br />Para el área total sospechosa:<br />&gt; 75 % cobertura de los CMLs usando escaneo ultrasónico o radiografía de perfil<span className="hr">THI-04-NI-B-3Y<Pin n={4} /></span></td>
                      </tr>
                      <tr>
                        <td className="c mono g9" rowSpan={2}>2</td>
                        <td rowSpan={2}><b>SSC</b> <span className="mono g9">SCC-06</span></td>
                        <td className="c cr cr-ma" rowSpan={2}>Muy Alta</td>
                        <td className="c" rowSpan={2}>3Y</td>
                        <td className="c ef ef-b" rowSpan={2}>B – Usually</td>
                        <td className="sg on"><span className="cb on" />I - Intrusive</td>
                        <td className="act on">Para soldaduras/área de soldadura seleccionadas:<br />&gt; 75 % WFMT/ACFM con seguimiento UT de todas las indicaciones relevantes<span className="hr">SCC-06-I-B-3Y</span></td>
                      </tr>
                      <tr><td className="sg"><span className="cb" />NI - Non Intrusive</td><td className="g3">—</td></tr>
                      <tr>
                        <td className="c mono g9">3</td>
                        <td><b>CUI</b> <span className="mono g9">EXT-03</span></td>
                        <td className="c cr cr-m">Media</td>
                        <td className="c">4Y</td>
                        <td className="c ef ef-c">C – Fairly</td>
                        <td className="sg">—</td>
                        <td className="act">Aislamiento Removido: 100 % VT externa previo a remoción de aislamiento Y remover &gt; 25 % de áreas sospechosas…<span className="hr">EXT-03-C-4Y</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="t-mod t-cl">
                    <thead><tr><th>Corrosion Loop</th><th>Cód. Servicio</th><th>Fluido</th></tr></thead>
                    <tbody><tr><td><b>CL-02</b></td><td>SVC-GH</td><td>Gas húmedo H₂S/CO₂</td></tr></tbody>
                  </table>
                </div>
              </div>
              <div className="parte parte-2">
                <div className="p-cab"><span className="p-n">Parte 2</span><span className="p-pr off">Principal</span><span className="p-nom">Bottom</span><span className="p-mini">1 mecanismo · CL-07</span></div>
              </div>
            </div>
          </div>
          <aside className="m-der">
            <div><h4>Planta</h4><span className="pl">REG</span></div>
            <div><h4>Estatus</h4><span className="st-ok">Revisado</span></div>
            <div><h4>Análisis</h4><p>Gas de entrada con H₂S: SSC y HIC en soldaduras del shell. Bota en servicio de agua producida.</p></div>
            <div><h4>Notas</h4><p>Aislado hasta la línea de nivel.</p></div>
          </aside>
        </div>
      </div>
      <div className="m-pie"><span className="b-rojo">Eliminar equipo</span><span className="der"><span className="b-ghost">Cancelar</span><span className="b-azul">Guardar Cambios</span></span></div>
    </div>
  );
}

/* ─────────────── 4. Excel "Plan RBI" generado ─────────────── */
type FilaPlan = { pos?: number; hr?: string; desc?: string; mec?: string; ef?: "A" | "B" | "C" | "D"; fr?: string; tag: string; deq: string; parte: string; cl: string; rk: string; cr: string };
const PLAN: FilaPlan[][] = [
  [
    { pos: 1, hr: "EXT-03-C-4Y", desc: "INSP EXT BAJO AISLAM CUI", mec: "CUI", ef: "C", fr: "4Y", tag: "V-210", deq: "Separador de entrada", parte: "Shell", cl: "CL-02", rk: "Medio-Alto", cr: "Media" },
    { tag: '8"-GN-2101', deq: "Línea de entrada a V-210", parte: "Pipe", cl: "CL-02", rk: "Medio", cr: "Media" },
  ],
  [{ pos: 2, hr: "SCC-06-I-B-3Y", desc: "INSP INT SCC AGRIE X SULF INTRUS", mec: "SSC", ef: "B", fr: "3Y", tag: "V-210", deq: "Separador de entrada", parte: "Shell", cl: "CL-02", rk: "Medio-Alto", cr: "Muy Alta" }],
  [
    { pos: 3, hr: "THI-02-NI-B-5Y", desc: "INSP INT GEN THIN D PARED NO INTR", mec: "Internal General Thinning", ef: "B", fr: "5Y", tag: "V-210", deq: "Separador de entrada", parte: "Bottom", cl: "CL-07", rk: "Medio-Alto", cr: "Media" },
    { tag: '3"-AP-2107', deq: "Descarga de agua de V-210", parte: "Pipe", cl: "CL-07", rk: "Bajo", cr: "Baja" },
  ],
  [
    { pos: 4, hr: "THI-04-NI-B-3Y", desc: "INSP INT LOC THIN D PARED NO INTR", mec: "Internal Local Thinning", ef: "B", fr: "3Y", tag: "V-210", deq: "Separador de entrada", parte: "Shell", cl: "CL-02", rk: "Medio-Alto", cr: "Alta" },
    { tag: '8"-GN-2101', deq: "Línea de entrada a V-210", parte: "Pipe", cl: "CL-02", rk: "Medio", cr: "Alta" },
  ],
];
const efTxt = { A: "A – Highly", B: "B – Usually", C: "C – Fairly", D: "D – Poorly" };
const rkCls: Record<string, string> = { "Medio-Alto": "rk-medalto", Medio: "rk-medio", Bajo: "rk-bajo", Alto: "rk-alto" };
const crCls: Record<string, string> = { "Muy Alta": "cr-ma", Alta: "cr-a", Media: "cr-m", Baja: "cr-b" };

export function ExcelPlan() {
  return (
    <div className="xls" role="img" aria-label="Excel Plan_Mantenimiento_RBI.xlsx: hoja Plan RBI con posiciones agrupadas por HR Code y los equipos y partes de cada una">
      <div className="xls-barra"><span className="xls-ic">X</span>Plan_Mantenimiento_RBI.xlsx</div>
      <div className="scroll-x">
        <table>
          <thead>
            <tr>{["Pos.", "HR Code", "Descripción HR", "Mecanismo", "Efect.", "Freq.", "TAG", "Descripción Equipo", "Planta", "Parte", "CL", "Riesgo", "Criticidad"].map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {PLAN.map((grupo, gi) => (
              <React.Fragment key={gi}>
                {grupo.map((f, i) => (
                  <tr key={i}>
                    <td className="c">{f.pos ?? ""}</td>
                    <td className="hrc">{f.hr ?? ""}</td>
                    <td>{f.desc ?? ""}</td>
                    <td>{f.mec ?? ""}</td>
                    <td className={f.ef ? `c ef ef-${f.ef.toLowerCase()}` : ""}>{f.ef ? efTxt[f.ef] : ""}</td>
                    <td className="c">{f.fr ?? ""}</td>
                    <td className="mono">{f.tag}</td>
                    <td>{f.deq}</td>
                    <td className="c xpl">REG</td>
                    <td>{f.parte}</td>
                    <td>{f.cl}</td>
                    <td className={`c rk ${rkCls[f.rk]}`}>{f.rk}</td>
                    <td className={`c cr ${crCls[f.cr]}`}>{f.cr}</td>
                  </tr>
                ))}
                <tr className="sep-x"><td colSpan={13} /></tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="xls-hojas"><span className="on">Plan RBI</span><span>Detalle HR</span></div>
    </div>
  );
}

/* ─────────────── 5. Carga masiva (Cargar Excel) ─────────────── */
const CARGA: [string, string, string, string, string, string, "A" | "B" | "C" | "D", string, string][] = [
  ["V-210", "Shell", "THI-04-NI-B-3Y", "Internal Local Thinning", "Alta", "THI-04-NI", "B", "3Y", "Componentes con y sin Cladding · Para el área total sospechosa: > 75 % cobertura de los CMLs…"],
  ["V-210", "Shell", "SCC-06-I-B-3Y", "SSC", "Muy Alta", "SCC-06-I", "B", "3Y", "Para soldaduras/área de soldadura seleccionadas: > 75 % WFMT/ACFM…"],
  ["V-210", "Shell", "EXT-03-C-4Y", "CUI", "Media", "EXT-03", "C", "4Y", "Aislamiento Removido: Para el área total de superficie: 100 % VT externa…"],
  ["V-210", "Head Top", "SCC-07-NI-C-3Y", "HIC/SOHIC-H2S Cracking", "Alta", "SCC-07-NI", "C", "3Y", "Para el área total de superficie: > 35 % C scan del metal base…"],
  ["E-410C", "Tubes", "THI-02-NI-A-4Y", "Internal General Thinning", "Media", "THI-02-NI", "A", "4Y", "Componentes con y sin Cladding · Para el área total de superficie: 100 % UT/RT de CMLs…"],
];

export function CargaExcel() {
  return (
    <div className="pantalla carga" role="img" aria-label="Ventana Cargar Excel del módulo RBI con la vista previa de cada fila antes de importar">
      <div className="m-cab">
        <span className="m-tit">Cargar Excel <span className="pill"><span className="on">Equipos</span><span>Loops</span></span></span>
        <span className="x">✕</span>
      </div>
      <div className="c-cuerpo">
        <span className="c-plant">⤓ Descargar plantilla (Equipos)</span>
        <div className="c-drop"><span className="doc" /><b>RBI_CN-210.xlsx</b></div>
        <div className="c-ok">✓ 2 equipo(s), 5 mecanismo(s), 5 HR code(s) listos para importar.</div>
        <div className="scroll-x c-tabla">
          <table className="t-mod">
            <thead><tr><th>TAG</th><th>Parte</th><th>HR Code</th><th>Mecanismo</th><th className="c">Criticidad</th><th>Subgrupo</th><th className="c">Efect.</th><th className="c">Freq.</th><th>Actividad</th></tr></thead>
            <tbody>
              {CARGA.map((r, i) => (
                <tr key={i}>
                  <td className="b5">{r[0]}</td><td className="az">{r[1]}</td><td className="az mono">{r[2]}</td><td>{r[3]}</td>
                  <td className={`c cr ${crCls[r[4]]}`}>{r[4]}</td><td className="g10">{r[5]}</td>
                  <td className={`c ef ef-${r[6].toLowerCase()}`}>{r[6]}</td><td className="c">{r[7]}</td><td className="act-c">{r[8]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-pie"><span /><span className="der"><span className="b-gris">Cancelar</span><span className="b-azul">Importar (2)</span></span></div>
    </div>
  );
}

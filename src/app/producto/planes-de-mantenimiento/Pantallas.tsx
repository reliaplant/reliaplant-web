import React from "react";

// Réplicas fieles de las pantallas del módulo PM de la app
// (app/dashboard/pm/components: RutinasTab, RutinaModal, PlanModal, CalendarioPlan,
// CalendarioMaestro, IndicadoresTab, CargaRutinasModal). Mismas columnas, textos y colores.

const MESES = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MESES_CORTO = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const h1 = (h: number) => Number(h.toFixed(1)).toLocaleString("es-MX");
const ent = (h: number) => Math.round(h).toLocaleString("es-MX");

/** Número de anotación (se explica en la lista del costado). */
export const Nb = ({ n, azul }: { n: number; azul?: boolean }) => <i className={`nb${azul ? " a" : ""}`} aria-hidden="true">{n}</i>;

function Cabecera({ sub }: { sub: "Rutinas" | "Planes de Mantenimiento" | "Plan Maestro" | "Indicadores" }) {
  return (
    <>
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        <div className="rp-planta">Compresión Norte</div>
        <div className="rp-tabs"><span>TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span><span className="act">PM</span><span>RBI</span></div>
      </div>
      <div className="rp-sub">
        {(["Rutinas", "Planes de Mantenimiento", "Plan Maestro", "Indicadores"] as const).map((s) => (
          <span key={s} className={s === sub ? "act" : undefined}>{s}</span>
        ))}
      </div>
    </>
  );
}

const Lupa = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="#9ca3af" aria-hidden="true"><path d="M10.8 9.7a5.5 5.5 0 1 0-1.1 1.1l3.6 3.6 1.1-1.1zM6.5 10.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg>
);
const Embudo = () => (
  <svg className="embudo" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M2 3h12l-4.5 5.5V13l-3 1.5V8.5z" /></svg>
);
const Doc = ({ cls }: { cls?: string }) => (
  <svg className={cls} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M4 1.5h5.5L12.5 4.5v10h-8.5zM9.5 1.5v3h3M6 8h4.5M6 10.5h4.5" /></svg>
);
const Flechas = () => (
  <>
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" /></svg>
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
  </>
);
const Basura = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 9h5.8l.6-9" /></svg>
);

// ─────────────────────────────────────────────────────────
// 1. RutinasTab: lista de rutinas de la planta
// ─────────────────────────────────────────────────────────
const RUTINAS = [
  { cod: "RB-CEN", nom: "Preventivo bomba centrífuga", tareas: [["Inspeccionar fugas del sello, ruido y nivel de aceite", "cada mes"], ["Medir vibraciones en soportes de rodamientos", "cada mes"], ["Cambiar aceite de rodamientos", "cada 3 meses"], ["Verificar alineación bomba-motor", "cada 6 meses"]], mas: 1, puesto: "Mecánica", hh: "27 h", uso: "14 equipos" },
  { cod: "RC-REC", nom: "Preventivo compresor reciprocante", tareas: [["Analizar aceite del cárter", "cada mes"], ["Inspeccionar válvulas de succión y descarga", "cada 6 meses"], ["Probar disparos de protección", "cada 6 meses"], ["Cambiar empaquetaduras del vástago", "cada año"]], mas: 0, puesto: "Mecánica", hh: "38 h", uso: "2 equipos", hov: true },
  { cod: "RE-AIR", nom: "Preventivo enfriador por aire", tareas: [["Inspeccionar correas y ruido de ventiladores", "cada mes"], ["Lubricar rodamientos de ventiladores", "cada 3 meses"], ["Limpiar haz de tubos", "cada año"]], mas: 0, puesto: "Mecánica", hh: "22 h", uso: "6 equipos" },
  { cod: "RM-ELE", nom: "Preventivo motor eléctrico BT", tareas: [["Termografía de caja de conexiones", "cada 3 meses"], ["Medir aislamiento y corriente", "cada 6 meses"], ["Reapretar conexiones", "cada año"]], mas: 0, puesto: "Eléctrica", hh: "6 h", uso: "31 equipos" },
  { cod: "RV-CTL", nom: "Preventivo válvula de control", tareas: [["Inspeccionar posicionador y fugas por empaque", "cada 3 meses"], ["Calibrar posicionador y verificar carrera", "cada año"]], mas: 0, puesto: "Instrumentación", hh: "7 h", uso: "23 equipos" },
  { cod: "RT-PSV", nom: "Prueba de válvula de seguridad", tareas: [["Retirar, probar en banco y recalibrar", "cada 2 años"]], mas: 0, puesto: "Instrumentación", hh: "6 h", uso: "" },
];

export function PantallaRutinas() {
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Rutinas del módulo PM de ReliaPlant: lista de rutinas con sus tareas, puesto, horas-hombre al año y equipos que las usan">
      <Cabecera sub="Rutinas" />
      <div className="tb">
        <div className="buscar"><Lupa />Buscar rutina o tarea...</div>
        <div className="bts">
          <span className="bt">↑ Importar</span>
          <span className="bt">↓ Excel</span>
          <span className="bt azul">+ Nueva rutina</span>
        </div>
      </div>
      <div className="scroll-x">
        <table className="t-lista">
          <thead>
            <tr>
              <th>Código</th><th>Rutina</th><th>Tareas</th>
              <th className="c">Puesto<Embudo /></th>
              <th className="c">H-H / año</th>
              <th className="c">Se usa en</th>
            </tr>
          </thead>
          <tbody>
            {RUTINAS.map((r) => (
              <tr key={r.cod} className={r.hov ? "hov" : undefined}>
                <td className="cod">{r.cod}</td>
                <td><span className="nom">{r.nom}</span></td>
                <td>
                  <ul>
                    {r.tareas.map(([t, f]) => <li key={t}>{t} <span>· {f}</span></li>)}
                    {r.mas > 0 && <li><span>+{r.mas} más</span></li>}
                  </ul>
                </td>
                <td className="c">{r.puesto}</td>
                <td className="c num">{r.hh}</td>
                <td className="c">{r.uso ? r.uso : <span className="tenue">Sin usar</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 2. RutinaModal: edición de la rutina RB-CEN
// ─────────────────────────────────────────────────────────
export const TAREAS_RB_CEN = [
  { n: 10, t: "Inspeccionar fugas del sello, ruido y nivel de aceite", p: "Mecánica", pers: 1, h: 0.5, f: "Mensual" },
  { n: 20, t: "Medir vibraciones en soportes de rodamientos", p: "Mecánica", pers: 1, h: 0.5, f: "Mensual" },
  { n: 30, t: "Cambiar aceite de rodamientos", p: "Lubricación", pers: 1, h: 1.5, f: "Trimestral" },
  { n: 40, t: "Verificar alineación bomba-motor", p: "Mecánica", pers: 2, h: 2, f: "Semestral" },
  { n: 50, t: "Revisar acople y guarda del acople", p: "Mecánica", pers: 1, h: 1, f: "Anual" },
];

export function PantallaRutinaModal() {
  return (
    <div className="mdl" role="img" aria-label="Ventana para editar la rutina RB-CEN en ReliaPlant: código, nombre, puesto principal y cinco tareas con su puesto, personas, horas y frecuencia">
      <div className="mdl-cab">
        <div><h4>Editar rutina RB-CEN</h4><p>Las tareas que se le hacen a un equipo, cada una con su frecuencia.</p></div>
        <span className="x" aria-hidden="true">×</span>
      </div>
      <div className="mdl-cuerpo">
        <div className="campos r3">
          <div className="campo"><label>Código<Nb n={1} /></label><div className="inp">RB-CEN</div></div>
          <div className="campo ancho"><label>Nombre</label><div className="inp">Preventivo bomba centrífuga</div></div>
          <div className="campo"><label>Puesto de trabajo principal</label><div className="inp sel">Mecánica</div></div>
        </div>
        <div>
          <div className="lbl-fila"><span>Tareas</span><small>Personas × horas por persona, cada vez que se hace la tarea</small></div>
          <div className="t-caja scroll-x">
            <table className="t-edit">
              <colgroup>
                <col style={{ width: 40 }} /><col /><col style={{ width: 132 }} /><col style={{ width: 82 }} /><col style={{ width: 90 }} /><col style={{ width: 120 }} /><col style={{ width: 82 }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="c">#<Nb n={2} /></th>
                  <th>Tarea</th>
                  <th>Puesto de trabajo<Nb n={3} /></th>
                  <th className="r">Personas</th>
                  <th className="r">Horas c/u<Nb n={4} /></th>
                  <th>Frecuencia<Nb n={5} /></th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {TAREAS_RB_CEN.map((t) => (
                  <React.Fragment key={t.n}>
                    <tr>
                      <td className="c tenue">{t.n}</td>
                      <td>{t.t}</td>
                      <td className="sel">{t.p}</td>
                      <td className="r">{t.pers}</td>
                      <td className="r">{t.h}</td>
                      <td className="sel">{t.f}</td>
                      <td><div className="acc-fila"><Doc cls={t.n === 40 ? "doc" : undefined} /><Flechas /><Basura /></div></td>
                    </tr>
                    {t.n === 40 && (
                      <tr className="proc">
                        <td />
                        <td colSpan={6}>
                          <small>Procedimiento de &quot;Verificar alineación bomba-motor&quot;<Nb n={6} /></small>
                          <div className="txt">1. Aislar y bloquear el motor<br />2. Retirar la guarda del acople<br />3. Medir desalineación con láser y comparar con la tolerancia<br />4. Corregir con lainas y registrar los valores finales</div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
                <tr>
                  <td className="c tenue">60</td>
                  <td className="falta"><span className="gris">Otra tarea…</span></td>
                  <td className="sel">Mecánica</td>
                  <td className="r">1</td>
                  <td className="r">1</td>
                  <td className="sel">Anual</td>
                  <td><div className="acc-fila"><Doc /><Flechas /><Basura /></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="agregar-link">+ Agregar tarea</div>
        </div>
      </div>
      <div className="mdl-pie">
        <span className="info" style={{ color: "#dc2626" }}>Hay una tarea incompleta (lo que está en amarillo): complétala o quítala</span>
        <span className="bt">Cancelar</span>
        <span className="bt azul off">Guardar</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 3. PlanModal: plan PM-CN-210, equipos y rutinas
// ─────────────────────────────────────────────────────────
const FILAS_PLAN = [
  { eq: "P-211A", d: "Bomba de condensado", r: "RB-CEN · Preventivo bomba centrífuga", f: "1M, 3M, 6M, 1A", t: 5, dur: "5.5 h" },
  { eq: "P-211B", d: "Bomba de condensado", r: "RB-CEN · Preventivo bomba centrífuga", f: "1M, 3M, 6M, 1A", t: 5, dur: "5.5 h" },
  { eq: "P-211A", d: "Bomba de condensado", r: "RM-ELE · Preventivo motor eléctrico BT", f: "3M, 6M, 1A", t: 3, dur: "2.5 h", n4: true },
  { eq: "P-211B", d: "Bomba de condensado", r: "RM-ELE · Preventivo motor eléctrico BT", f: "3M, 6M, 1A", t: 3, dur: "2.5 h" },
  { eq: "LV-210", d: "Válvula de control de nivel", r: "RV-CTL · Preventivo válvula de control", f: "3M, 1A", t: 2, dur: "4 h" },
];

export function PantallaPlanModal() {
  return (
    <div className="mdl" role="img" aria-label="Ventana para editar el plan PM-CN-210 en ReliaPlant: fecha de inicio, días de anticipación de la orden, estado y la tabla de equipos con su rutina">
      <div className="mdl-cab"><div><h4>Editar plan PM-CN-210</h4></div><span className="x" aria-hidden="true">×</span></div>
      <div className="mdl-tabs"><span className="act">Configuración</span><span>Previsualización</span></div>
      <div className="mdl-cuerpo">
        <div className="campos r5">
          <div className="campo"><label>Código</label><div className="inp">PM-CN-210</div></div>
          <div className="campo ancho"><label>Nombre</label><div className="inp">Preventivo bombeo de condensado</div></div>
          <div className="campo"><label>Desde cuándo<Nb n={1} /></label><div className="inp">15/01/2027</div></div>
          <div className="campo">
            <div className="lbl-fila"><span>Crear la orden<Nb n={2} /></span><b>15 días antes</b></div>
            <div className="rango" style={{ ["--v" as string]: "52%" }}><i /><b /></div>
            <div className="rango-pie"><span>recomendado</span><span>máx. 29</span></div>
          </div>
          <div className="campo"><label>Estado</label><div className="tgl"><i />Activo</div></div>
        </div>
        <div>
          <div className="lbl-fila"><span>Equipos y rutinas</span></div>
          <div className="t-caja scroll-x">
            <table className="t-edit">
              <colgroup><col style={{ width: "25%" }} /><col style={{ width: "19%" }} /><col /><col style={{ width: "13%" }} /><col style={{ width: 60 }} /><col style={{ width: 74 }} /><col style={{ width: 36 }} /></colgroup>
              <thead>
                <tr>
                  <th>Equipo<Nb n={3} /></th><th>Ubicación técnica</th><th>Rutina<Nb n={4} /></th><th>Frecuencia</th>
                  <th className="c">Tareas</th><th className="c">Duración</th><th />
                </tr>
              </thead>
              <tbody>
                {FILAS_PLAN.map((f, i) => (
                  <tr key={i}>
                    <td><b style={{ fontWeight: 600 }}>{f.eq}</b> <span className="gris">· {f.d}</span></td>
                    <td><span>CN-210</span> <span className="gris">· Separador V-210</span></td>
                    <td>{f.r}</td>
                    <td className="tenue" style={{ fontSize: 11 }}>{f.f}</td>
                    <td className="c">{f.t}</td>
                    <td className="c">{f.dur}</td>
                    <td className="c" style={{ color: "#9ca3af" }}><span className="acc-fila" style={{ justifyContent: "center" }}><Basura /></span></td>
                  </tr>
                ))}
                <tr>
                  <td className="falta"><span className="gris">Buscar equipo…</span><Nb n={5} /></td>
                  <td />
                  <td>RV-CTL · Preventivo válvula de control</td>
                  <td className="tenue" style={{ fontSize: 11 }}>3M, 1A</td>
                  <td className="c">2</td>
                  <td className="c">4 h</td>
                  <td className="c" style={{ color: "#9ca3af" }}><span className="acc-fila" style={{ justifyContent: "center" }}><Basura /></span></td>
                </tr>
                <tr className="agregar"><td colSpan={7}>+ Agregar fila</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mdl-pie">
        <span className="bt">Eliminar</span>
        <span className="info" style={{ color: "#dc2626" }}>Hay una fila incompleta (lo que está en amarillo): complétala o quítala</span>
        <span className="bt">Cancelar</span>
        <span className="bt azul off">Guardar</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 4. CalendarioPlan (pestaña Previsualización del plan) + detalle de una tarea
// ─────────────────────────────────────────────────────────
const cada = (paso: number, desde = 0) => MESES.map((_, m) => m >= desde && (m - desde) % paso === 0);
const TAREAS_P211A = [
  { t: "Inspeccionar fugas del sello, ruido y nivel de aceite", c: "1M", p: "Mecánica", on: cada(1) },
  { t: "Medir vibraciones en soportes de rodamientos", c: "1M", p: "Mecánica", on: cada(1) },
  { t: "Cambiar aceite de rodamientos", c: "3M", p: "Lubricación", on: cada(3) },
  { t: "Verificar alineación bomba-motor", c: "6M", p: "Mecánica", on: cada(6), foco: 0 },
  { t: "Revisar acople y guarda del acople", c: "1A", p: "Mecánica", on: cada(12) },
  { t: "Termografía de caja de conexiones", c: "3M", p: "Eléctrica", on: cada(3) },
  { t: "Medir aislamiento y corriente", c: "6M", p: "Eléctrica", on: cada(6) },
  { t: "Reapretar conexiones", c: "1A", p: "Eléctrica", on: cada(12) },
];
const HH_P211A = [11, 1, 1, 3, 1, 1, 8, 1, 1, 3, 1, 1];
const HH_LV210 = [4, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];

function ColsMeses({ izq }: { izq: number[] }) {
  return (
    <colgroup>
      {izq.map((w, i) => <col key={i} style={{ width: w }} />)}
      {MESES.map((_, m) => <col key={m} />)}
    </colgroup>
  );
}
function CabMeses({ titulo, anio, puesto }: { titulo: React.ReactNode; anio: number; puesto?: boolean }) {
  return (
    <thead>
      <tr>
        <th rowSpan={2} className="izq">{titulo}</th>
        {puesto && <th rowSpan={2} className="izq" style={{ borderLeft: "1px solid #d1d5db" }}>Puesto</th>}
        <th colSpan={12} className="anio">{anio}</th>
      </tr>
      <tr>{MESES.map((mm, m) => <th key={m} className={`mes${m === 0 ? " m0" : ""}`}>{mm}</th>)}</tr>
    </thead>
  );
}
const celdaMes = (m: number, extra = "") => `m${m === 0 ? " m0" : ""}${extra ? ` ${extra}` : ""}`;

export function PantallaCalendarioPlan() {
  return (
    <div className="cal-wrap">
      <div className="mdl" role="img" aria-label="Previsualización del plan PM-CN-210: calendario 2027 con las tareas de la bomba P-211A mes a mes y las horas-hombre de cada mes">
        <div className="mdl-cab"><div><h4>Editar plan PM-CN-210</h4></div><span className="x" aria-hidden="true">×</span></div>
        <div className="mdl-tabs"><span>Configuración</span><span className="act">Previsualización</span></div>
        <div style={{ padding: "12px 16px" }}>
          <div className="t-caja scroll-x">
            <table className="cal cal-plan">
              <ColsMeses izq={[300, 104]} />
              <CabMeses titulo="Equipo" anio={2027} puesto />
              <tbody>
                <tr>
                  <td className="eq"><span className="car">▾</span><b>P-211A</b> <span>· Bomba de condensado</span> <span style={{ fontSize: 10 }}>· 8 tareas</span></td>
                  <td className="pu tenue">H-H por mes</td>
                  {HH_P211A.map((h, m) => <td key={m} className={celdaMes(m, "h")}>{h1(h)}</td>)}
                </tr>
                {TAREAS_P211A.map((t) => (
                  <tr key={t.t}>
                    <td className="ta">{t.t} <small>· {t.c}</small></td>
                    <td className="pu">{t.p}</td>
                    {t.on.map((on, m) => <td key={m} className={celdaMes(m, on ? (t.foco === m ? "on foco" : "on") : "")} />)}
                  </tr>
                ))}
                <tr>
                  <td className="eq"><span className="car">▸</span><b>P-211B</b> <span>· Bomba de condensado</span> <span style={{ fontSize: 10 }}>· 8 tareas</span></td>
                  <td className="pu tenue">H-H por mes</td>
                  {HH_P211A.map((h, m) => <td key={m} className={celdaMes(m, "h")}>{h1(h)}</td>)}
                </tr>
                <tr>
                  <td className="eq"><span className="car">▸</span><b>LV-210</b> <span>· Válvula de control de nivel</span> <span style={{ fontSize: 10 }}>· 2 tareas</span></td>
                  <td className="pu tenue">H-H por mes</td>
                  {HH_LV210.map((h, m) => <td key={m} className={celdaMes(m, h ? "h" : "")}>{h ? h1(h) : ""}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mdl detalle" role="img" aria-label="Detalle de la tarea Verificar alineación bomba-motor de la P-211A: fecha, día en que se crea la orden, frecuencia, puesto, personas y procedimiento">
        <div className="mdl-cab">
          <div><h4>Verificar alineación bomba-motor</h4><p>P-211A · Bomba de condensado · RB-CEN Preventivo bomba centrífuga</p></div>
          <span className="x" aria-hidden="true">×</span>
        </div>
        <div className="mdl-cuerpo">
          <div className="dato-g">
            <div><small>Toca el</small><p>Viernes, 15 de enero de 2027</p></div>
            <div><small>Se crea la orden el</small><p>31 de diciembre de 2026 (15 días antes)</p></div>
            <div><small>Frecuencia</small><p>Cada 6 meses</p></div>
            <div><small>Puesto de trabajo</small><p>Mecánica</p></div>
            <div><small>Personas × duración</small><p>2 × 2 h (4 h hombre)</p></div>
          </div>
          <div>
            <span className="proc-l">Procedimiento</span>
            <p className="proc-t">{"1. Aislar y bloquear el motor\n2. Retirar la guarda del acople\n3. Medir desalineación con láser y comparar con la tolerancia\n4. Corregir con lainas y registrar los valores finales"}</p>
          </div>
        </div>
        <div className="mdl-pie"><span className="bt" style={{ marginLeft: "auto" }}>Cerrar</span></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 5. CalendarioMaestro (pestaña Plan Maestro)
// ─────────────────────────────────────────────────────────
const desdeMes = (m0: number) => MESES.map((_, m) => m >= m0);
const MAESTRO = [
  {
    cod: "PM-CN-210", nom: "Preventivo bombeo de condensado", hh: [26, 2, 2, 7, 2, 2, 17, 2, 2, 7, 2, 2],
    eqs: [["P-211A", "Bomba de condensado", desdeMes(0)], ["P-211B", "Bomba de condensado", desdeMes(0)], ["LV-210", "Válvula de control de nivel", cada(3)]] as [string, string, boolean[]][],
  },
  {
    cod: "PM-CN-300", nom: "Preventivo compresores", hh: [0, 0, 45, 1, 1, 1, 1, 1, 21, 1, 1, 1],
    eqs: [["K-301A", "Compresor reciprocante", desdeMes(2)], ["K-301B", "Compresor reciprocante", desdeMes(2)]] as [string, string, boolean[]][],
  },
  {
    cod: "PM-CN-400", nom: "Preventivo enfriadores por aire", hh: [0, 0, 0, 0, 40.5, 1.5, 1.5, 4.5, 1.5, 1.5, 4.5, 1.5],
    eqs: [["E-410A", "Enfriador por aire", desdeMes(4)], ["E-410B", "Enfriador por aire", desdeMes(4)], ["E-410C", "Enfriador por aire", desdeMes(4)]] as [string, string, boolean[]][],
  },
];

export function PantallaPlanMaestro() {
  return (
    <div className="pantalla" role="img" aria-label="Plan Maestro de ReliaPlant: tres planes activos desplegados en sus equipos, con las horas-hombre de cada plan por mes durante 2027">
      <Cabecera sub="Plan Maestro" />
      <div className="tb"><div className="buscar"><Lupa />Buscar plan, rutina o equipo...</div></div>
      <div className="scroll-x">
        <table className="cal cal-maestro">
          <ColsMeses izq={[300]} />
          <CabMeses titulo={<>Plan / equipo <span>· H-H por mes</span></>} anio={2027} />
          <tbody>
            {MAESTRO.map((p) => (
              <React.Fragment key={p.cod}>
                <tr className="fila-plan">
                  <td className="eq"><span className="car">▾</span><b>{p.cod}</b> <span style={{ color: "#6b7280" }}>· {p.nom}</span> <span style={{ fontSize: 10 }}>· {p.eqs.length} equipos</span></td>
                  {p.hh.map((h, m) => <td key={m} className={celdaMes(m, h ? "h" : "")}>{h ? h1(h) : ""}</td>)}
                </tr>
                {p.eqs.map(([tag, d, on]) => (
                  <tr key={tag}>
                    <td className="sub-eq"><b>{tag}</b> <span>· {d}</span></td>
                    {on.map((x, m) => <td key={m} className={celdaMes(m, x ? "on" : "")} />)}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 6. IndicadoresTab
// ─────────────────────────────────────────────────────────
// Paleta de ejecutores de la app (sin morados ni ámbar), en el orden de los puestos por defecto.
const PUESTOS = [
  { nom: "Mecánica", color: "#1d4ed8", h: [392, 300, 702, 352, 506, 322, 430, 330, 620, 386, 318, 280], cap: 0.5 },
  { nom: "Eléctrica", color: "#0891b2", h: [110, 80, 160, 96, 118, 92, 112, 94, 150, 106, 90, 80], cap: 0.17 },
  { nom: "Instrumentación", color: "#0d9488", h: [102, 84, 170, 96, 120, 90, 116, 94, 148, 104, 92, 80], cap: 0.17 },
  { nom: "Lubricación", color: "#65a30d", h: [108, 84, 154, 96, 124, 92, 116, 94, 146, 106, 90, 80], cap: 0.16 },
];
// Capacidad real de cada mes (personas × horas al día × días laborables, menos feriados y ausencias)
const CAPACIDAD = [1040, 1000, 1080, 1000, 1040, 1080, 1120, 1080, 1040, 1120, 1000, 960];

function Dona({ partes, total }: { partes: { color: string; valor: number; nombre: string }[]; total: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  let acumulado = 0;
  return (
    <svg width={140} height={140} viewBox="0 0 140 140" aria-hidden="true">
      <circle cx={70} cy={70} r={r} fill="none" stroke="#f3f4f6" strokeWidth={18} />
      {partes.map((p) => {
        const largo = (p.valor / total) * c;
        const el = <circle key={p.nombre} cx={70} cy={70} r={r} fill="none" stroke={p.color} strokeWidth={18} strokeDasharray={`${largo} ${c - largo}`} strokeDashoffset={-acumulado} transform="rotate(-90 70 70)" />;
        acumulado += largo;
        return el;
      })}
      <text x={70} y={66} textAnchor="middle" fill="#111827" style={{ fontSize: 18, fontWeight: 600 }}>{ent(total)}</text>
      <text x={70} y={84} textAnchor="middle" fill="#9ca3af" style={{ fontSize: 10 }}>H-H totales</text>
    </svg>
  );
}

export function PantallaIndicadores() {
  const totales = MESES.map((_, i) => PUESTOS.reduce((s, p) => s + p.h[i], 0));
  const max = Math.max(...totales);
  const iPico = totales.indexOf(max);
  const suma = totales.reduce((s, h) => s + h, 0);
  const escala = Math.max(max, ...CAPACIDAD);
  const sobre = totales.filter((h, i) => h > CAPACIDAD[i]).length;
  const capAnual = CAPACIDAD.reduce((s, c) => s + c, 0);
  const porPuesto = PUESTOS.map((p) => ({ ...p, total: p.h.reduce((s, h) => s + h, 0) })).sort((a, b) => b.total - a.total);
  const COB = [
    { et: "A · Alta", color: "#da1e28", con: 179, total: 186 },
    { et: "B · Media", color: "#f1c21b", con: 402, total: 471 },
    { et: "C · Baja", color: "#24a148", con: 331, total: 627 },
  ];

  return (
    <div className="pantalla" role="img" aria-label="Indicadores del preventivo en ReliaPlant: tarjetas de resumen, carga de horas-hombre por mes y puesto contra la capacidad, horas por puesto, cobertura de equipos por criticidad y cosas por revisar">
      <Cabecera sub="Indicadores" />
      <div className="ind">
        <div className="tarjetas">
          <div className="tarj"><p>Planes activos</p><b>38</b><small>3 en pausa</small></div>
          <div className="tarj"><p>Rutinas en uso</p><b>59</b><small>5 sin uso</small></div>
          <div className="tarj"><p>H-H próximos 12 meses</p><b>{ent(suma)}</b><small>horas-hombre</small></div>
          <div className="tarj"><p>Mes más cargado</p><b>{MESES_CORTO[iPico]} 2027</b><small>{h1(max)} h hombre</small></div>
          <div className="tarj"><p>Equipos con preventivo</p><b>912</b><small>de 1,284 (71%)</small></div>
          <div className="tarj alerta"><p>Críticos (A) sin preventivo</p><b>7</b><small>de 186</small></div>
        </div>

        <div className="ind-fila">
          <div className="panel">
            <div className="panel-cab"><p>Carga de horas-hombre por mes</p><small>Próximos 12 meses · planes activos · por puesto de trabajo</small></div>
            <div className="panel-c">
              <div className="graf">
                {totales.map((t, i) => (
                  <div key={i} className="col">
                    <span className={`val${t > CAPACIDAD[i] ? " sobre" : i === iPico ? " pico" : ""}`}>{ent(t)}</span>
                    <div className="area">
                      <div className="cap" style={{ bottom: `${(CAPACIDAD[i] / escala) * 100}%` }} />
                      <div className="barra" style={{ height: `${(t / escala) * 100}%` }}>
                        {PUESTOS.map((p) => <div key={p.nom} style={{ height: `${(p.h[i] / t) * 100}%`, background: p.color }} />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="graf-mes">
                {MESES_CORTO.map((m, i) => <span key={m}>{m}{i === 0 && <em> 27</em>}</span>)}
              </div>
              <div className="leyenda">{PUESTOS.map((p) => <span key={p.nom}><i style={{ background: p.color }} />{p.nom}</span>)}</div>
              <p className={`graf-nota${sobre ? " rojo" : ""}`}>{sobre ? `${sobre} meses por encima de la capacidad.` : "Todos los meses quedan dentro de la capacidad."}</p>
            </div>
          </div>
          <div className="panel">
            <div className="panel-cab"><p>Horas-hombre por puesto de trabajo</p><small>Próximos 12 meses</small></div>
            <div className="panel-c">
              <div className="dona-f">
                <Dona total={suma} partes={porPuesto.map((p) => ({ color: p.color, valor: p.total, nombre: p.nom }))} />
                <ul>
                  {porPuesto.map((p) => (
                    <li key={p.nom}>
                      <i style={{ background: p.color }} />
                      <span className="nm">{p.nom}</span>
                      <b>{ent(p.total)} h</b>
                      <span className="pc">{Math.round((p.total / suma) * 100)}%</span>
                      <span className="cp">{Math.round((p.total / (capAnual * p.cap)) * 100)}% cap.</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="ind-fila mitad">
          <div className="panel">
            <div className="panel-cab"><p>Cobertura de equipos por criticidad</p><small>Equipos con al menos un plan activo</small></div>
            <div className="panel-c">
              {COB.map((c) => {
                const pct = (c.con / c.total) * 100;
                return (
                  <div key={c.et} className="cob">
                    <span className="et"><i style={{ background: c.color }} />{c.et}</span>
                    <div className="bar"><i style={{ width: `${pct}%` }} /></div>
                    <span className="n"><b>{c.con}</b> de {c.total} <span>({Math.round(pct)}%)</span></span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="panel">
            <div className="panel-cab"><p>Cosas por revisar</p><small>Lo que conviene limpiar o completar</small></div>
            <div className="panel-c">
              <ul className="revisar">
                <li><div><p>5 rutinas sin uso en ningún plan</p><small>RT-PSV, RB-ENG, RV-MAN, RF-FIL, RC-AIR</small></div></li>
                <li><div><p>1 plan con equipos que ya no están en la taxonomía</p><small>PM-CN-520</small></div></li>
                <li><div><p>2 planes en pausa desde hace más de 3 meses</p><small>PM-CN-610, PM-CN-615</small></div></li>
                <li><div><p>7 equipos de criticidad A · Alta sin preventivo</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 7. CargaRutinasModal con errores (no se importa nada)
// ─────────────────────────────────────────────────────────
export function PantallaCarga() {
  return (
    <div className="mdl" role="img" aria-label="Ventana Importar rutinas desde Excel de ReliaPlant: vista previa con dos errores; mientras haya errores no se importa nada">
      <div className="mdl-cab">
        <div><h4>Importar rutinas desde Excel</h4><p>Una fila por tarea. Si el código ya existe, se reemplazan sus tareas.</p></div>
        <span className="x" aria-hidden="true">×</span>
      </div>
      <div className="mdl-cuerpo">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#4b5563" }}>1. Descarga la plantilla y llénala. 2. Súbela aquí para revisar antes de importar.</p>
          <span className="bt">↓ Plantilla</span>
        </div>
        <div className="drop"><b>Archivo: Hojas_de_ruta_CN.xlsx</b><small>Puedes elegir otro para volver a revisar</small></div>
        <div className="errs">
          <p>Hay 2 problemas. Corrígelos en el Excel y vuelve a subirlo; no se importará nada hasta entonces.</p>
          <ul>
            <li>Fila 14: puesto de trabajo &quot;MEC-2&quot; no existe</li>
            <li>Fila 31: no entiendo la frecuencia &quot;según condición&quot;</li>
          </ul>
        </div>
        <div className="t-prev-caja">
          <table className="t-prev">
            <thead><tr><th>Código</th><th>Nombre</th><th>Tareas</th><th>Puesto</th></tr></thead>
            <tbody>
              <tr><td>RB-CEN</td><td>Preventivo bomba centrífuga</td><td>Inspeccionar fugas del sello <span>· cada mes</span><br />Cambiar aceite de rodamientos <span>· cada 3 meses</span><br />Verificar alineación bomba-motor <span>· cada 6 meses</span></td><td>Mecánica</td></tr>
              <tr><td>RV-CTL</td><td>Preventivo válvula de control</td><td>Inspeccionar posicionador <span>· cada 3 meses</span><br />Calibrar posicionador <span>· cada año</span></td><td>Instrumentación</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mdl-pie"><span className="bt" style={{ marginLeft: "auto" }}>Cancelar</span><span className="bt azul off">Importar</span></div>
    </div>
  );
}

// Réplicas de pantallas reales de ReliaPlant para la landing de levantamiento de activos.
// Fuentes (código real):
//  - Móvil: reliaplant-mobile/src/app/(app)/equipo/[id].tsx (ficha + "Resultado en campo"),
//    ui/AvanceCampo.tsx (dona del avance), (app)/descargar.tsx, (app)/registro/[id].tsx (Nuevo equipo).
//  - Web: app/dashboard/page.tsx (árbol con marcador de estado de campo y check de UT revisada),
//    AssetInfo.tsx (fila "Recorrido en campo" / "Estado de placa"), RecorridoCampo.tsx (Pendientes),
//    configuracion/components/ModoConstruccionPanel.tsx (registros de la construcción).
// Colores = ESTADOS_CAMPO, ESTADOS_PLACA y ESTADOS_PENDIENTE de la app.

import type { CSSProperties, ReactNode } from "react";

export const CAMPO = {
  encontrado: { texto: "Encontrado", color: "#16a34a" },
  con_comentarios: { texto: "Con comentarios", color: "#2563eb" },
  no_encontrado: { texto: "No encontrado", color: "#dc2626" },
  no_requiere: { texto: "No requiere confirmación", color: "#9ca3af" },
} as const;
type EstadoCampo = keyof typeof CAMPO;

export function N({ n, style }: { n: number; style?: CSSProperties }) {
  return <span className="lv-n" style={style} aria-hidden="true">{n}</span>;
}

const Caret = ({ abierto, sin }: { abierto?: boolean; sin?: boolean }) => (
  <svg className={`car${abierto ? " abierto" : ""}${sin ? " sin" : ""}`} viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4z" /></svg>
);
const IcUT = ({ color = "#16a34a" }: { color?: string }) => (
  <svg className="ic" viewBox="0 0 16 16" fill={color}><path d="M3 14V2h7v4h3v8H9v-3H7v3zM5 4v1.5h1.5V4zm0 3v1.5h1.5V7zm3-3v1.5h1.5V4zm0 3v1.5h1.5V7z" /></svg>
);
const IcEq = ({ color = "#3b82f6" }: { color?: string }) => (
  <svg className="ic" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.3"><rect x="2.5" y="2.5" width="11" height="11" /><circle cx="8" cy="8" r="2.6" /><path d="M8 2.5v2.9M8 10.6v2.9" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 16 16"><path d="M4 8.5l2.6 2.6L12 5.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Play = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="#fff"><path d="M5 3l8 5-8 5z" /></svg>
);
const Descarga = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M7.3 2h1.4v7.2l2.6-2.6 1 1L8 11.9 3.7 7.6l1-1 2.6 2.6zM3 12.5h10V14H3z" /></svg>
);

/* ───────────── Dona del avance (móvil: AvanceCampo) ───────────── */
// Ejemplo: área CN-200 · 212 equipos. 12 no requieren → total 200. 194 revisados = 97 %.
export function DonaAvance() {
  const R = 42;
  const P = 2 * Math.PI * R;
  const segs: { c: string; n: number }[] = [
    { c: "#16a34a", n: 171 },
    { c: "#2563eb", n: 14 },
    { c: "#dc2626", n: 9 },
  ];
  let ini = 0;
  return (
    <div className="lv-dona-card" role="img" aria-label="Avance en campo del área CN-200 en la app móvil: 97 % revisado">
      <div className="tt">Avance en campo · CN-200</div>
      <div className="lv-dona-fila">
        <div className="lv-dona">
          <svg viewBox="0 0 104 104" aria-hidden="true">
            <circle cx="52" cy="52" r={R} stroke="#e5e7eb" strokeWidth="13" fill="none" />
            {segs.map((s) => {
              const largo = (s.n / 200) * P;
              const el = <circle key={s.c} cx="52" cy="52" r={R} stroke={s.c} strokeWidth="13" fill="none" strokeDasharray={`${largo} ${P - largo}`} strokeDashoffset={-ini} />;
              ini += largo;
              return el;
            })}
          </svg>
          <div className="c"><b>97%</b><span>revisado</span></div>
        </div>
        <div className="lv-ley">
          <div><i style={{ background: "#16a34a" }} /><span>Encontrados</span><em>171</em></div>
          <div><i style={{ background: "#2563eb" }} /><span>Con comentarios</span><em>14</em></div>
          <div><i style={{ background: "#dc2626" }} /><span>No encontrados</span><em>9</em></div>
          <div><i style={{ background: "#6b7280" }} /><span>No requieren</span><em>12</em></div>
          <div><i style={{ background: "#e5e7eb" }} /><span>Sin revisar</span><em>6</em></div>
        </div>
      </div>
    </div>
  );
}

export function TarjetaUT() {
  return (
    <div className="lv-ut-card" role="img" aria-label="UT CN-210 marcada como revisada">
      <span className="lv-chk"><Check /></span>
      <div><div className="mono">CN-210</div><div className="s">Separador V-210 · UT revisada</div></div>
    </div>
  );
}

/* ───────────── Teléfono: ficha del equipo en campo ───────────── */
export function TelefonoFicha() {
  return (
    <div className="lv-tel" role="img" aria-label="App de campo de ReliaPlant: ficha del motor PM-211A con notas de voz, fotos con GPS y resultado en campo">
      <div className="lv-tel-p">
        <div className="lv-tel-est"><span>9:41</span><span>Sin señal · 14 en cola</span></div>
        <div className="lv-tel-cab">
          <span className="x">×</span>
          <div style={{ minWidth: 0 }}>
            <div className="tg">PM-211A</div>
            <div className="ds">Motor eléctrico 75 kW</div>
            <span className="ut">CN-210 · Separador V-210 ›</span>
          </div>
          <span className="dti">DTI</span>
        </div>
        <N n={1} style={{ right: 10, top: 72 }} />
        <div className="lv-tel-cuerpo">
          <div style={{ position: "relative" }}>
            <div className="tit">Audio</div>
            <div className="lv-nota"><span className="pl"><Play /></span><span className="onda" /><span>0:38</span></div>
            <div className="lv-grabar">Grabar nota de voz</div>
            <N n={2} style={{ right: -6, top: -4 }} />
          </div>
          <div style={{ position: "relative" }}>
            <div className="tit">Fotos</div>
            <div className="lv-fotos">
              <i className="gps" style={{ backgroundImage: "url(/sitio/campo-placa-motor.jpg)" }} />
              <i className="gps" style={{ backgroundImage: "url(/sitio/equipo/placa.jpg)" }} />
              <i className="gps" style={{ backgroundImage: "url(/sitio/equipo/bombas-ab.jpg)" }} />
              <i className="gps" style={{ backgroundImage: "url(/sitio/equipo/bomba.jpg)" }} />
              <i className="add">+</i>
              <i className="add">▦</i>
            </div>
            <N n={3} style={{ right: -6, top: -4 }} />
          </div>
        </div>
        <div className="lv-tel-pie" style={{ position: "relative" }}>
          <div className="lv-est4">
            <span className="enc">Encontrado</span>
            <span className="com" style={{ background: "#2563eb", color: "#fff", borderColor: "#2563eb" }}>Con comentarios</span>
            <span className="noe">No encontrado</span>
            <span className="nor">No requiere</span>
          </div>
          <N n={4} style={{ right: 4, top: -10 }} />
        </div>
      </div>
    </div>
  );
}

/* ───────────── Web: árbol con recorrido + ficha ───────────── */
function Fila({ nivel, children, sel, estado, rev, abierto, sin }: {
  nivel: number; children: ReactNode; sel?: boolean; estado?: EstadoCampo; rev?: boolean | null; abierto?: boolean; sin?: boolean;
}) {
  return (
    <div className={`fila${sel ? " sel" : ""}`} style={{ paddingLeft: 8 + nivel * 16 }}>
      <Caret abierto={abierto} sin={sin} />
      {children}
      {estado && <span className="est" style={{ background: CAMPO[estado].color }} title={`Recorrido: ${CAMPO[estado].texto}`} />}
      {rev !== undefined && rev !== null && <span className={`rev${rev ? " si" : ""}`}>{rev && <Check />}</span>}
    </div>
  );
}

export function VentanaRecorrido() {
  return (
    <div className="lv-ventana">
      <div className="ventana" role="img" aria-label="Taxonomía en ReliaPlant durante el levantamiento: árbol con el resultado en campo de cada equipo y ficha del motor PM-211A con comentarios y placa no legible">
        <div className="rp-head">
          <div className="rp-logo">RELIAPLANT</div>
          <div className="rp-planta">Compresión Norte <span className="cons">EN CONSTRUCCIÓN</span></div>
          <div className="rp-tabs"><span className="act">TAX</span><span>RCA</span><span>RCM</span><span>PM</span><span>Tools</span></div>
          <div className="rp-user">Ana Torres · <span className="r">Administrador</span></div>
        </div>
        <div className="rp-sub">
          <span className="act">Lista de Activos</span><span>Tabla</span><span>Plant view</span><span>Map view</span><span>DTIs</span><span>Documentos</span><span>KPIs</span><span>Recorrido</span>
        </div>
        <div className="rp-cuerpo">
          <aside className="rp-side">
            <div className="rp-side-cab">
              <div className="l1"><span className="pl">PLANTA</span><span className="nm">- COMPRESIÓN NORTE</span><span className="crear">Crear</span></div>
              <div className="rp-buscar">Buscar por tag, código o descripción</div>
            </div>
            <div className="arb">
              <Fila nivel={0} abierto><IcUT /><span>CN</span><span className="d">- Compresión Norte</span><span className="tot">(1.297 E)</span></Fila>
              <Fila nivel={1} abierto rev={false}><IcUT /><span>CN-200</span><span className="d">- Separación</span><span className="tot">(218 E)</span></Fila>
              <Fila nivel={2} abierto rev={true}><IcUT color="#2563eb" /><span>CN-210</span><span className="d">- Separador V-210</span><span className="tot">(39 E)</span><N n={1} /></Fila>
              <Fila nivel={3} sin estado="encontrado"><IcEq /><span>V-210</span><span className="d">- Separador horizontal</span></Fila>
              <Fila nivel={3} abierto estado="encontrado"><IcEq /><span>P-211A</span><span className="d">- Bomba de condensado</span></Fila>
              <Fila nivel={4} sin sel estado="con_comentarios"><IcEq /><span>PM-211A</span><span className="d">- Motor eléctrico</span><N n={2} /></Fila>
              <Fila nivel={3} sin estado="encontrado"><IcEq /><span>P-211B</span><span className="d">- Bomba de condensado</span></Fila>
              <Fila nivel={3} sin estado="no_encontrado"><IcEq /><span>PSV-2104</span><span className="d">- Válvula de alivio</span></Fila>
              <Fila nivel={3} sin estado="encontrado"><IcEq color="#d97706" /><span>FV-2107</span><span className="d">- Válvula de control</span><N n={3} /></Fila>
              <Fila nivel={3} sin estado="no_requiere"><IcEq /><span>HT-2101</span><span className="d">- Polipasto manual</span></Fila>
              <Fila nivel={2} rev={false}><IcUT /><span>CN-220</span><span className="d">- Bombeo de condensado</span><span className="tot">(24 E)</span></Fila>
            </div>
          </aside>
          <main className="rp-main">
            <div className="ficha">
              <div className="ficha-cab">
                <div className="ficha-foto" style={{ background: "url(/sitio/campo-placa-motor.jpg) center/cover" }} />
                <div style={{ minWidth: 0 }}>
                  <div className="tag">PM-211A</div>
                  <div className="desc">Motor eléctrico 75 kW</div>
                  <div className="mini-fotos">
                    <i style={{ background: "url(/sitio/equipo/placa.jpg) center/cover" }} />
                    <i style={{ background: "url(/sitio/equipo/bomba.jpg) center/cover" }} />
                    <i className="mas">+3</i>
                  </div>
                </div>
                <span className="editar">Editar</span>
              </div>
              <div className="ficha-cuerpo">
                <div className="tab-ficha">
                  <table>
                    <thead><tr><th colSpan={4}>Identificación</th></tr></thead>
                    <tbody>
                      <tr><td className="l">Tag</td><td className="v">PM-211A</td><td className="l">Código SAP</td><td className="v">10004514</td></tr>
                      <tr><td className="l">Ubicación técnica</td><td className="v">CN-210</td><td className="l">Equipo superior</td><td className="v">P-211A</td></tr>
                      <tr>
                        <td className="l">Recorrido en campo <N n={4} /></td>
                        <td className="v"><span className="lv-estado-c"><i style={{ background: "#2563eb" }} />Con comentarios</span></td>
                        <td className="l">Estado de placa</td>
                        <td className="v"><span className="lv-chip-c" style={{ color: "#dc2626", borderColor: "#dc2626" }}><i style={{ background: "#dc2626" }} />No legible</span></td>
                      </tr>
                      <tr><td className="l">Comentarios</td><td className="v" colSpan={3} style={{ fontWeight: 400 }}>Placa corroída, no se lee la serie. Pedir datos al almacén con la orden de compra.</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-ficha">
                  <table>
                    <thead><tr><th colSpan={4}>Notas de voz (1)</th></tr></thead>
                    <tbody>
                      <tr><td colSpan={4}><div className="lv-audio"><span>▶</span><span>0:00 / 0:38</span><span className="tr" /></div></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Web: Recorrido → Pendientes ───────────── */
const PEND = {
  no_completado: { texto: "No completado", color: "#2563eb" },
  completado: { texto: "Completado", color: "#16a34a" },
  descartado: { texto: "Descartado", color: "#9ca3af" },
} as const;
function ChipPend({ e }: { e: keyof typeof PEND }) {
  const x = PEND[e];
  return <span className="lv-chip-c" style={{ color: x.color, borderColor: x.color }}><i style={{ background: x.color }} />{x.texto}</span>;
}

export function TablaPendientes() {
  const filas: { t: string; ev: string; r: string; e: keyof typeof PEND; c: string }[] = [
    { t: "PSV-2104 no está en la descarga del V-210", ev: "3 fotos · 1 nota", r: "-", e: "no_completado", c: "14/10/26 10:42 · Luis Pérez" },
    { t: "Verificar placa de PM-211A con almacén", ev: "2 fotos", r: "-", e: "no_completado", c: "14/10/26 11:05 · Luis Pérez" },
    { t: "Dos válvulas con tag XV-2203 en CN-220", ev: "4 fotos · 2 notas", r: "Son válvula y actuador: quedan como equipo y subequipo con el mismo tag.", e: "completado", c: "13/10/26 16:20 · Carla Ruiz" },
    { t: "Bomba P-215 desmontada en taller", ev: "1 foto", r: "Se marca en el listado y se revisa al volver a su base.", e: "completado", c: "13/10/26 09:12 · Luis Pérez" },
    { t: "Tablero sin identificación junto al V-210", ev: "1 foto", r: "Es un tablero de iluminación, fuera del alcance.", e: "descartado", c: "12/10/26 15:47 · Carla Ruiz" },
  ];
  return (
    <div className="pantalla" role="img" aria-label="Recorrido en ReliaPlant, pestaña Pendientes: lo que el campo no pudo cerrar, con evidencia, resolución y estado">
      <div className="rp-head"><div className="rp-logo">RELIAPLANT</div><div className="rp-tabs"><span className="act">TAX</span><span>RCA</span><span>RCM</span></div></div>
      <div className="rp-sub"><span>Lista de Activos</span><span>Tabla</span><span>Map view</span><span>DTIs</span><span className="act">Recorrido</span></div>
      <div style={{ display: "flex", gap: 4, padding: "8px 20px 0", background: "#fff", borderBottom: "1px solid #e5e7eb", fontSize: 12, fontWeight: 500 }}>
        <span style={{ padding: "6px 12px", borderBottom: "2px solid #2563eb", color: "#1d4ed8" }}>Pendientes <span style={{ marginLeft: 6, padding: "0 6px", borderRadius: 99, background: "#eff6ff", color: "#1d4ed8" }}>2</span></span>
        <span style={{ padding: "6px 12px", color: "#4b5563" }}>Notas generales</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#e5e7eb", padding: "0 20px", height: 40, borderBottom: "1px solid #d1d5db", fontSize: 12, color: "#4b5563", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span style={{ background: "#fff", border: "1px solid #d1d5db", height: 26, display: "flex", alignItems: "center", padding: "0 8px", color: "#9ca3af", minWidth: 180 }}>Buscar pendiente...</span>
        <span style={{ marginLeft: "auto" }}><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: 9, background: "#2563eb", marginRight: 6 }} />No completado: <b style={{ color: "#1f2937" }}>2</b></span>
        <span><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: 9, background: "#16a34a", marginRight: 6 }} />Completado: <b style={{ color: "#1f2937" }}>2</b></span>
        <span><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: 9, background: "#9ca3af", marginRight: 6 }} />Descartado: <b style={{ color: "#1f2937" }}>1</b></span>
      </div>
      <div className="scroll-x">
        <table className="tabla-app">
          <thead><tr><th>Pendiente</th><th>Evidencia</th><th>Resolución</th><th>Estado</th><th>Creado</th></tr></thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.t}>
                <td style={{ textDecoration: "underline", textDecorationColor: "#d1d5db", textUnderlineOffset: 2, fontWeight: 500 }}>{f.t}</td>
                <td style={{ color: "#4b5563" }}>{f.ev}</td>
                <td style={{ color: "#4b5563", whiteSpace: "normal", minWidth: 260 }}>{f.r}</td>
                <td><ChipPend e={f.e} /></td>
                <td style={{ color: "#4b5563" }}>{f.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ───────────── Web: Configuración → Modo construcción ───────────── */
export function PanelConstruccion() {
  const filas: { tipo: [string, string]; f: string; por: string; d: string; ut: string; eq: string }[] = [
    { tipo: ["res", "Respaldo"], f: "21/10/26 18:05", por: "ana.torres@empresa.com", d: "Fin del recorrido del área CN-200.", ut: "96", eq: "1.297" },
    { tipo: ["aut", "Respaldo automático"], f: "17/10/26 08:31", por: "ana.torres@empresa.com", d: "Antes de aplicar cambios propuestos por el asistente.", ut: "96", eq: "1.289" },
    { tipo: ["res", "Respaldo"], f: "15/10/26 07:50", por: "ana.torres@empresa.com", d: "Antes de la carga masiva de datos técnicos de bombas.", ut: "95", eq: "1.288" },
    { tipo: ["ori", "Registro original"], f: "06/10/26 09:14", por: "ana.torres@empresa.com", d: "Export de SAP PM entregado por mantenimiento, versión 3.", ut: "94", eq: "1.284" },
  ];
  return (
    <div className="pantalla lv-mc-tabla" role="img" aria-label="Modo construcción en ReliaPlant: registro original y respaldos de la planta Compresión Norte, con exportables de UTs y equipos">
      <div className="rp-head"><div className="rp-logo">RELIAPLANT</div><div className="rp-planta">Compresión Norte <span className="cons">EN CONSTRUCCIÓN</span></div><div className="rp-tabs"><span className="act">TAX</span><span>RCA</span><span>RCM</span></div></div>
      <div className="lv-mc-barra">
        <div className="izq">Modo construcción <span className="lv-mc-est"><i />En construcción</span></div>
        <div className="der"><span className="b">Crear respaldo</span><span className="b">✓ Pasar a producción</span></div>
      </div>
      <div className="lv-mc-info">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#2563eb" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.75 10.5h-1.5V7h1.5zM8 5.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" /></svg>
        <span>La taxonomía de <b>Compresión Norte</b> está en construcción desde el 06/10/26. Lo que se agregue a partir de esa fecha se considera nuevo respecto al registro original. Crea respaldos en los puntos importantes del levantamiento.</span>
      </div>
      <div className="scroll-x">
        <table className="tabla-app">
          <thead><tr><th>Tipo</th><th>Fecha</th><th>Registrado por</th><th>Descripción</th><th>UTs</th><th>Equipos</th></tr></thead>
          <tbody>
            {filas.map((r) => (
              <tr key={r.f}>
                <td><span className={`lv-tipo ${r.tipo[0]}`}>{r.tipo[1]}</span></td>
                <td>{r.f}</td>
                <td style={{ color: "#4b5563" }}>{r.por}</td>
                <td className="wrap">{r.d}</td>
                <td><span className="lv-desc"><Descarga />{r.ut}</span></td>
                <td><span className="lv-desc"><Descarga />{r.eq}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ───────────── Minis de la línea de tiempo ───────────── */
export function MiniIniciar() {
  return (
    <div className="lv-mini" role="img" aria-label="Diálogo Iniciar construcción de ReliaPlant">
      <div className="lv-mini-cab"><span>Iniciar construcción</span><span className="gr">×</span></div>
      <div className="lv-mini-cuerpo">
        <div>Se guardará el <b>registro original</b> de <b>Compresión Norte</b>: una copia de sus ubicaciones técnicas y equipos tal como están ahora.</div>
        <div className="aviso">Asegúrate de haber cargado ya completa la información del cliente (por ejemplo, el export de SAP) antes de iniciar.</div>
        <div><div className="lbl">Descripción</div><div className="mono" style={{ border: "1px solid #d1d5db", padding: "5px 8px", fontSize: 11.5 }}>Export de SAP PM entregado por mantenimiento, versión 3.</div></div>
        <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}><span className="bt borde">Cancelar</span><span className="bt">Registrar e iniciar</span></div>
      </div>
    </div>
  );
}

export function MiniDescargar() {
  return (
    <div className="lv-mini" role="img" aria-label="Pantalla Descargar planta de la app de campo">
      <div className="lv-mini-cab"><span>Descargar planta · Compresión Norte</span><span className="gr">Con señal</span></div>
      <div className="lv-mini-cuerpo">
        <div className="lbl">Datos (equipos, UTs, configuración)</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><span className="gr">Última descarga: 06/10/26 06:12</span><span className="bt borde">Actualizar datos</span></div>
        <div className="lbl" style={{ marginTop: 4 }}>Planos (DTI)</div>
        <div className="barra"><i style={{ width: "64%" }} /></div>
        <div className="gr">Guardando 76 de 118…</div>
      </div>
    </div>
  );
}

export function MiniResultado() {
  return (
    <div className="lv-mini" role="img" aria-label="Botones de resultado en campo de la app móvil">
      <div className="lv-mini-cab"><span>P-211B · Resultado en campo</span><span className="gr">CN-210</span></div>
      <div className="lv-mini-cuerpo">
        <div className="lv-est4">
          <span className="enc sel">Encontrado</span>
          <span className="com">Con comentarios</span>
          <span className="noe">No encontrado</span>
          <span className="nor">No requiere</span>
        </div>
      </div>
    </div>
  );
}

export function MiniNuevo() {
  return (
    <div className="lv-mini" role="img" aria-label="Registro de un equipo nuevo desde la app de campo">
      <div className="lv-mini-cab"><span>Nuevo equipo</span><span className="gr">UT CN-210</span></div>
      <div className="lv-mini-cuerpo">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><b style={{ fontSize: 15 }}>PT-212</b><span className="mono gr">4K7PX2RM</span></div>
        <div><div className="lbl">Tag</div><div className="mono" style={{ border: "1px solid #d1d5db", padding: "5px 8px" }}>PT-212</div></div>
        <div className="lbl">Audio · 1 nota &nbsp; Fotos · 3</div>
        <span className="bt" style={{ width: "100%" }}>✓ Finalizar</span>
      </div>
    </div>
  );
}

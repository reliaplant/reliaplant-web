// Réplicas fieles de pantallas reales de ReliaPlant para la landing del servicio de taxonomía ISO 14224.
// Fuente de cada una (repo reliaplant-app):
//  · ArbolUT        → app/dashboard/page.tsx (árbol de UT con totales "(N E)" y equipos con equipo superior)
//  · DatosTecnicos  → app/configuracion/components/DatosTecnicos.tsx + DATOS_TECNICOS_DEFAULT (constants.general.tsx)
//  · Criticidad     → app/configuracion/components/CriticalidadConfig.tsx + CRITICALITY_SEVERITY (models.general.tsx)
//  · CatalogoFallas → app/dashboard/gmao/components/ConfiguracionGMAO.tsx + services/gmao/defaultGMAOConfig.ts
//  · VistaPrevia    → app/configuracion/components/TaxonomyUploadPreview.tsx
// Los marcadores numerados (.num) no son de la app: enlazan con las notas al costado.

import React from "react";

const Num = ({ n }: { n: number }) => <span className="num" aria-hidden="true">{n}</span>;

const Cab = ({ act, sub, subAct, planta = true }: { act: string; sub: string[]; subAct: string; planta?: boolean }) => (
  <>
    <div className="rp-head">
      <div className="rp-logo">RELIAPLANT</div>
      {planta && <div className="rp-planta">Compresión Norte</div>}
      <div className="rp-tabs">
        {["TAX", "GMAO", "RCA", "RCM", "PM", "RBI"].map((t) => (
          <span key={t} className={t === act ? "act" : undefined}>{t}</span>
        ))}
      </div>
    </div>
    <div className="rp-sub">
      {sub.map((s) => (
        <span key={s} className={s === subAct ? "act" : undefined}>{s}</span>
      ))}
    </div>
  </>
);

const SUB_TAX = ["Lista de Activos", "Tabla", "Map view", "DTIs", "Documentos", "Configuración"];

const Car = ({ estado }: { estado: "abierto" | "cerrado" | "sin" }) => (
  <svg className={`car${estado === "abierto" ? " abierto" : estado === "sin" ? " sin" : ""}`} viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4z" /></svg>
);
const IcUT = ({ color = "#16a34a" }: { color?: string }) => (
  <svg className="ic" viewBox="0 0 16 16" fill={color}><path d="M3 14V2h7v4h3v8H9v-3H7v3zM5 4v1.5h1.5V4zm0 3v1.5h1.5V7zm3-3v1.5h1.5V4zm0 3v1.5h1.5V7z" /></svg>
);
const IcEq = () => (
  <svg className="ic" viewBox="0 0 16 16" fill="none" stroke="#3b82f6" strokeWidth="1.3"><rect x="2.5" y="2.5" width="11" height="11" /><circle cx="8" cy="8" r="2.6" /><path d="M8 2.5v2.9M8 10.6v2.9" /></svg>
);

type Fila = { n: number; car: "abierto" | "cerrado" | "sin"; ut?: boolean; utColor?: string; cod: string; d: string; tot?: string; sel?: boolean; marca?: number };
const FILAS: Fila[] = [
  { n: 0, car: "abierto", ut: true, cod: "CN", d: "Compresión Norte", tot: "1.284 E", marca: 1 },
  { n: 1, car: "abierto", ut: true, cod: "CN-200", d: "Separación", tot: "212 E" },
  { n: 2, car: "abierto", ut: true, utColor: "#2563eb", cod: "CN-210", d: "Sistema de condensado", tot: "38 E" },
  { n: 3, car: "sin", cod: "V-210", d: "Separador horizontal", marca: 2 },
  { n: 3, car: "abierto", cod: "P-211A", d: "Bomba centrífuga de condensado", sel: true },
  { n: 4, car: "sin", cod: "PM-211A", d: "Motor eléctrico P-211A", marca: 3 },
  { n: 3, car: "cerrado", cod: "P-211B", d: "Bomba centrífuga de condensado" },
  { n: 3, car: "sin", cod: "LV-210", d: "Válvula de control de nivel" },
  { n: 3, car: "sin", cod: "PT-212", d: "Transmisor de presión" },
  { n: 2, car: "cerrado", ut: true, cod: "CN-220", d: "Depurador de entrada", tot: "44 E" },
  { n: 1, car: "cerrado", ut: true, cod: "CN-300", d: "Compresión", tot: "506 E", marca: 4 },
];

export function ArbolUT() {
  return (
    <div className="pantalla" role="img" aria-label="Árbol de ubicaciones técnicas de ReliaPlant: planta CN, unidad CN-200, sistema CN-210 y sus equipos, con el motor PM-211A colgado de la bomba P-211A">
      <Cab act="TAX" sub={SUB_TAX} subAct="Lista de Activos" />
      <div className="arbol-p">
        <div className="arbol-cab">
          <div className="l1">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="#3b82f6"><path d="M1 14V7l4 2V7l4 2V3h3v11z" /></svg>
            <span className="pl">PLANTA</span><span className="nm">- COMPRESIÓN NORTE</span><span className="crear">Crear</span>
          </div>
          <div className="rp-buscar">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="#9ca3af"><path d="M10.8 9.7a5.5 5.5 0 1 0-1.1 1.1l3.6 3.6 1.1-1.1zM6.5 10.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg>
            Buscar por tag, código o descripción
          </div>
        </div>
        <div className="arb">
          {FILAS.map((f) => (
            <div key={f.cod} className={`fila${f.sel ? " sel" : ""}`} style={{ paddingLeft: 8 + f.n * 16 }}>
              <Car estado={f.car} />
              {f.ut ? <IcUT color={f.utColor} /> : <IcEq />}
              <span>{f.cod}</span>
              <span className="d">- {f.d}</span>
              {f.tot && <span className="tot">({f.tot})</span>}
              {f.marca && <Num n={f.marca} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CLASES_DT: [string, number][] = [
  ["BOILERS", 7], ["COMBUSTION ENGINES", 13], ["COMPRESSORS", 11], ["ELECTRIC GENERATORS", 7], ["ELECTRIC MOTORS", 13],
  ["GAS TURBINES", 8], ["HEAT EXCHANGERS", 10], ["PIPING", 7], ["PRESSURE VESSELS", 9], ["PUMPS", 12],
  ["STEAM TURBINES", 8], ["STORAGE TANKS", 8], ["VALVES", 9],
];
type Campo = { nombre: string; unidad?: string; tipo: "numerico" | "texto" | "seleccion" | "booleano"; op?: string };
const CAMPOS_PUMPS: Campo[] = [
  { nombre: "POTENCIA NOMINAL", unidad: "kW", tipo: "numerico" },
  { nombre: "CAUDAL NOMINAL", unidad: "m³/h", tipo: "numerico" },
  { nombre: "CABEZA / TDH", unidad: "m", tipo: "numerico" },
  { nombre: "PRESIÓN DE DESCARGA", unidad: "bar", tipo: "numerico" },
  { nombre: "VELOCIDAD NOMINAL", unidad: "rpm", tipo: "numerico" },
  { nombre: "NPSH REQUERIDO", unidad: "m", tipo: "numerico" },
  { nombre: "EFICIENCIA", unidad: "%", tipo: "numerico" },
  { nombre: "TIPO DE SELLO", tipo: "seleccion", op: "MECÁNICO SIMPLE, MECÁNICO DOBLE, EMPAQUETADURA, SELLO SECO, MAGNÉTICO" },
  { nombre: "MATERIAL DE CARCASA", tipo: "seleccion", op: "ACERO AL CARBONO, ACERO INOXIDABLE 316, ACERO INOXIDABLE 304, HIERRO FUNDIDO…" },
  { nombre: "FLUIDO DE PROCESO", tipo: "texto" },
  { nombre: "TEMPERATURA DE OPERACIÓN", unidad: "°C", tipo: "numerico" },
  { nombre: "API 610", tipo: "booleano" },
];
const BADGE = {
  numerico: { bg: "#d0e2ff", color: "#0043ce", t: "Numérico" },
  texto: { bg: "#e0e0e0", color: "#525252", t: "Texto" },
  seleccion: { bg: "#defbe6", color: "#0e6027", t: "Selección" },
  booleano: { bg: "#fff1e6", color: "#8a3800", t: "Sí / No" },
};

export function DatosTecnicos() {
  return (
    <div className="pantalla" role="img" aria-label="Configuración de datos técnicos por clase en ReliaPlant: la clase Pumps con sus 12 campos, unidades y tipo de dato">
      <Cab act="TAX" sub={SUB_TAX} subAct="Configuración" planta={false} />
      <div className="dt">
        <div className="dt-clases">
          <div className="barra">Clases de equipo</div>
          {CLASES_DT.map(([c, n]) => (
            <div key={c} className={`dt-clase${c === "PUMPS" ? " sel" : ""}`}>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 2l6 3-6 3-6-3zM2 8l6 3 6-3M2 11l6 3 6-3" /></svg>
              <span className="nom">{c}</span>
              <span className="cnt">{n}</span>
            </div>
          ))}
        </div>
        <div className="dt-campos">
          <div className="barra"><span>Datos técnicos · PUMPS <Num n={1} /></span><span className="btns"><i className="b-out">Restablecer</i><i className="b-az">+ Agregar</i></span></div>
          <div className="dt-th"><span className="f">Campo</span><span className="u">Unidad</span><span className="t">Tipo <Num n={2} /></span></div>
          {CAMPOS_PUMPS.map((c) => {
            const b = BADGE[c.tipo];
            return (
              <div key={c.nombre} className="dt-fila">
                <span className="f"><b>{c.nombre}</b>{c.op && <em> · {c.op}</em>}{c.nombre === "TIPO DE SELLO" && <Num n={3} />}</span>
                <span className="u">{c.unidad || "—"}</span>
                <span className="t"><i style={{ background: b.bg, color: b.color }}>{b.t}</i></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Info = ({ children }: { children: React.ReactNode }) => (
  <div className="banner-info">
    <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 26a12 12 0 1112-12 12 12 0 01-12 12z" /><path d="M14 14h4v10h-4zm0-6h4v4h-4z" /></svg>
    <p>{children}</p>
  </div>
);
const Candado = () => (
  <svg width="13" height="13" viewBox="0 0 32 32" fill="#9ca3af"><path d="M24 14h-2V8a6 6 0 00-12 0v6H8a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V16a2 2 0 00-2-2zM12 8a4 4 0 018 0v6h-8zm12 20H8V16h16z" /></svg>
);

export function Criticidad() {
  const niveles = [
    { tag: "AA", sev: "Muy alta", color: "#7f1d1d", desc: "Crítica", core: false },
    { tag: "A", sev: "Alta", color: "#da1e28", desc: "Alta", core: true },
    { tag: "B", sev: "Media", color: "#f1c21b", desc: "Media", core: true },
    { tag: "C", sev: "Baja", color: "#24a148", desc: "Baja", core: true },
  ];
  return (
    <div className="pantalla" role="img" aria-label="Niveles de criticidad de la organización en ReliaPlant: etiqueta, nivel con su color y descriptor">
      <div className="rp-head"><div className="rp-logo">RELIAPLANT</div><div className="rp-tabs"><span className="act">TAX</span><span>GMAO</span><span>RCA</span><span>RCM</span></div></div>
      <div className="cfg">
        <div className="barra"><span>Niveles de criticidad</span><span className="btns"><i className="b-out">Restablecer</i><i className="b-az">Editar</i></span></div>
        <Info>Niveles de criticidad configurados para tu organización. Haz clic en “Editar” para modificar etiquetas, descriptores o reordenar.</Info>
        <table className="t-cfg">
          <thead><tr><th style={{ width: 80 }}>Etiqueta <Num n={1} /></th><th style={{ width: 190 }}>Nivel de criticidad <Num n={2} /></th><th>Descriptor</th><th style={{ width: 40 }}></th></tr></thead>
          <tbody>
            {niveles.map((l) => (
              <tr key={l.tag}>
                <td className="tg">{l.tag}</td>
                <td><span className="sev"><i style={{ background: l.color }} />{l.sev}</span></td>
                <td className="ds">{l.desc}</td>
                <td className="c">{l.core ? <Candado /> : <Num n={3} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CatalogoFallas() {
  const clases: [string, number, number][] = [
    ["Bombas", 13, 20], ["Compresores", 13, 20], ["Motores eléctricos", 10, 15], ["Válvulas de control", 10, 16], ["Intercambiadores de calor", 8, 11],
  ];
  const mec: [string, string][] = [
    ["2.0", "Falla de material — general"], ["2.1", "Cavitación"], ["2.2", "Corrosión"], ["2.3", "Erosión"], ["2.4", "Desgaste"], ["2.5", "Rotura"], ["2.6", "Fatiga"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Catálogo de fallas ISO 14224 en la configuración del GMAO de ReliaPlant: partes y daños por clase de equipo y lista de mecanismos de falla">
      <Cab act="GMAO" sub={["Avisos", "Órdenes de Trabajo", "Calendario", "Configuración"]} subAct="Configuración" planta={false} />
      <div className="gm">
        <nav className="gm-nav" aria-hidden="true">
          <span>Puestos de trabajo y técnicos</span><span>Disponibilidad</span><span>Prioridades</span><span className="act">Catálogo de fallas</span>
        </nav>
        <div className="cfg">
          <div className="barra"><span>Catálogo de fallas</span></div>
          <Info>Catálogo base ISO 14224 para el cierre técnico de las órdenes: partes, daños y causas por clase de equipo, y listas generales.</Info>
          <p className="sep">Por clase de equipo <Num n={1} /></p>
          <table className="t-cfg">
            <thead><tr><th>Clase</th><th className="r">Partes</th><th className="r">Daños / modos de falla</th><th className="r">Causas</th></tr></thead>
            <tbody>
              {clases.map(([c, p, d]) => (
                <tr key={c}><td>{c}</td><td className="r">{p}</td><td className="r">{d}</td><td className="r">0</td></tr>
              ))}
            </tbody>
          </table>
          <p className="sep">Mecanismos de falla <span className="cnt">· 38</span> <Num n={2} /></p>
          <table className="t-cfg">
            <thead><tr><th style={{ width: 100 }}>Código</th><th>Descripción</th></tr></thead>
            <tbody>
              {mec.map(([c, d]) => (
                <tr key={c}><td className="cod">{c}</td><td>{d}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function VistaPrevia() {
  const stats: [string, number, string][] = [
    ["Nuevos", 212, "#16a34a"], ["Actualizar", 37, "#2563eb"], ["Sin cambio", 1031, "#6b7280"], ["Conflictos", 0, "#d97706"], ["Errores", 4, "#dc2626"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Vista previa de carga masiva en ReliaPlant: resumen de equipos nuevos, a actualizar, sin cambio, conflictos y errores antes de escribir">
      <Cab act="TAX" sub={SUB_TAX} subAct="Configuración" />
      <div className="vp">
        <div className="vp-tit">Vista previa de carga</div>
        <div className="vp-sub">Revisa los cambios antes de ejecutarlos. Resuelve conflictos si los hay.</div>
        <div className="vp-stats">
          {stats.map(([l, n, c]) => (
            <div key={l}><b style={{ color: c }}>{n.toLocaleString("es-MX")}</b><span>{l}</span></div>
          ))}
        </div>
        <div className="vp-tabs">
          <span>Todos (1.284)</span><span>Nuevos (212)</span><span className="act">Actualizar (37)</span><span>Sin cambio (1.031)</span><span>Errores (4)</span>
        </div>
        <div className="scroll-x">
          <table className="tabla-app">
            <thead><tr><th style={{ width: 40 }}></th><th>Fila</th><th>TAG</th><th>UBICACIÓN TÉCNICA</th><th>CÓDIGO DE TIPO</th><th>CRITICIDAD</th><th>Acción</th></tr></thead>
            <tbody>
              <tr className="vp-act">
                <td className="c"><Ok color="#2563eb" /></td><td>14</td><td className="mono b">P-211A</td>
                <td className="mono">CN-210</td>
                <td className="mono"><s>PUGE</s> PUCE <Num n={1} /></td>
                <td><s>B</s> A</td>
                <td><span className="chip-e e-azul">Actualizar</span></td>
              </tr>
              <tr className="vp-act">
                <td className="c"><Ok color="#2563eb" /></td><td>15</td><td className="mono b">PM-211A</td>
                <td className="mono">CN-210</td>
                <td className="mono"><s>EMGE</s> EMAC</td>
                <td>A</td>
                <td><span className="chip-e e-azul">Actualizar</span></td>
              </tr>
              <tr className="vp-err">
                <td className="c"><svg width="14" height="14" viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" /></svg></td>
                <td>88</td><td className="mono b">FV-231</td><td colSpan={3}><span className="err">La ubicación técnica &quot;CN-231&quot; no existe en la planta <Num n={2} /></span></td>
                <td><span className="chip-e e-rojo">Error</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Ok({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill={color} /><path d="M4.8 8.2l2.1 2.1 4.3-4.6" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>
  );
}

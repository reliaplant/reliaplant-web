import Image from "next/image";
import type { ReactNode } from "react";

// Réplicas de pantallas reales del GMAO de ReliaPlant.
// Fuente: reliaplant-app/app/dashboard/gmao/components/* (AvisosTab, OrdenesTab, AvisoDetalle,
// OrdenDetalle, CalendarioOT, EjecutoresConfig) y reliaplant-mobile/src/app/(app)/aviso/nuevo.tsx.
// Columnas, textos, estados y colores copiados del código; los datos son de ejemplo
// (planta "Compresión Norte").

type Prioridad = "emergencia" | "alta" | "media" | "baja";
const CHIP_PRIORIDAD: Record<Prioridad, [string, string]> = {
  emergencia: ["p-emer", "Emergencia"],
  alta: ["p-alta", "Alta"],
  media: ["p-media", "Media"],
  baja: ["p-baja", "Baja"],
};
const ChipP = ({ p }: { p: Prioridad }) => <span className={`chip-e ${CHIP_PRIORIDAD[p][0]}`}>{CHIP_PRIORIDAD[p][1]}</span>;

// Estados: mismas clases Tailwind que constantesGMAO.ts, traducidas a las clases de home.css.
const CHIP_ESTADO: Record<string, string> = {
  Nuevo: "e-nuevo", "En revisión": "e-rev", Aprobado: "e-aprob", Rechazado: "e-rojo", Duplicado: "p-baja", Cerrado: "e-cerr",
  Abierta: "e-nuevo", Planificada: "e-rev", "En ejecución": "e-aprob", Cerrada: "e-cerr", Anulada: "p-baja",
};
const ChipE = ({ e }: { e: string }) => <span className={`chip-e ${CHIP_ESTADO[e]}`}>{e}</span>;

const Embudo = () => (
  <svg className="cm-embudo" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 3h12l-4.5 5.5V13l-3 1.5V8.5z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
);
const Lupa = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
);
const Toggle = ({ on, texto }: { on: boolean; texto: string }) => (
  <span className="cm-tg"><span>{texto}</span><i className={on ? "on" : ""} /></span>
);
const Avatar = ({ n }: { n: string }) => (
  <span className="cm-av"><b>{n.charAt(0)}</b>{n}</span>
);

/** Cabecera de la app con GMAO activo y la sub-pestaña indicada. */
function Cabecera({ sub }: { sub: "Avisos" | "Órdenes de Trabajo" | "Calendario" | "Configuración" }) {
  return (
    <>
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        <div className="rp-planta">Compresión Norte</div>
        <div className="rp-tabs"><span>TAX</span><span className="act">GMAO</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div>
      </div>
      <div className="rp-sub">
        {(["Avisos", "Órdenes de Trabajo", "Calendario", "Configuración"] as const).map((s) => (
          <span key={s} className={s === sub ? "act" : undefined}>{s}</span>
        ))}
      </div>
    </>
  );
}

/** Marcador numerado para las anotaciones. */
export const Num = ({ n, style }: { n: number; style?: React.CSSProperties }) => (
  <span className="cm-num" style={style} aria-hidden="true">{n}</span>
);

// ───────────────────────── App móvil: Reportar avería (paso 4 de 10) ─────────────────────────
export function TelefonoAviso() {
  return (
    <div className="cm-tel" role="img" aria-label="App de campo de ReliaPlant: reportar avería, paso 4 de 10, ¿el equipo está parado?">
      <div className="cm-tel-p">
        <div className="cm-tel-barra">
          <div className="cm-tel-est"><span>6:22</span><span className="cm-sin">Sin señal</span></div>
          <div className="cm-tel-tit">
            <span className="cm-flecha">←</span>
            <div><b>Reportar avería</b><small>Paso 4 de 10 · Estado del equipo</small></div>
          </div>
          <div className="cm-tel-prog"><i style={{ width: "40%" }} /></div>
        </div>
        <div className="cm-tel-cuerpo">
          <div className="cm-tel-eq"><span className="mono">P-211A</span> · Bomba centrífuga de condensado<small>CN-210 · Criticidad A</small></div>
          <p className="cm-tel-preg">¿El equipo está parado?</p>
          <div className="cm-op"><i /> <b>Sí, está parado</b></div>
          <div className="cm-op act"><i /> <b>No, sigue operando</b></div>
        </div>
        <div className="cm-tel-pie"><span>Siguiente →</span></div>
      </div>
    </div>
  );
}

// ───────────────────────── GMAO → Avisos ─────────────────────────
export function PantallaAvisos({ marcas = false }: { marcas?: boolean }) {
  const filas: [string, string, string, Prioridad, string, boolean, string, string, string][] = [
    ["AV-000412", "Fuga por el sello mecánico", "P-211A", "alta", "Degradada", false, "11 nov 05:50", "Lucía Gómez", "En revisión"],
    ["AV-000411", "Disparo por alta temperatura de descarga", "K-301A", "emergencia", "Crítica", true, "10 nov 22:15", "Carlos Ruiz", "Aprobado"],
    ["AV-000410", "Manómetro sin lectura", "PI-213", "baja", "Incipiente", false, "10 nov 16:40", "Lucía Gómez", "Nuevo"],
    ["AV-000409", "Ruido en ventilador del aeroenfriador", "E-410C", "media", "Incipiente", false, "09 nov 09:30", "Jorge Pérez", "Aprobado"],
    ["AV-000407", "Válvula de nivel oscilando", "LV-210", "alta", "Degradada", false, "08 nov 13:05", "Marta Rondón", "Aprobado"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Avisos del GMAO de ReliaPlant con prioridad, impacto, equipo parado y estatus de cada aviso">
      <Cabecera sub="Avisos" />
      <div className="cm-barra">
        <span className="cm-buscar"><Lupa />Buscar aviso, equipo...</span>
        <Toggle on texto="Ocultar cerrados" />{marcas && <Num n={3} />}
        <Toggle on={false} texto="Solo equipos parados" />
        <span className="cm-der">{marcas && <Num n={4} />}<span className="cm-b gris">Excel</span><span className="cm-b azul">+ Crear aviso</span></span>
      </div>
      <div className="scroll-x">
        <table className="tabla-app">
          <thead>
            <tr>
              <th>N.º aviso</th><th>Título</th><th className="c">Tag de equipo</th>
              <th className="c">Prioridad <Embudo />{marcas && <Num n={2} />}</th><th className="c">Impacto <Embudo /></th><th className="c">Equipo parado <Embudo />{marcas && <Num n={1} />}</th>
              <th className="c">Inicio de avería <Embudo /></th><th className="c">Reportado por <Embudo /></th><th className="c">Estatus <Embudo /></th>
            </tr>
          </thead>
          <tbody>
            {filas.map(([n, t, tag, p, imp, parado, f, quien, est]) => (
              <tr key={n}>
                <td className="b">{n}</td>
                <td><span className="cm-sub">{t}</span></td>
                <td className="c">{tag}</td>
                <td className="c"><ChipP p={p} /></td>
                <td className={`c${imp === "Crítica" ? " cm-rojo" : ""}`}>{imp}</td>
                <td className={`c${parado ? " cm-rojo" : ""}`}>{parado ? "Sí" : "No"}</td>
                <td className="c">{f}</td>
                <td className="c"><Avatar n={quien} /></td>
                <td className="c"><ChipE e={est} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cm-pag">Mostrando <b>1–5</b> de <b>5</b> <span>/ 38</span></div>
    </div>
  );
}

// ───────────────────────── Revisión del aviso (AvisoDetalle) ─────────────────────────
const Destello = () => (
  <svg className="cm-ia" viewBox="0 0 24 24" aria-hidden="true">
    <defs><linearGradient id="cmGradIA" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient></defs>
    <path d="M12 2c.4 3.9 1.6 6.2 3.3 7.7C17 11.2 19.3 11.7 22 12c-2.7.3-5 .8-6.7 2.3C13.6 15.8 12.4 18.1 12 22c-.4-3.9-1.6-6.2-3.3-7.7C7 12.8 4.7 12.3 2 12c2.7-.3 5-.8 6.7-2.3C10.4 8.2 11.6 5.9 12 2z" fill="url(#cmGradIA)" />
  </svg>
);
const Msg = ({ children }: { children: ReactNode }) => (
  <div className="cm-msg"><Destello /><div>{children}</div></div>
);

function Modal({ numero, estado, pildora, children, etiqueta }: { numero: string; estado: string; pildora: string; children: ReactNode; etiqueta: string }) {
  return (
    <div className="cm-modal" role="img" aria-label={etiqueta}>
      <div className="cm-modal-cab"><b>{numero}</b><span className={`cm-pild ${pildora}`}>{estado}</span><span className="cm-x">×</span></div>
      <div className="cm-modal-cuerpo">{children}</div>
    </div>
  );
}

export function ChatAviso() {
  return (
    <Modal numero="AV-000412" estado="En revisión" pildora="sky" etiqueta="Revisión de un aviso en ReliaPlant contada como conversación, con fotos y prioridad sugerida">
      <Msg><b>Lucía</b> reportó «Fuga por el sello mecánico» en <b>P-211A</b> (Bomba centrífuga de condensado) hace 35 minutos.</Msg>
      <Msg>El equipo <b>sigue operando</b> y la falla es <b>degradada</b>: cumple la función pero por debajo de lo aceptable.</Msg>
      <Msg>Empezó el miércoles, 11 de noviembre, 05:50. Lo detectaron por inspección. Síntoma: <b>Fuga</b>.</Msg>
      <Msg>
        Adjuntó 2 fotos:
        <div className="cm-fotos">
          <Image src="/sitio/equipo/sello.jpg" alt="Foto del aviso: goteo en el sello mecánico de la bomba" width={80} height={80} />
          <Image src="/sitio/equipo/placa.jpg" alt="Foto del aviso: placa de la bomba" width={80} height={80} />
        </div>
      </Msg>
      <Msg>Es un equipo de criticidad <b>alta</b>. La prioridad es <b>alta</b>.</Msg>
      <Msg>¿Qué hacemos con este aviso?</Msg>
      <div className="cm-acc">
        <span className="cm-b azul">Aprobar y crear OT</span><span className="cm-b gris">Rechazar</span>
        <span className="cm-b gris">Es duplicado</span><span className="cm-b gris">Cambiar prioridad</span>
      </div>
      <div className="cm-pleg"><span>⌄ Ver todos los datos</span><span>⌄ Ver historial (2)</span></div>
    </Modal>
  );
}

// ───────────────────────── GMAO → Órdenes de trabajo ─────────────────────────
export function PantallaOrdenes() {
  const filas: [string, string, string, string, Prioridad, string, boolean, string, string][] = [
    ["OT-000458", "Disparo por alta temperatura de descarga", "Correctiva", "K-301A", "emergencia", "12 nov", false, "Carlos Ruiz", "Planificada"],
    ["OT-000456", "Fuga por el sello mecánico", "Correctiva", "P-211A", "alta", "11 nov", false, "Jorge Pérez", "En ejecución"],
    ["OT-000455", "Revisar válvulas del cilindro 2", "Correctiva", "K-301B", "media", "11 nov", false, "Jorge Pérez", "Planificada"],
    ["OT-000453", "Lubricación de rodamientos", "Preventiva", "E-410C", "baja", "10 nov", true, "Luis Mora", "Planificada"],
    ["OT-000452", "Ruido en ventilador del aeroenfriador", "Correctiva", "E-410C", "media", "-", false, "", "Abierta"],
    ["OT-000450", "Cambiar manómetro por transmisor", "Mejora", "PI-213", "media", "-", false, "", "Abierta"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Órdenes de Trabajo del GMAO de ReliaPlant con tipo, prioridad, inicio planificado, responsable y estatus">
      <Cabecera sub="Órdenes de Trabajo" />
      <div className="cm-barra">
        <span className="cm-buscar"><Lupa />Buscar OT, equipo...</span>
        <Toggle on texto="Ocultar cerradas" />
        <Toggle on={false} texto="Solo mis OTs" />
        <span className="cm-der"><span className="cm-b gris">Excel</span><span className="cm-b azul">+ Crear OT</span></span>
      </div>
      <div className="scroll-x">
        <table className="tabla-app">
          <thead>
            <tr>
              <th>N.º OT</th><th>Título</th><th className="c">Tipo <Embudo /></th><th className="c">Tag de equipo</th>
              <th className="c">Prioridad <Embudo /></th><th className="c">Inicio planificado <Embudo /></th>
              <th className="c">Responsable <Embudo /></th><th className="c">Estatus <Embudo /></th>
            </tr>
          </thead>
          <tbody>
            {filas.map(([n, t, tipo, tag, p, f, vencido, resp, est]) => (
              <tr key={n}>
                <td className="b">{n}</td>
                <td><span className="cm-sub">{t}</span></td>
                <td className="c">{tipo}</td>
                <td className="c">{tag}</td>
                <td className="c"><ChipP p={p} /></td>
                <td className={`c${vencido ? " cm-rojo-n" : ""}`}>{f}</td>
                <td className="c">{resp ? <Avatar n={resp} /> : "-"}</td>
                <td className="c"><ChipE e={est} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cm-pag">Mostrando <b>1–6</b> de <b>6</b> <span>/ 51</span></div>
    </div>
  );
}

// ───────────────────────── Detalle de la OT (OrdenDetalle) en ejecución ─────────────────────────
export function ChatOrden() {
  const tareas: [number, string, string, string, number, string, string][] = [
    [10, "Aislar y bloquear el equipo (LOTO), drenar y despresurizar", "Operaciones", "Pedro Lara", 1, "1 h", "1 h"],
    [20, "Desmontar e inspeccionar sello mecánico", "Mecánica", "Jorge Pérez, Raúl Díaz", 2, "2 h", "4 h"],
    [30, "Cambiar sello mecánico y empaques", "Mecánica", "Jorge Pérez, Raúl Díaz", 2, "3 h", "0 h"],
    [40, "Verificar alineación del acople", "Mecánica", "Raúl Díaz", 1, "1 h", "0 h"],
    [50, "Prueba de arranque y verificación de fugas", "Operaciones", "Pedro Lara", 1, "0.5 h", "0 h"],
  ];
  return (
    <Modal numero="OT-000456" estado="En ejecución" pildora="blue" etiqueta="Detalle de una orden de trabajo en ejecución con sus tareas, técnicos y horas">
      <Msg>Esta OT viene del aviso <b>AV-000412</b> («Fuga por el sello mecánico») que reportó <b>Lucía</b> hace 5 horas.</Msg>
      <Msg>Equipo <b>P-211A</b> (Bomba centrífuga de condensado). Prioridad <b>alta</b>.</Msg>
      <Msg>
        Responsable: <b>Jorge Pérez</b>. Programada para el miércoles, 11 de noviembre, 08:00. <b>Requiere parar el equipo.</b>
        <div className="scroll-x">
          <table className="cm-tareas">
            <thead><tr><th>Tarea</th><th>Puesto</th><th>Quién</th><th className="r">Personas</th><th className="r">Horas est.</th><th className="r">Horas reales</th></tr></thead>
            <tbody>
              {tareas.map(([n, d, p, q, pe, he, hr]) => (
                <tr key={n}><td><span className="cm-op-n">{n}</span>{d}</td><td className="g">{p}</td><td className="g">{q}</td><td className="r g">{pe}</td><td className="r g">{he}</td><td className="r b">{hr}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="cm-mat">Materiales: 1 sello mecánico 2&quot;, 2 empaques</p>
      </Msg>
      <Msg>
        En ejecución desde el miércoles, 11 de noviembre, 08:05. Llevan <b>5 h</b> de 12.5 h hombre estimadas.
        <div className="cm-progreso"><i style={{ width: "40%" }} /></div>
      </Msg>
      <Msg>¿Registras horas o ya terminaste?</Msg>
      <div className="cm-acc"><span className="cm-b gris">Registrar horas</span><span className="cm-b azul">Terminar y cerrar</span></div>
    </Modal>
  );
}

/** La misma OT ya cerrada: el cierre técnico contado. */
export function ChatOrdenCerrada() {
  return (
    <Modal numero="OT-000456" estado="Cerrada" pildora="verde" etiqueta="Orden de trabajo cerrada con parte, daño, causa, acción y tiempo fuera de servicio">
      <Msg>Esta OT viene del aviso <b>AV-000412</b> («Fuga por el sello mecánico») que reportó <b>Lucía</b> hace 10 horas.</Msg>
      <Msg>
        <b>Jorge</b> la cerró hace un momento. Falló <b>sello mecánico</b>: caras del sello rayadas. Causa: operación en seco. Se hizo: se cambió el sello y se alineó el acople.
        {" "}El equipo estuvo fuera de servicio <b>9.7 h</b>.
        <p className="cm-com">Revisar el nivel del tanque de succión antes del arranque.</p>
      </Msg>
      <div className="cm-pleg"><span>⌄ Ver historial (7)</span></div>
    </Modal>
  );
}

// ───────────────────────── GMAO → Calendario (vista semana) ─────────────────────────
type Ev = { d: number; ini: number; fin: number; t: string; tag: string; quien: string; est: "planificada" | "en_ejecucion" | "cerrada"; col?: number; cols?: number; emer?: boolean; tarde?: boolean; cruce?: boolean };
const HORA_INI = 6;
const HORAS = 12;
const H = 34; // px por hora en la réplica
const EVENTOS: Ev[] = [
  { d: 0, ini: 8, fin: 10, t: "Medición de vibraciones", tag: "P-211B", quien: "Carlos", est: "cerrada" },
  { d: 0, ini: 13, fin: 16, t: "Cambio de empaque", tag: "LV-210", quien: "Raúl", est: "cerrada" },
  { d: 1, ini: 7, fin: 9, t: "Lubricación de rodamientos", tag: "E-410C", quien: "Luis", est: "planificada", tarde: true },
  { d: 2, ini: 8, fin: 15.5, t: "Fuga por el sello mecánico", tag: "P-211A", quien: "Jorge", est: "en_ejecucion", col: 1, cols: 2, cruce: true },
  { d: 2, ini: 11, fin: 14, t: "Revisar válvulas del cilindro 2", tag: "K-301B", quien: "Jorge", est: "planificada", col: 0, cols: 2, cruce: true },
  { d: 3, ini: 7, fin: 13, t: "Disparo por alta temperatura de descarga", tag: "K-301A", quien: "Carlos", est: "planificada", emer: true },
  { d: 4, ini: 8, fin: 10, t: "Calibrar transmisor de presión", tag: "PT-212", quien: "Luis", est: "planificada" },
];
const hh = (x: number) => `${Math.floor(x)}:${x % 1 ? "30" : "00"}`;

export function CalendarioSemana() {
  const dias = ["Lun 9", "Mar 10", "Mié 11", "Jue 12", "Vie 13", "Sáb 14", "Dom 15"];
  const ahora = 10 + 20 / 60;
  return (
    <div className="pantalla" role="img" aria-label="Calendario de órdenes de trabajo en vista semana, con órdenes atrasadas, cruces de responsable y el asistente">
      <Cabecera sub="Calendario" />
      <div className="cm-barra">
        <span className="cm-b gris">Hoy</span>
        <span className="cm-nav">‹ ›</span>
        <b className="cm-cal-tit">9 – 15 de noviembre de 2026</b>
        <span className="cm-der">
          <Toggle on={false} texto="Solo mis OTs" />
          <Toggle on texto="Mostrar cerradas" />
          <span className="cm-seg"><span>Día</span><span className="act">Semana</span><span>Mes</span></span>
          <span className="cm-b gris act"><span className="cm-azul">✦</span> Asistente <i className="cm-badge">3</i></span>
        </span>
      </div>
      <div className="scroll-x">
        <div className="cm-cal">
          <div className="cm-cal-grid">
            <div className="cm-cal-dias">
              <span />
              {dias.map((d, i) => <span key={d} className={i === 2 ? "hoy" : undefined}>{d}</span>)}
            </div>
            <div className="cm-cal-cuerpo" style={{ height: HORAS * H }}>
              <div className="cm-cal-horas">
                {Array.from({ length: HORAS }, (_, i) => <span key={i} style={{ top: i * H }}>{HORA_INI + i}:00</span>)}
              </div>
              {dias.map((d, i) => (
                <div key={d} className={`cm-cal-col${i === 2 ? " hoy" : ""}`}>
                  {Array.from({ length: HORAS }, (_, h) => <i key={h} style={{ top: h * H }} />)}
                  {i < 2 && <div className="cm-pasado" />}
                  {i === 2 && <div className="cm-pasado" style={{ height: (ahora - HORA_INI) * H, bottom: "auto" }} />}
                  {EVENTOS.filter((e) => e.d === i).map((e) => {
                    const cols = e.cols ?? 1, col = e.col ?? 0;
                    return (
                      <div
                        key={e.t}
                        className={`cm-ev ${e.est}${e.tarde ? " tarde" : ""}`}
                        style={{ top: (e.ini - HORA_INI) * H, height: (e.fin - e.ini) * H - 2, left: `calc(${(col / cols) * 100}% + 2px)`, width: `calc(${100 / cols}% - 4px)` }}
                      >
                        {e.emer && <span className="cm-franja" />}
                        {(e.tarde || e.cruce) && <span className="cm-marca">!</span>}
                        <b>{e.est === "cerrada" && "✓ "}{e.t}</b>
                        <small>{hh(e.ini)}–{hh(e.fin)} · {e.tag}</small>
                        <small>{e.quien}</small>
                      </div>
                    );
                  })}
                  {i === 2 && <div className="cm-ahora" style={{ top: (ahora - HORA_INI) * H }} />}
                </div>
              ))}
            </div>
          </div>
          <aside className="cm-asis">
            <div className="cm-asis-cab"><span className="cm-azul">✦</span><b>Asistente</b><span>· Esta semana</span></div>
            <div className="cm-asis-msgs">
              <Msg>Esta semana: <b>7 órdenes</b>, 26.5 h de trabajo.</Msg>
              <Msg><b className="cm-r">1 orden va tarde.</b> Tócalas para abrirlas.
                <span className="cm-fila-ot"><b>Lubricación de rodamientos</b><small>debía empezar mar 10, 7:00 · E-410C</small></span>
              </Msg>
              <Msg><b>Jorge</b> tiene dos órdenes a la vez el miércoles 11.<span className="cm-enl">Ver cruce →</span></Msg>
              <Msg>Hay <b>2 órdenes sin fecha</b>. Arrástralas al calendario.
                <span className="cm-fila-ot arr"><b>Ruido en ventilador del aeroenfriador</b><small>OT-000452 · E-410C</small></span>
              </Msg>
            </div>
            <div className="cm-asis-sug"><span className="cm-b gris">¿Qué hago ahora?</span><span className="cm-b gris">Ver atrasadas</span></div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── Configuración → Puestos de trabajo y técnicos ─────────────────────────
export function KanbanEjecutores() {
  const cols: { cod: string; nom: string; tipo: string; h: string; tecs: [string, string][]; personas: number; hh: string; uso?: string }[] = [
    { cod: "MEC", nom: "Mecánica", tipo: "Personal propio", h: "8 h × 5 d", personas: 3, hh: "522", tecs: [["Jorge Pérez", "jperez@empresa.com"], ["Raúl Díaz", "Sin cuenta en la app"], ["Andrés Silva", "Sin cuenta en la app"]], uso: "En uso: 14 tareas · 9 órdenes" },
    { cod: "ELE", nom: "Eléctrica", tipo: "Personal propio", h: "8 h × 5 d", personas: 2, hh: "348", tecs: [["Carlos Ruiz", "cruiz@empresa.com"], ["Iván Torres", "Sin cuenta en la app"]] },
    { cod: "INS", nom: "Instrumentación", tipo: "Personal propio", h: "8 h × 5 d", personas: 1, hh: "174", tecs: [["Luis Mora", "lmora@empresa.com"]] },
    { cod: "CON", nom: "Contratista", tipo: "Contratista", h: "8 h × 6 d", personas: 4, hh: "835", tecs: [] },
  ];
  return (
    <div className="pantalla" role="img" aria-label="Configuración del GMAO: puestos de trabajo con sus técnicos y su capacidad en horas-hombre por mes">
      <Cabecera sub="Configuración" />
      <div className="cm-cfg">
        <nav className="cm-cfg-menu">
          <b>Configuración</b>
          <span className="act">Puestos de trabajo y técnicos</span><span>Disponibilidad</span><span>Prioridades</span><span>Catálogo de fallas</span>
        </nav>
        <div className="cm-cfg-main">
          <div className="cm-cfg-cab"><b>Puestos de trabajo y técnicos</b><span className="cm-b gris">Editar</span></div>
          <p className="cm-info">Cada columna es un puesto de trabajo y cada tarjeta un técnico. Usa el interruptor para encender o apagar; apagado no suma capacidad.</p>
          <div className="scroll-x">
            <div className="cm-kanban">
              {cols.map((c) => (
                <div key={c.cod} className="cm-kcol">
                  <div className="cm-kcab">
                    <div className="l1"><b>{c.cod}</b> <span>· {c.nom}</span><i className="cm-sw on" /></div>
                    <p>{c.tipo} · {c.h}</p>
                    <p className="n"><b>{c.personas}</b> persona{c.personas === 1 ? "" : "s"}{!c.tecs.length ? " (a mano)" : ""} · <b>{c.hh}</b> H-H/mes</p>
                  </div>
                  <div className="cm-ktecs">
                    {c.tecs.map(([n, m]) => (
                      <div key={n} className="cm-ktec"><span className="cm-user" /><div><b>{n}</b><small>{m}</small></div><i className="cm-sw on" /></div>
                    ))}
                    {!c.tecs.length && <p className="cm-kvacio">Sin técnicos con nombre: cuenta {c.personas} personas</p>}
                    <span className="cm-kmas">+ Agregar técnico</span>
                  </div>
                  {c.uso && <p className="cm-kuso">{c.uso}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Réplicas de pantallas reales del módulo RCM de ReliaPlant.
// Fuente: reliaplant-app/app/dashboard/rcm (page.tsx del proyecto, PlantillaRCM.tsx,
// RCMTableRows.tsx, PlanTab.tsx, InfoTab.tsx, UnidadTabs.tsx, RCMtemplatesList.tsx,
// RecomendacionesProyectosRCM.tsx). Columnas, pestañas y colores salen de ese código.

import React from "react";

const MODULOS = ["TAX", "GMAO", "RCA", "RCM", "PM", "RBI"];

const SUB_RCM = ["Proyectos", "Recomendaciones", "Biblioteca", "KPIs", "Configuración"];

function Cabecera({ act }: { act?: string }) {
  return (
    <>
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        <div className="rp-planta">Compresión Norte</div>
        <div className="rp-tabs">
          {MODULOS.map((m) => (
            <span key={m} className={m === "RCM" ? "act" : undefined}>{m}</span>
          ))}
        </div>
      </div>
      {act && (
        <div className="rp-sub">
          {SUB_RCM.map((s) => (
            <span key={s} className={s === act ? "act" : undefined}>{s}</span>
          ))}
        </div>
      )}
    </>
  );
}

const PESTANAS_PROYECTO = [
  "Información Preliminar",
  "Equipo Natural de Trabajo",
  "Hoja de Análisis RCM",
  "Plan de Mantenimiento",
  "Recomendaciones",
];

function BarraProyecto({ activa }: { activa: number }) {
  return (
    <>
      <div className="rc-proy">
        <b>RCM P-211A · Bomba de condensado</b>
        <span className="sep">|</span>
        <span>UT CN-210</span>
        <span className="sep">|</span>
        <span>Criticidad A</span>
        <span className="rc-badge b-proc" style={{ marginLeft: "auto" }}>En proceso</span>
      </div>
      <div className="rc-ptabs">
        {PESTANAS_PROYECTO.map((p, i) => (
          <span key={p} className={i === activa ? "act" : undefined}>
            <i>{i + 1}</i>
            {p}
          </span>
        ))}
      </div>
    </>
  );
}

function N({ n }: { n: number }) {
  return <span className="rc-num" aria-hidden="true">{n}</span>;
}

/** 1. Hoja de análisis RCM con los marcadores de las 7 preguntas. */
export function PantallaHoja() {
  return (
    <div className="pantalla rc-pant" role="img" aria-label="Hoja de análisis RCM de la bomba P-211A en ReliaPlant, con función, falla funcional, modo de falla, efecto, NPR, consecuencia y actividad">
      <Cabecera />
      <BarraProyecto activa={2} />
      <div className="scroll-x">
        <table className="rcm rc-hoja">
          <colgroup>
            <col style={{ width: "15%" }} /><col style={{ width: "11%" }} /><col style={{ width: "14%" }} /><col style={{ width: "19%" }} />
            <col style={{ width: "3.5%" }} /><col style={{ width: "3.5%" }} /><col style={{ width: "3.5%" }} /><col style={{ width: "5%" }} />
            <col style={{ width: "10%" }} /><col style={{ width: "15.5%" }} />
          </colgroup>
          <thead>
            <tr>
              <th rowSpan={2}><N n={1} />Función</th>
              <th rowSpan={2}><N n={2} />Falla funcional</th>
              <th rowSpan={2}><N n={3} />Modo de falla</th>
              <th rowSpan={2}><N n={4} />Efecto de falla</th>
              <th colSpan={4} style={{ textAlign: "center" }}>Riesgo</th>
              <th rowSpan={2}><N n={5} />Consecuencia</th>
              <th rowSpan={2}><N n={6} /><N n={7} />Actividad</th>
            </tr>
            <tr>
              <th className="sub">F</th><th className="sub">S</th><th className="sub">D</th><th className="sub">NPR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}>Bombear condensado del V-210 al desaireador: no menos de 45 m³/h a 62 m de altura</td>
              <td rowSpan={2}><span className="ltr">A</span>No bombea</td>
              <td>Desgaste de caras del sello mecánico por marcha en seco</td>
              <td>Gotea condensado a 95 °C por el sello hasta que la fuga obliga a parar. Se arranca la P-211B en unos 20 minutos.</td>
              <td className="f">5</td><td className="f">4</td><td className="f">5</td><td className="n amar">100</td>
              <td className="cons">Falla evidente con consecuencia operacional</td>
              <td className="act t-cond"><div><span className="cl">Monitoreo de condición</span>Inspección visual de fuga por el sello <span className="fr">(1S)</span></div></td>
            </tr>
            <tr>
              <td>Rodamiento lado acople dañado por lubricación deficiente</td>
              <td>Sube la vibración semanas antes. Si nadie actúa, el rodamiento se traba, arrastra el sello y la bomba sale de servicio.</td>
              <td className="f">6</td><td className="f">5</td><td className="f">6</td><td className="n rojo">180</td>
              <td className="cons">Falla evidente con consecuencia operacional</td>
              <td className="act t-cond"><div><span className="cl">Monitoreo de condición</span>Análisis de vibraciones de espectro completo <span className="fr">(1M)</span></div></td>
            </tr>
            <tr>
              <td><span className="ltr">B</span>Bombea menos de 45 m³/h</td>
              <td>Desgaste del impulsor por cavitación</td>
              <td>Baja el caudal y sube el nivel del V-210. Operación lo ve en el DCS.</td>
              <td className="f">3</td><td className="f">3</td><td className="f">4</td><td className="n verde">36</td>
              <td className="cons">Falla evidente con consecuencia operacional</td>
              <td className="act t-cond"><div><span className="cl">Monitoreo de condición</span>Prueba de desempeño: caudal y presión contra la curva <span className="fr">(6M)</span></div></td>
            </tr>
            <tr>
              <td>Parar la bomba si la presión de succión baja de 0,5 bar</td>
              <td><span className="ltr">A</span>No para la bomba con baja succión</td>
              <td>Presostato PSL-211 pegado o con la toma obstruida</td>
              <td>En operación normal no pasa nada y nadie se entera. Si además se vacía el V-210, la bomba corre en seco y se destruye el sello.</td>
              <td className="f">3</td><td className="f">6</td><td className="f">6</td><td className="n amar">108</td>
              <td className="cons">Falla oculta</td>
              <td className="act t-bus"><div><span className="cl">Búsqueda de fallas</span>Simular baja presión y verificar el disparo del motor <span className="fr">(4M)</span></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rc-unid" aria-hidden="true">
        <span className="act">Bomba</span>
        <span>Motor eléctrico</span>
        <span>Sello mecánico</span>
        <span className="nueva">+ Nueva unidad</span>
      </div>
    </div>
  );
}

/** 2. Información preliminar + equipo natural de trabajo. */
export function PantallaInfo() {
  const filas: [string, React.ReactNode][] = [
    ["Título", "RCM P-211A · Bomba de condensado"],
    ["Responsable", "Laura Méndez"],
    ["¿Es prioritario?", "Sí"],
    ["Fecha de creación", "03/11/2026"],
    ["Fecha de fin", "28/11/2026"],
    ["Descripción del límite del análisis", "De la brida de succión a la brida de descarga. Incluye motor, acople, sello y el presostato PSL-211. Excluye el arrancador en el CCM."],
    ["Premisas y advertencias", "Se analiza la P-211A; la P-211B es idéntica y hereda el análisis."],
    ["Contexto operacional", "Opera 24/7. La P-211B queda en reserva con cambio manual (unos 20 min). El V-210 tiene 8 minutos de autonomía a caudal normal."],
    ["Entrevistas realizadas", <span key="v" className="vac">Sin especificar</span>],
  ];
  const ent = [
    { ini: "LM", nom: "Laura Méndez", rol: "Ing. de confiabilidad" },
    { ini: "JR", nom: "Jorge Ramírez", rol: "Operador, turno A" },
    { ini: "CP", nom: "Carlos Peña", rol: "Mecánico" },
    { ini: "AS", nom: "Ana Soto", rol: "Instrumentista" },
    { ini: "RV", nom: "Rafael Vega", rol: "Técnico de sellos · fabricante", ext: true },
  ];
  return (
    <div className="pantalla rc-pant" role="img" aria-label="Información preliminar y equipo natural de trabajo del análisis RCM de la P-211A">
      <Cabecera />
      <BarraProyecto activa={0} />
      <div className="scroll-x">
        <table className="rc-info" style={{ minWidth: 520 }}>
          <tbody>
            {filas.map(([k, v]) => (
              <tr key={k}><td className="tt">{k}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rc-ent">
        <div className="rc-ent-cab">Equipo Natural de Trabajo</div>
        <ul>
          {ent.map((m) => (
            <li key={m.nom}>
              <span className="av">{m.ini}</span>
              <span>{m.nom} <small>· {m.rol}</small></span>
              {m.ext && <span className="ext">Externo</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** 3. Plan de mantenimiento del proyecto. */
export function PantallaPlan() {
  const filas = [
    { modos: ["Desgaste de caras del sello mecánico por marcha en seco"], cl: "Monitoreo de condición", t: "t-cond", tipo: "Inspección visual", desc: "Revisar goteo por el sello y estado del plan de lavado", ej: "Operador", h: "0,2", f: "1", u: "S" },
    { modos: ["Rodamiento lado acople dañado por lubricación deficiente"], cl: "Monitoreo de condición", t: "t-cond", tipo: "Predictivo", desc: "Análisis de vibraciones de espectro completo en soportes LA y LOA", ej: "Técnico de predictivo", h: "0,5", f: "1", u: "M" },
    { modos: ["Desgaste del impulsor por cavitación"], cl: "Monitoreo de condición", t: "t-cond", tipo: "Prueba de desempeño", desc: "Medir caudal y presión de descarga y comparar con la curva", ej: "Mecánico", h: "1", f: "6", u: "M" },
    { modos: ["Presostato PSL-211 pegado o con la toma obstruida"], cl: "Búsqueda de fallas", t: "t-bus", tipo: "Prueba periódica de funcionamiento", desc: "Simular baja presión de succión y verificar disparo del motor", ej: "Instrumentista", h: "1", f: "4", u: "M" },
    { modos: ["Rodamiento lado acople dañado por lubricación deficiente"], cl: "Preventivo", t: "t-prev", tipo: "Lubricación", desc: "Cambio de aceite del soporte de rodamientos", ej: "Lubricador", h: "0,5", f: "3", u: "M" },
  ];
  return (
    <div className="pantalla rc-pant" role="img" aria-label="Plan de mantenimiento resultante del RCM de la P-211A: tipo de tarea, ejecutor, horas y frecuencia">
      <Cabecera />
      <BarraProyecto activa={3} />
      <div className="scroll-x">
        <table className="rc-t" style={{ minWidth: 900 }}>
          <thead>
            <tr>
              <th>No</th><th>Modos de falla relacionados</th><th>Tipo de tarea</th><th>Descripción</th>
              <th>Ejecutor</th><th>Hrs</th><th colSpan={2}>Frecuencia</th><th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td className="l wrap top" style={{ maxWidth: 210 }}><span style={{ color: "#9ca3af" }}>• </span>{r.modos[0]}</td>
                <td className={`l ${r.t}`} style={{ padding: 0, minWidth: 170 }}>
                  <div style={{ padding: "6px 8px" }}>
                    <span className="cl" style={{ display: "block", fontSize: 10, fontWeight: 500, marginBottom: 3 }}>{r.cl}</span>
                    {r.tipo}
                  </div>
                </td>
                <td className="l wrap" style={{ minWidth: 220 }}>{r.desc}</td>
                <td>{r.ej}</td>
                <td>{r.h}</td>
                <td>{r.f}</td>
                <td>{r.u}</td>
                <td style={{ color: "#9ca3af" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** 4. Biblioteca de plantillas. */
export function PantallaBiblioteca() {
  const filas = [
    { t: "Bomba centrífuga horizontal API 610", p: "Laura Méndez", e: "Activa", m: false },
    { t: "Compresor reciprocante de dos etapas", p: "Laura Méndez", e: "Activa", m: false },
    { t: "Motor de inducción de baja tensión", p: "Carlos Peña", e: "Activa", m: false },
    { t: "Aeroenfriador de tiro forzado", p: "Laura Méndez", e: "Borrador", m: false },
    { t: "Válvula de control neumática", p: "Ana Soto", e: "Activa", m: false },
  ];
  return (
    <div className="pantalla rc-pant" role="img" aria-label="Biblioteca de plantillas RCM de ReliaPlant: plantillas RCM y plantillas de unidades">
      <Cabecera act="Biblioteca" />
      <div className="rc-bus">
        <span className="seg"><span className="act">Plantillas RCM (5)</span><span>Plantillas de Unidades (4)</span></span>
        <span className="in">Buscar plantilla...</span>
      </div>
      <div className="scroll-x">
        <table className="rc-t" style={{ minWidth: 600 }}>
          <thead>
            <tr><th className="l">Título</th><th>Creado por</th><th>Estatus</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {filas.map((r) => (
              <tr key={r.t}>
                <td className="l"><span className="lnk">{r.t}</span></td>
                <td className="l">
                  <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#2563eb", color: "#fff", fontSize: 11, fontWeight: 600, display: "inline-grid", placeItems: "center" }}>{r.p.charAt(0)}</span>
                    {r.p}
                  </span>
                </td>
                <td><span className={`rc-badge ${r.e === "Activa" ? "b-act" : "b-borr"}`}>{r.e}</span></td>
                <td style={{ color: "#9ca3af", letterSpacing: 6 }} aria-hidden="true">⧉ ✎ ✕</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** 5. Recomendaciones de todos los proyectos RCM. */
export function PantallaRecomendaciones() {
  const filas = [
    { r: "Instalar indicador de nivel con alarma LAL en el V-210", p: "a", a: "RCM P-211A · Bomba de condensado", c: "Rediseño", fc: "05/11/2026", ff: "15/01/2027", resp: "Ana Soto", e: ["Programada", "b-gris"] },
    { r: "Cambiar el sello a uno doble con plan API 53A", p: "m", a: "RCM P-211A · Bomba de condensado", c: "Rediseño", fc: "05/11/2026", ff: "30/03/2027", resp: "Carlos Peña", e: ["Programada", "b-gris"] },
    { r: "Incluir la P-211A/B en la ruta mensual de vibraciones", p: "a", a: "RCM P-211A · Bomba de condensado", c: "Procedimiento", fc: "05/11/2026", ff: "30/11/2026", resp: "Laura Méndez", e: ["En proceso", "b-sky"] },
    { r: "Capacitar a operadores en arranque de bomba de reserva", p: "b", a: "RCM K-201 · Compresor de gas", c: "Capacitación", fc: "12/09/2026", ff: "31/10/2026", resp: "Jorge Ramírez", e: ["Completado", "b-comp"] },
  ];
  const pr = { a: ["Alta", "pr-a"], m: ["Media", "pr-m"], b: ["Baja", "pr-b"] } as const;
  return (
    <div className="pantalla rc-pant" role="img" aria-label="Recomendaciones de los análisis RCM con prioridad, responsable, fecha y estatus">
      <Cabecera act="Recomendaciones" />
      <div className="rc-bus"><span className="in">Buscar por análisis, equipo, recomendación...</span></div>
      <div className="scroll-x">
        <table className="rc-t" style={{ minWidth: 980 }}>
          <thead>
            <tr>
              <th className="l">Recomendación</th><th>Prioridad</th><th>Análisis de RCM relacionado</th><th>Categoría</th>
              <th>Fecha de creación</th><th>Fecha fin</th><th>Responsable</th><th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.r}>
                <td className="l wrap" style={{ minWidth: 240 }}>{f.r}</td>
                <td style={{ padding: 4 }}><span className={`pr ${pr[f.p as keyof typeof pr][1]}`}>{pr[f.p as keyof typeof pr][0]}</span></td>
                <td>{f.a}</td>
                <td>{f.c}</td>
                <td>{f.fc}</td>
                <td>{f.ff}</td>
                <td>{f.resp}</td>
                <td><span className={`rc-badge ${f.e[1]}`}>{f.e[0]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

// Réplica exacta de sugerirPrioridad() (reliaplant-app/services/gmao/defaultGMAOConfig.ts):
// base = severidad del nivel de criticidad del equipo; equipo parado o impacto crítico sube
// un nivel; impacto incipiente (con el equipo operando) baja un nivel.

type Prioridad = "baja" | "media" | "alta" | "emergencia";
type Severidad = "muy_alta" | "alta" | "media_alta" | "media" | "media_baja" | "baja" | "sin_criticidad";
type Impacto = "critica" | "degradada" | "incipiente";

const SEVERIDADES: { id: Severidad; nombre: string; color: string }[] = [
  { id: "muy_alta", nombre: "Muy alta", color: "#7f1d1d" },
  { id: "alta", nombre: "Alta", color: "#da1e28" },
  { id: "media_alta", nombre: "Media-alta", color: "#ea580c" },
  { id: "media", nombre: "Media", color: "#f1c21b" },
  { id: "media_baja", nombre: "Media-baja", color: "#65a30d" },
  { id: "baja", nombre: "Baja", color: "#24a148" },
  { id: "sin_criticidad", nombre: "Sin criticidad", color: "#ffffff" },
];
const BASE: Record<Severidad, Prioridad> = {
  muy_alta: "alta", alta: "alta", media_alta: "media", media: "media", media_baja: "baja", baja: "baja", sin_criticidad: "media",
};
const ORDEN: Prioridad[] = ["baja", "media", "alta", "emergencia"];
const NOMBRE: Record<Prioridad, string> = { emergencia: "Emergencia", alta: "Alta", media: "Media", baja: "Baja" };
const CHIP: Record<Prioridad, string> = { emergencia: "p-emer", alta: "p-alta", media: "p-media", baja: "p-baja" };
const PLAZO: Record<Prioridad, string> = { emergencia: "4 h", alta: "24 h", media: "7 días", baja: "30 días" };
const IMPACTOS: { id: Impacto; nombre: string; desc: string }[] = [
  { id: "critica", nombre: "Crítica", desc: "Pérdida total e inmediata de la función" },
  { id: "degradada", nombre: "Degradada", desc: "Cumple la función pero por debajo de lo aceptable" },
  { id: "incipiente", nombre: "Incipiente", desc: "Aún cumple la función; condición que llevará a falla" },
];

function sugerir(sev: Severidad, parado: boolean, impacto: Impacto): Prioridad {
  let i = ORDEN.indexOf(BASE[sev]);
  if (parado || impacto === "critica") i += 1;
  else if (impacto === "incipiente") i -= 1;
  return ORDEN[Math.max(0, Math.min(i, ORDEN.length - 1))];
}

// Columnas efectivas de la regla
const COLUMNAS: { clave: string; titulo: string; sub: string; parado: boolean; impacto: Impacto }[] = [
  { clave: "inc", titulo: "Incipiente", sub: "operando", parado: false, impacto: "incipiente" },
  { clave: "deg", titulo: "Degradada", sub: "operando", parado: false, impacto: "degradada" },
  { clave: "crit", titulo: "Crítica o parado", sub: "cualquier impacto", parado: true, impacto: "critica" },
];

export default function MatrizPrioridad() {
  const [sev, setSev] = useState<Severidad>("alta");
  const [parado, setParado] = useState(false);
  const [impacto, setImpacto] = useState<Impacto>("degradada");
  const resultado = sugerir(sev, parado, impacto);
  const colActiva = parado || impacto === "critica" ? "crit" : impacto === "incipiente" ? "inc" : "deg";
  const base = BASE[sev];
  const motivo = colActiva === "crit" ? (parado ? "el equipo está parado" : "la falla es crítica") : colActiva === "inc" ? "la falla es incipiente" : "la falla es degradada con el equipo operando";
  const paso = resultado === base ? "queda en" : colActiva === "crit" ? "sube a" : "baja a";

  return (
    <div className="cm-mz">
      <div className="cm-mz-form">
        <fieldset>
          <legend>1 · Criticidad del equipo</legend>
          <select value={sev} onChange={(e) => setSev(e.target.value as Severidad)} aria-label="Criticidad del equipo">
            {SEVERIDADES.map((s) => <option key={s.id} value={s.id}>{s.nombre}</option>)}
          </select>
          <small>Viene de la taxonomía: es el nivel de criticidad que ya tiene el equipo.</small>
        </fieldset>
        <fieldset>
          <legend>2 · ¿El equipo está parado?</legend>
          <div className="cm-mz-seg" role="radiogroup" aria-label="¿El equipo está parado?">
            <button type="button" role="radio" aria-checked={!parado} onClick={() => setParado(false)}>No, sigue operando</button>
            <button type="button" role="radio" aria-checked={parado} className={parado ? "rojo" : undefined} onClick={() => setParado(true)}>Sí, está parado</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>3 · Impacto en la función</legend>
          <div className="cm-mz-imp" role="radiogroup" aria-label="Impacto en la función">
            {IMPACTOS.map((i) => (
              <button key={i.id} type="button" role="radio" aria-checked={impacto === i.id} onClick={() => setImpacto(i.id)}>
                <b>{i.nombre}</b><span>{i.desc}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="cm-mz-res" aria-live="polite">
          <span>Prioridad sugerida</span>
          <span className={`chip-e ${CHIP[resultado]}`}>{NOMBRE[resultado]}</span>
          <small>
            Base {NOMBRE[base].toLowerCase()} por la criticidad. Como {motivo}, {paso} {NOMBRE[resultado].toLowerCase()}.
            Plazo objetivo de atención: <b>{PLAZO[resultado]}</b>.
          </small>
        </div>
      </div>

      <div className="cm-mz-tabla scroll-x">
        <table>
          <thead>
            <tr><th>Criticidad del equipo</th>{COLUMNAS.map((c) => <th key={c.clave} className={c.clave === colActiva ? "act" : undefined}>{c.titulo}<small>{c.sub}</small></th>)}</tr>
          </thead>
          <tbody>
            {SEVERIDADES.map((s) => (
              <tr key={s.id} className={s.id === sev ? "act" : undefined}>
                <td><i style={{ background: s.color }} />{s.nombre}</td>
                {COLUMNAS.map((c) => {
                  const p = sugerir(s.id, c.parado, c.impacto);
                  const on = s.id === sev && c.clave === colActiva;
                  return <td key={c.clave} className={on ? "on" : undefined}><span className={`chip-e ${CHIP[p]}`}>{NOMBRE[p]}</span></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

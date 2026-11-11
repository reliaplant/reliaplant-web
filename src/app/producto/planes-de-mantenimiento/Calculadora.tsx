"use client";

import React, { useMemo, useState } from "react";

// Calculadora de horas-hombre del preventivo, con la misma matemática que la app
// (services/pm/models.pm.ts): veces al año = 365,25 / días del intervalo, y fechas
// fijas calculadas desde la fecha de inicio (31-ene + 1 mes = 28-feb).

type Unidad = "semana" | "mes" | "anio";
interface Frec { cada: number; unidad: Unidad }
interface Tarea { t: string; personas: number; horas: number; f: string }

const FRECUENCIAS: { etiqueta: string; f: Frec }[] = [
  { etiqueta: "Semanal", f: { cada: 1, unidad: "semana" } },
  { etiqueta: "Quincenal", f: { cada: 2, unidad: "semana" } },
  { etiqueta: "Mensual", f: { cada: 1, unidad: "mes" } },
  { etiqueta: "Bimestral", f: { cada: 2, unidad: "mes" } },
  { etiqueta: "Trimestral", f: { cada: 3, unidad: "mes" } },
  { etiqueta: "Semestral", f: { cada: 6, unidad: "mes" } },
  { etiqueta: "Anual", f: { cada: 1, unidad: "anio" } },
  { etiqueta: "Cada 2 años", f: { cada: 2, unidad: "anio" } },
];
const frec = (e: string) => FRECUENCIAS.find((x) => x.etiqueta === e)!.f;
const dias = (f: Frec) => f.cada * { semana: 7, mes: 30.4375, anio: 365.25 }[f.unidad];
const vecesPorAnio = (f: Frec) => 365.25 / dias(f);

function fechaOcurrencia(inicio: Date, f: Frec, k: number): Date {
  if (f.unidad === "semana") return new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate() + f.cada * k * 7);
  const meses = f.cada * k * (f.unidad === "anio" ? 12 : 1);
  const y = inicio.getFullYear() + Math.floor((inicio.getMonth() + meses) / 12);
  const m = (inicio.getMonth() + meses) % 12;
  return new Date(y, m, Math.min(inicio.getDate(), new Date(y, m + 1, 0).getDate()));
}

const INICIAL: Tarea[] = [
  { t: "Inspeccionar fugas del sello, ruido y nivel de aceite", personas: 1, horas: 0.5, f: "Mensual" },
  { t: "Medir vibraciones en soportes de rodamientos", personas: 1, horas: 0.5, f: "Mensual" },
  { t: "Cambiar aceite de rodamientos", personas: 1, horas: 1.5, f: "Trimestral" },
  { t: "Verificar alineación bomba-motor", personas: 2, horas: 2, f: "Semestral" },
  { t: "Revisar acople y guarda del acople", personas: 1, horas: 1, f: "Anual" },
];
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MESES_LARGO = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const fmt = (n: number) => Number(n.toFixed(1)).toLocaleString("es-MX");

export default function Calculadora() {
  const [tareas, setTareas] = useState<Tarea[]>(INICIAL);
  const [equipos, setEquipos] = useState(2);
  const [mesInicio, setMesInicio] = useState(0);

  const set = (i: number, cambio: Partial<Tarea>) => setTareas((ts) => ts.map((t, j) => (j === i ? { ...t, ...cambio } : t)));

  const porEquipo = tareas.reduce((s, t) => s + t.personas * t.horas * vecesPorAnio(frec(t.f)), 0);

  // Horas-hombre de cada mes en los 12 meses que siguen a la fecha de inicio (día 15)
  const meses = useMemo(() => {
    const inicio = new Date(2027, mesInicio, 15);
    const fin = new Date(2027, mesInicio + 12, 1);
    const hh = Array(12).fill(0) as number[];
    for (const t of tareas) {
      const f = frec(t.f);
      for (let k = 0; k < 60; k++) {
        const d = fechaOcurrencia(inicio, f, k);
        if (d >= fin) break;
        const i = (d.getFullYear() - 2027) * 12 + d.getMonth() - mesInicio;
        hh[i] += t.personas * t.horas * equipos;
      }
    }
    return hh;
  }, [tareas, equipos, mesInicio]);
  const max = Math.max(...meses, 1);
  const iPico = meses.indexOf(Math.max(...meses));

  return (
    <div className="calc">
      <div className="calc-caja">
        <h3>Rutina de la bomba</h3>
        <p className="sub">Cambia personas, horas o frecuencia y mira cómo se mueve la carga.</p>
        <div className="scroll-x">
          <table>
            <thead>
              <tr><th>Tarea</th><th>Personas</th><th>Horas c/u</th><th>Frecuencia</th><th style={{ textAlign: "right" }}>Veces/año</th><th style={{ textAlign: "right" }}>H-H/año</th></tr>
            </thead>
            <tbody>
              {tareas.map((t, i) => {
                const v = vecesPorAnio(frec(t.f));
                return (
                  <tr key={t.t}>
                    <td className="t">{t.t}</td>
                    <td><input type="number" min={1} max={20} value={t.personas} aria-label={`Personas para ${t.t}`} onChange={(e) => set(i, { personas: Math.max(1, Number(e.target.value) || 1) })} /></td>
                    <td><input type="number" min={0.5} max={48} step={0.5} value={t.horas} aria-label={`Horas por persona para ${t.t}`} onChange={(e) => set(i, { horas: Math.max(0.5, Number(e.target.value) || 0.5) })} /></td>
                    <td>
                      <select value={t.f} aria-label={`Frecuencia de ${t.t}`} onChange={(e) => set(i, { f: e.target.value })}>
                        {FRECUENCIAS.map((x) => <option key={x.etiqueta}>{x.etiqueta}</option>)}
                      </select>
                    </td>
                    <td className="n">{fmt(v)}</td>
                    <td className="n">{fmt(t.personas * t.horas * v)} h</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr><td colSpan={5}>Por cada equipo con esta rutina</td><td className="n">{fmt(porEquipo)} h</td></tr>
            </tfoot>
          </table>
        </div>
        <div className="calc-ctrl">
          <label>Equipos
            <input type="number" min={1} max={200} value={equipos} onChange={(e) => setEquipos(Math.min(200, Math.max(1, Number(e.target.value) || 1)))} aria-label="Número de equipos con esta rutina" />
          </label>
          <label>Primera vez el 15 de
            <select value={mesInicio} onChange={(e) => setMesInicio(Number(e.target.value))} aria-label="Mes de inicio del plan">
              {MESES_LARGO.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
          </label>
          <button type="button" onClick={() => { setTareas(INICIAL); setEquipos(2); setMesInicio(0); }}>Volver al ejemplo</button>
        </div>
      </div>

      <div className="calc-caja">
        <div className="resul">
          <div><span>H-H al año por equipo</span><b>{fmt(porEquipo)}</b></div>
          <div><span>H-H al año · {equipos} equipo{equipos === 1 ? "" : "s"}</span><b>{fmt(porEquipo * equipos)}</b></div>
        </div>
        <h3>Horas-hombre de cada mes</h3>
        <p className="sub">Los 12 meses desde la primera fecha, con fechas fijas.</p>
        <div className="barras" aria-label="Horas-hombre por mes">
          {meses.map((h, i) => (
            <div key={i}>
              <span>{h ? fmt(h) : ""}</span>
              <i className={i === iPico ? "pico" : undefined} style={{ height: `${(h / max) * 100}%` }} />
            </div>
          ))}
        </div>
        <div className="barras-mes">{meses.map((_, i) => <span key={i}>{MESES[(mesInicio + i) % 12]}</span>)}</div>
        <p className="calc-nota">
          El mes de la primera fecha junta todas las tareas: es el paquete más pesado. Si otro plan arranca ese mismo mes, los picos se suman.
        </p>
      </div>
    </div>
  );
}

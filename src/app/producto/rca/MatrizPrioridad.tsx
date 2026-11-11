"use client";

import { useState } from "react";

// Misma lógica que Recomendaciones.tsx de la app: matriz 5x5 y prioridad = impacto + (6 − esfuerzo).
const NIVELES = ["Bajo", "Medio-Bajo", "Medio", "Medio-Alto", "Alto"];
const prioridad = (imp: number, esf: number) => {
  const s = imp + (6 - esf);
  return s >= 8 ? "alta" : s >= 5 ? "media" : "baja";
};
const ETI: Record<string, string> = { alta: "Alta", media: "Media", baja: "Baja" };

const RECS = [
  { t: "Instalar aisladores de rodamiento en P-211A/B", cat: "Rediseño / Ingeniería", imp: 5, esf: 3 },
  { t: "Procedimiento de limpieza sin chorro directo a soportes", cat: "Procedimiento", imp: 4, esf: 1 },
  { t: "Análisis de aceite trimestral en P-211A/B", cat: "Ajuste de mantenimiento", imp: 4, esf: 2 },
  { t: "Capacitar a la cuadrilla de limpieza", cat: "Capacitación", imp: 3, esf: 2 },
  { t: "Cambiar a lubricante con mejor demulsibilidad", cat: "Repuesto / Materiales", imp: 2, esf: 3 },
];

export default function MatrizPrioridad() {
  const [imp, setImp] = useState(4);
  const [esf, setEsf] = useState(1);
  const [sel, setSel] = useState<number | null>(1);
  const p = prioridad(imp, esf);

  return (
    <div className="lp-rca-mx">
      <div className="lp-rca-mx-recs">
        <span className="lp-rca-mini-eti">Recomendaciones del caso P-211A</span>
        {RECS.map((r, i) => {
          const pr = prioridad(r.imp, r.esf);
          return (
            <button
              key={r.t}
              type="button"
              aria-pressed={sel === i}
              onClick={() => { setSel(i); setImp(r.imp); setEsf(r.esf); }}
            >
              <span className="t">{r.t}</span>
              <span className="s">{r.cat}</span>
              <span className={`lp-rca-pr ${pr}`}>{ETI[pr]}</span>
            </button>
          );
        })}
      </div>

      <div className="lp-rca-mx-caja">
        <div className="lp-rca-mx-cab">Prioridad · Impacto × Esfuerzo</div>
        <p className="lp-rca-mx-ayuda">Selecciona la celda de <b>Impacto</b> × <b>Esfuerzo</b>. La prioridad se calcula automáticamente.</p>
        <div className="lp-rca-mx-zona">
          <span className="lp-rca-mx-ejey">Impacto (valor agregado)</span>
          <div className="lp-rca-mx-grid" role="grid" aria-label="Matriz de impacto por esfuerzo">
            {[5, 4, 3, 2, 1].map((i) => (
              <div key={i} role="row" className="mxf">
                <span className="lbl">{NIVELES[i - 1]}</span>
                {[1, 2, 3, 4, 5].map((e) => {
                  const pr = prioridad(i, e);
                  const on = i === imp && e === esf;
                  return (
                    <button
                      key={e}
                      type="button"
                      role="gridcell"
                      aria-selected={on}
                      aria-label={`Impacto ${NIVELES[i - 1]}, esfuerzo ${NIVELES[e - 1]}: prioridad ${ETI[pr]}`}
                      className={`c ${pr}${on ? " on" : ""}`}
                      onClick={() => { setImp(i); setEsf(e); setSel(null); }}
                    >
                      {ETI[pr]}
                    </button>
                  );
                })}
              </div>
            ))}
            <div className="mxf pie">
              <span className="lbl" />
              {NIVELES.map((n) => <span key={n} className="x">{n}</span>)}
            </div>
            <div className="lp-rca-mx-ejex">Esfuerzo</div>
          </div>
        </div>
        <div className="lp-rca-mx-res">
          <span className="f">
            Impacto <b>{imp}</b> + (6 − Esfuerzo <b>{esf}</b>) = <b>{imp + 6 - esf}</b>
          </span>
          <span className={`lp-rca-pr ${p}`}>Prioridad {ETI[p]}</span>
        </div>
      </div>
    </div>
  );
}

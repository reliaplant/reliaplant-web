// Diagrama de decisión RCM tal como lo recorre ReliaPlant
// (reliaplant-app/app/dashboard/rcm/[projectId]/components/DiagramaDeDecision.tsx).
// Preguntas de consecuencia H/S/E/O/N y carriles de tareas H1-H5, S1-S4, O1-O5, N1-N2.

import React from "react";

type Tono = "cond" | "prev" | "bus" | "comb" | "red" | "fin";
const TONOS: Record<Tono, { f: string; s: string; t: string }> = {
  cond: { f: "#f3e8ff", s: "#d8b4fe", t: "#6b21a8" },
  prev: { f: "#dbeafe", s: "#93c5fd", t: "#1e40af" },
  bus: { f: "#ffedd5", s: "#fdba74", t: "#9a3412" },
  comb: { f: "url(#lp-rcm-comb)", s: "#c4b5fd", t: "#4c1d95" },
  red: { f: "#dcfce7", s: "#86efac", t: "#166534" },
  fin: { f: "#f3f4f6", s: "#d1d5db", t: "#374151" },
};
const LETRA: Record<string, string> = { H: "#facc15", S: "#ef4444", E: "#22c55e", O: "#3b82f6", N: "#6b7280" };

const X0 = 250, PASO = 185, W = 165, H = 58;

function Caja({ x, y, cod, lineas, tono, res }: { x: number; y: number; cod: string; lineas: string[]; tono: Tono; res?: string[] }) {
  const c = TONOS[tono];
  return (
    <g>
      <rect x={x} y={y} width={W} height={H} rx={3} fill={c.f} stroke={c.s} />
      <text x={x + 10} y={y + 17} fontSize={10.5} fontWeight={700} fill={c.t} fontFamily="IBM Plex Mono, monospace">{cod}</text>
      {lineas.map((l, i) => (
        <text key={i} x={x + 10} y={y + 33 + i * 13} fontSize={11.5} fill="#111827">{l}</text>
      ))}
      {res?.map((r, i) => (
        <text key={r} x={x + 2} y={y + H + 16 + i * 13} fontSize={10.5} fill="#5b6170">{r}</text>
      ))}
    </g>
  );
}

function Pregunta({ y, l, titulo, sub }: { y: number; l: string; titulo: string; sub: string }) {
  return (
    <g>
      <rect x={20} y={y} width={190} height={H} rx={3} fill="#4b5563" />
      <rect x={30} y={y + 10} width={20} height={20} rx={2} fill={LETRA[l]} />
      <text x={40} y={y + 24} textAnchor="middle" fontSize={11} fontWeight={700} fill={l === "H" ? "#111" : "#fff"} fontFamily="IBM Plex Mono, monospace">{l}</text>
      <text x={58} y={y + 24} fontSize={12.5} fontWeight={600} fill="#fff">{titulo}</text>
      <text x={30} y={y + 46} fontSize={10.5} fill="#d1d5db">{sub}</text>
    </g>
  );
}

function Flecha({ d, etiqueta, ex, ey }: { d: string; etiqueta?: string; ex?: number; ey?: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke="#9aa1ad" strokeWidth={1.4} markerEnd="url(#lp-rcm-punta)" />
      {etiqueta && <text x={ex} y={ey} fontSize={10.5} fontWeight={600} fill="#5b6170">{etiqueta}</text>}
    </g>
  );
}

function Carril({ y, caption, cajas }: { y: number; caption: string; cajas: { cod: string; l: string[]; t: Tono; r?: string[] }[] }) {
  return (
    <g>
      <text x={X0} y={y - 9} fontSize={10.5} fill="#9aa1ad">{caption}</text>
      {cajas.map((c, i) => (
        <g key={c.cod}>
          {i > 0 && <Flecha d={`M${X0 + (i - 1) * PASO + W} ${y + H / 2} H${X0 + i * PASO - 4}`} etiqueta="No" ex={X0 + (i - 1) * PASO + W + 4} ey={y + H / 2 - 5} />}
          <Caja x={X0 + i * PASO} y={y} cod={c.cod} lineas={c.l} tono={c.t} res={c.r} />
        </g>
      ))}
    </g>
  );
}

export default function DiagramaDecision() {
  const yH = 34, yS = 168, yE = 268, yO = 372, yN = 506;
  return (
    <svg viewBox="0 0 1000 610" role="img" aria-labelledby="lp-rcm-diag-t">
      <title id="lp-rcm-diag-t">Diagrama de decisión RCM: preguntas de consecuencia y tareas que resultan en cada carril</title>
      <defs>
        <marker id="lp-rcm-punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#9aa1ad" />
        </marker>
        <linearGradient id="lp-rcm-comb" x1="0" x2="1">
          <stop offset="0" stopColor="#f3e8ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
      </defs>

      {/* Columna de consecuencias */}
      <Pregunta y={yH} l="H" titulo="¿Es evidente?" sub="Para el operador, sin ayuda" />
      <Pregunta y={yS} l="S" titulo="¿Impacta seguridad?" sub="¿Puede lesionar o matar?" />
      <Pregunta y={yE} l="E" titulo="¿Impacta ambiente?" sub="¿Infringe una norma ambiental?" />
      <Pregunta y={yO} l="O" titulo="¿Impacta operaciones?" sub="Producción, calidad, costo" />
      <Pregunta y={yN} l="N" titulo="No operacional" sub="Solo cuesta la reparación" />

      <Flecha d={`M115 ${yH + H} V${yS - 4}`} etiqueta="Sí" ex={121} ey={yH + H + 36} />
      <Flecha d={`M115 ${yS + H} V${yE - 4}`} etiqueta="No" ex={121} ey={yS + H + 24} />
      <Flecha d={`M115 ${yE + H} V${yO - 4}`} etiqueta="No" ex={121} ey={yE + H + 28} />
      <Flecha d={`M115 ${yO + H} V${yN - 4}`} etiqueta="No" ex={121} ey={yO + H + 38} />

      <Flecha d={`M210 ${yH + H / 2} H${X0 - 4}`} etiqueta="No" ex={216} ey={yH + H / 2 - 5} />
      <Flecha d={`M210 ${yS + H / 2} H${X0 - 4}`} etiqueta="Sí" ex={216} ey={yS + H / 2 - 5} />
      <Flecha d={`M210 ${yE + H / 2} H228 V${yS + H / 2 + 8} H${X0 - 4}`} etiqueta="Sí" ex={214} ey={yE + H / 2 - 5} />
      <Flecha d={`M210 ${yO + H / 2} H${X0 - 4}`} etiqueta="Sí" ex={216} ey={yO + H / 2 - 5} />
      <Flecha d={`M210 ${yN + H / 2} H${X0 - 4}`} />

      <Carril
        y={yH}
        caption="Falla oculta · la tarea debe reducir el riesgo de la falla múltiple a un nivel tolerable"
        cajas={[
          { cod: "H1", l: ["¿Tarea a condición", "factible y que valga?"], t: "cond", r: ["Sí → Tarea a condición"] },
          { cod: "H2", l: ["¿Tarea preventiva", "factible y que valga?"], t: "prev", r: ["Sí → Tarea preventiva"] },
          { cod: "H4", l: ["¿Búsqueda de fallas", "factible y que valga?"], t: "bus", r: ["Sí → Búsqueda de fallas"] },
          { cod: "H5", l: ["¿La falla múltiple afecta", "seguridad o ambiente?"], t: "red", r: ["Sí → Rediseño obligatorio", "No → Ningún mtto. programado"] },
        ]}
      />
      <Carril
        y={yS}
        caption="Seguridad o ambiente · la tarea, por sí sola, debe bajar el riesgo a un nivel tolerable"
        cajas={[
          { cod: "S1", l: ["¿Tarea a condición", "factible y que valga?"], t: "cond", r: ["Sí → Tarea a condición"] },
          { cod: "S2", l: ["¿Tarea preventiva", "factible y que valga?"], t: "prev", r: ["Sí → Tarea preventiva"] },
          { cod: "S4", l: ["¿Combinación de", "tareas factible?"], t: "comb", r: ["Sí → Combinación de tareas", "No → Rediseño obligatorio"] },
        ]}
      />
      <Carril
        y={yO}
        caption="Operacional · la tarea debe costar menos que la pérdida de producción más la reparación"
        cajas={[
          { cod: "O1", l: ["¿Tarea a condición", "factible y que valga?"], t: "cond", r: ["Sí → Tarea a condición"] },
          { cod: "O2", l: ["¿Tarea preventiva", "factible y que valga?"], t: "prev", r: ["Sí → Tarea preventiva"] },
          { cod: "O5", l: ["¿Se desea evaluar", "el rediseño?"], t: "red", r: ["Sí → El rediseño debe justificarse", "No → Ningún mtto. proactivo"] },
        ]}
      />
      <Carril
        y={yN}
        caption="No operacional · la tarea debe costar menos que reparar la falla"
        cajas={[
          { cod: "N1", l: ["¿Tarea a condición", "factible y que valga?"], t: "cond", r: ["Sí → Tarea a condición"] },
          { cod: "N2", l: ["¿Tarea preventiva", "factible y que valga?"], t: "prev", r: ["Sí → Tarea preventiva", "No → Ningún mtto. proactivo (RTF)"] },
        ]}
      />
    </svg>
  );
}

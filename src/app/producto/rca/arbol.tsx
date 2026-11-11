// Árbol lógico del caso P-211A (réplica del lienzo de RCAFlowChart / RCANode de la app).
// Sin hooks: se usa en la portada (Server Component) y en el recorrido por niveles (ArbolCaso, cliente).

export type TipoNodo =
  | "evento" | "modo" | "hipotesis" | "hecho" | "mecanismo"
  | "humana" | "gestion" | "gestionC" | "ambiental" | "descartada";

// Colores reales de getNodeTypeColor (RCANode.tsx). El evento va en azul oscuro (decisión del dueño, sin morado).
export const TIPOS: Record<TipoNodo, { cab: string; txt: string; label: string; cuerpo?: string; op?: number }> = {
  evento: { cab: "#1e3a8a", txt: "#fff", label: "EVENTO" },
  modo: { cab: "#374151", txt: "#fff", label: "MODO DE FALLA" },
  hipotesis: { cab: "#6b7280", txt: "#fff", label: "HIPÓTESIS" },
  hecho: { cab: "#374151", txt: "#fff", label: "HECHO" },
  mecanismo: { cab: "#ef4444", txt: "#fff", label: "MECANISMO DE FALLA" },
  humana: { cab: "#22c55e", txt: "#fff", label: "CAUSA HUMANA" },
  gestion: { cab: "#3b82f6", txt: "#fff", label: "CAUSA DE GESTIÓN" },
  gestionC: { cab: "#bfdbfe", txt: "#374151", label: "CAUSA DE GESTIÓN CONTRIBUYENTE" },
  ambiental: { cab: "#fef08a", txt: "#374151", label: "CAUSA AMBIENTAL" },
  descartada: { cab: "#6b7280", txt: "#fff", label: "DESCARTADA", cuerpo: "#e0e0e0", op: 0.6 },
};

interface Nodo {
  id: string;
  padre?: string;
  x: number; // centro
  y: number; // borde superior
  lineas: string[];
  aparece: number; // nivel (1..5) en que entra al árbol
  tipo: TipoNodo; // tipo mientras está "por validar"
  final?: { nivel: number; tipo: TipoNodo }; // cambio tras la verificación
}

const W = 150;
const H = 46;

export const NODOS: Nodo[] = [
  { id: "e", x: 410, y: 12, lineas: ["Disparo de P-211A", "por vibración alta"], aparece: 1, tipo: "evento" },
  { id: "m1", padre: "e", x: 250, y: 98, lineas: ["Falla del rodamiento", "lado acople"], aparece: 2, tipo: "modo" },
  { id: "m2", padre: "e", x: 650, y: 98, lineas: ["Desbalance del", "impulsor"], aparece: 2, tipo: "modo" },
  { id: "h1", padre: "m1", x: 90, y: 186, lineas: ["Fatiga del rodamiento por", "agua en el lubricante"], aparece: 3, tipo: "hipotesis", final: { nivel: 4, tipo: "mecanismo" } },
  { id: "h2", padre: "m1", x: 250, y: 186, lineas: ["Desalineación tras el", "cambio de sello"], aparece: 3, tipo: "hipotesis", final: { nivel: 4, tipo: "descartada" } },
  { id: "h3", padre: "m1", x: 410, y: 186, lineas: ["Rodamiento mal", "montado"], aparece: 3, tipo: "hipotesis", final: { nivel: 4, tipo: "descartada" } },
  { id: "h4", padre: "m2", x: 650, y: 186, lineas: ["Depósitos o daño", "en el impulsor"], aparece: 3, tipo: "hipotesis", final: { nivel: 4, tipo: "descartada" } },
  { id: "f1", padre: "h1", x: 90, y: 278, lineas: ["Aceite del soporte LA", "con 2.300 ppm de agua"], aparece: 4, tipo: "hecho" },
  { id: "c1", padre: "h1", x: 250, y: 278, lineas: ["Lavado con manguera a", "presión sobre soportes"], aparece: 5, tipo: "humana" },
  { id: "c2", padre: "h1", x: 410, y: 278, lineas: ["Humedad excesiva en", "temporada de lluvias"], aparece: 5, tipo: "ambiental" },
  { id: "g1", padre: "c1", x: 170, y: 370, lineas: ["Sin procedimiento de", "limpieza del área"], aparece: 5, tipo: "gestion" },
  { id: "g2", padre: "c1", x: 330, y: 370, lineas: ["Plan sin rutina de", "análisis de aceite"], aparece: 5, tipo: "gestionC" },
];

const tipoEn = (n: Nodo, nivel: number): TipoNodo => (n.final && nivel >= n.final.nivel ? n.final.tipo : n.tipo);

/** Notas numeradas (marcadores de la portada): [x, y, número]. */
const NOTAS: [number, number, number][] = [
  [490, 14, 1],
  [330, 100, 2],
  [168, 188, 3],
  [330, 188, 4],
  [248, 372, 5],
];

export function ArbolSVG({ nivel = 5, notas = false, resaltar = true }: { nivel?: number; notas?: boolean; resaltar?: boolean }) {
  const visibles = NODOS.filter((n) => n.aparece <= nivel);
  const ids = new Set(visibles.map((n) => n.id));
  const porId = Object.fromEntries(NODOS.map((n) => [n.id, n]));
  return (
    <svg viewBox="0 0 820 432" className="lp-rca-arbol" role="img" aria-label="Árbol lógico del RCA de la P-211A: evento, modos de falla, hipótesis verificadas y descartadas, y causas físicas, humanas y de gestión">
      <defs>
        <marker id="lprca-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#525252" />
        </marker>
      </defs>
      <g fill="none" stroke="#525252" strokeWidth="1" markerEnd="url(#lprca-fl)">
        {visibles.filter((n) => n.padre && ids.has(n.padre)).map((n) => {
          const p = porId[n.padre!];
          const y0 = p.y + H;
          const mid = y0 + (n.y - y0) / 2;
          return <path key={n.id} d={`M${p.x} ${y0}V${mid}H${n.x}V${n.y - 1}`} />;
        })}
      </g>
      {visibles.map((n) => {
        const t = TIPOS[tipoEn(n, nivel)];
        const nuevo = resaltar && (n.aparece === nivel || n.final?.nivel === nivel) && nivel > 1;
        const x = n.x - W / 2;
        return (
          <g key={n.id} opacity={t.op ?? 1} className="lp-rca-nodo">
            {nuevo && <rect x={x - 4} y={n.y - 4} width={W + 8} height={H + 8} fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />}
            <rect x={x} y={n.y} width={W} height={H} fill={t.cuerpo ?? "#fff"} stroke="#9ca3af" />
            <rect x={x} y={n.y} width={W} height={13} fill={t.cab} />
            <text x={n.x} y={n.y + 9.5} fontSize={t.label.length > 22 ? 6.6 : 8} fontWeight={600} fill={t.txt} textAnchor="middle">{t.label}</text>
            {n.lineas.map((l, i) => (
              <text key={i} x={n.x} y={n.y + 27 + i * 11} fontSize="9.5" fill="#374151" textAnchor="middle" fontWeight={n.id === "e" ? 700 : 400}>{l}</text>
            ))}
          </g>
        );
      })}
      {notas && NOTAS.map(([x, y, k]) => (
        <g key={k}>
          <circle cx={x} cy={y} r="9" fill="#2563eb" stroke="#fff" strokeWidth="2" />
          <text x={x} y={y + 3.5} fontSize="10" fontWeight={700} fill="#fff" textAnchor="middle">{k}</text>
        </g>
      ))}
    </svg>
  );
}

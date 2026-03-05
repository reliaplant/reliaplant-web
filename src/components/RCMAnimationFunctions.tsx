"use client";

import { useEffect, useState } from "react";

const ROWS = [
  { unidad: "UNIDAD 1 — Bomba Centrífuga P-8301A", funcion: "Transferir fluido de proceso", falla: "Flujo por debajo del mínimo", modo: "Desgaste de rodete", efecto: "Reducción de caudal a menos de 80 m³/h.", f: 3, s: 5, d: 3, consecuencia: "Operacional", actividad: "Inspección de vibración mensual" },
  { unidad: "", funcion: "", falla: "", modo: "Cavitación por NPSH insuficiente", efecto: "Daño progresivo en rodete; posible pérdida total.", f: 4, s: 7, d: 4, consecuencia: "Operacional", actividad: "Verificar nivel de succión" },
  { unidad: "UNIDAD 2 — Sistema de Sello Mecánico", funcion: "Contener fluido sin fugas", falla: "Fuga superior a 10 ml/h", modo: "Desgaste de caras de sello", efecto: "Contaminación del área; riesgo de ignición.", f: 3, s: 8, d: 2, consecuencia: "Seguridad", actividad: "Cambio preventivo c/8000 h" },
];

function getNPR(f: number, s: number, d: number) { return f * s * d; }
function getNPRColor(npr: number) {
  if (npr >= 100) return { bg: "#fee2e2", text: "#b91c1c" };
  if (npr >= 40)  return { bg: "#fef3c7", text: "#92400e" };
  return              { bg: "#dcfce7", text: "#166534" };
}

export default function RCMAnimationFunctions() {
  const [visibleRows, setVisibleRows] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    function run() {
      setVisibleRows(0);
      setActiveTab(0);
      ROWS.forEach((_, i) => {
        timeouts.push(setTimeout(() => setVisibleRows(i + 1), (i + 1) * 920));
      });
      timeouts.push(setTimeout(() => setActiveTab(1), ROWS.length * 920 + 700));
      timeouts.push(setTimeout(() => setActiveTab(0), ROWS.length * 920 + 1500));
      timeouts.push(setTimeout(() => { timeouts.forEach(clearTimeout); timeouts = []; run(); }, ROWS.length * 920 + 3400));
    }
    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", fontFamily: "IBM Plex Sans, sans-serif", display: "flex", flexDirection: "column", overflow: "hidden", background: "#f8fafc" }}>
      <style>{`
        .rcm2-in { animation: rcm2-in 0.32s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes rcm2-in { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
        .rcm2-th { padding:5px 7px; font-size:8px; font-weight:700; color:#475569; background:#f1f5f9; border-right:1px solid #e2e8f0; border-bottom:2px solid #cbd5e1; text-align:left; white-space:nowrap; }
        .rcm2-th:last-child { border-right:none; }
        .rcm2-td { padding:5px 7px; font-size:8.5px; color:#1e293b; border-right:1px solid #e2e8f0; border-bottom:1px solid #f1f5f9; background:white; vertical-align:top; line-height:1.4; }
        .rcm2-td:last-child { border-right:none; }
      `}</style>

      {/* Top bar */}
      <div style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 12px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 36, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 8.5, color: "#94a3b8" }}>← Regresar a plantillas</span>
          <span style={{ color: "#e2e8f0" }}>|</span>
          <div>
            <div style={{ fontSize: 7, fontWeight: 700, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.08em" }}>PLANTILLA RCM GENÉRICA</div>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#0f172a" }}>BOMBA P-8301A</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 8, color: "#94a3b8", padding: "2px 7px", border: "1px solid #e2e8f0", borderRadius: 3 }}>Guardado</span>
          <span style={{ fontSize: 8, color: "white", background: "#2563eb", padding: "2px 8px", borderRadius: 3, fontWeight: 600 }}>Acción ▾</span>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "white", borderBottom: "2px solid #e2e8f0", display: "flex", paddingLeft: 8, flexShrink: 0 }}>
        {["Hoja de Análisis RCM", "Plan de Mantenimiento"].map((label, i) => (
          <div key={i} style={{ padding: "6px 12px", fontSize: 9, fontWeight: 600, color: activeTab === i ? "#2563eb" : "#64748b", borderBottom: activeTab === i ? "2px solid #2563eb" : "2px solid transparent", marginBottom: -2, transition: "all 0.25s", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 15, height: 15, borderRadius: 3, fontSize: 7.5, fontWeight: 700, background: activeTab === i ? "#2563eb" : "#e2e8f0", color: activeTab === i ? "white" : "#64748b", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "13%" }} /><col style={{ width: "13%" }} />
            <col style={{ width: "13%" }} /><col style={{ width: "18%" }} />
            <col style={{ width: "4%" }} /><col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} /><col style={{ width: "6%" }} />
            <col style={{ width: "12%" }} /><col style={{ width: "13%" }} />
          </colgroup>
          <thead>
            <tr>
              <th className="rcm2-th">Función</th>
              <th className="rcm2-th">Falla funcional</th>
              <th className="rcm2-th">Modo de falla</th>
              <th className="rcm2-th">Efecto de falla</th>
              <th className="rcm2-th" style={{ textAlign: "center" }}>F</th>
              <th className="rcm2-th" style={{ textAlign: "center" }}>S</th>
              <th className="rcm2-th" style={{ textAlign: "center" }}>D</th>
              <th className="rcm2-th" style={{ textAlign: "center" }}>NPR</th>
              <th className="rcm2-th">Consecuencia</th>
              <th className="rcm2-th">Actividad</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => {
              if (i >= visibleRows) return null;
              const npr = getNPR(row.f, row.s, row.d);
              const nprC = getNPRColor(npr);
              const consC = row.consecuencia === "Seguridad" ? { bg: "#fff7ed", text: "#c2410c" } : { bg: "#eff6ff", text: "#1d4ed8" };
              return (
                <>
                  {row.unidad ? (
                    <tr key={"u" + i} className="rcm2-in">
                      <td colSpan={10} style={{ background: "#eff6ff", color: "#1d4ed8", fontSize: 8, fontWeight: 700, padding: "4px 7px", letterSpacing: "0.05em", textTransform: "uppercase", borderBottom: "1px solid #bfdbfe" }}>
                        {row.unidad}
                      </td>
                    </tr>
                  ) : null}
                  <tr key={"d" + i} className="rcm2-in">
                    <td className="rcm2-td" style={{ color: row.funcion ? "#1e293b" : "#94a3b8", fontStyle: row.funcion ? "normal" : "italic" }}>{row.funcion || "—"}</td>
                    <td className="rcm2-td" style={{ color: row.falla ? "#1e293b" : "#94a3b8", fontStyle: row.falla ? "normal" : "italic" }}>{row.falla || "—"}</td>
                    <td className="rcm2-td" style={{ fontWeight: 500 }}>{row.modo}</td>
                    <td className="rcm2-td" style={{ color: "#475569", fontSize: 8 }}>{row.efecto}</td>
                    <td className="rcm2-td" style={{ textAlign: "center", fontWeight: 600 }}>{row.f}</td>
                    <td className="rcm2-td" style={{ textAlign: "center", fontWeight: 600 }}>{row.s}</td>
                    <td className="rcm2-td" style={{ textAlign: "center", fontWeight: 600 }}>{row.d}</td>
                    <td className="rcm2-td" style={{ textAlign: "center" }}>
                      <span style={{ background: nprC.bg, color: nprC.text, fontWeight: 700, fontSize: 8.5, padding: "2px 5px", borderRadius: 3 }}>{npr}</span>
                    </td>
                    <td className="rcm2-td">
                      <span style={{ fontSize: 7.5, fontWeight: 600, padding: "2px 6px", borderRadius: 20, background: consC.bg, color: consC.text }}>{row.consecuencia}</span>
                    </td>
                    <td className="rcm2-td" style={{ fontSize: 8, color: "#475569" }}>{row.actividad}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        {visibleRows > 0 && (
          <div className="rcm2-in" style={{ padding: "7px 10px", borderTop: "1px solid #e2e8f0", background: "white" }}>
            <span style={{ fontSize: 8.5, color: "#2563eb", fontWeight: 600 }}>+ Agregar nueva unidad</span>
          </div>
        )}
      </div>
    </div>
  );
}

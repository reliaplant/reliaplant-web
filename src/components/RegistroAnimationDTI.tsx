"use client";

import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────
   DTI Viewer animation
   Simulates opening an asset's linked DTI
   (P&ID) and highlighting the selected asset
   with an animated pin.
───────────────────────────────────────── */

export default function RegistroAnimationDTI() {
  const [phase, setPhase] = useState<"asset" | "pin" | "tooltip">("asset");

  useEffect(() => {
    const seq = [
      { delay: 1200, next: "pin" as const },
      { delay: 2400, next: "tooltip" as const },
      { delay: 5000, next: "asset" as const },
    ];

    let cancelled = false;
    let i = 0;

    function run() {
      if (cancelled) return;
      const step = seq[i % seq.length];
      const t = setTimeout(() => {
        if (!cancelled) {
          setPhase(step.next);
          i++;
          run();
        }
      }, step.delay);
      return t;
    }

    const t = run();
    return () => { cancelled = true; clearTimeout(t as unknown as number); };
  }, []);

  /* Pin coordinates on the diagram (relative to the SVG drawing area) */
  const pinX = 430;
  const pinY = 155;

  return (
    <div
      style={{
        width: 760,
        height: 520,
        fontFamily: "'Inter', 'Arial', sans-serif",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #d1d5db",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes dti-pin-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.85; }
        }
        @keyframes dti-ring {
          0% { r: 11; opacity: 0.65; }
          100% { r: 32; opacity: 0; }
        }
        @keyframes dti-tooltip-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dti-dot {
          transform-box: fill-box;
          transform-origin: center;
          animation: dti-pin-pulse 1.4s ease-in-out infinite;
        }
        .dti-ring {
          animation: dti-ring 1.4s ease-out infinite;
        }
      `}</style>

      {/* ── Top bar ─────────────────────── */}
      <div
        style={{
          background: "#1e293b",
          color: "#e2e8f0",
          padding: "7px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#94a3b8" }}>
          DOCUMENTOS TÉCNICOS
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>
          DTI — P-8301A/B Ammonia Feed Pumps
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      {/* ── Asset selector row ───────────── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
          padding: "7px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", color: "#94a3b8", textTransform: "uppercase" }}>
          Activo seleccionado
        </span>
        <div
          style={{
            background: phase === "asset" ? "#eff6ff" : "#f0fdf4",
            border: `1px solid ${phase === "asset" ? "#bfdbfe" : "#86efac"}`,
            borderRadius: 3,
            padding: "3px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.4s",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="4" stroke={phase === "asset" ? "#3b82f6" : "#16a34a"} strokeWidth="1.5" fill="none" />
          </svg>
          <span style={{ fontSize: 11, fontWeight: 700, color: phase === "asset" ? "#1d4ed8" : "#15803d" }}>
            P-8301A/B — Ammonia Feed Pumps
          </span>
        </div>
        <div style={{ flex: 1 }} />
        {/* Pagination */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button style={{ width: 22, height: 22, border: "1px solid #e2e8f0", background: "#f8fafc", color: "#94a3b8", fontSize: 12, cursor: "default", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <span style={{ fontSize: 11, color: "#475569" }}>Página 1 / 1</span>
          <button style={{ width: 22, height: 22, border: "1px solid #e2e8f0", background: "#f8fafc", color: "#94a3b8", fontSize: 12, cursor: "default", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>
      </div>

      {/* ── Main layout ─────────────────── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Left thumbnail sidebar */}
        <div
          style={{
            width: 68,
            background: "#f1f5f9",
            borderRight: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 10,
            gap: 8,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 48,
              height: 64,
              background: "#fff",
              border: "2px solid #3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* mini schematic */}
            <svg width="38" height="54" viewBox="0 0 38 54" fill="none">
              <rect x="0" y="0" width="38" height="54" fill="#f8fafc" />
              {[10, 22, 34].map((y) => (
                <g key={y}>
                  <rect x="4" y={y - 3} width="8" height="6" rx="0.5" fill="#cbd5e1" />
                  <rect x="17" y={y - 3} width="6" height="6" rx="0.5" fill="#cbd5e1" />
                  <rect x="27" y={y - 3} width="7" height="6" rx="0.5" fill="#93c5fd" />
                  <line x1="12" y1={y} x2="17" y2={y} stroke="#94a3b8" strokeWidth="0.8" />
                  <line x1="23" y1={y} x2="27" y2={y} stroke="#94a3b8" strokeWidth="0.8" />
                  <line x1="34" y1={y} x2="38" y2={y} stroke="#94a3b8" strokeWidth="0.8" />
                </g>
              ))}
              {/* red pin mini */}
              <circle cx="31" cy="7" r="3" fill="#ef4444" />
            </svg>
            <div style={{ position: "absolute", bottom: -12, fontSize: 9, color: "#64748b", fontWeight: 600 }}>
              Pág. 1
            </div>
          </div>
          <div style={{ width: 48, height: 64, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="1" fill="#cbd5e1" />
            </svg>
          </div>
        </div>

        {/* Drawing viewport */}
        <div
          style={{
            flex: 1,
            position: "relative",
            background: "#f0f2f5",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Engineering drawing frame */}
          <div
            style={{
              width: 618,
              height: 380,
              background: "#fff",
              border: "1.5px solid #94a3b8",
              position: "relative",
              boxShadow: "2px 3px 10px rgba(0,0,0,0.12)",
            }}
          >
            {/* Inner drawing margin */}
            <div style={{ position: "absolute", inset: 8, border: "0.5px solid #94a3b8" }} />

            {/* Column headers */}
            <svg
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              viewBox="0 0 618 380"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer border */}
              <rect x="0" y="0" width="618" height="380" fill="white" />
              <rect x="8" y="8" width="602" height="364" fill="none" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Right panel separator */}
              <line x1="466" y1="8" x2="466" y2="280" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Column headers row */}
              <line x1="8" y1="55" x2="466" y2="55" stroke="#94a3b8" strokeWidth="0.5" />
              {/* Col dividers */}
              <line x1="110" y1="8" x2="110" y2="55" stroke="#94a3b8" strokeWidth="0.5" />
              <line x1="230" y1="8" x2="230" y2="55" stroke="#94a3b8" strokeWidth="0.5" />
              <line x1="330" y1="8" x2="330" y2="55" stroke="#94a3b8" strokeWidth="0.5" />
              <line x1="400" y1="8" x2="400" y2="55" stroke="#94a3b8" strokeWidth="0.5" />

              {/* Header texts */}
              <text x="59" y="22" textAnchor="middle" fontSize="5.5" fill="#334155" fontWeight="600" fontFamily="monospace">G-7101A/B/C</text>
              <text x="59" y="30" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">GAS TURBINE</text>
              <text x="59" y="37" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">GENERATORS</text>

              <text x="170" y="22" textAnchor="middle" fontSize="5.5" fill="#334155" fontWeight="600" fontFamily="monospace">U-8301A/B/C</text>
              <text x="170" y="30" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">AMMONIA VAPORIZATION</text>
              <text x="170" y="37" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">PACKAGE</text>

              <text x="280" y="22" textAnchor="middle" fontSize="5.5" fill="#334155" fontWeight="600" fontFamily="monospace">D-8301</text>
              <text x="280" y="30" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">AMMONIA STORAGE</text>

              <text x="365" y="22" textAnchor="middle" fontSize="5.5" fill="#334155" fontWeight="600" fontFamily="monospace">P-8301A/B</text>
              <text x="365" y="30" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">AMMONIA FEED</text>
              <text x="365" y="37" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">PUMPS</text>

              {/* GENERAL NOTES header */}
              <text x="536" y="24" textAnchor="middle" fontSize="6.5" fill="#334155" fontWeight="700" fontFamily="monospace">GENERAL NOTES</text>
              <line x1="466" y1="30" x2="610" y2="30" stroke="#94a3b8" strokeWidth="0.4" />

              {/* ── Train A (row 1) ── */}
              {/* Starter box */}
              <rect x="20" y="85" width="20" height="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="30" y="93" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">START</text>
              {/* Compressor */}
              <rect x="50" y="83" width="16" height="16" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="58" y="93" textAnchor="middle" fontSize="4" fill="#334155" fontFamily="monospace">CMPR</text>
              {/* Turbine */}
              <polygon points="72,83 88,91 72,99" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              {/* Generator circle */}
              <circle cx="105" cy="91" r="9" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="105" y="93" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">~</text>
              {/* Connection lines */}
              <line x1="40" y1="91" x2="50" y2="91" stroke="#334155" strokeWidth="0.8" />
              <line x1="66" y1="91" x2="72" y2="91" stroke="#334155" strokeWidth="0.8" />
              <line x1="88" y1="91" x2="96" y2="91" stroke="#334155" strokeWidth="0.8" />
              <line x1="114" y1="91" x2="145" y2="91" stroke="#334155" strokeWidth="0.8" />
              {/* D-8301A box */}
              <rect x="145" y="83" width="32" height="16" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="161" y="91" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">D-8301A</text>
              {/* P-8301A box */}
              <rect x="215" y="83" width="32" height="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="0.8" />
              <text x="231" y="91" textAnchor="middle" fontSize="4.5" fill="#1d4ed8" fontFamily="monospace" fontWeight="600">P-8301A</text>
              <line x1="177" y1="91" x2="215" y2="91" stroke="#334155" strokeWidth="0.8" />
              <line x1="247" y1="91" x2="310" y2="91" stroke="#334155" strokeWidth="0.8" />
              {/* G-7101A label */}
              <text x="67" y="110" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="monospace">G-7101A</text>

              {/* ── Train B (row 2) ── */}
              <rect x="20" y="155" width="20" height="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="30" y="163" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">START</text>
              <rect x="50" y="153" width="16" height="16" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="58" y="163" textAnchor="middle" fontSize="4" fill="#334155" fontFamily="monospace">CMPR</text>
              <polygon points="72,153 88,161 72,169" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <circle cx="105" cy="161" r="9" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="105" y="163" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">~</text>
              <line x1="40" y1="161" x2="50" y2="161" stroke="#334155" strokeWidth="0.8" />
              <line x1="66" y1="161" x2="72" y2="161" stroke="#334155" strokeWidth="0.8" />
              <line x1="88" y1="161" x2="96" y2="161" stroke="#334155" strokeWidth="0.8" />
              <line x1="114" y1="161" x2="145" y2="161" stroke="#334155" strokeWidth="0.8" />
              <rect x="145" y="153" width="32" height="16" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="161" y="161" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">D-8301B</text>
              <rect x="215" y="153" width="32" height="16" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="231" y="161" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">P-8301B</text>
              <line x1="177" y1="161" x2="215" y2="161" stroke="#334155" strokeWidth="0.8" />
              <line x1="247" y1="161" x2="310" y2="161" stroke="#334155" strokeWidth="0.8" />
              <text x="67" y="180" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="monospace">G-7101B</text>

              {/* ── Train C (row 3) ── */}
              <rect x="20" y="225" width="20" height="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="30" y="233" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">START</text>
              <rect x="50" y="223" width="16" height="16" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="58" y="233" textAnchor="middle" fontSize="4" fill="#334155" fontFamily="monospace">CMPR</text>
              <polygon points="72,223 88,231 72,239" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <circle cx="105" cy="231" r="9" fill="#f8fafc" stroke="#64748b" strokeWidth="0.6" />
              <text x="105" y="233" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">~</text>
              <line x1="40" y1="231" x2="50" y2="231" stroke="#334155" strokeWidth="0.8" />
              <line x1="66" y1="231" x2="72" y2="231" stroke="#334155" strokeWidth="0.8" />
              <line x1="88" y1="231" x2="96" y2="231" stroke="#334155" strokeWidth="0.8" />
              <line x1="114" y1="231" x2="145" y2="231" stroke="#334155" strokeWidth="0.8" />
              <rect x="145" y="223" width="32" height="16" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="161" y="231" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">D-8301C</text>
              <rect x="215" y="223" width="32" height="16" fill="#f1f5f9" stroke="#64748b" strokeWidth="0.6" />
              <text x="231" y="231" textAnchor="middle" fontSize="4.5" fill="#334155" fontFamily="monospace">P-8301C</text>
              <line x1="177" y1="231" x2="215" y2="231" stroke="#334155" strokeWidth="0.8" />
              <line x1="247" y1="231" x2="310" y2="231" stroke="#334155" strokeWidth="0.8" />
              <text x="67" y="250" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="monospace">G-7101C</text>

              {/* Vertical bus bar connecting pumps */}
              <line x1="310" y1="65" x2="310" y2="260" stroke="#334155" strokeWidth="1.2" />

              {/* D-8301 storage tank (shared) */}
              <rect x="330" y="105" width="45" height="120" fill="#f8fafc" stroke="#64748b" strokeWidth="0.8" />
              <text x="352" y="155" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">D-8301</text>
              <text x="352" y="163" textAnchor="middle" fontSize="4.5" fill="#64748b" fontFamily="monospace">STORAGE</text>
              {/* lines from bus to tank */}
              <line x1="310" y1="91" x2="330" y2="91" stroke="#334155" strokeWidth="0.8" />
              <line x1="310" y1="161" x2="330" y2="161" stroke="#334155" strokeWidth="0.8" />
              <line x1="310" y1="231" x2="330" y2="231" stroke="#334155" strokeWidth="0.8" />

              {/* P-8301A/B feed pumps column */}
              <line x1="375" y1="105" x2="410" y2="105" stroke="#334155" strokeWidth="0.8" />
              <line x1="375" y1="225" x2="410" y2="225" stroke="#334155" strokeWidth="0.8" />
              <line x1="410" y1="105" x2="410" y2="225" stroke="#334155" strokeWidth="1" />

              {/* Feed pump symbols */}
              <circle cx="430" cy="155" r="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="0.9" />
              <text x="430" y="159" textAnchor="middle" fontSize="5.5" fill="#1d4ed8" fontFamily="monospace" fontWeight="700">P-8301</text>
              <text x="430" y="165" textAnchor="middle" fontSize="4.5" fill="#3b82f6" fontFamily="monospace">A/B</text>
              <line x1="410" y1="155" x2="416" y2="155" stroke="#334155" strokeWidth="0.8" />
              <line x1="444" y1="155" x2="460" y2="155" stroke="#334155" strokeWidth="0.8" />

              {/* Legend box */}
              <rect x="476" y="60" width="126" height="90" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />
              <text x="539" y="73" textAnchor="middle" fontSize="6" fill="#334155" fontWeight="700" fontFamily="monospace">LEYENDA</text>
              <line x1="476" y1="76" x2="602" y2="76" stroke="#94a3b8" strokeWidth="0.4" />
              {/* legend items */}
              <line x1="482" y1="85" x2="502" y2="85" stroke="#334155" strokeWidth="1.5" />
              <text x="506" y="88" fontSize="5" fill="#334155" fontFamily="monospace">EQUIPO PLANO P&ID</text>
              <circle cx="491" cy="95" r="4" fill="none" stroke="#64748b" strokeWidth="1" />
              <text x="506" y="98" fontSize="5" fill="#334155" fontFamily="monospace">PRESIÓN ATPG</text>
              <line x1="482" y1="107" x2="502" y2="107" stroke="#334155" strokeWidth="1" strokeDasharray="3,2" />
              <text x="506" y="110" fontSize="5" fill="#334155" fontFamily="monospace">FLUJO MIXTO</text>

              {/* Bottom title block */}
              <rect x="466" y="280" width="144" height="72" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />
              <text x="538" y="296" textAnchor="middle" fontSize="5.5" fill="#334155" fontWeight="700" fontFamily="monospace">PROCESS FLOW DIAGRAM</text>
              <text x="538" y="305" textAnchor="middle" fontSize="5" fill="#334155" fontFamily="monospace">GAS TURBINE GENERATORS</text>
              <line x1="466" y1="308" x2="610" y2="308" stroke="#94a3b8" strokeWidth="0.4" />
              <text x="476" y="318" fontSize="4.5" fill="#64748b" fontFamily="monospace">DOC: DTI-71CA</text>
              <text x="476" y="326" fontSize="4.5" fill="#64748b" fontFamily="monospace">REV: 3</text>
              <text x="476" y="334" fontSize="4.5" fill="#64748b" fontFamily="monospace">FECHA: 2025-10-12</text>
              <text x="536" y="344" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">A1   PS   &gt;</text>

              {/* Wavy flow lines at bottom */}
              {[105, 155, 225].map((y2) => (
                <path
                  key={y2}
                  d={`M8,${y2 + 35} Q25,${y2 + 30} 42,${y2 + 35} Q59,${y2 + 40} 76,${y2 + 35} Q93,${y2 + 30} 110,${y2 + 35} Q127,${y2 + 40} 144,${y2 + 35} Q161,${y2 + 30} 178,${y2 + 35}`}
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1"
                />
              ))}

              {/* ── Pin directly in SVG — coords guaranteed to match the pump circle ── */}
              {(phase === "pin" || phase === "tooltip") && (
                <g>
                  {/* Expanding ring */}
                  <circle className="dti-ring" cx="430" cy="155" r="11" fill="#ef4444" opacity="0.6" />
                  {/* Solid dot */}
                  <circle className="dti-dot" cx="430" cy="155" r="9" fill="#ef4444" stroke="white" strokeWidth="2" />
                </g>
              )}
            </svg>

            {/* ── Tooltip ─────────────────── */}
            {phase === "tooltip" && (
              <div
                style={{
                  position: "absolute",
                  left: pinX - 110,
                  top: pinY - 100,
                  background: "#0f172a",
                  color: "#f1f5f9",
                  borderRadius: 4,
                  padding: "8px 12px",
                  fontSize: 11,
                  fontWeight: 500,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                  whiteSpace: "nowrap",
                  animation: "dti-tooltip-in 0.3s ease-out forwards",
                  zIndex: 10,
                }}
              >
                <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Activo vinculado
                </div>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#60a5fa", marginBottom: 2 }}>
                  P-8301A/B — Ammonia Feed Pumps
                </div>
                <div style={{ color: "#cbd5e1", fontSize: 10 }}>
                  Clase: Bomba centrífuga · ISO 14224
                </div>
                {/* arrow pointing down */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -7,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "7px solid #0f172a",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Status bar ──────────────────── */}
      <div
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "5px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: phase === "tooltip" ? "#22c55e" : "#f59e0b",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 10, color: "#64748b" }}>
            {phase === "asset"
              ? "Cargando documento técnico..."
              : phase === "pin"
              ? "Localizando activo en diagrama..."
              : "Activo vinculado al DTI — P-8301A/B"}
          </span>
        </div>
        <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "monospace" }}>
          DOC: DTI-71CA · REV 3
        </span>
      </div>
    </div>
  );
}

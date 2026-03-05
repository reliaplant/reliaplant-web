"use client";

import React, { useState, useEffect } from "react";

const ROWS = [
  { col: "TAG",               field: "Tag del equipo",           req: true,  key: true,  locked: true  },
  { col: "CÓDIGO",            field: "Código CMMS",              req: false, key: true,  locked: false },
  { col: "DESCRIPCIÓN",       field: "Descripción",              req: true,  key: false, locked: true  },
  { col: "UBICACIÓN TÉCNICA", field: "Ubicación técnica",        req: true,  key: false, locked: true  },
  { col: "EQUIPO PADRE",      field: "Equipo padre (tag o código)", req: false, key: false, locked: false },
  { col: "CLASE",             field: "Clase de equipo",          req: false, key: false, locked: false },
  { col: "TIPO",              field: "Tipo de equipo",           req: false, key: false, locked: false },
  { col: "CÓDIGO DTI",        field: "Código(s) DTI",            req: false, key: false, locked: false },
  { col: "ÁREA",              field: "Área",                     req: false, key: false, locked: false },
];

export default function RegistroAnimationExportacion() {
  // Animate rows appearing one by one
  const [visibleRows, setVisibleRows] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setVisibleRows(0);
    setSaved(false);

    // Reveal rows sequentially
    for (let i = 1; i <= ROWS.length; i++) {
      setTimeout(() => {
        if (!cancelled) setVisibleRows(i);
      }, 300 + i * 220);
    }

    // Show "Guardar" flash
    setTimeout(() => { if (!cancelled) setSaved(true); }, 300 + ROWS.length * 220 + 500);
    // Reset
    setTimeout(() => {
      if (!cancelled) {
        setVisibleRows(0);
        setSaved(false);
      }
    }, 300 + ROWS.length * 220 + 2800);

    return () => { cancelled = true; };
  }, []);

  // Re-trigger loop
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCycle(c => c + 1), 300 + ROWS.length * 220 + 3200);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div style={{
      width: 760,
      height: 520,
      fontFamily: "'Inter', 'Arial', sans-serif",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #d1d5db",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes exp-row-in {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes exp-saved {
          0%   { opacity: 0; transform: scale(0.92); }
          15%  { opacity: 1; transform: scale(1); }
          80%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* ── Top nav ── */}
      <div style={{ background: "#111827", padding: "0 16px", display: "flex", alignItems: "center", gap: 0, height: 38, flexShrink: 0 }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: 13, letterSpacing: "-0.02em", marginRight: 24 }}>RELIAPLANT</span>
        {["Taxonomía", "RCA", "RCM"].map((t, i) => (
          <div key={t} style={{ padding: "0 14px", height: "100%", display: "flex", alignItems: "center", fontSize: 12, color: i === 0 ? "#fff" : "#9ca3af", borderBottom: i === 0 ? "2px solid #3b82f6" : "2px solid transparent", fontWeight: i === 0 ? 600 : 400 }}>
            {t}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ background: "#3b82f6", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 4, marginRight: 12 }}>★ Go Premium</div>
        <span style={{ color: "#9ca3af", fontSize: 11 }}>Guillermo Morán | ACME</span>
      </div>

      {/* ── Sub-nav ── */}
      <div style={{ background: "#1f2937", padding: "0 16px", display: "flex", alignItems: "center", gap: 4, height: 34, flexShrink: 0 }}>
        {["Lista de Activos", "DTIs", "Configuración"].map((t, i) => (
          <div key={t} style={{ padding: "0 12px", height: 34, display: "flex", alignItems: "center", fontSize: 11, color: i === 2 ? "#fff" : "#9ca3af", background: i === 2 ? "#374151" : "transparent", borderRadius: i === 2 ? "4px 4px 0 0" : 0, fontWeight: i === 2 ? 600 : 400, gap: 5 }}>
            {i === 2 && <span style={{ fontSize: 13 }}>⚙</span>}
            {t}
          </div>
        ))}
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Left sidebar */}
        <div style={{ width: 182, borderRight: "1px solid #e5e7eb", background: "#f9fafb", flexShrink: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "12px 14px", borderBottom: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 8 }}>Gestión de Taxonomía</div>
            {[
              { label: "Campos — Equipos", active: true, indent: 1 },
              { label: "Campos — Ubicaciones", active: false, indent: 1 },
              { label: "Carga Masiva", active: false, indent: 1 },
              { label: "Historial", active: false, indent: 1 },
            ].map(item => (
              <div key={item.label} style={{ padding: "5px 8px 5px " + (8 + item.indent * 8) + "px", fontSize: 11, color: item.active ? "#1d4ed8" : "#6b7280", background: item.active ? "#eff6ff" : "transparent", borderRadius: 3, marginBottom: 2, fontWeight: item.active ? 600 : 400, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.active ? "#3b82f6" : "#d1d5db", flexShrink: 0 }} />
                {item.label}
              </div>
            ))}
          </div>
          <div style={{ padding: "12px 14px" }}>
            <div style={{ padding: "5px 8px 5px 16px", fontSize: 11, color: "#1d4ed8", background: "#eff6ff", borderRadius: 3, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13 }}>↑</span> Carga masiva
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Panel header */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Campos — Equipos</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ fontSize: 11, color: "#374151", border: "1px solid #d1d5db", background: "#fff", padding: "4px 12px", borderRadius: 4, cursor: "default" }}>Restablecer</button>
              <button style={{ fontSize: 11, color: "#374151", border: "1px solid #d1d5db", background: "#fff", padding: "4px 12px", borderRadius: 4, cursor: "default" }}>↓ Plantilla</button>
            </div>
          </div>

          {/* Info bar */}
          <div style={{ padding: "7px 16px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb", fontSize: 10.5, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <span style={{ color: "#3b82f6" }}>ℹ</span>
            Mapea las columnas de tu Excel a los campos de Reliaplant. Los campos con 🔒 son obligatorios del sistema y no se pueden eliminar.
          </div>

          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "24px 1fr 1fr 48px 48px 28px", padding: "6px 16px", background: "#f3f4f6", borderBottom: "1px solid #e5e7eb", flexShrink: 0 }}>
            <div />
            <div style={{ fontSize: 11, fontWeight: 700, color: "#374151" }}>Columna en Excel</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#374151" }}>Campo Reliaplant</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textAlign: "center" }}>Req</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textAlign: "center" }}>Key</div>
            <div />
          </div>

          {/* Rows */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {ROWS.slice(0, visibleRows).map((row, i) => (
              <div
                key={row.col}
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr 1fr 48px 48px 28px",
                  padding: "5px 16px",
                  borderBottom: "1px solid #f3f4f6",
                  alignItems: "center",
                  animation: "exp-row-in 0.25s ease-out",
                  background: i % 2 === 0 ? "#fff" : "#fafafa",
                }}
              >
                {/* drag handle */}
                <div style={{ color: "#d1d5db", fontSize: 12 }}>⠿</div>
                {/* Excel col */}
                <div style={{ border: "1px solid #e5e7eb", background: "#fff", padding: "4px 8px", fontSize: 11, color: "#374151", borderRadius: 3, marginRight: 8 }}>
                  {row.col}
                </div>
                {/* Reliaplant field */}
                <div style={{ border: "1px solid #e5e7eb", background: "#fff", padding: "4px 8px", fontSize: 11, color: "#374151", borderRadius: 3, marginRight: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {row.field}
                  <span style={{ color: "#9ca3af", fontSize: 10 }}>▾</span>
                </div>
                {/* Req checkbox */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: 2,
                    background: row.req ? "#3b82f6" : "#fff",
                    border: `1.5px solid ${row.req ? "#3b82f6" : "#d1d5db"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {row.req && <span style={{ color: "#fff", fontSize: 9, lineHeight: 1 }}>✓</span>}
                  </div>
                </div>
                {/* Key checkbox */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: 2,
                    background: row.key ? "#3b82f6" : "#fff",
                    border: `1.5px solid ${row.key ? "#3b82f6" : "#d1d5db"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {row.key && <span style={{ color: "#fff", fontSize: 9, lineHeight: 1 }}>✓</span>}
                  </div>
                </div>
                {/* Lock / delete */}
                <div style={{ display: "flex", justifyContent: "center", fontSize: 12, color: row.locked ? "#9ca3af" : "#ef4444" }}>
                  {row.locked ? "🔒" : "🗑"}
                </div>
              </div>
            ))}

            {/* + Agregar campo */}
            {visibleRows >= ROWS.length && (
              <div style={{ padding: "8px 40px", fontSize: 11, color: "#3b82f6", fontWeight: 600, cursor: "default" }}>
                + Agregar campo
              </div>
            )}
          </div>

          {/* Save flash */}
          {saved && (
            <div style={{
              position: "absolute",
              bottom: 40,
              right: 24,
              background: "#16a34a",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              padding: "8px 18px",
              borderRadius: 4,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              animation: "exp-saved 2s ease-out forwards",
              pointerEvents: "none",
            }}>
              ✓ Configuración guardada
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", padding: "5px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: "#9ca3af" }}>
          {visibleRows} / {ROWS.length} campos mapeados
        </span>
        <button style={{
          background: saved ? "#16a34a" : "#3b82f6",
          color: "#fff", fontSize: 11, fontWeight: 700,
          padding: "5px 16px", borderRadius: 4, border: "none",
          cursor: "default", transition: "background 0.3s",
        }}>
          {saved ? "✓ Guardado" : "Guardar configuración"}
        </button>
      </div>
    </div>
  );
}

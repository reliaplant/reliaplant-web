"use client";

import { useState } from "react";
import type { FormContactWithId } from "@/lib/firebase/form_contact";
import type { LeadStatus } from "@/types/forms";
import { STATUS_ORDER, STATUS_CONFIG, fmtShortDate, todayISO, nextPendingTarea, TAREA_TIPO_CONFIG } from "./leadHelpers";

interface KanbanBoardProps {
  leads: FormContactWithId[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onStatusChange: (id: string, status: LeadStatus) => void;
}

export default function KanbanBoard({ leads, selectedId, onSelect, onStatusChange }: KanbanBoardProps) {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<LeadStatus | null>(null);

  const byStatus = (status: LeadStatus) => leads.filter((l) => (l.status || "nuevo") === status);

  const handleDrop = (status: LeadStatus) => {
    if (draggingId) onStatusChange(draggingId, status);
    setDraggingId(null);
    setDragOverCol(null);
  };

  return (
    <div style={{ display: "flex", gap: 12, padding: "12px 16px", overflowX: "auto", height: "100%" }}>
      {STATUS_ORDER.map((status) => {
        const cfg = STATUS_CONFIG[status];
        const cards = byStatus(status);
        return (
          <div
            key={status}
            onDragOver={(e) => { e.preventDefault(); setDragOverCol(status); }}
            onDragLeave={() => setDragOverCol((prev) => (prev === status ? null : prev))}
            onDrop={(e) => { e.preventDefault(); handleDrop(status); }}
            style={{
              flex: "0 0 260px",
              display: "flex",
              flexDirection: "column",
              background: dragOverCol === status ? "var(--a-selected)" : "var(--a-ui-01)",
              border: `1px solid ${dragOverCol === status ? "var(--a-blue)" : "var(--a-ui-03)"}`,
              borderRadius: 8,
              minHeight: 200,
              transition: "background 120ms, border-color 120ms",
            }}
          >
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 12px", borderBottom: "1px solid var(--a-ui-03)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: cfg.color }}>{cfg.label}</span>
              <span
                style={{
                  fontSize: 11, fontWeight: 600, color: cfg.color, background: cfg.bg,
                  border: `1px solid ${cfg.border}`, borderRadius: 999, padding: "1px 7px",
                }}
              >
                {cards.length}
              </span>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
              {cards.length === 0 ? (
                <div style={{ fontSize: 11, color: "var(--a-text-02)", textAlign: "center", padding: "16px 4px" }}>
                  Sin leads
                </div>
              ) : (
                cards.map((lead) => {
                  const next = nextPendingTarea(lead);
                  const overdue = !!next?.fechaLimite && next.fechaLimite < todayISO();
                  return (
                    <div
                      key={lead.id}
                      draggable
                      onDragStart={() => setDraggingId(lead.id)}
                      onDragEnd={() => { setDraggingId(null); setDragOverCol(null); }}
                      onClick={() => onSelect(lead.id)}
                      style={{
                        background: "#fff",
                        border: selectedId === lead.id ? "1px solid var(--a-blue)" : "1px solid var(--a-ui-03)",
                        borderRadius: 6,
                        padding: "8px 10px",
                        cursor: "grab",
                        opacity: draggingId === lead.id ? 0.4 : 1,
                        boxShadow: selectedId === lead.id ? "0 0 0 2px var(--a-selected)" : undefined,
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{lead.nombre}</div>
                      {lead.empresa && (
                        <div style={{ fontSize: 11, color: "var(--a-text-02)", marginBottom: 6 }}>{lead.empresa}</div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                        <span className="atag atag-blue" style={{ fontSize: 10 }}>{lead.interes}</span>
                        {next?.fechaLimite && (
                          <span
                            style={{
                              fontSize: 10, fontWeight: overdue ? 600 : 400,
                              color: overdue ? "#dc2626" : "var(--a-text-02)",
                              fontFamily: "'IBM Plex Mono', monospace", whiteSpace: "nowrap",
                            }}
                          >
                            {TAREA_TIPO_CONFIG[next.tipo || "tarea"].icon} {fmtShortDate(next.fechaLimite)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

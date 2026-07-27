"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllFormContacts,
  updateLeadStatus,
  updateProximoSeguimiento,
  updateNotas,
  updateTareas,
  type FormContactWithId,
} from "@/lib/firebase/form_contact";
import type { LeadStatus, LeadNota, LeadTarea } from "@/types/forms";
import { STATUS_CONFIG, fmtDate, fmtShortDate, todayISO, ultimoSeguimiento, genId, StatusBadge } from "./leadHelpers";
import KanbanBoard from "./KanbanBoard";

export default function FormManagerPage() {
  const [forms, setForms] = useState<FormContactWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "todos">("todos");
  const [view, setView] = useState<"lista" | "kanban">("lista");

  useEffect(() => {
    getAllFormContacts()
      .then(setForms)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const selected = forms.find((f) => f.id === selectedId) || null;

  const filtered = useMemo(
    () => (statusFilter === "todos" ? forms : forms.filter((f) => (f.status || "nuevo") === statusFilter)),
    [forms, statusFilter]
  );

  const patchLead = (id: string, patch: Partial<FormContactWithId>) => {
    setForms((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  };

  const handleStatusChange = async (id: string, status: LeadStatus) => {
    patchLead(id, { status });
    try {
      await updateLeadStatus(id, status);
    } catch (err) {
      console.error(err);
    }
  };

  const handleProximoChange = async (id: string, fecha: string) => {
    const value = fecha || null;
    patchLead(id, { proximoSeguimiento: value });
    try {
      await updateProximoSeguimiento(id, value);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddNota = async (lead: FormContactWithId, texto: string) => {
    if (!texto.trim()) return;
    const nota: LeadNota = { id: genId(), texto: texto.trim(), fecha: new Date().toISOString() };
    const notas = [...(lead.notas || []), nota];
    patchLead(lead.id, { notas });
    try {
      await updateNotas(lead.id, notas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTarea = async (lead: FormContactWithId, texto: string, fechaLimite: string) => {
    if (!texto.trim()) return;
    const tarea: LeadTarea = {
      id: genId(),
      texto: texto.trim(),
      fechaLimite: fechaLimite || null,
      completada: false,
      creada: new Date().toISOString(),
    };
    const tareas = [...(lead.tareas || []), tarea];
    patchLead(lead.id, { tareas });
    try {
      await updateTareas(lead.id, tareas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleTarea = async (lead: FormContactWithId, tareaId: string) => {
    const tareas = (lead.tareas || []).map((t) =>
      t.id === tareaId ? { ...t, completada: !t.completada } : t
    );
    patchLead(lead.id, { tareas });
    try {
      await updateTareas(lead.id, tareas);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex", gap: 0, height: "calc(100vh - 112px)", overflow: "hidden" }}>
      {/* Main panel */}
      <div style={{ flex: 1, overflow: view === "kanban" ? "hidden" : "auto", display: "flex", flexDirection: "column", borderRight: selected ? "1px solid var(--a-ui-03)" : "none" }}>
        <div style={{ padding: "12px 16px 0", display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 2, background: "var(--a-ui-02)", borderRadius: 6, padding: 2 }}>
            <button
              onClick={() => setView("lista")}
              className="abtn abtn-sm"
              style={{
                background: view === "lista" ? "#fff" : "transparent",
                boxShadow: view === "lista" ? "0 1px 2px rgba(0,0,0,0.08)" : undefined,
                border: "none", fontWeight: view === "lista" ? 600 : 400,
              }}
            >
              Lista
            </button>
            <button
              onClick={() => setView("kanban")}
              className="abtn abtn-sm"
              style={{
                background: view === "kanban" ? "#fff" : "transparent",
                boxShadow: view === "kanban" ? "0 1px 2px rgba(0,0,0,0.08)" : undefined,
                border: "none", fontWeight: view === "kanban" ? 600 : 400,
              }}
            >
              Kanban
            </button>
          </div>

          <span style={{ fontSize: 12, color: "var(--a-text-02)" }}>Estado:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "todos")}
            className="admin-input"
            style={{ width: "auto", fontSize: 12, padding: "4px 8px" }}
          >
            <option value="todos">Todos</option>
            {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
              <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
            No hay formularios que coincidan.
          </div>
        ) : view === "kanban" ? (
          <div style={{ flex: 1, overflow: "hidden" }}>
            <KanbanBoard
              leads={filtered}
              selectedId={selectedId}
              onSelect={(id) => setSelectedId(selectedId === id ? null : id)}
              onStatusChange={handleStatusChange}
            />
          </div>
        ) : (
          <div className="admin-table-wrap" style={{ marginTop: 8 }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Empresa</th>
                  <th>Email</th>
                  <th>Interés</th>
                  <th>Estado</th>
                  <th>Seguimiento</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((f) => {
                  const overdue = !!f.proximoSeguimiento && f.proximoSeguimiento < todayISO();
                  return (
                    <tr
                      key={f.id}
                      onClick={() => setSelectedId(selectedId === f.id ? null : f.id)}
                      style={{
                        cursor: "pointer",
                        background: selectedId === f.id ? "var(--a-selected)" : undefined,
                        borderLeft: selectedId === f.id ? "3px solid var(--a-blue)" : "3px solid transparent",
                      }}
                    >
                      <td style={{ fontWeight: 500 }}>
                        {f.nombre}
                        {f.cargo && (
                          <span style={{ display: "block", fontSize: 11, color: "var(--a-text-02)", fontWeight: 400 }}>{f.cargo}</span>
                        )}
                      </td>
                      <td>{f.empresa}</td>
                      <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>{f.email}</td>
                      <td>
                        <span className="atag atag-blue">{f.interes}</span>
                      </td>
                      <td><StatusBadge status={f.status} /></td>
                      <td style={{ fontSize: 11, color: overdue ? "#dc2626" : "var(--a-text-02)", fontWeight: overdue ? 600 : 400, whiteSpace: "nowrap" }}>
                        {f.proximoSeguimiento ? fmtShortDate(f.proximoSeguimiento) : "—"}
                      </td>
                      <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, whiteSpace: "nowrap" }}>
                        {fmtDate(f.date)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail panel */}
      {selected && (
        <div style={{ width: 380, flexShrink: 0, overflow: "auto", padding: 24, background: "var(--a-ui-01)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Detalle</span>
            <button
              onClick={() => setSelectedId(null)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--a-text-02)", fontSize: 18, lineHeight: 1, padding: 4 }}
              title="Cerrar"
            >
              ×
            </button>
          </div>

          {/* Status */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 4 }}>
              Estado
            </div>
            <select
              value={selected.status || "nuevo"}
              onChange={(e) => handleStatusChange(selected.id, e.target.value as LeadStatus)}
              className="admin-input"
              style={{ width: "100%" }}
            >
              {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
                <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
              ))}
            </select>
          </div>

          <DetailRow label="Nombre" value={selected.nombre} />
          <DetailRow label="Cargo" value={selected.cargo} />
          <DetailRow label="Empresa" value={selected.empresa} />
          <DetailRow label="Email" value={selected.email} mono />
          <DetailRow label="Teléfono" value={selected.telefono} mono />
          <DetailRow label="País" value={selected.pais} />
          {selected.direccion && <DetailRow label="Dirección" value={selected.direccion} />}
          <DetailRow label="Interés" value={selected.interes} />
          {selected.cantidadPersonas && <DetailRow label="Personas" value={String(selected.cantidadPersonas)} />}
          {selected.especial && <DetailRow label="Notas del form" value={selected.especial} />}
          {selected.origen && <DetailRow label="Origen" value={selected.origen} />}
          {selected.type && <DetailRow label="Tipo" value={selected.type} />}
          {selected.campana && <DetailRow label="Campaña" value={selected.campana} />}
          {selected.anuncio && <DetailRow label="Anuncio" value={selected.anuncio} />}
          <DetailRow label="Dispositivo" value={selected.isMobile ? "Móvil" : "Desktop"} />
          <DetailRow label="Fecha" value={fmtDate(selected.date)} mono />

          <div style={{ marginTop: 20 }}>
            <a
              href={`mailto:${selected.email}`}
              className="abtn abtn-primary"
              style={{ display: "block", textAlign: "center", textDecoration: "none" }}
            >
              Responder por email
            </a>
          </div>

          <SeguimientoSection
            lead={selected}
            onProximoChange={(fecha) => handleProximoChange(selected.id, fecha)}
            onAddNota={(texto) => handleAddNota(selected, texto)}
          />

          <TareasSection
            lead={selected}
            onAddTarea={(texto, fecha) => handleAddTarea(selected, texto, fecha)}
            onToggleTarea={(tareaId) => handleToggleTarea(selected, tareaId)}
          />
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value, mono }: { label: string; value?: string | null; mono?: boolean }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontFamily: mono ? "'IBM Plex Mono', monospace" : undefined, wordBreak: "break-word" }}>
        {value}
      </div>
    </div>
  );
}

function SeguimientoSection({
  lead, onProximoChange, onAddNota,
}: {
  lead: FormContactWithId;
  onProximoChange: (fecha: string) => void;
  onAddNota: (texto: string) => void;
}) {
  const [nota, setNota] = useState("");
  const ultima = ultimoSeguimiento(lead);
  const notasOrdenadas = [...(lead.notas || [])].sort((a, b) => b.fecha.localeCompare(a.fecha));

  return (
    <div style={{ marginTop: 24, borderTop: "1px solid var(--a-ui-03)", paddingTop: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Seguimiento</div>

      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 2 }}>
            Próximo
          </div>
          <input
            type="date"
            value={lead.proximoSeguimiento || ""}
            onChange={(e) => onProximoChange(e.target.value)}
            className="admin-input"
            style={{ fontSize: 12, padding: "4px 6px" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 2 }}>
            Último
          </div>
          <div style={{ fontSize: 12, paddingTop: 4 }}>
            {ultima ? fmtShortDate(ultima.fecha.slice(0, 10)) : "—"}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <input
          type="text"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") { onAddNota(nota); setNota(""); }
          }}
          placeholder="Agregar nota de seguimiento…"
          className="admin-input"
          style={{ flex: 1, fontSize: 12 }}
        />
        <button
          onClick={() => { onAddNota(nota); setNota(""); }}
          className="abtn abtn-secondary abtn-sm"
        >
          Agregar
        </button>
      </div>

      {notasOrdenadas.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {notasOrdenadas.map((n) => (
            <div key={n.id} style={{ fontSize: 12, background: "#fff", border: "1px solid var(--a-ui-03)", borderRadius: 6, padding: "6px 10px" }}>
              <div style={{ fontSize: 10, color: "var(--a-text-02)", marginBottom: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
                {fmtDate(new Date(n.fecha))}
              </div>
              {n.texto}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TareasSection({
  lead, onAddTarea, onToggleTarea,
}: {
  lead: FormContactWithId;
  onAddTarea: (texto: string, fecha: string) => void;
  onToggleTarea: (tareaId: string) => void;
}) {
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState("");
  const tareas = lead.tareas || [];
  const pendientes = tareas.filter((t) => !t.completada);
  const completadas = tareas.filter((t) => t.completada);

  const submit = () => {
    if (!texto.trim()) return;
    onAddTarea(texto, fecha);
    setTexto("");
    setFecha("");
  };

  return (
    <div style={{ marginTop: 20, borderTop: "1px solid var(--a-ui-03)", paddingTop: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Tareas</div>

      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          placeholder="Nueva tarea…"
          className="admin-input"
          style={{ flex: 1, fontSize: 12 }}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="admin-input"
          style={{ fontSize: 12, padding: "4px 6px", width: 130 }}
        />
        <button onClick={submit} className="abtn abtn-secondary abtn-sm">Agregar</button>
      </div>

      {[...pendientes, ...completadas].length === 0 ? (
        <div style={{ fontSize: 12, color: "var(--a-text-02)" }}>Sin tareas.</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[...pendientes, ...completadas].map((t) => {
            const overdue = !t.completada && !!t.fechaLimite && t.fechaLimite < todayISO();
            return (
              <label
                key={t.id}
                style={{
                  display: "flex", alignItems: "center", gap: 8, fontSize: 12,
                  padding: "6px 8px", borderRadius: 6, background: "#fff", border: "1px solid var(--a-ui-03)",
                  cursor: "pointer", opacity: t.completada ? 0.55 : 1,
                }}
              >
                <input type="checkbox" checked={t.completada} onChange={() => onToggleTarea(t.id)} />
                <span style={{ flex: 1, textDecoration: t.completada ? "line-through" : undefined }}>{t.texto}</span>
                {t.fechaLimite && (
                  <span style={{ fontSize: 10, color: overdue ? "#dc2626" : "var(--a-text-02)", fontWeight: overdue ? 600 : 400, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {fmtShortDate(t.fechaLimite)}
                  </span>
                )}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

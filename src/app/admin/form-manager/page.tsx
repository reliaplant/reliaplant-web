"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  getAllFormContacts,
  saveFormContact,
  updateLeadStatus,
  updateProximoSeguimiento,
  updateNotas,
  updateTareas,
  type FormContactWithId,
} from "@/lib/firebase/form_contact";
import type { LeadStatus, LeadNota, LeadTarea, TareaTipo } from "@/types/forms";
import {
  STATUS_CONFIG, fmtDate, fmtShortDate, todayISO, genId, StatusBadge, telHref, waHref,
  pendingTareasHoy, nextPendingTarea, TAREA_TIPO_CONFIG,
} from "./leadHelpers";
import KanbanBoard from "./KanbanBoard";

const NEW_LEAD_INITIAL = {
  nombre: "", email: "", telefono: "", empresa: "", cargo: "", pais: "", interes: "", especial: "",
};

export default function FormManagerPage() {
  const [forms, setForms] = useState<FormContactWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "todos">("todos");
  const [view, setView] = useState<"hoy" | "lista" | "kanban">("hoy");
  const [showNewLead, setShowNewLead] = useState(false);
  const [newLead, setNewLead] = useState(NEW_LEAD_INITIAL);
  const [savingLead, setSavingLead] = useState(false);

  useEffect(() => {
    getAllFormContacts()
      .then(async (data) => {
        // Migración: el antiguo campo único "próximo seguimiento" pasa a ser una tarea tipo "seguimiento".
        const migrated = await Promise.all(
          data.map(async (lead) => {
            if (!lead.proximoSeguimiento) return lead;
            const tarea: LeadTarea = {
              id: genId(),
              texto: "Seguimiento",
              tipo: "seguimiento",
              fechaLimite: lead.proximoSeguimiento,
              completada: false,
              creada: new Date().toISOString(),
            };
            const tareas = [...(lead.tareas || []), tarea];
            try {
              await updateTareas(lead.id, tareas);
              await updateProximoSeguimiento(lead.id, null);
            } catch (err) {
              console.error(err);
              return lead;
            }
            return { ...lead, tareas, proximoSeguimiento: null };
          })
        );
        setForms(migrated);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSavingLead(true);
      const id = await saveFormContact({
        nombre: newLead.nombre.trim(),
        email: newLead.email.trim(),
        telefono: newLead.telefono.trim(),
        empresa: newLead.empresa.trim(),
        cargo: newLead.cargo.trim(),
        pais: newLead.pais.trim(),
        interes: newLead.interes.trim(),
        especial: newLead.especial.trim() || null,
        date: new Date(),
        isMobile: false,
        origen: "manual",
        type: "manual",
        status: "nuevo",
      });
      setForms((prev) => [
        { ...newLead, especial: newLead.especial || null, date: new Date(), isMobile: false, origen: "manual", type: "manual", status: "nuevo", id },
        ...prev,
      ]);
      setShowNewLead(false);
      setNewLead(NEW_LEAD_INITIAL);
    } catch (err) {
      console.error(err);
      alert("Error al agregar el lead.");
    } finally {
      setSavingLead(false);
    }
  };

  const selected = forms.find((f) => f.id === selectedId) || null;

  const filtered = useMemo(
    () => (statusFilter === "todos" ? forms : forms.filter((f) => (f.status || "nuevo") === statusFilter)),
    [forms, statusFilter]
  );

  const hoyEntries = useMemo(() => pendingTareasHoy(forms), [forms]);

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

  const LOG_CONTACT_TEXT = { llamada: "Llamada realizada", whatsapp: "Contactado por WhatsApp", email: "Contactado por email" } as const;

  // Los tres medios (llamada, WhatsApp, email) quedan como intento "pendiente": abrir la app
  // no significa que la llamada/mensaje se haya concretado de verdad.
  const handleLogContact = async (lead: FormContactWithId, tipo: keyof typeof LOG_CONTACT_TEXT) => {
    const nota: LeadNota = { id: genId(), texto: LOG_CONTACT_TEXT[tipo], fecha: new Date().toISOString(), pendiente: true };
    const notas = [...(lead.notas || []), nota];
    patchLead(lead.id, { notas });
    try {
      await updateNotas(lead.id, notas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleConfirmNota = async (lead: FormContactWithId, notaId: string, detalle: string) => {
    const notas = (lead.notas || []).map((n) =>
      n.id === notaId ? { ...n, pendiente: false, texto: `${n.texto}: ${detalle.trim()}` } : n
    );
    patchLead(lead.id, { notas });
    try {
      await updateNotas(lead.id, notas);
    } catch (err) {
      console.error(err);
    }
    if (!lead.status || lead.status === "nuevo") {
      handleStatusChange(lead.id, "contactado");
    }
  };

  const handleEditNota = async (lead: FormContactWithId, notaId: string, texto: string) => {
    if (!texto.trim()) return;
    const notas = (lead.notas || []).map((n) => (n.id === notaId ? { ...n, texto: texto.trim() } : n));
    patchLead(lead.id, { notas });
    try {
      await updateNotas(lead.id, notas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNota = async (lead: FormContactWithId, notaId: string) => {
    const notas = (lead.notas || []).filter((n) => n.id !== notaId);
    patchLead(lead.id, { notas });
    try {
      await updateNotas(lead.id, notas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTarea = async (lead: FormContactWithId, texto: string, fechaLimite: string, tipo: TareaTipo) => {
    if (!texto.trim()) return;
    const tarea: LeadTarea = {
      id: genId(),
      texto: texto.trim(),
      tipo,
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

  const handleEditTarea = async (
    lead: FormContactWithId, tareaId: string, texto: string, fechaLimite: string, tipo: TareaTipo
  ) => {
    if (!texto.trim()) return;
    const tareas = (lead.tareas || []).map((t) =>
      t.id === tareaId ? { ...t, texto: texto.trim(), fechaLimite: fechaLimite || null, tipo } : t
    );
    patchLead(lead.id, { tareas });
    try {
      await updateTareas(lead.id, tareas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTarea = async (lead: FormContactWithId, tareaId: string) => {
    const tareas = (lead.tareas || []).filter((t) => t.id !== tareaId);
    patchLead(lead.id, { tareas });
    try {
      await updateTareas(lead.id, tareas);
    } catch (err) {
      console.error(err);
    }
  };

  if (selected) {
    const card: CSSProperties = {
      background: "#fff", border: "1px solid var(--a-ui-03)", borderRadius: 8, padding: 20,
    };
    const sectionTitle: CSSProperties = { fontSize: 12, fontWeight: 600, marginBottom: 14 };

    return (
      <div style={{ height: "calc(100vh - 112px)", overflow: "auto", padding: 24, background: "var(--a-ui-01)" }}>
        <button
          onClick={() => setSelectedId(null)}
          className="abtn abtn-ghost abtn-sm"
          style={{ marginBottom: 16 }}
        >
          ← Volver a la lista
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1100 }}>
          {/* Header */}
          <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600 }}>{selected.nombre}</div>
              <div style={{ fontSize: 13, color: "var(--a-text-02)", marginTop: 2 }}>
                {[selected.cargo, selected.empresa].filter(Boolean).join(" · ") || "—"}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <select
                value={selected.status || "nuevo"}
                onChange={(e) => handleStatusChange(selected.id, e.target.value as LeadStatus)}
                className="admin-input"
                style={{ width: 160 }}
              >
                {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
                  <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
                ))}
              </select>
              {selected.telefono && (
                <a
                  href={telHref(selected.telefono)}
                  onClick={() => handleLogContact(selected, "llamada")}
                  className="abtn abtn-secondary"
                  style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                  title="Llamar y registrar en seguimiento"
                >
                  📞 Llamar
                </a>
              )}
              {selected.telefono && (
                <a
                  href={waHref(selected.telefono)}
                  onClick={() => handleLogContact(selected, "whatsapp")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="abtn abtn-secondary"
                  style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                  title="Abrir WhatsApp y registrar en seguimiento"
                >
                  💬 WhatsApp
                </a>
              )}
              <a
                href={`mailto:${selected.email}`}
                onClick={() => handleLogContact(selected, "email")}
                className="abtn abtn-primary"
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                title="Responder por email y registrar en seguimiento"
              >
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Info */}
          <div style={card}>
            <div style={sectionTitle}>Información</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", columnGap: 24, rowGap: 16 }}>
              <DetailRow label="Email" value={selected.email} mono />
              <DetailRow label="Teléfono" value={selected.telefono} mono />
              <DetailRow label="País" value={selected.pais} />
              <DetailRow label="Interés" value={selected.interes} />
              {selected.cantidadPersonas && <DetailRow label="Personas" value={String(selected.cantidadPersonas)} />}
              {selected.origen && <DetailRow label="Origen" value={selected.origen} />}
              {selected.type && <DetailRow label="Tipo" value={selected.type} />}
              {selected.campana && <DetailRow label="Campaña" value={selected.campana} />}
              {selected.anuncio && <DetailRow label="Anuncio" value={selected.anuncio} />}
              <DetailRow label="Dispositivo" value={selected.isMobile ? "Móvil" : "Desktop"} />
              <DetailRow label="Fecha" value={fmtDate(selected.date)} mono />
              {selected.direccion && <DetailRow label="Dirección" value={selected.direccion} full />}
              {selected.especial && <DetailRow label="Notas del form" value={selected.especial} full />}
            </div>
          </div>

          {/* Tareas y seguimientos + Notas */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={card}>
              <div style={sectionTitle}>Tareas y seguimientos</div>
              <TareasSection
                lead={selected}
                onAddTarea={(texto, fecha, tipo) => handleAddTarea(selected, texto, fecha, tipo)}
                onToggleTarea={(tareaId) => handleToggleTarea(selected, tareaId)}
                onEditTarea={(tareaId, texto, fecha, tipo) => handleEditTarea(selected, tareaId, texto, fecha, tipo)}
                onDeleteTarea={(tareaId) => handleDeleteTarea(selected, tareaId)}
              />
            </div>

            <div style={card}>
              <div style={sectionTitle}>Notas</div>
              <NotasSection
                lead={selected}
                onAddNota={(texto) => handleAddNota(selected, texto)}
                onConfirmNota={(notaId, detalle) => handleConfirmNota(selected, notaId, detalle)}
                onEditNota={(notaId, texto) => handleEditNota(selected, notaId, texto)}
                onDeleteNota={(notaId) => handleDeleteNota(selected, notaId)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, height: "calc(100vh - 112px)", overflow: "hidden" }}>
      {/* Main panel */}
      <div style={{ flex: 1, minHeight: 0, overflow: view === "kanban" ? "hidden" : "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "12px 16px 0", display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 2, background: "var(--a-ui-02)", borderRadius: 6, padding: 2 }}>
            <button
              onClick={() => setView("hoy")}
              className="abtn abtn-sm"
              style={{
                background: view === "hoy" ? "#fff" : "transparent",
                boxShadow: view === "hoy" ? "0 1px 2px rgba(0,0,0,0.08)" : undefined,
                border: "none", fontWeight: view === "hoy" ? 600 : 400,
              }}
            >
              Hoy{hoyEntries.length > 0 ? ` (${hoyEntries.length})` : ""}
            </button>
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

          {view !== "hoy" && (
            <>
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
            </>
          )}

          <button
            onClick={() => setShowNewLead(true)}
            className="abtn abtn-primary abtn-sm"
            style={{ marginLeft: "auto" }}
          >
            + Agregar lead
          </button>
        </div>

        {loading ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
        ) : view === "hoy" ? (
          hoyEntries.length === 0 ? (
            <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
              No hay tareas ni seguimientos pendientes para hoy. 🎉
            </div>
          ) : (
            <div className="admin-table-wrap" style={{ marginTop: 8 }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Lead</th>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {hoyEntries.map(({ lead, tarea }) => {
                    const overdue = !!tarea.fechaLimite && tarea.fechaLimite < todayISO();
                    const cfg = TAREA_TIPO_CONFIG[tarea.tipo || "tarea"];
                    return (
                      <tr
                        key={`${lead.id}-${tarea.id}`}
                        onClick={() => setSelectedId(lead.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <td style={{ fontWeight: 500 }}>
                          {lead.nombre}
                          {lead.empresa && (
                            <span style={{ display: "block", fontSize: 11, color: "var(--a-text-02)", fontWeight: 400 }}>{lead.empresa}</span>
                          )}
                        </td>
                        <td>
                          <span className="atag atag-blue">{cfg.icon} {cfg.label}</span>
                        </td>
                        <td style={{ fontSize: 13 }}>{tarea.texto}</td>
                        <td style={{ fontSize: 11, color: overdue ? "#dc2626" : "var(--a-text-02)", fontWeight: overdue ? 600 : 400, whiteSpace: "nowrap" }}>
                          {fmtShortDate(tarea.fechaLimite!)}
                        </td>
                        <td onClick={(e) => e.stopPropagation()} style={{ whiteSpace: "nowrap" }}>
                          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, cursor: "pointer", marginRight: 4 }}>
                              <input type="checkbox" checked={false} onChange={() => handleToggleTarea(lead, tarea.id)} />
                              Listo
                            </label>
                            {lead.telefono && (
                              <a
                                href={telHref(lead.telefono)}
                                onClick={() => handleLogContact(lead, "llamada")}
                                className="abtn abtn-secondary abtn-sm"
                                style={{ textDecoration: "none" }}
                                title="Llamar y registrar contacto"
                              >
                                📞
                              </a>
                            )}
                            {lead.telefono && (
                              <a
                                href={waHref(lead.telefono)}
                                onClick={() => handleLogContact(lead, "whatsapp")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="abtn abtn-secondary abtn-sm"
                                style={{ textDecoration: "none" }}
                                title="Abrir WhatsApp y registrar contacto"
                              >
                                💬
                              </a>
                            )}
                            <a
                              href={`mailto:${lead.email}`}
                              onClick={() => handleLogContact(lead, "email")}
                              className="abtn abtn-secondary abtn-sm"
                              style={{ textDecoration: "none" }}
                              title="Responder por email y registrar contacto"
                            >
                              ✉️
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )
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
                  <th>Próximo pendiente</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((f) => {
                  const next = nextPendingTarea(f);
                  const overdue = !!next?.fechaLimite && next.fechaLimite < todayISO();
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
                        {next ? `${TAREA_TIPO_CONFIG[next.tipo || "tarea"].icon} ${fmtShortDate(next.fechaLimite!)}` : "—"}
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

      {/* Modal: agregar lead manualmente */}
      {showNewLead && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowNewLead(false); }}
        >
          <div style={{ background: "var(--a-ui-01)", width: 480, maxWidth: "90vw", maxHeight: "85vh", overflow: "auto", padding: 32, boxShadow: "0 8px 32px rgba(0,0,0,0.24)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Agregar lead manualmente</span>
              <button
                onClick={() => setShowNewLead(false)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "var(--a-text-02)", lineHeight: 1 }}
              >×</button>
            </div>

            <form onSubmit={handleAddLead}>
              <div className="admin-field">
                <label className="admin-field-label">Nombre</label>
                <input
                  className="admin-input"
                  type="text"
                  value={newLead.nombre}
                  onChange={(e) => setNewLead({ ...newLead, nombre: e.target.value })}
                  required
                />
              </div>
              <div className="admin-field">
                <label className="admin-field-label">Email</label>
                <input
                  className="admin-input"
                  type="email"
                  value={newLead.email}
                  onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                  <label className="admin-field-label">Teléfono</label>
                  <input
                    className="admin-input"
                    type="text"
                    value={newLead.telefono}
                    onChange={(e) => setNewLead({ ...newLead, telefono: e.target.value })}
                  />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                  <label className="admin-field-label">País</label>
                  <input
                    className="admin-input"
                    type="text"
                    value={newLead.pais}
                    onChange={(e) => setNewLead({ ...newLead, pais: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                  <label className="admin-field-label">Empresa</label>
                  <input
                    className="admin-input"
                    type="text"
                    value={newLead.empresa}
                    onChange={(e) => setNewLead({ ...newLead, empresa: e.target.value })}
                  />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                  <label className="admin-field-label">Cargo</label>
                  <input
                    className="admin-input"
                    type="text"
                    value={newLead.cargo}
                    onChange={(e) => setNewLead({ ...newLead, cargo: e.target.value })}
                  />
                </div>
              </div>
              <div className="admin-field">
                <label className="admin-field-label">Interés</label>
                <input
                  className="admin-input"
                  type="text"
                  value={newLead.interes}
                  onChange={(e) => setNewLead({ ...newLead, interes: e.target.value })}
                  placeholder="Ej. Demo, RCM, RCA…"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field-label">Notas</label>
                <input
                  className="admin-input"
                  type="text"
                  value={newLead.especial}
                  onChange={(e) => setNewLead({ ...newLead, especial: e.target.value })}
                  placeholder="Opcional"
                />
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
                <button type="submit" className="abtn abtn-primary" disabled={savingLead}>
                  {savingLead ? "Guardando…" : "Agregar lead"}
                </button>
                <button type="button" className="abtn abtn-ghost" onClick={() => setShowNewLead(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value, mono, full }: { label: string; value?: string | null; mono?: boolean; full?: boolean }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: 14, gridColumn: full ? "1 / -1" : undefined }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontFamily: mono ? "'IBM Plex Mono', monospace" : undefined, wordBreak: "break-word" }}>
        {value}
      </div>
    </div>
  );
}

function NotasSection({
  lead, onAddNota, onConfirmNota, onEditNota, onDeleteNota,
}: {
  lead: FormContactWithId;
  onAddNota: (texto: string) => void;
  onConfirmNota: (notaId: string, detalle: string) => void;
  onEditNota: (notaId: string, texto: string) => void;
  onDeleteNota: (notaId: string) => void;
}) {
  const [nota, setNota] = useState("");
  const [pendingDrafts, setPendingDrafts] = useState<Record<string, string>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const notasOrdenadas = [...(lead.notas || [])].sort((a, b) => b.fecha.localeCompare(a.fecha));

  const setDraft = (id: string, value: string) => setPendingDrafts((prev) => ({ ...prev, [id]: value }));
  const confirmar = (id: string) => {
    const detalle = pendingDrafts[id] || "";
    if (!detalle.trim()) return;
    onConfirmNota(id, detalle);
    setPendingDrafts((prev) => { const next = { ...prev }; delete next[id]; return next; });
  };

  const startEdit = (n: LeadNota) => { setEditingId(n.id); setEditText(n.texto); };
  const saveEdit = (id: string) => {
    onEditNota(id, editText);
    setEditingId(null);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <input
          type="text"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") { onAddNota(nota); setNota(""); }
          }}
          placeholder="Agregar nota…"
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

      {notasOrdenadas.length === 0 ? (
        <div style={{ fontSize: 12, color: "var(--a-text-02)" }}>Sin notas.</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {notasOrdenadas.map((n) =>
            n.pendiente ? (
              <div
                key={n.id}
                style={{
                  fontSize: 12, background: "#fffbeb", border: "1px dashed #fde68a", borderRadius: 6,
                  padding: "6px 10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: "#92400e", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    ⏳ Pendiente de confirmar
                  </span>
                  <span style={{ fontSize: 10, color: "var(--a-text-02)", fontFamily: "'IBM Plex Mono', monospace" }}>
                    {fmtDate(new Date(n.fecha))}
                  </span>
                </div>
                <div style={{ marginBottom: 6 }}>{n.texto}</div>

                <div style={{ display: "flex", gap: 6 }}>
                  <input
                    type="text"
                    value={pendingDrafts[n.id] || ""}
                    onChange={(e) => setDraft(n.id, e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") confirmar(n.id); }}
                    placeholder="¿Qué se habló / qué pasó?"
                    className="admin-input"
                    style={{ flex: 1, fontSize: 12 }}
                  />
                  <button
                    onClick={() => confirmar(n.id)}
                    disabled={!(pendingDrafts[n.id] || "").trim()}
                    className="abtn abtn-primary abtn-sm"
                  >
                    ✓ Confirmar
                  </button>
                  <button onClick={() => onDeleteNota(n.id)} className="abtn abtn-ghost abtn-sm">
                    🗑
                  </button>
                </div>
              </div>
            ) : (
              <div key={n.id} style={{ fontSize: 12, background: "#fff", border: "1px solid var(--a-ui-03)", borderRadius: 6, padding: "6px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 10, color: "var(--a-text-02)", fontFamily: "'IBM Plex Mono', monospace" }}>
                    {fmtDate(new Date(n.fecha))}
                  </span>
                  {editingId !== n.id && (
                    <div style={{ display: "flex", gap: 4 }}>
                      <button onClick={() => startEdit(n)} title="Editar" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "var(--a-text-02)", padding: 2 }}>
                        ✎
                      </button>
                      <button onClick={() => onDeleteNota(n.id)} title="Eliminar" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "var(--a-text-02)", padding: 2 }}>
                        🗑
                      </button>
                    </div>
                  )}
                </div>

                {editingId === n.id ? (
                  <div>
                    <textarea
                      autoFocus
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="admin-input"
                      style={{ width: "100%", fontSize: 12, minHeight: 50, resize: "vertical", marginBottom: 6 }}
                    />
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => saveEdit(n.id)} disabled={!editText.trim()} className="abtn abtn-primary abtn-sm">
                        Guardar
                      </button>
                      <button onClick={() => setEditingId(null)} className="abtn abtn-ghost abtn-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  n.texto
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function TareasSection({
  lead, onAddTarea, onToggleTarea, onEditTarea, onDeleteTarea,
}: {
  lead: FormContactWithId;
  onAddTarea: (texto: string, fecha: string, tipo: TareaTipo) => void;
  onToggleTarea: (tareaId: string) => void;
  onEditTarea: (tareaId: string, texto: string, fecha: string, tipo: TareaTipo) => void;
  onDeleteTarea: (tareaId: string) => void;
}) {
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState<TareaTipo>("seguimiento");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTexto, setEditTexto] = useState("");
  const [editFecha, setEditFecha] = useState("");
  const [editTipo, setEditTipo] = useState<TareaTipo>("tarea");
  const tareas = lead.tareas || [];
  const pendientes = [...tareas.filter((t) => !t.completada)].sort((a, b) => (a.fechaLimite || "").localeCompare(b.fechaLimite || ""));
  const completadas = tareas.filter((t) => t.completada);

  const submit = () => {
    if (!texto.trim()) return;
    onAddTarea(texto, fecha, tipo);
    setTexto("");
    setFecha("");
  };

  const startEdit = (t: LeadTarea) => {
    setEditingId(t.id);
    setEditTexto(t.texto);
    setEditFecha(t.fechaLimite || "");
    setEditTipo(t.tipo || "tarea");
  };
  const saveEdit = (id: string) => {
    if (!editTexto.trim()) return;
    onEditTarea(id, editTexto, editFecha, editTipo);
    setEditingId(null);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value as TareaTipo)}
          className="admin-input"
          style={{ fontSize: 12, padding: "4px 6px", width: 128 }}
        >
          <option value="seguimiento">📅 Seguimiento</option>
          <option value="tarea">☐ Tarea</option>
        </select>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          placeholder={tipo === "seguimiento" ? "Ej. Llamar para cerrar propuesta…" : "Nueva tarea…"}
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
        <div style={{ fontSize: 12, color: "var(--a-text-02)" }}>Sin tareas ni seguimientos.</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[...pendientes, ...completadas].map((t) => {
            const overdue = !t.completada && !!t.fechaLimite && t.fechaLimite < todayISO();
            const cfg = TAREA_TIPO_CONFIG[t.tipo || "tarea"];

            if (editingId === t.id) {
              return (
                <div
                  key={t.id}
                  style={{ padding: "6px 8px", borderRadius: 6, background: "#fff", border: "1px solid var(--a-blue)" }}
                >
                  <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                    <select
                      value={editTipo}
                      onChange={(e) => setEditTipo(e.target.value as TareaTipo)}
                      className="admin-input"
                      style={{ fontSize: 12, padding: "4px 6px", width: 128 }}
                    >
                      <option value="seguimiento">📅 Seguimiento</option>
                      <option value="tarea">☐ Tarea</option>
                    </select>
                    <input
                      type="text"
                      value={editTexto}
                      onChange={(e) => setEditTexto(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") saveEdit(t.id); }}
                      className="admin-input"
                      style={{ flex: 1, fontSize: 12 }}
                    />
                    <input
                      type="date"
                      value={editFecha}
                      onChange={(e) => setEditFecha(e.target.value)}
                      className="admin-input"
                      style={{ fontSize: 12, padding: "4px 6px", width: 130 }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => saveEdit(t.id)} disabled={!editTexto.trim()} className="abtn abtn-primary abtn-sm">
                      Guardar
                    </button>
                    <button onClick={() => setEditingId(null)} className="abtn abtn-ghost abtn-sm">
                      Cancelar
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={t.id}
                style={{
                  display: "flex", alignItems: "center", gap: 8, fontSize: 12,
                  padding: "6px 8px", borderRadius: 6, background: "#fff", border: "1px solid var(--a-ui-03)",
                  opacity: t.completada ? 0.55 : 1,
                }}
              >
                <input type="checkbox" checked={t.completada} onChange={() => onToggleTarea(t.id)} style={{ cursor: "pointer" }} />
                <span style={{ fontSize: 10, whiteSpace: "nowrap" }}>{cfg.icon}</span>
                <span style={{ flex: 1, textDecoration: t.completada ? "line-through" : undefined }}>{t.texto}</span>
                {t.fechaLimite && (
                  <span style={{ fontSize: 10, color: overdue ? "#dc2626" : "var(--a-text-02)", fontWeight: overdue ? 600 : 400, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {fmtShortDate(t.fechaLimite)}
                  </span>
                )}
                <button onClick={() => startEdit(t)} title="Editar" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "var(--a-text-02)", padding: 2 }}>
                  ✎
                </button>
                <button onClick={() => onDeleteTarea(t.id)} title="Eliminar" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "var(--a-text-02)", padding: 2 }}>
                  🗑
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

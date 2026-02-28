"use client";

import { useEffect, useState } from "react";
import {
  getAllAdmins,
  createAdminAccount,
  setUserAsAdmin,
  deleteAdmin,
  type AdminUser,
  getCurrentUser,
} from "@/lib/firebase/auth";

type Modal = "none" | "new" | "existing";

export default function AdminAccountPage() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [modal, setModal] = useState<Modal>("none");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", displayName: "" });
  const [existingEmail, setExistingEmail] = useState("");

  useEffect(() => {
    loadAdmins();
    getCurrentUser().then(setCurrentUser).catch(console.error);
  }, []);

  const loadAdmins = async () => {
    try {
      setAdmins(await getAllAdmins());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await createAdminAccount(formData.email, formData.password, formData.displayName);
      await setUserAsAdmin(formData.email);
      setModal("none");
      setFormData({ email: "", password: "", displayName: "" });
      await loadAdmins();
    } catch (err) {
      console.error(err);
      alert("Error al crear administrador.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleMakeExisting = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await setUserAsAdmin(existingEmail);
      setModal("none");
      setExistingEmail("");
      await loadAdmins();
    } catch {
      alert("No se pudo asignar el rol de administrador.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (email: string) => {
    if (!confirm(`¿Eliminar administrador ${email}?`)) return;
    try {
      await deleteAdmin(email);
      await loadAdmins();
    } catch {
      alert("Error al eliminar administrador.");
    }
  };

  const fmt = (d: Date) =>
    new Intl.DateTimeFormat("es-MX", { year: "numeric", month: "short", day: "numeric" }).format(d);

  return (
    <div>
      {/* Current session info */}
      {currentUser && (
        <div style={{ padding: "10px 16px", background: "var(--a-ui-02)", borderLeft: "3px solid var(--a-blue)", fontSize: 13, color: "var(--a-text-02)", marginBottom: 24 }}>
          Sesión activa: <strong style={{ color: "var(--a-text-01)" }}>{currentUser.displayName || currentUser.email}</strong>
          {currentUser.displayName && <span style={{ fontFamily: "'IBM Plex Mono', monospace", marginLeft: 8 }}>({currentUser.email})</span>}
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <button className="abtn abtn-primary" onClick={() => setModal("new")}>
          + Nuevo administrador
        </button>
        <button className="abtn abtn-secondary" onClick={() => setModal("existing")}>
          Asignar rol a cuenta existente
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
      ) : admins.length === 0 ? (
        <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
          No hay administradores registrados.
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Creado</th>
                <th style={{ textAlign: "right" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.email}>
                  <td style={{ fontWeight: 500 }}>{admin.displayName}</td>
                  <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>{admin.email}</td>
                  <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>
                    {fmt(admin.createdAt)}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {admin.email !== currentUser?.email && (
                      <button
                        className="abtn abtn-danger abtn-sm"
                        onClick={() => handleDelete(admin.email)}
                      >
                        Eliminar
                      </button>
                    )}
                    {admin.email === currentUser?.email && (
                      <span style={{ fontSize: 12, color: "var(--a-text-02)", fontStyle: "italic" }}>Cuenta actual</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal overlay */}
      {modal !== "none" && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setModal("none"); }}
        >
          <div style={{ background: "var(--a-ui-01)", width: 480, maxWidth: "90vw", padding: 32, boxShadow: "0 8px 32px rgba(0,0,0,0.24)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                {modal === "new" ? "Nuevo administrador" : "Asignar rol a cuenta existente"}
              </span>
              <button
                onClick={() => setModal("none")}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "var(--a-text-02)", lineHeight: 1 }}
              >×</button>
            </div>

            {modal === "new" && (
              <form onSubmit={handleAddAdmin}>
                <div className="admin-field">
                  <label className="admin-field-label">Nombre</label>
                  <input
                    className="admin-input"
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label className="admin-field-label">Email</label>
                  <input
                    className="admin-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label className="admin-field-label">Contraseña</label>
                  <input
                    className="admin-input"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={8}
                  />
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
                  <button type="submit" className="abtn abtn-primary" disabled={submitting}>
                    {submitting ? "Creando…" : "Crear administrador"}
                  </button>
                  <button type="button" className="abtn abtn-ghost" onClick={() => setModal("none")}>
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {modal === "existing" && (
              <form onSubmit={handleMakeExisting}>
                <div className="admin-field">
                  <label className="admin-field-label">Email de la cuenta existente</label>
                  <input
                    className="admin-input"
                    type="email"
                    value={existingEmail}
                    onChange={(e) => setExistingEmail(e.target.value)}
                    required
                    placeholder="usuario@ejemplo.com"
                  />
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
                  <button type="submit" className="abtn abtn-primary" disabled={submitting}>
                    {submitting ? "Asignando…" : "Asignar rol admin"}
                  </button>
                  <button type="button" className="abtn abtn-ghost" onClick={() => setModal("none")}>
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

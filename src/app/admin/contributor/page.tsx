"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { toast } from "react-hot-toast";
import { BlogContributor } from "@/types/blog";
import {
  getContributor,
  getAllContributors,
  createContributor,
  updateContributor,
  deleteContributor,
  uploadContributorPhoto,
} from "@/lib/firebase/blog/contributor";
import imageCompression from "browser-image-compression";

function ContributorPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  const [contributors, setContributors] = useState<BlogContributor[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(editId);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formDirty, setFormDirty] = useState(false);

  const emptyForm: BlogContributor = {
    name: "", email: "", bio: "", photo: "", active: true,
    socialMedia: { twitter: "", linkedin: "", instagram: "" },
  };
  const [form, setForm] = useState<BlogContributor>(emptyForm);

  useEffect(() => { loadContributors(); }, []);

  useEffect(() => {
    if (editId) {
      setSelectedId(editId);
      loadFormData(editId);
    }
  }, [editId]);

  const loadContributors = async () => {
    try {
      setLoading(true);
      setContributors(await getAllContributors());
    } catch {
      toast.error("Error al cargar articulistas");
    } finally {
      setLoading(false);
    }
  };

  const loadFormData = async (id: string) => {
    try {
      const data = await getContributor(id);
      if (data) setForm(data);
    } catch {
      toast.error("Error al cargar articulista");
    }
  };

  const selectContributor = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
      setForm(emptyForm);
      setFormDirty(false);
    } else {
      setSelectedId(id);
      loadFormData(id);
      setFormDirty(false);
    }
  };

  const newContributor = () => {
    setSelectedId(null);
    setForm(emptyForm);
    setFormDirty(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDirty(true);
    if (name.startsWith("socialMedia.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({ ...prev, socialMedia: { ...prev.socialMedia, [key]: value } }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDirty(true);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
      if (compressed.size > 2 * 1024 * 1024) { toast.error("Imagen demasiado grande (máx 2 MB)"); return; }
      setForm((prev) => ({ ...prev, photo: URL.createObjectURL(compressed), photoFile: compressed }));
      setFormDirty(true);
      toast.success("Imagen cargada");
    } catch {
      toast.error("Error al cargar la imagen");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar este articulista?")) return;
    try {
      await deleteContributor(id);
      toast.success("Articulista eliminado");
      if (selectedId === id) { setSelectedId(null); setForm(emptyForm); }
      await loadContributors();
    } catch {
      toast.error("Error al eliminar");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) { toast.error("Nombre y email son obligatorios"); return; }
    try {
      setSubmitting(true);
      let photoUrl = form.photo || "";
      if (form.photoFile) {
        const tempId = selectedId || "temp-" + Date.now();
        photoUrl = await uploadContributorPhoto(form.photoFile, tempId);
      }
      const { photoFile, ...data } = form;
      const payload = { ...data, photo: photoUrl, updatedAt: new Date().toISOString() };
      if (selectedId) {
        await updateContributor(selectedId, payload);
        toast.success("Articulista actualizado");
      } else {
        await createContributor({ ...payload, createdAt: new Date().toISOString() });
        toast.success("Articulista creado");
        setSelectedId(null);
        setForm(emptyForm);
      }
      setFormDirty(false);
      await loadContributors();
    } catch {
      toast.error("Error al guardar");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-contrib-layout">
      {/* LEFT: list */}
      <div className="admin-contrib-list">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 0 12px" }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)" }}>
            {contributors.length} articulista{contributors.length !== 1 ? "s" : ""}
          </span>
          <button className="abtn abtn-primary abtn-sm" onClick={newContributor}>
            + Nuevo
          </button>
        </div>

        {loading ? (
          <div style={{ padding: 32, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
        ) : contributors.length === 0 ? (
          <div style={{ padding: 32, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
            Sin articulistas. Crea el primero.
          </div>
        ) : (
          <div>
            {contributors.map((c) => (
              <div
                key={c.id}
                onClick={() => c.id && selectContributor(c.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  background: selectedId === c.id ? "var(--a-ui-02)" : "transparent",
                  borderLeft: selectedId === c.id ? "3px solid var(--a-blue)" : "3px solid transparent",
                  borderBottom: "1px solid var(--a-ui-03)",
                  transition: "background 0.1s",
                }}
                onMouseOver={(e) => { if (selectedId !== c.id) e.currentTarget.style.background = "var(--a-ui-02)"; }}
                onMouseOut={(e) => { if (selectedId !== c.id) e.currentTarget.style.background = "transparent"; }}
              >
                {c.photo ? (
                  <img src={c.photo} alt={c.name} style={{ width: 32, height: 32, objectFit: "cover", flexShrink: 0, border: "1px solid var(--a-ui-03)" }} />
                ) : (
                  <div style={{ width: 32, height: 32, background: "var(--a-ui-03)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "var(--a-text-02)", flexShrink: 0 }}>
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "var(--a-text-02)", fontFamily: "'IBM Plex Mono', monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.email}</div>
                </div>
                <span className={`atag ${c.active ? "atag-green" : "atag-gray"}`} style={{ flexShrink: 0 }}>
                  {c.active ? "Activo" : "Inactivo"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: form */}
      <div className="admin-contrib-form">
        <div style={{ padding: "0 0 16px", borderBottom: "1px solid var(--a-ui-03)", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--a-text-01)" }}>
            {selectedId ? "Editar articulista" : "Nuevo articulista"}
          </span>
          {selectedId && (
            <button
              className="abtn abtn-danger abtn-sm"
              onClick={() => selectedId && handleDelete(selectedId)}
              type="button"
            >
              Eliminar
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
            <div className="admin-field">
              <label className="admin-field-label" htmlFor="name">Nombre *</label>
              <input className="admin-input" id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="admin-field">
              <label className="admin-field-label" htmlFor="email">Email *</label>
              <input className="admin-input" id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="admin-field">
            <label className="admin-field-label" htmlFor="bio">Biografía</label>
            <textarea className="admin-input" id="bio" name="bio" rows={4} value={form.bio} onChange={handleChange} style={{ resize: "vertical" }} />
          </div>

          {/* Photo */}
          <div className="admin-field">
            <label className="admin-field-label">Foto de perfil</label>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {form.photo && (
                <img src={form.photo} alt="preview" style={{ width: 48, height: 48, objectFit: "cover", border: "1px solid var(--a-ui-03)" }} />
              )}
              <input type="file" accept="image/*" onChange={handlePhoto} style={{ fontSize: 13 }} />
            </div>
          </div>

          {/* Social */}
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", margin: "20px 0 12px" }}>
            Redes sociales
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 24px" }}>
            {(["twitter", "linkedin", "instagram"] as const).map((net) => (
              <div className="admin-field" key={net}>
                <label className="admin-field-label" htmlFor={`socialMedia.${net}`} style={{ textTransform: "capitalize" }}>{net}</label>
                <input
                  className="admin-input"
                  id={`socialMedia.${net}`}
                  name={`socialMedia.${net}`}
                  value={form.socialMedia?.[net] || ""}
                  onChange={handleChange}
                  placeholder={net === "linkedin" ? "URL completa" : "@usuario"}
                />
              </div>
            ))}
          </div>

          {/* Active toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0 24px" }}>
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={form.active}
              onChange={handleCheckbox}
              style={{ width: 14, height: 14, accentColor: "var(--a-blue)" }}
            />
            <label htmlFor="active" style={{ fontSize: 14, cursor: "pointer" }}>Articulista activo</label>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit" disabled={submitting} className="abtn abtn-primary">
              {submitting ? "Guardando…" : selectedId ? "Guardar cambios" : "Crear articulista"}
            </button>
            {formDirty && (
              <button type="button" className="abtn abtn-ghost" onClick={() => { setForm(emptyForm); setFormDirty(false); setSelectedId(null); }}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContributorPage() {
  return (
    <Suspense fallback={<div style={{ padding: 32, color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>}>
      <ContributorPageInner />
    </Suspense>
  );
}

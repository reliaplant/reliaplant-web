"use client";

import { useState, useEffect } from "react";
import { BlogPost, BlogContributor } from "../../../../types/blog";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";
import { uploadBlogImage } from "@/lib/firebase/blog/blog";
import { getAllContributors } from "@/lib/firebase/blog/contributor";
import ClientSideRichEditor from "./ClientSideRichEditor";

interface BlogFormProps {
  blogPost: BlogPost;
  setBlogPost: React.Dispatch<React.SetStateAction<BlogPost>>;
  onSave: (saveAsDraft?: boolean) => Promise<void>;
  isEditing: boolean;
  activeTab: "basic" | "seo";
  setActiveTab: React.Dispatch<React.SetStateAction<"basic" | "seo">>;
}

export default function BlogForm({
  blogPost,
  setBlogPost,
  onSave,
  isEditing,
  activeTab,
  setActiveTab,
}: BlogFormProps) {
  const [newTag, setNewTag] = useState("");
  const [newKeyPhrase, setNewKeyPhrase] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [contributors, setContributors] = useState<BlogContributor[]>([]);
  const [loadingContributors, setLoadingContributors] = useState(true);
  const [loadingAI, setLoadingAI] = useState<string | null>(null);
  // Store pending image file for new posts (no id yet)
  const [pendingImageFile, setPendingImageFile] = useState<File | null>(null);

  // Generación de borrador completo con IA
  const [aiTopic, setAiTopic] = useState("");
  const [aiKeyword, setAiKeyword] = useState("");
  const [aiNotes, setAiNotes] = useState("");
  const [generatingDraft, setGeneratingDraft] = useState(false);

  const generateDraftWithAI = async () => {
    if (!aiTopic.trim()) {
      toast.error("Describe el tema del artículo primero");
      return;
    }
    setGeneratingDraft(true);
    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic, keyword: aiKeyword, notes: aiNotes }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");
      setBlogPost((prev) => ({
        ...prev,
        title: data.title,
        content: data.content,
        summary: data.summary,
        tags: data.tags?.length ? data.tags : prev.tags,
        seoTitle: data.seoTitle,
        slug: data.slug,
        metaDescription: data.metaDescription,
        keyPhrases: data.keyPhrases,
        published: false,
      }));
      toast.success("Borrador generado — revísalo antes de publicar");
    } catch (err: any) {
      toast.error(err.message || "Error al generar el borrador");
    } finally {
      setGeneratingDraft(false);
    }
  };

  const suggestWithAI = async (field: string) => {
    if (!blogPost.title && !blogPost.content) {
      toast.error("Añade al menos un título o contenido antes de usar IA.");
      return;
    }
    setLoadingAI(field);
    try {
      const res = await fetch("/api/seo-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: blogPost.title, content: blogPost.content, field }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");
      if (field === "keyPhrases") {
        const phrases = data.suggestion.split(",").map((p: string) => p.trim()).filter(Boolean);
        setBlogPost((prev) => ({ ...prev, keyPhrases: phrases }));
      } else {
        setBlogPost((prev) => ({ ...prev, [field]: data.suggestion }));
      }
      toast.success("Sugerencia generada");
    } catch (err: any) {
      toast.error(err.message || "Error al generar sugerencia con IA");
    } finally {
      setLoadingAI(null);
    }
  };

  useEffect(() => {
    getAllContributors()
      .then((data) => setContributors(data.filter((c) => c.active)))
      .catch(() => toast.error("Error al cargar articulistas"))
      .finally(() => setLoadingContributors(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "author") {
      const c = contributors.find((x) => x.name === value);
      setBlogPost((prev) => ({ ...prev, author: value, ...(c ? { contributorId: c.id } : {}) }));
    } else {
      setBlogPost((prev) => ({ ...prev, [name]: value }));
    }
    if (name === "title" && !blogPost.slug) {
      const slug = value.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
      setBlogPost((prev) => ({ ...prev, slug }));
    }
  };

  const handleTagAdd = () => {
    if (newTag.trim() && !blogPost.tags.includes(newTag.trim())) {
      setBlogPost((prev) => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag("");
    }
  };

  const handleTagRemove = (tag: string) => {
    setBlogPost((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }));
  };

  const handleKeyPhraseAdd = () => {
    if (newKeyPhrase.trim() && !blogPost.keyPhrases?.includes(newKeyPhrase.trim())) {
      setBlogPost((prev) => ({ ...prev, keyPhrases: [...(prev.keyPhrases || []), newKeyPhrase.trim()] }));
      setNewKeyPhrase("");
    }
  };

  const handleKeyPhraseRemove = (phrase: string) => {
    setBlogPost((prev) => ({ ...prev, keyPhrases: prev.keyPhrases?.filter((p) => p !== phrase) || [] }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
      const localUrl = URL.createObjectURL(compressed);
      setBlogPost((prev) => ({ ...prev, coverImage: localUrl }));
      if (blogPost.id) {
        const remoteUrl = await uploadBlogImage(compressed, blogPost.id);
        setBlogPost((prev) => ({ ...prev, coverImage: remoteUrl }));
      } else {
        // Store for upload after save creates an id
        setPendingImageFile(compressed);
      }
      toast.success("Imagen cargada");
    } catch {
      toast.error("Error al cargar la imagen");
    }
  };

  const handleSubmit = async (e: React.FormEvent, saveAsDraft = false) => {
    e.preventDefault();
    if (!blogPost.title.trim()) { toast.error("El título es obligatorio"); return; }
    try {
      setSubmitting(true);
      await onSave(saveAsDraft);
      // After save, if there's a pending image and the post now has an id, upload it
      if (pendingImageFile && blogPost.id) {
        const remoteUrl = await uploadBlogImage(pendingImageFile, blogPost.id);
        setBlogPost((prev) => ({ ...prev, coverImage: remoteUrl }));
        setPendingImageFile(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const seoComplete = !!(blogPost.seoTitle && blogPost.metaDescription && blogPost.slug);

  return (
    <form onSubmit={(e) => handleSubmit(e, false)}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--a-ui-03)", marginBottom: 28 }}>
        {(["basic", "seo"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "12px 24px",
              fontSize: 14,
              fontFamily: "inherit",
              cursor: "pointer",
              background: "none",
              border: "none",
              borderBottom: activeTab === tab ? "2px solid var(--a-blue)" : "2px solid transparent",
              color: activeTab === tab ? "var(--a-blue)" : "var(--a-text-02)",
              fontWeight: activeTab === tab ? 600 : 400,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {tab === "basic" ? "Contenido" : "SEO"}
            {tab === "seo" && (
              <span
                className="seo-dots"
                style={{ marginLeft: 4 }}
                title={`SEO: ${seoComplete ? "Completo" : "Incompleto"}`}
              >
                <span className={`seo-dot ${blogPost.seoTitle ? "ok" : "missing"}`} title="Título SEO" />
                <span className={`seo-dot ${blogPost.metaDescription ? "ok" : "missing"}`} title="Meta descripción" />
                <span className={`seo-dot ${blogPost.slug ? "ok" : "missing"}`} title="Slug" />
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Basic Tab */}
      {activeTab === "basic" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {!isEditing && (
            <div style={{ padding: 16, background: "var(--a-ui-01)", border: "1px solid var(--a-ui-03)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>✦ Generar borrador completo con IA</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  className="admin-input"
                  type="text"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="Tema del artículo (ej. cómo calcular MTBF con taxonomía ISO 14224)"
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <input
                    className="admin-input"
                    type="text"
                    value={aiKeyword}
                    onChange={(e) => setAiKeyword(e.target.value)}
                    placeholder="Palabra clave SEO (opcional)"
                  />
                  <input
                    className="admin-input"
                    type="text"
                    value={aiNotes}
                    onChange={(e) => setAiNotes(e.target.value)}
                    placeholder="Notas adicionales (opcional)"
                  />
                </div>
                <button
                  type="button"
                  onClick={generateDraftWithAI}
                  disabled={generatingDraft}
                  className="abtn abtn-primary abtn-sm"
                  style={{ alignSelf: "flex-start" }}
                >
                  {generatingDraft ? "Generando…" : "Generar borrador"}
                </button>
                <p style={{ fontSize: 11, color: "var(--a-text-02)", margin: 0 }}>
                  Esto rellena título, contenido, tags y campos SEO. Siempre queda como borrador — revisa y edita antes de publicar.
                </p>
              </div>
            </div>
          )}

          <div className="admin-field">
            <label className="admin-field-label" htmlFor="title">Título *</label>
            <input
              className="admin-input"
              id="title"
              type="text"
              name="title"
              value={blogPost.title}
              onChange={handleChange}
              required
              placeholder="Título del artículo"
            />
          </div>

          <div className="admin-field">
            <label className="admin-field-label">Autor</label>
            {loadingContributors ? (
              <div style={{ padding: "10px 12px", background: "var(--a-ui-02)", fontSize: 13, color: "var(--a-text-02)" }}>
                Cargando articulistas…
              </div>
            ) : contributors.length > 0 ? (
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  name="author"
                  value={blogPost.author}
                  onChange={handleChange}
                  className="admin-input"
                  style={{ flex: 1 }}
                  required
                >
                  <option value="" disabled>Seleccionar articulista</option>
                  {contributors.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <a href="/admin/contributor" target="_blank" className="abtn abtn-ghost abtn-sm" style={{ whiteSpace: "nowrap", alignSelf: "stretch", display: "flex", alignItems: "center" }}>
                  Gestionar
                </a>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  className="admin-input"
                  type="text"
                  name="author"
                  value={blogPost.author}
                  onChange={handleChange}
                  required
                  placeholder="Sin articulistas — escribe un nombre"
                  style={{ flex: 1 }}
                />
                <a href="/admin/contributor" target="_blank" className="abtn abtn-primary abtn-sm" style={{ whiteSpace: "nowrap", alignSelf: "stretch", display: "flex", alignItems: "center" }}>
                  Crear
                </a>
              </div>
            )}
          </div>

          <div className="admin-field">
            <label className="admin-field-label">Imagen de portada</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ fontSize: 13 }} />
            {blogPost.coverImage && (
              <img src={blogPost.coverImage} alt="Vista previa" style={{ marginTop: 10, maxHeight: 160, maxWidth: "100%", objectFit: "contain", border: "1px solid var(--a-ui-03)" }} />
            )}
          </div>

          <div className="admin-field">
            <label className="admin-field-label">Contenido</label>
            <ClientSideRichEditor
              value={blogPost.content}
              onChange={(v: string) => setBlogPost((prev) => ({ ...prev, content: v }))}
              placeholder="Escribe el contenido del artículo aquí…"
              postId={blogPost.id || "temp-" + Date.now()}
            />
          </div>

          {/* Tags */}
          <div className="admin-field">
            <label className="admin-field-label">Etiquetas</label>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                className="admin-input"
                style={{ flex: 1 }}
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Nueva etiqueta"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleTagAdd())}
              />
              <button type="button" className="abtn abtn-secondary abtn-sm" onClick={handleTagAdd}>
                + Añadir
              </button>
            </div>
            {blogPost.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                {blogPost.tags.map((tag) => (
                  <span key={tag} className="atag atag-blue" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, lineHeight: 1, color: "inherit", padding: 0 }}
                    >×</button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Date + Published */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="admin-field">
              <label className="admin-field-label" htmlFor="publishDate">Fecha de publicación</label>
              <input
                className="admin-input"
                id="publishDate"
                type="date"
                name="publishDate"
                value={blogPost.publishDate.split("T")[0]}
                onChange={handleChange}
              />
            </div>
            <div className="admin-field" style={{ justifyContent: "flex-end", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 2 }}>
                <input
                  type="checkbox"
                  id="published"
                  checked={blogPost.published}
                  onChange={(e) => setBlogPost((prev) => ({ ...prev, published: e.target.checked }))}
                  style={{ width: 14, height: 14, accentColor: "var(--a-blue)" }}
                />
                <label htmlFor="published" style={{ fontSize: 14, cursor: "pointer" }}>Publicar inmediatamente</label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO Tab */}
      {activeTab === "seo" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Info banner */}
          <div style={{ padding: "10px 16px", background: "var(--a-ui-02)", borderLeft: "3px solid var(--a-blue)", fontSize: 13, color: "var(--a-text-02)" }}>
            Usa <strong style={{ color: "var(--a-text-01)" }}>Sugerir con IA</strong> para generar sugerencias basadas en el título y contenido del artículo.
          </div>

          {/* SEO Title */}
          <div className="admin-field">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <label className="admin-field-label" style={{ marginBottom: 0 }}>Título SEO</label>
              <AIButton field="seoTitle" loadingAI={loadingAI} onSuggest={suggestWithAI} />
            </div>
            <input
              className="admin-input"
              type="text"
              name="seoTitle"
              value={blogPost.seoTitle || ""}
              onChange={handleChange}
              placeholder="Título optimizado para buscadores (55–65 caracteres)"
            />
            <CharCount current={blogPost.seoTitle?.length || 0} max={65} />
          </div>

          {/* Slug */}
          <div className="admin-field">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <label className="admin-field-label" style={{ marginBottom: 0 }}>URL amigable (slug)</label>
              <AIButton field="slug" loadingAI={loadingAI} onSuggest={suggestWithAI} />
            </div>
            <div className="admin-slug-field">
              <span className="admin-slug-prefix">/blog/</span>
              <input
                type="text"
                name="slug"
                value={blogPost.slug || ""}
                onChange={handleChange}
                placeholder="url-del-articulo"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="admin-field">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <label className="admin-field-label" style={{ marginBottom: 0 }}>Resumen</label>
              <AIButton field="summary" loadingAI={loadingAI} onSuggest={suggestWithAI} />
            </div>
            <textarea
              className="admin-input"
              name="summary"
              value={blogPost.summary || ""}
              onChange={handleChange}
              rows={2}
              placeholder="Breve resumen del artículo (1–2 frases)"
              style={{ resize: "vertical" }}
            />
          </div>

          {/* Meta description */}
          <div className="admin-field">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <label className="admin-field-label" style={{ marginBottom: 0 }}>Meta descripción</label>
              <AIButton field="metaDescription" loadingAI={loadingAI} onSuggest={suggestWithAI} />
            </div>
            <textarea
              className="admin-input"
              name="metaDescription"
              value={blogPost.metaDescription || ""}
              onChange={handleChange}
              rows={3}
              placeholder="Descripción para resultados de búsqueda (145–160 caracteres)"
              style={{ resize: "vertical" }}
            />
            <CharCount current={blogPost.metaDescription?.length || 0} max={160} />
          </div>

          {/* SERP Preview */}
          {(blogPost.seoTitle || blogPost.metaDescription || blogPost.slug) && (
            <div className="admin-serp">
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 10 }}>
                Vista previa en Google
              </div>
              <div className="serp-url">https://reliaplant.com/blog/{blogPost.slug || "slug-del-articulo"}</div>
              <div className="serp-title">{blogPost.seoTitle || blogPost.title || "Título del artículo"}</div>
              <div className="serp-desc">{blogPost.metaDescription || "La meta descripción aparecerá aquí cuando la escribas..."}</div>
            </div>
          )}

          {/* Key phrases */}
          <div className="admin-field">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <label className="admin-field-label" style={{ marginBottom: 0 }}>Frases clave</label>
              <AIButton field="keyPhrases" loadingAI={loadingAI} onSuggest={suggestWithAI} label="Sugerir 5 con IA" />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                className="admin-input"
                style={{ flex: 1 }}
                type="text"
                value={newKeyPhrase}
                onChange={(e) => setNewKeyPhrase(e.target.value)}
                placeholder="Añadir frase clave"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleKeyPhraseAdd())}
              />
              <button type="button" className="abtn abtn-secondary abtn-sm" onClick={handleKeyPhraseAdd}>
                + Añadir
              </button>
            </div>
            {(blogPost.keyPhrases?.length || 0) > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                {blogPost.keyPhrases?.map((phrase) => (
                  <span key={phrase} className="atag atag-green" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {phrase}
                    <button
                      type="button"
                      onClick={() => handleKeyPhraseRemove(phrase)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, lineHeight: 1, color: "inherit", padding: 0 }}
                    >×</button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--a-ui-03)", display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={submitting}
          className="abtn abtn-ghost"
        >
          Guardar borrador
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="abtn abtn-primary"
        >
          {submitting ? "Guardando…" : isEditing ? "Actualizar entrada" : "Publicar entrada"}
        </button>
      </div>
    </form>
  );
}

// Sub-components
function AIButton({ field, loadingAI, onSuggest, label = "Sugerir con IA" }: {
  field: string;
  loadingAI: string | null;
  onSuggest: (f: string) => void;
  label?: string;
}) {
  const busy = loadingAI === field;
  return (
    <button
      type="button"
      onClick={() => onSuggest(field)}
      disabled={busy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 11,
        fontFamily: "inherit",
        cursor: busy ? "wait" : "pointer",
        background: busy ? "var(--a-ui-03)" : "var(--a-blue)",
        color: busy ? "var(--a-text-02)" : "#fff",
        border: "none",
        padding: "4px 10px",
        fontWeight: 500,
        opacity: busy ? 0.7 : 1,
        letterSpacing: "0.02em",
      }}
    >
      {busy ? "Generando…" : `✦ ${label}`}
    </button>
  );
}

function CharCount({ current, max }: { current: number; max: number }) {
  const over = current > max;
  return (
    <div style={{ fontSize: 11, marginTop: 3, fontFamily: "'IBM Plex Mono', monospace", color: over ? "#da1e28" : "var(--a-text-02)" }}>
      {current}/{max}
    </div>
  );
}

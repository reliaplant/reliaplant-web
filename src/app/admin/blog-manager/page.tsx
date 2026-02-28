"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getAllContributors,
  deleteContributor,
} from "@/lib/firebase/blog/contributor";
import { getAllBlogPosts, deleteBlogPost } from "@/lib/firebase/blog/blog";
import { BlogPost, BlogContributor } from "../../../types/blog";
import { toast } from "react-hot-toast";

function SeoIndicator({ post }: { post: BlogPost }) {
  const checks = [
    { key: "seoTitle", label: "Título SEO", value: post.seoTitle },
    { key: "metaDescription", label: "Meta descripción", value: post.metaDescription },
    { key: "slug", label: "Slug", value: post.slug },
  ];
  return (
    <span className="seo-dots" title={checks.map(c => `${c.label}: ${c.value ? "✓" : "✗"}`).join(" | ")}>
      {checks.map((c) => (
        <span
          key={c.key}
          className={`seo-dot ${c.value ? "ok" : "missing"}`}
          title={`${c.label}: ${c.value ? "OK" : "Falta"}`}
        />
      ))}
    </span>
  );
}

export default function BlogManager() {
  const [activeTab, setActiveTab] = useState<"posts" | "contributors">("posts");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [contributors, setContributors] = useState<BlogContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === "posts") fetchBlogPosts();
    else fetchContributors();
  }, [activeTab]);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setBlogPosts(await getAllBlogPosts());
    } catch {
      toast.error("Error al cargar las entradas del blog");
    } finally {
      setLoading(false);
    }
  };

  const fetchContributors = async () => {
    try {
      setLoading(true);
      setContributors(await getAllContributors());
    } catch {
      toast.error("Error al cargar los articulistas");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta entrada del blog?")) return;
    try {
      setDeleting(id);
      await deleteBlogPost(id);
      toast.success("Entrada eliminada correctamente");
      setBlogPosts((p) => p.filter((x) => x.id !== id));
    } catch {
      toast.error("Error al eliminar la entrada");
    } finally {
      setDeleting(null);
    }
  };

  const handleDeleteContributor = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este articulista?")) return;
    try {
      setDeleting(id);
      await deleteContributor(id);
      toast.success("Articulista eliminado correctamente");
      setContributors((c) => c.filter((x) => x.id !== id));
    } catch {
      toast.error("Error al eliminar el articulista");
    } finally {
      setDeleting(null);
    }
  };

  const fmt = (d: string) =>
    new Intl.DateTimeFormat("es-MX", { year: "numeric", month: "short", day: "numeric" }).format(new Date(d));

  return (
    <div>
      {/* Tab bar + action */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderBottom: "1px solid var(--a-ui-03)", marginBottom: 0 }}>
        <div style={{ display: "flex" }}>
          {(["posts", "contributors"] as const).map((tab) => (
            <button
              key={tab}
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
                transition: "color 0.15s",
              }}
            >
              {tab === "posts" ? "Entradas" : "Articulistas"}
            </button>
          ))}
        </div>

        <div style={{ paddingBottom: 8 }}>
          {activeTab === "posts" ? (
            <Link href="/admin/blog-editor" className="abtn abtn-primary abtn-sm">
              + Nueva entrada
            </Link>
          ) : (
            <Link href="/admin/contributor" className="abtn abtn-primary abtn-sm">
              + Nuevo articulista
            </Link>
          )}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ padding: "48px 0", textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
          Cargando…
        </div>
      )}

      {/* Posts table */}
      {!loading && activeTab === "posts" && (
        <>
          {blogPosts.length === 0 ? (
            <div style={{ padding: "48px 0", textAlign: "center", color: "var(--a-text-02)", fontSize: 14 }}>
              No hay entradas de blog.{" "}
              <Link href="/admin/blog-editor" style={{ color: "var(--a-blue)" }}>
                Crear la primera
              </Link>
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th title="SEO: Título · Meta · Slug">SEO</th>
                    <th style={{ textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts.map((post) => (
                    <tr key={post.id}>
                      <td style={{ maxWidth: 300 }}>
                        <span style={{ fontWeight: 500, display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {post.title}
                        </span>
                        {post.slug && (
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--a-text-02)" }}>
                            /{post.slug}
                          </span>
                        )}
                      </td>
                      <td>{post.author}</td>
                      <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, whiteSpace: "nowrap" }}>
                        {fmt(post.publishDate)}
                      </td>
                      <td>
                        <span className={`atag ${post.published ? "atag-green" : "atag-gray"}`}>
                          {post.published ? "Publicado" : "Borrador"}
                        </span>
                      </td>
                      <td>
                        <SeoIndicator post={post} />
                      </td>
                      <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                        <div style={{ display: "inline-flex", gap: 4 }}>
                          {post.published && post.slug && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="abtn abtn-ghost abtn-sm"
                              title="Ver en blog"
                            >
                              Ver
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog-editor?id=${post.id}`}
                            className="abtn abtn-ghost abtn-sm"
                            title="Editar"
                          >
                            Editar
                          </Link>
                          <button
                            onClick={() => post.id && handleDeletePost(post.id)}
                            disabled={deleting === post.id}
                            className="abtn abtn-danger abtn-sm"
                            title="Eliminar"
                          >
                            {deleting === post.id ? "…" : "Eliminar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Contributors table */}
      {!loading && activeTab === "contributors" && (
        <>
          {contributors.length === 0 ? (
            <div style={{ padding: "48px 0", textAlign: "center", color: "var(--a-text-02)", fontSize: 14 }}>
              No hay articulistas.{" "}
              <Link href="/admin/contributor" style={{ color: "var(--a-blue)" }}>
                Crear el primero
              </Link>
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Estado</th>
                    <th style={{ textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {contributors.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          {c.photo ? (
                            <img
                              src={c.photo}
                              alt={c.name}
                              style={{ width: 28, height: 28, objectFit: "cover", flexShrink: 0, border: "1px solid var(--a-ui-03)" }}
                            />
                          ) : (
                            <div style={{ width: 28, height: 28, background: "var(--a-ui-03)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "var(--a-text-02)", flexShrink: 0 }}>
                              {c.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                          {c.name}
                        </div>
                      </td>
                      <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>{c.email}</td>
                      <td>
                        <span className={`atag ${c.active ? "atag-green" : "atag-red"}`}>
                          {c.active ? "Activo" : "Inactivo"}
                        </span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div style={{ display: "inline-flex", gap: 4 }}>
                          <Link
                            href={`/admin/contributor?id=${c.id}`}
                            className="abtn abtn-ghost abtn-sm"
                          >
                            Editar
                          </Link>
                          <button
                            onClick={() => c.id && handleDeleteContributor(c.id)}
                            disabled={deleting === c.id}
                            className="abtn abtn-danger abtn-sm"
                          >
                            {deleting === c.id ? "…" : "Eliminar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

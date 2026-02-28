"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogForm from "./components/BlogForm";
import BlogPreview from "./components/BlogPreview";
import { BlogPost } from "@/types/blog";
import {
  getBlogPost,
  createBlogPost,
  updateBlogPost,
} from "@/lib/firebase/blog/blog";
import { toast, Toaster } from "react-hot-toast";

export default function BlogEditorPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
    }>
      <BlogEditorContent />
    </Suspense>
  );
}

function BlogEditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const postId = searchParams.get("id");
  const isEditing = !!postId;
  const [loading, setLoading] = useState(isEditing);
  const [activeTab, setActiveTab] = useState<"basic" | "seo">("basic");
  const [previewExpanded, setPreviewExpanded] = useState(false);

  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: "",
    content: "",
    author: "",
    coverImage: "",
    tags: [],
    publishDate: new Date().toISOString().split("T")[0],
    published: false,
    seoTitle: "",
    slug: "",
    summary: "",
    metaDescription: "",
    keyPhrases: [],
  });

  useEffect(() => {
    if (postId) fetchBlogPost(postId);
  }, [postId]);

  const fetchBlogPost = async (id: string) => {
    try {
      setLoading(true);
      const post = await getBlogPost(id);
      if (post) {
        setBlogPost(post);
      } else {
        toast.error("No se encontró la entrada del blog");
        router.push("/admin/blog-manager");
      }
    } catch {
      toast.error("Error al cargar la entrada del blog");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (saveAsDraft = false) => {
    if (!blogPost.title.trim()) { toast.error("El título es obligatorio"); return; }
    if (!blogPost.author) { toast.error("Debes seleccionar un autor"); return; }

    const postToSave = {
      ...blogPost,
      published: saveAsDraft ? false : blogPost.published,
      slug: blogPost.slug || blogPost.title.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-"),
    };

    if (isEditing && postId) {
      await updateBlogPost(postId, postToSave);
      toast.success("Entrada actualizada correctamente");
    } else {
      await createBlogPost(postToSave);
      toast.success("Entrada creada correctamente");
    }

    router.push("/admin/blog-manager");
  };

  if (loading) {
    return <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>;
  }

  return (
    <div style={{ padding: 0 }}>
      <Toaster position="top-right" />

      <div style={{
        display: "grid",
        gridTemplateColumns: previewExpanded ? "0fr 1fr" : "1fr 1fr",
        gap: 0,
        alignItems: "start",
        minHeight: "calc(100vh - 48px)",
        transition: "grid-template-columns 0.25s ease",
      }}>
        {/* Form panel */}
        <div style={{
          padding: previewExpanded ? 0 : 24,
          borderRight: "1px solid var(--a-ui-03)",
          overflow: "hidden",
          opacity: previewExpanded ? 0 : 1,
          transition: "opacity 0.2s ease, padding 0.25s ease",
          minWidth: 0,
        }}>
          <BlogForm
            blogPost={blogPost}
            setBlogPost={setBlogPost}
            onSave={handleSave}
            isEditing={isEditing}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Preview panel */}
        <div style={{ position: "sticky", top: 48, maxHeight: "calc(100vh - 48px)", overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {/* Preview header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: "1px solid var(--a-ui-03)",
            background: "var(--a-ui-01)",
            position: "sticky", top: 0, zIndex: 2,
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)" }}>
              Vista previa
            </span>
            <button
              onClick={() => setPreviewExpanded((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "none", border: "1px solid var(--a-ui-03)",
                cursor: "pointer", padding: "4px 10px",
                fontSize: 11, color: "var(--a-text-02)",
                borderRadius: 2, fontFamily: "IBM Plex Sans, sans-serif",
                transition: "background 0.1s",
              }}
              title={previewExpanded ? "Ver editor" : "Expandir vista previa"}
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {previewExpanded
                  ? <path strokeLinecap="round" d="M9 9L4 4m0 0l5 0M4 4l0 5M15 9l5-5m0 0l-5 0m5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0-5M15 15l5 5m0 0l-5 0m5 0l0-5"/>
                  : <path strokeLinecap="round" d="M4 8V4m0 0h4M4 4l5 5M20 8V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5M20 16v4m0 0h-4m4 0l-5-5"/>}
              </svg>
              {previewExpanded ? "Ver editor" : "Expandir"}
            </button>
          </div>
          <div style={{ padding: 24, flex: 1 }}>
            <BlogPreview blogPost={blogPost} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

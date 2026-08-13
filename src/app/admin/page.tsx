"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllBlogPosts } from "@/lib/firebase/blog/blog";
import { getAllContributors } from "@/lib/firebase/blog/contributor";
import { getAllFormContacts } from "@/lib/firebase/form_contact";

export default function AdminPage() {
  const [counts, setCounts] = useState({ posts: 0, published: 0, contributors: 0, forms: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getAllBlogPosts().catch(() => []),
      getAllContributors().catch(() => []),
      getAllFormContacts().catch(() => []),
    ]).then(([posts, contributors, forms]) => {
      setCounts({
        posts: posts.length,
        published: posts.filter((p: any) => p.published).length,
        contributors: contributors.length,
        forms: forms.length,
      });
      setLoading(false);
    });
  }, []);

  const tiles = [
    {
      label: "Entradas totales",
      value: loading ? "—" : counts.posts,
      sub: loading ? "" : `${counts.published} publicadas`,
      href: "/admin/blog-manager",
      color: "var(--a-blue)",
    },
    {
      label: "Borradores",
      value: loading ? "—" : counts.posts - counts.published,
      sub: "Sin publicar",
      href: "/admin/blog-manager",
      color: "#6f6f6f",
    },
    {
      label: "Articulistas",
      value: loading ? "—" : counts.contributors,
      sub: "Activos en el blog",
      href: "/admin/contributor",
      color: "#198038",
    },
    {
      label: "CRM",
      value: loading ? "—" : counts.forms,
      sub: "Solicitudes recibidas",
      href: "/admin/form-manager",
      color: "#9f1853",
    },
  ];

  const quickLinks = [
    { label: "Nueva entrada de blog", href: "/admin/blog-editor", icon: pencilIcon() },
    { label: "Gestionar entradas", href: "/admin/blog-manager", icon: listIcon() },
    { label: "Articulistas", href: "/admin/contributor", icon: usersIcon() },
    { label: "CRM", href: "/admin/form-manager", icon: formIcon() },
    { label: "Cuentas admin", href: "/admin/account", icon: settingsIcon() },
  ];

  return (
    <div style={{ padding: "0 0 48px" }}>
      {/* Stats */}
      <div className="admin-stats-grid">
        {tiles.map((t) => (
          <Link key={t.label} href={t.href} className="admin-stat-tile">
            <div className="ast-value" style={{ color: t.color }}>{t.value}</div>
            <div className="ast-label">{t.label}</div>
            <div className="ast-sub">{t.sub}</div>
          </Link>
        ))}
      </div>

      {/* Quick access */}
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--a-text-02)", marginBottom: 12 }}>
          Acceso rápido
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 1, background: "var(--a-ui-03)", border: "1px solid var(--a-ui-03)" }}>
          {quickLinks.map((ql) => (
            <Link
              key={ql.href}
              href={ql.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "var(--a-ui-01)",
                color: "var(--a-text-01)",
                textDecoration: "none",
                fontSize: 14,
                transition: "background 0.1s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "var(--a-ui-02)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "var(--a-ui-01)")}
            >
              <span style={{ color: "var(--a-text-02)", flexShrink: 0 }}>{ql.icon}</span>
              {ql.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function pencilIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
    </svg>
  );
}
function listIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="square" d="M4 6h16M4 10h16M4 14h10M4 18h7"/>
    </svg>
  );
}
function usersIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"/>
    </svg>
  );
}
function formIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
    </svg>
  );
}
function settingsIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

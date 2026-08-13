"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser, logoutAdmin } from "@/lib/firebase/auth";
import "@/styles/admin.css";

interface NavItem {
  href: string;
  label: string;
  exact?: boolean;
  icon: React.ReactNode;
}

const NAV: { section: string; items: NavItem[] }[] = [
  {
    section: "General",
    items: [
      {
        href: "/admin", label: "Dashboard", exact: true,
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
      },
    ],
  },
  {
    section: "Blog",
    items: [
      {
        href: "/admin/blog-manager", label: "Entradas",
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="square" d="M4 6h16M4 10h16M4 14h10M4 18h7"/></svg>,
      },
      {
        href: "/admin/blog-editor", label: "Nueva entrada",
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>,
      },
      {
        href: "/admin/contributor", label: "Articulistas",
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"/></svg>,
      },
    ],
  },
  {
    section: "Sistema",
    items: [
      {
        href: "/admin/form-manager", label: "CRM",
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>,
      },
      {
        href: "/admin/account", label: "Cuentas admin",
        icon: <svg className="admin-nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>,
      },
    ],
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    getCurrentUser()
      .then((u) => {
        if (!u) router.push("/admin/login");
        else setUser(u);
        setLoading(false);
      })
      .catch(() => router.push("/admin/login"));
  }, [router]);

  const handleLogout = async () => {
    await logoutAdmin().catch(() => {});
    router.push("/admin/login");
  };

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const initials = (user?.displayName || user?.email || "AD")
    .split(/[\s@]/).map((w: string) => w[0]).join("").toUpperCase().slice(0, 2);

  const crumb = (() => {
    for (const g of NAV)
      for (const item of g.items)
        if (pathname === item.href || pathname.startsWith(item.href + "/"))
          return { section: g.section, label: item.label };
    return { section: "General", label: "Dashboard" };
  })();

  if (loading) return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:"#f4f4f4", fontFamily:"'IBM Plex Sans',sans-serif", fontSize:13, color:"#6f6f6f" }}>
      Cargando…
    </div>
  );

  return (
    <div className={`admin-shell${collapsed ? " sidebar-collapsed" : ""}`}>
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          {!collapsed && <>
            <span className="admin-logo-mark">Reliaplant</span>
            <span className="admin-logo-sep">/</span>
            <span className="admin-logo-sub">admin</span>
          </>}
          <button
            className="admin-collapse-btn"
            onClick={() => setCollapsed((c) => !c)}
            title={collapsed ? "Expandir menú" : "Colapsar menú"}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {collapsed
                ? <path strokeLinecap="round" d="M9 5l7 7-7 7"/>
                : <path strokeLinecap="round" d="M15 19l-7-7 7-7"/>}
            </svg>
          </button>
        </div>

        <nav>
          {NAV.map((group) => (
            <div className="admin-nav-section" key={group.section}>
              {!collapsed && <span className="admin-nav-label">{group.section}</span>}
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`admin-nav-item${isActive(item.href, item.exact) ? " active" : ""}`}
                  title={collapsed ? item.label : undefined}
                >
                  {item.icon}
                  {!collapsed && item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-row" title={collapsed ? (user?.displayName || user?.email) : undefined}>
            <div className="admin-avatar">{initials}</div>
            {!collapsed && <span className="admin-user-name">{user?.displayName || user?.email}</span>}
            <button
              className="admin-logout-btn"
              onClick={handleLogout}
              title="Cerrar sesión"
              style={collapsed ? { marginLeft: 0 } : undefined}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-breadcrumb">
            <span>{crumb.section}</span>
            <span className="bc-sep">›</span>
            <span className="bc-current">{crumb.label}</span>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
            <Link href="/" className="abtn abtn-ghost abtn-sm" style={{ fontSize:12 }}>
              ← Ver sitio
            </Link>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}

import type { FormContactWithId } from "@/lib/firebase/form_contact";
import type { LeadStatus, LeadNota, LeadTarea, TareaTipo } from "@/types/forms";

export const STATUS_ORDER: LeadStatus[] = ["nuevo", "contactado", "calificado", "ganado", "perdido"];

export const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string; border: string }> = {
  nuevo: { label: "Nuevo", color: "#1e40af", bg: "#eff6ff", border: "#bfdbfe" },
  contactado: { label: "Contactado", color: "#92400e", bg: "#fffbeb", border: "#fde68a" },
  calificado: { label: "Calificado", color: "#5b21b6", bg: "#f5f3ff", border: "#ddd6fe" },
  ganado: { label: "Ganado", color: "#166534", bg: "#f0fdf4", border: "#bbf7d0" },
  perdido: { label: "Perdido", color: "#991b1b", bg: "#fff1f2", border: "#fecaca" },
};

export const fmtDate = (d: Date) =>
  new Intl.DateTimeFormat("es-MX", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  }).format(d);

export const fmtShortDate = (iso: string) =>
  new Intl.DateTimeFormat("es-MX", { year: "numeric", month: "short", day: "numeric" }).format(new Date(iso + "T00:00:00"));

export const todayISO = () => new Date().toISOString().slice(0, 10);

export const ultimoSeguimiento = (lead: FormContactWithId): LeadNota | null => {
  if (!lead.notas?.length) return null;
  return [...lead.notas].sort((a, b) => b.fecha.localeCompare(a.fecha))[0];
};

export const genId = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`);

export const digitsOnly = (tel: string) => tel.replace(/\D/g, "");

export const telHref = (tel: string) => `tel:+${digitsOnly(tel)}`;

export const waHref = (tel: string) => `https://wa.me/${digitsOnly(tel)}`;

export const TAREA_TIPO_CONFIG: Record<TareaTipo, { label: string; icon: string }> = {
  seguimiento: { label: "Seguimiento", icon: "📅" },
  tarea: { label: "Tarea", icon: "☐" },
};

export interface PendingTareaEntry {
  lead: FormContactWithId;
  tarea: LeadTarea;
}

export const nextPendingTarea = (lead: FormContactWithId): LeadTarea | null => {
  const pend = (lead.tareas || [])
    .filter((t) => !t.completada && t.fechaLimite)
    .sort((a, b) => (a.fechaLimite || "").localeCompare(b.fechaLimite || ""));
  return pend[0] || null;
};

export const pendingTareasHoy = (leads: FormContactWithId[]): PendingTareaEntry[] => {
  const today = todayISO();
  const entries: PendingTareaEntry[] = [];
  for (const lead of leads) {
    for (const tarea of lead.tareas || []) {
      if (!tarea.completada && tarea.fechaLimite && tarea.fechaLimite <= today) {
        entries.push({ lead, tarea });
      }
    }
  }
  return entries.sort((a, b) => (a.tarea.fechaLimite || "").localeCompare(b.tarea.fechaLimite || ""));
};

export function StatusBadge({ status }: { status?: LeadStatus }) {
  const cfg = STATUS_CONFIG[status || "nuevo"];
  return (
    <span
      style={{
        display: "inline-block", fontSize: 11, fontWeight: 600, padding: "2px 8px",
        borderRadius: 999, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
      }}
    >
      {cfg.label}
    </span>
  );
}

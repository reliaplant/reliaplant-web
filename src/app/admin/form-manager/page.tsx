"use client";

import { useEffect, useState } from "react";
import {
  getAllFormContacts,
  type FormContactWithId,
} from "@/lib/firebase/form_contact";

export default function FormManagerPage() {
  const [forms, setForms] = useState<FormContactWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<FormContactWithId | null>(null);

  useEffect(() => {
    getAllFormContacts()
      .then(setForms)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const fmt = (d: Date) =>
    new Intl.DateTimeFormat("es-MX", {
      year: "numeric", month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    }).format(d);

  return (
    <div style={{ display: "flex", gap: 0, height: "calc(100vh - 112px)", overflow: "hidden" }}>
      {/* Table panel */}
      <div style={{ flex: 1, overflow: "auto", borderRight: selected ? "1px solid var(--a-ui-03)" : "none" }}>
        {loading ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>Cargando…</div>
        ) : forms.length === 0 ? (
          <div style={{ padding: 48, textAlign: "center", color: "var(--a-text-02)", fontSize: 13 }}>
            No hay formularios recibidos.
          </div>
        ) : (
          <div className="admin-table-wrap" style={{ marginTop: 0 }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Empresa</th>
                  <th>Email</th>
                  <th>Interés</th>
                  <th>Fecha</th>
                  <th>Disp.</th>
                </tr>
              </thead>
              <tbody>
                {forms.map((f) => (
                  <tr
                    key={f.id}
                    onClick={() => setSelected(selected?.id === f.id ? null : f)}
                    style={{
                      cursor: "pointer",
                      background: selected?.id === f.id ? "var(--a-selected)" : undefined,
                      borderLeft: selected?.id === f.id ? "3px solid var(--a-blue)" : "3px solid transparent",
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
                    <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, whiteSpace: "nowrap" }}>
                      {fmt(f.date)}
                    </td>
                    <td>
                      <span className={`atag ${f.isMobile ? "atag-gray" : "atag-blue"}`}>
                        {f.isMobile ? "Móvil" : "Desktop"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail panel */}
      {selected && (
        <div style={{ width: 340, flexShrink: 0, overflow: "auto", padding: 24, background: "var(--a-ui-01)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Detalle</span>
            <button
              onClick={() => setSelected(null)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--a-text-02)", fontSize: 18, lineHeight: 1, padding: 4 }}
              title="Cerrar"
            >
              ×
            </button>
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
          {selected.especial && <DetailRow label="Notas" value={selected.especial} />}
          {selected.origen && <DetailRow label="Origen" value={selected.origen} />}
          {selected.type && <DetailRow label="Tipo" value={selected.type} />}
          {selected.campana && <DetailRow label="Campaña" value={selected.campana} />}
          {selected.anuncio && <DetailRow label="Anuncio" value={selected.anuncio} />}
          <DetailRow label="Dispositivo" value={selected.isMobile ? "Móvil" : "Desktop"} />
          <DetailRow label="Fecha" value={fmt(selected.date)} mono />

          <div style={{ marginTop: 20 }}>
            <a
              href={`mailto:${selected.email}`}
              className="abtn abtn-primary"
              style={{ display: "block", textAlign: "center", textDecoration: "none" }}
            >
              Responder por email
            </a>
          </div>
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

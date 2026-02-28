'use client';

import React, { useState, useEffect } from 'react';

// ── Data ──
const TAG_V  = 'BBA-001';
const DESC_V = 'BOMBA CENTRÍFUGA PRINCIPAL';
const FAB_V  = 'FLOWSERVE';
const MOD_V  = 'CPX 200';
const TEMPLATES = ['Bomba centrífuga', 'Compresor', 'Motor eléctrico'];

// ── Component ──
export default function RegistroAnimationPlantillas() {
  const [step, setStep]   = useState(0);
  const [tagC, setTagC]   = useState(0);
  const [descC, setDescC] = useState(0);
  const [fabC, setFabC]   = useState(0);
  const [modC, setModC]   = useState(0);

  // Master timeline (19 steps)
  useEffect(() => {
    const sched: [number, number][] = [
      [300,    1],  // topbar
      [700,    2],  // sidebar header + search
      [1000,   3],  // SIS-AGUA-FRÍA row
      [1400,   4],  // SIS-VAPOR row
      [1800,   5],  // expand SIS-AGUA-FRÍA (caret rotates)
      [2100,   6],  // BBA-001 appears
      [2400,   7],  // BBA-002 appears
      [2800,   8],  // BBA-001 selected (blue highlight)
      [3200,   9],  // template pills appear
      [3600,  10],  // header card appears
      [4000,  11],  // type TAG
      [5000,  12],  // type description
      [6500,  13],  // ubicación card
      [7100,  14],  // clasificación card
      [7600,  15],  // criticidad badge
      [8200,  16],  // info técnica card
      [8600,  17],  // type fabricante
      [9400,  18],  // type modelo
      [10100, 19],  // completion
    ];
    const ts = sched.map(([ms, s]) => setTimeout(() => setStep(s), ms));
    return () => ts.forEach(clearTimeout);
  }, []);

  // Typing: TAG (step 11)
  useEffect(() => {
    if (step !== 11) return;
    setTagC(0);
    const iv = setInterval(() => setTagC(p => {
      if (p >= TAG_V.length) { clearInterval(iv); return p; }
      return p + 1;
    }), 80);
    return () => clearInterval(iv);
  }, [step]);

  // Typing: Description (step 12)
  useEffect(() => {
    if (step !== 12) return;
    setDescC(0);
    const iv = setInterval(() => setDescC(p => {
      if (p >= DESC_V.length) { clearInterval(iv); return p; }
      return p + 1;
    }), 34);
    return () => clearInterval(iv);
  }, [step]);

  // Typing: Fabricante (step 17)
  useEffect(() => {
    if (step !== 17) return;
    setFabC(0);
    const iv = setInterval(() => setFabC(p => {
      if (p >= FAB_V.length) { clearInterval(iv); return p; }
      return p + 1;
    }), 52);
    return () => clearInterval(iv);
  }, [step]);

  // Typing: Modelo (step 18)
  useEffect(() => {
    if (step !== 18) return;
    setModC(0);
    const iv = setInterval(() => setModC(p => {
      if (p >= MOD_V.length) { clearInterval(iv); return p; }
      return p + 1;
    }), 58);
    return () => clearInterval(iv);
  }, [step]);

  const tagDone  = step > 11 || (step === 11 && tagC  >= TAG_V.length);
  const descDone = step > 12 || (step === 12 && descC >= DESC_V.length);
  const fabDone  = step > 17 || (step === 17 && fabC  >= FAB_V.length);
  const modDone  = step > 18 || (step === 18 && modC  >= MOD_V.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .rap-root {
          width:100%; height:100%; min-height:480px;
          display:flex; flex-direction:column;
          font-family:'IBM Plex Sans',sans-serif;
          background:#f1f5f9; border-radius:6px; overflow:hidden;
          box-sizing:border-box;
        }

        /* ── Topbar ── */
        .rap-top {
          display:flex; align-items:center; padding:0 12px;
          background:#fff; border-bottom:1px solid #e5e7eb;
          min-height:36px; gap:8px; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .rap-top.vis { opacity:1; }
        .rap-logo  { font-size:11px; font-weight:700; color:#0f172a; letter-spacing:0.1em; }
        .rap-sep   { font-size:12px; color:#cbd5e1; }
        .rap-route { font-size:10.5px; color:#64748b; flex:1; font-weight:500; }
        .rap-route b { color:#2563eb; }
        .rap-tb-ico {
          width:22px; height:22px; border-radius:4px; background:#f1f5f9;
          display:flex; align-items:center; justify-content:center;
        }

        /* ── Main split ── */
        .rap-main { flex:1; display:flex; overflow:hidden; }

        /* ── Sidebar ── */
        .rap-sidebar {
          width:210px; min-width:210px; background:#f9fafb;
          border-right:1px solid #e5e7eb;
          display:flex; flex-direction:column; overflow:hidden; flex-shrink:0;
        }
        .rap-sb-hdr {
          height:36px; display:flex; align-items:center;
          padding:0 8px; border-bottom:1px solid #e5e7eb;
          gap:5px; flex-shrink:0; opacity:0; transition:opacity 0.4s;
        }
        .rap-sb-hdr.vis { opacity:1; }
        .rap-plant-nm {
          font-size:10px; font-weight:600; color:#1e293b;
          flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .rap-crear {
          font-size:9px; font-weight:600; color:#2563eb;
          background:#eff6ff; border:1px solid #bfdbfe;
          border-radius:3px; padding:2px 6px; cursor:default;
          white-space:nowrap; flex-shrink:0;
        }
        .rap-sb-search {
          margin:5px 8px 2px; height:25px;
          border:1px solid #e5e7eb; border-radius:4px;
          background:#fff; display:flex; align-items:center;
          padding:0 8px; gap:5px; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .rap-sb-search.vis { opacity:1; }
        .rap-search-ph { font-size:9.5px; color:#94a3b8; }

        /* ── Tree ── */
        .rap-tree { flex:1; overflow-y:auto; padding-bottom:8px; }

        .rap-sis-row {
          height:32px; display:flex; align-items:center;
          padding:0 8px; gap:4px; cursor:default;
          opacity:0; transition:opacity 0.35s;
        }
        .rap-sis-row.vis { opacity:1; }
        .rap-sis-row:hover { background:#f3f4f6; }
        .rap-caret-wrap {
          width:14px; height:14px; display:flex;
          align-items:center; justify-content:center; flex-shrink:0;
          transition:transform 0.25s;
        }
        .rap-caret-wrap.exp { transform:rotate(90deg); }
        .rap-sis-nm {
          font-size:10.5px; font-weight:600; color:#1e293b;
          flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
          letter-spacing:0.01em;
        }
        .rap-sis-bd { font-size:8.5px; color:#94a3b8; flex-shrink:0; }

        /* Activos collapsible */
        .rap-activos { overflow:hidden; max-height:0; transition:max-height 0.45s ease; }
        .rap-activos.exp { max-height:150px; }

        .rap-av-wrap { position:relative; height:32px; opacity:0; transition:opacity 0.3s; }
        .rap-av-wrap.vis { opacity:1; }

        /* Connector lines */
        .rap-cv { position:absolute; left:21px; top:0; bottom:0; width:1px; background:#d1d5db; opacity:0.6; }
        .rap-cv.last { bottom:50%; }
        .rap-ch { position:absolute; left:21px; top:calc(50% - 0.5px); width:10px; height:1px; background:#d1d5db; opacity:0.6; }

        .rap-av-row {
          position:absolute; inset:0;
          display:flex; align-items:center;
          padding:0 8px 0 34px; gap:5px;
        }
        .rap-av-row.sel { background:#dbeafe; }
        .rap-av-row:not(.sel):hover { background:#f3f4f6; }
        .rap-av-tag  { font-size:10px; font-weight:600; color:#1e293b; white-space:nowrap; }
        .rap-av-desc { font-size:9px; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1; }

        /* ── Right panel ── */
        .rap-panel {
          flex:1; display:flex; flex-direction:column;
          overflow:hidden; background:#f1f5f9;
        }

        /* ── Template bar ── */
        .rap-tplbar {
          display:flex; align-items:center; gap:6px; padding:6px 12px;
          background:#fff; border-bottom:1px solid #e5e7eb; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .rap-tplbar.vis { opacity:1; }
        .rap-tpl-lbl {
          font-size:9px; font-weight:700; color:#94a3b8;
          text-transform:uppercase; letter-spacing:0.06em; white-space:nowrap;
        }
        .rap-pill {
          font-size:10px; font-weight:500; padding:3px 10px;
          border-radius:20px; cursor:default; white-space:nowrap;
          border:1px solid #e2e8f0; background:#fff; color:#64748b;
        }
        .rap-pill.active { background:#2563eb; color:#fff; border-color:#2563eb; font-weight:600; }

        /* ── Scrollable body ── */
        .rap-body {
          flex:1; overflow-y:auto; padding:10px;
          display:flex; flex-direction:column; gap:8px;
        }

        /* ── Cards ── */
        .rap-card {
          background:#fff; border:1px solid #e5e7eb; border-radius:4px;
          box-shadow:0 1px 2px rgba(0,0,0,0.05); padding:10px;
          opacity:0; transition:opacity 0.35s, transform 0.35s;
          transform:translateY(8px);
        }
        .rap-card.vis { opacity:1; transform:translateY(0); }

        /* Asset header */
        .rap-hdr { display:flex; align-items:flex-start; gap:10px; }
        .rap-hdr-ico {
          width:44px; height:44px; border-radius:4px;
          background:#eff6ff; border:1px solid #bfdbfe;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .rap-hdr-flds { flex:1; display:flex; flex-direction:column; gap:4px; }

        /* TAG inputs */
        .rap-inp-box {
          display:inline-flex; align-items:center;
          height:26px; padding:0 8px;
          border:1.5px solid #2563eb; border-radius:4px;
          background:#fff; font-size:12px; font-weight:600; color:#0f172a;
          box-shadow:0 0 0 2px rgba(37,99,235,0.12);
          white-space:nowrap; animation:rapIn 0.2s ease;
        }
        .rap-inp-sm {
          display:inline-flex; align-items:center;
          height:23px; padding:0 8px;
          border:1.5px solid #2563eb; border-radius:4px;
          background:#fff; font-size:10.5px; color:#0f172a;
          box-shadow:0 0 0 2px rgba(37,99,235,0.12);
          white-space:nowrap; animation:rapIn 0.2s ease;
        }
        .rap-tag-done  { font-size:14px; font-weight:700; color:#0f172a; animation:rapIn 0.2s ease; }
        .rap-desc-done { font-size:11px; color:#475569; animation:rapIn 0.2s ease; }
        .rap-codigo    { font-size:9px; color:#94a3b8; margin-top:1px; }

        /* Section title */
        .rap-stitle {
          font-size:9px; font-weight:700; color:#6b7280;
          text-transform:uppercase; letter-spacing:0.08em;
          margin-bottom:8px; display:flex; align-items:center; gap:6px;
        }
        .rap-tpl-badge {
          font-size:8.5px; font-weight:600; color:#2563eb;
          background:#eff6ff; border:1px solid #bfdbfe;
          padding:1px 6px; border-radius:20px; animation:rapIn 0.35s ease;
        }

        /* Field grids */
        .rap-g2 { display:grid; grid-template-columns:1fr 1fr; gap:8px 14px; }
        .rap-g3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px 10px; }
        .rap-f  { display:flex; flex-direction:column; gap:2px; }
        .rap-flbl {
          font-size:9px; font-weight:600; color:#9ca3af;
          text-transform:uppercase; letter-spacing:0.05em;
        }
        .rap-fval { font-size:11px; font-weight:500; color:#1e293b; min-height:18px; }
        .rap-fval.tpl   { color:#2563eb; animation:rapIn 0.3s ease; }
        .rap-fval.muted { color:#94a3b8; font-weight:400; }

        /* Typing inputs */
        .rap-tinp {
          display:flex; align-items:center;
          height:26px; padding:0 7px;
          border:1.5px solid #2563eb; border-radius:4px;
          background:#fff; font-size:11px; font-weight:500; color:#0f172a;
          box-shadow:0 0 0 2px rgba(37,99,235,0.1); animation:rapIn 0.2s ease;
        }
        .rap-tinp.done { border-color:#e5e7eb; background:#f8fafc; box-shadow:none; color:#1e293b; }

        /* Criticidad */
        .rap-crit {
          display:inline-flex; align-items:center;
          font-size:10px; font-weight:600; padding:2px 8px;
          border-radius:3px; animation:rapIn 0.3s ease;
        }
        .rap-crit.alta  { background:#dc2626; color:#fff; }
        .rap-crit.media { background:#f59e0b; color:#fff; }
        .rap-crit.baja  { background:#16a34a; color:#fff; }

        /* Blinking caret */
        .rap-car { color:#2563eb; animation:rapBlink 0.65s step-end infinite; font-weight:300; margin-left:1px; }
        @keyframes rapBlink { 50%{opacity:0} }

        /* Completion */
        .rap-done {
          display:flex; align-items:center; justify-content:center; gap:10px;
          padding:8px 12px; background:#fff; border-top:1px solid #e5e7eb; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .rap-done.vis { opacity:1; }
        .rap-done-txt { font-size:10.5px; font-weight:600; color:#16a34a; display:flex; align-items:center; gap:5px; }
        .rap-done-sub { font-size:9.5px; color:#94a3b8; }

        @keyframes rapIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
      `}</style>

      <div className="rap-root">

        {/* ── Topbar ── */}
        <div className={`rap-top${step >= 1 ? ' vis' : ''}`}>
          <span className="rap-logo">RELIAPLANT</span>
          <span className="rap-sep">/</span>
          <span className="rap-route">Registro de activos · <b>TAX</b></span>
          <div className="rap-tb-ico">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2.2" stroke="#94a3b8" strokeWidth="1.2"/>
              <path d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ── Main (sidebar + panel) ── */}
        <div className="rap-main">

          {/* ── Left sidebar ── */}
          <aside className="rap-sidebar">

            {/* Plant header */}
            <div className={`rap-sb-hdr${step >= 2 ? ' vis' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="5" width="13" height="9" rx="1" stroke="#2563eb" strokeWidth="1.2"/>
                <rect x="6" y="9.5" width="4" height="4.5" rx="0.5" stroke="#2563eb" strokeWidth="1.1"/>
                <rect x="3" y="7.5" width="2.5" height="2" rx="0.3" fill="#bfdbfe"/>
                <rect x="10.5" y="7.5" width="2.5" height="2" rx="0.3" fill="#bfdbfe"/>
                <path d="M5 5V2.5M8 5V1.5M11 5V2.5" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              <span className="rap-plant-nm">PLANTA — PRINCIPAL</span>
              <span className="rap-crear">+ Crear</span>
            </div>

            {/* Search */}
            <div className={`rap-sb-search${step >= 2 ? ' vis' : ''}`}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="#94a3b8" strokeWidth="1.3"/>
                <path d="M10.5 10.5l3 3" stroke="#94a3b8" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="rap-search-ph">Buscar...</span>
            </div>

            {/* Asset tree */}
            <div className="rap-tree">

              {/* SIS-AGUA-FRÍA */}
              <div className={`rap-sis-row${step >= 3 ? ' vis' : ''}`}>
                <div className={`rap-caret-wrap${step >= 5 ? ' exp' : ''}`}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="9" rx="1" stroke="#16a34a" strokeWidth="1.3"/>
                  <path d="M6 13v-3.5h4V13" stroke="#16a34a" strokeWidth="1.1"/>
                  <path d="M2 7.5h12" stroke="#16a34a" strokeWidth="1.1"/>
                </svg>
                <span className="rap-sis-nm">SIS-AGUA-FRÍA</span>
                <span className="rap-sis-bd">(2 E)</span>
              </div>

              {/* Activos under SIS-AGUA-FRÍA */}
              <div className={`rap-activos${step >= 5 ? ' exp' : ''}`}>

                {/* BBA-001 */}
                <div className={`rap-av-wrap${step >= 6 ? ' vis' : ''}`}>
                  <div className="rap-cv" />
                  <div className="rap-ch" />
                  <div className={`rap-av-row${step >= 8 ? ' sel' : ''}`}>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="3.5" stroke="#3b82f6" strokeWidth="1.3"/>
                      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="1.2" fill="#bfdbfe"/>
                    </svg>
                    <span className="rap-av-tag">BBA-001</span>
                    <span className="rap-av-desc">Bomba centrífuga</span>
                  </div>
                </div>

                {/* BBA-002 */}
                <div className={`rap-av-wrap${step >= 7 ? ' vis' : ''}`}>
                  <div className="rap-cv last" />
                  <div className="rap-ch" />
                  <div className="rap-av-row">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="3.5" stroke="#3b82f6" strokeWidth="1.3"/>
                      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="1.2" fill="#bfdbfe"/>
                    </svg>
                    <span className="rap-av-tag">BBA-002</span>
                    <span className="rap-av-desc">Bomba secundaria</span>
                  </div>
                </div>

              </div>

              {/* SIS-VAPOR */}
              <div className={`rap-sis-row${step >= 4 ? ' vis' : ''}`}>
                <div className="rap-caret-wrap">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="9" rx="1" stroke="#16a34a" strokeWidth="1.3"/>
                  <path d="M6 13v-3.5h4V13" stroke="#16a34a" strokeWidth="1.1"/>
                  <path d="M2 7.5h12" stroke="#16a34a" strokeWidth="1.1"/>
                </svg>
                <span className="rap-sis-nm">SIS-VAPOR</span>
                <span className="rap-sis-bd">(1 E)</span>
              </div>

            </div>
          </aside>

          {/* ── Right panel ── */}
          <div className="rap-panel">

            {/* Template selector */}
            <div className={`rap-tplbar${step >= 9 ? ' vis' : ''}`}>
              <span className="rap-tpl-lbl">Plantilla</span>
              {TEMPLATES.map((t, i) => (
                <span key={t} className={`rap-pill${i === 0 ? ' active' : ''}`}>{t}</span>
              ))}
            </div>

            {/* Scrollable body */}
            <div className="rap-body">

              {/* ── Header card (TAG + description) ── */}
              <div className={`rap-card${step >= 10 ? ' vis' : ''}`}>
                <div className="rap-hdr">
                  <div className="rap-hdr-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="5" stroke="#2563eb" strokeWidth="1.4"/>
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="2" fill="#bfdbfe"/>
                    </svg>
                  </div>
                  <div className="rap-hdr-flds">
                    {/* TAG placeholder */}
                    {step === 10 && (
                      <div className="rap-inp-box" style={{ color: '#cbd5e1', fontWeight: 400, fontSize: 10.5 }}>
                        TAG<span className="rap-car">|</span>
                      </div>
                    )}
                    {/* TAG typing */}
                    {step === 11 && !tagDone && (
                      <div className="rap-inp-box">
                        {TAG_V.slice(0, tagC)}<span className="rap-car">|</span>
                      </div>
                    )}
                    {/* TAG done */}
                    {tagDone && <div className="rap-tag-done">{TAG_V}</div>}

                    {/* Description typing */}
                    {step === 12 && !descDone && (
                      <div className="rap-inp-sm">
                        {DESC_V.slice(0, descC)}<span className="rap-car">|</span>
                      </div>
                    )}
                    {/* Description done */}
                    {descDone && <div className="rap-desc-done">{DESC_V}</div>}

                    {/* Código */}
                    {descDone && <div className="rap-codigo">Código: 0042</div>}
                  </div>
                </div>
              </div>

              {/* ── Ubicación y jerarquía ── */}
              <div className={`rap-card${step >= 13 ? ' vis' : ''}`}>
                <div className="rap-stitle">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6C12.5 3.5 10.5 1.5 8 1.5z" stroke="#6b7280" strokeWidth="1.3"/>
                    <circle cx="8" cy="6" r="1.5" stroke="#6b7280" strokeWidth="1.2"/>
                  </svg>
                  Ubicación y jerarquía
                </div>
                <div className="rap-g2">
                  <div className="rap-f">
                    <div className="rap-flbl">Ubicación técnica</div>
                    <div className="rap-fval">SIS-AGUA-FRÍA</div>
                  </div>
                  <div className="rap-f">
                    <div className="rap-flbl">Equipo padre</div>
                    <div className="rap-fval muted">Sin equipo padre</div>
                  </div>
                </div>
              </div>

              {/* ── Clasificación ── */}
              <div className={`rap-card${step >= 14 ? ' vis' : ''}`}>
                <div className="rap-stitle">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
                    <rect x="9" y="2" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
                    <rect x="2" y="9" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
                    <rect x="9" y="9" width="5" height="5" rx="1" stroke="#2563eb" strokeWidth="1.3"/>
                  </svg>
                  Clasificación
                  <span className="rap-tpl-badge">↩ plantilla</span>
                </div>
                <div className="rap-g3">
                  <div className="rap-f">
                    <div className="rap-flbl">Clase</div>
                    <div className="rap-fval tpl">BOMBA</div>
                  </div>
                  <div className="rap-f">
                    <div className="rap-flbl">Tipo</div>
                    <div className="rap-fval tpl">CENTRÍFUGA</div>
                  </div>
                  <div className="rap-f">
                    <div className="rap-flbl">Criticidad</div>
                    {step >= 15
                      ? <span className="rap-crit alta">Alta</span>
                      : <div style={{ height: 18 }} />
                    }
                  </div>
                </div>
              </div>

              {/* ── Información técnica ── */}
              <div className={`rap-card${step >= 16 ? ' vis' : ''}`}>
                <div className="rap-stitle">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#6b7280" strokeWidth="1.3"/>
                    <path d="M8 7v4M8 5.5v.5" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Información técnica
                </div>
                <div className="rap-g2">
                  <div className="rap-f">
                    <div className="rap-flbl">Fabricante</div>
                    {step >= 17 && (
                      <div className={`rap-tinp${fabDone ? ' done' : ''}`}>
                        {FAB_V.slice(0, fabC)}
                        {!fabDone && <span className="rap-car">|</span>}
                      </div>
                    )}
                  </div>
                  <div className="rap-f">
                    <div className="rap-flbl">Modelo</div>
                    {step >= 18 && (
                      <div className={`rap-tinp${modDone ? ' done' : ''}`}>
                        {MOD_V.slice(0, modC)}
                        {!modDone && <span className="rap-car">|</span>}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>{/* /rap-body */}

            {/* ── Completion ── */}
            <div className={`rap-done${step >= 19 ? ' vis' : ''}`}>
              <div className="rap-done-txt">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4.5L6.5 11 3 7.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Plantilla aplicada
              </div>
              <span className="rap-done-sub">8/8 campos completados</span>
            </div>

          </div>{/* /rap-panel */}

        </div>{/* /rap-main */}

      </div>{/* /rap-root */}
    </>
  );
}

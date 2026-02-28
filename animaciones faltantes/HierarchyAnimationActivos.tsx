'use client';

import React, { useState, useEffect } from 'react';

// ── Data ──
const BBA001_TAG  = 'BBA-001';
const BBA001_DESC = 'BOMBA CENTRÍFUGA PRINCIPAL';
const MTR_TAG     = 'BBA-001-MTR';
const MTR_DESC    = 'MOTOR ELÉCTRICO';
const SLL_TAG     = 'BBA-001-SLL';
const SLL_DESC    = 'SELLO MECÁNICO';

// ── Component ──
export default function HierarchyAnimationActivos() {
  const [step, setStep] = useState(0);

  // Typing state for panel transitions
  const [panelKey, setPanelKey] = useState<'bba001' | 'mtr'>('bba001');

  // Master timeline (26 steps)
  useEffect(() => {
    const sched: [number, number][] = [
      [300,    1],  // topbar
      [700,    2],  // sidebar header + search
      [1000,   3],  // SIS-AGUA-FRÍA row
      [1350,   4],  // SIS-AGUA-FRÍA expands
      [1750,   5],  // BBA-001 appears (depth 0)
      [2100,   6],  // BBA-002 appears (depth 0)
      [2400,   7],  // SIS-VAPOR appears
      // Phase 2 — select BBA-001
      [2900,   8],  // BBA-001 selected
      [3200,   9],  // header card fades in
      [3700,  10],  // ubicación card
      [4200,  11],  // clasificación card
      [4600,  12],  // criticidad badge Alta
      [5000,  13],  // info técnica card
      [5500,  14],  // equipos dependientes section
      // Phase 3 — expand BBA-001 to show children
      [6100,  15],  // BBA-001 caret rotates, children expand
      [6450,  16],  // BBA-001-MTR appears (depth 1)
      [6800,  17],  // BBA-001-SLL appears (depth 1)
      // Phase 4 — click BBA-001-MTR
      [7400,  18],  // MTR selected (highlight moves)
      [7650,  19],  // panel cross-fade starts (key changes)
      [8100,  20],  // MTR header card
      [8500,  21],  // MTR clasificación (MOTOR / criticidad Media)
      [9000,  22],  // equipo padre badge appears
      [9600,  23],  // completion
    ];
    const ts = sched.map(([ms, s]) => setTimeout(() => setStep(s), ms));
    return () => ts.forEach(clearTimeout);
  }, []);

  // Switch panel to MTR at step 19
  useEffect(() => {
    if (step === 19) setPanelKey('mtr');
  }, [step]);

  const showBBA001Panel = panelKey === 'bba001' && step >= 9;
  const showMTRPanel    = panelKey === 'mtr'    && step >= 20;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .haa-root {
          width:100%; height:100%; min-height:520px;
          display:flex; flex-direction:column;
          font-family:'IBM Plex Sans',sans-serif;
          background:#f1f5f9; border-radius:6px; overflow:hidden;
          box-sizing:border-box;
        }

        /* ── Topbar ── */
        .haa-top {
          display:flex; align-items:center; padding:0 12px;
          background:#fff; border-bottom:1px solid #e5e7eb;
          min-height:36px; gap:8px; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .haa-top.vis { opacity:1; }
        .haa-logo  { font-size:11px; font-weight:700; color:#0f172a; letter-spacing:0.1em; }
        .haa-sep   { font-size:12px; color:#cbd5e1; }
        .haa-route { font-size:10.5px; color:#64748b; flex:1; font-weight:500; }
        .haa-route b { color:#2563eb; }
        .haa-tb-ico {
          width:22px; height:22px; border-radius:4px; background:#f1f5f9;
          display:flex; align-items:center; justify-content:center;
        }

        /* ── Main split ── */
        .haa-main { flex:1; display:flex; overflow:hidden; }

        /* ── Sidebar ── */
        .haa-sidebar {
          width:210px; min-width:210px; background:#f9fafb;
          border-right:1px solid #e5e7eb;
          display:flex; flex-direction:column; overflow:hidden; flex-shrink:0;
        }
        .haa-sb-hdr {
          height:36px; display:flex; align-items:center;
          padding:0 8px; border-bottom:1px solid #e5e7eb;
          gap:5px; flex-shrink:0; opacity:0; transition:opacity 0.4s;
        }
        .haa-sb-hdr.vis { opacity:1; }
        .haa-plant-nm {
          font-size:10px; font-weight:600; color:#1e293b;
          flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .haa-crear {
          font-size:9px; font-weight:600; color:#2563eb;
          background:#eff6ff; border:1px solid #bfdbfe;
          border-radius:3px; padding:2px 6px; cursor:default;
          white-space:nowrap; flex-shrink:0;
        }
        .haa-sb-search {
          margin:5px 8px 2px; height:25px;
          border:1px solid #e5e7eb; border-radius:4px;
          background:#fff; display:flex; align-items:center;
          padding:0 8px; gap:5px; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .haa-sb-search.vis { opacity:1; }
        .haa-search-ph { font-size:9.5px; color:#94a3b8; }

        /* ── Tree ── */
        .haa-tree { flex:1; overflow-y:auto; padding-bottom:8px; }

        .haa-sis-row {
          height:32px; display:flex; align-items:center;
          padding:0 8px; gap:4px; cursor:default;
          opacity:0; transition:opacity 0.35s;
        }
        .haa-sis-row.vis { opacity:1; }
        .haa-sis-row:hover { background:#f3f4f6; }
        .haa-caret {
          width:14px; height:14px; display:flex;
          align-items:center; justify-content:center; flex-shrink:0;
          transition:transform 0.25s;
        }
        .haa-caret.exp { transform:rotate(90deg); }
        .haa-sis-nm {
          font-size:10.5px; font-weight:600; color:#1e293b;
          flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .haa-sis-bd { font-size:8.5px; color:#94a3b8; flex-shrink:0; }

        /* Collapsible activos */
        .haa-activos { overflow:hidden; max-height:0; transition:max-height 0.4s ease; }
        .haa-activos.exp { max-height:300px; }

        /* Activo wrap */
        .haa-av-wrap { position:relative; opacity:0; transition:opacity 0.3s; }
        .haa-av-wrap.vis { opacity:1; }
        .haa-av-wrap.h32 { height:32px; }

        /* Connector lines */
        .haa-cv {
          position:absolute; top:0; bottom:0; width:1px;
          background:#d1d5db; opacity:0.6;
        }
        .haa-cv.last { bottom:50%; }
        .haa-ch {
          position:absolute; top:calc(50% - 0.5px); height:1px;
          background:#d1d5db; opacity:0.6;
        }

        /* Activo row */
        .haa-av-row {
          position:absolute; inset:0;
          display:flex; align-items:center; gap:4px;
        }
        .haa-av-row.sel { background:#dbeafe; }
        .haa-av-row:not(.sel):hover { background:#f3f4f6; }
        .haa-av-tag  { font-size:10px; font-weight:600; color:#1e293b; white-space:nowrap; }
        .haa-av-desc { font-size:9px; color:#94a3b8; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1; }

        /* ── Right panel ── */
        .haa-panel {
          flex:1; display:flex; flex-direction:column;
          overflow:hidden; background:#f1f5f9;
        }
        .haa-panel-body {
          flex:1; overflow-y:auto; padding:10px;
          display:flex; flex-direction:column; gap:8px;
        }

        /* ── Cards ── */
        .haa-card {
          background:#fff; border:1px solid #e5e7eb; border-radius:4px;
          box-shadow:0 1px 2px rgba(0,0,0,0.05); padding:10px;
          opacity:0; transition:opacity 0.35s, transform 0.35s;
          transform:translateY(8px);
        }
        .haa-card.vis { opacity:1; transform:translateY(0); }
        .haa-card.fade { animation:haaFadeIn 0.3s ease forwards; }
        @keyframes haaFadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }

        /* Asset header */
        .haa-hdr { display:flex; align-items:flex-start; gap:10px; }
        .haa-hdr-ico {
          width:44px; height:44px; border-radius:4px;
          background:#eff6ff; border:1px solid #bfdbfe;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .haa-hdr-ico.mtr { background:#fefce8; border-color:#fef08a; }
        .haa-hdr-flds { flex:1; display:flex; flex-direction:column; gap:3px; }
        .haa-tag-txt  { font-size:14px; font-weight:700; color:#0f172a; }
        .haa-desc-txt { font-size:11px; color:#475569; }
        .haa-codigo   { font-size:9px; color:#94a3b8; margin-top:1px; }

        /* Section title */
        .haa-stitle {
          font-size:9px; font-weight:700; color:#6b7280;
          text-transform:uppercase; letter-spacing:0.08em;
          margin-bottom:8px; display:flex; align-items:center; gap:6px;
        }

        /* Field grids */
        .haa-g2 { display:grid; grid-template-columns:1fr 1fr; gap:8px 14px; }
        .haa-g3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px 10px; }
        .haa-f  { display:flex; flex-direction:column; gap:2px; }
        .haa-flbl {
          font-size:9px; font-weight:600; color:#9ca3af;
          text-transform:uppercase; letter-spacing:0.05em;
        }
        .haa-fval { font-size:11px; font-weight:500; color:#1e293b; min-height:18px; }
        .haa-fval.muted { color:#94a3b8; font-weight:400; }
        .haa-fval.ref {
          font-size:10px; font-weight:600; color:#2563eb;
          background:#eff6ff; border:1px solid #bfdbfe;
          padding:2px 7px; border-radius:3px; display:inline-flex;
          align-items:center; gap:4px; width:fit-content;
          animation:haaIn 0.3s ease;
        }

        /* Criticidad */
        .haa-crit {
          display:inline-flex; align-items:center;
          font-size:10px; font-weight:600; padding:2px 8px;
          border-radius:3px; animation:haaIn 0.3s ease;
        }
        .haa-crit.alta  { background:#dc2626; color:#fff; }
        .haa-crit.media { background:#f59e0b; color:#fff; }
        .haa-crit.baja  { background:#16a34a; color:#fff; }

        /* Equipos dependientes */
        .haa-deps {
          display:flex; gap:6px; flex-wrap:wrap; margin-top:4px;
        }
        .haa-dep-chip {
          display:flex; align-items:center; gap:5px;
          padding:4px 10px; border:1px solid #e2e8f0;
          border-radius:4px; background:#f8fafc; cursor:default;
          font-size:10px; font-weight:600; color:#1e293b;
          transition:background 0.15s; animation:haaIn 0.3s ease;
        }
        .haa-dep-chip:hover { background:#eff6ff; border-color:#bfdbfe; }
        .haa-dep-chip.active { background:#dbeafe; border-color:#93c5fd; color:#1d4ed8; }

        /* Completion */
        .haa-done {
          display:flex; align-items:center; justify-content:center; gap:10px;
          padding:8px 12px; background:#fff; border-top:1px solid #e5e7eb; flex-shrink:0;
          opacity:0; transition:opacity 0.4s;
        }
        .haa-done.vis { opacity:1; }
        .haa-done-txt { font-size:10.5px; font-weight:600; color:#16a34a; display:flex; align-items:center; gap:5px; }
        .haa-done-sub { font-size:9.5px; color:#94a3b8; }

        @keyframes haaIn { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
      `}</style>

      <div className="haa-root">

        {/* ── Topbar ── */}
        <div className={`haa-top${step >= 1 ? ' vis' : ''}`}>
          <span className="haa-logo">RELIAPLANT</span>
          <span className="haa-sep">/</span>
          <span className="haa-route">Gestión de activos · <b>TAX</b></span>
          <div className="haa-tb-ico">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2.2" stroke="#94a3b8" strokeWidth="1.2"/>
              <path d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="haa-main">

          {/* ── Sidebar ── */}
          <aside className="haa-sidebar">

            {/* Plant header */}
            <div className={`haa-sb-hdr${step >= 2 ? ' vis' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="5" width="13" height="9" rx="1" stroke="#2563eb" strokeWidth="1.2"/>
                <rect x="6" y="9.5" width="4" height="4.5" rx="0.5" stroke="#2563eb" strokeWidth="1.1"/>
                <rect x="3" y="7.5" width="2.5" height="2" rx="0.3" fill="#bfdbfe"/>
                <rect x="10.5" y="7.5" width="2.5" height="2" rx="0.3" fill="#bfdbfe"/>
                <path d="M5 5V2.5M8 5V1.5M11 5V2.5" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              <span className="haa-plant-nm">PLANTA — PRINCIPAL</span>
              <span className="haa-crear">+ Crear</span>
            </div>

            {/* Search */}
            <div className={`haa-sb-search${step >= 2 ? ' vis' : ''}`}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="#94a3b8" strokeWidth="1.3"/>
                <path d="M10.5 10.5l3 3" stroke="#94a3b8" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="haa-search-ph">Buscar...</span>
            </div>

            {/* Tree */}
            <div className="haa-tree">

              {/* ── SIS-AGUA-FRÍA ── */}
              <div className={`haa-sis-row${step >= 3 ? ' vis' : ''}`}>
                <div className={`haa-caret${step >= 4 ? ' exp' : ''}`}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <SisIcon />
                <span className="haa-sis-nm">SIS-AGUA-FRÍA</span>
                <span className="haa-sis-bd">(2 E)</span>
              </div>

              {/* Activos under SIS-AGUA-FRÍA */}
              <div className={`haa-activos${step >= 4 ? ' exp' : ''}`}>

                {/* BBA-001 (depth 0) — has children */}
                <div className={`haa-av-wrap h32${step >= 5 ? ' vis' : ''}`}>
                  {/* depth-0 connectors */}
                  <div className="haa-cv" style={{ left: 21 }} />
                  {step < 15 && <div className="haa-cv last" style={{ left: 21 }} />}
                  <div className="haa-ch" style={{ left: 21, width: 10 }} />
                  <div className={`haa-av-row${step >= 8 && step < 18 ? ' sel' : ''}`}
                    style={{ paddingLeft: 34 }}>
                    {/* BBA-001 caret (only shown when children exist and expanded) */}
                    <div className={`haa-caret${step >= 15 ? ' exp' : ''}`}
                      style={{ visibility: step >= 5 ? 'visible' : 'hidden' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M4.5 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <AssetIcon />
                    <span className="haa-av-tag">{BBA001_TAG}</span>
                    <span className="haa-av-desc">Bomba centrífuga</span>
                  </div>
                </div>

                {/* BBA-001 children (depth 1) */}
                <div className={`haa-activos${step >= 15 ? ' exp' : ''}`}>

                  {/* BBA-001-MTR */}
                  <div className={`haa-av-wrap h32${step >= 16 ? ' vis' : ''}`}>
                    {/* depth-0 line continues */}
                    <div className="haa-cv" style={{ left: 21 }} />
                    {/* depth-1 vertical from BBA-001 */}
                    <div className="haa-cv" style={{ left: 37 }} />
                    <div className="haa-ch" style={{ left: 37, width: 10 }} />
                    <div className={`haa-av-row${step >= 18 ? ' sel' : ''}`}
                      style={{ paddingLeft: 50 }}>
                      <AssetIcon color="#f59e0b" />
                      <span className="haa-av-tag">{MTR_TAG}</span>
                      <span className="haa-av-desc">Motor eléctrico</span>
                    </div>
                  </div>

                  {/* BBA-001-SLL */}
                  <div className={`haa-av-wrap h32${step >= 17 ? ' vis' : ''}`}>
                    <div className="haa-cv" style={{ left: 21 }} />
                    <div className="haa-cv last" style={{ left: 37 }} />
                    <div className="haa-ch" style={{ left: 37, width: 10 }} />
                    <div className="haa-av-row" style={{ paddingLeft: 50 }}>
                      <AssetIcon color="#9ca3af" />
                      <span className="haa-av-tag">{SLL_TAG}</span>
                      <span className="haa-av-desc">Sello mecánico</span>
                    </div>
                  </div>

                </div>

                {/* BBA-002 (depth 0, last) */}
                <div className={`haa-av-wrap h32${step >= 6 ? ' vis' : ''}`}>
                  <div className="haa-cv last" style={{ left: 21 }} />
                  <div className="haa-ch" style={{ left: 21, width: 10 }} />
                  <div className="haa-av-row" style={{ paddingLeft: 34 }}>
                    <div style={{ width: 14 }} />
                    <AssetIcon />
                    <span className="haa-av-tag">BBA-002</span>
                    <span className="haa-av-desc">Bomba secundaria</span>
                  </div>
                </div>

              </div>

              {/* ── SIS-VAPOR ── */}
              <div className={`haa-sis-row${step >= 7 ? ' vis' : ''}`}>
                <div className="haa-caret">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <SisIcon />
                <span className="haa-sis-nm">SIS-VAPOR</span>
                <span className="haa-sis-bd">(1 E)</span>
              </div>

            </div>
          </aside>

          {/* ── Right panel ── */}
          <div className="haa-panel">
            <div className="haa-panel-body">

              {/* ══ BBA-001 panel ══ */}
              {showBBA001Panel && (
                <>
                  {/* Header */}
                  <div className="haa-card vis fade">
                    <div className="haa-hdr">
                      <div className="haa-hdr-ico">
                        <PumpIcon />
                      </div>
                      <div className="haa-hdr-flds">
                        <div className="haa-tag-txt">{BBA001_TAG}</div>
                        <div className="haa-desc-txt">{BBA001_DESC}</div>
                        <div className="haa-codigo">Código: 0042</div>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación */}
                  {step >= 10 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <PinIcon /> Ubicación y jerarquía
                      </div>
                      <div className="haa-g2">
                        <div className="haa-f">
                          <div className="haa-flbl">Ubicación técnica</div>
                          <div className="haa-fval">SIS-AGUA-FRÍA</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Equipo padre</div>
                          <div className="haa-fval muted">Sin equipo padre</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Clasificación */}
                  {step >= 11 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <GridIcon /> Clasificación
                      </div>
                      <div className="haa-g3">
                        <div className="haa-f">
                          <div className="haa-flbl">Clase</div>
                          <div className="haa-fval">BOMBA</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Tipo</div>
                          <div className="haa-fval">CENTRÍFUGA</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Criticidad</div>
                          {step >= 12
                            ? <span className="haa-crit alta">Alta</span>
                            : <div style={{ height: 18 }} />}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Info técnica */}
                  {step >= 13 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <InfoIcon /> Información técnica
                      </div>
                      <div className="haa-g2">
                        <div className="haa-f">
                          <div className="haa-flbl">Fabricante</div>
                          <div className="haa-fval">FLOWSERVE</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Modelo</div>
                          <div className="haa-fval">CPX 200</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Equipos dependientes */}
                  {step >= 14 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <ChainIcon /> Equipos dependientes
                        <span style={{ fontSize: 9, fontWeight: 600, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1px 6px', borderRadius: 20 }}>2</span>
                      </div>
                      <div className="haa-deps">
                        <div className={`haa-dep-chip${step >= 18 ? ' active' : ''}`}>
                          <AssetIcon color={step >= 18 ? '#1d4ed8' : '#3b82f6'} small />
                          {MTR_TAG}
                          <span style={{ fontSize: 9, color: step >= 18 ? '#1d4ed8' : '#94a3b8', fontWeight: 400 }}>Motor</span>
                        </div>
                        <div className="haa-dep-chip">
                          <AssetIcon color="#9ca3af" small />
                          {SLL_TAG}
                          <span style={{ fontSize: 9, color: '#94a3b8', fontWeight: 400 }}>Sello</span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ══ BBA-001-MTR panel ══ */}
              {showMTRPanel && (
                <>
                  {/* Header */}
                  <div className="haa-card vis fade">
                    <div className="haa-hdr">
                      <div className="haa-hdr-ico mtr">
                        <MotorIcon />
                      </div>
                      <div className="haa-hdr-flds">
                        <div className="haa-tag-txt">{MTR_TAG}</div>
                        <div className="haa-desc-txt">{MTR_DESC}</div>
                        <div className="haa-codigo">Código: 0043</div>
                      </div>
                    </div>
                  </div>

                  {/* Clasificación MTR */}
                  {step >= 21 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <GridIcon /> Clasificación
                      </div>
                      <div className="haa-g3">
                        <div className="haa-f">
                          <div className="haa-flbl">Clase</div>
                          <div className="haa-fval">MOTOR</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Tipo</div>
                          <div className="haa-fval">ELÉCTRICO</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Criticidad</div>
                          <span className="haa-crit media">Media</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Info técnica MTR */}
                  {step >= 21 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <InfoIcon /> Información técnica
                      </div>
                      <div className="haa-g2">
                        <div className="haa-f">
                          <div className="haa-flbl">Fabricante</div>
                          <div className="haa-fval">ABB</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Modelo</div>
                          <div className="haa-fval">M3BP 200</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Equipo padre */}
                  {step >= 22 && (
                    <div className="haa-card vis fade">
                      <div className="haa-stitle">
                        <ChainIcon /> Jerarquía
                      </div>
                      <div className="haa-g2">
                        <div className="haa-f">
                          <div className="haa-flbl">Ubicación técnica</div>
                          <div className="haa-fval">SIS-AGUA-FRÍA</div>
                        </div>
                        <div className="haa-f">
                          <div className="haa-flbl">Equipo padre</div>
                          <div className="haa-fval ref">
                            <AssetIcon color="#2563eb" small />
                            {BBA001_TAG}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

            </div>

            {/* Completion */}
            <div className={`haa-done${step >= 23 ? ' vis' : ''}`}>
              <div className="haa-done-txt">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4.5L6.5 11 3 7.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Jerarquía navegada
              </div>
              <span className="haa-done-sub">3 niveles · 2 equipos dependientes</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// ── Shared inline SVG icons ──
function SisIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="9" rx="1" stroke="#16a34a" strokeWidth="1.3"/>
      <path d="M6 13v-3.5h4V13" stroke="#16a34a" strokeWidth="1.1"/>
      <path d="M2 7.5h12" stroke="#16a34a" strokeWidth="1.1"/>
    </svg>
  );
}

function AssetIcon({ color = '#3b82f6', small = false }: { color?: string; small?: boolean }) {
  const s = small ? 11 : 13;
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3.5" stroke={color} strokeWidth="1.3"/>
      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="8" r="1.2" fill={color} fillOpacity="0.3"/>
    </svg>
  );
}

function PumpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" stroke="#2563eb" strokeWidth="1.4"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="#bfdbfe"/>
    </svg>
  );
}

function MotorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="8" rx="2" stroke="#d97706" strokeWidth="1.4"/>
      <path d="M8 8V6M16 8V6M8 16v2M16 16v2" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2.5" stroke="#d97706" strokeWidth="1.3"/>
      <circle cx="12" cy="12" r="1" fill="#fef08a"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6C12.5 3.5 10.5 1.5 8 1.5z" stroke="#6b7280" strokeWidth="1.3"/>
      <circle cx="8" cy="6" r="1.5" stroke="#6b7280" strokeWidth="1.2"/>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="#6b7280" strokeWidth="1.3"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="#2563eb" strokeWidth="1.3"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#6b7280" strokeWidth="1.3"/>
      <path d="M8 7v4M8 5.5v.5" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <path d="M6 8h4" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="1.5" y="5.5" width="5" height="5" rx="2" stroke="#6b7280" strokeWidth="1.3"/>
      <rect x="9.5" y="5.5" width="5" height="5" rx="2" stroke="#6b7280" strokeWidth="1.3"/>
    </svg>
  );
}

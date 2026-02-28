'use client';

import React, { useState, useEffect } from 'react';

// ── Data ──
const FUNC1 = 'Bombear fluido a 150 m³/h';
const FF1 = 'Incapaz de bombear';
const MODOS = [
  { modo: 'Fuga por sello mecánico', efecto: 'Pérdida de fluido y contaminación del área', f: 3, s: 8, d: 2, npr: 48 },
  { modo: 'Falla de rodamiento', efecto: 'Vibración excesiva, parada no programada', f: 5, s: 7, d: 4, npr: 140 },
  { modo: 'Cavitación por NPSH', efecto: 'Daño al impulsor, pérdida de eficiencia', f: 2, s: 5, d: 3, npr: 30 },
];
const FUNC2 = 'Contener fluido sin fugas';
const FF2 = 'Fuga externa visible';
const MODO2 = { modo: 'Corrosión de carcasa', efecto: 'Fuga menor al ambiente', f: 2, s: 6, d: 5, npr: 60 };

// ── Component ──
export default function RCMAnimationModosFalla() {
  const [step, setStep] = useState(0);
  const [funcChars, setFuncChars] = useState(0);
  const [ffChars, setFFChars] = useState(0);

  // Timeline
  useEffect(() => {
    const sched: [number, number][] = [
      [300,  1],   // topbar
      [550,  2],   // tabs
      [900,  3],   // thead + unit
      [1400, 4],   // row1 placeholders, typing función
      [2500, 5],   // typing falla funcional
      [3200, 6],   // modo 1 data fills in
      [3900, 7],   // "+" on modo 1
      [4400, 8],   // click → modo 2 appears
      [5100, 9],   // "+" on modo 2
      [5600, 10],  // click → modo 3 appears
      [6300, 11],  // "+" on FF
      [6800, 12],  // "+" fades
      [7200, 13],  // func 2 slides in
      [7800, 14],  // footer pulses
    ];
    const ts = sched.map(([ms, s]) => setTimeout(() => setStep(s), ms));
    return () => ts.forEach(clearTimeout);
  }, []);

  // Typing función (step 4)
  useEffect(() => {
    if (step !== 4) return;
    setFuncChars(0);
    const iv = setInterval(() => {
      setFuncChars(p => { if (p >= FUNC1.length) { clearInterval(iv); return p; } return p + 1; });
    }, 32);
    return () => clearInterval(iv);
  }, [step]);

  // Typing falla funcional (step 5)
  useEffect(() => {
    if (step !== 5) return;
    setFFChars(0);
    const iv = setInterval(() => {
      setFFChars(p => { if (p >= FF1.length) { clearInterval(iv); return p; } return p + 1; });
    }, 32);
    return () => clearInterval(iv);
  }, [step]);

  // Derived
  const funcText = step >= 5 ? FUNC1 : step >= 4 ? FUNC1.slice(0, funcChars) : '';
  const ffText = step >= 6 ? FF1 : step >= 5 ? FF1.slice(0, ffChars) : '';
  const modeCount = step >= 10 ? 3 : step >= 8 ? 2 : step >= 6 ? 1 : 0;
  const showFunc2 = step >= 13;
  const rs = Math.max(modeCount, 1);
  const nprCls = (n: number) => n >= 100 ? 'rcma-npr-red' : n >= 50 ? 'rcma-npr-amber' : 'rcma-npr-green';

  const PlusBtn = ({ show }: { show: boolean }) =>
    show ? (
      <div className="rcma-plus-wrap">
        <div className="rcma-plus-btn">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ) : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .rcma-root {
          width: 100%; height: 100%; min-height: 280px;
          display: flex; flex-direction: column;
          font-family: 'IBM Plex Sans', sans-serif;
          background: #fff; border-radius: 6px; overflow: hidden;
          box-sizing: border-box; border: 1px solid #e5e7eb;
        }

        /* ── Topbar ── */
        .rcma-top { display:flex; align-items:center; padding:6px 12px; background:#fff; border-bottom:1px solid #e5e7eb; gap:8px; min-height:34px; opacity:0; transition:opacity 0.4s; }
        .rcma-top.vis { opacity:1; }
        .rcma-back { display:flex; align-items:center; gap:3px; font-size:10.5px; font-weight:500; color:#334155; cursor:default; white-space:nowrap; }
        .rcma-proj { font-size:10.5px; font-weight:600; color:#1e293b; flex:1; text-align:center; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .rcma-proj b { color:#3b82f6; }
        .rcma-saved { font-size:9.5px; color:#22c55e; font-weight:500; white-space:nowrap; display:flex; align-items:center; gap:3px; }
        .rcma-act-btn { font-size:9.5px; font-weight:600; color:#fff; background:#22c55e; border:none; border-radius:4px; padding:3.5px 10px; cursor:default; white-space:nowrap; }

        /* ── Tabs ── */
        .rcma-tabs { display:flex; align-items:center; border-bottom:1px solid #e5e7eb; background:#fff; padding:0 6px; opacity:0; transition:opacity 0.4s; }
        .rcma-tabs.vis { opacity:1; }
        .rcma-tab { font-size:10px; font-weight:500; color:#64748b; padding:6px 10px 5px; border-bottom:2px solid transparent; cursor:default; white-space:nowrap; display:flex; align-items:center; gap:4px; }
        .rcma-tab.active { color:#2563eb; font-weight:600; border-bottom-color:#3b82f6; }
        .rcma-tn { width:15px; height:15px; border-radius:50%; font-size:8.5px; font-weight:700; display:inline-flex; align-items:center; justify-content:center; background:#f1f5f9; color:#64748b; }
        .rcma-tab.active .rcma-tn { background:#3b82f6; color:#fff; }

        /* ── Table ── */
        .rcma-tw { flex:1; overflow:hidden; background:#fff; }
        .rcma-t { width:100%; border-collapse:collapse; table-layout:fixed; font-size:11px; }
        .rcma-t col.c1 { width:22%; }
        .rcma-t col.c2 { width:17%; }
        .rcma-t col.c3 { width:20%; }
        .rcma-t col.c4 { width:22%; }
        .rcma-t col.cr { width:4.75%; }

        .rcma-t thead { transition:opacity 0.4s; }
        .rcma-t thead th { background:#f8fafc; color:#374151; font-weight:600; font-size:9.5px; padding:5px 6px; border-bottom:1.5px solid #d1d5db; border-right:1px solid #e5e7eb; text-align:left; white-space:nowrap; }
        .rcma-t thead th:last-child { border-right:none; }
        .rcma-rg { text-align:center!important; font-weight:700!important; color:#1e293b!important; border-bottom:1px solid #e5e7eb!important; }
        .rcma-rs { font-size:9px!important; font-weight:600!important; color:#64748b!important; text-align:center!important; padding:2px 4px 4px!important; }
        .rcma-hi { display:inline-flex; align-items:center; justify-content:center; width:11px; height:11px; border-radius:50%; border:1px solid #cbd5e1; font-size:7px; font-weight:700; color:#94a3b8; margin-left:2px; vertical-align:middle; }

        /* ── Rows ── */
        .rcma-t tbody td { padding:5px 7px; border-bottom:1px solid #e5e7eb; border-right:1px solid #f1f5f9; color:#334155; vertical-align:top; font-size:10.5px; line-height:1.35; transition: box-shadow 0.2s, background 0.2s; }
        .rcma-t tbody td:last-child { border-right:none; }
        .rcma-unit td { background:#eff6ff!important; color:#1e40af!important; font-weight:700!important; font-size:10px!important; letter-spacing:0.03em; text-transform:uppercase; border-bottom-color:#bfdbfe!important; }
        .rcma-fn { font-weight:500; color:#1e293b; }
        .rcma-ctr { text-align:center; vertical-align:middle; }
        .rcma-ph { color:#94a3b8; font-style:italic; }
        .rcma-muted { color:#b0b8c4; }

        /* Active cell (being edited) */
        .rcma-active { box-shadow:inset 0 0 0 1.5px #3b82f6; background:#f8fbff!important; }

        /* Blinking caret */
        .rcma-caret { color:#3b82f6; font-weight:400; animation:rcmaBlink 0.65s step-end infinite; margin-left:1px; }
        @keyframes rcmaBlink { 50%{opacity:0} }

        /* NPR badges */
        .rcma-npr { display:inline-flex; align-items:center; justify-content:center; min-width:24px; padding:1px 5px; border-radius:3px; font-weight:700; font-size:10px; }
        .rcma-npr-green { background:#22c55e; color:#fff; }
        .rcma-npr-amber { background:#facc15; color:#1e293b; }
        .rcma-npr-red { background:#ef4444; color:#fff; }

        /* Row animations */
        .rcma-fade { animation:rcmaFadeIn 0.35s ease forwards; }
        .rcma-slide { animation:rcmaSlideIn 0.35s ease forwards; }
        @keyframes rcmaFadeIn { from{opacity:0} to{opacity:1} }
        @keyframes rcmaSlideIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }

        /* NPR pop */
        .rcma-npr-pop { animation:rcmaNprPop 0.35s ease forwards; }
        @keyframes rcmaNprPop { 0%{transform:scale(0.5);opacity:0} 60%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }

        /* Plus button */
        .rcma-plus-wrap { position:absolute; bottom:-11px; left:50%; transform:translateX(-50%); z-index:5; }
        .rcma-plus-btn { width:20px; height:20px; border-radius:50%; background:#fff; border:1.5px solid #3b82f6; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 4px rgba(0,0,0,0.10); animation:rcmaPlusIn 0.25s ease forwards; cursor:default; }
        @keyframes rcmaPlusIn { from{transform:scale(0);opacity:0} to{transform:scale(1);opacity:1} }

        /* Plus cell needs relative + visible overflow */
        .rcma-plus-cell { position:relative; overflow:visible; }

        /* Footer */
        .rcma-ft { display:flex; justify-content:center; padding:7px; border-top:1px solid #e5e7eb; opacity:0; transition:opacity 0.4s; }
        .rcma-ft.vis { opacity:1; }
        .rcma-ft-link { font-size:11px; font-weight:500; color:#3b82f6; cursor:default; }
        .rcma-pulse { animation:rcmaPulse 1.2s ease infinite; }
        @keyframes rcmaPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      <div className="rcma-root">
        {/* ── Topbar ── */}
        <div className={`rcma-top ${step >= 1 ? 'vis' : ''}`}>
          <div className="rcma-back">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Regresar a proyectos
          </div>
          <div className="rcma-proj"><b>RCM</b>&nbsp;&nbsp;|&nbsp;&nbsp;PT-55370C - C-5520C NITROGEN COMPRESSOR</div>
          <div className="rcma-saved">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M13 5L6.5 11.5 3 8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Guardado
          </div>
          <button className="rcma-act-btn">Acción ▾</button>
        </div>

        {/* ── Tabs ── */}
        <div className={`rcma-tabs ${step >= 2 ? 'vis' : ''}`}>
          <div className="rcma-tab"><span className="rcma-tn">1</span>Información Preliminar</div>
          <div className="rcma-tab active"><span className="rcma-tn">2</span>Hoja de Análisis RCM</div>
          <div className="rcma-tab"><span className="rcma-tn">3</span>Plan de Mantenimiento</div>
          <div className="rcma-tab"><span className="rcma-tn">4</span>Recomendaciones</div>
        </div>

        {/* ── Table ── */}
        <div className="rcma-tw">
          <table className="rcma-t">
            <colgroup>
              <col className="c1" /><col className="c2" /><col className="c3" /><col className="c4" />
              <col className="cr" /><col className="cr" /><col className="cr" /><col className="cr" />
            </colgroup>
            <thead style={{ opacity: step >= 3 ? 1 : 0 }}>
              <tr>
                <th rowSpan={2}>Función <span className="rcma-hi">?</span></th>
                <th rowSpan={2}>Falla funcional <span className="rcma-hi">?</span></th>
                <th rowSpan={2}>Modo de falla <span className="rcma-hi">?</span></th>
                <th rowSpan={2}>Efecto de falla <span className="rcma-hi">?</span></th>
                <th colSpan={4} className="rcma-rg">Riesgo <span className="rcma-hi">?</span></th>
              </tr>
              <tr>
                <th className="rcma-rs">F</th>
                <th className="rcma-rs">S</th>
                <th className="rcma-rs">D</th>
                <th className="rcma-rs">NPR</th>
              </tr>
            </thead>
            <tbody>
              {/* Unit row */}
              {step >= 3 && (
                <tr className="rcma-unit rcma-fade">
                  <td colSpan={8}>UNIDAD 1</td>
                </tr>
              )}

              {/* ── Function 1 ── */}
              {step >= 4 && (
                <>
                  {/* First row (always present once step>=4) */}
                  <tr>
                    {/* Función cell */}
                    <td rowSpan={rs} className={`rcma-fn ${step === 4 ? 'rcma-active' : ''}`}>
                      {funcText}
                      {step === 4 && <span className="rcma-caret">|</span>}
                    </td>
                    {/* Falla funcional cell */}
                    <td rowSpan={rs} className={`rcma-plus-cell ${step === 5 ? 'rcma-active' : ''}`}>
                      {ffText}
                      {step === 5 && <span className="rcma-caret">|</span>}
                      <PlusBtn show={step === 11} />
                    </td>

                    {/* Modo / Efecto / Risk — placeholder vs real data */}
                    {modeCount >= 1 ? (
                      <>
                        <td className="rcma-plus-cell">
                          {MODOS[0].modo}
                          <PlusBtn show={step === 7} />
                        </td>
                        <td className="rcma-ph">{MODOS[0].efecto}</td>
                        <td className="rcma-ctr">{MODOS[0].f}</td>
                        <td className="rcma-ctr">{MODOS[0].s}</td>
                        <td className="rcma-ctr">{MODOS[0].d}</td>
                        <td className="rcma-ctr">
                          <span className={`rcma-npr rcma-npr-pop ${nprCls(MODOS[0].npr)}`}>{MODOS[0].npr}</span>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="rcma-ph">modo de falla 1</td>
                        <td className="rcma-ph">Describa el efecto</td>
                        <td className="rcma-ctr rcma-muted">1</td>
                        <td className="rcma-ctr rcma-muted">1</td>
                        <td className="rcma-ctr rcma-muted">1</td>
                        <td className="rcma-ctr"><span className="rcma-npr rcma-npr-green">1</span></td>
                      </>
                    )}
                  </tr>

                  {/* Modo 2 row */}
                  {modeCount >= 2 && (
                    <tr className="rcma-slide">
                      <td className="rcma-plus-cell">
                        {MODOS[1].modo}
                        <PlusBtn show={step === 9} />
                      </td>
                      <td className="rcma-ph">{MODOS[1].efecto}</td>
                      <td className="rcma-ctr">{MODOS[1].f}</td>
                      <td className="rcma-ctr">{MODOS[1].s}</td>
                      <td className="rcma-ctr">{MODOS[1].d}</td>
                      <td className="rcma-ctr">
                        <span className={`rcma-npr rcma-npr-pop ${nprCls(MODOS[1].npr)}`}>{MODOS[1].npr}</span>
                      </td>
                    </tr>
                  )}

                  {/* Modo 3 row */}
                  {modeCount >= 3 && (
                    <tr className="rcma-slide">
                      <td>{MODOS[2].modo}</td>
                      <td className="rcma-ph">{MODOS[2].efecto}</td>
                      <td className="rcma-ctr">{MODOS[2].f}</td>
                      <td className="rcma-ctr">{MODOS[2].s}</td>
                      <td className="rcma-ctr">{MODOS[2].d}</td>
                      <td className="rcma-ctr">
                        <span className={`rcma-npr rcma-npr-pop ${nprCls(MODOS[2].npr)}`}>{MODOS[2].npr}</span>
                      </td>
                    </tr>
                  )}
                </>
              )}

              {/* ── Function 2 ── */}
              {showFunc2 && (
                <tr className="rcma-slide">
                  <td className="rcma-fn">{FUNC2}</td>
                  <td>{FF2}</td>
                  <td>{MODO2.modo}</td>
                  <td className="rcma-ph">{MODO2.efecto}</td>
                  <td className="rcma-ctr">{MODO2.f}</td>
                  <td className="rcma-ctr">{MODO2.s}</td>
                  <td className="rcma-ctr">{MODO2.d}</td>
                  <td className="rcma-ctr">
                    <span className={`rcma-npr rcma-npr-pop ${nprCls(MODO2.npr)}`}>{MODO2.npr}</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Footer ── */}
        <div className={`rcma-ft ${step >= 14 ? 'vis' : ''}`}>
          <span className={`rcma-ft-link ${step >= 14 ? 'rcma-pulse' : ''}`}>+ Agregar nueva unidad</span>
        </div>
      </div>
    </>
  );
}
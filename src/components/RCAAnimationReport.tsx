"use client";

export default function RCAAnimationReport() {
  return (
    <div style={{ width: "100%", minHeight: "400px", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        .rca-report-frame {
          width: 100%;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          background: #f3f4f6;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        /* ═══════════════════════════════════════════ */
        /*              SCENE MANAGEMENT              */
        /* ═══════════════════════════════════════════ */
        .rr-scene {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0;
        }

        /* Scene 1: Project view + AI overlay — 0–11s */
        .rr-scene-proj {
          animation: rrScProj 18s infinite;
        }
        @keyframes rrScProj {
          0%   { opacity: 1; }
          58%  { opacity: 1; }
          62%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Scene 3: report preview — 11–18s */
        .rr-scene-rep {
          animation: rrScRep 18s infinite;
        }
        @keyframes rrScRep {
          0%, 61%  { opacity: 0; transform: translateY(16px); }
          65%  { opacity: 1; transform: translateY(0); }
          95%  { opacity: 1; transform: translateY(0); }
          99%  { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s1-header {
          background: #262626;
          height: 44px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 0;
        }
        
        .s1-back-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          margin-right: 8px;
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .s1-back-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .s1-tabs {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          overflow: hidden;
        }
        
        .s1-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          color: #a1a1aa;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .s1-tab:hover {
          background: rgba(255,255,255,0.08);
        }
        
        .s1-tab.active {
          background: rgba(124,58,237,0.2);
          color: #a78bfa;
        }
        
        .s1-tab-num {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: #3f3f46;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #a1a1aa;
        }
        
        .s1-tab.active .s1-tab-num {
          background: #7c3aed;
          color: white;
        }
        
        .s1-header-right {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
        }
        
        .s1-header-tag {
          background: #16a34a;
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .s1-report-btn {
          height: 30px;
          border-radius: 6px;
          background: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0 12px;
          font-size: 11px;
          font-weight: 600;
          color: white;
          animation: reportBtnPulse 18s infinite;
        }
        
        @keyframes reportBtnPulse {
          0%, 2% { box-shadow: none; transform: scale(1); }
          4% { box-shadow: 0 0 0 3px rgba(124,58,237,0.5); transform: scale(1.04); }
          7% { box-shadow: 0 0 0 3px rgba(124,58,237,0.5); transform: scale(1.04); }
          9% { box-shadow: none; transform: scale(1); }
          100% { box-shadow: none; transform: scale(1); }
        }
        
        .s1-canvas {
          width: 100%;
          height: calc(100% - 40px);
          background: #e8e8e8;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .s1-canvas::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d4d4d4 1px, transparent 1px);
          background-size: 16px 16px;
          opacity: 0.6;
          z-index: 1;
        }
        
        /* Mini tree nodes */
        .rr-tree {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%) scale(0.78);
          transform-origin: top center;
          width: 560px;
          height: 260px;
          z-index: 2;
        }
        
        .rr-tn {
          position: absolute;
          width: 145px;
          background: #fff;
          border: 1px solid #9ca3af;
          border-radius: 4px;
          overflow: hidden;
          z-index: 2;
          opacity: 0;
          visibility: hidden;
        }
        
        .rr-tn-h {
          text-align: center;
          padding: 3px 6px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: white;
        }
        
        .rr-tn-b {
          padding: 4px 8px;
          font-size: 9.5px;
          color: #374151;
          line-height: 1.3;
        }
        
        .rr-tn-evento .rr-tn-h { background: #9333ea; }
        .rr-tn-modo .rr-tn-h { background: #374151; }
        .rr-tn-causa .rr-tn-h { background: #22c55e; }
        .rr-tn-desc .rr-tn-h { background: #9ca3af; }
        .rr-tn-desc .rr-tn-b { color: #9ca3af; text-decoration: line-through; }
        
        .rr-tree-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 560px;
          height: 260px;
          z-index: 1;
          pointer-events: none;
        }
        
        .rr-tree-svg line {
          stroke: #525252;
          stroke-width: 1;
        }
        
        /* Tree node progressive animations */
        .rr-tn-evt {
          animation: treeNode1 18s infinite both;
        }
        
        .rr-tn-mf {
          animation: treeNode2 18s infinite both;
        }
        
        .rr-tn-rc {
          animation: treeNode3 18s infinite both;
        }
        
        .rr-lines-1 {
          animation: treeLine1 18s infinite both;
        }
        
        .rr-lines-2 {
          animation: treeLine2 18s infinite both;
        }
        
        @keyframes treeNode1 {
          0%, 3% { opacity: 0; visibility: hidden; transform: translateY(-8px); }
          6% { opacity: 1; visibility: visible; transform: translateY(0); }
          58% { opacity: 1; visibility: visible; }
          62% { opacity: 0; visibility: hidden; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes treeNode2 {
          0%, 8% { opacity: 0; visibility: hidden; transform: translateY(-8px); }
          12% { opacity: 1; visibility: visible; transform: translateY(0); }
          58% { opacity: 1; visibility: visible; }
          62% { opacity: 0; visibility: hidden; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes treeNode3 {
          0%, 15% { opacity: 0; visibility: hidden; transform: translateY(-8px); }
          19% { opacity: 1; visibility: visible; transform: translateY(0); }
          58% { opacity: 1; visibility: visible; }
          62% { opacity: 0; visibility: hidden; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes treeLine1 {
          0%, 5% { opacity: 0; visibility: hidden; }
          9% { opacity: 1; visibility: visible; }
          58% { opacity: 1; visibility: visible; }
          62% { opacity: 0; visibility: hidden; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        @keyframes treeLine2 {
          0%, 12% { opacity: 0; visibility: hidden; }
          16% { opacity: 1; visibility: visible; }
          58% { opacity: 1; visibility: visible; }
          62% { opacity: 0; visibility: hidden; }
          100% { opacity: 0; visibility: hidden; }
        }
        
        .ai-overlay {
          position: absolute;
          right: 20px;
          top: 40%;
          transform: translateY(-50%);
          width: 300px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          z-index: 10;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          animation: aiOverlayIn 18s infinite;
        }
        
        @keyframes aiOverlayIn {
          0%, 11% { opacity: 0; transform: translateY(-50%) translateY(6px) scale(0.98); }
          14% { opacity: 1; transform: translateY(-50%) translateY(0) scale(1); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-ov-header {
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .ai-ov-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ai-ov-title {
          font-size: 12px;
          font-weight: 600;
          color: white;
        }
        
        .ai-ov-badge {
          margin-left: auto;
          font-size: 9px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 8px;
          background: rgba(255,255,255,0.2);
          color: white;
        }
        
        .ai-ov-body {
          flex: 1;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .ai-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          opacity: 0;
        }
        
        .ai-step-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        
        .ai-dot-wait {
          background: #f3f4f6;
        }
        
        .ai-dot-done {
          background: #22c55e;
        }
        
        .ai-step-text {
          font-size: 11px;
          color: #374151;
          font-weight: 500;
          line-height: 1.4;
        }
        
        .ai-step-sub {
          font-size: 9px;
          color: #9ca3af;
          font-weight: 400;
        }
        
        .ai-step.s1 { animation: aiS1 18s infinite; }
        @keyframes aiS1 {
          0%, 15% { opacity: 0; transform: translateY(3px); }
          18% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-step.s2 { animation: aiS2 18s infinite; }
        @keyframes aiS2 {
          0%, 20% { opacity: 0; transform: translateY(3px); }
          23% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-step.s3 { animation: aiS3 18s infinite; }
        @keyframes aiS3 {
          0%, 25% { opacity: 0; transform: translateY(3px); }
          28% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-step.s4 { animation: aiS4 18s infinite; }
        @keyframes aiS4 {
          0%, 30% { opacity: 0; transform: translateY(3px); }
          33% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-ov-progress {
          margin: 2px 0;
          height: 2px;
          background: #f3f4f6;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .ai-ov-progress-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #7c3aed, #a78bfa);
          animation: aiBar 18s infinite;
        }
        
        @keyframes aiBar {
          0%, 15% { width: 0%; }
          22% { width: 25%; }
          29% { width: 60%; }
          35% { width: 100%; }
          48% { width: 100%; }
          52% { width: 0%; opacity: 0; }
          100% { width: 0%; }
        }
        
        .ai-ov-complete {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 6px;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #16a34a;
          opacity: 0;
          animation: aiDone 18s infinite;
        }
        
        @keyframes aiDone {
          0%, 36% { opacity: 0; transform: translateY(3px); }
          39% { opacity: 1; transform: translateY(0); }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ai-ov-complete-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .ai-dim {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.15);
          z-index: 9;
          animation: aiDimAnim 18s infinite;
          pointer-events: none;
        }
        
        @keyframes aiDimAnim {
          0%, 11% { opacity: 0; }
          14% { opacity: 1; }
          48% { opacity: 1; }
          52% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-preview-mini {
          padding: 20px;
          display: flex;
          justify-content: center;
          height: 100%;
          align-items: center;
        }
        
        .s2-page-mini {
          width: 90%;
          max-width: 400px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .pg-el {
          opacity: 0;
        }
        
        .pg-el.p1 { animation: pIn1 18s infinite; }
        @keyframes pIn1 {
          0%, 58% { opacity: 0; transform: translateY(4px); }
          62% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .pg-el.p2 { animation: pIn2 18s infinite; }
        @keyframes pIn2 {
          0%, 64% { opacity: 0; transform: translateY(4px); }
          68% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .pg-el.p3 { animation: pIn3 18s infinite; }
        @keyframes pIn3 {
          0%, 70% { opacity: 0; transform: translateY(4px); }
          74% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .pg-report-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        
        .pg-report-sub {
          font-size: 11px;
          color: #6b7280;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .pg-report-sub-tag {
          font-size: 9px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 2px;
          background: #f3e8ff;
          color: #7c3aed;
        }
        
        .pg-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        
        .ai-sparkle {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 2px;
          background: #f3e8ff;
          color: #7c3aed;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        
        .pg-text-line {
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        
        .pg-text-typing .pg-text-line {
          background: linear-gradient(90deg, #f3e8ff 0%, #ede9fe 50%, #f3e8ff 100%);
          background-size: 200% 100%;
          animation: textShimmer 1.5s infinite;
        }
        
        @keyframes textShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        .pg-rec-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 0;
          font-size: 11px;
          color: #374151;
        }
        
        .pg-rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .pg-rec-dot.red {
          background: #ef4444;
        }
        
        .pg-rec-type {
          font-size: 9px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 2px;
          margin-left: auto;
        }
        
        .pg-rt-corr {
          background: #fef2f2;
          color: #dc2626;
        }
        
        .pg-rt-prev {
          background: #eff6ff;
          color: #1e40af;
        }
        
        .pg-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 4px 0;
        }
        
        .pg-cause-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 3px 0;
        }
        
        .pg-cause-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #22c55e;
        }
        
        .pg-cause-text {
          font-size: 10px;
          color: #374151;
          flex: 1;
        }
        
        .pg-cause-tag {
          font-size: 8px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 3px;
          background: #dcfce7;
          color: #16a34a;
          flex-shrink: 0;
        }
        
        .pg-el.p4 { animation: pIn4 18s infinite; }
        @keyframes pIn4 {
          0%, 76% { opacity: 0; transform: translateY(4px); }
          80% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
      
      <div className="rca-report-frame">
        {/* Scene 1: Project View + AI Generation */}
        <div className="rr-scene rr-scene-proj">
          <div className="s1-header">
            <div className="s1-back-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
            <div className="s1-tabs">
              <div className="s1-tab">
                <span className="s1-tab-num">1</span>
                <span>Info</span>
              </div>
              <div className="s1-tab active">
                <span className="s1-tab-num">2</span>
                <span>Árbol</span>
              </div>
              <div className="s1-tab">
                <span className="s1-tab-num">3</span>
                <span>Tareas</span>
              </div>
              <div className="s1-tab">
                <span className="s1-tab-num">4</span>
                <span>Evidencias</span>
              </div>
              <div className="s1-tab">
                <span className="s1-tab-num">5</span>
                <span>Recomendaciones</span>
              </div>
            </div>
          </div>
          
          <div className="s1-canvas">
            <div className="rr-tree">
              <svg className="rr-tree-svg" viewBox="0 0 560 260">
                {/* Event → split → MFs */}
                <g className="rr-lines-1" style={{ opacity: 0 }}>
                  <line x1="280" y1="48" x2="280" y2="65" />
                  <line x1="138" y1="65" x2="418" y2="65" />
                  <line x1="138" y1="65" x2="138" y2="88" />
                  <line x1="418" y1="65" x2="418" y2="88" />
                </g>
                {/* MF1 → split → CRs */}
                <g className="rr-lines-2" style={{ opacity: 0 }}>
                  <line x1="138" y1="133" x2="138" y2="152" />
                  <line x1="78" y1="152" x2="233" y2="152" />
                  <line x1="78" y1="152" x2="78" y2="172" />
                  <line x1="233" y1="152" x2="233" y2="172" />
                </g>
              </svg>
              
              {/* Event */}
              <div className="rr-tn rr-tn-evento rr-tn-evt" style={{ left: "208px", top: "5px", opacity: 0, visibility: "hidden" as const }}>
                <div className="rr-tn-h">EVENTO</div>
                <div className="rr-tn-b">Falla en bomba centrífuga P-101A</div>
              </div>
              
              {/* Failure Modes */}
              <div className="rr-tn rr-tn-modo rr-tn-mf" style={{ left: "65px", top: "88px", opacity: 0, visibility: "hidden" as const }}>
                <div className="rr-tn-h">MODO DE FALLA</div>
                <div className="rr-tn-b">Fuga de sello mecánico</div>
              </div>
              <div className="rr-tn rr-tn-modo rr-tn-mf" style={{ left: "345px", top: "88px", opacity: 0, visibility: "hidden" as const }}>
                <div className="rr-tn-h">MODO DE FALLA</div>
                <div className="rr-tn-b">Sobrecalentamiento motor</div>
              </div>
              
              {/* Root Causes */}
              <div className="rr-tn rr-tn-desc rr-tn-rc" style={{ left: "5px", top: "172px", opacity: 0, visibility: "hidden" as const }}>
                <div className="rr-tn-h">DESCARTADA</div>
                <div className="rr-tn-b">Defecto de fabricación</div>
              </div>
              <div className="rr-tn rr-tn-causa rr-tn-rc" style={{ left: "160px", top: "172px", opacity: 0, visibility: "hidden" as const }}>
                <div className="rr-tn-h">CAUSA RAÍZ</div>
                <div className="rr-tn-b">Desalineación por error de técnico</div>
              </div>
            </div>
            
            <div className="ai-dim"></div>
            
            <div className="ai-overlay">
              <div className="ai-ov-header">
                <div className="ai-ov-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div className="ai-ov-title">Generando Reporte</div>
                <div className="ai-ov-badge">AI</div>
              </div>
              <div className="ai-ov-body">
                <div className="ai-step s1">
                  <div className="ai-step-dot ai-dot-done">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ai-step-text">
                    Recopilando datos del proyecto
                    <br />
                    <span className="ai-step-sub">Evento, línea de tiempo, participantes</span>
                  </div>
                </div>
                
                <div className="ai-step s2">
                  <div className="ai-step-dot ai-dot-done">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ai-step-text">
                    Generando resumen ejecutivo
                    <br />
                    <span className="ai-step-sub">Contexto, impacto y análisis</span>
                  </div>
                </div>
                
                <div className="ai-step s3">
                  <div className="ai-step-dot ai-dot-done">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ai-step-text">
                    Renderizando árbol de causas
                    <br />
                    <span className="ai-step-sub">2 causas raíz, 4 niveles</span>
                  </div>
                </div>
                
                <div className="ai-step s4">
                  <div className="ai-step-dot ai-dot-done">
                    <svg width="8" height="8" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ai-step-text">
                    Compilando recomendaciones
                    <br />
                    <span className="ai-step-sub">4 acciones correctivas y preventivas</span>
                  </div>
                </div>
                
                <div className="ai-ov-progress">
                  <div className="ai-ov-progress-fill"></div>
                </div>
                
                <div className="ai-ov-complete">
                  <div className="ai-ov-complete-icon">
                    <svg width="10" height="10" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  Reporte generado
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scene 2: Report Preview */}
        <div className="rr-scene rr-scene-rep">
          <div className="s2-preview-mini">
            <div className="s2-page-mini">
              <div className="pg-el p1">
                <div className="pg-report-title">Falla en bomba centrífuga P-101A</div>
                <div className="pg-report-sub">
                  <span>Proyecto: P-101A</span>
                  <span>18 Feb 2026</span>
                  <div className="pg-report-sub-tag">AI</div>
                </div>
              </div>
              
              <div className="pg-el p2">
                <div className="pg-section-title">
                  Resumen Ejecutivo
                  <div className="ai-sparkle">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    AI
                  </div>
                </div>
                <div className="pg-text-typing">
                  <div className="pg-text-line" style={{ width: "100%" }}></div>
                  <div className="pg-text-line" style={{ width: "95%" }}></div>
                  <div className="pg-text-line" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div className="pg-divider"></div>
              
              <div className="pg-el p3">
                <div className="pg-section-title">Causas Raíz Identificadas</div>
                <div className="pg-cause-item">
                  <div className="pg-cause-dot"></div>
                  <span className="pg-cause-text">Técnico no siguió procedimiento de alineación</span>
                  <span className="pg-cause-tag">Humana</span>
                </div>
                <div className="pg-cause-item">
                  <div className="pg-cause-dot"></div>
                  <span className="pg-cause-text">Obstrucción del circuito de refrigeración</span>
                  <span className="pg-cause-tag">Física</span>
                </div>
              </div>
              
              <div className="pg-divider"></div>
              
              <div className="pg-el p4">
                <div className="pg-section-title">Recomendaciones</div>
                <div className="pg-rec-item">
                  <div className="pg-rec-dot red"></div>
                  Capacitar personal en alineación de ejes
                  <span className="pg-rec-type pg-rt-corr">Correctiva</span>
                </div>
                <div className="pg-rec-item">
                  <div className="pg-rec-dot red"></div>
                  Limpieza programada del circuito
                  <span className="pg-rec-type pg-rt-corr">Correctiva</span>
                </div>
                <div className="pg-rec-item">
                  <div className="pg-rec-dot red"></div>
                  Implementar check-list de verificación
                  <span className="pg-rec-type pg-rt-prev">Preventiva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function RCAAnimationRecommendations() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        .rca-rec-frame {
          width: 100%;
          height: 400px;
          position: relative;
          background: #f9fafb;
          font-family: 'IBM Plex Sans', sans-serif;
          overflow: hidden;
        }
        
        /* ═══════════════════════════════════════════ */
        /*            SCENE MANAGEMENT                */
        /* ═══════════════════════════════════════════ */
        .scene {
          position: absolute;
          inset: 0;
          opacity: 0;
        }
        
        .scene-tree {
          animation: scTree 16s infinite;
        }
        @keyframes scTree {
          0% { opacity: 1; }
          30% { opacity: 1; }
          33% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .scene-rec {
          animation: scRec 16s infinite;
        }
        @keyframes scRec {
          0%, 30% { opacity: 0; }
          33% { opacity: 1; }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        /* ═══════════════════════════════════════════ */
        /*     SCENE 1: TREE VIEW + REC CREATION     */
        /* ═══════════════════════════════════════════ */
        .s1-header {
          background: #262626;
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 0;
          z-index: 3;
          flex-shrink: 0;
        }
        
        .s1-tabs {
          display: flex;
          align-items: center;
          gap: 0;
          height: 100%;
        }
        
        .s1-tab {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 16px;
          font-size: 13px;
          font-weight: 500;
          color: #a3a3a3;
          cursor: default;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
        }
        
        .s1-tab svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        
        .s1-tab.active {
          color: #ffffff;
          border-bottom-color: #0ea5e9;
          font-weight: 600;
        }
        
        .s1-canvas {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        
        .s1-canvas::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #d4d4d4 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.6;
        }
        
        .tree-inner {
          position: absolute;
          top: 15px;
          left: -30px;
          width: 920px;
          height: 472px;
          transform-origin: top left;
          transform: scale(var(--tree-scale, 0.7));
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          will-change: transform;
          backface-visibility: hidden;
        }
        
        /* Mini tree nodes */
        .mn {
          position: absolute;
          width: 160px;
          background: #fff;
          border: 1px solid #9ca3af;
          border-radius: 4px;
          overflow: visible;
          z-index: 2;
        }
        
        .mn-h {
          text-align: center;
          padding: 3px 6px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: white;
        }
        
        .mn-b {
          padding: 4px 8px;
          font-size: 10px;
          color: #374151;
          line-height: 1.3;
        }
        
        .mn-evento .mn-h { background: #9333ea; }
        .mn-modo .mn-h { background: #374151; }
        .mn-mec .mn-h { background: #ef4444; }
        .mn-desc { opacity: 0.45; }
        .mn-desc .mn-h { background: #9ca3af; }
        .mn-desc .mn-b { color: #9ca3af; text-decoration: line-through; }
        .mn-humana .mn-h { background: #22c55e; }
        
        /* Root cause glow — click highlight then glow */
        .mn-glow {
          animation: glowPulse 16s infinite;
          cursor: default;
        }
        @keyframes glowPulse {
          0%, 4% { box-shadow: none; transform: scale(1); }
          /* Click effect */
          5% { box-shadow: 0 0 0 6px rgba(34,197,94,0.5), 0 0 20px rgba(34,197,94,0.3); transform: scale(1.03); }
          7% { box-shadow: 0 0 0 4px rgba(34,197,94,0.4), 0 0 14px rgba(34,197,94,0.2); transform: scale(1); }
          /* Sustained glow while popup shows */
          8%, 25% { box-shadow: 0 0 0 4px rgba(34,197,94,0.35), 0 0 16px rgba(34,197,94,0.15); }
          28% { box-shadow: none; }
          100% { box-shadow: none; }
        }
        
        /* Dashed line animation — appears after glow */
        .dash-line {
          position: absolute;
          z-index: 1;
          left: 414px;
          top: 318px;
          width: 3px;
          height: 37px;
          background: repeating-linear-gradient(
            to bottom,
            #22c55e 0px,
            #22c55e 4px,
            transparent 4px,
            transparent 8px
          );
          border-radius: 1px;
          animation: dashAnim 16s infinite;
        }
        @keyframes dashAnim {
          0%, 7% { opacity: 0; }
          9% { opacity: 1; }
          27% { opacity: 1; }
          30% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* SVG Connections */
        .tree-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 920px;
          height: 472px;
          z-index: 1;
          pointer-events: none;
        }
        
        .tree-svg line {
          stroke: #525252;
          stroke-width: 1;
        }
        
        .tree-svg polygon {
          fill: #525252;
        }
        
        /* Rec creation popup */
        .rec-pop {
          position: absolute;
          z-index: 5;
          width: 190px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          padding: 8px 10px;
          pointer-events: none;
        }
        
        .rec-pop-1 {
          animation: recPopAnim 16s infinite;
        }
        @keyframes recPopAnim {
          0%, 9% { opacity: 0; transform: translateY(8px) scale(0.95); }
          12% { opacity: 1; transform: translateY(0) scale(1); }
          25% { opacity: 1; transform: translateY(0) scale(1); }
          30% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .rec-pop-badge {
          font-size: 6.5px;
          font-weight: 600;
          padding: 1px 5px;
          border-radius: 3px;
          display: inline-block;
          margin-bottom: 3px;
        }
        
        .rpb-corr {
          background: #fef2f2;
          color: #dc2626;
        }
        
        .rec-pop-title {
          font-size: 8.5px;
          font-weight: 500;
          color: #374151;
          line-height: 1.3;
          margin-bottom: 3px;
        }
        
        .rec-pop-meta {
          font-size: 7px;
          color: #9ca3af;
          display: flex;
          gap: 6px;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .rec-pop-check {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 7.5px;
          font-weight: 600;
          color: #16a34a;
        }
        
        .rec-pop-check-icon {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .rec-pop-check-icon svg {
          width: 7px;
          height: 7px;
        }
        
        /* "Go to Rec" button */
        .goto-rec {
          position: absolute;
          z-index: 6;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          background: #0369a1;
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 3px 10px rgba(3,105,161,0.3);
          cursor: default;
        }
        
        .goto-rec {
          animation: gotoAnim 16s infinite;
        }
        @keyframes gotoAnim {
          0%, 20% { opacity: 0; transform: translateX(-50%) translateY(8px); }
          23% { opacity: 1; transform: translateX(-50%) translateY(0); }
          27% { opacity: 1; transform: translateX(-50%) translateY(0); }
          30% { opacity: 0; transform: translateX(-50%) translateY(-5px); }
          100% { opacity: 0; }
        }
        
        .goto-rec svg {
          width: 13px;
          height: 13px;
        }
        
        /* ═══════════════════════════════════════════ */
        /*     SCENE 2: RECOMMENDATIONS PANEL         */
        /* ═══════════════════════════════════════════ */
        
        .s2-content {
          display: flex;
          height: 100%;
          overflow: hidden;
        }
        
        .s2-list {
          width: 240px;
          border-right: 1px solid #e5e7eb;
          background: white;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .s2-list-header {
          padding: 8px 13px;
          border-bottom: 1px solid #f3f4f6;
          font-size: 8px;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        
        .s2-card {
          padding: 10px 13px;
          border-bottom: 1px solid #f3f4f6;
          border-left: 2px solid transparent;
          opacity: 0;
          transform: translateX(-8px);
          cursor: default;
        }
        
        .s2-card.vis { animation: cardIn 16s infinite; }
        @keyframes cardIn {
          0%, 30% { opacity: 0; transform: translateX(-8px); }
          33% { opacity: 1; transform: translateX(0); }
          36% { opacity: 1; transform: translateX(0); }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-card.vis2 { animation: cardIn2 16s infinite; }
        @keyframes cardIn2 {
          0%, 33% { opacity: 0; transform: translateX(-8px); }
          36% { opacity: 1; transform: translateX(0); }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-card.sel { animation: cardSel 16s infinite; }
        @keyframes cardSel {
          0%, 30% { opacity: 0; transform: translateX(-8px); background: transparent; border-left-color: transparent; }
          33% { opacity: 1; transform: translateX(0); background: transparent; border-left-color: transparent; }
          39% { opacity: 1; background: #eff6ff; border-left-color: #3b82f6; }
          96% { opacity: 1; background: #eff6ff; border-left-color: #3b82f6; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-card-top {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 3px;
        }
        
        .s2-badge {
          font-size: 7px;
          font-weight: 600;
          padding: 2px 5px;
          border-radius: 3px;
        }
        
        .s2-b-corr {
          background: #fef2f2;
          color: #dc2626;
        }
        
        .s2-priority {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-left: auto;
        }
        
        .s2-p-alta {
          background: #ef4444;
        }
        
        .s2-card-title {
          font-size: 9px;
          font-weight: 500;
          color: #374151;
          line-height: 1.3;
          margin-bottom: 3px;
        }
        
        .s2-card-meta {
          font-size: 7px;
          color: #9ca3af;
          display: flex;
          gap: 7px;
        }
        
        .s2-card-bar {
          margin-top: 4px;
          height: 3px;
          background: #f3f4f6;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .s2-card-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, #7c3aed, #3b82f6);
        }
        
        .s2-detail {
          flex: 1;
          padding: 13px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
          position: relative;
        }
        
        .s2-det-el {
          opacity: 0;
        }
        
        .s2-det-el.d1 { animation: detIn 16s infinite; }
        @keyframes detIn {
          0%, 39% { opacity: 0; transform: translateY(4px); }
          42% { opacity: 1; transform: translateY(0); }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-det-el.d2 { animation: detIn2 16s infinite; }
        @keyframes detIn2 {
          0%, 43% { opacity: 0; transform: translateY(4px); }
          46% { opacity: 1; transform: translateY(0); }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .s2-det-el.d3 { animation: detIn3 16s infinite; }
        @keyframes detIn3 {
          0%, 47% { opacity: 0; }
          50% { opacity: 1; }
          96% { opacity: 1; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .det-title {
          font-size: 12px;
          font-weight: 600;
          color: #111827;
          line-height: 1.3;
          flex: 1;
        }
        
        .det-status {
          font-size: 8px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 10px;
          white-space: nowrap;
          position: relative;
        }

        .det-status-a {
          background: #dbeafe;
          color: #1e40af;
          animation: detStatA 16s infinite;
        }
        @keyframes detStatA {
          0%, 69% { opacity: 1; }
          71% { opacity: 0; }
          100% { opacity: 0; }
        }

        .det-status-b {
          position: absolute;
          right: 0;
          top: 0;
          background: #dcfce7;
          color: #16a34a;
          font-size: 8px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 10px;
          white-space: nowrap;
          animation: detStatB 16s infinite;
        }
        @keyframes detStatB {
          0%, 69% { opacity: 0; }
          71% { opacity: 1; }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .det-header-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .det-info {
          display: flex;
          gap: 13px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 11px;
        }
        
        .det-info-item {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        
        .det-info-label {
          font-size: 7px;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .det-info-value {
          font-size: 9px;
          color: #374151;
          font-weight: 500;
        }
        
        .det-progress {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 11px;
        }
        
        .det-prog-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        
        .det-prog-label {
          font-size: 9px;
          font-weight: 600;
          color: #374151;
        }
        
        .det-prog-pct {
          font-size: 12px;
          font-weight: 700;
          color: #7c3aed;
          position: relative;
        }
        
        .pct-a, .pct-b { display: inline; }
        .pct-b { position: absolute; right: 0; top: 0; opacity: 0; }
        .pct-a { animation: pctAhide 16s infinite; }
        @keyframes pctAhide {
          0%, 68% { opacity: 1; }
          70% { opacity: 0; }
          100% { opacity: 0; }
        }
        .pct-b { animation: pctBshow 16s infinite; }
        @keyframes pctBshow {
          0%, 68% { opacity: 0; }
          70% { opacity: 1; }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .det-bar {
          height: 5px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .det-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #7c3aed, #3b82f6);
          animation: barGrow 16s infinite;
        }
        
        @keyframes barGrow {
          0%, 48% { width: 0%; opacity: 1; }
          51% { width: 66%; opacity: 1; }
          68% { width: 66%; opacity: 1; }
          71% { width: 100%; opacity: 1; }
          92% { width: 100%; opacity: 1; }
          94% { width: 100%; opacity: 0; }
          96%, 100% { width: 0%; opacity: 0; }
        }
        
        .det-hitos-label {
          font-size: 9px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 3px;
        }
        
        .det-timeline {
          display: flex;
          flex-direction: column;
          padding-left: 3px;
        }
        
        .ht {
          display: flex;
          gap: 8px;
          position: relative;
          padding-bottom: 9px;
          padding-left: 20px;
          opacity: 0;
          transform: translateY(4px);
        }
        
        .ht.h1 { animation: htIn1 16s infinite; }
        @keyframes htIn1 {
          0%, 50% { opacity: 0; transform: translateY(4px); }
          53% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ht.h2 { animation: htIn2 16s infinite; }
        @keyframes htIn2 {
          0%, 53% { opacity: 0; transform: translateY(4px); }
          56% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ht.h3 { animation: htIn3 16s infinite; }
        @keyframes htIn3 {
          0%, 56% { opacity: 0; transform: translateY(4px); }
          59% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          96% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .ht:not(:last-child)::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 15px;
          bottom: 0;
          width: 2px;
          background: #e5e7eb;
        }
        
        .ht-dot {
          position: absolute;
          left: 0;
          top: 2px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        
        .ht-dot-done {
          background: #22c55e;
        }
        
        .ht-dot-prog {
          background: #3b82f6;
        }
        
        .ht-content {
          flex: 1;
        }
        
        .ht-title {
          font-size: 9px;
          font-weight: 500;
          color: #374151;
          line-height: 1.3;
          margin-bottom: 2px;
        }
        
        .ht-meta {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 7px;
          color: #9ca3af;
        }
        
        .ht-badge {
          font-size: 7px;
          font-weight: 600;
          padding: 1px 5px;
          border-radius: 3px;
        }
        
        .htb-done {
          background: #dcfce7;
          color: #16a34a;
        }
        
        .htb-prog {
          background: #dbeafe;
          color: #1e40af;
        }
        
        /* Hito 3: prog → done transition */
        .h3-dot-a, .h3-dot-b {
          position: absolute;
          left: 0;
          top: 2px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .h3-dot-a { background: #3b82f6; animation: h3da 16s infinite; }
        @keyframes h3da { 0%, 68% { opacity: 1; } 70% { opacity: 0; } 100% { opacity: 0; } }
        .h3-dot-b { background: #22c55e; animation: h3db 16s infinite; }
        @keyframes h3db { 0%, 68% { opacity: 0; } 70% { opacity: 1; } 92% { opacity: 1; } 96% { opacity: 0; } 100% { opacity: 0; } }
        
        .h3-ba, .h3-bb { display: inline; }
        .h3-ba { animation: h3da 16s infinite; }
        .h3-bb { position: absolute; left: 0; top: 0; animation: h3db 16s infinite; }
        
        /* Completion ring */
        .ht-ring {
          position: absolute;
          left: 0;
          top: 2px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid #22c55e;
          z-index: 2;
          pointer-events: none;
          animation: htRing 16s infinite;
        }
        @keyframes htRing {
          0%, 68% { opacity: 0; transform: scale(0.5); }
          70% { opacity: 1; transform: scale(1.5); }
          73% { opacity: 0; transform: scale(2.2); }
          100% { opacity: 0; }
        }
        
        .s2-toast {
          position: absolute;
          top: 8px;
          right: 10px;
          z-index: 10;
          background: white;
          border: 1px solid #dcfce7;
          border-radius: 8px;
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          pointer-events: none;
          animation: toastAnim 16s infinite;
        }
        
        @keyframes toastAnim {
          0%, 68% { opacity: 0; transform: translateY(-8px); }
          71% { opacity: 1; transform: translateY(0); }
          82% { opacity: 1; transform: translateY(0); }
          84% { opacity: 0; transform: translateY(-7px); }
          100% { opacity: 0; }
        }
        
        .s2-toast-icon {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .s2-toast-text {
          font-size: 9px;
          font-weight: 500;
          color: #374151;
        }
        
        .s2-toast-sub {
          font-size: 7px;
          color: #9ca3af;
        }
      `}</style>
      
      <div className="rca-rec-frame">
        
        {/* ═══════════════════════════════════════════ */}
        {/*     SCENE 1: TREE VIEW + REC CREATION      */}
        {/* ═══════════════════════════════════════════ */}
        <div className="scene scene-tree" style={{ display: "flex", flexDirection: "column" }}>
          {/* Header with tabs */}
          <div className="s1-header">
            <div className="s1-tabs">
              <div className="s1-tab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                </svg>
                Diagrama
              </div>
              <div className="s1-tab active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                  <path d="M2 17L12 22L22 17"></path>
                  <path d="M2 12L12 17L22 12"></path>
                </svg>
                Árbol de Causas
              </div>
              <div className="s1-tab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                </svg>
                Recomendaciones
              </div>
            </div>
          </div>
          
          {/* Canvas with tree */}
          <div className="s1-canvas">
            <div className="tree-inner">
            {/* SVG connections */}
            <svg className="tree-svg" viewBox="0 0 920 472">
              {/* Event → MFs */}
              <line x1="480" y1="67" x2="480" y2="80"></line>
              <line x1="230" y1="80" x2="730" y2="80"></line>
              <line x1="230" y1="80" x2="230" y2="91"></line>
              <polygon points="226,91 234,91 230,98"></polygon>
              <line x1="730" y1="80" x2="730" y2="91"></line>
              <polygon points="726,91 734,91 730,98"></polygon>
              
              {/* MF1 → children */}
              <line x1="230" y1="148" x2="230" y2="164"></line>
              <line x1="138" y1="164" x2="323" y2="164"></line>
              <line x1="138" y1="164" x2="138" y2="175"></line>
              <polygon points="134,175 142,175 138,182"></polygon>
              <line x1="323" y1="164" x2="323" y2="175"></line>
              <polygon points="319,175 327,175 323,182"></polygon>
              
              {/* MF2 → children */}
              <line x1="730" y1="148" x2="730" y2="164"></line>
              <line x1="638" y1="164" x2="823" y2="164"></line>
              <line x1="638" y1="164" x2="638" y2="175"></line>
              <polygon points="634,175 642,175 638,182"></polygon>
              <line x1="823" y1="164" x2="823" y2="175"></line>
              <polygon points="819,175 827,175 823,182"></polygon>
              
              {/* Mec1 → children */}
              <line x1="323" y1="232" x2="323" y2="258"></line>
              <line x1="230" y1="258" x2="415" y2="258"></line>
              <line x1="230" y1="258" x2="230" y2="270"></line>
              <polygon points="226,270 234,270 230,277"></polygon>
              <line x1="415" y1="258" x2="415" y2="270"></line>
              <polygon points="411,270 419,270 415,277"></polygon>
              
              {/* Dashed line from cause to popup — now a div */}
            </svg>
            <div className="dash-line"></div>
            
            {/* ─── Level 0: Evento ─── */}
            <div className="mn mn-evento" style={{ left: "400px", top: "20px" }}>
              <div className="mn-h">EVENTO</div>
              <div className="mn-b">Falla en bomba centrífuga P-101A</div>
            </div>
            
            {/* ─── Level 1: Modes ─── */}
            <div className="mn mn-modo" style={{ left: "150px", top: "98px" }}>
              <div className="mn-h">MODO DE FALLA</div>
              <div className="mn-b">Fuga de sello mecánico con vibración excesiva</div>
            </div>
            <div className="mn mn-modo" style={{ left: "650px", top: "98px" }}>
              <div className="mn-h">MODO DE FALLA</div>
              <div className="mn-b">Sobrecalentamiento del motor con disparo térmico</div>
            </div>
            
            {/* ─── Level 2: Mechanisms ─── */}
            <div className="mn mn-desc" style={{ left: "58px", top: "182px" }}>
              <div className="mn-h">DESCARTADA</div>
              <div className="mn-b">Defecto de fabricación del sello</div>
            </div>
            <div className="mn mn-mec" style={{ left: "243px", top: "182px" }}>
              <div className="mn-h">MECANISMO DE FALLA</div>
              <div className="mn-b">Desgaste prematuro del sello por desalineación</div>
            </div>
            <div className="mn mn-desc" style={{ left: "558px", top: "182px" }}>
              <div className="mn-h">DESCARTADA</div>
              <div className="mn-b">Falla del ventilador de refrigeración</div>
            </div>
            <div className="mn mn-mec" style={{ left: "743px", top: "182px" }}>
              <div className="mn-h">MECANISMO DE FALLA</div>
              <div className="mn-b">Obstrucción del circuito de refrigeración</div>
            </div>
            
            {/* ─── Level 3: Root causes ─── */}
            <div className="mn mn-desc" style={{ left: "150px", top: "277px" }}>
              <div className="mn-h">DESCARTADA</div>
              <div className="mn-b">Error en procedimiento de instalación</div>
            </div>
            <div className="mn mn-humana mn-glow" style={{ left: "335px", top: "277px" }}>
              <div className="mn-h">CAUSA HUMANA</div>
              <div className="mn-b">Técnico no siguió procedimiento de alineación</div>
            </div>
            
            {/* Recommendation creation popup */}
            <div className="rec-pop rec-pop-1" style={{ left: "305px", top: "355px" }}>
              <div className="rec-pop-badge rpb-corr">CORRECTIVA</div>
              <div className="rec-pop-title">Capacitar personal en técnicas de alineación de ejes rotativos</div>
              <div className="rec-pop-meta">
                <span>Responsable: Ing. Rodríguez</span>
                <span>Prioridad: Alta</span>
              </div>
              <div className="rec-pop-check">
                <div className="rec-pop-check-icon">
                  <svg viewBox="0 0 16 16">
                    <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                  </svg>
                </div>
                Recomendación creada
              </div>
            </div>
            
            {/* "Go to Recommendations" button */}
            </div>{/* end tree-inner */}
            <div className="goto-rec">
              Ver en panel de Recomendaciones
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* ═══════════════════════════════════════════ */}
        {/*     SCENE 2: RECOMMENDATIONS PANEL         */}
        {/* ═══════════════════════════════════════════ */}
        <div className="scene scene-rec">
          <div className="s2-content">
            {/* List */}
            <div className="s2-list">
              <div className="s2-list-header">4 recomendaciones</div>
              
              <div className="s2-card sel">
                <div className="s2-card-top">
                  <div className="s2-badge s2-b-corr">CORRECTIVA</div>
                  <div className="s2-priority s2-p-alta"></div>
                </div>
                <div className="s2-card-title">Capacitar personal en técnicas de alineación</div>
                <div className="s2-card-meta">
                  <span>Ing. Rodríguez</span>
                  <span>15 Mar 2026</span>
                </div>
                <div className="s2-card-bar">
                  <div className="s2-card-bar-fill" style={{ width: "40%" }}></div>
                </div>
              </div>
              
              <div className="s2-card vis2">
                <div className="s2-card-top">
                  <div className="s2-badge s2-b-corr">CORRECTIVA</div>
                  <div className="s2-priority s2-p-alta"></div>
                </div>
                <div className="s2-card-title">Limpieza del circuito de refrigeración</div>
                <div className="s2-card-meta">
                  <span>Mtto. García</span>
                  <span>28 Feb 2026</span>
                </div>
                <div className="s2-card-bar">
                  <div className="s2-card-bar-fill" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
            
            {/* Detail panel */}
            <div className="s2-detail">
              <div className="s2-det-el d1">
                <div className="det-header-top">
                  <div className="det-title">Capacitar personal en técnicas de alineación de ejes rotativos</div>
                  <div style={{ position: "relative" }}>
                    <div className="det-status det-status-a">En progreso</div>
                    <div className="det-status-b">Completado</div>
                  </div>
                </div>
              </div>
              
              <div className="det-info s2-det-el d2">
                <div className="det-info-item">
                  <div className="det-info-label">Responsable</div>
                  <div className="det-info-value">Ing. Rodríguez</div>
                </div>
                <div className="det-info-item">
                  <div className="det-info-label">Fecha límite</div>
                  <div className="det-info-value">15 Mar 2026</div>
                </div>
                <div className="det-info-item">
                  <div className="det-info-label">Prioridad</div>
                  <div className="det-info-value" style={{ color: "#dc2626", fontWeight: 600 }}>Alta</div>
                </div>
              </div>
              
              <div className="det-progress s2-det-el d3">
                <div className="det-prog-top">
                  <div className="det-prog-label">Progreso general</div>
                  <div className="det-prog-pct">
                    <span className="pct-a">66%</span>
                    <span className="pct-b">100%</span>
                  </div>
                </div>
                <div className="det-bar">
                  <div className="det-bar-fill"></div>
                </div>
              </div>
              
              <div className="s2-det-el d3">
                <div className="det-hitos-label">Hitos de seguimiento</div>
              </div>
              
              <div className="det-timeline">
                <div className="ht h1">
                  <div className="ht-dot ht-dot-done">
                    <svg width="9" height="9" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ht-content">
                    <div className="ht-title">Cotizar programa de capacitación externa</div>
                    <div className="ht-meta">
                      <span>15 Ene 2026</span>
                      <span className="ht-badge htb-done">Completado</span>
                    </div>
                  </div>
                </div>
                
                <div className="ht h2">
                  <div className="ht-dot ht-dot-done">
                    <svg width="9" height="9" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ht-content">
                    <div className="ht-title">Aprobar presupuesto con gerencia</div>
                    <div className="ht-meta">
                      <span>22 Ene 2026</span>
                      <span className="ht-badge htb-done">Completado</span>
                    </div>
                  </div>
                </div>
                
                <div className="ht h3">
                  {/* Dots that transition */}
                  <div className="h3-dot-a">
                    <svg width="9" height="9" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="2.5" fill="white"></circle>
                    </svg>
                  </div>
                  <div className="h3-dot-b">
                    <svg width="9" height="9" viewBox="0 0 16 16">
                      <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="ht-ring"></div>
                  
                  <div className="ht-content">
                    <div className="ht-title">Ejecutar capacitación Grupo 1 — 8 técnicos</div>
                    <div className="ht-meta">
                      <span>10 Feb 2026</span>
                      <span style={{ position: "relative" }}>
                        <span className="ht-badge htb-prog h3-ba">En progreso</span>
                        <span className="ht-badge htb-done h3-bb">Completado</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="s2-toast">
                <div className="s2-toast-icon">
                  <svg width="8" height="8" viewBox="0 0 16 16">
                    <path d="M12 5.5l-5.5 5.5L4 8.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div>
                  <div className="s2-toast-text">Hito completado</div>
                  <div className="s2-toast-sub">Capacitación ejecutada exitosamente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

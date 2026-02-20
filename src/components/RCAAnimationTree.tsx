"use client";

export default function RCAAnimationTree() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .rca-tree-frame {
          width: 100%;
          height: 420px;
          position: relative;
          background: #f9fafb;
          font-family: 'IBM Plex Sans', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ═══════════════════════════════════════════ */
        /*          HEADER — Numbered tabs            */
        /* ═══════════════════════════════════════════ */
        .rt-header {
          background: #262626;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          flex-shrink: 0;
        }
        .rt-tabs {
          display: flex;
          align-items: center;
          gap: 0;
          height: 100%;
        }
        .rt-tab {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 14px;
          font-size: 10px;
          font-weight: 500;
          color: #a3a3a3;
          cursor: default;
          white-space: nowrap;
        }
        .rt-tab-num {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          background: #525252;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #a3a3a3;
        }
        .rt-tab.rt-active {
          background: #374151;
          color: #ffffff;
        }
        .rt-tab.rt-active .rt-tab-num {
          background: #4b5563;
          color: #fff;
        }
        .rt-header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .rt-status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid #22c55e;
          font-size: 9px;
          font-weight: 600;
          color: #22c55e;
        }
        .rt-download-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 5px 12px;
          border-radius: 4px;
          background: #3b82f6;
          font-size: 9px;
          font-weight: 600;
          color: white;
        }

        /* ═══════════════════════════════════════════ */
        /*          CANVAS WITH DOT GRID              */
        /* ═══════════════════════════════════════════ */
        .rt-canvas {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #f8fafc;
        }
        .rt-canvas::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Zoom controls */
        .rt-zoom {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .rt-zoom-row {
          display: flex;
          gap: 2px;
        }
        .rt-zoom-btn {
          width: 24px;
          height: 24px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #6b7280;
        }

        /* ═══════════════════════════════════════════ */
        /*          TREE CONTAINER                    */
        /* ═══════════════════════════════════════════ */
        .rt-tree {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%) scale(0.52);
          transform-origin: top center;
          width: 1000px;
          height: 700px;
          z-index: 2;
        }

        /* SVG Connections */
        .rt-tree-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 1000px;
          height: 700px;
          z-index: 1;
          pointer-events: none;
        }
        .rt-tree-svg line {
          stroke: #525252;
          stroke-width: 1;
        }
        .rt-tree-svg polygon {
          fill: #525252;
        }

        /* Connection animation */
        .rt-conn { opacity: 0; }
        .rt-conn-l1 { animation: rtConnIn 16s infinite 0.4s; }
        .rt-conn-l2 { animation: rtConnIn 16s infinite 1.0s; }
        .rt-conn-l3 { animation: rtConnIn 16s infinite 1.6s; }
        .rt-conn-l4 { animation: rtConnIn 16s infinite 2.2s; }
        .rt-conn-l5 { animation: rtConnIn 16s infinite 2.8s; }
        @keyframes rtConnIn {
          0%, 2% { opacity: 0; }
          5% { opacity: 1; }
          92% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* ═══════════════════════════════════════════ */
        /*          TREE NODES                        */
        /* ═══════════════════════════════════════════ */
        .rt-node {
          position: absolute;
          width: 180px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
          z-index: 2;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          opacity: 0;
          transform: translateY(-6px);
        }
        .rt-node-h {
          text-align: center;
          padding: 5px 8px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: white;
          text-transform: capitalize;
        }
        .rt-node-b {
          padding: 8px 10px;
          font-size: 10px;
          color: #374151;
          line-height: 1.4;
          text-align: center;
        }

        /* Node types — matching app colors */
        .rt-n-evento .rt-node-h { background: #7c3aed; }
        .rt-n-modo .rt-node-h { background: #3b82f6; }
        .rt-n-mec .rt-node-h { background: #ef4444; }
        .rt-n-desc .rt-node-h { background: #9ca3af; }
        .rt-n-desc { opacity: 0.7; }
        .rt-n-humana .rt-node-h { background: #22c55e; }
        .rt-n-gestion .rt-node-h { background: #14b8a6; }

        /* Task tags (yellow pills above nodes) */
        .rt-task-tag {
          position: absolute;
          transform: translateX(-50%);
          background: #fef08a;
          border: 1px solid #eab308;
          border-radius: 12px;
          padding: 4px 10px;
          font-size: 8px;
          font-weight: 500;
          color: #854d0e;
          text-align: center;
          white-space: nowrap;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          z-index: 3;
          opacity: 0;
        }

        /* Node animations — staggered */
        .rt-l0 { animation: rtNodeIn 16s infinite 0.2s both; }
        .rt-l1 { animation: rtNodeIn 16s infinite 0.6s both; }
        .rt-l2 { animation: rtNodeIn 16s infinite 1.2s both; }
        .rt-l3 { animation: rtNodeIn 16s infinite 1.8s both; }
        .rt-l4 { animation: rtNodeIn 16s infinite 2.4s both; }
        .rt-l5 { animation: rtNodeIn 16s infinite 3.0s both; }
        @keyframes rtNodeIn {
          0%, 1% { opacity: 0; transform: translateY(-6px); }
          4% { opacity: 1; transform: translateY(0); }
          92% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Task tag animations */
        .rt-tag-l2 { animation: rtTagIn 16s infinite 1.4s both; }
        .rt-tag-l4 { animation: rtTagIn 16s infinite 2.6s both; }
        .rt-tag-l5 { animation: rtTagIn 16s infinite 3.2s both; }
        @keyframes rtTagIn {
          0%, 2% { opacity: 0; transform: translateX(-50%) translateY(4px); }
          5% { opacity: 1; transform: translateX(-50%) translateY(0); }
          92% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="rca-tree-frame">
        {/* Header with numbered tabs */}
        <div className="rt-header">
          <div className="rt-tabs">
            <div className="rt-tab">
              <span className="rt-tab-num">1</span>
              Info. Preliminar
            </div>
            <div className="rt-tab rt-active">
              <span className="rt-tab-num">2</span>
              Árbol
            </div>
            <div className="rt-tab">
              <span className="rt-tab-num">3</span>
              Tareas
            </div>
            <div className="rt-tab">
              <span className="rt-tab-num">4</span>
              Evidencias
            </div>
            <div className="rt-tab">
              <span className="rt-tab-num">5</span>
              Recomendaciones
            </div>
          </div>
        </div>

        {/* Canvas with tree */}
        <div className="rt-canvas">
          {/* Zoom controls */}
          <div className="rt-zoom">
            <div className="rt-zoom-row">
              <div className="rt-zoom-btn">↑</div>
            </div>
            <div className="rt-zoom-row">
              <div className="rt-zoom-btn">←</div>
              <div className="rt-zoom-btn">→</div>
              <div className="rt-zoom-btn">+</div>
            </div>
            <div className="rt-zoom-row">
              <div className="rt-zoom-btn">↓</div>
              <div className="rt-zoom-btn" style={{ marginLeft: 52 }}>−</div>
            </div>
            <div className="rt-zoom-row" style={{ marginTop: 4 }}>
              <div className="rt-zoom-btn" style={{ width: 78 }}>⛶</div>
            </div>
          </div>

          <div className="rt-tree">
            {/* SVG Connections — arrows point UP toward parent */}
            <svg className="rt-tree-svg">
              {/* L1 → L0: Modos to Evento (arrows up) */}
              <g className="rt-conn rt-conn-l1">
                {/* From left modo top center up */}
                <line x1="350" y1="115" x2="350" y2="95" />
                {/* Horizontal bar */}
                <line x1="350" y1="95" x2="650" y2="95" />
                {/* Center vertical to evento bottom */}
                <line x1="500" y1="95" x2="500" y2="78" />
                {/* Small solid triangle pointing up */}
                <polygon points="496,78 504,78 500,71" />
                {/* From right modo top */}
                <line x1="650" y1="115" x2="650" y2="95" />
              </g>

              {/* L2 → L1: Mechanisms to Modo izq (arrows up) */}
              <g className="rt-conn rt-conn-l2">
                {/* From mechanism nodes top up */}
                <line x1="160" y1="265" x2="160" y2="215" />
                <line x1="350" y1="265" x2="350" y2="215" />
                <line x1="540" y1="265" x2="540" y2="215" />
                {/* Horizontal bar */}
                <line x1="160" y1="215" x2="540" y2="215" />
                {/* Up to modo bottom */}
                <line x1="350" y1="215" x2="350" y2="192" />
                {/* Small solid triangle pointing up */}
                <polygon points="346,192 354,192 350,185" />
              </g>

              {/* L3 → L2: Causa Humana to Mecanismo (arrow up) */}
              <g className="rt-conn rt-conn-l3">
                <line x1="160" y1="410" x2="160" y2="345" />
                {/* Small solid triangle pointing up */}
                <polygon points="156,345 164,345 160,338" />
              </g>

              {/* L4 → L3: Root causes to Causa Humana (arrows up) */}
              <g className="rt-conn rt-conn-l4">
                <line x1="80" y1="580" x2="80" y2="540" />
                <line x1="320" y1="580" x2="320" y2="540" />
                <line x1="80" y1="540" x2="320" y2="540" />
                <line x1="160" y1="540" x2="160" y2="500" />
                {/* Small solid triangle pointing up */}
                <polygon points="156,500 164,500 160,493" />
              </g>
            </svg>

            {/* ════════ Level 0: Evento ════════ */}
            <div className="rt-node rt-n-evento rt-l0" style={{ top: 0, left: 410 }}>
              <div className="rt-node-h">Evento</div>
              <div className="rt-node-b">Falla repetitiva en SERVICE WATER PUMP P-8702B, MOTOR</div>
            </div>

            {/* ════════ Level 1: Modos de Falla ════════ */}
            <div className="rt-node rt-n-modo rt-l1" style={{ top: 115, left: 260 }}>
              <div className="rt-node-h">Modo de Falla</div>
              <div className="rt-node-b">Ruido anormal durante operación del motor</div>
            </div>
            <div className="rt-node rt-n-modo rt-l1" style={{ top: 115, left: 560 }}>
              <div className="rt-node-h">Modo de Falla</div>
              <div className="rt-node-b">Paro inesperado del motor de la bomba</div>
            </div>

            {/* ════════ Level 2: Task tags + Mechanisms ════════ */}
            {/* Task tags (centered above nodes) */}
            <div className="rt-task-tag rt-tag-l2" style={{ top: 245, left: 160 }}>
              Realizar análisis de vibraciones
            </div>
            <div className="rt-task-tag rt-tag-l2" style={{ top: 245, left: 350 }}>
              Pruebas eléctricas del motor
            </div>
            <div className="rt-task-tag rt-tag-l2" style={{ top: 245, left: 540 }}>
              Inspeccionar rodamientos y rotor
            </div>

            {/* Mechanisms */}
            <div className="rt-node rt-n-mec rt-l2" style={{ top: 265, left: 70 }}>
              <div className="rt-node-h">Mecanismo de Falla</div>
              <div className="rt-node-b">Desbalance o desalineación del rotor causa ruido</div>
            </div>
            <div className="rt-node rt-n-desc rt-l2" style={{ top: 265, left: 260 }}>
              <div className="rt-node-h">Descartada</div>
              <div className="rt-node-b">Problemas eléctricos en motor generan ruido</div>
            </div>
            <div className="rt-node rt-n-desc rt-l2" style={{ top: 265, left: 450 }}>
              <div className="rt-node-h">Descartada</div>
              <div className="rt-node-b">Desgaste en componentes internos</div>
            </div>

            {/* ════════ Level 3: Task tag + Causa Humana ════════ */}
            <div className="rt-task-tag rt-tag-l4" style={{ top: 390, left: 160 }}>
              Verificar alineación motor-bomba
            </div>
            <div className="rt-node rt-n-humana rt-l3" style={{ top: 410, left: 70 }}>
              <div className="rt-node-h">Causa Humana</div>
              <div className="rt-node-b">Errores en instalación o montaje causan desalineación</div>
            </div>

            {/* ════════ Level 4: Root causes ════════ */}
            <div className="rt-task-tag rt-tag-l5" style={{ top: 560, left: 320 }}>
              Revisión de procedimientos
            </div>
            <div className="rt-node rt-n-desc rt-l4" style={{ top: 580, left: -10 }}>
              <div className="rt-node-h">Descartada</div>
              <div className="rt-node-b">Personal sin competencias técnicas</div>
            </div>
            <div className="rt-node rt-n-gestion rt-l4" style={{ top: 580, left: 230 }}>
              <div className="rt-node-h">Causa de Gestión</div>
              <div className="rt-node-b">Procedimientos inadecuados o no seguidos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

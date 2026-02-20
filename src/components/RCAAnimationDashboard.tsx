"use client";

export default function RCAAnimationDashboard() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .rca-dash-frame {
          width: 100%;
          height: 400px;
          position: relative;
          background: #f9fafb;
          font-family: 'IBM Plex Sans', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ═══════════════════════════════════════════ */
        /*          TOP HEADER / NAV                  */
        /* ═══════════════════════════════════════════ */
        .rd-header {
          background: #262626;
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 0;
          flex-shrink: 0;
        }
        .rd-nav {
          display: flex;
          align-items: center;
          gap: 0;
          height: 100%;
        }
        .rd-nav-link {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 12px;
          font-size: 10px;
          font-weight: 500;
          color: #a3a3a3;
          cursor: default;
          border-bottom: 2px solid transparent;
          white-space: nowrap;
        }
        .rd-nav-link svg { width: 12px; height: 12px; flex-shrink: 0; }
        .rd-nav-link.rd-active {
          color: #ffffff;
          border-bottom-color: #0ea5e9;
          font-weight: 600;
        }

        /* ═══════════════════════════════════════════ */
        /*          DASHBOARD CONTENT                 */
        /* ═══════════════════════════════════════════ */
        .rd-dash {
          flex: 1;
          overflow: hidden;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Title row */
        .rd-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .rd-title {
          font-size: 12px;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rd-title svg { width: 14px; height: 14px; }
        .rd-period {
          display: flex;
          gap: 3px;
        }
        .rd-period-btn {
          font-size: 7px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          color: #6b7280;
          background: white;
          cursor: default;
        }
        .rd-period-btn.rd-active {
          background: #0369a1;
          color: white;
          border-color: #0369a1;
        }

        /* ── KPI Cards Row ── */
        .rd-kpi-row {
          display: flex;
          gap: 8px;
        }
        .rd-kpi-card {
          flex: 1;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(8px);
        }
        .rd-kpi-card.rdk1 { animation: rdkIn1 12s infinite; }
        .rd-kpi-card.rdk2 { animation: rdkIn2 12s infinite; }
        .rd-kpi-card.rdk3 { animation: rdkIn3 12s infinite; }
        .rd-kpi-card.rdk4 { animation: rdkIn4 12s infinite; }
        @keyframes rdkIn1 {
          0%,3% { opacity:0; transform:translateY(8px); }
          6% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }
        @keyframes rdkIn2 {
          0%,5% { opacity:0; transform:translateY(8px); }
          8% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }
        @keyframes rdkIn3 {
          0%,7% { opacity:0; transform:translateY(8px); }
          10% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }
        @keyframes rdkIn4 {
          0%,9% { opacity:0; transform:translateY(8px); }
          12% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }

        .rd-kpi-label {
          font-size: 7px;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .rd-kpi-value-row {
          display: flex;
          align-items: baseline;
          gap: 5px;
        }
        .rd-kpi-value {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
        }
        .rd-kpi-unit {
          font-size: 8px;
          font-weight: 500;
          color: #9ca3af;
        }
        .rd-kpi-change {
          font-size: 6.5px;
          font-weight: 600;
          padding: 1px 5px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          gap: 2px;
          margin-left: auto;
        }
        .rd-kpi-change svg { width: 7px; height: 7px; }
        .rd-kpi-up { background: #dcfce7; color: #16a34a; }

        /* Mini sparkline */
        .rd-kpi-spark {
          margin-top: 1px;
          height: 18px;
          position: relative;
        }
        .rd-kpi-spark svg { width: 100%; height: 100%; }

        /* Top border accent */
        .rd-kpi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
        }
        .rd-accent-blue::before { background: #0369a1; }
        .rd-accent-green::before { background: #16a34a; }
        .rd-accent-purple::before { background: #7c3aed; }
        .rd-accent-amber::before { background: #d97706; }

        /* ── Charts Row ── */
        .rd-charts-row {
          display: flex;
          gap: 8px;
          flex: 1;
          min-height: 0;
        }

        .rd-chart-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
        }
        .rd-chart-card.rdc1 {
          animation: rdcIn1 12s infinite;
          flex: 1.6;
        }
        @keyframes rdcIn1 {
          0%,12% { opacity:0; transform:translateY(8px); }
          16% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }
        .rd-chart-card.rdc2 {
          animation: rdcIn2 12s infinite;
          flex: 1;
        }
        @keyframes rdcIn2 {
          0%,15% { opacity:0; transform:translateY(8px); }
          19% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }

        .rd-chart-title {
          font-size: 8px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rd-chart-badge {
          font-size: 6px;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 3px;
          background: #f3f4f6;
          color: #6b7280;
          margin-left: auto;
        }

        /* ── Bar chart ── */
        .rd-bar-chart {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 5px;
          padding-bottom: 14px;
          position: relative;
        }
        .rd-bar-chart::after {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 0; right: 0;
          height: 1px;
          background: #f3f4f6;
        }
        .rd-bar-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
        }
        .rd-bar-stack {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1px;
          align-items: center;
        }
        .rd-bar {
          width: 70%;
          border-radius: 2px 2px 0 0;
          min-height: 0;
          animation: rdBarAppear 12s infinite;
          transform-origin: bottom;
        }
        @keyframes rdBarAppear {
          0%, 18% { transform: scaleY(0); }
          24% { transform: scaleY(1); }
          90% { transform: scaleY(1); }
          95% { transform: scaleY(0); }
          100% { transform: scaleY(0); }
        }
        .rd-bar-label {
          font-size: 6px;
          color: #9ca3af;
          font-weight: 500;
          position: absolute;
          bottom: -12px;
          white-space: nowrap;
        }
        .rd-bar-closed { background: #22c55e; }
        .rd-bar-open { background: #3b82f6; }
        .rd-bar-overdue { background: #ef4444; }

        .rd-bar-legend {
          display: flex;
          gap: 8px;
          margin-top: 4px;
          padding-top: 2px;
        }
        .rd-bar-legend-item {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 6px;
          color: #6b7280;
          font-weight: 500;
        }
        .rd-bar-legend-dot {
          width: 5px;
          height: 5px;
          border-radius: 1px;
        }

        /* ── Donut chart ── */
        .rd-donut-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .rd-donut-container {
          position: relative;
          width: 80px;
          height: 80px;
        }
        .rd-donut-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .rd-donut-ring {
          fill: none;
          stroke: #f3f4f6;
          stroke-width: 8;
        }
        .rd-donut-seg {
          fill: none;
          stroke-width: 8;
          stroke-linecap: round;
          animation: rdDonutDraw 12s infinite;
        }
        @keyframes rdDonutDraw {
          0%, 20% { stroke-dashoffset: var(--circ); }
          30% { stroke-dashoffset: var(--offset); }
          90% { stroke-dashoffset: var(--offset); }
          95% { stroke-dashoffset: var(--circ); }
          100% { stroke-dashoffset: var(--circ); }
        }
        .rd-donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .rd-donut-center-val {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
          opacity: 0;
          animation: rdDonutVal 12s infinite;
        }
        @keyframes rdDonutVal {
          0%, 28% { opacity: 0; }
          32% { opacity: 1; }
          90% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 0; }
        }
        .rd-donut-center-label {
          font-size: 6px;
          color: #9ca3af;
          font-weight: 500;
          opacity: 0;
          animation: rdDonutVal 12s infinite;
        }
        .rd-donut-legend {
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 100%;
        }
        .rd-donut-legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 7px;
          color: #374151;
          font-weight: 500;
        }
        .rd-donut-legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .rd-donut-legend-val {
          margin-left: auto;
          font-weight: 700;
          color: #111827;
        }

        /* ── Bottom row ── */
        .rd-bottom-row {
          display: flex;
          gap: 8px;
        }

        /* Recent events table */
        .rd-events-card {
          flex: 1.2;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 8px 12px;
          overflow: hidden;
          opacity: 0;
          animation: rdBIn1 12s infinite;
        }
        @keyframes rdBIn1 {
          0%,18% { opacity:0; transform:translateY(6px); }
          22% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }

        .rd-ev-table {
          width: 100%;
          font-size: 7px;
          border-collapse: collapse;
        }
        .rd-ev-table th {
          text-align: left;
          font-weight: 600;
          color: #9ca3af;
          font-size: 6px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          padding: 0 5px 4px;
          border-bottom: 1px solid #f3f4f6;
        }
        .rd-ev-table td {
          padding: 4px 5px;
          color: #374151;
          font-weight: 500;
          border-bottom: 1px solid #f9fafb;
        }
        .rd-ev-table tr:last-child td { border-bottom: none; }
        .rd-ev-status {
          font-size: 5.5px;
          font-weight: 600;
          padding: 1px 4px;
          border-radius: 3px;
          white-space: nowrap;
        }
        .rd-ev-complete { background: #dcfce7; color: #16a34a; }
        .rd-ev-progress { background: #dbeafe; color: #1e40af; }
        .rd-ev-pending { background: #fef3c7; color: #92400e; }
        .rd-ev-equip {
          font-size: 6px;
          color: #9ca3af;
          font-weight: 400;
        }

        /* Avg metrics card */
        .rd-avg-card {
          flex: 0.8;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          animation: rdBIn2 12s infinite;
        }
        @keyframes rdBIn2 {
          0%,20% { opacity:0; transform:translateY(6px); }
          24% { opacity:1; transform:translateY(0); }
          90% { opacity:1; } 95% { opacity:0; } 100% { opacity:0; }
        }

        .rd-avg-metric {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .rd-avg-metric:last-child { border-bottom: none; }
        .rd-avg-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rd-avg-icon svg { width: 10px; height: 10px; }
        .rd-avg-icon.rd-blue { background: #dbeafe; }
        .rd-avg-icon.rd-green { background: #dcfce7; }
        .rd-avg-icon.rd-purple { background: #f3e8ff; }
        .rd-avg-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          flex: 1;
        }
        .rd-avg-label {
          font-size: 6px;
          color: #9ca3af;
          font-weight: 500;
        }
        .rd-avg-val {
          font-size: 9px;
          font-weight: 700;
          color: #111827;
        }
        .rd-avg-target {
          font-size: 5.5px;
          color: #9ca3af;
        }
        .rd-avg-bar {
          height: 3px;
          background: #f3f4f6;
          border-radius: 3px;
          margin-top: 1px;
          overflow: hidden;
        }
        .rd-avg-bar-fill {
          height: 100%;
          border-radius: 3px;
          animation: rdAvgBarGrow 12s infinite;
        }
        @keyframes rdAvgBarGrow {
          0%, 24% { width: 0%; }
          30% { width: var(--w); }
          90% { width: var(--w); }
          95% { width: 0%; }
          100% { width: 0%; }
        }
        .rd-avg-bar-fill.rd-blue { background: #3b82f6; }
        .rd-avg-bar-fill.rd-green { background: #22c55e; }
        .rd-avg-bar-fill.rd-purple { background: #7c3aed; }
      `}</style>

      <div className="rca-dash-frame">
        {/* Header */}
        <div className="rd-header">
          <div className="rd-nav">
            <div className="rd-nav-link rd-active">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              </svg>
              Dashboard
            </div>
            <div className="rd-nav-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path>
              </svg>
              Proyectos
            </div>
            <div className="rd-nav-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
              </svg>
              Recomendaciones
            </div>
            <div className="rd-nav-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Reportes
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="rd-dash">
          {/* Title */}
          <div className="rd-title-row">
            <div className="rd-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              KPIs — Rendimiento RCA
            </div>
            <div className="rd-period">
              <div className="rd-period-btn">7 días</div>
              <div className="rd-period-btn rd-active">30 días</div>
              <div className="rd-period-btn">90 días</div>
              <div className="rd-period-btn">Año</div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="rd-kpi-row">
            {/* KPI 1 */}
            <div className="rd-kpi-card rdk1 rd-accent-blue">
              <div className="rd-kpi-label">Análisis completados</div>
              <div className="rd-kpi-value-row">
                <div className="rd-kpi-value">12</div>
                <div className="rd-kpi-unit">este mes</div>
                <div className="rd-kpi-change rd-kpi-up">
                  <svg viewBox="0 0 16 16"><path d="M8 3v10M4 7l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                  +20%
                </div>
              </div>
              <div className="rd-kpi-spark">
                <svg viewBox="0 0 120 18" preserveAspectRatio="none">
                  <polyline points="0,16 15,12 30,14 45,9 60,10 75,7 90,5 105,3 120,1" fill="none" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  <polyline points="0,16 15,12 30,14 45,9 60,10 75,7 90,5 105,3 120,1 120,18 0,18" fill="url(#rdSpk1)" opacity="0.15"></polyline>
                  <defs><linearGradient id="rdSpk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0369a1"></stop><stop offset="100%" stopColor="#0369a1" stopOpacity="0"></stop></linearGradient></defs>
                </svg>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="rd-kpi-card rdk2 rd-accent-green">
              <div className="rd-kpi-label">Tiempo promedio cierre</div>
              <div className="rd-kpi-value-row">
                <div className="rd-kpi-value">14.2</div>
                <div className="rd-kpi-unit">días</div>
                <div className="rd-kpi-change rd-kpi-up">
                  <svg viewBox="0 0 16 16"><path d="M8 13V3M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                  -3.1d
                </div>
              </div>
              <div className="rd-kpi-spark">
                <svg viewBox="0 0 120 18" preserveAspectRatio="none">
                  <polyline points="0,3 15,5 30,7 45,4 60,9 75,7 90,10 105,12 120,14" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  <polyline points="0,3 15,5 30,7 45,4 60,9 75,7 90,10 105,12 120,14 120,18 0,18" fill="url(#rdSpk2)" opacity="0.15"></polyline>
                  <defs><linearGradient id="rdSpk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#16a34a"></stop><stop offset="100%" stopColor="#16a34a" stopOpacity="0"></stop></linearGradient></defs>
                </svg>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="rd-kpi-card rdk3 rd-accent-purple">
              <div className="rd-kpi-label">Efectividad recomendaciones</div>
              <div className="rd-kpi-value-row">
                <div className="rd-kpi-value">87%</div>
                <div className="rd-kpi-unit">implementadas</div>
                <div className="rd-kpi-change rd-kpi-up">
                  <svg viewBox="0 0 16 16"><path d="M8 3v10M4 7l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                  +5%
                </div>
              </div>
              <div className="rd-kpi-spark">
                <svg viewBox="0 0 120 18" preserveAspectRatio="none">
                  <polyline points="0,14 15,12 30,10 45,12 60,8 75,7 90,5 105,4 120,3" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  <polyline points="0,14 15,12 30,10 45,12 60,8 75,7 90,5 105,4 120,3 120,18 0,18" fill="url(#rdSpk3)" opacity="0.15"></polyline>
                  <defs><linearGradient id="rdSpk3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c3aed"></stop><stop offset="100%" stopColor="#7c3aed" stopOpacity="0"></stop></linearGradient></defs>
                </svg>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="rd-kpi-card rdk4 rd-accent-amber">
              <div className="rd-kpi-label">Tasa de recurrencia</div>
              <div className="rd-kpi-value-row">
                <div className="rd-kpi-value">4.5%</div>
                <div className="rd-kpi-unit">eventos</div>
                <div className="rd-kpi-change rd-kpi-up">
                  <svg viewBox="0 0 16 16"><path d="M8 13V3M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                  -1.2%
                </div>
              </div>
              <div className="rd-kpi-spark">
                <svg viewBox="0 0 120 18" preserveAspectRatio="none">
                  <polyline points="0,3 15,5 30,4 45,7 60,9 75,10 90,12 105,14 120,16" fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  <polyline points="0,3 15,5 30,4 45,7 60,9 75,10 90,12 105,14 120,16 120,18 0,18" fill="url(#rdSpk4)" opacity="0.15"></polyline>
                  <defs><linearGradient id="rdSpk4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d97706"></stop><stop offset="100%" stopColor="#d97706" stopOpacity="0"></stop></linearGradient></defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="rd-charts-row">
            {/* Bar chart */}
            <div className="rd-chart-card rdc1">
              <div className="rd-chart-title">
                Análisis RCA por mes
                <div className="rd-chart-badge">Últimos 6 meses</div>
              </div>
              <div className="rd-bar-chart">
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "6px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "14px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "32px" }}></div>
                  </div>
                  <div className="rd-bar-label">Sep</div>
                </div>
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "4px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "10px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "40px" }}></div>
                  </div>
                  <div className="rd-bar-label">Oct</div>
                </div>
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "8px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "16px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "28px" }}></div>
                  </div>
                  <div className="rd-bar-label">Nov</div>
                </div>
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "3px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "10px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "44px" }}></div>
                  </div>
                  <div className="rd-bar-label">Dic</div>
                </div>
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "5px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "18px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "36px" }}></div>
                  </div>
                  <div className="rd-bar-label">Ene</div>
                </div>
                <div className="rd-bar-group">
                  <div className="rd-bar-stack">
                    <div className="rd-bar rd-bar-overdue" style={{ height: "2px" }}></div>
                    <div className="rd-bar rd-bar-open" style={{ height: "8px" }}></div>
                    <div className="rd-bar rd-bar-closed" style={{ height: "48px" }}></div>
                  </div>
                  <div className="rd-bar-label">Feb</div>
                </div>
              </div>
              <div className="rd-bar-legend">
                <div className="rd-bar-legend-item"><div className="rd-bar-legend-dot" style={{ background: "#22c55e" }}></div>Cerrados</div>
                <div className="rd-bar-legend-item"><div className="rd-bar-legend-dot" style={{ background: "#3b82f6" }}></div>En progreso</div>
                <div className="rd-bar-legend-item"><div className="rd-bar-legend-dot" style={{ background: "#ef4444" }}></div>Vencidos</div>
              </div>
            </div>

            {/* Donut chart */}
            <div className="rd-chart-card rdc2">
              <div className="rd-chart-title">
                Distribución por tipo de causa
                <div className="rd-chart-badge">Acumulado</div>
              </div>
              <div className="rd-donut-wrap">
                <div className="rd-donut-container">
                  <svg className="rd-donut-svg" viewBox="0 0 42 42">
                    <circle className="rd-donut-ring" cx="21" cy="21" r="16"></circle>
                    <circle className="rd-donut-seg" cx="21" cy="21" r="16" stroke="#22c55e" strokeDasharray="42.2 100.5" style={{ "--circ": "100.5", "--offset": "58.3" } as React.CSSProperties}></circle>
                    <circle className="rd-donut-seg" cx="21" cy="21" r="16" stroke="#3b82f6" strokeDasharray="28.1 100.5" strokeDashoffset="-42.2" style={{ "--circ": "100.5", "--offset": "72.4" } as React.CSSProperties}></circle>
                    <circle className="rd-donut-seg" cx="21" cy="21" r="16" stroke="#f59e0b" strokeDasharray="18.1 100.5" strokeDashoffset="-70.3" style={{ "--circ": "100.5", "--offset": "82.4" } as React.CSSProperties}></circle>
                    <circle className="rd-donut-seg" cx="21" cy="21" r="16" stroke="#8b5cf6" strokeDasharray="12.1 100.5" strokeDashoffset="-88.4" style={{ "--circ": "100.5", "--offset": "88.4" } as React.CSSProperties}></circle>
                  </svg>
                  <div className="rd-donut-center">
                    <div className="rd-donut-center-val">156</div>
                    <div className="rd-donut-center-label">causas totales</div>
                  </div>
                </div>
                <div className="rd-donut-legend">
                  <div className="rd-donut-legend-item"><div className="rd-donut-legend-dot" style={{ background: "#22c55e" }}></div>Humana<div className="rd-donut-legend-val">42%</div></div>
                  <div className="rd-donut-legend-item"><div className="rd-donut-legend-dot" style={{ background: "#3b82f6" }}></div>Gestión<div className="rd-donut-legend-val">28%</div></div>
                  <div className="rd-donut-legend-item"><div className="rd-donut-legend-dot" style={{ background: "#f59e0b" }}></div>Física<div className="rd-donut-legend-val">18%</div></div>
                  <div className="rd-donut-legend-item"><div className="rd-donut-legend-dot" style={{ background: "#8b5cf6" }}></div>Otro<div className="rd-donut-legend-val">12%</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="rd-bottom-row">
            {/* Recent events */}
            <div className="rd-events-card">
              <div className="rd-chart-title">
                Eventos recientes
                <div className="rd-chart-badge">Últimos 5</div>
              </div>
              <table className="rd-ev-table">
                <thead>
                  <tr><th>Proyecto</th><th>Evento</th><th>Equipo</th><th>Estado</th><th>Días</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600, color: "#0369a1" }}>P-101A</td>
                    <td>Falla bomba centrífuga</td>
                    <td className="rd-ev-equip">Bomba P-101A</td>
                    <td><span className="rd-ev-status rd-ev-complete">Completo</span></td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: "#0369a1" }}>P-205B</td>
                    <td>Vibración excesiva compresor</td>
                    <td className="rd-ev-equip">Compresor C-205B</td>
                    <td><span className="rd-ev-status rd-ev-progress">En progreso</span></td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: "#0369a1" }}>P-312</td>
                    <td>Fuga en válvula de control</td>
                    <td className="rd-ev-equip">Válvula FV-312</td>
                    <td><span className="rd-ev-status rd-ev-progress">En progreso</span></td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600, color: "#0369a1" }}>P-418</td>
                    <td>Disparo térmico motor</td>
                    <td className="rd-ev-equip">Motor M-418</td>
                    <td><span className="rd-ev-status rd-ev-pending">Pendiente</span></td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Avg metrics */}
            <div className="rd-avg-card">
              <div className="rd-chart-title">Métricas de proceso</div>

              <div className="rd-avg-metric">
                <div className="rd-avg-icon rd-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="rd-avg-text">
                  <div className="rd-avg-label">Tiempo hasta inicio análisis</div>
                  <div className="rd-avg-val">2.3 días</div>
                </div>
                <div className="rd-avg-target">Meta: 3d</div>
              </div>
              <div className="rd-avg-bar"><div className="rd-avg-bar-fill rd-blue" style={{ "--w": "77%" } as React.CSSProperties}></div></div>

              <div className="rd-avg-metric">
                <div className="rd-avg-icon rd-green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>
                </div>
                <div className="rd-avg-text">
                  <div className="rd-avg-label">Recomendaciones a tiempo</div>
                  <div className="rd-avg-val">92%</div>
                </div>
                <div className="rd-avg-target">Meta: 95%</div>
              </div>
              <div className="rd-avg-bar"><div className="rd-avg-bar-fill rd-green" style={{ "--w": "92%" } as React.CSSProperties}></div></div>

              <div className="rd-avg-metric">
                <div className="rd-avg-icon rd-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>
                </div>
                <div className="rd-avg-text">
                  <div className="rd-avg-label">Participación por evento</div>
                  <div className="rd-avg-val">4.8 personas</div>
                </div>
                <div className="rd-avg-target">Promedio</div>
              </div>
              <div className="rd-avg-bar"><div className="rd-avg-bar-fill rd-purple" style={{ "--w": "60%" } as React.CSSProperties}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

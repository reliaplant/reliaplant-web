"use client";

export default function RCMAnimationFunctions() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        .rcm-func-frame {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          position: relative;
          font-family: 'IBM Plex Sans', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .func-container {
          width: 100%;
          max-width: 500px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 20px;
          position: relative;
          overflow: hidden;
        }
        
        .func-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .func-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .func-title-group {
          flex: 1;
        }
        
        .func-tag {
          font-size: 7px;
          font-weight: 700;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        
        .func-title {
          font-size: 11px;
          font-weight: 700;
          color: #111827;
        }
        
        .func-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .func-item {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transform: translateX(-10px);
          animation: funcIn 16s infinite;
        }
        
        .func-item:nth-child(1) { animation-delay: 0.2s; }
        .func-item:nth-child(2) { animation-delay: 0.4s; }
        .func-item:nth-child(3) { animation-delay: 0.6s; }
        .func-item:nth-child(4) { animation-delay: 0.8s; }
        
        @keyframes funcIn {
          0%, 5% { opacity: 0; transform: translateX(-10px); }
          10% { opacity: 1; transform: translateX(0); }
          95% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(10px); }
        }
        
        .func-num {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-size: 9px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .func-text {
          flex: 1;
        }
        
        .func-name {
          font-size: 8px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 2px;
        }
        
        .func-desc {
          font-size: 6.5px;
          color: #6b7280;
          line-height: 1.4;
        }
        
        .func-badge {
          font-size: 6px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          background: #dbeafe;
          color: #2563eb;
        }
        
        .pulse-dot {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
      
      <div className="rcm-func-frame">
        <div className="func-container">
          <div className="pulse-dot"></div>
          
          <div className="func-header">
            <div className="func-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"></path>
              </svg>
            </div>
            <div className="func-title-group">
              <div className="func-tag">Activo: Bomba Centrífuga P-101A</div>
              <div className="func-title">Funciones Definidas</div>
            </div>
          </div>
          
          <div className="func-list">
            <div className="func-item">
              <div className="func-num">P1</div>
              <div className="func-text">
                <div className="func-name">Transferir fluido de enfriamiento</div>
                <div className="func-desc">Mantener caudal de 150 m³/h a presión de 5 bar</div>
              </div>
              <div className="func-badge">Primaria</div>
            </div>
            
            <div className="func-item">
              <div className="func-num">P2</div>
              <div className="func-text">
                <div className="func-name">Mantener presión en el sistema</div>
                <div className="func-desc">Presión operativa entre 4.5 - 5.5 bar</div>
              </div>
              <div className="func-badge">Primaria</div>
            </div>
            
            <div className="func-item">
              <div className="func-num">S1</div>
              <div className="func-text">
                <div className="func-name">Contener fluido sin fugas</div>
                <div className="func-desc">Sello mecánico debe prevenir fugas &gt; 10 ml/h</div>
              </div>
              <div className="func-badge">Secundaria</div>
            </div>
            
            <div className="func-item">
              <div className="func-num">S2</div>
              <div className="func-text">
                <div className="func-name">Operar sin vibración excesiva</div>
                <div className="func-desc">Vibración &lt; 4.5 mm/s según ISO 10816</div>
              </div>
              <div className="func-badge">Secundaria</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

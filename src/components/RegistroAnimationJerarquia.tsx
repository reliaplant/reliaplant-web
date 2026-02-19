"use client";

export default function RegistroAnimationJerarquia() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        .reg-jerarquia-frame {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
          position: relative;
          font-family: 'IBM Plex Sans', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .tree-container {
          width: 100%;
          max-width: 500px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          padding: 20px;
          position: relative;
          overflow: visible;
        }
        
        .tree-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .tree-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .tree-title-group {
          flex: 1;
        }
        
        .tree-tag {
          font-size: 7px;
          font-weight: 700;
          color: #14b8a6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        
        .tree-title {
          font-size: 11px;
          font-weight: 700;
          color: #111827;
        }
        
        .tree-node {
          position: relative;
          padding-left: 0;
          margin-bottom: 4px;
        }
        
        .tree-node.level-1 {
          padding-left: 20px;
          opacity: 0;
          animation: nodeIn 16s infinite;
        }
        
        .tree-node.level-2 {
          padding-left: 40px;
          opacity: 0;
          animation: nodeIn 16s infinite;
        }
        
        .tree-node.level-1:nth-child(2) { animation-delay: 0.2s; }
        .tree-node.level-2:nth-child(3) { animation-delay: 0.4s; }
        .tree-node.level-2:nth-child(4) { animation-delay: 0.6s; }
        .tree-node.level-2:nth-child(5) { animation-delay: 0.8s; }
        
        @keyframes nodeIn {
          0%, 5% { opacity: 0; transform: translateX(-8px); }
          10% { opacity: 1; transform: translateX(0); }
          95% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(8px); }
        }
        
        .tree-node::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 12px;
          width: 12px;
          height: 1px;
          background: #d1d5db;
        }
        
        .tree-node.level-0::before {
          display: none;
        }
        
        .node-content {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        
        .node-content:hover {
          background: #f0fdfa;
          border-color: #14b8a6;
        }
        
        .node-dot {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 6px;
          font-weight: 700;
          color: white;
        }
        
        .node-dot.plant {
          background: linear-gradient(135deg, #14b8a6, #0d9488);
        }
        
        .node-dot.area {
          background: linear-gradient(135deg, #22c55e, #16a34a);
        }
        
        .node-dot.system {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        
        .node-text {
          flex: 1;
        }
        
        .node-name {
          font-size: 8px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1px;
        }
        
        .node-code {
          font-size: 6px;
          color: #6b7280;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .node-count {
          font-size: 6px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 10px;
          background: #e0f2fe;
          color: #0369a1;
        }
        
        .expand-icon {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          background: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        
        .tree-node.expanded .expand-icon {
          transform: rotate(90deg);
        }
      `}</style>
      
      <div className="reg-jerarquia-frame">
        <div className="tree-container">
          <div className="tree-header">
            <div className="tree-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path>
              </svg>
            </div>
            <div className="tree-title-group">
              <div className="tree-tag">Taxonomía de Activos</div>
              <div className="tree-title">Estructura Jerárquica</div>
            </div>
          </div>
          
          <div>
            <div className="tree-node level-0">
              <div className="node-content">
                <div className="node-dot plant">PL</div>
                <div className="node-text">
                  <div className="node-name">Planta de Producción Principal</div>
                  <div className="node-code">PLANT-001</div>
                </div>
                <div className="node-count">3 áreas</div>
                <div className="expand-icon">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="tree-node level-1 expanded">
              <div className="node-content">
                <div className="node-dot area">AR</div>
                <div className="node-text">
                  <div className="node-name">Área de Enfriamiento</div>
                  <div className="node-code">AREA-COOL-001</div>
                </div>
                <div className="node-count">4 sistemas</div>
                <div className="expand-icon">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="tree-node level-2">
              <div className="node-content">
                <div className="node-dot system">SY</div>
                <div className="node-text">
                  <div className="node-name">Sistema de Bombeo Principal</div>
                  <div className="node-code">SYS-PUMP-001</div>
                </div>
                <div className="node-count">2 bombas</div>
              </div>
            </div>
            
            <div className="tree-node level-2">
              <div className="node-content">
                <div className="node-dot system">SY</div>
                <div className="node-text">
                  <div className="node-name">Sistema de Intercambio de Calor</div>
                  <div className="node-code">SYS-HX-001</div>
                </div>
                <div className="node-count">3 equipos</div>
              </div>
            </div>
            
            <div className="tree-node level-2">
              <div className="node-content">
                <div className="node-dot system">SY</div>
                <div className="node-text">
                  <div className="node-name">Sistema de Control de Temperatura</div>
                  <div className="node-code">SYS-TC-001</div>
                </div>
                <div className="node-count">5 sensores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

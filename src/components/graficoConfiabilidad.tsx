"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedGraph() {
  // Estado para simular el progreso del ciclo (0 a 10 segundos)
  const [kpiTime, setKpiTime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000; // en segundos
      setKpiTime(elapsed % 10); // ciclo de 10 segundos
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Interpolación lineal para los KPIs:
  // Eficiencia: de 90% a 60%
  const efficiency = 90 - ((90 - 60) * (kpiTime / 10));
  // Prob. de Falla: de 30% a 65%
  const failure = 30 + ((65 - 30) * (kpiTime / 10));

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Cajitas KPI colocadas arriba */}
      <div className="mb-4 flex space-x-8">
        <div className="w-48 bg-gray-800 text-white p-4 rounded shadow-lg">
          <div className="text-sm uppercase">Eficiencia</div>
          <div className="text-2xl font-bold">{efficiency.toFixed(1)}%</div>
        </div>
        <div className="w-48 bg-gray-800 text-white p-4 rounded shadow-lg">
          <div className="text-sm uppercase">Prob. de Falla</div>
          <div className="text-2xl font-bold">{failure.toFixed(1)}%</div>
        </div>
      </div>

      <svg width="800" height="400" viewBox="0 0 800 400">
        <defs>
          {/* Fondo degradado para look tech (no se utiliza en fondo, pero se deja para posibles efectos) */}
          <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>
          {/* Filtro glow para efecto neón */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* ClipPath animado para revelar el gráfico */}
          <clipPath id="revealClip">
            <motion.rect
              x="50"
              y="50"
              width="0"
              height="300"
              animate={{ width: 700 }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </clipPath>
        </defs>

        {/* Fondo del gráfico: Se elimina o se establece transparente */}
        <rect x="0" y="0" width="800" height="400" fill="transparent" />

        {/* Ejes */}
        <line x1="50" y1="350" x2="750" y2="350" stroke="white" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="350" stroke="white" strokeWidth="2" />

        {/* Líneas de grid vertical */}
        {Array.from({ length: 7 }).map((_, i) => {
          const x = 50 + (700 / 6) * i;
          return (
            <line
              key={`vgrid-${i}`}
              x1={x}
              y1="50"
              x2={x}
              y2="350"
              stroke="gray"
              strokeDasharray="4"
              strokeWidth="1"
            />
          );
        })}
        {/* Líneas de grid horizontal */}
        {Array.from({ length: 5 }).map((_, i) => {
          const y = 50 + (300 / 4) * i;
          return (
            <line
              key={`hgrid-${i}`}
              x1="50"
              y1={y}
              x2="750"
              y2={y}
              stroke="gray"
              strokeDasharray="4"
              strokeWidth="1"
            />
          );
        })}

        {/* Etiqueta del eje X */}
        <text x="400" y="390" fill="white" textAnchor="middle" fontSize="14">
          Tiempo (s)
        </text>

        {/* Área "Eficiencia" (azul) – de 90% a 60% (y: 80 a 170) */}
        <motion.path
          d="
            M50,80
            L100,82
            L150,80
            L200,90
            L250,95
            L300,100
            L350,105
            L400,110
            L450,120
            L500,130
            L550,140
            L600,145
            L650,150
            L700,155
            L750,170
            L750,350 L50,350 Z
          "
          fill="rgba(79,142,247,0.4)" 
          
          stroke="none"
          clipPath="url(#revealClip)"
          style={{ filter: "url(#glow)" }}
        />

        {/* Área "Prob. de Falla" (rojo) – de 30% a 65% (y: 260 a 155) */}
        <motion.path
          d="
            M50,260
            L100,258
            L150,255
            L200,250
            L250,245
            L300,240
            L350,235
            L400,230
            L450,225
            L500,220
            L550,215
            L600,210
            L650,205
            L700,200
            L750,155
            L750,350 L50,350 Z
          "
          fill="rgba(247,79,79,0.4)"
          stroke="none"
          clipPath="url(#revealClip)"
          style={{ filter: "url(#glow)" }}
        />

        {/* Leyenda */}
        <rect x="600" y="60" width="15" height="15" fill="rgba(247,79,79,0.6)" />
        <text x="620" y="72" fill="white" fontSize="12">
          Prob. de Falla
        </text>
        <rect x="600" y="80" width="15" height="15" fill="rgba(79,142,247,0.6)" />
        <text x="620" y="92" fill="white" fontSize="12">
          Eficiencia
        </text>
      </svg>
    </div>
  );
}

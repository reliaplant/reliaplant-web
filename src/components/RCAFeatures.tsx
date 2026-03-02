"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Network_3,
  Time,
  ChartLineData,
  DocumentTasks,
  CheckmarkFilled,
} from "@carbon/icons-react";
import RCAAnimationReport from "./RCAAnimationReport";
import RCAAnimationRecommendations from "./RCAAnimationRecommendations";
import RCAAnimationDashboard from "./RCAAnimationDashboard";
import RCAAnimationTree from "./RCAAnimationTree";

type FeatureKey = "dashboard" | "analisis" | "5porques" | "recomendaciones";

interface Feature {
  id: FeatureKey;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const features: Feature[] = [
  {
    id: "dashboard",
    title: "Dashboard de KPIs",
    icon: <ChartLineData size={20} />,
    description:
      "Visualiza el rendimiento de tus análisis de causa raíz en un dashboard centralizado con KPIs clave, tendencias y métricas de proceso.",
    details: [
      "KPIs de análisis completados y tiempos de cierre",
      "Efectividad de recomendaciones implementadas",
      "Distribución por tipo de causa raíz",
      "Métricas de proceso y seguimiento de metas",
    ],
  },
  {
    id: "analisis",
    title: "Árbol de causas",
    icon: <Network_3 size={20} />,
    description:
      "Construye el árbol de causas de manera visual e interactiva, explorando todas las ramas hasta llegar a las causas raíz verificables.",
    details: [
      "Vista de árbol visual arrastrable",
      "Categorización de causas (física, humana, latente)",
      "Validación de causa raíz con criterios",
      "Exportación a diagrama de Ishikawa",
    ],
  },
  {
    id: "5porques",
    title: "Reportes con IA",
    icon: <Time size={20} />,
    description:
      "Genera reportes RCA completos y profesionales con IA: resumen ejecutivo, árbol de causas, análisis detallado y recomendaciones, listos para exportar a PDF.",
    details: [
      "Resumen ejecutivo y conclusiones generadas por IA",
      "Renderizado automático del árbol de causas",
      "Compilación de recomendaciones correctivas y preventivas",
      "Exportación a PDF profesional con formato estándar",
    ],
  },
  {
    id: "recomendaciones",
    title: "Recomendaciones",
    icon: <DocumentTasks size={20} />,
    description:
      "Genera recomendaciones específicas para cada causa raíz, asigna responsables, plazos y realiza seguimiento hasta el cierre.",
    details: [
      "Recomendaciones vinculadas a causas",
      "Asignación de responsables y fechas",
      "Estados de seguimiento (pendiente, en progreso, cerrada)",
      "Reportes de efectividad de acciones",
    ],
  },
];

function getAnimation(id: FeatureKey) {
  switch (id) {
    case "recomendaciones": return <RCAAnimationRecommendations />;
    case "5porques":        return <RCAAnimationReport />;
    case "dashboard":       return <RCAAnimationDashboard />;
    case "analisis":        return <RCAAnimationTree />;
    default:                return null;
  }
}

export default function RCAFeatures() {
  const [modalFeature, setModalFeature] = useState<FeatureKey | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const calcScale = useCallback(() => {
    if (!modalFeature || !modalContentRef.current) return;
    const container = modalContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    // Use larger base dimensions for tree animation
    const baseW = modalFeature === "analisis" ? 900 : 600;
    const baseH = modalFeature === "analisis" ? 600 : 420;
    const s = Math.min(cW / baseW, cH / baseH);
    setScale(s);
  }, [modalFeature]);

  useEffect(() => {
    if (!modalFeature) return;
    const t = setTimeout(calcScale, 50);
    window.addEventListener("resize", calcScale);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScale); };
  }, [modalFeature, calcScale]);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Section header */}
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block text-center">
            La solución
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Qué hace este módulo
          </h2>

          {/* Stacked feature blocks — alternating layout */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              const textPanel = (
                <div className={`flex flex-col h-full ${isEven ? "border-r" : "border-l"} border-gray-200 bg-white`}>

                  {/* Top: number watermark + title + description */}
                  <div className="relative px-8 pt-8 pb-7 border-b border-gray-200 overflow-hidden flex-shrink-0">
                    {/* Number watermark */}
                    <span
                      className="absolute top-0 right-4 font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: '6.5rem', color: '#eff6ff' }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon + title row */}
                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className="w-9 h-9 bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                        {feature.icon}
                      </div>
                      <h3
                        className="font-extrabold text-gray-900 leading-snug"
                        style={{ fontSize: '1.45rem' }}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    {/* Prominent description */}
                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom: characteristics — no flex-1 so it stays tight */}
                  <div className="px-8 pt-5 pb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                      Características principales
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckmarkFilled size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );

              const animationPanel = (
                <div
                  className="flex items-center justify-center h-full bg-gray-50 cursor-pointer group relative overflow-hidden"
                  onClick={() => setModalFeature(feature.id)}
                >
                  <div className="w-full h-full">
                    {getAnimation(feature.id)}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                      Click para ampliar
                    </span>
                  </div>
                </div>
              );

              return (
                <div
                  key={feature.id}
                  className="grid lg:grid-cols-2 gap-0 bg-white border border-gray-200 h-[460px]"
                >
                  {isEven ? <>{textPanel}{animationPanel}</> : <>{animationPanel}{textPanel}</>}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom bar - full width */}
        <div className="bg-gray-900 px-6 md:px-12 py-7 text-white mt-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-1">
                Resultado
              </p>
              <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                Análisis de causa raíz rigurosos y trazables que generan acciones correctivas
                realmente efectivas, no solo reportes que nadie sigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal expandido */}
      {modalFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalFeature(null)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalFeature(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{
                width: modalFeature === "analisis" ? 900 : 600,
                height: modalFeature === "analisis" ? 600 : 420,
                minHeight: modalFeature === "analisis" ? 600 : 400,
                transform: `scale(${scale})`,
                transformOrigin: "center center"
              }}>
                {getAnimation(modalFeature)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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

export default function RCAFeatures() {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("dashboard");
  const [modalOpen, setModalOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const calcScale = useCallback(() => {
    if (!modalOpen || !modalContentRef.current) return;
    const container = modalContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 600, cH / 420);
    setScale(s);
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const t = setTimeout(calcScale, 50);
    window.addEventListener("resize", calcScale);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScale); };
  }, [modalOpen, calcScale]);

  const current = features.find((f) => f.id === activeFeature) || features[0];

  const renderAnimation = () => {
    switch (activeFeature) {
      case "recomendaciones": return <RCAAnimationRecommendations />;
      case "5porques":        return <RCAAnimationReport />;
      case "dashboard":       return <RCAAnimationDashboard />;
      case "analisis":        return <RCAAnimationTree />;
      default:                return null;
    }
  };

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

          {/* Horizontal tab bar - centered */}
          <div className="flex justify-center overflow-x-auto border-b-2 border-gray-200 mb-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold whitespace-nowrap border-b-2 -mb-[2px] transition-colors ${
                  activeFeature === feature.id
                    ? "border-blue-600 text-blue-600 bg-white"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-white/60"
                }`}
              >
                <span className={activeFeature === feature.id ? "text-blue-600" : "text-gray-400"}>
                  {feature.icon}
                </span>
                {feature.title}
              </button>
            ))}
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-0 border border-gray-200 bg-white">

            {/* Left: title + description + características */}
            <div className="flex flex-col border-r border-gray-200">
              <div className="bg-blue-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 flex items-center justify-center flex-shrink-0">
                    {current.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{current.title}</h3>
                </div>
                <p className="text-white/85 text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="p-8 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">
                  Características principales
                </p>
                <ul className="space-y-4">
                  {current.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckmarkFilled size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: animation */}
            <div
              className="flex items-center justify-center min-h-[420px] bg-gray-50 cursor-pointer group relative overflow-hidden"
              onClick={() => setModalOpen(true)}
            >
              <div className="w-full h-full">
                {renderAnimation()}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                  Click para ampliar
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar - full width */}
        <div className="bg-gray-900 px-6 md:px-12 py-7 text-white">
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
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: 600, minHeight: 400, transform: `scale(${scale})`, transformOrigin: "center center" }}>
                {renderAnimation()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

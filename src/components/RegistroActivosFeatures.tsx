"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  TreeView,
  DocumentTasks,
  DataBase,
  ChartLineData,
  CheckmarkFilled,
} from "@carbon/icons-react";
import HierarchyAnimationActivos from "./HierarchyAnimationActivos";
import RegistroAnimationPlantillas from "./RegistroAnimationPlantillas";
import RegistroAnimationDTI from "./RegistroAnimationDTI";
import RegistroAnimationExportacion from "./RegistroAnimationExportacion";

type FeatureKey = "jerarquia" | "consistencia" | "trazabilidad" | "exportacion";

interface Feature {
  id: FeatureKey;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  mockupTitle: string;
}

const features: Feature[] = [
  {
    id: "jerarquia",
    title: "Jerarquía padre-hijo",
    icon: <TreeView size={20} />,
    description:
      "Relaciones padre-hijo estructuradas de manera interactiva e intuitiva, facilitando la navegación y comprensión de la jerarquía de activos.",
    details: [
      "Vista de árbol jerárquico navegable",
      "Expansión y colapso de niveles",
    ],
    mockupTitle: "Vista jerárquica de activos",
  },
  {
    id: "consistencia",
    title: "Consistencia en el registro",
    icon: <DocumentTasks size={20} />,
    description:
      "Plantillas parametrizables que aseguran que todos los activos se registren con los mismos campos técnicos.",
    details: [
      "Personalización de Campos",
      "Plantillas Parametrizadas",
    ],
    mockupTitle: "Plantillas de registro",
  },
  {
    id: "trazabilidad",
    title: "Trazabilidad técnica",
    icon: <DataBase size={20} />,
    description:
      "Historial completo de cambios en la estructura. Relaciona activos con DTIs de manera gráfica e interactiva, y añade imágenes de los activos para mejor identificación.",
    details: [
      "Vinculación gráfica de DTIs y P&IDs",
      "Galería de imágenes por activo",
    ],
    mockupTitle: "Trazabilidad y documentos",
  },
  {
    id: "exportacion",
    title: "Exportación a CMMS",
    icon: <ChartLineData size={20} />,
    description:
      "Genera plantillas parametrizables para exportar la taxonomía de activos hacia tu CMMS actual, facilitando la integración y migración de datos.",
    details: [
      "Mapeo de campos personalizable",
      "Exportación a múltiples formatos",
    ],
    mockupTitle: "Exportación y mapeo",
  },
];

export default function RegistroActivosFeatures() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlantillasOpen, setModalPlantillasOpen] = useState(false);
  const [modalDTIOpen, setModalDTIOpen] = useState(false);
  const [modalExportOpen, setModalExportOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalPlantillasContentRef = useRef<HTMLDivElement>(null);
  const modalDTIContentRef = useRef<HTMLDivElement>(null);
  const modalExportContentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scalePlantillas, setScalePlantillas] = useState(1);
  const [scaleDTI, setScaleDTI] = useState(1);
  const [scaleExport, setScaleExport] = useState(1);

  const calcScale = useCallback(() => {
    if (!modalOpen || !modalContentRef.current) return;
    const container = modalContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 600, cH / 420);
    setScale(s);
  }, [modalOpen]);

  const calcScalePlantillas = useCallback(() => {
    if (!modalPlantillasOpen || !modalPlantillasContentRef.current) return;
    const container = modalPlantillasContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 600, cH / 420);
    setScalePlantillas(s);
  }, [modalPlantillasOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const t = setTimeout(calcScale, 50);
    window.addEventListener("resize", calcScale);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScale); };
  }, [modalOpen, calcScale]);

  useEffect(() => {
    if (!modalPlantillasOpen) return;
    const t = setTimeout(calcScalePlantillas, 50);
    window.addEventListener("resize", calcScalePlantillas);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScalePlantillas); };
  }, [modalPlantillasOpen, calcScalePlantillas]);

  const calcScaleDTI = useCallback(() => {
    if (!modalDTIOpen || !modalDTIContentRef.current) return;
    const container = modalDTIContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 760, cH / 520);
    setScaleDTI(s);
  }, [modalDTIOpen]);

  useEffect(() => {
    if (!modalDTIOpen) return;
    const t = setTimeout(calcScaleDTI, 50);
    window.addEventListener("resize", calcScaleDTI);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScaleDTI); };
  }, [modalDTIOpen, calcScaleDTI]);

  const calcScaleExport = useCallback(() => {
    if (!modalExportOpen || !modalExportContentRef.current) return;
    const container = modalExportContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 760, cH / 520);
    setScaleExport(s);
  }, [modalExportOpen]);

  useEffect(() => {
    if (!modalExportOpen) return;
    const t = setTimeout(calcScaleExport, 50);
    window.addEventListener("resize", calcScaleExport);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScaleExport); };
  }, [modalExportOpen, calcScaleExport]);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">

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
                <div className={`flex flex-col h-full ${isEven ? "border-r" : "border-l"} border-gray-300 bg-white`}>

                  {/* Top: number watermark + icon + title + description */}
                  <div className="relative px-8 pt-8 pb-7 border-b border-gray-300 overflow-hidden flex-shrink-0">
                    <span
                      className="absolute top-0 right-4 font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: '6.5rem', color: '#eff6ff' }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

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

                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom: characteristics */}
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
                  className={`flex items-center justify-center h-full bg-gray-50 relative overflow-hidden ${(feature.id === "jerarquia" || feature.id === "consistencia" || feature.id === "trazabilidad" || feature.id === "exportacion") ? "cursor-pointer group" : ""}`}
                  onClick={
                    feature.id === "jerarquia" ? () => setModalOpen(true) :
                    feature.id === "consistencia" ? () => setModalPlantillasOpen(true) :
                    feature.id === "trazabilidad" ? () => setModalDTIOpen(true) :
                    feature.id === "exportacion" ? () => setModalExportOpen(true) : undefined
                  }
                >
                  {feature.id === "jerarquia" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <div style={{ width: 720, height: 560, transform: "scale(0.78)", transformOrigin: "center center" }}>
                          <HierarchyAnimationActivos />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : feature.id === "consistencia" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <div style={{ width: 680, height: 520, transform: "scale(0.82)", transformOrigin: "center center" }}>
                          <RegistroAnimationPlantillas />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : feature.id === "trazabilidad" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center">
                        {/* overflow:hidden wrapper at scaled visual size; flex centers inner 760×520 before clipping */}
                        <div style={{ width: Math.round(760 * 0.68), height: Math.round(520 * 0.68), overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: 760, height: 520, transform: "scale(0.68)", transformOrigin: "center center", flexShrink: 0 }}>
                            <RegistroAnimationDTI />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : feature.id === "exportacion" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center">
                        <div style={{ width: Math.round(760 * 0.68), height: Math.round(520 * 0.68), overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: 760, height: 520, transform: "scale(0.68)", transformOrigin: "center center", flexShrink: 0 }}>
                            <RegistroAnimationExportacion />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">Click para ampliar</span>
                      </div>
                    </>
                  ) : null}
                </div>
              );

              return (
                <div
                  key={feature.id}
                  className="grid lg:grid-cols-2 gap-0 bg-white border border-gray-300 h-[460px]"
                >
                  {isEven ? <>{textPanel}{animationPanel}</> : <>{animationPanel}{textPanel}</>}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom bar - full width */}
        <div className="bg-gray-900 py-7 text-white mt-16">
          <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-1">
                Resultado
              </p>
              <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                El uso real de metodologías de confiabilidad como RCM y RCA, que sin una taxonomía
                sólida pierden efectividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal expandido - Plantillas */}
      {modalPlantillasOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalPlantillasOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalPlantillasOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalPlantillasContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: 600, minHeight: 400, transform: `scale(${scalePlantillas})`, transformOrigin: "center center" }}>
                <RegistroAnimationPlantillas />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal expandido - Exportacion */}
      {modalExportOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalExportOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalExportOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalExportContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: Math.round(760 * scaleExport), height: Math.round(520 * scaleExport), overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 760, height: 520, transform: `scale(${scaleExport})`, transformOrigin: "center center", flexShrink: 0 }}>
                  <RegistroAnimationExportacion />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal expandido - DTI */}
      {modalDTIOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalDTIOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalDTIOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalDTIContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: Math.round(760 * scaleDTI), height: Math.round(520 * scaleDTI), overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 760, height: 520, transform: `scale(${scaleDTI})`, transformOrigin: "center center", flexShrink: 0 }}>
                  <RegistroAnimationDTI />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <HierarchyAnimationActivos />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

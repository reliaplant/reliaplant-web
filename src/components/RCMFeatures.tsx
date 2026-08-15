"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Template,
  Diagram,
  DocumentTasks,
  Task,
  CheckmarkFilled,
} from "@carbon/icons-react";
import RCMAnimationFunctions from "./RCMAnimationFunctions";
import RCMAnimationModosFalla from "./RCMAnimationModosFalla";
import RCMAnimationDecision from "./RCMAnimationDecision";

type FeatureKey = "plantillas" | "modos-falla" | "analisis" | "decision" | "plan";

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
    id: "plantillas",
    title: "Plantillas de RCM",
    icon: <Template size={20} />,
    description:
      "Reutiliza análisis RCM previos como plantillas para equipos del mismo tipo, acelerando nuevos proyectos y asegurando consistencia metodológica entre plantas.",
    details: [
      "Biblioteca de plantillas por tipo de activo",
      "Clonación y adaptación en un solo paso",
      "Versionado y control de cambios de plantillas",
      "Compatibles con taxonomías ISO 14224",
    ],
    mockupTitle: "Biblioteca de plantillas RCM",
  },
  {
    id: "modos-falla",
    title: "Modos de falla",
    icon: <Diagram size={20} />,
    description:
      "Identifica y documenta modos de falla vinculados directamente a funciones, evitando duplicaciones y asegurando trazabilidad completa.",
    details: [
      "Catálogo de modos de falla estándar",
      "Clasificación FMEA integrada",
      "Relación función-modo de falla",
      "Efectos y consecuencias documentados",
    ],
    mockupTitle: "Árbol de modos de falla",
  },
  {
    id: "analisis",
    title: "Análisis de consecuencias",
    icon: <DocumentTasks size={20} />,
    description:
      "Evalúa consecuencias sistemáticamente usando el árbol de decisión RCM para determinar la criticidad y tipo de tarea apropiada.",
    details: [
      "Árbol de decisión RCM integrado",
      "Categorización de consecuencias",
      "Evaluación de criticidad automática",
      "Justificación de decisiones trazable",
    ],
    mockupTitle: "Árbol de decisión RCM",
  },
  {
    id: "decision",
    title: "Diagrama de Decisión RCM",
    icon: <Diagram size={20} />,
    description:
      "Guía al analista a través de las 7 preguntas estándar del proceso RCM para determinar la consecuencia de cada modo de falla y seleccionar la tarea de mantenimiento más adecuada.",
    details: [
      "7 preguntas del proceso RCM (metodología Moubray)",
      "Clasificación automática: H / S / E / O / N",
      "Selección de tarea: monitoreo, reacondicionamiento, sustitución cíclica o búsqueda de fallas",
      "Justificación registrada y trazable por modo de falla",
    ],
    mockupTitle: "Diagrama de Decisión RCM",
  },
  {
    id: "plan",
    title: "Plan de mantenimiento",
    icon: <Task size={20} />,
    description:
      "Genera automáticamente el plan de mantenimiento con tareas derivadas del análisis RCM, listo para exportar a tu CMMS.",
    details: [
      "Tareas generadas automáticamente",
      "Frecuencias basadas en análisis",
      "Exportación directa a CMMS",
      "Validación de cobertura de modos de falla",
    ],
    mockupTitle: "Plan de mantenimiento RCM",
  },
];

export default function RCMFeatures() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalModosOpen, setModalModosOpen] = useState(false);
  const [modalDecisionOpen, setModalDecisionOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalModosContentRef = useRef<HTMLDivElement>(null);
  const modalDecisionContentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaleModos, setScaleModos] = useState(1);
  const [scaleDecision, setScaleDecision] = useState(1);

  const calcScale = useCallback(() => {
    if (!modalOpen || !modalContentRef.current) return;
    const container = modalContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 600, cH / 420);
    setScale(s);
  }, [modalOpen]);

  const calcScaleModos = useCallback(() => {
    if (!modalModosOpen || !modalModosContentRef.current) return;
    const container = modalModosContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 600, cH / 420);
    setScaleModos(s);
  }, [modalModosOpen]);

  const calcScaleDecision = useCallback(() => {
    if (!modalDecisionOpen || !modalDecisionContentRef.current) return;
    const container = modalDecisionContentRef.current;
    const cW = container.clientWidth - 48;
    const cH = container.clientHeight - 48;
    const s = Math.min(cW / 560, cH / 500);
    setScaleDecision(s);
  }, [modalDecisionOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const t = setTimeout(calcScale, 50);
    window.addEventListener("resize", calcScale);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScale); };
  }, [modalOpen, calcScale]);

  useEffect(() => {
    if (!modalModosOpen) return;
    const t = setTimeout(calcScaleModos, 50);
    window.addEventListener("resize", calcScaleModos);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScaleModos); };
  }, [modalModosOpen, calcScaleModos]);

  useEffect(() => {
    if (!modalDecisionOpen) return;
    const t = setTimeout(calcScaleDecision, 50);
    window.addEventListener("resize", calcScaleDecision);
    return () => { clearTimeout(t); window.removeEventListener("resize", calcScaleDecision); };
  }, [modalDecisionOpen, calcScaleDecision]);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-4 sm:mx-6 lg:mx-auto">

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
                  className={`flex items-center justify-center h-full bg-gray-50 relative overflow-hidden ${(feature.id === "plantillas" || feature.id === "modos-falla" || feature.id === "decision") ? "cursor-pointer group" : ""}`}
                  onClick={feature.id === "plantillas" ? () => setModalOpen(true) : feature.id === "modos-falla" ? () => setModalModosOpen(true) : feature.id === "decision" ? () => setModalDecisionOpen(true) : undefined}
                >
                  {feature.id === "plantillas" ? (
                    <>
                      <div className="w-full h-full">
                        <RCMAnimationFunctions />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : feature.id === "modos-falla" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <div style={{ width: 680, height: 520, transform: "scale(0.82)", transformOrigin: "center center" }}>
                          <RCMAnimationModosFalla />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : feature.id === "decision" ? (
                    <>
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <div style={{ width: 560, height: 460, transform: "scale(0.82)", transformOrigin: "center center" }}>
                          <RCMAnimationDecision />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                        <span className="bg-gray-900 text-white text-xs font-semibold px-4 py-2">
                          Click para ampliar
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
                      <div className="p-5 bg-blue-50 border border-blue-100 text-blue-600">
                        {feature.id === "analisis"     && <DocumentTasks size={56} />}
                        {feature.id === "plan"         && <Task size={56} />}
                      </div>
                      <p className="text-gray-400 text-sm font-medium">{feature.mockupTitle}</p>
                    </div>
                  )}
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
          <div className="max-w-6xl mx-4 sm:mx-6 lg:mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-1">
                Resultado
              </p>
              <p className="text-base text-white/85 leading-relaxed max-w-2xl">
                Un proceso RCM completo y trazable que genera planes de mantenimiento
                realmente basados en el análisis de consecuencias, no en intuición.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal expandido - Modos de Falla */}
      {modalModosOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalModosOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalModosOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalModosContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: 600, minHeight: 400, transform: `scale(${scaleModos})`, transformOrigin: "center center" }}>
                <RCMAnimationModosFalla />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal expandido — Diagrama de Decisión */}
      {modalDecisionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModalDecisionOpen(false)}
        >
          <div
            className="relative bg-white shadow-2xl w-[95vw] h-[92vh] max-w-none overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalDecisionOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div ref={modalDecisionContentRef} className="w-full h-full flex items-center justify-center overflow-hidden p-4">
              <div style={{ width: 560, minHeight: 460, transform: `scale(${scaleDecision})`, transformOrigin: "center center" }}>
                <RCMAnimationDecision />
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
                <RCMAnimationFunctions />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

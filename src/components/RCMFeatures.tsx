"use client";

import React, { useState } from "react";
import {
  Template,
  Diagram,
  DocumentTasks,
  Task,
  CheckmarkFilled,
} from "@carbon/icons-react";
import RCMAnimationFunctions from "./RCMAnimationFunctions";

type FeatureKey = "plantillas" | "modos-falla" | "analisis" | "plan";

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
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("plantillas");
  const current = features.find((f) => f.id === activeFeature) || features[0];

  return (
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
            {/* Title + description */}
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

            {/* Características principales */}
            <div className="p-8 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">
                Características principales
              </p>
              <ul className="space-y-4">
                {current.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckmarkFilled
                      size={18}
                      className="text-blue-600 mt-0.5 flex-shrink-0"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: animation / mockup */}
          <div className="flex items-center justify-center min-h-[420px] bg-gray-50">
            {current.id === "plantillas" ? (
              <div className="w-full h-full overflow-hidden">
                <RCMAnimationFunctions />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
                <div className="p-5 bg-blue-50 border border-blue-100">
                  <span className="text-blue-600">
                    {current.id === "modos-falla" && <Diagram size={56} />}
                    {current.id === "analisis" && <DocumentTasks size={56} />}
                    {current.id === "plan" && <Task size={56} />}
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-medium">{current.mockupTitle}</p>
              </div>
            )}
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
              Un proceso RCM completo y trazable que genera planes de mantenimiento
              realmente basados en el análisis de consecuencias, no en intuición.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

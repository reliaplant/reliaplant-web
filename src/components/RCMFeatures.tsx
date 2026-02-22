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
  color: string;
  bgColor: string;
  description: string;
  details: string[];
  mockupTitle: string;
}

const features: Feature[] = [
  {
    id: "plantillas",
    title: "Plantillas de RCM Dinámicas",
    icon: <Template size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
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
    title: "Modos de falla estructurados",
    icon: <Diagram size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
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
    icon: <DocumentTasks size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
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
    icon: <Task size={24} />,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
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

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section className="py-12 px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block text-center">
          La solución
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Qué hace este módulo
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Centraliza el proceso RCM completo en un entorno estructurado:
        </p>

        <div className="grid lg:grid-cols-[400px_1fr] gap-6 items-start">
          {/* Left sidebar - Features list */}
          <div>
            <div className="space-y-3 mb-6">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl transition-all text-left ${
                    activeFeature === feature.id
                      ? "bg-gray-800 text-white shadow-lg"
                      : "bg-white/50 text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeFeature === feature.id ? "bg-white/20" : feature.bgColor
                    }`}
                  >
                    <span className={activeFeature === feature.id ? "text-white" : "text-white"}>
                      {feature.icon}
                    </span>
                  </div>
                  <span className="font-semibold text-sm">{feature.title}</span>
                </button>
              ))}
            </div>

            {/* Feature details below */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                Características principales
              </h4>
              <ul className="space-y-2">
                {currentFeature.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckmarkFilled size={16} className={`${currentFeature.color} mt-0.5 flex-shrink-0`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content area - Feature details and mockup */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header with gradient */}
            <div className={`${currentFeature.bgColor} bg-gradient-to-br from-opacity-90 to-opacity-100 p-5 text-white`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {currentFeature.icon}
                </div>
                <h3 className="text-xl font-bold">{currentFeature.title}</h3>
              </div>
              <p className="text-white/90 text-base leading-relaxed">
                {currentFeature.description}
              </p>
            </div>

            {/* Mockup area */}
            <div className="p-6">
              {currentFeature.id === "funciones" ? (
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <RCMAnimationFunctions />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 flex items-center justify-center min-h-[280px] border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className={`inline-block p-3 ${currentFeature.bgColor} bg-opacity-10 rounded-lg mb-3`}>
                      <span className={currentFeature.color}>
                        {currentFeature.id === "modos-falla" && <Diagram size={48} />}
                        {currentFeature.id === "analisis" && <DocumentTasks size={48} />}
                        {currentFeature.id === "plan" && <Task size={48} />}
                      </span>
                    </div>
                    <p className="text-gray-500 font-medium">
                      Mockup: {currentFeature.mockupTitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Esto habilita:</h3>
          <p className="text-lg text-white/90">
            Un proceso RCM completo y trazable que genera planes de mantenimiento realmente basados en el análisis de consecuencias, no en intuición.
          </p>
        </div>
      </div>
    </section>
  );
}

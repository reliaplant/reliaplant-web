"use client";

import React, { useState } from "react";
import {
  Network_3,
  Time,
  ChartLineData,
  DocumentTasks,
  CheckmarkFilled,
} from "@carbon/icons-react";
import RCAAnimationReport from "./RCAAnimationReport";
import RCAAnimationRecommendations from "./RCAAnimationRecommendations";

type FeatureKey = "registro" | "analisis" | "5porques" | "recomendaciones";

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
    id: "registro",
    title: "Registro estructurado de eventos",
    icon: <Network_3 size={24} />,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    description:
      "Inicia cada análisis con información estructurada del evento: qué falló, cuándo, impacto operacional y costos asociados.",
    details: [
      "Plantilla estandarizada de eventos",
      "Vinculación automática con activos",
      "Clasificación de severidad",
      "Cálculo automático de impactos",
    ],
    mockupTitle: "Registro de eventos de falla",
  },
  {
    id: "analisis",
    title: "Árbol de causas interactivo",
    icon: <Network_3 size={24} />,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    description:
      "Construye el árbol de causas de manera visual e interactiva, explorando todas las ramas hasta llegar a las causas raíz verificables.",
    details: [
      "Vista de árbol visual arrastrable",
      "Categorización de causas (física, humana, latente)",
      "Validación de causa raíz con criterios",
      "Exportación a diagrama de Ishikawa",
    ],
    mockupTitle: "Árbol de análisis de causas",
  },
  {
    id: "5porques",
    title: "Generación automática de reportes con IA",
    icon: <Time size={24} />,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    description:
      "Genera reportes RCA completos y profesionales con IA: resumen ejecutivo, árbol de causas, análisis detallado y recomendaciones, listos para exportar a PDF.",
    details: [
      "Resumen ejecutivo y conclusiones generadas por IA",
      "Renderizado automático del árbol de causas",
      "Compilación de recomendaciones correctivas y preventivas",
      "Exportación a PDF profesional con formato estándar",
    ],
    mockupTitle: "Generación de reporte RCA",
  },
  {
    id: "recomendaciones",
    title: "Recomendaciones y seguimiento",
    icon: <DocumentTasks size={24} />,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    description:
      "Genera recomendaciones específicas para cada causa raíz, asigna responsables, plazos y realiza seguimiento hasta el cierre.",
    details: [
      "Recomendaciones vinculadas a causas",
      "Asignación de responsables y fechas",
      "Estados de seguimiento (pendiente, en progreso, cerrada)",
      "Reportes de efectividad de acciones",
    ],
    mockupTitle: "Plan de acciones correctivas",
  },
];

export default function RCAFeatures() {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("registro");

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section className="py-12 px-8 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4 block text-center">
          La solución
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Qué hace este módulo
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Estructura el proceso completo de análisis de causa raíz:
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
              {currentFeature.id === "recomendaciones" ? (
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <RCAAnimationRecommendations />
                </div>
              ) : currentFeature.id === "registro" || currentFeature.id === "analisis" ? (
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <RCAAnimationReport />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 flex items-center justify-center min-h-[280px] border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className={`inline-block p-3 ${currentFeature.bgColor} bg-opacity-10 rounded-lg mb-3`}>
                      <span className={currentFeature.color}>
                        {currentFeature.id === "5porques" && <Time size={48} />}
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
        <div className="mt-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Esto habilita:</h3>
          <p className="text-lg text-white/90">
            Análisis de causa raíz rigurosos y trazables que generan acciones correctivas realmente efectivas, no solo reportes que nadie sigue.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  TreeView,
  DocumentTasks,
  DataBase,
  ChartLineData,
  CheckmarkFilled,
} from "@carbon/icons-react";

type FeatureKey = "jerarquia" | "consistencia" | "trazabilidad" | "exportacion";

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
    id: "jerarquia",
    title: "Relaciones correctas padre-hijo",
    icon: <TreeView size={24} />,
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    description:
      "Relaciones padre-hijo estructuradas de manera interactiva e intuitiva, facilitando la navegación y comprensión de la jerarquía de activos.",
    details: [
      "Vista de árbol jerárquico navegable",
      "Arrastrar y soltar para reorganizar",
      "Validación automática de relaciones",
      "Expansión y colapso de niveles",
    ],
    mockupTitle: "Vista jerárquica de activos",
  },
  {
    id: "consistencia",
    title: "Consistencia en el registro",
    icon: <DocumentTasks size={24} />,
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    description:
      "Plantillas parametrizables que aseguran que todos los activos se registren con los mismos campos técnicos.",
    details: [
      "Plantillas por tipo de activo",
      "Campos obligatorios personalizables",
      "Validación de datos en tiempo real",
      "Campos calculados automáticamente",
    ],
    mockupTitle: "Plantillas de registro",
  },
  {
    id: "trazabilidad",
    title: "Trazabilidad técnica",
    icon: <DataBase size={24} />,
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    description:
      "Historial completo de cambios en la estructura. Relaciona activos con DTIs de manera gráfica e interactiva, y añade imágenes de los activos para mejor identificación.",
    details: [
      "Vinculación gráfica de DTIs y P&IDs",
      "Galería de imágenes por activo",
      "Historial de modificaciones auditado",
      "Trazabilidad de cambios con usuario y fecha",
    ],
    mockupTitle: "Trazabilidad y documentos",
  },
  {
    id: "exportacion",
    title: "Exportación a tu CMMS",
    icon: <ChartLineData size={24} />,
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    description:
      "Genera plantillas parametrizables para exportar la taxonomía de activos hacia tu CMMS actual, facilitando la integración y migración de datos.",
    details: [
      "Mapeo de campos personalizable",
      "Exportación a múltiples formatos",
      "Integración API con principales CMMS",
      "Validación previa a exportación",
    ],
    mockupTitle: "Exportación y mapeo",
  },
];

export default function RegistroActivosFeatures() {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("jerarquia");

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section className="py-12 px-8 bg-teal-50">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4 block text-center">
          La solución
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Qué hace este módulo
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Permite estructurar los activos siguiendo principios como ISO 14224, asegurando:
        </p>

        <div className="grid lg:grid-cols-[400px_1fr] gap-6 items-stretch">
          {/* Left sidebar - Features list */}
          <div className="flex flex-col">
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
            <div className="bg-white rounded-lg p-5 border border-gray-200 flex-grow">
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
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
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
            <div className="p-6 flex-grow flex flex-col">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 flex items-center justify-center flex-grow border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className={`inline-block p-3 ${currentFeature.bgColor} bg-opacity-10 rounded-lg mb-3`}>
                    <span className={currentFeature.color}>
                      {currentFeature.id === "jerarquia" && <TreeView size={48} />}
                      {currentFeature.id === "consistencia" && <DocumentTasks size={48} />}
                      {currentFeature.id === "trazabilidad" && <DataBase size={48} />}
                      {currentFeature.id === "exportacion" && <ChartLineData size={48} />}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium">
                    Mockup: {currentFeature.mockupTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Esto habilita:</h3>
          <p className="text-lg text-white/90">
            El uso real de metodologías de confiabilidad como RCM y RCA, que sin una taxonomía
            sólida pierden efectividad.
          </p>
        </div>
      </div>
    </section>
  );
}

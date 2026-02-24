"use client";

import React, { useState } from "react";
import {
  TreeView,
  DocumentTasks,
  DataBase,
  ChartLineData,
  CheckmarkFilled,
} from "@carbon/icons-react";
import RegistroAnimationJerarquia from "./RegistroAnimationJerarquia";

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
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("jerarquia");
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

          {/* Right: animation / mockup */}
          <div className="flex items-center justify-center min-h-[420px] bg-gray-50">
            {current.id === "jerarquia" ? (
              <div className="w-full h-full overflow-hidden">
                <RegistroAnimationJerarquia />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
                <div className="p-5 bg-blue-50 border border-blue-100">
                  <span className="text-blue-600">
                    {current.id === "consistencia"  && <DocumentTasks size={56} />}
                    {current.id === "trazabilidad"  && <DataBase size={56} />}
                    {current.id === "exportacion"   && <ChartLineData size={56} />}
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
              El uso real de metodologías de confiabilidad como RCM y RCA, que sin una taxonomía
              sólida pierden efectividad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

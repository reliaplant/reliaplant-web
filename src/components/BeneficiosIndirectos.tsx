"use client";

import { useState } from "react";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reducción de fallas recurrentes",
    description: "Causas raíz correctamente identificadas y documentadas evitan que los mismos problemas reaparezcan ciclo tras ciclo.",
    stat: "Hasta 4×",
    statLabel: "mejora en MTBF documentada en acerías tras RCA sistemático",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Mayor disponibilidad de planta",
    description: "Estrategias de mantenimiento mejor calibradas se traducen en menos paradas no planificadas y mayor uptime productivo.",
    stat: "+30%",
    statLabel: "incremento en disponibilidad de equipos reportado por U.S. DOE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Decisiones técnicas de mayor calidad",
    description: "Datos organizados y trazables permiten evaluar prioridades con criterio técnico, no solo por urgencia o intuición.",
    stat: "75–85%",
    statLabel: "precisión en selección de tareas con RCM vs. 40–50% en planificación intuitiva",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Auditorías y cumplimiento más simples",
    description: "Registros completos y trazables facilitan la respuesta ante auditorías normativas sin necesidad de reconstruir información desde cero.",
    stat: "ISO 14224",
    statLabel: "define ~20 KPIs estándar que solo se pueden reportar correctamente con taxonomía estructurada",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Reducción de costos de emergencia",
    description: "Anticipar fallas mediante estrategias bien diseñadas reduce las intervenciones urgentes, que suelen costar entre 3 y 5 veces más que el mantenimiento planificado.",
    stat: "$4–6/HP",
    statLabel: "costo anual con RCM integrado vs. $17–18 en modo reactivo (U.S. FEMP 2010)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Menor exposición a riesgos de seguridad",
    description: "Identificar y controlar modos de falla con consecuencias de seguridad reduce drásticamente la probabilidad de incidentes graves y paradas no programadas.",
    stat: "−79%",
    statLabel: "en tasa de incidentes registrables en 3 años con RCA sistemático (usuarios TapRooT®)",
  },
];

export default function BeneficiosIndirectos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2">
            Más allá del cálculo
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Beneficios indirectos del software
          </h2>
          <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
            El ahorro en horas técnicas es solo el inicio. Reliaplant genera valor en dimensiones
            que no aparecen en una hoja de cálculo pero que impactan directamente la operación,
            la cultura y la competitividad de la organización.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 cursor-default transition-all duration-200"
                style={{
                  borderColor: isHovered ? "#2563eb" : undefined,
                  boxShadow: isHovered ? "0 4px 20px rgba(37,99,235,0.08)" : undefined,
                  transform: isHovered ? "translateY(-2px)" : undefined,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 flex items-center justify-center mb-4 transition-colors duration-200"
                  style={{
                    background: isHovered ? "#dbeafe" : "#f3f4f6",
                    color: isHovered ? "#1d4ed8" : "#6b7280",
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className="mt-auto">
                  <div
                    className="h-[2px] bg-blue-600 mb-3 rounded-full transition-all duration-[400ms]"
                    style={{ width: isHovered ? "100%" : "0%" }}
                  />
                  <span className="font-mono text-base font-medium text-blue-600">
                    {benefit.stat}
                  </span>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">
                    {benefit.statLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex items-start gap-3">
          <div className="w-1 h-10 bg-blue-600 rounded-full flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">
            Datos respaldados por casos documentados del U.S. Department of Energy, NASA Marshall Flight Center,
            Baker Hughes Cordant™, TapRooT® RCA, Pinnacle Reliability, MaxGrip, Reliability Center Inc. y la base
            de datos OREDA (17,000+ unidades de equipo, 39,000+ registros de falla en Oil & Gas global).
            Los resultados varían según el contexto operacional y el grado de implementación.
          </p>
        </div>

      </div>
    </section>
  );
}

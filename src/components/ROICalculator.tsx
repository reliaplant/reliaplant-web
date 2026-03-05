"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  ChartLineData,
  Time,
  DataStructured,
  Information,
} from "@carbon/icons-react";

// Costo promedio de un ingeniero de mantenimiento en Latinoamérica (USD/hora)
const ENGINEER_HOURLY_COST = 25;

interface CalculatorInputs {
  rcaPerMonth: number;
  hoursPerRCA: number;
  rcmEquipmentsPerYear: number;
  hoursPerRCMManual: number;
  criticalAssets: number;
  hoursSearchingData: number;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    rcaPerMonth: 4,
    hoursPerRCA: 16,
    rcmEquipmentsPerYear: 10,
    hoursPerRCMManual: 40,
    criticalAssets: 500,
    hoursSearchingData: 200,
  });

  const results = useMemo(() => {
    const annualRCAHours = inputs.rcaPerMonth * 12 * inputs.hoursPerRCA;
    const rcaHoursSaved = annualRCAHours * 0.6;
    const rcaSavings = rcaHoursSaved * ENGINEER_HOURLY_COST;

    const annualRCMHours = inputs.rcmEquipmentsPerYear * inputs.hoursPerRCMManual;
    const rcmHoursSaved = annualRCMHours * 0.6;
    const rcmSavings = rcmHoursSaved * ENGINEER_HOURLY_COST;

    const taxonomyHoursSaved = inputs.hoursSearchingData * 0.6;
    const taxonomySavings = taxonomyHoursSaved * ENGINEER_HOURLY_COST;

    const totalHoursSaved = rcaHoursSaved + rcmHoursSaved + taxonomyHoursSaved;
    const totalSavings = rcaSavings + rcmSavings + taxonomySavings;

    return {
      rcaHoursSaved: Math.round(rcaHoursSaved),
      rcaSavings: Math.round(rcaSavings),
      rcmHoursSaved: Math.round(rcmHoursSaved),
      rcmSavings: Math.round(rcmSavings),
      taxonomyHoursSaved: Math.round(taxonomyHoursSaved),
      taxonomySavings: Math.round(taxonomySavings),
      totalHoursSaved: Math.round(totalHoursSaved),
      totalSavings: Math.round(totalSavings),
    };
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2">
            Calculadora
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Estima el impacto en tu operación
          </h2>
          <p className="text-gray-500 text-base">
            Ajusta los parámetros de tu equipo para ver el ahorro estimado anual en horas técnicas.{" "}
            <span className="text-gray-400">Supuesto base: 60% reducción.</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Estos valores reflejan únicamente las <strong className="text-gray-500">contribuciones directas</strong> — tiempo técnico recuperado en RCA, RCM y gestión de activos. Los beneficios indirectos (disponibilidad de planta, reducción de fallas recurrentes, decisiones de mayor calidad) no están incluidos en este cálculo.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 border border-gray-200">

          {/* LEFT — Inputs */}
          <div className="border-b lg:border-b-0 lg:border-r border-gray-200">

            {/* RCA block */}
            <div className="border-b border-gray-200 px-8 py-7 flex flex-col items-center">
              <div className="w-full max-w-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ChartLineData size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Módulo</p>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">Análisis de Causa Raíz (RCA)</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">RCA por mes</label>
                  <input
                    type="number" min="0"
                    value={inputs.rcaPerMonth}
                    onChange={e => handleInputChange("rcaPerMonth", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Horas por RCA</label>
                  <input
                    type="number" min="0"
                    value={inputs.hoursPerRCA}
                    onChange={e => handleInputChange("hoursPerRCA", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>
              </div>
            </div>

            {/* RCM block */}
            <div className="border-b border-gray-200 px-8 py-7 flex flex-col items-center">
              <div className="w-full max-w-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Time size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Módulo</p>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">Mantenimiento Centrado en Confiabilidad (RCM)</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Equipos analizados al año</label>
                  <input
                    type="number" min="0"
                    value={inputs.rcmEquipmentsPerYear}
                    onChange={e => handleInputChange("rcmEquipmentsPerYear", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Horas por RCM manual</label>
                  <input
                    type="number" min="0"
                    value={inputs.hoursPerRCMManual}
                    onChange={e => handleInputChange("hoursPerRCMManual", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>
              </div>
            </div>

            {/* Taxonomía block */}
            <div className="px-8 py-7 flex flex-col items-center">
              <div className="w-full max-w-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <DataStructured size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Módulo</p>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">Registro de Activos</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Activos críticos</label>
                  <input
                    type="number" min="0"
                    value={inputs.criticalAssets}
                    onChange={e => handleInputChange("criticalAssets", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Horas/año buscando datos</label>
                  <input
                    type="number" min="0"
                    value={inputs.hoursSearchingData}
                    onChange={e => handleInputChange("hoursSearchingData", Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>
              </div>
            </div>

          </div>

          {/* RIGHT — Results */}
          <div className="flex flex-col bg-gray-50">

            {/* Total */}
            <div className="bg-gray-900 text-white px-8 py-8 flex-shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-3">
                Ahorro estimado anual
              </p>
              <p className="text-4xl font-extrabold text-white leading-none mb-2">
                {formatCurrency(results.totalSavings)}
              </p>
              <p className="text-sm text-white/60">
                {results.totalHoursSaved} horas técnicas recuperadas
              </p>
              <p className="text-xs text-white/40 mt-1">
                ≈ {Math.round(results.totalHoursSaved / 160)} meses de trabajo técnico
              </p>
            </div>

            {/* Breakdown */}
            <div className="flex-1 divide-y divide-gray-200">
              <div className="px-8 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <ChartLineData size={14} className="text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">RCA</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-500">{results.rcaHoursSaved} horas</span>
                  <span className="text-lg font-bold text-gray-900">{formatCurrency(results.rcaSavings)}</span>
                </div>
              </div>

              <div className="px-8 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <Time size={14} className="text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">RCM</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-500">{results.rcmHoursSaved} horas</span>
                  <span className="text-lg font-bold text-gray-900">{formatCurrency(results.rcmSavings)}</span>
                </div>
              </div>

              <div className="px-8 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <DataStructured size={14} className="text-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Registro de Activos</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-500">{results.taxonomyHoursSaved} horas</span>
                  <span className="text-lg font-bold text-gray-900">{formatCurrency(results.taxonomySavings)}</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-8 py-5 border-t border-gray-200 flex items-start gap-2">
              <Information size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Estimación referencial basada en un costo promedio de <strong>USD 25/hora</strong> para un ingeniero de mantenimiento en Latinoamérica. El impacto real depende de la operación, madurez del equipo y complejidad de los activos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

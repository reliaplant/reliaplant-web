"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  ChartLineData,
  Time,
  DataStructured,
  Information,
} from "@carbon/icons-react";

interface CalculatorInputs {
  // RCA
  rcaPerMonth: number;
  hoursPerRCA: number;
  engineerHourlyCost: number;
  rcaTimeReduction: number;
  // RCM
  rcmEquipmentsPerYear: number;
  hoursPerRCMManual: number;
  rcmAdminReduction: number;
  // Taxonomía
  criticalAssets: number;
  hoursSearchingData: number;
  taxonomyReduction: number;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    rcaPerMonth: 4,
    hoursPerRCA: 16,
    engineerHourlyCost: 50,
    rcaTimeReduction: 60,
    rcmEquipmentsPerYear: 10,
    hoursPerRCMManual: 40,
    rcmAdminReduction: 60,
    criticalAssets: 500,
    hoursSearchingData: 200,
    taxonomyReduction: 60,
  });

  const results = useMemo(() => {
    // RCA savings
    const annualRCAHours = inputs.rcaPerMonth * 12 * inputs.hoursPerRCA;
    const rcaHoursSaved = annualRCAHours * 0.6;
    const rcaSavings = rcaHoursSaved * inputs.engineerHourlyCost;

    const annualRCMHours = inputs.rcmEquipmentsPerYear * inputs.hoursPerRCMManual;
    const rcmHoursSaved = annualRCMHours * 0.6;
    const rcmSavings = rcmHoursSaved * inputs.engineerHourlyCost;

    const taxonomyHoursSaved = inputs.hoursSearchingData * 0.6;
    const taxonomySavings = taxonomyHoursSaved * inputs.engineerHourlyCost;

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
    <section className="py-20 px-4 bg-[radial-gradient(circle_at_top_left,#fff7ed,transparent_45%),radial-gradient(circle_at_bottom_right,#e0f2fe,transparent_45%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Calculator size={32} className="text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              Calculadora de Impacto
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estima el ahorro potencial en horas técnicas al implementar la
            plataforma en tu operación
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs uppercase tracking-widest text-slate-600 bg-white/70 border border-slate-200 rounded-full px-3 py-1">
              Supuesto base: 60% reducción
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-600 bg-white/70 border border-slate-200 rounded-full px-3 py-1">
              Resultados anuales
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">
          {/* Inputs */}
          <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calculator size={24} className="text-blue-600" />
              Parámetros de tu operación
            </h3>
            <div className="space-y-4">
              {/* RCA */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                <div className="flex items-center gap-2 text-blue-700 mb-3">
                  <ChartLineData size={18} />
                  <h4 className="text-base font-semibold">RCA</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">RCA por mes</label>
                    <input type="number" min="0" value={inputs.rcaPerMonth} onChange={e => handleInputChange("rcaPerMonth", Number(e.target.value))} className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Horas por RCA</label>
                    <input type="number" min="0" value={inputs.hoursPerRCA} onChange={e => handleInputChange("hoursPerRCA", Number(e.target.value))} className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Costo hora (USD)</label>
                    <input type="number" min="0" value={inputs.engineerHourlyCost} onChange={e => handleInputChange("engineerHourlyCost", Number(e.target.value))} className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </div>
                </div>
              </div>
              {/* RCM */}
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4">
                <div className="flex items-center gap-2 text-sky-700 mb-3">
                  <Time size={18} />
                  <h4 className="text-base font-semibold">RCM</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Equipos analizados al año</label>
                    <input type="number" min="0" value={inputs.rcmEquipmentsPerYear} onChange={e => handleInputChange("rcmEquipmentsPerYear", Number(e.target.value))} className="w-full px-3 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Horas por RCM manual</label>
                    <input type="number" min="0" value={inputs.hoursPerRCMManual} onChange={e => handleInputChange("hoursPerRCMManual", Number(e.target.value))} className="w-full px-3 py-2 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white" />
                  </div>
                </div>
              </div>
              {/* Taxonomía */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                <div className="flex items-center gap-2 text-blue-700 mb-3">
                  <DataStructured size={18} />
                  <h4 className="text-base font-semibold">Taxonomía</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Activos críticos</label>
                    <input type="number" min="0" value={inputs.criticalAssets} onChange={e => handleInputChange("criticalAssets", Number(e.target.value))} className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Horas/año buscando datos</label>
                    <input type="number" min="0" value={inputs.hoursSearchingData} onChange={e => handleInputChange("hoursSearchingData", Number(e.target.value))} className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Resultados */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Impacto estimado anual</p>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Resultado consolidado</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Inventario de activos</p>
                  <p className="text-sm font-semibold text-slate-800">{inputs.criticalAssets} críticos</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-900 text-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Ahorro total estimado</span>
                  <span className="text-2xl font-bold">{formatCurrency(results.totalSavings)}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-white/70">Horas recuperadas</span>
                  <span className="text-xl font-semibold text-emerald-300">{results.totalHoursSaved} horas</span>
                </div>
                <p className="text-xs text-white/50 mt-2">Equivale a ~{Math.round(results.totalHoursSaved / 160)} meses de trabajo técnico</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4">
                  <p className="text-xs uppercase tracking-widest text-blue-700">RCA</p>
                  <p className="text-sm text-slate-600 mt-1">{results.rcaHoursSaved} horas</p>
                  <p className="text-base font-semibold text-slate-900">{formatCurrency(results.rcaSavings)}</p>
                </div>
                <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-4">
                  <p className="text-xs uppercase tracking-widest text-sky-700">RCM</p>
                  <p className="text-sm text-slate-600 mt-1">{results.rcmHoursSaved} horas</p>
                  <p className="text-base font-semibold text-slate-900">{formatCurrency(results.rcmSavings)}</p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-4">
                  <p className="text-xs uppercase tracking-widest text-blue-700">Taxonomía</p>
                  <p className="text-sm text-slate-600 mt-1">{results.taxonomyHoursSaved} horas</p>
                  <p className="text-base font-semibold text-slate-900">{formatCurrency(results.taxonomySavings)}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg mt-5">
                <Information size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">Estimación referencial basada en experiencia industrial. El impacto real depende de cada operación, madurez del equipo y complejidad de los activos.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-sm uppercase tracking-widest text-slate-500">Beneficios indirectos</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-500">+</span><span>Reducción de fallas recurrentes</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">+</span><span>Mayor disponibilidad de equipos</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">+</span><span>Mejores decisiones de mantenimiento</span></li>
                <li className="flex items-start gap-2"><span className="text-emerald-500">+</span><span>Reducción de riesgo operacional</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

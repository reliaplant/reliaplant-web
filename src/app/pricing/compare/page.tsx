"use client";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Gratuito",
    desc: "Evaluar la plataforma",
    monthly: 0,
    annual: 0,
    suffix: "/ para siempre",
    users: "1",
    assets: "10",
    plants: "1",
    usersLabel: "usuario",
    assetsLabel: "activos",
    plantsLabel: "planta",
    features: [
      { text: "Taxonomía básica", ai: false },
      { text: "5 proyectos RCA · 5 planes RCM", ai: false },
      { text: "Asistente IA incluido", ai: true },
      { text: "Soporte por email", ai: false },
    ],
    cta: "Comenzar gratis",
    ctaStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    recommended: false,
  },
  {
    name: "Profesional",
    desc: "Consultor o ingeniero independiente",
    monthly: 29,
    annual: 25,
    suffix: "/mes",
    users: "1",
    assets: "30",
    plants: "1",
    usersLabel: "usuario",
    assetsLabel: "activos",
    plantsLabel: "planta",
    features: [
      { text: "Todos los módulos — proyectos ilimitados", ai: false },
      { text: "Reportes PDF y Excel", ai: false },
      { text: "IA: hipótesis y modos de falla", ai: true },
      { text: "Soporte por email prioritario", ai: false },
    ],
    cta: "Comenzar prueba",
    ctaStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    recommended: false,
  },
  {
    name: "Equipo",
    desc: "Equipo de mantenimiento o confiabilidad",
    monthly: 99,
    annual: 84,
    suffix: "/mes",
    users: "5",
    assets: "+100",
    plants: "1",
    usersLabel: "usuarios",
    assetsLabel: "activos",
    plantsLabel: "planta",
    features: [
      { text: "Permisos y roles de equipo", ai: false },
      { text: "Dashboard compartido", ai: false },
      { text: "IA ilimitada para todo el equipo", ai: true },
      { text: "Activos adicionales disponibles", ai: false },
    ],
    cta: "Comenzar prueba",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    recommended: true,
  },
  {
    name: "Planta",
    desc: "Planta mediana o grande",
    monthly: 245,
    annual: 208,
    suffix: "/mes",
    users: "15",
    assets: "+5000",
    plants: "3",
    usersLabel: "usuarios",
    assetsLabel: "activos",
    plantsLabel: "plantas",
    features: [
      { text: "Soporte prioritario 24h", ai: false },
      { text: "Facturación por orden de compra", ai: false },
      { text: "IA ilimitada multi-planta", ai: true },
      { text: "Activos adicionales disponibles", ai: false },
    ],
    cta: "Comenzar prueba",
    ctaStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    recommended: false,
  },
];

export default function PricingCompare() {
  const [billing, setBilling] = useState<"mensual" | "anual">("mensual");

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto pt-8">
        <div className="mb-8 flex items-center">
          <Link href="/#precios" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span className="text-2xl">←</span> Volver a precios
          </Link>
        </div>
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Pagas según tu escala, no más</h1>
          <div className="text-gray-500 text-base md:text-lg">Licencias de acuerdo al tamaño de tu organización</div>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col gap-4 ${
                plan.recommended
                  ? "border-blue-600 border-2 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                  Recomendado
                </div>
              )}
              <div>
                <div className="text-lg font-bold text-gray-900">{plan.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{plan.desc}</div>
              </div>
              {/* Billing toggle */}
              {plan.monthly > 0 && (
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 w-fit text-xs">
                  <button
                    onClick={() => setBilling("mensual")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      billing === "mensual" ? "bg-white shadow text-gray-900" : "text-gray-500"
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setBilling("anual")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                      billing === "anual" ? "bg-white shadow text-gray-900" : "text-gray-500"
                    }`}
                  >
                    Anual <span className="text-green-600 font-semibold">-15%</span>
                  </button>
                </div>
              )}
              {plan.monthly === 0 && (
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 w-fit text-xs opacity-40 pointer-events-none">
                  <span className="px-3 py-1 rounded-md text-gray-400">Mensual</span>
                  <span className="px-3 py-1 rounded-md text-gray-400">Anual <span className="text-green-600">-15%</span></span>
                </div>
              )}
              {/* Price */}
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.monthly === 0
                    ? "$0"
                    : `$${billing === "mensual" ? plan.monthly : plan.annual}`}
                </span>
                <span className="text-sm text-gray-500 mb-1">{plan.suffix}</span>
              </div>
              {/* Limits */}
              <div className="flex justify-between text-center bg-gray-50 rounded-xl px-2 py-3">
                {[
                  { val: plan.users, label: plan.usersLabel },
                  { val: plan.assets, label: plan.assetsLabel },
                  { val: plan.plants, label: plan.plantsLabel },
                ].map((item) => (
                  <div key={item.label} className="flex-1">
                    <div className="text-base font-bold text-gray-800">{item.val}</div>
                    <div className="text-[11px] text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm text-gray-700">
                    {f.ai ? (
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                    ) : (
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                    )}
                    <span className={f.ai ? "text-blue-600 font-medium" : ""}>{f.text}</span>
                  </li>
                ))}
              </ul>
              {/* CTA */}
              <button className={`mt-2 w-full py-2.5 rounded-xl font-semibold text-sm transition-colors ${plan.ctaStyle}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-14">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Comparación detallada</h2>
        </div>
        <div className="mt-2">
          <table className="w-full border-collapse text-sm bg-white">
            <thead>
              <tr>
                <th className="uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-left rounded-tl-xl sticky top-0 z-30" style={{ background: '#f4f4f4', color: '#374151' }}>Funcionalidad</th>
                <th className="uppercase tracking-wider text-[11px] font-bold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4', color: '#374151' }}>Gratuito</th>
                <th className="uppercase tracking-wider text-[11px] font-bold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4', color: '#374151' }}>Profesional</th>
                <th className="uppercase tracking-wider text-[11px] font-bold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4', color: '#374151' }}>Equipo</th>
                <th className="uppercase tracking-wider text-[11px] font-bold py-3 px-2 text-center rounded-tr-xl sticky top-0 z-30" style={{ background: '#f4f4f4', color: '#374151' }}>Planta</th>
              </tr>
            </thead>
            <tbody>
              {/* LÍMITES DE CUENTA */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Límites de cuenta</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Usuarios</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">Hasta 5</td>
                <td className="text-center">Hasta 15</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Activos registrados</td>
                <td className="text-center">10</td>
                <td className="text-center">30</td>
                <td className="text-center">100</td>
                <td className="text-center">500</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Plantas</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">Hasta 3</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Bloques de activos adicionales</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓ $25/mes por 50 activos</td>
                <td className="text-center text-green-600 font-bold">✓ $25/mes por 50 activos</td>
              </tr>
              {/* MÓDULOS */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Módulos</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Taxonomía de activos</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">RCA — Análisis de Causa Raíz</td>
                <td className="text-center">Hasta 5 proyectos</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">RCM — Mantenimiento Centrado en Confiabilidad</td>
                <td className="text-center">Hasta 5 planes</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Módulos futuros (seguridad, calidad, etc.)</td>
                <td className="text-center">Demo / limitado</td>
                <td className="text-center">Podrían incluirse*</td>
                <td className="text-center">Podrían incluirse*</td>
                <td className="text-center">Podrían incluirse*</td>
              </tr>
              {/* ASISTENTE DE INTELIGENCIA ARTIFICIAL */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Asistente de inteligencia artificial</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Generación de hipótesis (RCA)</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Análisis de modos de falla (RCA)</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asistente IA para RCM</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">IA en módulos futuros</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
              </tr>
              {/* COLABORACIÓN Y GESTIÓN */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Colaboración y gestión</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asignación de ENT (Equipo Natural de Trabajo)</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asignación de responsables en recomendaciones</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Permisos y roles configurables</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Dashboard compartido</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Crear proyectos para otros usuarios</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓ Configurable</td>
                <td className="text-center text-green-600 font-bold">✓ Configurable</td>
              </tr>
              {/* REPORTES Y EXPORTACIÓN */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Reportes y exportación</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Exportar reportes (PDF, Excel)</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Dashboard de indicadores (KPIs)</td>
                <td className="text-center">Básico</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
              </tr>
              {/* INFRAESTRUCTURA Y SOPORTE */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Infraestructura y soporte</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Multi-planta</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓ Hasta 3</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Soporte por correo electrónico</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Prioritario</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Tiempo de respuesta de soporte</td>
                <td className="text-center">72 horas hábiles</td>
                <td className="text-center">48 horas hábiles</td>
                <td className="text-center">48 horas hábiles</td>
                <td className="text-center">24 horas hábiles</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Facturación por orden de compra</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Almacenamiento de archivos adjuntos</td>
                <td className="text-center">500 MB</td>
                <td className="text-center">2 GB</td>
                <td className="text-center">10 GB</td>
                <td className="text-center">50 GB</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SECCIÓN 3: BLOQUES DE ACTIVOS ADICIONALES */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-sky-700 border-b-2 border-sky-100 pb-2 mb-4">Bloques de activos adicionales</h2>
          <div className="bg-sky-50 border border-sky-200 border-l-4 border-l-sky-600 rounded p-4 mb-4 text-sm text-gray-700">
            Los planes <strong>Equipo</strong> y <strong>Planta</strong> permiten ampliar la capacidad de activos registrados mediante bloques adicionales, sin necesidad de cambiar de plan.
          </div>
          <table className="w-full border-collapse text-sm mb-8">
            <thead>
              <tr>
                <th className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800">Concepto</th>
                <th className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800">Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Tamaño del bloque</td><td className="border border-gray-200 py-2 px-3"><strong>50 activos</strong> adicionales por bloque</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Precio por bloque</td><td className="border border-gray-200 py-2 px-3"><strong>$25 USD/mes</strong> (descuento del 15% en facturación anual)</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Disponibilidad</td><td className="border border-gray-200 py-2 px-3">Planes Equipo y Planta</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Activación</td><td className="border border-gray-200 py-2 px-3">Inmediata al contratar. Se puede agregar o remover bloques en cualquier momento.</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Facturación</td><td className="border border-gray-200 py-2 px-3">Prorrateado al ciclo de facturación vigente del plan base</td></tr>
            </tbody>
          </table>
          <h3 className="text-base font-semibold text-gray-700 mb-2">Ejemplo de escalamiento con bloques</h3>
          <table className="w-full border-collapse text-sm mb-4">
            <thead>
              <tr>
                {['Activos necesarios','Plan base','Bloques extra','Costo mensual total','Costo anual (con 15% dto.)'].map(h => (
                  <th key={h} className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">≤ 100</td><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">0</td><td className="border border-gray-200 py-2 px-3">$99</td><td className="border border-gray-200 py-2 px-3">$1,009</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">150</td><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">1</td><td className="border border-gray-200 py-2 px-3">$124</td><td className="border border-gray-200 py-2 px-3">$1,265</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">200</td><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">2</td><td className="border border-gray-200 py-2 px-3">$149</td><td className="border border-gray-200 py-2 px-3">$1,520</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">250</td><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">3</td><td className="border border-gray-200 py-2 px-3">$174</td><td className="border border-gray-200 py-2 px-3">$1,774</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">300</td><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">4</td><td className="border border-gray-200 py-2 px-3">$199</td><td className="border border-gray-200 py-2 px-3">$2,030</td></tr>
              <tr className="bg-amber-50"><td className="border border-gray-200 py-2 px-3">350+</td><td colSpan={4} className="border border-gray-200 py-2 px-3 font-semibold text-center">Plan Planta ($245/mes) — hasta 500 activos + 15 usuarios + multi-planta + soporte prioritario</td></tr>
            </tbody>
          </table>
        </div>

        {/* SECCIÓN 4: FACTURACIÓN */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-sky-700 border-b-2 border-sky-100 pb-2 mb-4">Facturación y métodos de pago</h2>
          <table className="w-full border-collapse text-sm mb-4">
            <thead>
              <tr>
                <th className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800 w-1/4">Plan</th>
                <th className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800">Período</th>
                <th className="bg-sky-100 border border-sky-200 py-2 px-3 text-left font-semibold text-sky-800">Métodos de pago aceptados</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Gratuito</td><td className="border border-gray-200 py-2 px-3">No aplica</td><td className="border border-gray-200 py-2 px-3">No aplica</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Profesional</td><td className="border border-gray-200 py-2 px-3">Mensual o Anual</td><td className="border border-gray-200 py-2 px-3">Tarjeta de crédito/débito</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Equipo</td><td className="border border-gray-200 py-2 px-3">Mensual o Anual</td><td className="border border-gray-200 py-2 px-3">Tarjeta de crédito/débito · Transferencia bancaria</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Planta</td><td className="border border-gray-200 py-2 px-3">Mensual, Trimestral o Anual</td><td className="border border-gray-200 py-2 px-3">Tarjeta de crédito/débito · Transferencia bancaria · Orden de compra</td></tr>
              <tr className="even:bg-[#f1f5f9]"><td className="border border-gray-200 py-2 px-3">Empresa</td><td className="border border-gray-200 py-2 px-3">Personalizado</td><td className="border border-gray-200 py-2 px-3">Todos los anteriores · Facturación corporativa personalizada</td></tr>
            </tbody>
          </table>
          <div className="bg-sky-50 border border-sky-200 border-l-4 border-l-sky-600 rounded p-4 text-sm text-gray-700">
            <strong>Descuento por pago anual:</strong> 15% de descuento sobre el precio mensual. El descuento aplica tanto al plan base como a los bloques de activos adicionales contratados.
          </div>
        </div>

        {/* SECCIÓN 5: TÉRMINOS Y CONDICIONES */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-sky-700 border-b-2 border-sky-100 pb-2 mb-4">Términos y condiciones del servicio</h2>
          <div className="text-sm text-gray-700 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Definiciones</h3>
              <div className="bg-gray-100 border-l-4 border-gray-300 p-3 rounded text-sm space-y-1">
                <p><strong>"Plataforma"</strong> se refiere a la aplicación web Reliaplant y todos sus módulos.</p>
                <p><strong>"Organización"</strong> es la entidad (empresa, planta o persona) titular de la cuenta.</p>
                <p><strong>"Usuario"</strong> es cada persona con credenciales únicas de acceso a la Plataforma.</p>
                <p><strong>"Activo"</strong> es cada equipo, componente o elemento registrado en el módulo de Taxonomía.</p>
                <p><strong>"Planta"</strong> es cada unidad operativa, localidad o división configurada en la Organización.</p>
                <p><strong>"Bloque adicional"</strong> es un paquete de 50 activos contratado como extensión del plan base.</p>
                <p><strong>"Asistente IA"</strong> se refiere a las funcionalidades de inteligencia artificial integradas en la Plataforma.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Contratación y vigencia</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Activación:</strong> El plan seleccionado se activa inmediatamente al completar el proceso de suscripción y pago (o registro, en el caso del plan Gratuito).</li>
                <li><strong>Renovación:</strong> Los planes se renuevan automáticamente al finalizar cada período de facturación salvo cancelación previa.</li>
                <li><strong>Período de gracia:</strong> En caso de falla en el cobro, la Organización tendrá un período de gracia de 7 días naturales para regularizar el pago antes de la suspensión del servicio.</li>
                <li><strong>Cambio de plan:</strong> La Organización puede cambiar a un plan superior en cualquier momento. El cambio se prorratea al ciclo de facturación vigente. El cambio a un plan inferior se efectúa al inicio del siguiente ciclo.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Límites y uso aceptable</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Usuarios:</strong> Cada usuario debe corresponder a una persona física identificable. No se permite compartir credenciales de acceso entre varias personas.</li>
                <li><strong>Activos:</strong> Al alcanzar el límite, no se podrán registrar nuevos activos hasta que se contrate un bloque adicional o se cambie a un plan superior.</li>
                <li><strong>Proyectos RCA y planes RCM:</strong> Ilimitados en todos los planes pagos. El plan Gratuito permite un máximo de 5 proyectos RCA y 5 planes RCM activos simultáneamente.</li>
                <li><strong>Almacenamiento:</strong> El límite aplica a archivos adjuntos cargados a la Plataforma. No incluye los datos estructurados de la aplicación.</li>
                <li><strong>Asistente IA:</strong> Incluido en todos los planes sin costo adicional. Reliaplant se reserva el derecho de implementar límites de uso razonables en caso de uso excesivo.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Bloques de activos adicionales</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Disponibilidad:</strong> Los bloques adicionales están disponibles exclusivamente para los planes Equipo y Planta.</li>
                <li><strong>Contratación:</strong> Se pueden agregar bloques en cualquier momento. La facturación se prorratea al ciclo vigente.</li>
                <li><strong>Remoción:</strong> La remoción de bloques se efectúa al inicio del siguiente ciclo de facturación. Los activos existentes no se eliminan, pero no se podrán registrar nuevos hasta que el número esté dentro del límite vigente.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Suspensión, cancelación y reembolsos</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Falta de pago:</strong> Transcurrido el período de gracia de 7 días, <strong>se suspenderá el acceso de forma inmediata</strong>. La cuenta no se convierte al plan Gratuito.</li>
                <li><strong>No renovación:</strong> <strong>El acceso se suspende al finalizar el período pagado</strong>. No se degrada al plan Gratuito.</li>
                <li><strong>Cancelación voluntaria:</strong> El acceso se mantiene hasta el final del período de facturación pagado.</li>
                <li><strong>Reembolsos (mensual):</strong> No se realizan reembolsos por períodos parciales en facturación mensual.</li>
                <li><strong>Reembolsos (anual):</strong> Cancelación dentro de los primeros 30 días: reembolso proporcional a meses no utilizados. Después de 30 días, no hay reembolsos.</li>
                <li><strong>Conservación de datos:</strong> Los datos se conservarán durante <strong>90 días naturales</strong> tras la suspensión. Después de 90 días, se eliminan de forma permanente.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Propiedad de los datos</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Propiedad:</strong> Todos los datos ingresados son propiedad exclusiva de la Organización. Reliaplant actúa únicamente como procesador de datos.</li>
                <li><strong>Uso de datos:</strong> Reliaplant no compartirá, venderá ni utilizará los datos para fines distintos a la prestación del servicio.</li>
                <li><strong>Datos anonimizados:</strong> Reliaplant podrá utilizar datos agregados y anonimizados con fines estadísticos y de mejora del servicio.</li>
                <li><strong>Asistente IA:</strong> Los datos enviados al Asistente IA se procesan exclusivamente para generar las respuestas solicitadas. No se utilizan para entrenar modelos ni se comparten con terceros.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Disponibilidad del servicio</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>SLA:</strong> 99.5% de disponibilidad mensual para todos los planes pagos. El plan Gratuito no tiene SLA garantizado.</li>
                <li><strong>Mantenimiento:</strong> Los períodos de mantenimiento programado se notificarán con al menos 48 horas de anticipación.</li>
                <li><strong>Soporte:</strong> En español e inglés, lunes a viernes 9:00–18:00 (GMT-6).</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Modificaciones a los planes</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Cambios de precios:</strong> Se notificarán con al menos 30 días de anticipación. Las suscripciones anuales vigentes mantienen su precio hasta la siguiente renovación.</li>
                <li><strong>Cambios de funcionalidades:</strong> Se notificará a los usuarios afectados con al menos 15 días de anticipación.</li>
                <li><strong>Nuevos módulos:</strong> Su inclusión en los planes existentes no está garantizada. Las condiciones se comunicarán al momento de su lanzamiento.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Plan Gratuito — condiciones especiales</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Reliaplant se reserva el derecho de limitar funcionalidades o descontinuar el plan Gratuito con 60 días de anticipación.</li>
                <li>Las cuentas gratuitas inactivas por más de 180 días podrán ser desactivadas previo aviso de 30 días.</li>
                <li>El plan Gratuito no incluye SLA, soporte prioritario ni facturación por orden de compra.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* SECCIÓN 6: PREGUNTAS FRECUENTES */}
        <div className="mt-12 mb-16">
          <h2 className="text-xl font-bold text-sky-700 border-b-2 border-sky-100 pb-2 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Qué pasa si no renuevo o no pago mi suscripción?</h3>
              <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded p-3">
                <p><strong>Se suspende el acceso a la Plataforma.</strong> La cuenta no se convierte al plan Gratuito — pierdes el acceso por completo hasta que reactives una suscripción paga. Tus datos se conservan durante 90 días. Después de 90 días, los datos se eliminan permanentemente.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Qué pasa si excedo el límite de activos de mi plan?</h3>
              <p>No se eliminarán activos existentes. Simplemente no podrás registrar nuevos activos hasta que agregues un bloque adicional o cambies a un plan superior.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Puedo usar un solo usuario para todo mi equipo?</h3>
              <p>No. Cada usuario debe ser una persona individual con credenciales únicas. Compartir cuentas compromete la trazabilidad de las investigaciones y viola los términos de uso.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿El Asistente IA tiene costo adicional?</h3>
              <p>No. El Asistente IA está incluido en todos los planes, incluyendo el plan Gratuito. La IA asiste en la generación de hipótesis, análisis de modos de falla, y en la investigación de causas raíz.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Qué pasa cuando se lancen nuevos módulos?</h3>
              <p>Los módulos futuros podrían incluirse en los planes pagos existentes, pero esto no está garantizado. Las condiciones de acceso y precio se comunicarán al momento de su lanzamiento.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Puedo pagar con orden de compra?</h3>
              <p>La facturación por orden de compra está disponible para los planes Planta y Empresa. Los planes Profesional y Equipo aceptan tarjeta de crédito/débito y transferencia bancaria.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Hay contrato de permanencia?</h3>
              <p>No. Todos los planes son sin compromiso de permanencia. Puedes cancelar en cualquier momento y mantener el acceso hasta el final del período pagado.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Cómo funciona el descuento anual?</h3>
              <p>Al elegir facturación anual, obtienes un 15% de descuento sobre el precio mensual. El pago se realiza en un solo cargo al inicio del período anual. El descuento aplica también a los bloques de activos adicionales.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">¿Puedo reactivar mi cuenta después de una suspensión?</h3>
              <p>Sí, dentro de los 90 días posteriores a la suspensión. Al reactivar una suscripción paga, recuperas el acceso completo a todos tus datos tal como los dejaste.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

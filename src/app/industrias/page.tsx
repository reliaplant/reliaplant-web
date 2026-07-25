import React from "react";
import {
  ArrowRight,
  Industry,
  ChartLineData,
  DataStructured,
  Task,
  Chemistry,
  ChemistryReference,
  DrillDown,
  Wheat,
  WhitePaper,
} from "@carbon/icons-react";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import IndustriaNav from "./IndustriaNav";

export const metadata = {
  title: "Industrias donde la confiabilidad marca la diferencia | Reliaplant",
  description:
    "Plataforma diseñada para entornos industriales donde la disponibilidad de equipos impacta producción, seguridad y rentabilidad. Oil & Gas, Energía, Manufactura y más.",
};

export default function IndustriasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/planta.webp"
            alt="Planta industrial"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Industry size={32} className="text-blue-400" />
            <span className="text-blue-400 font-medium uppercase tracking-wide text-sm">
              Industrias
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Industrias donde la confiabilidad marca la diferencia
          </h1>

          <p className="text-2xl text-white/90 mb-8 max-w-7xl">
            Nuestra plataforma está diseñada para entornos industriales donde la
            disponibilidad de los equipos impacta directamente la producción, la
            seguridad y la rentabilidad.
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-7xl">
            <p className="text-lg text-white/90 font-medium">
              No importa si la operación es continua o por lotes:
            </p>
            <p className="text-xl text-white mt-2 font-semibold">
              Si las fallas afectan tu negocio, la confiabilidad importa.
            </p>
          </div>
        </div>
      </section>

      <IndustriaNav />

      {/* ============================================================ */}
      {/* Oil & Gas                                                    */}
      {/* ============================================================ */}
      <section id="industria-oilygas" className="scroll-mt-[110px] py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 border border-gray-200">

            {/* Contenido */}
            <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-4">
                Oil &amp; Gas · Petróleo · Refinería
              </span>
              <h2 className="font-bold text-gray-900 leading-tight mb-3" style={{ fontSize: '1.6rem' }}>
                Cuando una falla rara vez es solo técnica
              </h2>
              <p className="mb-6" style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>
                En petróleo y gas, cada parada no planificada arrastra pérdidas de
                producción, riesgo de seguridad e impacto ambiental al mismo tiempo.
                La ingeniería de confiabilidad no es una ventaja competitiva —
                es un requisito operativo.
              </p>
              <div className="mb-6">
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                  Módulos aplicables
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Registro de Activos (ISO 14224)</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">RCA estructurado</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Estrategia RCM</span>
                </div>
              </div>
              <div style={{ borderLeft: '4px solid #2563eb', background: '#f8faff', padding: '14px 18px' }}>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">Resultado esperado</p>
                <p className="font-semibold text-gray-900 leading-snug" style={{ fontSize: '0.9rem' }}>
                  Menos incertidumbre técnica. Mayor control operativo en activos críticos.
                </p>
              </div>
            </div>

            {/* Foto */}
            <div className="relative min-h-[420px] h-64 lg:h-auto overflow-hidden">
              <Image src="/assets/flare.webp" alt="Operación Oil & Gas" fill className="object-cover object-center" sizes="50vw" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Energía                                                      */}
      {/* ============================================================ */}
      <section id="industria-energia" className="scroll-mt-[110px] py-8 md:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 border border-gray-200">

            {/* Foto */}
            <div className="relative min-h-[420px] h-64 lg:h-auto overflow-hidden order-2 lg:order-1">
              <Image src="/assets/bgPerformance.webp" alt="Infraestructura energética" fill className="object-cover object-center" sizes="50vw" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center px-6 py-10 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 order-1 lg:order-2">
              <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-4">
                Energía · Utilities · Generación · Distribución
              </span>
              <h2 className="font-bold text-gray-900 leading-tight mb-3" style={{ fontSize: '1.6rem' }}>
                La continuidad del servicio no admite margen de error
              </h2>
              <p className="mb-6" style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>
                En generación y distribución, una falla puede comprometer indicadores
                regulatorios y la percepción de todo el sistema. La calidad del análisis
                de fallas determina directamente la calidad del servicio.
              </p>
              <div className="mb-6">
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                  Módulos aplicables
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">RCA en equipos críticos</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Planes RCM estructurados</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Base de activos organizada</span>
                </div>
              </div>
              <div style={{ borderLeft: '4px solid #2563eb', background: '#f8faff', padding: '14px 18px' }}>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">Resultado esperado</p>
                <p className="font-semibold text-gray-900 leading-snug" style={{ fontSize: '0.9rem' }}>
                  Mejor control de la confiabilidad del sistema. KPIs técnicos más confiables.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Manufactura                                                  */}
      {/* ============================================================ */}
      <section id="industria-manufactura" className="scroll-mt-[110px] py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 border border-gray-200">

            {/* Contenido */}
            <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <span className="block text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-4">
                Manufactura · Proceso Continuo · Producción
              </span>
              <h2 className="font-bold text-gray-900 leading-tight mb-3" style={{ fontSize: '1.6rem' }}>
                Cuando la productividad depende de disponibilidad constante
              </h2>
              <p className="mb-6" style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>
                En manufactura continua, el mantenimiento reactivo se paga caro.
                Las fallas recurrentes no son mala suerte — son el síntoma de un análisis
                incompleto o una estrategia de mantenimiento mal estructurada.
              </p>
              <div className="mb-6">
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                  Módulos aplicables
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">RCA ágiles y precisos</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Estrategia RCM coherente</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">Calidad de datos de mantenimiento</span>
                </div>
              </div>
              <div style={{ borderLeft: '4px solid #2563eb', background: '#f8faff', padding: '14px 18px' }}>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">Resultado esperado</p>
                <p className="font-semibold text-gray-900 leading-snug" style={{ fontSize: '0.9rem' }}>
                  Mayor estabilidad operativa. Menos intervenciones correctivas no planificadas.
                </p>
              </div>
            </div>

            {/* Foto */}
            <div className="relative min-h-[420px] h-64 lg:h-auto overflow-hidden">
              <Image src="/assets/bgManufactura.webp" alt="Planta de manufactura" fill className="object-cover object-center" sizes="50vw" />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Otras industrias                                             */}
      {/* ============================================================ */}
      <section id="industria-otras" className="scroll-mt-[110px] py-20 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-[260px_1fr] gap-16 items-start">

            {/* Left label */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-4">
                También aplica en
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                Otras industrias
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                La confiabilidad no depende del sector — depende de la criticidad
                de los activos y el impacto real de las fallas.
              </p>
              <AbrirFormContacto
                buttonText="Conversemos"
                buttonColor="bg-blue-600"
                textColor="text-white"
                modalTitle="Agenda una conversación técnica"
                especial="Industrias - Conversación técnica"
              />
            </div>

            {/* Right: grid table */}
            <div className="border border-gray-200 divide-y divide-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Chemistry size={18} className="text-blue-600" />
                    <p className="font-semibold text-gray-900 text-sm">Petroquímica</p>
                  </div>
                  <p className="text-gray-400 text-xs">Activos críticos + regulación estricta</p>
                </div>
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <DrillDown size={18} className="text-blue-600" />
                    <p className="font-semibold text-gray-900 text-sm">Minería y procesamiento</p>
                  </div>
                  <p className="text-gray-400 text-xs">Alto impacto económico de paradas</p>
                </div>
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Wheat size={18} className="text-blue-600" />
                    <p className="font-semibold text-gray-900 text-sm">Alimentos y bebidas</p>
                  </div>
                  <p className="text-gray-400 text-xs">Inocuidad + disponibilidad continua</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <WhitePaper size={18} className="text-blue-600" />
                    <p className="font-semibold text-gray-900 text-sm">Papel y celulosa</p>
                  </div>
                  <p className="text-gray-400 text-xs">Procesos continuos de alta exigencia</p>
                </div>
                <div className="px-6 py-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <ChemistryReference size={18} className="text-blue-600" />
                    <p className="font-semibold text-gray-900 text-sm">Química industrial</p>
                  </div>
                  <p className="text-gray-400 text-xs">Seguridad + trazabilidad normativa</p>
                </div>
                <div className="px-6 py-5 bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Industry size={18} className="text-blue-600" />
                    <p className="font-semibold text-blue-600 text-sm">¿Tu industria?</p>
                  </div>
                  <p className="text-blue-500 text-xs">Si las fallas afectan tu negocio, aplica.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Final                                                    */}
      {/* ============================================================ */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60 mb-5">
            Siguiente paso
          </p>
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight">
            Hablemos de tu operación
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-7xl mx-auto">
            Podemos mostrarte cómo aplica en tu industria, qué impacto esperar
            y cómo integrarlo a tu operación actual.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-7xl mx-auto">
            <div className="bg-white/10 border border-white/20 p-5">
              <DataStructured size={22} className="text-white/70 mb-3" />
              <p className="text-white/90 text-sm font-medium">Cómo se aplicaría en tu industria</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-5">
              <ChartLineData size={22} className="text-white/70 mb-3" />
              <p className="text-white/90 text-sm font-medium">Qué impacto operativo esperar</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-5">
              <Task size={22} className="text-white/70 mb-3" />
              <p className="text-white/90 text-sm font-medium">Cómo integrarlo a tu operación actual</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <AbrirFormContacto
              buttonText="Solicita una demo"
              buttonColor="bg-white"
              textColor="text-blue-600"
              modalTitle="Solicita una demo"
              especial="Industrias - Demo"
              icon={<ArrowRight size={20} className="text-blue-600" />}
            />
            <AbrirFormContacto
              buttonText="Diagnóstico inicial"
              buttonColor="bg-transparent border border-white"
              textColor="text-white"
              modalTitle="Diagnóstico inicial"
              especial="Industrias - Diagnóstico"
            />
          </div>

        </div>
      </section>
    </>
  );
}

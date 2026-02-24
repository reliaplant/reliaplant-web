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
            src="/assets/planta.jpg"
            alt="Planta industrial"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Industry size={32} className="text-blue-400" />
            <span className="text-blue-400 font-medium uppercase tracking-wide text-sm">
              Industrias
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Industrias donde la confiabilidad marca la diferencia
          </h1>

          <p className="text-2xl text-white/90 mb-8 max-w-3xl">
            Nuestra plataforma está diseñada para entornos industriales donde la
            disponibilidad de los equipos impacta directamente la producción, la
            seguridad y la rentabilidad.
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-3xl">
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
      {/* Oil & Gas — imagen izquierda, contenido derecha              */}
      {/* ============================================================ */}
      <section id="industria-oilygas" className="scroll-mt-[110px] border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[560px]">

          {/* Foto */}
          <div className="relative h-64 md:h-auto overflow-hidden order-1">
            <Image
              src="/assets/flare.jpg"
              alt="Operación Oil & Gas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/35 to-black/60" />
            <span className="absolute bottom-6 left-6 z-10 bg-blue-600 text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2">
              Industria Oil &amp; Gas
            </span>
          </div>

          {/* Contenido */}
          <div className="bg-white px-10 md:px-14 py-12 md:py-16 flex flex-col justify-center border-t border-gray-200 order-2">

            <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-600 inline-block flex-shrink-0" />
              Oil &amp; Gas · Petróleo · Refinería
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
              Cuando una falla rara vez<br className="hidden md:block" /> es solo técnica
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              En petróleo y gas, cada parada no planificada arrastra pérdidas de
              producción, riesgo de seguridad e impacto ambiental al mismo tiempo.
              La ingeniería de confiabilidad no es una ventaja competitiva —
              es un requisito operativo.
            </p>

            <div className="border-t border-gray-100 pt-6 mb-6">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                Módulos aplicables
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Registro de Activos (ISO 14224)
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  RCA estructurado
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Estrategia RCM
                </span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-5 bg-gray-50 py-4 pr-4">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">
                Resultado esperado
              </p>
              <p className="text-gray-900 font-semibold text-base leading-snug">
                Menos incertidumbre técnica. Mayor control operativo en activos críticos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Energía — contenido izquierda, imagen derecha                */}
      {/* ============================================================ */}
      <section id="industria-energia" className="scroll-mt-[110px] border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] min-h-[560px]">

          {/* Contenido */}
          <div className="bg-gray-50 px-10 md:px-14 py-12 md:py-16 flex flex-col justify-center border-t border-gray-200 order-2 md:order-1">

            <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-gray-600 inline-block flex-shrink-0" />
              Energía · Utilities · Generación · Distribución
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
              La continuidad del servicio<br className="hidden md:block" /> no admite margen de error
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              En generación y distribución, una falla puede comprometer indicadores
              regulatorios y la percepción de todo el sistema. La calidad del análisis
              de fallas determina directamente la calidad del servicio.
            </p>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                Módulos aplicables
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  RCA en equipos críticos
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Planes RCM estructurados
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Base de activos organizada
                </span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-5 bg-white py-4 pr-4">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">
                Resultado esperado
              </p>
              <p className="text-gray-900 font-semibold text-base leading-snug">
                Mejor control de la confiabilidad del sistema. KPIs técnicos más confiables.
              </p>
            </div>

          </div>

          {/* Foto */}
          <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
            <Image
              src="/assets/bgPerformance.jpg"
              alt="Infraestructura energética"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-black/35 to-black/60" />
            <span className="absolute bottom-6 right-6 z-10 bg-blue-600 text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2">
              Energía y Utilities
            </span>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* Manufactura — imagen izquierda, contenido derecha            */}
      {/* ============================================================ */}
      <section id="industria-manufactura" className="scroll-mt-[110px] border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[560px]">

          {/* Foto */}
          <div className="relative h-64 md:h-auto overflow-hidden order-1">
            <Image
              src="/assets/bgManufactura.jpg"
              alt="Planta de manufactura"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/35 to-black/60" />
            <span className="absolute bottom-6 left-6 z-10 bg-blue-600 text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2">
              Manufactura Continua
            </span>
          </div>

          {/* Contenido */}
          <div className="bg-white px-10 md:px-14 py-12 md:py-16 flex flex-col justify-center border-t border-gray-200 order-2">

            <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block flex-shrink-0" />
              Manufactura · Proceso Continuo · Producción
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
              Cuando la productividad depende<br className="hidden md:block" /> de disponibilidad constante
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              En manufactura continua, el mantenimiento reactivo se paga caro.
              Las fallas recurrentes no son mala suerte — son el síntoma de un análisis
              incompleto o una estrategia de mantenimiento mal estructurada.
            </p>

            <div className="border-t border-gray-100 pt-6 mb-6">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
                Módulos aplicables
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  RCA ágiles y precisos
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Estrategia RCM coherente
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5">
                  Calidad de datos de mantenimiento
                </span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-5 bg-gray-50 py-4 pr-4">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-blue-600 mb-1">
                Resultado esperado
              </p>
              <p className="text-gray-900 font-semibold text-base leading-snug">
                Mayor estabilidad operativa. Menos intervenciones correctivas no planificadas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Otras industrias                                             */}
      {/* ============================================================ */}
      <section id="industria-otras" className="scroll-mt-[110px] py-20 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">

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
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/60 mb-5">
            Siguiente paso
          </p>
          <h2 className="text-4xl font-extrabold mb-5 tracking-tight">
            Hablemos de tu operación
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Podemos mostrarte cómo aplica en tu industria, qué impacto esperar
            y cómo integrarlo a tu operación actual.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
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

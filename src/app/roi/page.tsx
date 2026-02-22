import React from "react";
import {
  CheckmarkFilled,
  ArrowRight,
  Download,
  Time,
  Analytics,
  ChartLineData,
  Security,
  DataStructured,
  Renew,
  TaskComplete,
  Warning,
  Growth,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import ROICalculator from "@/components/ROICalculator";

export const metadata = {
  title: "ROI de la Confiabilidad Industrial | Reliaplant",
  description:
    "El retorno de invertir en confiabilidad bien aplicada. Menos fallas recurrentes, mejores decisiones técnicas, mayor disponibilidad operacional.",
};

export default function ROIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bgKPIs.jpg"
            alt="KPIs de confiabilidad industrial"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <ChartLineData size={32} className="text-green-400" />
            <span className="text-green-400 font-medium uppercase tracking-wide text-sm">
              Retorno de Inversión
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            El retorno de invertir en confiabilidad bien aplicada
          </h1>

          <p className="text-2xl text-white/90 mb-8 max-w-3xl">
            Nuestra plataforma fortalece los pilares de la confiabilidad para que la ingeniería genere{" "}
            <strong className="text-white">impacto operativo real</strong>.{" "}
            En mantenimiento industrial, el retorno rara vez viene de un solo factor. No es solo ahorro directo.
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-3xl">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Menos fallas recurrentes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Mejores decisiones técnicas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Mayor disponibilidad operacional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Menos tiempo desperdiciado en tareas administrativas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Descargable CTA */}
      <section className="py-12 px-4 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Download size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Descarga el resumen ejecutivo
                </h3>
                <p className="text-white/90">
                  Documento PDF para compartir con tu equipo directivo
                </p>
              </div>
            </div>
            <a 
              href="/docs/roi-confiabilidad-reliaplant.pdf" 
              download
              className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
            >
              Descargar PDF
              <Download size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Dónde se genera el retorno */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Dónde normalmente se genera el retorno
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tiempo técnico recuperado */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Time size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Tiempo técnico recuperado
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                Equipos invierten horas en RCA manuales, RCM en hojas de cálculo y búsqueda de información dispersa.
              </p>
              
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-700 font-medium mb-2">Permite enfocarse en:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Prevención de fallas</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Supervisión técnica</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Mejora continua</span>
                </div>
              </div>
            </div>

            {/* Menos fallas recurrentes */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Renew size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Menos fallas recurrentes
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                Cuando la causa raíz se identifica correctamente y la estrategia está bien estructurada:
              </p>
              
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 flex-shrink-0" />
                  <span>Se reducen intervenciones repetitivas</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 flex-shrink-0" />
                  <span>Mejora la disponibilidad</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 flex-shrink-0" />
                  <span>Disminuyen costos indirectos</span>
                </li>
              </ul>
            </div>

            {/* Mejores decisiones */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Analytics size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Mejores decisiones de mantenimiento
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                Datos organizados y trazables permiten:
              </p>
              
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-purple-500 flex-shrink-0" />
                  <span>Indicadores confiables</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-purple-500 flex-shrink-0" />
                  <span>Planificación más realista</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-purple-500 flex-shrink-0" />
                  <span>Menor incertidumbre técnica</span>
                </li>
              </ul>
            </div>

            {/* Base sólida */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <DataStructured size={24} className="text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Base sólida para crecer
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                Sin taxonomía clara, los sistemas pierden utilidad y los datos se degradan.
              </p>
              
              <div className="bg-white rounded-lg p-3 border-l-4 border-teal-500">
                <p className="text-sm text-gray-700 font-medium">
                  Una base técnica bien estructurada permite escalar operaciones sin perder control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora de ROI */}
      <ROICalculator />

      {/* Reducción de riesgo */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Más que ahorro inmediato: reducción de riesgo
            </h2>
            <p className="text-lg text-white/80">
              Muchas organizaciones invierten en confiabilidad principalmente por:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <Security size={32} className="text-blue-400 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Continuidad operacional</h4>
              <p className="text-white/70 text-sm">
                Mantener la operación funcionando sin interrupciones inesperadas
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <Security size={32} className="text-green-400 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Seguridad industrial</h4>
              <p className="text-white/70 text-sm">
                Prevenir incidentes que afecten personas o instalaciones
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <TaskComplete size={32} className="text-purple-400 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Cumplimiento regulatorio</h4>
              <p className="text-white/70 text-sm">
                Satisfacer requisitos normativos y auditorías
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <Growth size={32} className="text-teal-400 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Estabilidad productiva</h4>
              <p className="text-white/70 text-sm">
                Producción predecible y consistente
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-white/90">
            Nuestra plataforma facilita aplicar estas metodologías correctamente 
            <span className="font-semibold text-white"> sin aumentar la carga administrativa</span>.
          </p>
        </div>
      </section>

      {/* Segundo CTA descargable */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ¿Necesitas presentar esto a tu equipo directivo?
                </h3>
                <p className="text-gray-600 mb-4">
                  Descarga nuestro resumen ejecutivo con los puntos clave del retorno 
                  de inversión en confiabilidad. Diseñado para compartir con gerentes 
                  y tomadores de decisión.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-green-500" />
                    <span>Formato ejecutivo (2 páginas)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-green-500" />
                    <span>Enfocado en impacto operativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-green-500" />
                    <span>Sin tecnicismos innecesarios</span>
                  </li>
                </ul>
                <a 
                  href="/docs/roi-confiabilidad-reliaplant.pdf" 
                  download
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
                >
                  Descargar resumen ejecutivo
                  <Download size={20} />
                </a>
              </div>
              <div className="w-48 h-60 rounded-lg shadow-lg border overflow-hidden relative">
                <Image
                  src="/assets/bgPerformance3.jpg"
                  alt="Impacto operativo de la confiabilidad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent flex items-end justify-center pb-4">
                  <div className="text-center">
                    <Download size={28} className="text-white mx-auto mb-1" />
                    <p className="text-xs text-white/90 font-semibold">ROI Confiabilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Quieres evaluar el impacto en tu operación?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Podemos hacer un diagnóstico inicial para identificar oportunidades 
            de mejora en tu gestión de confiabilidad.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <AbrirFormContacto
              buttonText="Solicita un diagnóstico"
              buttonColor="bg-white"
              textColor="text-blue-600"
              modalTitle="Solicita un diagnóstico"
              especial="ROI - Diagnóstico"
              icon={<ArrowRight size={20} className="text-blue-600" />}
            />
            <AbrirFormContacto
              buttonText="Agenda una demo"
              buttonColor="bg-transparent border border-white"
              textColor="text-white"
              modalTitle="Agenda una demo"
              especial="ROI - Demo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

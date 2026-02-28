import React from "react";
import {
  CheckmarkFilled,
  ArrowRight,
  Download,
  ChartLineData,
  Security,
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
            <ChartLineData size={32} className="text-blue-400" />
            <span className="text-blue-400 font-medium uppercase tracking-wide text-sm">
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

          <div className="bg-white/10 border border-white/20 p-8 max-w-3xl">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Menos fallas recurrentes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Mejores decisiones técnicas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Mayor disponibilidad operacional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-lg">Menos tiempo desperdiciado en tareas administrativas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculadora de ROI */}
      <ROICalculator />

      {/* Beneficios operativos + reducción de riesgo — sección unificada */}
      <section className="pt-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="px-4 mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2">
              Más allá del cálculo
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Beneficios operativos y reducción de riesgo
            </h2>
            <p className="text-gray-500 text-base max-w-2xl">
              El retorno real va más allá del ahorro en horas técnicas. Reliaplant genera valor en dimensiones que no aparecen en una calculadora pero que impactan directamente la operación y la competitividad.
            </p>
          </div>

          {/* Bloque 1 — Continuidad operacional */}
          <div className="grid lg:grid-cols-2 border border-gray-200">
            <div className="flex flex-col justify-center px-10 py-12 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Security size={18} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">01</p>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                Continuidad operacional
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Estrategias de mantenimiento bien calibradas se traducen en menos paradas no planificadas y mayor uptime productivo. Una falla inesperada no solo detiene la producción — arrastra costos de emergencia, pérdida de contratos y deterioro de la reputación operativa.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Menos paradas no planificadas",
                  "Mayor disponibilidad de equipos críticos",
                  "Planes de mantenimiento basados en criticidad real",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckmarkFilled size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5">
                <span className="font-mono text-2xl font-bold text-blue-600">+30%</span>
                <p className="text-xs text-gray-400 mt-1 leading-snug">incremento en disponibilidad de equipos reportado por U.S. DOE con RCM implementado</p>
              </div>
            </div>
            <div className="relative min-h-[420px]">
              <Image src="/assets/roi-continuidad-operacional.jpg" alt="Planta industrial en operación continua" fill className="object-cover object-center" sizes="50vw" />
            </div>
          </div>

          {/* Bloque 2 — Seguridad industrial */}
          <div className="grid lg:grid-cols-2 border border-gray-200 border-t-0">
            <div className="relative min-h-[420px] order-2 lg:order-1">
              <Image src="/assets/roi-seguridad-industrial.jpg" alt="Inspector industrial con casco en campo" fill className="object-cover object-center" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center px-10 py-12 bg-white border-b lg:border-b-0 lg:border-l border-gray-200 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Warning size={18} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">02</p>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                Seguridad industrial
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Identificar y controlar modos de falla con consecuencias sobre la seguridad reduce drásticamente la probabilidad de incidentes graves. Un RCM bien ejecutado previene antes de que ocurran — no reacciona después.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "RCM orientado a seguridad funcional",
                  "Identificación de modos de falla con consecuencias críticas",
                  "Trazabilidad completa de decisiones técnicas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckmarkFilled size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5">
                <span className="font-mono text-2xl font-bold text-blue-600">−79%</span>
                <p className="text-xs text-gray-400 mt-1 leading-snug">en tasa de incidentes registrables en 3 años con RCA sistemático (usuarios TapRooT®)</p>
              </div>
            </div>
          </div>

          {/* Bloque 3 — Cumplimiento regulatorio */}
          <div className="grid lg:grid-cols-2 border border-gray-200 border-t-0">
            <div className="flex flex-col justify-center px-10 py-12 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <TaskComplete size={18} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">03</p>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                Cumplimiento regulatorio
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Registros completos y trazables facilitan la respuesta ante auditorías normativas sin necesidad de reconstruir información desde cero. La taxonomía estructurada permite reportar los KPIs de desempeño que exigen los estándares internacionales.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Registro completo y auditable de análisis realizados",
                  "Estandarización de procesos según normas internacionales",
                  "Evidencia técnica lista para cualquier auditoría",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckmarkFilled size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5">
                <span className="font-mono text-2xl font-bold text-blue-600">ISO 14224</span>
                <p className="text-xs text-gray-400 mt-1 leading-snug">define ~20 KPIs estándar que solo se pueden reportar correctamente con taxonomía estructurada</p>
              </div>
            </div>
            <div className="relative min-h-[420px]">
              <Image src="/assets/roi-cumplimiento-regulatorio.jpg" alt="Equipo revisando cumplimiento normativo en planta" fill className="object-cover object-center" sizes="50vw" />
            </div>
          </div>

          {/* Bloque 4 — Estabilidad productiva */}
          <div className="grid lg:grid-cols-2 border border-gray-200 border-t-0">
            <div className="relative min-h-[420px] order-2 lg:order-1">
              <Image src="/assets/roi-estabilidad-productiva.jpg" alt="Línea de producción industrial estable" fill className="object-cover object-center" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center px-10 py-12 bg-white border-b lg:border-b-0 lg:border-l border-gray-200 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Growth size={18} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">04</p>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                Estabilidad productiva
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Causas raíz correctamente identificadas y documentadas evitan que los mismos problemas reaparezcan ciclo tras ciclo. Producción predecible y consistente requiere activos gestionados con criterio técnico y datos confiables.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Reducción de fallas recurrentes documentada",
                  "Indicadores de desempeño trazables y confiables",
                  "Decisiones respaldadas en datos históricos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckmarkFilled size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5">
                <span className="font-mono text-2xl font-bold text-blue-600">Hasta 4×</span>
                <p className="text-xs text-gray-400 mt-1 leading-snug">mejora en MTBF documentada en acerías tras implementar RCA sistemático</p>
              </div>
            </div>
          </div>

          {/* Grid de beneficios adicionales */}
          <div className="border border-gray-200 border-t-0">
            <div className="px-10 py-8 border-b border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Beneficios adicionales del software</p>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {[
                {
                  stat: "75–85%",
                  title: "Decisiones técnicas de mayor calidad",
                  desc: "Precisión en selección de tareas con RCM vs. 40–50% en planificación intuitiva.",
                },
                {
                  stat: "$4–6/HP",
                  title: "Reducción de costos de emergencia",
                  desc: "Costo anual con RCM integrado vs. $17–18 en modo reactivo (U.S. FEMP 2010).",
                },
                {
                  stat: "−25–30%",
                  title: "Reducción del presupuesto de mantenimiento",
                  desc: "Estimado por Pinnacle Reliability en organizaciones con RCM bien implementado.",
                },
              ].map((b) => (
                <div key={b.stat} className="px-8 py-7 border-b last:border-b-0 border-gray-200 md:border-b-0 lg:last:border-r-0">
                  <span className="font-mono text-xl font-bold text-blue-600 block mb-2">{b.stat}</span>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{b.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fuentes */}
          <div className="mt-8 flex items-start gap-3">
            <div className="w-1 h-8 bg-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Datos respaldados por U.S. Department of Energy, NASA Marshall Flight Center, Baker Hughes Cordant™, TapRooT® RCA, Pinnacle Reliability, MaxGrip, Reliability Center Inc. y la base de datos OREDA. Los resultados varían según el contexto operacional y el grado de implementación.
            </p>
          </div>

        </div>
      </section>

      {/* Segundo CTA descargable */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  ¿Necesitas presentar esto a tu equipo directivo?
                </h3>
                <p className="text-white/70 mb-4">
                  Descarga nuestro resumen ejecutivo con los puntos clave del retorno 
                  de inversión en confiabilidad. Diseñado para compartir con gerentes 
                  y tomadores de decisión.
                </p>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-blue-400" />
                    <span>Formato ejecutivo (2 páginas)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-blue-400" />
                    <span>Enfocado en impacto operativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled size={16} className="text-blue-400" />
                    <span>Sin tecnicismos innecesarios</span>
                  </li>
                </ul>
                <a 
                  href="/docs/roi-confiabilidad-reliaplant.pdf" 
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold inline-flex items-center gap-2 transition-all"
                >
                  Descargar resumen ejecutivo
                  <Download size={20} />
                </a>
              </div>
              <div className="w-48 h-60 border border-white/20 overflow-hidden relative">
                <Image
                  src="/assets/ROI confiabilidad.png"
                  alt="Impacto operativo de la confiabilidad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end justify-center pb-4">
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
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
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
              buttonColor="bg-blue-600 hover:bg-blue-700"
              textColor="text-white"
              modalTitle="Solicita un diagnóstico"
              especial="ROI - Diagnóstico"
              icon={<ArrowRight size={20} className="text-white" />}
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

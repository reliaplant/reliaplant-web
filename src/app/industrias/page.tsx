import React from "react";
import {
  CheckmarkFilled,
  ArrowRight,
  Industry,
  Chemistry,
  ChartLineData,
  Warning,
  Security,
  TreeView,
  DataStructured,
  Task,
  Partnership,
} from "@carbon/icons-react";
import { Droplets, Zap, Factory, Wheat } from "lucide-react";
import Link from "next/link";
import AbrirFormContacto from "@/components/AbrirFormContacto";

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

      {/* Oil & Gas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Droplets size={32} className="text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Oil & Gas</h2>
              </div>

              <p className="text-xl text-gray-700 mb-6 font-medium">
                En petróleo y gas, una falla rara vez es solo técnica.
              </p>

              <p className="text-lg text-gray-600 mb-4">Puede implicar:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Pérdidas significativas de producción</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Security size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Riesgos de seguridad</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Impacto ambiental</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Presión regulatoria</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Cómo aporta la plataforma:
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>RCA mejor estructurados para eventos críticos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Estrategias RCM más claras y trazables</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Taxonomía consistente para activos complejos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Mejor soporte para decisiones de mantenimiento</span>
                </li>
              </ul>

              <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-1">Resultado esperado:</p>
                <p className="text-gray-700">
                  Menos incertidumbre técnica y mayor control operativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energía y Utilities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Zap size={32} className="text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Energía y Utilities
                </h2>
              </div>

              <p className="text-xl text-gray-700 mb-6 font-medium">
                La continuidad del servicio es clave.
              </p>

              <p className="text-lg text-gray-600 mb-4">Las fallas afectan:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Confiabilidad del suministro</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <ChartLineData size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Indicadores regulatorios</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Costos operativos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>Percepción del usuario final</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Aplicaciones comunes:
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Análisis de fallas en equipos críticos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Estructuración de planes de mantenimiento</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Organización de bases de activos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Mejora de indicadores técnicos</span>
                </li>
              </ul>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-1">Resultado esperado:</p>
                <p className="text-gray-700">
                  Mejor control de la confiabilidad del sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufactura continua */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Factory size={32} className="text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Manufactura continua
                </h2>
              </div>

              <p className="text-xl text-gray-700 mb-6 font-medium">
                Cuando la producción depende de disponibilidad constante:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Fallas recurrentes afectan productividad</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Mantenimiento reactivo eleva costos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Warning size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>La falta de trazabilidad complica decisiones</span>
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Cómo ayuda la plataforma:
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>RCA más ágiles y precisos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Estrategias RCM más coherentes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Mejor calidad de datos de mantenimiento</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Decisiones basadas en información confiable</span>
                </li>
              </ul>

              <div className="bg-teal-100 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-1">Resultado esperado:</p>
                <p className="text-gray-700">Mayor estabilidad operativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otras industrias */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Otras industrias donde aplica
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Aunque estas tres industrias suelen beneficiarse primero, la
              plataforma también aporta valor en:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <Chemistry size={32} className="text-purple-400 mx-auto mb-3" />
              <p className="font-medium">Petroquímica</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <Industry size={32} className="text-orange-400 mx-auto mb-3" />
              <p className="font-medium">Minería y procesamiento</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <Wheat size={32} className="text-green-400 mx-auto mb-3" />
              <p className="font-medium">Alimentos y bebidas</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <TreeView size={32} className="text-emerald-400 mx-auto mb-3" />
              <p className="font-medium">Papel y celulosa</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <Chemistry size={32} className="text-blue-400 mx-auto mb-3" />
              <p className="font-medium">Química industrial</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <Factory size={32} className="text-gray-400 mx-auto mb-3" />
              <p className="font-medium">
                Cualquier operación intensiva en activos
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-white/90 font-medium">
            Si la confiabilidad impacta tu negocio, podemos aportar.
          </p>
        </div>
      </section>

      {/* ¿No ves tu industria? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿No ves tu industria aquí?
              </h2>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Probablemente igual aplica.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                La confiabilidad industrial no depende solo del sector, sino de:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Criticidad de activos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Impacto de fallas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Necesidad de decisiones basadas en datos</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 font-medium">
                Podemos evaluar tu caso.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <Partnership size={48} className="text-blue-600 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Agenda una conversación técnica
              </p>
              <AbrirFormContacto
                buttonText="Conversemos"
                buttonColor="bg-blue60"
                textColor="text-white"
                modalTitle="Agenda una conversación técnica"
                especial="Industrias - Conversación técnica"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hablemos de tu operación</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Podemos mostrarte:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-lg p-5">
              <DataStructured size={24} className="text-white/80 mb-3" />
              <p className="text-white/90">Cómo se aplicaría en tu industria</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5">
              <ChartLineData size={24} className="text-white/80 mb-3" />
              <p className="text-white/90">Qué impacto esperar</p>
            </div>
            <div className="bg-white/10 rounded-lg p-5">
              <Task size={24} className="text-white/80 mb-3" />
              <p className="text-white/90">Cómo integrarlo a tu operación actual</p>
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

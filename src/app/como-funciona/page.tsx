import React from "react";
import StepNav from "./StepNav";
import {
  CheckmarkFilled,
  ArrowRight,
  DataBase,
  Network_3,
  DataStructured,
  Integration,
  ChartLineData,
  Partnership,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cómo funciona la plataforma | Reliaplant",
  description: "Ingeniería de confiabilidad sin burocracia técnica. Nuestra plataforma complementa tu CMMS facilitando metodologías de confiabilidad.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/engineeringRoom.jpg"
            alt="Sala de ingeniería industrial"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Scrim: fondo oscuro uniforme para garantizar CR ≥ 7:1 (WCAG AAA) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0f172a]/80 via-[#1a1a2e]/75 to-[#1e3a8a]/70" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl z-[1]" />
        
        <div className="max-w-5xl mx-auto relative z-[2]">
          <div className="flex items-center gap-3 mb-6">
            <Integration size={32} className="text-blue-400" />
            <span className="text-blue-400 font-medium tracking-wide text-sm">
              Ingeniería de Confiabilidad sin burocracia técnica
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Cómo funciona la plataforma
          </h1>

          <p className="text-2xl text-white/90 mb-8 max-w-3xl">
            Nuestra plataforma <strong className="text-white">no reemplaza tu CMMS</strong> ni tus sistemas actuales.
            Los complementa, facilitando la aplicación correcta de metodologías de confiabilidad,
            mejorando la calidad de datos y reduciendo el tiempo administrativo técnico.
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8 max-w-3xl">
            <p className="text-lg text-white/90 font-semibold mb-4">El objetivo es simple:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-lg">Mejores decisiones de mantenimiento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-lg">Menos fallas recurrentes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-lg">Ingeniería enfocada en resultados</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StepNav />

      {/* Paso 1: Taxonomía */}
      <section id="paso-1" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Organizamos la base técnica correctamente
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Todo empieza por los datos.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Con el módulo de taxonomía:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Estructuras activos según estándares como ISO 14224</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Defines relaciones padre-hijo correctas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Aseguras consistencia en la información</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  <span>Habilitas indicadores realmente útiles</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">Resultado:</p>
                <p className="text-gray-700">
                  Datos confiables para análisis y decisiones.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/assets/bgAssetRegister.png"
                alt="Taxonomía de activos industriales"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Módulo de Registro de Activos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paso 2: RCA */}
      <section id="paso-2" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg md:order-1">
              <Image
                src="/assets/bgACR.jpg"
                alt="Análisis de causa raíz en planta industrial"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Módulo RCA</span>
              </div>
            </div>

            <div className="md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Facilitamos análisis de fallas bien hechos (RCA)
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                El módulo RCA guía el proceso completo:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Estructuración del análisis</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Asistencia en redacción técnica</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Documentación clara y trazable</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento del análisis como proyecto</span>
                </li>
              </ul>

              <p className="text-lg text-gray-600 mb-3">Esto evita:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>RCA superficiales</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Informes inconsistentes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Causas raíz mal identificadas</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">Resultado:</p>
                <p className="text-gray-700">
                  Menos fallas recurrentes y mejor aprendizaje organizacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paso 3: RCM */}
      <section id="paso-3" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Transformamos el RCM en una herramienta práctica
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                El módulo RCM elimina los problemas típicos de las hojas de cálculo:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Duplicidad de tareas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Pérdida de trazabilidad</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Dificultad para actualizar estrategias</span>
                </li>
              </ul>

              <p className="text-lg text-gray-600 mb-4">La plataforma:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Mantiene relaciones claras entre activos, fallas y tareas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Evita inconsistencias metodológicas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Facilita actualizar planes de mantenimiento</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">Resultado:</p>
                <p className="text-gray-700">
                  Estrategias de mantenimiento más claras y ejecutables.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/assets/fondo-landing-rcm.png"
                alt="Proceso RCM estructurado"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Módulo RCM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paso 4: Integración */}
      <section id="paso-4" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg md:order-1">
              <Image
                src="/assets/bgSoftware.jpg"
                alt="Integración de sistemas industriales"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Integración progresiva</span>
              </div>
            </div>

            <div className="md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Integración progresiva, sin fricción
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">Puedes:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Implementar un módulo primero</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Escalar gradualmente</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Integrarlo con sistemas existentes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Adaptarlo a tu flujo actual</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">Lo importante:</p>
                <p className="text-gray-700">
                  No necesitas cambiar todo tu ecosistema tecnológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paso 5: Impacto */}
      <section id="paso-5" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">5</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Impacto operativo real
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Las empresas que estructuran bien estos procesos suelen lograr:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Menos tiempo administrativo técnico</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Mejores decisiones de mantenimiento</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Indicadores más confiables</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Menor recurrencia de fallas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Mejor comunicación entre mantenimiento y operaciones</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">Resultado:</p>
                <p className="text-gray-700">
                  Ingeniería de confiabilidad enfocada en resultados, no en papeleo.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/assets/bgPerformance.jpg"
                alt="KPIs e indicadores de confiabilidad"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Impacto operativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paso 6: Implementación */}
      <section id="paso-6" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg md:order-1">
              <Image
                src="/assets/bgCapacitacion.jpg"
                alt="Capacitación e implementación"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Implementación acompañada</span>
              </div>
            </div>

            <div className="md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">6</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Implementación simple y acompañada
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">Normalmente incluye:</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Diagnóstico inicial</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Configuración de módulos necesarios</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Capacitación técnica</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckmarkFilled size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Soporte continuo</span>
                </li>
              </ul>

              {/* Resultado */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold text-lg mb-1">El objetivo:</p>
                <p className="text-gray-700">
                  Adopción real, no solo instalación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para mejorar tu ingeniería de confiabilidad?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una demo para ver cómo la plataforma puede adaptarse a tu operación.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contacto" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
              Solicita una demo guiada
              <ArrowRight size={20} />
            </Link>
            <Link href="/#contacto" className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-medium inline-flex items-center gap-2 transition-all">
              Agenda un diagnóstico sin costo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

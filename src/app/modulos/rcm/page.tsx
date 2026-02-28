import React from "react";
import {
  DataStructured,
  CheckmarkFilled,
  ArrowLeft,
  ArrowRight,
  Education,
  Settings,
  TaskComplete,
  Restart,
  Renew,
  Copy,
  Time,
} from "@carbon/icons-react";
import Link from "next/link";
import RCMCtaButtons from "./RCMCtaButtons";
import Image from "next/image";
import RCMFeatures from "@/components/RCMFeatures";
import ModuleStickyBanner from "@/components/ModuleStickyBanner";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata = {
  title: "Módulo RCM - Reliability Centered Maintenance | Reliaplant",
  description: "Mantenimiento centrado en confiabilidad estructurado y centralizado. Gestiona el proceso RCM en un entorno diseñado para ello.",
};

export default function RCMPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo RCM" moduleType="rcm" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/landing-modulo-rcm.png"
            alt="Mantenimiento centrado en confiabilidad"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Scrim científico: lleva fondo efectivo a L≈0.034 para garantizar CR≥7:1 en texto normal */}
        <div className="absolute inset-0 z-[1] bg-blue-950/55" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl z-[1]" />
        
        {/* Botón Volver en esquina superior derecha */}
        <div className="max-w-5xl mx-auto relative z-[2]">
          <div className="absolute -top-16 right-0">
            <Link href="/#modulos" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={24} className="text-white" />
            </Link>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-[2]">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Mantenimiento Centrado en Confiabilidad
          </h1>

          <p className="text-2xl font-semibold text-white/90 mb-6">
            Reliability Centered Maintenance estructurado
          </p>

          <p className="text-lg text-white/75 max-w-3xl">
            Centraliza el proceso RCM en un entorno estructurado que permite relacionar activos, funciones y modos de falla sin duplicaciones.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 border border-gray-200">
        {/* Left: text content */}
        <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
          <span
            className="block font-bold uppercase text-red-500 mb-4"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
          >
            El problema hoy
          </span>

          <h2
            className="font-bold mb-3"
            style={{ fontSize: '1.6rem', color: '#0f172a', lineHeight: 1.25 }}
          >
            Las hojas de cálculo no están diseñadas para RCM
          </h2>

          <p
            className="mb-6"
            style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}
          >
            RCM suele hacerse en hojas de cálculo por tradición. Pero esa herramienta no fue diseñada para gestionar la complejidad de un análisis de confiabilidad serio.
          </p>

          {/* Pain point pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Plantillas inconsistentes',
              'Relaciones difíciles de visualizar',
              'Actividades duplicadas',
              'Sin trazabilidad',
              'Mantenimiento innecesario',
              'Baja disponibilidad',
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 font-medium"
                style={{
                  fontSize: '0.78rem',
                  color: '#991b1b',
                  background: '#fff1f2',
                  border: '1px solid #fecaca',
                  borderRadius: 999,
                  padding: '4px 12px',
                }}
              >
                <span className="text-red-400 font-bold text-xs">✕</span>
                {tag}
              </span>
            ))}
          </div>

          {/* Result highlight box */}
          <div
            style={{
              borderLeft: '4px solid #f87171',
              background: '#fff5f5',
              padding: '16px 20px',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: '#7f1d1d', lineHeight: 1.6 }}>
              <strong>El resultado:</strong> mantenimiento innecesario, tareas críticas faltantes y baja disponibilidad de planta — todo por falta de una herramienta adecuada.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[480px]">
          <Image
            src="/assets/Reunion RCM .png"
            alt="RCM en hojas de cálculo"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>
        </div>
      </section>

      {/* Qué hace este módulo - Interactive Features */}
      <RCMFeatures />

      {/* Beneficios operativos */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 border border-gray-200">
        {/* Left: text + benefit items */}
        <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Beneficios operativos
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Impacto en tu operación
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Estrategias de mantenimiento más coherentes</h3>
                <p className="text-sm text-gray-600">
                  Planes consistentes en toda la planta, siguiendo la misma lógica y criterios técnicos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Eliminación de tareas redundantes o innecesarias</h3>
                <p className="text-sm text-gray-600">
                  Identificación automática de duplicaciones que libera recursos sin comprometer confiabilidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Mejor priorización técnica</h3>
                <p className="text-sm text-gray-600">
                  Enfoque en modos de falla críticos, evitando gastar tiempo en análisis de bajo impacto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Implementación más ágil del RCM</h3>
                <p className="text-sm text-gray-600">
                  Del análisis al CMMS en minutos, no en semanas de transcripción manual de datos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[320px]">
          <Image
            src="/assets/Beneficios RCM.png"
            alt="Mantenimiento Centrado en Confiabilidad"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>
        </div>
      </section>

      {/* Casos de Uso Ideales */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Para organizaciones que quieren
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Estructurar una estrategia de mantenimiento proactiva, basada en consecuencias reales y sostenible en el tiempo — sin depender de hojas de cálculo ni iniciativas que no llegan a ningún lado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Plantas con Mantenimiento Reactivo Dominante */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Restart size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Pasar de reactivo a mantenimiento estratégico
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Estructura estrategias de mantenimiento basadas en consecuencias reales, no en intuición ni inercia.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">-50%</span>
                <span className="text-blue-700 text-sm">mantenimiento no planificado</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Estrategia</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Proactivo</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Consecuencias</span>
              </div>
            </div>
            
            {/* Card 2: Empresas que Intentaron RCM pero No Lograron Continuidad */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Renew size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Sostener el RCM más allá del arranque
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Dale continuidad a iniciativas RCM con herramientas que facilitan la ejecución y el seguimiento a largo plazo.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">100%</span>
                <span className="text-blue-700 text-sm">de análisis completados</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Continuidad</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Adopción</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Sostenibilidad</span>
              </div>
            </div>
            
            {/* Card 3: Organizaciones con Múltiples Activos Similares */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Copy size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Escalar análisis en flotas de equipos similares
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Reutiliza análisis entre equipos equivalentes y reduce el tiempo de análisis por activo hasta 10x.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">10x</span>
                <span className="text-blue-700 text-sm">velocidad en activos similares</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Escalabilidad</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Templates</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Flota</span>
              </div>
            </div>
            
            {/* Card 4: Equipos con Poco Tiempo para Análisis Profundo */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Time size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Acelerar el análisis sin perder rigor metodológico
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Reduce el tiempo de cada análisis con IA y flujos guiados que mantienen el estándar SAE JA1011.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">-60%</span>
                <span className="text-blue-700 text-sm">tiempo por análisis</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Eficiencia</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Rigor</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">SAE JA1011</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <AbrirFormContacto
              buttonText="Agenda una Demo"
              buttonColor="bg-blue-600 hover:bg-blue-700"
              textColor="text-white"
              modalTitle="Agenda una Demo — RCM"
              especial="RCM - Demo"
              icon={<ArrowRight size={20} className="text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border-2 border-blue-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
                Servicio de consultoría
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Prefieres que lo hagamos por ti?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A pesar de que con nuestra plataforma lo puedes hacer fácilmente, <strong>podemos hacerlo por ti</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DataStructured size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Desarrollo de RCM</h3>
                <p className="text-sm text-gray-600">
                  Análisis completo siguiendo SAE JA1011/JA1012 con estrategias de mantenimiento definidas
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Education size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capacitación incluida</h3>
                <p className="text-sm text-gray-600">
                  Formamos a tu equipo en la metodología RCM para que ejecuten análisis de forma autónoma
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TaskComplete size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Revisión de PM existente</h3>
                <p className="text-sm text-gray-600">
                  Evaluación de planes actuales identificando tareas innecesarias, duplicadas o faltantes
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Implementación en CMMS</h3>
                <p className="text-sm text-gray-600">
                  Carga de estrategias en tu sistema con frecuencias y procedimientos definidos
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <AbrirFormContacto
                buttonText="Solicitar cotización de consultoría"
                buttonColor="bg-blue-600 hover:bg-blue-700"
                textColor="text-white"
                modalTitle="Consultoría RCM"
                especial="RCM - Consultoría"
              />
              <p className="text-sm text-gray-600 mt-4">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Implementa RCM real sin herramientas improvisadas
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Prueba el módulo RCM gratis por 14 días y descubre cómo estructurar planes de mantenimiento coherentes y accionables.
          </p>
          <RCMCtaButtons />
        </div>
      </section>
    </>
  );
}

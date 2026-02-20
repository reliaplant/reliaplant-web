'use client';

import React from "react";
import {
  Catalog,
  CloudApp,
  Network_3,
  CheckmarkFilled,
  ArrowRight,
  ChevronRight,
  Lightning,
  DataStructured,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";
import IndustrialGrid from "@/components/IndustrialGrid";

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = React.useState<'monthly' | 'annual'>('monthly');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6">
        <IndustrialGrid />
        {/* Decorative background circles */}
        <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-[2] text-center">
          <p className="text-lg md:text-xl font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Plataforma de confiabilidad industrial
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Convierte la ingeniería de confiabilidad en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Menos burocracia técnica, más tiempo para ingeniería real.
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Más confiabilidad, mejores decisiones y menos fallas recurrentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="#contacto" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Solicita una demo guiada
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="#contacto" 
              className="border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-3.5 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all"
            >
              Agenda un diagnóstico sin costo
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA GENERAL */}
      <section className="bg-[#f4f5f7]" style={{ padding: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 520 }}>
          {/* Left: Image */}
          <div className="relative h-[260px] md:h-auto">
            <Image
              src="/assets/escritorioMantenimiento.png"
              alt="Escritorio de mantenimiento con hojas de cálculo y documentos"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12" style={{ background: '#f4f5f7' }}>
            <span
              className="block font-bold uppercase text-red-500 mb-4"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
            >
              El problema
            </span>

            <h2
              className="font-bold mb-3"
              style={{ fontSize: '1.6rem', color: '#0f172a', lineHeight: 1.25 }}
            >
              La realidad en muchas plantas industriales
            </h2>

            <p
              className="mb-5"
              style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}
            >
              La ingeniería de mantenimiento debería enfocarse en evitar fallas… pero termina atrapada en:
            </p>

            <div className="flex flex-col gap-2 mb-5">
              {[
                'RCA hechos manualmente, difíciles de mantener.',
                'RCM desordenados y difíciles de actualizar.',
                'Bases de activos inconsistentes o incompletas.',
                'Indicadores poco confiables.',
                'Decisiones tomadas con data dudosa.',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white"
                  style={{
                    borderLeft: '3px solid #fca5a5',
                    padding: '10px 14px',
                    borderRadius: 6,
                  }}
                >
                  <span className="text-red-400 text-base flex-shrink-0 font-bold">✕</span>
                  <span style={{ fontSize: '0.9rem', color: '#374151' }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              className="mb-6"
              style={{
                background: '#fff5f5',
                border: '1px solid #fecaca',
                borderRadius: 8,
                padding: 24,
              }}
            >
              <p className="font-semibold mb-4" style={{ color: '#991b1b', fontSize: '0.95rem' }}>
                El resultado:
              </p>
              <ul className="space-y-3">
                {[
                  'Fallas recurrentes.',
                  'Pérdida de producción.',
                  'Estrés operativo constante.',
                  'Tiempo técnico desperdiciado en tareas administrativas.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center flex-shrink-0 rounded-full font-bold"
                      style={{
                        width: 22,
                        height: 22,
                        background: '#fca5a5',
                        color: '#7f1d1d',
                        fontSize: '0.7rem',
                        marginTop: 2,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#374151' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-lg text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: '#2563eb',
                  padding: '14px 28px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Agenda un diagnóstico gratuito
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILLARS SECTION */}
      <section id="modulos" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              Módulos principales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Una plataforma diseñada para ingeniería real
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tres pilares clave de la confiabilidad industrial, integrados en una sola plataforma:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium border border-teal-100">
                <CheckmarkFilled size={16} />
                Datos de activos organizados
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">
                <CheckmarkFilled size={16} />
                Estrategias de mantenimiento
              </span>
              <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium border border-purple-100">
                <CheckmarkFilled size={16} />
                Análisis de causa raíz
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Usa cada módulo de forma independiente o conéctalos para una gestión completa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Taxonomía Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600" />
              
              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/bgAssetRegister.png"
                  alt="Registro de activos"
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Base de datos confiable para decisiones de mantenimiento
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Estructura tus activos siguiendo principios como ISO 14224, asegurando relaciones correctas y base sólida para indicadores.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Relaciones correctas padre-hijo</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Consistencia en el registro con plantillas</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Exportación a tu CMMS</span>
                </li>
              </ul>
              
              <Link href="/modulos/registro-activos" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RCM Card */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
              
              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/fondo-landing-rcm.png"
                  alt="Módulo RCM"
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Reliability Centered Maintenance estructurado
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Centraliza el proceso RCM en un entorno estructurado que permite relacionar activos, funciones y modos de falla sin duplicaciones.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Gestión de funciones y modos de falla</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Análisis de consecuencias con árbol de decisión</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Plan de mantenimiento exportable a CMMS</span>
                </li>
              </ul>
              
              <Link href="/modulos/rcm" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RCA Card */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-600" />
              
              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/bgACR.jpg"
                  alt="Análisis de causa raíz"
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Análisis de causa raíz sin burocracia ni errores metodológicos
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Estructura el proceso completo para que el análisis siga la metodología correctamente, sea trazable y genere documentación clara.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Registro estructurado de eventos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Árbol de causas y metodología 5 Porqués guiada</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Recomendaciones y seguimiento de acciones</span>
                </li>
              </ul>
              
              <Link href="/modulos/rca" className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* CTA después de módulos */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">¿No sabes por dónde empezar?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Te ayudamos a identificar el módulo que más impacto tendrá en tu operación. Sin compromiso.
            </p>
            <Link 
              href="#contacto" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Solicita una demo personalizada
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inteligencia Artificial{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              integrada
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-16">
            IA en cada módulo para acelerar análisis y reducir errores humanos
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-5">
                <Lightning size={24} className="text-purple-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                RCA
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Hipótesis automáticas</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Genera causas raíz probables según historial de fallas similares en equipos del mismo tipo
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                <CloudApp size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCM
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Modos de falla sugeridos</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Predice modos de falla basados en ISO 14224 y datos históricos de equipos equivalentes
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-5">
                <DataStructured size={24} className="text-teal-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-teal-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
                Registro de activos
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Clasificación inteligente</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Sugiere categorías y niveles jerárquicos automáticamente al importar tus activos
              </p>
            </div>
          </div>

          {/* CTA después de IA */}
          <div className="mt-16 text-center">
            <p className="text-white/80 mb-6">¿Quieres ver la IA en acción con tus propios datos?</p>
            <Link 
              href="#contacto" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Solicita una demo con IA
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-gray-100 bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2000+', label: 'Activos gestionados' },
              { value: '15+', label: 'Industrias atendidas' },
              { value: '50+', label: 'Proyectos RCM completados' },
              { value: '24/7', label: 'Soporte dedicado' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 tabular-nums">{stat.value}</span>
                <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA después de stats */}
          <div className="mt-12 text-center">
            <Link 
              href="#contacto" 
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors group"
            >
              Únete a las empresas que ya confían en Reliaplant
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precios" className="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precios transparentes</h2>
            <p className="text-lg md:text-xl text-gray-600">Licencias de acuerdo al tamaño de tu organización</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button 
                onClick={() => setPricingPeriod('monthly')}
                className={`px-6 py-2.5 text-sm font-medium transition-all rounded-md ${pricingPeriod === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Mensual
              </button>
              <button 
                onClick={() => setPricingPeriod('annual')}
                className={`px-6 py-2.5 text-sm font-medium transition-all rounded-md flex items-center gap-2 ${pricingPeriod === 'annual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Anual
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">-17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-sm text-gray-500 mb-6">Para organizaciones con operaciones pequeñas</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${pricingPeriod === 'monthly' ? '299' : '249'}
                </span>
                <span className="text-gray-500">/mes</span>
                {pricingPeriod === 'annual' && (
                  <span className="block text-sm text-green-600 mt-1 font-medium">Ahorras $600/año</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  0-100 activos
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Hasta 5 usuarios
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Registro de activos completo
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Matriz de criticidad
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Exportación a CMMS
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte por email
                </li>
              </ul>
              <Link href="#contacto" className="block text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Comenzar prueba
              </Link>
            </div>

            {/* Professional Plan (Featured) */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 flex flex-col relative shadow-xl shadow-blue-600/10">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Más popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-sm text-gray-500 mb-6">Para organizaciones con múltiples plantas</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${pricingPeriod === 'monthly' ? '899' : '749'}
                </span>
                <span className="text-gray-500">/mes</span>
                {pricingPeriod === 'annual' && (
                  <span className="block text-sm text-green-600 mt-1 font-medium">Ahorras $1,800/año</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  100-1000 activos
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Hasta 15 usuarios
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Todos los módulos (RCA, RCM, Registro)
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  IA para análisis y sugerencias
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Exportación a múltiples formatos
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte prioritario
                </li>
              </ul>
              <Link href="#contacto" className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/25">
                Comenzar prueba
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-sm text-gray-500 mb-6">Para grandes operaciones industriales</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">Contactar</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  +1000 activos
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Usuarios ilimitados
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Todos los módulos sin límites
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Integraciones CMMS/ERP (SAP, Maximo)
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  SSO y administración avanzada
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte dedicado 24/7
                </li>
              </ul>
              <Link href="#contacto" className="block text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Contactar ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contacto" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deja de improvisar. Empieza a gestionar confiabilidad de verdad.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Prueba Reliaplant gratis por 14 días. Sin tarjeta de crédito. Registra tus activos, evalúa su criticidad y lanza tu primer proyecto hoy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="#" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-lg">
              Solicita una demo guiada
              <ArrowRight size={20} />
            </Link>
            <Link href="#" className="border border-white/40 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all">
              Agenda un diagnóstico de confiabilidad
            </Link>
          </div>
          <p className="text-white/70 text-sm">
            O escríbenos directamente a <a href="mailto:contacto@reliaplant.com" className="underline text-white/90 hover:text-white transition-colors">contacto@reliaplant.com</a>
          </p>
        </div>
      </section>
    </>
  );
}

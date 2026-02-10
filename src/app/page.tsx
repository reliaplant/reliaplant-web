'use client';

import React from "react";
import {
  Catalog,
  ChartLineData,
  Analytics,
  CloudApp,
  Network_3,
  CheckmarkFilled,
  ArrowRight,
  ChevronRight,
  Chip,
  Lightning,
  DataStructured,
} from "@carbon/icons-react";
import Link from "next/link";

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = React.useState<'monthly' | 'annual'>('monthly');

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-40 pb-24 px-8">
        {/* Decorative background circles */}
        <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-full text-sm font-medium text-blue-300 mb-6">
                <Chip size={16} />
                <span>Inteligencia Artificial integrada</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Plataforma integral de{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  confiabilidad industrial
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                Taxonomía, criticidad, RCM y RCA potenciados con IA. Todo en un solo lugar para equipos de confiabilidad.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#contacto" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  Comenzar prueba gratis
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  href="#funcionalidades" 
                  className="border border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded font-medium inline-flex items-center gap-2 transition-all"
                >
                  Ver funcionalidades
                </Link>
              </div>
            </div>

            {/* Hero Visual - Module Tabs Mockup */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                <div className="flex gap-1 mb-3">
                  <div className="px-3 py-2 text-xs font-semibold rounded-t bg-blue-500/20 text-blue-400 uppercase">
                    Registro de activos
                  </div>
                  <div className="px-3 py-2 text-xs font-semibold rounded-t bg-white/5 text-white/40 uppercase">
                    RCM
                  </div>
                  <div className="px-3 py-2 text-xs font-semibold rounded-t bg-white/5 text-white/40 uppercase">
                    RCA
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-1 bg-white/5 rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-teal-500/30 rounded w-3/4" />
                    <div className="h-2 bg-teal-500/20 rounded w-1/2 ml-4" />
                    <div className="h-2 bg-teal-500/20 rounded w-2/3 ml-4" />
                    <div className="h-2 bg-yellow-500/30 rounded w-1/2 ml-8" />
                    <div className="h-2 bg-blue-500/30 rounded w-3/4" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>Criticidad</span>
                      <span className="text-red-400 font-semibold">ALTA</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>Última falla</span>
                      <span className="text-white/70">15 días</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>MTBF</span>
                      <span className="text-white/70">320 h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILLARS SECTION */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              Módulos principales
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Los 3 pilares de la confiabilidad en una plataforma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Registro de activos para organizar, RCM para prevenir, RCA para investigar. Cada módulo funciona independiente o en flujo completo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Taxonomía Card */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500" />
              
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <Catalog size={28} className="text-teal-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Registro de activos y criticidad
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Clasifica activos con jerarquía estándar ISO 14224. Evalúa criticidad con matriz parametrizable y visualiza con mapas de calor.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Jerarquía de 7 niveles (Planta → Componente)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Criticidad automática (Consecuencia × Frecuencia)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Importación masiva desde Excel</span>
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
              
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <DataStructured size={28} className="text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                RCM (Mantenimiento Centrado en Confiabilidad)
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Análisis completo con árbol de decisión SAE JA1011. Genera planes de mantenimiento optimizados automáticamente.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>AMEF integrado con modos de falla ISO 14224</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Árbol de decisiones RCM estándar</span>
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
              
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Network_3 size={28} className="text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                RCA (Análisis de Causa Raíz)
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Investiga fallas con múltiples metodologías: 5 Por qués, Ishikawa, árbol causal. IA sugiere hipótesis desde el historial.
              </p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Metodologías: 5 Por qués, Ishikawa, FTA</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Gestión de evidencias (fotos, análisis, datos)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento de acciones correctivas</span>
                </li>
              </ul>
              
              <Link href="/modulos/rca" className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="py-24 px-8 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Inteligencia Artificial{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              inteligente
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16">
            IA integrada en cada módulo para acelerar análisis y reducir errores humanos
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/8 transition-all">
              <Lightning size={32} className="mb-4" />
              <div className="inline-block px-3 py-1 bg-purple-500/20 rounded text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                RCA
              </div>
              <h4 className="text-lg font-semibold mb-2">Hipótesis automáticas</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Genera causas raíz probables según historial de fallas similares en equipos del mismo tipo
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/8 transition-all">
              <CloudApp size={32} className="mb-4" />
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCM
              </div>
              <h4 className="text-lg font-semibold mb-2">Modos de falla sugeridos</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Predice modos de falla basados en ISO 14224 y datos históricos de equipos equivalentes
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-left hover:bg-white/8 transition-all">
              <DataStructured size={32} className="mb-4" />
              <div className="inline-block px-3 py-1 bg-teal-500/20 rounded text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
                Registro de activos
              </div>
              <h4 className="text-lg font-semibold mb-2">Clasificación inteligente</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Sugiere categorías y niveles jerárquicos automáticamente al importar activos desde Excel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-t border-b border-gray-200 bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">2000+</h3>
              <p className="text-sm text-gray-600 font-medium">Activos gestionados</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-sm text-gray-600 font-medium">Industrias atendidas</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-sm text-gray-600 font-medium">Proyectos RCM completados</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-sm text-gray-600 font-medium">Soporte dedicado</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precios" className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios transparentes</h2>
            <p className="text-xl text-gray-600">Licencias de acuerdo al tamaño de tu organización</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded border border-gray-300">
              <button 
                onClick={() => setPricingPeriod('monthly')}
                className={`px-6 py-2.5 text-sm font-medium transition-all ${pricingPeriod === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} rounded-l`}
              >
                Mensual
              </button>
              <button 
                onClick={() => setPricingPeriod('annual')}
                className={`px-6 py-2.5 text-sm font-medium transition-all ${pricingPeriod === 'annual' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} rounded-r border-l-0`}
              >
                Anual
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-sm text-gray-600 mb-6">Para organizaciones con operaciones pequeñas</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${pricingPeriod === 'monthly' ? '299' : '249'}
                </span>
                <span className="text-gray-600">/mes</span>
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
              <Link href="#contacto" className="block text-center border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded font-medium transition-all">
                Comenzar prueba
              </Link>
            </div>

            {/* Professional Plan (Featured) */}
            <div className="bg-white border-2 border-blue-600 rounded-xl p-8 flex flex-col relative shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Más popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-sm text-gray-600 mb-6">Para organizaciones con múltiples plantas</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${pricingPeriod === 'monthly' ? '899' : '749'}
                </span>
                <span className="text-gray-600">/mes</span>
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
                  Exportación a Excel/PDF
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte prioritario
                </li>
              </ul>
              <Link href="#contacto" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all">
                Comenzar prueba
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-sm text-gray-600 mb-6">Para grandes operaciones industriales</p>
              <div className="mb-6">
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
              <Link href="#contacto" className="block text-center border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded font-medium transition-all">
                Contactar ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contacto" className="py-24 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Registro de activos. Criticidad. RCM. RCA. Todo en un solo lugar.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Prueba Reliaplant gratis por 14 días. Sin tarjeta de crédito. Registra tus activos, evalúa su criticidad y lanza tu primer proyecto hoy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3.5 rounded font-semibold inline-flex items-center gap-2 transition-all">
              Comenzar prueba gratis
              <ArrowRight size={20} />
            </Link>
            <Link href="#" className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded font-medium inline-flex items-center gap-2 transition-all">
              Agendar demo personalizada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

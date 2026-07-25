'use client';

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Catalog,
  CloudApp,
  Network_3,
  CheckmarkFilled,
  ArrowRight,
  ChevronRight,
  Lightning,
  DataStructured,
  Close,
  UserMultiple,
  Asset,
  Industry,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";
import IndustrialGrid from "@/components/IndustrialGrid";
import DemoRequestSection from "@/components/DemoRequestSection";

export default function Home() {
  const [pricingPeriod, setPricingPeriod] = React.useState<'monthly' | 'annual'>('monthly');
  const [showContactModal, setShowContactModal] = React.useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });
  const [statValues, setStatValues] = useState({ assets: 0, rcm: 0, rca: 0 });

  useEffect(() => {
    if (!statsInView) return;
    const targets = { assets: 5000, rcm: 150, rca: 250 };
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setStatValues({
        assets: Math.round(targets.assets * ease),
        rcm: Math.round(targets.rcm * ease),
        rca: Math.round(targets.rca * ease),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [statsInView]);

  const pillVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const pillItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 md:pt-40 pb-20 md:pb-28">
        <IndustrialGrid />
        {/* Decorative background circles */}
        <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto relative z-[2] text-center">
          <p className="text-lg md:text-xl font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Plataforma de confiabilidad industrial
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Convierte la ingeniería de confiabilidad en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-7xl mx-auto leading-relaxed">
            Menos burocracia técnica, más tiempo para ingeniería real.
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-7xl mx-auto leading-relaxed">
            Más confiabilidad, mejores decisiones y menos fallas recurrentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="https://app.reliaplant.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
            >
              Empezar ahora
              <ArrowRight size={20} />
            </Link>
            <button 
              onClick={() => setShowContactModal(true)}
              className="border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-3.5 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEMA GENERAL */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto grid lg:grid-cols-2 border border-gray-200">

            {/* Left: text content */}
            <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
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
                className="mb-6"
                style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}
              >
                La ingeniería de mantenimiento debería enfocarse en evitar fallas… pero termina atrapada en procesos manuales, datos inconsistentes y metodologías sin soporte.
              </p>

              {/* Pain point pills */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                variants={pillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'RCA sin metodología',
                  'RCM desactualizado',
                  'Activos inconsistentes',
                  'Data dudosa',
                  'Conocimiento no documentado',
                  'Indicadores poco confiables',
                ].map((tag) => (
                  <motion.span
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
                    variants={pillItemVariants}
                  >
                    <span className="text-red-400 font-bold text-xs">✕</span>
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Result highlight box */}
              <div
                style={{
                  borderLeft: '4px solid #f87171',
                  background: '#fff5f5',
                  padding: '16px 20px',
                }}
              >
                <p style={{ fontSize: '0.9rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                  <strong>El resultado:</strong> fallas recurrentes, producción perdida y el ciclo que no para.
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[420px]">
              <Image
                src="/assets/el-problema.webp"
                alt="Ingeniero de mantenimiento frustrado frente a hojas de cálculo y documentos impresos"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
      </section>
      <section id="modulos" className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              Módulos principales
            </span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Una plataforma diseñada para ingeniería real
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-7xl mx-auto">
              Usa cada módulo de forma independiente o conéctalos para una gestión completa de la confiabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Taxonomía Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">Registro de Activos</h3>

              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/bgAssetRegister.webp"
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
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Relaciones correctas padre-hijo</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Consistencia en el registro con plantillas</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Exportación a tu CMMS</span>
                </li>
              </ul>

              <Link href="/modulos/registro-activos" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RCM Card */}
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">RCM</h3>

              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/fondo-landing-rcm.webp"
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
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Análisis estructurado con las 7 preguntas del RCM</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Estrategias de mantenimiento definidas con árbol de decisión</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">Análisis de Causa Raíz</h3>

              <div className="rounded-lg overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/bgACR.webp"
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
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Registro estructurado de eventos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Árbol de causas automatizado con IA y trazabilidad metodológica</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Recomendaciones y seguimiento de acciones</span>
                </li>
              </ul>

              <Link href="/modulos/rca" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded font-medium text-sm transition-colors mt-auto">
                Ver módulo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* CTA después de módulos */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">¿No sabes por dónde empezar?</h3>
            <p className="text-gray-600 mb-6 max-w-7xl mx-auto">
              Te ayudamos a identificar el módulo que más impacto tendrá en tu operación. Sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="https://app.reliaplant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25"
              >
                Prueba ahora
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setShowContactModal(true)}
                className="border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-lg font-medium inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                Contacta un Asesor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="py-8 md:py-12 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto relative z-10 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Inteligencia Artificial{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              integrada
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl text-white/80 max-w-7xl mx-auto mb-16">
            IA en cada módulo para acelerar análisis y reducir errores humanos
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                <Lightning size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCA
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Hipótesis automáticas</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Genera causas raíz probables según historial de fallas similares en equipos del mismo tipo
              </p>
            </motion.div>

            <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
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
            </motion.div>

            <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                <DataStructured size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                Registro de activos
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Clasificación inteligente</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Sugiere categorías y niveles jerárquicos automáticamente al importar tus activos
              </p>
            </motion.div>
          </motion.div>

          {/* CTA después de IA */}
          <div className="mt-16 text-center">
            <p className="text-white/80 mb-6">¿Quieres ver la IA en acción con tus propios datos?</p>
            <Link 
              href="#contacto" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Empieza Ahora
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section ref={statsRef} className="border-y border-gray-100 bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: `+${statValues.assets.toLocaleString()}`, label: 'Activos gestionados' },
              { value: `+${statValues.rcm}`, label: 'Proyectos RCM' },
              { value: `+${statValues.rca}`, label: 'Proyectos RCA' },
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
      <section id="precios" className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="mb-2 flex justify-center items-center min-h-[4.5rem]">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Licencias a la medida de tu planta
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gratuito */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gratuito</h3>
              <p className="text-sm text-gray-500 mb-3 min-h-[2.5rem]">Evaluar la plataforma</p>
              <div style={{ background: '#f4f4f4', borderRadius: '6px', padding: '3px' }} className="flex mb-3 opacity-40 pointer-events-none">
                <button className="flex-1 py-1.5 text-xs rounded-[4px] bg-white font-semibold text-gray-900" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>Mensual</button>
                <button className="flex-1 py-1.5 text-xs rounded-[4px] text-[#6f6f6f] flex items-center justify-center gap-1">Anual <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-15%</span></button>
              </div>
              <div className="mb-2">
                <div>
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500"> / para siempre</span>
                </div>
                <span className="invisible block text-sm font-medium mt-1">placeholder</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-3 w-full mt-2 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <UserMultiple size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">1</span>
                  <span>usuario</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-gray-200">
                  <Asset size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">10</span>
                  <span>activos</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Industry size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">1</span>
                  <span>planta</span>
                </div>
              </div>
              <ul className="space-y-3 mb-4 pl-0 list-none">
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Taxonomía básica
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  5 proyectos RCA · 5 planes RCM
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-700 font-medium min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  Asistente IA incluido
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte por email
                </li>
              </ul>
              <div className="flex-grow" />
              <Link href="https://app.reliaplant.com" target="_blank" rel="noopener noreferrer" className="block text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Comenzar gratis
              </Link>
            </div>

            {/* Profesional */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profesional</h3>
              <p className="text-sm text-gray-500 mb-3 min-h-[2.5rem]">Consultor o ingeniero independiente</p>
              <div style={{ background: '#f4f4f4', borderRadius: '6px', padding: '3px' }} className="flex mb-3">
                <button
                  onClick={() => setPricingPeriod('monthly')}
                  style={pricingPeriod === 'monthly' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all ${pricingPeriod === 'monthly' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Mensual</button>
                <button
                  onClick={() => setPricingPeriod('annual')}
                  style={pricingPeriod === 'annual' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all flex items-center justify-center gap-1 ${pricingPeriod === 'annual' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Anual <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-15%</span></button>
              </div>
              <div className="mb-2">
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    ${pricingPeriod === 'monthly' ? '29' : '25'}
                  </span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <span className={`block text-sm font-medium mt-1 ${pricingPeriod === 'annual' ? 'text-green-600' : 'invisible'}`}>$296/año · Ahorras $52</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-3 w-full mt-2 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <UserMultiple size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">1</span>
                  <span>usuario</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-gray-200">
                  <Asset size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">30</span>
                  <span>activos</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Industry size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">1</span>
                  <span>planta</span>
                </div>
              </div>
              <ul className="space-y-3 mb-4 pl-0 list-none">
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Todos los módulos — proyectos ilimitados
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Reportes PDF y Excel
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-700 font-medium min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  IA: hipótesis y modos de falla
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte por email prioritario
                </li>
              </ul>
              <div className="flex-grow" />
              <Link href="https://app.reliaplant.com" target="_blank" rel="noopener noreferrer" className="block text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Comenzar prueba
              </Link>
            </div>

            {/* Equipo — RECOMENDADO */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 flex flex-col relative shadow-xl shadow-blue-600/10">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Recomendado
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equipo</h3>
              <p className="text-sm text-gray-500 mb-3 min-h-[2.5rem]">Equipo de mantenimiento o confiabilidad</p>
              <div style={{ background: '#f4f4f4', borderRadius: '6px', padding: '3px' }} className="flex mb-3">
                <button
                  onClick={() => setPricingPeriod('monthly')}
                  style={pricingPeriod === 'monthly' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all ${pricingPeriod === 'monthly' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Mensual</button>
                <button
                  onClick={() => setPricingPeriod('annual')}
                  style={pricingPeriod === 'annual' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all flex items-center justify-center gap-1 ${pricingPeriod === 'annual' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Anual <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-15%</span></button>
              </div>
              <div className="mb-2">
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    ${pricingPeriod === 'monthly' ? '99' : '84'}
                  </span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <span className={`block text-sm font-medium mt-1 ${pricingPeriod === 'annual' ? 'text-green-600' : 'invisible'}`}>$1,009/año · Ahorras $179</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-3 w-full mt-2 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <UserMultiple size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">5</span>
                  <span>usuarios</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-gray-200">
                  <Asset size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">+100</span>
                  <span>activos</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Industry size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">1</span>
                  <span>planta</span>
                </div>
              </div>
              <ul className="space-y-3 mb-4 pl-0 list-none">
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Permisos y roles de equipo
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Dashboard compartido
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-700 font-medium min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  IA ilimitada para todo el equipo
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Activos adicionales disponibles
                </li>
              </ul>
              <div className="flex-grow" />
              <Link href="https://app.reliaplant.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/25">
                Comenzar prueba
              </Link>
            </div>

            {/* Planta */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planta</h3>
              <p className="text-sm text-gray-500 mb-3 min-h-[2.5rem]">Planta mediana o grande</p>
              <div style={{ background: '#f4f4f4', borderRadius: '6px', padding: '3px' }} className="flex mb-3">
                <button
                  onClick={() => setPricingPeriod('monthly')}
                  style={pricingPeriod === 'monthly' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all ${pricingPeriod === 'monthly' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Mensual</button>
                <button
                  onClick={() => setPricingPeriod('annual')}
                  style={pricingPeriod === 'annual' ? { boxShadow: '0 1px 3px rgba(0,0,0,0.1)' } : {}}
                  className={`flex-1 py-1.5 text-xs rounded-[4px] transition-all flex items-center justify-center gap-1 ${pricingPeriod === 'annual' ? 'bg-white font-semibold text-gray-900' : 'text-[#6f6f6f]'}`}
                >Anual <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-15%</span></button>
              </div>
              <div className="mb-2">
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    ${pricingPeriod === 'monthly' ? '245' : '208'}
                  </span>
                  <span className="text-gray-500">/mes</span>
                </div>
                <span className={`block text-sm font-medium mt-1 ${pricingPeriod === 'annual' ? 'text-green-600' : 'invisible'}`}>$2,499/año · Ahorras $441</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-3 w-full mt-2 mb-4">
                <div className="flex flex-col items-center gap-1">
                  <UserMultiple size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">15</span>
                  <span>usuarios</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-gray-200">
                  <Asset size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">+5000</span>
                  <span>activos</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Industry size={20} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">3</span>
                  <span>plantas</span>
                </div>
              </div>
              <ul className="space-y-3 mb-4 pl-0 list-none">
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Soporte prioritario 24h
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Facturación por orden de compra
                </li>
                <li className="flex items-start gap-2 text-sm text-blue-700 font-medium min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  IA ilimitada multi-planta
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                  <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  Activos adicionales disponibles
                </li>
              </ul>
              <div className="flex-grow" />
              <Link href="https://app.reliaplant.com" target="_blank" rel="noopener noreferrer" className="block text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Comenzar prueba
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <a href="/pricing/compare" className="text-blue-600 font-medium hover:underline text-base mb-2">Ver comparación completa de planes <span className='inline-block align-middle'>↓</span></a>
            <p className="text-center text-sm text-gray-500 mt-2">
              Para organizaciones con más de 15 usuarios o necesidades especiales:{" "}
              <a href="mailto:comercial@reliaplant.com" className="text-blue-600 font-medium hover:underline">
                Plan Empresa — contactar a comercial@reliaplant.com
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <div id="contacto" className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
        <DemoRequestSection />
      </div>
      {/* Modal Contactar Asesor */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setShowContactModal(false); }}
        >
          <div className="relative w-full max-w-7xl mx-auto my-8">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 z-[101] bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
              aria-label="Cerrar"
            >
              <Close size={24} />
            </button>
            <DemoRequestSection />
          </div>
        </div>
      )}
    </>
  );
}

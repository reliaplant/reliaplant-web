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
import FormularioContacto from "@/components/FormularioContacto";
import Boton from "@/components/Boton";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

interface PlanFeatures {
  ai: boolean;
  export: boolean;
  collaboration: boolean;
  multiPlant: boolean;
  pricedPerPlant?: boolean;
  prioritySupport: boolean;
  purchaseOrders: boolean;
}

interface PlanLimits {
  maxUsers: number;
  maxActivos: number;
  maxPlants: number; // -1 = ilimitadas
  maxRCA: number; // -1 = ilimitado
  maxRCM: number; // -1 = ilimitado
}

interface PlanTemplate {
  id: string;
  name: string;
  description: string;
  annualPrice?: number;
  limits: PlanLimits;
  features: PlanFeatures;
  sort: number;
}

const fmtNum = (n: number) => (n < 0 ? "Ilimitado" : n.toLocaleString("es-MX"));
const fmtPlants = (n: number) => (n < 0 ? "Ilimitadas" : String(n));

// Highlights construidos a partir de los feature flags reales de Firestore,
// no copy inventado — evita que se desalineen con lo que el plan realmente incluye.
function planHighlights(plan: PlanTemplate): string[] {
  const items: string[] = [
    `RCA y RCM ${plan.limits.maxRCA < 0 ? "ilimitados" : `(hasta ${plan.limits.maxRCA})`}`,
  ];
  if (plan.features.ai) items.push("Asistente IA incluido");
  if (plan.features.collaboration) items.push("Colaboración, roles y permisos");
  if (plan.features.prioritySupport) items.push("Soporte prioritario");
  if (plan.features.purchaseOrders) items.push("Facturación por orden de compra");
  if (plan.features.multiPlant) items.push("Múltiples plantas habilitadas");
  if (plan.features.export) items.push("Reportes PDF y Excel");
  return items.slice(0, 4);
}

export default function Home() {
  const [plans, setPlans] = useState<PlanTemplate[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [showContactModal, setShowContactModal] = React.useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "config", "planTemplates"));
        const data = snap.data();
        const list = data?.plans
          ? Object.values(data.plans as Record<string, PlanTemplate>).sort((a, b) => a.sort - b.sort)
          : [];
        if (!cancelled) setPlans(list);
      } finally {
        if (!cancelled) setPlansLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
        <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 blur-3xl pointer-events-none" />
        
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
            <Boton
              href="https://app.reliaplant.com"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Empezar ahora
            </Boton>
            <Boton
              variant="outline-light"
              size="lg"
              onClick={() => setShowContactModal(true)}
            >
              Contactar Asesor
            </Boton>
          </div>
        </div>
      </section>

      {/* PROBLEMA GENERAL — oculta a pedido; se conserva el código, cambiar false por true para mostrarla */}
      {false && (
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto grid lg:grid-cols-2 border border-gray-300">

            {/* Left: text content */}
            <div className="flex flex-col justify-center px-6 py-10 bg-white border-b lg:border-b-0 lg:border-r border-gray-300">
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
                      borderRadius: 0,
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
      )}
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
            <div className="bg-white border border-gray-300 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">Registro de Activos</h3>

              <div className="overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/bgAssetRegister.webp"
                  alt="Registro de activos"
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Tu planta ordenada, desde el DTI hasta el equipo
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Jerarquía de plantas, ubicaciones técnicas y equipos bajo principios ISO 14224, con la documentación técnica de cada activo en su lugar.
              </p>

              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>DTIs navegables con tus equipos marcados en el plano</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Criticidad configurable con los niveles de tu empresa</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Exportación de equipos y ubicaciones a tu CMMS</span>
                </li>
              </ul>

              <Boton href="/modulos/registro-activos" variant="primary" size="sm" icon={<ArrowRight size={16} />} className="mt-auto">
                Ver módulo
              </Boton>
            </div>

            {/* RCM Card */}
            <div className="border border-gray-300 p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">RCM</h3>

              <div className="overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/assets/fondo-landing-rcm.webp"
                  alt="Módulo RCM"
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                Planes de mantenimiento que se justifican solos
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed min-h-[4.5rem]">
                Análisis estructurado con las 7 preguntas del RCM, del modo de falla directo a la tarea del plan.
              </p>

              <ul className="space-y-2 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Cada tarea del plan trazada a los modos de falla que ataca</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Plantillas por familia de equipo: analiza una vez, replica en el resto</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckmarkFilled size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>RPN con escalas de tu empresa y plan exportable a CMMS</span>
                </li>
              </ul>

              <Boton href="/modulos/rcm" variant="primary" size="sm" icon={<ArrowRight size={16} />} className="mt-auto">
                Ver módulo
              </Boton>
            </div>

            {/* RCA Card */}
            <div className="border border-gray-300 p-8 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Módulo</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">Análisis de Causa Raíz</h3>

              <div className="overflow-hidden mb-6 border border-gray-100">
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

              <Boton href="/modulos/rca" variant="primary" size="sm" icon={<ArrowRight size={16} />} className="mt-auto">
                Ver módulo
              </Boton>
            </div>
          </div>

          {/* CTA después de módulos */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">¿No sabes por dónde empezar?</h3>
            <p className="text-gray-600 mb-6 max-w-7xl mx-auto">
              Te ayudamos a identificar el módulo que más impacto tendrá en tu operación. Sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Boton
                href="https://app.reliaplant.com"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Prueba ahora
              </Boton>
              <Boton
                variant="outline"
                size="lg"
                onClick={() => setShowContactModal(true)}
              >
                Contacta un Asesor
              </Boton>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="py-8 md:py-12 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl pointer-events-none" />
        
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
            IA integrada al análisis de causa raíz: sugiere, tú decides
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="bg-white/5 border border-white/10 p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center mb-5">
                <Lightning size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCA · Árbol
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Modos de falla sugeridos</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Describe cómo se manifestó la falla y la IA propone los modos de falla del evento, con el contexto de tu equipo.
              </p>
            </motion.div>

            <motion.div className="bg-white/5 border border-white/10 p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center mb-5">
                <CloudApp size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCA · Hipótesis
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Hipótesis probables</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                Para cada modo de falla, la IA genera hipótesis de causa clasificadas y con método de verificación sugerido.
              </p>
            </motion.div>

            <motion.div className="bg-white/5 border border-white/10 p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1" variants={cardItemVariants}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center mb-5">
                <DataStructured size={24} className="text-blue-400" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                RCA · Validación
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Tareas de verificación propuestas</h4>
              <p className="text-sm text-white/70 leading-relaxed mb-0">
                La IA sugiere las tareas para confirmar o descartar cada hipótesis; tú asignas responsable y fecha.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA después de IA */}
          <div className="mt-16 text-center">
            <p className="text-white/80 mb-6">¿Quieres ver la IA en acción con tus propios datos?</p>
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Empieza Ahora
              <ArrowRight size={20} />
            </button>
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
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors group"
            >
              Únete a las empresas que ya confían en Reliaplant
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
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

          {plansLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white border border-gray-300 p-6 h-[420px] animate-pulse" />
              ))}
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const isFree = plan.id === "free";
              const isRecommended = plan.id === "team";
              return (
                <div
                  key={plan.id}
                  className={`bg-white p-6 flex flex-col relative transition-shadow ${
                    isRecommended
                      ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10"
                      : "border border-gray-300 hover:shadow-lg"
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider whitespace-nowrap">
                      Recomendado
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 min-h-[2.5rem]">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {isFree ? "$0" : `$${plan.annualPrice?.toLocaleString("es-MX")}`}
                    </span>
                    <span className="text-gray-500">
                      {isFree ? " / para siempre" : `/año${plan.features.pricedPerPlant ? " + precio por planta" : ""}`}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-3 w-full mt-2 mb-4">
                    <div className="flex flex-col items-center gap-1">
                      <UserMultiple size={20} className="text-gray-400" />
                      <span className="font-semibold text-gray-900">{fmtNum(plan.limits.maxUsers)}</span>
                      <span>{plan.features.pricedPerPlant ? "usuarios/planta" : "usuarios"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-gray-300">
                      <Asset size={20} className="text-gray-400" />
                      <span className="font-semibold text-gray-900">{fmtNum(plan.limits.maxActivos)}</span>
                      <span>{plan.features.pricedPerPlant ? "activos/planta" : "activos"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Industry size={20} className="text-gray-400" />
                      <span className="font-semibold text-gray-900">{fmtPlants(plan.limits.maxPlants)}</span>
                      <span>plantas</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-4 pl-0 list-none">
                    {planHighlights(plan).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700 min-h-[2.5rem]">
                        <CheckmarkFilled size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex-grow" />
                  <Boton
                    href="https://app.reliaplant.com"
                    variant={isRecommended ? "primary" : "outline"}
                    className="w-full"
                  >
                    {isFree ? "Comenzar gratis" : "Comenzar prueba"}
                  </Boton>
                </div>
              );
            })}
          </div>
          )}


          <div className="flex flex-col items-center mt-8">
            <a href="/pricing" className="text-blue-600 font-medium hover:underline text-base mb-2">Ver comparación completa de planes <span className='inline-block align-middle'>↓</span></a>
            <p className="text-center text-sm text-gray-500 mt-2">
              ¿Necesitas algo a la medida?{" "}
              <a href="mailto:comercial@reliaplant.com" className="text-blue-600 font-medium hover:underline">
                Contacta con ventas — comercial@reliaplant.com
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Modal de contacto — formulario unificado (mismo popup que todo el sitio) */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setShowContactModal(false); }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white p-8 shadow-2xl md:w-[480px] w-full md:h-fit h-screen md:max-h-[90vh] overflow-y-auto">
            <div className="mb-6 flex flex-row justify-between items-center">
              <span className="font-ZenDots text-gray100 text-xl">RELIAPLANT</span>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Cerrar"
              >
                <Close size={24} />
              </button>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Solicita una demo</h2>
            </div>
            <FormularioContacto
              type="demo"
              btnText="Solicitar demo"
              especial="Contacto - home"
            />
          </div>
        </div>
      )}
    </>
  );
}

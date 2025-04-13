'use client';

import { useState } from 'react';
import { Add, Asset, Category, Headset, Industry, Number_1, Number_2, Number_3, Number_4, Number_5, ArrowRight, CheckmarkOutline, DocumentImport, Document, Loop, SettingsAdjust, GroupResource } from '@carbon/icons-react';
import Image from 'next/image';

export default function EstrategiaGestionActivosPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-end">
        <div className="absolute inset-0 bg-[url('../assets/bgGestionActivos.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 p-[2vw] py-8 text-left w-2/5 bg-white hover:bg-gray90 transition-colors group shadow-xl m-12 top-[40vh]">
          <div className="mb-4">
            <span className="font-light group-hover:text-white">
              Inicio <span className="mx-2 text-gray60 group-hover:text-white">{'/'}</span> Consultoría <span className="mx-2 text-gray60 group-hover:text-white">{'/'}</span> Gestión de Activos
            </span>
          </div>
          <h1 className="text-5xl font-light mb-4 group-hover:text-white">Estrategia de Gestión de Activos ISO 55000</h1>
          <p className="text-lg mb-6 group-hover:text-white">
            Implementamos los principios de la norma ISO 55000 para desarrollar una estrategia integral
            de gestión de activos físicos alineada con los objetivos de su organización.
          </p>
            <button className="bg-blue60 font-light text-lg flex flex-row items-center gap-4 py-4 rounded group-hover:bg-white group-hover:text-blue60 w-full relative overflow-hidden">
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
                
                @keyframes shimmerDark {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
              `}} />
              <div className="absolute inset-0 group-hover:opacity-0" style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite linear"
              }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100" style={{
                background: "linear-gradient(90deg, transparent, rgba(167, 212, 255, 0.9), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimmerDark 1.5s infinite linear"
              }} />
              <span className="relative z-10 group-hover:text-black">Solicitar una consulta</span>
              <ArrowRight size={20} className="relative z-10 text-white group-hover:text-black" />
            </button>
            <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-start gap-4 bg-white border shadow-md p-6 flex flex-row group-hover:bg-gray90 transition-colors">
              <div className="bg-gray90 p-3 rounded-full group-hover:bg-white">
              <Asset size={24} className="text-white group-hover:text-black" />
              </div>
              <div>
              <h3 className="text-xl font-bold mb-4 text-gray90 group-hover:text-white">Enfoque de ciclo de vida completo</h3>
              <p className="text-gray70 text-gray90 mb-0 group-hover:text-white">
                Gestionamos los activos desde la planificación y adquisición hasta la disposición final,
                optimizando el costo total de propiedad y extendiendo su vida útil.
              </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border shadow-md p-6 flex flex-row group-hover:bg-gray90 transition-colors">
              <div className="bg-gray90 p-3 rounded-full group-hover:bg-white">
              <SettingsAdjust size={24} className="text-white group-hover:text-black" />
              </div>
              <div>
              <h3 className="text-xl font-bold mb-4 text-gray90 group-hover:text-white">Alineación con objetivos organizacionales</h3>
              <p className="text-gray70 text-gray90 mb-0 group-hover:text-white">
                Vinculamos la estrategia de gestión de activos con los objetivos estratégicos
                de su empresa, asegurando que cada activo contribuya al éxito del negocio.
              </p>
              </div>
            </div>
            </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative  h-screen bg-[url('../assets/bgGestionActivos2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue10/20 to-blue20/10"></div>
        <div className="relative z-10 flex flex-col h-full justify-start w-2/5">


          {/* Features Grid */}

        </div>
      </div>

      {/* Implementation Phases */}
      <div className="bg-gray90 py-[10vh] px-[10vw]">
        <h2 className="text-4xl font-light mb-16 text-center text-white">Fases de implementación</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full" style={{
            width: '2px',
            backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 8px, transparent 8px, transparent 20px)',
            backgroundSize: '2px 28px',
            animation: 'dashMove 2s infinite linear'
          }}></div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes dashMove {
              0% { background-position: 0 0; }
              100% { background-position: 0 28px; }
            }
          `}} />

          <div className="mb-8 flex items-center w-full">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-bold mb-2 text-white">Diagnóstico y evaluación</h3>
          <p className="text-gray30">
        Análisis de la situación actual de la gestión de activos. Identificación de brechas
        respecto a los requisitos de la norma ISO 55000 y mejores prácticas del sector.
          </p>
        </div>
        <div className="relative w-1/12 flex justify-center">
          <div className="bg-blue20 border bg-gray100 shadow-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <Number_1 size={24} className="text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
          </div>

          <div className="mb-8 flex items-center w-full">
        <div className="w-1/2"></div>
        <div className="relative w-1/12 flex justify-center">
          <div className="bg-blue20 border bg-gray100 shadow-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <Number_2 size={24} className="text-white" />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-xl font-bold mb-2 text-white">Planificación estratégica</h3>
          <p className="text-gray30">
        Definición del contexto organizacional, partes interesadas y alcance del sistema.
        Desarrollo de la política de gestión de activos y objetivos estratégicos.
          </p>
        </div>
          </div>

          <div className="mb-8 flex items-center w-full">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-bold mb-2 text-white">Desarrollo del sistema</h3>
          <p className="text-gray30">
        Elaboración del Plan Estratégico de Gestión de Activos (PEGA) y planes tácticos.
        Establecimiento de procesos, procedimientos y herramientas de gestión.
          </p>
        </div>
        <div className="relative w-1/12 flex justify-center">
          <div className="bg-blue20 border bg-gray100 shadow-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <Number_3 size={24} className="text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
          </div>

          <div className="mb-8 flex items-center w-full">
        <div className="w-1/2"></div>
        <div className="relative w-1/12 flex justify-center">
          <div className="bg-blue20 border bg-gray100 shadow-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <Number_4 size={24} className="text-white" />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-xl font-bold mb-2 text-white">Implementación y operación</h3>
          <p className="text-gray30">
        Puesta en marcha del sistema. Capacitación del personal y gestión del cambio.
        Implementación de herramientas de soporte para la toma de decisiones.
          </p>
        </div>
          </div>

          <div className="mb-8 flex items-center w-full">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-bold mb-2 text-white">Evaluación y mejora</h3>
          <p className="text-gray30">
        Monitoreo del desempeño mediante KPIs. Auditorías internas del sistema.
        Revisión por la dirección y planes de mejora continua.
          </p>
        </div>
        <div className="relative w-1/12 flex justify-center">
          <div className="bg-blue20 border bg-gray100 shadow-2xl p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <Number_5 size={24} className="text-white" />
          </div>
        </div>
        <div className="w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Key Elements Section */}
      <div className="py-[10vh] px-[10vw]">
        <h2 className="text-4xl font-light mb-16 text-center">Elementos clave del sistema ISO 55000</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md border overflow-hidden">
        <div className="h-48 w-full bg-[url('/assets/bgProcedimientos.jpg')] bg-cover bg-center"></div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6">Política y estrategia</h3>
          <p className="mb-6 text-gray70">
            Documentos que definen el compromiso de la organización con los principios de gestión de
            activos y los objetivos que se pretenden lograr.
          </p>
          <ul className="list-disc pl-5 text-gray70">
            <li className="mb-2">Política de gestión de activos</li>
            <li className="mb-2">Plan estratégico de gestión de activos</li>
            <li>Planes operativos y tácticos</li>
          </ul>
        </div>
          </div>

          <div className="bg-white shadow-md border overflow-hidden">
        <div className="h-48 w-full bg-[url('/assets/bgProcedimientos.jpg')] bg-cover bg-center"></div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6">Personas y organización</h3>
          <p className="mb-6 text-gray70">
            Estructura organizacional, roles, responsabilidades y competencias necesarias para
            implementar y mantener el sistema de gestión de activos.
          </p>
          <ul className="list-disc pl-5 text-gray70">
            <li className="mb-2">Roles y responsabilidades definidas</li>
            <li className="mb-2">Desarrollo de competencias</li>
            <li>Gestión del cambio cultural</li>
          </ul>
        </div>
          </div>

          <div className="bg-white shadow-md border overflow-hidden">
        <div className="h-48 w-full bg-[url('/assets/bgProcedimientos.jpg')] bg-cover bg-center"></div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6">Evaluación del desempeño</h3>
          <p className="mb-6 text-gray70">
            Sistemas para medir, monitorear, analizar y evaluar el desempeño de los activos
            y la efectividad del sistema de gestión.
          </p>
          <ul className="list-disc pl-5 text-gray70">
            <li className="mb-2">Indicadores clave de desempeño (KPIs)</li>
            <li className="mb-2">Auditorías internas</li>
            <li>Revisión por la dirección</li>
          </ul>
        </div>
          </div>
        </div>
      </div>

      {/* Framework Diagram */}
      <div className="bg-gray10 py-[10vh] px-[10vw]">
        <h2 className="text-4xl font-light mb-10 text-center">Marco de referencia ISO 55000</h2>

        <div className="bg-white p-8 shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contexto y alcance</h3>
              <p className="mb-4 text-gray70">
                La implementación de un Sistema de Gestión de Activos basado en ISO 55000 considera:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Contexto organizacional:</span>
                    <p className="text-gray70">Comprensión de las necesidades y expectativas de la organización y partes interesadas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Liderazgo y compromiso:</span>
                    <p className="text-gray70">Participación activa de la alta dirección en el desarrollo e implementación del sistema.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Planificación:</span>
                    <p className="text-gray70">Identificación de riesgos y oportunidades, establecimiento de objetivos y planificación para lograrlos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Integración con otros sistemas</h3>
              <p className="mb-4 text-gray70">
                El sistema de gestión de activos se integra con otros sistemas de gestión existentes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Calidad (ISO 9001):</span>
                    <p className="text-gray70">Enfoque en procesos y mejora continua.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Seguridad y salud (ISO 45001):</span>
                    <p className="text-gray70">Gestión de riesgos operacionales y seguridad en el mantenimiento.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Medio ambiente (ISO 14001):</span>
                    <p className="text-gray70">Consideración de aspectos ambientales en todo el ciclo de vida de los activos.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-[10vw] py-[10vh]">
        <h2 className="text-4xl font-light mb-12 text-center">Beneficios para su organización</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-l-4 border-blue60 pl-6 py-2">
            <h3 className="text-xl font-bold mb-3">Retorno óptimo de las inversiones</h3>
            <p className="text-gray70">
              Mejora de la rentabilidad y reducción del costo total de propiedad mediante
              decisiones fundamentadas sobre adquisición, operación, mantenimiento y renovación.
            </p>
          </div>

          <div className="border-l-4 border-blue60 pl-6 py-2">
            <h3 className="text-xl font-bold mb-3">Gestión de riesgos mejorada</h3>
            <p className="text-gray70">
              Identificación y mitigación sistemática de riesgos asociados a los activos,
              reduciendo la probabilidad de fallas costosas y mejorando la seguridad.
            </p>
          </div>

          <div className="border-l-4 border-blue60 pl-6 py-2">
            <h3 className="text-xl font-bold mb-3">Desempeño optimizado de los activos</h3>
            <p className="text-gray70">
              Aumento de la confiabilidad, disponibilidad y eficiencia de los activos,
              lo que se traduce en mejoras operativas y competitivas.
            </p>
          </div>

          <div className="border-l-4 border-blue60 pl-6 py-2">
            <h3 className="text-xl font-bold mb-3">Sostenibilidad a largo plazo</h3>
            <p className="text-gray70">
              Enfoque en el ciclo de vida completo, que promueve la sostenibilidad económica
              y ambiental de la organización en el largo plazo.
            </p>
          </div>
        </div>
      </div>

      {/* Reference Standard */}
      <div className="bg-gray10 py-[8vh] px-[10vw]">
        <h2 className="text-4xl font-light mb-10 text-center">Familia de normas ISO 55000</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">ISO 55000</h3>
            <p className="text-gray70">
              Visión general, principios y terminología de la gestión de activos.
              Define los conceptos fundamentales y el marco de referencia.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">ISO 55001</h3>
            <p className="text-gray70">
              Especifica los requisitos para un sistema de gestión de activos
              eficaz dentro del contexto de la organización.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">ISO 55002</h3>
            <p className="text-gray70">
              Proporciona directrices para la aplicación de ISO 55001,
              incluyendo ejemplos y metodologías de implementación.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}
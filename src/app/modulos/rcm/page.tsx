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
import RCMFeatures from "@/components/RCMFeatures";
import ModuleStickyBanner from "@/components/ModuleStickyBanner";

export const metadata = {
  title: "Módulo RCM - Reliability Centered Maintenance | Reliaplant",
  description: "Mantenimiento centrado en confiabilidad estructurado y centralizado. Gestiona el proceso RCM en un entorno diseñado para ello.",
};

export default function RCMPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo RCM" moduleType="rcm" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
        
        {/* Botón Volver en esquina superior derecha */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute -top-16 right-0">
            <Link href="/#modulos" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={24} className="text-white" />
            </Link>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-full text-sm font-medium text-blue-300 mb-6">
            <DataStructured size={16} />
            <span>Módulo RCM</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Reliability Centered Maintenance estructurado
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl">
            Centraliza el proceso RCM en un entorno estructurado que permite relacionar activos, funciones y modos de falla sin duplicaciones.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4 block">
                El problema hoy
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Las hojas de cálculo no están diseñadas para RCM
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                RCM suele hacerse en hojas de cálculo por tradición, pero eso genera:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Plantillas inconsistentes entre equipos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Dificultad para visualizar relaciones</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Actividades duplicadas sin detectar</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Pérdida de trazabilidad total</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
              <p className="text-gray-900 font-semibold text-lg mb-4">Esto termina provocando:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Mantenimiento innecesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Falta de tareas críticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Baja disponibilidad de planta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hace este módulo - Interactive Features */}
      <RCMFeatures />

      {/* Beneficios operativos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4 block">
            Beneficios operativos
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Impacto en tu operación
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Estrategias de mantenimiento más coherentes</h3>
                <p className="text-gray-700">
                  Planes consistentes en toda la planta, siguiendo la misma lógica y criterios técnicos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eliminación de tareas redundantes</h3>
                <p className="text-gray-700">
                  Identificación automática de duplicaciones que libera recursos sin comprometer confiabilidad.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mejor priorización técnica</h3>
                <p className="text-gray-700">
                  Enfoque en modos de falla críticos, evitando gastar tiempo en análisis de bajo impacto.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Implementación más ágil del RCM</h3>
                <p className="text-gray-700">
                  Del análisis al CMMS en minutos, no en semanas de transcripción manual de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso Ideales */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded mb-4">
              ¿Es para ti?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Casos de Uso Ideales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Este módulo genera mayor valor cuando tu organización enfrenta alguno de estos escenarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Plantas con Mantenimiento Reactivo Dominante */}
            <div className="bg-white border border-gray-200 p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Restart size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Plantas con Mantenimiento Reactivo Dominante
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando necesitas estructurar una estrategia proactiva clara basada en consecuencias reales.
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
            <div className="bg-white border border-gray-200 p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Renew size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Empresas que Intentaron RCM sin Continuidad
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando iniciativas anteriores murieron por falta de herramientas que facilitaran la ejecución.
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
            <div className="bg-white border border-gray-200 p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Copy size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Organizaciones con Múltiples Activos Similares
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando puedes reutilizar análisis entre equipos iguales y escalar rápidamente el RCM.
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
            <div className="bg-white border border-gray-200 p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Time size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Equipos con Poco Tiempo para Análisis Profundo
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando necesitas acelerar sin sacrificar el rigor metodológico del RCM estándar.
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
          <div className="mt-12 text-center">
            <Link 
              href="#contacto" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 font-semibold transition-colors"
            >
              Agenda una Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="py-20 px-4 bg-white">
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

            <div className="text-center">
              <Link 
                href="/#contacto" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Solicitar cotización de consultoría
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Implementa RCM real sin herramientas improvisadas
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Prueba el módulo RCM gratis por 14 días y descubre cómo estructurar planes de mantenimiento coherentes y accionables.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contacto" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-all">
              Comenzar prueba gratis
            </Link>
            <Link href="/" className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded font-medium transition-all">
              Ver todos los módulos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

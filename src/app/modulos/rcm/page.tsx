import React from "react";
import {
  DataStructured,
  CheckmarkFilled,
  ArrowLeft,
} from "@carbon/icons-react";
import Link from "next/link";
import RCMFeatures from "@/components/RCMFeatures";

export const metadata = {
  title: "Módulo RCM - Reliability Centered Maintenance | Reliaplant",
  description: "Mantenimiento centrado en confiabilidad sin Excel caótico. Centraliza el proceso RCM en un entorno estructurado.",
};

export default function RCMPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-8">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
        
        {/* Botón Volver en esquina superior derecha */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute -top-16 right-0">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-full text-sm font-medium text-blue-300 mb-6">
            <DataStructured size={16} />
            <span>Módulo RCM</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Reliability Centered Maintenance sin Excel caótico
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl">
            Centraliza el proceso RCM en un entorno estructurado que permite relacionar activos, funciones y modos de falla sin duplicaciones.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-4 block">
                El problema hoy
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Excel no está diseñado para RCM
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                RCM suele hacerse en Excel por tradición, pero eso genera:
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
      <section className="py-20 px-8 bg-white">
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

      {/* Dónde aporta más valor */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
            Casos de uso ideales
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Dónde aporta más valor
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Este módulo genera mayor impacto en:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Plantas con mantenimiento reactivo dominante
              </h3>
              <p className="text-gray-700">
                Cuando necesitas estructurar una estrategia proactiva clara basada en consecuencias reales.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Empresas que intentaron RCM pero no lograron continuidad
              </h3>
              <p className="text-gray-700">
                Cuando iniciativas anteriores murieron por falta de herramientas que facilitaran la ejecución.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Organizaciones con múltiples activos similares
              </h3>
              <p className="text-gray-700">
                Cuando puedes reutilizar análisis entre equipos iguales y escalar rápidamente el RCM.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Equipos de confiabilidad con poco tiempo para análisis profundo
              </h3>
              <p className="text-gray-700">
                Cuando necesitas acelerar sin sacrificar el rigor metodológico del RCM estándar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Implementa RCM real sin la complejidad de Excel
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

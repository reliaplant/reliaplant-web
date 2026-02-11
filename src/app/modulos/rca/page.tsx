import React from "react";
import {
  Network_3,
  CheckmarkFilled,
  ArrowLeft,
  Lightning,
} from "@carbon/icons-react";
import Link from "next/link";
import RCAFeatures from "@/components/RCAFeatures";

export const metadata = {
  title: "Módulo RCA - Análisis de Causa Raíz | Reliaplant",
  description: "Análisis de causa raíz sin burocracia ni errores metodológicos. Estructure el proceso completo con asistencia de IA.",
};

export default function RCAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white pt-32 pb-20 px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl" />
        
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
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-6">
            <Network_3 size={16} />
            <span>Módulo RCA</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Análisis de causa raíz sin burocracia ni errores metodológicos
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl">
            Estructura el proceso completo para que el análisis siga la metodología correctamente, sea trazable y genere documentación clara.
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
                Los RCA actuales no generan valor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Muchos análisis de causa raíz en industria terminan siendo:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Presentaciones en PowerPoint difíciles de mantener</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Informes redactados manualmente</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Árboles de fallas inconsistentes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-500 text-xl mt-1">✗</span>
                  <span>Conclusiones poco accionables</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
              <p className="text-gray-900 font-semibold text-lg mb-4">El resultado es crítico:</p>
              <p className="text-gray-700 mb-6">
                La causa raíz real no se identifica y la falla vuelve a ocurrir.
              </p>
              
              <p className="text-gray-900 font-semibold mb-3">Esto impacta directamente:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Producción</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Seguridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Costos operativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Credibilidad del equipo técnico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hace este módulo - Interactive Features */}
      <RCAFeatures />

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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Menos tiempo preparando informes</h3>
                <p className="text-gray-700">
                  La documentación se genera automáticamente según avanza el análisis.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mejor calidad de análisis</h3>
                <p className="text-gray-700">
                  Metodología guiada que previene errores comunes y asegura completitud.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reducción de fallas recurrentes</h3>
                <p className="text-gray-700">
                  Identificación efectiva de causas raíz que elimina recurrencias costosas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Decisiones técnicas mejor fundamentadas</h3>
                <p className="text-gray-700">
                  Evidencias organizadas y razonamiento claro que respalda cada conclusión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuándo tiene más impacto */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4 block">
            Casos de uso ideales
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cuándo tiene más impacto
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Este módulo genera mayor valor en las siguientes situaciones:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Equipos críticos con fallas repetitivas
              </h3>
              <p className="text-gray-700">
                Cuando necesitas eliminar definitivamente fallas que vuelven a ocurrir y afectan producción.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Auditorías o investigaciones técnicas
              </h3>
              <p className="text-gray-700">
                Cuando debes presentar documentación formal con rigor metodológico comprobable.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Equipos de confiabilidad con alta carga administrativa
              </h3>
              <p className="text-gray-700">
                Cuando el tiempo de preparar informes resta tiempo de análisis técnico real.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Organizaciones donde RCA existe pero no genera cambios reales
              </h3>
              <p className="text-gray-700">
                Cuando los análisis se hacen pero las acciones correctivas no se implementan o no son efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Convierte tus RCA en eliminadores reales de fallas recurrentes
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Prueba el módulo RCA gratis por 14 días y descubre cómo estructurar análisis que generan acciones efectivas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contacto" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-all">
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

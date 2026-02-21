import React from "react";
import {
  Network_3,
  CheckmarkFilled,
  ArrowLeft,
  ArrowRight,
  Lightning,
  Education,
  Report,
  TaskComplete,
  Renew,
  Certificate,
  Time,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";
import RCAFeatures from "@/components/RCAFeatures";
import ModuleStickyBanner from "@/components/ModuleStickyBanner";
import DemoRequestSection from "@/components/DemoRequestSection";

export const metadata = {
  title: "Módulo RCA - Análisis de Causa Raíz | Reliaplant",
  description: "Análisis de causa raíz sin burocracia ni errores metodológicos. Estructure el proceso completo con asistencia de IA.",
};

export default function RCAPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo RCA" moduleType="rca" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bgACR.jpg"
            alt="Análisis de causa raíz"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl" />
        
        {/* Botón Volver en esquina superior derecha */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute -top-16 right-0">
            <Link href="/#modulos" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={24} className="text-white" />
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
                  <span>Presentaciones estáticas difíciles de mantener</span>
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

      {/* Casos de Uso Ideales */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded mb-4">
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
            {/* Card 1: Equipos Críticos con Fallas Repetitivas */}
            <div className="bg-white border border-gray-200 p-6 hover:border-purple-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Renew size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Equipos Críticos con Fallas Repetitivas
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando necesitas eliminar definitivamente fallas que vuelven a ocurrir y afectan producción.
              </p>
              <div className="bg-purple-50 border-l-2 border-purple-600 px-4 py-3 mb-4">
                <span className="text-purple-800 font-bold text-3xl block">-60%</span>
                <span className="text-purple-700 text-sm">fallas recurrentes</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Fallas crónicas</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Producción</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Disponibilidad</span>
              </div>
            </div>
            
            {/* Card 2: Auditorías o Investigaciones Técnicas */}
            <div className="bg-white border border-gray-200 p-6 hover:border-purple-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Certificate size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Auditorías o Investigaciones Técnicas
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando debes presentar documentación formal con rigor metodológico comprobable.
              </p>
              <div className="bg-purple-50 border-l-2 border-purple-600 px-4 py-3 mb-4">
                <span className="text-purple-800 font-bold text-3xl block">100%</span>
                <span className="text-purple-700 text-sm">trazabilidad</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Auditorías</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Compliance</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Trazabilidad</span>
              </div>
            </div>
            
            {/* Card 3: Equipos con Alta Carga Administrativa */}
            <div className="bg-white border border-gray-200 p-6 hover:border-purple-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Time size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Equipos con Alta Carga Administrativa
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando el tiempo de preparar informes resta tiempo al análisis técnico real.
              </p>
              <div className="bg-purple-50 border-l-2 border-purple-600 px-4 py-3 mb-4">
                <span className="text-purple-800 font-bold text-3xl block">-70%</span>
                <span className="text-purple-700 text-sm">tiempo en documentación</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Eficiencia</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Informes</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Productividad</span>
              </div>
            </div>
            
            {/* Card 4: RCA Existe pero No Genera Cambios */}
            <div className="bg-white border border-gray-200 p-6 hover:border-purple-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <TaskComplete size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    RCA Existe pero No Genera Cambios
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Cuando los análisis se hacen pero las acciones correctivas no se implementan o no son efectivas.
              </p>
              <div className="bg-purple-50 border-l-2 border-purple-600 px-4 py-3 mb-4">
                <span className="text-purple-800 font-bold text-3xl block">95%</span>
                <span className="text-purple-700 text-sm">acciones cerradas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Acciones correctivas</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Seguimiento</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Efectividad</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="#contacto" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 font-semibold transition-colors"
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
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-12 border-2 border-purple-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-4 block">
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
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network_3 size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Análisis RCA completo</h3>
                <p className="text-sm text-gray-600">
                  Investigación de fallas usando Árbol Lógico de Fallas, 5 Porqués y análisis de barreras
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Education size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capacitación incluida</h3>
                <p className="text-sm text-gray-600">
                  Formamos a tu equipo en metodologías RCA para que ejecuten análisis de forma autónoma
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TaskComplete size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Revisión de análisis</h3>
                <p className="text-sm text-gray-600">
                  Evaluación de RCAs existentes para validar calidad metodológica y efectividad de acciones
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Report size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Informe ejecutivo</h3>
                <p className="text-sm text-gray-600">
                  Documentación formal con hallazgos, causas raíz verificadas y plan de acciones
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/#contacto" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
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

      {/* Demo Request */}
      <DemoRequestSection bgColor="#31135e" />
    </>
  );
}

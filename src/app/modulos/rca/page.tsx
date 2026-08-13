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
import RCACtaButtons from "./RCACtaButtons";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata = {
  title: "Módulo RCA - Análisis de Causa Raíz | Reliaplant",
  description: "Análisis de causa raíz sin burocracia ni errores metodológicos. Estructure el proceso completo con asistencia de IA.",
};

export default function RCAPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo RCA" moduleType="rca" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/landing-rca-ing-tristes.webp"
            alt="Análisis de causa raíz"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
        
        {/* Botón Volver en esquina superior izquierda */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="absolute -top-16 left-0">
            <Link href="/#modulos" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={24} className="text-white" />
            </Link>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Análisis de Causa Raíz
          </h1>

          <p className="text-2xl font-semibold text-white/80 mb-6">
            Análisis de causa raíz sin burocracia ni errores metodológicos
          </p>

          <p className="text-lg text-white/60 max-w-7xl">
            Estructura el proceso completo para que el análisis siga la metodología correctamente, sea trazable y genere documentación clara.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto grid lg:grid-cols-2 border border-gray-200">
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
            Los RCA actuales no generan valor
          </h2>

          <p
            className="mb-6"
            style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}
          >
            Muchos análisis de causa raíz en industria terminan siendo ineficaces: documentados en presentaciones estáticas, redactados a mano, sin metodología estructurada.
          </p>

          {/* Pain point pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Presentaciones estáticas',
              'Informes manuales',
              'Árboles de falla inconsistentes',
              'Conclusiones poco accionables',
              'Sin trazabilidad',
              'Fallas que se repiten',
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
              <strong>El resultado:</strong> la causa raíz real no se identifica y la falla vuelve a ocurrir — impactando producción, seguridad y costos operativos.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[480px]">
          <Image
            src="/assets/el-problema-hoy-rca.webp"
            alt="Análisis de causa raíz"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        </div>
        </div>
      </section>

      {/* Qué hace este módulo - Interactive Features */}
      <RCAFeatures />

      {/* Beneficios operativos */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto grid lg:grid-cols-2 border border-gray-200">
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
                <h3 className="text-sm font-bold text-gray-900 mb-1">Menos tiempo preparando informes</h3>
                <p className="text-sm text-gray-600">
                  La documentación se genera automáticamente según avanza el análisis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Mejor calidad de análisis</h3>
                <p className="text-sm text-gray-600">
                  Metodología guiada que previene errores comunes y asegura completitud.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Reducción de fallas recurrentes</h3>
                <p className="text-sm text-gray-600">
                  Identificación efectiva de causas raíz que elimina recurrencias costosas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Decisiones técnicas mejor fundamentadas</h3>
                <p className="text-sm text-gray-600">
                  Evidencias organizadas y razonamiento claro que respalda cada conclusión.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[320px]">
          <Image
            src="/assets/Beneficios RCA.webp"
            alt="Análisis de causa raíz"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        </div>
        </div>
      </section>

      {/* Casos de Uso Ideales */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Para equipos que quieren
            </h2>
            <p className="text-lg text-gray-600 max-w-7xl">
              Eliminar fallas recurrentes, documentar investigaciones con rigor metodológico y convertir cada incidente en aprendizaje organizacional real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Equipos Críticos con Fallas Repetitivas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Renew size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Reducir fallas recurrentes en equipos críticos
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Identifica y ataca la causa raíz real de fallas que afectan producción — no solo los síntomas.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">-60%</span>
                <span className="text-blue-700 text-sm">fallas recurrentes</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Fallas crónicas</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Producción</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Disponibilidad</span>
              </div>
            </div>
            
            {/* Card 2: Auditorías o Investigaciones Técnicas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Certificate size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Documentar investigaciones con rigor formal
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Genera documentación técnica trazable y defendible ante auditorías o revisiones internas.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">100%</span>
                <span className="text-blue-700 text-sm">trazabilidad</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Auditorías</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Compliance</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Trazabilidad</span>
              </div>
            </div>
            
            {/* Card 3: Equipos con Alta Carga Administrativa */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Time size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Liberar tiempo técnico del papeleo
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Automatiza la documentación para que tu equipo se enfoque en el análisis, no en los informes.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">-70%</span>
                <span className="text-blue-700 text-sm">tiempo en documentación</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Eficiencia</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Informes</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Productividad</span>
              </div>
            </div>
            
            {/* Card 4: RCA Existe pero No Genera Cambios */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <TaskComplete size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Cerrar el ciclo de acciones correctivas
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Asegura que cada análisis genere acciones con responsable, fecha y seguimiento real.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">95%</span>
                <span className="text-blue-700 text-sm">acciones cerradas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Acciones correctivas</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Seguimiento</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Efectividad</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <AbrirFormContacto
              buttonText="Agenda una Demo"
              variant="primary"
              modalTitle="Agenda una Demo — RCA"
              especial="RCA - Demo"
              icon={<ArrowRight size={20} className="text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border-2 border-blue-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
                Servicio de consultoría
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Prefieres que lo hagamos por ti?
              </h2>
              <p className="text-xl text-gray-700 max-w-7xl mx-auto">
                A pesar de que con nuestra plataforma lo puedes hacer fácilmente, <strong>podemos hacerlo por ti</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network_3 size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Análisis RCA completo</h3>
                <p className="text-sm text-gray-600">
                  Investigación de fallas usando Árbol Lógico de Fallas, 5 Porqués y análisis de barreras
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Education size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capacitación incluida</h3>
                <p className="text-sm text-gray-600">
                  Formamos a tu equipo en metodologías RCA para que ejecuten análisis de forma autónoma
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TaskComplete size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Revisión de análisis</h3>
                <p className="text-sm text-gray-600">
                  Evaluación de RCAs existentes para validar calidad metodológica y efectividad de acciones
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Report size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Informe ejecutivo</h3>
                <p className="text-sm text-gray-600">
                  Documentación formal con hallazgos, causas raíz verificadas y plan de acciones
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <AbrirFormContacto
                buttonText="Solicitar cotización de consultoría"
                variant="primary"
                modalTitle="Consultoría RCA"
                especial="RCA - Consultoría"
              />
              <p className="text-sm text-gray-600 mt-4">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Elimina fallas recurrentes con análisis estructurados
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Prueba el módulo RCA y descubre cómo documentar, trazabilizar y resolver fallas de raíz de forma metodológicamente sólida.
          </p>
          <RCACtaButtons />
        </div>
      </section>
    </>
  );
}

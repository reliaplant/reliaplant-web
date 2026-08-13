import React from "react";
import {
  Catalog,
  CheckmarkFilled,
  ArrowLeft,
  FolderDetails,
  Time,
  DocumentMultiple_01,
  Migrate,
  Growth,
  DataRefinery,
  Certificate,
  ArrowRight,
} from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";
import RegistroActivosFeatures from "@/components/RegistroActivosFeatures";
import TaxonomyMTBFCase from "@/components/TaxonomyMTBFCase";
import ModuleStickyBanner from "@/components/ModuleStickyBanner";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata = {
  title: "Módulo Registro de Activos - Taxonomía | Reliaplant",
  description: "Base de datos confiable para decisiones de mantenimiento. Estructura tus activos siguiendo ISO 14224.",
};

export default function RegistroActivosPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo Registro de Activos" moduleType="registro" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Hero Taxonomia.webp"
            alt="Gestión de activos industriales"
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
            Registro de Activos
          </h1>

          <p className="text-2xl font-semibold text-white/80 mb-6">
            Base de datos confiable para decisiones de mantenimiento
          </p>
          
          <p className="text-lg text-white/60 max-w-7xl">
            Estructura tus activos siguiendo principios como ISO 14224, asegurando relaciones correctas y base sólida para indicadores.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section className="py-8 md:py-12 bg-white">
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
            Activos mal estructurados invalidan toda la gestión
          </h2>

          <p
            className="mb-6"
            style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}
          >
            Muchas plantas tienen activos registrados sin estándar, con jerarquías rotas y datos incompletos — lo que hace imposible gestionar la confiabilidad con seriedad.
          </p>

          {/* Pain point pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Jerarquías sin estándar',
              'Equipos mal asociados',
              'Información técnica incompleta',
              'Indicadores poco confiables',
              'Inventario desconocido',
              'Decisiones intuitivas',
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
              <strong>El resultado:</strong> sin una taxonomía clara, la confiabilidad no se puede gestionar — los indicadores pierden valor y las decisiones se vuelven puramente intuitivas.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[480px]">
          <Image
            src="/assets/Problema taxonomia.webp"
            alt="Gestión de activos industriales"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        </div>
      </section>

      <TaxonomyMTBFCase />

      {/* Por qué era tan difícil hacerlo bien */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">
              La realidad histórica
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hacerlo correctamente según ISO era extremadamente difícil
            </h2>
            <p className="text-xl text-gray-700 max-w-7xl mx-auto">
              Implementar una taxonomía profesional siempre tuvo barreras inmensas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FolderDetails size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Documentación fragmentada</h3>
              <p className="text-gray-700 flex-grow">
                Fotos, planos y datos técnicos dispersos en carpetas y sistemas no integrados, imposibles de encontrar.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Time size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Cientos de horas de trabajo</h3>
              <p className="text-gray-700 flex-grow">
                Proyectos de 3-6 meses con equipos completos dedicados solo a documentar jerarquías manualmente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <DocumentMultiple_01 size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Archivos complicadísimos</h3>
              <p className="text-gray-700 flex-grow">
                Hojas con macros frágiles, fórmulas complejas y validaciones que nadie entiende después de 6 meses.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-red-50 border-l-4 border-blue-500 rounded-r-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">El resultado actual:</h3>
            <p className="text-lg text-gray-800 mb-4">
              La mayoría de empresas tienen <strong>taxonomías deficientes</strong> que nunca cumplieron con estándares como ISO 14224 ni con políticas serias de gestión de activos.
            </p>
            <p className="text-lg text-gray-800">
              Esto las deja <strong>incapaces de aplicar confiabilidad correctamente</strong>, perpetuando el mantenimiento reactivo y la falta de indicadores reales.
            </p>
          </div>
        </div>
      </section>

      {/* Qué hace este módulo - Interactive Features */}
      <RegistroActivosFeatures />

      {/* Beneficios operativos */}
      <section className="py-8 md:py-12 bg-white">
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
                <h3 className="text-sm font-bold text-gray-900 mb-1">Indicadores más confiables</h3>
                <p className="text-sm text-gray-600">
                  KPIs calculados sobre estructura sólida que refleja la realidad operativa de planta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Mejor control de activos</h3>
                <p className="text-sm text-gray-600">
                  Visibilidad total de todos los equipos, relaciones y estado técnico en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Menos carga administrativa futura</h3>
                <p className="text-sm text-gray-600">
                  Estructura correcta desde el inicio evita proyectos de limpieza de datos costosos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={18} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Mayor calidad en decisiones de mantenimiento</h3>
                <p className="text-sm text-gray-600">
                  Información estructurada que facilita priorización técnica basada en datos reales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[320px]">
          <Image
            src="/assets/bgGestionActivos.webp"
            alt="Planta industrial"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        </div>
      </section>

      {/* Casos de Uso Ideales */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Para plantas que quieren
            </h2>
            <p className="text-lg text-gray-600 max-w-7xl">
              Construir una base técnica sólida con datos consistentes — que respalde buenos análisis, facilite la gestión de activos y no tenga que rehacerse cada vez que alguien cambia una hoja de cálculo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Implementaciones de CMMS */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Migrate size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Arrancar el CMMS con datos bien estructurados
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Estructura la taxonomía antes de cargar datos al CMMS y evita meses de limpieza después del arranque.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">6-12 meses</span>
                <span className="text-blue-700 text-sm">ahorrados en limpieza de datos</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Migración</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">SAP PM</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Maximo</span>
              </div>
            </div>
            
            {/* Card 2: Plantas en Crecimiento */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Growth size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Mantener consistencia al incorporar nuevos activos
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Incorpora nuevos equipos con nomenclatura estandarizada sin romper la jerarquía existente.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">100%</span>
                <span className="text-blue-700 text-sm">consistencia en taxonomía</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Expansión</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Multi-sitio</span>
              </div>
            </div>
            
            {/* Card 3: Data Histórica Desordenada */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <DataRefinery size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Ordenar y normalizar registros históricos
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Consolida años de registros dispersos en una jerarquía limpia, sin duplicados ni inconsistencias.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">85%</span>
                <span className="text-blue-700 text-sm">reducción en duplicados</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Limpieza</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Normalización</span>
              </div>
            </div>
            
            {/* Card 4: Profesionalizar Confiabilidad */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Certificate size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Estandarizar la gestión de activos bajo normas ISO
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Alinea tu base de activos con ISO 14224 y construye la base para indicadores de confiabilidad reales.
              </p>
              <div className="bg-blue-50 border-l-2 border-blue-600 px-4 py-3 mb-4">
                <span className="text-blue-800 font-bold text-3xl block">3x ROI</span>
                <span className="text-blue-700 text-sm">en iniciativas de confiabilidad</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">ISO 14224</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Estandarización</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Auditable</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <AbrirFormContacto
              buttonText="Agenda una Demo"
              variant="primary"
              modalTitle="Agenda una Demo — Registro de Activos"
              especial="Registro - Demo"
              icon={<ArrowRight size={20} className="text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
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

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Catalog size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Levantamiento completo</h3>
                <p className="text-sm text-gray-600">
                  Nuestro equipo estructura toda tu taxonomía de activos según ISO 14224
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckmarkFilled size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Implementación garantizada</h3>
                <p className="text-sm text-gray-600">
                  Cargamos y validamos toda la información en la plataforma lista para usar
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckmarkFilled size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capacitación incluida</h3>
                <p className="text-sm text-gray-600">
                  Entrenamos a tu equipo para que gestionen y actualicen el registro
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <AbrirFormContacto
                buttonText="Solicitar cotización de consultoría"
                variant="primary"
                modalTitle="Consultoría Registro de Activos"
                especial="Registro - Consultoría"
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
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Construye la base de datos de activos que tu planta necesita
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Estructura tus equipos siguiendo estándares internacionales y habilita el uso real de metodologías como RCM y RCA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://app.reliaplant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Prueba Ahora
            </Link>
            <AbrirFormContacto
              buttonText="Contactar"
              variant="outline-light"
              modalTitle="Contactar — Registro de Activos"
              especial="Registro - Contacto"
              size="md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

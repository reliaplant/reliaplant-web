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
import ModuleStickyBanner from "@/components/ModuleStickyBanner";

export const metadata = {
  title: "Módulo Registro de Activos - Taxonomía | Reliaplant",
  description: "Base de datos confiable para decisiones de mantenimiento. Estructura tus activos siguiendo ISO 14224.",
};

export default function RegistroActivosPage() {
  return (
    <>
      <ModuleStickyBanner moduleName="Módulo Registro de Activos" moduleType="registro" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white pt-32 pb-20 px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bgGestionActivos2.jpg"
            alt="Gestión de activos industriales"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
        
        {/* Botón Volver en esquina superior derecha */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute -top-16 right-0">
            <Link href="/#modulos" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={24} className="text-white" />
            </Link>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-6xl font-extrabold leading-tight mb-4">
            Registro de Activos
          </h1>

          <p className="text-2xl font-semibold text-white/80 mb-6">
            Base de datos confiable para decisiones de mantenimiento
          </p>
          
          <p className="text-lg text-white/60 max-w-3xl">
            Estructura tus activos siguiendo principios como ISO 14224, asegurando relaciones correctas y base sólida para indicadores.
          </p>
        </div>
      </section>

      {/* El problema hoy */}
      <section
        className="relative overflow-hidden bg-white"
        style={{ minHeight: 520 }}
      >
        {/* Image — right 55%, diagonal left edge */}
        <div
          className="absolute top-0 right-0 h-full hidden md:block"
          style={{ width: '55%', clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <Image
            src="/assets/bgGestionActivos2.jpg"
            alt="Gestión de activos industriales"
            fill
            className="object-cover object-center"
            sizes="55vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 40%)' }}
          />
        </div>

        {/* Mobile image */}
        <div className="relative h-52 w-full md:hidden">
          <Image
            src="/assets/bgGestionActivos2.jpg"
            alt="Gestión de activos industriales"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Content — left side */}
        <div
          className="relative z-10 flex flex-col justify-center px-6 py-12 md:py-16"
          style={{ maxWidth: '52%' }}
        >
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
              borderRadius: '0 8px 8px 0',
              padding: '16px 20px',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: '#7f1d1d', lineHeight: 1.6 }}>
              <strong>El resultado:</strong> sin una taxonomía clara, la confiabilidad no se puede gestionar — los indicadores pierden valor y las decisiones se vuelven puramente intuitivas.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué era tan difícil hacerlo bien */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 block">
              La realidad histórica
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hacerlo correctamente según ISO era extremadamente difícil
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Implementar una taxonomía profesional siempre tuvo barreras inmensas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <FolderDetails size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Documentación fragmentada</h3>
              <p className="text-gray-700 flex-grow">
                Fotos, planos y datos técnicos dispersos en carpetas y sistemas no integrados, imposibles de encontrar.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Time size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Cientos de horas de trabajo</h3>
              <p className="text-gray-700 flex-grow">
                Proyectos de 3-6 meses con equipos completos dedicados solo a documentar jerarquías manualmente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <DocumentMultiple_01 size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[3.5rem] flex items-start">Archivos complicadísimos</h3>
              <p className="text-gray-700 flex-grow">
                Hojas con macros frágiles, fórmulas complejas y validaciones que nadie entiende después de 6 meses.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-xl p-8">
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
      <section className="relative overflow-hidden bg-white py-20 px-8">
        {/* Industrial background image — right side */}
        <div
          className="absolute top-0 right-0 h-full hidden md:block"
          style={{ width: '45%', clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <Image
            src="/assets/bgGestionActivos.jpg"
            alt="Planta industrial"
            fill
            className="object-cover object-center"
            sizes="45vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 50%)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4 block">
            Beneficios operativos
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Impacto en tu operación
          </h2>

          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '58%' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Indicadores más confiables</h3>
                <p className="text-gray-700">
                  KPIs calculados sobre estructura sólida que refleja la realidad operativa de planta.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mejor control de activos</h3>
                <p className="text-gray-700">
                  Visibilidad total de todos los equipos, relaciones y estado técnico en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Menos carga administrativa futura</h3>
                <p className="text-gray-700">
                  Estructura correcta desde el inicio evita proyectos de limpieza de datos costosos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mayor calidad en decisiones de mantenimiento</h3>
                <p className="text-gray-700">
                  Información estructurada que facilita priorización técnica basada en datos reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso Ideales */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Para plantas que quieren
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Construir una base técnica sólida con datos consistentes — que respalde buenos análisis, facilite la gestión de activos y no tenga que rehacerse cada vez que alguien cambia una hoja de cálculo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Implementaciones de CMMS */}
            <div className="bg-white border border-gray-200 p-6 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Migrate size={24} className="text-teal-600" />
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
              <div className="bg-teal-50 border-l-2 border-teal-600 px-4 py-3 mb-4">
                <span className="text-teal-800 font-bold text-3xl block">6-12 meses</span>
                <span className="text-teal-700 text-sm">ahorrados en limpieza de datos</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Migración</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">SAP PM</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Maximo</span>
              </div>
            </div>
            
            {/* Card 2: Plantas en Crecimiento */}
            <div className="bg-white border border-gray-200 p-6 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Growth size={24} className="text-teal-600" />
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
              <div className="bg-teal-50 border-l-2 border-teal-600 px-4 py-3 mb-4">
                <span className="text-teal-800 font-bold text-3xl block">100%</span>
                <span className="text-teal-700 text-sm">consistencia en taxonomía</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Expansión</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Multi-sitio</span>
              </div>
            </div>
            
            {/* Card 3: Data Histórica Desordenada */}
            <div className="bg-white border border-gray-200 p-6 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <DataRefinery size={24} className="text-teal-600" />
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
              <div className="bg-teal-50 border-l-2 border-teal-600 px-4 py-3 mb-4">
                <span className="text-teal-800 font-bold text-3xl block">85%</span>
                <span className="text-teal-700 text-sm">reducción en duplicados</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Limpieza</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Normalización</span>
              </div>
            </div>
            
            {/* Card 4: Profesionalizar Confiabilidad */}
            <div className="bg-white border border-gray-200 p-6 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Certificate size={24} className="text-teal-600" />
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
              <div className="bg-teal-50 border-l-2 border-teal-600 px-4 py-3 mb-4">
                <span className="text-teal-800 font-bold text-3xl block">3x ROI</span>
                <span className="text-teal-700 text-sm">en iniciativas de confiabilidad</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">ISO 14224</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Estandarización</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1">Auditable</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="#contacto" 
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 font-semibold transition-colors"
            >
              Agenda una Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultoría Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 border-2 border-teal-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-4 block">
                Servicio de consultoría
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Prefieres que lo hagamos por ti?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A pesar de que con nuestra plataforma lo puedes hacer fácilmente, <strong>podemos hacerlo por ti</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Catalog size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Levantamiento completo</h3>
                <p className="text-sm text-gray-600">
                  Nuestro equipo estructura toda tu taxonomía de activos según ISO 14224
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckmarkFilled size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Implementación garantizada</h3>
                <p className="text-sm text-gray-600">
                  Cargamos y validamos toda la información en la plataforma lista para usar
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckmarkFilled size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Capacitación incluida</h3>
                <p className="text-sm text-gray-600">
                  Entrenamos a tu equipo para que gestionen y actualicen el registro
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/#contacto" 
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
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
      <section className="py-20 px-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Construye la base de datos de activos que tu planta necesita
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Estructura tus equipos siguiendo estándares internacionales y habilita el uso real de metodologías como RCM y RCA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#precios"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-all"
            >
              Comenzar Prueba Gratis
            </Link>
            <Link
              href="/#contacto"
              className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded font-medium transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

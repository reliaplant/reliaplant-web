import React from "react";
import {
  Add,
  Asset,
<<<<<<< HEAD
  Category,
  ChevronDown,
  Close,
  DecisionNode,
=======
  ChevronDown,
  Close,
  DecisionNode,
  Category,
>>>>>>> develop
  Query,
  Share,
  Subflow,
  Warning,
  ArrowUpRight,
  Industry,
  Activity,
  EventWarning,
  TransformInstructions,
  ArrowRight,
  RequestQuote,
  SupportVectorMachine,
  DataAnalytics,
  Headset,
  Analytics,
  DataTable,
  SettingsAdjust,
  Checkmark,
  ArrowDown,
  ArrowUpLeft,
  Bar,
} from "@carbon/icons-react";
import {
  Clock,
  ShieldCheck,
  Target,
  BarChart3,
  ScrollText,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
=======
import { ServiceCard } from "@/components/ServiceCard";
>>>>>>> develop

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <div className="relative h-[70vh] flex items-center justify-start border-b">
        <div className="w-[50vw] p-[8vw] flex flex-col justify-center">
=======
      <div className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-start border-b">
        <div className="w-full lg:w-[50vw] order-2 lg:order-1 pt-0 pb-8 px-8 lg:px-[8vw] flex flex-col justify-center items-center lg:items-start">
>>>>>>> develop
          <h1 className="text-[4rem] font-light leading-[1.1]">
            Soluciones de <span className="text-blue60">Confiabilidad</span>{" "}
            para Optimizar tu Planta Industrial
          </h1>
<<<<<<< HEAD
          <p className="mt-8 text-[1.3vw] leading-[136%] text-gray80">
=======
          <p className="mt-8 text-lg lg:text-[1.3vw] leading-[136%] text-gray90">
>>>>>>> develop
            Maximiza el rendimiento de tus activos y reduce costos de
            mantenimiento con nuestros servicios especializados y soluciones de
            software.
          </p>
<<<<<<< HEAD
          <div className="mt-12 flex gap-4">
            <button className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-blue60 transition duration-300">
              <span>Ver servicios</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue60 text-blue60 px-8 py-3 flex items-center gap-2 hover:bg-blue20 transition duration-300">
=======
          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center sm:items-start">
            <button className="bg-black text-white px-8 py-3 flex items-center justify-center gap-2 hover:bg-blue60 transition duration-300">
              <span>Ver servicios</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue60 text-blue60 px-8 py-3 flex items-center justify-center gap-2 hover:bg-blue20 transition duration-300">
>>>>>>> develop
              <span>Consulta con especialistas</span>
              <Headset size={20} />
            </button>
          </div>
        </div>
<<<<<<< HEAD
        <div className="h-full w-[50vw] bg-[url('/assets/bgRAM.png')] bg-cover bg-center">
          <div className="bg-gradient-to-r from-white to-transparent h-full"></div>
=======
        <div className="h-[40vh] lg:h-[70vh] w-full lg:w-[50vw] order-1 lg:order-2 bg-[url('/assets/bgRAM.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent"></div>
>>>>>>> develop
        </div>
      </div>

      <div className="py-24 px-[8vw]">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-light mb-8">
            Nuestros Servicios de Consultoría
          </h2>
          <p className="text-xl text-gray60 max-w-4xl mx-auto">
            Ofrecemos soluciones personalizadas para optimizar la confiabilidad,
            disponibilidad y mantenibilidad de tus activos industriales.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-3 gap-8">
          <Link href="/consultoria/analisis-ram" className="no-underline">
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <Analytics size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">Análisis RAM</h3>
                <p className="text-gray60">
                  Modelación de sistemas para predecir la confiabilidad,
                  disponibilidad y mantenibilidad de tus activos críticos.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/consultoria/rcm" className="no-underline">
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <DecisionNode size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  Mantenimiento Centrado en Confiabilidad
                </h3>
                <p className="text-gray60">
                  Metodología para desarrollar planes de mantenimiento
                  optimizados reduciendo fallas y aumentando productividad.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/consultoria/mantenibilidad" className="no-underline">
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <Target size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  Análisis de Mantenibilidad
                </h3>
                <p className="text-gray60">
                  Mejora el acceso a equipos, optimiza maniobras de
                  mantenimiento y reduce tiempos de intervención.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <Link
            href="/consultoria/analisis-criticidad"
            className="no-underline"
          >
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <BarChart3 size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  Análisis de Criticidad
                </h3>
                <p className="text-gray60">
                  Jerarquización de activos para priorizar recursos y reducir
                  riesgos operacionales y de seguridad.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/consultoria/rca" className="no-underline">
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <Category size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  Análisis Causa Raíz
                </h3>
                <p className="text-gray60">
                  Identificación de causas fundamentales de fallas para
                  implementar soluciones definitivas.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/consultoria/optimizacion-mro" className="no-underline">
            <div className="border p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="bg-blue20 p-4 w-fit rounded-full mb-4">
                  <DataTable size={32} className="text-blue60" />
                </div>
                <h3 className="text-2xl font-normal mb-4">
                  Optimización de Inventario
                </h3>
                <p className="text-gray60">
                  Estrategias para mantener niveles óptimos de inventario MRO,
                  reduciendo costos y asegurando disponibilidad.
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-blue60 font-light">Conocer más</span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/consultoria/analisis-ram"
            Icon={Analytics}
            title="Análisis RAM"
            description="Modelación de sistemas para predecir la confiabilidad, disponibilidad y mantenibilidad de tus activos críticos."
            variant="default"
          />
          <ServiceCard
            href="/consultoria/rcm"
            Icon={DecisionNode}
            title="Mantenimiento Centrado en Confiabilidad"
            description="Metodología para desarrollar planes de mantenimiento optimizados reduciendo fallas y aumentando productividad."
            variant="default"
          />
          <ServiceCard
            href="/consultoria/mantenibilidad"
            Icon={Target}
            title="Análisis de Mantenibilidad"
            description="Mejora el acceso a equipos, optimiza maniobras de mantenimiento y reduce tiempos de intervención."
            variant="default"
          />
          <ServiceCard
            href="/consultoria/analisis-criticidad"
            Icon={BarChart3}
            title="Análisis de Criticidad"
            description="Jerarquización de activos para priorizar recursos y reducir riesgos operacionales y de seguridad."
            variant="default"
          />
          <ServiceCard
            href="/consultoria/rca"
            Icon={Category}
            title="Análisis Causa Raíz"
            description="Identificación de causas fundamentales de fallas para implementar soluciones definitivas."
            variant="default"
          />
          <ServiceCard
            href="/consultoria/optimizacion-mro"
            Icon={DataTable}
            title="Optimización de Inventario"
            description="Estrategias para mantener niveles óptimos de inventario MRO, reduciendo costos y asegurando disponibilidad."
            variant="default"
          />
>>>>>>> develop
        </div>

        <div className="mt-12 text-center">
          <Link href="/servicios">
            <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 px-8 py-3 flex items-center mx-auto gap-2">
              <span>Ver todos los servicios</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>

<<<<<<< HEAD
      <div className="py-24 px-[8vw] bg-gray10">
=======
      <div className="py-24 px-[8vw] bg-graylightgray">
>>>>>>> develop
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8">Software Especializado</h2>
          <p className="text-xl text-gray60 max-w-4xl mx-auto">
            Herramientas potentes para el análisis y gestión de la confiabilidad
            de tus activos industriales
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-3 gap-12">
          <Link href="/rca" className="no-underline">
            <div className="bg-white p-8 hover:shadow-lg transition duration-300">
              <div className="bg-gray20 p-6 inline-block mb-6">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/rca" className="no-underline">
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
>>>>>>> develop
                <Category size={48} />
              </div>
              <h3 className="text-3xl font-normal mb-4">RCA</h3>
              <p className="text-gray60 mb-6">
                Software para análisis causa raíz que facilita la eliminación de
                defectos recurrentes en tu planta.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue60 font-light">
                  Explorar software
                </span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/rcm" className="no-underline">
<<<<<<< HEAD
            <div className="bg-white p-8 hover:shadow-lg transition duration-300">
              <div className="bg-gray20 p-6 inline-block mb-6">
=======
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
>>>>>>> develop
                <DecisionNode size={48} />
              </div>
              <h3 className="text-3xl font-normal mb-4">RCM</h3>
              <p className="text-gray60 mb-6">
                Plataforma para desarrollar planes de mantenimiento optimizados
                para equipos críticos y no críticos.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue60 font-light">
                  Explorar software
                </span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>

          <Link href="/ram" className="no-underline">
<<<<<<< HEAD
            <div className="bg-white p-8 hover:shadow-lg transition duration-300">
              <div className="bg-gray20 p-6 inline-block mb-6">
=======
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
>>>>>>> develop
                <Analytics size={48} />
              </div>
              <h3 className="text-3xl font-normal mb-4">RAM</h3>
              <p className="text-gray60 mb-6">
                Herramienta para el análisis de disponibilidad de sistemas
                complejos mediante simulaciones avanzadas.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue60 font-light">
                  Explorar software
                </span>
                <ArrowUpRight size={20} className="text-blue60" />
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/software">
            <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 px-8 py-3 flex items-center mx-auto gap-2">
              <span>Ver todo el software</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>

      <div className="py-24 px-[8vw]">
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-light mb-8">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray60 mb-12">
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 lg:mb-8">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg lg:text-xl text-gray60 mb-8 lg:mb-12">
>>>>>>> develop
              En RELIAPLANT combinamos experiencia en confiabilidad industrial
              con metodologías avanzadas y software especializado para ofrecer
              soluciones integrales y personalizadas.
            </p>

<<<<<<< HEAD
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <Checkmark size={32} className="text-blue60" />
                <h4 className="text-xl font-normal">Experiencia comprobada</h4>
                <p className="text-gray60">
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-start">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px]"
                  />
                  <h4 className="text-xl font-normal leading-none">
                    Experiencia comprobada
                  </h4>
                </div>
                <p className="text-gray60 text-left">
>>>>>>> develop
                  Más de 15 años en proyectos de confiabilidad para industrias
                  de alta exigencia.
                </p>
              </div>
<<<<<<< HEAD
              <div className="flex flex-col gap-3">
                <Checkmark size={32} className="text-blue60" />
                <h4 className="text-xl font-normal">
                  Metodologías optimizadas
                </h4>
                <p className="text-gray60">
                  Procesos eficientes adaptados a tus necesidades específicas.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Checkmark size={32} className="text-blue60" />
                <h4 className="text-xl font-normal">Software especializado</h4>
                <p className="text-gray60">
=======
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-start">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px]"
                  />
                  <h4 className="text-xl font-normal leading-none">
                    Metodologías optimizadas
                  </h4>
                </div>
                <p className="text-gray60 text-left">
                  Procesos eficientes adaptados a tus necesidades específicas.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-start">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px]"
                  />
                  <h4 className="text-xl font-normal leading-none">
                    Software especializado
                  </h4>
                </div>
                <p className="text-gray60 text-left">
>>>>>>> develop
                  Herramientas tecnológicas que potencian los resultados de
                  nuestros servicios.
                </p>
              </div>
<<<<<<< HEAD
              <div className="flex flex-col gap-3">
                <Checkmark size={32} className="text-blue60" />
                <h4 className="text-xl font-normal">Enfoque integral</h4>
                <p className="text-gray60">
=======
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-start">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px]"
                  />
                  <h4 className="text-xl font-normal leading-none">
                    Enfoque integral
                  </h4>
                </div>
                <p className="text-gray60 text-left">
>>>>>>> develop
                  Abarcamos todos los aspectos de la confiabilidad para
                  resultados sostenibles.
                </p>
              </div>
            </div>

<<<<<<< HEAD
            <div className="mt-12">
=======
            <div className="mt-12 flex justify-center lg:justify-start">
>>>>>>> develop
              <button className="bg-black text-white px-8 py-3 flex items-center gap-2 hover:bg-blue60 transition duration-300">
                <span>Conoce nuestra metodología</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

<<<<<<< HEAD
          <div className="bg-[url('/assets/consultor1.jpg')] bg-cover bg-center rounded">
=======
          <div className="hidden lg:block bg-[url('/assets/consultor1.jpg')] bg-cover bg-center rounded">
>>>>>>> develop
            {/* Imagen de consultor o equipo trabajando */}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="px-[8vw] py-24 bg-gray80 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8">
=======
      <div className="px-[8vw] py-24 bg-gray90 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-blue60 mb-8">
>>>>>>> develop
            Sectores industriales que atendemos
          </h2>
          <p className="text-xl text-gray30 max-w-4xl mx-auto">
            Nuestras soluciones están diseñadas para adaptarse a las necesidades
            específicas de diferentes industrias
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-4 gap-8">
          <div className="p-6 border border-gray60 hover:border-blue60 transition duration-300">
            <Industry size={48} className="text-blue60 mb-4" />
            <h3 className="text-2xl font-normal mb-3">Oil & Gas</h3>
            <p className="text-gray30">
              Mejora la disponibilidad de equipos críticos y cumple con los
              estándares de seguridad más exigentes.
            </p>
          </div>
          <div className="p-6 border border-gray60 hover:border-blue60 transition duration-300">
            <Activity size={48} className="text-blue60 mb-4" />
            <h3 className="text-2xl font-normal mb-3">Minería</h3>
            <p className="text-gray30">
              Optimiza operaciones continuas y reduce tiempos de inactividad en
              equipos de alto valor.
            </p>
          </div>
          <div className="p-6 border border-gray60 hover:border-blue60 transition duration-300">
            <SettingsAdjust size={48} className="text-blue60 mb-4" />
            <h3 className="text-2xl font-normal mb-3">Manufactura</h3>
            <p className="text-gray30">
              Incrementa la productividad manteniendo altos estándares de
              calidad en procesos continuos.
            </p>
          </div>
          <div className="p-6 border border-gray60 hover:border-blue60 transition duration-300">
            <Layers size={48} className="text-blue60 mb-4" />
            <h3 className="text-2xl font-normal mb-3">Infraestructura</h3>
            <p className="text-gray30">
              Asegura la operatividad de instalaciones críticas y servicios
              esenciales.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[4vw] bg-gradient-to-l from-blue60 to-gray10">
        <div className="flex flex-row bg-gray20 justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
          <div className="p-[4vw] w-[40vw]">
            <h3 className="text-5xl font-light">
              ¿Buscas optimizar la disponibilidad de tus activos?
            </h3>
            <h4 className="mt-8 text-2xl font-normal">
              Agenda una consulta gratuita con nuestros especialistas y descubre
              cómo podemos ayudarte a maximizar la confiabilidad de tu planta.
            </h4>
            <div className="mt-12">
              <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4">
                <span>Agenda con un especialista</span>
                <Headset size={20} className="text-white" />
              </button>
            </div>
          </div>
          <div className="h-[29vw] z-10 w-[50vw] bg-[url('/assets/consultor2.jpg')] bg-cover bg-center transform -scale-x-100">
            <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
          </div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            Icon={Industry}
            title="Oil & Gas"
            description="Mejora la disponibilidad de equipos críticos y cumple con los estándares de seguridad más exigentes."
            variant="dark"
          />
          <ServiceCard
            Icon={Activity}
            title="Minería"
            description="Optimiza operaciones continuas y reduce tiempos de inactividad en equipos de alto valor."
            variant="dark"
          />
          <ServiceCard
            Icon={SettingsAdjust}
            title="Manufactura"
            description="Incrementa la productividad manteniendo altos estándares de calidad en procesos continuos."
            variant="dark"
          />
          <ServiceCard
            Icon={Layers}
            title="Infraestructura"
            description="Asegura la operatividad de instalaciones críticas y servicios esenciales."
            variant="dark"
          />
>>>>>>> develop
        </div>
      </div>
    </>
  );
}

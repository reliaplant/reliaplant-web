import React from "react";
import {
  DecisionNode,
  Category,
  ArrowUpRight,
  Industry,
  Activity,
  ArrowRight,
  Headset,
  Analytics,
  DataTable,
  SettingsAdjust,
  Checkmark,
} from "@carbon/icons-react";
import { Target, BarChart3, Layers } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export default function Home() {
  return (
    <>
      <div className="relative h-[600px] bg-gray-100 flex flex-col lg:flex-row items-center justify-start border-b">
        <div className="w-full lg:w-[50vw] order-2 lg:order-1 py-16 px-6 lg:px-16 flex flex-col justify-center items-center lg:items-start">
          <h1>
            Soluciones de <span className="text-blue60">Confiabilidad</span>{" "}
            para Optimizar tu Planta Industrial
          </h1>
          <h4>
            Maximiza el rendimiento de tus activos y reduce costos de
            mantenimiento con nuestros servicios especializados y soluciones de
            software.
          </h4>
          <div className="mt-12 flex flex-row gap-4 w-full items-center justify-center lg:justify-start">
            <AbrirFormContacto
              buttonText="Habla con un especialista"
              icon={<Headset size={20} className="text-white" />}
              buttonColor="bg-black"
              textColor="text-white"
              modalTitle="Consulta con nuestros especialistas"
            />
          </div>
        </div>
        <div className="h-[300px] lg:h-[600px] w-full lg:w-[50vw] order-1 lg:order-2 bg-[url('/assets/bgRAM.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-100 to-transparent"></div>
        </div>
      </div>

      <div className="contentSection">
        <div>
          <h2>Nuestros Servicios de Consultoría</h2>
          <p className="text-gray60 text-left">
            Ofrecemos soluciones personalizadas para optimizar la confiabilidad,
            disponibilidad y mantenibilidad de tus activos industriales.
          </p>
        </div>

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
        </div>
      </div>

      <div className="contentSection bg-graylightgray">
        <div>
          <h2>Software Especializado</h2>
          <p className="text-gray60 max-w-4xl text-left">
            Herramientas potentes para el análisis y gestión de la confiabilidad
            de tus activos industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/rca" className="no-underline">
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
                <Category size={48} />
              </div>
              <h3>RCA</h3>
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
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
                <DecisionNode size={48} />
              </div>
              <h3>RCM</h3>
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
            <div className="bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-graylightgray p-6 inline-block mb-6">
                <Analytics size={48} />
              </div>
              <h3>RAM</h3>
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

        <div className="mt-2 ">
          <Link href="/software">
            <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 px-8 py-3 flex items-center gap-2">
              <span>Ver todo el software</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>

      <div className="contentSection">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="text-left">
            <h2>¿Por qué elegirnos?</h2>
            <p className="text-gray60 mb-8 lg:mb-12">
              En RELIAPLANT combinamos experiencia en confiabilidad industrial
              con metodologías avanzadas y software especializado para ofrecer
              soluciones integrales y personalizadas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
              <div className="flex flex-col gap-4 min-h-[160px]">
                <div className="flex items-center gap-3 justify-start h-12">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px] shrink-0"
                  />
                  <h3 className="m-0">Experiencia comprobada</h3>
                </div>
                <p className="text-gray60 text-left grow">
                  Más de 15 años en proyectos de confiabilidad para industrias
                  de alta exigencia.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-h-[160px]">
                <div className="flex items-center gap-3 justify-start h-12">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px] shrink-0"
                  />
                  <h3 className="m-0">Metodologías optimizadas</h3>
                </div>
                <p className="text-gray60 text-left grow">
                  Procesos eficientes adaptados a tus necesidades específicas.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-h-[160px]">
                <div className="flex items-center gap-3 justify-start h-12">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px] shrink-0"
                  />
                  <h3 className="m-0">Software especializado</h3>
                </div>
                <p className="text-gray60 text-left grow">
                  Herramientas tecnológicas que potencian los resultados de
                  nuestros servicios.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-h-[160px]">
                <div className="flex items-center gap-3 justify-start h-12">
                  <Checkmark
                    size={32}
                    className="text-blue60 relative bottom-[1px] shrink-0"
                  />
                  <h3 className="m-0">Enfoque integral</h3>
                </div>
                <p className="text-gray60 text-left grow">
                  Abarcamos todos los aspectos de la confiabilidad para
                  resultados sostenibles.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-[url('/assets/consultor1.jpg')] bg-cover bg-center rounded">
            {/* Imagen de consultor o equipo trabajando */}
          </div>
        </div>
      </div>

      <div className="contentSection bg-gray90">
        <div>
          <h2 className="text-blue60">Sectores industriales que atendemos</h2>
          <p className="text-gray30 max-w-4xl text-left">
            Nuestras soluciones están diseñadas para adaptarse a las necesidades
            específicas de diferentes industrias
          </p>
        </div>

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
        </div>
      </div>
    </>
  );
}

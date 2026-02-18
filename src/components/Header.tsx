import Link from "next/link";

import {
  Category,
  ChevronDown,
  DecisionNode,
  ArrowUpRight,
} from "@carbon/icons-react";
import AbrirFormContacto from "./AbrirFormContacto";
import HeaderMovil from "./HeaderMovil";

interface ConsultingCard {
  title: string;
  link: string; // Agregado campo para enlace
}

const gestion: ConsultingCard[] = [
  {
    title: "Construcción del Registro de Activos en CMMS (Taxonomía)",
    link: "/consultoria/registro-activos",
  },
  {
    title: "Desarrollo del sistema de indicadores",
    link: "/consultoria/sistema-indicadores",
  },
  {
    title: "Diagnóstico de la Gestión de Mantenimiento",
    link: "/consultoria/diagnostico-gestion",
  },
  {
    title: "Estrategia de gestión de activos",
    link: "/consultoria/estrategia-gestion-activos",
  },
  {
    title: "Desarrollo de manuales corporativos y procedimientos",
    link: "/consultoria/manuales-corporativos",
  },
];

const MejorasEconomicas: ConsultingCard[] = [
  {
    title: "Mantenimiento Centrado en Confiabilidad (RCM)",
    link: "/consultoria/rcm",
  },
  { title: "Análisis RAM", link: "/consultoria/analisis-ram" },
  // { title: "Análisis de criticidad ", link: "/consultoria/analisis-criticidad" },
  {
    title: "Análisis de Costo de Ciclo de Vida",
    link: "/consultoria/analisis-lcc",
  },
  {
    title: "Evaluación y manejo de la obsolescencia",
    link: "/consultoria/analisis-obsolescencia",
  },
  {
    title: "Análisis Causa Raíz (Investigación de fallas)",
    link: "/consultoria/rca",
  },
  { title: "Análisis de Mantenibilidad", link: "/consultoria/mantenibilidad" },
  {
    title: "Optimización de Inventario ",
    link: "/consultoria/optimizacion-mro",
  },
];

const PersonalEspecialista: ConsultingCard[] = [
  {
    title: "Asesoría continua y asignación de personal",
    link: "/consultoria/asesoria-continua",
  },
  {
    title: "Capacitación Técnica en Confiabilidad",
    link: "/consultoria/capacitacion",
  },
  {
    title: "Definición de responsabilidades y competencias",
    link: "/consultoria/matriz-responsabilidades",
  },
];

export default function Header() {
  const sections = [
    { title: "Gestión", data: gestion },
    { title: "Metodologías de Confiabilidad", data: MejorasEconomicas },
    { title: "Personal", data: PersonalEspecialista },
  ];

  return (
    <div className="left-0 w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md">
      <header className="bg-white/95 w-full z-50 shadow-sm hidden md:block h-[56px] border-b border-gray-100">
        <nav className="flex flex-row justify-between px-[3vw] h-full">
          <ul className="flex items-center p-0 m-0 h-full gap-1">
            <div className="h-full flex items-center pr-6">
              <Link href="/">
                <span className="text-gray100 text-xl cursor-pointer font-ZenDots tracking-tight hover:opacity-80 transition-opacity">
                  RELIAPLANT
                </span>
              </Link>
            </div>
            <div className="h-px w-px bg-gray-200 self-center mx-2" style={{height: '24px'}} />
            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/consultoria"
                className="h-full px-4 hover:bg-blue-50 flex items-center transition-colors rounded-md mx-0.5"
              >
                <span className="text-gray-600 font-medium text-[13px] tracking-wide">SERVICIOS DE CONSULTORÍA</span>
                <ChevronDown
                  size={16}
                  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180 text-gray-400"
                />
              </Link>
              <div className="mt-[42px] absolute left-0 top-2 hidden p-6 bg-white shadow-xl border border-gray-200 rounded-lg text-black group-hover:block z-50">
                <div>
                  <div className="bg-white flex flex-row gap-6">
                    {sections.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className={`w-[20vw] pr-4 ${
                          sectionIndex !== sections.length - 1 ? "border-r border-gray-100" : ""
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                            {section.title}
                          </span>
                          <div className="w-full space-y-1">
                            {section.data.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.link}
                                className="no-underline"
                              >
                                <div className="py-1.5 text-sm text-gray-600 hover:text-blue-600 cursor-pointer font-medium transition-colors">
                                  {service.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="http://app.reliaplant.com/"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 transition-colors rounded-md mx-0.5"
              >
                <span className="font-medium text-[13px] tracking-wide">SOFTWARE</span>
                <ChevronDown
                  size={16}
                  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180 text-gray-400"
                />
              </Link>
              <div className="mt-[42px] absolute left-0 top-2 hidden p-3 bg-white shadow-xl border border-gray-200 rounded-lg text-black group-hover:block z-50">
                <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer rounded-lg transition-colors">
                  <Link
                    href="/modulos/registro-activos"
                    className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                  >
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <Category size={28} className="text-teal-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-semibold text-sm">Registro de Activos (Taxonomía)</span>
                      <span className="text-gray-500 text-[.85rem]">
                        Base de datos estructurada con jerarquía ISO 14224
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer rounded-lg transition-colors">
                  <Link
                    href="/modulos/rcm"
                    className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                  >
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <DecisionNode size={28} className="text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-semibold text-sm">RCM</span>
                      <span className="text-gray-500 text-[.85rem]">
                        Planes de mantenimiento para equipos críticos y no críticos
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer rounded-lg transition-colors">
                  <Link
                    href="/modulos/rca"
                    className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                  >
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <DecisionNode size={28} className="text-purple-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-semibold text-sm">RCA</span>
                      <span className="text-gray-500 text-[.85rem]">
                        Eliminación de defectos mediante Análisis Causa Raíz
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/como-funciona"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors rounded-md mx-0.5"
              >
                CÓMO FUNCIONA
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/industrias"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors rounded-md mx-0.5"
              >
                INDUSTRIAS
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/roi"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors rounded-md mx-0.5"
              >
                ROI
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/blog"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors rounded-md mx-0.5"
              >
                BLOG
              </Link>
            </div>
          </ul>
          <div className="flex flex-row items-center h-full gap-2">
            <AbrirFormContacto especial="header" />
            <a href="http://app.reliaplant.com/" className="no-underline">
              <button className="font-semibold text-sm bg-gray-900 text-white flex flex-row items-center px-5 py-2 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                Ir a Software
                <ArrowUpRight size={18} className="ml-1.5" />
              </button>
            </a>
          </div>
        </nav>
      </header>
      <div className="md:hidden">
        <HeaderMovil />
      </div>
    </div>
  );
}

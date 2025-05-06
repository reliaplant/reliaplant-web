import logo from "@/assets/logoReliaplant.svg";
import Image from "next/image";
import Link from "next/link";
import FormularioContacto from "./FormularioContacto";
import {
  Add,
  Asset,
  Category,
  ChevronDown,
  Close,
  DecisionNode,
  Number_7,
  Query,
  Share,
  Subflow,
  Warning,
  ArrowUpRight,
  Model,
} from "@carbon/icons-react";
import BotonAsesorRCM from "@/app/consultoria/rcm/BotonAsesorRCM";
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

export default function Header({ isAdmin = false }: { isAdmin?: boolean }) {
  const sections = [
    { title: "Gestión", data: gestion },
    { title: "Metodologías de Confiabilidad", data: MejorasEconomicas },
    { title: "Personal", data: PersonalEspecialista },
  ];

  return (
    <div className="left-0 w-full z-50 sticky top-0 bg-white">
      <header className="bg-White w-full z-50 shadow-md hidden md:block h-[48px]">
        <nav className="flex flex-row justify-between px-[5vw] h-full">
          <ul className="flex items-center p-0 m-0 h-full">
            <div className="h-full flex items-center">
              <Link href="/">
                <span className="text-gray100 text-xl cursor-pointer font-ZenDots">
                  RELIAPLANT
                </span>
              </Link>
            </div>
            {!isAdmin ? (
              <>
                <div className="pl-8 font-thin text-2xl text-gray30 mr-4 h-full flex items-center">
                  |
                </div>
                <div className="hover:bg-gray10 mb-0 text-sm relative group px-4 pl-6 h-full flex items-center">
                  <a
                    href="/servicios"
                    className="font-normal relative no-underline hover:no-underline text-gray60"
                  >
                    SERVICIOS DE CONSULTORÍA
                  </a>
                  <ChevronDown
                    size={16}
                    className="ml-1 transform transition-transform duration-200 group-hover:rotate-180 text-gray60"
                  />
                  <div className="mt-[36px] absolute left-0 top-2 hidden p-6 bg-white shadow-md border border-gray30 text-black group-hover:block z-50">
                    <div>
                      <div className="bg-white flex flex-row gap-4">
                        {sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className={`w-[20vw] pr-4 ${
                              sectionIndex !== sections.length - 1
                                ? "border-r"
                                : ""
                            }`}
                          >
                            <div className="flex flex-col">
                              <span className="text-[1rem] font-bold text-black w-full">
                                {section.title}
                              </span>
                              <div className="w-full">
                                {section.data.map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    href={service.link}
                                    className="no-underline"
                                  >
                                    <div className="pt-2 text-md text-gray60 hover:underline cursor-pointer font-medium">
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

                <div className="hover:bg-gray10 mb-0 text-sm relative group px-4 pl-6 h-full flex items-center">
                  <a
                    href="http://app.reliaplant.com/"
                    className="font-normal relative no-underline hover:no-underline text-gray60 "
                  >
                    SOFTWARE
                  </a>

                  <ChevronDown
                    size={16}
                    className="ml-1 transform transition-transform duration-200 group-hover:rotate-180 text-gray60"
                  />
                  <div className="mt-[36px] absolute left-0 top-2 hidden p-2 bg-white shadow-md border border-gray30 text-black group-hover:block z-50">
                    <div className="px-2 py-2 border-b flex flex-row items-center w-[40vw] gap-4 hover:bg-gray10 hover:cursor-pointer">
                      <Link
                        href="/consultoria/rca"
                        className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                      >
                        <div className="bg-gray20 p-4">
                          <Category size={32} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-black">RCA</span>
                          <span className="text-gray60 text-[.9rem]">
                            Eliminación de defectos mediante Análisis Causa Raíz
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="px-2 py-2 border-b flex flex-row items-center w-[40vw] gap-4 hover:bg-gray10 hover:cursor-pointer">
                      <Link
                        href="/consultoria/rcm"
                        className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                      >
                        <div className="bg-gray20 p-4 ">
                          <DecisionNode size={32} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-black">RCM</span>
                          <span className="text-gray60 text-[.9rem]">
                            Planes de mantenimiento para equipos críticos y no
                            críticos
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center pl-8">
                <div className="font-thin text-2xl text-gray30 mr-4">|</div>
                <div className="w-[60vw]"></div>
              </div>
            )}
          </ul>
          {!isAdmin ? (
            <div className="flex flex-row items-center h-full">
              <AbrirFormContacto />
              <a href="http://app.reliaplant.com/" className="no-underline">
                <button className="font-semibold text-sm bg-transparent text-black flex flex-row items-center px-4 py-3 hover:bg-gray20 transition-colors whitespace-nowrap">
                  Ir a Software
                  <ArrowUpRight size={20} className="ml-1 font-bold" />
                </button>
              </a>
            </div>
          ) : (
            <div className="w-[200px] h-full flex items-center"></div>
          )}
        </nav>
      </header>
      {!isAdmin && (
        <div className="md:hidden">
          <HeaderMovil />
        </div>
      )}
    </div>
  );
}

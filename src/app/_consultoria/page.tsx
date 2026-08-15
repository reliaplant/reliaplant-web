export const dynamic = "force-static";
import React from "react";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import procesoConfiabilidad from "../../../public/assets/procesoConfiabilidad.webp";
import Industrias from "@/components/industrias";
import pegandotag from "../../../public/assets/pegandotag.webp";
import bgKPIs from "../../../public/assets/bgKPIs.webp";
import bgDiagnostico from "../../../public/assets/bgDiagnostico.webp";
import bgEstrategias from "../../../public/assets/bgEstrategias.webp";
import bgMRO from "../../../public/assets/bgMRO.webp";
import bgPrcedimientos from "../../../public/assets/bgProcedimientos.webp";
import bgDigitalizacion from "../../../public/assets/bgDigitalizacion.webp";
import bgMantenibilidad from "../../../public/assets/bgMantenibilidad.webp";
import bgRAM from "../../../public/assets/bgRAM.webp";
import bgCapacitacion from "../../../public/assets/bgCapacitacion.webp";
import bgCapacidad from "../../../public/assets/bgCapacidad.webp";
import bgMatrizCapacitacion from "../../../public/assets/bgMatrizCapacitacion.webp";
import bgAsesoria from "../../../public/assets/bgAsesoria.webp";
import bgPersonal from "../../../public/assets/bgPersonal.webp";
import bgPerformance from "../../../public/assets/bgPerformance3.webp";
import bgSoftware from "../../../public/assets/bgSoftware.webp";
import bgRCM from "../../../public/assets/bgRCM.webp";
import bgACR from "../../../public/assets/bgACR.webp";
import bgObsolescencia from "../../../public/assets/bgObsolescencia.webp";
import bgSeleccion from "../../../public/assets/bgSeleccion.webp";
import bgVidaUtil from "../../../public/assets/bgVidaUtil.webp";
import bgLCC from "../../../public/assets/bgLCC.webp";

interface ConsultingCard {
  title: string;
  image: any;
  alt: string;
}

const gestion: ConsultingCard[] = [
  {
    title: "Construcción del Registro de Activos en CMMS (Taxonomía)",
    image: pegandotag,
    alt: "Taxonomía CMMS",
  },
  {
    title: "Desarrollo del sistema de indicadores",
    image: bgKPIs,
    alt: "Criticidad",
  },
  {
    title: "Diagnóstico de la Gestión de Mantenimiento",
    image: bgDiagnostico,
    alt: "Planes",
  },
  {
    title: "Implementación de estrategias de gestión (pajiza)",
    image: bgEstrategias,
    alt: "Planes",
  },
  {
    title: "Optimización de Inventario / Número Óptimo de partes",
    image: bgMRO,
    alt: "Planes",
  },
  {
    title: "Desarrollo de manuales corporativos y procedimientos",
    image: bgPrcedimientos,
    alt: "Planes",
  },
  {
    title:
      "Digitalización de la información de mantenimiento mantenimiento proactivo",
    image: bgDigitalizacion,
    alt: "Planes",
  },
];

const MejorasEconomicas: ConsultingCard[] = [
  { title: "Análisis de Costo de Ciclo de Vida", image: bgLCC, alt: "Planes" },
  {
    title: "Análisis de vida útil remanente",
    image: bgVidaUtil,
    alt: "Planes",
  },
  {
    title: "Evaluación y manejo de la obsolescencia",
    image: bgObsolescencia,
    alt: "Planes",
  },
  {
    title: "Selección óptima de tecnología de equipos",
    image: bgSeleccion,
    alt: "Planes",
  },
];

const ResolucionProblemas: ConsultingCard[] = [
  {
    title: "Análisis Causa Raíz (Investigación de fallas)",
    image: bgACR,
    alt: "Planes",
  },
  {
    title: "Mantenimiento Centrado en Confiabilidad (RCM)",
    image: bgRCM,
    alt: "Planes",
  },
  {
    title: "Evaluación del performance de equipos críticos",
    image: bgPerformance,
    alt: "Planes",
  },
  { title: "Software de Confiabilidad", image: bgSoftware, alt: "Planes" },
];

const MejoraDiseño: ConsultingCard[] = [
  { title: "Análisis RAM", image: bgRAM, alt: "Planes" },
  {
    title: "Análisis de Mantenibilidad",
    image: bgMantenibilidad,
    alt: "Planes",
  },
  {
    title: "Análisis de capacidad efectiva de producción",
    image: bgCapacidad,
    alt: "Planes",
  },
];

const PersonalEspecialista: ConsultingCard[] = [
  {
    title: "Asignación de personal técnico especialista",
    image: bgPersonal,
    alt: "Planes",
  },
  { title: "Asesoría continua", image: bgAsesoria, alt: "Planes" },
  {
    title: "Capacitación Técnica en Confiabilidad",
    image: bgCapacitacion,
    alt: "Planes",
  },
  {
    title:
      "Construcción de matriz de responsabilidades, competencias y planes de formación",
    image: bgMatrizCapacitacion,
    alt: "Planes",
  },
];

export default function ConsultoriaPage() {
  const sections = [
    { title: "Gestión del Mantenimiento", data: gestion },
    { title: "Mejoras Económicas", data: MejorasEconomicas },
    { title: "Resolución de Problemas", data: ResolucionProblemas },
    { title: "Mejora del Diseño", data: MejoraDiseño },
    { title: "Personal", data: PersonalEspecialista },
  ];

  return (
    <div className="bg-gray10">
      <div className="bg-blue20 contentSection flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-2/3">
          ¿Tiene curiosidad por saber cómo RELIAPLANT Consulting puede ayudar a
          su empresa? Realice un autodiagnóstico y{" "}
          <strong>deje que nuestro equipo le indique los próximos pasos</strong>
          .{" "}
        </div>
        <AbrirFormContacto
          buttonText="Tomar autodiagnóstico"
          variant="outline"
          modalTitle="Autodiagnóstico de confiabilidad"
          especial="Consultoría - Autodiagnóstico"
        />
      </div>

      <div className="contentSection">
        <div className="border-b border-black mb-8">
          <h2 className="border-b-2 border-blue60 w-fit">CONSULTORÍA</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8">
              <h2>Mejora de la Confiabilidad</h2>
              <div className="mt-8">
                Los estudios orientados a la mejora Confiabilidad son realizados
                de acuerdo con la madurez de la organización y la fase en la que
                se encuentra. <br />
                <br />
                La base para la ejecución de los estudios inicia con el registro
                de activos. Logrado esto, es posible jerarquizar instalaciones,
                sistemas y equipos en cualquier tipo de industria, asignar
                estrategias de Gerencia de Activo tales como:{" "}
                <strong>MCC, IBR, NOR, ACR</strong> y mejorar la gestión del
                mantenimiento.
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <h3>¿Cuál es el grado de madurez de su organización?</h3>
              <div className="bg-gray10 text-black mt-8">
                Se han construido muchos{" "}
                <strong>"Modelos de Confiabilidad"</strong> similares al
                mostrado abajo. La clave no está en cuál modelo tomar, sino{" "}
                <strong>adaptar a uno al contexto propio</strong>. Nuestro
                equipo de consultores puede ayudar a su organización a
                establecer una cultura de confiabilidad.
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <AbrirFormContacto
                  buttonText="Quiero implementar un modelo de confiabilidad"
                  variant="primary"
                  modalTitle="Implementar modelo de confiabilidad"
                  especial="Consultoría - Implementación"
                />
                <AbrirFormContacto
                  buttonText="Solicitar guía de implementación"
                  variant="outline"
                  modalTitle="Solicitar guía de implementación"
                  especial="Consultoría - Guía"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection">
        <div className="w-full bg-gray20 p-8 mt-8">
          <div className="border-b border-black mb-4">
            <h2 className="border-b-2 border-blue60 w-fit">
              Modelo para la Mejora de Confiabilidad
            </h2>
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={procesoConfiabilidad}
              alt="Proceso de Confiabilidad"
              fill
              className="object-contain"
            />
          </div>
          <div className="pt-4">
            <span className="text-xs md:text-sm text-gray50">
              Referencia Copyright PREDICTIVA21 - Modelo de la Confiabilidad
            </span>
          </div>
        </div>
      </div>

      <div className="contentSection bg-gray10">
        <div className="bg-white p-8">
          <div className="border-b border-black mb-6">
            <h2 className="border-b-2 border-blue60 w-fit">
              Cartera de Servicios
            </h2>
          </div>
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`flex flex-col md:flex-row pb-8 ${
                sectionIndex !== sections.length - 1 ? "border-b-2 mb-8" : ""
              }`}
            >
              <div className="w-full md:w-[30vw] mb-4 md:mb-0">
                <h3>{section.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {section.data.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="border border-blue20 p-4 transition-all duration-300 hover:shadow-lg hover:border-blue60 hover:bg-blue10"
                  >
                    <div className="h-48 md:h-[12vw] relative">
                      <Image
                        src={service.image}
                        className="object-cover"
                        alt={service.alt}
                        fill
                      />
                    </div>
                    <div className="pt-3 text-sm md:text-base">
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Industrias />
    </div>
  );
}

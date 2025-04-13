'use client'

import React from 'react';
import Image from "next/image";
import turbocompresor from "@/assets/tubocompresorSinFondo.png";
import fondoPlataforma from "@/assets/FondoPlataforma.webp";
import pozo from "@/assets/pozo.jpg";
import flare from "@/assets/flare.jpg";
import fansblowers from "@/assets/FANSBLOWERS.png";
import procesoConfiabilidad from "@/assets/procesoCconfiabilidad.png";
import Industrias from '@/components/industrias';

import pegandotag from "@/assets/pegandotag.jpeg";
import bgKPIs from "@/assets/bgKPIs.jpg";
import bgDiagnostico from "@/assets/bgDiagnostico.jpg";
import bgEstrategias from "@/assets/bgEstrategias.jpg";
import bgMRO from "@/assets/bgMRO.jpg";
import bgPrcedimientos from "@/assets/bgProcedimientos.jpg";
import bgDigitalizacion from "@/assets/bgDigitalizacion.jpg";
import bgMantenibilidad from "@/assets/bgMantenibilidad.jpg";
import bgRAM from "@/assets/bgRAM.png";
import bgCapacitacion from "@/assets/bgCapacitacion.jpg";
import bgCapacidad from "@/assets/bgCapacidad.png";
import bgMatrizCapacitacion from "@/assets/bgMatrizCapacitacion.png";
import bgAsesoria from "@/assets/bgAsesoria.jpg";
import bgPersonal from "@/assets/bgPersonal.jpg";
import bgPerformance from "@/assets/bgPerformance3.jpg";
import bgSoftware from "@/assets/bgSoftware.jpg";
import bgRCM from "@/assets/bgRCM.jpg";
import bgACR from "@/assets/bgACR.jpg";
import bgObsolescencia from "@/assets/bgObsolescencia.jpg";
import bgSeleccion from "@/assets/bgSeleccion.jpg";
import bgVidaUtil from "@/assets/bgVidaUtil.jpg";
import bgLCC from "@/assets/bgLCC.jpg";
























import planta from "@/assets/planta.jpg";


import back3 from "@/assets/back3.webp";

interface ConsultingCard {
  title: string;
  image: any;
  alt: string;
}

const gestion: ConsultingCard[] = [
  { title: "Construcción del Registro de Activos en CMMS (Taxonomía)", image: pegandotag, alt: "Taxonomía CMMS" },
  { title: "Desarrollo del sistema de indicadores", image: bgKPIs, alt: "Criticidad" },
  { title: "Diagnóstico de la Gestión de Mantenimiento", image: bgDiagnostico, alt: "Planes" },
  { title: "Implementación de estrategias de gestión (pajiza)", image: bgEstrategias, alt: "Planes" },
  { title: "Optimización de Inventario / Número Óptimo de partes", image: bgMRO, alt: "Planes" },
  { title: "Desarrollo de manuales corporativos y procedimientos", image: bgPrcedimientos, alt: "Planes" },
  { title: "Digitalización de la infomración de mantenimiento mantenimiento proactivo", image: bgDigitalizacion, alt: "Planes" },
];

const MejorasEconomicas: ConsultingCard[] = [
  { title: "Análisis de Costo de Ciclo de Vida", image: bgLCC, alt: "Planes" },
  { title: "Análisis de vida útil remanente", image: bgVidaUtil, alt: "Planes" },
  { title: "Evaluación y manejo de la obsolescencia", image: bgObsolescencia, alt: "Planes" },
  { title: "Selección óptima de tecnología de equipos", image: bgSeleccion, alt: "Planes" },
];

const ResolucionProblemas: ConsultingCard[] = [
  { title: "Análisis Causa Raíz (Investigación de fallas)", image: bgACR, alt: "Planes" },
  { title: "Mantenimiento Centrado en Confiabilidad (RCM)", image: bgRCM, alt: "Planes" },
  { title: "Evaluación del performance de equipos críticos", image: bgPerformance, alt: "Planes" },
  { title: "Software de Confiabilidad", image: bgSoftware, alt: "Planes" },
];

const MejoraDiseño: ConsultingCard[] = [
  { title: "Análisis RAM", image: bgRAM, alt: "Planes" },
  { title: "Análisis de Manteninbilidad", image: bgMantenibilidad, alt: "Planes" },
  { title: "Análisis de capacidad efectiva de producción", image: bgCapacidad, alt: "Planes" },
];

const PersonalEspecialista: ConsultingCard[] = [
  { title: "Asignación de personal técnico especialista", image: bgPersonal, alt: "Planes" },
  { title: "Asesoría continua", image: bgAsesoria, alt: "Planes" },
  { title: "Capacitación Técnica en Confiabilidad", image: bgCapacitacion, alt: "Planes" },
  { title: "Construcción de matriz de responsabilidades, competencias y planes de formación", image: bgMatrizCapacitacion, alt: "Planes" },
];

export default function ConsultoriaPage() {
  const sections = [
    { title: "Gestión del Mantenimiento", data: gestion },
    { title: "Mejoras Económicas", data: MejorasEconomicas },
    { title: "Resolución de Problemas", data: ResolucionProblemas },
    { title: "Mejora del Diseño", data: MejoraDiseño },
    { title: "Personal", data: PersonalEspecialista }
  ];

  return (

    <div className="bg-gray10">

      <div className='bg-blue20 px-[8vw] py-8 flex flex-row justify-between items-center'>
        <div className='w-2/3 text-lg'>¿Tiene curiosidad por saber cómo RELIAPLANT Consulting puede ayudar a su empresa? Realice un autodiagnóstico y <strong>deje que nuestro equipo le indique los próximos pasos</strong>. </div>
        <button className='border border-2 border-blue60 text-blue60 transition-all duration-300 hover:after:content-["→"] hover:after:ml-2 hover:bg-blue60 hover:text-white'>Tomar autodiagnóstico</button>
      </div>

      <div className='mt-16 px-[8vw]'>
        <div className='border-b border-black'>
          <div className='border-b-2 border-blue60 w-fit text-[2vw] pl-8'>CONSULTORIA</div>
        </div>
      </div>

      <div className="relative px-[8vw] h-[55vh] flex items-center justify-start"
      >
        {/* Contenido */}
        <div className="relative z-10 text-whites w-[40vw] h-full bg-white p-8">
          <h1 className="text-6xl font-light  ">Mejora de la Confiabilidad</h1>
          <div className='mt-8 text-[1.15vw] leading-[136%]'>
            Los estudios orientados a la mejora Confiabilidad son realizados de acuerdo con la madurez
            de la organización y la fase en la que se encuentra. <br /><br />La base para la ejecución de los estudios inicia
            con el registro de activos. Logrado esto, es posible jerarquizar instalaciones, sistemas y equipos en
            cualquier tipo de industria, asignar estrategias de Gerencia de Activo tales como: <strong>MCC, IBR, NOR,
              ACR</strong>  y mejorar la gestión del mantenimiento.
          </div>

        </div>

        <div className="h-full p-16 z-10 w-[60vw]  bg-[url('../assets/FANSBLOWERS.png')] bg-cover bg-center" >

        </div>
      </div>

      <div className="h-[80vh] bg-cover bg-center bg-no-repeat bg-opacity-0">


        <div className='px-[8vw] pt-12'>

          <div className='flex flex-row gap-8 py-24'>
            <div className='text-2xl w-1/3'> ¿Cuál es el grado de madurez de su organización?</div>
            <div className='w-2/4'>
              <div className='text-xl bg-gray10 text-black font-light '>Se han construido muchos <strong>"Modelos de Confiabilidad"</strong>  silimares al mostrado abajo. La clave no esta en cuál en cuál modelo tomar, sino <strong>adaptar a uno al contexto propio</strong>. Nuestro equipo de consultores puede ayudar a su organización a establecer una cultura de confiabilidad. </div>
              <div className='flex flex-row gap-8 mt-8'>
                <button className='bg-blue60 hover:bg-gray90'>Quiero implementar un modelo de confiabilidad</button>
                <button className='border-2 border-blue60 hover:bg-blue20 text-blue60'>Descargar guía de implementación</button>

              </div>

            </div>

          </div>


          <div className="h-full w-full relative bg-gray20 p-8">
            <div className='border-b border-black mb-8'>
              <div className='border-b-2 border-blue60 w-fit'>Modelo para la Mejora de Confiabilidad</div>
            </div>

            <Image
              src={procesoConfiabilidad}
              alt="Proceso de Confiabilidad"
              layout="fit"
              objectFit="cover"
            />
          </div>
          <div className='pt-2'>
            <span className="text-[0.7vw] text-gray50">Referencia Copyright PREDICTIVA21 - Modelo de la Confiabilidad</span>
          </div>
        </div>
      </div>

      <div className='bg-gray10 p-[8vw] mt-96'>

        <div className='bg-white p-[2vw]'>
          <div className='border-b border-black'>
            <div className='border-b-2 border-blue60 w-fit text-[1]'>Cartera de Servicios</div>
          </div>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`flex flex-row pb-4 pt-4  ${sectionIndex !== sections.length - 1 ? 'border-b-2' : ''}`}>
              <div className="w-[30vw] flex flex-col items-center">
                <h2 className="text-xl font-bold text-black w-full">{section.title}</h2>
              </div>
              <div className="grid grid-cols-4 w-[100vw] ">
                {section.data.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`border-dashed border-blue20 p-4 transition-transform duration-300 ${serviceIndex % 4 !== 3 ? 'border-r' : ''} ${serviceIndex > 3 ? 'border-t' : ''} hover:outline hover:outline-blue60 hover:z50 hover:border-blue60 hover:bg-blue10 hover:border-0 hover:cursor-pointer`}
                  >
                    <div className='h-[12vw] relative'>
                      <Image
                        src={service.image}
                        className='w-full h-full object-cover'
                        alt={service.alt}
                        layout="fill"
                      />
                    </div>
                    <div className='pt-2 text-sm'>
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className=''>
        <Industrias />
      </div>

    </div>
  );
}

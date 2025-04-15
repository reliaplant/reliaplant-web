'use client'

import { useState, Fragment } from 'react';
import Image from 'next/image';

// Image imports
import turbocompresor from "@/assets/tubocompresorSinFondo.png";
import fondoPlataforma from "@/assets/FondoPlataforma.webp";
import pegandotag from "../../public/assets/pegandotag.jpeg";
import pozo from "@/assets/pozo.jpg";
import flare from "@/assets/flare.jpg";
import planta from "@/assets/planta.jpg";
import back3 from "@/assets/back3.webp";

// Component imports
import EquiposPlanta from "./equiposplanta";

export default function Industrias() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray20">
      {/* Tabs Navigation */}
      <div className="">
        <div className='flex flex-row justify-center items-center'>
            <div className='min-h-[10vh] flex justify-center items-center text-center px-[3vw] font-bold bg-gray90 text-white'>CASOS DE ESTUDIO</div>
            <div 
            className={` p-4 py-3 min-h-[10vh] flex flex-col justify-center items-center border-gray10 border-l text-black font-bold cursor-pointer ${activeTab === 0 ? 'bg-blue60 text-white' : 'bg-gray30 text-gray60 '}`} 
            onClick={() => setActiveTab(0)}
            >
                            <span className='font-light w-full text-blue10 text-sm'>Caso 1</span>
            Levantamiento de +7000 activos físicos
            </div>
            <div 
            className={`p-4 py-3 min-h-[10vh] flex flex-col justify-center items-center border-gray10 border-l text-black font-bold cursor-pointer ${activeTab === 1 ? 'bg-blue60 text-white' : 'bg-gray30 text-gray60 '}`} 
            onClick={() => setActiveTab(1)}
            >
                            <span className='font-light w-full text-blue10 text-sm'>Caso 2</span>
            Aplicación de RCM a hipercompresor
            </div>
            <div 
            className={`p-4 py-3 min-h-[10vh] flex flex-col justify-center items-center border-gray10 border-l text-black font-bold cursor-pointer ${activeTab === 2 ? 'bg-blue60 text-white' : 'bg-gray30 text-gray60 '}`} 
            onClick={() => setActiveTab(2)}
            >
              <span className='font-light w-full text-blue10 text-sm'>Caso 3</span>
            Estudios RAM para diseño de plataformas offshore
            </div>
            <div 
            className={`p-4 py-3 min-h-[10vh] flex flex-col justify-center items-center border-gray10 border-l text-black font-bold cursor-pointer ${activeTab === 4 ? 'bg-blue60 text-white' : 'bg-gray30 text-gray60 '}`} 
            onClick={() => setActiveTab(4)}
            >
                            <span className='font-light w-full text-blue10 text-sm'>Caso 5</span>
            Desarrollo de batería de estudios de confiabilidad para Plataforma
            </div>
            <div 
            className={`p-4 py-3 min-h-[10vh] flex flex-col justify-center items-center border-gray10 border-l text-black font-bold cursor-pointer ${activeTab === 5 ? 'bg-blue60 text-white' : 'bg-gray30 text-gray60 '}`} 
            onClick={() => setActiveTab(5)}
            >
                            <span className='font-light w-full text-blue10 text-sm'>Caso 5</span>
            Análisis causa raíz de turbomáquina con falla catastrófica
            </div>
        </div>
      </div>

      {/* Content Section */}


      {/* Image Grid */}
      <div className="flex flex-row justify-between items-center gap-4 bg-white border-t-8 border-blue60">
        <div className="flex flex-row gap-8 px-[8vw] py-16">
          <div className="w-[36vw] h-[30vw] relative">
            <Image 
              src={pegandotag} 
              alt="Imagen 1" 
              layout="fill" 
              objectFit="cover" 
             className='border'/>
          </div>
          <div className="w-[46vw] h-min-[30vw] relative border border-blue30 p-8">
            <div className='tracking-[0.1em] text-gray60'>CASO DE ESTUDIO</div>
            <h3 className="text-gray-90 mt-4 text-[1.7vw]">
              Levantamiento de +7000 activos físicos
            </h3>
            <div className="bg-blue10 text-blue60 w-fit px-2 py-1 mt-2">
              INDUSTRIA OIL & GAS - HOUSTON, USA.
            </div>
            <div>
            <p className="text-gray-70 mt-8 text-[1.2vw]">
              En este proyecto, se realizó un levantamiento detallado de más de 7000 activos físicos en la industria de Oil & Gas en Houston, USA. El objetivo fue identificar y catalogar cada activo para mejorar la gestión y mantenimiento de los mismos, asegurando una operación más eficiente y segura.
            </p>
            <button className='bg-blue60 hover:bg-gray90'>Leer completo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





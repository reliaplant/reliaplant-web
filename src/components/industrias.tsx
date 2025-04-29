"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

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
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full">
          <div className="flex justify-center items-center text-center px-8 py-4 md:py-0 font-bold bg-gray90 text-white w-full md:w-auto">
            CASOS DE ESTUDIO
          </div>
          <div
            className={`flex-1 p-6 flex flex-col border-gray10 border-l text-black font-bold cursor-pointer ${
              activeTab === 0 ? "bg-blue60 text-white" : "bg-gray30 text-gray60"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <span
              className={`font-light text-sm self-start ${
                activeTab === 0 ? "text-white" : "text-gray90"
              }`}
            >
              Caso 1
            </span>
            <span className="text-center flex-1 flex items-center">
              Levantamiento de +7000 activos físicos
            </span>
          </div>
          <div
            className={`flex-1 p-6 flex flex-col border-gray10 border-l text-black font-bold cursor-pointer ${
              activeTab === 1 ? "bg-blue60 text-white" : "bg-gray30 text-gray60"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <span
              className={`font-light text-sm self-start ${
                activeTab === 1 ? "text-white" : "text-gray90"
              }`}
            >
              Caso 2
            </span>
            <span className="text-center flex-1 flex items-center">
              Aplicación de RCM a hipercompresor
            </span>
          </div>
          <div
            className={`flex-1 p-6 flex flex-col border-gray10 border-l text-black font-bold cursor-pointer ${
              activeTab === 2 ? "bg-blue60 text-white" : "bg-gray30 text-gray60"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <span
              className={`font-light text-sm self-start ${
                activeTab === 2 ? "text-white" : "text-gray90"
              }`}
            >
              Caso 3
            </span>
            <span className="text-center flex-1 flex items-center">
              Estudios RAM para diseño de plataformas offshore
            </span>
          </div>
          <div
            className={`flex-1 p-6 flex flex-col border-gray10 border-l text-black font-bold cursor-pointer ${
              activeTab === 4 ? "bg-blue60 text-white" : "bg-gray30 text-gray60"
            }`}
            onClick={() => setActiveTab(4)}
          >
            <span
              className={`font-light text-sm self-start ${
                activeTab === 4 ? "text-white" : "text-gray90"
              }`}
            >
              Caso 4
            </span>
            <span className="text-center flex-1 flex items-center">
              Desarrollo de batería de estudios de confiabilidad para Plataforma
            </span>
          </div>
          <div
            className={`flex-1 p-6 flex flex-col border-gray10 border-l text-black font-bold cursor-pointer ${
              activeTab === 5 ? "bg-blue60 text-white" : "bg-gray30 text-gray60"
            }`}
            onClick={() => setActiveTab(5)}
          >
            <span
              className={`font-light text-sm self-start ${
                activeTab === 5 ? "text-white" : "text-gray90"
              }`}
            >
              Caso 5
            </span>
            <span className="text-center flex-1 flex items-center">
              Análisis causa raíz de turbomáquina con falla catastrófica
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}

      {/* Image Grid */}
      <div className="flex flex-row justify-between items-center gap-4 bg-white border-t-8 border-blue60">
        <div className="flex flex-col md:flex-row gap-8 px-4 md:px-[8vw] py-8 md:py-16 w-full">
          <div className="w-full md:w-[36vw] h-[50vh] md:h-[30vw] relative">
            <Image
              src={pegandotag}
              alt="Imagen 1"
              layout="fill"
              objectFit="cover"
              className="border"
            />
          </div>
          <div className="w-full md:w-[46vw] relative border border-blue30 p-4 md:p-8">
            <div className="tracking-[0.1em] text-gray60">CASO DE ESTUDIO</div>
            <h3 className="text-gray-90 mt-4 text-[1.7vw]">
              Levantamiento de +7000 activos físicos
            </h3>
            <div className="bg-blue10 text-blue60 w-fit px-2 py-1 mt-2">
              INDUSTRIA OIL & GAS - HOUSTON, USA.
            </div>
            <div>
              <p className="text-gray-70 mt-8 text-base md:text-[1.2vw]">
                En este proyecto, se realizó un levantamiento detallado de más
                de 7000 activos físicos en la industria de Oil & Gas en Houston,
                USA. El objetivo fue identificar y catalogar cada activo para
                mejorar la gestión y mantenimiento de los mismos, asegurando una
                operación más eficiente y segura.
              </p>
              <button className="bg-blue60 hover:bg-gray90 text-white px-4 py-2">
                Leer completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

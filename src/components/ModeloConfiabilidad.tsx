"use client"; // Agrega esta línea al inicio del archivo

import React, { useState } from "react";
import Image from "next/image";
import AC from "@/assets/modelAC.svg";
import evConf from "@/assets/evaluacionConfiabilidad.svg";
import rca from "@/assets/modelRCA.svg";
import lcc from "@/assets/modelCostoRiesgo.svg";
import nor from "@/assets/modelNOR.svg";
import tax from "@/assets/tax.svg";
import ram from "@/assets/modelRAM.svg";
import maint from "@/assets/maint.svg";
import PM from "@/assets/PM.svg";
import RBI from "@/assets/RBI.svg";
import RCM from "@/assets/RCM.svg";
import flecha3vw from "@/assets/linea3vw.svg";
import lineas3 from "@/assets/3lineas.svg";
import flecha132 from "@/assets/flecha-132.svg";
import preguntas7 from "@/assets/7preguntas.svg";
import lineaCurva1 from "@/assets/lineaCurva1.svg";
import lineaCurva2 from "@/assets/lineaCurva2.svg";
import lineaVertical from "@/assets/lineaVertical.svg";
import lineaHorizontal from "@/assets/lineaHorizontal.svg";
import lineaCurva3 from "@/assets/lineaCurva3.svg";
import weibull from "@/assets/modelWeibull.svg";
import fondoAnalisisCriticidad from "@/assets/fondoAnalisisCriticidad.jpg";
import back1 from "@/assets/back1.webp";
import back2 from "@/assets/back2.webp";
import back3 from "@/assets/back3.webp";
import back4 from "@/assets/back4.webp";
import back5 from "@/assets/back5.webp";
import back6 from "@/assets/back6.webp";
import back7 from "@/assets/back7.webp";
import back8 from "@/assets/back8.webp";
import modelArrows from "@/assets/modelArrows.svg";

// Define types for popup content and props
interface PopupContent {
  title: string;
  description: string;
}

interface SimplePopupProps {
  title: string;
  description: string;
  onClose: () => void;
}

const SimplePopup = ({ title, description, onClose }: SimplePopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-[80%] max-w-md">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p>{description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default function ModeloConfiabilidad() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<PopupContent>({
    title: "",
    description: "",
  });

  const handleOpenPopup = (title: string, description: string) => {
    setPopupContent({ title, description });
    setShowPopup(true);
  };

  return (
    <div className="px-[8vw] my-12">
      <div className="bg-[url('/assets/modelGrid.svg')] relative">
        <Image
          src={modelArrows}
          alt="Criticidad"
          layout="fill"
          className="absolute z-50 image-animation"
        />
        <Image
          src={modelArrows}
          alt="Criticidad"
          layout="fill"
          className="absolute z-100 skeleton-loading"
        />

        <div className="p-[4vw] px-[6vw] w-full h-[42vw] grid grid-cols-4 gap-[4vw] gap-y-[3vw] borderIA shadow-md rounded-lg relative">
          <button className="h-fit z-200 absolute right-[12px] bottom-[12px] ">
            Conoce como iniciar{" "}
          </button>

          <div className="w-[100%] h-[15vw] flex flex-col items-center justify-center text-center p-[1vw] bgIA">
            <div className="relative w-full h-full mb-[0.5vw] mt-[1vw]">
              <Image src={rca} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Análisis Causa Raíz
            </span>
            <span className="text-[0.5vw] text-gray80">
              Registro, Documentación y Resolución de Fallas <br /> repetitivas
              y catastróficas
            </span>
          </div>

          <div className="flex flex-col w-[100%] h-[15vw] items-center justify-center bgIA bg-red20 animation-delay-2500">
            <div className="flex flex-col items-center justify-center text-center w-full h-full gap-2 p-[1vw]">
              <div className="flex flex-col p-[.0vw] w-full h-full gap-1">
                <div className="text-[0.5vw] flex flex-col items-center justify-center text-blue60 font-bold">
                  AMEF
                </div>
                <div className="flex flex-row gap2 w-full h-full gap-1">
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Función
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Falla Func.
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Modo Falla
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Efecto
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-[0vw] w-full h-full gap-1">
                <div className="text-[0.5vw] flex flex-col items-center justify-center text-blue60 font-bold">
                  Consecuencias
                </div>
                <div className="flex flex-row gap2 w-full h-full gap-1">
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Oper.
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Seg & Amb
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Ocultas
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Económ.
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-[0vw] w-full h-full gap-1">
                <div className="text-[0.5vw] flex flex-col items-center justify-center text-blue60 font-bold ">
                  Actividades
                </div>
                <div className="flex flex-row gap2 w-full h-full gap-1">
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Predictivo
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Preventivo
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Combinación
                  </div>
                </div>
                <div className="flex flex-row gap2 w-full h-full gap-1">
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Búsq. de Falla
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    Rediseño
                  </div>
                  <div className="text-[0.5vw] leading-tight text-gray80 p-[.3vw] w-full h-full flex flex-col justify-center items-center text-center border-gray-700 bg-blue20">
                    RTF
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-1 h-[3vw] p-[1vw] mb-[1vw]">
              <span className="text-[1vw] leading-tight font-normal text-gray80">
                Planes de Mant. (RCM)
              </span>
              <span className="text-[0.5vw] text-gray80">
                Generación de planes de Mantenimiento Por Familia y Tipo de
                Equipo. Procedimientos de Trabajo (mtto)
              </span>
            </div>
          </div>

          <div className="w-[100%] h-[15vw]  flex flex-col items-center justify-center text-center p-[0.5vw] bgIA  animation-delay-500">
            <div className="flex flex-col justify-start mt-[0.5vw]">
              <div className="font-bold text-start text-blue60 text-[0.5vw]">
                <span className="text-green1">PA-5200:</span> Sistema de
                compresión{" "}
              </div>
              <div className="pl-[1vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">TC-5200:</span> Turbocompresor{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">GB-5200:</span> Compresor
                centrífugo{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">TB-5200:</span> Turbina a gas{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">FG-5200A:</span> Filtro de gas
                combustible{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">FG-5200B:</span> Filtro de gas
                combustible{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">ME-5200:</span> Motor de arranque{" "}
              </div>

              <div className="mt-[1vw] font-bold text-start text-blue60 text-[0.5vw]">
                <span className="text-green1">PA-6100:</span> Sistema de bombeo{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">PB-6100A:</span> Bomba centrífuga{" "}
              </div>
              <div className="pl-[3vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">ME-6100A:</span> Motor eléctrico{" "}
              </div>
              <div className="pl-[2vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">PB-6100B:</span> Bomba centrífuga{" "}
              </div>
              <div className="pl-[3vw] text-start text-gray80 text-[0.5vw]">
                <span className="text-green1">ME-6100B:</span> Motor eléctrico{" "}
              </div>
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Registro de Activos
            </span>
            <span className="text-[0.5vw] text-gray80">
              Definición y jerarquización del registro de Activos en CMMS
            </span>
          </div>

          <div className="w-[100%] h-[15vw]  flex flex-col items-center justify-center text-center p-[0.5vw] bgIA  animation-delay-1500">
            <div className="relative w-[7vw] h-[7vw] mb-[0.5vw]">
              <Image src={AC} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Análisis de Criticidad
            </span>
            <span className="text-[0.5vw] text-gray80">
              Evaluación de importancia e impacto de sistemas <br /> y equipos a
              la S, A & Op.
            </span>
          </div>

          <div className="w-[100%] h-[15vw]  flex flex-col items-center justify-center text-center p-[0.5vw] bgIA  animation-delay-2000">
            <div className="relative w-[7vw] h-[7vw] mb-[0.5vw]">
              <Image src={weibull} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Ajuste de datos TTR y TTF
            </span>
            <span className="text-[0.5vw] text-gray80">
              Procesamiento y ajuste de datos de falla y <br /> reparación para
              el análisis cuantitativo.
            </span>
          </div>

          <div className=" w-[100%] h-[15vw] flex flex-col items-center justify-center text-center p-[1vw] bgIA  animation-delay-2500">
            <div className="relative w-full h-[7vw] mb-[0.5vw]">
              <Image src={nor} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Optimización de Repuestos
            </span>
            <span className="text-[0.5vw] text-gray80">
              Número óptimo de repuestos, Smin, Smax, Stock de Seguridad, LEP
              para repuestos de alta y baja rotación.
            </span>
          </div>

          <div className=" w-[100%] h-[15vw]   flex flex-col items-center justify-center text-center p-[1vw] bgIA  animation-delay-500">
            <div className="relative w-full h-[7vw]  m-[2vw]">
              <Image src={ram} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Análisis RAM
            </span>
            <span className="text-[0.5vw] text-gray80">
              Evaluación de Metas de Confiabilidad, Disponibilidad,
              Mantenibilidad y Producción.
            </span>
          </div>

          <div className="w-[100%] h-[15vw]    flex flex-col items-center justify-center text-center p-[1vw] bgIA">
            <div className="relative w-full h-[7vw] mb-[0.5vw]">
              <Image src={lcc} alt="Criticidad" layout="fill" />
            </div>
            <span className="text-[1vw] font-normal text-gray80">
              Evaluaciones económicas
            </span>
            <span className="text-[0.5vw] text-gray80">
              Optimización Costo Riesgo Beneficio y Estudios de Análisis de
              Costo de Ciclo de Vida (LCC){" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

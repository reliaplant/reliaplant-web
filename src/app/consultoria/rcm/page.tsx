"use client"; // 👈 Agregamos esta línea para indicar que es un componente del cliente
import Image from "next/image";
import software from "@/assets/rcap1.webp";
import { Add, Alarm, Close, Warning } from '@carbon/icons-react';


import React, { useEffect, useState } from "react";
import { Clock, Cross, Trash } from "lucide-react";
import { MdOutlineAssignment, MdOutlinePeopleAlt, MdPeople } from "react-icons/md";
import BotonAsesorRCM from "./BotonAsesorRCM";
import FormularioContacto from "@/components/FormularioContacto";
// Si no usas flujograma, es mejor quitar la importación o agregar un módulo .d.ts para archivos SVG
// import flujograma from "@/assets/rcm-s.svg";

export default function RcmPage(): JSX.Element {
  const [activeSection, setActiveSection] = useState("0");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            if (section) setActiveSection(section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[84vh] flex items-center justify-start bg-cover bg-center bg-[url('../assets/fondo-landing-rcm.png')]"
      >
        {/* Capa de degradado oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray90/70 to-gray90/80 flex flex-row"></div>


        {/* Contenido */}
        <div className="relative z-10 text-whites px-[8vw] w-1/2">
          <h1 className="text-5xl font-bold text-white uppercase ">MANTENIMIENTO CENTRADO EN CONFIABILIDAD</h1>
          <p className="mt-4 text-xl text-white">
            La metodología de Mantenimiento Centrada en Confiabilidad ayudará a tu
            personal de Mantenimiento a crear planes de mantenimiento efectivos,
            auditables y trazables en el tiempo.
          </p>


        </div>

        <div className="h-full p-8 bg-blue10 z-10 w-1/2 flex flex-col justify-center items-center" >
        <h2 className="mt-4 mb-4">¿RCM con Reliaplant?</h2>
          <p>
            RELIAPLANT ha compilado años de profunda experiencia en la aplicación
            del RCM tomando como referencia las mejores prácticas internacionales y
            los lineamientos del estándar SAE JA1011 y JA1012. Usando el Software de
            RCM-S de Reliaplant podrás crear y actualizar los PM para los sistemas y
            activos que desees dentro de una planta, o varias.
          </p>
          <div className="p-2 text-lg">Jusitifcación para hacer un RCM</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center border border-blue40 h-[18vh] p-[1-vh] px-[2vh]">
              <Trash size={32} />
              <p className="mt-2 mb-0 text-center">
                Existen actividades innecesarias, duplicadas o que se realizan muy
                frecuentemente.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border border-blue40 h-[18vh] p-[2vh]">
              <MdOutlineAssignment size={32} />
              <p className="mt-2 mb-0 text-center">
                El plan PM no contempla actividades que minimicen las fallas repetitivas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border border-blue40 h-[18vh] p-[2vh]">
              <Clock size={32} />
              <p className="mt-2 mb-0 text-center">
                Las tareas no están sincronizadas en el tiempo y la carga
                administrativa que se genera en OTs es muy grande.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border border-blue40 h-[18vh] p-[2vh]">
            <MdOutlinePeopleAlt size={32} />
            <p className="mt-2 mb-0 text-center">
                Los ejecutores de mantenimiento no realizan las tareas del PM actual.
              </p>
            </div>
          </div>
          <button
            className="bg-blue60 mt-4 w-full"
            onClick={() => setShowModal(true)}
          >
            Hablar con un especialista
          </button>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded shadow-lg w-1/2">
                <div className="flex flex-row justify-between items-center mb-4">
                  <h2 className="text-2xl">Hablar con un especialista</h2>
                  <Close size={32} className="cursor-pointer" onClick={() => setShowModal(false)} />
                </div>
                <FormularioContacto
                  type="info"
                  campana=""
                  anuncio={null}
                  interes=""
                  mailchimpTagIn="curso"
                  subject="Nuevo llenado formulario diplomado Predictiva"
                  recipients={['liliana.giraldo@predyc.com', 'andres.gonzalez@predyc.com', 'desarrollo@predyc.com']}
                  responsable=""
                  lugar="diplomado"
                  btnText="Solicitar información"
                />
              </div>
            </div>
          )}

        </div>
      </div>



      <div className=" flex flex-row gap-10 p-20 bg-gray90">
        <div className="w-full text-center min-h-[200vh]">
          <div
            className="h-[96vh] relative bg-[url('../assets/bg-proceso-rcm.svg')] bg-h-auto bg-center"
            style={{
              top: '2vh',
              position: 'sticky',
            }}
          >

            <div className="absolute left-[20%] top-[4%] w-[60%] h-[5%] flex items-center justify-center text-[0.5vw] text-white text-lg font-bold text-[1.7vw]">PROCESO DE RCM OPTIMIZADO</div>

            <div className={`absolute left-[35%] top-[10%] w-[30%] h-[7%] flex items-center justify-center text-[0.7vw] shadow-lg border border-gray100 rounded-sm transition-all duration-500 ${activeSection === "1" ? "bg-blue60 text-white scale-110" : "bg-gray70 text-white"}`}>
              ANÁLISIS DEL CONTEXTO OPERATIVO
            </div>

            <div className={`absolute left-[10%] top-[20%] w-[80%] h-[7%] flex flex-row gap-[2%] shadow-lg border border-gray100 rounded-sm p-2 transition-all duration-500 ${activeSection === "2" ? "bg-blue80 text-white scale-105" : "bg-gray80"}`}>
              <div className={`flex items-center justify-center text-[0.7vw] w-[100%] transition-all duration-500 delay-0 ${activeSection === "2" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}> FUNCIÓN DE EQUIPOS </div>
              <div className={`flex items-center justify-center text-[0.7vw] w-[100%] transition-all duration-500 delay-100 ${activeSection === "2" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>FALLAS FUNCIONALES</div>
              <div className={`flex items-center justify-center text-[0.7vw] w-[100%] transition-all duration-500 delay-200 ${activeSection === "2" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>FRECUENCIA DE FALLA</div>
              <div className={`flex items-center justify-center text-[0.7vw] w-[100%] transition-all duration-500 delay-300 ${activeSection === "2" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>EFECTO SOBRE EL SISTEMA</div>
            </div>

            <div className={`absolute left-[40%] top-[30%] w-[20%] h-[7%] flex items-center justify-center text-[0.7vw] shadow-lg border border-gray100 rounded-sm transition-all duration-500 ${activeSection === "3" ? "bg-blue60 text-white scale-110" : "bg-gray70 text-white"}`}>¿EQUIPO CRÍTICO?</div>
            <div className={`absolute left-[23%] top-[32%] w-[5%] h-[3.5%] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "4" ? "bg-red50 text-white scale-150" : "bg-red90 text-white"}`}>SI</div>
            <div className={`absolute left-[77%] top-[32%] w-[5%] h-[3.5%] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "3" ? "bg-green80 text-white" : "bg-green80 text-white"}`}>NO</div>


            <div className={`absolute left-[64%] top-[45%] w-[10%] h-[7%] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "3" ? "bg-gray70 text-white" : "bg-gray70 text-white"}`}>RTF</div>
            <div className={`absolute left-[56%] top-[47%] w-[5%] h-[3.5%] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "3" ? "bg-red90 text-white" : "bg-red90 text-white"}`}>SI</div>
            <div className={`absolute left-[77%] top-[47%] w-[5%] h-[3.5%] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "3" ? "bg-green90 text-white" : "bg-green80 text-white"}`}>NO</div>




            <div className={`absolute left-[10%] top-[45%] w-[30%] h-[30%] p-[0.5vw] flex flex-col gap-[0.5vw] text-[0.7vw] transition-all duration-500 ${activeSection === "4" ? "bg-blue80 text-white scale-105" : "bg-gray80 text-white"}`}>
              <div className={` flex items-center justify-center text-[0.7vw] h-[100%] transition-all duration-500 ${activeSection === "4" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>ANÁLISIS DE MODOS DE FALLA</div>
              <div className={` flex items-center justify-center text-[0.7vw] h-[100%] transition-all duration-500 ${activeSection === "4" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>IDENTIFIFICACIÓN DE TAREAS</div>
              <div className={` flex items-center justify-center text-[0.7vw] h-[100%] transition-all duration-500 ${activeSection === "4" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>CRITERIO DEL CONSULTOR</div>
            </div>

            <div className={`absolute left-[10%] top-[80%] w-[80%] h-[7%] flex flex-row gap-[2%] p-2 transition-all duration-500 ${activeSection === "5" ? "bg-blue80 text-white scale-105" : "bg-gray80"}`}>
              <div className={`flex items-center justify-center text-[0.7vw] w-[50%] transition-all duration-500 delay-0 ${activeSection === "5" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}> PM OPTIMIZADO </div>
              <div className={`flex items-center justify-center text-[0.7vw] w-[25%] transition-all duration-500 delay-100 ${activeSection === "5" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>PM GENÉRICO</div>
              <div className={`flex items-center justify-center text-[0.7vw] w-[25%] transition-all duration-500 delay-200 ${activeSection === "5" ? "bg-blue60 text-white" : "bg-gray70 text-white"}`}>RTF</div>
            </div>

            <div className={`absolute left-[35%] top-[90%] w-[30%] h-[7%] p-[0.5vw] flex items-center justify-center text-[0.7vw] transition-all duration-500 ${activeSection === "6" ? "bg-blue60 text-white scale-110" : "bg-gray70 text-white"}`}>
              GENERACION DE PLANTILLAS DE CARGA AL CMMS
            </div>
          </div>
        </div>
        <div className="w-full text-center " >


          {/* ///////////////////////////////////////////// SEÒCION 0 //////////////////////////////// */}

          <div
            className={`mt-[10vh] scroll-section mb-[10vh] transition-opacity duration-500 ${activeSection === "1" ? "opacity-100" : "opacity-25"}`}
            data-section="0"
          ></div>

          {/* ///////////////////////////////////////////// SEÒCION 1 //////////////////////////////// */}

          <div
            className={`mt-[35vh] scroll-section mb-[10vh] transition-opacity duration-500 ${activeSection === "1" ? "opacity-100" : "opacity-25"}`}
            data-section="1"
          >
            <div>
              <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">ANÁLISIS DEL CONTEXTO OPERATIVO </h3>
              <p className="text-white text-[0.9vw] text-left mb-10">Establece la definición de los límites del sistem para evitar superposición y asegurar precisión. Documenta el análisis del contexto operativo de los equipos que se analizarán en ese sistema, tanto críticos como no críticos.
              </p>
            </div>

            <div className={`bg-gray10 text-[0.6vw]  rounded-sm relative transition-opacity duration-500 ${activeSection === "1" ? "opacity-100" : "opacity-50"}`}>
              <div className="absolute h-full w-full" style={{ background: 'linear-gradient(to bottom, transparent 65%, #262626 100%)' }}></div>
              <div className="border-b  p-[0.5vw] bg-gray20">
                <h3 className="text-[0.8vw] font-light uppercase">Definición del Límite del Sistema y Contexto Operacional</h3>
              </div>
              <div className=" p-[1vw]">
                <h4 className="text-[0.7vw] font-bold mb-[1vw] mt-[1vw] underline uppercase">Información General</h4>
                <p className="text-[0.6vw] text-left mb-0 mb-0"><strong className="text-blue60">Planta:</strong> Planta de Polietileno</p>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">Sistema:</strong> Hipercompresor</p>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">ID del sistema:</strong> 04451-09816</p>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">Subsistema:</strong> Sistema de aceite de enfriamiento</p>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">Fecha:</strong> 24 de febrero de 2021</p>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">Analistas:</strong> Carlos Villegas, Lisset Chavez</p>

                <h4 className="text-[0.7vw] font-bold mb-[1vw] mt-[1vw] underline uppercase">Equipo Principal Incluido</h4>

                <p className="text-[0.6vw] text-left mb-0">Bombas de tornillo de aceite de enfriamiento <strong className="text-blue60">P-1202A, P-1202B</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Tanque de almacenamiento de aceite de enfriamiento <strong className="text-blue60">TK-1202</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Enfriador de tubo y carcasa <strong className="text-blue60">E-1202</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Filtros dúplex de membrana <strong className="text-blue60">F-1202A, F-1202B</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Válvula reguladora de presión a la sapda <strong className="text-blue60">PV-1204</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Termoválvula <strong className="text-blue60">TV-1202</strong> </p>
                <p className="text-[0.6vw] text-left mb-0">Instrumentación asociada a los equipos principales (Instrumentos de nivel, presión y temperatura)</p>


                <h4 className="text-[0.7vw] font-bold mb-[1vw] mt-[1vw] underline uppercase">Límites Físicos Primarios</h4>
                <p className="text-[0.6vw] text-left mb-0"><strong className="text-blue60">Inicia en:</strong> Tanque de almacenamiento (TK-1204) proveniente de la bomba P-1204 (no incluida).</p>
                <p className="text-[0.6vw] text-left "><strong className="text-blue60">Finaliza en:</strong> Válvula reguladora de presión a la salida (PV-1204).</p>

                <h4 className="text-[0.7vw] font-bold mb-[1vw] mt-[1vw] underline uppercase">Premisas y Advertencias</h4>
                <p className="text-[0.6vw] text-left mb-0">El aire de instrumentos se considera una entrada al sistema.</p>
                <p className="text-[0.6vw] text-left mb-0">El suministro de aceite de enfriamiento se considera una entrada al sistema.</p>

                <h4 className="text-[0.7vw] font-bold mb-[1vw] mt-[1vw] underline uppercase">Descripción de la Operación</h4>
                <p className="text-[0.6vw] text-left mb-4">
                  El propósito de este sistema es suministrar aceite limpio a los empaques y las cámaras de los émbolos de ambas etapas de compresión de un hipercompresor de gas, proporcionando el medio de enfriamiento para retirar el calor generado por la fricción.
                </p>
                <p className="text-[0.6vw] text-left mb-4">
                  El aceite recibido por el tanque de almacenamiento <strong className="text-blue60">TK-1220</strong>  proviene del aceite transferido por la bomba P-1204 y del retorno de aceite que fue empleado en el sistema de enfriamiento de los empaques y émbolos del hipercompresor.
                  Cuenta con el calentador eléctrico HE-1220, ubicado en el fondo del tanque, para precalentar el aceite entre 40°C y 50°C antes de iniciar el compresor al menos 2 horas antes de su arranque.
                </p>
                <p className="text-[0.6vw] text-left mb-4">
                  El instrumento <strong className="text-blue60">TSHL-0475</strong> controla el encendido y apagado del calentador para mantener la temperatura en el rango adecuado.
                  Si la temperatura del aceite excede los 70°C, se activa el interlock <strong>I-1281</strong>, deteniendo el sistema.
                </p>
                {/* <p className="text-[0.6vw] text-left mb-4">
                  El monitoreo de nivel de aceite dentro del tanque se realiza por medio del transmisor de nivel <strong className="text-blue60">LT-1220</strong>.
                  Si cae por debajo del 30% de su capacidad, se activa una alarma por bajo nivel y el interlock <strong className="text-blue60">I-1271</strong>.
                  Si supera el 85% de su capacidad, se activa una alarma por alto nivel y el interlock <strong className="text-blue60">I-1272</strong>.
                  El tanque se encuentra a presión atmosférica y cuenta con venteo, además de un sistema de aterramiento para disipar corrientes estáticas.
                </p> */}

              </div>

            </div>
          </div>

          {/* ///////////////////////////////////////////// SEÒCION 2 //////////////////////////////// */}
          <div
            className={`mt-[25vh] scroll-section h-[80vh] mb-[10vh] transition-opacity duration-500 ${activeSection === "2" ? "opacity-100" : "opacity-25"}`}
            data-section="2"
          >
            <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">IDENTIFICACIÓN FUNCIONES Y EFECTOS DE FALLA SOBRE EL SISTEMA</h3>
            <p className="text-white text-[0.9vw] text-left mb-10">Identifica las funciones y fallas funcionales de los equipos, así como evalua su impacto en el sistema en términos de consecuencias económicas, operacionales, de seguridad y ambientales. Este análisis se fundamenta en la experiencia y criterio del equipo de trabajo (ENT), respaldado por el historial relevante de fallas, que incluye la frecuencia de fallas (TPPF).
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="text-black text-[0.7vw] text-center">Equipo / Componente</th>
                    <th className="text-black text-[0.7vw] text-center">Función</th>
                    <th className="text-black text-[0.7vw] text-center">Falla funcional</th>
                    <th className="text-black text-[0.7vw] text-center">Efecto sobre el proceso</th>
                    <th className="text-black text-[0.7vw] text-center">Frecuencia estimada de ocurrencia</th>
                    <th className="text-black text-[0.7vw] text-center">Consecuencias de la pérdida de la función</th>
                    <th className="text-black text-[0.7vw] text-center">Crítico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray30">
                    <td className="text-gray80 text-[0.6vw]">Bomba de aceite de enfriamiento <strong className="text-blue60 bg-blue20 p-[0.2vw]  whitespace-nowrap">P-1202</strong> </td>
                    <td className="text-gray80 text-[0.6vw]">Bombear agua desde el tanque de almacenamiento hasta la torre de enfriamiento a un caudal de 500 litros por minuto y una presión de 5 bar.</td>
                    <td className="text-gray80 text-[0.6vw]">No bombea agua de enfriamiento o lo hace por debajo de los estándares definidos.</td>
                    <td className="text-gray80 text-[0.6vw]">Se produce paro por emergencia cuando la presión de salida del sistema medida por el transmisor PIT-1202 detecta una caída por debajo de 3.06 kg/cm².</td>
                    <td className="text-gray80 text-[0.6vw]">2 veces al año</td>
                    <td className="text-gray80 text-[0.6vw]">Paro por 4 horas del sistema</td>
                    <td className="text-[0.6vw] bg-red70 text-white text-center" >Sí</td>
                  </tr>
                  <tr className="bg-gray30">
                    <td className="text-gray80 text-[0.6vw]">Tanque de almacenamiento de aceite y sistema de precalentamiento <strong className="text-blue60 bg-blue20 pb-[0.1vw] p-[0.2vw]  whitespace-nowrap">(TK-1220 / HE-1220)</strong> </td>
                    <td className="text-gray80 text-[0.6vw]">Almacenar aceite y precalentarlo entre 40°C y 50°C para garantizar el correcto arranque del hipercompresor.</td>
                    <td className="text-gray80 text-[0.6vw]">No mantiene el nivel, la temperatura o excede los límites establecidos.</td>
                    <td className="text-gray80 text-[0.6vw]">Paro del sistema debido a nivel bajo o alto (interlocks I-1271 / I-1272) o sobrecalentamiento del aceite (interlock I-1281).</td>
                    <td className="text-gray80 text-[0.6vw]">1 vez al año</td>
                    <td className="text-gray80 text-[0.6vw]">Paro del sistema por 6 horas para inspección y corrección.</td>
                    <td className="text-gray80 text-[0.6vw] text-center">No</td>
                  </tr>
                  <tr className="bg-gray30">
                    <td className="text-gray80 text-[0.6vw]">Filtros Dúplex <strong className="text-blue60 bg-blue20 pb-[0.1vw] p-[0.2vw]  whitespace-nowrap">F-1220-A/B </strong></td>
                    <td className="text-gray80 text-[0.6vw]">Asegurar la limpieza del aceite eliminando partículas mayores a 25 μm.</td>
                    <td className="text-gray80 text-[0.6vw]">No filtra adecuadamente el aceite debido a saturación o daño en los filtros.</td>
                    <td className="text-gray80 text-[0.6vw]">Incremento en la presión diferencial, activación de alarma (PDT-1220) y posible daño a componentes aguas abajo.</td>
                    <td className="text-gray80 text-[0.6vw]">2 veces al año</td>
                    <td className="text-gray80 text-[0.6vw]">Ninguna. Se tiene redundancia pasiva.</td>
                    <td className="text-gray80 text-[0.6vw] text-center">No</td>
                  </tr>
                  <tr className="bg-gray30">
                    <td className="text-gray80 text-[0.6vw]">Válvula de Control  <strong className="text-blue60 bg-blue20 pb-[0.1vw] p-[0.2vw]  whitespace-nowrap">PCV-1220</strong></td>
                    <td className="text-gray80 text-[0.6vw]">Mantener la presión del sistema en 3.06 kg/cm².</td>
                    <td className="text-gray80 text-[0.6vw]">No regula la presión dentro del rango establecido.</td>
                    <td className="text-gray80 text-[0.6vw]">Activación de alarmas por baja o muy baja presión (PIT-1221) y paro del sistema por activación del interlock I-1220.</td>
                    <td className="text-gray80 text-[0.6vw]">1 vez cada 2 años</td>
                    <td className="text-gray80 text-[0.6vw]">Paro del sistema por 4 horas para ajuste o reemplazo.</td>
                    <td className="text-[0.6vw] bg-red70 text-white text-center" >Sí</td>
                  </tr>
                  <tr className="bg-gray40">
                    <td colSpan={7} className="text-center">...</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <div>




          </div>

          {/* ///////////////////////////////////////////// SEÒCION 2 //////////////////////////////// */}
          <div
            className={`mt-[25vh] scroll-section mb-[10vh] transition-opacity duration-500 ${activeSection === "3" ? "opacity-100" : "opacity-25"}`}
            data-section="3"
          ></div>

          <div className={`scroll-section transition-opacity duration-500 ${activeSection === "3" ? "opacity-100" : "opacity-50"}`} data-section="3">


            <div>
              <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">ANÁLISIS DE CRITICIDAD</h3>
              <p className="text-white text-[0.9vw] text-left mb-10">Asigna la criticidad de cada equipo dentro del sistema para priorizar aquellos a los que se les deberá realizar un análisis de modos de falla y asignación de un PM optimizado.
              </p>
            </div>
            <table className="text-[0.8vw]">
              <thead >
                <tr >
                  <th rowSpan={2} className="text-center">Consecuencia</th>
                  <th colSpan={4} className="text-center">Frecuencia <br /> Eventos anuales</th>
                </tr>
                <tr>
                  <th className="text-center">Más de 1</th>
                  <th className="text-center">Entre 0.1 y 1</th>
                  <th className="text-center">Entre 0.1 y 0.01</th>
                  <th className="text-center">Menos de 0.01</th>
                </tr>
              </thead>
              <tbody className="bg-gray30">
                <tr>
                  <td className="text-center">Muy alta <br />(4)</td>
                  <td className="bg-green50 text-white text-center">4</td>
                  <td className="bg-yellow50 text-white text-center">8</td>
                  <td className="bg-red80 text-white text-center">12</td>
                  <td className="bg-red80 text-white text-center">16</td>
                </tr>
                <tr>
                  <td className="text-center">Alta <br />(3)</td>
                  <td className="bg-green50 text-white text-center">3</td>
                  <td className="bg-yellow50 text-white text-center">6</td>
                  <td className="bg-yellow50 text-white text-center">9</td>
                  <td className="bg-red80 text-white text-center">12</td>
                </tr>
                <tr>
                  <td className="text-center">Media <br />(2)</td>
                  <td className="bg-green50 text-white text-center">2</td>
                  <td className="bg-green50 text-white text-center">4</td>
                  <td className="bg-yellow50 text-white text-center">6</td>
                  <td className="bg-yellow50 text-white text-center">8</td>
                </tr>
                <tr>
                  <td className="text-center">Baja <br />(1)</td>
                  <td className="bg-green50 text-white text-center">1</td>
                  <td className="bg-green50 text-white text-center">2</td>
                  <td className="bg-green50 text-white text-center">3</td>
                  <td className="bg-green50 text-white text-center">4</td>
                </tr>
              </tbody>
            </table>

          </div>

          {/* ///////////////////////////////////////////// SEÒCION 4 //////////////////////////////// */}

          <div
            className={`mt-[25vh] scroll-section mb-[10vh] transition-opacity duration-500 ${activeSection === "4" ? "opacity-100" : "opacity-25"}`}
            data-section="4"
          >
            <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">ANÁLISIS DE LOS MODOS E IDENTIFICACIÓN DE TAREAS</h3>
            <p className="text-white text-[0.9vw] text-left mb-10">Registra los modos de falla probables que causan la pérdida parcial o total de la función del activo e identifica las tareas proactivas apropiadas manteniendo trazabilidad.
            </p>
            <table>
              <thead className="text-[0.7vw]">
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Modo de Falla (Causa)</th>
                  <th className="text-center">Ítem Mantenible</th>
                  <th className="text-center">Efecto Local de Falla</th>
                  <th className="text-center">¿Se presenta frecuente?</th>
                  <th className="text-center">Patrón de Falla</th>
                  <th className="text-center">Tareas Propuestas</th>
                </tr>
              </thead>
              <tbody className="text-[0.6vw] text-gray90 bg-gray30">
                <tr>
                  <td>1</td>
                  <td>Mala alimentación eléctrica (desbalance entre fases, subtensiones, sobretensiones, o variación de frecuencia, calidad de energía).</td>
                  <td className="text-center">NA</td>
                  <td>LOO (Low Output); OHE (Overheating)</td>
                  <td className="text-center">Sí</td>
                  <td className="text-center">Aleatorio</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Falla en caja de bornes por corrosión o humedad (genera corto o circuito abierto).</td>
                  <td className="text-center">Caja de conexiones</td>
                  <td>UST (Spurious Stop); OHE (Overheating); FTS (Fail to start)</td>
                  <td className="text-center">No</td>
                  <td className="text-center">Progresivo</td>
                  <td>Realizar análisis de aceite lubricante básico. Establecer niveles de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Degradación del aislamiento por contaminación, humedad o envejecimiento.</td>
                  <td className="text-center">Bobinados</td>
                  <td>OHE (Overheating)</td>
                  <td className="text-center">Sí</td>
                  <td className="text-center">Progresivo</td>
                  <td>Inspección de los bornes y ajuste con torquímetro. Realizar termografía.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Daño en el devanado por sobrecalentamiento o cortocircuito interno.</td>
                  <td className="text-center">Bobinados</td>
                  <td>OHE (Overheating)</td>
                  <td className="text-center">Sí</td>
                  <td className="text-center">Progresivo</td>
                  <td>Realizar pruebas eléctricas (pruebas estáticas). Establecer niveles de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Falla o degradación de rodamiento por lubricación deficiente.</td>
                  <td className="text-center">Rodamiento</td>
                  <td>VIB (Vibration); OHE (Overheating); BRK (Breakdown)</td>
                  <td className="text-center">Sí</td>
                  <td className="text-center">Aleatorio</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Desalineación entre motor y carga, pata coja, soltura de pernos o bastidor deteriorado.</td>
                  <td className="text-center">Pernos de fijación; base del motor</td>
                  <td>VIB (Vibration)</td>
                  <td className="text-center">Sí</td>
                  <td className="text-center">Aleatorio</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Falla o degradación del eje (corrosión, fisura, fatiga, deformación, desgaste por fricción).</td>
                  <td className="text-center">Eje</td>
                  <td>VIB (Vibration); OHE (Overheating); BRK (Breakdown)</td>
                  <td className="text-center">No</td>
                  <td className="text-center">Progresivo</td>
                  <td>Realizar una inspección visual interna. Desmontar y limpiar según sea necesario.</td>
                </tr>
                {/* <tr>
                  <td>8</td>
                  <td>Rotor desbalanceado.</td>
                  <td>Rotor</td>
                  <td>VIB (Vibration)</td>
                  <td className="no">No</td>
                  <td>Aleatorio</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Acoplamiento defectuoso entre el motor y la carga.</td>
                  <td>Acoplamiento</td>
                  <td>VIB (Vibration)</td>
                  <td className="yes">Sí</td>
                  <td>Aleatorio</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ventilación insuficiente debido a suciedad.</td>
                  <td>Ventilador</td>
                  <td>OHE (Overheating)</td>
                  <td className="yes">Sí</td>
                  <td>Progresivo</td>
                  <td>Realizar monitoreo de vibración de espectro completo. Establecer los niveles básicos y de acción. Analizar tendencias de los resultados.</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          {/* ///////////////////////////////////////////// SEÒCION 5 //////////////////////////////// */}

          <div
            className={`mt-[25vh] scroll-section mb-[10vh] transition-opacity duration-500 ${activeSection === "5" ? "opacity-100" : "opacity-25"}`}
            data-section="5"
          >
            <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">REVISIÓN DEL PLAN DE MANTENIMIENTO </h3>
            <p className="text-white text-[0.9vw] text-left mb-10">Agrupa tareas por responsables, optimiza las frecuencias para la sincronización y agrega el detalle de cada actividad (paso a paso secuencial) junto con la lista de materiales, consumibles y herramientas requeridos.
            </p>

            <table className="bg-gray30 text-[0.6vw]">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo de tarea</th>
                  <th>Descripción</th>
                  <th>Ejecutor</th>
                  <th>1S</th>
                  <th>3M</th>
                  <th>6M</th>
                  <th>1A</th>
                  <th>2A</th>
                  <th>4A</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={10} className="motor-header bg-gray60 text-gray20">Motor Eléctrico ME-1202</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mantenimiento Preventivo</td>
                  <td>Verificar el funcionamiento de resistencias calefactoras para la prevención de humedad en el interior del motor (solo aplica cuando el motor no se encuentra operando, en standby espera).</td>
                  <td className="text-center bg-blue40">Operador</td>
                  <td className="bg-blue60"></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Verificar sensorialmente temperatura, vibración, decoloración, olores y/o ruidos anormales.</td>
                  <td className="text-center bg-blue40">Operador</td>
                  <td className="bg-blue60"></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Verificar valores de tensiones y corrientes por fase, potencia activa y reactiva, factor de potencia y temperaturas.</td>
                  <td className="text-center bg-yellow40">Eléctrico</td>
                  <td></td><td className="bg-blue60"></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Realizar análisis de vibración con analizador portátil.</td>
                  <td className="text-center bg-purple40">Tec. Predictivo</td>
                  <td></td><td className="bg-blue60"></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Termografía.</td>
                  <td className="text-center bg-purple40">Tec. Predictivo</td>
                  <td></td><td className="bg-blue60"></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Evaluar reengrase con ultrasonido.</td>
                  <td className="text-center bg-purple40">Tec. Predictivo</td>
                  <td></td><td className="bg-blue60"></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Mantenimiento Preventivo</td>
                  <td>Verificación conectada en caja (revisar con torquímetro que tenga el torque requerido), inspección visual de acometida en busca de cambios de coloración, sulfatación, pérdida del aislamiento y presencia de humedad.</td>
                  <td className="text-center bg-yellow40">Eléctrico</td>
                  <td></td><td></td><td></td><td></td><td className="bg-blue60"></td><td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Mantenimiento Predictivo</td>
                  <td>Pruebas estáticas (capacitancia, resistencia fase a fase, desbalance resistivo, resistencia a tierra, inductancia fase a fase, desbalance inductivo, índice de polarización, DAR, prueba surge. Asegurar que el motor esté conectado, frío y desenergizado).</td>
                  <td className="text-center bg-yellow40">Eléctrico</td>
                  <td></td><td></td><td></td><td></td><td className="bg-blue60"></td><td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mantenimiento Preventivo</td>
                  <td>Verificación del correcto funcionamiento del ventilador, limpiar entradas y salidas de aire, deflectores y carcasa.</td>
                  <td className="text-center bg-red40">Mecánico</td>
                  <td></td><td></td><td></td><td></td><td className="bg-blue60"></td><td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Mantenimiento Preventivo</td>
                  <td>Verificación de alineación mecánica, nivelación, pata coja, correcto apriete (torque) de pernos de anclaje.</td>
                  <td className="text-center bg-red40">Mecánico</td>
                  <td></td><td></td><td></td><td></td><td className="bg-blue60"></td><td></td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* ///////////////////////////////////////////// SEÒCION 6 //////////////////////////////// */}

          <div
            className={`mt-[25vh] scroll-section mb-[10vh] h-[100vh] transition-opacity duration-500 ${activeSection === "6" ? "opacity-100" : "opacity-25"}`}
            data-section="6"
          >

            <h3 className="text-white text-left font-black uppercase text-[1.4vw] mb-4">GENERACIÓN DE ARCHIVOS DE CARGA AL CMMS </h3>
            <p className="text-white text-[0.9vw] text-left mb-10">Exporta el archivo RCM a un formato adaptable para su compatibilidad con los archivos planos de carga al CMMS minimizando asi las horas de retrabajo y la entrega inmediata de nuevas versiones del PM.
            </p>

            <table className="border border-gray-300 text-[0.5vw]">
              <thead className="">
                <tr className="">
                  <th className="">OPERACIÓN</th>
                  <th className=" text-center p-[0.2vw]">PUESTO DE TRABAJO</th>
                  <th className=" text-center p-[0.2vw]">CENTRO</th>
                  <th className=" text-center p-[0.2vw]">CLASE DE CONTROL</th>
                  <th className=" text-center p-[0.2vw]">DESCRIPCIÓN OPERACIÓN</th>
                  <th className=" text-center p-[0.2vw]">TRABAJO</th>
                  <th className=" text-center p-[0.2vw]">UN.</th>
                  <th className=" text-center p-[0.2vw]">N°</th>
                  <th className=" text-center p-[0.2vw]">DURACIÓN</th>
                  <th className=" text-center p-[0.2vw]">UN.</th>
                  <th className=" text-center p-[0.2vw]">CvC</th>
                  <th className=" text-center p-[0.2vw]">%</th>

                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="text-center p-[0.2vw] bg-gray30">10</td>
                  <td className="text-center p-[0.2vw] bg-gray30">VZ02MELE</td>
                  <td className="text-center p-[0.2vw] bg-gray30">VZ02</td>
                  <td className="text-center p-[0.2vw] bg-gray30">PM01</td>
                  <td className="bg-blue20 border-b-blue70">
                    <strong className="bg-blue30 text-blue60 p-[0.2vw] text-[0.5vw]">[2A] Verif. conexionado elec y en caja</strong>
                    <ul className="list-disc pl-5 mt-1 text-gray-700">
                      <li>Verificación conexionado en caja (revisar con torquímetro que tenga el torque requerido), inspección visual de acometida.</li>
                      <li>Limpieza del devanado con aire seco y desengrasante dieléctrico.</li>
                      <li>Verificar el correcto conexionado eléctrico y sentido del giro del motor.</li>
                    </ul>
                  </td>
                  <td className="text-center p-[0.2vw] bg-gray30">10.4</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">5.2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">100</td>
                </tr>
                <tr className="">
                  <td className="text-center p-[0.2vw] bg-gray30">20</td>
                  <td className="text-center p-[0.2vw] bg-gray30">VZ02MMEC</td>
                  <td className="text-center p-[0.2vw] bg-gray30">VZ02</td>
                  <td className="text-center p-[0.2vw] bg-gray30">PM01</td>
                  <td className="bg-blue20 border-b-blue70 border-b-blue70">
                    <strong className="bg-blue30 text-blue60 p-[0.2vw] text-[0.5vw]">[2A] Verif. alineación, acople y venti</strong>
                    <ul className="list-disc pl-5 mt-1 text-gray-700">
                      <li>Verificación de alineación mecánica, nivelación, pata coja, correcto apriete (torque) de pernos de anclaje.</li>
                      <li>Verificación de acople (torque de apriete, elemento flexible, juego axial y giro libre del eje).</li>
                      <li>Verificación del correcto funcionamiento del ventilador, limpiar entradas y salidas de aire, deflectores y carcasa.</li>
                    </ul>
                  </td>
                  <td className="text-center p-[0.2vw] bg-gray30">24</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">12</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">100</td>
                </tr>
                <tr className="">
                  <td className="text-center p-[0.2vw] bg-gray30">30</td>
                  <td className="text-center p-[0.2vw] bg-gray30">TALLER</td>
                  <td className="text-center p-[0.2vw] bg-gray30">VZ02</td>
                  <td className="text-center p-[0.2vw] bg-gray30">PM01</td>
                  <td className="border border-gray-300 bg-blue20 ">
                    <strong className="bg-blue30 text-blue60 p-[0.2vw] text-[0.5vw] ">[4A] Insp de engra y meca y reacond</strong>
                    <ul className="list-disc pl-5 mt-1 text-gray-700">
                      <li>Inspeccionar integridad de caja de engranajes.</li>
                      <li>Inspección y reemplazo de rodamiento.</li>
                      <li>Inspección dimensional y de la integridad mecánica.</li>
                      <li>Reacondicionamiento y barnizado de estator y rotor (pruebas eléctricas).</li>
                    </ul>
                  </td>
                  <td className="text-center p-[0.2vw] bg-gray30">123.2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">61.6</td>
                  <td className="text-center p-[0.2vw] bg-gray30">H</td>
                  <td className="text-center p-[0.2vw] bg-gray30">2</td>
                  <td className="text-center p-[0.2vw] bg-gray30">100</td>
                </tr>
              </tbody>
            </table>


          </div>

        </div>
      </div>



      <div className="bg-blue10 flex flex-col items-center justify-center p-[7vh] pb-[3vh]">
        <div className="w-full bg-blue10 rounded-lg flex flex-col items-center justify-center p-[10vh] relative">
          <Image src={software} alt="RCAP1" width={200} height={200} className="absolute top-[-100px]" />
          <h3>¿Dudas? Te guiaremos en el proceso</h3>
          <p>Habla con uno de nuestros expertos en RCM para conocer más sobre los servicios y software especializado.</p>
          <button className="bg-blue60 mt-4 text-xl"  onClick={() => setShowModal(true)}>Hablar con un especialista</button>
        </div>


      </div>


    </div>
  );
}

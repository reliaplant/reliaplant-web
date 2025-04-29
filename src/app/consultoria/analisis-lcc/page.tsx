import { Metadata } from "next";
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
  Industry,
  Activity,
  EventWarning,
  TransformInstructions,
  ArrowRight,
  RequestQuote,
  SupportVectorMachine,
  DataAnalytics,
  Headset,
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  QuestionAnswering,
} from "@carbon/icons-react";
import { MdMoney, MdScience } from "react-icons/md";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata: Metadata = {
  title: {
    absolute: "Análisis de costo de ciclo de vida",
  },
  description: "Desc Contacto",
};

export default function Contacto() {
  return (
    <div>
      {/* Header */}
      <div>
        <div className="relative flex flex-col">
          {/* Banner de imagen */}
          <div className="relative w-full bg-[url('/assets/bgLCC1.png')] bg-contain bg-no-repeat bg-center aspect-[16/6]">
            {/* Eliminado el div del sombreado */}
          </div>

          {/* Contenido */}
          <div className="relative bg-gray-100 w-full px-4 sm:px-6 md:px-[3vw] lg:px-[5vw] py-8 md:py-12">
            <div>
              <div className="flex flex-row flex-wrap">
                <span className="text-blue60 font-light mb-4 text-sm md:text-md">
                  <a href="/" className="hover:underline">
                    Inicio
                  </a>{" "}
                  <span className="mx-2 text-gray60">{"/"}</span>
                  <a href="/consultoria" className="hover:underline">
                    Consultoría
                  </a>{" "}
                  <span className="mx-2 text-gray60">{"/"}</span>
                  RUL y LCC
                </span>
              </div>
              <h1 className="leading-[1.1]">
                Vida Útil Remanente y Análisis de Costo de Ciclo de Vida
              </h1>
              <h4>
                La Vida Útil Remanente (RUL) estima el tiempo restante durante
                el cual un activo puede operar de forma segura, eficiente y
                económica antes de requerir su retiro.
              </h4>
              <div className="mt-8">
                <AbrirFormContacto
                  buttonText="Habla con un especialista"
                  icon={<Headset size={20} className="text-white" />}
                  buttonColor="bg-gray90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description section - made responsive */}
      <div className="mt-12 md:mt-24 px-4 sm:px-[8vw] flex flex-col md:flex-row md:gap-12 lg:gap-24">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light w-full md:w-1/2 mb-6 md:mb-0">
          Optimiza las decisiones de inversión con base en el ciclo de vida de
          tus activos.
        </h3>
        <div className="w-full md:w-1/2">
          <p className="mt-0 md:mt-4 text-gray60">
            Conoce cómo el análisis de Vida Útil Remanente (RUL) y Costo de
            Ciclo de Vida (LCC) puede ayudarte a determinar el momento óptimo
            para reemplazar o modernizar tus activos. Este enfoque integral
            combina evaluaciones técnicas de confiabilidad con análisis
            económicos para tomar decisiones informadas sobre la gestión de
            activos a largo plazo.
          </p>
        </div>
      </div>

      {/* Info box - made responsive */}
      <div className="pt-8 md:pt-16 px-4 sm:px-[8vw]">
        <div className="bg-gray10 p-4 border">
          <p className="mb-0 text-sm md:text-base">
            <strong>
              Las principales razones para el fin de la vida útil de un activo
              incluyen obsolescencia, cambios del contexto operacional,
              incumplimiento de regulaciones, fin de vida física y fin de vida
              económica.
            </strong>
            El análisis RUL y LCC permite identificar el momento óptimo para
            reemplazar o modernizar activos, optimizando inversiones y
            reduciendo riesgos operativos.{" "}
            <a href="" className="text-blue60">
              Leer guía sobre análisis de ciclo de vida
            </a>{" "}
          </p>
        </div>
      </div>

      {/* Feature cards - made responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-[8vw] mt-12 md:mt-24">
        <div className="border p-4 flex flex-col justify-between h-auto min-h-[200px] md:h-[25vh]">
          <div className="flex flex-col">
            <span className="text-xl md:text-[1.4rem]">
              Evalúa obsolescencia y cambios
            </span>
            <span className="text-gray60 text-sm md:text-base">
              Identifica activos que ya no cuentan con repuestos o que no pueden
              adaptarse a nuevas condiciones operativas.
            </span>
          </div>
          <div className="mt-4">
            <Industry size={48} className="text-blue60" />
          </div>
        </div>
        <div className="border p-4 flex flex-col justify-between h-auto min-h-[200px] md:h-[25vh]">
          <div className="flex flex-col">
            <span className="text-xl md:text-[1.4rem]">
              Optimiza inversiones
            </span>
            <span className="text-gray60 text-sm md:text-base">
              Define el momento económicamente óptimo para la modernización o
              reemplazo de activos críticos.
            </span>
          </div>
          <div className="mt-4">
            <Activity size={48} className="text-blue60" />
          </div>
        </div>
        <div className="border p-4 flex flex-col justify-between h-auto min-h-[200px] md:h-[25vh]">
          <div className="flex flex-col">
            <span className="text-xl md:text-[1.4rem]">
              Análisis económicos avanzados
            </span>
            <span className="text-gray60 text-sm md:text-base">
              Evaluación de TIR, VPN y CAE para diferentes horizontes económicos
              de inversión.
            </span>
          </div>
          <div className="mt-4">
            <EventWarning size={48} className="text-blue60" />
          </div>
        </div>
        <div className="border p-4 flex flex-col justify-between h-auto min-h-[200px] md:h-[25vh]">
          <div className="flex flex-col">
            <span className="text-xl md:text-[1.4rem]">
              Evaluación de escenarios
            </span>
            <span className="text-gray60 text-sm md:text-base">
              Compara múltiples escenarios de operación continua vs. inversión
              en reemplazo o modernización.
            </span>
          </div>
          <div className="mt-4">
            <TransformInstructions size={48} className="text-blue60" />
          </div>
        </div>
      </div>

      {/* Sticky header - already responsive */}
      <div className="mt-12 md:mt-24 px-4 sm:px-[8vw] border-b bg-white">
        <div className="flex flex-row gap-4 justify-between py-2">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit text-xl md:text-2xl">
              Metodología RUL y LCC
            </h2>
          </div>
          <div>
            <AbrirFormContacto
              buttonText="¿Dudas?"
              icon={null}
              buttonColor="bg-gray90"
            />
          </div>
        </div>
      </div>

      {/* Methodology sections - made responsive */}
      <div className="px-4 sm:px-[8vw]">
        <div className="p-4 md:p-8 mb-8 md:mb-16 border-black flex flex-col md:flex-row md:gap-12 lg:gap-24 relative">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_1 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Análisis RAM (Confiabilidad, Disponibilidad y Mantenibilidad)
              </h3>
            </div>

            <div className="mt-4 md:mt-8"></div>
            <p className="text-base md:text-lg leading-relaxed md:leading-[136%]">
              Esta metodología permite estimar la confiabilidad y disponibilidad
              de los activos a través de simulaciones basadas en datos
              históricos y estándares industriales. Utilizamos modelos de
              Diagrama de Bloques de Confiabilidad (RBD) para:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm md:text-base">
              <li>
                Simular y calcular indicadores RAM como confiabilidad,
                disponibilidad y mantenibilidad.
              </li>
              <li>
                Caracterizar bloques con funciones de distribución de Tiempo
                Para Falla (TPF) y Tiempo Para Reparar (TPR).
              </li>
              <li>
                Evaluar el impacto de diferentes estrategias de mantenimiento en
                la disponibilidad.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgRAM.png')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="px-4 sm:px-[8vw]">
        <div className="p-4 md:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row md:gap-12 lg:gap-24 relative">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_2 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Análisis de Costo de Ciclo de Vida (LCC)
              </h3>
            </div>

            <div className="mt-4 md:mt-8"></div>
            <p className="text-base md:text-lg leading-relaxed md:leading-[136%]">
              Evaluamos los costos asociados a la operación, mantenimiento y
              reemplazo de activos a lo largo de distintos horizontes económicos
              (5, 10, 15 y 20 años). Esto nos permite realizar:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm md:text-base">
              <li>
                Simulación de costos operativos y de mantenimiento para
                diferentes horizontes económicos.
              </li>
              <li>
                Definición de perfiles operativos y límites técnicos para los
                activos.
              </li>
              <li>
                Evaluación del impacto económico (lucro cesante) debido a
                paradas programadas y no programadas.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgLCC3.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
      </div>

      <div className="px-4 sm:px-[8vw]">
        <div className="p-4 md:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row md:gap-12 lg:gap-24 relative">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_3 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Comparación de escenarios
              </h3>
            </div>

            <div className="mt-4 md:mt-8"></div>
            <p className="text-base md:text-lg leading-relaxed md:leading-[136%]">
              Para determinar la Vida Útil Remanente, comparamos dos escenarios
              fundamentales:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm md:text-base">
              <li>
                Escenario 1: Continuar operando los activos en su condición
                actual, siguiendo el programa de costos de inversión y operación
                establecido (Capex y Opex).
              </li>
              <li>
                Escenario 2: Realizar inversiones para la modernización,
                rediseño o reemplazo de activos, identificando el momento óptimo
                para su sustitución.
              </li>
              <li>
                Estudio de sensibilidad que considera los costos acumulados y
                los beneficios económicos de cada alternativa.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgLCC2.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
      </div>

      <div className="px-4 sm:px-[8vw]">
        <div className="p-4 md:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row md:gap-12 lg:gap-24 relative">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_4 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Estimación de costos y análisis de inversiones
              </h3>
            </div>

            <div className="mt-4 md:mt-8"></div>
            <p className="text-base md:text-lg leading-relaxed md:leading-[136%]">
              Aplicamos estándares internacionales para la clasificación de los
              estimados según las prácticas recomendadas por la AACE
              International, considerando:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm md:text-base">
              <li>
                Consumo energético, mantenimiento programado y por falla, costos
                fijos operativos y pérdidas económicas por paradas.
              </li>
              <li>
                Evaluación de los costos de inversión (Capex) y su retorno a lo
                largo del horizonte económico seleccionado.
              </li>
              <li>
                Parámetros económicos: TIR (Tasa Interna de Retorno), VPN (Valor
                Presente Neto) y CAE (Costo Anual Equivalente).
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgLCC.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
      {/* <div className="px-[4vw] bg-gradient-to-l from-blue60 to-gray10 ">
                <div className=" flex flex-row bg-gray20 justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
                    <div className="p-[4vw] w-[40vw]">
                        <h3 className="text-5xl font-light">Decisiones informadas basadas en datos</h3>
                        <p className="mt-8 text-lg font-normal">Nuestro enfoque integral garantiza una gestión eficiente del ciclo de vida de los activos, alineando las decisiones de mantenimiento con los objetivos económicos y operativos de la organización.
                        </p>
                        <div className="mt-12" >
                            <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4 bg-gray90">
                                <span>
                                    Agenda con un especialista
                                </span>
                                <Headset size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-[29vw]  w-[50vw] bg-[url('/assets/consultor2.jpg')] bg-cover bg-center transform -scale-x-100" >
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

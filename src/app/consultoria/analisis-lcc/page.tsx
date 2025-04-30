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
import { ServiceCard } from "@/components/ServiceCard";

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
        <div className="relative flex flex-col mt-4">
          {/* Banner de imagen */}
          <div className="relative w-full bg-[url('/assets/bgLCC1.png')] bg-contain bg-no-repeat bg-center aspect-[16/6]">
            {/* Eliminado el div del sombreado */}
          </div>

          {/* Contenido */}
          <div className="relative bg-gray-100 w-full px-4 sm:px-6 md:px-[3vw] lg:px-[5vw]">
            <div>
              <div className="flex flex-row flex-wrap py-12">
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
              <h1>Vida Útil Remanente y Análisis de Costo de Ciclo de Vida</h1>
              <h4>
                La Vida Útil Remanente (RUL) estima el tiempo restante durante
                el cual un activo puede operar de forma segura, eficiente y
                económica antes de requerir su retiro.
              </h4>
              <div className="mt-8 pb-12">
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

      <div className="contentSection">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24 mb-16">
          <h2 className="w-full md:w-1/2 mb-6 md:mb-0">
            Optimiza las decisiones de inversión con base en el ciclo de vida de
            tus activos.
          </h2>
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

        <div className="bg-gray10 p-8 border mb-16">
          <p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            Icon={Industry}
            title="Evalúa obsolescencia y cambios"
            description="Identifica activos que ya no cuentan con repuestos o que no pueden adaptarse a nuevas condiciones operativas."
            variant="default"
          />
          <ServiceCard
            Icon={Activity}
            title="Optimiza inversiones"
            description="Define el momento económicamente óptimo para la modernización o reemplazo de activos críticos."
            variant="default"
          />
          <ServiceCard
            Icon={EventWarning}
            title="Análisis económicos avanzados"
            description="Evaluación de TIR, VPN y CAE para diferentes horizontes económicos de inversión."
            variant="default"
          />
          <ServiceCard
            Icon={TransformInstructions}
            title="Evaluación de escenarios"
            description="Compara múltiples escenarios de operación continua vs. inversión en reemplazo o modernización."
            variant="default"
          />
        </div>
      </div>

      {/* Methodology section */}
      <div className="contentSection">
        {/* Header */}
        <div className="flex flex-row justify-between mb-8 border-b pb-4">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit">
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

        {/* Section 1 */}
        <div className="p-4 md:p-6 border-black flex flex-col md:flex-row md:gap-12 lg:gap-24 relative mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_1 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">
                Análisis RAM (Confiabilidad, Disponibilidad y Mantenibilidad)
              </h3>
            </div>

            <div className="mt-4"></div>
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

        <hr className="w-full border-t border-gray-200 my-4" />

        {/* Section 2 */}
        <div className="p-4 md:p-6 flex flex-col md:flex-row md:gap-12 lg:gap-24 relative mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_2 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">
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

        <hr className="w-full border-t border-gray-200 my-4" />

        {/* Section 3 */}
        <div className="p-4 md:p-6 flex flex-col md:flex-row md:gap-12 lg:gap-24 relative mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_3 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">Comparación de escenarios</h3>
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

        <hr className="w-full border-t border-gray-200 my-4" />

        {/* Section 4 */}
        <div className="p-4 md:p-6 flex flex-col md:flex-row md:gap-12 lg:gap-24 relative">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_4 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">
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
    </div>
  );
}

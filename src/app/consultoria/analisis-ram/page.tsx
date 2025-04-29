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
import BannerPrincipal from "@/components/BannerPrincipal";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Análisis RAM | Gestión de Confiabilidad | Reliaplant",
  description:
    "Evaluación especializada de Confiabilidad, Disponibilidad y Mantenibilidad (RAM) de sistemas industriales. Optimiza el rendimiento operativo identificando cuellos de botella y mejoras en el diseño.",
  keywords: [
    "análisis RAM",
    "confiabilidad",
    "disponibilidad",
    "mantenibilidad",
    "sistemas industriales",
    "optimización operativa",
    "reliaplant",
    "gestión de activos",
  ],
  openGraph: {
    title: "Análisis RAM | Reliaplant",
    description:
      "Evaluación RAM para mejorar la disponibilidad y confiabilidad de sistemas industriales. Identifica oportunidades de optimización y reducción de costos OPEX.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgRAM.png",
        width: 1200,
        height: 630,
        alt: "Análisis RAM",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/analisis-ram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Análisis RAM | Reliaplant",
    description:
      "Evaluación profesional de Confiabilidad, Disponibilidad y Mantenibilidad para sistemas industriales. Optimiza el rendimiento y reduce costos operativos.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgRAM.png",
        alt: "Análisis RAM",
      },
    ],
  },
  alternates: {
    canonical: "https://reliaplant-2c104.web.app/consultoria/analisis-ram",
  },
};

export default function Contacto() {
  return (
    <div>
      <BannerPrincipal
        title="Análisis RAM"
        description="Los estudios orientados a la mejora Confiabilidad son realizados de acuerdo con la madurez de la organización y la fase en la que se encuentra."
        currentPath="Análisis RAM"
        image="/assets/bgRAM.png"
      />

      {/* Introduction Section */}
      <div className="mt-12 md:mt-24 px-4 sm:px-[8vw] flex flex-col md:flex-row gap-8 md:gap-24">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light w-full md:w-1/2">
          Evaluación de la disponibilidad de tus sistemas y equipos en tiempo
          record.
        </h3>
        <div className="w-full md:w-1/2">
          <p className="text-gray60 text-sm sm:text-base">
            Conoce cómo el análisis RAM puede ayudarte a mejorar la
            confiabilidad de tus sistemas y equipos. La evaluación de la
            disponibilidad de tus sistemas y equipos te permite identificar
            áreas de mejora y optimizar el rendimiento operativo. Con el
            análisis RAM, puedes tomar decisiones informadas para aumentar la
            confiabilidad y eficiencia de tus procesos.
          </p>
          {/* <div className="mt-8 md:mt-12">
                        <button className="w-full sm:w-auto py-3 px-4 border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 font-light text-base md:text-[1.1rem] flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-8 mb-4">
                            <span>Agenda con un especialista</span>
                            <Headset size={20} className="text-blue60" />
                        </button>
                    </div> */}
        </div>
      </div>

      {/* Info Box */}
      <div className="pt-8 md:pt-16 px-4 sm:px-[8vw]">
        <div className="bg-gray10 p-4 border text-sm sm:text-base">
          <p className="mb-0">
            <strong>
              El 80% de los costos en el ciclo de vida del proyecto de activos
              son OPEX.{" "}
            </strong>
            El analisis ram permite identificar cuellos de botella que afectan
            la disponibilidad y mantenibilidad, para reducir los costos OPEX en
            el futuro, resultando en un costo de ciclo de vida total menor.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-[8vw] mt-12 md:mt-24">
        <ServiceCard
          title="Evalúa instalaciones completas"
          description="Modela sistemas complejos hasta instalaciones que se encuentran en fase de diseño."
          Icon={Industry}
          variant="default"
        />
        <ServiceCard
          title="Aumenta la Disponibilidad"
          description="Analiza la disponibilidad de tus sistemas y equipos para mejorar la eficiencia operativa."
          Icon={Activity}
          variant="default"
        />
        <ServiceCard
          title="Identifica cuellos de botella"
          description="Detecta y elimina los cuellos de botella en tus procesos para optimizar el rendimiento."
          Icon={EventWarning}
          variant="default"
        />
        <ServiceCard
          title="Mejora el diseño"
          description="Implementa mejoras en el diseño de tus sistemas para aumentar la confiabilidad y eficiencia."
          Icon={TransformInstructions}
          variant="default"
        />
      </div>

      {/* Process Section Header */}
      <div className="mt-16 md:mt-24 px-4 sm:px-[8vw] border-b top-0 z-20 bg-white">
        <div className="flex flex-col sm:flex-row gap-4 justify-between py-2">
          <div className="flex flex-col justify-end">
            <h2 className="text-xl md:text-2xl border-blue60 border-b-4 w-fit">
              Proceso del Análisis RAM
            </h2>
          </div>
          <div className="hidden sm:block">
            <AbrirFormContacto
              buttonText="¿Dudas?"
              icon={null}
              // icon={<Headset size={20} className="text-white" />}
              buttonColor="bg-gray90"
            />
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="px-4 sm:px-[8vw]">
        {/* Step 1 */}
        <div className="p-4 sm:p-8 mb-8 md:mb-16 border-black flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_1 size={32} className="text-black md:size-[40px]" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Revisión de la Información
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="text-base sm:text-lg md:text-[1.15vw] leading-relaxed md:leading-[136%]">
              En esta fase se recopila y analiza la documentación esencial para
              comprender en profundidad el sistema a evaluar. Se incluyen
              actividades como:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm sm:text-base">
              <li>
                <strong>Revisión de Diagramas y Flujos</strong>: Se examinan los
                diagramas de flujo de procesos (PFD) y los diagramas de tuberías
                e instrumentación (DTI).
              </li>
              <li>
                <strong>
                  Análisis de Hojas de Datos y Filosofía de Operación
                </strong>
                : Se revisan las hojas de datos de los equipos y se estudia la
                filosofía de operación.
              </li>
              <li>
                <strong>Consolidación de Documentos</strong>: Se agrupa toda la
                documentación de soporte necesaria para asegurar la integridad
                del análisis.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgRAM1.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>

        {/* Step 2 */}
        <div className="p-4 sm:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_2 size={32} className="text-black md:size-[40px]" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Definición de Criterios y Construcción del Modelo RBD
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="text-base sm:text-lg md:text-[1.15vw] leading-relaxed md:leading-[136%]">
              Una vez recopilada la información, se definen los parámetros y
              criterios que determinarán la disponibilidad operativa del
              sistema:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm sm:text-base">
              <li>
                <strong>Establecimiento de Parámetros y Umbrales</strong>: Se
                determinan los criterios de disponibilidad basados en normativas
                y fuentes técnicas.
              </li>
              <li>
                <strong>Construcción del Modelo RBD</strong>: Se desarrolla un
                diagrama de bloques de confiabilidad que representa la
                estructura del sistema.
              </li>
              <li>
                <strong>Fundamentación Técnica</strong>: Los criterios se
                respaldan en fuentes reconocidas como manuales técnicos y datos
                históricos.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgRAM2.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>

        {/* Step 3 */}
        <div className="p-4 sm:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_3 size={32} className="text-black md:size-[40px]" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Caracterización de los Equipos
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="text-base sm:text-lg md:text-[1.15vw] leading-relaxed md:leading-[136%]">
              En esta etapa se realiza una caracterización detallada de cada uno
              de los equipos que componen el sistema, lo que es fundamental para
              alimentar el modelo RBD con datos realistas:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm sm:text-base">
              <li>
                <strong>Recopilación de Valores TTF y TTR</strong>: Se recaban
                los valores de Tiempo Hasta Fallo y Tiempo de Reparación.
              </li>
              <li>
                <strong>Selección de Distribuciones Probabilísticas</strong>: Se
                identifican las distribuciones que mejor se ajustan al
                comportamiento de cada equipo.
              </li>
              <li>
                <strong>Ajuste al Contexto Operativo</strong>: La
                caracterización considera las condiciones específicas de
                operación.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgRAM3.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>

        {/* Step 4 */}
        <div className="p-4 sm:p-8 border-t mb-8 md:mb-16 border-black flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center relative">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_4 size={32} className="text-black md:size-[40px]" />
              </div>
              <h3 className="font-normal text-xl md:text-2xl">
                Simulación y Análisis de Resultados
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="text-base sm:text-lg md:text-[1.15vw] leading-relaxed md:leading-[136%]">
              Con el modelo RBD construido y los equipos caracterizados, se
              procede a simular el comportamiento del sistema a lo largo de un
              horizonte operativo determinado:
            </p>
            <ul className="list-disc mt-4 leading-relaxed md:leading-[136%] text-sm sm:text-base">
              <li>
                <strong>Simulación Estocástica (Monte Carlo)</strong>: Se
                ejecutan múltiples corridas para evaluar la disponibilidad bajo
                diferentes escenarios.
              </li>
              <li>
                <strong>Análisis de Indicadores Clave</strong>: Se examinan
                indicadores como disponibilidad global, MTBDE, MDT y otros
                parámetros relevantes.
              </li>
              <li>
                <strong>Propuestas de Mejora</strong>: Se plantean alternativas
                para optimizar la mantenibilidad y el diseño del sistema.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] md:h-[45vh] w-full md:w-1/2 bg-[url('/assets/bgRAM4.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
      </div>

      {/* Final CTA Section */}
      {/* <div className="px-4 sm:px-[4vw] bg-gradient-to-l from-blue60 to-gray10">
                <div className="flex flex-col md:flex-row bg-gray20 justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
                    <div className="p-4 sm:p-[4vw] w-full md:w-[40vw]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">Confiabilidad desde el diseño</h3>
                        <h4 className="mt-4 md:mt-8 text-lg sm:text-xl md:text-2xl font-normal">El 90% de la confiabilidad esta comprometido desde antes de la fase O&M. Un RAM es garantizar confiabilidad desde el diseño.
                        </h4>
                        <div className="mt-6 md:mt-12">
                            <button className="w-full sm:w-auto py-3 px-4 font-light text-base md:text-[1.1rem] flex flex-row items-center justify-center sm:justify-start gap-4 md:gap-8 mb-4 bg-gray90 text-white">
                                <span>Agenda con un especialista</span>
                                <Headset size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-[40vh] md:h-[29vw] w-full md:w-[50vw] bg-[url('/assets/consultor2.jpg')] bg-cover bg-center transform -scale-x-100">
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

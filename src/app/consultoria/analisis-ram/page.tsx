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

      {/* Main Content Section */}
      <div className="contentSection">
        {/* Introduction */}
        <div className="mb-8">
          <h2>
            Evaluación de la disponibilidad de tus sistemas y equipos en tiempo
            record.
          </h2>
          <div>
            <p className="text-gray60">
              Conoce cómo el análisis RAM puede ayudarte a mejorar la
              confiabilidad de tus sistemas y equipos. La evaluación de la
              disponibilidad de tus sistemas y equipos te permite identificar
              áreas de mejora y optimizar el rendimiento operativo. Con el
              análisis RAM, puedes tomar decisiones informadas para aumentar la
              confiabilidad y eficiencia de tus procesos.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-12">
          <div className="bg-gray10 p-4 border">
            <p className="mb-0">
              <strong>
                El 80% de los costos en el ciclo de vida del proyecto de activos
                son OPEX.{" "}
              </strong>
              El analisis ram permite identificar cuellos de botella que afectan
              la disponibilidad y mantenibilidad, para reducir los costos OPEX
              en el futuro, resultando en un costo de ciclo de vida total menor.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>

      {/* Process Section */}
      <div className="contentSection">
        {/* Header */}
        <div className="border-b mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between py-2">
            <div>
              <h2 className="border-blue60 border-b-4 w-fit">
                Proceso del Análisis RAM
              </h2>
            </div>
            <div className="hidden sm:block">
              <AbrirFormContacto
                buttonText="¿Dudas?"
                icon={null}
                buttonColor="bg-gray90"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        {/* Step 1 */}
        <div className="p-4 sm:p-8 mb-4 flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_1 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">Revisión de la Información</h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="leading-relaxed">
              En esta fase se recopila y analiza la documentación esencial para
              comprender en profundidad el sistema a evaluar. Se incluyen
              actividades como:
            </p>
            <ul className="list-disc mt-4 leading-relaxed text-sm sm:text-base">
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
        <div className="p-4 sm:p-8 mb-4 border-t border-gray-200 flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_2 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">
                Definición de Criterios y Construcción del Modelo RBD
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="leading-relaxed">
              Una vez recopilada la información, se definen los parámetros y
              criterios que determinarán la disponibilidad operativa del
              sistema:
            </p>
            <ul className="list-disc mt-4 leading-relaxed text-sm sm:text-base">
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
        <div className="p-4 sm:p-8 mb-4 border-t border-gray-200 flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_3 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">Caracterización de los Equipos</h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="leading-relaxed">
              En esta etapa se realiza una caracterización detallada de cada uno
              de los equipos que componen el sistema, lo que es fundamental para
              alimentar el modelo RBD con datos realistas:
            </p>
            <ul className="list-disc mt-4 leading-relaxed text-sm sm:text-base">
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
        <div className="p-4 sm:p-8 mb-4 border-t border-gray-200 flex flex-col md:flex-row gap-8 md:gap-24 relative">
          <div className="w-full md:w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 bg-gray10 w-fit h-fit">
                <Number_4 size={32} className="text-black" />
              </div>
              <h3 className="font-normal">
                Simulación y Análisis de Resultados
              </h3>
            </div>
            <div className="mt-4 md:mt-8"></div>
            <p className="leading-relaxed">
              Con el modelo RBD construido y los equipos caracterizados, se
              procede a simular el comportamiento del sistema a lo largo de un
              horizonte operativo determinado:
            </p>
            <ul className="list-disc mt-4 leading-relaxed text-sm sm:text-base">
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
    </div>
  );
}

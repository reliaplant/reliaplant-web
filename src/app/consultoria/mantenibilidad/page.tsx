export const dynamic = "force-static";

import { Metadata } from "next";
import {
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  QuestionAnswering,
  IbmKnowledgeCatalogPremium,
  Tuning,
} from "@carbon/icons-react";
import { MdMoney, MdBuild, MdAccessibility } from "react-icons/md";
import { Clock, ShieldCheck } from "lucide-react";
import BannerPrincipal from "@/components/BannerPrincipal";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Análisis de Mantenibilidad | Reliaplant",
  description:
    "Análisis de Mantenibilidad y Manejo Mecánico (MHA). Optimiza los tiempos de intervención y mejora la seguridad operativa a través de estudios detallados de accesibilidad y maniobras.",
  keywords: [
    "análisis de mantenibilidad",
    "MHA",
    "manejo mecánico",
    "mantenimiento industrial",
    "accesibilidad",
    "maniobras",
    "izaje",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title: "Análisis de Mantenibilidad (MHA) | Reliaplant",
    description:
      "Mejora la mantenibilidad de tus activos industriales con estudios MHA detallados. Reduce tiempos de intervención y optimiza la seguridad operativa.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgMantenibilidad.jpg",
        width: 1200,
        height: 630,
        alt: "Análisis de Mantenibilidad Industrial",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/mantenibilidad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Análisis de Mantenibilidad (MHA) | Reliaplant",
    description:
      "Optimiza la mantenibilidad de tus activos industriales con estudios profesionales de accesibilidad y manejo mecánico.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgMantenibilidad.jpg",
        alt: "Análisis de Mantenibilidad Industrial",
      },
    ],
  },
  alternates: {
    canonical: "https://reliaplant-2c104.web.app/consultoria/mantenibilidad",
  },
};

export default function MantenibilidadPage() {
  return (
    <div>
      <BannerPrincipal
        title="Análisis de Mantenibilidad (MHA)"
        description="La mantenibilidad de tus activos industriales se convierte en un factor crítico para garantizar la continuidad operacional y la rentabilidad de tus instalaciones. Combinamos metodologías avanzadas de Análisis de Mantenibilidad y Manejo Mecánico (MHA) con un enfoque sistemático desde el diseño conceptual hasta la operación diaria."
        currentPath="Análisis de Mantenibilidad"
        image="/assets/bgMantenibilidad.jpg"
      />

      <section className="contentSection">
        <h2>Mayor Disponibilidad</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ServiceCard
                Icon={Clock}
                title="Menos Tiempos Fuera de Servicio"
                description="Al abordar anticipadamente problemas de accesibilidad, maniobra y sustitución de componentes, el MHA disminuye los tiempos de paro correctivos y preventivos."
                variant="default"
              />
              <ServiceCard
                Icon={ShieldCheck}
                title="Aumento de Seguridad y Productividad"
                description="El análisis contempla ergonomía, riesgos asociados al manejo mecánico y selección de facilidades de izaje apropiadas para proteger equipos y optimizar eficiencia."
                variant="default"
              />
              <ServiceCard
                Icon={IbmKnowledgeCatalogPremium}
                title="Planificación Precisa de Recursos"
                description="Identificamos métodos de izaje adecuados y rutas seguras para remover e instalar grandes componentes, optimizando costos y reduciendo improvisaciones."
                variant="default"
              />
              <ServiceCard
                Icon={Tuning}
                title="Mejor Toma de Decisiones"
                description="Un MHS detallado puede integrarse en etapas de diseño o rediseño, proponiendo instalaciones que simplifiquen trabajos futuros de mantenimiento."
                variant="default"
              />
            </div>
          </div>

          <div className="w-full lg:w-[35%] ml-auto">
            <h2>Lograrás:</h2>
            <div className="leading-relaxed space-y-4">
              <p>
                Identificar desafíos técnicos, logísticos y de seguridad que
                puedan impactar la ejecución de los mantenimientos.
              </p>
              <p>
                Proponer soluciones que reduzcan al mínimo los tiempos de
                intervención, faciliten el acceso a los equipos y mejoren la
                disponibilidad de la planta.
              </p>
              <p>
                Optimizar la planificación de recursos y herramientas mediante
                un Material Handling Study (MHS) que determine métodos de izaje
                adecuados y rutas seguras.
              </p>
              <p>
                Mejorar la toma de decisiones en ingeniería y diseño (FEED/EPC)
                al integrar consideraciones de mantenibilidad desde etapas
                tempranas.
              </p>
              <p>
                Estandarizar soluciones de izaje y acceso, evitando
                improvisaciones en el día a día y disminuyendo costos logísticos
                y riesgos.
              </p>
              <p>
                Diseñar planes de maniobra adecuados y minimizar riesgos
                ergonómicos, incorporando metodologías y normas internacionales.
              </p>
              <p>
                Complementar otras metodologías de confiabilidad como Análisis
                RAM y RCM para una visión holística de la operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray20">
          <div className="flex flex-col p-8">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              30%
            </h2>
            <p className="mt-2 text-gray80">
              reducción promedio en tiempos de mantenimiento al aplicar las
              recomendaciones de un análisis de mantenibilidad.
            </p>
          </div>
          <div className="flex flex-col p-8">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              45%
            </h2>
            <p className="mt-2 text-gray80">
              de las intervenciones de mantenimiento presentan problemas de
              accesibilidad que podrían ser resueltos con un análisis MHA.
            </p>
          </div>
          <div className="flex flex-col p-8">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              25%
            </h2>
            <p className="mt-2 text-gray80">
              de incremento en seguridad operativa al implementar procedimientos
              sistemáticos de manejo mecánico y izaje.
            </p>
          </div>
          <div className="flex flex-col p-8">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              3x
            </h2>
            <p className="mt-2 text-gray80">
              de retorno sobre la inversión al integrar análisis de
              mantenibilidad en las fases tempranas de diseño (FEED).
            </p>
          </div>
        </div>
        <div className="border-t-2 bg-gray20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-8">
              <h2 className="text-lg sm:text-xl font-normal text-gray80 text-center mb-6">
                Distribución de factores que afectan la mantenibilidad
              </h2>
              <div className="w-full mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    38.5%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Accesibilidad
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "38.5%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    25.7%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Manejo mecánico
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "25.7%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    18.3%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Ergonomía
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "18.3%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    12.4%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Documentación
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "12.4%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">5.1%</span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Otros factores
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "5.1%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <h2 className="text-lg sm:text-xl font-normal text-gray80 text-center mb-6">
                Impacto de problemas de accesibilidad y manejo
              </h2>
              <div className="w-full mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    42.3%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Aumento de tiempos
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "42.3%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    28.7%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Riesgos de seguridad
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "28.7%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    15.4%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Costos adicionales
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "15.4%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">9.8%</span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Daños a equipos
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "9.8%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">3.8%</span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Otros impactos
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "3.8%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <h2 className="text-lg sm:text-xl font-normal text-gray80 text-center mb-6">
                Beneficios del estudio MHA/MHS
              </h2>
              <div className="w-full mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    36.2%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Reducción de MTTR
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "36.2%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    28.4%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Mejora en seguridad
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "28.4%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    18.7%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Reducción de costos
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "18.7%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">
                    12.5%
                  </span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Planificación efectiva
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "12.5%" }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <span className="text-gray70 text-sm sm:text-base">4.2%</span>
                  <span className="text-gray70 text-sm sm:text-base">
                    Otros beneficios
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-3 sm:h-4">
                  <div
                    className="bg-blue-500 h-3 sm:h-4"
                    style={{ width: "4.2%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="border-b bg-white">
          <div className="flex flex-col sm:flex-row gap-4 justify-between py-4">
            <h2 className="border-blue60 border-b-4 w-fit">
              Proceso del Análisis de Mantenibilidad
            </h2>
          </div>
        </div>

        <div>
          <div className="border-gray-200 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="w-full lg:w-1/2">
                <h3 className="flex items-center">
                  <span className="p-2 bg-gray10 shrink-0">
                    <Number_1 size={40} className="text-black" />
                  </span>
                  <span className="ml-4">
                    Identificación de Activos y Recolección de Datos
                  </span>
                </h3>
                <p className="leading-relaxed mt-4">
                  En esta primera fase, recopilamos y validamos toda la
                  información necesaria para el estudio:
                </p>
                <div className="mt-4 leading-relaxed">
                  <strong>Documentación técnica</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Revisamos P&IDs, planos 3D, taxonomías de equipo,
                      históricos de fallas y tasas de demanda de repuestos.
                    </li>
                    <li>
                      Manuales de operación y mantenimiento del fabricante.
                    </li>
                    <li>Planos de diseño y diagramas de sistemas y equipos.</li>
                    <li>Procedimientos de mantenimiento existentes.</li>
                    <li>
                      Historial de modificaciones y actualizaciones técnicas.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 leading-relaxed">
                  <strong>Asset Register</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Integramos información clave en un Asset Register que
                      servirá de base para los estudios de mantenibilidad y
                      manejo mecánico.
                    </li>
                    <li>
                      Establecemos una estructura taxonómica para evaluar
                      sistemas, subsistemas y componentes.
                    </li>
                    <li>
                      Identificamos componentes críticos que requieren manejo
                      mecánico especial.
                    </li>
                    <li>
                      Documentamos pesos, dimensiones y frecuencias de
                      intervención para componentes críticos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="w-full lg:w-1/2">
                <h3 className="flex items-center">
                  <span className="p-2 bg-gray10 shrink-0">
                    <Number_2 size={40} className="text-black" />
                  </span>
                  <span className="ml-4">
                    Criterios y Alcance de Análisis (Screening y Categorización)
                  </span>
                </h3>
                <p className="leading-relaxed mt-4">
                  Con la información recopilada, definimos criterios claros para
                  el análisis de mantenibilidad:
                </p>
                <div className="mt-4 leading-relaxed">
                  <strong>Selección de equipos a estudiar</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Definimos los criterios de selección de equipos
                      considerando pesos, dimensiones, frecuencia de
                      mantenimiento y criticidad.
                    </li>
                    <li>
                      Priorizamos componentes según impacto en la producción y
                      complejidad de intervención.
                    </li>
                    <li>
                      Identificamos equipos con requisitos especiales de
                      mantenibilidad o izaje.
                    </li>
                    <li>
                      Categorizamos los activos según su criticidad para la
                      operación.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 leading-relaxed">
                  <strong>Documentación de restricciones</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Documentamos limitaciones de espacio en instalaciones
                      existentes.
                    </li>
                    <li>
                      Identificamos tipos de equipos móviles permitidos en
                      planta.
                    </li>
                    <li>
                      Catalogamos condiciones de seguridad específicas del
                      sitio.
                    </li>
                    <li>
                      Recopilamos normas internas y regulaciones aplicables.
                    </li>
                  </ul>
                </div>
                <div className="bg-gray10 p-4">
                  <p className="leading-relaxed mt-4">
                    El proceso de screening y categorización permite enfocar los
                    esfuerzos en aquellos componentes que realmente son críticos
                    y que presentan mayores desafíos para el mantenimiento.
                  </p>
                </div>
              </div>
              <div className="h-[30vh] sm:h-[45vh] z-10 w-full lg:w-1/2 bg-[url('/assets/bgMantenibilidad3.jpg')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="w-full lg:w-1/2">
                <h3 className="flex items-center">
                  <span className="p-2 bg-gray10 shrink-0">
                    <Number_3 size={40} className="text-black" />
                  </span>
                  <span className="ml-4">
                    Evaluación de Facilidad de Mantenimiento y Análisis Mecánico
                  </span>
                </h3>
                <p className="leading-relaxed mt-4">
                  En esta fase crucial, realizamos un análisis detallado de la
                  mantenibilidad de los equipos seleccionados:
                </p>
                <div className="mt-4 leading-relaxed">
                  <strong>Checklist de Mantenibilidad</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Analizamos accesibilidad a puntos de inspección y
                      componentes críticos.
                    </li>
                    <li>
                      Evaluamos pasos para desensamble y secuencias de
                      desmontaje.
                    </li>
                    <li>
                      Determinamos el espacio disponible para maniobras de
                      mantenimiento.
                    </li>
                    <li>
                      Identificamos necesidades de herramientas especiales (como
                      spreader beams).
                    </li>
                    <li>
                      Incluimos aspectos HSE, como riesgos ambientales y
                      manipulación de fluidos tóxicos.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 leading-relaxed">
                  <strong>Mechanical Handling Study (MHS)</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Determinamos qué facilidades de elevación son necesarias:
                      polipastos, monorrieles, grúas fijas o móviles.
                    </li>
                    <li>
                      Ubicamos posibles rutas de izaje y evaluamos condiciones
                      estructurales.
                    </li>
                    <li>
                      Analizamos la capacidad de carga de vigas, resistencia de
                      suelos y accesos.
                    </li>
                    <li>
                      Evaluamos la disponibilidad de áreas para almacenamiento
                      temporal (laydown areas).
                    </li>
                    <li>
                      Diseñamos procedimientos para maniobras seguras con
                      componentes pesados.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[30vh] sm:h-[45vh] z-10 w-full lg:w-1/2 bg-[url('/assets/bgMantenibilidad2.png')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="w-full lg:w-1/2">
                <h3 className="flex items-center">
                  <span className="p-2 bg-gray10 shrink-0">
                    <Number_4 size={40} className="text-black" />
                  </span>
                  <span className="ml-4">
                    Detección de Problemas y Recomendaciones de Diseño
                  </span>
                </h3>
                <p className="leading-relaxed mt-4">
                  Tras el análisis exhaustivo, identificamos problemas y
                  desarrollamos soluciones concretas:
                </p>
                <div className="mt-4 leading-relaxed">
                  <strong>
                    Identificación de issues y acciones mitigadoras
                  </strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      Elaboramos una lista de inconvenientes que dificultan el
                      mantenimiento (espacios reducidos, pesos excesivos, etc.).
                    </li>
                    <li>
                      Detectamos riesgos de "object drop" sobre áreas sensibles
                      de la planta.
                    </li>
                    <li>
                      Proponemos medidas correctivas como instalación de
                      padeyes, grúas fijas o rediseño de plataformas.
                    </li>
                    <li>
                      Optimizamos rutas de acceso para intervenciones más
                      eficientes.
                    </li>
                  </ul>
                </div>
                <div className="mt-4 leading-relaxed">
                  <strong>Deliverables y resultados esperados</strong>
                  <br /> <br />
                  <ul className="list-disc">
                    <li>
                      <strong>
                        Informe Detallado de Mantenibilidad (MHA/MHS):
                      </strong>{" "}
                      Listado de equipos, problemas potenciales y layouts
                      esquemáticos.
                    </li>
                    <li>
                      <strong>Checklist de Revisión:</strong> Documentación de
                      puntos de inspección, necesidades de desmontaje y equipo
                      especializado.
                    </li>
                    <li>
                      <strong>Sugerencias de Diseño:</strong> Especificaciones
                      técnicas para permanently installed lifting facilities.
                    </li>
                    <li>
                      <strong>Material de Capacitación:</strong> Para personal
                      de operaciones, mantenimiento y seguridad.
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed mt-4 p-4 bg-gray10">
                  Documentamos pasos de ejecución recomendados para cada
                  mantenimiento, facilitando su inclusión en sistemas CMMS como
                  SAP PM o Maximo, y entregamos reportes claros con esquemas y
                  planillas que ilustran cómo remover e instalar componentes de
                  forma segura y eficiente.
                </p>
              </div>
              <div className="h-[30vh] sm:h-[45vh] z-10 w-full lg:w-1/2 bg-[url('/assets/bgMantenibilidad4.png')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

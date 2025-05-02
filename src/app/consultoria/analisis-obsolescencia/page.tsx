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
  Book,
} from "@carbon/icons-react";
import { MdMoney, MdScience } from "react-icons/md";
import { AlertOctagon } from "lucide-react";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import BannerPrincipal from "@/components/BannerPrincipal";

export const metadata: Metadata = {
  title: "Análisis de Obsolescencia | Gestión de Mantenimiento | Reliaplant",
  description:
    "Servicio especializado de análisis de obsolescencia de equipos industriales. Evaluamos el ciclo de vida de tus activos críticos y desarrollamos estrategias proactivas y reactivas para gestionar la obsolescencia.",
  keywords: [
    "análisis de obsolescencia",
    "gestión de mantenimiento",
    "ciclo de vida de activos",
    "obsolescencia industrial",
    "mantenimiento industrial",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title: "Análisis de Obsolescencia | Reliaplant",
    description:
      "Análisis profesional de obsolescencia de equipos industriales: evaluación de riesgos, estrategias proactivas y reactivas para mantener la continuidad operativa.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgObsolescencia.jpg",
        width: 1200,
        height: 630,
        alt: "Análisis de Obsolescencia Industrial",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/analisis-obsolescencia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Análisis de Obsolescencia | Reliaplant",
    description:
      "Análisis profesional de obsolescencia para equipos industriales. Optimiza la gestión del ciclo de vida de tus activos críticos.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgObsolescencia.jpg",
        alt: "Análisis de Obsolescencia Industrial",
      },
    ],
  },
  alternates: {
    canonical:
      "https://reliaplant-2c104.web.app/consultoria/analisis-obsolescencia",
  },
};

export default function Contacto() {
  return (
    <div>
      <BannerPrincipal
        title="Análisis de Obsolescencia"
        description="Determina cuánto tiempo resta antes de que tus activos críticos entren en la fase de obsolescencia y propon un plan de acción."
        currentPath="Análisis de Obsolescencia"
        image="/assets/bgObsolescencia.jpg"
      />

      <div className="contentSection">
        <div className="bg-gray20 text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-center gap-4">
          <div className="flex justify-center w-full md:w-auto">
            <AlertOctagon size={32} className="text-black" />
          </div>
          <p className="mb-0">
            En el marco de este servicio, y acorde con la definición del
            estándar IEC, se entiende por <strong>obsolescencia</strong> el
            lapso de tiempo que inicia con la{" "}
            <strong>"notificación de retiro"</strong> de un item (incluyendo sus
            repuestos y servicios), de parte del{" "}
            <strong>fabricante original (OEM / OCM)</strong>, hasta el momento
            en el cual es retirado (descontinuado) por completo del mercado.
          </p>
        </div>
      </div>

      <div className="contentSection flex flex-col md:flex-row gap-8 md:gap-24">
        <h2 className="w-full md:w-1/2">
          Define estrategias proactivas y reactivas
        </h2>
        <div className="w-full md:w-1/2">
          <p className="text-gray60">
            Conoce cómo el análisis RAM puede ayudarte a mejorar la
            confiabilidad de tus sistemas y equipos. La evaluación de la
            disponibilidad de tus sistemas y equipos te permite identificar
            áreas de mejora y optimizar el rendimiento operativo. Con el
            análisis RAM, puedes tomar decisiones informadas para aumentar la
            confiabilidad y eficiencia de tus procesos.
          </p>
          <div className="mt-8">
            <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 flex flex-row items-center gap-4 md:gap-8 mb-4 px-6 py-3">
              <span>Agenda con un especialista</span>
              <Headset size={20} className="text-blue60" />
            </button>
          </div>
        </div>
      </div>

      <div className="contentSection flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-8 bg-gray20 flex flex-col mb-4 md:mb-0">
          <h2 className="text-black">Categorías de Obsolescencia</h2>
        </div>
        <div className="p-4 md:p-6 pb-0 bg-gray10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray20 p-4 flex items-center">
              Obsolescencia funcional
            </div>
            <div className="bg-gray20 p-4 flex items-center">
              De forma y fijación
            </div>
            <div className="bg-gray20 p-4 flex items-center">De materiales</div>
            <div className="bg-gray20 p-4 flex items-center">
              De seguridad, higiene y/o ambiente
            </div>
            <div className="bg-gray20 p-4 flex items-center">
              De software, conectividad, formato, transmisión y almacenamiento
              de datos
            </div>
            <div className="bg-gray20 p-4 flex items-center">
              Por estándares y legislaciones
            </div>
          </div>

          <p className="mt-4">
            En el caso de activos físicos, los mismos pueden ser agrupados o
            subdivididos adicionalmente de acuerdo con la disciplina o área
            técnica que lo atiende, es decir: equipos estáticos, equipos
            dinámicos, electricidad, instrumentación y control, etc. Cada
            disciplina conserva sus particularidades a la hora de evaluar el
            nivel de obsolescencia, su impacto y la estrategia a aplicar para
            suplantar o mitigar la potencial ausencia del activo.
          </p>
          <p className="mt-4 text-gray60 font-light">
            La evaluación de la obsolescencia se centra en una evaluación de
            riesgo (Risk Based Obsolescence) que combina la probabilidad de
            carencia de un item (obsolescencia) con el impacto que causaría el
            no tenerlo.
          </p>
        </div>
      </div>

      <div className="contentSection">
        <div className="flex flex-row gap-4 justify-between border-b mb-8">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit">
              Proceso del Análisis de Obsolescencia
            </h2>
          </div>
        </div>

        <div className="bg-gray10">
          <div className="h-[40vh] md:h-[60vh] w-full mb-8">
            <div className="h-full w-full bg-[url('/assets/bgObsolescencia.png')] bg-contain bg-no-repeat bg-center"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                1
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Planificación detallada
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>Definición de los objetivos y actividades del estudio.</li>
                <li>
                  Colección y análisis de datos e información técnica necesaria
                  para la evaluación.
                </li>
                <li>
                  Establecimiento de un plan de trabajo con plazos y
                  responsables claros.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                2
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Revisión de la lista taxonómica
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Clasificación de sistemas, equipos y componentes según su
                  disciplina o área técnica (equipos estáticos, dinámicos,
                  electricidad, instrumentación y control, etc.).
                </li>
                <li>
                  Validación de la estructura taxonómica, consistencia de los
                  datos y completitud de los campos.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                3
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Visita de campo
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>Inspección visual de la instalación y los equipos.</li>
                <li>
                  Reuniones con el personal de ingeniería, operación,
                  mantenimiento, procura y almacenes (inventario).
                </li>
                <li>
                  Identificación de oportunidades de mejora y posibles riesgos
                  asociados a la obsolescencia.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                4
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Diseño y validación de la matriz de riesgo
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Selección de los parámetros para calcular la probabilidad de
                  obsolescencia y el impacto.
                </li>
                <li>
                  Definición de criterios y puntajes para la matriz de
                  criticidad según cada disciplina (equipos estáticos,
                  rotativos, electricidad, I&C, etc.).
                </li>
                <li>
                  Validación de la matriz a través de mesas de trabajo con
                  personal clave.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                5
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Evaluación del riesgo a nivel de sistemas y componentes
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Análisis de riesgo para sistemas principales y auxiliares.
                </li>
                <li>
                  Evaluación desglosada de los sistemas "muy críticos" y
                  "críticos" para determinar la prioridad de las acciones.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                6
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Análisis de demanda futura de equipos y componentes
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Proyección de la demanda basada en el plan de mantenimiento
                  programado y el pronóstico de fallas.
                </li>
                <li>
                  Comparación con la existencia actual en almacén para detectar
                  brechas y necesidades de ajuste en el inventario.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                7
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Determinación de la etapa del ciclo de vida
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Consultas a fabricantes (OEMs y OCMs) para conocer la
                  disponibilidad de soporte y repuestos.
                </li>
                <li>
                  Referencias a tiempos típicos de vida útil y reportes técnicos
                  de la industria.
                </li>
                <li>
                  Evaluación de la compatibilidad y la estandarización
                  tecnológica.
                </li>
                <li>
                  Opinión de expertos para casos especiales o tecnologías
                  emergentes.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                8
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Estimación del impacto en producción
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Análisis de la relación funcional entre equipos (arreglos en
                  serie, paralelo, etc.) y la existencia de respaldos.
                </li>
                <li>
                  Estimaciones basadas en métodos analíticos determinísticos
                  para calcular la pérdida de producción en caso de
                  obsolescencia.
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8">
              <div className="md:text-5xl bg-gradient-to-b from-blue60 to-gray40 text-transparent bg-clip-text pb-2 md:pb-4 border-b-2 border-black">
                9
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Estrategias de gestión de obsolescencia
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Gestión proactiva:
                  <ul className="list-disc ml-4 mt-2 text-sm">
                    <li>
                      Programas de refacción preventiva y acuerdos con
                      proveedores para activos "muy críticos" y "críticos".
                    </li>
                    <li>
                      Migración tecnológica y estandarización para minimizar
                      riesgos.
                    </li>
                  </ul>
                </li>
                <li>
                  Gestión reactiva:
                  <ul className="list-disc ml-4 mt-2 text-sm">
                    <li>
                      Planes de contingencia y stock de seguridad para activos
                      de criticidad "media" o "baja".
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-8 bg-gray20 p-4 pt-0">
              <div className="pt-2 md:text-5xl bg-gradient-to-b from-blue60 to-gray100 text-transparent bg-clip-text pb-2 border-b-2 border-black">
                #
              </div>
              <h4 className="text-lg font-bold mt-2 mb-4 md:mb-8">
                Entregables
              </h4>
              <ul className="list-disc ml-4 mt-2 text-sm">
                <li>
                  Informe técnico: Incluye el análisis de riesgo, resultados y
                  recomendaciones específicas.
                </li>
                <li>
                  Lista de verificación (checklist): Herramienta para monitorear
                  la implementación de las estrategias recomendadas.
                </li>
                <li>
                  Matriz de evaluación: En formato Excel, con criterios claros
                  para actualizar el estado de los activos en el futuro.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  TreeView,
  DataVolume,
  SyncSettings,
  Inspection,
} from "@carbon/icons-react";
import { MdMoney, MdScience } from "react-icons/md";
import { Binoculars, Compass } from "lucide-react";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata: Metadata = {
  title: "Registro de Activos en CMMS | Gestión de Mantenimiento | Reliaplant",
  description:
    "Servicio especializado de construcción del registro de activos en CMMS. Optimiza la gestión de mantenimiento con estructuras organizadas, taxonomía adecuada y datos maestros completos para cada activo industrial.",
  keywords: [
    "registro de activos",
    "CMMS",
    "gestión de mantenimiento",
    "asset register",
    "taxonomía de activos",
    "datos maestros",
    "mantenimiento industrial",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title: "Registro de Activos en CMMS | Reliaplant",
    description:
      "Construcción del registro de activos para mantenimiento de clase mundial: estructura organizada, facilidad para análisis y gestión eficiente por criticidad.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgAssetRegister.png",
        width: 1200,
        height: 630,
        alt: "Registro de Activos en CMMS",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/registro-activos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Registro de Activos en CMMS | Reliaplant",
    description:
      "Construcción profesional del registro de activos para sistemas CMMS. Mejora la confiabilidad y eficiencia del mantenimiento industrial.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgAssetRegister.png",
        alt: "Registro de Activos en CMMS",
      },
    ],
  },
  alternates: {
    canonical: "https://reliaplant-2c104.web.app/consultoria/registro-activos",
  },
};

export default function Contacto() {
  return (
    <div>
      {/* Header */}
      <div className="">
        <div className="bg-gray-100 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
          {/* Texto */}
          <div className="relative z-10 text-whites w-full md:w-[50vw] p-4 sm:p-6 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
            <div>
              <div className="flex flex-row flex-wrap">
                <span className="text-blue60 font-light mb-4">
                  <a href="/" className="hover:underline">
                    Inicio
                  </a>{" "}
                  <span className="mx-2 text-gray60">{"/"}</span>
                  <a href="/consultoria" className="hover:underline">
                    Consultoria
                  </a>{" "}
                  <span className="mx-2 text-gray60">{"/"}</span>
                  Registro de Activos
                </span>
              </div>
              <h1 className="">Construcción del Registro de Activos en CMMS</h1>
              <h4 className="">
                Logra que toda la información en el CMMS asociada a los activos
                esté correcta, completa y alineada con las mejores prácticas de
                la industria. Desde la recolección de datos en campo, la
                definición de estructuras, construcción de la taxonomía y carga
                en CMMS.
              </h4>
            </div>
            <div className="mt-8 md:mt-6">
              <AbrirFormContacto
                buttonText="Habla con un especialista"
                icon={<Headset size={20} className="text-white" />}
                buttonColor="bg-gray90"
              />
            </div>
          </div>
          {/* Imagen */}
          <div className="relative md:absolute md:right-0 h-64 md:h-full w-full md:w-[50vw] bg-[url('/assets/bgAssetRegister.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* Section: Beneficios */}
      <div className="contentSection">
        <h2>
          El Mantenimiento de Clase Mundial{" "}
          <span className="text-blue60">
            requiere un registro de activos de la misma altura
          </span>
          .
        </h2>
        <div className="">
          <div>
            <h3 className="mb-8">Del registro de activos lograrás:</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>
                <span className="font-medium text-gray-900">
                  Estructura organizada:
                </span>{" "}
                Equipos agrupados lógicamente para una gestión y control de
                mantenimiento eficiente.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Facilidad para análisis:
                </span>{" "}
                Recopilación simple de datos de fallas, indicadores y costos por
                ubicaciones y equipos.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Asignación eficiente:
                </span>{" "}
                Planes de mantenimiento según necesidades específicas.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Gestión por criticidad:
                </span>{" "}
                Priorización de órdenes de trabajo y backlog según la criticidad
                de los activos.
              </li>
              <li>
                <span className="font-medium text-gray-900">
                  Minimización del downtime:
                </span>{" "}
                Creación de listas BOM críticas para asegurar disponibilidad de
                repuestos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section: Características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-[3vw] lg:px-[5vw] ">
        <div className="border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col justify-between">
          <h4 className="font-semibold mb-4">Asset Register</h4>
          <p className="text-gray70 flex-grow">
            Diseña una taxonomía de activos para tu planta, desde los sistemas,
            equipos, subequipos y componentes.
          </p>
          <div>
            <TreeView size={48} className="text-blue60" />
          </div>
        </div>

        <div className="border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col justify-between">
          <h4 className="font-semibold mb-4">Información Técnica</h4>
          <p className="text-gray70 flex-grow">
            Creación de los datos técnicos maestros para los activos a nivel
            para todas las familias de equipo.
          </p>
          <div>
            <DataVolume size={48} className="text-blue60" />
          </div>
        </div>

        <div className="border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col justify-between">
          <h4 className="font-semibold mb-4">Validación en sitio</h4>
          <p className="text-gray70 flex-grow">
            Levantamiento fotográfico de los equipos para validación de los
            datos en campo mediante placa e inpsecciónes 360.
          </p>
          <div>
            <Inspection size={48} className="text-blue60" />
          </div>
        </div>

        <div className="border border-gray-200 p-6 md:p-8 rounded-sm flex flex-col justify-between">
          <h4 className="font-semibold mb-4">Estandarización</h4>
          <p className="text-gray70 flex-grow">
            Creación de los lineamientos para la modificación y creación del
            registro de activos siguiendo las políticas de la empresa.
          </p>
          <div>
            <SyncSettings size={48} className="text-blue60" />
          </div>
        </div>
      </div>

      {/* Sección del Proceso 1 */}
      <div className="contentSection">
        <h2 className="mb-12">
          Proceso de Construcción del Registro de Activos
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          <div className="w-full md:w-1/2">
            <div className="">
              <h3 className="font-semibold">
                Revisión, Definición y Preparación
              </h3>
            </div>
            <div className="mt-6">
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">
                    Criterios de codificación:
                  </span>{" "}
                  Definición para los niveles 1 al 6 hasta la ubicación técnica.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Revisión de DTIs:
                  </span>{" "}
                  Validación y corrección según la disposición actual de los
                  equipos.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Plan de visitas:
                  </span>{" "}
                  Programación de inspecciones y recursos necesarios.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Criterios para registro de activos:
                  </span>{" "}
                  Definición de equipos a incluir o excluir y creación de
                  ejemplos y mockups.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Lineamientos técnicos:
                  </span>{" "}
                  Obtención de criterios de criticidad y codificación de
                  ingeniería.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Plantillas del CMMS:
                  </span>{" "}
                  Recopilación de PMP, SMR, BOM y definición de la taxonomía.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Gestión de tags:
                  </span>{" "}
                  Criterios para tags repetidos y equipos no existentes.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Datos maestros:
                  </span>{" "}
                  Definición de fields requeridos por familia de equipo.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Información técnica:
                  </span>{" "}
                  Recopilación de hojas de datos y manuales.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Preparación de campo:
                  </span>{" "}
                  Configuración de software para manejo de datos, registro
                  fotográfico y llenado de información en campo.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-[url('/assets/redlinesDTI.png')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>

      {/* Sección del Proceso 2 */}
      <div className="contentSection">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          <div className="w-full md:w-1/2">
            <div className="">
              <h3 className="font-semibold">
                Levantamiento y Construcción del Registro de Activos
              </h3>
            </div>
            <div className="mt-6">
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">
                    Ejecución simultánea:
                  </span>{" "}
                  Levantamiento de equipos en campo y construcción de la
                  taxonomía, llenado de datos maestros y validación, coordinados
                  entre el equipo en campo y el equipo remoto en oficinas.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Sincronización en tiempo real:
                  </span>{" "}
                  Uso de una aplicación de colaboración para centralizar y
                  sincronizar la información entre equipos.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Preparación para visitas a campo:
                  </span>{" "}
                  Capacitación en seguridad y cursos específicos para el
                  personal involucrado.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Documentación fotográfica y etiquetado:
                  </span>{" "}
                  Captura de imágenes, asignación de etiquetas y definición de
                  ubicaciones técnicas directamente en la aplicación.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Inspección técnica:
                  </span>{" "}
                  Captura de datos de placas, realización de "Red-Lines" en DTIs
                  según necesidades detectadas en campo.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Transmisión inmediata:
                  </span>{" "}
                  Envío de la información a oficinas para su registro en el CMMS
                  y complemento con datos de ingeniería (TMD) y mantenimiento.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Actualización en tiempo real:
                  </span>{" "}
                  Preparación y carga del registro de activos en el CMMS de
                  forma continua y sincronizada.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-[url('/assets/pegandotag.jpeg')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>

      {/* Sección del Proceso 3 */}
      <div className="contentSection">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          <div className="w-full md:w-1/2">
            <div className="">
              <h3 className="font-semibold">Consolidación y carga al CMMS</h3>
            </div>
            <div className="mt-6">
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">
                    Validación de entregables:
                  </span>{" "}
                  Revisión del Asset Register, Ubicación Técnica, Datos
                  Maestros, Registro Fotográfico y comentarios en Red-Line
                  P&IDs.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Plantillas maestras:
                  </span>{" "}
                  Creación de plantillas específicas para la carga masiva de
                  datos al CMMS.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Acompañamiento en la taxonomía:
                  </span>{" "}
                  Soporte durante la creación de niveles taxonómicos en el CMMS.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Gestión de equipos y componentes:
                  </span>{" "}
                  Asistencia para la incorporación de equipos, subequipos y
                  componentes en el sistema.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Confirmación de integración:
                  </span>{" "}
                  Verificación de la correcta incorporación y alineación de la
                  información según los requerimientos establecidos.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Catálogo de fallas (opcional):
                  </span>{" "}
                  Desarrollo de un catálogo para registrar fallas y datos de
                  mantenimiento a partir de órdenes de trabajo y avisos de
                  avería.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-[url('/assets/bgAssetRegister.png')] bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>

      {/* Sección: Banner Final */}
      {/* <div className="px-4 sm:px-6 md:px-[3vw] lg:px-[5vw] bg-gradient-to-l from-blue60 to-gray10 mt-16">
                <div className="flex flex-col-reverse md:flex-row bg-gray20 justify-between hover:bg-white transition-all duration-300 hover:shadow-xl">
                    <div className="p-6 md:p-[4vw] w-full md:w-[40vw]">
                        <h3 className="font-light leading-tight">Confiabilidad desde el diseño</h3>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            Implementamos las mejores prácticas de la industria para garantizar que tu CMMS esté alineado con los estándares más altos, proporcionando datos precisos y útiles para la toma de decisiones.
                        </p>
                        <div className="mt-8 md:mt-12">
                            <button className="bg-gray-900 text-white px-6 py-3 rounded-sm font-light flex flex-row items-center gap-4 hover:bg-blue60 transition duration-300">
                                <span>Agenda con un especialista</span>
                                <Headset size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="h-64 md:h-[29vw] z-10 w-full md:w-[50vw] bg-[url('/assets/consultor2.jpg')] bg-cover bg-center transform md:-scale-x-100">
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

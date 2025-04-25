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
  UserProfile,
  Certificate,
  UserAccess,
  Carbon,
  Document,
} from "@carbon/icons-react";
import {
  Users,
  Clock,
  Target,
  Shield,
  Award,
  BookOpen,
  GraduationCap,
  ClipboardList,
  CheckSquare,
  Table,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Matriz de Responsabilidades | Gestión de Competencias | Reliaplant",
  description:
    "Creamos el puente entre RH y Mantenimiento para definir competencias, habilidades y responsabilidades del personal técnico, estableciendo una estructura organizacional sostenible.",
  keywords: [
    "matriz de responsabilidades",
    "competencias técnicas",
    "gestión de mantenimiento",
    "desarrollo organizacional",
    "planes de formación",
    "mantenimiento industrial",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title: "Matriz de Responsabilidades y Competencias | Reliaplant",
    description:
      "Definición estructurada de responsabilidades y competencias para organizaciones de mantenimiento de clase mundial.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgResponsabilidades.jpg",
        width: 1200,
        height: 630,
        alt: "Matriz de Responsabilidades",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/matriz-responsabilidades",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matriz de Responsabilidades y Competencias | Reliaplant",
    description:
      "Definición profesional de responsabilidades y competencias para equipos de mantenimiento industrial.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgResponsabilidades.jpg",
        alt: "Matriz de Responsabilidades",
      },
    ],
  },
  alternates: {
    canonical:
      "https://reliaplant-2c104.web.app/consultoria/matriz-responsabilidades",
  },
};

export default function MatrizResponsabilidades() {
  return (
    <div>
      {/* Wrapper actualizado para móvil */}
      <div className="">
        <div className="bg-gray-100 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
          {/* Texto */}
          <div className="relative z-10 text-whites w-full md:w-[50vw] p-4 sm:p-6 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
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
                  Matriz de Responsabilidades
                </span>
              </div>
              <h1 className="">
                Definición de responsabilidades y competencias
              </h1>
              <div className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
                Creamos el puente entre Recursos Humanos y el área de
                Mantenimiento para definir perfiles técnicos que especifiquen
                responsabilidades, habilidades y competencias, estableciendo una
                estructura organizacional de mantenimiento sostenible en el
                tiempo.
              </div>
            </div>
            <div className="mt-8 md:mt-6">
              <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4 bg-gray90 px-6 py-3">
                <span>Solicita una cotización</span>
                <RequestQuote size={20} className="text-white" />
              </button>
            </div>
          </div>
          {/* Imagen */}
          <div className="relative md:absolute md:right-0 h-64 md:h-full w-full md:w-[50vw] bg-[url('/assets/bgResponsabilidades.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[url('/assets/bgResponsabilidades.jpg')] bg-cover bg-center block md:hidden"></div>

      <div className="px-4 sm:px-6 md:px-[3vw] lg:px-[5vw] py-8 md:py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-full">
          <h2 className="text-2xl md:text-4xl font-light mb-8">
            La base técnica para una organización de clase mundial
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-8">
            <div className="border p-6 flex flex-col justify-between h-[30vh]">
              <div className="flex flex-col">
                <span className="text-[1.4rem]">
                  Definición de Responsabilidades
                </span>
                <span className="text-gray60 mt-4">
                  Establecemos con claridad qué hace cada rol, delimitando
                  alcances de gestión, autoridad y rendición de cuentas para
                  cada posición en el área de mantenimiento.
                </span>
              </div>
              <div>
                <ClipboardList size={36} className="text-blue60" />
              </div>
            </div>
            <div className="border p-6 flex flex-col justify-between h-[30vh]">
              <div className="flex flex-col">
                <span className="text-[1.4rem]">Mapeo de Competencias</span>
                <span className="text-gray60 mt-4">
                  Identificamos los conocimientos específicos requeridos para
                  cada posición, desde habilidades técnicas hasta dominios
                  metodológicos de confiabilidad y mantenimiento.
                </span>
              </div>
              <div>
                <CheckSquare size={36} className="text-blue60" />
              </div>
            </div>
            <div className="border p-6 flex flex-col justify-between h-[30vh]">
              <div className="flex flex-col">
                <span className="text-[1.4rem]">
                  Planes de Formación Específicos
                </span>
                <span className="text-gray60 mt-4">
                  Desarrollamos itinerarios formativos personalizados que
                  cierran la brecha entre las competencias actuales y las
                  requeridas para un desempeño óptimo.
                </span>
              </div>
              <div>
                <GraduationCap size={36} className="text-blue60" />
              </div>
            </div>
            <div className="border p-6 flex flex-col justify-between h-[30vh]">
              <div className="flex flex-col">
                <span className="text-[1.4rem]">
                  Integración con Sistemas de Gestión
                </span>
                <span className="text-gray60 mt-4">
                  Alineamos la matriz con los sistemas CMMS y RH para asegurar
                  que la asignación de trabajos considera las competencias
                  certificadas del personal.
                </span>
              </div>
              <div>
                <Table size={36} className="text-blue60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 py-[10vh] flex flex-col md:flex-row gap-8 md:gap-24">
        <div className="w-full md:w-1/2">
          <h2 className="font-normal">
            Cerrando la brecha entre Recursos Humanos y Mantenimiento
          </h2>
          <p className="text-lg leading-[136%] mt-4">
            Las áreas de mantenimiento industrial enfrentan constantemente un
            desafío dual: por un lado, la necesidad de contar con personal
            especializado para cada tipo de equipo o sistema; por otro, la
            dificultad para definir claramente qué competencias exactas requiere
            cada puesto y cómo desarrollarlas.
          </p>
          <p className="text-lg leading-[136%] mt-4">
            Nuestra metodología crea un puente entre Recursos Humanos y
            Mantenimiento, estableciendo un lenguaje común que permite:
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="list-disc">
            <li className="mb-2 text-xl">
              Definir con precisión qué debe saber hacer cada posición
            </li>
            <li className="mb-2 text-xl">
              Clasificar las competencias como Obligatorias (O) o Deseables (D)
            </li>
            <li className="mb-2 text-xl">
              Crear planes de desarrollo específicos para cada nivel y rol
            </li>
            <li className="mb-2 text-xl">
              Establecer un sistema de certificación interna de habilidades
            </li>
            <li className="mb-2 text-xl">
              Asegurar que el trabajo correcto sea asignado al técnico correcto
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4 md:px-16 bg-gray20 py-12">
        <div>
          <div className="">
            <h2 className="text-4xl font-light mb-8 text-center">
              Los Tres Pilares de la Matriz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white p-6 hover:shadow-lg transition duration-300 border border-gray30 h-[350px] flex flex-col">
                <Document size={32} className="text-blue60 mb-4" />
                <h3 className="text-xl font-normal mb-2">
                  1. Estructura de Responsabilidades
                </h3>
                <p className="text-gray60 flex-grow">
                  Define qué hace cada posición dentro del flujo de trabajo de
                  mantenimiento:
                </p>
                <ul className="list-disc pl-6 text-gray60 mt-4">
                  <li>Toma de decisiones técnicas</li>
                  <li>Definición de prioridades</li>
                  <li>Gestión de recursos</li>
                  <li>Planificación estratégica</li>
                  <li>Ejecución técnica especializada</li>
                </ul>
              </div>
              <div className="bg-white p-6 hover:shadow-lg transition duration-300 border border-gray30 h-[350px] flex flex-col">
                <Certificate size={32} className="text-blue60 mb-4" />
                <h3 className="text-xl font-normal mb-2">
                  2. Mapa de Competencias
                </h3>
                <p className="text-gray60 flex-grow">
                  Establece el conjunto de conocimientos y habilidades
                  necesarios:
                </p>
                <ul className="list-disc pl-6 text-gray60 mt-4">
                  <li>Técnicas (mecánica, eléctrica, instrumentación)</li>
                  <li>Metodológicas (RCM, FMEA, RCA)</li>
                  <li>Normativas (NFPA, ISO, ASME, etc)</li>
                  <li>Tecnológicas (SAP, CMMS, análisis de datos)</li>
                  <li>Gestión (planificación, costos, liderazgo)</li>
                </ul>
              </div>
              <div className="bg-white p-6 hover:shadow-lg transition duration-300 border border-gray30 h-[350px] flex flex-col">
                <UserAccess size={32} className="text-blue60 mb-4" />
                <h3 className="text-xl font-normal mb-2">
                  3. Plan de Formación
                </h3>
                <p className="text-gray60 flex-grow">
                  Desarrolla itinerarios formativos personalizados:
                </p>
                <ul className="list-disc pl-6 text-gray60 mt-4">
                  <li>Cursos específicos por nivel y especialidad</li>
                  <li>Certificaciones técnicas necesarias</li>
                  <li>Programas de mentoring interno</li>
                  <li>Evaluaciones prácticas de competencias</li>
                  <li>Actualización continua según nuevas tecnologías</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light mb-6">
              Ejemplo de Matriz de Competencias
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead className="bg-gray80 text-black">
                  <tr>
                    <th className="py-2 px-4 border">Cargo</th>
                    <th className="py-2 px-4 border">RCM/FMEA</th>
                    <th className="py-2 px-4 border">Análisis Vibraciones</th>
                    <th className="py-2 px-4 border">Termografía</th>
                    <th className="py-2 px-4 border">SAP/CMMS</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="py-2 px-4 border font-medium text-left">
                      Gerente de Mantenimiento
                    </td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                    <td className="py-2 px-4 border bg-blue20">D</td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border font-medium text-left">
                      Especialista en Confiabilidad
                    </td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border font-medium text-left">
                      Planificador de Mantenimiento
                    </td>
                    <td className="py-2 px-4 border bg-blue20">D</td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border font-medium text-left">
                      Técnico Eléctrico
                    </td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue20">D</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                    <td className="py-2 px-4 border bg-blue20">D</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border font-medium text-left">
                      Técnico Mecánico
                    </td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue60 text-white">O</td>
                    <td className="py-2 px-4 border">-</td>
                    <td className="py-2 px-4 border bg-blue20">D</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-row gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue60 mr-2"></div>
                <span className="text-sm">O = Obligatorio</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue20 mr-2"></div>
                <span className="text-sm">D = Deseable</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border mr-2"></div>
                <span className="text-sm">- = No aplica</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light mb-6">
              Categorías de Competencias que Mapeamos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 bg-white">
                <h3 className="font-medium text-xl mb-3">
                  Técnicas Fundamentales
                </h3>
                <ul className="list-disc pl-6 text-gray60">
                  <li>Mecánica Industrial</li>
                  <li>Electricidad Industrial</li>
                  <li>Hidráulica y Neumática</li>
                  <li>Instrumentación y Control</li>
                  <li>Soldadura</li>
                </ul>
              </div>
              <div className="border p-4 bg-white">
                <h3 className="font-medium text-xl mb-3">
                  Metodologías de Confiabilidad
                </h3>
                <ul className="list-disc pl-6 text-gray60">
                  <li>RCM / FMEA</li>
                  <li>Análisis de datos de Mantenimiento</li>
                  <li>Análisis Causa Raíz (RCA)</li>
                  <li>Análisis de Vibraciones</li>
                  <li>Termografía/Ultrasonido</li>
                </ul>
              </div>
              <div className="border p-4 bg-white">
                <h3 className="font-medium text-xl mb-3">
                  Normativas y Seguridad
                </h3>
                <ul className="list-disc pl-6 text-gray60">
                  <li>LOTO</li>
                  <li>Espacios Confinados</li>
                  <li>Trabajos en altura</li>
                  <li>ISO 31000 (Gestión de riesgos)</li>
                </ul>
              </div>
              <div className="border p-4 bg-white">
                <h3 className="font-medium text-xl mb-3">Gestión y Sistemas</h3>
                <ul className="list-disc pl-6 text-gray60">
                  <li>SAP-PM / CMMS</li>
                  <li>Planificación y Programación</li>
                  <li>Gestión de Costos</li>
                  <li>KPIs e Indicadores</li>
                  <li>Lean Six Sigma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 px-4 md:px-16 border-b ">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit">Nuestro Proceso</h2>
          </div>
          <button className="h-14 bg-black text-white px-8">¿Dudas?</button>
        </div>
      </div>

      <div className="px-4 md:px-8 bg-gray">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="w-full md:w-1/4 py-8 mb-16 border-black relative">
            <div className="flex flex-row gap-4">
              <div className="p-2 bg-gray20 w-fit h-fit">
                <Number_1 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-lg">
                Diagnóstico organizacional y mapeo de estructura actual
              </h3>
            </div>
            <div className="mt-8"></div>
            <p className="text-lg leading-[136%]">
              Analizamos la situación actual y las necesidades reales:
            </p>
            <div className="mt-4 leading-[136%]">
              <ul className="list-disc pl-6">
                <li>
                  Revisión de estructura organizacional existente y
                  descripciones de cargos
                </li>
                <li>
                  Identificación de todas las posiciones del área y sus
                  interrelaciones
                </li>
                <li>
                  Levantamiento de prácticas actuales de mantenimiento y
                  confiabilidad
                </li>
                <li>
                  Relevamiento de tecnologías y equipos críticos que requieren
                  atención especializada
                </li>
                <li>
                  Entrevistas con líderes de RH y Mantenimiento para alinear
                  expectativas
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 py-8 mb-16 border-black relative">
            <div className="flex flex-row gap-4">
              <div className="p-2 bg-gray20 w-fit h-fit">
                <Number_2 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-lg">
                Definición estratégica de responsabilidades y competencias
              </h3>
            </div>
            <div className="mt-8"></div>
            <p className="text-lg leading-[136%]">
              Establecemos el modelo integral de competencias y
              responsabilidades:
            </p>
            <div className="mt-4 leading-[136%]">
              <ul className="list-disc pl-6">
                <li>
                  Creación del catálogo de competencias técnicas específicas
                  para cada nivel
                </li>
                <li>
                  Definición detallada de responsabilidades para cada posición
                </li>
                <li>
                  Clasificación de competencias como Obligatorias (O) o
                  Deseables (D)
                </li>
                <li>Validación del modelo con equipos técnicos y de gestión</li>
                <li>
                  Diseño de la estructura matricial adaptada a la realidad
                  operativa
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 py-8 mb-16 border-black relative">
            <div className="flex flex-row gap-4">
              <div className="p-2 bg-gray20 w-fit h-fit">
                <Number_3 size={32} className="text-black" />
              </div>
              <h3 className="font-normal text-lg">
                Implementación y desarrollo del plan formativo
              </h3>
            </div>
            <div className="mt-8"></div>
            <p className="text-lg leading-[136%]">
              Transformamos el diagnóstico en un plan de acción concreto:
            </p>
            <div className="mt-4 leading-[136%]">
              <ul className="list-disc pl-6">
                <li>
                  Construcción de la matriz completa con todos los roles y
                  competencias
                </li>
                <li>
                  Evaluación de brechas entre competencias requeridas y
                  existentes
                </li>
                <li>
                  Diseño del plan de formación individualizado por cargo y
                  persona
                </li>
                <li>
                  Integración de la matriz en los sistemas de gestión
                  (CMMS/ERP/RH)
                </li>
                <li>
                  Capacitación para líderes sobre uso y mantenimiento de la
                  matriz
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-8 mb-16 border-black relative bg-gray20">
            <p className="text-lg leading-[136%]">
              <strong>Resultado final:</strong> Una organización donde cada rol
              tiene claramente definidas sus responsabilidades y los
              conocimientos necesarios para cumplirlas, con un plan estructurado
              para desarrollar las competencias faltantes y mejorar
              continuamente el desempeño del área.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

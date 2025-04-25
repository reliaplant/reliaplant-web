import { Metadata } from "next";
import {
  RequestQuote,
  DataAnalytics,
  Headset,
  Certificate,
  Enterprise,
} from "@carbon/icons-react";
import {
  Users,
  BookOpen,
  Clock,
  Target,
  Shield,
  Award,
  GraduationCap,
  Layers,
  CheckSquare,
  Monitor,
  Laptop,
  BookOpen as BookOpenIcon,
  Star,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import logoP21 from "@/../../public/assets/logo-p21-negro.webp";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata: Metadata = {
  title: {
    absolute: "Capacitación en Mantenimiento y Confiabilidad | RELIAPLANT",
  },
  description:
    "Programas de formación profesional para elevar el nivel de tu equipo y alcanzar la excelencia operativa en mantenimiento y confiabilidad industrial.",
  keywords: [
    "capacitación mantenimiento",
    "formación confiabilidad",
    "entrenamiento industrial",
    "desarrollo profesional",
    "gestión de activos",
    "reliaplant",
    "predictiva21",
  ],
  openGraph: {
    title: "Capacitación en Mantenimiento y Confiabilidad | RELIAPLANT",
    description:
      "Programas formativos diseñados para desarrollar las competencias técnicas y transformar la gestión de activos en una ventaja competitiva.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgCapacitacion.jpg",
        width: 1200,
        height: 630,
        alt: "Capacitación en Mantenimiento Industrial",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/capacitacion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacitación en Mantenimiento y Confiabilidad | RELIAPLANT",
    description:
      "Programas formativos para desarrollar competencias técnicas en mantenimiento y confiabilidad industrial.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgCapacitacion.jpg",
        alt: "Capacitación en Mantenimiento Industrial",
      },
    ],
  },
  alternates: {
    canonical: "https://reliaplant-2c104.web.app/consultoria/capacitacion",
  },
};

export default function Capacitacion() {
  return (
    <div>
      {/* Header */}
      <div className="">
        <div className="bg-gray-100 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
          {/* Texto */}
          <div className="relative z-10 text-whites w-full md:w-[50vw] p-4 sm:p-6 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
            <div>
              <div className="flex flex-row flex-wrap">
                <span className="text-blue60 font-light mb-4 text-sm md:text-md">
                  <a href="/" className="hover:underline">
                    Inicio
                  </a>
                  <span className="mx-2 text-gray60">{"/"}</span>
                  <a href="/consultoria" className="hover:underline">
                    Consultoría
                  </a>
                  <span className="mx-2 text-gray60">{"/"}</span>
                  <span>Capacitación</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-black leading-tight">
                Servicios de Capacitación
              </h1>
              <div className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
                Programas formativos diseñados para desarrollar las competencias
                técnicas de tu equipo y transformar la gestión de activos en una
                ventaja competitiva para tu organización.
              </div>
            </div>
            <div className="mt-8 md:mt-6">
              <AbrirFormContacto
                buttonText="Hablar con un especialista"
                icon={<ArrowRight size={20} className="text-white" />}
                buttonColor="bg-gray90"
                modalTitle="Habla con un especialista sobre capacitación"
              />
            </div>
          </div>
          {/* Imagen */}
          <div className="relative md:absolute md:right-0 h-64 md:h-full w-full md:w-[50vw] bg-[url('/assets/bgCapacitacion.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 bg-blue10 p-4 md:p-6 flex flex-col md:flex-row items-center">
          <a
            href="https://predictiva21.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoP21} alt="Criticidad" width={150} height={50} />
          </a>
          <p className="mt-2 md:mt-0 text-sm md:text-lg leading-[136%] mb-0 ml-0 md:ml-4">
            Nuestros programas de capacitación y formación son impartidos en
            colaboración con{" "}
            <a
              href="https://predictiva21.com"
              className="text-blue60 underline"
            >
              Predictiva21
            </a>
            , nuestro socio estratégico en desarrollo profesional.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-24 px-4 md:px-[8vw] border-b sticky top-0 z-20">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit text-lg md:text-4xl">
              Modalidades de capacitación
            </h2>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-[8vw] py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="border p-4 md:p-6 pb-6 relative flex flex-col">
            <Monitor size={42} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
              Capacitaciones Online
            </h3>
            <p className="text-gray60 mb-4 md:mb-6">
              Programas formativos virtuales que permiten a tus colaboradores
              acceder al conocimiento desde cualquier lugar, adaptándose a la
              dinámica operativa.
            </p>
            <ul className="space-y-1 md:space-y-2 mb-auto">
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Plataforma interactiva especializada
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Sesiones síncronas con especialistas
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Evaluaciones prácticas aplicables
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <AbrirFormContacto
                buttonText="Solicita capacitación online"
                icon={<ArrowRight size={20} />}
                buttonColor="bg-gray90"
                fullDesktop={true}
                modalTitle="Solicita capacitación online"
              />
            </div>
          </div>

          <div className="border-2 border-blue60 p-4 md:p-6 pb-6 relative shadow-lg flex flex-col">
            <Users size={42} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
              Capacitaciones Presenciales
            </h3>
            <p className="text-gray60 mb-4 md:mb-6">
              Formación intensiva en sitio con ejercicios prácticos y
              aplicaciones directas en los equipos reales de tu planta,
              maximizando la transferencia de conocimiento.
            </p>
            <ul className="space-y-1 md:space-y-2 mb-auto">
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Instructores con experiencia industrial
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Prácticas con equipos reales
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Material didáctico especializado
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <AbrirFormContacto
                buttonText="Solicita capacitación presencial"
                icon={<ArrowRight size={20} />}
                buttonColor="bg-blue60"
                fullDesktop={true}
                modalTitle="Solicita capacitación presencial"
              />
            </div>
          </div>

          <div className="border p-4 md:p-6 pb-6 relative flex flex-col">
            <BookOpen size={42} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
              Programas Personalizados
            </h3>
            <p className="text-gray60 mb-4 md:mb-6">
              Cursos diseñados específicamente para las necesidades de tu
              organización, enfocados en tus desafíos técnicos particulares y
              equipos específicos.
            </p>
            <ul className="space-y-1 md:space-y-2 mb-auto">
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Diagnóstico previo de necesidades
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Contenido adaptado a tu industria
                </span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                <span className="text-sm md:text-base">
                  Seguimiento post-capacitación
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <AbrirFormContacto
                buttonText="Solicita programa personalizado"
                icon={<ArrowRight size={20} />}
                buttonColor="bg-gray90"
                fullDesktop={true}
                modalTitle="Solicita programa personalizado"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 px-4 md:px-[8vw]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-8">
              Nuestro enfoque metodológico
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-2 md:gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <BookOpenIcon size={28} className="text-blue60" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium mb-1 md:mb-2">
                    Fundamentos conceptuales sólidos
                  </h3>
                  <p className="text-sm md:text-base text-gray60">
                    Proporcionamos marcos teóricos y metodologías probadas en la
                    industria global, adaptadas al contexto latinoamericano.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <CheckSquare size={28} className="text-blue60" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium mb-1 md:mb-2">
                    Aprendizaje práctico
                  </h3>
                  <p className="text-sm md:text-base text-gray60">
                    Cada concepto se refuerza con ejercicios prácticos, estudios
                    de caso y simulaciones basadas en situaciones reales de la
                    industria.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <Layers size={28} className="text-blue60" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium mb-1 md:mb-2">
                    Niveles progresivos
                  </h3>
                  <p className="text-sm md:text-base text-gray60">
                    Estructuramos el aprendizaje en niveles que permiten avanzar
                    gradualmente desde conceptos básicos hasta aplicaciones
                    avanzadas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <Target size={28} className="text-blue60" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium mb-1 md:mb-2">
                    Evaluación aplicada
                  </h3>
                  <p className="text-sm md:text-base text-gray60">
                    Valoramos el aprendizaje mediante proyectos aplicados
                    directamente en la realidad operativa de los participantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[30vh] md:h-[60vh] bg-[url('/assets/bgCapacitacion2.webp')] bg-contain bg-no-repeat bg-center"></div>
        </div>
      </div>

      <div className="mt-8 md:mt-24 px-4 md:px-[8vw] bg-gray10 text-white py-8 md:py-16">
        <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-12">
          Áreas temáticas principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-4 md:p-6 border border-gray60">
            <GraduationCap size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Confiabilidad Industrial
            </h3>
            <p className="text-sm md:text-gray50">
              RCM, Análisis Causa Raíz, FMEA/AMEF, Estrategias de Mantenimiento,
              Análisis RAM y gestión de activos basada en riesgo.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray60">
            <Laptop size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Técnicas Predictivas
            </h3>
            <p className="text-sm md:text-gray50">
              Análisis de vibraciones, termografía, ultrasonido, análisis de
              aceites y otras técnicas de monitoreo de condición avanzadas.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray60">
            <Calendar size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Gestión del Mantenimiento
            </h3>
            <p className="text-sm md:text-gray50">
              Planificación, programación, KPIs, gestión de repuestos,
              evaluación financiera e implementación de CMMS.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray60">
            <Shield size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Normativas y Seguridad
            </h3>
            <p className="text-sm md:text-gray50">
              Normas técnicas, seguridad eléctrica, trabajo en espacios
              confinados, seguridad en equipos rotativos y recipientes a
              presión.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray60">
            <Users size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Liderazgo Técnico
            </h3>
            <p className="text-sm md:text-gray50">
              Gestión de equipos de mantenimiento, comunicación efectiva,
              gestión del cambio y desarrollo de cultura de confiabilidad.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray60">
            <Star size={28} className="text-blue60 mb-2 md:mb-4" />
            <h3 className="text-base md:text-xl font-normal mb-1 md:mb-3">
              Excelencia Operacional
            </h3>
            <p className="text-sm md:text-gray50">
              TPM, Lean Maintenance, Six Sigma aplicado a mantenimiento y
              gestión de la innovación en procesos industriales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

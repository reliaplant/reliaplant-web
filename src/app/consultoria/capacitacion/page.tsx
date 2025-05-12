export const dynamic = "force-static";

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
import { ServiceCard } from "@/components/ServiceCard";
import BannerPrincipal from "@/components/BannerPrincipal";

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
      <BannerPrincipal
        title="Servicios de Capacitación"
        description="Programas formativos diseñados para desarrollar las competencias técnicas de tu equipo y transformar la gestión de activos en una ventaja competitiva para tu organización."
        currentPath="Capacitación"
        image="/assets/bgCapacitacion.jpg"
      />

      <section className="contentSection">
        <div className="bg-blue10 p-4 flex flex-col md:flex-row items-center">
          <a
            href="https://predictiva21.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoP21} alt="Criticidad" width={150} height={50} />
          </a>
          <p className="mt-2 md:mt-0 leading-[136%] mb-0 ml-0 md:ml-4">
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
      </section>

      <section className="contentSection">
        <div className="border-b">
          <h2 className="border-blue60 border-b-4 w-fit">
            Modalidades de capacitación
          </h2>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="border-2 border-gray90 p-4 md:p-6 pb-6 relative flex flex-col">
              <Monitor size={42} className="text-blue60 mb-2 md:mb-4" />
              <h3 className="mb-2 md:mb-4">Capacitaciones Online</h3>
              <p className="text-gray60 mb-4 md:mb-6">
                Programas formativos virtuales que permiten a tus colaboradores
                acceder al conocimiento desde cualquier lugar, adaptándose a la
                dinámica operativa.
              </p>
              <ul className="space-y-1 md:space-y-2 mb-auto">
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Plataforma interactiva especializada</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Sesiones síncronas con especialistas</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Evaluaciones prácticas aplicables</span>
                </li>
              </ul>
              <div className="mt-4">
                <AbrirFormContacto
                  buttonText="Solicita capacitación online"
                  icon={<ArrowRight size={20} className="text-white" />}
                  buttonColor="bg-gray90"
                  fullDesktop={true}
                  modalTitle="Solicita capacitación online"
                  especial="Capacitaciones Online"
                />
              </div>
            </div>

            <div className="border-2 border-blue60 p-4 md:p-6 pb-6 relative shadow-lg flex flex-col">
              <Users size={42} className="text-blue60 mb-2 md:mb-4" />
              <h3 className="mb-2 md:mb-4">Capacitaciones Presenciales</h3>
              <p className="text-gray60 mb-4 md:mb-6">
                Formación intensiva en sitio con ejercicios prácticos y
                aplicaciones directas en los equipos reales de tu planta,
                maximizando la transferencia de conocimiento.
              </p>
              <ul className="space-y-1 md:space-y-2 mb-auto">
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Instructores con experiencia industrial</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Prácticas con equipos reales</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Material didáctico especializado</span>
                </li>
              </ul>
              <div className="mt-4">
                <AbrirFormContacto
                  buttonText="Solicita capacitación presencial"
                  icon={<ArrowRight size={20} className="text-white" />}
                  buttonColor="bg-blue60"
                  fullDesktop={true}
                  modalTitle="Solicita capacitación presencial"
                  especial="Capacitaciones Presenciales"
                />
              </div>
            </div>

            <div className="border-2 border-gray90 p-4 md:p-6 pb-6 relative flex flex-col">
              <BookOpen size={42} className="text-blue60 mb-2 md:mb-4" />
              <h3 className="mb-2 md:mb-4">Programas Personalizados</h3>
              <p className="text-gray60 mb-4 md:mb-6">
                Cursos diseñados específicamente para las necesidades de tu
                organización, enfocados en tus desafíos técnicos particulares y
                equipos específicos.
              </p>
              <ul className="space-y-1 md:space-y-2 mb-auto">
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Diagnóstico previo de necesidades</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Contenido adaptado a tu industria</span>
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Seguimiento post-capacitación</span>
                </li>
              </ul>
              <div className="mt-4">
                <AbrirFormContacto
                  buttonText="Solicita programa personalizado"
                  icon={<ArrowRight size={20} className="text-white" />}
                  buttonColor="bg-gray90"
                  fullDesktop={true}
                  modalTitle="Solicita programa personalizado"
                  especial="Solicitud de programa personalizado"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2>Nuestro enfoque metodológico</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-2 md:gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <BookOpenIcon size={28} className="text-blue60" />
                </div>
                <div>
                  <h3 className="mb-1 md:mb-2">
                    Fundamentos conceptuales sólidos
                  </h3>
                  <p className="text-gray60">
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
                  <h3 className="mb-1 md:mb-2">Aprendizaje práctico</h3>
                  <p className="text-gray60">
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
                  <h3 className="mb-1 md:mb-2">Niveles progresivos</h3>
                  <p className="text-gray60">
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
                  <h3 className="mb-1 md:mb-2">Evaluación aplicada</h3>
                  <p className="text-gray60">
                    Valoramos el aprendizaje mediante proyectos aplicados
                    directamente en la realidad operativa de los participantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[30vh] md:h-[60vh] bg-[url('/assets/bgCapacitacion2.webp')] bg-contain bg-no-repeat bg-center"></div>
        </div>
      </section>

      <section className="contentSection bg-gray10 py-8">
        <h2>Áreas temáticas principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            Icon={GraduationCap}
            title="Confiabilidad Industrial"
            description="RCM, Análisis Causa Raíz, FMEA/AMEF, Estrategias de Mantenimiento, Análisis RAM y gestión de activos basada en riesgo."
            variant="default"
          />
          <ServiceCard
            Icon={Laptop}
            title="Técnicas Predictivas"
            description="Análisis de vibraciones, termografía, ultrasonido, análisis de aceites y otras técnicas de monitoreo de condición avanzadas."
            variant="default"
          />
          <ServiceCard
            Icon={Calendar}
            title="Gestión del Mantenimiento"
            description="Planificación, programación, KPIs, gestión de repuestos, evaluación financiera e implementación de CMMS."
            variant="default"
          />
          <ServiceCard
            Icon={Shield}
            title="Normativas y Seguridad"
            description="Normas técnicas, seguridad eléctrica, trabajo en espacios confinados, seguridad en equipos rotativos y recipientes a presión."
            variant="default"
          />
          <ServiceCard
            Icon={Users}
            title="Liderazgo Técnico"
            description="Gestión de equipos de mantenimiento, comunicación efectiva, gestión del cambio y desarrollo de cultura de confiabilidad."
            variant="default"
          />
          <ServiceCard
            Icon={Star}
            title="Excelencia Operacional"
            description="TPM, Lean Maintenance, Six Sigma aplicado a mantenimiento y gestión de la innovación en procesos industriales."
            variant="default"
          />
        </div>
      </section>
    </div>
  );
}

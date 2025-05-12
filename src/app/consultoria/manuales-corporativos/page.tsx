export const dynamic = "force-static";

import { Metadata } from "next";
import {
  DocumentAdd,
  DocumentView,
  DocumentImport,
  RequestQuote,
  Template,
  Flow,
  CheckmarkOutline,
  Checkbox,
  ProgressBar,
  TextMining,
  TextLink,
  Edit,
  DataShare,
  Report,
  DocumentBlank,
  Headset,
} from "@carbon/icons-react";
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  Users,
  Layers,
  Settings,
  Check,
  BookCopy,
  Library,
  FileSearch,
  Award,
  ScrollText,
  BarChart2,
  ShieldCheck,
  UserCog,
  Workflow,
} from "lucide-react";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import BannerPrincipal from "@/components/BannerPrincipal";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Manuales Corporativos y Procedimientos de Mantenimiento | Reliaplant",
  description:
    "Desarrollo profesional de documentación técnica y manuales corporativos para mantenimiento industrial. Estandariza procesos, preserva conocimiento y optimiza la gestión de activos.",
  keywords: [
    "manuales corporativos",
    "procedimientos de mantenimiento",
    "documentación técnica",
    "gestión de activos",
    "estandarización de procesos",
    "ISO 55000",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title:
      "Manuales Corporativos y Procedimientos de Mantenimiento | Reliaplant",
    description:
      "Documentación técnica estructurada que estandariza procesos y consolida las mejores prácticas para garantizar la excelencia operativa en mantenimiento.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgProcedimientos2.jpg",
        width: 1200,
        height: 630,
        alt: "Manuales Corporativos y Procedimientos",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/manuales-corporativos",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Manuales Corporativos y Procedimientos de Mantenimiento | Reliaplant",
    description:
      "Desarrollo de documentación técnica estandarizada para optimizar los procesos de mantenimiento y confiabilidad en tu organización.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgProcedimientos2.jpg",
        alt: "Manuales Corporativos y Procedimientos",
      },
    ],
  },
  alternates: {
    canonical:
      "https://reliaplant-2c104.web.app/consultoria/manuales-corporativos",
  },
};

export default function ManualesCorporativos() {
  return (
    <div>
      <BannerPrincipal
        title="Manuales Corporativos y Procedimientos de Mantenimiento"
        description="Documentación técnica estructurada que estandariza procesos, asegura la transmisión del conocimiento y consolida las mejores prácticas en tu organización para garantizar la excelencia operativa."
        currentPath="Manuales y procedimientos"
        image="/assets/bgProcedimientos2.jpg"
      />

      <div className="contentSection">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2>Gestión del conocimiento para la excelencia operativa</h2>
            <p className="leading-[136%] mb-6">
              En la moderna gestión de activos, el conocimiento estructurado se
              ha convertido en un pilar fundamental que separa a las
              organizaciones de excelencia de aquellas que operan en estado
              reactivo.
            </p>
            <p className="leading-[136%] mb-6">
              Nuestros servicios de desarrollo documental transforman el
              conocimiento tácito de tu organización en sistemas estructurados
              que garantizan continuidad operativa, facilitan la toma de
              decisiones y aseguran el cumplimiento de normativas
              internacionales como ISO 55000.
            </p>
          </div>

          <div className="w-full md:w-1/2 border">
            <div className="gap-3 border-b h-1/4 flex flex-row items-center px-4 md:px-6 py-3 hover:bg-blue20 transition-colors">
              <div className="p-1 bg-blue60 text-white rounded-full">
                <Check size={16} />
              </div>
              <p className="mb-0">Preservación del conocimiento crítico</p>
            </div>
            <div className="gap-3 border-b h-1/4 flex flex-row items-center px-4 md:px-6 py-3 hover:bg-blue20 transition-colors">
              <div className="p-1 bg-blue60 text-white rounded-full">
                <Check size={16} />
              </div>
              <p className="mb-0">Estandarización de procesos</p>
            </div>
            <div className="gap-3 border-b h-1/4 flex flex-row items-center px-4 md:px-6 py-3 hover:bg-blue20 transition-colors">
              <div className="p-1 bg-blue60 text-white rounded-full">
                <Check size={16} />
              </div>
              <p className="mb-0">Cumplimiento normativo y regulatorio</p>
            </div>
            <div className="gap-3 h-1/4 flex flex-row items-center px-4 md:px-6 py-3 hover:bg-blue20 transition-colors">
              <div className="p-1 bg-blue60 text-white rounded-full">
                <Check size={16} />
              </div>
              <p className="mb-0">Reducción de riesgos operacionales</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection">
        <h2>Soluciones documentales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="border border-gray90 p-4 md:p-6 pb-6 relative shadow-lg flex flex-col justify-between">
            <div>
              <Library size={36} className="text-blue60 mb-4" />
              <h3>Biblioteca Digital Documentada</h3>
              <p>
                Repositorio digital centralizado que organiza, controla y
                facilita el acceso a toda la documentación técnica de la
                organización con controles de seguridad.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Control de versiones automatizado</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Flujos de trabajo de aprobación</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Gestión de permisos por roles</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-6">
              <AbrirFormContacto
                buttonText="Habla con un especialista"
                icon={<Headset size={20} className="text-white" />}
                buttonColor="bg-gray90"
                especial="Biblioteca Digital Documentada"
              />
            </div>
          </div>

          <div className="border border-gray90 p-4 md:p-6 pb-6 relative shadow-lg flex flex-col justify-between">
            <div>
              <BookCopy size={36} className="text-blue60 mb-4" />
              <h3>Manual Corporativo de Mantenimiento y/o Confiabilidad</h3>
              <p>
                Documento maestro que establece la filosofía, estructura,
                procesos y estrategias para la gestión de mantenimiento y
                confiabilidad en toda la organización.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Modelo de gestión integral</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Estrategias y procesos definidos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                  <span>Roles y responsabilidades claras</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-6">
              <AbrirFormContacto
                buttonText="Habla con un especialista"
                icon={<Headset size={20} className="text-white" />}
                buttonColor="bg-gray90"
                especial="Manual Corporativo de Mantenimiento y/o Confiabilidad"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gray10 p-4 md:p-6 flex items-center">
          <p className="mb-0">
            Todos nuestros documentos se desarrollan considerando estándares
            internacionales como ISO 55000 y se adaptan específicamente a los
            procesos, cultura y objetivos de tu organización.
          </p>
        </div>
      </div>

      <div className="contentSection">
        <h2>Documentación específica según requisitos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="p-3 bg-gray10">
                <FileSearch size={32} className="text-blue60" />
              </div>
              <div>
                <h3>Manual de Investigación de Incidentes (ACR)</h3>
                <p>
                  Documento que establece metodologías estructuradas para la
                  identificación, análisis y corrección de causas raíz en
                  incidentes, fallas y no conformidades.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 mb-0">
                  Metodologías de evaluación: Ishikawa, 5 Porqués, Árbol Lógico
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Procedimientos y diagramas de flujo detallados
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Roles y responsabilidades definidas
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Formatos y plantillas estandarizados
                </p>
              </div>
            </div>
          </div>

          <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="p-3 bg-gray10">
                <Award size={32} className="text-blue60" />
              </div>
              <div>
                <h3>Matriz de Roles y Competencias</h3>
                <p>
                  Sistema integral que define roles, responsabilidades,
                  competencias requeridas y planes de desarrollo para el
                  personal de mantenimiento y confiabilidad.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Perfiles de puesto detallados
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Mapas de competencias técnicas y blandas
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Planes de carrera personalizados
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Programas de adiestramiento basados en brechas
                </p>
              </div>
            </div>
          </div>

          <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="p-3 bg-gray10">
                <ScrollText size={32} className="text-blue60" />
              </div>
              <div>
                <h3>Procedimientos para Evaluaciones Económicas</h3>
                <p>
                  Manual que establece metodologías para la toma de decisiones
                  económicas relacionadas con activos, incluyendo análisis de
                  costo-beneficio y ciclo de vida.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Análisis Costo-Riesgo-Beneficio
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Análisis de Costo de Ciclo de Vida (LCC)
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Evaluación de Vida Útil Remanente
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Evaluación y Manejo de Obsolescencia
                </p>
              </div>
            </div>
          </div>

          <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="p-3 bg-gray10">
                <ClipboardCheck size={32} className="text-blue60" />
              </div>
              <div>
                <h3>Plan de Gestión de Activos</h3>
                <p>
                  Documento estratégico que integra la gestión de activos
                  físicos con los objetivos corporativos, estableciendo
                  lineamientos para optimizar su ciclo de vida.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Políticas corporativas
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Objetivos y metas medibles
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Planes de acción específicos
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 bg-gray10">
                <p className="text-gray60 text-xs md:text-base mb-0">
                  Alineación con estándar ISO 55000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection bg-gray10 text-white">
        <h2>Beneficios de la gestión documental estructurada</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            Icon={UserCog}
            title="Preservación del conocimiento"
            description="Retención del expertise técnico crítico dentro de la organización, reduciendo la dependencia de personal específico y facilitando la curva de aprendizaje."
            variant="default"
          />

          <ServiceCard
            Icon={Workflow}
            title="Estandarización de procesos"
            description="Homogeneización de criterios y métodos de trabajo en todas las áreas, garantizando consistencia y calidad en la ejecución de actividades técnicas."
            variant="default"
          />

          <ServiceCard
            Icon={ShieldCheck}
            title="Cumplimiento normativo"
            description="Alineación con requisitos regulatorios y estándares internacionales facilitando auditorías y certificaciones."
            variant="default"
          />

          <ServiceCard
            Icon={Settings}
            title="Mejora continua"
            description="Base documental que sustenta la evaluación de procesos, identificación de oportunidades y aplicación sistemática de mejoras."
            variant="default"
          />

          <ServiceCard
            Icon={Users}
            title="Desarrollo de capacidades"
            description="Marco estructurado para la identificación de necesidades de capacitación y establecimiento de rutas de desarrollo profesional."
            variant="default"
          />

          <ServiceCard
            Icon={BarChart2}
            title="Toma de decisiones informada"
            description="Criterios y metodologías claras que aseguran consistencia y objetividad en decisiones técnicas y económicas relacionadas con activos."
            variant="default"
          />
        </div>
      </div>
    </div>
  );
}

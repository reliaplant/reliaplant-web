import { Metadata } from "next";
import {
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
import {
  CheckCircle2,
  FileSearch,
  Users,
  GitBranch,
  ClipboardList,
  FileSymlink,
  ArrowRight as ArrowRightLucide,
  Layers,
  Target,
  Microscope,
  AlertCircle,
  Check,
  LineChart,
  BookOpen,
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import BannerPrincipal from "@/components/BannerPrincipal";

export const metadata: Metadata = {
  title: {
    absolute:
      "Análisis de Causa Raíz (RCA) para Eliminación de Defectos | RELIAPLANT",
  },
  description:
    "Servicios especializados de investigación y análisis de causa raíz para eliminar defectos recurrentes e incidentes en equipos industriales.",
};

export default function AnalisisRCA() {
  return (
    <div>
      <BannerPrincipal
        title="Análisis de Causa Raíz para Eliminación de Defectos"
        description="Metodología estructurada para identificar las verdaderas causas de fallas recurrentes, incidentes y no conformidades, implementando soluciones definitivas que evitan su repetición y mejoran la confiabilidad de tus activos."
        currentPath="Análisis RCA"
        image="/assets/bgRAM.png"
      />

      <div className="contentSection">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6">
              La diferencia entre tratar síntomas y resolver problemas
            </h2>
            <p className="mb-6">
              Las fallas recurrentes y los incidentes operacionales representan
              no solo pérdidas económicas directas, sino también riesgos para la
              seguridad, el medio ambiente y la continuidad del negocio. La
              reacción común es implementar soluciones rápidas que solo atienden
              los síntomas visibles.
            </p>
            <p className="mb-6">
              El Análisis de Causa Raíz (RCA) es una metodología sistemática y
              basada en evidencias que busca identificar los factores
              fundamentales que originan los problemas. Nuestra aplicación del
              RCA, centrada en el Árbol Lógico de Fallas, permite descomponer
              los eventos en sus causas subyacentes y establecer acciones
              correctivas que eliminen definitivamente el riesgo de recurrencia.
            </p>

            <div className="mt-8 p-4 sm:p-6 bg-gray10">
              <h3 className="mb-4">Fundamentos de nuestro enfoque</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray60">
                    Basado en normas ASME, ISO 55000, API 689
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray60">
                    Enfoque en evidencias verificables
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray60">
                    Árbol Lógico de Fallas como método central
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray60">
                    Análisis de factores técnicos y humanos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 border">
            <div className="p-6 sm:p-8 bg-gray90 text-white">
              <h3 className="font-normal text-blue60 mb-6">
                ¿Cuándo es necesario un RCA formal?
              </h3>
              <p className="text-gray30 mb-6">
                Situaciones que ameritan un análisis estructurado de causa raíz:
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>
                    Fallas recurrentes que persisten a pesar de las acciones
                    correctivas implementadas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>
                    Incidentes que provocan pérdidas económicas significativas,
                    afectaciones a la seguridad o impactos ambientales.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>
                    Equipos críticos con patrones de falla inesperados o
                    degradación acelerada.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>
                    Situaciones con potencial de escalamiento que podrían
                    derivar en eventos catastróficos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection">
        <div className="border-b mb-8">
          <h2 className="border-blue60 border-b-4 w-fit">
            Nuestra metodología
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-6 pb-8 relative hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue60 text-white mb-6">
              <Number_1 size={28} />
            </div>
            <h3 className="mb-3">Notificación y Preparación</h3>
            <p className="text-gray60 mb-6">
              Activación del protocolo RCA, conformación del equipo investigador
              multidisciplinario y recopilación inicial de evidencias.
            </p>
            <div className="mt-4 pt-4 border-t border-gray20">
              <div className="flex items-center gap-2 mb-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">
                  Preservación del lugar del evento
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Entrevistas preliminares</span>
              </div>
            </div>
          </div>

          <div className="border p-6 pb-8 relative hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue60 text-white mb-6">
              <Number_2 size={28} />
            </div>
            <h3 className="mb-3">Investigación y Análisis</h3>
            <p className="text-gray60 mb-6">
              Aplicación del Árbol Lógico de Fallas para descomponer el evento
              en sus factores causales físicos, humanos y sistémicos.
            </p>
            <div className="mt-4 pt-4 border-t border-gray20">
              <div className="flex items-center gap-2 mb-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Validación de hipótesis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Identificación de causas raíz</span>
              </div>
            </div>
          </div>

          <div className="border p-6 pb-8 relative hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue60 text-white mb-6">
              <Number_3 size={28} />
            </div>
            <h3 className="mb-3">Recomendaciones y Plan de Acción</h3>
            <p className="text-gray60 mb-6">
              Desarrollo de soluciones específicas para eliminar las causas
              identificadas, con evaluaciones de factibilidad técnica y
              económica.
            </p>
            <div className="mt-4 pt-4 border-t border-gray20">
              <div className="flex items-center gap-2 mb-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Acciones específicas y medibles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Priorización por impacto</span>
              </div>
            </div>
          </div>

          <div className="border p-6 pb-8 relative hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue60 text-white mb-6">
              <Number_4 size={28} />
            </div>
            <h3 className="mb-3">Implementación y Seguimiento</h3>
            <p className="text-gray60 mb-6">
              Ejecución del plan de acción, verificación de la eficacia de las
              soluciones y documentación de lecciones aprendidas.
            </p>
            <div className="mt-4 pt-4 border-t border-gray20">
              <div className="flex items-center gap-2 mb-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Verificación de resultados</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-blue60" />
                <span className="text-sm">Difusión de aprendizajes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-blue10 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
          <div className="sm:mr-6 flex-shrink-0">
            <TreeView size={48} className="text-blue60" />
          </div>
          <p className="text-sm leading-relaxed">
            Nuestro enfoque combina el rigor técnico del Árbol Lógico de Fallas
            con técnicas complementarias como 5-Porqués, Ishikawa y Análisis de
            Barreras cuando son necesarias, adaptando la metodología al contexto
            específico de cada investigación.
          </p>
        </div>
      </div>

      <div className="contentSection">
        <h2 className="mb-8">El poder del Árbol Lógico de Fallas</h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="border p-4 sm:p-8 bg-gray10">
              <div className="flex justify-center">
                <img
                  src="/arbol-logico.png"
                  alt="Diagrama de Árbol Lógico de Fallas"
                  className="w-full sm:w-[80%] h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <GitBranch size={32} className="text-blue60" />
                </div>
                <div>
                  <h3 className="mb-2">Mapeo estructurado</h3>
                  <p className="text-gray60">
                    Organiza la investigación en un esquema lógico que conecta
                    el evento principal con sus factores causales, facilitando
                    la visualización de relaciones complejas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <Target size={32} className="text-blue60" />
                </div>
                <div>
                  <h3 className="mb-2">Enfoque en la evidencia</h3>
                  <p className="text-gray60">
                    Cada ramificación del árbol debe sustentarse en evidencia
                    verificable, eliminando especulaciones y garantizando
                    conclusiones objetivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <Microscope size={32} className="text-blue60" />
                </div>
                <div>
                  <h3 className="mb-2">Profundidad multinivel</h3>
                  <p className="text-gray60">
                    Permite descender desde los mecanismos físicos de falla
                    hasta los factores humanos y organizacionales que
                    contribuyeron al evento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray10 flex-shrink-0">
                  <LineChart size={32} className="text-blue60" />
                </div>
                <div>
                  <h3 className="mb-2">Precisión cuantificable</h3>
                  <p className="text-gray60">
                    Facilita la asignación de probabilidades y la evaluación del
                    impacto relativo de cada causa, optimizando la priorización
                    de acciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection bg-gray90 text-white">
        <h2 className="text-blue60 mb-8">
          Roles y responsabilidades en la investigación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            Icon={Users}
            title="Equipo Natural de Trabajo"
            description="Grupo multidisciplinario conformado específicamente para cada investigación, integrado por especialistas técnicos, operadores, supervisores y representantes de seguridad y calidad."
            variant="dark"
          />
          <ServiceCard
            Icon={FileSearch}
            title="Líder de Investigación"
            description="Especialista en análisis RCA que guía la aplicación metodológica, facilita las sesiones de trabajo, verifica la consistencia lógica y asegura la objetividad del proceso."
          />
          <ServiceCard
            Icon={AlertCircle}
            title="Expertos Técnicos"
            description="Profesionales con conocimiento especializado en los sistemas o equipos involucrados, que aportan su expertise para la validación de hipótesis y el desarrollo de soluciones."
          />
          <ServiceCard
            Icon={BookOpen}
            title="Documentador"
            description="Responsable de registrar hallazgos, evidencias y decisiones durante la investigación, así como de compilar la documentación final del análisis y las recomendaciones."
          />
          <ServiceCard
            Icon={CheckCircle2}
            title="Responsables de Implementación"
            description="Encargados de ejecutar las acciones correctivas y preventivas derivadas del análisis, dentro de los plazos y con los recursos asignados."
          />
          <ServiceCard
            Icon={ClipboardList}
            title="Verificadores"
            description="Evalúan la efectividad de las acciones implementadas y confirman que las causas raíz identificadas hayan sido efectivamente eliminadas o mitigadas."
          />
        </div>
      </div>

      <div className="contentSection">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border p-8">
            <h2 className="mb-6">Herramientas y formatos especializados</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue60 rounded-full flex-shrink-0">
                  <SyncSettings size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="mb-1">
                    Software de modelado de árboles lógicos
                  </h4>
                  <p className="text-gray60 text-sm">
                    Herramientas digitales para la construcción, validación y
                    documentación de árboles de falla complejos, facilitando su
                    análisis y comunicación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue60 rounded-full flex-shrink-0">
                  <DataVolume size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="mb-1">
                    Matrices de recolección de evidencias
                  </h4>
                  <p className="text-gray60 text-sm">
                    Formatos estructurados para documentar sistemáticamente
                    observaciones, entrevistas, resultados de pruebas y análisis
                    de laboratorio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue60 rounded-full flex-shrink-0">
                  <QuestionAnswering size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Guías de entrevista especializada</h4>
                  <p className="text-gray60 text-sm">
                    Protocolos diseñados para extraer información crucial sin
                    inducir sesgos, aplicando técnicas de entrevista cognitiva y
                    forense.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue60 rounded-full flex-shrink-0">
                  <Inspection size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Laboratorio móvil de análisis</h4>
                  <p className="text-gray60 text-sm">
                    Equipamiento portátil para análisis metalúrgico, de
                    lubricantes, vibraciones y otras pruebas in-situ que
                    preservan la integridad de la evidencia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border p-8">
            <h2 className="mb-6">Beneficios comprobados</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Reducción de hasta un 85% en la recurrencia de fallas en
                  equipos críticos.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Disminución significativa de horas de mantenimiento no
                  planificado.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Optimización de procedimientos de operación y mantenimiento
                  basados en hallazgos de las investigaciones.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Desarrollo de capacidades internas para identificación
                  temprana de condiciones de falla potencial.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Transformación cultural hacia un enfoque basado en evidencias
                  para la solución de problemas.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue60 rounded-full mt-2"></div>
                <p>
                  Integración efectiva de las lecciones aprendidas en la gestión
                  de activos y procesos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

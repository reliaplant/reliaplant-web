import { Metadata } from "next";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { Headset } from '@carbon/icons-react';

export const metadata: Metadata = {
    title: "Diagnóstico de la Gestión de Mantenimiento | Evaluación Integral | Reliaplant",
    description: "Evaluación integral de la gestión de mantenimiento en 15 áreas clave. Identifique oportunidades de mejora, optimice procesos y eleve la confiabilidad de sus activos industriales.",
    keywords: ["diagnóstico de mantenimiento", "gestión de mantenimiento", "evaluación integral", "confiabilidad", "activos industriales", "optimización", "reliaplant", "consultoría"],
    openGraph: {
        title: "Diagnóstico de la Gestión de Mantenimiento | Reliaplant",
        description: "Evaluación profesional de su sistema de gestión de mantenimiento: procesos, indicadores, planes y estrategias para una mayor confiabilidad operacional.",
        images: [{
            url: 'https://reliaplant-2c104.web.app/assets/bgDiagnostico.jpg',
            width: 1200,
            height: 630,
            alt: 'Diagnóstico de Gestión de Mantenimiento'
        }],
        type: 'website',
        url: 'https://reliaplant-2c104.web.app/consultoria/diagnostico-gestion',
    },
    twitter: {
        card: "summary_large_image",
        title: "Diagnóstico de la Gestión de Mantenimiento | Reliaplant",
        description: "Evaluación integral de sistemas de gestión de mantenimiento. 15 áreas clave para optimizar la confiabilidad de sus activos industriales.",
        images: [{
            url: 'https://reliaplant-2c104.web.app/assets/bgDiagnostico.jpg',
            alt: 'Diagnóstico de Gestión de Mantenimiento'
        }],
    },
    alternates: {
        canonical: "https://reliaplant-2c104.web.app/consultoria/diagnostico-gestion",
    },
}

const evaluationData = [
    { area: "E1", description: "EVALUACIÓN DE LA GESTIÓN Y ESTRUCTURA DEL DEPARTAMENTO DE MANTENIMIENTO" },
    { area: "E2", description: "REVISIÓN DEL SISTEMA DE INDICADORES PARA LA EVALUACIÓN DEL SISTEMA DE GESTIÓN DE MANTENIMIENTO" },
    { area: "E3", description: "REVISIÓN DE PLANES DE MANTENIMIENTO EXISTENTES POR TIPO DE EQUIPO" },
    { area: "E4", description: "REVISIÓN DE LA ESTRATEGIA Y GESTIÓN DEL MANTENIMIENTO PREDICTIVO" },
    { area: "E5", description: "REVISIÓN DE LA ESTRUCTURA DE ACTIVOS E INFORMACIÓN DISPONIBLE EN CMMS" },
    { area: "E6", description: "GESTIÓN DE LA DOCUMENTACIÓN TÉCNICA" },
    { area: "E7", description: "REVISIÓN DE LOS CRITERIOS DE ASIGNACIÓN DE CRITICIDAD" },
    { area: "E8", description: "INVESTIGACIÓN DE INCIDENTES Y FALLAS" },
    { area: "E9", description: "CONTROL DE COSTOS DE MANTENIMIENTO" },
    { area: "E10", description: "EVALUACIONES ECONÓMICAS PARA LA TOMA DE DECISIONES" },
    { area: "E11", description: "GESTIÓN DE LA OBSOLESCENCIA" },
    { area: "E12", description: "REVISIÓN DE PROCEDIMIENTOS PARA EL MANEJO Y OPTIMIZACIÓN DE REPUESTOS MRO" },
    { area: "E13", description: "REVISIÓN DEL GRADO DE MADUREZ DE INGENIERÍA DE CONFIABILIDAD EN RELACIÓN A LAS METODOLOGÍAS APLICADAS" },
    { area: "E14", description: "GESTIÓN DE LA FORMACIÓN DEL PERSONAL" },
    { area: "E15", description: "ANÁLISIS DE BRECHAS DEL PERSONAL / ENCUESTA AL PERSONAL" },
];

export default function DiagnosticoGestion() {
    return (
        <div className="mx-auto">
            {/* Header */}
            <div className="">
                <div className="bg-gray-100 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
                    {/* Texto */}
                    <div className="relative z-10 text-whites w-full md:w-[50vw] p-4 sm:p-6 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
                        <div>
                        <div className="flex flex-row flex-wrap">
                                <span className="text-blue60 font-light mb-4">
                                    <a href="/" className="hover:underline">Inicio</a> <span className="mx-2 text-gray60">{'/'}</span>
                                    <a href="/consultoria" className="hover:underline">Consultoría</a> <span className="mx-2 text-gray60">{'/'}</span>
                                    Diagnóstico de Gestión
                                </span>
                            </div>
                            <h1 className="">
                                Diagnóstico de la Gestión de Mantenimiento
                            </h1>
                            <h4>
                                Los estudios orientados a la mejora Confiabilidad son realizados de acuerdo con la madurez
                                de la organización y la fase en la que se encuentra. La base para la ejecución de los estudios inicia
                                con el registro de activos.
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
                    <div className="relative md:absolute md:right-0 h-64 md:h-full w-full md:w-[50vw] bg-[url('/assets/bgDiagnostico.jpg')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>
                    </div>
                </div>
            </div>

           
            {/* Phases section */}
            <div className="contentSection">
                    <h2 className="">Fases del Diagnóstico</h2>
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue60 mb-4 md:mb-8">
                            FASE I: PREPARACIÓN DEL TRABAJO
                        </h3>
                        <p className="text-sm md:text-base">
                            EL CONSULTOR establecerá comunicación con personal del CLIENTE para preparar todos los aspectos relacionados con la logística del SERVICIO, incluyendo lo siguiente:
                        </p>
                        <ul className="list-disc ml-4 text-sm md:text-base mt-2">
                            <li>Requerimientos para el lugar de reunión con el personal del CLIENTE</li>
                            <li>Requerimientos de documentación para acceso a la planta del CLIENTE</li>
                            <li>Recolección de información del CLIENTE relacionada con: cantidad de equipos, listado de equipos, CMMS utilizado, Organigrama general de la organización y Organigrama de mantenimiento</li>
                            <li>Listado de participantes por parte del cliente</li>
                            <li>Elaboración de programa general de visita</li>
                            <li>Programa preliminar de entrevistas - reuniones</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue60 mb-4 md:mb-8">
                            FASE II: VISITA A OFICINAS Y CAMPO, ENTREVISTAS AL PERSONAL Y RECOPILACIÓN DE INFORMACIÓN
                        </h3>
                        <p className="text-sm md:text-base">
                            EL CONSULTOR se trasladará un periodo de 2 semanas continuas (10 días hábiles continuos, de lunes a viernes) a las instalaciones del cliente para realizar actividades de revisión de información, entrevistas al personal y revisión de los sistemas de gestión en conjunto con EL CLIENTE. El día final de la visita se mostrará un resumen de los hallazgos realizados.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue60 mb-4 md:mb-8">
                            FASE III: ELABORACIÓN DE REPORTE DE DIAGNÓSTICO
                        </h3>
                        <p className="text-sm md:text-base mb-3">
                            Terminada la visita a planta, el personal de EL CONSULTOR se trasladará a sus oficinas en el estado de Querétaro para preparar el informe final con los hallazgos realizados, las oportunidades de mejora identificadas y las recomendaciones dirigidas a aprovecharlas.
                        </p>
                        <p className="text-sm md:text-base">
                            Dicho reporte se efectuará en forma de reporte PDF y presentación en PowerPoint, en la cual se mostrarán los resultados obtenidos en cada uno de los procesos evaluados. Igualmente se incluirá una estrategia general de implementación y un roadmap, mostrando los pasos a seguir para implementar las recomendaciones.
                        </p>
                    </div>
            </div>
            <div className="contentSection bg-gray-100">
                    <h2 className="">Áreas del Diagnóstico</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border">
                            <thead className="bg-gray-50 border">
                                <tr>
                                    <th scope="col" className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Área
                                    </th>
                                    <th scope="col" className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                        Descripción
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {evaluationData.map((item, index) => (
                                    <tr key={index} className="border">
                                        <td className="px-3 md:px-6 py-2 md:py-4 text-xs md:text-sm font-medium text-gray-900">{item.area}</td>
                                        <td className="px-3 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            {/* Evaluation areas details */}
            <div className="py-8 md:py-12 px-4 sm:px-6 md:px-[3vw] lg:px-[5vw]">
                <div className="bg-white ">
                    <div className="border-b border-black">
                        <h2 className="">
                            DESCRIPCIÓN BREVE DE LAS AREAS DE EVALUACIÓN
                        </h2>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E1</span> - EVALUACIÓN DE LA GESTIÓN Y ESTRUCTURA DEL DEPARTAMENTO DE MANTENIMIENTO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Analizar la visión, estructura y alineación del departamento de mantenimiento con la gestión de activos.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión del manual corporativo de mantenimiento y manual de gestión de activos.</li>
                                <li>Evaluación de metas y objetivos organizacionales y su relación con los resultados de mantenimiento de los últimos periodos.</li>
                                <li>Análisis del desempeño de mantenimiento dentro del sistema de gestión de activos.</li>
                                <li>Revisión de procesos y subprocesos de mantenimiento (planeación, programación, ejecución y análisis de resultados).</li>
                                <li>Análisis de la estructura organizativa y matriz de responsabilidades.</li>
                                <li>Evaluación del plan de gestión de activos a corto, mediano y largo plazo.</li>
                                <li>Entrevistas con el personal clave (gerente de activos, confiabilidad y áreas operativas).</li>
                                <li>Visita de campo con levantamiento fotográfico general.</li>
                            </ul>
                            <p className="mt-2"> Nota: Esta fase requiere la participación del gerente de activos y confiabilidad para garantizar una evaluación integral.</p>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E2</span> - REVISIÓN DEL SISTEMA DE INDICADORES PARA LA EVALUACIÓN DEL SISTEMA DE GESTIÓN DE MANTENIMIENTO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Analizar la estructura, documentación, herramientas de visualización y su relación con las metas organizacionales.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Indicadores de Nivel 1 (Estratégicos): Relacionados con la toma de decisiones a nivel corporativo. Evalúan el impacto del mantenimiento en la rentabilidad, el ciclo de vida de los activos y el cumplimiento de objetivos de largo plazo.</li>
                                <li>Indicadores de Nivel 2 (Tácticos): Enfocados en la gestión operativa de mantenimiento. Miden la eficiencia de planificación, ejecución y cumplimiento de programas de mantenimiento y confiabilidad.</li>
                                <li>Indicadores de Nivel 3 (Operativos): Orientados a la supervisión de actividades diarias y respuesta a eventos no planificados. Evaluación de desempeño en términos de disponibilidad, tiempos de respuesta, cumplimiento de tareas y reducción de fallas.</li>
                                <li>Revisión de la Ficha Técnica de Indicadores: se verificará la documentación de soporte para cada KPI, incluyendo definición clara y objetivo del indicador, fórmula de cálculo y parámetros de medición, intervalos de evaluación y criterios de aceptación, ejemplos prácticos y aplicación en el contexto operativo.</li>
                                <li>Análisis de Herramientas de Visualización y Reportes: se evaluará la disponibilidad y confiabilidad de los datos en las plataformas digitales utilizadas, considerando integración con el CMMS y otras fuentes de datos relevantes, funcionalidades disponibles para análisis y generación de reportes, capacidad de monitoreo en tiempo real y acceso a históricos, necesidades del equipo técnico y administrativo en cuanto a generación de informes y toma de decisiones.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E3</span> - REVISIÓN DE PLANES DE MANTENIMIENTO EXISTENTES POR TIPO DE EQUIPO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión de los planes de mantenimiento preventivos por familia y tipo de equipo.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión de los mantenimientos rutinarios ejecutados por operaciones.</li>
                                <li>Revisión del sistema de gestión y control para la trazabilidad y auditabilidad de los planes de mantenimiento.</li>
                                <li>Revisión de la accesibilidad de la información de planes de mantenimiento, roles, responsabilidades para el manejo del cambio en la gestión de mantenimiento.</li>
                                <li>Revisión de los procedimientos de mantenimiento como soporte a las hojas de ruta.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E4</span> - REVISIÓN DE LA ESTRATEGIA Y GESTIÓN DEL MANTENIMIENTO PREDICTIVO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Evaluar la gestión del mantenimiento predictivo, asegurando su alineación con la estrategia de confiabilidad de la organización. Se analizarán los métodos, modelos y herramientas utilizadas en el mantenimiento predictivo para determinar su efectividad y oportunidades de mejora.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Análisis de la madurez del programa predictivo.</li>
                                <li>Análisis de Técnicas y Frecuencias Aplicadas por Tipo de Equipo.</li>
                                <li>Análisis de los criterios para la asignación de monitoreo de condición (en línea o intermitente) y validación de los criterios de criticidad (frecuencia de aplicación en función de la confiabilidad del equipo y el historial de fallas).</li>
                                <li>Revisión general de los modelos predictivos utilizados y su capacidad para anticipar fallas.</li>
                                <li>Revisión de los Informes de Mantenimiento Predictivo.</li>
                                <li>Análisis del impacto de las recomendaciones predictivas en la reducción de fallas y optimización de costos.</li>
                                <li>Revisión de los Sistemas de Información para la Gestión del Mantenimiento Predictivo.</li>
                                <li>Evaluación del software y herramientas utilizadas para la recopilación, análisis y gestión de datos predictivos.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E5</span> - REVISIÓN DE LA ESTRUCTURA DE ACTIVOS E INFORMACIÓN DISPONIBLE EN CMMS
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Evaluar la estructura actual de activos en el CMMS (SAP PM) para identificar oportunidades de mejora en la gestión del mantenimiento, optimización de la jerarquía de activos y alineación con estrategias de confiabilidad.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Extracción y análisis del listado de activos en CMMS y su alineación con estándares cómo la ISO 14224.</li>
                                <li>Verificación de la disponibilidad del TECHNICAL MASTER DATA de los equipos.</li>
                                <li>Análisis del catálogo de codificación de fallas.</li>
                                <li>Revisión de la calidad de la información registrada en avisos y órdenes de mantenimiento.</li>
                                <li>Revisión del listado de sistemas críticos.</li>
                                <li>Revisión de la información técnica (documentación asociada) a los activos en CMMS.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E6</span> - GESTIÓN DE LA DOCUMENTACIÓN TÉCNICA
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Documentación por equipo:</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Manual del Fabricante / Datasheets: Especificaciones técnicas y guías de operación.</li>
                                <li>Procedimientos: Instrucciones detalladas para actividades de mantenimiento y operación.</li>
                                <li>Tareas / Checklist (QC): Verificaciones para garantizar la calidad y cumplimiento de tareas de mantenimiento.</li>
                                <li>Informes de RCA (Causa Raíz): Análisis de fallos y medidas correctivas.</li>
                            </ul>
                            <p className="mt-2">Por Sistema y de Ingeniería:</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>DTIs / PFDs: Diagramas de tuberías, instrumentación y flujo de procesos.</li>
                                <li>Diagramas y planos de ingeniería (PLG, isométricos, arreglo eléctrico, etc).</li>
                                <li>Filosofía de Operación del proceso (BPCS).</li>
                                <li>Filosofía de Operación del (SPPE) (Causa-Efecto): Interacciones y respuestas esperadas de los sistemas de seguridad.</li>
                                <li>Filosofía de operación del sistema de gas y fuego.</li>
                                <li>HAZOP / SIL: Evaluaciones de riesgo y niveles de integridad de seguridad.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E7</span> - REVISIÓN DE LOS CRITERIOS DE ASIGNACIÓN DE CRITICIDAD
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión de los criterios de evaluación de criticidad según el procedimiento existente.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Comparación de los resultados de criticidad con datos de desempeño de activos en SAP PM (órdenes correctivas y preventivas, horas de intervención, costos de mantenimiento, indicadores de confiabilidad, etc.).</li>
                                <li>Identificación de inconsistencias entre la clasificación de criticidad y el comportamiento operativo real de los activos.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E8</span> - INVESTIGACIÓN DE INCIDENTES Y FALLAS
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión del procedimiento corporativo para la investigación de problemas recurrentes y catastróficos.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión del sistema de gestión de los análisis causa raíz.</li>
                                <li>Revisión de los informes de análisis causa raíz.</li>
                                <li>Revisión de la efectividad de los análisis causa raíz.</li>
                                <li>Revisión del proceso de seguimiento e implementación de mejoras derivadas de los análisis causa raíz.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E9</span> - CONTROL DE COSTOS DE MANTENIMIENTO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Verificación de existencia de registros y análisis de costos de mantenimiento.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión de frecuencias de revisión de y análisis de costos de mantenimiento.</li>
                                <li>Verificación de aplicación de medidas para el mejoramiento de la eficiencia energética.</li>
                                <li>Verificación de uso y análisis de indicadores de costos de mantenimiento.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E10</span> - EVALUACIONES ECONÓMICAS PARA LA TOMA DE DECISIONES
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión del procedimiento corporativo de evaluaciones económicas como soporte para la toma de decisiones.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Verificación de la aplicación de análisis de optimización costo - riesgo para determinar frecuencias óptimas de tareas de mantenimiento e inspección.</li>
                                <li>Verificación de la aplicación de análisis de costo de ciclo de vida (LCC) para la toma de decisiones relacionadas con la inversión en actualizaciones tecnológicas, reemplazos o rediseños.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E11</span> - GESTIÓN DE LA OBSOLESCENCIA
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión del sistema de gestión para el manejo de la obsolescencia.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión de los procedimientos establecidos para la gestión de obsolescencia.</li>
                                <li>Revisión del procedimiento establecido para determinar el riesgo de obsolescencia.</li>
                                <li>Revisión de las estrategias establecidas para monitorear la obsolescencia de los activos anunciada por los fabricantes (OEM).</li>
                                <li>Revisión de la metodología aplicada para determinar la vida útil remanente económica de los activos físicos de producción.</li>
                                <li>Revisión de la efectividad de las estrategias de obsolescencia aplicadas.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E12</span> - REVISIÓN DE PROCEDIMIENTOS PARA EL MANEJO Y OPTIMIZACIÓN DE REPUESTOS MRO
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión del proceso de procura de materiales y servicios.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión del proceso de selección de proveedores de materiales y servicios.</li>
                                <li>Revisión del proceso de control de materiales.</li>
                                <li>Revisión del proceso de control de almacenes.</li>
                                <li>Verificación de proceso de reserva de materiales para mantenimiento.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E13</span> - REVISIÓN DEL GRADO DE MADUREZ DE INGENIERÍA DE CONFIABILIDAD
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Verificación de aplicación del análisis de criticidad a equipos y sistemas.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Verificación de aplicación de AMEF, MCC para desarrollar planes de mantenimiento.</li>
                                <li>Verificación de aplicación de IBR para desarrollar planes de inspección a equipos estáticos que contienen fluidos.</li>
                                <li>Verificación de análisis causa raíz para eliminar problemas recurrentes y esporádicos.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-black flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E14</span> - GESTIÓN DE LA FORMACIÓN DEL PERSONAL
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Revisión de la matriz de roles, responsabilidades, conocimientos y competencias.</p>
                            <ul className="list-disc ml-4 mt-2">
                                <li>Revisión de los planes de formación.</li>
                                <li>Análisis del sistema de evaluación y control de competencias.</li>
                                <li>Revisión del sistema de gestión del aprendizaje.</li>
                                <li>Análisis del histórico de capacitaciones de los últimos periodos.</li>
                                <li>Entrevistas con el personal de mantenimiento y recursos humanos.</li>
                                <li>Análisis de los indicadores de entrenamiento y formación.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b-0 flex flex-col md:flex-row py-6 md:py-8 gap-4 md:gap-12">
                        <div className="w-full md:w-[30%] text-sm md:text-base font-bold">
                            <span className="text-blue60 ">E15</span> - ANÁLISIS DE BRECHAS DEL PERSONAL / ENCUESTA AL PERSONAL
                        </div>
                        <div className="w-full md:w-[70%] text-sm md:text-base">
                            <p>Evaluación de brechas en conocimientos clave mediante la aplicación de una prueba diagnóstica en línea (120 preguntas) diferenciada por nivel: técnico, supervisión y gerencial. El objetivo es identificar deficiencias en competencias fundamentales para una gestión de mantenimiento eficiente y sistemática.</p>
                            <p className="mt-2">Análisis de percepción del personal a través de una encuesta estructurada que permite evaluar su visión sobre la eficiencia de los procesos, disponibilidad de recursos y áreas críticas. Este ejercicio busca identificar patrones y oportunidades de mejora que podrían no ser evidentes para la gerencia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
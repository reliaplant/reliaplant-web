import { Metadata } from "next";
import { DocumentAdd, DocumentView, DocumentImport, RequestQuote, Template, Flow, CheckmarkOutline, Checkbox, ProgressBar, TextMining, TextLink, Edit, DataShare, Report, DocumentBlank } from '@carbon/icons-react';
import { BookOpen, FileText, ClipboardCheck, Users, Layers, Settings, Check, BookCopy, Library, FileSearch, Award, ScrollText, BarChart2, ShieldCheck, UserCog, Workflow } from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Manuales Corporativos y Procedimientos de Mantenimiento | RELIAPLANT",
    },
    description: "Desarrollo de documentación técnica estandarizada para optimizar los procesos de mantenimiento y confiabilidad en tu organización.",
}

export default function ManualesCorporativos() {
    return (
        <div>
            <div className="">
                <div className="relative h-[55vh] flex flex-col md:flex-row items-center justify-start">
                    {/* Contenido */}
                    <div className="relative z-10 text-whites w-full md:w-[45vw] h-full bg-gray10 p-4 md:p-8 md:px-12 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row">
                                <span className="text-blue60 font-light text-sm md:text-base">
                                    Inicio <span className="mx-2 text-gray60">{'/'}</span> Consultoria <span className="mx-2 text-gray60">{'/'}</span> Manuales y Procedimientos
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-6xl font-light text-black">Manuales Corporativos y Procedimientos de Mantenimiento</h1>
                            <div className="mt-4 md:mt-8 text-base md:text-[1.15vw] leading-[136%]">
                                Documentación técnica estructurada que estandariza procesos, asegura la transmisión del conocimiento y consolida las mejores prácticas en tu organización para garantizar la excelencia operativa.
                            </div>
                        </div>
                        <div>
                            <button className="font-light text-[1rem] md:text-[1.1rem] flex flex-row items-center gap-4 md:gap-8 mb-4 bg-gray90">
                                <span>
                                    Solicita una cotización
                                </span>
                                <RequestQuote size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-[30vh] md:h-full z-10 w-full md:w-[55vw] bg-[url('../assets/bgProcedimientos2.jpg')] bg-cover bg-center">
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-16 px-4 md:px-[8vw]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-8">Gestión del conocimiento para la excelencia operativa</h2>
                        <p className="text-base md:text-[1.15vw] leading-[136%] mb-6">
                            En la moderna gestión de activos, el conocimiento estructurado se ha convertido en un pilar fundamental que separa a las organizaciones de excelencia de aquellas que operan en estado reactivo.
                        </p>
                        <p className="text-base md:text-[1.15vw] leading-[136%] mb-6">
                            Nuestros servicios de desarrollo documental transforman el conocimiento tácito de tu organización en sistemas estructurados que garantizan continuidad operativa, facilitan la toma de decisiones y aseguran el cumplimiento de normativas internacionales como ISO 55000.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 border">
                        <div className="flex items-start gap-3 border-b h-1/4 flex flex-row items-center px-6">
                            <div className="p-1 bg-blue60 text-white rounded-full">
                                <Check size={16} />
                            </div>
                            <p className="mb-0">Preservación del conocimiento crítico</p>
                        </div>
                        <div className="flex items-start gap-3 border-b h-1/4 flex flex-row items-center px-6">
                            <div className="p-1 bg-blue60 text-white rounded-full">
                                <Check size={16} />
                            </div>
                            <p className="mb-0">Estandarización de procesos</p>
                        </div>
                        <div className="flex items-start gap-3 border-b h-1/4 flex flex-row items-center px-6">
                            <div className="p-1 bg-blue60 text-white rounded-full">
                                <Check size={16} />
                            </div>
                            <p className="mb-0">Cumplimiento normativo y regulatorio</p>
                        </div>
                        <div className="flex items-start gap-3 h-1/4 flex flex-row items-center px-6">
                            <div className="p-1 bg-blue60 text-white rounded-full">
                                <Check size={16} />
                            </div>
                            <p className="mb-0">Reducción de riesgos operacionales</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:mt-24 px-4 md:px-[8vw] border-b">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h2 className="border-b border-blue60 border-b-4 w-fit text-xl md:text-3xl">Soluciones documentales</h2>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-[8vw] py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="border p-4 md:p-6 pb-6 relative flex flex-col justify-between">
                        <div>
                            <Library size={36} className="text-blue60 mb-4" />
                            <h3 className="text-lg md:text-xl font-medium mb-4">Biblioteca Digital Documentada</h3>
                            <p className="text-gray60 mb-4 md:mb-6 text-sm md:text-base">
                                Repositorio digital centralizado que organiza, controla y facilita el acceso a toda la documentación técnica de la organización con controles de seguridad.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Control de versiones automatizado</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Flujos de trabajo de aprobación</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Gestión de permisos por roles</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <button className="w-full py-2.5 border border-blue60 text-blue60 hover:bg-blue60 hover:text-white transition-all duration-300 text-sm md:text-base">
                                Hablar con un especialista
                            </button>
                        </div>
                    </div>

                    <div className="border-2 border-gray90 p-4 md:p-6 pb-6 relative shadow-lg flex flex-col justify-between">
                        <div>
                            <BookCopy size={36} className="text-blue60 mb-4" />
                            <h3 className="text-lg md:text-xl font-medium mb-4">Manual Corporativo de Mantenimiento y/o Confiabilidad</h3>
                            <p className="text-gray60 mb-4 md:mb-6 text-sm md:text-base">
                                Documento maestro que establece la filosofía, estructura, procesos y estrategias para la gestión de mantenimiento y confiabilidad en toda la organización.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Modelo de gestión integral</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Estrategias y procesos definidos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span className="text-sm md:text-base">Roles y responsabilidades claras</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <button className="w-full py-2.5 bg-gray90 text-white hover:bg-blue70 transition-all duration-300 text-sm md:text-base">
                                Hablar con un especialista
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-12 bg-gray10 p-4 md:p-6 flex items-center">
                    <p className="text-sm md:text-[1.15vw] leading-[136%] mb-0">
                        Todos nuestros documentos se desarrollan considerando estándares internacionales como ISO 55000 y se adaptan específicamente a los procesos, cultura y objetivos de tu organización.
                    </p>
                </div>
            </div>

            <div className="mt-8 md:mt-16 px-4 md:px-[8vw]">
                <h2 className="text-2xl md:text-4xl font-light mb-6 md:mb-12 text-center">Documentación específica según requisitos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="p-3 bg-gray10">
                                <FileSearch size={32} className="text-blue60" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-4">Manual de Investigación de Incidentes (ACR)</h3>
                                <p className="text-gray60 leading-relaxed text-sm md:text-base">
                                    Documento que establece metodologías estructuradas para la identificación, análisis y corrección de causas raíz en incidentes, fallas y no conformidades.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Metodologías de evaluación: Ishikawa, 5 Porqués, Árbol Lógico</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Procedimientos y diagramas de flujo detallados</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Roles y responsabilidades definidas</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Formatos y plantillas estandarizados</p>
                            </div>
                        </div>
                    </div>

                    <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="p-3 bg-gray10">
                                <Award size={32} className="text-blue60" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-4">Matriz de Roles y Competencias</h3>
                                <p className="text-gray60 leading-relaxed mb-0 text-sm md:text-base">
                                    Sistema integral que define roles, responsabilidades, competencias requeridas y planes de desarrollo para el personal de mantenimiento y confiabilidad.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Perfiles de puesto detallados</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Mapas de competencias técnicas y blandas</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Planes de carrera personalizados</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Programas de adiestramiento basados en brechas</p>
                            </div>
                        </div>
                    </div>

                    <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="p-3 bg-gray10">
                                <ScrollText size={32} className="text-blue60" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-4">Procedimientos para Evaluaciones Económicas</h3>
                                <p className="text-gray60 leading-relaxed mb-0 text-sm md:text-base">
                                    Manual que establece metodologías para la toma de decisiones económicas relacionadas con activos, incluyendo análisis de costo-beneficio y ciclo de vida.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Análisis Costo-Riesgo-Beneficio</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Análisis de Costo de Ciclo de Vida (LCC)</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Evaluación de Vida Útil Remanente</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Evaluación y Manejo de Obsolescencia</p>
                            </div>
                        </div>
                    </div>

                    <div className="border p-4 md:p-8 transition-all duration-200 hover:shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="p-3 bg-gray10">
                                <ClipboardCheck size={32} className="text-blue60" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-4">Plan de Gestión de Activos</h3>
                                <p className="text-gray60 leading-relaxed mb-0 text-sm md:text-base">
                                    Documento estratégico que integra la gestión de activos físicos con los objetivos corporativos, estableciendo lineamientos para optimizar su ciclo de vida.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Políticas corporativas</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Objetivos y metas medibles</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Planes de acción específicos</p>
                            </div>
                            <div className="flex flex-row items-start gap-2 md:gap-3 border p-2 rounded bg-gray10">
                                <div className="w-3 h-3 min-w-[12px] min-h-[12px] bg-blue60 rounded-full mt-1"></div>
                                <p className="text-gray60 text-xs md:text-base mb-0">Alineación con estándar ISO 55000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:mt-24 px-4 md:px-[8vw] bg-gray10 text-white py-8 md:py-16">
                <h2 className="text-2xl md:text-4xl font-light mb-6 md:mb-12">Beneficios de la gestión documental estructurada</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="p-4 md:p-6 border bg-white">
                        <UserCog size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Preservación del conocimiento</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Retención del expertise técnico crítico dentro de la organización, reduciendo la dependencia de personal específico y facilitando la curva de aprendizaje.
                        </p>
                    </div>

                    <div className="p-4 md:p-6 border bg-white">
                        <Workflow size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Estandarización de procesos</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Homogeneización de criterios y métodos de trabajo en todas las áreas, garantizando consistencia y calidad en la ejecución de actividades técnicas.
                        </p>
                    </div>

                    <div className="p-4 md:p-6 border bg-white">
                        <ShieldCheck size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Cumplimiento normativo</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Alineación con requisitos regulatorios y estándares internacionales facilitando auditorías y certificaciones.
                        </p>
                    </div>

                    <div className="p-4 md:p-6 border bg-white">
                        <Settings size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Mejora continua</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Base documental que sustenta la evaluación de procesos, identificación de oportunidades y aplicación sistemática de mejoras.
                        </p>
                    </div>

                    <div className="p-4 md:p-6 border bg-white">
                        <Users size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Desarrollo de capacidades</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Marco estructurado para la identificación de necesidades de capacitación y establecimiento de rutas de desarrollo profesional.
                        </p>
                    </div>

                    <div className="p-4 md:p-6 border bg-white">
                        <BarChart2 size={28} className="text-blue60 mb-2 md:mb-4" />
                        <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">Toma de decisiones informada</h3>
                        <p className="text-gray60 text-sm md:text-base">
                            Criterios y metodologías claras que aseguran consistencia y objetividad en decisiones técnicas y económicas relacionadas con activos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
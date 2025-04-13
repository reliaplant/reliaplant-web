import { Metadata } from "next";
import { Add, Asset, Category, ChevronDown, Close, DecisionNode, Number_7, Query, Share, Subflow, Warning, ArrowUpRight, Industry, Activity, EventWarning, TransformInstructions, ArrowRight, RequestQuote, SupportVectorMachine, DataAnalytics, Headset, Number_1, Number_2, Number_3, Number_4, QuestionAnswering, TreeView, DataVolume, SyncSettings, Inspection } from '@carbon/icons-react';
import { MdMoney, MdScience } from "react-icons/md";
import { Binoculars, Compass } from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Conctacto",
    },
    description: "Desc Contacto",
}

export default function Contacto() {
    return (
        <div>
            {/* Header */}
            <div className="px-4 md:px-[4vw]">
                <div className="relative h-[55vh] flex flex-col md:flex-row items-center justify-start">
                    {/* Texto */}
                    <div className="relative z-10 text-whites w-full md:w-[40vw] h-full bg-gray10 p-8 md:px-12 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row">
                                <span className="text-blue60 font-light">
                                    <a href="/" className="hover:underline">Inicio</a> <span className="mx-2 text-gray60">{'/'}</span> 
                                    <a href="/consultoria" className="hover:underline">Consultoria</a> <span className="mx-2 text-gray60">{'/'}</span> 
                                    Registro de Activos
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-light text-black">Construcción del Registro de Activos en CMMS</h1>
                            <div className="mt-8 text-base md:text-[1.15vw] leading-[136%]">
                                Logra que toda la información en el CMMS asociada a los activos esté correcta, completa y alineada con las mejores prácticas de la industria. Desde la recolección de datos en campo, la definición de estructuras, construcción de la taxonomía y carga en CMMS.
                            </div>
                        </div>
                        <div>
                            <button className="font-light text-sm md:text-[1.1rem] flex flex-row items-center gap-8 mb-4 hover:bg-gray90">
                                <span>
                                    Solicita una cotización
                                </span>
                                <RequestQuote size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    {/* Imagen */}
                    <div className="h-64 md:h-full z-10 w-full md:w-[60vw] bg-[url('../assets/bgAssetRegister.png')] bg-cover bg-center">
                    </div>
                </div>
            </div>

            {/* Section: Beneficios */}
            <div className="mt-24 px-4 md:px-[8vw] flex flex-col md:flex-row gap-8 md:gap-24">
                <h3 className="text-3xl md:text-6xl font-light w-full md:w-1/2">
                    El Mantenimiento de Clase Mundial <span className="text-blue60">requiere un registro de activos de la misma altura</span>.
                </h3>
                <div className="w-full md:w-1/2">
                    <div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-4">Del registro de activos lograrás:</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Estructura organizada:</strong> Equipos agrupados lógicamente para una gestión y control de mantenimiento eficiente.</li>
                            <li><strong>Facilidad para análisis:</strong> Recopilación simple de datos de fallas, indicadores y costos por ubicaciones y equipos.</li>
                            <li><strong>Asignación eficiente:</strong> Planes de mantenimiento según necesidades específicas.</li>
                            <li><strong>Gestión por criticidad:</strong> Priorización de órdenes de trabajo y backlog según la criticidad de los activos.</li>
                            <li><strong>Minimización del downtime:</strong> Creación de listas BOM críticas para asegurar disponibilidad de repuestos.</li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 font-light text-sm md:text-[1.1rem] flex flex-row items-center gap-8 mb-4">
                            <span>Agenda con un especialista</span>
                            <Headset size={20} className="text-blue60" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Section: Características */}
            <div className="flex flex-col md:flex-row w-full gap-2 px-4 md:px-[8vw] mt-24">
                <div className="border p-4 flex flex-col w-full justify-between h-56 md:h-[25vh]">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-[1.4rem]">Asset Register</span>
                        <span className="text-gray60">Diseña una taxonomía de activos para tu planta, desde los sistemas, equipos, subequipos y componentes.</span>
                    </div>
                    <div>
                        <TreeView size={64} className="text-blue60" />
                    </div>
                </div>
                <div className="border p-4 flex flex-col w-full justify-between h-56 md:h-[25vh]">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-[1.4rem]">Información Técnica</span>
                        <span className="text-gray60">Creación de los datos técnicos maestros para los activos a nivel para todas las familias de equipo.</span>
                    </div>
                    <div>
                        <DataVolume size={64} className="text-blue60" />
                    </div>
                </div>
                <div className="border p-4 flex flex-col w-full justify-between h-56 md:h-[25vh]">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-[1.4rem]">Validación en sitio</span>
                        <span className="text-gray60">Levantamiento fotográfico de los equipos para validación de los datos en campo mediante placa e inpsecciónes 360.</span>
                    </div>
                    <div>
                        <Inspection size={64} className="text-blue60" />
                    </div>
                </div>
                <div className="border p-4 flex flex-col w-full justify-between h-56 md:h-[25vh]">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-[1.4rem]">Estandarización</span>
                        <span className="text-gray60">Creación de los lineamientos para la modificación y creación del registro de activos siguiendo las políticas de la empresa.</span>
                    </div>
                    <div>
                        <SyncSettings size={64} className="text-blue60" />
                    </div>
                </div>
            </div>

            {/* Section: Proceso Header */}
            <div className="mt-24 px-4 md:px-[8vw] border-b sticky top-0 z-20">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h2 className="border-b border-blue60 border-b-4 w-fit">Proceso de Construcción del Registro de Activos</h2>
                    </div>
                    <button className="h-12 md:h-14 bg-black">¿Dudas?</button>
                </div>
            </div>

            {/* Sección del Proceso 1 */}
            <div className="px-4 md:px-[8vw]">
                <div className="p-8 mb-16 border-black flex flex-col md:flex-row gap-8 md:gap-24 relative">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit">
                                <Number_1 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal text-lg md:text-xl">Revisión, Definición y Preparación</h3>
                        </div>
                        <div className="mt-8 text-sm md:text-[1.15vw] leading-[136%]">
                            <ul className="list-disc pl-5">
                                <li><strong>Criterios de codificación:</strong> Definición para los niveles 1 al 6 hasta la ubicación técnica.</li>
                                <li><strong>Revisión de DTIs:</strong> Validación y corrección según la disposición actual de los equipos.</li>
                                <li><strong>Plan de visitas:</strong> Programación de inspecciones y recursos necesarios.</li>
                                <li><strong>Criterios para registro de activos:</strong> Definición de equipos a incluir o excluir y creación de ejemplos y mockups.</li>
                                <li><strong>Lineamientos técnicos:</strong> Obtención de criterios de criticidad y codificación de ingeniería.</li>
                                <li><strong>Plantillas del CMMS:</strong> Recopilación de PMP, SMR, BOM y definición de la taxonomía.</li>
                                <li><strong>Gestión de tags:</strong> Criterios para tags repetidos y equipos no existentes.</li>
                                <li><strong>Datos maestros:</strong> Definición de fields requeridos por familia de equipo.</li>
                                <li><strong>Información técnica:</strong> Recopilación de hojas de datos y manuales.</li>
                                <li><strong>Preparación de campo:</strong> Configuración de software para manejo de datos, registro fotográfico y llenado de información en campo.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-48 md:h-[45vh] z-10 bg-[url('../assets/redlinesDTI.png')] bg-contain bg-center bg-no-repeat"></div>
                </div>
            </div>

            {/* Sección del Proceso 2 */}
            <div className="px-4 md:px-[8vw]">
                <div className="p-8 border-t border-black mb-16 flex flex-col md:flex-row gap-8 md:gap-24 relative">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit">
                                <Number_2 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal text-lg md:text-xl">
                                Levantamiento y Construcción del Registro de Activos
                            </h3>
                        </div>
                        <div className="mt-8 text-sm md:text-[1.15vw] leading-[136%]">
                            <ul className="list-disc pl-5">
                                <li><strong>Ejecución simultánea:</strong> Levantamiento de equipos en campo y construcción de la taxonomía, llenado de datos maestros y validación, coordinados entre el equipo en campo y el equipo remoto en oficinas.</li>
                                <li><strong>Sincronización en tiempo real:</strong> Uso de una aplicación de colaboración para centralizar y sincronizar la información entre equipos.</li>
                                <li><strong>Preparación para visitas a campo:</strong> Capacitación en seguridad y cursos específicos para el personal involucrado.</li>
                                <li><strong>Documentación fotográfica y etiquetado:</strong> Captura de imágenes, asignación de etiquetas y definición de ubicaciones técnicas directamente en la aplicación.</li>
                                <li><strong>Inspección técnica:</strong> Captura de datos de placas, realización de “Red-Lines” en DTIs según necesidades detectadas en campo.</li>
                                <li><strong>Transmisión inmediata:</strong> Envío de la información a oficinas para su registro en el CMMS y complemento con datos de ingeniería (TMD) y mantenimiento.</li>
                                <li><strong>Actualización en tiempo real:</strong> Preparación y carga del registro de activos en el CMMS de forma continua y sincronizada.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-48 md:h-auto z-10 bg-[url('../assets/pegandotag.jpeg')] bg-contain bg-center bg-no-repeat"></div>
                </div>
            </div>

            {/* Sección del Proceso 3 */}
            <div className="px-4 md:px-[8vw]">
                <div className="p-8 border-t border-black mb-16 flex flex-col md:flex-row gap-8 md:gap-24 relative">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit">
                                <Number_3 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal text-lg md:text-xl">Consolidación y carga al CMMS</h3>
                        </div>
                        <div className="mt-8 text-sm md:text-[1.15vw] leading-[136%]">
                            <ul className="list-disc pl-5">
                                <li><strong>Validación de entregables:</strong> Revisión del Asset Register, Ubicación Técnica, Datos Maestros, Registro Fotográfico y comentarios en Red-Line P&IDs.</li>
                                <li><strong>Plantillas maestras:</strong> Creación de plantillas específicas para la carga masiva de datos al CMMS.</li>
                                <li><strong>Acompañamiento en la taxonomía:</strong> Soporte durante la creación de niveles taxonómicos en el CMMS.</li>
                                <li><strong>Gestión de equipos y componentes:</strong> Asistencia para la incorporación de equipos, subequipos y componentes en el sistema.</li>
                                <li><strong>Confirmación de integración:</strong> Verificación de la correcta incorporación y alineación de la información según los requerimientos establecidos.</li>
                                <li><strong>Catálogo de fallas (opcional):</strong> Desarrollo de un catálogo para registrar fallas y datos de mantenimiento a partir de órdenes de trabajo y avisos de avería.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-48 md:h-auto z-10 bg-[url('../assets/bgAssetRegister.png')] bg-contain bg-center bg-no-repeat"></div>
                </div>
            </div>

            {/* Sección: Banner Final */}
            <div className="px-4 md:px-[4vw] bg-gradient-to-l from-blue60 to-gray10">
                <div className="flex flex-col-reverse md:flex-row bg-gray20 justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
                    <div className="p-8 md:p-[4vw] w-full md:w-[40vw]">
                        <h3 className="text-3xl md:text-5xl font-light">Confiabilidad desde el diseño</h3>
                        <p className="mt-4 text-base md:text-xl">Implementamos las mejores prácticas de la industria para garantizar que tu CMMS esté alineado con los estándares más altos, proporcionando datos precisos y útiles para la toma de decisiones.</p>
                        <div className="mt-12">
                            <button className="font-light text-sm md:text-[1.1rem] flex flex-row items-center gap-8 mb-4 hover:bg-gray90">
                                <span>Agenda con un especialista</span>
                                <Headset size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-64 md:h-[29vw] z-10 w-full md:w-[50vw] bg-[url('../assets/consultor2.jpg')] bg-cover bg-center transform md:-scale-x-100">
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

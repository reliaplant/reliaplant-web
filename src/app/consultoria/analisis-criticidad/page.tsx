import { Metadata } from "next";
import { Add, Asset, Category, ChevronDown, Close, DecisionNode, Number_7, Query, Share, Subflow, Warning, ArrowUpRight, Industry, Activity, EventWarning, TransformInstructions, ArrowRight, RequestQuote, SupportVectorMachine, DataAnalytics, Headset, Number_1, Number_2, Number_3, Number_4, QuestionAnswering, IbmKnowledgeCatalogPremium, Tuning } from '@carbon/icons-react';
import { MdMoney, MdBuild, MdAccessibility } from "react-icons/md";
import { Clock, ShieldCheck, AlertTriangle, BarChart3, Target } from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Análisis de Criticidad de Activos",
    },
    description: "Análisis de Criticidad para jerarquizar y priorizar activos físicos basado en niveles de riesgo",
}

export default function AnalisisCriticidadPage() {
    return (
        <div>
            <div className='px-[4vw]'>
                <div className="relative h-[55vh] flex items-center justify-start ">
                    {/* Contenido */}
                    <div className="relative z-10 text-whites w-[40vw] h-full bg-gray10 p-8 px-12 flex flex-col justify-between">
                        <div>
                            <div className="flex flw-row">
                                <span className="text-blue60 font-light">
                                    Inicio <span className="mx-2 text-gray60">{'/'}</span> Consultoria <span className="mx-2 text-gray60">{'/'}</span> Análisis de Criticidad
                                </span>
                            </div>
                            <h1 className="text-6xl font-light text-black">Análisis de Criticidad de Activos</h1>
                            <div className='mt-8 text-[1.15vw] leading-[136%]'>
                                Metodología sistemática que permite jerarquizar y priorizar los activos físicos de una organización, basándose en el nivel de riesgo que cada uno representa para la seguridad, el ambiente, la producción y la rentabilidad. Dicho de otro modo, sirve para responder: ¿Qué activos necesitan mayor atención, inversión y seguimiento?
                            </div>
                        </div>
                        <div>
                            <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4">
                                <span>
                                    Solicita una cotización
                                </span>
                                <RequestQuote size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-full z-10 w-[60vw] bg-[url('../assets/bgMRO.jpg')] bg-cover bg-center" >
                    </div>
                </div>
            </div>

            <div className="mt-24 px-[8vw] flex flex-row gap-8">
                <div>
                    <h3 className="text-8xl font-light w-1/2">Decisiones estratégicas</h3>
                    <div className="grid grid-cols-2 gap-8 mt-4">
                        <div className="border p-4 flex flex-col justify-between h-[25vh]">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem]">Focalizar los Recursos</span>
                                <span className="text-gray60">Orienta tus recursos de mantenimiento e inspección hacia los activos que realmente impactan la continuidad operativa y los objetivos estratégicos.</span>
                            </div>
                            <div>
                                <Target size={64} className="text-blue60" />
                            </div>
                        </div>
                        <div className="border p-4 flex flex-col justify-between h-[25vh]">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem]">Reducir Riesgos de Seguridad</span>
                                <span className="text-gray60">Detecta equipos cuya falla podría afectar la seguridad de las personas o el medio ambiente, implementando planes preventivos prioritarios.</span>
                            </div>
                            <div>
                                <AlertTriangle size={64} className="text-blue60" />
                            </div>
                        </div>
                        <div className="border p-4 flex flex-col justify-between h-[25vh]">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem]">Minimizar Paradas Inesperadas</span>
                                <span className="text-gray60">Identifica equipos críticos para crear planes de contingencia y mantenimiento que disminuyan la probabilidad de paros repentinos.</span>
                            </div>
                            <div>
                                <Clock size={64} className="text-blue60" />
                            </div>
                        </div>
                        <div className="border p-4 flex flex-col justify-between h-[25vh]">
                            <div className="flex flex-col">
                                <span className="text-[1.4rem]">Optimizar Costos</span>
                                <span className="text-gray60">Con jerarquización adecuada, invierte en mejoras solo donde el riesgo es inaceptable, evitando sobrecostos en activos no críticos.</span>
                            </div>
                            <div>
                                <BarChart3 size={64} className="text-blue60" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button className="border-2 border-blue60 bg-white hover:bg-blue20 text-blue60 font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4">
                            <span>
                                Agenda con un especialista
                            </span>
                            <Headset size={20} className="text-blue60" />
                        </button>
                    </div>
                </div>
                
                <div className="w-1/2">
                    <div>
                        <h2 className="font-normal">Base para metodologías avanzadas</h2>
                        <p className="text-[1.15vw] leading-[136%]">
                            El análisis de criticidad es la antesala para otras metodologías como RCM (Reliability Centered Maintenance), RCA (Root Cause Analysis), RAM (Reliability, Availability & Maintainability) y MHA (Mantenibilidad).
                        </p>
                        <p className="text-[1.15vw] leading-[136%] mt-4">
                            Permite definir en qué activos es más beneficioso profundizar con dichas metodologías, logrando una optimización costo-riesgo-beneficio para toda la operación.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-[8vw] mt-24">
                <div className="grid grid-cols-4 gap-8 bg-gray80">
                    <div className="flex flex-col p-8 ">
                        <h2 className="text-7xl font-light bg-gradient-to-r from-blue20 to-blue60 text-transparent bg-clip-text">40%</h2>
                        <p className="mt-4 text-gray20 font-light">reducción promedio en costos de mantenimiento al aplicar planes basados en criticidad.</p>
                    </div>
                    <div className="flex flex-col p-8 ">
                        <h2 className="text-7xl font-light bg-gradient-to-r from-blue20 to-blue60 text-transparent bg-clip-text">65%</h2>
                        <p className="mt-4 text-gray20 font-light">de las fallas críticas pueden prevenirse con un análisis de criticidad y planes de acción adecuados.</p>
                    </div>
                    <div className="flex flex-col p-8 ">
                        <h2 className="text-7xl font-light bg-gradient-to-r from-blue20 to-blue60 text-transparent bg-clip-text">20%</h2>
                        <p className="mt-4 text-gray20 font-light">de los activos típicamente representan el 80% del riesgo operativo total de una instalación.</p>
                    </div>
                    <div className="flex flex-col p-8 ">
                        <h2 className="text-7xl font-light bg-gradient-to-r from-blue20 to-blue60 text-transparent bg-clip-text">3x</h2>
                        <p className="mt-4 text-gray20 font-light">de retorno sobre la inversión al aplicar estrategias de mantenimiento basadas en criticidad.</p>
                    </div>
                </div>
                <div className="border-t-2 bg-gray80">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col items-center justify-center p-8 ">
                            <h2 className="text-xl font-normal text-gray20">Distribución habitual de criticidad</h2>
                            <div className="w-full mt-4">
                                <div className="flex justify-between">
                                    <span className="text-gray30 font-light">15%</span>
                                    <span className="text-gray30 font-light">Criticidad Alta</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-red-500 h-4" style={{ width: '15%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">25%</span>
                                    <span className="text-gray30 font-light">Criticidad Media</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-yellow-500 h-4" style={{ width: '25%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">60%</span>
                                    <span className="text-gray30 font-light">Criticidad Baja</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-green-500 h-4" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 ">
                            <h2 className="text-xl font-normal text-gray20">Factores de criticidad más comunes</h2>
                            <div className="w-full mt-4">
                                <div className="flex justify-between">
                                    <span className="text-gray30 font-light">35%</span>
                                    <span className="text-gray30 font-light">Impacto en producción</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '35%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">25%</span>
                                    <span className="text-gray30 font-light">Seguridad y ambiente</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '25%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">20%</span>
                                    <span className="text-gray30 font-light">Costos de mantenimiento</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '20%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">15%</span>
                                    <span className="text-gray30 font-light">Frecuencia de fallas</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '15%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">5%</span>
                                    <span className="text-gray30 font-light">Otros factores</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '5%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 ">
                            <h2 className="text-xl font-normal text-gray20">Aplicación de Análisis de Criticidad</h2>
                            <div className="w-full mt-4">
                                <div className="flex justify-between">
                                    <span className="text-gray30 font-light">30%</span>
                                    <span className="text-gray30 font-light">Plantas Industriales</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '30%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">25%</span>
                                    <span className="text-gray30 font-light">Sector Oil & Gas</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '25%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">20%</span>
                                    <span className="text-gray30 font-light">Minería</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '20%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">15%</span>
                                    <span className="text-gray30 font-light">Manufactura y logística</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '15%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray30 font-light">10%</span>
                                    <span className="text-gray30 font-light">Infraestructura</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4">
                                    <div className="bg-blue-500 h-4" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 px-[8vw] border-b sticky top-0 z-20">
                <div className="flex flex-row gap-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h2 className="border-b border-blue60 border-b-4 w-fit">Proceso del Análisis de Criticidad</h2>
                    </div>
                    <button className="h-14 bg-black">¿Dudas?</button>
                </div>
            </div>


            <div className="px-[8vw]">
                <div className="p-8 mb-16 border-black flex flex-row gap-24 relative">
                    <div className="w-full">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit ">
                                <Number_1 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal">
                                Definición de Alcance y Recopilación de Datos</h3>
                        </div>

                        <div className="mt-8"></div>
                        <div className="mt-8"></div>
                        <p className="text-[1.15vw] leading-[136%]">
                            En esta primera fase, establecemos las bases del análisis:
                        </p>
                        <div className="mt-4 leading-[136%]">
                            <strong>Identificación de activos</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Identificamos los activos a incluir, pudiendo ser equipos en planta, sistemas, subsistemas o componentes críticos.</li>
                                <li>Determinamos el nivel jerárquico del análisis (planta, sistema, equipo, componente).</li>
                                <li>Establecemos límites claros de estudio y alcance del proyecto.</li>
                            </ul>
                        </div>
                        <div className="mt-4 leading-[136%]">
                            <strong>Recolección de información</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Recolectamos información técnica, operativa, de mantenimiento e historial de fallas.</li>
                                <li>Analizamos datos de confiabilidad, experiencia previa y normas aplicables.</li>
                                <li>Documentamos las funciones principales y contexto operacional de cada activo.</li>
                                <li>Establecemos los parámetros iniciales para el análisis de riesgo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="px-[8vw]">
                <div className="p-8 border-t mb-16 border-black flex flex-row gap-24 relative">
                    <div className="w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit ">
                                <Number_2 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal">
                                Caracterización y Evaluación de Consecuencias
                            </h3>
                        </div>
                        <div className="mt-8"></div>
                        <p className="text-[1.15vw] leading-[136%]">
                            Establecemos criterios para evaluar probabilidad y consecuencias:
                        </p>
                        <div className="mt-4 leading-[136%]">
                            <strong>Frecuencia o Probabilidad de Falla</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Asignamos de forma cualitativa, semicuantitativa o cuantitativa la probabilidad de ocurrencia de la falla.</li>
                                <li>Utilizamos datos de confiabilidad, experiencia previa, bases OREDA o normas internas.</li>
                                <li>Ajustamos la metodología (simple, matricial, index) según la disponibilidad de datos.</li>
                            </ul>
                        </div>
                        <div className="mt-4 leading-[136%]">
                            <strong>Evaluación multidimensional de consecuencias</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li><strong>Seguridad y ambiente:</strong> Lesiones a personas, afectación ambiental, multas.</li>
                                <li><strong>Operaciones y producción:</strong> Pérdida de producción, paradas de planta.</li>
                                <li><strong>Costos directos:</strong> Reemplazo de componentes, recursos externos.</li>
                                <li><strong>Imagen y reputación:</strong> Impacto en clientes y comunidades.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[45vh] z-10 w-1/2 bg-[url('../assets/bgMRO.jpg')] bg-cover bg-center"></div>
                </div>
            </div>
            
            <div className="px-[8vw]">
                <div className="p-8 border-t mb-16 border-black flex flex-row gap-24 relative">
                    <div className="w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit ">
                                <Number_3 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal">
                                Cálculo de Índice de Criticidad y Validación
                            </h3>
                        </div>

                        <div className="mt-8"></div>
                        <p className="text-[1.15vw] leading-[136%]">
                            Combinamos los factores para obtener una jerarquización precisa:
                        </p>
                        <div className="mt-4 leading-[136%]">
                            <strong>Cálculo del Índice de Criticidad o Riesgo</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Combinamos la probabilidad de falla con las consecuencias en una matriz de riesgo.</li>
                                <li>Generamos una jerarquía (alta, media, baja) o un ranking numérico.</li>
                                <li>Aplicamos distintas metodologías según el contexto:
                                    <ul className="list-disc ml-8 mt-2">
                                        <li><strong>Matriz Cualitativa:</strong> Categorías para frecuencia y consecuencia.</li>
                                        <li><strong>Métodos Semicuantitativos:</strong> Escalas numéricas más ajustadas.</li>
                                        <li><strong>Métodos Cuantitativos:</strong> Usando tasas de falla (λ) y MTTR.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 leading-[136%]">
                            <strong>Validación y Análisis Final</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Discutimos resultados con equipos multidisciplinarios (operaciones, mantenimiento, seguridad).</li>
                                <li>Ajustamos categorías según la política de riesgo de la organización.</li>
                                <li>Creamos mapas visuales de criticidad para comunicar resultados.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[45vh] z-10 w-1/2 bg-[url('../assets/bgMRO.jpg')] bg-cover bg-center"></div>
                </div>
            </div>
            
            <div className="px-[8vw]">
                <div className="p-8 border-t mb-16 border-black flex flex-row gap-24 relative">
                    <div className="w-1/2">
                        <div className="flex flex-row gap-4 items-center relative">
                            <div className="p-2 bg-gray10 w-fit h-fit ">
                                <Number_4 size={40} className="text-black" />
                            </div>
                            <h3 className="font-normal">
                                Plan de Acción y Entregables
                            </h3>
                        </div>

                        <div className="mt-8"></div>
                        <p className="text-[1.15vw] leading-[136%]">
                            Transformamos el análisis en acciones concretas:
                        </p>
                        <div className="mt-4 leading-[136%]">
                            <strong>Recomendaciones y Plan de Acción</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li>Proporcionamos listado de activos críticos con acciones prioritarias.</li>
                                <li>Sugerimos mantenimiento proactivo, repuestos estratégicos o rediseños.</li>
                                <li>Vinculamos criticidad con el CMMS/EAM para priorizar órdenes de trabajo.</li>
                                <li>Establecemos KPIs específicos por nivel de criticidad (MTBF, MTTR).</li>
                            </ul>
                        </div>
                        <div className="mt-4 leading-[136%]">
                            <strong>Resultados y Entregables</strong>
                            <br /> <br />
                            <ul className="list-disc">
                                <li><strong>Matriz o Ranking de Criticidad:</strong> Lista priorizada y representación gráfica Pareto.</li>
                                <li><strong>Recomendaciones de Gestión:</strong> Planes específicos de mantenimiento y mejoras.</li>
                                <li><strong>Integración con Sistemas:</strong> Configuración del CMMS para priorizar trabajos críticos.</li>
                                <li><strong>Documentación y Capacitación:</strong> Informes detallados y talleres para el personal.</li>
                            </ul>
                        </div>
                        <p className="text-[1.15vw] leading-[136%] mt-4 p-4 bg-gray10">
                            Establecemos un proceso de revisión periódica para mantener actualizado el análisis, considerando cambios en condiciones de operación, modificaciones de diseño o nuevos requerimientos del negocio.
                        </p>
                    </div>
                    <div className="h-[45vh] z-10 w-1/2 bg-[url('../assets/bgMRO.jpg')] bg-cover bg-center"></div>
                </div>
            </div>

            <div className="px-[4vw] bg-gradient-to-l from-blue60 to-gray10 ">
                <div className=" flex flex-row bg-gray20 justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
                    <div className="p-[4vw] w-[40vw]">
                        <h3 className="text-5xl font-light">¿Listo para priorizar tus recursos y disminuir riesgos?</h3>
                        <h4 className="mt-8 text-2xl font-normal">Contamos con expertos que te ayudarán a enfocar esfuerzos en los activos que realmente lo requieren, elevando la eficiencia de tu operación y reduciendo paradas costosas.
                        </h4>
                        <div className="mt-12" >
                            <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4">
                                <span>
                                    Agenda con un especialista
                                </span>
                                <Headset size={20} className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="h-[29vw] z-10 w-[50vw] bg-[url('../assets/consultor2.jpg')] bg-cover bg-center transform -scale-x-100" >
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
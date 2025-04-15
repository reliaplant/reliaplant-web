import { Metadata } from 'next'
import { Add, Asset, Category, DataAnalytics, Headset, Industry, Number_1, Number_2, Number_3, Number_4, ArrowRight, CheckmarkOutline, SupportVectorMachine, IdManagement, DocumentImport, DiagramReference, SelectWindow, Gears, IbmKnowledgeCatalogPremium } from '@carbon/icons-react';
import { ChartBarDecreasing } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sistema de Indicadores para Gestión de Mantenimiento | ReliaPLANT',
  description: 'Diseño e implementación de tableros de control con KPIs basados en normas internacionales BS EN 15341:2019 y SMRP para optimizar la gestión de mantenimiento industrial.',
  keywords: 'KPI mantenimiento, indicadores mantenimiento, sistema de indicadores, gestión de mantenimiento, MTTR, MTBF, disponibilidad operacional, tablero de control mantenimiento',
  openGraph: {
    title: 'Sistema de Indicadores para Gestión de Mantenimiento | ReliaPLANT',
    description: 'Diseño e implementación de tableros de control con KPIs basados en normas internacionales para optimizar la gestión de mantenimiento industrial.',
    images: ['/assets/bgDiagnostico.jpg'],
  }
}

export default function SistemaIndicadoresPage() {
    return (
        <div className="mx-auto">
            <div className="px-[0vw]">
                <div className="relative h-[50vh] flex items-center justify-start ">
                    {/* Hero section */}
                    <div className="relative z-10 w-[50vw] h-full bg-blue10 p-[2vw] flex flex-col justify-between p-[4vw]">
                        <div>
                            <div className="flex flex-row">
                                <span className="text-blue60 font-light">
                                    <a href="/" className="hover:underline">Inicio</a> <span className="mx-2 text-gray60">{'/'}</span> 
                                    <a href="/consultoria" className="hover:underline">Consultoría</a> <span className="mx-2 text-gray60">{'/'}</span> 
                                    Sistema de Indicadores
                                </span>
                            </div>
                            <h1 className="text-5xl font-light text-black">Sistema de Indicadores para Gestión de Mantenimiento</h1>
                            <div className="mt-6 text-[1.1vw] leading-[140%]">
                                Diseño y desarrollo de tableros de control con KPIs basados en normas internacionales para optimizar y monitorear la gestión de mantenimiento.
                            </div>
                        </div>
                        <button className="font-light text-[1.1rem] flex flex-row items-center gap-4 mt-4 w-fit">
                                <span>
                                    Agrenda con un especialista
                                </span>
                                <Headset size={20} className="text-white" />
                            </button>
                    </div>
                    <div className="h-full z-10 w-[50vw] bg-[url('/assets/bgDiagnostico.jpg')] bg-cover bg-center">
                        <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
                    </div>
                </div>
            </div>

            {/* Description section */}
            <div className="px-[10vw] py-[8vh]">
                <h2 className="text-4xl font-light mb-8">Sistema integral de evaluación mediante KPIs</h2>
                <p className="text-lg mb-6 text-gray70">
                    Nuestro servicio de definición y construcción de un Sistema de Indicadores de gestión de mantenimiento
                    está basado en los lineamientos y mejores prácticas de documentos de referencia ampliamente utilizados
                    en la industria (BS EN 15341:2019 y SMRP Best Practices), y se orienta a organizaciones
                    que desean medir, controlar y optimizar su gestión de mantenimiento de manera sistemática.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-10 mt-16 mb-[0vh]">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue60 p-3 rounded-full">
                            <DataAnalytics size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Diseño del sistema de indicadores</h3>
                            <p className="text-gray70">
                               Establecimiento de los KPIs para la supervisión y análisis de los
                                indicadores en tiempo real, vinculado con herramientas de análisis de datos para apoyar
                                la toma de decisiones informadas en cada nivel jerárquico.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-blue60 p-3 rounded-full">
                            <Industry size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Basado en referencias internacionales</h3>
                            <p className="text-gray70">
                                El sistema está alineado con el marco de las buenas prácticas de la SMRP y los estándares
                                británicos EN-BS-15341:2019 y 2007, asegurando la correcta definición, selección y aplicación
                                de los indicadores de mantenimiento y confiabilidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Phases */}
            <div className="bg-gray10 py-[10vh] px-[10vw]">
                <h2 className="text-4xl font-light mb-16 text-center">Fases de implementación del servicio</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                    <div className="bg-white p-6 shadow-md relative flex flex-col h-full">
                        <div className="bg-blue60 p-2 rounded w-12 h-12 flex items-center justify-center mb-4">
                            <DiagramReference size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Diagnóstico inicial</h3>
                        <p className="text-gray70 flex-grow">
                            Evaluación de la estructura organizativa, procesos actuales y sistemas de información disponibles.
                            Identificación de brechas respecto a mejores prácticas en medición del desempeño.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-md relative flex flex-col h-full">
                        <div className="bg-blue60 p-2 rounded w-12 h-12 flex items-center justify-center mb-4">
                            <SelectWindow size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Selección y definición de KPIs</h3>
                        <p className="text-gray70 flex-grow">
                            Identificación de indicadores estratégicos alineados con objetivos organizacionales.
                            Mapeo de procesos clave y definición de métricas para cada nivel jerárquico.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-md relative flex flex-col h-full">
                        <div className="bg-blue60 p-2 rounded w-12 h-12 flex items-center justify-center mb-4">
                            <Gears size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Diseño del sistema</h3>
                        <p className="text-gray70 flex-grow">
                            Alineación del tablero con las bases de dato disponibles y diseño visual (CMMS/ERP).
                            Elaboración de los flujos de información.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-md relative flex flex-col h-full">
                        <div className="bg-blue60 p-2 rounded w-12 h-12 flex items-center justify-center mb-4">
                            <IbmKnowledgeCatalogPremium size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Implementación y capacitación</h3>
                        <p className="text-gray70 flex-grow">
                            Soporte y apoyo durante la implementación del tabler con equipo técnico del CMMS.
                            Formación del personal en interpretación y uso de los indicadores.
                        </p>
                    </div>

                    <div className="bg-white p-6 shadow-md relative flex flex-col h-full">
                        <div className="bg-blue60 p-2 rounded w-12 h-12 flex items-center justify-center mb-4">
                            <CheckmarkOutline size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Seguimiento y mejora</h3>
                        <p className="text-gray70 flex-grow">
                            Acompañamiento en la fase inicial de uso.
                            Revisiones periódicas para ajustar indicadores y metas según la evolución de necesidades.
                        </p>
                    </div>
                </div>
            </div>

            {/* Levels of indicators */}
            <div className="py-[10vh] px-[10vw]">
                <h2 className="text-4xl font-light mb-16 text-center">Niveles de indicadores</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 shadow-md relative border">
                        <div className="absolute top-4 left-4 bg-blue10 p-2 rounded">
                            <Number_1 size={24} className="text-blue60" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 mt-12">Nivel Estratégico</h3>
                        <p className="mb-6 text-gray70">
                            Indicadores enfocados en la toma de decisiones estratégicas relacionadas con la rentabilidad
                            empresarial, impacto en el ciclo de vida de los activos, y contribución al cumplimiento de
                            los objetivos organizacionales a largo plazo.
                        </p>
                        <ul className="list-disc pl-5 text-gray70">
                            <li className="mb-2">Costo de mantenimiento respecto al valor de reemplazo de activos (RAV)</li>
                            <li className="mb-2">ROI de proyectos de mantenimiento</li>
                            <li>Contribución a la rentabilidad global del negocio</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 shadow-md relative border">
                    <div className="absolute top-4 left-4 bg-blue10 p-2 rounded">
                            <Number_2 size={24} className="text-blue60" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 mt-12">Nivel Táctico</h3>
                        <p className="mb-6 text-gray70">
                            Orientados a la gerencia de las áreas funcionales, sirviendo como enlace entre la alta dirección
                            y las operaciones. Miden la efectividad de la planificación, coordinación y ejecución de programas
                            de mantenimiento y confiabilidad.
                        </p>
                        <ul className="list-disc pl-5 text-gray70">
                            <li className="mb-2">Backlog de órdenes de trabajo</li>
                            <li className="mb-2">Cumplimiento de la programación del mantenimiento</li>
                            <li>Tasa de cumplimiento de planes preventivos y predictivos</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 shadow-md relative border">
                    <div className="absolute top-4 left-4 bg-blue10 p-2 rounded">
                            <Number_3 size={24} className="text-blue60" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 mt-12">Nivel Operativo</h3>
                        <p className="mb-6 text-gray70">
                            Relacionados con aspectos operacionales y de producción, monitoreando la eficiencia de las
                            actividades diarias y la respuesta a eventos no planificados, como fallas o emergencias.
                        </p>
                        <ul className="list-disc pl-5 text-gray70">
                            <li className="mb-2">Mean Time Between Failures (MTBF)</li>
                            <li className="mb-2">Mean Time to Repair (MTTR)</li>
                            <li>Disponibilidad operacional (DO) y Confiabilidad C(t)</li>
                            <li>Porcentaje de retrabajos (Rework)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Indicator Evaluation Criteria */}
            <div className="bg-gray10 py-[10vh] px-[10vw]">
                <h2 className="text-4xl font-light mb-10 text-center">Ficha de indicadores y criterios de evaluación</h2>

                <div className="mb-8">
                    <p className="text-lg text-gray70 mb-6">
                        Un componente esencial de nuestro sistema es la creación de fichas técnicas detalladas para cada
                        indicador. Estas fichas garantizan la estandarización, precisión y correcta interpretación de las
                        métricas en todos los niveles organizacionales.
                    </p>

                    <div className="flex items-start gap-8 mb-12">
                        <div className="w-1/2">
                            <h3 className="text-2xl font-bold mb-6">Elementos de la ficha del indicador</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Descripción y propósito:</span>
                                        <p className="text-gray70">Explicación clara del objetivo y relevancia del indicador para la gestión del mantenimiento.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Fórmula de cálculo:</span>
                                        <p className="text-gray70">Expresión matemática precisa y variables involucradas en su medición.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Frecuencia de medición:</span>
                                        <p className="text-gray70">Intervalo temporal óptimo para la evaluación (diaria, semanal, mensual, trimestral).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Responsable:</span>
                                        <p className="text-gray70">Persona o rol encargado de la recopilación, análisis y reporte del indicador.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Fuentes de datos:</span>
                                        <p className="text-gray70">Sistemas, registros o documentos de donde se extrae la información requerida.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Meta u objetivo:</span>
                                        <p className="text-gray70">Valor de referencia que indica el desempeño esperado, basado en estándares de la industria o historia de la organización.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Umbral de alerta:</span>
                                        <p className="text-gray70">Niveles que delimitan un desempeño aceptable, moderado o crítico (sistema de semáforos).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight size={20} className="text-blue60 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold">Acciones recomendadas:</span>
                                        <p className="text-gray70">Procedimientos sugeridos ante desviaciones significativas respecto a las metas establecidas.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Example table */}
                <h3 className="text-2xl font-bold mb-6">Ejemplo de tabla de indicadores</h3>
                <div className="overflow-x-auto mb-12">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-gray20">
                                <th className="py-3 px-4 border text-left">Nivel</th>
                                <th className="py-3 px-4 border text-left">Indicador</th>
                                <th className="py-3 px-4 border text-left">Fórmula</th>
                                <th className="py-3 px-4 border text-left">Frecuencia</th>
                                <th className="py-3 px-4 border text-left">Meta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 px-4 border">Estratégico</td>
                                <td className="py-3 px-4 border">Costo Mtto / Valor de Reemplazo</td>
                                <td className="py-3 px-4 border">Total Costos Mtto ÷ Valor de Reemplazo × 100%</td>
                                <td className="py-3 px-4 border">Mensual</td>
                                <td className="py-3 px-4 border">≤ 3%</td>
                            </tr>
                            <tr className="bg-gray5">
                                <td className="py-3 px-4 border">Táctico</td>
                                <td className="py-3 px-4 border">Cumplimiento de Programación</td>
                                <td className="py-3 px-4 border">OTs Ejecutadas según Plan ÷ OTs Programadas × 100%</td>
                                <td className="py-3 px-4 border">Semanal</td>
                                <td className="py-3 px-4 border">≥ 90%</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border">Operativo</td>
                                <td className="py-3 px-4 border">MTTR</td>
                                <td className="py-3 px-4 border">∑ Horas de Reparación ÷ Número de Fallas</td>
                                <td className="py-3 px-4 border">Semanal</td>
                                <td className="py-3 px-4 border">≤ 5 horas</td>
                            </tr>
                            <tr className="bg-gray5">
                                <td className="py-3 px-4 border">Operativo</td>
                                <td className="py-3 px-4 border">Disponibilidad Operacional</td>
                                <td className="py-3 px-4 border">(Tiempo Total - Tiempo Inactivo) ÷ Tiempo Total × 100%</td>
                                <td className="py-3 px-4 border">Mensual</td>
                                <td className="py-3 px-4 border">≥ 95%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


                        {/* Example of Indicator Card */}
            <div className="mt-12 mb-8 px-[16vw]">
              <h3 className="text-2xl font-bold mb-6">Ejemplo de ficha de indicador</h3>
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="bg-blue10 text-white py-2 px-6">
                  <h4 className="text-xl font-bold">Tiempo Medio de Reparación (MTTR)</h4>
                  <p className="text-sm opacity-80 mb-0">Indicador de nivel operativo</p>
                </div>
                
                <div className="bg-white p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Descripción y propósito</h5>
                        <p className="text-gray70">
                          Mide el tiempo promedio que toma reparar un equipo tras una falla. 
                          Permite evaluar la eficiencia del mantenimiento correctivo, la capacidad 
                          de respuesta del equipo técnico y la efectividad de los procedimientos.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Fórmula de cálculo</h5>
                        <div className="p-4 rounded border text-center bg-gray10">
                          <p className="text-lg mb-0 ">
                            MTTR = Σ (Tiempo total de reparaciones) ÷ (Número de fallas)
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h5 className="font-bold text-gray90 mb-2">Unidad de medida</h5>
                          <p className="text-gray70">Horas</p>
                        </div>
                        
                        <div>
                          <h5 className="font-bold text-gray90 mb-2">Frecuencia</h5>
                          <p className="text-gray70">Semanal / Mensual</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Relación con otros indicadores</h5>
                        <p className="text-gray70">
                          Se analiza en conjunto con Disponibilidad Operacional, MTBF y 
                          Porcentaje de mantenimiento correctivo versus preventivo.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Responsable</h5>
                        <p className="text-gray70">Supervisor de Mantenimiento</p>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Fuente de datos</h5>
                        <p className="text-gray70">
                          Sistema CMMS, Órdenes de trabajo, Registros de mantenimiento
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-bold text-gray90 mb-2">Meta y umbrales</h5>
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          <div className="bg-green-100 p-2 text-center rounded">
                            <span className="font-bold text-green-800">Óptimo</span>
                            <p className="text-green-800 mb-0">≤ 3h</p>
                          </div>
                          <div className="bg-yellow-100 p-2 text-center rounded">
                            <span className="font-bold text-yellow-800">Aceptable</span>
                            <p className="text-yellow-800 mb-0">4-5h</p>
                          </div>
                          <div className="bg-red-100 p-2 text-center rounded">
                            <span className="font-bold text-red-800">Crítico</span>
                            <p className="text-red-800 mb-0">{'>'}5h</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray90 mb-2">Acciones recomendadas</h5>
                        <ul className="list-disc pl-5 text-gray70">
                          <li>Si MTTR {'>'} 5h: Revisar procedimientos de diagnóstico, disponibilidad de repuestos y herramientas.</li>
                          <li>Si tendencia es creciente por 3 períodos consecutivos: Analizar causas raíz y reforzar capacitación técnica.</li>
                          <li>Para equipos críticos con MTTR elevado: Implementar programa de mejora específico.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h5 className="font-bold text-gray90 mb-3">Visualización recomendada</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray70 mb-2">• Gráfica de tendencia mensual</p>
                        <p className="text-gray70 mb-2">• Comparativa por tipo de equipo</p>
                      </div>
                      <div>
                        <p className="text-gray70 mb-2">• Análisis de Pareto por sistemas</p>
                        <p className="text-gray70 mb-2">• Comparación con benchmarks del sector</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* References Section */}
            <div className="py-[10vh] px-[10vw]">
                <h2 className="text-4xl font-light mb-10 text-center">Referencias metodológicas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue20 p-3 rounded flex-shrink-0">
                            <IdManagement size={24} className="text-blue60" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">SMRP Best Practices</h3>
                            <p className="text-gray70 mb-4">
                                Society for Maintenance & Reliability Professionals (SMRP) proporciona un conjunto de prácticas
                                recomendadas y métricas específicas para medir la madurez y efectividad de los programas de
                                mantenimiento y confiabilidad.
                            </p>
                            <p className="text-gray70">
                                Estas prácticas están estructuradas en cinco pilares: negocio/gestión, fiabilidad de manufactura,
                                fiabilidad de equipos, organización/liderazgo y gestión del trabajo, brindando una visión integral
                                y detallada de cómo medir el desempeño en mantenimiento.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-blue20 p-3 rounded flex-shrink-0">
                            <DocumentImport size={24} className="text-blue60" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">BS EN 15341:2019</h3>
                            <p className="text-gray70 mb-4">
                                El estándar británico EN 15341:2019 (y su versión anterior de 2007) constituye una referencia
                                internacional para la definición de indicadores clave de desempeño en el ámbito del mantenimiento.
                            </p>
                            <p className="text-gray70">
                                Esta norma amplía la visión en la gestión de activos físicos y define un repertorio de KPIs
                                distribuidos en diversas áreas de la función de mantenimiento (técnicos, económicos, organizativos),
                                facilitando la comparación con estándares globales y mejores prácticas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits section */}
            <div className="bg-blue10 px-[10vw] py-[10vh]">
                <h2 className="text-4xl font-light mb-12 text-center">Beneficios para su organización</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="border-l-4 border-blue30 pl-6 py-2">
                        <h3 className="text-xl font-bold mb-3">Visibilidad y control en tiempo real</h3>
                        <p className="text-gray70">
                            Monitoreo continuo del comportamiento de los procesos de mantenimiento, identificando
                            oportunidades de mejora y minimizando la variabilidad en las operaciones.
                        </p>
                    </div>

                    <div className="border-l-4 border-blue30 pl-6 py-2">
                        <h3 className="text-xl font-bold mb-3">Toma de decisiones basada en datos</h3>
                        <p className="text-gray70">
                            Información confiable y filtrable por nivel jerárquico, lo que reduce la subjetividad
                            y facilita la implementación de acciones correctivas o preventivas efectivas.
                        </p>
                    </div>

                    <div className="border-l-4 border-blue30 pl-6 py-2">
                        <h3 className="text-xl font-bold mb-3">Mayor eficiencia y confiabilidad</h3>
                        <p className="text-gray70">
                            Seguimiento sistemático que reduce tiempos de inactividad, evita fallas recurrentes,
                            fomenta la programación efectiva y optimiza los recursos disponibles.
                        </p>
                    </div>

                    <div className="border-l-4 border-blue30 pl-6 py-2">
                        <h3 className="text-xl font-bold mb-3">Cultura de mejora continua</h3>
                        <p className="text-gray70">
                            El sistema de indicadores se convierte en una herramienta de aprendizaje, impulsando
                            la participación de todo el personal en la búsqueda de la excelencia operativa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { Metadata } from "next";
import { ArrowRight, RequestQuote, DataAnalytics, Headset, ChartLine, Analytics, SupportVectorMachine, Query, DecisionNode } from '@carbon/icons-react';
import { Users, Clock, Target, Shield, BookOpen, BarChart2, Calendar, MessageSquare } from "lucide-react";
import AbrirFormContacto from "@/components/AbrirFormContacto";

export const metadata: Metadata = {
    title: {
        absolute: "Asesoría Continua en Confiabilidad Industrial | RELIAPLANT",
    },
    description: "Servicio de acompañamiento continuo para la optimización de mantenimiento y confiabilidad, adaptado a tus necesidades cambiantes.",
    keywords: ["asesoría continua", "consultoría industrial", "confiabilidad", "mantenimiento", "optimización industrial", "reliaplant"],
    openGraph: {
        title: "Asesoría Continua en Confiabilidad Industrial | RELIAPLANT",
        description: "Servicio de acompañamiento continuo para optimización de mantenimiento y confiabilidad industrial.",
        images: [{
            url: 'https://reliaplant-2c104.web.app/assets/consultor1.jpg',
            width: 1200,
            height: 630,
            alt: 'Asesoría Continua en Confiabilidad'
        }],
        type: 'website',
        url: 'https://reliaplant-2c104.web.app/consultoria/asesoria-continua',
    },
    twitter: {
        card: "summary_large_image",
        title: "Asesoría Continua en Confiabilidad | RELIAPLANT",
        description: "Acompañamiento continuo para la optimización de mantenimiento y confiabilidad industrial.",
        images: [{
            url: 'https://reliaplant-2c104.web.app/assets/consultor1.jpg',
            alt: 'Asesoría Continua en Confiabilidad'
        }],
    },
    alternates: {
        canonical: "https://reliaplant-2c104.web.app/consultoria/asesoria-continua",
    },
}

export default function AsesoriaConstante() {
    return (
        <div>
            <div className='px-4 md:px-[4vw]'>
                <div className="relative h-auto md:h-[55vh] flex flex-col md:flex-row items-center md:justify-start">
                    {/* Contenido */}
                    <div className="relative text-whites w-full md:w-[45vw] h-full bg-gray10 p-8 px-6 md:px-12 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row">
                                <span className="text-blue60 font-light">
                                    <a href="/" className="text-blue60 hover:underline">Inicio</a> 
                                    <span className="mx-2 text-gray60">{'/'}</span> 
                                    <a href="/consultoria" className="text-blue60 hover:underline">Consultoria</a> 
                                    <span className="mx-2 text-gray60">{'/'}</span> 
                                    Asesoría Continua
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-light text-black">Asesoría Continua</h1>
                            <div className='mt-6 text-base md:text-lg leading-[136%]'>
                                Un modelo flexible de acompañamiento permanente que evoluciona con las necesidades de tu organización. Para quienes buscan un socio estratégico, no sólo un consultor puntual.
                            </div>
                        </div>
                        <div className="mt-6">
                            <AbrirFormContacto
                                buttonText="Habla con un especialista"
                                icon={<Headset size={20} className="text-white" />}
                                buttonColor="bg-gray90"
                            />
                        </div>
                    </div>
                    <div className="h-[30vh] md:h-[55vh] w-full bg-[url('/assets/consultor1.jpg')] bg-cover bg-center">
                    </div>
                </div>
            </div>

            <div className="mt-16 px-4 md:px-[8vw]">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-light mb-8">Cuando necesitas más que un proyecto puntual</h2>
                        <p className="leading-[136%] mb-6">
                            La gestión de la confiabilidad y el mantenimiento es un proceso continuo, no un destino. A medida que tu organización evoluciona, surgen nuevos desafíos técnicos, oportunidades de mejora y necesidades de optimización.
                        </p>
                        <p className="leading-[136%] mb-6">
                            Nuestro servicio de Asesoría Continua establece una relación de largo plazo donde nos convertimos en una extensión de tu equipo, acompañándote para resolver problemas emergentes, optimizar procesos existentes, y ejecutar nuevas iniciativas según vayan surgiendo.
                        </p>
                        
                        <div className="mt-8 p-6 bg-gray10">
                            <h3 className="text-xl font-medium mb-4">Un socio estratégico a tu lado</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray60">Acceso constante a nuestro equipo de especialistas</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray60">Respuesta ágil a desafíos emergentes</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray60">Transferencia continua de conocimiento</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue60 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray60">Evolución constante de tus estrategias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 border">
                        <div className="p-8 bg-gray20 text-white">
                            <h3 className="text-2xl font-normal mb-6">¿Este servicio es para mí?</h3>
                            <p className="text-gray60 mb-6">
                                La Asesoría Continua es ideal para organizaciones que:
                            </p>
                        </div>
                        <div className="p-8 px-0 pr-4">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p>Quieren avanzar en su gestión de confiabilidad pero no tienen claro por dónde empezar o cómo priorizar iniciativas.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p>Buscan una extensión flexible de su equipo técnico con expertise especializado que sería costoso mantener internamente.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p>Desean implementar mejoras graduales y sostenibles, sin la disrupción de grandes proyectos de consultoría.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-blue60 text-white rounded-full flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p>Prefieren un modelo de costos predecible con resultados tangibles a lo largo del tiempo.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 px-4 md:px-[8vw] border-b">
                <div className="flex flex-row gap-4 justify-between">
                    <div className="flex flex-col justify-end">
                        <h2 className="border-b border-blue60 border-b-4 w-fit">Modalidades de acompañamiento</h2>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-[8vw] py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border p-6 pb-6 relative flex flex-col justify-between">
                        <div>
                            <DataAnalytics size={42} className="text-blue60 mb-4" />
                            <h3 className="text-xl font-medium mb-4">Asesor Part-time</h3>
                            <p className="text-gray60 mb-6">
                                Uno de nuestros especialistas dedicará un número fijo de días al mes para trabajar con tu equipo, ya sea remoto o presencial según las necesidades.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Desde 2 días al mes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Con previa planificación</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Extensión de horas si se requiere </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <AbrirFormContacto
                                buttonText="Solicita asesoria part-time"
                                icon={<ArrowRight size={20} />}
                                buttonColor="bg-gray90"
                                fullDesktop={true}
                                modalTitle='Solicita asesoria part-time'
                            />
                        </div>
                    </div>
                    
                    <div className="border-2 border-blue60 p-6 pb-6 relative shadow-lg flex flex-col justify-between">
                        <div>
                            <Analytics size={42} className="text-blue60 mb-4" />
                            <h3 className="text-xl font-medium mb-4">Aseoría continua</h3>
                            <p className="text-gray60 mb-6">
                                Un consultor senior se integra como parte de tu equipo directivo, liderando la gestión de confiabilidad y mantenimiento de tu organización.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Dedicación semanal fija</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Participación en comités directivos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue60 rounded-full"></div>
                                    <span>Desarrollo de estrategias integrales</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <AbrirFormContacto
                                buttonText="Solicita asesoría continua"
                                icon={<ArrowRight size={20} />}
                                buttonColor="bg-blue60"
                                fullDesktop={true}
                                modalTitle='Solicita asesoría continua'
                            />
                        </div>
                    </div>
                
                </div>
                
                <div className="mt-12 bg-blue10 p-6 flex items-center">
                    <div className="mr-6 flex-shrink-0">
                        <MessageSquare size={36} className="text-blue60" />
                    </div>
                    <p className="leading-[136%] mb-0">
                        Todas nuestras modalidades de asesoría continua son personalizables según tus necesidades específicas. Podemos ajustar la dedicación, el enfoque técnico y los entregables para alinearnos perfectamente con tus objetivos organizacionales.
                    </p>
                </div>
            </div>
        </div>
    );
}
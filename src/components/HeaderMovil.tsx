"use client"

import logo from "@/assets/logoReliaplant.svg";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Close, DecisionNode, Category, ArrowUpRight, Model, Menu } from '@carbon/icons-react';
import { useState, useEffect } from "react";

// Dynamically import components that might use context
const AbrirFormContacto = dynamic(() => import('./AbrirFormContacto'), { ssr: false });

interface ConsultingCard {
  title: string;
  link: string;
}

const gestion: ConsultingCard[] = [
  { title: "Construcción del Registro de Activos en CMMS (Taxonomía)", link: "/consultoria/registro-activos " },
  { title: "Desarrollo del sistema de indicadores", link: "/consultoria/sistema-indicadores" },
  { title: "Diagnóstico de la Gestión de Mantenimiento", link: "/consultoria/diagnostico-gestion" },
  { title: "Estrategia de gestión de activos", link: "/consultoria/estrategia-gestion-activos" },
  { title: "Desarrollo de manuales corporativos y procedimientos", link: "/consultoria/manuales-corporativos" },
];

const MejorasEconomicas: ConsultingCard[] = [
  { title: "Mantenimiento Centrado en Confiabilidad (RCM)", link: "/consultoria/rcm" },
  { title: "Análisis RAM", link: "/consultoria/analisis-ram" },
  { title: "Análisis de Costo de Ciclo de Vida", link: "/consultoria/analisis-lcc" },
  { title: "Evaluación y manejo de la obsolescencia", link: "/consultoria/analisis-obsolescencia" },
  { title: "Análisis Causa Raíz (Investigación de fallas)", link: "/consultoria/rca" },
  { title: "Análisis de Mantenibilidad", link: "/consultoria/mantenibilidad" },
  { title: "Optimización de Inventario ", link: "/consultoria/optimizacion-mro" },
];

const PersonalEspecialista: ConsultingCard[] = [
  { title: "Asesoría continua y asignación de personal", link: "/consultoria/asesoria-continua" },
  { title: "Capacitación Técnica en Confiabilidad", link: "/consultoria/capacitacion" },
  { title: "Definición de responsabilidades y competencias", link: "/consultoria/matriz-responsabilidades" },
];

export default function HeaderMovil() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu when pathname changes (navigation completes)
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = '';
    }
  }, [pathname]);

  // Lock/unlock body scroll when menu is opened/closed
  useEffect(() => {
    if (menuOpen) {
      // Lock scroll on body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when menu is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const sections = [
    { id: "servicios", title: "Servicios de Consultoría", data: [
      { title: "Gestión", items: gestion },
      { title: "Metodologías de Confiabilidad", items: MejorasEconomicas },
      { title: "Personal", items: PersonalEspecialista }
    ]},
    { id: "software", title: "Software", data: [
      { title: "RCA", description: "Eliminación de defectos mediante Análisis Causa Raíz", link: "/consultoria/rca", icon: <Category size={24} /> },
      { title: "RCM", description: "Planes de mantenimiento para equipos críticos y no críticos", link: "/consultoria/rcm", icon: <DecisionNode size={24} /> },
      { title: "RAM", description: "Análisis de disponibilidad de sistemas complejos", link: "/ram", icon: <Model size={24} /> }
    ]}
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (activeSection && menuOpen) {
      setActiveSection(null);
    }
  };

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  
  // Use this for links that should navigate programmatically
  const handleNavigate = (href: string) => {
    router.push(href);
    // Menu will be closed by the useEffect when pathname changes
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="md:hidden w-full z-50 sticky top-0">      
      {/* Mobile Header Bar */}
      <header className="bg-white w-full z-50 border-b shadow-sm">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/">
            <span className="font-ZenDots text-gray100 text-lg">RELIAPLANT</span>
          </Link>

          {/* Menu Toggle Button */}
          <button 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="p-2 text-black"
          >
            {menuOpen ? <Close size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col" style={{ top: '60px' }}>
          {/* Scrollable content container */}
          <div className="flex-1 overflow-y-auto pb-20" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-2">
              {/* Menu Items */}
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-4 px-2"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="font-medium text-black">{section.title}</span>
                    <ChevronDown 
                      size={24} 
                      className={`transform transition-transform duration-200 text-black ${activeSection === section.id ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Section Content */}
                  {activeSection === section.id && (
                    <div className="p-2 mb-4">
                      {section.id === "servicios" ? (
                        // Servicios de Consultoría content
                        section.data.map((category, idx) => (
                          <div key={idx} className="mb-6">
                            <h3 className="text-lg mb-4 font-bold text-black border-b border-black pb-2 p">{category.title}</h3>
                            <ul className="space-y-3 pl-2">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    href={item.link} 
                                    className="text-gray-600 text-sm block py-1"
                                    onClick={handleLinkClick}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        // Software content
                        <div className="space-y-4 mt-2">
                          {section.data.map((item, idx) => (
                            <Link 
                              href={item.link} 
                              key={idx} 
                              className="flex items-start border-gray-100"
                              onClick={handleLinkClick}
                            >
                              <div className="bg-gray10 w-full p-2 rounded">
                                <p className="font-medium text-2xl mb-0">{item.title}</p>
                                <p className="text-gray-500 text-xs mb-0">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Additional buttons */}
              <div className="mt-6 space-y-4">
                <div onClick={handleLinkClick}>
                  <AbrirFormContacto 
                    buttonText="Contactar ahora" 
                    buttonColor="bg-blue60 w-full text-white" 
                  />
                </div>
                
                <Link 
                  href="/software" 
                  className="block w-full" 
                  onClick={handleLinkClick}
                >
                  <button className="w-full py-3 px-4 border border-gray-300 bg-gray-50 text-gray-800 flex items-center justify-center gap-2">
                    Ir a Software
                    <ArrowUpRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
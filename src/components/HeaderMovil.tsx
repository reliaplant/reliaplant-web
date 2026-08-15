"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Boton from "./Boton";
import { useRouter, usePathname } from "next/navigation";
import {
  ChevronDown,
  Close,
  DecisionNode,
  Category,
  ArrowUpRight,
  Model,
  Menu,
} from "@carbon/icons-react";
import { useState, useEffect, ReactElement } from "react";

// Dynamically import components that might use context
const AbrirFormContacto = dynamic(() => import("./AbrirFormContacto"), {
  ssr: false,
});

interface SoftwareItem {
  title: string;
  description: string;
  link: string;
  icon: ReactElement;
}

interface Section {
  id: string;
  title: string;
  data: SoftwareItem[];
}

export default function HeaderMovil() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu when pathname changes (navigation completes)
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
    }
  }, [pathname]);

  // Lock/unlock body scroll when menu is opened/closed
  useEffect(() => {
    if (menuOpen) {
      // Lock scroll on body when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sections: Section[] = [
    {
      id: "software",
      title: "Software",
      data: [
        {
          title: "Registro de Activos (Taxonomía)",
          description: "Base de datos estructurada con jerarquía ISO 14224",
          link: "/modulos/registro-activos",
          icon: <Category size={24} />,
        },
        {
          title: "RCM",
          description:
            "Planes de mantenimiento para equipos críticos y no críticos",
          link: "/modulos/rcm",
          icon: <DecisionNode size={24} />,
        },
        {
          title: "RCA",
          description: "Eliminación de defectos mediante Análisis Causa Raíz",
          link: "/modulos/rca",
          icon: <DecisionNode size={24} />,
        },
      ] as SoftwareItem[],
    },
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
    document.body.style.overflow = "";
  };

  return (
    <div className="md:hidden w-full z-50 sticky top-0">
      {/* Mobile Header Bar */}
      <header className="bg-white w-full z-50 border-b shadow-sm">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/">
            <span className="font-ZenDots text-gray100 text-lg">
              RELIAPLANT
            </span>
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
        <div
          className="fixed inset-0 bg-white z-40 flex flex-col"
          style={{ top: "60px" }}
        >
          {/* Scrollable content container */}
          <div
            className="flex-1 overflow-y-auto pb-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-2">
              {/* Menu Items */}
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-300">
                  <button
                    className="flex justify-between items-center w-full py-4 px-2"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="font-medium text-black">
                      {section.title}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`transform transition-transform duration-200 text-black ${
                        activeSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Section Content */}
                  {activeSection === section.id && (
                    <div className="p-2 mb-4">
                      {/* Software content */}
                      <div className="space-y-4 mt-2">
                        {section.data.map((item, idx) => (
                          <Link
                            href={item.link}
                            key={idx}
                            className="flex items-start border-gray-100"
                            onClick={handleLinkClick}
                          >
                            <div className="bg-gray10 w-full p-2">
                              <p className="font-medium text-2xl mb-0">
                                {item.title}
                              </p>
                              <p className="text-gray-500 text-xs mb-0">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Cómo funciona Link */}
              <div className="border-b border-gray-300">
                <Link
                  href="/como-funciona"
                  className="flex justify-between items-center w-full py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium text-black">Cómo funciona</span>
                </Link>
              </div>

              {/* Industrias Link */}
              <div className="border-b border-gray-300">
                <Link
                  href="/industrias"
                  className="flex justify-between items-center w-full py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium text-black">Industrias</span>
                </Link>
              </div>

              {/* ROI Link */}
              <div className="border-b border-gray-300">
                <Link
                  href="/roi"
                  className="flex justify-between items-center w-full py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium text-black">ROI</span>
                </Link>
              </div>

              {/* Pricing Link */}
              <div className="border-b border-gray-300">
                <Link
                  href="/pricing"
                  className="flex justify-between items-center w-full py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium text-black">Pricing</span>
                </Link>
              </div>

              {/* Blog Link */}
              <div className="border-b border-gray-300">
                <Link
                  href="/blog"
                  className="flex justify-between items-center w-full py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium text-black">Blog</span>
                </Link>
              </div>

              {/* Additional buttons */}
              <div className="mt-6 space-y-4">
                <div onClick={handleLinkClick}>
                  <AbrirFormContacto
                    buttonText="Contactar ahora"
                    variant="primary"
                  />
                </div>

                <Boton
                  href="https://app.reliaplant.com/"
                  variant="outline"
                  fullWidth
                  icon={<ArrowUpRight size={16} />}
                  onClick={handleLinkClick}
                >
                  Ir a Software
                </Boton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

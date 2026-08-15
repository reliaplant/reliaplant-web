"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Category,
  ChevronDown,
  DecisionNode,
  ArrowUpRight,
} from "@carbon/icons-react";
import AbrirFormContacto from "./AbrirFormContacto";
import HeaderMovil from "./HeaderMovil";
import Boton from "./Boton";

export default function Header() {
  const [softwareMenuOpen, setSoftwareMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSoftwareMenuOpen(false);
  }, [pathname]);

  return (
    <div className="left-0 w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md">
      <header className="bg-white/95 w-full z-50 shadow-sm hidden md:block h-[56px] border-b border-gray-100">
        <nav className="flex flex-row justify-between px-[3vw] h-full">
          <ul className="flex items-center p-0 m-0 h-full gap-1">
            <div className="h-full flex items-center pr-6">
              <Link href="/">
                <span className="text-gray100 text-xl cursor-pointer font-ZenDots tracking-tight hover:opacity-80 transition-opacity">
                  RELIAPLANT
                </span>
              </Link>
            </div>
            <div className="h-px w-px bg-gray-200 self-center mx-2" style={{height: '24px'}} />

            <div
              className="mb-0 text-sm relative h-full"
              onMouseLeave={() => setSoftwareMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSoftwareMenuOpen((open) => !open)}
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 transition-colors mx-0.5"
                aria-haspopup="menu"
                aria-expanded={softwareMenuOpen}
              >
                <span className="font-medium text-[13px] tracking-wide">SOFTWARE</span>
                <ChevronDown
                  size={16}
                  className={`ml-1 transform transition-transform duration-200 text-gray-400 ${
                    softwareMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {softwareMenuOpen && (
                <div className="mt-[42px] absolute left-0 top-2 p-3 bg-white shadow-xl border border-gray-300 text-black z-50">
                  <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer transition-colors">
                    <Link
                      href="/modulos/registro-activos"
                      className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                      onClick={() => setSoftwareMenuOpen(false)}
                    >
                      <div className="bg-blue-50 p-3">
                        <Category size={28} className="text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold text-sm">Registro de Activos (Taxonomía)</span>
                        <span className="text-gray-500 text-[.85rem]">
                          Base de datos estructurada con jerarquía ISO 14224
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer transition-colors">
                    <Link
                      href="/modulos/rcm"
                      className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                      onClick={() => setSoftwareMenuOpen(false)}
                    >
                      <div className="bg-blue-50 p-3">
                        <DecisionNode size={28} className="text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold text-sm">RCM</span>
                        <span className="text-gray-500 text-[.85rem]">
                          Planes de mantenimiento para equipos críticos y no críticos
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="px-3 py-3 flex flex-row items-center w-[40vw] gap-4 hover:bg-blue-50 hover:cursor-pointer transition-colors">
                    <Link
                      href="/modulos/rca"
                      className="no-underline hover:no-underline flex flex-row items-center gap-4 w-full"
                      onClick={() => setSoftwareMenuOpen(false)}
                    >
                      <div className="bg-blue-50 p-3">
                        <DecisionNode size={28} className="text-blue-600" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold text-sm">RCA</span>
                        <span className="text-gray-500 text-[.85rem]">
                          Eliminación de defectos mediante Análisis Causa Raíz
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="px-3 pt-2">
                    <a
                      href="https://app.reliaplant.com/"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      onClick={() => setSoftwareMenuOpen(false)}
                    >
                      Ir al software
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/como-funciona"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors mx-0.5"
              >
                CÓMO FUNCIONA
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/industrias"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors mx-0.5"
              >
                INDUSTRIAS
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/roi"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors mx-0.5"
              >
                ROI
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/pricing"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors mx-0.5"
              >
                PRICING
              </Link>
            </div>

            <div className="mb-0 text-sm relative group h-full">
              <Link
                href="/blog"
                className="h-full px-4 hover:bg-blue-50 flex items-center text-gray-600 font-medium text-[13px] tracking-wide transition-colors mx-0.5"
              >
                BLOG
              </Link>
            </div>
          </ul>
          <div className="flex flex-row items-center h-full gap-2">
            <AbrirFormContacto especial="header" />
            <Boton href="https://app.reliaplant.com/" variant="dark" icon={<ArrowUpRight size={18} />}>
              Ir a Software
            </Boton>
          </div>
        </nav>
      </header>
      <div className="md:hidden">
        <HeaderMovil />
      </div>
    </div>
  );
}

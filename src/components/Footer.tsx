"use client";
import Link from "next/link";
import { RequestQuote } from "@carbon/icons-react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import FormularioContacto from "./FormularioContacto";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const styles = {
    sectionTitle:
      "text-white font-semibold mb-4 text-left pb-2 border-b border-gray-700 text-sm uppercase tracking-wider",
    link: "font-light text-gray-300 text-sm hover:text-white transition-colors duration-200",
    section: "w-full md:w-1/4 mb-6 md:mb-0",
    list: "pl-0 text-white80 space-y-2.5 text-left",
  };

  return (
    <>
      <footer className="px-4 sm:px-[4vw] lg:px-[3vw] py-10 sm:py-14 lg:py-16 text-sm text-gray-300 bg-gray-950">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Logo section */}
          <div className={styles.section}>
            <span className="font-ZenDots text-white text-xl">RELIAPLANT</span>
          </div>

          {/* Services section */}
          <div className={styles.section}>
            <h6 className={styles.sectionTitle}>Servicios y consultoría</h6>
            <ul className={styles.list}>
              <li>
                <Link
                  className={styles.link}
                  href="/consultoria/registro-activos"
                >
                  Construcción del Registro de Activos en CMMS (Taxonomía)
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/consultoria/sistema-indicadores"
                >
                  Desarrollo del sistema de indicadores
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/consultoria/diagnostico-gestion"
                >
                  Diagnóstico de la Gestión de Mantenimiento
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  href="/consultoria/optimizacion-mro"
                >
                  Optimización de Inventario / Número Óptimo de partes
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link className={styles.link} href="/consultoria/analisis-lcc">
                  Análisis de Costo de Ciclo de Vida y vida útil remanente
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link className={styles.link} href="/consultoria/rca">
                  Análisis Causa Raíz (Investigación de fallas)
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link className={styles.link} href="/consultoria/analisis-ram">
                  Análisis RAM
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link
                  className={styles.link}
                  href="/consultoria/mantenibilidad"
                >
                  Análisis de Mantenibilidad
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link
                  className={styles.link}
                  href="/consultoria/asesoria-continua"
                >
                  Asignación de personal técnico especialista
                </Link>
              </li>
              <li className="sm:hidden">
                <Link className={styles.link} href="/consultoria">
                  Ver todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Software and Legal section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              {/* Software section */}
              <div className="w-full sm:w-1/2">
                <h6 className={styles.sectionTitle}>Software</h6>
                <ul className={styles.list}>
                  <li>
                    <Link className={styles.link} href="/soporte">
                      Soporte Técnico
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="/software/desarrollo">
                      Software a la medida
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal section */}
              <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                <h6 className={styles.sectionTitle}>Legal</h6>
                <ul className={styles.list}>
                  <li>
                    <Link className={styles.link} href="/contacto">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="/terminos-de-uso">
                      Términos de uso
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="/legal/privacidad">
                      Política de privacidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3">
              <a
                href="http://app.reliaplant.com/"
                className="inline-block w-full px-4 py-3 border border-gray-700 bg-gray-900 hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-300 hover:text-white text-center rounded-lg font-medium text-sm"
              >
                Ir a software &rarr;
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="inline-block w-full px-4 py-3 border border-gray-700 bg-gray-900 hover:bg-blue-600 hover:border-blue-600 transition-all text-gray-300 hover:text-white text-center rounded-lg font-medium text-sm"
              >
                Solicita una demo{" "}
                <RequestQuote size={18} className="inline ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Add copyright section for mobile view */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center md:text-left">
          <p className="!text-sm text-gray-500">
            © {new Date().getFullYear()} Reliaplant. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/40 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="bg-white p-8 shadow-2xl rounded-2xl md:w-[480px] w-full md:h-fit h-screen md:max-h-[90vh] overflow-y-auto">
            <div className="mb-6 flex flex-row justify-between items-center">
              <span className="font-ZenDots text-gray100 text-xl">
                RELIAPLANT
              </span>
              <FiX
                size={32}
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="mb-4">
              <h2 className="text-2xl">Solicita una demo</h2>
            </div>
            <FormularioContacto
              type="demo"
              lugar="footer"
              btnText="Solicitar demo"
              especial="Solicitud de demo - footer"
            />
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import Link from "next/link";
import { RequestQuote } from "@carbon/icons-react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import FormularioContacto from "./FormularioContacto";
import Boton from "./Boton";

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
        {/* Top: Logo + tagline */}
        <div className="mb-10 pb-8 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="font-ZenDots text-white text-xl block">RELIAPLANT</span>
            <p className="text-gray-500 text-xs mt-1">Confiabilidad industrial y gestión de activos</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Boton href="https://app.reliaplant.com/" variant="primary">
              Ir al software &rarr;
            </Boton>
            <Boton
              variant="outline-light"
              icon={<RequestQuote size={16} />}
              onClick={() => setShowModal(true)}
            >
              Solicita una demo
            </Boton>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Plataforma */}
          <div>
            <h6 className={styles.sectionTitle}>Plataforma</h6>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/modulos/registro-activos">
                  Registro de Activos
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/modulos/rcm">
                  Módulo RCM
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/modulos/rca">
                  Análisis de Causa Raíz
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/pricing">
                  Planes y precios
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/como-funciona">
                  Cómo funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Consultoría */}
          <div>
            <h6 className={styles.sectionTitle}>Consultoría</h6>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/consultoria/registro-activos">
                  Registro de Activos en CMMS
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/consultoria/rcm">
                  Mantenimiento Centrado en Confiabilidad
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/consultoria/rca">
                  Análisis Causa Raíz
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/consultoria/analisis-ram">
                  Análisis RAM
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/consultoria/analisis-lcc">
                  Costo de Ciclo de Vida
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/consultoria">
                  Ver todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h6 className={styles.sectionTitle}>Recursos</h6>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/roi">
                  Calculadora ROI
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  Sobre Reliaplant
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className={styles.sectionTitle}>Legal</h6>
            <ul className={styles.list}>
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
              <li>
                <Link className={styles.link} href="/legal/cookies">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
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

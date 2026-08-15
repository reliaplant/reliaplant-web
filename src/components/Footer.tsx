"use client";
import Link from "next/link";
import { RequestQuote } from "@carbon/icons-react";
import AbrirFormContacto from "./AbrirFormContacto";
import Boton from "./Boton";

export default function Footer() {
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
            <AbrirFormContacto
              buttonText="Solicita una demo"
              variant="outline-light"
              icon={<RequestQuote size={16} />}
              modalTitle="Solicita una demo"
              btnText="Solicitar demo"
              especial="Solicitud de demo - footer"
            />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
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

    </>
  );
}

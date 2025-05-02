import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function Footer() {
  const styles = {
    sectionTitle:
      "text-white100 font-bold mb-4 text-left pb-2 border-b border-gray60",
    link: "font-light text-gray-300 text-sm hover:text-white hover:underline transition-all",
    section: "w-full md:w-1/4 mb-6 md:mb-0",
    list: "pl-0 text-white80 space-y-2 text-left",
  };

  return (
    <footer className="px-4 sm:px-[6vw] lg:px-[5vw] py-8 sm:py-12 lg:py-16 text-sm text-white80 bg-gray100">
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
              <Link className={styles.link} href="/consultoria/indicadores">
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
                Análisis de Costo de Ciclo de Vida
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link className={styles.link} href="/consultoria/analisis-lcc">
                Análisis de vida útil remanente
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
              <Link className={styles.link} href="/consultoria/mantenibilidad">
                Análisis de Mantenibilidad
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link className={styles.link} href="/consultoria/capacidad">
                Análisis de capacidad efectiva de producción
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
                  <Link className={styles.link} href="/software/demo">
                    Solicita una demo
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/contacto">
                    Habla con nuestro equipo
                  </Link>
                </li>
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
                  <Link className={styles.link} href="/legal/terminos">
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

          {/* CTA Button */}
          <div className="mt-8 md:mt-12">
            <button className="w-full sm:w-auto px-4 py-3 border-2 border-gray60 bg-gray90 hover:bg-blue60 transition-colors">
              Ir a software <span className="pl-2"></span> &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Add copyright section for mobile view */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center md:text-left">
        <p className="!text-sm text-white60">
          © {new Date().getFullYear()} Reliaplant. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

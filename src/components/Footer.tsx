import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";


export default function Footer() {
  return (
    <footer className="px-4 sm:px-[6vw] lg:px-[8vw] py-8 sm:py-12 lg:py-16 text-sm text-white80 bg-gray100">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Logo section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <span className="font-ZenDots text-white text-xl">RELIAPLANT</span>
        </div>
  
        {/* Services section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h6 className="text-white100 font-bold mb-4 text-left pb-2 border-b border-gray60">Servicios y consultoría</h6>
          <ul className="pl-0 text-white80 space-y-2 text-left">
            <li><a className="font-light" href="#">Construcción del Registro de Activos en CMMS (Taxonomía)</a></li>
            <li><a className="font-light" href="#">Desarrollo del sistema de indicadores</a></li>
            <li><a className="font-light" href="#">Diagnóstico de la Gestión de Mantenimiento</a></li>
            <li><a className="font-light" href="#">Optimización de Inventario / Número Óptimo de partes</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis de Costo de Ciclo de Vida</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis de vida útil remanente</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis Causa Raíz (Investigación de fallas)</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis RAM</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis de Manteninbilidad</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Análisis de capacidad efectiva de producción</a></li>
            <li className="hidden sm:block"><a className="font-light" href="#">Asignación de personal técnico especialista</a></li>
            <li className="sm:hidden"><a className="font-light text-blue-300" href="#">Ver todos los servicios →</a></li>
          </ul>
        </div>
  
        {/* Software and Legal section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {/* Software section */}
            <div className="w-full sm:w-1/2">
              <h6 className="text-white100 font-bold mb-4 text-left pb-2 border-b border-gray60">Software</h6>
              <ul className="pl-0 text-white80 space-y-2 text-left">
                <li className=""><a className="font-light" href="#">Solicita una demo</a></li>
                <li><a className="font-light" href="#">Habla con nuestro equipo</a></li>
                <li><a className="font-light" href="#">Soporte Técnico</a></li>
                <li><a className="font-light" href="#">Software a la medida</a></li>
              </ul>
            </div>
            
            {/* Legal section */}
            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
              <h6 className="text-white100 font-bold mb-4 text-left pb-2 border-b border-gray60">Legal</h6>
              <ul className="pl-0 text-white80 space-y-2 text-left">
                <li><a className="font-light" href="#">Contacto</a></li>
                <li><a className="font-light" href="#">Términos de uso</a></li>
                <li><a className="font-light" href="#">Política de privcidad</a></li>
                <li><a className="font-light" href="#">Preferencias de cookies</a></li>
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
        <p className="text-xs text-white60">
          © {new Date().getFullYear()} Reliaplant. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

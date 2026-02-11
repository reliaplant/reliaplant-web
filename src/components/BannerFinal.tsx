import { Headset } from "@carbon/icons-react";
import Link from "next/link";

export function FinalBanner() {
  return (
    <div className="px-4 md:px-[4vw] py-12 md:py-0 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="flex flex-col md:flex-row bg-white justify-between rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="p-8 md:p-[4vw] w-full md:w-1/2">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            ¿Buscas optimizar la disponibilidad de tus activos?
          </h3>
          <p className="mt-6 md:mt-8 text-lg md:text-xl font-normal text-gray-600 leading-relaxed">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo podemos ayudarte a maximizar la confiabilidad de tu planta.
          </p>
          <div className="mt-8 md:mt-12">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-blue-600 text-white px-6 py-3.5 rounded-lg font-medium transition-colors"
            >
              Agenda con un especialista
              <Headset size={20} />
            </Link>
          </div>
        </div>
        <div className="h-64 md:h-auto md:w-1/2 bg-[url('/assets/consultor2.jpg')] bg-cover bg-center">
          <div className="bg-gradient-to-r from-white/80 via-transparent to-transparent h-full w-full hidden md:block" />
        </div>
      </div>
    </div>
  );
}

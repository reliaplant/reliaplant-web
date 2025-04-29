import { Headset } from "@carbon/icons-react";

export function FinalBanner() {
  return (
    <div className="px-[4vw] bg-gradient-to-l from-reliablue to-graylightgray">
      <div className="flex flex-row bg-graylightgray justify-between hover:bg-white transition-all duration-100 hover:shadow-xl">
        <div className="p-[4vw] w-[40vw]">
          <h3 className="text-5xl font-light">
            ¿Buscas optimizar la disponibilidad de tus activos?
          </h3>
          <h4 className="mt-8 text-2xl font-normal">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo podemos ayudarte a maximizar la confiabilidad de tu planta.
          </h4>
          <div className="mt-12">
            <button className="font-light text-[1.1rem] flex flex-row items-center gap-8 mb-4">
              <span>Agenda con un especialista</span>
              <Headset size={20} className="text-white" />
            </button>
          </div>
        </div>
        <div className="h-[29vw] z-10 w-[50vw] bg-[url('/assets/consultor2.jpg')] bg-cover bg-center transform -scale-x-100">
          <div className="bg-gradient-to-l from-gray20 via-transparent to-transparent h-full w-full"></div>
        </div>
      </div>
    </div>
  );
}

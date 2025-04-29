import { ReactNode } from "react";
import AbrirFormContacto from "./AbrirFormContacto";
import { Headset } from "@carbon/icons-react";

interface BannerPrincipalProps {
  title: string;
  description: string;
  currentPath: string;
  image: string;
}

export default function BannerPrincipal({
  title,
  description,
  currentPath,
  image,
}: BannerPrincipalProps) {
  return (
    <div className="">
      <div className="bg-gray-100 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
        {/* Texto */}
        <div className="relative z-10 text-whites w-full md:w-[50vw] p-4 sm:p-6 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
          <div>
            <div className="flex flex-row flex-wrap">
              <span className="text-blue60 font-light mb-4">
                <a href="/" className="hover:underline">
                  Inicio
                </a>{" "}
                <span className="mx-2 text-gray60">{"/"}</span>
                <a href="/consultoria" className="hover:underline">
                  Consultoría
                </a>{" "}
                <span className="mx-2 text-gray60">{"/"}</span>
                {currentPath}
              </span>
            </div>
            <h1>{title}</h1>
            <h4>{description}</h4>
          </div>
          <div className="mt-8 md:mt-6">
            <AbrirFormContacto
              buttonText="Habla con un especialista"
              icon={<Headset size={20} className="text-white" />}
              buttonColor="bg-gray90"
            />
          </div>
        </div>
        {/* Imagen */}
        <div
          className="relative md:absolute md:right-0 h-64 md:h-full w-full md:w-[50vw] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
}

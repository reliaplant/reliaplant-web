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
    <div>
      <div className="bg-gray-50 relative min-h-[400px] flex flex-col md:flex-row items-center justify-start">
        {/* Texto */}
        <div className="relative z-10 w-full md:w-[50vw] p-6 sm:p-8 md:p-[3vw] lg:p-[5vw] flex flex-col justify-between">
          <div>
            <nav className="flex flex-row flex-wrap mb-6" aria-label="Breadcrumb">
              <span className="text-blue-600 font-light text-sm">
                <a href="/" className="hover:underline">
                  Inicio
                </a>{" "}
                <span className="mx-2 text-gray-400">/</span>
                <a href="/consultoria" className="hover:underline">
                  Consultoría
                </a>{" "}
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{currentPath}</span>
              </span>
            </nav>
            <h1 className="text-gray-900">{title}</h1>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">{description}</p>
          </div>
          <div className="mt-8">
            <AbrirFormContacto
              buttonText="Habla con un especialista"
              icon={<Headset size={20} className="text-white" />}
              buttonColor="bg-gray-900"
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

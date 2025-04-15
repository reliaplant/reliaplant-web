"use client";

import { useState } from "react";
import { MdError, MdCheckCircle, MdPending } from "react-icons/md";

interface IconWithTooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
}

function IconWithTooltip({ icon, tooltipText }: IconWithTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer animate-pulse"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {icon}
      </div>
      {showTooltip && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
          {tooltipText}
        </div>
      )}
    </div>
  );
}

export default function EquiposPlanta() {
  return (
    <div
      className="relative h-[100vh] flex items-center justify-start bg-cover bg-center bg-[url('/assets/planta.jpg')]"
    >
      {/* Capa de degradado oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80"></div>

      {/* Contenido (iconos con tooltip) */}
      <div className="relative z-10 w-full h-full">
        <div className="absolute top-10 left-20">
          <IconWithTooltip
            icon={<MdError className="text-4xl text-red-500" />}
            tooltipText="ALERTA: Fallo en equipo X"
          />
        </div>
        <div className="absolute top-40 right-20">
          <IconWithTooltip
            icon={<MdCheckCircle className="text-4xl text-green-500" />}
            tooltipText="TODO EN ORDEN"
          />
        </div>
        <div className="absolute bottom-20 left-40">
          <IconWithTooltip
            icon={<MdPending className="text-4xl text-yellow-500" />}
            tooltipText="PENDIENTE REVISIÓN"
          />
        </div>
      </div>
    </div>
  );
}

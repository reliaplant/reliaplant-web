"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Close } from "@carbon/icons-react";

// Popup de "Solicita una demo / cotización" a pantalla completa: a la izquierda qué pasa en la demo, a la derecha el formulario.
export default function ModalDemo({ titulo, onCerrar, children }: { titulo: string; onCerrar: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onCerrar(); };
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onCerrar]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto" role="dialog" aria-modal="true" aria-label={titulo}>
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-solid border-gray-200">
        <div className="max-w-[1180px] mx-auto px-5 h-16 flex items-center justify-between">
          <span className="font-ZenDots text-gray-900 text-[19px] tracking-wide">RELIAPLANT</span>
          <button type="button" onClick={onCerrar} className="flex items-center gap-2 text-[14.5px] text-gray-600 hover:text-gray-900 px-2 py-2" aria-label="Cerrar">
            Cerrar <Close size={22} />
          </button>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-5 py-10 md:py-16 grid gap-10 md:gap-16 md:grid-cols-[1fr_1fr] items-start">
        <div className="flex flex-col gap-6">
          <h2 className="text-[34px] md:text-[46px] leading-[1.04] font-semibold tracking-[-0.03em] text-gray-900">
            {titulo}. <span className="text-gray-400">Te respondemos en un día hábil.</span>
          </h2>
          <ul className="list-none p-0 m-0 flex flex-col gap-4 text-[16px] text-gray-600">
            <li><b className="text-gray-900 font-semibold">Con tus datos.</b> Mándanos un listado de equipos o un DTI y en la demo lo ves cargado, con tus tags y tus ubicaciones técnicas.</li>
            <li><b className="text-gray-900 font-semibold">Plataforma o servicio.</b> Te mostramos qué puedes hacer tú en ReliaPlant y qué podemos hacer por ti: levantamiento, taxonomía, RCM, RCA.</li>
            <li><b className="text-gray-900 font-semibold">Sin compromiso.</b> 30 minutos por videollamada, con un ingeniero de confiabilidad, no con un vendedor.</li>
          </ul>
          <div className="relative hidden md:block aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/sitio/portada-ingeniero.jpg" alt="Ingeniero de confiabilidad en planta" fill sizes="560px" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="md:border md:border-solid md:border-gray-200 md:rounded-2xl md:p-8 md:shadow-[0_24px_60px_-30px_rgba(15,17,21,0.3)]">
          {children}
        </div>
      </div>
    </div>
  );
}

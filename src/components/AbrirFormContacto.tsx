"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import FormularioContacto from "./FormularioContacto";
import { RequestQuote } from "@carbon/icons-react";
import Boton, { BotonVariant, BotonSize } from "./Boton";

interface AbrirFormContactoProps {
  buttonText?: string;
  icon?: React.ReactNode;
  variant?: BotonVariant;
  fullDesktop?: boolean;
  modalTitle?: string;
  especial?: string; // Make it optional since we'll get it automatically
  className?: string;
  size?: BotonSize;
  btnText?: string; // texto del botón de envío dentro del formulario
  type?: string;
  interes?: string;
}

const AbrirFormContacto: React.FC<AbrirFormContactoProps> = ({
  buttonText = "Solicita una cotización",
  icon = <RequestQuote size={20} />,
  variant = "primary",
  fullDesktop = false,
  modalTitle = "Solicita una demo",
  especial,
  className,
  size = "md",
  btnText = "Solicitar información",
  type = "demo",
  interes,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // El modal se monta vía portal al body; evita SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  // Bloquea el scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
      <div className={`flex flex-row z-[30] ${fullDesktop ? "w-full" : "w-full md:w-auto"}`}>
        <Boton
          variant={variant}
          size={size}
          fullWidth
          icon={icon}
          className={className}
          onClick={() => setShowModal(true)}
        >
          {buttonText}
        </Boton>
      </div>

      {mounted && showModal && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
        >
          <div
            ref={modalRef}
            className="relative bg-white p-8 shadow-2xl md:w-[480px] w-full md:h-fit h-screen md:max-h-[90vh] overflow-y-auto"
          >
            <div className="mb-6 flex flex-row justify-between items-center">
              <span className="font-ZenDots text-gray100 text-xl">RELIAPLANT</span>
              <FiX
                size={28}
                className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => setShowModal(false)}
                aria-label="Cerrar"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{modalTitle}</h2>
            </div>
            <FormularioContacto
              type={type}
              interes={interes}
              btnText={btnText}
              especial={especial || "cotizacion"}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default AbrirFormContacto;

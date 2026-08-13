"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import DemoRequestForm from "./DemoRequestForm";
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
}

const AbrirFormContacto: React.FC<AbrirFormContactoProps> = ({
  buttonText = "Solicita una cotización",
  icon = <RequestQuote size={20} />,
  variant = "primary",
  fullDesktop = false,
  modalTitle = "Hablar con un especialista",
  especial,
  className,
  size = "md",
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/40 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={modalTitle}>
          <div
            ref={modalRef}
            className="relative shadow-2xl rounded-2xl md:w-[520px] w-full md:h-fit h-screen md:max-h-[90vh] overflow-y-auto overflow-x-hidden"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <FiX size={24} />
            </button>
            <DemoRequestForm especial={especial || "header"} />
          </div>
        </div>
      )}
    </>
  );
};

export default AbrirFormContacto;

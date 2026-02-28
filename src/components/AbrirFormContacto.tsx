"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import DemoRequestForm from "./DemoRequestForm";
import { RequestQuote } from "@carbon/icons-react";

interface AbrirFormContactoProps {
  buttonText?: string;
  icon?: React.ReactNode;
  textColor?: string;
  fullDesktop?: boolean;
  modalTitle?: string;
  especial?: string; // Make it optional since we'll get it automatically
  className?: string; // Add this line
  size?: "sm" | "md" | "lg";
}

const AbrirFormContacto: React.FC<
  AbrirFormContactoProps & { buttonColor?: string }
> = ({
  buttonText = "Solicita una cotización",
  icon = <RequestQuote size={20} className="text-white" />,
  buttonColor = "bg-blue60",
  textColor = "text-white",
  fullDesktop = false,
  modalTitle = "Hablar con un especialista",
  especial,
  className, // Add this line
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

  // Si fullDesktop es true, se usará w-full en escritorio, de lo contrario md:w-fit.
  const desktopClass = fullDesktop ? "w-full" : "md:w-fit";

  return (
    <>
      <div className={`flex flex-row z-[30] ${fullDesktop ? "w-full" : "w-full md:w-auto"}`}>
        <div
          className={`${desktopClass} w-full ${className || ""}`} // Add className here
          onClick={() => setShowModal(true)}
        >
          <button
            className={`w-full ${desktopClass} ${
              size === "lg"
                ? "py-3.5 px-8 font-semibold text-base"
                : "py-2.5 px-6 font-semibold text-sm"
            } flex flex-row items-center justify-center gap-2 ${buttonColor} hover:brightness-90 transition-all rounded-lg`}
          >
            <span className={`font-bold whitespace-nowrap ${textColor}`}>
              {buttonText}
            </span>
            {icon !== "none" && icon}
          </button>
        </div>
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

"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import FormularioContacto from "./FormularioContacto";
import { RequestQuote } from "@carbon/icons-react";
import Boton, { BotonVariant, BotonSize } from "./Boton";
import ModalDemo from "./ModalDemo";

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

  // El modal se monta vía portal al body; evita SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);


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
        <ModalDemo titulo={modalTitle} onCerrar={() => setShowModal(false)}>
          <FormularioContacto type={type} interes={interes} btnText={btnText} especial={especial || "cotizacion"} />
        </ModalDemo>,
        document.body
      )}
    </>
  );
};

export default AbrirFormContacto;

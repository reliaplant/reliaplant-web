"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import FormularioContacto from "@/components/FormularioContacto";
import { FiX } from "react-icons/fi";

export default function RCACtaButtons() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Link
          href="https://app.reliaplant.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3.5 rounded font-semibold transition-all"
        >
          Prueba Ahora
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded font-medium transition-all"
        >
          Contactar
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/40 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 p-8 relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Cerrar"
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Hablar con un especialista en RCA
            </h2>
            <FormularioContacto
              interes="RCA"
              origen="/modulos/rca"
              btnText="Enviar mensaje"
            />
          </div>
        </div>
      )}
    </>
  );
}

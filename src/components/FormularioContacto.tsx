"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormContactData, saveFormContact } from "@/lib/firebase/form_contact";

interface FormularioContactoProps {
  type?: string;
  campana?: string;
  anuncio?: string | null;
  interes?: string;
  subject?: string;
  recipients?: string[];
  responsable?: string;
  origen?: string;
  lugar?: string;
  colorClass?: string;
  mailchimpTagIn?: string;
  btnTextColorClass?: string;
  btnText?: string;
  especial?: string;
  direccion?: string;
}

export default function FormularioContacto({
  type = "info",
  campana = "",
  anuncio = null,
  interes = "",
  origen = "",
  lugar = "footer",
  colorClass = "bg-blue60 hover:bg-gray80",
  btnTextColorClass = "text-white ",
  btnText = "Solicitar información",
  especial = "",
  direccion = "",
}: FormularioContactoProps) {
  const [formData, setFormData] = useState<
    Omit<FormContactData, "date" | "isMobile">
  >({
    nombre: "",
    email: "",
    telefono: "",
    interes: "",
    cargo: "",
    empresa: "",
    pais: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData({
      ...formData,
      telefono: value,
      pais: country.countryCode.toUpperCase(),
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const origenLocal = window.location.href;

    try {
      const formContactData: FormContactData = {
        nombre: formData.nombre.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        interes: formData.interes,
        cargo: formData.cargo,
        empresa: formData.empresa.trim(),
        pais: formData.pais,
        date: new Date(),
        isMobile: isMobile,
        origen: origenLocal,
        especial: especial || null,
        direccion: direccion || window.location.pathname,
        type: type || null,
        campana: campana || null,
        anuncio: anuncio || null,
      };

      const result = await saveFormContact(formContactData);
      if (result) {
        setIsSubmitted(true);
      } else {
        throw new Error("No se pudo guardar el formulario");
      }
    } catch (error) {
      console.error("Error al guardar el formulario:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="formulario-contacto">
      {isSubmitted ? (
        <div className="flex items-center justify-center min-h-[250px] bg-white text-center  px-8">
          <div>
            <h2 className="text-xl font-semibold">
              Hemos recibido tu solicitud
            </h2>
            <p className="text-sm text-gray-600 mt-6 mb-0">
              Uno de nuestros asesores se está comunicando contigo en la
              brevedad
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="">
          {/* Nombre */}
          <div className="mb-3">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full px-2 py-1 text-sm border border-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="E-mail profesional"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-2 py-1 text-sm  border border-gray-300"
              required
            />
          </div>

          {/* Teléfono */}
          <div className="mb-3">
            <PhoneInput
              country={"mx"}
              value={formData.telefono}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "30px",
                padding: "0.75rem",
                paddingLeft: "45px",
                borderRadius: "0.125rem",
                border: "1px solid #d1d5db",
              }}
              specialLabel=""
            />
          </div>

          {/* Interés */}
          <div className="mb-3">
            <select
              name="interes"
              value={formData.interes}
              onChange={handleInputChange}
              className="w-full px-1 py-1 text-sm border border-gray-300"
              required
            >
              <option value="" disabled>
                Seleccione su interés
              </option>
              <option value="individual">Individual</option>
              <option value="empresa">Empresa</option>
            </select>
          </div>

          {/* Cargo y Empresa */}
          <div
            className={`mb-[5px] md:mb-3 grid grid-cols-1 md:grid-cols-2 gap-2 `}
          >
            <select
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
              className="w-full px-1 py-1 text-sm  border border-gray-300"
              required
            >
              <option value="" disabled>
                Seleccione su cargo
              </option>
              <option value="Director">Director</option>
              <option value="Gerente de Mantenimiento / Operaciones">
                Gerente de Mantenimiento / Operaciones
              </option>
              <option value="Ingeniero de Mantenimiento / Confiabilidad">
                Ingeniero de Mantenimiento / Confiabilidad
              </option>
              <option value="Jefe de Mantenimiento">
                Jefe de Mantenimiento
              </option>
              <option value="Supervisor de Mantenimiento">
                Supervisor de Mantenimiento
              </option>
              <option value="Coordinador / Planificador / Programador">
                Coordinador / Planificador / Programador
              </option>
              <option value="Téc. de Mantto / Téc. de Predictivo">
                Téc. de Mantto / Téc. de Predictivo
              </option>
              <option value="Operador">Operador</option>
              <option value="Consultor">Consultor</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Compras">Compras</option>
              <option value="Asistente o Aprendiz">Asistente o Aprendiz</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              className="w-full px-2 py-1 text-sm  border border-gray-300"
              required
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className={`w-full ${btnTextColorClass} font-semibold p-3 mt-4 ${colorClass}`}
          >
            {btnText}
          </button>

          {/* Política de privacidad */}
          <p className="text-center text-[10px] text-gray-500 mt-4 mb-0">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      )}
    </div>
  );
}

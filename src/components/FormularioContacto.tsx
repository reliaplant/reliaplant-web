"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  createUser,
  getRefCollection,
  getSecondaryRefCollection,
  saveInfoRequest,
  sendEmail,
} from "../lib/firebase/firebase";

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
}

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  cantidadPersonas: string;
  cargo: string;
  empresa: string;
  pais: string;
  [key: string]: string; // Para permitir acceso dinámico con formData[name]
}

export default function FormularioContacto({
  type = "info",
  campana = "",
  anuncio = null,
  interes = "",
  subject = "Nuevo llenado formulario curso",
  recipients = [
    "liliana.giraldo@predyc.com",
    "andres.gonzalez@predyc.com",
    "desarrollo@predyc.com",
  ],
  responsable = "",
  origen = "",
  lugar = "footer",
  colorClass = "bg-blue60 hover:bg-gray80",
  mailchimpTagIn = "footer",
  btnTextColorClass = "text-white ",
  btnText = "Solicitar información",
}: FormularioContactoProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    interes: "",
    cantidadPersonas: "",
    cargo: "",
    empresa: "",
    pais: "",
  });

  let copy = ["ventas@predyc.com", "desarrollo@predyc.com"];
  const [captchaValido, setCaptchaValido] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Corrige la URL de reCAPTCHA (elimina el corchete de más al final)
  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Función para construir el contenido del correo
  const buildEmailContent = (data: FormData) => {
    const sender = "ventas@predyc.com";
    const recipientsMail =
      recipients.length > 0 ? recipients : ["ventas@predyc.com"];
    const subjectMail = subject || "Nuevo registro formulario en Predyc";

    const htmlContentFinal = `
      <p><strong>${
        data.nombre
      }</strong> ha llenado el formulario en <strong>${lugar}</strong> interesado en <strong>${
      data.interes
    }</strong></p>
      <h3>Datos del contacto:</h3>
      <ul>
        <li><strong>Tipo:</strong> ${type}</li>
        <li><strong>Nombre:</strong> ${data.nombre}</li>
        <li><strong>Correo:</strong> ${data.email}</li>
        <li><strong>Teléfono:</strong> ${data.telefono}</li>
        <li><strong>Cargo:</strong> ${data.cargo}</li>
        <li><strong>Empresa:</strong> ${data.empresa}</li>
        <li><strong>País:</strong> ${data.pais}</li>
        <li><strong>Origen:</strong> ${origen}</li>
        <li><strong>Interes:</strong> ${data.interesUser || data.interes}</li>
        ${
          data.cantidadPersonas
            ? `<li><strong>Cantidad interesados:</strong> ${data.cantidadPersonas}</li>`
            : ""
        }
      </ul>
    `;

    return { sender, recipientsMail, subjectMail, htmlContentFinal };
  };

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
    const initialUrl = sessionStorage.getItem("initialUrl");
    const origenLocal = window.location.href;
    let currentOrigen = origenLocal; // Usar variable local en lugar de mutar props
    let validCaptcha = false;

    try {
      // Asegurarse de que grecaptcha esté disponible
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA no está cargado");
      }

      const token = await window.grecaptcha.execute(
        "6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE",
        { action: "submit" }
      );
      if (token) {
        setCaptchaValido(true);
        validCaptcha = true;
      } else {
        setCaptchaValido(false);
        validCaptcha = false;
      }

      const docRef = await getSecondaryRefCollection("infoRequestRegisterP21");

      const customerData = {
        id: docRef.id,
        content_name: anuncio || null,
        responsables: responsable,
        campana: campana || null,
        name: formData.nombre,
        email: formData.email,
        origen: currentOrigen,
        initialUrl: initialUrl,
        telefono: formData.telefono,
        cargo: formData.cargo,
        interesUser: formData.interes,
        empresa: formData.empresa,
        pais: formData.pais,
        date: new Date(),
        validCaptcha: validCaptcha,
        cantidad: formData.cantidadPersonas || null,
        type: type,
        isMobile: isMobile,
      };

      console.log("customerData", customerData);
      await saveInfoRequest(customerData);

      setIsSubmitted(true);

      const userData = {
        name: formData.nombre,
        createdAt: +new Date(),
        displayName: formData.nombre,
        job: formData.cargo,
        email: formData.email,
        phoneNumber: formData.telefono,
      };

      createUser(userData, mailchimpTagIn);

      if (validCaptcha) {
        let { sender, recipientsMail, subjectMail, htmlContentFinal } =
          buildEmailContent(formData);
        // await sendEmail(sender, recipientsMail, subjectMail, htmlContentFinal, copy);
      }
    } catch (error) {
      console.error("Error al ejecutar reCAPTCHA:", error);
      alert("Error al verificar el captcha. Inténtalo de nuevo.");
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

          {/* Interés y cantidad */}
          <div
            className={`mb-3 ${
              formData.interes === "empresa"
                ? "grid grid-cols-1 md:grid-cols-2 gap-2"
                : "grid grid-cols-1"
            }`}
          >
            <select
              name="interes"
              value={formData.interes}
              onChange={handleInputChange}
              className="w-full px-1 py-1 text-sm  border border-gray-300"
              required
            >
              <option value="" disabled>
                Seleccione su interés
              </option>
              <option value="individual">Individual</option>
              <option value="empresa">Empresa</option>
            </select>

            {formData.interes === "empresa" && (
              <select
                name="cantidadPersonas"
                value={formData.cantidadPersonas}
                onChange={handleInputChange}
                className="w-full px-1 py-1 text-sm  border border-gray-300"
                required
              >
                <option value="">Para cuantas personas</option>
                <option value="1">Para 1 persona</option>
                <option value="2">Para 2 personas</option>
                <option value="5">Para 5 personas</option>
                <option value="+10">Para más de 10 personas</option>
                <option value="+25">Para más de 25 personas</option>
              </select>
            )}
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

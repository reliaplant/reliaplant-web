"use client"
import { createUser, getRefCollection, getSecondaryRefCollection, saveInfoRequest, sendEmail } from '@/services/database.service';
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function FormularioContacto(
  {
    type = "info",
    campana = "",
    anuncio = null,
    interes = "",
    subject = "Nuevo llenado formulario curso",
    recipients = ["liliana.giraldo@predyc.com", "andres.gonzalez@predyc.com", "desarrollo@predyc.com"],
    responsable = "",
    origen = "",
    lugar = "footer",
    colorClass="bg-blue60 hover:bg-gray80",
    mailchimpTagIn="footer",
    btnTextColorClass="text-white ",
    btnText = "Solicitar información",
  }
) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    interes: '',
    cantidadPersonas: '',
    cargo: '',
    empresa: '',
    pais: '',

  });
  let copy = ["ventas@predyc.com","desarrollo@predyc.com"]
  const [captchaValido, setCaptchaValido] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    if (!window['grecaptcha']) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Detecta si es móvil al cargar y ajusta al cambiar el tamaño de la ventana
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  // Función para construir el contenido del correo
  const buildEmailContent = (formData) => {
    const sender = 'ventas@predyc.com';
    const recipientsMail = recipients.length > 0 ? recipients : ['ventas@predyc.com'];
    const subjectMail = subject || 'Nuevo registro formulario en Predyc';

    const htmlContentFinal = `
      <p><strong>${formData.nombre}</strong> ha llenado el formulario en <strong>${lugar}</strong> interesado en <strong>${formData.interes}</strong></p>
      <h3>Datos del contacto:</h3>
      <ul>
        <li><strong>Tipo:</strong> ${type}</li>
        <li><strong>Nombre:</strong> ${formData.nombre}</li>
        <li><strong>Correo:</strong> ${formData.email}</li>
        <li><strong>Teléfono:</strong> ${formData.telefono}</li>
        <li><strong>Cargo:</strong> ${formData.cargo}</li>
        <li><strong>Empresa:</strong> ${formData.empresa}</li>
        <li><strong>País:</strong> ${formData.pais}</li>
        <li><strong>Origen:</strong> ${origen}</li>
        <li><strong>Interes:</strong> ${formData.interesUser}</li>
        ${formData.cantidad ? `<li><strong>Cantidad interesados:</strong> ${formData.cantidad}</li>` : ''}
      </ul>
    `;

    return { sender, recipientsMail, subjectMail, htmlContentFinal };
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({ 
      ...formData, 
      telefono: value, 
      pais: country.countryCode.toUpperCase()  // Almacena el código del país en mayúsculas
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const initialUrl = sessionStorage.getItem("initialUrl");
    const origenLocal = window.location.href
    origen = origenLocal
    let validCaptcha = false
    try {
      const token = await window['grecaptcha'].execute('6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE', { action: 'submit' });
      if (token) {
        setCaptchaValido(true);
        validCaptcha= true
      } else {
        setCaptchaValido(false);
        validCaptcha= false
      }
      // const docRef = await getRefCollection('infoRequestRegisterP21');
      const docRef = await getSecondaryRefCollection('infoRequestRegisterP21');

      // console.log(docRef.id)

      //console.log("Captcha válido y formulario enviado:", formData);

      const customerData = {
        id: docRef.id, 
        content_name: anuncio ?anuncio : null,
        responsables:responsable,
        campana: campana ?  campana  : null,
        name: formData.nombre,
        email: formData.email,
        origen: origenLocal,
        initialUrl:initialUrl,
        telefono: formData.telefono,
        cargo:formData.cargo,
        interesUser:formData.interes,
        empresa:formData.empresa,
        pais:formData.pais,
        date: new Date(),
        validCaptcha: validCaptcha,
        cantidad:formData?.cantidadPersonas ? formData?.cantidadPersonas : null,
        type:type,
        isMobile:isMobile,
      };

      console.log('customerData',customerData)
      await saveInfoRequest(customerData);

      setIsSubmitted(true);
      
      const userData = {
        name: formData.nombre,
        createdAt: +new Date(),
        displayName: formData.nombre,
        job: formData.cargo,
        email: formData.email,
        phoneNumber: formData.telefono
      }
      // mailchimpTagIn

      createUser(userData,mailchimpTagIn)


      if(validCaptcha){
        let { sender, recipientsMail, subjectMail, htmlContentFinal } = buildEmailContent(formData);
        //await sendEmail(sender, recipientsMail, subjectMail, htmlContentFinal,copy)
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
            <h2 className="text-xl font-semibold">Hemos recibido tu solicitud</h2>
            <p className="text-sm text-gray-600 mt-6 mb-0">
              Uno de nuestros asesores se está comunicando contigo en la brevedad
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
              country={'mx'}
              value={formData.telefono}
              onChange={handlePhoneChange}
              inputStyle={{
                width: '100%',
                height: '30px',
                padding: '0.75rem',
                paddingLeft: '45px',
                borderRadius: '0.125rem',
                border: '1px solid #d1d5db',
              }}
              specialLabel=""
            />
          </div>
  
          {/* Interés y cantidad */}
          <div className={`mb-3 ${formData.interes === 'empresa' ? 'grid grid-cols-1 md:grid-cols-2 gap-2' : 'grid grid-cols-1'}`}>
          {/* <div className={`mb-3 grid grid-cols-1 md:grid-cols-2 gap-2`}> */}
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
  
            {formData.interes === 'empresa' && (
              <select
                name="cantidadPersonas"
                value={formData.cantidadPersonas}
                onChange={handleInputChange}
                className="w-full px-1 py-1 text-sm  border border-gray-300"
                required
              >
                <option value="" disabled>
                  Para cuantas personas
                </option>
                <option value="1">Para 1 persona</option>
                <option value="2">Para 2 personas</option>
                <option value="5">Para 5 personas</option>
                <option value="+10">Para más de 10 personas</option>
                <option value="+25">Para más de 25 personas</option>
              </select>
            )}
          </div>
  
          {/* Cargo y Empresa */}
          <div className={`mb-[5px] md:mb-3 grid grid-cols-1 md:grid-cols-2 gap-2 `}>
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
              <option value="Jefe de Mantenimiento">Jefe de Mantenimiento</option>
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
            className={`w-full ${btnTextColorClass} font-semibold p-3 mt-4 ${colorClass}`}>
            {btnText}
          </button>
  
          {/* Política de privacidad */}
          <p className="text-center text-[10px] text-gray-500 mt-4 mb-0">
            This site is protected by reCAPTCHA and the Google{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </form>
      )}
    </div>
  );
  
}

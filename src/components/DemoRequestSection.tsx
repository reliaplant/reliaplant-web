'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ChevronDown, ArrowRight, CheckmarkFilled } from '@carbon/icons-react';
import Boton from './Boton';
import { FormContactData, saveFormContact } from '@/lib/firebase/form_contact';

const SOLUTIONS = [
  'Análisis de Causa Raíz (RCA)',
  'Mantenimiento Centrado en Confiabilidad (RCM)',
  'Registro y Taxonomía de Activos',
  'Consultoría en Confiabilidad',
  'Diagnóstico de Confiabilidad',
  'Otro',
];

export default function DemoRequestSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    empresa: '',
    solucion: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData({ ...formData, telefono: value, pais: country.countryCode?.toUpperCase() || '' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload: FormContactData = {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        interes: formData.solucion,
        cargo: '',
        empresa: formData.empresa,
        pais: formData.pais,
        date: new Date(),
        isMobile: window.innerWidth <= 768,
        origen: 'website',
        especial: 'Demo Request',
        type: 'demo',
      };
      await saveFormContact(payload);
      setIsSubmitted(true);
    } catch {
      alert('Error al enviar. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-white border border-gray-300 px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-colors';
  const selectBase = `${inputBase} appearance-none cursor-pointer pr-10`;

  return (
    <section className="w-full md:w-1/2 md:mx-auto overflow-hidden border border-gray-300 bg-white">
      <div className="px-8 py-12 md:px-12 md:py-14">
          {!isSubmitted ? (
            <>
              <span className="block text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                Solicita una demostración
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                Para los ingenieros que{' '}
                <span className="text-blue-600">mantienen todo en pie.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                Te mostramos cómo Reliaplant se adapta a tu operación — RCA, RCM y registro de
                activos en un solo lugar.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Nombre */}
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={inputBase}
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail profesional"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBase}
                />

                {/* Teléfono */}
                <div className="demo-phone-input">
                  <PhoneInput
                    country="mx"
                    value={formData.telefono}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: '100%',
                      background: '#fff',
                      border: '1px solid #d1d5db',
                      borderRadius: 0,
                      color: '#111827',
                      fontSize: 14,
                      height: 46,
                      paddingLeft: 48,
                    }}
                    buttonStyle={{
                      background: '#fff',
                      border: '1px solid #d1d5db',
                      borderRight: 'none',
                      borderRadius: 0,
                    }}
                    dropdownStyle={{
                      background: '#fff',
                      color: '#111827',
                    }}
                  />
                </div>

                {/* Empresa */}
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className={inputBase}
                />

                {/* Intereses */}
                <div className="relative">
                  <select
                    name="solucion"
                    value={formData.solucion}
                    onChange={handleChange}
                    required
                    className={selectBase}
                    style={{ color: formData.solucion ? '#111827' : '#9ca3af' }}
                  >
                    <option value="" disabled hidden>
                      ¿Qué te interesa?
                    </option>
                    {SOLUTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                {/* Submit */}
                <Boton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<ArrowRight size={20} />}
                  className="mt-2 disabled:opacity-60"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar demostración'}
                </Boton>

                <p className="text-xs text-gray-400 text-center mt-1">
                  Respondemos en menos de 24 h · Sin compromiso
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <CheckmarkFilled size={36} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Solicitud enviada!</h3>
              <p className="text-gray-500 text-lg">
                Nos pondremos en contacto contigo pronto para agendar tu demostración.
              </p>
            </div>
          )}
      </div>

      {/* Estilos del input de teléfono para el tema claro */}
      <style jsx global>{`
        .demo-phone-input .form-control:focus {
          border-color: #2563eb !important;
          box-shadow: 0 0 0 2px #dbeafe !important;
        }
        .demo-phone-input .flag-dropdown .selected-flag:hover,
        .demo-phone-input .flag-dropdown .selected-flag.open {
          background: #f3f4f6 !important;
        }
        .demo-phone-input .country-list .country:hover,
        .demo-phone-input .country-list .country.highlight {
          background: #eff6ff !important;
        }
      `}</style>
    </section>
  );
}

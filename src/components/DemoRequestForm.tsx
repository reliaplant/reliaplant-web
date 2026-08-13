'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormContactData, saveFormContact } from '@/lib/firebase/form_contact';

const ASSET_RANGES = ['Menos de 25', '25–49', '50–99', '100–249', '250+', 'N/A'] as const;

const SOLUTIONS = [
  'Análisis de Causa Raíz (RCA)',
  'Mantenimiento Centrado en Confiabilidad (RCM)',
  'Registro y Taxonomía de Activos',
  'Consultoría en Confiabilidad',
  'Diagnóstico de Confiabilidad',
  'Otro',
];

const SECTORS = [
  'Oil & Gas',
  'Energía y Utilities',
  'Manufactura continua',
  'Minería y procesamiento',
  'Petroquímica',
  'Alimentos y bebidas',
  'Papel y celulosa',
  'Química industrial',
  'Otro',
];

interface DemoRequestFormProps {
  bgColor?: string;
  especial?: string;
}

export default function DemoRequestForm({ bgColor = '#111827', especial = 'Demo Request' }: DemoRequestFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    cargo: '',
    sector: '',
    solucion: '',
    activos: '',
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
        cargo: formData.cargo,
        empresa: formData.sector,
        pais: formData.pais,
        date: new Date(),
        isMobile: window.innerWidth <= 768,
        origen: 'website',
        especial: `${especial} | Activos: ${formData.activos}`,
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
    'w-full bg-transparent border border-white/30 focus:border-white focus:outline-none rounded px-4 py-3 text-white text-sm placeholder:text-white/50 transition-colors';
  const selectBase =
    'w-full bg-transparent border border-white/30 focus:border-white focus:outline-none rounded px-4 py-3 text-white text-sm transition-colors appearance-none cursor-pointer';

  return (
    <div
      className="flex flex-col justify-center px-8 py-10 md:px-10"
      style={{ background: bgColor, fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-bold text-white leading-snug mb-6">
            Para los ingenieros que mantienen todo en pie.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              value={formData.nombre}
              onChange={handleChange}
              className={inputBase}
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail profesional"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="demo-phone-input">
                <PhoneInput
                  country="mx"
                  value={formData.telefono}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 4,
                    color: '#fff',
                    fontSize: 14,
                    height: 46,
                    paddingLeft: 48,
                  }}
                  buttonStyle={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRight: 'none',
                    borderRadius: '4px 0 0 4px',
                  }}
                  dropdownStyle={{ background: '#1a1a2e', color: '#fff' }}
                />
              </div>
              <select
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className={selectBase}
                style={{ color: formData.cargo ? '#fff' : 'rgba(255,255,255,0.5)' }}
              >
                <option value="" disabled hidden>Cargo</option>
                <option value="Ingeniero de Confiabilidad">Ingeniero de Confiabilidad</option>
                <option value="Jefe de Mantenimiento">Jefe de Mantenimiento</option>
                <option value="Gerente de Operaciones">Gerente de Operaciones</option>
                <option value="Superintendente">Superintendente</option>
                <option value="Director">Director</option>
                <option value="Consultor">Consultor</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className={selectBase}
              style={{ color: formData.sector ? '#fff' : 'rgba(255,255,255,0.5)' }}
            >
              <option value="" disabled hidden>Sector</option>
              {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>

            <select
              name="solucion"
              value={formData.solucion}
              onChange={handleChange}
              className={selectBase}
              style={{ color: formData.solucion ? '#fff' : 'rgba(255,255,255,0.5)' }}
            >
              <option value="" disabled hidden>Seleccione la solución de mayor interés</option>
              {SOLUTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>

            <div>
              <p className="text-white/70 text-xs mb-2 font-medium tracking-wide">
                ¿Cuántos activos operan en tu planta?
              </p>
              <div className="flex flex-wrap gap-2">
                {ASSET_RANGES.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, activos: range })}
                    className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${
                      formData.activos === range
                        ? 'bg-white text-blue-700 border-white'
                        : 'bg-transparent text-white/80 border-white/30 hover:border-white/60'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded transition-colors mt-2 disabled:opacity-60"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar demostración'}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M13 21.2L7.8 16l-1.4 1.4L13 24 26 11l-1.4-1.4L13 21.2z" fill="#fff" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">¡Solicitud enviada!</h3>
          <p className="text-white/80 text-lg">
            Nos pondremos en contacto contigo pronto para agendar tu demostración.
          </p>
        </div>
      )}

      <style jsx global>{`
        .demo-phone-input .flag-dropdown .selected-flag:hover,
        .demo-phone-input .flag-dropdown .selected-flag.open {
          background: rgba(255,255,255,0.1) !important;
        }
        .demo-phone-input .country-list .country:hover,
        .demo-phone-input .country-list .country.highlight {
          background: rgba(255,255,255,0.1) !important;
        }
        section select option {
          background: #1a1a2e;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

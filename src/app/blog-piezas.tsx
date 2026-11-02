"use client";

// Piezas interactivas que se pueden usar dentro de un artículo con una etiqueta HTML, p. ej.:
//   <cta-demo></cta-demo>
//   <cta-demo titulo="¿Tu RCM vive en Excel?" texto="..." boton="Crear cuenta"></cta-demo>
//   <calculadora-disponibilidad mtbf="720" mttr="8"></calculadora-disponibilidad>
//   <curva-weibull beta="2.5" eta="1000"></curva-weibull>
// Los atributos llegan siempre como texto.

import { useState } from "react";
import { TEXTOS, type Idioma } from "@/lib/i18n";

const URL_APP = "https://app.reliaplant.com/?utm_source=blog&utm_medium=articulo";

const numero = (valor: string | undefined, respaldo: number) => {
  const n = Number(valor);
  return Number.isFinite(n) && n > 0 ? n : respaldo;
};

const formato = (n: number, decimales = 0) =>
  n.toLocaleString("es-MX", { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

// ---------- Llamado a la acción ----------

export function CtaDemo({ idioma, titulo, texto, boton }: { idioma: Idioma; titulo?: string; texto?: string; boton?: string }) {
  const t = TEXTOS[idioma].blog;
  return (
    <aside className="not-prose my-10 border-l-4 border-blue-600 bg-blue-50 p-6 md:p-8">
      <p className="text-lg font-bold text-gray-900">{titulo ?? t.cta}</p>
      <p className="mt-1 text-gray-600">{texto ?? t.ctaTexto}</p>
      <a
        href={URL_APP}
        className="mt-5 inline-flex items-center gap-2 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500"
      >
        {boton ?? t.ctaBoton} →
      </a>
    </aside>
  );
}

// ---------- Calculadora de disponibilidad (MTBF / MTTR) ----------

function Campo({ etiqueta, valor, min, max, paso, onChange }: { etiqueta: string; valor: number; min: number; max: number; paso: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm text-gray-600">
        {etiqueta}
        <input
          type="number"
          min={min}
          step={paso}
          value={valor}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || min))}
          className="w-24 border border-gray-300 bg-white px-2 py-1 text-right font-semibold text-gray-900 focus:border-blue-600 focus:outline-none"
        />
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={paso}
        value={Math.min(valor, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-blue-600"
      />
    </label>
  );
}

export function CalculadoraDisponibilidad({ mtbf, mttr }: { mtbf?: string; mttr?: string }) {
  const [tiempoEntreFallas, setTiempoEntreFallas] = useState(numero(mtbf, 720));
  const [tiempoReparacion, setTiempoReparacion] = useState(numero(mttr, 8));

  const ciclo = tiempoEntreFallas + tiempoReparacion;
  const disponibilidad = tiempoEntreFallas / ciclo;
  const horasParo = 8760 * (1 - disponibilidad);
  const fallasAnio = 8760 / ciclo;

  return (
    <figure className="not-prose my-10 border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Calculadora de disponibilidad</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <Campo etiqueta="MTBF (horas entre fallas)" valor={tiempoEntreFallas} min={1} max={8760} paso={1} onChange={setTiempoEntreFallas} />
          <Campo etiqueta="MTTR (horas para reparar)" valor={tiempoReparacion} min={0.5} max={240} paso={0.5} onChange={setTiempoReparacion} />
          <p className="text-xs text-gray-500">A = MTBF / (MTBF + MTTR), operando 8,760 h al año.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          <div className="col-span-2 bg-gray-900 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gray-400">Disponibilidad inherente</p>
            <p className="mt-1 text-4xl font-bold">{formato(disponibilidad * 100, 2)}%</p>
            <div className="mt-3 h-2 bg-gray-700">
              <div className="h-2 bg-blue-500" style={{ width: `${disponibilidad * 100}%` }} />
            </div>
          </div>
          <div className="bg-white p-4">
            <p className="text-xs text-gray-500">Horas de paro al año</p>
            <p className="text-2xl font-bold text-gray-900">{formato(horasParo, 1)}</p>
          </div>
          <div className="bg-white p-4">
            <p className="text-xs text-gray-500">Fallas esperadas al año</p>
            <p className="text-2xl font-bold text-gray-900">{formato(fallasAnio, 1)}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

// ---------- Curva de Weibull ----------

/** Confiabilidad R(t) y tasa de fallas h(t) de una Weibull de forma β y vida característica η. */
export function CurvaWeibull({ beta, eta }: { beta?: string; eta?: string }) {
  const [forma, setForma] = useState(numero(beta, 2.5));
  const vida = numero(eta, 1000);
  const tMax = vida * 2.5;
  const n = 120;
  const puntos = Array.from({ length: n + 1 }, (_, i) => {
    const t = (i / n) * tMax;
    return { t, r: Math.exp(-Math.pow(t / vida, forma)), h: (forma / vida) * Math.pow(Math.max(t, tMax / n) / vida, forma - 1) };
  });
  const hMax = Math.max(...puntos.map((p) => p.h));
  const x = (t: number) => 30 + (t / tMax) * 360;
  const camino = (y: (p: (typeof puntos)[number]) => number) =>
    puntos.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)} ${y(p).toFixed(1)}`).join(" ");
  const zona = forma < 1 ? "Mortalidad infantil (β < 1): la tasa de fallas baja con el tiempo." : forma < 1.2 ? "Fallas aleatorias (β ≈ 1): tasa de fallas casi constante." : "Desgaste (β > 1): la tasa de fallas crece con el tiempo.";

  return (
    <figure className="not-prose my-10 border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Distribución de Weibull</p>
      <label className="mt-4 block text-sm text-gray-600">
        Parámetro de forma β = <strong className="text-gray-900">{formato(forma, 1)}</strong>
        <input type="range" min={0.5} max={5} step={0.1} value={forma} onChange={(e) => setForma(Number(e.target.value))} className="mt-2 w-full accent-blue-600" />
      </label>
      <svg viewBox="0 0 400 220" className="mt-4 w-full" role="img" aria-label={`Curva de Weibull con β ${formato(forma, 1)} y η ${formato(vida)} h`}>
        <line x1="30" y1="190" x2="395" y2="190" stroke="#9ca3af" />
        <line x1="30" y1="15" x2="30" y2="190" stroke="#9ca3af" />
        <line x1={x(vida)} x2={x(vida)} y1="15" y2="190" stroke="#d1d5db" strokeDasharray="4 4" />
        <text x={x(vida)} y="205" textAnchor="middle" fontSize="10" fill="#6b7280">η = {formato(vida)} h</text>
        <path d={camino((p) => 190 - p.r * 170)} fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <path d={camino((p) => 190 - (p.h / hMax) * 170)} fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6 3" />
      </svg>
      <figcaption className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
        <span><span className="mr-1 inline-block h-0.5 w-4 bg-blue-600 align-middle" />Confiabilidad R(t)</span>
        <span><span className="mr-1 inline-block h-0.5 w-4 bg-orange-500 align-middle" />Tasa de fallas h(t) (relativa)</span>
        <span className="w-full text-gray-500">{zona}</span>
      </figcaption>
    </figure>
  );
}

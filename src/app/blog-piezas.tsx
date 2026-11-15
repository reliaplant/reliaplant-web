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

/** Evento para Google Tag Manager (GTM-PXC76M9X): clics en CTA y descargas del blog. */
function medir(evento: string, datos: Record<string, string>) {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  (w.dataLayer ??= []).push({ event: evento, pagina: window.location.pathname, ...datos });
}

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
        onClick={() => medir("blog_cta_clic", { cta: titulo ?? "cta-demo" })}
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

// ---------- Intervalo de inspección con la curva P-F ----------

/** Curva P-F: con el intervalo P-F y el tiempo que toma actuar, calcula cada cuánto inspeccionar. */
export function IntervaloPF({ pf, respuesta }: { pf?: string; respuesta?: string }) {
  const [intervaloPF, setIntervaloPF] = useState(numero(pf, 60));
  const [tiempoRespuesta, setTiempoRespuesta] = useState(numero(respuesta, 14));
  const [metodo, setMetodo] = useState<"mitad" | "probabilidad">("mitad");
  const [deteccion, setDeteccion] = useState(80); // % de probabilidad de ver la falla potencial en una inspección
  const [aceptable, setAceptable] = useState(1); // % de probabilidad aceptable de que llegue a F sin detectarse

  // P-F/n con n = ln(Pacc) / ln(1 − θ): número de inspecciones dentro del P-F para no dejarla pasar.
  const divisor = metodo === "mitad" ? 2 : Math.max(1, Math.ceil(Math.log(aceptable / 100) / Math.log(1 - Math.min(deteccion, 99.9) / 100)));
  const inspeccion = intervaloPF / divisor;
  // En el peor caso la falla potencial aparece justo después de una inspección: se detecta un intervalo después.
  const netoMinimo = intervaloPF - inspeccion;
  const alcanza = netoMinimo >= tiempoRespuesta;
  const inspeccionMaxima = Math.max(0, intervaloPF - tiempoRespuesta);

  // Dibujo: condición del equipo que cae desde P hasta F.
  const x0 = 40, x1 = 380, yTop = 30, yBase = 190;
  const xP = 150, xF = 360;
  const curva = Array.from({ length: 61 }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / 60;
    const u = Math.max(0, (x - xP) / (xF - xP));
    const y = yTop + 10 + (yBase - yTop - 20) * Math.pow(Math.min(u, 1.05), 2.2);
    return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  const paso = ((xF - xP) * inspeccion) / intervaloPF;
  const marcas: number[] = [];
  for (let x = xP + paso * 0.35; x < xF + 0.1; x += paso) marcas.push(x);

  return (
    <figure className="not-prose my-10 border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Calculadora de intervalo de inspección (curva P-F)</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <Campo etiqueta="Intervalo P-F (días)" valor={intervaloPF} min={1} max={730} paso={1} onChange={setIntervaloPF} />
          <Campo etiqueta="Tiempo para actuar (días)" valor={tiempoRespuesta} min={0} max={365} paso={1} onChange={setTiempoRespuesta} />
          <label className="block text-sm text-gray-600">
            Método
            <select value={metodo} onChange={(e) => setMetodo(e.target.value as "mitad" | "probabilidad")} className="ml-2 border border-gray-300 bg-white px-2 py-1 font-semibold text-gray-900">
              <option value="mitad">P-F ÷ 2 (regla habitual)</option>
              <option value="probabilidad">P-F ÷ n (según probabilidad de detección)</option>
            </select>
          </label>
          {metodo === "probabilidad" && (
            <>
              <Campo etiqueta="Probabilidad de detectarla en una inspección (%)" valor={deteccion} min={10} max={99} paso={1} onChange={setDeteccion} />
              <Campo etiqueta="Probabilidad aceptable de no detectarla (%)" valor={aceptable} min={0.1} max={20} paso={0.1} onChange={setAceptable} />
              <p className="text-xs text-gray-500">n = ln(aceptable) ÷ ln(1 − detección) = {divisor} inspecciones dentro del intervalo P-F.</p>
            </>
          )}
          <p className="text-xs text-gray-500">Tiempo para actuar = emitir la orden, conseguir repuestos, coordinar la parada y ejecutar.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          <div className="col-span-2 bg-gray-900 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gray-400">Inspeccionar cada</p>
            <p className="mt-1 text-4xl font-bold">{formato(inspeccion, 0)} días</p>
          </div>
          <div className="bg-white p-4">
            <p className="text-xs text-gray-500">P-F neto mínimo</p>
            <p className="text-2xl font-bold text-gray-900">{formato(netoMinimo, 0)} días</p>
          </div>
          <div className={`p-4 ${alcanza ? "bg-green-50" : "bg-red-50"}`}>
            <p className="text-xs text-gray-500">¿Alcanza para actuar?</p>
            <p className={`text-2xl font-bold ${alcanza ? "text-green-700" : "text-red-700"}`}>{alcanza ? "Sí" : "No"}</p>
          </div>
          <div className="col-span-2 bg-white p-4 text-sm text-gray-600">
            {alcanza
              ? `Queda un margen de ${formato(netoMinimo - tiempoRespuesta, 0)} días después de planificar y ejecutar.`
              : inspeccionMaxima > 0
                ? `Para que alcance, inspecciona como máximo cada ${formato(inspeccionMaxima, 0)} días, reduce el tiempo para actuar o usa una técnica que detecte antes.`
                : "El tiempo para actuar es mayor que todo el intervalo P-F: ninguna frecuencia de inspección alcanza. Usa una técnica que detecte antes o acorta la respuesta."}
          </div>
        </div>
      </div>
      <svg viewBox="0 0 400 225" className="mt-6 w-full" role="img" aria-label={`Curva P-F con inspección cada ${formato(inspeccion, 0)} días`}>
        <line x1={x0} y1={yBase} x2={x1 + 10} y2={yBase} stroke="#9ca3af" />
        <line x1={x0} y1={yTop - 10} x2={x0} y2={yBase} stroke="#9ca3af" />
        <text x={x0 - 6} y={yTop} fontSize="10" fill="#6b7280" textAnchor="end" transform={`rotate(-90 ${x0 - 18} ${yTop + 60})`}>Condición</text>
        <text x={x1} y={yBase + 16} fontSize="10" fill="#6b7280" textAnchor="end">Tiempo</text>
        {marcas.map((m) => (
          <line key={m} x1={m} x2={m} y1={yTop} y2={yBase} stroke="#93c5fd" strokeDasharray="3 3" />
        ))}
        <path d={curva} fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx={xP} cy={yTop + 10} r="5" fill="#f59e0b" />
        <text x={xP} y={yTop + 2} fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">P</text>
        <circle cx={xF} cy={yBase - 10} r="5" fill="#dc2626" />
        <text x={xF + 10} y={yBase - 14} fontSize="11" fontWeight="bold" fill="#991b1b">F</text>
        <line x1={xP} x2={xF} y1={yBase + 26} y2={yBase + 26} stroke="#374151" markerEnd="url(#flecha)" markerStart="url(#flecha)" />
        <text x={(xP + xF) / 2} y={yBase + 22} fontSize="10" fill="#374151" textAnchor="middle">Intervalo P-F = {formato(intervaloPF)} días</text>
        <defs>
          <marker id="flecha" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#374151" />
          </marker>
        </defs>
      </svg>
      <figcaption className="mt-1 text-sm text-gray-500">Las líneas punteadas son las inspecciones. P = falla potencial detectable; F = falla funcional.</figcaption>
    </figure>
  );
}

// ---------- Matriz de criticidad (método de criticidad total por riesgo) ----------

const ESCALAS_CTR = {
  frecuencia: [
    { v: 1, t: "Menos de 1 falla al año" },
    { v: 2, t: "1 a 2 fallas al año" },
    { v: 3, t: "2 a 4 fallas al año" },
    { v: 4, t: "Más de 4 fallas al año" },
  ],
  impacto: [
    { v: 1, t: "No afecta la producción" },
    { v: 4, t: "Afecta parcialmente (25–75 %)" },
    { v: 7, t: "Impacto en niveles de producción o calidad" },
    { v: 10, t: "Parada total de la planta" },
  ],
  flexibilidad: [
    { v: 1, t: "Hay respaldo disponible" },
    { v: 2, t: "Opción de respaldo compartido o reducido" },
    { v: 4, t: "No hay respaldo" },
  ],
  costo: [
    { v: 1, t: "Menor al umbral (p. ej. 20.000 USD)" },
    { v: 2, t: "Mayor al umbral" },
  ],
  sha: [
    { v: 0, t: "Sin impacto" },
    { v: 1, t: "Leve, se corrige en sitio" },
    { v: 3, t: "Daño ambiental o lesión menor" },
    { v: 5, t: "Lesión con incapacidad o daño reportable" },
    { v: 8, t: "Lesión grave, fatalidad o daño ambiental mayor" },
  ],
} as const;

function Selector({ etiqueta, opciones, valor, onChange }: { etiqueta: string; opciones: readonly { v: number; t: string }[]; valor: number; onChange: (n: number) => void }) {
  return (
    <label className="block text-sm text-gray-600">
      {etiqueta}
      <select value={valor} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 bg-white px-2 py-1.5 text-gray-900 focus:border-blue-600 focus:outline-none">
        {opciones.map((o) => (
          <option key={o.v} value={o.v}>
            {o.v} · {o.t}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Nivel según la posición en la matriz 4 (frecuencia) × 5 (rangos de consecuencia). */
function nivelCtr(frecuencia: number, consecuencia: number) {
  const columna = consecuencia <= 10 ? 0 : consecuencia <= 20 ? 1 : consecuencia <= 30 ? 2 : consecuencia <= 40 ? 3 : 4;
  const puntaje = frecuencia + columna; // 1 a 8
  return puntaje >= 6 ? "alta" : puntaje >= 4 ? "media" : "baja";
}

const COLORES_NIVEL = { alta: "bg-red-500", media: "bg-amber-400", baja: "bg-green-500" } as const;

export function MatrizCriticidad({ equipo }: { equipo?: string }) {
  const [frecuencia, setFrecuencia] = useState(2);
  const [impacto, setImpacto] = useState(10);
  const [flexibilidad, setFlexibilidad] = useState(4);
  const [costo, setCosto] = useState(2);
  const [sha, setSha] = useState(5);

  const consecuencia = impacto * flexibilidad + costo + sha;
  const criticidad = frecuencia * consecuencia;
  const nivel = nivelCtr(frecuencia, consecuencia);
  const rangos = ["≤10", "11–20", "21–30", "31–40", ">40"];
  const columna = consecuencia <= 10 ? 0 : consecuencia <= 20 ? 1 : consecuencia <= 30 ? 2 : consecuencia <= 40 ? 3 : 4;

  return (
    <figure className="not-prose my-10 border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Calculadora de criticidad{equipo ? ` · ${equipo}` : ""}</p>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <Selector etiqueta="Frecuencia de falla" opciones={ESCALAS_CTR.frecuencia} valor={frecuencia} onChange={setFrecuencia} />
          <Selector etiqueta="Impacto operacional" opciones={ESCALAS_CTR.impacto} valor={impacto} onChange={setImpacto} />
          <Selector etiqueta="Flexibilidad operacional" opciones={ESCALAS_CTR.flexibilidad} valor={flexibilidad} onChange={setFlexibilidad} />
          <Selector etiqueta="Costo de mantenimiento" opciones={ESCALAS_CTR.costo} valor={costo} onChange={setCosto} />
          <Selector etiqueta="Seguridad, ambiente e higiene" opciones={ESCALAS_CTR.sha} valor={sha} onChange={setSha} />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white p-4">
              <p className="text-xs text-gray-500">Consecuencia</p>
              <p className="text-2xl font-bold text-gray-900">{consecuencia}</p>
              <p className="text-[11px] text-gray-400">
                ({impacto} × {flexibilidad}) + {costo} + {sha}
              </p>
            </div>
            <div className="bg-gray-900 p-4 text-white">
              <p className="text-xs text-gray-400">Criticidad</p>
              <p className="text-2xl font-bold">{criticidad}</p>
              <p className={`mt-1 inline-block px-2 py-0.5 text-xs font-semibold uppercase ${COLORES_NIVEL[nivel]} ${nivel === "media" ? "text-gray-900" : "text-white"}`}>{nivel}</p>
            </div>
          </div>
          <table className="mt-4 w-full table-fixed border-collapse text-center text-[11px]">
            <tbody>
              {[4, 3, 2, 1].map((f) => (
                <tr key={f}>
                  <th className="w-8 pr-1 text-right font-normal text-gray-500">{f}</th>
                  {rangos.map((r, c) => {
                    const n = nivelCtr(f, c * 10 + 1);
                    const activa = f === frecuencia && c === columna;
                    return (
                      <td key={r} className={`h-8 border border-white ${COLORES_NIVEL[n]} ${activa ? "outline outline-[3px] outline-gray-900" : "opacity-70"}`}>
                        {activa ? "●" : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <th />
                {rangos.map((r) => (
                  <td key={r} className="pt-1 text-gray-500">
                    {r}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="mt-1 text-center text-[11px] text-gray-500">Frecuencia (vertical) × consecuencia (horizontal)</p>
          <p className="mt-2 text-[11px] text-gray-500">Escalas y cortes de la matriz de ejemplo, basados en el método de criticidad total por riesgo (CTR). Cada empresa los ajusta a su matriz de riesgo.</p>
        </div>
      </div>
    </figure>
  );
}

// ---------- Descargable ----------

export function Descarga({ archivo, titulo, texto, formato: tipo }: { archivo?: string; titulo?: string; texto?: string; formato?: string }) {
  if (!archivo) return null;
  return (
    <aside className="not-prose my-10 flex flex-col gap-4 border border-blue-200 bg-white p-6 shadow-lg shadow-blue-100 sm:flex-row sm:items-center">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-green-600 text-xs font-bold uppercase text-white">{tipo ?? "Excel"}</div>
      <div className="flex-1">
        <p className="text-lg font-bold text-gray-900">{titulo ?? "Plantilla descargable"}</p>
        {texto && <p className="mt-1 text-sm text-gray-600">{texto}</p>}
      </div>
      <a href={archivo} download onClick={() => medir("blog_descarga", { archivo })} className="inline-flex items-center justify-center gap-2 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
        Descargar gratis ↓
      </a>
    </aside>
  );
}

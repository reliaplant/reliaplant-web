"use client";

// Mini calculadora del NPR con las escalas semilla y los umbrales por defecto de ReliaPlant
// (reliaplant-app/app/dashboard/rcm/services/helpers.rcm.ts: DEFAULT_ESCALA_*, NPR_UMBRAL_*).

import React, { useState } from "react";

const F = [
  "Improbable: nunca se ha visto en este equipo ni en similares. Menos de 1 vez cada 10 años.",
  "Muy remota: alrededor de 1 vez cada 5 a 10 años.",
  "Remota: alrededor de 1 vez cada 2 a 5 años.",
  "Poco frecuente: alrededor de 1 vez cada 1 a 2 años.",
  "Ocasional: alrededor de 1 vez al año.",
  "Moderada: alrededor de 1 vez cada 6 meses.",
  "Frecuente: alrededor de 1 vez cada 3 meses.",
  "Alta: alrededor de 1 vez al mes.",
  "Muy alta: alrededor de 1 vez por semana.",
  "Casi permanente: varias veces por semana o a diario.",
];
const S = [
  "Ninguna: sigue produciendo normal; se corrige en el próximo mantenimiento de rutina.",
  "Muy pequeña: obliga a intervenir con el equipo en marcha, sin perder producción.",
  "Menor: hasta 10 minutos de producción perdida.",
  "Muy bajo: de 10 a 30 minutos de producción perdida.",
  "Bajo: de 30 minutos a 1 hora de producción perdida.",
  "Moderado: de 1 a 4 horas de producción perdida.",
  "Alto: de 4 a 8 horas de producción perdida.",
  "Muy alto: más de 8 horas de producción perdida.",
  "Peligroso con advertencia: lesión, daño ambiental reportable o incumplimiento, pero la falla avisa antes.",
  "Peligroso sin advertencia: lesión, daño ambiental reportable o incumplimiento, sin ningún aviso previo.",
];
const D = [
  "Casi seguro: el sistema de control la detecta solo, con alarma o enclavamiento.",
  "Muy alto: la detecta la instrumentación en línea ya instalada.",
  "Alto: la detecta el monitoreo de condición de rutina (vibración, termografía, aceite).",
  "Moderadamente alto: la detecta la inspección periódica planificada.",
  "Moderado: la ve el operador en su ronda, cuando ya es evidente a los sentidos.",
  "Bajo: requiere una prueba o medición específica fuera de la rutina.",
  "Muy bajo: requiere equipo o personal especializado no siempre disponible.",
  "Remoto: solo se detecta con el equipo detenido.",
  "Muy remoto: solo desarmando el equipo o con una prueba intrusiva.",
  "Incertidumbre absoluta: no existe hoy ningún medio para detectarla.",
];

// Tope de F según S (supervivencia del activo): S=7 → F≤8 · S=8 → F≤7 · S=9 → F≤6 · S=10 → F≤5
const TOPE_F: Record<number, number> = { 7: 8, 8: 7, 9: 6, 10: 5 };

function Eje({ letra, nombre, valor, set, textos }: { letra: string; nombre: string; valor: number; set: (n: number) => void; textos: string[] }) {
  const id = `lp-rcm-${letra}`;
  return (
    <div className="rc-eje">
      <div className="rc-eje-cab">
        <label htmlFor={id}><b>{letra}</b> · {nombre}</label>
        <span className="val">{valor}</span>
      </div>
      <input id={id} type="range" min={1} max={10} step={1} value={valor} onChange={(e) => set(Number(e.target.value))} />
      <p>{textos[valor - 1]}</p>
    </div>
  );
}

export default function CalculadoraNPR() {
  const [f, setF] = useState(6);
  const [s, setS] = useState(5);
  const [d, setD] = useState(6);
  const [medio, setMedio] = useState(50);
  const [alto, setAlto] = useState(150);

  const npr = f * s * d;
  const color = npr < medio ? "#16a34a" : npr <= alto ? "#eab308" : "#dc2626";
  const nivel = npr < medio ? "Verde" : npr <= alto ? "Amarillo" : "Rojo";
  const tope = TOPE_F[s];
  const implausible = tope !== undefined && f > tope;

  let lectura = "";
  if (s >= 9) lectura = "Severidad de seguridad o ambiente: aunque el NPR salga bajo, el diagrama de decisión manda. Una falla así exige una tarea que baje el riesgo a un nivel tolerable o un rediseño.";
  else if (d >= 6 && npr > medio) lectura = `La detección pesa: si instalas un medio que la detecte en rutina (D = 3), el NPR baja a ${f * s * 3}. Ahí está la inversión que más rinde.`;
  else if (npr <= alto && npr >= medio) lectura = "Zona media: revisa si la tarea propuesta realmente reduce la frecuencia o mejora la detección.";
  else if (npr < medio) lectura = "Riesgo bajo según tus escalas. Confirma con el diagrama de decisión que no haya una consecuencia oculta o de seguridad.";
  else lectura = "Prioridad alta: este modo de falla va primero en el plan y en las recomendaciones.";

  return (
    <div className="rc-calc">
      <div className="rc-calc-cab">
        <b>Calcula el NPR de un modo de falla</b>
        <span>Escalas por defecto de ReliaPlant</span>
      </div>
      <div className="rc-calc-cuerpo">
        <Eje letra="F" nombre="¿Cada cuánto ocurre?" valor={f} set={setF} textos={F} />
        <Eje letra="S" nombre="¿Qué tan grave es el efecto?" valor={s} set={setS} textos={S} />
        <Eje letra="D" nombre="¿Con qué la detectamos antes?" valor={d} set={setD} textos={D} />
      </div>
      <div className="rc-calc-res" aria-live="polite">
        <div className="num" style={{ background: color }}>
          {npr}
          <small>NPR · {nivel}</small>
        </div>
        <p>
          {f} × {s} × {d} = <b>{npr}</b>. {lectura}
          {implausible && (
            <><br /><span style={{ color: "#b91c1c" }}>Combinación poco plausible: con S = {s}, F no debería pasar de {tope}. Nadie opera mucho tiempo un equipo que falla así de seguido con esa gravedad.</span></>
          )}
        </p>
      </div>
      <div className="rc-umb">
        <span>Umbrales del semáforo (configurables por empresa):</span>
        <label>Amarillo desde <input type="number" min={1} max={999} value={medio} onChange={(e) => setMedio(Math.max(1, Number(e.target.value) || 1))} /></label>
        <label>Rojo sobre <input type="number" min={1} max={1000} value={alto} onChange={(e) => setAlto(Math.max(1, Number(e.target.value) || 1))} /></label>
      </div>
    </div>
  );
}

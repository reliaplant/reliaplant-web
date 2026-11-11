"use client";

import { useState } from "react";
import { ArbolSVG } from "./arbol";

const NIVELES = [
  {
    t: "Evento",
    p: "Qué pasó, en una frase y con el tag. Sin causas ni culpables. Es la cabeza del árbol y el título del proyecto.",
    pregunta: "¿Qué ocurrió?",
  },
  {
    t: "Modos de falla",
    p: "Cómo se manifestó la falla en el equipo. Si el evento tiene dos explicaciones posibles, abres dos ramas y las trabajas por separado.",
    pregunta: "¿Cómo pudo ocurrir?",
  },
  {
    t: "Hipótesis",
    p: "Todo lo que podría explicar el nivel de arriba. Se llaman hipótesis porque nadie las ha probado todavía. Aquí conviene abrir el abanico.",
    pregunta: "¿Qué podría haberlo causado?",
  },
  {
    t: "Verificación",
    p: "Cada hipótesis se valida o se descarta con evidencia: muestra de aceite, alineación láser, inspección del rodamiento. Las descartadas se quedan en gris para que se vea que se revisaron.",
    pregunta: "¿Qué dicen los hechos?",
  },
  {
    t: "Causas raíz",
    p: "Se sigue preguntando por qué hasta llegar a la acción humana que lo permitió y a la falla del sistema de gestión detrás de ella. Ahí están las recomendaciones que evitan que se repita.",
    pregunta: "¿Por qué se permitió?",
  },
];

export default function ArbolCaso() {
  const [nivel, setNivel] = useState(5);
  return (
    <div className="lp-rca-crece">
      <ol className="lp-rca-niveles" role="tablist" aria-label="Niveles del árbol lógico">
        {NIVELES.map((n, i) => (
          <li key={n.t}>
            <button
              type="button"
              role="tab"
              aria-selected={nivel === i + 1}
              className={nivel >= i + 1 ? "hecho" : ""}
              onClick={() => setNivel(i + 1)}
            >
              <span className="num">{i + 1}</span>
              <span className="tx">
                <b>{n.t}</b>
                <i>{n.pregunta}</i>
              </span>
            </button>
            {nivel === i + 1 && <p>{n.p}</p>}
          </li>
        ))}
      </ol>
      <div className="pantalla lp-rca-lienzo-p">
        <div className="lp-rca-pbar">
          <span>Árbol · nivel {nivel} de 5</span>
          <span className="lp-rca-pnav">
            <button type="button" onClick={() => setNivel((v) => Math.max(1, v - 1))} disabled={nivel === 1} aria-label="Nivel anterior">←</button>
            <button type="button" onClick={() => setNivel((v) => Math.min(5, v + 1))} disabled={nivel === 5} aria-label="Nivel siguiente">→</button>
          </span>
        </div>
        <div className="scroll-x lp-rca-lienzo">
          <ArbolSVG nivel={nivel} />
        </div>
      </div>
    </div>
  );
}

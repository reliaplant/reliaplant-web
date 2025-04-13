"use client";

import { useState, useEffect } from "react";

export default function TypingText() {
    const texts = [
        "Trabajo colaborativo para tu equipo de confiabilidad",
        "Mejora la trazabilidad y auditabilidad",
        "Mejora los resultados de cada esfuerzo",
        "Maximiza el impacto de tus análisis",
        "Aumenta la disponibilidad",
        "Menos retrabajo"
    ];
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) return;

        const timeout = setTimeout(() => {
            if (!deleting && charIndex < texts[index].length) {
                setDisplayText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (deleting && charIndex > 0) {
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!deleting && charIndex === texts[index].length) {
                setPause(true);
                setTimeout(() => setDeleting(true), 1000); // Pausa antes de borrar
            } else if (deleting && charIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, deleting ? 10 : 40); // Velocidad de escritura y borrado

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, index, texts, pause]);

    useEffect(() => {
        if (pause) {
            const pauseTimeout = setTimeout(() => setPause(false), 1000); // Pausa entre textos
            return () => clearTimeout(pauseTimeout);
        }
    }, [pause]);

    return (
        <div className="flex flex-col  p-4" style={{ width: 'w-fit', height: '60px' }}>
            <div className="text-blue60">Eficiencia al máximo:</div>
            <div className="text-2xl font-bold">
                {displayText}
                <span className="ml-4 blinking-cursor font-light">|</span>
            </div>
            <style jsx>{`
                .blinking-cursor {
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    from, to {
                        color: transparent;
                    }
                    50% {
                        color: black;
                    }
                }
            `}</style>
        </div>
    );
}

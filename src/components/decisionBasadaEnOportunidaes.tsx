"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const texts = [
  "AUMENTO DE DISPONIBILIDAD",
  "INNOVACIÓN PARA EL MANTENIMIENTO",
  "DISMINUCIÓN DE COSTOS",
  "RESULTADOS MEDIBLES",
];

export default function TextCarousel() {
  // Inicialmente, usamos el mismo valor para el actual y el previo
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizamos en cadena:
      // - El título actual se asigna al título previo.
      // - Se calcula el siguiente índice para el título actual.
      setCurrentIndex((c) => {
        setPrevIndex(c);
        return (c + 1) % texts.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-40 font-bold">
      {/* Estilos para el efecto gradient/shimmer */}
      <style jsx>{`
        .gradient-span {
          background: linear-gradient(90deg, #ffffff, #cccccc, #ffffff);
          background-size: 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s linear infinite;
          display: inline-block;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>

      {/* Título ANTERIOR (registro) */}
      <div className="mb-2">
        <motion.div
          key={`prev-${prevIndex}`}
          initial={{ y: 0, scale: 1, opacity: 1 }}
          animate={{ y: -20, scale: 0.7, opacity: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="gradient-span text-3xl">{texts[prevIndex]}</span>
        </motion.div>
      </div>

      {/* Título ACTUAL */}
      <div>
        <motion.div
          key={`curr-${currentIndex}`}
          initial={{ y: 10, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="gradient-span text-4xl">{texts[currentIndex]}</span>
        </motion.div>
      </div>
    </div>
  );
}

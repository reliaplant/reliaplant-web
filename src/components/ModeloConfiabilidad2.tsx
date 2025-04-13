"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fondoPlataforma from "@/assets/FondoPlataforma.webp";
import pegandotag from "@/assets/pegandotag.jpeg";
import pozo from "@/assets/pozo.jpg";
import flare from "@/assets/flare.jpg";
import fansblowers from "@/assets/FANSBLOWERS.png";
import back3 from "@/assets/back3.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  fondoPlataforma,
  pegandotag,
  pozo,
  flare,
  fansblowers,
  back3,
];

export default function Carousel() {
  // Referencia para medir el contenedor del carrusel
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  // Actualizar el ancho del contenedor en mount y resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Configuración: 3 imágenes completas y 25% de la siguiente
  const visibleImages = 3; // imágenes completamente visibles
  const partialVisible = 0.25; // fracción visible de la siguiente imagen
  const visibleItems = visibleImages + (partialVisible > 0 ? 1 : 0); // total de contenedores visibles (4)

  const gap = 16; // píxeles (equivalente a gap-4)

  // Calcular el ancho de cada imagen (slideWidth) en píxeles
  // containerWidth = (visibleImages + partialVisible) * slideWidth + (visibleItems - 1)*gap
  const slideWidth = containerWidth
    ? (containerWidth - (visibleItems - 1) * gap) / (visibleImages + partialVisible)
    : 0;

  // Ancho total del contenedor de slides
  const totalSliderWidth = images.length * slideWidth + (images.length - 1) * gap;

  // Definimos el índice máximo de modo que en el estado final se muestren las últimas 3 imágenes completas.
  const maxIndex = images.length - visibleImages; // en este ejemplo: 6 - 3 = 3

  // Calculamos el offset: para los índices intermedios, el desplazamiento es un "slide" completo;
  // para el índice máximo, se utiliza el offset máximo para alinear el final.
  const calculatedOffset = index * (slideWidth + gap);
  const maxOffset = totalSliderWidth - containerWidth;
  const offset = index === maxIndex ? maxOffset : calculatedOffset;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center bg-gray70 overflow-hidden">
      {/* Botón Izquierdo */}
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className={`absolute left-4 z-10 p-2 rounded-full transition ${
          index === 0
            ? "opacity-50 cursor-not-allowed"
            : "bg-black/50 hover:bg-black/70"
        }`}
      >
        <ChevronLeft size={32} className="text-white" />
      </button>

      {/* Contenedor del Carrusel (viewport) */}
      <div ref={containerRef} className="relative w-[90vw] h-[75vh] overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: totalSliderWidth, gap: `${gap}px` }}
          animate={{ x: -offset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="relative flex-shrink-0"
              style={{ width: slideWidth, height: "60vh" }}
            >
              <Image
              src={image}
              alt={`Carrusel ${i}`}
              fill
              className="object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl">Texto de ejemplo {i + 1}</p>
              </div>

            </div>
            
          ))}
        </motion.div>
        
      </div>

      {/* Botón Derecho */}
      <button
        onClick={nextSlide}
        disabled={index >= maxIndex}
        className={`absolute right-4 z-10 p-2 rounded-full transition ${
          index >= maxIndex
            ? "opacity-50 cursor-not-allowed"
            : "bg-black/50 hover:bg-black/70"
        }`}
      >
        <ChevronRight size={32} className="text-white" />
      </button>
    </div>
  );
}

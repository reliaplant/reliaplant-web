// BotonDescargarPDF.js
"use client";

export default function BotonAsesorRCM({}) {
  //contactoH2
  return (
    <button
      onClick={() => {
        const target = document.getElementById("contactoH2"); // Cambia 'asesor-section' por el id de tu destino
        if (target) {
          const offset = 200; // Ajuste del offset para considerar el header fijo
          const elementPosition =
            target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          console.log("offsetPosition", offsetPosition);
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }}
      className="md:w-auto w-full mt-6 px-3 py-2 md:bg-slate-700 bg-yellow-500 hover:bg-yellow-400 md:text-white text-gray-800 font-semibold rounded-md"
    >
      Hablar con un asesor
    </button>
  );
}

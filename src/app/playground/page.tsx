"use client";
import React, { useState } from "react";
import { guardarTexto } from "@/lib/firebase/pruebas";
import Notification from "@/components/Notification";

export default function PlaygroundPage() {
  const [texto, setTexto] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleGuardar = async () => {
    try {
      await guardarTexto(texto);
      setMensaje("¡Texto guardado exitosamente!");
      setShowNotification(true);
      setTexto("");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido al guardar";
      setMensaje(`Error: ${errorMessage}`);
      setShowNotification(true);
      console.error("Error al guardar:", error);
    }
  };

  const mostrarHolaMundo = () => {
    setMensaje("¡Hola Mundo!");
    setShowNotification(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Playground</h1>

      <div className="max-w-md">
        <textarea
          className="w-full p-2 border rounded mb-2"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo aquí..."
          rows={4}
        />
        <div className="flex gap-2">
          <button
            onClick={handleGuardar}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Guardar Texto
          </button>
          <button
            onClick={mostrarHolaMundo}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Notificación de Prueba
          </button>
        </div>
        <Notification
          message={mensaje}
          isVisible={showNotification}
          onClose={() => setShowNotification(false)}
        />
      </div>
    </div>
  );
}

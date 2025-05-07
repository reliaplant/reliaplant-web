"use client";
import React, { useState } from "react";
import { createAdminAccount, setUserAsAdmin } from "@/lib/firebase/auth";

export default function PlaygroundPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      if (isExistingUser) {
        await setUserAsAdmin(formData.email);
        setMessage({
          type: "success",
          text: "Usuario convertido a administrador exitosamente",
        });
      } else {
        await createAdminAccount(
          formData.email,
          formData.password,
          formData.displayName
        );
        setMessage({
          type: "success",
          text: "Cuenta de administrador creada exitosamente",
        });
      }
      setFormData({ email: "", password: "", displayName: "" });
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error.message || "Error al procesar la solicitud",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Gestión de Administradores</h1>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isExistingUser}
            onChange={(e) => setIsExistingUser(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2">Usuario ya existe</span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        {!isExistingUser && (
          <>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={!isExistingUser}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required={!isExistingUser}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          {isExistingUser ? "Hacer Administrador" : "Crear Cuenta"}
        </button>
      </form>

      {message.text && (
        <div
          className={`mt-4 p-3 rounded-md ${
            message.type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin, resetAdminPassword } from "@/lib/firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "reset">("login");
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await loginAdmin(email, password);
      router.push("/admin");
    } catch (err) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError("");
    setResetLoading(true);

    try {
      await resetAdminPassword(resetEmail);
      setResetSent(true);
    } catch (err: any) {
      const code = err?.code ?? "";
      if (code === "auth/user-not-found" || code === "auth/invalid-email") {
        setResetError("No encontramos una cuenta con ese correo.");
      } else if (code === "auth/too-many-requests") {
        setResetError("Demasiados intentos. Espera unos minutos e intenta de nuevo.");
      } else {
        setResetError(`Error al enviar el correo (${code || "desconocido"}). Intenta de nuevo.`);
      }
    } finally {
      setResetLoading(false);
    }
  };

  const switchToReset = () => {
    setResetEmail(email);
    setResetError("");
    setResetSent(false);
    setMode("reset");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-7xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {mode === "login" ? "Iniciar sesión" : "Recuperar contraseña"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="bg-white py-8 px-4 shadow sm:px-10">
          {mode === "login" ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <button
                    type="button"
                    onClick={switchToReset}
                    className="text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {error && <div className="text-red-600 text-sm">{error}</div>}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          ) : resetSent ? (
            <div className="space-y-6">
              <p className="text-sm text-gray-700">
                Si <strong>{resetEmail}</strong> tiene una cuenta de administrador, te
                enviamos un correo con instrucciones para restablecer tu contraseña.
              </p>
              <button
                type="button"
                onClick={() => setMode("login")}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Volver a iniciar sesión
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleReset}>
              <p className="text-sm text-gray-600">
                Ingresa tu correo y te enviaremos un enlace para restablecer tu
                contraseña.
              </p>

              <div>
                <label
                  htmlFor="reset-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="reset-email"
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {resetError && (
                <div className="text-red-600 text-sm">{resetError}</div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {resetLoading ? "Enviando..." : "Enviar enlace de recuperación"}
                </button>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Volver a iniciar sesión
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

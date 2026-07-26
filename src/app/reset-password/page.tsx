"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const oobCode = searchParams.get("oobCode") ?? "";
  const mode = searchParams.get("mode") ?? "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (mode !== "resetPassword" || !oobCode) {
      setStatus("error");
      setErrorMsg("Link inválido o expirado.");
      return;
    }
    verifyPasswordResetCode(auth, oobCode)
      .then((e) => setEmail(e))
      .catch(() => {
        setStatus("error");
        setErrorMsg("Este link expiró o ya fue usado. Solicita uno nuevo.");
      });
  }, [oobCode, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (password.length < 8) {
      setErrorMsg("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setErrorMsg("Las contraseñas no coinciden.");
      return;
    }

    setStatus("loading");
    try {
      await confirmPasswordReset(auth, oobCode, password);
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      const code = err?.code ?? "";
      if (code === "auth/expired-action-code") {
        setErrorMsg("El link expiró. Solicita uno nuevo desde la pantalla de login.");
      } else if (code === "auth/weak-password") {
        setErrorMsg("La contraseña es muy débil. Usa al menos 8 caracteres.");
      } else {
        setErrorMsg("No se pudo restablecer la contraseña. Intenta de nuevo.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="text-center space-y-4">
        <div className="text-green-600 text-5xl">✓</div>
        <h2 className="text-xl font-semibold text-gray-900">Contraseña restablecida</h2>
        <p className="text-sm text-gray-600">Tu contraseña fue actualizada exitosamente.</p>
        <button
          onClick={() => router.push("/admin/login")}
          className="w-full py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Ir al login
        </button>
      </div>
    );
  }

  if (status === "error" && !email) {
    return (
      <div className="text-center space-y-4">
        <div className="text-red-500 text-5xl">✗</div>
        <h2 className="text-xl font-semibold text-gray-900">Link inválido</h2>
        <p className="text-sm text-gray-600">{errorMsg}</p>
        <button
          onClick={() => router.push("/admin/login")}
          className="w-full py-2 px-4 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          Volver al login
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {email && (
        <p className="text-sm text-gray-600">
          Restableciendo contraseña para <strong>{email}</strong>
        </p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nueva contraseña
        </label>
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Mínimo 8 caracteres"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirmar contraseña
        </label>
        <input
          type="password"
          required
          minLength={8}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
      >
        {status === "loading" ? "Guardando..." : "Restablecer contraseña"}
      </button>
    </form>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Restablecer contraseña
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Suspense fallback={<p className="text-sm text-gray-500 text-center">Verificando link...</p>}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

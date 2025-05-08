"use client";

import { useEffect, useState } from "react";
import { FiTrash2, FiEdit2, FiPlus } from "react-icons/fi";
import {
  getAllAdmins,
  createAdminAccount,
  setUserAsAdmin,
  deleteAdmin,
  updateAdmin,
  type AdminUser,
  getCurrentUser,
} from "@/lib/firebase/auth";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: "primary" | "danger" | "success";
  disabled?: boolean;
}

const ActionButton = ({
  icon,
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ActionButtonProps) => {
  const baseClasses =
    "flex items-center gap-2 p-3 rounded-lg w-full mb-3 transition-colors";
  const variantClasses = {
    primary: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    danger: "bg-red-100 text-red-700 hover:bg-red-200",
    success: "bg-green-100 text-green-700 hover:bg-green-200",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default function AdminAccountPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showExistingForm, setShowExistingForm] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const [existingEmail, setExistingEmail] = useState("");

  useEffect(() => {
    loadAdmins();
    loadCurrentUser();
  }, []);

  const loadAdmins = async () => {
    try {
      const data = await getAllAdmins();
      setAdmins(data);
    } catch (error) {
      console.error("Error loading admins:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error loading current user:", error);
    }
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAdminAccount(
        formData.email,
        formData.password,
        formData.displayName
      );
      await setUserAsAdmin(formData.email);
      setShowAddForm(false);
      setFormData({ email: "", password: "", displayName: "" });
      loadAdmins();
    } catch (error) {
      console.error("Error creating admin:", error);
    }
  };

  const handleMakeExistingAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setUserAsAdmin(existingEmail);
      setShowExistingForm(false);
      setExistingEmail("");
      loadAdmins();
    } catch (error) {
      console.error("Error making existing user admin:", error);
      alert(
        "No se pudo hacer administrador al usuario. Por favor, intenta de nuevo."
      );
    }
  };

  const handleDeleteAdmin = async (email: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este administrador?")) {
      try {
        await deleteAdmin(email);
        await loadAdmins();
        setSelectedItem(null);
      } catch (error) {
        console.error("Error al eliminar administrador:", error);
        alert(
          "No se pudo eliminar el administrador. Por favor, intenta de nuevo."
        );
      }
    }
  };

  const selectedAdmin = admins.find((admin) => admin.email === selectedItem);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1>Gestión de Administradores</h1>
          {currentUser && (
            <div className="mt-2 text-sm text-gray-600">
              Sesión iniciada como: {currentUser.displayName} (
              {currentUser.email})
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <div className="w-1/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Acciones</h2>
              <ActionButton
                icon={<FiPlus />}
                label="Nuevo Administrador"
                onClick={() => setShowAddForm(true)}
                variant="success"
              />
              <ActionButton
                icon={<FiPlus />}
                label="Hacer Admin Cuenta Existente"
                onClick={() => setShowExistingForm(true)}
                variant="primary"
              />
              <ActionButton
                icon={<FiTrash2 />}
                label="Eliminar Seleccionado"
                onClick={() => selectedItem && handleDeleteAdmin(selectedItem)}
                variant="danger"
                disabled={!selectedItem}
              />
            </div>

            {showAddForm && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Nuevo Administrador
                </h3>
                <form onSubmit={handleAddAdmin}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            displayName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="bg-gray-300 px-4 py-2 rounded"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {showExistingForm && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Hacer Admin Cuenta Existente
                </h3>
                <form onSubmit={handleMakeExistingAdmin}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        value={existingEmail}
                        onChange={(e) => setExistingEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Hacer Admin
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowExistingForm(false)}
                        className="bg-gray-300 px-4 py-2 rounded"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="w-2/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Administradores</h2>
              <div className="max-h-[70vh] overflow-y-auto">
                {loading ? (
                  <div className="text-center pt-20">Cargando...</div>
                ) : admins.length === 0 ? (
                  <div className="text-gray-500 text-center pt-20">
                    No hay administradores registrados
                  </div>
                ) : (
                  <div className="space-y-4 divide-y">
                    {admins.map((admin) => (
                      <div key={admin.email} className="pt-4 first:pt-0">
                        <div
                          className={`p-4 rounded-lg transition-all duration-200 ${
                            selectedItem === admin.email
                              ? "bg-blue-50 border border-blue-200"
                              : "hover:bg-gray-50 cursor-pointer"
                          }`}
                          onClick={() =>
                            setSelectedItem(
                              selectedItem === admin.email ? null : admin.email
                            )
                          }
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-semibold">
                                {admin.displayName}
                              </p>
                              <p className="text-sm text-gray-600">
                                {admin.email}
                              </p>
                            </div>
                            <div className="text-sm text-gray-500">
                              {admin.createdAt.toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { FiTrash2, FiEdit2, FiEye, FiPlus } from "react-icons/fi";
import {
  getAllFormContacts,
  type FormContactWithId,
} from "@/lib/firebase/form_contact";

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

export default function FormManagerPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [forms, setForms] = useState<FormContactWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForms = async () => {
      try {
        const data = await getAllFormContacts();
        setForms(data);
      } catch (error) {
        console.error("Error loading forms:", error);
      } finally {
        setLoading(false);
      }
    };

    loadForms();
  }, []);

  const selectedForm = forms.find((form) => form.id === selectedItem);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1>Gestor de Formularios</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Panel de acciones (izquierda) */}
          <div className="w-1/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Acciones</h2>
              <ActionButton
                icon={<FiPlus />}
                label="Nuevo Formulario"
                onClick={() => console.log("Nuevo")}
                variant="success"
              />
              <ActionButton
                icon={<FiEdit2 />}
                label="Editar Seleccionado"
                onClick={() => console.log("Editar")}
                disabled={!selectedItem}
              />
              <ActionButton
                icon={<FiEye />}
                label="Ver Respuestas"
                onClick={() => console.log("Ver")}
                disabled={!selectedItem}
              />
              <ActionButton
                icon={<FiTrash2 />}
                label="Eliminar Seleccionado"
                onClick={() => console.log("Eliminar")}
                variant="danger"
                disabled={!selectedItem}
              />
            </div>
          </div>

          {/* Panel de contenido (derecha) */}
          <div className="w-2/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Formularios</h2>
              <div className="max-h-[70vh] overflow-y-auto">
                {loading ? (
                  <div className="text-center pt-20">
                    Cargando formularios...
                  </div>
                ) : forms.length === 0 ? (
                  <div className="text-gray-500 text-center pt-20">
                    No hay formularios disponibles
                  </div>
                ) : (
                  <div className="space-y-4 divide-y">
                    {forms.map((form) => (
                      <div key={form.id} className="pt-4 first:pt-0">
                        <div
                          className={`p-4 rounded-lg transition-all duration-200 ${
                            selectedItem === form.id
                              ? "bg-blue-50 border border-blue-200"
                              : "hover:bg-gray-50 cursor-pointer"
                          }`}
                          onClick={() =>
                            setSelectedItem(
                              selectedItem === form.id ? null : form.id
                            )
                          }
                        >
                          {/* Vista resumida - siempre visible */}
                          <div className="flex justify-between">
                            <div>
                              <p className="font-semibold">{form.nombre}</p>
                              <p className="text-sm text-gray-600">
                                {form.email}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm">{form.empresa}</p>
                              <p className="text-sm text-gray-600">
                                {form.telefono}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {form.interes}
                          </p>

                          {/* Vista detallada - expandible */}
                          {selectedItem === form.id && (
                            <div className="mt-4 pt-4 border-t border-blue-200">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <p className="text-sm">
                                    <strong>Cargo:</strong> {form.cargo}
                                  </p>
                                  <p className="text-sm">
                                    <strong>País:</strong> {form.pais}
                                  </p>
                                  {form.cantidadPersonas && (
                                    <p className="text-sm">
                                      <strong>Cantidad de Personas:</strong>{" "}
                                      {form.cantidadPersonas}
                                    </p>
                                  )}
                                  <p className="text-sm">
                                    <strong>Dispositivo:</strong>{" "}
                                    {form.isMobile ? "Móvil" : "Desktop"}
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {form.origen && (
                                    <p className="text-sm">
                                      <strong>Origen:</strong> {form.origen}
                                    </p>
                                  )}
                                  {form.pagina && (
                                    <p className="text-sm">
                                      <strong>Página:</strong> {form.pagina}
                                    </p>
                                  )}
                                  {form.campana && (
                                    <p className="text-sm">
                                      <strong>Campaña:</strong> {form.campana}
                                    </p>
                                  )}
                                  {form.anuncio && (
                                    <p className="text-sm">
                                      <strong>Anuncio:</strong> {form.anuncio}
                                    </p>
                                  )}
                                  <p className="text-sm">
                                    <strong>Fecha:</strong>{" "}
                                    {form.date.toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
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

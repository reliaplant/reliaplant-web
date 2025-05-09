"use client";

import { useState, useEffect, FormEvent, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { BlogContributor } from "@/types/blog";
import {
  getContributor,
  getAllContributors,
  createContributor,
  updateContributor,
  deleteContributor,
  uploadContributorPhoto,
} from "@/lib/firebase/blog/contributor";
import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";
import { FiTrash2, FiEdit2, FiPlus } from "react-icons/fi";
import imageCompression from "browser-image-compression";

// Simple loading component
const LoadingSpinner = () => (
  <div className="p-8 flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
  </div>
);

// Main wrapper component with Suspense
export default function ContributorFormPage() {
  const [contributors, setContributors] = useState<BlogContributor[]>([]);
  const [selectedContributor, setSelectedContributor] = useState<string | null>(
    null
  );
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContributors();
  }, []);

  const loadContributors = async () => {
    try {
      setLoading(true);
      const data = await getAllContributors();
      setContributors(data);
    } catch (error) {
      console.error("Error loading contributors:", error);
      toast.error("Error al cargar articulistas");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar este articulista?")) {
      try {
        await deleteContributor(id);
        toast.success("Articulista eliminado correctamente");
        await loadContributors();
        setSelectedContributor(null);
      } catch (error) {
        console.error("Error deleting contributor:", error);
        toast.error("Error al eliminar articulista");
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Gestión de Articulistas</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <div className="w-1/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Acciones</h2>
              <button
                onClick={() => {
                  setSelectedContributor(null);
                  setShowForm(true);
                }}
                className="flex items-center gap-2 p-3 rounded-lg w-full mb-3 bg-green-100 text-green-700 hover:bg-green-200"
              >
                <FiPlus />
                <span>Nuevo Articulista</span>
              </button>
              <button
                onClick={() =>
                  selectedContributor && handleDelete(selectedContributor)
                }
                disabled={!selectedContributor}
                className="flex items-center gap-2 p-3 rounded-lg w-full mb-3 bg-red-100 text-red-700 hover:bg-red-200 disabled:opacity-50"
              >
                <FiTrash2 />
                <span>Eliminar Seleccionado</span>
              </button>
            </div>
          </div>

          <div className="w-2/3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Articulistas</h2>
              <div className="space-y-4 divide-y">
                {contributors.map((contributor) => (
                  <div key={contributor.id} className="pt-4 first:pt-0">
                    <div
                      className={`p-4 rounded-lg transition-all duration-200 ${
                        selectedContributor === contributor.id
                          ? "bg-blue-50 border border-blue-200"
                          : "hover:bg-gray-50 cursor-pointer"
                      }`}
                      onClick={() => {
                        if (contributor.id) {
                          setSelectedContributor(
                            selectedContributor === contributor.id
                              ? null
                              : contributor.id
                          );
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          {contributor.photo && (
                            <img
                              src={contributor.photo}
                              alt={contributor.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{contributor.name}</p>
                            <p className="text-sm text-gray-600">
                              {contributor.email}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (contributor.id) {
                              setSelectedContributor(contributor.id);
                              setShowForm(true);
                            }
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <FiEdit2 className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <ContributorForm
                  contributorId={selectedContributor}
                  onClose={() => {
                    setShowForm(false);
                    setSelectedContributor(null);
                    loadContributors();
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function ContributorForm({
  contributorId,
  onClose,
}: {
  contributorId?: string | null;
  onClose: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditing = !!contributorId;

  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);
  const [contributor, setContributor] = useState<BlogContributor>({
    name: "",
    email: "",
    bio: "",
    photo: "",
    active: true,
    socialMedia: {
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  });

  useEffect(() => {
    if (contributorId) {
      fetchContributor(contributorId);
    }
  }, [contributorId]);

  const fetchContributor = async (id: string) => {
    try {
      setLoading(true);
      const data = await getContributor(id);
      if (data) {
        setContributor(data);
      } else {
        toast.error("No se encontró el articulista");
        router.push("/admin");
      }
    } catch (error) {
      console.error("Error fetching contributor:", error);
      toast.error("Error al cargar los datos del articulista");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      if (parent === "socialMedia") {
        setContributor((prev) => ({
          ...prev,
          socialMedia: {
            ...prev.socialMedia,
            [child]: value,
          },
        }));
      }
    } else {
      setContributor((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setContributor((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);

      // Validar el tamaño después de la compresión (2MB máximo)
      if (compressedFile.size > 2 * 1024 * 1024) {
        toast.error("La imagen es demasiado grande. Máximo 2MB permitido.");
        return;
      }

      const localUrl = URL.createObjectURL(compressedFile);
      setContributor((prev) => ({
        ...prev,
        photo: localUrl,
        photoFile: compressedFile,
      }));

      toast.success("Imagen cargada correctamente");
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
      toast.error("Error al cargar la imagen");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!contributor.name || !contributor.email) {
      toast.error("El nombre y el email son obligatorios");
      return;
    }

    try {
      setSubmitting(true);

      let photoUrl = contributor.photo;

      // Solo subir nueva foto si hay un archivo nuevo
      if (contributor.photoFile) {
        try {
          // Si estamos editando y ya existe una foto, aseguramos que sea una URL de Firebase
          if (
            isEditing &&
            contributor.photo &&
            contributor.photo.startsWith(
              "https://firebasestorage.googleapis.com/"
            )
          ) {
            // La foto anterior se eliminará automáticamente en el backend
          }

          const tempId = isEditing ? contributorId : "temp-" + Date.now();
          photoUrl = await uploadContributorPhoto(
            contributor.photoFile,
            tempId
          );
        } catch (error) {
          console.error("Error uploading photo:", error);
          toast.error("Error al subir la foto");
          return;
        }
      }

      const { photoFile, ...dataToSubmit } = contributor;
      const submitData = {
        ...dataToSubmit,
        photo: photoUrl,
        updatedAt: new Date().toISOString(), // Add this line
      };

      if (isEditing && contributorId) {
        await updateContributor(contributorId, submitData);
        toast.success("Articulista actualizado correctamente");
      } else {
        await createContributor({
          ...submitData,
          createdAt: new Date().toISOString(), // Add this line
        });
        toast.success("Articulista creado correctamente");
      }

      await getAllContributors(); // Reload data after changes
      router.refresh(); // Force Next.js to revalidate the data
      onClose(); // Close the form
    } catch (error) {
      console.error("Error saving contributor:", error);
      toast.error("Error al guardar el articulista");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">
          {isEditing ? "Editar Articulista" : "Nuevo Articulista"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contributor.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contributor.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Biografía
            </label>
            <textarea
              id="bio"
              name="bio"
              value={contributor.bio}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Foto de perfil
            </label>
            <div className="flex items-center space-x-4">
              {contributor.photo && (
                <img
                  src={contributor.photo}
                  alt={contributor.name}
                  className="h-24 w-24 object-cover rounded-full"
                />
              )}
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="p-2 border rounded"
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="font-medium text-lg mb-2">Redes sociales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="socialMedia.twitter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Twitter
                </label>
                <input
                  type="text"
                  id="socialMedia.twitter"
                  name="socialMedia.twitter"
                  value={contributor.socialMedia?.twitter || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="@username"
                />
              </div>

              <div>
                <label
                  htmlFor="socialMedia.linkedin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="socialMedia.linkedin"
                  name="socialMedia.linkedin"
                  value={contributor.socialMedia?.linkedin || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="URL completa"
                />
              </div>

              <div>
                <label
                  htmlFor="socialMedia.instagram"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  id="socialMedia.instagram"
                  name="socialMedia.instagram"
                  value={contributor.socialMedia?.instagram || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="@username"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={contributor.active}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="active"
              className="ml-2 block text-sm text-gray-900"
            >
              Articulista activo
            </label>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={submitting}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Guardando..." : isEditing ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

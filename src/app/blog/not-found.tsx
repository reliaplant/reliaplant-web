import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Artículo no encontrado
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Lo sentimos, el artículo que estás buscando no existe o ha sido
          eliminado.
        </p>
        <Link
          href="/blog"
          className="bg-blue60 text-white px-6 py-3 hover:bg-blue50 transition-colors"
        >
          Volver al blog
        </Link>
      </div>
    </div>
  );
}

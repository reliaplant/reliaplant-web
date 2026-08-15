import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <span className="text-7xl font-bold text-gray-200 block mb-4">404</span>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Página no encontrada</h1>
        <p className="text-gray-500 mb-8">Lo sentimos, la página que buscas no existe o fue movida.</p>
        <Link
          href="/"
          className="bg-gray-900 text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-blue-600 transition-colors font-medium text-sm"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

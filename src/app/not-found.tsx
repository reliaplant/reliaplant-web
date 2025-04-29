import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="space-y-10 text-center w-full max-w-lg mx-auto">
        <h1 className="text-5xl font-light">Página No Encontrada</h1>
        <p className="text-xl text-gray60">
          Lo sentimos, esta página no existe.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="bg-black text-white px-8 py-3 flex items-center justify-center gap-2 hover:bg-blue60 transition duration-300">
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

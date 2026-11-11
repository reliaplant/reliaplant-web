"use client";
import Link from "next/link";

// Pie del sitio: blanco y limpio (mismo estilo que la home).
const COLUMNAS: { titulo: string; enlaces: [string, string][] }[] = [
  {
    titulo: "Producto",
    enlaces: [
      ["Registro de activos y taxonomía", "/producto/taxonomia"],
      ["RCM", "/producto/rcm"],
      ["Análisis de causa raíz", "/producto/rca"],
      ["Planes de mantenimiento", "/producto/planes-de-mantenimiento"],
      ["Integridad (RBI)", "/producto/integridad-rbi"],
      ["Gestión de mantenimiento", "/producto/cmms"],
      ["Inventario de repuestos", "/producto/inventario"],
    ],
  },
  {
    titulo: "Servicios",
    enlaces: [
      ["Levantamiento de activos", "/servicios/levantamiento-de-activos"],
      ["Taxonomía ISO 14224", "/servicios/taxonomia-iso-14224"],
      ["Consultoría en confiabilidad", "/consultoria"],
      ["Planes y precios", "/pricing"],
    ],
  },
  {
    titulo: "Recursos",
    enlaces: [
      ["Blog", "/blog"],
      ["Calculadora ROI", "/roi"],
      ["Sobre Reliaplant", "/about"],
      ["Términos de uso", "/terminos-de-uso"],
      ["Política de privacidad", "/legal/privacidad"],
      ["Política de cookies", "/legal/cookies"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-solid border-gray-200 text-sm text-gray-600">
      <div className="max-w-[1140px] mx-auto px-5 py-12 sm:py-14 grid gap-10 grid-cols-2 md:grid-cols-[1.4fr_1.2fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
          <Link href="/" className="font-ZenDots text-gray-900 text-lg tracking-wide w-fit">RELIAPLANT</Link>
          <p className="max-w-[34ch] text-gray-500">Gestión de activos y confiabilidad industrial.</p>
          <a href="mailto:comercial@reliaplant.com" className="text-gray-700 hover:text-gray-900 w-fit">comercial@reliaplant.com</a>
          <a href="https://app.reliaplant.com/" className="text-blue-600 font-semibold hover:underline w-fit mt-1">Entrar a ReliaPlant →</a>
        </div>
        {COLUMNAS.map((c) => (
          <div key={c.titulo}>
            <h6 className="text-gray-900 font-semibold text-[13px] mb-3">{c.titulo}</h6>
            <ul className="pl-0 m-0 list-none flex flex-col gap-2">
              {c.enlaces.map(([texto, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-gray-900 transition-colors">{texto}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-solid border-gray-200">
        <p className="max-w-[1140px] mx-auto px-5 py-5 !text-[13px] text-gray-400">
          © {new Date().getFullYear()} Reliaplant. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

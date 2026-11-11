"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "@carbon/icons-react";
import AbrirFormContacto from "./AbrirFormContacto";
import HeaderMovil from "./HeaderMovil";
import Boton from "./Boton";
import { APP_URL, ENLACES_SUELTOS, MENU } from "./menuSitio";

// Cabecera blanca y limpia (estilo de la home). Menús desplegables por hover o clic.
export default function Header() {
  const [abierto, setAbierto] = useState<string | null>(null);
  const pathname = usePathname();
  const cierre = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setAbierto(null); }, [pathname]);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setAbierto(null); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const entrar = (id: string) => { if (cierre.current) clearTimeout(cierre.current); setAbierto(id); };
  const salir = () => { cierre.current = setTimeout(() => setAbierto(null), 120); };

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-solid border-gray-200">
      <header className="hidden md:block">
        <nav className="max-w-[1180px] mx-auto px-5 h-16 flex items-center gap-8" aria-label="Principal">
          <Link href="/" className="font-ZenDots text-gray-900 text-[19px] tracking-wide hover:opacity-80">RELIAPLANT</Link>

          <ul className="flex items-center gap-1 m-0 p-0 list-none h-full">
            {MENU.map((g) => (
              <li key={g.id} className="relative m-0" onMouseEnter={() => entrar(g.id)} onMouseLeave={salir}>
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-[14.5px] transition-colors ${abierto === g.id ? "text-gray-900 bg-gray-100" : "text-gray-600 hover:text-gray-900"}`}
                  aria-expanded={abierto === g.id}
                  aria-haspopup="true"
                  onClick={() => setAbierto(abierto === g.id ? null : g.id)}
                >
                  {g.titulo}
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${abierto === g.id ? "rotate-180" : ""}`} />
                </button>
                {abierto === g.id && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className={`bg-white border border-solid border-gray-200 rounded-xl shadow-[0_24px_60px_-20px_rgba(15,17,21,0.35)] p-2 ${g.items.length > 4 ? "w-[640px] grid grid-cols-2" : "w-[360px] grid grid-cols-1"}`}>
                      {g.items.map((it) => (
                        <Link key={it.href} href={it.href} className="block rounded-lg px-3 py-2.5 hover:bg-gray-50 no-underline">
                          <span className="block text-[14px] font-semibold text-gray-900">{it.titulo}</span>
                          {it.texto && <span className="block text-[13px] text-gray-500 leading-snug mt-0.5">{it.texto}</span>}
                        </Link>
                      ))}
                      {g.pie && (
                        <Link href={g.pie.href} className="col-span-2 mt-1 border-t border-solid border-gray-100 px-3 pt-3 pb-2 text-[13.5px] font-semibold text-blue-600 hover:text-blue-700 no-underline">
                          {g.pie.titulo} →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
            {ENLACES_SUELTOS.map((e) => (
              <li key={e.href} className="m-0">
                <Link href={e.href} className="block px-3 py-2 rounded-md text-[14.5px] text-gray-600 hover:text-gray-900">{e.titulo}</Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <a href={APP_URL} className="text-[14.5px] text-gray-600 hover:text-gray-900 px-2">Entrar</a>
            <AbrirFormContacto buttonText="Solicita una demo" variant="borde" size="sm" icon={null} especial="header" />
            <Boton href={APP_URL} variant="primary" size="sm">Prueba gratis</Boton>
          </div>
        </nav>
      </header>
      <div className="md:hidden">
        <HeaderMovil />
      </div>
    </div>
  );
}

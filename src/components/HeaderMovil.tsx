"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Close, Menu } from "@carbon/icons-react";
import AbrirFormContacto from "./AbrirFormContacto";
import Boton from "./Boton";
import { APP_URL, ENLACES_SUELTOS, MENU } from "./menuSitio";

// Cabecera del celular: mismo menú que la de escritorio (menuSitio.ts), en un panel a pantalla completa.
export default function HeaderMovil() {
  const [abierto, setAbierto] = useState(false);
  const [grupo, setGrupo] = useState<string | null>("producto");
  const pathname = usePathname();

  useEffect(() => { setAbierto(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [abierto]);

  return (
    <>
      <div className="h-14 px-4 flex items-center justify-between">
        <Link href="/" className="font-ZenDots text-gray-900 text-lg tracking-wide">RELIAPLANT</Link>
        <button type="button" onClick={() => setAbierto(!abierto)} className="p-2 -mr-2 text-gray-900" aria-label={abierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={abierto}>
          {abierto ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {abierto && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-50 bg-white overflow-y-auto border-t border-solid border-gray-200">
          <nav className="px-4 py-3" aria-label="Menú">
            {MENU.map((g) => (
              <div key={g.id} className="border-b border-solid border-gray-100">
                <button type="button" onClick={() => setGrupo(grupo === g.id ? null : g.id)} aria-expanded={grupo === g.id}
                  className="w-full flex items-center justify-between py-4 text-[17px] font-semibold text-gray-900">
                  {g.titulo}
                  <ChevronDown size={18} className={`text-gray-400 transition-transform ${grupo === g.id ? "rotate-180" : ""}`} />
                </button>
                {grupo === g.id && (
                  <div className="pb-3 flex flex-col">
                    {g.items.map((it) => (
                      <Link key={it.href} href={it.href} className="py-2.5 pl-1">
                        <span className="block text-[15px] font-medium text-gray-900">{it.titulo}</span>
                        {it.texto && <span className="block text-[13px] text-gray-500">{it.texto}</span>}
                      </Link>
                    ))}
                    {g.pie && <Link href={g.pie.href} className="py-2.5 pl-1 text-[14px] font-semibold text-blue-600">{g.pie.titulo} →</Link>}
                  </div>
                )}
              </div>
            ))}
            {ENLACES_SUELTOS.map((e) => (
              <Link key={e.href} href={e.href} className="block py-4 text-[17px] font-semibold text-gray-900 border-b border-solid border-gray-100">{e.titulo}</Link>
            ))}
            <a href={APP_URL} className="block py-4 text-[17px] font-semibold text-gray-900">Entrar</a>
          </nav>
          <div className="sticky bottom-0 bg-white border-t border-solid border-gray-200 p-4 flex flex-col gap-2">
            <Boton href={APP_URL} variant="primary" fullWidth>Prueba gratis</Boton>
            <AbrirFormContacto buttonText="Solicita una demo" variant="borde" fullDesktop icon={null} especial="header movil" className="w-full" />
          </div>
        </div>
      )}
    </>
  );
}

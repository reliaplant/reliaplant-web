'use client';

import { useEffect, useState } from "react";

const toc = [
  { id: "introduccion", label: "1. Introducción" },
  { id: "aceptacion", label: "2. Aceptación de los términos" },
  { id: "registro", label: "3. Registro y cuenta de usuario" },
  { id: "prohibiciones", label: "4. Conductas prohibidas" },
  { id: "definiciones", label: "5. Definiciones" },
  { id: "planes", label: "6. Planes y suscripciones" },
  { id: "limites", label: "7. Límites y uso aceptable" },
  { id: "bloques", label: "8. Bloques de activos adicionales" },
  { id: "facturacion", label: "9. Facturación y métodos de pago" },
  { id: "suspension", label: "10. Suspensión, cancelación y reembolsos" },
  { id: "datos", label: "11. Propiedad de los datos" },
  { id: "disponibilidad", label: "12. Disponibilidad del servicio" },
  { id: "modificaciones-planes", label: "13. Modificaciones a los planes" },
  { id: "plan-gratuito", label: "14. Plan Gratuito — condiciones especiales" },
  { id: "propiedad-intelectual", label: "15. Propiedad intelectual" },
  { id: "responsabilidad", label: "16. Limitación de responsabilidad" },
  { id: "ley-aplicable", label: "17. Ley aplicable y jurisdicción" },
  { id: "cambios-terminos", label: "18. Cambios a estos términos" },
  { id: "contacto", label: "19. Contacto" },
];

export default function TerminosTOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionEls = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop sidebar TOC */}
      <aside className="hidden lg:block w-60 flex-shrink-0">
        <nav className="sticky top-24" aria-label="Tabla de contenidos">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
            Contenido
          </p>
          <ul className="space-y-0.5">
            {toc.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`
                      flex items-center gap-2 text-xs py-1 pl-2 leading-snug rounded-r transition-all duration-200
                      border-l-2
                      ${isActive
                        ? "border-blue-600 text-blue-600 font-semibold bg-blue-50/60"
                        : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile TOC (static, no scroll tracking needed) */}
      <nav
        className="lg:hidden mb-10 p-4 bg-gray-50 border border-gray-200"
        aria-label="Tabla de contenidos"
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
          Contenido
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

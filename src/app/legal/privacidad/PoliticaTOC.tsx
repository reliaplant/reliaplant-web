'use client';

import { useEffect, useState } from "react";

const toc = [
  { id: "introduccion", label: "1. Introducción" },
  { id: "responsable", label: "2. Responsable del tratamiento" },
  { id: "datos-recopilados", label: "3. Datos que recopilamos" },
  { id: "como-recopilamos", label: "4. Cómo recopilamos sus datos" },
  { id: "finalidades", label: "5. Finalidades del tratamiento" },
  { id: "base-legal", label: "6. Base legal" },
  { id: "ia", label: "7. Datos y el Asistente IA" },
  { id: "marketing", label: "8. Marketing y comunicaciones" },
  { id: "compartir", label: "9. Con quién compartimos datos" },
  { id: "almacenamiento", label: "10. Almacenamiento de datos" },
  { id: "retencion", label: "11. Retención de datos" },
  { id: "seguridad", label: "12. Seguridad" },
  { id: "derechos", label: "13. Derechos de protección de datos" },
  { id: "eliminacion", label: "14. Solicitud de eliminación" },
  { id: "cookies", label: "15. Cookies" },
  { id: "sitios-terceros", label: "16. Sitios de terceros" },
  { id: "menores", label: "17. Menores de edad" },
  { id: "transferencias", label: "18. Transferencias internacionales" },
  { id: "autoridades", label: "19. Solicitudes de autoridades" },
  { id: "cambios", label: "20. Cambios a esta política" },
  { id: "contacto", label: "21. Contacto" },
];

export default function PoliticaTOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionEls = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
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
                      flex items-center gap-2 text-xs py-1 pl-2 leading-snug transition-all duration-200
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

      {/* Mobile TOC */}
      <nav
        className="lg:hidden mb-10 p-4 bg-gray-50 border border-gray-300"
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Términos de Uso | Reliaplant" },
  description:
    "Términos y condiciones de uso de la plataforma Reliaplant. Conozca sus derechos y obligaciones como usuario.",
};

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

export default function TerminosDeUsoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-400 font-medium uppercase tracking-wide text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos de Uso</h1>
          <p className="text-white/60 text-sm">
            Última actualización: 28 de febrero de 2026 · Vigente desde esa fecha
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="lg:flex lg:gap-16">

          {/* Sticky TOC — hidden on mobile */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <nav className="sticky top-24">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                Contenido
              </p>
              <ul className="space-y-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs text-gray-500 hover:text-blue-600 transition-colors block py-0.5 leading-snug"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 max-w-3xl">

            {/* Mobile TOC */}
            <div className="lg:hidden mb-10 p-4 bg-gray-50 rounded-xl border border-gray-200">
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
            </div>

            {/* SECTIONS — added in subsequent tasks */}

          </main>
        </div>
      </div>
    </>
  );
}

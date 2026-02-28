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
            <nav className="sticky top-24" aria-label="Tabla de contenidos">
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
          <article className="flex-1 min-w-0 max-w-3xl">

            {/* Mobile TOC */}
            <div className="lg:hidden mb-10 p-4 bg-gray-50 border border-gray-200">
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

            {/* ── BLOCK A: GENERAL LEGAL FRAMEWORK ─────────────────── */}

            <section id="introduccion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                1. Introducción
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant LLC ("Reliaplant", "nosotros") es una compañía constituida bajo las leyes
                  del Estado de Wyoming, Estados Unidos. Estos Términos de Uso ("Términos") rigen el
                  acceso y uso de la plataforma web Reliaplant, disponible en{" "}
                  <span className="font-medium">app.reliaplant.com</span>, y todos sus módulos y
                  servicios asociados (la "Plataforma").
                </p>
                <p>
                  Al acceder o utilizar la Plataforma, usted ("Usuario") acepta quedar vinculado por
                  estos Términos. Si actúa en representación de una empresa u organización, acepta
                  estos Términos en nombre de dicha entidad ("Organización") y declara tener
                  autorización para hacerlo.
                </p>
              </div>
            </section>

            <section id="aceptacion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                2. Aceptación de los términos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  El uso de la Plataforma constituye la aceptación plena e irrestricta de estos
                  Términos. Si no está de acuerdo con alguno de ellos, debe abstenerse de usar la
                  Plataforma.
                </p>
                <p>
                  Los menores de 18 años no pueden registrarse ni utilizar la Plataforma sin el
                  consentimiento expreso de un representante legal autorizado. El uso por parte de
                  personas menores de 13 años está estrictamente prohibido.
                </p>
              </div>
            </section>

            <section id="registro" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                3. Registro y cuenta de usuario
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Para acceder a las funcionalidades de la Plataforma, deberá crear una cuenta. Al
                  registrarse, se compromete a:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proporcionar información veraz, precisa y completa.</li>
                  <li>Mantener actualizada su información de cuenta en todo momento.</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                  <li>
                    Notificar de inmediato a{" "}
                    <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                      contacto@reliaplant.com
                    </a>{" "}
                    ante cualquier acceso no autorizado a su cuenta.
                  </li>
                </ul>
                <p>
                  Cada cuenta es personal e intransferible. Usted es el único responsable de todas
                  las actividades realizadas desde su cuenta, con o sin su conocimiento.
                </p>
              </div>
            </section>

            <section id="prohibiciones" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                4. Conductas prohibidas
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Al usar la Plataforma, usted se compromete a no:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Compartir sus credenciales de acceso con otras personas.</li>
                  <li>Utilizar la Plataforma para fines ilegales o no autorizados.</li>
                  <li>
                    Intentar acceder a áreas restringidas del sistema, datos de otras Organizaciones
                    o infraestructura de Reliaplant.
                  </li>
                  <li>
                    Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de
                    la Plataforma.
                  </li>
                  <li>
                    Cargar contenido malicioso, virus o código diseñado para interrumpir el
                    funcionamiento del servicio.
                  </li>
                  <li>
                    Realizar scraping, extracción masiva de datos o uso de bots automatizados sin
                    autorización expresa por escrito de Reliaplant.
                  </li>
                  <li>
                    Revender, sublicenciar o comercializar el acceso a la Plataforma sin
                    autorización escrita de Reliaplant.
                  </li>
                </ul>
                <p>
                  El incumplimiento de estas prohibiciones podrá resultar en la suspensión o
                  cancelación inmediata de la cuenta, sin perjuicio de las acciones legales que
                  correspondan.
                </p>
              </div>
            </section>

            {/* SECTIONS 5-19 — added in subsequent tasks */}

          </article>
        </div>
      </div>
    </>
  );
}

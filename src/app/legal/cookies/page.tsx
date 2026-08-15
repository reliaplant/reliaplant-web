import { Metadata } from "next";
import CookiesTOC from "./CookiesTOC";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de Cookies | Reliaplant" },
  description:
    "Política de cookies de Reliaplant. Conozca qué cookies utilizamos, con qué propósito y cómo gestionarlas.",
};

export default function PoliticaCookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-400 font-medium uppercase tracking-wide text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-white/60 text-sm">
            Última actualización: 1 de agosto de 2026 · Vigente desde esa fecha
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto py-12">
        <div className="lg:flex lg:gap-16">

          <CookiesTOC />

          {/* Content */}
          <article className="flex-1 min-w-0 max-w-7xl">

            <section id="introduccion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                1. Introducción
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Esta Política de Cookies explica qué cookies y tecnologías similares utiliza
                  Reliaplant LLC (&quot;Reliaplant&quot;, &quot;nosotros&quot;) en{" "}
                  <a
                    href="https://reliaplant.com"
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    reliaplant.com
                  </a>{" "}
                  y{" "}
                  <a
                    href="https://app.reliaplant.com"
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    app.reliaplant.com
                  </a>{" "}
                  (conjuntamente, la &quot;Plataforma&quot;), con qué propósito, y qué opciones tiene
                  usted al respecto.
                </p>
                <p>
                  Esta política complementa nuestra{" "}
                  <Link href="/legal/privacidad" className="text-blue-600 hover:underline font-medium">
                    Política de Privacidad
                  </Link>. Los términos en mayúscula no definidos aquí tienen el significado
                  establecido en dicho documento.
                </p>
              </div>
            </section>

            <section id="que-son" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                2. Qué son las cookies
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Las cookies son pequeños archivos de texto que un sitio web guarda en su
                  navegador al visitarlo. Permiten que el sitio recuerde información sobre su
                  visita, como su idioma preferido o si ha iniciado sesión, y nos ayudan a
                  entender cómo se usa el sitio.
                </p>
              </div>
            </section>

            <section id="tipos" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                3. Cookies que utilizamos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <h3 className="font-semibold text-gray-900 mt-4">3.1 Cookies esenciales</h3>
                <p>
                  Necesarias para el funcionamiento básico de la Plataforma: autenticación,
                  seguridad de la sesión y preferencias indispensables. No se pueden desactivar
                  porque el sitio no funcionaría correctamente sin ellas.
                </p>

                <h3 className="font-semibold text-gray-900 mt-4">3.2 Cookies de analítica y medición</h3>
                <p>
                  Utilizamos <strong>Google Analytics (GA4)</strong>, gestionado a través de{" "}
                  <strong>Google Tag Manager</strong>, para entender cómo los visitantes usan
                  <span> </span>reliaplant.com: páginas vistas, tiempo en el sitio, origen del
                  tráfico y patrones de navegación agregados. Estas cookies (por ejemplo{" "}
                  <code className="text-xs bg-gray-100 px-1 py-0.5">_ga</code>,{" "}
                  <code className="text-xs bg-gray-100 px-1 py-0.5">_ga_*</code>,{" "}
                  <code className="text-xs bg-gray-100 px-1 py-0.5">_gid</code>) nos
                  permiten mejorar el contenido y la experiencia del sitio.
                </p>
                <p>
                  En <strong>app.reliaplant.com</strong>, el mismo Measurement ID de GA4 se
                  reporta mediante el SDK de Firebase Analytics (no cookies de navegador
                  tradicionales), con el fin de mantener continuidad de medición entre ambos
                  dominios y registrar eventos de producto (inicio de sesión, uso de módulos).
                </p>

                <h3 className="font-semibold text-gray-900 mt-4">3.3 Cookies de publicidad / conversión</h3>
                <p>
                  Cuando ejecutemos campañas de <strong>Google Ads</strong>, usaremos Google Tag
                  Manager para desplegar etiquetas de conversión que nos permitan medir la
                  efectividad de esas campañas (por ejemplo, si un clic en un anuncio resultó en
                  una solicitud de demo). Estas etiquetas pueden establecer cookies adicionales de
                  Google Ads. Esta sección se actualizará cuando dichas campañas estén activas.
                </p>
              </div>
            </section>

            <section id="terceros" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                4. Cookies de terceros
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Las cookies de analítica y publicidad descritas arriba son colocadas por{" "}
                  <strong>Google LLC</strong> a través de Google Tag Manager, Google Analytics y,
                  en el futuro, Google Ads. Google procesa esta información conforme a sus propias
                  políticas de privacidad. No compartimos con Google ningún dato personal
                  identificable más allá de lo que estas herramientas recogen automáticamente
                  (IP, dispositivo, comportamiento de navegación).
                </p>
              </div>
            </section>

            <section id="base-legal" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                5. Base legal según su ubicación
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>El tratamiento de datos mediante cookies varía según su jurisdicción:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>México y la mayoría de países de Latinoamérica:</strong> nuestra base
                    legal es informarle de manera clara sobre el uso de cookies, conforme a la
                    Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                    y normativas equivalentes.
                  </li>
                  <li>
                    <strong>Estados Unidos:</strong> bajo leyes estatales de privacidad (como la
                    CCPA/CPRA de California y leyes similares en otros estados), le informamos
                    sobre el uso de cookies de analítica y publicidad, y le ofrecemos un
                    mecanismo de exclusión — ver sección 7.
                  </li>
                  <li>
                    <strong>Brasil (LGPD) y usuarios de la Unión Europea/Reino Unido:</strong> si
                    su navegación está sujeta a estas normativas, las cookies no esenciales
                    (analítica, publicidad) solo se activan con su consentimiento previo.
                  </li>
                </ul>
              </div>
            </section>

            <section id="gestionar" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                6. Cómo gestionar las cookies
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Puede administrar o eliminar cookies desde la configuración de su navegador. La
                  mayoría de navegadores le permiten:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ver qué cookies tiene almacenadas y eliminarlas individualmente.</li>
                  <li>Bloquear cookies de terceros.</li>
                  <li>Bloquear cookies de sitios específicos.</li>
                  <li>Bloquear todas las cookies (esto puede afectar el funcionamiento de la Plataforma).</li>
                </ul>
                <p>
                  También puede inhabilitar Google Analytics específicamente instalando el{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    complemento de inhabilitación para navegadores de Google Analytics
                  </a>.
                </p>
              </div>
            </section>

            <section id="no-vender" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                7. Residentes de California (CCPA/CPRA)
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Si usted es residente de California, tiene derecho a solicitar que no
                  compartamos su información personal con fines de publicidad dirigida (lo que
                  la CCPA/CPRA denomina &quot;compartir&quot; datos para publicidad
                  contextual-cruzada), incluyendo el uso de cookies de Google Ads.
                </p>
                <p>
                  Para ejercer esta opción, escríbanos a{" "}
                  <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                    contacto@reliaplant.com
                  </a>{" "}
                  con el asunto &quot;No vender/compartir mi información&quot; y procesaremos su
                  solicitud en un plazo razonable.
                </p>
              </div>
            </section>

            <section id="cambios" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                8. Cambios a esta política
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Podemos actualizar esta Política de Cookies cuando cambien las herramientas o
                  cookies que utilizamos, por ejemplo al activar campañas de Google Ads. La fecha
                  de &quot;última actualización&quot; en la parte superior refleja la versión vigente.
                </p>
              </div>
            </section>

            <section id="contacto" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                9. Contacto
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Para consultas sobre esta Política de Cookies, puede contactarnos en:
                </p>
                <div className="bg-gray-50 border border-gray-300 p-5">
                  <p className="font-semibold text-gray-900 mb-1">Reliaplant LLC</p>
                  <p>
                    <a
                      href="mailto:contacto@reliaplant.com"
                      className="text-blue-600 hover:underline"
                    >
                      contacto@reliaplant.com
                    </a>
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    Fecha de última actualización: 1 de agosto de 2026
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}

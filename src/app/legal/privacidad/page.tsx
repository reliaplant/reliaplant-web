import { Metadata } from "next";
import PoliticaTOC from "./PoliticaTOC";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad | Reliaplant" },
  description:
    "Política de privacidad de Reliaplant. Conozca cómo recopilamos, usamos y protegemos sus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-400 font-medium uppercase tracking-wide text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-white/60 text-sm">
            Última actualización: 28 de febrero de 2026 · Vigente desde esa fecha
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="lg:flex lg:gap-16">

          <PoliticaTOC />

          {/* Content */}
          <article className="flex-1 min-w-0 max-w-3xl">

            <section id="introduccion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                1. Introducción
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant LLC (&quot;Reliaplant&quot;, &quot;nosotros&quot;) se compromete a proteger la privacidad
                  de los usuarios de su plataforma web disponible en{" "}
                  <a
                    href="https://app.reliaplant.com"
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    app.reliaplant.com
                  </a>{" "}
                  y el sitio web{" "}
                  <a
                    href="https://reliaplant.com"
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    reliaplant.com
                  </a>{" "}
                  (conjuntamente, la &quot;Plataforma&quot;).
                </p>
                <p>
                  Esta Política de Privacidad describe qué datos personales recopilamos, cómo los
                  usamos, con quién los compartimos y cuáles son sus derechos. Al utilizar la
                  Plataforma, usted acepta las prácticas descritas en este documento.
                </p>
                <p>
                  Esta política complementa nuestros{" "}
                  <Link href="/terminos-de-uso" className="text-blue-600 hover:underline font-medium">
                    Términos de Uso
                  </Link>. Los términos en mayúscula no definidos aquí tienen el significado
                  establecido en dichos Términos.
                </p>
              </div>
            </section>

            <section id="responsable" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                2. Responsable del tratamiento
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <div className="bg-gray-50 border border-gray-200 p-5">
                  <p className="font-semibold text-gray-900 mb-1">Reliaplant LLC</p>
                  <p>Compañía constituida bajo las leyes del Estado de Wyoming, Estados Unidos.</p>
                  <p className="mt-2">
                    Correo de contacto:{" "}
                    <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                      contacto@reliaplant.com
                    </a>
                  </p>
                </div>
                <p>
                  Reliaplant actúa como responsable del tratamiento respecto a los datos personales
                  de los Usuarios, y como procesador de datos respecto a la información operativa
                  ingresada por las Organizaciones en la Plataforma.
                </p>
              </div>
            </section>

            <section id="datos-recopilados" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                3. Datos que recopilamos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Recopilamos las siguientes categorías de información:</p>

                <h3 className="font-semibold text-gray-900 mt-4">3.1 Datos proporcionados por el Usuario</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Datos de registro:</strong> nombre completo, correo electrónico, contraseña cifrada, nombre de la organización, cargo o rol.</li>
                  <li><strong>Datos de facturación:</strong> dirección fiscal, información de la empresa (razón social, RFC/NIT/RUT según aplique). Los datos de tarjeta de crédito son procesados directamente por nuestro proveedor de pagos y nunca se almacenan en nuestros servidores.</li>
                  <li><strong>Datos de soporte:</strong> mensajes, archivos adjuntos y contenido enviado a través de formularios de contacto o soporte técnico.</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">3.2 Datos operativos de la Organización</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Registros de activos, jerarquías de equipos, proyectos RCA, planes RCM y demás información técnica ingresada por los Usuarios en la Plataforma.</li>
                  <li>Estos datos son propiedad exclusiva de la Organización, conforme a la sección 11 de los Términos de Uso.</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">3.3 Datos recopilados automáticamente</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Datos de uso:</strong> páginas visitadas, funciones utilizadas, frecuencia y duración de sesiones.</li>
                  <li><strong>Datos del dispositivo:</strong> tipo de navegador, sistema operativo, resolución de pantalla, idioma del navegador.</li>
                  <li><strong>Datos de red:</strong> dirección IP, país de origen (geolocalización aproximada).</li>
                  <li><strong>Cookies y tecnologías similares:</strong> ver sección 11.</li>
                </ul>
              </div>
            </section>

            <section id="finalidades" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                4. Finalidades del tratamiento
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Utilizamos los datos personales para las siguientes finalidades:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Prestación del servicio:</strong> crear y administrar cuentas, proporcionar acceso a los módulos contratados y gestionar la suscripción.</li>
                  <li><strong>Facturación:</strong> procesar pagos, emitir comprobantes y gestionar cobros recurrentes.</li>
                  <li><strong>Soporte:</strong> responder consultas, resolver incidencias técnicas y brindar asistencia.</li>
                  <li><strong>Mejora del servicio:</strong> analizar patrones de uso (de forma agregada y anonimizada) para mejorar la experiencia del usuario y desarrollar nuevas funcionalidades.</li>
                  <li><strong>Comunicaciones:</strong> enviar notificaciones sobre el servicio (cambios en planes, mantenimiento programado, actualizaciones relevantes). No enviamos correos de marketing sin consentimiento previo.</li>
                  <li><strong>Seguridad:</strong> detectar y prevenir fraude, uso indebido o acceso no autorizado a la Plataforma.</li>
                  <li><strong>Cumplimiento legal:</strong> cumplir con obligaciones legales, fiscales o regulatorias aplicables.</li>
                </ol>
              </div>
            </section>

            <section id="base-legal" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                5. Base legal
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>El tratamiento de datos se fundamenta en las siguientes bases legales:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Ejecución del contrato:</strong> el tratamiento es necesario para la prestación del servicio contratado (Términos de Uso).</li>
                  <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales y el uso de cookies no esenciales.</li>
                  <li><strong>Interés legítimo:</strong> para la mejora del servicio, seguridad de la Plataforma y prevención de fraude.</li>
                  <li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones fiscales y regulatorias.</li>
                </ul>
              </div>
            </section>

            <section id="ia" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                6. Datos y el Asistente IA
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  La Plataforma incluye funcionalidades de inteligencia artificial (&quot;Asistente IA&quot;)
                  que procesan datos proporcionados por el Usuario para generar sugerencias,
                  hipótesis y recomendaciones técnicas.
                </p>
                <div
                  role="note"
                  aria-label="Compromiso sobre datos e IA"
                  className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-600 p-3"
                >
                  <p><strong>Nuestro compromiso:</strong></p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Los datos enviados al Asistente IA se procesan <strong>exclusivamente</strong> para generar la respuesta solicitada.</li>
                    <li>No utilizamos los datos de los Usuarios para entrenar, mejorar o ajustar modelos de IA.</li>
                    <li>No compartimos datos del Asistente IA con terceros proveedores de IA para fines de entrenamiento.</li>
                    <li>Las consultas al Asistente IA no se almacenan más allá del tiempo necesario para generar la respuesta.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="compartir" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                7. Con quién compartimos datos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant <strong>no vende, alquila ni comercializa</strong> datos personales de
                  los Usuarios. Solo compartimos información con las siguientes categorías de
                  terceros, bajo obligaciones de confidencialidad:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Proveedores de infraestructura:</strong> servicios de alojamiento en la nube (Google Cloud Platform / Firebase) para el almacenamiento y procesamiento de datos.</li>
                  <li><strong>Procesador de pagos:</strong> para gestionar transacciones con tarjeta de crédito/débito de forma segura. Reliaplant no almacena datos de tarjeta.</li>
                  <li><strong>Proveedores de IA:</strong> para las funcionalidades del Asistente IA, bajo contratos que prohíben el uso de datos para entrenamiento de modelos.</li>
                  <li><strong>Herramientas de análisis:</strong> para analizar patrones de uso de forma agregada y anonimizada.</li>
                  <li><strong>Autoridades competentes:</strong> cuando sea requerido por ley, orden judicial o proceso legal aplicable.</li>
                </ul>
              </div>
            </section>

            <section id="retención" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                8. Retención de datos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Cuenta activa:</strong> los datos se conservan mientras la cuenta esté activa y el servicio esté vigente.</li>
                  <li><strong>Tras suspensión o cancelación:</strong> los datos operativos de la Organización se conservan durante <strong>90 días naturales</strong>. Transcurrido ese plazo, se eliminan de forma permanente e irrecuperable.</li>
                  <li><strong>Datos de facturación:</strong> se conservan por el período mínimo requerido por las leyes fiscales aplicables (generalmente 5 años).</li>
                  <li><strong>Datos anonimizados:</strong> pueden conservarse indefinidamente ya que no permiten identificar a ninguna persona u organización.</li>
                </ol>
                <div
                  role="note"
                  aria-label="Nota sobre exportación"
                  className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 p-3"
                >
                  <p>
                    <strong>Exportación:</strong> Antes de la cancelación de su cuenta, puede
                    solicitar la exportación de todos sus datos operativos en formatos estándar
                    (CSV, Excel).
                  </p>
                </div>
              </div>
            </section>

            <section id="seguridad" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                9. Seguridad
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger los datos
                  personales contra acceso no autorizado, pérdida, alteración o destrucción,
                  incluyendo:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cifrado en tránsito (TLS/HTTPS) y en reposo.</li>
                  <li>Contraseñas almacenadas con hash criptográfico irreversible.</li>
                  <li>Control de acceso basado en roles dentro de la Plataforma.</li>
                  <li>Aislamiento lógico de datos entre Organizaciones.</li>
                  <li>Monitoreo de actividad sospechosa y registros de auditoría.</li>
                  <li>Copias de seguridad automáticas con redundancia geográfica.</li>
                </ul>
                <p>
                  Ningún sistema es 100% seguro. Si detecta una vulnerabilidad o sospecha de un
                  acceso no autorizado, notifique de inmediato a{" "}
                  <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                    contacto@reliaplant.com
                  </a>.
                </p>
              </div>
            </section>

            <section id="derechos" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                10. Tus derechos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Dependiendo de la legislación aplicable a su jurisdicción, usted puede ejercer los
                  siguientes derechos respecto a sus datos personales:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre usted.</li>
                  <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                  <li><strong>Eliminación:</strong> solicitar la eliminación de sus datos personales, sujeto a obligaciones legales de retención.</li>
                  <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos para fines específicos.</li>
                  <li><strong>Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento, sin que esto afecte la licitud del tratamiento previo.</li>
                </ul>
                <p>
                  Para ejercer cualquiera de estos derechos, envíe un correo a{" "}
                  <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                    contacto@reliaplant.com
                  </a>{" "}
                  con el asunto &quot;Derechos de privacidad&quot;. Responderemos en un plazo máximo de 30
                  días naturales.
                </p>
              </div>
            </section>

            <section id="cookies" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                11. Cookies
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>La Plataforma utiliza cookies y tecnologías similares para:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cookies esenciales:</strong> necesarias para el funcionamiento de la
                    Plataforma (autenticación, seguridad, preferencias de sesión). No se pueden
                    desactivar.
                  </li>
                  <li>
                    <strong>Cookies de análisis:</strong> nos ayudan a comprender cómo se usa la
                    Plataforma para mejorar la experiencia. Se activan solo con su consentimiento.
                  </li>
                </ul>
                <p>
                  No utilizamos cookies con fines publicitarios ni de seguimiento entre sitios.
                  Puede gestionar las preferencias de cookies desde la configuración de su navegador.
                </p>
              </div>
            </section>

            <section id="menores" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                12. Menores de edad
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  La Plataforma no está dirigida a menores de 18 años. No recopilamos
                  intencionalmente datos de menores de 13 años. Si descubrimos que hemos recopilado
                  datos de un menor de 13 años sin consentimiento parental verificado, eliminaremos
                  dicha información de forma inmediata.
                </p>
                <p>
                  Si usted es padre, madre o tutor legal y cree que su hijo ha proporcionado datos
                  personales a Reliaplant, contáctenos a{" "}
                  <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                    contacto@reliaplant.com
                  </a>.
                </p>
              </div>
            </section>

            <section id="transferencias" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                13. Transferencias internacionales
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Sus datos pueden ser transferidos y procesados en servidores ubicados en Estados
                  Unidos u otras jurisdicciones donde operan nuestros proveedores de infraestructura.
                </p>
                <p>
                  Cuando sea necesario transferir datos fuera de su país de residencia, nos
                  aseguramos de que existan salvaguardas adecuadas, incluyendo cláusulas
                  contractuales estándar y medidas de seguridad técnicas apropiadas.
                </p>
              </div>
            </section>

            <section id="cambios" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                14. Cambios a esta política
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant se reserva el derecho de modificar esta Política de Privacidad en
                  cualquier momento. Cuando realicemos cambios materiales, le notificaremos con al
                  menos <strong>30 días de anticipación</strong> mediante correo electrónico al
                  email registrado en su cuenta o mediante un aviso destacado dentro de la
                  Plataforma.
                </p>
                <p>
                  El uso continuado de la Plataforma después de la fecha de vigencia de la nueva
                  política constituye la aceptación de los cambios.
                </p>
              </div>
            </section>

            <section id="contacto" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                15. Contacto
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Para consultas, reclamos o solicitudes relacionadas con esta Política de
                  Privacidad o el tratamiento de sus datos personales, puede contactarnos en:
                </p>
                <div className="bg-gray-50 border border-gray-200 p-5">
                  <p className="font-semibold text-gray-900 mb-1">Reliaplant LLC</p>
                  <p>
                    <a
                      href="mailto:contacto@reliaplant.com"
                      className="text-blue-600 hover:underline"
                    >
                      contacto@reliaplant.com
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Asunto sugerido: &quot;Privacidad — [su consulta]&quot;
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    Fecha de última actualización: 28 de febrero de 2026
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

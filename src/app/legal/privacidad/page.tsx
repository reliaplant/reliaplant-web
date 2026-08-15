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
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
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
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto py-12">
        <div className="lg:flex lg:gap-16">

          <PoliticaTOC />

          {/* Content */}
          <article className="flex-1 min-w-0 max-w-7xl">

            <section id="introduccion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                2. Responsable del tratamiento
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <div className="bg-gray-50 border border-gray-300 p-5">
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
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
                  <li><strong>Cookies y tecnologías similares:</strong> ver sección 15.</li>
                </ul>
              </div>
            </section>

            <section id="como-recopilamos" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                4. Cómo recopilamos sus datos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Obtenemos información personal a través de las siguientes vías:</p>

                <h3 className="font-semibold text-gray-900 mt-4">4.1 Directamente del Usuario</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Al crear una cuenta o registrarse en la Plataforma.</li>
                  <li>Al completar formularios de contacto, soporte o solicitud de demo.</li>
                  <li>Al ingresar datos operativos en los módulos de la Plataforma (RCA, RCM, Registro de Activos).</li>
                  <li>Al comunicarse con nuestro equipo por correo electrónico.</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">4.2 De forma automática</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cookies y tecnologías de seguimiento (ver sección 15).</li>
                  <li>Registros del servidor (logs) y datos de navegación.</li>
                  <li>Información del dispositivo y del navegador.</li>
                </ul>

                <h3 className="font-semibold text-gray-900 mt-4">4.3 De terceros</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Procesadores de pago, quienes confirman el estado de las transacciones (no recibimos datos completos de tarjeta).</li>
                  <li>Herramientas de análisis web que proporcionan datos agregados y anonimizados sobre el uso del sitio.</li>
                </ul>
              </div>
            </section>

            <section id="finalidades" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                5. Finalidades del tratamiento
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                6. Base legal
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                7. Datos y el Asistente IA
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

            <section id="marketing" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                8. Marketing y comunicaciones
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant podrá enviar comunicaciones comerciales (novedades de producto,
                  contenido educativo, ofertas) <strong>únicamente</strong> cuando el Usuario
                  haya otorgado su consentimiento expreso, ya sea al registrarse o mediante
                  una opción dedicada dentro de la Plataforma.
                </p>
                <h3 className="font-semibold text-gray-900 mt-4">Sus opciones</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cancelar suscripción:</strong> cada correo de marketing incluye un enlace para darse de baja de manera inmediata.</li>
                  <li><strong>Configuración de notificaciones:</strong> puede ajustar sus preferencias de comunicación desde la configuración de su cuenta en la Plataforma.</li>
                  <li><strong>Comunicaciones de servicio:</strong> los avisos transaccionales y de seguridad (cambios de plan, mantenimiento, alertas de seguridad) no se consideran marketing y se envían siempre que sean necesarios para la prestación del servicio.</li>
                </ul>
              </div>
            </section>

            <section id="compartir" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                9. Con quién compartimos datos
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

            <section id="almacenamiento" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                10. Almacenamiento de datos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Los datos personales y operativos se almacenan en servidores de{" "}
                  <strong>Google Cloud Platform (Firebase)</strong>, ubicados principalmente
                  en Estados Unidos, con redundancia geográfica para garantizar
                  disponibilidad y recuperación ante desastres.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cifrado en reposo:</strong> todos los datos se almacenan cifrados utilizando estándares AES-256.</li>
                  <li><strong>Cifrado en tránsito:</strong> todas las comunicaciones utilizan TLS 1.2 o superior.</li>
                  <li><strong>Aislamiento:</strong> los datos de cada Organización están lógicamente aislados y no son accesibles por otras Organizaciones.</li>
                  <li><strong>Respaldos:</strong> se realizan copias de seguridad automáticas con redundancia geográfica.</li>
                </ul>
              </div>
            </section>

            <section id="retencion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                11. Retención de datos
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                12. Seguridad
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                13. Derechos de protección de datos
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

            <section id="eliminacion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                14. Solicitud de eliminación
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Usted puede solicitar la eliminación de su cuenta y datos personales en
                  cualquier momento enviando un correo a{" "}
                  <a href="mailto:contacto@reliaplant.com" className="text-blue-600 hover:underline">
                    contacto@reliaplant.com
                  </a>{" "}
                  con el asunto &quot;Solicitud de eliminación&quot;.
                </p>
                <h3 className="font-semibold text-gray-900 mt-4">Proceso de eliminación</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Verificaremos su identidad como titular de la cuenta.</li>
                  <li>Confirmaremos la solicitud y le informaremos sobre las implicaciones.</li>
                  <li>Los datos operativos de la Organización se eliminarán en un plazo máximo de <strong>30 días</strong>.</li>
                  <li>Los datos de facturación se conservarán por el período legal requerido (ver sección 11).</li>
                </ol>
                <div
                  role="note"
                  aria-label="Nota importante sobre eliminación"
                  className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 p-3 mt-3"
                >
                  <p>
                    <strong>Importante:</strong> La eliminación de datos es permanente e irreversible.
                    Antes de solicitarla, recomendamos exportar toda la información que desee conservar.
                  </p>
                </div>
              </div>
            </section>

            <section id="cookies" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                15. Cookies
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
                    <strong>Cookies de análisis:</strong> Google Analytics (GA4), gestionado vía
                    Google Tag Manager, para entender el uso del sitio y mejorar la experiencia.
                  </li>
                  <li>
                    <strong>Cookies de publicidad/conversión:</strong> cuando ejecutemos campañas
                    de Google Ads, para medir su efectividad.
                  </li>
                </ul>
                <p>
                  Para el detalle completo de cookies utilizadas, sus proveedores y cómo
                  gestionarlas, consulte nuestra{" "}
                  <Link href="/legal/cookies" className="text-blue-600 hover:underline font-medium">
                    Política de Cookies
                  </Link>.
                </p>
              </div>
            </section>

            <section id="sitios-terceros" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                16. Sitios de terceros
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  La Plataforma puede contener enlaces a sitios web, servicios o recursos
                  de terceros que no son operados ni controlados por Reliaplant.
                </p>
                <p>
                  No somos responsables de las prácticas de privacidad, el contenido ni la
                  seguridad de dichos sitios. Le recomendamos revisar las políticas de
                  privacidad de cualquier sitio externo antes de proporcionar información
                  personal.
                </p>
                <p>
                  La inclusión de enlaces a terceros no implica respaldo, asociación ni
                  garantía alguna por parte de Reliaplant.
                </p>
              </div>
            </section>

            <section id="menores" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                17. Menores de edad
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                18. Transferencias internacionales
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

            <section id="autoridades" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                19. Solicitudes de autoridades
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant podrá divulgar datos personales cuando sea requerido por ley,
                  regulación, proceso judicial u orden gubernamental vinculante. En tales
                  casos:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Evaluaremos la legalidad y proporcionalidad de cada solicitud antes de responder.</li>
                  <li>Limitaremos la divulgación al mínimo de datos estrictamente necesario para cumplir con el requerimiento.</li>
                  <li>Notificaremos al Usuario afectado antes de la divulgación, excepto cuando esto esté legalmente prohibido.</li>
                  <li>Mantendremos un registro interno de todas las solicitudes recibidas y su resolución.</li>
                </ul>
              </div>
            </section>

            <section id="cambios" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                20. Cambios a esta política
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
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
                21. Contacto
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Para consultas, reclamos o solicitudes relacionadas con esta Política de
                  Privacidad o el tratamiento de sus datos personales, puede contactarnos en:
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

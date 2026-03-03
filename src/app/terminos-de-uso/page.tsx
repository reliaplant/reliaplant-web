import { Metadata } from "next";
import TerminosTOC from "./TerminosTOC";

export const metadata: Metadata = {
  title: { absolute: "Términos de Uso | Reliaplant" },
  description:
    "Términos y condiciones de uso de la plataforma Reliaplant. Conozca sus derechos y obligaciones como usuario.",
};

export default function TerminosDeUsoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-blue-900 text-white pt-32 pb-16">
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
      <div className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto py-12">
        <div className="lg:flex lg:gap-16">

          <TerminosTOC />

          {/* Content */}
          <article className="flex-1 min-w-0 max-w-5xl">

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
                  <a
                    href="https://app.reliaplant.com"
                    className="font-medium text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    app.reliaplant.com
                  </a>, y todos sus módulos y
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

            {/* ── BLOCK B: SERVICE CONDITIONS ───────────────────────── */}

            <section id="definiciones" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                5. Definiciones
              </h2>
              <dl className="bg-gray-50 border-l-4 border-gray-300 p-4 text-sm text-gray-700 space-y-1.5">
                <div className="flex gap-1"><dt><strong>"Plataforma"</strong></dt><dd>— la aplicación web Reliaplant y todos sus módulos.</dd></div>
                <div className="flex gap-1"><dt><strong>"Organización"</strong></dt><dd>— la entidad (empresa, planta o persona) titular de la cuenta.</dd></div>
                <div className="flex gap-1"><dt><strong>"Usuario"</strong></dt><dd>— cada persona con credenciales únicas de acceso a la Plataforma.</dd></div>
                <div className="flex gap-1"><dt><strong>"Activo"</strong></dt><dd>— cada equipo, componente o elemento registrado en el módulo de Taxonomía.</dd></div>
                <div className="flex gap-1"><dt><strong>"Planta"</strong></dt><dd>— cada unidad operativa, localidad o división configurada en la Organización.</dd></div>
                <div className="flex gap-1"><dt><strong>"Bloque adicional"</strong></dt><dd>— paquete de 50 activos contratado como extensión del plan base.</dd></div>
                <div className="flex gap-1"><dt><strong>"Asistente IA"</strong></dt><dd>— las funcionalidades de inteligencia artificial integradas en la Plataforma.</dd></div>
              </dl>
            </section>

            <section id="planes" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                6. Planes y suscripciones
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>La Plataforma está disponible en los siguientes planes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Gratuito</strong> — 1 usuario, 10 activos, 1 planta. Sin costo.</li>
                  <li><strong>Profesional</strong> — 1 usuario, 30 activos, 1 planta. $29/mes o $25/mes (anual).</li>
                  <li><strong>Equipo</strong> — hasta 5 usuarios, 100 activos, 1 planta. $99/mes o $84/mes (anual).</li>
                  <li><strong>Planta</strong> — hasta 15 usuarios, 500 activos, hasta 3 plantas. $245/mes o $208/mes (anual).</li>
                  <li>
                    <strong>Empresa</strong> — condiciones personalizadas. Contactar a{" "}
                    <a href="mailto:comercial@reliaplant.com" className="text-blue-600 hover:underline">
                      comercial@reliaplant.com
                    </a>.
                  </li>
                </ul>
                <p>
                  Todos los precios están expresados en dólares estadounidenses (USD) e incluyen el
                  Asistente IA sin costo adicional. Reliaplant se reserva el derecho de modificar
                  los precios con al menos 30 días de anticipación.
                </p>
                <div
                  role="note"
                  aria-label="Nota sobre descuento anual"
                  className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-600 p-3"
                >
                  <p>
                    <strong>Descuento anual:</strong> Al elegir facturación anual, obtiene un 15% de
                    descuento sobre el precio mensual. El descuento aplica también a los bloques de
                    activos adicionales.
                  </p>
                </div>
              </div>
            </section>

            <section id="limites" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                7. Límites y uso aceptable
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Usuarios:</strong> Cada usuario debe corresponder a una persona física
                    identificable. No se permite compartir credenciales entre varias personas.
                  </li>
                  <li>
                    <strong>Activos:</strong> Al alcanzar el límite del plan, no se podrán registrar
                    nuevos activos hasta contratar un bloque adicional o cambiar a un plan superior.
                    Los activos existentes no se eliminan.
                  </li>
                  <li>
                    <strong>Proyectos RCA y planes RCM:</strong> Ilimitados en todos los planes
                    pagos. El plan Gratuito permite un máximo de 5 proyectos RCA y 5 planes RCM
                    activos simultáneamente.
                  </li>
                  <li>
                    <strong>Almacenamiento:</strong> Los límites aplican a archivos adjuntos cargados
                    a la Plataforma (500 MB Gratuito · 2 GB Profesional · 10 GB Equipo · 50 GB
                    Planta). No incluyen los datos estructurados de la aplicación.
                  </li>
                  <li>
                    <strong>Asistente IA:</strong> Incluido en todos los planes sin costo adicional.
                    Reliaplant se reserva el derecho de implementar límites razonables en caso de uso
                    excesivo que afecte a otros usuarios.
                  </li>
                </ol>
              </div>
            </section>

            <section id="bloques" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                8. Bloques de activos adicionales
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Los planes <strong>Equipo</strong> y <strong>Planta</strong> permiten ampliar la
                  capacidad de activos mediante bloques adicionales de 50 activos a un precio de{" "}
                  <strong>$25 USD/mes</strong> por bloque (con descuento del 15% en facturación
                  anual).
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Contratación:</strong> Se pueden agregar bloques en cualquier momento.
                    La facturación se prorratea al ciclo de facturación vigente.
                  </li>
                  <li>
                    <strong>Remoción:</strong> La remoción de bloques se efectúa al inicio del
                    siguiente ciclo de facturación. Los activos existentes no se eliminan, pero no se
                    podrán registrar nuevos hasta estar dentro del nuevo límite.
                  </li>
                  <li>
                    <strong>Disponibilidad:</strong> Exclusivamente para los planes Equipo y Planta.
                  </li>
                </ol>
              </div>
            </section>

            <section id="facturacion" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                9. Facturación y métodos de pago
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Los métodos de pago aceptados varían según el plan:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Profesional:</strong> Tarjeta de crédito/débito.</li>
                  <li><strong>Equipo:</strong> Tarjeta de crédito/débito · Transferencia bancaria.</li>
                  <li><strong>Planta:</strong> Tarjeta de crédito/débito · Transferencia bancaria · Orden de compra.</li>
                  <li><strong>Empresa:</strong> Facturación corporativa personalizada.</li>
                </ul>
                <p>
                  Los cargos se realizan al inicio de cada período de facturación. En caso de pago
                  con tarjeta, la suscripción se renueva automáticamente salvo cancelación previa.
                  Las comisiones por transacciones internacionales son responsabilidad del Usuario.
                </p>
              </div>
            </section>

            <section id="suspension" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                10. Suspensión, cancelación y reembolsos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Falta de pago:</strong> Ante un fallo en el cobro, la Organización
                    tendrá un período de gracia de 7 días naturales para regularizar el pago. Si no
                    se regulariza, el acceso se suspende de forma inmediata. La cuenta{" "}
                    <strong>no</strong> se convierte al plan Gratuito.
                  </li>
                  <li>
                    <strong>No renovación:</strong> El acceso se suspende al finalizar el período
                    pagado. La cuenta no se degrada al plan Gratuito.
                  </li>
                  <li>
                    <strong>Cancelación voluntaria:</strong> El acceso se mantiene hasta el final del
                    período de facturación pagado.
                  </li>
                  <li>
                    <strong>Reembolsos (mensual):</strong> No se realizan reembolsos por períodos
                    parciales en facturación mensual.
                  </li>
                  <li>
                    <strong>Reembolsos (anual):</strong> Cancelación dentro de los primeros 30
                    días: reembolso proporcional a los meses no utilizados. Después de 30 días, no
                    se realizan reembolsos.
                  </li>
                  <li>
                    <strong>Conservación de datos:</strong> Los datos se conservarán durante{" "}
                    <strong>90 días naturales</strong> tras la suspensión. Transcurrido ese plazo,
                    se eliminan de forma permanente e irrecuperable.
                  </li>
                </ol>
                <div
                  role="note"
                  aria-label="Nota sobre reactivación"
                  className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 p-3"
                >
                  <p>
                    <strong>Reactivación:</strong> Dentro de los 90 días posteriores a la
                    suspensión, puede reactivar su suscripción paga y recuperar el acceso a todos
                    sus datos tal como los dejó.
                  </p>
                </div>
              </div>
            </section>

            <section id="datos" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                11. Propiedad de los datos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Propiedad:</strong> Todos los datos ingresados son propiedad exclusiva de
                    la Organización. Reliaplant actúa únicamente como procesador de datos.
                  </li>
                  <li>
                    <strong>Uso de datos:</strong> Reliaplant no compartirá, venderá ni utilizará los
                    datos para fines distintos a la prestación del servicio contratado.
                  </li>
                  <li>
                    <strong>Datos anonimizados:</strong> Reliaplant podrá utilizar datos agregados y
                    anonimizados con fines estadísticos y de mejora del servicio, sin que sea posible
                    identificar a ninguna Organización o Usuario.
                  </li>
                  <li>
                    <strong>Asistente IA:</strong> Los datos enviados al Asistente IA se procesan
                    exclusivamente para generar las respuestas solicitadas. No se utilizan para
                    entrenar modelos ni se comparten con terceros.
                  </li>
                </ol>
              </div>
            </section>

            <section id="disponibilidad" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                12. Disponibilidad del servicio
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>SLA:</strong> 99.5% de disponibilidad mensual para todos los planes
                    pagos. El plan Gratuito no tiene SLA garantizado.
                  </li>
                  <li>
                    <strong>Mantenimiento:</strong> Los períodos de mantenimiento programado se
                    notificarán con al menos 48 horas de anticipación.
                  </li>
                  <li>
                    <strong>Soporte:</strong> En español e inglés, lunes a viernes de 9:00 a 18:00
                    (GMT-6). Tiempo de respuesta: 72 h (Gratuito) · 48 h (Profesional / Equipo) ·
                    24 h (Planta).
                  </li>
                </ol>
              </div>
            </section>

            <section id="modificaciones-planes" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                13. Modificaciones a los planes
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Cambios de precios:</strong> Se notificarán con al menos 30 días de
                    anticipación. Las suscripciones anuales vigentes mantienen su precio hasta la
                    siguiente renovación.
                  </li>
                  <li>
                    <strong>Cambios de funcionalidades:</strong> Se notificará a los usuarios
                    afectados con al menos 15 días de anticipación.
                  </li>
                  <li>
                    <strong>Nuevos módulos:</strong> Su inclusión en los planes existentes no está
                    garantizada. Las condiciones se comunicarán al momento de su lanzamiento.
                  </li>
                </ol>
              </div>
            </section>

            <section id="plan-gratuito" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                14. Plan Gratuito — condiciones especiales
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Reliaplant se reserva el derecho de limitar funcionalidades o descontinuar el
                    plan Gratuito con al menos 60 días de anticipación.
                  </li>
                  <li>
                    Las cuentas gratuitas inactivas por más de 180 días podrán ser desactivadas
                    previo aviso de 30 días.
                  </li>
                  <li>
                    El plan Gratuito no incluye SLA garantizado, soporte prioritario ni facturación
                    por orden de compra.
                  </li>
                </ol>
              </div>
            </section>

            {/* ── BLOCK C: GENERAL LEGAL CLAUSES ────────────────────── */}

            <section id="propiedad-intelectual" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                15. Propiedad intelectual
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Todo el software, diseño, interfaz, marca, nombre comercial, logotipos, textos y
                  demás contenido de la Plataforma son propiedad exclusiva de Reliaplant LLC y están
                  protegidos por las leyes de propiedad intelectual aplicables.
                </p>
                <p>
                  Se le otorga una licencia limitada, no exclusiva, no transferible y revocable para
                  usar la Plataforma únicamente para los fines comerciales internos de su
                  Organización. Esta licencia no le otorga ningún derecho de propiedad sobre la
                  Plataforma ni su contenido.
                </p>
                <p>
                  Los datos ingresados por la Organización son y permanecen propiedad exclusiva de
                  la Organización, conforme a lo establecido en la sección 11.
                </p>
              </div>
            </section>

            <section id="responsabilidad" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                16. Limitación de responsabilidad
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  La Plataforma se proporciona "tal como está" y "según disponibilidad". Reliaplant
                  no ofrece garantías de ningún tipo, ya sean expresas o implícitas, respecto a la
                  exactitud, confiabilidad, disponibilidad o idoneidad para un propósito particular.
                </p>
                <p>
                  En la máxima medida permitida por la ley aplicable, Reliaplant no será responsable
                  por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados
                  del uso o la imposibilidad de uso de la Plataforma.
                </p>
                <p>
                  La responsabilidad máxima total de Reliaplant ante la Organización, por cualquier
                  causa y bajo cualquier teoría legal, se limitará a los importes efectivamente
                  pagados por la Organización durante los tres (3) meses anteriores al evento que
                  originó la reclamación.
                </p>
              </div>
            </section>

            <section id="ley-aplicable" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                17. Ley aplicable y jurisdicción
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Estos Términos se rigen e interpretan de conformidad con las leyes del Estado de
                  Wyoming, Estados Unidos, sin perjuicio de sus disposiciones sobre conflicto de
                  leyes.
                </p>
                <p>
                  Cualquier disputa, controversia o reclamación derivada de o relacionada con estos
                  Términos o el uso de la Plataforma se someterá a la jurisdicción exclusiva de los
                  tribunales competentes del Estado de Wyoming, Estados Unidos.
                </p>
              </div>
            </section>

            <section id="cambios-terminos" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                18. Cambios a estos términos
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Reliaplant se reserva el derecho de modificar estos Términos en cualquier momento.
                  Cuando realicemos cambios materiales, le notificaremos con al menos{" "}
                  <strong>30 días de anticipación</strong> mediante correo electrónico al email
                  registrado en su cuenta o mediante un aviso destacado dentro de la Plataforma.
                </p>
                <p>
                  El uso continuado de la Plataforma después de la fecha de vigencia de los nuevos
                  Términos constituye la aceptación de los cambios. Si no está de acuerdo con los
                  cambios, debe cancelar su suscripción antes de la fecha de vigencia.
                </p>
              </div>
            </section>

            <section id="contacto" className="mb-12 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                19. Contacto
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Para consultas, reclamos o notificaciones relacionadas con estos Términos, puede
                  contactarnos en:
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
